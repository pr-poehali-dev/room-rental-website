import json
import os
from datetime import datetime
import urllib.request
import urllib.error
import psycopg2

def save_booking_to_db(room: str, date: str, time: str, name: str, phone: str, comment: str) -> bool:
    '''Сохранение бронирования в базу данных'''
    try:
        db_url = os.environ.get('DATABASE_URL')
        if not db_url:
            return False
        
        conn = psycopg2.connect(db_url)
        cursor = conn.cursor()
        
        cursor.execute(
            "INSERT INTO bookings (room_name, booking_date, booking_time, client_name, client_phone, comment) VALUES (%s, %s, %s, %s, %s, %s)",
            (room, date, time, name, phone, comment)
        )
        
        conn.commit()
        cursor.close()
        conn.close()
        return True
    except Exception as e:
        print(f"Database error: {e}")
        return False

def handler(event: dict, context) -> dict:
    '''Отправка уведомления о бронировании кабинета в Telegram и сохранение в БД'''
    
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    try:
        data = json.loads(event.get('body', '{}'))
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Invalid JSON'})
        }
    
    room = data.get('room', 'Не указан')
    date = data.get('date', 'Не указана')
    time = data.get('time', 'Не указано')
    name = data.get('name', 'Не указано')
    phone = data.get('phone', 'Не указан')
    comment = data.get('comment', '')
    
    # Сохранение бронирования в базу данных
    db_saved = save_booking_to_db(room, date, time, name, phone, comment)
    
    # Если Telegram не настроен, возвращаем успех с сохранением в БД
    if not bot_token or not chat_id:
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'db_saved': db_saved,
                'telegram_sent': False,
                'message': 'Booking saved to database'
            })
        }
    
    message = f"""🏥 Новое бронирование кабинета!

📍 Кабинет: {room}
📅 Дата: {date}
⏰ Время: {time}

👤 Имя: {name}
📞 Телефон: {phone}"""
    
    if comment:
        message += f"\n💬 Комментарий: {comment}"
    
    message += f"\n\n⏱ Заявка от: {datetime.now().strftime('%d.%m.%Y %H:%M')}"
    
    telegram_url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    payload = {
        'chat_id': chat_id,
        'text': message,
        'parse_mode': 'HTML'
    }
    
    try:
        req = urllib.request.Request(
            telegram_url,
            data=json.dumps(payload).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        
        with urllib.request.urlopen(req, timeout=10) as response:
            result = json.loads(response.read().decode('utf-8'))
            
            if result.get('ok'):
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({
                        'success': True, 
                        'telegram_sent': True,
                        'db_saved': db_saved,
                        'message': 'Booking saved and sent to Telegram'
                    })
                }
            else:
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({
                        'success': True,
                        'db_saved': db_saved,
                        'telegram_sent': False,
                        'telegram_error': result,
                        'message': 'Booking saved to database, Telegram notification failed'
                    })
                }
    
    except urllib.error.HTTPError as e:
        error_body = e.read().decode('utf-8')
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'db_saved': db_saved,
                'telegram_sent': False,
                'message': 'Booking saved to database, Telegram notification failed'
            })
        }
    except Exception as e:
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'db_saved': db_saved,
                'telegram_sent': False,
                'message': 'Booking saved to database, Telegram notification failed'
            })
        }
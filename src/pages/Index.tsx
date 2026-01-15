import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const rooms = [
  {
    id: 1,
    name: 'Кабинет №1 - Массаж',
    description: 'Просторный кабинет с массажным столом, мягким освещением и расслабляющей атмосферой.',
    image: 'https://cdn.poehali.dev/projects/ea4d8b0d-a1e8-4e81-a0fc-66a8e70e997f/files/b3fadf66-3dc6-4f9e-9a0f-7bc97af10196.jpg',
    features: ['Массажный стол', 'Кондиционер', 'Звукоизоляция', 'Санузел'],
    price: '1500 ₽/час'
  },
  {
    id: 2,
    name: 'Кабинет №2 - Консультации',
    description: 'Уютное пространство для психологических консультаций с комфортной мебелью.',
    image: 'https://cdn.poehali.dev/projects/ea4d8b0d-a1e8-4e81-a0fc-66a8e70e997f/files/65ef026a-8662-4e0c-8423-f4c82e9c965c.jpg',
    features: ['Диван и кресла', 'Рабочий стол', 'Wi-Fi', 'Кондиционер'],
    price: '1200 ₽/час'
  },
  {
    id: 3,
    name: 'Кабинет №3 - Детский',
    description: 'Светлый кабинет для работы с детьми, оборудованный игровой зоной.',
    image: 'https://cdn.poehali.dev/projects/ea4d8b0d-a1e8-4e81-a0fc-66a8e70e997f/files/34cb1d8b-cb9a-4237-ae2e-7baaad0187c1.jpg',
    features: ['Игровая зона', 'Мебель для детей', 'Материалы для творчества', 'Безопасное пространство'],
    price: '1300 ₽/час'
  }
];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
];

const testimonials = [
  {
    name: 'Елена Р.',
    profession: 'Массажист',
    text: 'Отличные кабинеты! Чистота, комфорт, всё необходимое оборудование. Клиенты в восторге от атмосферы.',
    rating: 5
  },
  {
    name: 'Михаил К.',
    profession: 'Психолог',
    text: 'Арендую кабинет уже полгода. Удобное расположение, профессиональная обстановка, разумная цена.',
    rating: 5
  },
  {
    name: 'Анна С.',
    profession: 'Детский психолог',
    text: 'Детский кабинет идеально подходит для занятий. Дети чувствуют себя комфортно и безопасно.',
    rating: 5
  }
];

export default function Index() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedRoom, setSelectedRoom] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBooking = async () => {
    if (!selectedRoom || !selectedTime || !date || !name || !phone) {
      alert('Пожалуйста, заполните все обязательные поля');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/f59920c7-74d6-4e57-aa7b-365595d411cc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          room: selectedRoom,
          date: date.toLocaleDateString('ru-RU'),
          time: selectedTime,
          name,
          phone,
          comment
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert('✅ Бронирование успешно отправлено! Мы свяжемся с вами в ближайшее время.');
        setSelectedRoom('');
        setSelectedTime('');
        setName('');
        setPhone('');
        setComment('');
        setDate(new Date());
      } else {
        alert('❌ Ошибка при отправке. Попробуйте позже или позвоните нам.');
      }
    } catch (error) {
      alert('❌ Ошибка соединения. Проверьте интернет и попробуйте снова.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Home" className="text-primary" size={28} />
            <span className="text-xl font-semibold">Кабинеты в аренду</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#rooms" className="text-sm font-medium hover:text-primary transition-colors">Кабинеты</a>
            <a href="#booking" className="text-sm font-medium hover:text-primary transition-colors">Бронирование</a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Галерея</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Профессиональные кабинеты для специалистов
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Уютное пространство для массажистов, психологов и логопедов. Почасовая аренда, всё включено.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Calendar" size={20} className="mr-2" />
              Забронировать
            </Button>
            <Button size="lg" variant="outline" className="text-lg" onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}>
              Посмотреть кабинеты
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-accent/20">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="MapPin" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold">Центр города</h3>
              <p className="text-sm text-muted-foreground">Удобная транспортная доступность</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold">Гибкий график</h3>
              <p className="text-sm text-muted-foreground">Аренда от 1 часа с 9:00 до 21:00</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold">Безопасность</h3>
              <p className="text-sm text-muted-foreground">Охрана и видеонаблюдение</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Coffee" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold">Всё включено</h3>
              <p className="text-sm text-muted-foreground">Интернет, чай, кофе бесплатно</p>
            </div>
          </div>
        </div>
      </section>

      <section id="rooms" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Наши кабинеты</h2>
          <p className="text-center text-muted-foreground mb-12">Выберите подходящее пространство для вашей работы</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{room.name}</span>
                  </CardTitle>
                  <CardDescription>{room.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{room.price}</span>
                    <Button onClick={() => {
                      setSelectedRoom(room.name);
                      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                      Забронировать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Бронирование</h2>
          <p className="text-center text-muted-foreground mb-12">Выберите удобное время и дату</p>
          
          <Card className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Label className="text-base mb-3 block">Выберите дату</Label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border mx-auto"
                  disabled={(date) => date < new Date()}
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="room" className="text-base mb-2 block">Выберите кабинет</Label>
                  <Select value={selectedRoom} onValueChange={setSelectedRoom}>
                    <SelectTrigger id="room">
                      <SelectValue placeholder="Кабинет..." />
                    </SelectTrigger>
                    <SelectContent>
                      {rooms.map((room) => (
                        <SelectItem key={room.id} value={room.name}>
                          {room.name} - {room.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="time" className="text-base mb-2 block">Выберите время</Label>
                  <Select value={selectedTime} onValueChange={setSelectedTime}>
                    <SelectTrigger id="time">
                      <SelectValue placeholder="Время..." />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="name" className="text-base mb-2 block">Ваше имя</Label>
                  <Input id="name" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base mb-2 block">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div>
                  <Label htmlFor="comment" className="text-base mb-2 block">Комментарий</Label>
                  <Textarea id="comment" placeholder="Дополнительная информация..." rows={3} value={comment} onChange={(e) => setComment(e.target.value)} />
                </div>

                <Button className="w-full" size="lg" onClick={handleBooking} disabled={isSubmitting}>
                  <Icon name="Send" size={18} className="mr-2" />
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Галерея</h2>
          <p className="text-center text-muted-foreground mb-12">Фотографии наших кабинетов</p>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="room1">№1</TabsTrigger>
              <TabsTrigger value="room2">№2</TabsTrigger>
              <TabsTrigger value="room3">№3</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="grid md:grid-cols-3 gap-4">
              {rooms.map((room) => (
                <div key={room.id} className="relative overflow-hidden rounded-lg group cursor-pointer">
                  <img src={room.image} alt={room.name} className="w-full h-64 object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white font-semibold">{room.name}</p>
                  </div>
                </div>
              ))}
            </TabsContent>
            
            {rooms.map((room, idx) => (
              <TabsContent key={room.id} value={`room${idx + 1}`} className="grid md:grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-lg">
                  <img src={room.image} alt={room.name} className="w-full h-80 object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{room.name}</h3>
                  <p className="text-muted-foreground mb-4">{room.description}</p>
                  <ul className="space-y-2">
                    {room.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Отзывы</h2>
          <p className="text-center text-muted-foreground mb-12">Что говорят наши клиенты</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.profession}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12">Свяжитесь с нами удобным способом</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Наши контакты</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@cabinet-rent.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground">г. Казань, ул. Чистопольская, д. 61Б</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">Режим работы</p>
                    <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Напишите нам</h3>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="contact-name">Имя</Label>
                  <Input id="contact-name" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="contact-message">Сообщение</Label>
                  <Textarea id="contact-message" placeholder="Ваше сообщение..." rows={4} />
                </div>
                <Button className="w-full">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t bg-muted/20">
        <div className="container max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Кабинеты в аренду. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
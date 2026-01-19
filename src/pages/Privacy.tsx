export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/50 via-white to-amber-50/50">
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-primary">Политика конфиденциальности</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении всей информации, 
              которую ИП Ситдигуллина Алиса Айратовна (ИНН 165126369283, ОГРНИП 324169000045985) может получить о Пользователе 
              во время использования сайта Mind Bloom.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Персональные данные</h2>
            <p>Мы собираем следующие персональные данные:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Имя и фамилия</li>
              <li>Номер телефона</li>
              <li>Адрес электронной почты</li>
              <li>Информация о бронировании кабинетов</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Цели обработки персональных данных</h2>
            <p>Персональные данные используются для:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Обработки заявок на аренду кабинетов</li>
              <li>Связи с клиентами по вопросам бронирования</li>
              <li>Информирования о статусе бронирования</li>
              <li>Выполнения договорных обязательств</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Защита персональных данных</h2>
            <p>
              Мы принимаем необходимые организационные и технические меры для защиты персональных данных от неправомерного 
              или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных 
              неправомерных действий третьих лиц.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Права субъектов персональных данных</h2>
            <p>Вы имеете право:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Получать информацию о наличии и содержании ваших персональных данных</li>
              <li>Требовать уточнения, блокирования или уничтожения персональных данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Контактная информация</h2>
            <p>
              <strong>ИП Ситдигуллина Алиса Айратовна</strong><br />
              ИНН: 165126369283<br />
              ОГРНИП: 324169000045985<br />
              Юридический адрес: 420081, Россия, Республика Татарстан, г. Казань, ул. Патриса Лумумбы, д. 28Б<br />
              Телефон: +7 (999) 999-99-99<br />
              Email: info@mindbloom.ru
            </p>
          </section>

          <section>
            <p className="text-sm text-muted-foreground mt-8">
              Дата последнего обновления: 19.01.2026
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

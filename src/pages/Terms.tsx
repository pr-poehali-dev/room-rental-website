export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/50 via-white to-amber-50/50">
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-primary">Пользовательское соглашение</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Общие положения</h2>
            <p>
              Настоящее Пользовательское соглашение регулирует отношения между ИП Ситдигуллина Алиса Айратовна 
              (далее — Арендодатель) и пользователями сайта (далее — Клиент) при аренде кабинетов для психологов.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Условия аренды</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Минимальное время аренды:</strong> 1 час</li>
              <li><strong>Порядок оплаты:</strong> 100% предоплата</li>
              <li><strong>Залог:</strong> не требуется</li>
              <li><strong>Включено в стоимость:</strong> аренда кабинета на 1 час, пользование мебелью</li>
              <li><strong>Оплачивается отдельно:</strong> кушетка, дополнительный стол и стулья</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Правила отмены бронирования</h2>
            <p>
              Отмена бронирования возможна не позднее чем за 24 часа до начала сеанса. При отмене бронирования менее чем 
              за 24 часа до начала сеанса предоплата не возвращается.
            </p>
            <p>
              При отмене за 24+ часов предоплата возвращается в полном объеме в течение 5 рабочих дней.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Права и обязанности Арендодателя</h2>
            <p><strong>Арендодатель обязуется:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Предоставить кабинет в чистом и готовом к использованию состоянии</li>
              <li>Обеспечить конфиденциальность сеансов</li>
              <li>Обеспечить исправность мебели и оборудования</li>
            </ul>
            <p className="mt-4"><strong>Арендодатель имеет право:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Отказать в бронировании при нарушении условий соглашения</li>
              <li>Изменять стоимость услуг с уведомлением за 7 дней</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Права и обязанности Клиента</h2>
            <p><strong>Клиент обязуется:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Использовать кабинет только для проведения психологических консультаций</li>
              <li>Бережно относиться к имуществу Арендодателя</li>
              <li>Соблюдать правила пожарной безопасности</li>
              <li>Производить предоплату согласно условиям</li>
            </ul>
            <p className="mt-4"><strong>Клиент имеет право:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Получить кабинет в соответствии с описанием на сайте</li>
              <li>Отменить бронирование согласно правилам</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Ответственность сторон</h2>
            <p>
              За порчу имущества Клиент несет материальную ответственность. Арендодатель не несет ответственности 
              за личные вещи Клиента, оставленные в кабинете.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Реквизиты</h2>
            <p>
              <strong>ИП Ситдигуллина Алиса Айратовна</strong><br />
              ИНН: 165126369283<br />
              ОГРНИП: 324169000045985<br />
              Юридический адрес: 420081, Россия, Республика Татарстан, г. Казань, ул. Патриса Лумумбы, д. 28Б
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

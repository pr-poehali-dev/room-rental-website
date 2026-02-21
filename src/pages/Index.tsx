import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const rooms = [
  {
    id: 1,
    name: 'Кабинет №1',
    description: 'Светлый уютный кабинет для комфортной работы как для взрослых, так и для работы с детьми. Легко создается расслабляющая атмосфера с помощью мягкого освещения.',
    image: 'https://cdn.poehali.dev/projects/ea4d8b0d-a1e8-4e81-a0fc-66a8e70e997f/bucket/f60d772c-667b-4fda-b4b3-f489940fa4a9.png',
    images: [
      'https://cdn.poehali.dev/projects/ea4d8b0d-a1e8-4e81-a0fc-66a8e70e997f/bucket/f60d772c-667b-4fda-b4b3-f489940fa4a9.png',
      'https://cdn.poehali.dev/projects/ea4d8b0d-a1e8-4e81-a0fc-66a8e70e997f/files/3158c0bd-0e0c-498e-b388-4d709466d63c.jpg',
      'https://cdn.poehali.dev/projects/ea4d8b0d-a1e8-4e81-a0fc-66a8e70e997f/files/e7b90ffc-6c44-403d-bb5a-8b874cf84514.jpg',
    ],
    features: ['Wi-Fi', 'Канцелярия', 'Игровая зона', 'Комфортная мебель'],
    price: '500 ₽/час',
    bookingUrl: 'https://n1950266.yclients.com/company/1718101/personal/select-services?o=m4942632'
  },
  {
    id: 2,
    name: 'Кабинет №2',
    description: 'Просторное рабочее место, которое легко трансформируется в массажный кабинет. Светлая зона для работы.',
    image: 'https://cdn.poehali.dev/projects/ea4d8b0d-a1e8-4e81-a0fc-66a8e70e997f/bucket/181873af-26a5-45ef-87db-0530ef6ce074.jpg',
    images: [
      'https://cdn.poehali.dev/projects/ea4d8b0d-a1e8-4e81-a0fc-66a8e70e997f/bucket/181873af-26a5-45ef-87db-0530ef6ce074.jpg',
      'https://cdn.poehali.dev/projects/ea4d8b0d-a1e8-4e81-a0fc-66a8e70e997f/files/73226305-a7a9-4a6f-b10e-f022accd8694.jpg',
      'https://cdn.poehali.dev/projects/ea4d8b0d-a1e8-4e81-a0fc-66a8e70e997f/files/3bf9a16c-59ad-4790-b5ec-49ef9fae6405.jpg',
    ],
    features: ['Wi-Fi', 'Канцелярия', 'Комфортная мебель', 'Массажная кушетка'],
    price: '500 ₽/час',
    bookingUrl: 'https://n1950266.yclients.com/company/1718101/personal/select-services?o=m4936259'
  },
  {
    id: 3,
    name: 'Кабинет №3',
    description: 'Уголок спокойствия, где создается доверительная и расслабляющая атмосфера. Идеальное место, где рождаются хорошие идеи и наступает душевное равновесие.',
    image: 'https://cdn.poehali.dev/projects/ea4d8b0d-a1e8-4e81-a0fc-66a8e70e997f/bucket/bff3ead4-cbe6-4db0-955d-347818a3bb1b.jpg',
    images: [
      'https://cdn.poehali.dev/projects/ea4d8b0d-a1e8-4e81-a0fc-66a8e70e997f/bucket/bff3ead4-cbe6-4db0-955d-347818a3bb1b.jpg',
      'https://cdn.poehali.dev/projects/ea4d8b0d-a1e8-4e81-a0fc-66a8e70e997f/files/f807d719-8662-474e-a966-ad6ca8915603.jpg',
      'https://cdn.poehali.dev/projects/ea4d8b0d-a1e8-4e81-a0fc-66a8e70e997f/files/b0fcc61e-5ff3-4e37-ae0e-8a3a013708ef.jpg',
    ],
    features: ['Wi-Fi', 'Канцелярия', 'Безопасное пространство', 'Комфортная мебель'],
    price: '500 ₽/час',
    bookingUrl: 'https://n1950266.yclients.com/company/1718101/personal/select-services?o=m4959480'
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

  return (
    <div className="min-h-screen" style={{backgroundImage: `url('https://cdn.poehali.dev/projects/ea4d8b0d-a1e8-4e81-a0fc-66a8e70e997f/bucket/5196a9d7-1cff-45d5-9e81-612e05c53c1e.jpg')`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center'}}>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/логотип MB.png" 
              alt="Mind Bloom" 
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#rooms" className="text-sm font-medium hover:text-primary transition-colors">Кабинеты</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Галерея</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex" asChild>
            <a href="#rooms">
              <Icon name="Calendar" size={18} className="mr-2" />
              Забронировать
            </a>
          </Button>
        </div>
      </header>

      <section className="relative py-20 px-4 overflow-hidden bg-white/70 backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
            Mind Bloom — Пространство для психологов
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Уютное пространство для консультаций. Почасовая аренда. Всё включено.
          </p>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="MapPin" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold">Удобная локация</h3>
              <p className="text-sm text-muted-foreground">г. Казань, ул. Чистопольская 61Б (вход со двора)</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold">Гибкий график</h3>
              <p className="text-sm text-muted-foreground">Аренда от 1 часа с 10:00 до 20:00</p>
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

      <section id="rooms" className="relative py-14 px-4 overflow-hidden bg-white/75 backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto relative z-10">
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
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl font-bold text-primary">{room.price}</span>
                    <Button asChild className="w-full">
                      <a href={room.bookingUrl} target="_blank" rel="noopener noreferrer">
                        Забронировать
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-14 px-4 bg-white/70 backdrop-blur-sm">
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
                <div key={room.id} className="relative overflow-hidden rounded-lg">
                  <Carousel opts={{ loop: true }} className="w-full">
                    <CarouselContent>
                      {room.images.map((img, imgIdx) => (
                        <CarouselItem key={imgIdx}>
                          <div className="relative group cursor-pointer">
                            <img src={img} alt={`${room.name} — фото ${imgIdx + 1}`} className="w-full h-64 object-cover transition-transform group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <p className="text-white font-semibold">{room.name}</p>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 bg-white/80 hover:bg-white border-0" />
                    <CarouselNext className="right-2 bg-white/80 hover:bg-white border-0" />
                  </Carousel>
                </div>
              ))}
            </TabsContent>
            
            {rooms.map((room, idx) => (
              <TabsContent key={room.id} value={`room${idx + 1}`} className="grid md:grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-lg">
                  <Carousel opts={{ loop: true }} className="w-full">
                    <CarouselContent>
                      {room.images.map((img, imgIdx) => (
                        <CarouselItem key={imgIdx}>
                          <img src={img} alt={`${room.name} — фото ${imgIdx + 1}`} className="w-full h-80 object-cover" />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 bg-white/80 hover:bg-white border-0" />
                    <CarouselNext className="right-2 bg-white/80 hover:bg-white border-0" />
                  </Carousel>
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

      <section id="reviews" className="relative py-14 px-4 overflow-hidden bg-white/70 backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto relative z-10">
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

      <section id="contacts" className="relative py-14 px-4 overflow-hidden bg-white/70 backdrop-blur-sm">
        <div className="container max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12">Свяжитесь с нами удобным способом</p>
          
          <Card className="p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-6">Наши контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="Phone" className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-medium">Телефон</p>
                  <a href="tel:+79397325270" className="text-muted-foreground hover:text-primary transition-colors">+7 (939) 732-52-70</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Mail" className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:mind-bloom@ya.ru" className="text-muted-foreground hover:text-primary transition-colors">mind-bloom@ya.ru</a>
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
        </div>
      </section>

      <footer className="py-12 px-4 border-t bg-gradient-to-r from-green-50/30 to-amber-50/30">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Mind Bloom</h3>
              <p className="text-sm text-muted-foreground">Аренда кабинетов для психологов в Казани</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Документы</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Политика конфиденциальности</a></li>
                <li><a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Пользовательское соглашение</a></li>
                <li><a href="/offer" className="text-muted-foreground hover:text-primary transition-colors">Договор оферты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (999) 999-99-99</li>
                <li>info@mindbloom.ru</li>
                <li>г. Казань, ул. Чистопольская, 61Б</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 text-center text-sm text-muted-foreground">
            <p className="mb-2">ИП Ситдигуллина Алиса Айратовна</p>
            <p>ИНН: 165126369283 | ОГРНИП: 324169000045985</p>
            <p className="mt-2">Юридический адрес: 420081, Россия, Республика Татарстан, г. Казань, ул. Патриса Лумумбы, д. 28Б</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cartItems, setCartItems] = useState<number>(0);

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  const products = [
    {
      id: 1,
      name: 'Керамическая ваза ручной работы',
      price: '3 500 ₽',
      image: '/img/f35a7524-9832-4988-8fc7-b59afd0c3bad.jpg',
      processImages: [
        '/img/6a3c7c70-250d-48c8-92cc-f34fabc8d763.jpg',
        '/img/95a311c9-3a2c-4182-a3f0-ace917a2a00d.jpg'
      ],
      description: 'Уникальная керамическая ваза, созданная на гончарном круге с использованием натуральных глазурей.',
      category: 'Керамика'
    },
    {
      id: 2,
      name: 'Вязаный плед из натуральной шерсти',
      price: '5 200 ₽',
      image: '/img/95a311c9-3a2c-4182-a3f0-ace917a2a00d.jpg',
      processImages: [
        '/img/6a3c7c70-250d-48c8-92cc-f34fabc8d763.jpg'
      ],
      description: 'Мягкий и теплый плед, связанный вручную из 100% натуральной овечьей шерсти.',
      category: 'Текстиль'
    },
    {
      id: 3,
      name: 'Деревянная шкатулка с резьбой',
      price: '2 800 ₽',
      image: '/img/6a3c7c70-250d-48c8-92cc-f34fabc8d763.jpg',
      processImages: [
        '/img/f35a7524-9832-4988-8fc7-b59afd0c3bad.jpg',
        '/img/95a311c9-3a2c-4182-a3f0-ace917a2a00d.jpg'
      ],
      description: 'Изящная шкатулка из массива дуба с традиционной резьбой по дереву.',
      category: 'Дерево'
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-warm-beige/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-merriweather font-bold text-saddle-brown">
                Мастерская Уюта
              </h1>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-dark-olive hover:text-saddle-brown transition-colors font-medium">Главная</a>
                <a href="#catalog" className="text-dark-olive hover:text-saddle-brown transition-colors font-medium">Каталог</a>
                <a href="#about" className="text-dark-olive hover:text-saddle-brown transition-colors font-medium">О мастере</a>
                <a href="#delivery" className="text-dark-olive hover:text-saddle-brown transition-colors font-medium">Доставка</a>
                <a href="#reviews" className="text-dark-olive hover:text-saddle-brown transition-colors font-medium">Отзывы</a>
                <a href="#contacts" className="text-dark-olive hover:text-saddle-brown transition-colors font-medium">Контакты</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="relative border-warm-beige text-saddle-brown hover:bg-warm-beige/10"
              >
                <Icon name="ShoppingCart" size={20} />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 text-xs bg-saddle-brown text-white">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-cream to-soft-green">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-merriweather font-bold text-saddle-brown mb-6 leading-tight">
              Творчество и ручная работа
            </h2>
            <p className="text-xl text-dark-olive max-w-3xl mx-auto leading-relaxed">
              Добро пожаловать в мир уникальных изделий, созданных с душой и любовью. 
              Здесь каждая вещь рассказывает свою историю мастерства и вдохновения.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 bg-white/80 backdrop-blur-sm border-warm-beige/30 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-warm-beige rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={32} className="text-saddle-brown" />
              </div>
              <h3 className="font-merriweather font-bold text-xl text-saddle-brown mb-3">
                С любовью к деталям
              </h3>
              <p className="text-dark-olive">
                Каждое изделие создается вручную с особым вниманием к мелочам и качеству материалов.
              </p>
            </Card>

            <Card className="text-center p-8 bg-white/80 backdrop-blur-sm border-warm-beige/30 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-warm-beige rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Leaf" size={32} className="text-saddle-brown" />
              </div>
              <h3 className="font-merriweather font-bold text-xl text-saddle-brown mb-3">
                Натуральные материалы
              </h3>
              <p className="text-dark-olive">
                Мы используем только экологически чистые и натуральные материалы высшего качества.
              </p>
            </Card>

            <Card className="text-center p-8 bg-white/80 backdrop-blur-sm border-warm-beige/30 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-warm-beige rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={32} className="text-saddle-brown" />
              </div>
              <h3 className="font-merriweather font-bold text-xl text-saddle-brown mb-3">
                Уникальность
              </h3>
              <p className="text-dark-olive">
                Каждое изделие неповторимо и создается в единственном экземпляре специально для вас.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              className="bg-saddle-brown hover:bg-saddle-brown/90 text-white px-8 py-3 text-lg"
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section id="catalog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-merriweather font-bold text-saddle-brown mb-4">
              Наши изделия
            </h3>
            <p className="text-lg text-dark-olive max-w-2xl mx-auto">
              Каждое изделие рассказывает свою историю мастерства и любви к творчеству.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-warm-beige/30 bg-gradient-to-b from-white to-cream/30" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-warm-beige text-saddle-brown">
                      {product.category}
                    </Badge>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-merriweather font-bold text-lg text-saddle-brown mb-2">
                      {product.name}
                    </h4>
                    <p className="text-dark-olive text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    

                    
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-saddle-brown">
                        {product.price}
                      </span>
                      <Button 
                        onClick={addToCart}
                        className="bg-warm-beige hover:bg-warm-beige/90 text-saddle-brown font-medium"
                      >
                        <Icon name="Plus" size={16} className="mr-1" />
                        В корзину
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-soft-green to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-merriweather font-bold text-saddle-brown mb-6">
                О мастере
              </h3>
              <p className="text-lg text-dark-olive mb-6 leading-relaxed">
                Меня зовут Анна, и я занимаюсь рукоделием уже более 15 лет. Каждое изделие для меня — 
                это способ передать частичку души и создать что-то по-настоящему уникальное.
              </p>
              <p className="text-lg text-dark-olive mb-8 leading-relaxed">
                Я работаю только с натуральными материалами и традиционными техниками, 
                которые передавались из поколения в поколение.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-saddle-brown">15+</div>
                  <div className="text-sm text-dark-olive">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-saddle-brown">500+</div>
                  <div className="text-sm text-dark-olive">довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-saddle-brown">100%</div>
                  <div className="text-sm text-dark-olive">ручная работа</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/6a3c7c70-250d-48c8-92cc-f34fabc8d763.jpg" 
                alt="Мастер за работой" 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-saddle-brown text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-merriweather font-bold text-xl mb-4">Мастерская Уюта</h4>
              <p className="text-warm-beige">
                Создаем уникальные изделия ручной работы с душой и любовью.
              </p>
            </div>
            
            <div>
              <h5 className="font-bold mb-4">Разделы</h5>
              <ul className="space-y-2">
                <li><a href="#catalog" className="text-warm-beige hover:text-white transition-colors">Каталог</a></li>
                <li><a href="#about" className="text-warm-beige hover:text-white transition-colors">О мастере</a></li>
                <li><a href="#delivery" className="text-warm-beige hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#reviews" className="text-warm-beige hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-4">Контакты</h5>
              <div className="space-y-2 text-warm-beige">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  hello@masteruut.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, ул. Мастеров, 12
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold mb-4">Социальные сети</h5>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="text-warm-beige hover:text-white transition-colors cursor-pointer" />
                <Icon name="MessageCircle" size={24} className="text-warm-beige hover:text-white transition-colors cursor-pointer" />
                <Icon name="Mail" size={24} className="text-warm-beige hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-warm-beige/30 mt-8 pt-8 text-center text-warm-beige">
            <p>&copy; 2024 Мастерская Уюта. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
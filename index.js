const products = [
    { 
        id: 1, 
        title: 'Беспроводные наушники Pro', 
        price: 45000, 
        category: 'audio', 
        rating: 4.8,
        reviewsCount: 42,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60',
        description: 'Премиальные беспроводные наушники с активным шумоподавлением, кристально чистым звуком и автономностью до 30 часов.',
        specs: { 'Частотный диапазон': '20 - 20000 Гц', 'Интерфейс': 'Bluetooth 5.3', 'Емкость аккумулятора': '500 мАч', 'Вес': '250 г' },
        reviews: [
            { author: 'Алексей', text: 'Отличный звук и долго держит заряд!' },
            { author: 'Марина', text: 'Шумоподавление работает на все 100%' }
        ]
    },
    { 
        id: 2, 
        title: 'Механическая клавиатура RGB', 
        price: 38000, 
        category: 'peripherals', 
        rating: 4.9,
        reviewsCount: 38,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60',
        description: 'Игровая механическая клавиатура с настраиваемой RGB подсветкой, прочным алюминиевым корпусом и быстрым откликом.',
        specs: { 'Тип переключателей': 'Mechanical Red', 'Подсветка': 'RGB', 'Подключение': 'USB Type-C / Bluetooth', 'Вес': '900 г' },
        reviews: [
            { author: 'Дамир', text: 'Кликать одно удовольствие, подсветка шикарная.' }
        ]
    },
    { 
        id: 3, 
        title: 'Игровая мышь Ultra', 
        price: 24000, 
        category: 'peripherals', 
        rating: 4.7,
        reviewsCount: 25,
        image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60',
        description: 'Эргономичная игровая мышь с высокоточным оптическим сенсором и программируемыми кнопками.',
        specs: { 'Максимальное DPI': '16000', 'Количество кнопок': '6', 'Подключение': 'Беспроводное 2.4ГГц', 'Вес': '85 г' },
        reviews: [
            { author: 'Тимур', text: 'Очень легкая и в руке лежит идеально.' }
        ]
    },
    { 
        id: 4, 
        title: 'Портативная колонка Bass', 
        price: 32000, 
        category: 'audio', 
        rating: 4.6,
        reviewsCount: 19,
        image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=60',
        description: 'Влагозащищенная портативная колонка с мощным басом и чистыми высокими частотами.',
        specs: { 'Мощность звука': '20 Вт', 'Защита': 'IP67', 'Автономность': '12 часов', 'Вес': '550 г' },
        reviews: [
            { author: 'Арман', text: 'Для пикников и поездок то что нужно!' }
        ]
    },
    { 
        id: 5, 
        title: 'Смарт-часы Sport', 
        price: 65000, 
        category: 'gadgets', 
        rating: 4.9,
        reviewsCount: 56,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60',
        description: 'Многофункциональные умные часы для спорта и повседневной жизни с мониторингом здоровья.',
        specs: { 'Дисплей': '1.4 AMOLED', 'Датчики': 'Пульсометр, SpO2, Шагомер', 'Влагозащита': 'WR50', 'Корпус': 'Алюминий' },
        reviews: [
            { author: 'Алия', text: 'Дизайн супер, все функции работают стабильно.' }
        ]
    },
    { 
        id: 6, 
        title: 'Монитор 27 дюймов 165Hz', 
        price: 125000, 
        category: 'displays', 
        rating: 5.0,
        reviewsCount: 64,
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60',
        description: 'Игровой монитор с высокой частотой обновления, минимальным временем отклика и IPS матрицей.',
        specs: { 'Диагональ': '27"', 'Разрешение': '2560x1440', 'Частота': '165 Гц', 'Время отклика': '1 мс' },
        reviews: [
            { author: 'Евгений', text: 'Плавность картинки невероятная.' }
        ]
    },
    { 
        id: 7, 
        title: 'Студийный микрофон USB', 
        price: 29000, 
        category: 'audio', 
        rating: 4.7,
        reviewsCount: 31,
        image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&auto=format&fit=crop&q=60',
        description: 'Профессиональный конденсаторный микрофон для стримов, подкастов и записи вокала.',
        specs: { 'Тип': 'Конденсаторный', 'Подключение': 'USB Type-C', 'Направленность': 'Кардиоидный', 'Стойка': 'В комплекте' },
        reviews: [
            { author: 'Никита', text: 'Звук чистый, без лишних шумов.' }
        ]
    },
    { 
        id: 8, 
        title: 'Эргономичная подставка', 
        price: 12000, 
        category: 'peripherals', 
        rating: 4.5,
        reviewsCount: 14,
        image: 'https://images.unsplash.com/photo-1584380951421-2e93b39294d1?w=500&auto=format&fit=crop&q=60',
        description: 'Регулируемая подставка для ноутбука и планшета для правильной осанки за рабочим столом.',
        specs: { 'Материал': 'Алюминий', 'Углы наклона': '6 уровней', 'Совместимость': 'Ноутбуки до 17"', 'Вес': '300 г' },
        reviews: [
            { author: 'Ольга', text: 'Шея перестала уставать за работой.' }
        ]
    },
    { 
        id: 9, 
        title: 'Внешний SSD 1TB', 
        price: 54000, 
        category: 'gadgets', 
        rating: 4.9,
        reviewsCount: 45,
        image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&auto=format&fit=crop&q=60',
        description: 'Сверхбыстрый портативный твердотельный накопитель для хранения и передачи больших объемов данных.',
        specs: { 'Объем': '1 ТБ', 'Скорость чтения': 'до 1050 МБ/с', 'Интерфейс': 'USB 3.2 Gen 2', 'Защита': 'Ударопрочный корпус' },
        reviews: [
            { author: 'Руслан', text: 'Файлы перекидывает мгновенно!' }
        ]
    },
    { 
        id: 10, 
        title: 'Коврик для мыши XXL', 
        price: 6500, 
        category: 'peripherals', 
        rating: 4.8,
        reviewsCount: 50,
        image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&auto=format&fit=crop&q=60',
        description: 'Просторный игровой коврик с водоотталкивающим покрытием и прошитыми краями.',
        specs: { 'Размер': '900 x 400 мм', 'Толщина': '4 мм', 'Покрытие': 'Speed', 'Основа': 'Резиновая' },
        reviews: [
            { author: 'Санжар', text: 'Отличное качество за свои деньги.' }
        ]
    },
    { 
        id: 11, 
        title: 'Фитнес-браслет', 
        price: 18000, 
        category: 'gadgets', 
        rating: 4.6,
        reviewsCount: 29,
        image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&auto=format&fit=crop&q=60',
        description: 'Легкий и удобный фитнес-трекер с круглосуточным отслеживанием активности и сна.',
        specs: { 'Экран': '1.1 AMOLED', 'Автономность': 'до 14 дней', 'Влагозащита': '5 АТМ', 'Вес': '15 г' },
        reviews: [
            { author: 'Динара', text: 'Заряд держит долго, шаги считает верно.' }
        ]
    },
    { 
        id: 12, 
        title: 'Ультраширокий монитор 34"', 
        price: 210000, 
        category: 'displays', 
        rating: 4.9,
        reviewsCount: 22,
        image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=500&auto=format&fit=crop&q=60',
        description: 'Профессиональный панорамный монитор для работы с мультимедиа и погружения в игры.',
        specs: { 'Диагональ': '34"', 'Разрешение': '3440 x 1440', 'Матрица': 'IPS', 'Изогнутость': '1500R' },
        reviews: [
            { author: 'Максим', text: 'Работать с несколькими окнами теперь одно удовольствие.' }
        ]
    },
    { 
        id: 13, 
        title: 'Беспроводная гарнитура', 
        price: 52000, 
        category: 'audio', 
        rating: 4.7,
        reviewsCount: 33,
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=60',
        description: 'Полноразмерная гарнитура с объемным звуком и мягкими амбушюрами для долгих игровых сессий.',
        specs: { 'Динамики': '50 мм', 'Подключение': 'Радиоканал 2.4ГГц / Bluetooth', 'Микрофон': 'Выдвижной', 'Вес': '320 г' },
        reviews: [
            { author: 'Игорь', text: 'Сидят удобно, уши не устают.' }
        ]
    },
    { 
        id: 14, 
        title: 'Игровая мембранная клавиатура', 
        price: 19000, 
        category: 'peripherals', 
        rating: 4.5,
        reviewsCount: 17,
        image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&auto=format&fit=crop&q=60',
        description: 'Тихая мембранная клавиатура с защитой от брызг и яркой подсветкой.',
        specs: { 'Тип': 'Мембранная', 'Подсветка': 'Многоцветная', 'Защита от воды': 'Есть', 'Длина кабеля': '1.8 м' },
        reviews: [
            { author: 'Елена', text: 'Клавиши нажимаются тихо и мягко.' }
        ]
    },
    { 
        id: 15, 
        title: 'Вертикальная беспроводная мышь', 
        price: 16000, 
        category: 'peripherals', 
        rating: 4.6,
        reviewsCount: 21,
        image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60',
        description: 'Эргономичная вертикальная мышь для снижения нагрузки на запястье при длительной работе.',
        specs: { 'Угол наклона': '57 градусов', 'DPI': 'до 4000', 'Питание': 'Аккумулятор', 'Вес': '115 г' },
        reviews: [
            { author: 'Катерина', text: 'Рука перестала болеть в конце рабочего дня.' }
        ]
    },
    { 
        id: 16, 
        title: 'Bluetooth-колонка Mini', 
        price: 14000, 
        category: 'audio', 
        rating: 4.8,
        reviewsCount: 40,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60',
        description: 'Компактная мини-колонка с чистым звуком, которую удобно брать с собой куда угодно.',
        specs: { 'Мощность': '5 Вт', 'Bluetooth': '5.0', 'Автономность': '6 часов', 'Вес': '200 г' },
        reviews: [
            { author: 'Павел', text: 'Маленькая, но звучит громко.' }
        ]
    },
    { 
        id: 17, 
        title: 'Смарт-часы Classic', 
        price: 79000, 
        category: 'gadgets', 
        rating: 4.9,
        reviewsCount: 28,
        image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&auto=format&fit=crop&q=60',
        description: 'Элегантные классические смарт-часы в металлическом корпусе с кожаным ремешком.',
        specs: { 'Корпус': 'Нержавеющая сталь', 'Ремешок': 'Кожа', 'Беспроводная зарядка': 'Да', 'NFC': 'Есть' },
        reviews: [
            { author: 'Виктор', text: 'Выглядят дорого и солидно.' }
        ]
    },
    { 
        id: 18, 
        title: 'Портативный монитор 15.6"', 
        price: 95000, 
        category: 'displays', 
        rating: 4.7,
        reviewsCount: 15,
        image: 'https://images.unsplash.com/photo-1586210546761-0d3170e285a8?w=500&auto=format&fit=crop&q=60',
        description: 'Дополнительный портативный монитор с Full HD разрешением для работы в путешествиях.',
        specs: { 'Диагональ': '15.6"', 'Разрешение': '1920x1080', 'Матрица': 'IPS', 'Подключение': 'Type-C / Mini HDMI' },
        reviews: [
            { author: 'Артем', text: 'Очень удобно работать вне дома с двумя экранами.' }
        ]
    },
    { 
        id: 19, 
        title: 'Настольный микрофон RGB', 
        price: 22000, 
        category: 'audio', 
        rating: 4.8,
        reviewsCount: 27,
        image: 'https://images.unsplash.com/photo-1583795128737-6049d94276f8?w=500&auto=format&fit=crop&q=60',
        description: 'Стильный микрофон со встроенной RGB подсветкой и кнопкой быстрого отключения звука.',
        specs: { 'Чувствительность': '-42 дБ', 'Подсветка': 'RGB динамическая', 'Разъем': 'USB', 'Вес': '400 г' },
        reviews: [
            { author: 'Кирилл', text: 'Дизайн топ, голос передает чисто.' }
        ]
    },
    { 
        id: 20, 
        title: 'Хаб Type-C 7-в-1', 
        price: 15000, 
        category: 'gadgets', 
        rating: 4.9,
        reviewsCount: 52,
        image: 'https://images.unsplash.com/photo-1616440347437-b1c73416efc2?w=500&auto=format&fit=crop&q=60',
        description: 'Многофункциональный переходник для подключения всех необходимых устройств к ноутбуку.',
        specs: { 'Порты': 'HDMI, 3x USB 3.0, Type-C PD, SD/TF', 'Корпус': 'Алюминий', 'Скорость передачи': 'до 5 Гбит/с' },
        reviews: [
            { author: 'Сергей', text: 'Работает стабильно, не греется.' }
        ]
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let activeCategory = 'all';
let searchQuery = '';
let currentSort = 'default';

const mainContainer = document.getElementById('mainContainer');
const searchInput = document.getElementById('searchInput');
const cartOpenBtn = document.getElementById('cartOpenBtn');
const cartCloseBtn = document.getElementById('cartCloseBtn');
const cartModal = document.getElementById('cartModal');
const cartBadge = document.getElementById('cartBadge');
const favoritesBadge = document.getElementById('favoritesBadge');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutCloseBtn = document.getElementById('checkoutCloseBtn');
const checkoutForm = document.getElementById('checkoutForm');
const successModal = document.getElementById('successModal');
const successCloseBtn = document.getElementById('successCloseBtn');
const deliveryDateInput = document.getElementById('deliveryDate');
const favoritesOpenBtn = document.getElementById('favoritesOpenBtn');
const sortSelect = document.getElementById('sortSelect');

const initMinDeliveryDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    deliveryDateInput.min = tomorrow.toISOString().split('T')[0];
    deliveryDateInput.value = deliveryDateInput.min;
};

const scrollToCatalog = () => {
    document.querySelector('.filter-toolbar').scrollIntoView({ behavior: 'smooth' });
};

const setCategoryAndScroll = (category, event) => {
    event.preventDefault();
    activeCategory = category;
    renderCatalog();
    scrollToCatalog();
};

const renderCatalog = () => {
    mainContainer.innerHTML = `
        <div class="filter-toolbar">
            <div class="categories" id="categoryContainer">
                <button class="category-btn ${activeCategory === 'all' ? 'active' : ''}" data-category="all">Все товары</button>
                <button class="category-btn ${activeCategory === 'audio' ? 'active' : ''}" data-category="audio">Аудио</button>
                <button class="category-btn ${activeCategory === 'peripherals' ? 'active' : ''}" data-category="peripherals">Периферия</button>
                <button class="category-btn ${activeCategory === 'gadgets' ? 'active' : ''}" data-category="gadgets">Гаджеты</button>
                <button class="category-btn ${activeCategory === 'displays' ? 'active' : ''}" data-category="displays">Экраны</button>
            </div>
            <div class="sort-box">
                <select id="sortSelect" class="form-input">
                    <option value="default" ${currentSort === 'default' ? 'selected' : ''}>По умолчанию</option>
                    <option value="price-asc" ${currentSort === 'price-asc' ? 'selected' : ''}>Сначала дешевле</option>
                    <option value="price-desc" ${currentSort === 'price-desc' ? 'selected' : ''}>Сначала дороже</option>
                    <option value="rating" ${currentSort === 'rating' ? 'selected' : ''}>По рейтингу</option>
                </select>
            </div>
        </div>
        <div class="catalog" id="productCatalog"></div>
    `;

    const catalogGrid = document.getElementById('productCatalog');
    
    let filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (currentSort === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rating') {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    }

    if (filteredProducts.length === 0) {
        catalogGrid.innerHTML = '<p style="color: var(--text-secondary); grid-column: span full; text-align: center; padding: 40px;">Товары не найдены</p>';
        return;
    }

    catalogGrid.innerHTML = filteredProducts.map(product => {
        const isFav = favorites.includes(product.id);
        return `
            <div class="product-card" onclick="showProductDetail(${product.id})">
                <button class="product-card__fav ${isFav ? 'active' : ''}" onclick="toggleFavorite(event, ${product.id})" title="В избранное">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-rating">
                        ★ ${product.rating} <span>(${product.reviewsCount})</span>
                    </div>
                    <div class="product-price">${product.price.toLocaleString()} ₸</div>
                    <button class="btn" onclick="event.stopPropagation(); addToCart(${product.id})">В корзину</button>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('sortSelect').addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderCatalog();
    });
};

const showProductDetail = (productId) => {
    const product = products.find(item => item.id === productId);
    if (!product) return;

    const isFav = favorites.includes(product.id);

    mainContainer.innerHTML = `
        <button class="back-btn" onclick="showCatalog(event)">← Назад к каталогу</button>
        <div class="product-detail">
            <div style="position: relative;">
                <button class="product-card__fav ${isFav ? 'active' : ''}" style="top: 16px; right: 16px;" onclick="toggleFavorite(event, ${product.id})" title="В избранное">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
                <img src="${product.image}" alt="${product.title}" class="product-detail__image">
            </div>
            <div class="product-detail__info">
                <span class="product-category">${product.category}</span>
                <h1 class="product-detail__title">${product.title}</h1>
                <div class="product-rating" style="font-size: 16px;">
                    ★ ${product.rating} <span>(${product.reviewsCount} отзывов)</span>
                </div>
                <div class="product-detail__price">${product.price.toLocaleString()} ₸</div>
                <p class="product-detail__desc">${product.description}</p>
                
                <div>
                    <h3 class="product-detail__section-title">Характеристики</h3>
                    <div class="specs-list">
                        ${Object.entries(product.specs).map(([key, val]) => `
                            <div class="spec-item">
                                <span class="spec-name">${key}</span>
                                <span class="spec-val">${val}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <button class="btn btn--primary btn--full" onclick="addToCart(${product.id})">Добавить в корзину</button>

                <div>
                    <h3 class="product-detail__section-title">Отзывы покупателей</h3>
                    <div class="reviews-list">
                        ${product.reviews.map(rev => `
                            <div class="review-card">
                                <div class="review-author">${rev.author}</div>
                                <div class="review-text">${rev.text}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
};

const showCatalog = (event) => {
    if (event) event.preventDefault();
    renderCatalog();
};

const toggleFavorite = (event, productId) => {
    event.stopPropagation();
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
    } else {
        favorites.push(productId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesBadge();
    renderCatalog();
};

const updateFavoritesBadge = () => {
    favoritesBadge.textContent = favorites.length;
};

const addToCart = (productId) => {
    const product = products.find(item => item.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartState();
};

const removeFromCart = (productId) => {
    cart = cart.filter(item => item.id !== productId);
    updateCartState();
};

const updateCartState = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
    updateCartBadge();
};

const updateCartBadge = () => {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalCount;
};

const renderCartItems = () => {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 20px;">Корзина пуста</p>';
        cartTotalPrice.textContent = '0';
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item__info">
                <span class="cart-item__title">${item.title}</span>
                <span class="cart-item__price">${item.price.toLocaleString()} ₸ x ${item.quantity}</span>
            </div>
            <div class="cart-item__controls">
                <span style="font-weight: 700;">${(item.price * item.quantity).toLocaleString()} ₸</span>
                <button class="cart-item__remove" onclick="removeFromCart(${item.id})">Удалить</button>
            </div>
        </div>
    `).join('');

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalPrice.textContent = totalPrice.toLocaleString();
};

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('category-btn')) {
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        activeCategory = event.target.dataset.category;
        renderCatalog();
    }
});

searchInput.addEventListener('input', (event) => {
    searchQuery = event.target.value.trim();
    renderCatalog();
});

cartOpenBtn.addEventListener('click', () => cartModal.classList.add('is-open'));
cartCloseBtn.addEventListener('click', () => cartModal.classList.remove('is-open'));
checkoutCloseBtn.addEventListener('click', () => checkoutModal.classList.remove('is-open'));

favoritesOpenBtn.addEventListener('click', () => {
    activeCategory = 'all';
    searchQuery = '';
    renderCatalog();
    const catalogGrid = document.getElementById('productCatalog');
    const filtered = products.filter(p => favorites.includes(p.id));
    if (filtered.length === 0) {
        catalogGrid.innerHTML = '<p style="color: var(--text-secondary); grid-column: span full; text-align: center; padding: 40px;">В избранном пока ничего нет</p>';
        return;
    }
    catalogGrid.innerHTML = filtered.map(product => `
        <div class="product-card" onclick="showProductDetail(${product.id})">
            <button class="product-card__fav active" onclick="toggleFavorite(event, ${product.id})" title="В избранное">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-rating">★ ${product.rating} <span>(${product.reviewsCount})</span></div>
                <div class="product-price">${product.price.toLocaleString()} ₸</div>
                <button class="btn" onclick="event.stopPropagation(); addToCart(${product.id})">В корзину</button>
            </div>
        </div>
    `).join('');
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    cartModal.classList.remove('is-open');
    checkoutModal.classList.add('is-open');
});

checkoutForm.addEventListener('submit', (event) => {
    event.preventDefault();
    checkoutModal.classList.remove('is-open');
    successModal.classList.add('is-open');
    cart = [];
    updateCartState();
    checkoutForm.reset();
    initMinDeliveryDate();
});

successCloseBtn.addEventListener('click', () => successModal.classList.remove('is-open'));

window.addEventListener('click', (event) => {
    if (event.target === cartModal) cartModal.classList.remove('is-open');
    if (event.target === checkoutModal) checkoutModal.classList.remove('is-open');
    if (event.target === successModal) successModal.classList.remove('is-open');
});

initMinDeliveryDate();
updateFavoritesBadge();
renderCatalog();
updateCartState();
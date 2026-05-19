// Translations
const translations = {
    bg: {
        title: "Къща за гости Фенер",
        subtitle: "Поморие, България",
        "about-title": "За нас",
        "about-text": "Къща за гости Фенер се намира в старата част на град Поморие в непосредствена близост до центъра на града. Разположена е на главната улица Княз Борис I. 50 метра делят Къща за гости Фенер от южния бряг и 500 метра от Северния плаж. В близост до Къща за гости Фенер има хранителен магазин с банкомат, ресторанти. Предлагаме различни типове стаи, които можете да разгледате в галерия. На всички гости предлагаме безплатен Wi-Fi интернет, климатик, тераса, LCD телевизор, кана за топла вода, самостоятелен санитарен възел. Къщата за гости Фенер, Поморие разполага с голяма обща тераса с изглед към морето, оборудвана с мивка и кухня. Предлагаме трансфер до Несебър, Слънчев бряг, Бургас и летището. Къща за гости Фенер, Поморие работи целогодишно. За потвърдена се счита резервация след заплатено капаро за нея. Очакваме ви!",
        "amenities-title": "Удобства",
        "wifi": "Безплатен Wi-Fi",
        "ac": "Климатик",
        "tv": "LCD телевизор",
        "beach": "50м до плажа",
        "kitchen": "Обща кухня",
        "transfer": "Трансфер",
        "gallery-title": "Галерия",
        "contact-title": "Контакти",
        "address-label": "Адрес:",
        "address": "ул. Булаир 6, Поморие, България",
        "phone-label": "Телефон:",
        "email-label": "Email:",
        "rights": "Всички права запазени."
    },
    en: {
        title: "Guest House Fener",
        subtitle: "Pomorie, Bulgaria",
        "about-title": "About Us",
        "about-text": "Guest House Fener is located in the old part of Pomorie town in close proximity to the city center. It is situated on the main street Knyaz Boris I. Guest House Fener is 50 meters from the southern beach and 500 meters from the North Beach. Near Guest House Fener there is a grocery store with ATM, restaurants. We offer different types of rooms that you can view in the gallery. We offer all guests free Wi-Fi internet, air conditioning, terrace, LCD TV, kettle, private bathroom. Guest House Fener, Pomorie has a large shared terrace with sea view, equipped with sink and kitchen. We offer transfer to Nessebar, Sunny Beach, Burgas and the airport. Guest House Fener, Pomorie operates year-round. A reservation is considered confirmed after a deposit is paid. We are waiting for you!",
        "amenities-title": "Amenities",
        "wifi": "Free Wi-Fi",
        "ac": "Air Conditioning",
        "tv": "LCD TV",
        "beach": "50m to beach",
        "kitchen": "Shared Kitchen",
        "transfer": "Transfer Service",
        "gallery-title": "Gallery",
        "contact-title": "Contact",
        "address-label": "Address:",
        "address": "Bulair Street 6, Pomorie, Bulgaria",
        "phone-label": "Phone:",
        "email-label": "Email:",
        "rights": "All rights reserved."
    },
    ru: {
        title: "Гостевой дом Фенер",
        subtitle: "Поморие, Болгария",
        "about-title": "О нас",
        "about-text": "Гостевой дом Фенер расположен в старой части города Поморие в непосредственной близости от центра города. Он находится на главной улице Князь Борис I. Гостевой дом Фенер находится в 50 метрах от южного пляжа и в 500 метрах от Северного пляжа. Рядом с гостевым домом Фенер есть продуктовый магазин с банкоматом, рестораны. Мы предлагаем различные типы номеров, которые вы можете посмотреть в галерее. Всем гостям мы предлагаем бесплатный Wi-Fi интернет, кондиционер, террасу, LCD телевизор, чайник, отдельную ванную комнату. Гостевой дом Фенер, Поморие имеет большую общую террасу с видом на море, оборудованную раковиной и кухней. Мы предлагаем трансфер до Несебра, Солнечного берега, Бургаса и аэропорта. Гостевой дом Фенер, Поморие работает круглогодично. Бронирование считается подтвержденным после оплаты депозита. Ждем вас!",
        "amenities-title": "Удобства",
        "wifi": "Бесплатный Wi-Fi",
        "ac": "Кондиционер",
        "tv": "LCD телевизор",
        "beach": "50м до пляжа",
        "kitchen": "Общая кухня",
        "transfer": "Трансфер",
        "gallery-title": "Галерея",
        "contact-title": "Контакты",
        "address-label": "Адрес:",
        "address": "ул. Булаир 6, Поморие, Болгария",
        "phone-label": "Телефон:",
        "email-label": "Email:",
        "rights": "Все права защищены."
    }
};

// Current language
let currentLang = 'bg';

// Gallery photos count
const photoCount = 40;
let currentPhotoIndex = 0;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSwitcher();
    loadGallery();
    initLightbox();
});

// Language Switcher
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
            
            // Update active button
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function switchLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Load Gallery
function loadGallery() {
    const gallery = document.getElementById('gallery');
    
    for (let i = 1; i <= photoCount; i++) {
        const photoNum = String(i).padStart(2, '0');
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-index', i - 1);
        
        const img = document.createElement('img');
        img.src = `images/photo-${photoNum}.jpg`;
        img.alt = `Guest House Fener - Photo ${i}`;
        img.loading = 'lazy';
        
        galleryItem.appendChild(img);
        gallery.appendChild(galleryItem);
    }
}

// Lightbox functionality
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    
    // Open lightbox on gallery item click
    document.addEventListener('click', function(e) {
        if (e.target.closest('.gallery-item')) {
            const galleryItem = e.target.closest('.gallery-item');
            currentPhotoIndex = parseInt(galleryItem.getAttribute('data-index'));
            showPhoto(currentPhotoIndex);
            lightbox.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
    
    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Navigation
    lightboxPrev.addEventListener('click', function() {
        currentPhotoIndex = (currentPhotoIndex - 1 + photoCount) % photoCount;
        showPhoto(currentPhotoIndex);
    });
    
    lightboxNext.addEventListener('click', function() {
        currentPhotoIndex = (currentPhotoIndex + 1) % photoCount;
        showPhoto(currentPhotoIndex);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'block') {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                lightboxPrev.click();
            } else if (e.key === 'ArrowRight') {
                lightboxNext.click();
            }
        }
    });
    
    function showPhoto(index) {
        const photoNum = String(index + 1).padStart(2, '0');
        lightboxImg.src = `images/photo-${photoNum}.jpg`;
    }
    
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

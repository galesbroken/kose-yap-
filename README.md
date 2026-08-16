# Köse Yapı Dekorasyon — Kurumsal Web Sitesi

Köse Yapı Dekorasyon için özel olarak geliştirilmiş modern, responsive ve performans odaklı tek yaprak (one-page) kurumsal web sitesi.

---

## 🌟 Proje Hakkında

Bu proje, Ankara Etimesgut Güzelkent Mahallesi'nde bulunan **Köse Yapı Dekorasyon** firmasının dijital vitrinini modern mimarlık ve iç dekorasyon markalarının estetiğiyle buluşturmak amacıyla **Node.js, Express.js ve EJS** kullanılarak geliştirilmiştir.

### Öne Çıkan Özellikler

- 🏗 **Modern Mimari Estetik**: Koyu antrasit tonlar, mermer ve ahşap dokuları, endüstriyel tipografi ve beton grisi vurgular.
- 📱 **Tam Mobil Uyumluluk (Mobile-First)**: 320px mobil ekranlardan geniş masaüstü monitörlere kadar akıcı görünüm.
- ⚡ **Yüksek Performans & Smooth Animation**: GSAP, ScrollTrigger ve Lenis entegrasyonu ile mikro etkileşimler.
- 🔍 **Teknik SEO Optimizasyonu**: Semantic HTML5 yapısı, Open Graph kartları, dinamik canonical etiketler ve Türkçe arama motoru desteği.
- 📞 **Doğrudan Etkileşim (CTA)**: Tıklanabilir `tel:05334110724` hatları ve doğrudan Google Maps yönlendirmeleri.
- 🔒 **Güvenli Mimarisi**: Express Helmet güvenlik başlıkları ve `.env` yapılandırması.

---

## 🛠 Kullanılan Teknolojiler

- **Backend Framework**: Node.js & Express.js (v4)
- **Şablon Motoru**: EJS & Express EJS Layouts
- **Güvenlik**: Helmet.js (Custom CSP) & Dotenv
- **Tipografi**: Google Fonts (Syne & Plus Jakarta Sans)
- **İkon Seti**: Lucide Icons
- **Animasyon & Kaydırma**: GSAP 3, ScrollTrigger, Lenis Smooth Scroll

---

## 📁 Proje Klasör Yapısı

Armes Bilişim Standart Mimarisi:

```text
kose-yap-/
├── app.js                   # Express uygulama giriş noktası (Port 3000)
├── package.json             # Bağımlılıklar ve npm scriptleri
├── .env                     # Çalışma zamanı ortam değişkenleri
├── .env.example             # Örnek ortam değişkenleri
├── .gitignore               # Git dışlama kuralları
├── README.md                # Proje dokümantasyonu
├── controllers/
│   └── homeController.js   # Sayfa akışı ve render yönetimi
├── services/
│   └── homeService.js      # İş mantığı ve veri sağlayıcısı
├── routes/
│   └── index.js            # Temiz REST rota tanımları
├── middleware/
│   └── errorHandler.js    # Merkeze alınmış 404/500 hata yönetimi
├── views/
│   ├── index.ejs           # Tüm 20 ana bölümü içeren ana sayfa
│   ├── layouts/
│   │   └── main.ejs        # Temel HTML5 düzen şablonu
│   ├── partials/
│   │   ├── header.ejs      # Navigasyon ve mobil menü
│   │   └── footer.ejs      # Alt bilgi ve Armes Bilişim atfı
│   └── errors/
│       └── 404.ejs         # Özel 404 hatası sayfası
└── public/
    ├── css/
    │   └── style.css       # Tasarım sistemi ve ana stiller
    └── js/
        └── main.js         # Etkileşimler ve animasyon kodları
```

---

## 🚀 Çalıştırma Talimatları

### Gereksinimler

- Node.js (v18+)
- npm (v9+)

### Adımlar

1. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

2. `.env` dosyasını kontrol edin veya oluşturun:
   ```env
   PORT=3000
   NODE_ENV=development
   ```

3. Uygulamayı başlatın:
   ```bash
   npm start
   ```

4. Tarayıcınızda açın:
   ```text
   http://localhost:3000
   ```

---

## 📄 Lisans & Atıf

Bu proje **Armes Bilişim** standartlarına uygun olarak Köse Yapı Dekorasyon için üretilmiştir.

Footer alanında yer alan **Armes Bilişim tarafından oluşturulmuştur** bağlantısı (`https://armesbilisim.com`) saklıdır.

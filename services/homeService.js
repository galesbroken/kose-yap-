/**
 * Köse Yapı Dekorasyon - Home Service
 * Service layer for managing business data and page configuration.
 */

const getCompanyInfo = () => {
  return {
    name: 'Köse Yapı Dekorasyon',
    title: 'Köse Yapı Dekorasyon | Etimesgut Ankara Yapı Malzemeleri',
    description: "Köse Yapı Dekorasyon, Etimesgut Ankara'da yapı malzemeleri ve dekorasyon ihtiyaçları için ürün seçenekleri sunan fiziksel mağazadır.",
    phone: '0533 411 07 24',
    phoneRaw: '05334110724',
    phoneTel: 'tel:05334110724',
    address: 'Güzelkent, 697. Sk. No:4, 06932 Etimesgut/Ankara',
    mapsUrl: 'https://maps.google.com/?q=G%C3%BCzelkent,+697.+Sk.+No:4,+06932+Etimesgut/Ankara',
    website: 'http://www.koseyapi.com/',
    googleRating: '5,0 / 5',
    googleReviewsCount: 1,
    openingInfo: 'Pazartesi 08:00 açılış (Güncel çalışma saatleri için bizi arayın)'
  };
};

const getHeroFeatures = () => {
  return [
    {
      id: 'feature-1',
      icon: 'box',
      title: 'Yapı Malzemeleri',
      description: 'Farklı yapı ve dekorasyon ihtiyaçlarına yönelik kaliteli malzeme seçenekleri.'
    },
    {
      id: 'feature-2',
      icon: 'palette',
      title: 'Dekorasyon',
      description: 'Yaşam alanlarınıza estetik katan malzeme ve kaplama alternatiflerini değerlendirin.'
    },
    {
      id: 'feature-3',
      icon: 'store',
      title: 'Mağazadan Alışveriş',
      description: 'Ürünleri fiziki mağazamızda yakından inceleyerek karar verme imkanı.'
    },
    {
      id: 'feature-4',
      icon: 'map-pin',
      title: 'Etimesgut\'ta',
      description: 'Güzelkent konumundaki fiziksel mağazamızda sizi ağırlamaktan mutluluk duyarız.'
    }
  ];
};

const getProductCategories = () => {
  return [
    {
      id: 'seramik-zemin',
      title: 'Seramik & Zemin',
      subtitle: 'Modern Dokular & Geniş Ebatlar',
      description: 'Zemin ve duvar uygulamalarında mekanlara karakter kazandıran seramik ve taş yüzey seçenekleri.',
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1000&q=80',
      badge: 'Mekan Kaplama'
    },
    {
      id: 'banyo',
      title: 'Banyo Çözümleri',
      subtitle: 'Fonksiyonel & Estetik',
      description: 'Modern banyo tasarımlarına uygun, suya dayanıklı yapı malzemeleri ve vitrifiye detayları.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      badge: 'Islak Hacim'
    },
    {
      id: 'mutfak',
      title: 'Mutfak Malzemeleri',
      subtitle: 'Sağlam Yüzeyler & Şık Detaylar',
      description: 'Mutfak alanlarında kullanım kolaylığı ve dayanıklılık sunan yapı ve tezgah ürün seçenekleri.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
      badge: 'Yaşam Alanı'
    },
    {
      id: 'ahsap-parke',
      title: 'Ahşap & Parke',
      subtitle: 'Sıcak Dokular & Doğal Görünüm',
      description: 'İç mekanlara doğal sıcaklık veren ahşap kaplama ve kaliteli zemin parke alternatifleri.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
      badge: 'Doğal Malzeme'
    },
    {
      id: 'dekorasyon',
      title: 'Dekorasyon Çözümleri',
      subtitle: 'Tamamlayıcı Detaylar',
      description: 'Mekanların mimari tarzını öne çıkaran duvar çıtaları, paneller ve dekoratif elemanlar.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
      badge: 'Mimari Detay'
    },
    {
      id: 'yapi-malzemeleri',
      title: 'Yapı Malzemeleri',
      subtitle: 'Temel & Yenileme Gereçleri',
      description: 'Tadilat ve yenileme projelerinde ihtiyaç duyulan teknik ve genel yapı malzemeleri.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
      badge: 'Temel Gereçler'
    }
  ];
};

const getEditorialTextures = () => {
  return [
    {
      id: 'texture-1',
      tag: 'DOĞAL DOKULAR',
      title: 'Taş & Ahşabın Uyanışı',
      description: 'Doğal yüzeylerin özgün dokusu, modern mekanlara zamansız bir kimlik kazandırır.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'texture-2',
      tag: 'MODERN YÜZEYLER',
      title: 'Beton & Metal Dengesi',
      description: 'Endüstriyel hatlar ve minimal detaylar ile mimari çözümlerde çağdaş çizgi.',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'texture-3',
      tag: 'ZAMANSIZ TASARIMLAR',
      title: 'Derinlik Ve Uyum',
      description: 'Işık ve gölgenin malzeme üzerindeki etkileşimiyle oluşturulan seçkin atmosfer.',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    }
  ];
};

const getSafeServices = () => {
  return [
    {
      id: 'service-1',
      title: 'Ürün Seçimi',
      description: 'İhtiyacınıza en uygun malzeme ve ürün alternatiflerini mağazamızda uzman rehberliğinde değerlendirin.',
      icon: 'check-circle-2'
    },
    {
      id: 'service-2',
      title: 'Malzeme İncelemesi',
      description: 'Dokuları, renk tonlarını ve kalite detaylarını yerinde dokunarak yakından görme imkanı.',
      icon: 'eye'
    },
    {
      id: 'service-3',
      title: 'Dekorasyon Seçenekleri',
      description: 'Mekanlarınız için düşündüğünüz konseptlere uyumlu dekoratif kaplama çözümlerini inceleme.',
      icon: 'layers'
    },
    {
      id: 'service-4',
      title: 'Mağaza Deneyimi',
      description: 'Geniş sergileme alanımızda doğru kararı vermek için ürünleri doğrudan karşılaştırma fırsatı.',
      icon: 'building-2'
    }
  ];
};

const getWhyChooseUs = () => {
  return [
    {
      id: 'why-1',
      number: '01',
      title: 'Geniş Ürün Yelpazesi',
      description: 'Yapı ve dekorasyon ihtiyaçlarınıza yönelik farklı bütçe ve tarzlara uygun zengin seçenekler.'
    },
    {
      id: 'why-2',
      number: '02',
      title: 'Yerinde İnceleme Olanağı',
      description: 'Kataloglar üzerinden değil, fiziksel mağazamızda malzemeleri dokunarak seçme ayrıcalığı.'
    },
    {
      id: 'why-3',
      number: '03',
      title: 'İhtiyaca Odaklı Yaklaşım',
      description: 'Projenizin ölçeğine ve alan gereksinimlerine göre en doğru malzeme alternatiflerini sunma ilkesi.'
    },
    {
      id: 'why-4',
      number: '04',
      title: 'Etimesgut\'ta Merkezi Ulaşım',
      description: 'Güzelkent Mahallesi\'ndeki kolay ulaşılabilir konumumuzda rahat ve hızlı mağaza ziyareti.'
    }
  ];
};

module.exports = {
  getCompanyInfo,
  getHeroFeatures,
  getProductCategories,
  getEditorialTextures,
  getSafeServices,
  getWhyChooseUs
};

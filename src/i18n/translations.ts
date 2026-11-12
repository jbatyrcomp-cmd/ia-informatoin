import { Language } from '../types';

export const languageNames: Record<Language, { label: string; native: string; flag: string }> = {
  uz: { label: 'UZ', native: "O'zbekcha", flag: '🇺🇿' },
  tk: { label: 'TK', native: 'Türkmençe', flag: '🇹🇲' },
  ru: { label: 'RU', native: 'Русский', flag: '🇷🇺' },
  en: { label: 'EN', native: 'English', flag: '🇬🇧' },
};

export interface UITranslations {
  nav: {
    home: string;
    itWorld: string;
    aiHistory: string;
    models: string;
    compare: string;
    about: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    ctaExploreIT: string;
    ctaCompareAI: string;
    ctaAdvisor: string;
    dragHint: string;
  };
  home: {
    pillarsTitle: string;
    pillarsSubtitle: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
    openSection: string;
    featuredModelsTitle: string;
    featuredModelsSubtitle: string;
    viewAllModels: string;
    advisorBannerTitle: string;
    advisorBannerDesc: string;
    advisorBannerBtn: string;
    statsModels: string;
    statsLanguages: string;
    statsEras: string;
    statsInteractive: string;
  };
  itPage: {
    badge: string;
    title: string;
    subtitle: string;
    tabHistory: string;
    tabTypes: string;
    tabHowItWorks: string;
    keyFigures: string;
    impact: string;
    technologies: string;
    examples: string;
    stackTitle: string;
    stackSubtitle: string;
    whatItDoes: string;
    howItWorksLabel: string;
    realExample: string;
    layerSelectHint: string;
  };
  aiHistoryPage: {
    badge: string;
    title: string;
    subtitle: string;
    neuralTitle: string;
    neuralSubtitle: string;
    timelineTitle: string;
    eraControlHint: string;
    typesTitle: string;
    typesSubtitle: string;
    howLLMTitle: string;
    howLLMSubtitle: string;
  };
  modelsPage: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allCategories: string;
    allPricing: string;
    catLLM: string;
    catCoding: string;
    catImage: string;
    catVideo: string;
    catAudio: string;
    catResearch: string;
    priceFree: string;
    priceFreemium: string;
    pricePaid: string;
    priceOpenSource: string;
    detailsBtn: string;
    compareBtn: string;
    noResults: string;
    modalCapabilities: string;
    modalBestFor: string;
    modalLimitations: string;
    modalTips: string;
    modalSpecs: string;
    modalScores: string;
    visitOfficial: string;
    close: string;
    uzbekSupport: string;
    uzExcellent: string;
    uzGood: string;
    uzBasic: string;
    uzNA: string;
  };
  comparePage: {
    badge: string;
    title: string;
    subtitle: string;
    tabVS: string;
    tabAdvisor: string;
    selectModelA: string;
    selectModelB: string;
    swapModels: string;
    radarTitle: string;
    tableTitle: string;
    verdictTitle: string;
    metricLabel: string;
    developer: string;
    category: string;
    releaseYear: string;
    pricing: string;
    contextLimit: string;
    openSource: string;
    yes: string;
    no: string;
    uzbekLang: string;
    bestForLabel: string;
    limitationsLabel: string;
    overallScore: string;
    winner: string;
    tie: string;
    scores: {
      reasoning: string;
      coding: string;
      creativity: string;
      speed: string;
      multimodal: string;
      uzbekAndMultilingual: string;
      costEfficiency: string;
    };
  };
  advisor: {
    title: string;
    subtitle: string;
    stepOf: string;
    q1Title: string;
    q2Title: string;
    q3Title: string;
    q4Title: string;
    goals: {
      textStudy: string;
      coding: string;
      image: string;
      video: string;
      audio: string;
      research: string;
    };
    budgets: {
      freeOnly: string;
      freemium: string;
      proPaid: string;
      openSource: string;
    };
    langNeeds: {
      uzbekImportant: string;
      englishOrRussian: string;
      visualAudio: string;
    };
    priorities: {
      maxIntelligence: string;
      highSpeed: string;
      balanced: string;
    };
    next: string;
    back: string;
    showResults: string;
    restart: string;
    resultsTitle: string;
    resultsSubtitle: string;
    matchLabel: string;
    compareTopTwo: string;
  };
  aboutPage: {
    badge: string;
    title: string;
    subtitle: string;
    missionTitle: string;
    missionText: string;
    authorTitle: string;
    authorNote: string;
    contactFormTitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendBtn: string;
    sentSuccess: string;
    techTitle: string;
    techDesc: string;
  };
  footer: {
    rights: string;
    builtFor: string;
    quickLinks: string;
    languages: string;
  };
}

export const translations: Record<Language, UITranslations> = {
  uz: {
    nav: {
      home: 'Bosh sahifa',
      itWorld: 'IT Dunyosi',
      aiHistory: 'AI Tarixi',
      models: 'AI Modellari',
      compare: 'Solishtirish & AI Tanlash',
      about: 'Loyiha haqida',
    },
    hero: {
      badge: "aybekova.uz • 3D Interaktiv IT & AI Ensiklopediyasi",
      titleStart: "Texnologiya va ",
      titleHighlight: "Sun'iy Intellekt",
      titleEnd: " olamini 3D formatda kashf eting",
      subtitle:
        "IT sohasining paydo bo'lishidan tortib, zamonaviy AI modellarining ishlash mexanizmi va ularning imkoniyatlarini jonli taqqoslashgacha — barchasi bitta zamonaviy portalda.",
      ctaExploreIT: "IT Dunyosini o'rganish",
      ctaCompareAI: "AI Modellarni solishtirish",
      ctaAdvisor: "Qaysi AI menga mos?",
      dragHint: "3D sahnani sichqoncha bilan aylantirib ko'ring",
    },
    home: {
      pillarsTitle: "Portalning asosiy yo'nalishlari",
      pillarsSubtitle:
        "Har bir bo'lim nazariy bilimlarni interaktiv 3D vizualizatsiya va amaliy taqqoslashlar bilan birlashtiradi.",
      pillar1Title: "IT Tarixi, Turlari va Ishlashi",
      pillar1Desc:
        "Birinchi hisoblash mashinalaridan bulutli texnologiyalargacha: dasturlash, tarmoqlar, kiberxavfsizlik va kompyuter qanday ishlashi.",
      pillar2Title: "AI Tarixi va Yaralishi",
      pillar2Desc:
        "1950-yil Turing testidan 2017-yil Transformer inqilobi va 2026-yilgi multimodal agentlargacha bo'lgan to'liq tarix.",
      pillar3Title: "Barcha AI Vositalari & Modellari",
      pillar3Desc:
        "Matn, kod, rasm, video, audio va tadqiqot uchun eng so'nggi AI modellari katalogi hamda ulardan foydalanish sirlari.",
      pillar4Title: "2 Modelni Solishtirish & Maslahatchi",
      pillar4Desc:
        "Istalgan 2 ta AI modelini 7 ta mezon bo'yicha radar grafikda solishtiring yoki o'z vazifangizga mos AI ni tanlang.",
      openSection: "Bo'limga o'tish",
      featuredModelsTitle: "Mashhur zamonaviy AI modellari",
      featuredModelsSubtitle:
        "Eng so'nggi avlod neyron tarmoqlari va ularning asosiy kuchli tomonlari bilan tanishing.",
      viewAllModels: "Barcha modellarni ko'rish",
      advisorBannerTitle: "Qaysi AI modeli sizning vazifangizga eng mos?",
      advisorBannerDesc:
        "4 ta qisqa savolga javob bering va tizim sizga byudjet, til va vazifangizga qarab eng yaxshi 3 ta AI vositasini tavsiya qiladi.",
      advisorBannerBtn: "Testni boshlash",
      statsModels: "Zamonaviy AI modellari",
      statsLanguages: "Qo'llab-quvvatlanuvchi tillar",
      statsEras: "Tarixiy davr va bosqichlar",
      statsInteractive: "3D Interaktiv sahnalar",
    },
    itPage: {
      badge: "Information Technology • To'liq qo'llanma",
      title: "IT Dunyosi: Tarixi, Turlari va Ishlash Tizimi",
      subtitle:
        "Axborot texnologiyalari qanday yaralgan, qanday asosiy yo'nalishlarga bo'linadi va kompyuterdan internetgacha bo'lgan tizimlar qanday ishlaydi?",
      tabHistory: "IT Tarixi va Rivojlanishi",
      tabTypes: "IT Turlari (Sohalar)",
      tabHowItWorks: "IT Qanday Ishlaydi? (3D Tizim)",
      keyFigures: "Muhim shaxslar va ixtirolar",
      impact: "Dunyoga ta'siri",
      technologies: "Asosiy texnologiyalar",
      examples: "Amaliy misollar",
      stackTitle: "Kompyuter va Internetning 5 qatlamli ishlash tizimi",
      stackSubtitle:
        "Chapdagi 3D qatlamlarni yoki o'ngdagi bosqichlarni bosib, signal qanday qilib tokdan tayyor ilovaga aylanishini ko'ring.",
      whatItDoes: "Nima vazifa bajaradi?",
      howItWorksLabel: "Ichki ishlash mexanizmi",
      realExample: "Hayotiy misol",
      layerSelectHint: "Qatlamni tanlang",
    },
    aiHistoryPage: {
      badge: "Artificial Intelligence • 1950–2026",
      title: "Sun'iy Intellekt Tarixi va Yaralish Mexanizmi",
      subtitle:
        "Insoniyat fikrlaydigan mashinalarni qanday yaratdi? Turing g'oyasidan zamonaviy Transformer va mantiqiy (Reasoning) AI modellarigacha.",
      neuralTitle: "3D Neyron Tarmoq Simulyatsiyasi",
      neuralSubtitle:
        "Quyidagi davrlardan birini tanlang va AI miyasi qanday murakkablashganini 3D neyron to'rda kuzating.",
      timelineTitle: "AI Rivojlanish Xronologiyasi",
      eraControlHint: "Davrni tanlang",
      typesTitle: "Sun'iy Intellekt Turlari va Darajalari",
      typesSubtitle:
        "Tor (ANI), Umumiy (AGI) va Superintellekt (ASI) hamda Machine Learning va Deep Learning o'rtasidagi farq.",
      howLLMTitle: "Zamonaviy AI (LLM) qanday ishlaydi?",
      howLLMSubtitle:
        "Siz yozgan matn AI ichida 4 ta asosiy bosqichdan o'tib aqlli javobga aylanadi.",
    },
    modelsPage: {
      badge: "AI Ekotizimi • Katalog va Qo'llanma",
      title: "AI Vositalari va Modellari",
      subtitle:
        "Matn, dasturlash, rasm, video, audio va tadqiqot uchun eng so'nggi AI modellari. Har bir model ustiga bosib batafsil imkoniyatlarini o'qing.",
      searchPlaceholder: "Model nomi, kompaniya yoki imkoniyat bo'yicha qidiring...",
      allCategories: "Barcha turlar",
      allPricing: "Barcha narxlar",
      catLLM: "Matn & Mantiq (LLM)",
      catCoding: "Kodlash & Dasturlash",
      catImage: "Rasm yaratish",
      catVideo: "Video yaratish",
      catAudio: "Audio & Musiqa",
      catResearch: "Qidiruv & Agentlar",
      priceFree: "Bepul",
      priceFreemium: "Bepul + Pro",
      pricePaid: "Pullik",
      priceOpenSource: "Ochiq kodli",
      detailsBtn: "Batafsil",
      compareBtn: "Solishtirish",
      noResults: "Qidiruv bo'yicha model topilmadi. Filtrni o'zgartirib ko'ring.",
      modalCapabilities: "Asosiy imkoniyatlari",
      modalBestFor: "Qaysi ishlarda eng zo'r?",
      modalLimitations: "Cheklovlari",
      modalTips: "Foydalanish bo'yicha maslahat",
      modalSpecs: "Texnik ma'lumotlar",
      modalScores: "Imkoniyatlar reytingi (100 ballik)",
      visitOfficial: "Rasmiy saytiga o'tish",
      close: "Yopish",
      uzbekSupport: "O'zbek tilini bilishi",
      uzExcellent: "A'lo darajada",
      uzGood: "Yaxshi",
      uzBasic: "O'rtacha",
      uzNA: "Vizual/Audio (til shart emas)",
    },
    comparePage: {
      badge: "VS Taqqoslash & AI Tanlash",
      title: "AI Modellarni Solishtirish Tizimi",
      subtitle:
        "Istalgan ikkita AI modelini yonma-yon qo'yib imkoniyatlarini solishtiring yoki interaktiv maslahatchi orqali o'zingizga mosini toping.",
      tabVS: "2 Modelni Solishtirish (VS)",
      tabAdvisor: "Qaysi AI menga mos?",
      selectModelA: "1-modelni tanlang",
      selectModelB: "2-modelni tanlang",
      swapModels: "O'rnini almashtirish",
      radarTitle: "7 ta mezon bo'yicha 360° Radar Taqqoslash",
      tableTitle: "Texnik va amaliy ko'rsatkichlar taqqoslamasi",
      verdictTitle: "Umumiy xulosa va tavsiya",
      metricLabel: "Mezon",
      developer: "Yaratuvchi kompaniya",
      category: "Yo'nalish",
      releaseYear: "Avlod / Yil",
      pricing: "Narx modeli",
      contextLimit: "Kontekst / Hajm",
      openSource: "Ochiq kodli (Open Source)",
      yes: "Ha",
      no: "Yo'q",
      uzbekLang: "O'zbek tili sifati",
      bestForLabel: "Eng kuchli tomonlari",
      limitationsLabel: "Kamchiliklari",
      overallScore: "Umumiy o'rtacha ball",
      winner: "Ustunlik",
      tie: "Teng kuchli",
      scores: {
        reasoning: "Mantiq va tahlil",
        coding: "Dasturlash",
        creativity: "Kreativlik",
        speed: "Tezlik",
        multimodal: "Multimodallik",
        uzbekAndMultilingual: "O'zbek va ko'p tillilik",
        costEfficiency: "Narx / Sifat",
      },
    },
    advisor: {
      title: "Qaysi AI menga mos? — Interaktiv Maslahatchi",
      subtitle:
        "Vazifangiz va sharoitingizni belgilang, biz sizga eng samarali AI modellarini saralab beramiz.",
      stepOf: "Bosqich",
      q1Title: "1. AI sizga asosan nima uchun kerak?",
      q2Title: "2. Narx va kirish sharti qanday bo'lsin?",
      q3Title: "3. Qaysi til siz uchun muhim?",
      q4Title: "4. Siz uchun nima ustuvor?",
      goals: {
        textStudy: "Matn yozish, tarjima, o'qish va tahlil",
        coding: "Dasturlash, kod yozish va xatolarni topish",
        image: "Rasm, dizayn va illyustratsiya yaratish",
        video: "Video, reklama va animatsiya yaratish",
        audio: "Ovozlashtirish, podkast va musiqa yaratish",
        research: "Ilmiy tadqiqot, manbali qidiruv va hujjatlar",
      },
      budgets: {
        freeOnly: "Faqat bepul rejimi bo'lsin",
        freemium: "Bepul boshlash + kerak bo'lsa Pro",
        proPaid: "Eng yuqori sifat uchun pullik obuna ham mayli",
        openSource: "Ochiq kodli (kompyuterda/serverda ishlatish)",
      },
      langNeeds: {
        uzbekImportant: "O'zbek tilini mukammal tushunishi shart",
        englishOrRussian: "Ingliz yoki Rus tilida ishlayman",
        visualAudio: "Asosan rasm/video/kod (til unchalik muhim emas)",
      },
      priorities: {
        maxIntelligence: "Maksimal aql va aniqlik (chuqur fikrlash)",
        highSpeed: "Tezkor javob va qulay interfeys",
        balanced: "Hamma narsadan muvozanatli (Universal)",
      },
      next: "Keyingi",
      back: "Orqaga",
      showResults: "Natijani ko'rish",
      restart: "Qaytadan tanlash",
      resultsTitle: "Siz uchun eng mos AI modellari",
      resultsSubtitle: "Tanlovlaringiz asosida eng yuqori moslikka ega 3 ta vosita:",
      matchLabel: "moslik",
      compareTopTwo: "Top 2 modelni solishtirish",
    },
    aboutPage: {
      badge: "aybekova.uz • Missiya va Aloqa",
      title: "Loyiha haqida",
      subtitle:
        "aybekova.uz — O'zbekiston va Markaziy Osiyo foydalanuvchilari uchun IT va Sun'iy Intellekt bilimlarini sodda, aniq va zamonaviy 3D formatda taqdim etuvchi portal.",
      missionTitle: "Portal maqsadi",
      missionText:
        "Bugungi kunda IT va AI texnologiyalari soat sayin o'zgarmoqda. Ushbu portal har bir o'quvchi, dasturchi, tadbirkor va qiziquvchiga texnologiyalar tarixini, ularning qanday ishlashini va o'z vazifasi uchun qaysi AI vositasini tanlash kerakligini tushunarli tilda ko'rsatib berish uchun yaratilgan.",
      authorTitle: "Muallif va Loyiha ma'lumotlari",
      authorNote:
        "Eslatma: Muallif nomi, email va ijtimoiy tarmoq havolalarini src/data/siteConfig.ts fayli orqali oson tahrirlashingiz mumkin.",
      contactFormTitle: "Taklif yoki savol yuborish",
      nameLabel: "Ismingiz",
      emailLabel: "Email manzilingiz",
      messageLabel: "Xabaringiz",
      sendBtn: "Xabarni yuborish",
      sentSuccess: "Rahmat! Xabaringiz qabul qilindi (demo rejim — backend ulanganda to'g'ridan-to'g'ri yuboriladi).",
      techTitle: "Sayt texnologiyalari",
      techDesc:
        "Ushbu portal React, TypeScript, Tailwind CSS va Three.js (WebGL 3D) texnologiyalari asosida yengil, tezkor va barcha qurilmalarga moslashuvchan qilib qurilgan.",
    },
    footer: {
      rights: "Barcha huquqlar himoyalangan.",
      builtFor: "Zamonaviy 3D texnologiyalari bilan yaratildi",
      quickLinks: "Bo'limlar",
      languages: "Tillar",
    },
  },

  tk: {
    nav: {
      home: 'Baş sahypa',
      itWorld: 'IT Dünýäsi',
      aiHistory: 'AI Taryhy',
      models: 'AI Modelleri',
      compare: 'Deňeşdirme & AI Saýlamak',
      about: 'Taslama barada',
    },
    hero: {
      badge: 'aybekova.uz • 3D Interaktiw IT & AI Ensiklopediýasy',
      titleStart: 'Tehnologiýa we ',
      titleHighlight: 'Emeli Aň',
      titleEnd: ' dünýäsini 3D görnüşinde öwreniň',
      subtitle:
        'IT pudagynyň döreýşinden başlap, häzirki zaman AI modelleriniň işleme mehanizmi we olaryň mümkinçiliklerini janly deňeşdirmäge çenli — hemmesi bir döwrebap portalda.',
      ctaExploreIT: 'IT Dünýäsini öwrenmek',
      ctaCompareAI: 'AI Modellerini deňeşdirmek',
      ctaAdvisor: 'Haýsy AI maňa laýyk?',
      dragHint: '3D sahnany syçanjyk bilen aýlap görüň',
    },
    home: {
      pillarsTitle: 'Portalyň esasy ugurlary',
      pillarsSubtitle:
        'Her bölüm nazary bilimleri interaktiw 3D wizualizasiýa we amaly deňeşdirmeler bilen birleşdirýär.',
      pillar1Title: 'IT Taryhy, Görünüşleri we Işleýşi',
      pillar1Desc:
        'Ilkinji hasaplaýyş maşynlaryndan bulut tehnologiýalaryna çenli: programmirleme, torlar, kiberhowpsuzlyk we kompýuteriň işleýşi.',
      pillar2Title: 'AI Taryhy we Döreýşi',
      pillar2Desc:
        '1950-nji ýyldaky Turing synagyndan 2017-nji ýyldaky Transformer öwrülişigine we 2026-njy ýyldaky multimodal agentlere çenli doly taryh.',
      pillar3Title: 'Ähli AI Gurallary & Modelleri',
      pillar3Desc:
        'Tekst, kod, surat, wideo, audio we gözleg üçin iň täze AI modelleriniň katalogy we olary ulanmagyň syrlary.',
      pillar4Title: '2 Modeli Deňeşdirmek & Maslahatçy',
      pillar4Desc:
        'Islendik 2 sany AI modelini 7 ölçeg boýunça radar grafikde deňeşdiriň ýa-da öz işiňize laýyk AI saýlaň.',
      openSection: 'Bölüme geçmek',
      featuredModelsTitle: 'Meşhur häzirki zaman AI modelleri',
      featuredModelsSubtitle:
        'Iň täze nesil neýron torlary we olaryň esasy güýçli taraplary bilen tanyşyň.',
      viewAllModels: 'Ähli modelleri görmek',
      advisorBannerTitle: 'Haýsy AI modeli siziň işiňiz üçin iň laýygy?',
      advisorBannerDesc:
        '4 sany gysga soraga jogap beriň we ulgam size býudjet, dil hem-de maksadyňyza görä iň gowy 3 sany AI guralyny maslahat berer.',
      advisorBannerBtn: 'Synagy başlamak',
      statsModels: 'Häzirki zaman AI modelleri',
      statsLanguages: 'Goldanylýan diller',
      statsEras: 'Taryhy döwürler we tapgyrlar',
      statsInteractive: '3D Interaktiw sahnalar',
    },
    itPage: {
      badge: 'Information Technology • Doly gollanma',
      title: 'IT Dünýäsi: Taryhy, Görünüşleri we Işleýiş Ulgamy',
      subtitle:
        'Maglumat tehnologiýalary nädip döredi, haýsy esasy ugurlara bölünýär we kompýuterden internete çenli ulgamlar nädip işleýär?',
      tabHistory: 'IT Taryhy we Ösüşi',
      tabTypes: 'IT Görünüşleri (Ugurlar)',
      tabHowItWorks: 'IT Nädip Işleýär? (3D Ulgam)',
      keyFigures: 'Möhüm şahsyýetler we oýlap tapyşlar',
      impact: 'Dünýä täsiri',
      technologies: 'Esasy tehnologiýalar',
      examples: 'Amaly mysallar',
      stackTitle: 'Kompýuteriň we Internetiň 5 gatlakly işleýiş ulgamy',
      stackSubtitle:
        'Çepdäki 3D gatlaklary ýa-da sagdaky ädimleri basyp, elektrik signallarynyň taýýar programma öwrülişini görüň.',
      whatItDoes: 'Näme iş edýär?',
      howItWorksLabel: 'Içki işleýiş mehanizmi',
      realExample: 'Durmuşy mysal',
      layerSelectHint: 'Gatlagy saýlaň',
    },
    aiHistoryPage: {
      badge: 'Artificial Intelligence • 1950–2026',
      title: 'Emeli Aňyň Taryhy we Dörediliş Mehanizmi',
      subtitle:
        'Adamzat pikirlenýän maşynlary nädip döretdi? Turing pikirinden häzirki zaman Transformer we logiki (Reasoning) AI modellerine çenli.',
      neuralTitle: '3D Neýron Tor Simulýasiýasy',
      neuralSubtitle:
        'Aşakdaky döwürlerden birini saýlaň we AI beýnisiniň nähili çylşyrymlaşandygyny 3D neýron torda synlaň.',
      timelineTitle: 'AI Ösüş Hronologiýasy',
      eraControlHint: 'Döwri saýlaň',
      typesTitle: 'Emeli Aňyň Görünüşleri we Derejeleri',
      typesSubtitle:
        'Dar (ANI), Umumy (AGI) we Superintellekt (ASI), şeýle hem Machine Learning bilen Deep Learning arasyndaky tapawut.',
      howLLMTitle: 'Häzirki zaman AI (LLM) nädip işleýär?',
      howLLMSubtitle:
        'Siziň ýazan tekstiňiz AI içinde 4 sany esasy tapgyrdan geçip akylly jogaba öwrülýär.',
    },
    modelsPage: {
      badge: 'AI Ekoulgamy • Katalog we Gollanma',
      title: 'AI Gurallary we Modelleri',
      subtitle:
        'Tekst, programmirleme, surat, wideo, audio we gözleg üçin iň täze AI modelleri. Jikme-jik mümkinçilikleri okamak üçin modele basyň.',
      searchPlaceholder: 'Modeliň ady, kompaniýa ýa-da mümkinçilik boýunça gözläň...',
      allCategories: 'Ähli görnüşler',
      allPricing: 'Ähli bahalar',
      catLLM: 'Tekst & Logika (LLM)',
      catCoding: 'Kod ýazmak & Programmirleme',
      catImage: 'Surat döretmek',
      catVideo: 'Wideo döretmek',
      catAudio: 'Audio & Saz',
      catResearch: 'Gözleg & Agentler',
      priceFree: 'Mugt',
      priceFreemium: 'Mugt + Pro',
      pricePaid: 'Tölegli',
      priceOpenSource: 'Açyk kodly',
      detailsBtn: 'Giňişleýin',
      compareBtn: 'Deňeşdirmek',
      noResults: 'Gözleg boýunça model tapylmady. Filtrleri üýtgedip görüň.',
      modalCapabilities: 'Esasy mümkinçilikleri',
      modalBestFor: 'Haýsy işlerde iň gowy?',
      modalLimitations: 'Çäklendirmeleri',
      modalTips: 'Ulanmak boýunça maslahat',
      modalSpecs: 'Tehniki maglumatlar',
      modalScores: 'Mümkinçilik reýtingi (100 baldan)',
      visitOfficial: 'Resmi sahypasyna geçmek',
      close: 'Ýapmak',
      uzbekSupport: 'Türki/Özbeg dil goldawy',
      uzExcellent: 'Örän gowy',
      uzGood: 'Gowy',
      uzBasic: 'Ortaça',
      uzNA: 'Wizual/Audio (dil hökman däl)',
    },
    comparePage: {
      badge: 'VS Deňeşdirme & AI Saýlamak',
      title: 'AI Modellerini Deňeşdirme Ulgamy',
      subtitle:
        'Islendik iki sany AI modelini ýanaşyk goýup mümkinçiliklerini deňeşdiriň ýa-da interaktiw maslahatçy arkaly özüňize laýygyny tapyň.',
      tabVS: '2 Modeli Deňeşdirmek (VS)',
      tabAdvisor: 'Haýsy AI maňa laýyk?',
      selectModelA: '1-nji modeli saýlaň',
      selectModelB: '2-nji modeli saýlaň',
      swapModels: 'Ornuny çalyşmak',
      radarTitle: '7 ölçeg boýunça 360° Radar Deňeşdirmesi',
      tableTitle: 'Tehniki we amaly görkezijileriň deňeşdirmesi',
      verdictTitle: 'Umumy netije we maslahat',
      metricLabel: 'Ölçeg',
      developer: 'Dörediji kompaniýa',
      category: 'Ugry',
      releaseYear: 'Nesil / Ýyl',
      pricing: 'Baha modeli',
      contextLimit: 'Kontekst / Möçber',
      openSource: 'Açyk kodly (Open Source)',
      yes: 'Hawa',
      no: 'Ýok',
      uzbekLang: 'Sebit dilleriniň hili',
      bestForLabel: 'Iň güýçli taraplary',
      limitationsLabel: 'Kemçilikleri',
      overallScore: 'Umumy ortaça bal',
      winner: 'Üstünlik',
      tie: 'Deň güýçli',
      scores: {
        reasoning: 'Logika we analiz',
        coding: 'Programmirleme',
        creativity: 'Döredijilik',
        speed: 'Tizlik',
        multimodal: 'Multimodallyk',
        uzbekAndMultilingual: 'Köp dillilik',
        costEfficiency: 'Baha / Hil',
      },
    },
    advisor: {
      title: 'Haýsy AI maňa laýyk? — Interaktiw Maslahatçy',
      subtitle:
        'Maksadyňyzy we şertleriňizi belläň, biz size iň netijeli AI modellerini saýlap bereris.',
      stepOf: 'Ädim',
      q1Title: '1. AI size esasan näme üçin gerek?',
      q2Title: '2. Baha we giriş şerti nähili bolsun?',
      q3Title: '3. Haýsy dil siziň üçin möhüm?',
      q4Title: '4. Siziň üçin näme ileri tutulýar?',
      goals: {
        textStudy: 'Tekst ýazmak, terjime, okamak we analiz',
        coding: 'Programmirleme, kod ýazmak we ýalňyşlary tapmak',
        image: 'Surat, dizaýn we illýustrasiýa döretmek',
        video: 'Wideo, mahabat we animasiýa döretmek',
        audio: 'Seslendirmek, podkast we saz döretmek',
        research: 'Ylmy gözleg, çeşmeli gözleg we resminamalar',
      },
      budgets: {
        freeOnly: 'Diňe mugt görnüşi bolsun',
        freemium: 'Mugt başlamak + gerek bolsa Pro',
        proPaid: 'Iň ýokary hil üçin tölegli abuna hem bolar',
        openSource: 'Açyk kodly (kompýuterde/serwerde işletmek)',
      },
      langNeeds: {
        uzbekImportant: 'Ýerli/Sebit dillerine (Özbeg/Türkmen) gowy düşünmegi gerek',
        englishOrRussian: 'Iňlis ýa-da Rus dilinde işleýärin',
        visualAudio: 'Esasan surat/wideo/kod (dil möhüm däl)',
      },
      priorities: {
        maxIntelligence: 'Maksimal akyl we takyklyk (çuňňur pikirlenme)',
        highSpeed: 'Çalt jogap we amatly interfeýs',
        balanced: 'Hemme zatdan deňagramly (Uniwersal)',
      },
      next: 'Indiki',
      back: 'Yza',
      showResults: 'Netijäni görmek',
      restart: 'Täzeden saýlamak',
      resultsTitle: 'Siziň üçin iň laýyk AI modelleri',
      resultsSubtitle: 'Saýlawlaryňyz esasynda iň ýokary gabat gelýän 3 gural:',
      matchLabel: 'gabat gelme',
      compareTopTwo: 'Top 2 modeli deňeşdirmek',
    },
    aboutPage: {
      badge: 'aybekova.uz • Maksat we Aragatnaşyk',
      title: 'Taslama barada',
      subtitle:
        'aybekova.uz — Merkezi Aziýa ulanyjylary üçin IT we Emeli Aň bilimlerini ýönekeý, takyk we döwrebap 3D formatda hödürleýän portal.',
      missionTitle: 'Portalyň maksady',
      missionText:
        'Häzirki wagtda IT we AI tehnologiýalary sagat saýyn üýtgeýär. Bu portal her bir okuwça, programmirçä, telekeçä we gyzyklanýana tehnologiýalaryň taryhyny, işleýşini we öz işi üçin haýsy AI guralyny saýlamalydygyny düşnükli dilde görkezmek üçin döredildi.',
      authorTitle: 'Awtor we Taslama maglumatlary',
      authorNote:
        'Bellik: Awtoryň adyny, e-poçtasyny we sosial ulgam salgylaryny src/data/siteConfig.ts faýly arkaly aňsatlyk bilen üýtgedip bilersiňiz.',
      contactFormTitle: 'Teklip ýa-da sorag ibermek',
      nameLabel: 'Adyňyz',
      emailLabel: 'Email salgyňyz',
      messageLabel: 'Hatyňyz',
      sendBtn: 'Haty ibermek',
      sentSuccess: 'Sag boluň! Hatyňyz kabul edildi (demo tertibi — serwer birikdirilende göni iberiler).',
      techTitle: 'Saýt tehnologiýalary',
      techDesc:
        'Bu portal React, TypeScript, Tailwind CSS we Three.js (WebGL 3D) tehnologiýalary esasynda ýeňil, çalt we ähli enjamlara uýgunlaşýan görnüşde guruldy.',
    },
    footer: {
      rights: 'Ähli hukuklar goralan.',
      builtFor: 'Döwrebap 3D tehnologiýalary bilen döredildi',
      quickLinks: 'Bölümler',
      languages: 'Diller',
    },
  },

  ru: {
    nav: {
      home: 'Главная',
      itWorld: 'Мир ИТ',
      aiHistory: 'История ИИ',
      models: 'Модели ИИ',
      compare: 'Сравнение & Подбор ИИ',
      about: 'О проекте',
    },
    hero: {
      badge: 'aybekova.uz • 3D Интерактивная энциклопедия ИТ и ИИ',
      titleStart: 'Исследуйте мир технологий и ',
      titleHighlight: 'Искусственного Интеллекта',
      titleEnd: ' в 3D',
      subtitle:
        'От зарождения ИТ-индустрии до устройства современных нейросетей и живого сравнения возможностей ИИ-моделей — всё на одном современном портале.',
      ctaExploreIT: 'Изучить мир ИТ',
      ctaCompareAI: 'Сравнить модели ИИ',
      ctaAdvisor: 'Какой ИИ мне подходит?',
      dragHint: 'Вращайте 3D-сцену с помощью мыши',
    },
    home: {
      pillarsTitle: 'Ключевые разделы портала',
      pillarsSubtitle:
        'Каждый раздел объединяет глубокую теорию с интерактивной 3D-визуализацией и практическими сравнениями.',
      pillar1Title: 'История, виды и устройство ИТ',
      pillar1Desc:
        'От первых вычислительных машин до облачных систем: разработка, сети, кибербезопасность и принцип работы компьютеров.',
      pillar2Title: 'История и создание ИИ',
      pillar2Desc:
        'Полный путь от теста Тьюринга (1950) и революции Transformer (2017) до мультимодальных ИИ-агентов 2026 года.',
      pillar3Title: 'Все ИИ-инструменты и модели',
      pillar3Desc:
        'Каталог новейших нейросетей для текста, кода, изображений, видео, аудио и исследований с советами по применению.',
      pillar4Title: 'Сравнение 2 моделей и советник',
      pillar4Desc:
        'Сравните любые 2 модели ИИ по 7 критериям на радар-диаграмме или подберите идеальный инструмент под вашу задачу.',
      openSection: 'Перейти в раздел',
      featuredModelsTitle: 'Популярные современные модели ИИ',
      featuredModelsSubtitle:
        'Познакомьтесь с нейросетью нового поколения и их ключевыми сильными сторонами.',
      viewAllModels: 'Смотреть все модели',
      advisorBannerTitle: 'Какая модель ИИ лучше всего подойдёт для вашей задачи?',
      advisorBannerDesc:
        'Ответьте на 4 коротких вопроса, и система порекомендует 3 лучших ИИ-инструмента с учётом бюджета, языка и цели.',
      advisorBannerBtn: 'Начать подбор',
      statsModels: 'Современных моделей ИИ',
      statsLanguages: 'Поддерживаемых языка',
      statsEras: 'Исторических этапов',
      statsInteractive: '3D Интерактивных сцен',
    },
    itPage: {
      badge: 'Information Technology • Полный справочник',
      title: 'Мир ИТ: История, Направления и Принцип работы',
      subtitle:
        'Как зародились информационные технологии, на какие отрасли делятся и как всё работает от транзистора до облака.',
      tabHistory: 'История и развитие ИТ',
      tabTypes: 'Виды и направления ИТ',
      tabHowItWorks: 'Как работает ИТ? (3D Система)',
      keyFigures: 'Ключевые личности и изобретения',
      impact: 'Влияние на мир',
      technologies: 'Основные технологии',
      examples: 'Практические примеры',
      stackTitle: '5-уровневая архитектура работы компьютера и интернета',
      stackSubtitle:
        'Нажмите на 3D-слои слева или этапы справа, чтобы увидеть путь от электрического сигнала до готового приложения.',
      whatItDoes: 'Что делает этот уровень?',
      howItWorksLabel: 'Внутренний механизм',
      realExample: 'Пример из жизни',
      layerSelectHint: 'Выберите уровень',
    },
    aiHistoryPage: {
      badge: 'Artificial Intelligence • 1950–2026',
      title: 'История создания и эволюция Искусственного Интеллекта',
      subtitle:
        'Как человечество создало мыслящие машины? От идей Алана Тьюринга до архитектуры Transformer и моделей глубокого рассуждения.',
      neuralTitle: '3D Симуляция Нейронной Сети',
      neuralSubtitle:
        'Выберите историческую эпоху ниже и наблюдайте в 3D, как усложнялась архитектура нейросетей.',
      timelineTitle: 'Хронология развития ИИ',
      eraControlHint: 'Выберите эпоху',
      typesTitle: 'Виды и уровни Искусственного Интеллекта',
      typesSubtitle:
        'Разница между узким ИИ (ANI), общим (AGI) и суперинтеллектом (ASI), а также между ML и Deep Learning.',
      howLLMTitle: 'Как работают современные ИИ (LLM)?',
      howLLMSubtitle:
        'Ваш запрос внутри нейросети проходит 4 ключевых этапа, превращаясь в осмысленный ответ.',
    },
    modelsPage: {
      badge: 'Экосистема ИИ • Каталог и гид',
      title: 'Инструменты и модели ИИ',
      subtitle:
        'Новейшие модели ИИ для текста, программирования, изображений, видео, аудио и исследований. Нажмите на модель для подробностей.',
      searchPlaceholder: 'Поиск по названию, компании или возможностям...',
      allCategories: 'Все категории',
      allPricing: 'Любая цена',
      catLLM: 'Текст и логика (LLM)',
      catCoding: 'Код и разработка',
      catImage: 'Генерация фото',
      catVideo: 'Генерация видео',
      catAudio: 'Аудио и музыка',
      catResearch: 'Поиск и агенты',
      priceFree: 'Бесплатно',
      priceFreemium: 'Бесплатно + Pro',
      pricePaid: 'Платно',
      priceOpenSource: 'Открытый код',
      detailsBtn: 'Подробнее',
      compareBtn: 'Сравнить',
      noResults: 'Модели по вашему запросу не найдены. Попробуйте изменить фильтры.',
      modalCapabilities: 'Ключевые возможности',
      modalBestFor: 'Где показывает лучший результат',
      modalLimitations: 'Ограничения',
      modalTips: 'Советы по использованию',
      modalSpecs: 'Технические параметры',
      modalScores: 'Оценка возможностей (из 100)',
      visitOfficial: 'Перейти на официальный сайт',
      close: 'Закрыть',
      uzbekSupport: 'Поддержка узбекского/языков',
      uzExcellent: 'Отлично',
      uzGood: 'Хорошо',
      uzBasic: 'Базово',
      uzNA: 'Визуал/Аудио (язык не критичен)',
    },
    comparePage: {
      badge: 'VS Сравнение & Подбор ИИ',
      title: 'Система сравнения моделей ИИ',
      subtitle:
        'Поставьте любые две модели ИИ рядом для детального разбора возможностей или воспользуйтесь интерактивным советником.',
      tabVS: 'Сравнить 2 модели (VS)',
      tabAdvisor: 'Какой ИИ мне подходит?',
      selectModelA: 'Выберите модель 1',
      selectModelB: 'Выберите модель 2',
      swapModels: 'Поменять местами',
      radarTitle: '360° Радар-сравнение по 7 критериям',
      tableTitle: 'Сравнение технических и практических характеристик',
      verdictTitle: 'Итоговый вывод и рекомендация',
      metricLabel: 'Критерий',
      developer: 'Разработчик',
      category: 'Категория',
      releaseYear: 'Поколение / Год',
      pricing: 'Модель оплаты',
      contextLimit: 'Контекст / Лимит',
      openSource: 'Открытый код (Open Source)',
      yes: 'Да',
      no: 'Нет',
      uzbekLang: 'Качество узбекского / языков',
      bestForLabel: 'Сильные стороны',
      limitationsLabel: 'Слабые стороны',
      overallScore: 'Общий средний балл',
      winner: 'Преимущество',
      tie: 'Ничья',
      scores: {
        reasoning: 'Логика и анализ',
        coding: 'Программирование',
        creativity: 'Креативность',
        speed: 'Скорость',
        multimodal: 'Мультимодальность',
        uzbekAndMultilingual: 'Мультиязычность',
        costEfficiency: 'Цена / Качество',
      },
    },
    advisor: {
      title: 'Какой ИИ мне подходит? — Интерактивный советник',
      subtitle:
        'Укажите вашу задачу и приоритеты, и мы подберём наиболее эффективные модели ИИ.',
      stepOf: 'Шаг',
      q1Title: '1. Для чего вам в основном нужен ИИ?',
      q2Title: '2. Какой формат оплаты и доступа вам подходит?',
      q3Title: '3. Какой язык для вас приоритетен?',
      q4Title: '4. Что для вас важнее всего?',
      goals: {
        textStudy: 'Работа с текстом, перевод, учёба и аналитика',
        coding: 'Программирование, написание кода и отладка',
        image: 'Создание изображений, дизайна и иллюстраций',
        video: 'Генерация видео, роликов и анимации',
        audio: 'Озвучка, подкасты и создание музыки',
        research: 'Глубокий поиск с источниками и исследования',
      },
      budgets: {
        freeOnly: 'Только полностью бесплатный вариант',
        freemium: 'Бесплатный старт + Pro при необходимости',
        proPaid: 'Готов к платной подписке ради топ-качества',
        openSource: 'Open Source (запуск локально или на своём сервере)',
      },
      langNeeds: {
        uzbekImportant: 'Важно отличное знание узбекского и региональных языков',
        englishOrRussian: 'Работаю на русском или английском языке',
        visualAudio: 'В основном визуал/аудио/код (язык не критичен)',
      },
      priorities: {
        maxIntelligence: 'Максимальный интеллект и точность (глубокий анализ)',
        highSpeed: 'Быстрый отклик и удобство в работе',
        balanced: 'Сбалансированный универсальный вариант',
      },
      next: 'Далее',
      back: 'Назад',
      showResults: 'Показать результат',
      restart: 'Пройти заново',
      resultsTitle: 'Лучшие модели ИИ для вас',
      resultsSubtitle: 'На основе ваших ответов наиболее подходящие 3 инструмента:',
      matchLabel: 'совпадение',
      compareTopTwo: 'Сравнить топ-2 модели',
    },
    aboutPage: {
      badge: 'aybekova.uz • Миссия и контакты',
      title: 'О проекте',
      subtitle:
        'aybekova.uz — современный 3D-портал, созданный для доступного и наглядного изучения ИТ и Искусственного Интеллекта.',
      missionTitle: 'Миссия портала',
      missionText:
        'Технологии ИТ и ИИ развиваются каждый день. Наша цель — дать каждому студенту, разработчику и исследователю понятную базу знаний об устройстве технологий и честное сравнение современных ИИ-инструментов.',
      authorTitle: 'Автор и данные проекта',
      authorNote:
        'Примечание: Имя автора, email и ссылки на соцсети можно легко отредактировать в файле src/data/siteConfig.ts.',
      contactFormTitle: 'Отправить вопрос или предложение',
      nameLabel: 'Ваше имя',
      emailLabel: 'Ваш Email',
      messageLabel: 'Сообщение',
      sendBtn: 'Отправить',
      sentSuccess: 'Спасибо! Ваше сообщение принято (демо-режим — при подключении сервера будет отправляться напрямую).',
      techTitle: 'Технологии сайта',
      techDesc:
        'Портал построен на базе React, TypeScript, Tailwind CSS и Three.js (WebGL 3D) для плавной работы и адаптивности на любых устройствах.',
    },
    footer: {
      rights: 'Все права защищены.',
      builtFor: 'Создано с современными 3D-технологиями',
      quickLinks: 'Разделы',
      languages: 'Языки',
    },
  },

  en: {
    nav: {
      home: 'Home',
      itWorld: 'IT World',
      aiHistory: 'AI History',
      models: 'AI Models',
      compare: 'Compare & AI Advisor',
      about: 'About',
    },
    hero: {
      badge: 'aybekova.uz • 3D Interactive IT & AI Encyclopedia',
      titleStart: 'Explore Information Technology & ',
      titleHighlight: 'Artificial Intelligence',
      titleEnd: ' in 3D',
      subtitle:
        'From the origins of computing to how modern AI models work and live side-by-side capability comparisons — all inside one modern interactive portal.',
      ctaExploreIT: 'Explore IT World',
      ctaCompareAI: 'Compare AI Models',
      ctaAdvisor: 'Which AI fits me?',
      dragHint: 'Drag to orbit the interactive 3D scene',
    },
    home: {
      pillarsTitle: 'Core Pillars of the Portal',
      pillarsSubtitle:
        'Every section combines deep technical clarity with interactive 3D visualizations and practical comparisons.',
      pillar1Title: 'IT History, Types & Architecture',
      pillar1Desc:
        'From early mechanical calculators to cloud computing: software engineering, networking, cybersecurity, and how systems work.',
      pillar2Title: 'AI History & Creation',
      pillar2Desc:
        'The complete journey from the 1950 Turing Test and 2017 Transformer breakthrough to 2026 multimodal and agentic AI.',
      pillar3Title: 'All AI Tools & Models',
      pillar3Desc:
        'Curated directory of leading AI models for text, coding, images, video, audio, and research with practical usage guides.',
      pillar4Title: '2-Model Comparison & Advisor',
      pillar4Desc:
        'Compare any two AI models across 7 radar dimensions or use the interactive advisor to find your best AI match.',
      openSection: 'Open section',
      featuredModelsTitle: 'Featured Modern AI Models',
      featuredModelsSubtitle:
        'Discover next-generation neural models and what each excels at.',
      viewAllModels: 'View all models',
      advisorBannerTitle: 'Not sure which AI model fits your workflow?',
      advisorBannerDesc:
        'Answer 4 quick questions and get your top 3 tailored AI recommendations based on goal, budget, language, and speed.',
      advisorBannerBtn: 'Start Advisor Quiz',
      statsModels: 'Modern AI Models',
      statsLanguages: 'Supported Languages',
      statsEras: 'Historical Milestones',
      statsInteractive: '3D Interactive Scenes',
    },
    itPage: {
      badge: 'Information Technology • Complete Guide',
      title: 'IT World: History, Domains & How It Works',
      subtitle:
        'How information technology evolved, its major branches, and how hardware, operating systems, networks, and cloud apps operate together.',
      tabHistory: 'IT History & Evolution',
      tabTypes: 'IT Domains & Types',
      tabHowItWorks: 'How IT Works (3D Stack)',
      keyFigures: 'Key pioneers & inventions',
      impact: 'Global impact',
      technologies: 'Core technologies',
      examples: 'Real-world examples',
      stackTitle: '5-Layer Computer & Internet Architecture',
      stackSubtitle:
        'Click the 3D layers on the left or steps on the right to see how electricity transforms into cloud applications.',
      whatItDoes: 'What does it do?',
      howItWorksLabel: 'Internal mechanism',
      realExample: 'Real-world example',
      layerSelectHint: 'Select a layer',
    },
    aiHistoryPage: {
      badge: 'Artificial Intelligence • 1950–2026',
      title: 'History of AI & How Modern Models Are Built',
      subtitle:
        'How humanity engineered thinking machines — from Alan Turing to Transformers, Diffusion, and Reasoning models.',
      neuralTitle: '3D Neural Network Simulation',
      neuralSubtitle:
        'Pick an era below to watch how AI neural complexity evolved inside the interactive 3D mesh.',
      timelineTitle: 'AI Evolution Timeline',
      eraControlHint: 'Select era',
      typesTitle: 'Types & Levels of Artificial Intelligence',
      typesSubtitle:
        'Understanding Narrow AI (ANI), General AI (AGI), Superintelligence (ASI), and Machine Learning vs Deep Learning.',
      howLLMTitle: 'How do Modern AI Models (LLMs) work?',
      howLLMSubtitle:
        'Every prompt passes through 4 core stages inside a neural model before producing an answer.',
    },
    modelsPage: {
      badge: 'AI Ecosystem • Directory & Guide',
      title: 'AI Tools & Models',
      subtitle:
        'Leading AI models for text, coding, images, video, audio, and research. Click any model to inspect its full capabilities and tips.',
      searchPlaceholder: 'Search by model name, provider, or capability...',
      allCategories: 'All categories',
      allPricing: 'All pricing',
      catLLM: 'Text & Reasoning (LLM)',
      catCoding: 'Coding & Dev',
      catImage: 'Image Generation',
      catVideo: 'Video Generation',
      catAudio: 'Audio & Music',
      catResearch: 'Research & Agents',
      priceFree: 'Free',
      priceFreemium: 'Freemium',
      pricePaid: 'Paid',
      priceOpenSource: 'Open Source',
      detailsBtn: 'Details',
      compareBtn: 'Compare',
      noResults: 'No models matched your search. Try adjusting filters.',
      modalCapabilities: 'Core Capabilities',
      modalBestFor: 'Best Use Cases',
      modalLimitations: 'Limitations',
      modalTips: 'Practical Usage Tips',
      modalSpecs: 'Specifications',
      modalScores: 'Capability Scores (out of 100)',
      visitOfficial: 'Visit Official Site',
      close: 'Close',
      uzbekSupport: 'Uzbek / Multilingual Support',
      uzExcellent: 'Excellent',
      uzGood: 'Good',
      uzBasic: 'Basic',
      uzNA: 'Visual/Audio (language-agnostic)',
    },
    comparePage: {
      badge: 'VS Comparison & AI Matcher',
      title: 'AI Model Comparison System',
      subtitle:
        'Place any two AI models side by side to evaluate capabilities, or launch the interactive advisor to find your ideal tool.',
      tabVS: 'Compare 2 Models (VS)',
      tabAdvisor: 'Which AI fits me?',
      selectModelA: 'Select Model 1',
      selectModelB: 'Select Model 2',
      swapModels: 'Swap models',
      radarTitle: '360° Radar Comparison across 7 Dimensions',
      tableTitle: 'Technical & Practical Spec Matrix',
      verdictTitle: 'Summary Verdict & Recommendation',
      metricLabel: 'Metric',
      developer: 'Developer',
      category: 'Category',
      releaseYear: 'Generation / Year',
      pricing: 'Pricing Tier',
      contextLimit: 'Context / Output Limit',
      openSource: 'Open Source',
      yes: 'Yes',
      no: 'No',
      uzbekLang: 'Uzbek & Regional Quality',
      bestForLabel: 'Strongest At',
      limitationsLabel: 'Limitations',
      overallScore: 'Overall Average Score',
      winner: 'Advantage',
      tie: 'Tie',
      scores: {
        reasoning: 'Reasoning',
        coding: 'Coding',
        creativity: 'Creativity',
        speed: 'Speed',
        multimodal: 'Multimodality',
        uzbekAndMultilingual: 'Multilingual',
        costEfficiency: 'Cost Efficiency',
      },
    },
    advisor: {
      title: 'Which AI fits me? — Interactive Advisor',
      subtitle:
        'Specify your workflow and preferences to receive tailored AI model recommendations.',
      stepOf: 'Step',
      q1Title: '1. What is your primary goal for using AI?',
      q2Title: '2. What pricing and access model do you prefer?',
      q3Title: '3. Which language capability matters most?',
      q4Title: '4. What is your top priority?',
      goals: {
        textStudy: 'Writing, translation, studying, and analysis',
        coding: 'Software development, coding, and debugging',
        image: 'Creating images, design, and illustrations',
        video: 'Generating videos, ads, and animations',
        audio: 'Voiceovers, podcasts, and music creation',
        research: 'Cited research, deep web search, and documents',
      },
      budgets: {
        freeOnly: 'Strictly free tier',
        freemium: 'Free to start + Pro if needed',
        proPaid: 'Willing to pay for top quality',
        openSource: 'Open source (self-hosted / local)',
      },
      langNeeds: {
        uzbekImportant: 'Strong Uzbek / regional language support is essential',
        englishOrRussian: 'I work primarily in English or Russian',
        visualAudio: 'Mainly visual/audio/code (human language less critical)',
      },
      priorities: {
        maxIntelligence: 'Maximum intelligence & deep reasoning',
        highSpeed: 'Fast responses & smooth workflow',
        balanced: 'Balanced all-rounder',
      },
      next: 'Next',
      back: 'Back',
      showResults: 'Show Recommendations',
      restart: 'Start Over',
      resultsTitle: 'Top Recommended AI Models for You',
      resultsSubtitle: 'Based on your answers, here are your top 3 matches:',
      matchLabel: 'match',
      compareTopTwo: 'Compare Top 2 Models',
    },
    aboutPage: {
      badge: 'aybekova.uz • Mission & Contact',
      title: 'About the Project',
      subtitle:
        'aybekova.uz is a modern 3D knowledge portal designed to make Information Technology and Artificial Intelligence clear, structured, and accessible.',
      missionTitle: 'Portal Mission',
      missionText:
        'IT and AI are evolving every single week. Our mission is to give learners, developers, and professionals a solid foundation in how technology works alongside an objective comparison of modern AI tools.',
      authorTitle: 'Author & Project Details',
      authorNote:
        'Note: Author name, email, and social links can be easily customized in src/data/siteConfig.ts.',
      contactFormTitle: 'Send a Question or Suggestion',
      nameLabel: 'Your Name',
      emailLabel: 'Your Email',
      messageLabel: 'Message',
      sendBtn: 'Send Message',
      sentSuccess: 'Thank you! Your message has been recorded (demo mode — connect a form backend to send live emails).',
      techTitle: 'Technology Stack',
      techDesc:
        'Built with React, TypeScript, Tailwind CSS, and Three.js (WebGL 3D) for fast loading and responsive 3D interactivity across devices.',
    },
    footer: {
      rights: 'All rights reserved.',
      builtFor: 'Crafted with modern 3D web technology',
      quickLinks: 'Sections',
      languages: 'Languages',
    },
  },
};


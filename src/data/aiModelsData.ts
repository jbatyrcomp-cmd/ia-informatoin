import { AIModelItem } from '../types';

export const aiModelsData: AIModelItem[] = [
  {
    "id": "gpt-1",
    "name": "GPT-1 (Generative Pre-trained)",
    "provider": "OpenAI",
    "category": "llm",
    "releaseYear": "2018",
    "pricingTier": "opensource",
    "priceSummary": {
      "uz": "Ochiq ilmiy model / Tarixiy",
      "tk": "Açyk ylmy model / Taryhy",
      "ru": "Открытая исследовательская модель",
      "en": "Open Research Model / Historical"
    },
    "contextOrLimit": "512 tokens (117M parametr)",
    "accentColor": "#64748b",
    "isOpenSource": true,
    "supportsUzbek": "poor",
    "websiteUrl": "https://openai.com/research/language-unsupervised",
    "logoKey": "openai",
    "releasedModels": [
      "GPT-1 (2018)",
      "GPT-2 (2019)",
      "GPT-3 (2020)",
      "InstructGPT (2022)",
      "ChatGPT / GPT-3.5 (2022)",
      "GPT-4 (2023)",
      "GPT-4 Turbo (2023)",
      "GPT-4o (2024)",
      "OpenAI o1 (2024)",
      "OpenAI o3 / GPT-5 (2025-2026)"
    ],
    "tagline": {
      "uz": "Generative Pre-training Transformer va zamonaviy LLM inqilobining ibtidosi (117M parametr)",
      "tk": "Generative Pre-training Transformer we döwrebap LLM rewolýusiýasynyň başlangyjy",
      "ru": "Первая модель серии GPT (117M параметров), открывшая эпоху дообучения трансформеров",
      "en": "The seminal 117M parameter Generative Pre-trained Transformer that launched the modern LLM era"
    },
    "description": {
      "uz": "GPT-1 — 2018-yilda Alek Radford va OpenAI jamoasi tomonidan yaratilgan, nazoratsiz oldindan o'qitish (unsupervised pre-training) va so'ngra nazorat ostida nozik sozlash (supervised fine-tuning) usulini isbotlab bergan ilk model. Zamonaviy barcha katta til modellarining poydevori hisoblanadi.",
      "tk": "GPT-1 — 2018-nji ýylda OpenAI tarapyndan döredilen ilkinji pre-trained transformer modelidir.",
      "ru": "GPT-1 — историческая модель 2018 года, доказавшая эффективность двухэтапного обучения трансформеров: предобучения на сыром тексте и последующей тонкой настройки.",
      "en": "GPT-1 proved in 2018 that generative pre-training on raw text followed by task-specific fine-tuning achieves breakthrough performance across natural language tasks."
    },
    "capabilities": {
      "uz": [
        "Oddiy matnlarni davom ettirish va tasniflash (classification)",
        "BookCorpus (7000 ta kitob) ma'lumotlar bazasida 12 qatlamli Transformer",
        "Ingliz tilidagi grammatik bog'liqliklarni o'rganish",
        "Zamonaviy prompt muhandisligi va LLM-larning nazariy asosi"
      ],
      "tk": [
        "Ýönekeý tekstleri dowam etmek we toparlamak",
        "BookCorpus esasynda 12 gatlakly Transformer",
        "Iňlis dilinde grammatiki gatnaşyklar",
        "Döwrebap LLM-leriň taryhy esasy"
      ],
      "ru": [
        "Базовая генерация текста и классификация предложений",
        "12-слойная архитектура декодера Transformer на датасете BookCorpus",
        "Первый перенос знаний (transfer learning) без изменения архитектуры",
        "Исторический фундамент всех современных моделей OpenAI"
      ],
      "en": [
        "Foundational unsupervised pre-training and supervised fine-tuning",
        "12-layer Transformer decoder trained on BookCorpus (7,000+ books)",
        "Zero-shot knowledge transfer baseline across natural language benchmarks",
        "The historic catalyst for GPT-2, GPT-3, and ChatGPT"
      ]
    },
    "bestUseCases": {
      "uz": [
        "AI tarixi va tadqiqotlari",
        "Transformer arxitekturasini o'rganish",
        "Akademik taqqoslashlar"
      ],
      "tk": [
        "AI taryhy we ylmy gözlegler",
        "Transformer arhitekturasyny öwrenmek",
        "Akademik deňeşdirme"
      ],
      "ru": [
        "Изучение истории развития ИИ",
        "Академический анализ архитектуры трансформеров",
        "Бенчмаркинг эволюции"
      ],
      "en": [
        "AI history and academic research",
        "Educational study of Transformer decoders",
        "Evolutionary benchmark comparisons"
      ]
    },
    "limitations": {
      "uz": [
        "Kontekst oynasi bor-yo'g'i 512 token, dialog (chat) formati va ko'p tillilik yo'q"
      ],
      "tk": [
        "Kontekst diňe 512 token, söhbetdeşlik formaty ýok"
      ],
      "ru": [
        "Окно контекста всего 512 токенов, отсутствие диалогового режима и мультиязычности"
      ],
      "en": [
        "Strict 512 token limit, no conversational chat tuning, poor multilingual ability"
      ]
    },
    "usageTips": {
      "uz": "Ring arenada ushbu modelni 2026-yilgi Gemini 4 Argon yoki OpenAI o3 bilan solishtirib, sun'iy intellekt 8 yil ichida qanday mislsiz o'sganini ko'ring.",
      "tk": "Ring arenasynda bu modeli 2026-njy ýylyň modelleri bilen deňeşdiriň.",
      "ru": "Сравните эту модель в Ринге с Gemini 4 Argon или o3, чтобы наглядно оценить скачок за 8 лет.",
      "en": "Pit GPT-1 against Gemini 4 Argon or OpenAI o3 in the Ring to visualize 8 years of AI growth."
    },
    "scores": {
      "reasoning": 25,
      "coding": 18,
      "creativity": 32,
      "speed": 68,
      "multimodal": 10,
      "uzbekAndMultilingual": 18,
      "costEfficiency": 80
    }
  },
  {
    "id": "gpt-2",
    "name": "GPT-2 (1.5 Billion)",
    "provider": "OpenAI",
    "category": "llm",
    "releaseYear": "2019",
    "pricingTier": "opensource",
    "priceSummary": {
      "uz": "Ochiq manba (Hugging Face da bepul)",
      "tk": "Açyk çeşme (Hugging Face mugt)",
      "ru": "Открытый исходный код (Open Source)",
      "en": "Open Source (HuggingFace weights free)"
    },
    "contextOrLimit": "1,024 tokens (1.5B parametr)",
    "accentColor": "#475569",
    "isOpenSource": true,
    "supportsUzbek": "fair",
    "websiteUrl": "https://openai.com/research/better-language-models",
    "logoKey": "openai",
    "releasedModels": [
      "GPT-1 (2018)",
      "GPT-2 (2019)",
      "GPT-3 (2020)",
      "ChatGPT (2022)",
      "GPT-4 (2023)",
      "GPT-4o (2024)",
      "o1 & o3 (2024-2026)"
    ],
    "tagline": {
      "uz": "1.5 milliard parametrli matn generatori: 'Chiqarish juda xavfli' deb baholangan ilk mashhur model",
      "tk": "1.5 milliard parametrli meşhur tekst generator modeli",
      "ru": "Знаменитая модель на 1.5 млрд параметров, которую OpenAI сначала отказалась выпустить из соображений безопасности",
      "en": "The 1.5B parameter text powerhouse deemed \"too dangerous to release\" due to photorealistic prose"
    },
    "description": {
      "uz": "GPT-2 — 2019-yil fevral oyida e'lon qilingan va o'z davrida inson kabi uzluksiz, mazmunli maqola va hikoyalar yozishi bilan dunyoni hayratga solgan model. WebText (40GB Internet matnlari) orqali o'qitilgan bo'lib, Zero-Shot (hech qanday qo'shimcha misolsiz vazifa bajarish) imkoniyatini ko'rsatgan.",
      "tk": "GPT-2 — 2019-njy ýylda ylmy dünýäni haýran galdyran 1.5 milliard parametrli açyk modeldir.",
      "ru": "GPT-2 продемонстрировала удивительную способность к связной генерации текста без прямого обучения конкретным задачам (Zero-Shot). Модель обучалась на корпусе WebText объемом 40 ГБ.",
      "en": "GPT-2 demonstrated that language models could perform zero-shot tasks (translation, summarization, Q&A) without explicit task-specific training sets simply by scaling up compute and data."
    },
    "capabilities": {
      "uz": [
        "1.5 milliard parametr orqali uzluksiz maqolalar va hikoyalar to'qish",
        "Zero-Shot o'rganish: tarjima, xulosalash va savol-javobni qo'shimcha o'qitmasdan bajarish",
        "Hugging Face va lokal kompyuterlarda to'liq mustaqil ishlay olishi",
        "Internetdagi 8 milliondan ortiq Reddit havolalari matnida tayyorlangan"
      ],
      "tk": [
        "1.5 milliard parametr arkaly erkin makalalar we hekaýalar döretmek",
        "Zero-Shot öwreniş: terjime we gysga mazmun çykarmak",
        "Lokal kompýuterde mugt işletmek mümkinçiligi",
        "WebText 40GB internet maglumatlarynda taýýarlanan"
      ],
      "ru": [
        "Генерация связных рассказов, новостных заметок и стихов",
        "Zero-shot адаптация: перевод и суммаризация текста без дообучения",
        "Полная независимость: свободный запуск на локальных GPU и в Hugging Face",
        "Обучение на качественном веб-корпусе WebText (8 млн интернет-страниц)"
      ],
      "en": [
        "Coherent multi-paragraph creative writing and news generation",
        "Pioneering zero-shot capabilities across diverse NLP tasks",
        "Fully open-weights model runnable offline on modern consumer GPUs",
        "Byte-pair encoding (BPE) vocabulary with 50,257 tokens"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Lokal kompyuterda bepul matn tajribalari",
        "AI xavfsizligi va evolyutsiyasini tadqiq qilish",
        "Talabalar uchun LLM amaliyoti"
      ],
      "tk": [
        "Lokal barlaglar we tekst tejribeleri",
        "AI howpsuzlygyny öwrenmek",
        "Talyplar üçin tejribe"
      ],
      "ru": [
        "Офлайн-эксперименты с генерацией текста",
        "Исследования безопасности языковых моделей",
        "Учебные лабораторные работы"
      ],
      "en": [
        "Offline edge NLP experimentation",
        "Historical benchmark analysis",
        "Educational LLM mechanics labs"
      ]
    },
    "limitations": {
      "uz": [
        "Faktik xatolar (gallyutsinatsiya) ko'p, kontekst 1024 token, kod yozish qobiliyati past"
      ],
      "tk": [
        "Faktik ýalňyşlyklar köp, kontekst 1024 token"
      ],
      "ru": [
        "Склонность к галлюцинациям, окно контекста 1024 токена, слабая работа с кодом"
      ],
      "en": [
        "Prone to factual hallucinations, 1024 token ceiling, rudimentary code generation"
      ]
    },
    "usageTips": {
      "uz": "Hugging Face Transformers kutubxonasi orqali `pipeline('text-generation', model='gpt2-xl')` yordamida Python da 3 qatorda ishga tushirish mumkin.",
      "tk": "Python Hugging Face arkaly aňsatlyk bilen işledilýär.",
      "ru": "Запускается локально в 3 строчки Python через библиотеку transformers.",
      "en": "Run it in 3 lines of Python using HuggingFace Transformers pipelines."
    },
    "scores": {
      "reasoning": 42,
      "coding": 30,
      "creativity": 60,
      "speed": 76,
      "multimodal": 10,
      "uzbekAndMultilingual": 35,
      "costEfficiency": 88
    }
  },
  {
    "id": "gpt-3",
    "name": "GPT-3 (Davinci 175B)",
    "provider": "OpenAI",
    "category": "llm",
    "releaseYear": "2020",
    "pricingTier": "paid",
    "priceSummary": {
      "uz": "API token to'lovi ($0.02 / 1K token)",
      "tk": "API token tölegi",
      "ru": "Платный API доступ (OpenAI Playground)",
      "en": "Paid API ($0.02 / 1K tokens)"
    },
    "contextOrLimit": "2,048 tokens (175B parametr)",
    "accentColor": "#334155",
    "isOpenSource": false,
    "supportsUzbek": "good",
    "websiteUrl": "https://openai.com/blog/openai-api",
    "logoKey": "openai",
    "releasedModels": [
      "GPT-1 (2018)",
      "GPT-2 (2019)",
      "GPT-3 Davinci (2020)",
      "InstructGPT (2022)",
      "ChatGPT (2022)",
      "GPT-4 (2023)",
      "o1 & o3 (2024-2026)"
    ],
    "tagline": {
      "uz": "175 milliard parametr va Few-Shot inqilobi: insondek matn yoza oluvchi birinchi gigant",
      "tk": "175 milliard parametrli ägirt model: Few-Shot inqilaby",
      "ru": "Эпохальный прорыв 2020 года: 175 миллиардов параметров и рождение Few-Shot промптинга",
      "en": "The breakthrough 175-billion parameter titan that proved scaling laws and few-shot in-context learning"
    },
    "description": {
      "uz": "GPT-3 — 2020-yil may oyida taqdim etilgan va dunyo miqyosida AI sanoatini tubdan o'zgartirgan model. 175 milliard parametrli ulkan o'lchami bilan 'Few-Shot Learning' imkoniyatini namoyish etdi: modelga bir nechta misol ko'rsatilsa, u darhol yangi qoidani tushunib, shunga mos javob qaytarardi.",
      "tk": "GPT-3 — 2020-nji ýylda suni intellekt pudagyny düýpli üýtgeden 175 milliard parametrli modeldir.",
      "ru": "GPT-3 доказала, что простое увеличение масштаба параметров и данных порождает качественно новые способности у моделей. Модель породила целую индустрию стартапов на базе OpenAI API.",
      "en": "GPT-3 established that scaling parameters to 175B unlocked qualitative leaps in in-context reasoning, translation, creative writing, and basic code synthesis without retraining."
    },
    "capabilities": {
      "uz": [
        "In-Context Learning: 2-3 ta misol orqali yangi vazifalarni bir zumda o'zlashtirish",
        "Murakkab insholar, she'rlar, biznes xatlar va dastlabki Python kodlarini yozish",
        "Ko'p tillilik: ingliz, fransuz, nemis va 50+ tillar, jumladan o'zbek tilidagi matnlarni tushunish",
        "Dunyo bo'ylab yuzlab startaplar (Jasper, Copy.ai va boshqalar) uchun asos bo'lish"
      ],
      "tk": [
        "In-Context Learning: 2-3 sany mysal arkaly täze meseleleri çözmek",
        "Çylşyrymly makalalar, goşgular we başlangyç Python kody",
        "Köp dilli goldaw we sebit dilleri",
        "Dünýädäki ýüzlerçe startap üçin esasy platforma"
      ],
      "ru": [
        "Обучение в контексте (Few-shot prompting): решение задач по нескольким примерам в промпте",
        "Генерация эссе, маркетинговых текстов, юридических писем и базового кода",
        "Понимание более 50 языков мира на приемлемом уровне",
        "Основа для сотен глобальных генеративных стартапов 2020-2022 годов"
      ],
      "en": [
        "In-context few-shot learning directly through prompt examples",
        "High-quality persuasive essays, dialogue simulation, and creative fiction",
        "Multi-lingual comprehension spanning dozens of global languages",
        "The foundational engine that kickstarted the generative AI boom"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Kopirayting va matn generatsiyasi",
        "Katta til modellarining o'sish qonunlarini (Scaling Laws) tahlil qilish",
        "API integratsiyasi tarixi"
      ],
      "tk": [
        "Kopiraýting we tekst döretmek",
        "Scaling Laws barlaglary",
        "API integrasiýasy"
      ],
      "ru": [
        "Коммерческий копирайтинг и маркетинг",
        "Исследование законов масштабирования нейросетей",
        "Анализ эволюции промпт-инжиниринга"
      ],
      "en": [
        "Foundational prompt engineering benchmarks",
        "Commercial copywriting prototypes",
        "Empirical scaling law research"
      ]
    },
    "limitations": {
      "uz": [
        "Inson buyruqlariga to'g'ridan-to'g'ri bo'ysunish qiyin bo'lgan (RLHF hali yo'q edi), javobni o'zboshimchalik bilan davom ettirib yuborardi"
      ],
      "tk": [
        "Buyruklary göni ýerine ýetirmek kynrakdy (RLHF ýokdy)"
      ],
      "ru": [
        "Сложность управления ответом без специального форматирования промптов (до внедрения RLHF)"
      ],
      "en": [
        "Lacked instruction tuning; frequently continued text rather than completing task directly"
      ]
    },
    "usageTips": {
      "uz": "GPT-3 bilan ishlashda eng yaxshi natijaga erishish uchun 'Few-shot' usulida 2-3 ta savol va to'g'ri javob namunalarini kiritish zarur edi.",
      "tk": "Few-shot usuly arkaly 2-3 sany nusga bermek gerekdi.",
      "ru": "Для управления оригинальной GPT-3 требовалось задавать структуру \"Вопрос: ... Ответ: ...\".",
      "en": "Structured Few-shot examples were required to force deterministic task outputs."
    },
    "scores": {
      "reasoning": 64,
      "coding": 54,
      "creativity": 78,
      "speed": 80,
      "multimodal": 15,
      "uzbekAndMultilingual": 58,
      "costEfficiency": 70
    }
  },
  {
    "id": "instruct-gpt",
    "name": "InstructGPT (RLHF Standard)",
    "provider": "OpenAI",
    "category": "llm",
    "releaseYear": "2022",
    "pricingTier": "paid",
    "priceSummary": {
      "uz": "OpenAI API (text-davinci-002/003)",
      "tk": "OpenAI API tölegi",
      "ru": "OpenAI API (семейство Davinci-003)",
      "en": "OpenAI API ($0.02 / 1K tokens)"
    },
    "contextOrLimit": "4,096 tokens",
    "accentColor": "#059669",
    "isOpenSource": false,
    "supportsUzbek": "good",
    "websiteUrl": "https://openai.com/research/instruction-following",
    "logoKey": "openai",
    "releasedModels": [
      "GPT-3 (2020)",
      "InstructGPT (2022)",
      "ChatGPT / GPT-3.5 (2022)",
      "GPT-4 (2023)",
      "GPT-4o (2024)"
    ],
    "tagline": {
      "uz": "RLHF inson fikri orqali o'qitish: ChatGPT ning to'g'ridan-to'g'ri poydevori va buyruq bajarish standarti",
      "tk": "RLHF inson pikiri arkaly öwredilen: ChatGPT-nyň göni esasy",
      "ru": "Прорыв RLHF: первая модель, научившаяся точно исполнять человеческие инструкции без лишней \"воды\"",
      "en": "Trained with Reinforcement Learning from Human Feedback (RLHF) to align language models with user intent"
    },
    "description": {
      "uz": "InstructGPT — 2022-yil boshida taqdim etilgan va AI sohasida eng katta burilishlardan birini yasagan model. Unda RLHF (Reinforcement Learning from Human Feedback) texnologiyasi qo'llanilib, model insonning 'Xat yoz', 'Qisqartir', 'Kod yoz' kabi to'g'ridan-to'g'ri buyruqlarini aniq bajarishga o'rgatildi.",
      "tk": "InstructGPT — 2022-nji ýylda RLHF tehnologiýasyny ulanyp, adamyň buýruklaryny takyk ýerine ýetirmegi öwrenen modeldir.",
      "ru": "InstructGPT решила главную проблему GPT-3: несоответствие целям пользователя. С помощью обучения с подкреплением на основе отзывов людей (RLHF) модель стала отвечать правдиво, кратко и строго по инструкции.",
      "en": "InstructGPT solved alignment by fine-tuning GPT-3 via Reinforcement Learning from Human Feedback. 1.3B InstructGPT outputs were preferred by humans over the 100x larger 175B raw GPT-3."
    },
    "capabilities": {
      "uz": [
        "Inson ko'rsatmalarini aniq bajarish (Instruction Following)",
        "Gallyutsinatsiyalarni sezilarli darajada kamaytirish va xavfsizlikni oshirish",
        "ChatGPT ning paydo bo'lishiga asos solgan algoritmik poydevor",
        "Matnlarni tahrirlash, xatolarni tuzatish va qisqa xulosalar chiqarish"
      ],
      "tk": [
        "Adam buýruklaryny takyk ýerine ýetirmek",
        "Ýalňyş maglumatlary azaltmak we howpsuzlygy ýokarlandyrmak",
        "ChatGPT-nyň döremegine esas bolan algoritmik baza",
        "Tekstleri redaktirlemek we gysga mazmun çykarmak"
      ],
      "ru": [
        "Безупречное следование пользовательским указаниям без продолжения чужих мыслей",
        "Снижение генерации токсичного и недостоверного контента",
        "Алгоритмический прототип движка ChatGPT",
        "Точное структурирование списков, таблиц и текстовых сводок"
      ],
      "en": [
        "Rigorous instruction following without meandering completions",
        "Substantial reduction in toxic and hallucinated outputs via reward models",
        "The algorithmic blueprint that directly powered ChatGPT",
        "Task-focused formatting: outlines, step-by-step instructions, and editing"
      ]
    },
    "bestUseCases": {
      "uz": [
        "To'g'ridan-to'g'ri buyruqli vazifalar",
        "RLHF metodologiyasini o'rganish",
        "Biznes yozishmalari"
      ],
      "tk": [
        "Göni buýrukly meseleler",
        "RLHF usulyny öwrenmek",
        "Iş hatlary"
      ],
      "ru": [
        "Выполнение структурированных задач",
        "Изучение принципов Alignment и RLHF",
        "Редактура документации"
      ],
      "en": [
        "Structured command workflows",
        "AI alignment & safety research",
        "Automated document editing"
      ]
    },
    "limitations": {
      "uz": [
        "Dialog kontekstini eslab qolish (chat sessiyasi) hali yo'q edi, multimodal imkoniyati mavjud emas"
      ],
      "tk": [
        "Çat sessiýasyny ýatda saklamak ýokdy"
      ],
      "ru": [
        "Отсутствие встроенного сессионного диалогового окна и мультимодальности"
      ],
      "en": [
        "Single-turn execution model without integrated multi-turn chat memory"
      ]
    },
    "usageTips": {
      "uz": "InstructGPT davridan boshlab 'Sen professional yordamchisan' kabi tizimli rollar samarali ishlay boshladi.",
      "tk": "Ulgam rollary arkaly takyk jogap almak mümkin boldy.",
      "ru": "Именно с этой модели промпты формата \"Ты профессиональный консультант...\" стали работать эффективно.",
      "en": "Persona prompts like \"Act as an experienced copywriter\" became effective with InstructGPT."
    },
    "scores": {
      "reasoning": 74,
      "coding": 66,
      "creativity": 80,
      "speed": 84,
      "multimodal": 20,
      "uzbekAndMultilingual": 68,
      "costEfficiency": 76
    }
  },
  {
    "id": "gpt-3-5-turbo",
    "name": "ChatGPT (GPT-3.5 Turbo)",
    "provider": "OpenAI",
    "category": "llm",
    "releaseYear": "2022",
    "pricingTier": "free",
    "priceSummary": {
      "uz": "ChatGPT da mutlaqo bepul / API o'ta arzon",
      "tk": "ChatGPT-de mugt / API örän arzan",
      "ru": "Бесплатно в ChatGPT / $0.0005 за 1K токенов в API",
      "en": "Free in ChatGPT / $0.0005 per 1K tokens API"
    },
    "contextOrLimit": "4,096–16,384 tokens",
    "accentColor": "#10a37f",
    "isOpenSource": false,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://chatgpt.com",
    "logoKey": "openai",
    "releasedModels": [
      "GPT-1 (2018)",
      "GPT-2 (2019)",
      "GPT-3 (2020)",
      "ChatGPT / GPT-3.5 (2022)",
      "GPT-4 (2023)",
      "GPT-4o (2024)",
      "o1 & o3 (2024-2026)"
    ],
    "tagline": {
      "uz": "2022-yil 30-noyabr inqilobi: 2 oyda 100M foydalanuvchiga yetgan jahon tarixidagi eng mashhur AI",
      "tk": "2022-nji ýyl 30-njy noýabr rewolýusiýasy: 2 aýda 100M ulanyja ýeten meşhur AI",
      "ru": "Революция 30 ноября 2022 года: самый быстрорастущий потребительский продукт в истории человечества",
      "en": "The consumer breakthrough launched on Nov 30, 2022 reaching 100M users in just two months"
    },
    "description": {
      "uz": "ChatGPT (GPT-3.5 Turbo) — sun'iy intellekt tarixida yangi davrni ochib bergan mahsulot. Undagi samimiy, insondek muloqot qilish, dasturlash kodlarini tuzatish, insholar yozish va murakkab masalalarni sodda tushuntirish qobiliyati butun jahonda AI to'lqinini vujudga keltirdi.",
      "tk": "ChatGPT — dünýäde taryhyň iň çalt ösen programmasy bolup, 2 aýda 100 million ulanyja ýetdi.",
      "ru": "ChatGPT стал переломным моментом в восприятии ИИ обществом. Модель сделала передовые диалоговые возможности доступными миллиардам людей бесплатно через простой веб-интерфейс.",
      "en": "ChatGPT on GPT-3.5 Turbo ignited the modern generative AI revolution, providing conversational dialogue, instant code authoring, and creative ideation to hundreds of millions globally."
    },
    "capabilities": {
      "uz": [
        "Ko'p bosqichli tabiiy dialog (avvalgi aytilgan gaplarni kontekstda eslab qolish)",
        "Dasturlash: Python, JavaScript, HTML/CSS kodlarini yozish va xatolarini tuzatish",
        "O'zbek, rus, ingliz va 80+ tillarda ravon, erkin suhbat",
        "Chaqmoqdek tez javob qaytarish va arzon narx"
      ],
      "tk": [
        "Köp tapgyrly tebigy söhbetdeşlik we ýatda saklamak",
        "Programmirleme: Python, JS kodlaryny ýazmak we düzetmek",
        "Türkmen, özbek, rus we iňlis dillerinde erkin gürleşmek",
        "Çalt jogap we ýokary elýeterlilik"
      ],
      "ru": [
        "Многошаговый естественный диалог с сохранением контекста беседы",
        "Генерация, рефакторинг и поиск ошибок в коде на десятках языков программирования",
        "Высокое качество узбекского, русского и других языков СНГ",
        "Молниеносная скорость генерации ответов"
      ],
      "en": [
        "Natural multi-turn conversational dialogue with contextual memory",
        "Code generation, bug diagnosis, and technical explaining across all major frameworks",
        "Fluent multilingual communication across 80+ world languages",
        "Low latency and cost efficiency enabling widespread everyday utility"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Kundalik savol-javoblar va o'qish",
        "Dasturlashda boshlang'ich yordam",
        "Xatlar va insholar yozish"
      ],
      "tk": [
        "Gündelik sorag-jogaplar we okuw",
        "Programmirleme kömegi",
        "Hatlary taýýarlamak"
      ],
      "ru": [
        "Повседневный поиск информации и обучение",
        "Быстрая помощь в написании и отладке кода",
        "Составление писем и презентаций"
      ],
      "en": [
        "Daily productivity, Q&A, and study assistance",
        "Introductory programming help",
        "Drafting emails, summaries, and outlines"
      ]
    },
    "limitations": {
      "uz": [
        "Matn bilan cheklangan (original versiyasida rasm ko'rish yo'q edi), chuqur matematikada xatolar uchrashi mumkin"
      ],
      "tk": [
        "Surat görüp bilmeýärdi, matematikada ýalňyşlyklar bolup biler"
      ],
      "ru": [
        "Текстовый ввод без мультимодальности (в оригинальной версии), ошибки в олимпиадной математике"
      ],
      "en": [
        "Pure text interface (original 3.5), prone to logic slips on complex competitive STEM puzzles"
      ]
    },
    "usageTips": {
      "uz": "O'zbek tilida muloqot qilganda imlo qoidalariga rioya qilsangiz, model o'zbek tilidagi adabiy va ilmiy uslubni juda chiroyli yetkazadi.",
      "tk": "Söhbetdeşlikde düzgünleri anyk aýtsaňyz, has takyk jogap berer.",
      "ru": "Задавайте четкий формат вывода (например: \"Ответь в виде маркированного списка из 3 пунктов\").",
      "en": "Specify explicit formatting constraints (e.g. \"Summarize in 3 bullet points with markdown bolding\")."
    },
    "scores": {
      "reasoning": 78,
      "coding": 76,
      "creativity": 84,
      "speed": 94,
      "multimodal": 20,
      "uzbekAndMultilingual": 82,
      "costEfficiency": 96
    }
  },
  {
    "id": "gpt-4",
    "name": "GPT-4 (Original MoE 2023)",
    "provider": "OpenAI",
    "category": "llm",
    "releaseYear": "2023",
    "pricingTier": "paid",
    "priceSummary": {
      "uz": "ChatGPT Plus ($20/oy) / API $0.03 / 1K token",
      "tk": "ChatGPT Plus ($20/aý)",
      "ru": "ChatGPT Plus $20/мес / API доступ",
      "en": "ChatGPT Plus ($20/mo) / Premium API"
    },
    "contextOrLimit": "8,192–32,768 tokens (~1.8T parametr MoE)",
    "accentColor": "#2563eb",
    "isOpenSource": false,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://openai.com/research/gpt-4",
    "logoKey": "openai",
    "releasedModels": [
      "GPT-3.5 (2022)",
      "GPT-4 (2023)",
      "GPT-4 Turbo (2023)",
      "GPT-4o (2024)",
      "OpenAI o1 (2024)",
      "OpenAI o3 (2025-2026)"
    ],
    "tagline": {
      "uz": "1.8 trillion parametrli MoE arxitekturasi: inson intellektiga yaqinlashgan ilk multimodal gigant",
      "tk": "1.8 trillion parametrli MoE arhitekturasy: inson akylyna ýakynlaşan model",
      "ru": "Легендарный скачок 2023 года: сдача экзаменов на уровне топ-10% людей и зрение GPT-4V",
      "en": "The groundbreaking 1.8-trillion parameter MoE flagship that surpassed human bar exams and unlocked vision"
    },
    "description": {
      "uz": "GPT-4 — 2023-yil mart oyida chiqarilgan va sun'iy intellekt imkoniyatlarini professional darajaga ko'targan model. U AQSh advokatlik imtihonini (Uniform Bar Exam) eng yuqori 10% odam natijasi bilan topshirdi. Rasmlarni tushunish (GPT-4V), murakkab tibbiyot, dasturlash va falsafiy mulohaza yuritishda yangi jahon rekordlarini o'rnatdi.",
      "tk": "GPT-4 — 2023-nji ýylda dünýäde iň güýçli intellekt hökmünde ykrar edilen modeldir.",
      "ru": "GPT-4 установила золотой стандарт для всей отрасли. Обученная на смеси экспертов (MoE), модель продемонстрировала экспертные знания в биологии, праве, высшей математике и программной инженерии.",
      "en": "GPT-4 set the industry standard for reasoning and coding. Scoring in the 90th percentile on the Uniform Bar Exam and biology olympiads, it became the benchmark all subsequent LLMs were judged against."
    },
    "capabilities": {
      "uz": [
        "Inson darajasidagi intellekt: huquq, moliya, tibbiyot va muhandislik masalalarini yechish",
        "Ko'rish qobiliyati (GPT-4 Vision): diagrammalar, jadvallar va fotosuratlarni tahlil qilish",
        "Murakkab dasturlash: arxitektura qurish, murakkab algoritmlarni yozish",
        "16 ta ekspert tarmoqli Mixture-of-Experts (MoE) yuqori samaradorlik arxitekturasi"
      ],
      "tk": [
        "Adam derejesindäki intellekt: hukuk, maliýe we inženerçilik",
        "Suratlary we diagrammalary seljermek (Vision)",
        "Çylşyrymly programma kody we arhiwleri barlamak",
        "MoE arhitekturasy esasynda ýokary takyklyk"
      ],
      "ru": [
        "Экспертный уровень в юридических, медицинских и академических тестах",
        "Компьютерное зрение GPT-4 Vision: чтение графиков, схем, чертежей и рукописного текста",
        "Написание сложных системных программ и алгоритмический рефакторинг",
        "Архитектура Mixture-of-Experts (MoE) с 16 экспертами по ~110 млрд параметров каждый"
      ],
      "en": [
        "Professional-grade competency across law, medicine, finance, and software engineering",
        "Multimodal vision: understanding charts, system architectures, UI mockups, and photos",
        "Advanced reasoning in multi-step analytical problem solving",
        "Mixture-of-Experts architecture delivering unprecedented knowledge breadth"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Murakkab dasturiy ta'minot yaratish",
        "Ilmiy maqolalar va tahliliy hisobotlar",
        "Yuridik va moliyaviy konsultatsiyalar"
      ],
      "tk": [
        "Çylşyrymly programma döretmek",
        "Ylmy seljermeler we hasabatlar",
        "Hukuk we maliýe kömegi"
      ],
      "ru": [
        "Профессиональная разработка программного обеспечения",
        "Глубокий анализ финансовых и научных данных",
        "Юридическая экспертиза документов"
      ],
      "en": [
        "Enterprise software architecture",
        "Complex legal & academic analysis",
        "Multi-modal chart & diagram interpretation"
      ]
    },
    "limitations": {
      "uz": [
        "GPT-3.5 ga nisbatan sekinroq generatsiya tezligi, yuqori narx"
      ],
      "tk": [
        "GPT-3.5-e garanyňda haýalrak tizim, ýokary baha"
      ],
      "ru": [
        "Относительно невысокая скорость генерации и высокая стоимость токенов"
      ],
      "en": [
        "Slower inference speed compared to lighter models; relatively costly compute profile"
      ]
    },
    "usageTips": {
      "uz": "Modelga rasmlar (diagrammalar, arxitektura chizmalari) yuklab, ularni to'g'ridan-to'g'ri React yoki Python kodiga aylantirishni so'rash mumkin.",
      "tk": "Surat ýükläp, ony göni koda öwürmegi sorap bilersiňiz.",
      "ru": "Загружайте скриншоты интерфейсов или схем БД — модель мгновенно переведёт их в чистый код.",
      "en": "Upload wireframe sketches or database schemas to generate instant boilerplate code."
    },
    "scores": {
      "reasoning": 93,
      "coding": 90,
      "creativity": 91,
      "speed": 72,
      "multimodal": 85,
      "uzbekAndMultilingual": 90,
      "costEfficiency": 68
    }
  },
  {
    "id": "gpt-4-turbo",
    "name": "GPT-4 Turbo (128K Context)",
    "provider": "OpenAI",
    "category": "llm",
    "releaseYear": "2023–2024",
    "pricingTier": "paid",
    "priceSummary": {
      "uz": "API: $10 / 1M token (3x arzonlashgan)",
      "tk": "API: $10 / 1M token",
      "ru": "API: $10 за 1M входных токенов",
      "en": "API: $10 / 1M input tokens (3x cheaper than GPT-4)"
    },
    "contextOrLimit": "128,000 tokens (300 sahifa)",
    "accentColor": "#1d4ed8",
    "isOpenSource": false,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://openai.com/blog/new-models-and-developer-products-announced-at-devday",
    "logoKey": "openai",
    "releasedModels": [
      "GPT-4 (2023)",
      "GPT-4 Turbo (2023-2024)",
      "GPT-4o (2024)",
      "o1 (2024)",
      "o3 (2025-2026)"
    ],
    "tagline": {
      "uz": "128K keng kontekst, Function Calling va 2024 yangilangan bilim bazasiga ega professional model",
      "tk": "128K giň kontekst, Function Calling we täzelenen bilim bazasy",
      "ru": "Окно контекста 128K токенов, режим JSON, Function Calling и база знаний до 2024 года",
      "en": "128K context window, native JSON mode, parallel function calling, and 3x lower API costs"
    },
    "description": {
      "uz": "GPT-4 Turbo — OpenAI ning 2023-yil noyabrdagi DevDay anjumanida taqdim etilgan yangilangan flagmani. 128,000 tokenli ulkan konteksti (300 sahifadan ortiq kitobni bir vaqtda qamrab olish), qat'iy JSON rejimi va bir nechta funksiyalarni parallel chaqirish (Parallel Function Calling) imkoniyati bilan dasturchilarning sevimli vositasiga aylandi.",
      "tk": "GPT-4 Turbo — 128 müň tokenli giň kontekst we JSON düzgüni bilen programmislere niýetlenen modeldir.",
      "ru": "GPT-4 Turbo представила колоссальный скачок удобства для разработчиков: контекст 128 000 токенов (целая книга), режим строгой генерации JSON, параллельные вызовы функций и трёхкратное снижение цены.",
      "en": "Announced at OpenAI DevDay 2023, GPT-4 Turbo increased the context window to 128K, dropped prices by 3x, and introduced reproducible outputs, JSON mode, and parallel function calling."
    },
    "capabilities": {
      "uz": [
        "128,000 tokenli kontekst (butun kitob yoki katta kod repozitoriysini bitta so'rovda tahlil qilish)",
        "Strict JSON Mode: dasturiy API lar uchun kafolatlangan aniq formatda ma'lumot qaytarish",
        "Parallel Function Calling: bitta so'rovda bir vaqtning o'zida bir nechta tashqi funksiyalarni ishga tushirish",
        "Bilimlar bazasi 2024-yil apreligacha yangilangan"
      ],
      "tk": [
        "128K token kontekst: uly kitaplary barlamak",
        "Strict JSON Mode: programmalar üçin anyk format",
        "Parallel Function Calling: birbada birnäçe funksiýany işletmek",
        "2024-nji ýyla çenli täzelenen bilimler"
      ],
      "ru": [
        "Контекст 128K токенов (более 300 страниц текста в одном запросе)",
        "Гарантированный режим JSON Mode для создания надежных бэкендов и ботов",
        "Параллельный вызов функций (Parallel Tool/Function Calling) для агентов",
        "Существенно более низкая цена по сравнению с оригинальным GPT-4"
      ],
      "en": [
        "128,000 token context window fitting 300+ pages of documentation",
        "Native JSON Mode guaranteeing valid JSON syntax for backend parsers",
        "Parallel tool/function calling orchestrating multi-step autonomous workflows",
        "Significantly enhanced instruction following and steerability"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Katta hujjatlar va kitoblar tahlili",
        "AI Agentlar va avtonom botlar yaratish",
        "Korporativ API integratsiyasi"
      ],
      "tk": [
        "Uly resminamalary seljermek",
        "AI Agentlar we botlar döretmek",
        "API integrasiýasy"
      ],
      "ru": [
        "Анализ массивных пакетов юридических и финансовых документов",
        "Создание автономных ИИ-агентов",
        "Корпоративная интеграция"
      ],
      "en": [
        "Large-scale document analysis & RAG",
        "Autonomous multi-tool agent pipelines",
        "High-throughput production backends"
      ]
    },
    "limitations": {
      "uz": [
        "Katta fayllarni o'qishda javob qaytarish biroz vaqt oladi"
      ],
      "tk": [
        "Uly faýllary okanda biraz wagt gerek bolýar"
      ],
      "ru": [
        "При полной загрузке 128K токенов время первого токена (TTFT) увеличивается"
      ],
      "en": [
        "Long context ingest increases time-to-first-token on maximum payload sizes"
      ]
    },
    "usageTips": {
      "uz": "API da `response_format: { type: 'json_object' }` sozlamasini ishlatsangiz, javob doim xatosiz JSON formatida chiqadi.",
      "tk": "API-de json_object görnüşini saýlaň.",
      "ru": "Используйте response_format: { type: \"json_object\" } для интеграции с базами данных.",
      "en": "Enable response_format: { type: \"json_object\" } for deterministic data ingestion."
    },
    "scores": {
      "reasoning": 94,
      "coding": 93,
      "creativity": 91,
      "speed": 82,
      "multimodal": 88,
      "uzbekAndMultilingual": 91,
      "costEfficiency": 82
    }
  },
  {
    "id": "gpt-4o",
    "name": "GPT-4o (Omni Native Multimodal)",
    "provider": "OpenAI",
    "category": "llm",
    "releaseYear": "2024",
    "pricingTier": "freemium",
    "priceSummary": {
      "uz": "ChatGPT da bepul (kunlik limit) / Plus $20/oy",
      "tk": "ChatGPT-de mugt / Plus $20/aý",
      "ru": "Бесплатно в ChatGPT (лимит) / Plus $20/мес",
      "en": "Free tier in ChatGPT / Plus $20/mo"
    },
    "contextOrLimit": "128,000 tokens (Native Audio/Vision)",
    "accentColor": "#10a37f",
    "isOpenSource": false,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://openai.com/index/hello-gpt-4o/",
    "logoKey": "openai",
    "releasedModels": [
      "GPT-4 (2023)",
      "GPT-4 Turbo (2023)",
      "GPT-4o (2024)",
      "GPT-4o mini (2024)",
      "o1 (2024)",
      "o3 (2025-2026)"
    ],
    "tagline": {
      "uz": "Omni arxitekturasi: matn, audio va kamerani real vaqtda bir lahzada tushunuvchi multimodal flagman",
      "tk": "Omni arhitekturasy: tekst, ses we kamerany birbada düşünýän model",
      "ru": "Флагман Omni: мгновенное распознавание аудио, эмоций, видео с камеры и текста в единой нейросети",
      "en": "Omni-channel flagship natively processing text, audio, and video in real time with human-grade latency"
    },
    "description": {
      "uz": "GPT-4o ('o' — omni, ya'ni har tomonlama) — 2024-yil may oyida taqdim etilgan bo'lib, ovoz, ko'rish va matnni alohida konvertorlarsiz, bitta yagona neyron to'rida bevosita qayta ishlaydi. 232 millisekundlik insoniy tezlikda ovozli javob qaytaradi, qah-qah urib kuladi, qo'shiq aytadi va kamera orqali dunyoni ko'rib turadi.",
      "tk": "GPT-4o — 2024-nji ýylda çykan, tekst, surat we ses bilen bir wagtda işleýän iň meşhur modeldir.",
      "ru": "GPT-4o объединила обработку текста, зрения и звука в единую сквозную модель. Она способна общаться голосом с задержкой всего 232 мс, передавать эмоции, петь, распознавать сарказм и видеть экран пользователя в реальном времени.",
      "en": "GPT-4o is trained end-to-end across text, vision, and audio. It matches GPT-4 Turbo performance on English text and code while being 2x faster, 50% cheaper, and dramatically better on non-English languages."
    },
    "capabilities": {
      "uz": [
        "Real vaqtda tabiiy ovozli suhbat (Advanced Voice Mode): hissiyotlar, nafas olish, hazillar",
        "Kamera orqali real vaqtdagi video tahlili: doskadagi tenglamalarni yoki atrofdagi narsalarni ko'rish",
        "O'zbek va nodavlat tillarda yangi tokenizer tufayli 2 barobar tezroq va arzonroq ishlash",
        "Canvas interfeysi: kod va matnlarni yonma-yon interaktiv tahrirlash"
      ],
      "tk": [
        "Real wagtda tebigy sesli gürleşmek (Advanced Voice)",
        "Kamera arkaly wideo seljermesi we ekrany görmek",
        "Sebit dillerinde 2 esse çalt we takyk",
        "Canvas interfeýsi: kody göni redaktirlemek"
      ],
      "ru": [
        "Продвинутый голосовой режим Advanced Voice Mode с передачей полутонов эмоций",
        "Анализ видеопотока с камеры смартфона в реальном времени",
        "Новый токенизатор, сделавший работу с русским и узбекским языками на 50% эффективнее",
        "Интерактивный редактор Canvas для совместного написания кода и текстов"
      ],
      "en": [
        "Real-time Advanced Voice Mode with emotional tone, singing, and interruptibility",
        "Live video and desktop screen sharing with instantaneous comprehension",
        "New multilingual tokenizer drastically reducing token consumption for global languages",
        "Canvas workspace for collaborative side-by-side editing of code and documents"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Jonli ovozli suhbat va chet tillarini o'rganish",
        "Kamera orqali atrofdagi obyektlarni aniqlash",
        "Interaktiv dasturlash (Canvas)"
      ],
      "tk": [
        "Sesli söhbetdeşlik we daşary ýurt dilleri",
        "Kamera arkaly barlaglar",
        "Interaktiw kod ýazmak"
      ],
      "ru": [
        "Изучение иностранных языков в голосовом режиме",
        "Анализ скриншотов, схем и фото с камеры",
        "Интерактивное программирование в Canvas"
      ],
      "en": [
        "Conversational language tutoring & mock interviews",
        "Live computer vision & screen debugging",
        "Interactive code & prose authoring in Canvas"
      ]
    },
    "limitations": {
      "uz": [
        "Olimpiada darajasidagi chuqur mantiqiy fikrlashda o1 va o3 modellaridan orqada turadi"
      ],
      "tk": [
        "Olimpiada matematikasynda o1 we o3 modellerinden yzda"
      ],
      "ru": [
        "Уступает моделям серии o1 и o3 в сложнейших многошаговых математических доказательствах"
      ],
      "en": [
        "Surpassed by dedicated test-time reasoning models (o1, o3) on deep algorithmic proofs"
      ]
    },
    "usageTips": {
      "uz": "Telefoningizdagi ChatGPT ilovasida minigarnitura (naushnik) taqib, 'Advanced Voice' rejimida xuddi do'stingiz bilan gaplashgandek ingliz yoki o'zbek tilida bemalol suhbatlashing.",
      "tk": "Telefonda naushnik dakyp sesli režimde ulanyň.",
      "ru": "Включайте голосовой режим в приложении для тренировки разговорного английского или консультаций.",
      "en": "Use the mobile app with headphones for real-time natural language coaching."
    },
    "scores": {
      "reasoning": 96,
      "coding": 95,
      "creativity": 95,
      "speed": 97,
      "multimodal": 98,
      "uzbekAndMultilingual": 95,
      "costEfficiency": 92
    }
  },
  {
    "id": "gpt-4o-mini",
    "name": "GPT-4o mini (Fast & Ultra-Cheap)",
    "provider": "OpenAI",
    "category": "llm",
    "releaseYear": "2024",
    "pricingTier": "free",
    "priceSummary": {
      "uz": "ChatGPT da cheksiz bepul / API $0.15 / 1M token",
      "tk": "ChatGPT-de çäksiz mugt / API örän arzan",
      "ru": "Бесплатно без жестких лимитов / $0.15 за 1M входных токенов",
      "en": "Free tier in ChatGPT / $0.15 per 1M input tokens"
    },
    "contextOrLimit": "128,000 tokens",
    "accentColor": "#059669",
    "isOpenSource": false,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/",
    "logoKey": "openai",
    "releasedModels": [
      "GPT-3.5 Turbo (2022)",
      "GPT-4o (2024)",
      "GPT-4o mini (2024)",
      "o3-mini (2025)"
    ],
    "tagline": {
      "uz": "O'ta arzon, chaqmoqdek tezkor va ko'p funksiyali ixcham flagman",
      "tk": "Örän arzan, çalt we elýeterli kiçi flagman",
      "ru": "Сверхбыстрая и невероятно дешевая модель, полностью заменившая GPT-3.5 во всем мире",
      "en": "OpenAI’s cost-efficient lightweight model replacing GPT-3.5 with 82% MMLU and multimodal vision"
    },
    "description": {
      "uz": "GPT-4o mini — 2024-yil iyulida taqdim etilgan bo'lib, GPT-3.5 Turbo o'rnini to'liq egalladi. U GPT-3.5 dan ancha aqlli (MMLU 82%), rasm va fayllarni bemalol ko'radi, 128K kontekstga ega va narxi GPT-4o dan 15 baravardan ko'proqqa arzonroq.",
      "tk": "GPT-4o mini — 2024-nji ýylda GPT-3.5-iň ornuny tutan, örän çalt we mugt modeldir.",
      "ru": "GPT-4o mini совершила революцию доступности: обладая интеллектом выше оригинального GPT-4 по многим тестам, она работает со скоростью молнии и стоит копейки, став дефолтной моделью для миллионов бесплатных пользователей.",
      "en": "GPT-4o mini democratized advanced AI. Scoring 82.0% on MMLU, it outperforms GPT-4 on chat benchmarks while being priced at a fraction of older legacy systems."
    },
    "capabilities": {
      "uz": [
        "128K kontekst oynasi va multimodal (rasm, jadval, skrinshot) tahlil",
        "O'ta yuqori tezlik: sekundiga 100+ token chiqarish",
        "MMLU bo'yicha 82.0% — GPT-3.5 Turbo (70%) dan keskin ustun",
        "Arzon narx tufayli millionlab so'rovli botlar va ilovalar uchun ideal"
      ],
      "tk": [
        "128K kontekst we surat seljermesi",
        "Aşa ýokary tizlik: sekuntda 100+ token",
        "MMLU 82% bilen GPT-3.5-den has güýçli",
        "Telegram botlar we programmalar üçin ideal"
      ],
      "ru": [
        "Контекст 128K и зрение (распознавание фото, чеков, таблиц и кода)",
        "Огромная скорость генерации более 100 токенов в секунду",
        "Превзошла GPT-3.5 Turbo по всем академическим и практическим тестам",
        "Идеальная модель для Telegram-ботов, парсеров и высоконагруженных API"
      ],
      "en": [
        "128K context window with full multimodal vision support",
        "Blazing speed exceeding 100 tokens per second",
        "Superior 82.0% MMLU score blowing away GPT-3.5 Turbo",
        "The premier default engine for consumer chatbots, automation, and high-volume tasks"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Telegram va veb-botlar yaratish",
        "Oddiy matnlarni tarjima qilish va tahrirlash",
        "Tezkor kundalik savol-javoblar"
      ],
      "tk": [
        "Telegram botlar döretmek",
        "Tekstleri terjime etmek",
        "Gündelik soraglar"
      ],
      "ru": [
        "Создание быстрых Telegram-ботов и чат-виджетов",
        "Пакетная обработка и классификация текстов",
        "Повседневные быстрые задачи"
      ],
      "en": [
        "Chatbots, customer support, and Telegram agents",
        "High-volume text extraction and classification",
        "Quick everyday question answering"
      ]
    },
    "limitations": {
      "uz": [
        "O'ta murakkab dasturiy arxitektura yoki olimpiada darajasidagi fizik-matematik masalalarda adashishi mumkin"
      ],
      "tk": [
        "Aşa çylşyrymly programmirleme meselelerinde ýalňyşyp biler"
      ],
      "ru": [
        "Может допускать ошибки в многослойной архитектуре ПО и сложных олимпиадных задачах"
      ],
      "en": [
        "Can struggle with deep architectural refactoring compared to full-sized frontier models"
      ]
    },
    "usageTips": {
      "uz": "O'zbek tilidagi Telegram botingizni yaratmoqchi bo'lsangiz, GPT-4o mini eng tejamkor va aql jihatidan mukammal tanlovdir.",
      "tk": "Telegram botlaryňyz üçin iň gowy we arzan saýlaw.",
      "ru": "Для ботов и автоматизации бизнеса выбирайте GPT-4o mini — максимальное качество при минимальных затратах.",
      "en": "Choose GPT-4o mini as your default production backend for cost-effective speed."
    },
    "scores": {
      "reasoning": 87,
      "coding": 86,
      "creativity": 85,
      "speed": 99,
      "multimodal": 89,
      "uzbekAndMultilingual": 91,
      "costEfficiency": 99
    }
  },
  {
    "id": "openai-o1",
    "name": "OpenAI o1 / o1-preview (Reasoning)",
    "provider": "OpenAI",
    "category": "llm",
    "releaseYear": "2024",
    "pricingTier": "paid",
    "priceSummary": {
      "uz": "ChatGPT Plus ($20/oy) / Pro ($200/oy)",
      "tk": "ChatGPT Plus ($20/aý) / Pro",
      "ru": "ChatGPT Plus $20/мес / Pro $200/мес",
      "en": "ChatGPT Plus ($20/mo) / Pro ($200/mo)"
    },
    "contextOrLimit": "128K–200K tokens",
    "accentColor": "#047857",
    "isOpenSource": false,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://openai.com/o1/",
    "logoKey": "openai",
    "releasedModels": [
      "GPT-4o (2024)",
      "OpenAI o1-preview (2024)",
      "OpenAI o1-mini (2024)",
      "OpenAI o1 Full (2024)",
      "OpenAI o3 & o3-mini (2025)"
    ],
    "tagline": {
      "uz": "Mantiqiy fikrlash (Chain-of-Thought) inqilobi: olimpiada matematikasi va murakkab kod uchun maxsus AI",
      "tk": "Mantiqy pikirlenme (Chain-of-Thought) rewolýusiýasy: olimpiada matematikasy üçin",
      "ru": "Первая модель с внутренним пошаговым рассуждением: решает задачи уровня PhD и олимпиад",
      "en": "First frontier model spending test-time compute to think before answering complex STEM queries"
    },
    "description": {
      "uz": "OpenAI o1 — 2024-yil sentyabr oyida taqdim etilgan, sun'iy intellektda yangi 'Test-time compute' paradigmasini ochib bergan inqilobiy model. U oddiy LLM lardan farqli o'laroq, javob berishdan oldin ichki fikrlash zanjirini (Chain of Thought) quradi, o'z xatolarini tekshiradi va Xalqaro Matematika Olimpiadasi (IMO) saralash masalalarida 83% natija ko'rsatadi.",
      "tk": "OpenAI o1 — jogap bermezden öň pikirlenýän we ýalňyşlaryny barlaýan taryhy modeldir.",
      "ru": "OpenAI o1 открыла эру \"думающих\" моделей. Вместо немедленного вывода токенов модель тратит время на внутренний монолог, взвешивает гипотезы и находит скрытые ошибки, решая задачи уровня кандидатов наук (PhD).",
      "en": "OpenAI o1 is trained via reinforcement learning to perform chain-of-thought thinking before outputting tokens. It achieved Gold medal qualifying scores on the International Mathematical Olympiad qualifiers."
    },
    "capabilities": {
      "uz": [
        "Ichki fikrlash zanjiri (Chain of Thought): o'z mulohazalarini tanqidiy tekshirish",
        "Xalqaro matematika (IMO) va Codeforces olimpiada dasturlashida 89-persentil natija",
        "Fizika, kimyo va molekulyar biologiya bo'yicha PhD darajasidagi murakkab savollarga javob",
        "Ko'p bosqichli murakkab arxitekturalarni loyihalash"
      ],
      "tk": [
        "Içki pikir zynjyry: öz jogaplaryny barlap görmek",
        "Halkara matematika we Codeforces bäsleşiklerinde ýokary dereje",
        "Fizika, himiýa we biologiýa boýunça PhD meseleleri",
        "Çylşyrymly programma ulgamlaryny gurmak"
      ],
      "ru": [
        "Скрытая цепочка рассуждений с самопроверкой альтернативных вариантов решения",
        "Решение задач международного уровня по математике (AIME, IMO) и алгоритмам (Codeforces)",
        "Научные консультации в физике, генетике, криптографии и квантовой химии",
        "Глубокий анализ сложных уязвимостей в коде"
      ],
      "en": [
        "Hidden test-time chain-of-thought exploring alternative solution branches",
        "Top-tier competitive coding and International Math Olympiad qualification level",
        "PhD-level benchmark performance across physics, chemistry, and biology (GPQA Diamond)",
        "Resilient logical deduction without superficial hallucinations"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Olimpiada matematikasi va murakkab algoritmlar",
        "Ilmiy tadqiqotlar va fizik formulalar",
        "Katta kod bazalarini chuqur tahlil qilish"
      ],
      "tk": [
        "Olimpiada matematikasy we algoritmler",
        "Ylmy barlaglar",
        "Kody çuňňur barlamak"
      ],
      "ru": [
        "Олимпиадная математика и алгоритмическое программирование",
        "Научные исследования уровня PhD",
        "Аудит безопасности сложных смарт-контрактов"
      ],
      "en": [
        "Olympiad-level STEM problem solving",
        "Complex algorithmic software engineering",
        "Bioinformatics & quantum physics synthesis"
      ]
    },
    "limitations": {
      "uz": [
        "Oddiy matn yozishda boshqa modellarga nisbatan sekinroq (fikrlash vaqti oladi)"
      ],
      "tk": [
        "Ýönekeý soraglarda jogap bermek biraz wagt alýar"
      ],
      "ru": [
        "Более длительное время ожидания ответа из-за фазы размышлений"
      ],
      "en": [
        "Higher latency due to internal test-time reasoning tokens before the final response"
      ]
    },
    "usageTips": {
      "uz": "Oddiy savollar uchun GPT-4o ni, lekin isbot talab qiluvchi matematika, fizika yoki murakkab algoritmlar uchun aynan o1 ni tanlang.",
      "tk": "Çylşyrymly subutnamalar üçin o1 modelini saýlaň.",
      "ru": "Не используйте o1 для простого копирайтинга; берегите её для сложнейшей логики, криптографии и алгоритмов.",
      "en": "Reserve o1 for multi-layered logic, tricky edge cases, and algorithmic verification."
    },
    "scores": {
      "reasoning": 98,
      "coding": 96,
      "creativity": 86,
      "speed": 70,
      "multimodal": 78,
      "uzbekAndMultilingual": 90,
      "costEfficiency": 72
    }
  },
  {
    "id": "openai-o3",
    "name": "OpenAI o3 / GPT-5",
    "provider": "OpenAI",
    "category": "llm",
    "releaseYear": "2025–2026",
    "pricingTier": "freemium",
    "priceSummary": {
      "uz": "Bepul (cheklangan) / Plus $20 / Pro $200",
      "tk": "Mugt (çäkli) / Plus $20 / Pro $200",
      "ru": "Бесплатно (лимит) / Plus $20 / Pro $200",
      "en": "Free (limited) / Plus $20 / Pro $200"
    },
    "contextOrLimit": "200K–400K tokens",
    "accentColor": "#10b981",
    "isOpenSource": false,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://chatgpt.com",
    "logoKey": "openai",
    "releasedModels": [
      "GPT-1 (2018)",
      "GPT-2 (2019)",
      "GPT-3 (2020)",
      "ChatGPT / GPT-3.5 (2022)",
      "GPT-4 (2023)",
      "GPT-4o (2024)",
      "OpenAI o1 (2024)",
      "OpenAI o3 & o3-mini (2025)",
      "GPT-5 Unified (2026)"
    ],
    "tagline": {
      "uz": "Olimpiada matematikasi, mantiqiy fikrlash va real vaqt ovozli flagman",
      "tk": "Olimpiada matematikasy, logiki pikirlenme we sesli aragatnaşyk baýdakçysy",
      "ru": "Эталон олимпиадной математики, глубоких рассуждений и голосового режима",
      "en": "OpenAI’s premier reasoning titan excelling in competitive math, coding, and real-time voice"
    },
    "description": {
      "uz": "OpenAI o3 — javob berishdan oldin inson kabi ichki fikrlash zanjirini (Chain-of-Thought) quruvchi eng kuchli model. Xalqaro olimpiada matematikasi, fizik tahlil va murakkab dasturlashda 95%+ dan yuqori aniqlik ko'rsatadi.",
      "tk": "OpenAI o3 — jogap bermezden öň içki pikir zynjyryny gurýan iň güýçli model. Matematika we kod ýazmakda örän takyk.",
      "ru": "OpenAI o3 — революционная модель пошагового рассуждения, решающая задачи международного олимпиадного уровня по математике и соревновательному программированию.",
      "en": "OpenAI o3 pioneers advanced test-time reasoning compute, achieving top marks on competitive programming, STEM Olympiads, and multi-modal problem solving."
    },
    "capabilities": {
      "uz": [
        "Ichki mantiqiy fikrlash: har bir qadamni tekshirib, xatolarni o'zi tuzatish",
        "Python kod muharriri, Excel va PDF hujjatlarni to'liq vizuallashtirish",
        "Jonli tabiiy ovozli suhbat va real vaqtdagi kamera ko'rishi",
        "O'zbek tilida tabiiy so'zlashuv va ilmiy matnlar tuzish"
      ],
      "tk": [
        "Içki logiki pikirlenme: ýalňyşlary özi düzetmek",
        "Python, Excel we PDF maglumatlary seljermek",
        "Janly sesli söhbetdeşlik we kamera arkaly görmek",
        "Sebit dillerinde tebigy gürleşmek"
      ],
      "ru": [
        "Внутреннее пошаговое рассуждение с самопроверкой ошибок до вывода ответа",
        "Встроенный интерпретатор Python для анализа данных и визуализации",
        "Реалистичный голосовой режим и распознавание видеопотока",
        "Высокое качество узбекского и русского языков"
      ],
      "en": [
        "Internal multi-step self-verifying reasoning loop",
        "Integrated Python execution for data science & charting",
        "Low-latency voice and vision integration",
        "Nuanced multilingual mastery including regional languages"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Murakkab dasturlash va arxitektura",
        "Ilmiy maqolalar va ma'lumotlar tahlili",
        "Matematika va fizika masalalari"
      ],
      "tk": [
        "Çylşyrymly programma we arhitektura",
        "Ylmy makalalar",
        "Matematika we fizika"
      ],
      "ru": [
        "Сложные архитектурные ИТ-задачи",
        "Аналитика и работа с большими таблицами",
        "Научно-технические исследования"
      ],
      "en": [
        "High-level software architecture",
        "Data science and analytical reports",
        "Advanced STEM education"
      ]
    },
    "limitations": {
      "uz": [
        "Fikrlash davomida javob qaytarish bir necha soniya vaqt oladi"
      ],
      "tk": [
        "Pikirlenýän wagty jogap birnäçe sekunt wagt alýar"
      ],
      "ru": [
        "Время генерации выше обычного из-за этапа размышлений"
      ],
      "en": [
        "Inference time takes longer during deep thought phase"
      ]
    },
    "usageTips": {
      "uz": "O'zbek tilida ilmiy izoh kerak bo'lsa, 'batafsil va qadam-baqadam isbotlab ber' deb yozing.",
      "tk": "Jogaby ädimme-ädim düşündir diýip buýruk beriň.",
      "ru": "Для сложных задач формулируйте вопрос с просьбой \"доказать утверждение пошагово\".",
      "en": "Ask for step-by-step proofs to unlock the full reasoning chain."
    },
    "scores": {
      "reasoning": 99,
      "coding": 98,
      "creativity": 94,
      "speed": 85,
      "multimodal": 96,
      "uzbekAndMultilingual": 95,
      "costEfficiency": 82
    }
  },
  {
    "id": "dall-e-3",
    "name": "OpenAI DALL-E 3",
    "provider": "OpenAI",
    "category": "image",
    "releaseYear": "2023",
    "pricingTier": "freemium",
    "priceSummary": {
      "uz": "ChatGPT Plus ichida bepul / API $0.040 / rasm",
      "tk": "ChatGPT Plus mugt / API tölegi",
      "ru": "Входит в ChatGPT Plus / API $0.04 за изображение",
      "en": "Included in ChatGPT Plus / $0.04 per HD image API"
    },
    "contextOrLimit": "1024x1024, 1792x1024 (HD)",
    "accentColor": "#ec4899",
    "isOpenSource": false,
    "supportsUzbek": "good",
    "websiteUrl": "https://openai.com/dall-e-3",
    "logoKey": "openai",
    "releasedModels": [
      "DALL-E 1 (2021)",
      "DALL-E 2 (2022)",
      "DALL-E 3 (2023-2024)"
    ],
    "tagline": {
      "uz": "ChatGPT ichiga o'rnatilgan, murakkab va batafsil matn talablarini eng yaxshi tushunuvchi rasm generatori",
      "tk": "ChatGPT içine gurlan, çylşyrymly tekstleri anyk suratlandyrýan generator",
      "ru": "Интегрированный в ChatGPT визуальный генератор, идеально понимающий сложнейшие нюансы промптов",
      "en": "Native ChatGPT image synthesizer rendering precise text, details, and complex conceptual scenes"
    },
    "description": {
      "uz": "DALL-E 3 — OpenAI ning uchinchi avlod tasvir generatori. Boshqa modellardan farqli o'laroq, ChatGPT bilan bevosita integratsiyalashgan bo'lib, uzun va batafsil tavsiflarni, rasm ichidagi matnlarni va bir nechta qahramonlar joylashuvini xatosiz chizadi.",
      "tk": "DALL-E 3 — ChatGPT bilen utgaşykly işleýän we tekstleri surata öwürýän iň gowy modelleriň biridir.",
      "ru": "DALL-E 3 совершила прорыв в следовании инструкциям (Prompt Adherence). Благодаря тесной связке с ChatGPT, модель понимает сложнейшие метафоры, аккуратно рендерит надписи на вывесках и точно расставляет объекты на холсте.",
      "en": "DALL-E 3 translates nuanced textual nuances into vivid imagery without requiring cryptic prompt hacks. It cleanly handles typography, spatial logic, and detailed multi-subject scenes."
    },
    "capabilities": {
      "uz": [
        "Rasm ichida aniq matn va harflarni yozish (bannerlar, kitob muqovalari, peshtaxtalar)",
        "ChatGPT orqali avtomatik ravishda so'rovni boyitish va takomillashtirish",
        "Kvadrat, portret va keng formatli (16:9) HD sifatli tasvirlar",
        "Rasmning ma'lum bir qismini tanlab o'zgartirish (In-painting)"
      ],
      "tk": [
        "Surat içinde anyk tekst ýazmak (ýazgylar, kitaplar)",
        "ChatGPT arkaly soragy has-da kämilleşdirmek",
        "Kwadrat we giň formatly (16:9) HD suratlar",
        "Suratyň aýry bölegini saýlap üýtgetmek"
      ],
      "ru": [
        "Точный рендеринг надписей и типографики внутри изображения",
        "Автоматическое улучшение промпта с помощью интеллекта ChatGPT",
        "Поддержка соотношений сторон 1:1, 16:9 и портретного формата в HD",
        "Выборочное редактирование фрагментов изображения (Inpainting кистью)"
      ],
      "en": [
        "Clean typography and sign rendering directly inside generated images",
        "Automatic prompt enrichment and spatial reasoning via ChatGPT",
        "Square, portrait, and 16:9 widescreen HD aspect ratio outputs",
        "Interactive selective inpainting brush inside the chat UI"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Sayt va bloglar uchun illyustratsiyalar",
        "Marketing bannerlari va logotiplar",
        "Konseptual san'at va dizayn"
      ],
      "tk": [
        "Web sahypalar üçin suratlar",
        "Marketing we mahabat",
        "Dizaýn we logo ideýalary"
      ],
      "ru": [
        "Иллюстрации для сайтов, статей и презентаций",
        "Маркетинговые баннеры и обложки книг",
        "Концепт-арт и генерация идей"
      ],
      "en": [
        "Website illustrations & blog hero assets",
        "Marketing collateral and book covers",
        "Visual ideation & product concept art"
      ]
    },
    "limitations": {
      "uz": [
        "Fotorealizm bo'yicha FLUX va Midjourney v7 dan biroz multfilmroq uslubda chiqadi"
      ],
      "tk": [
        "Fotorealizmde Midjourney-den biraz multfilm häsiýetli"
      ],
      "ru": [
        "Уступает Midjourney v7 и FLUX в предельном кинематографическом фотореализме"
      ],
      "en": [
        "Tends toward a stylized digital illustration look rather than gritty photorealism"
      ]
    },
    "usageTips": {
      "uz": "ChatGPT ga 'Mana bu g'oyani DALL-E 3 uchun mukammal inglizcha promptga aylantir va chiz' deb aytsangiz, eng yaxshi natijaga erishasiz.",
      "tk": "ChatGPT-den soragy DALL-E 3 üçin taýýarlap bermegi haýyş ediň.",
      "ru": "Попросите ChatGPT: \"Опиши сцену для DALL-E 3 в кинематографическом стиле 35мм с мягким светом\".",
      "en": "Prompt ChatGPT to generate descriptive cinematography cues (lens, lighting) for best output."
    },
    "scores": {
      "reasoning": 75,
      "coding": 30,
      "creativity": 96,
      "speed": 82,
      "multimodal": 95,
      "uzbekAndMultilingual": 88,
      "costEfficiency": 86
    }
  },
  {
    "id": "sora",
    "name": "OpenAI Sora (Kinematic Video)",
    "provider": "OpenAI",
    "category": "video",
    "releaseYear": "2024–2025",
    "pricingTier": "paid",
    "priceSummary": {
      "uz": "ChatGPT Plus ($20) / Pro ($200)",
      "tk": "ChatGPT Plus / Pro abuna",
      "ru": "Подписка ChatGPT Plus / Pro",
      "en": "ChatGPT Plus / Pro subscription"
    },
    "contextOrLimit": "60 soniyagacha 1080p video (Diffusion Transformer)",
    "accentColor": "#0ea5e9",
    "isOpenSource": false,
    "supportsUzbek": "good",
    "websiteUrl": "https://openai.com/sora",
    "logoKey": "openai",
    "releasedModels": [
      "DALL-E 3 (2023)",
      "OpenAI Sora (2024)",
      "Sora Turbo (2025)"
    ],
    "tagline": {
      "uz": "Dunyodagi eng mashhur fizika qonunlariga mos keluvchi diffusion video generatori",
      "tk": "Dünýäde iň meşhur fiziki kanunlara laýyk wideo dörediji model",
      "ru": "Революционный генератор 60-секундных кинематографических видеороликов с физической согласованностью",
      "en": "World-simulating diffusion transformer rendering up to 60s of coherent 1080p cinematics"
    },
    "description": {
      "uz": "Sora — OpenAI ning 2024-yil boshida dunyoni larzaga solgan video modeli. U oddiy matndan 60 soniyagacha bo'lgan, bir nechta qahramonlar, aniq kamera harakatlari va jismoniy dunyo qonunlariga (yorug'likning aks etishi, suyuqlik harakati) mos keladigan 1080p sifatli videolarni yaratadi.",
      "tk": "Sora — OpenAI tarapyndan döredilen, 60 sekuntlyk hakyky kino hilindäki wideolary döredýän modeldir.",
      "ru": "Sora объединила диффузионные модели и архитектуру трансформеров (Diffusion Transformer). Модель способна генерировать сложные сцены с несколькими персонажами, кинематографическими движениями камеры и глубоким пониманием физики реального мира.",
      "en": "Sora is a diffusion transformer capable of generating high-definition video clips up to 60 seconds long with visual quality, complex camera motion, and physical persistence of objects over time."
    },
    "capabilities": {
      "uz": [
        "60 soniyagacha bo'lgan uzluksiz, barqaror 1080p Full HD video generatsiyasi",
        "Dunyodagi fizika qonunlarini simulyatsiya qilish (to'lqinlar, yorug'lik, chang, aks etish)",
        "Dron, panning, tracking kabi kinematografik kamera harakatlarini boshqarish",
        "Mavjud videolarni davom ettirish yoki ikki xil videoni silliq birlashtirish"
      ],
      "tk": [
        "60 sekunta çenli 1080p Full HD durnukly wideo döretmek",
        "Fizika kanunlaryny simulirlemek (tolkunlar, şöhleler)",
        "Kino düşüriş kamerasy ýaly çylşyrymly hereketler",
        "Mugt wideolary dowam etmek we birleşdirmek"
      ],
      "ru": [
        "Генерация до 60 секунд непрерывного видео в разрешении 1080p с постоянством объектов",
        "Симуляция физического взаимодействия объектов (отражения, брызги воды, ткани)",
        "Кинематографический контроль: пролеты дронов, съемка от первого лица, макросъемка",
        "Сшивка, интерполяция и бесконечное продолжение существующих видеофайлов"
      ],
      "en": [
        "Up to 60-second continuous 1080p video clips with object persistence",
        "Physical world simulation: reflections, fluid dynamics, and surface interactions",
        "Complex cinematic camera controls (FPV drone sweeps, tracking shots, dolly zooms)",
        "Video-to-video editing, re-timing, and seamless clip extensions"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Reklama roliklari va tizerlar",
        "Kinematografiya va storyboard yaratish",
        "Ijtimoiy tarmoqlar uchun kreativ kontent"
      ],
      "tk": [
        "Mahabat wideolary we tizerler",
        "Kino we klip döretmek",
        "Sosial torlar üçin kontent"
      ],
      "ru": [
        "Создание рекламных роликов и концепт-видео",
        "Раскадровки и клипмейкинг",
        "Вирусный контент для социальных сетей"
      ],
      "en": [
        "Commercial ads and product teasers",
        "Film pre-visualization and music video ideation",
        "Social media creative assets"
      ]
    },
    "limitations": {
      "uz": [
        "Generatsiya uchun katta hisoblash vaqti talab qilinadi, murakkab inson harakatlarida fizik xatolar bo'lishi mumkin"
      ],
      "tk": [
        "Wideo döretmek üçin wagt talap edilýär"
      ],
      "ru": [
        "Высокая ресурсоемкость генерации, редкие физические аномалии при столкновении объектов"
      ],
      "en": [
        "Computationally heavy rendering queue; occasionally glitches on complex character collisions"
      ]
    },
    "usageTips": {
      "uz": "So'rovda kameraning turini ('35mm anamorphic lens, steady aerial drone shot') va yorug'likni ('golden hour sunset') aniq ko'rsating.",
      "tk": "Kamera we ýagtylyk aýratynlyklaryny anyk ýazyň.",
      "ru": "Указывайте параметры оптики и движения камеры: \"35mm anamorphic, slow tracking shot, golden hour\".",
      "en": "Describe lighting conditions and camera lenses explicitly for studio-grade results."
    },
    "scores": {
      "reasoning": 82,
      "coding": 35,
      "creativity": 98,
      "speed": 64,
      "multimodal": 98,
      "uzbekAndMultilingual": 82,
      "costEfficiency": 74
    }
  },
  {
    "id": "bert",
    "name": "Google BERT (Bidirectional Transformers)",
    "provider": "Google DeepMind",
    "category": "research",
    "releaseYear": "2018",
    "pricingTier": "opensource",
    "priceSummary": {
      "uz": "Ochiq manba (Hugging Face da bepul)",
      "tk": "Açyk çeşme / Mugt",
      "ru": "Открытый исходный код (Open Source)",
      "en": "Open Source (HuggingFace)"
    },
    "contextOrLimit": "512 tokens (340M parametr)",
    "accentColor": "#4285F4",
    "isOpenSource": true,
    "supportsUzbek": "good",
    "websiteUrl": "https://github.com/google-research/bert",
    "logoKey": "google",
    "releasedModels": [
      "BERT (2018)",
      "T5 (2020)",
      "LaMDA (2021)",
      "PaLM 2 (2023)",
      "Gemini 1.0 (2023)",
      "Gemini 1.5 Pro (2024)",
      "Gemini 2.0 (2025)",
      "Gemini 4 Argon (2026)"
    ],
    "tagline": {
      "uz": "NLP va qidiruv tizimlari inqilobi: so'zlarni ikki tomonlama (o'ng va chap) tushunuvchi kashfiyot",
      "tk": "NLP we gözleg ulgamlarynyň rewolýusiýasy: iki taraplaýyn düşünýän model",
      "ru": "Революция Google 2018 года: двунаправленное понимание контекста, изменившее поиск и NLP",
      "en": "Bidirectional Encoder Representations from Transformers that transformed Google Search and NLP"
    },
    "description": {
      "uz": "BERT (Bidirectional Encoder Representations from Transformers) — 2018-yil oxirida Google tomonidan taqdim etilgan va butun dunyo qidiruv tizimlarini inqilob qilgan arxitektura. So'zlarning ma'nosini faqat chapdan o'ngga emas, balki bir vaqtda ikkala tomondan chuqur tahlil qilishi bilan zamonaviy NLP ga asos soldi.",
      "tk": "BERT — 2018-nji ýylda Google tarapyndan döredilen, sözleri iki taraplaýyn seljerýän meşhur modeldir.",
      "ru": "BERT стал историческим прорывом Google в обработке естественного языка. В отличие от однонаправленных моделей, BERT считывает контекст слова слева и справа одновременно, что сделало поиск Google на порядки точнее.",
      "en": "BERT revolutionized NLP by pre-training deep bidirectional representations from unlabeled text by jointly conditioning on both left and right context in all layers."
    },
    "capabilities": {
      "uz": [
        "Ikki tomonlama (Bidirectional) kontekstni tahlil qilish",
        "Google Qidiruv tizimida so'rovlarni 90%+ aniqlikda tushunish",
        "Matnlarni klassifikatsiya qilish, hissiyotni (Sentiment) aniqlash va qismlarga ajratish",
        "Masked Language Model (MLM) o'qitish uslubini kashf qilish"
      ],
      "tk": [
        "Iki taraplaýyn kontekst seljermesi",
        "Google Gözleginde takyklyk",
        "Tekstleri toparlamak we duýgulary anyklamak",
        "Masked Language Model usuly"
      ],
      "ru": [
        "Двунаправленный анализ контекста предложений",
        "Интеграция в Google Search для точного понимания поисковых запросов",
        "Классификация текстов, анализ тональности и распознавание именованных сущностей (NER)",
        "Метод обучения со скрытыми словами (Masked Language Modeling)"
      ],
      "en": [
        "Deep bidirectional representations capturing bidirectional context",
        "Search query comprehension powering core Google Search algorithms",
        "Fine-tuning for classification, question answering, and NER",
        "Seminal Masked Language Modeling (MLM) training paradigm"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Matnlarni semantik qidirish va tasniflash",
        "Kompaniyalar uchun qidiruv tizimlari",
        "Akademik NLP darslari"
      ],
      "tk": [
        "Semantik gözleg we toparlamak",
        "Kompaniýalar üçin gözleg ulgamy",
        "Akademik dersler"
      ],
      "ru": [
        "Семантический поиск по базам данных",
        "Классификация клиентских обращений и анализ тональности",
        "Академические курсы по NLP"
      ],
      "en": [
        "Semantic search and document embeddings",
        "Text classification and sentiment analysis",
        "Academic NLP curricula"
      ]
    },
    "limitations": {
      "uz": [
        "Encoder modeli bo'lgani sababli erkin suhbat (ChatGPT kabi) olib bormaydi, 512 token limiti mavjud"
      ],
      "tk": [
        "Chat hökmünde gürleşip bilmeýär, 512 token çägi bar"
      ],
      "ru": [
        "Является энкодером, поэтому не умеет вести свободный диалог как генеративные чат-боты"
      ],
      "en": [
        "Encoder-only architecture not designed for open-ended autoregressive dialogue generation"
      ]
    },
    "usageTips": {
      "uz": "O'zbek tilidagi qidiruv yoki klassifikator uchun `bert-base-multilingual-cased` modelidan foydalanish mumkin.",
      "tk": "Köp dilli bert-base-multilingual modelini ulanyň.",
      "ru": "Используйте bert-base-multilingual для задач классификации текстов на узбекском и русском языках.",
      "en": "Use the multilingual BERT checkpoint for cross-lingual zero-shot classification tasks."
    },
    "scores": {
      "reasoning": 55,
      "coding": 35,
      "creativity": 38,
      "speed": 92,
      "multimodal": 10,
      "uzbekAndMultilingual": 70,
      "costEfficiency": 95
    }
  },
  {
    "id": "palm-2",
    "name": "Google PaLM 2 (540B Pathway)",
    "provider": "Google DeepMind",
    "category": "llm",
    "releaseYear": "2023",
    "pricingTier": "freemium",
    "priceSummary": {
      "uz": "Google Vertex AI / Bard dagi dastlabki bepul dvigatel",
      "tk": "Google Vertex AI / Bard mugt",
      "ru": "Google Vertex AI / Движок ранней версии Bard",
      "en": "Google Vertex AI / Bard engine (Legacy)"
    },
    "contextOrLimit": "8,192 tokens (540B parametr)",
    "accentColor": "#34A853",
    "isOpenSource": false,
    "supportsUzbek": "good",
    "websiteUrl": "https://ai.google/discover/palm2/",
    "logoKey": "google",
    "releasedModels": [
      "PaLM (2022)",
      "PaLM 2 (2023)",
      "Gemini 1.0 (2023)",
      "Gemini 1.5 Pro (2024)",
      "Gemini 4 Argon (2026)"
    ],
    "tagline": {
      "uz": "Google I/O 2023 da taqdim etilgan 100 dan ortiq tillarda kuchli PaLM 2 arxitekturasi",
      "tk": "Google I/O 2023-de tanyşdyrylan 100-den gowrak dilli güýçli model",
      "ru": "Флагман Google 2023 года: глубокая математика, поддержка 100+ языков и основа первого Google Bard",
      "en": "Google’s next-gen Pathways Language Model excelling in math, multilingual reasoning, and code"
    },
    "description": {
      "uz": "PaLM 2 — Google I/O 2023 anjumanida e'lon qilingan, 100 dan ortiq tillarda parallel o'qitilgan yuqori tezlikdagi model. U Google Workspace (Gmail, Docs), Google Bard (hozirgi Gemini) va dasturlash yordamchilarining dastlabki kuchli yadrosi bo'lib xizmat qilgan.",
      "tk": "PaLM 2 — 2023-nji ýylda Google Bard-yň ilkinji güýçli motory bolup hyzmat eden modeldir.",
      "ru": "PaLM 2 обучена на параллельном многоязычном корпусе текстов более чем 100 языков и научных статьях. Она значительно превзошла первое поколение PaLM по математике, логике и написанию кода.",
      "en": "PaLM 2 excelled at advanced reasoning tasks including code and math, classification and question answering, translation and multilingual proficiency across 100+ languages."
    },
    "capabilities": {
      "uz": [
        "100 dan ortiq jahon tillarida maqollar, frazeologizmlar va nozik ma'nolarni tushunish",
        "JavaScript, Python, C++, Go dasturlash tillarida kod yozish va tahlil",
        "Google Workspace ilovalari bilan bevosita integratsiya",
        "Med-PaLM 2 (tibbiyot) va Sec-PaLM (kiberxavfsizlik) ixtisoslashgan variantlari"
      ],
      "tk": [
        "100-den gowrak dilde pähimleri we nakyllary düşünmek",
        "Python, JS, C++ dillerinde kod ýazmak",
        "Google Docs we Gmail bilen integrasiýa",
        "Lukmançylyk we kiberhowpsuzlyk boýunça ýörite görnüşler"
      ],
      "ru": [
        "Понимание идиом, пословиц и культурных нюансов более 100 языков мира",
        "Генерация и отладка кода на 20+ языках программирования",
        "Интеграция в Google Документы, Gmail и облачные сервисы GCP",
        "Специализированные медицинская (Med-PaLM 2) и безопасная (Sec-PaLM) версии"
      ],
      "en": [
        "Deep multilingual comprehension encompassing idioms and nuances in 100+ languages",
        "Code generation across JavaScript, Python, C++, and Bash",
        "Seamless native integration with Google Workspace and Cloud APIs",
        "Pioneered specialized industry variants including Med-PaLM 2 and Sec-PaLM"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Google ekotizimi va hujjatlar bilan ishlash",
        "Ko'p tilli tarjimalar",
        "Kiberxavfsizlik va tibbiy tahlillar"
      ],
      "tk": [
        "Google ekoulgamynda işlemek",
        "Köp dilli terjimeler",
        "Kiberhowpsuzlyk"
      ],
      "ru": [
        "Корпоративная работа в среде Google Workspace",
        "Многоязычные переводы с сохранением стилистики",
        "Медицинские и аналитические справки"
      ],
      "en": [
        "Google Workspace automation",
        "High-fidelity multilingual translation",
        "Domain-specific medical and security research"
      ]
    },
    "limitations": {
      "uz": [
        "O'zbek tilida murakkab texnik atamalarni ba'zan rus yoki inglizchaga aralashtirib yuborardi"
      ],
      "tk": [
        "Tehniki adalgalarda käwagt rus diline geçip bilýärdi"
      ],
      "ru": [
        "Ограниченное окно контекста 8K токенов по сравнению с последующим Gemini 1.5"
      ],
      "en": [
        "Modest 8K context limit eclipsed by next-gen million-token Gemini models"
      ]
    },
    "usageTips": {
      "uz": "Google Cloud Vertex AI da legacy loyihalar uchun tezkor va arzon model sifatida xizmat qiladi.",
      "tk": "Vertex AI-de arzan wariant hökmünde ulanylyp bilner.",
      "ru": "Для новых проектов рекомендуется использовать семейство Gemini вместо PaLM 2.",
      "en": "Migrate active production PaLM 2 endpoints to Gemini 1.5/2.0 for higher quality."
    },
    "scores": {
      "reasoning": 83,
      "coding": 81,
      "creativity": 82,
      "speed": 88,
      "multimodal": 45,
      "uzbekAndMultilingual": 85,
      "costEfficiency": 82
    }
  },
  {
    "id": "gemini-1-0-ultra",
    "name": "Gemini 1.0 Ultra (Multimodal Core)",
    "provider": "Google DeepMind",
    "category": "llm",
    "releaseYear": "2023",
    "pricingTier": "paid",
    "priceSummary": {
      "uz": "Google One AI Premium ($19.99/oy)",
      "tk": "Google One AI Premium",
      "ru": "Подписка Google One AI Premium $19.99/мес",
      "en": "Google One AI Premium ($19.99/mo)"
    },
    "contextOrLimit": "32,768 tokens (Native Multimodal)",
    "accentColor": "#1a73e8",
    "isOpenSource": false,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://deepmind.google/technologies/gemini/v1/",
    "logoKey": "google",
    "releasedModels": [
      "Gemini 1.0 Nano (2023)",
      "Gemini 1.0 Pro (2023)",
      "Gemini 1.0 Ultra (2023)",
      "Gemini 1.5 Pro (2024)",
      "Gemini 2.0 (2025)",
      "Gemini 4 Argon (2026)"
    ],
    "tagline": {
      "uz": "MMLU testida inson ekspertlaridan (90%+) yuqori ball to'plagan birinchi multimodal Google modeli",
      "tk": "MMLU synagynda adamdan (90%+) ýokary bal toplan ilkinji Google modeli",
      "ru": "Первая модель в мире, превзошедшая экспертов-людей в тесте MMLU (90.0%) с нативной мультимодальностью",
      "en": "First model to outperform human experts on MMLU (90.0%), architected natively for multimodal data"
    },
    "description": {
      "uz": "Gemini 1.0 Ultra — 2023-yil dekabrida Google DeepMind tomonidan taqdim etilgan eng kuchli model. Boshqa modellardan farqli o'laroq, u turli qismlarni sun'iy ulash orqali emas, balki noldan boshlab matn, audio, video va rasmlarda birgalikda o'qitilgan (Natively Multimodal) bo'lib, MMLU testida 90.0% ball bilan tarixga kirdi.",
      "tk": "Gemini 1.0 Ultra — 2023-nji ýylyň ahyrynda Google DeepMind-iň iň güýçli baýdakçysy boldy.",
      "ru": "Gemini 1.0 Ultra была спроектирована с нуля для нативной мультимодальности. Модель одновременно воспринимает видео, графики, аудиозаписи и код, став первой в истории системой ИИ, набравшей более 90% в бенчмарке MMLU.",
      "en": "Gemini 1.0 Ultra was designed from the ground up to seamlessly understand and operate across text, code, audio, image, and video. It set records across 30 of 32 widely-used academic benchmarks."
    },
    "capabilities": {
      "uz": [
        "MMLU bo'yicha 90.0% rekord: matematika, fizika, huquq va tibbiyotda inson ekspertlaridan ustun",
        "Native Multimodal: video kadrlari, chizmalar va audioli tushuntirishlarni bir vaqtda tushunish",
        "AlphaCode 2 integratsiyasi: murakkab olimpiada algoritmlarini dasturlash",
        "Google qidiruv va Google xaritalar bilan jonli integratsiya"
      ],
      "tk": [
        "MMLU 90.0% rekordi: inson ekspertlerinden ýokary",
        "Native Multimodal: wideo, surat we ses seljermesi",
        "AlphaCode 2 bilen ýokary derejeli kod ýazmak",
        "Google gözlegi bilen janly aragatnaşyk"
      ],
      "ru": [
        "Исторический рекорд 90.0% в MMLU (57 академических дисциплин)",
        "Нативное распознавание физических процессов на видео и аудиозаписей",
        "Интеграция соревновательного программирования уровня AlphaCode 2",
        "Глубокая связка с поисковой базой знаний Google в реальном времени"
      ],
      "en": [
        "Historic 90.0% MMLU mark surpassing human expert baseline",
        "Native multimodal reasoning across interleaved video, audio, and code",
        "AlphaCode 2 competitive algorithmic problem solving tier",
        "Real-time ground truth verification via Google Search integration"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Murakkab ilmiy va texnik tahlillar",
        "Video va rasm tahlili",
        "Olimpiada dasturlash vazifalari"
      ],
      "tk": [
        "Ylmy we tehniki seljermeler",
        "Wideo we surat barlagy",
        "Programmirleme bäsleşikleri"
      ],
      "ru": [
        "Сложный научно-технический анализ с диаграммами",
        "Аналитика видеозаписей экспериментов",
        "Олимпиадные алгоритмические задачи"
      ],
      "en": [
        "Scientific multimodal data analysis",
        "Video experiment reasoning and diagram translation",
        "Advanced competitive coding tasks"
      ]
    },
    "limitations": {
      "uz": [
        "Kontekst oynasi 32K token bo'lib, keyingi 1.5 Pro dagi millionlab tokenlardan kamroq edi"
      ],
      "tk": [
        "32K token kontekst çägi"
      ],
      "ru": [
        "Окно контекста 32K токенов уступало последовавшему революционному Gemini 1.5 Pro"
      ],
      "en": [
        "32K context window prior to the 2M long-context revolution of Gemini 1.5"
      ]
    },
    "usageTips": {
      "uz": "Fizika yoki kimyo masalasini yechishda unga video yoki darslik rasmini ko'rsatsangiz, u har bir formulani bosqichma-bosqich isbotlab beradi.",
      "tk": "Surat ýükläp formulalary ädimme-ädim düşündir diýiň.",
      "ru": "Загружайте фото задач с формулами — модель пошагово выведет решение с графиками.",
      "en": "Upload handwritten equations or textbook physics diagrams for step-by-step proofs."
    },
    "scores": {
      "reasoning": 92,
      "coding": 89,
      "creativity": 89,
      "speed": 78,
      "multimodal": 94,
      "uzbekAndMultilingual": 91,
      "costEfficiency": 74
    }
  },
  {
    "id": "gemini-1-5-pro",
    "name": "Gemini 1.5 Pro (2M Long-Context)",
    "provider": "Google DeepMind",
    "category": "llm",
    "releaseYear": "2024",
    "pricingTier": "freemium",
    "priceSummary": {
      "uz": "Google AI Studio da bepul / Gemini Advanced $19.99",
      "tk": "AI Studio mugt / Advanced $19.99",
      "ru": "Бесплатно в AI Studio / $19.99 в Gemini Advanced",
      "en": "Free in Google AI Studio / Advanced $19.99/mo"
    },
    "contextOrLimit": "2,000,000 tokens (Rekord kontekst)",
    "accentColor": "#2563eb",
    "isOpenSource": false,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://deepmind.google/technologies/gemini/pro/",
    "logoKey": "google",
    "releasedModels": [
      "Gemini 1.0 (2023)",
      "Gemini 1.5 Flash (2024)",
      "Gemini 1.5 Pro (2024)",
      "Gemini 2.0 (2025)",
      "Gemini 4 Argon (2026)"
    ],
    "tagline": {
      "uz": "2 million tokenli mislsiz kontekst oynasi: soatlik video va yuz minglab qator kodni bir zumda qamrab olish",
      "tk": "2 million tokenli ägirt kontekst: uly wideolary we kody birbada okamak",
      "ru": "Мировой рекорд: окно контекста в 2 000 000 токенов (часовые видео, аудиоархивы и миллион строк кода)",
      "en": "Unprecedented 2M token context window ingesting 1 hour of video, 11 hours of audio, or 700k lines of code"
    },
    "description": {
      "uz": "Gemini 1.5 Pro — 2024-yil boshida sun'iy intellekt tarixidagi eng katta kontekst inqilobini amalga oshirgan model. U 2,000,000 tokenlik oynasida 1 soatlik to'liq videoni, 700,000 qatordan ortiq dasturiy repozitoriyni yoki butun kitoblar to'plamini 'Needle in a Haystack' (somon ichidan igna izlash) testida 99.7% aniqlik bilan o'qiy oladi.",
      "tk": "Gemini 1.5 Pro — 2024-nji ýylda 2 million token kontekst bilen dünýä rekordyny goýan modeldir.",
      "ru": "Gemini 1.5 Pro изменила понимание возможностей контекста. Модель построена на архитектуре Mixture-of-Experts и способна мгновенно найти единственную нужную строчку в миллионе строк кода или найти точную секунду в часовом видеоролике.",
      "en": "Gemini 1.5 Pro introduced long-context understanding up to 2 million tokens with near-perfect retrieval accuracy (99.7% on NIAH). It natively processes hours of video, audio transcripts, and entire monorepos in a single turn."
    },
    "capabilities": {
      "uz": [
        "2,000,000 tokenli kontekst (1 soatlik to'liq video yoki 60,000 qator kod)",
        "Needle In A Haystack (NIAH) testida 99.7% aniqlik: hech bir detalni e'tibordan qochirmaslik",
        "To'g'ridan-to'g'ri audio va video fayllarni tahlil qilish (subtitrlarsiz to'g'ridan-to'g'ri eshitish)",
        "O'zbek, turkiy, rus va boshqa kam resursli tillarda ajoyib ilmiy tarjimalar"
      ],
      "tk": [
        "2,000,000 tokenli kontekst: 1 sagatlyk wideo ýa-da 60 müň setir kod",
        "NIAH synagynda 99.7% takyklyk",
        "Audio we wideo faýllary göni diňlemek we görmek",
        "Sebit dillerinde aýratyn gowy netijeler"
      ],
      "ru": [
        "Окно контекста до 2 000 000 токенов для мгновенной загрузки целых проектов",
        "Точность извлечения фактов 99.7% даже в самом конце гигантского контекста",
        "Прямая обработка аудиозаписей звонков, лекций и видеороликов без конвертации в текст",
        "Высочайшее качество литературного перевода на узбекский и русский языки"
      ],
      "en": [
        "Breakthrough 2M context window holding 700K words or 60 minutes of raw video",
        "99.7% recall on Needle-in-a-Haystack multi-modal retrieval benchmarks",
        "Native raw audio/video parsing without intermediary transcription layers",
        "Sophisticated reasoning across massive enterprise documentation sets"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Butun dasturiy repozitoriyni tahlil qilish",
        "Ko'p soatlik video va ma'ruzalarni o'rganish",
        "Katta arxiv hujjatlarini qidirish"
      ],
      "tk": [
        "Bütin kod repozitoriýasyny seljermek",
        "Uzyn wideolary we sapaklary öwrenmek",
        "Arhiw resminamalary"
      ],
      "ru": [
        "Анализ целых программных репозиториев (GitHub) целиком",
        "Конспектирование многочасовых лекций и конференций",
        "Аудит огромных архивов договоров и регламентов"
      ],
      "en": [
        "Full codebase analysis & refactoring",
        "Multi-hour video/audio lecture synthesis",
        "Enterprise RAG replacement over massive corpora"
      ]
    },
    "limitations": {
      "uz": [
        "2 million token to'liq yuklanganda javob qaytarish biroz ko'proq vaqt olishi mumkin"
      ],
      "tk": [
        "Aşa uly faýllarda jogap bermek wagty artýar"
      ],
      "ru": [
        "При максимальном заполнении 2 млн токенов время обработки запроса возрастает"
      ],
      "en": [
        "Higher first-token latency when ingesting hundreds of megabytes of video/audio"
      ]
    },
    "usageTips": {
      "uz": "Google AI Studio da bitta video faylni (masalan, 40 daqiqalik dars) yuklang va 'Ushbu videodagi 25-daqiqada nima tushuntirilgan?' deb aniq so'rang.",
      "tk": "Google AI Studio-da uly wideo ýükläp anyk wagt boýunça sorag beriň.",
      "ru": "Загружайте видео в Google AI Studio — модель назовет точные таймкоды происходящего.",
      "en": "Upload full mp4 files into AI Studio to query exact visual timestamps and spoken cues."
    },
    "scores": {
      "reasoning": 96,
      "coding": 94,
      "creativity": 93,
      "speed": 84,
      "multimodal": 99,
      "uzbekAndMultilingual": 95,
      "costEfficiency": 88
    }
  },
  {
    "id": "gemini-2-0-flash",
    "name": "Gemini 2.0 Flash / Thinking",
    "provider": "Google DeepMind",
    "category": "llm",
    "releaseYear": "2024–2025",
    "pricingTier": "free",
    "priceSummary": {
      "uz": "Google AI Studio da bepul / Cheksiz kvotalar",
      "tk": "AI Studio mugt",
      "ru": "Бесплатно в Google AI Studio с щедрыми лимитами",
      "en": "Free tier in Google AI Studio with generous quotas"
    },
    "contextOrLimit": "1,000,000 tokens (Thinking Mode)",
    "accentColor": "#0284c7",
    "isOpenSource": false,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://deepmind.google/technologies/gemini/flash/",
    "logoKey": "google",
    "releasedModels": [
      "Gemini 1.5 Flash (2024)",
      "Gemini 2.0 Flash (2024-2025)",
      "Gemini 2.0 Thinking (2025)",
      "Gemini 4 Argon (2026)"
    ],
    "tagline": {
      "uz": "Real vaqt audio/video suhbat va Thinking rejimi bilan tezkor, zamonaviy universal model",
      "tk": "Real wagt sesli/wideo söhbetdeşlik we Thinking režimli çalt model",
      "ru": "Революция скорости и мультимодальности 2025: нативное аудиовещание, рассуждения Thinking и окно 1M токенов",
      "en": "Next-gen lightning speed, native real-time multimodal streaming, and dedicated Thinking reasoning"
    },
    "description": {
      "uz": "Gemini 2.0 Flash — 2024-yil oxirida taqdim etilgan eng tezkor va aqlli model. Unda yangi 'Thinking' (mantiqiy fikrlash) mexanizmi, 1 million tokenlik ulkan kontekst va real vaqtda kamera/audio bilan suhbatlashish (Multimodal Live API) imkoniyatlari mujassamlashgan. Flash tezligida ishlaydi, lekin Pro darajasidagi aqlga ega.",
      "tk": "Gemini 2.0 Flash — Flash tizliginde işleýän, ýöne Pro derejeli Thinking akylly modeldir.",
      "ru": "Gemini 2.0 Flash установила новый стандарт скорости и универсальности. Она поддерживает потоковое двустороннее аудио и видео общение, снабжена режимом Thinking для сложных логических цепочек и обладает окном в 1 миллион токенов бесплатно.",
      "en": "Gemini 2.0 Flash combines blazing inference speed with frontier multimodal capabilities. Featuring native audio output, real-time camera streaming, and an optional Thinking mode, it redefines the efficiency frontier."
    },
    "capabilities": {
      "uz": [
        "1M tokenli kontekst oynasi va sekundi ichida bir necha yuz token chiqarish tezligi",
        "Thinking Mode: murakkab matematik va dasturlash vazifalarida ichki fikrlash zanjiri",
        "Multimodal Live API: kamera va mikrofon orqali real vaqtda uzluksiz video-audio suhbat",
        "Google Search va Python Code Execution vositalaridan avtonom foydalanish"
      ],
      "tk": [
        "1M token kontekst we aşa ýokary tizlik",
        "Thinking Mode: çylşyrymly meselelerde içki pikirlenme",
        "Multimodal Live API: janly kamera we ses arkaly aragatnaşyk",
        "Google Search we Python kody barlamak"
      ],
      "ru": [
        "Окно контекста 1 миллион токенов при скорости свыше 120 токенов в секунду",
        "Режим Thinking Mode: пошаговое логическое рассуждение перед выводом ответа",
        "Multimodal Live API: синхронный голосовой и видеопоток с минимальной задержкой",
        "Встроенный поиск Google Search и выполнение кода Python на лету"
      ],
      "en": [
        "1M token context window paired with lightning-fast token generation speeds",
        "Dedicated Thinking mode verifying proofs and complex algorithms before responding",
        "Low-latency bidirectional Multimodal Live API for camera, screen, and voice",
        "Integrated tool-use: Google Search grounding and dynamic Python execution"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Real vaqtda ovozli va vizual AI yordamchilar",
        "Katta hajmli kod va hujjatlarni tezkor tahlil qilish",
        "Avtonom agentlar va botlar"
      ],
      "tk": [
        "Real wagtda sesli we wideo kömekçiler",
        "Kody we resminamalary çalt seljermek",
        "Awtonom botlar"
      ],
      "ru": [
        "Голосовые и видео-ассистенты реального времени",
        "Скоростная обработка сотен документов",
        "Мультиагентные автоматизации"
      ],
      "en": [
        "Real-time interactive voice & vision bots",
        "High-speed long-context document parsing",
        "Autonomous agent tooling & workflows"
      ]
    },
    "limitations": {
      "uz": [
        "Thinking rejimi o'chirilgan holatda o'ta chuqur falsafiy yoki abstrakt masalalarda ba'zan xatolar bo'lishi mumkin"
      ],
      "tk": [
        "Thinking režimsiz çylşyrymly abstrakt soraglarda ýalňyşyp biler"
      ],
      "ru": [
        "Без включенного режима Thinking может пропускать тонкие логические нестыковки в коде"
      ],
      "en": [
        "Standard non-thinking pass can miss subtle architectural bugs without thinking tokens enabled"
      ]
    },
    "usageTips": {
      "uz": "Google AI Studio da `gemini-2.0-flash-thinking-exp` modelini tanlab, eng murakkab dasturlash va fizika savollaringizni bering.",
      "tk": "AI Studio-da Thinking modelini saýlap soraň.",
      "ru": "Выбирайте режим Thinking для программирования и математики в Google AI Studio.",
      "en": "Enable Thinking mode in AI Studio to get o1-class reasoning at Flash speeds."
    },
    "scores": {
      "reasoning": 95,
      "coding": 94,
      "creativity": 92,
      "speed": 98,
      "multimodal": 98,
      "uzbekAndMultilingual": 95,
      "costEfficiency": 95
    }
  },
  {
    "id": "gemini-4-argon",
    "name": "Gemini 4 Argon",
    "provider": "Google DeepMind",
    "category": "llm",
    "releaseYear": "2026",
    "pricingTier": "freemium",
    "priceSummary": {
      "uz": "AI Studio bepul / Ultra $24.99/oy",
      "tk": "AI Studio mugt / Ultra $24.99/aý",
      "ru": "AI Studio бесплатно / Ultra $24.99/мес",
      "en": "AI Studio Free / Ultra $24.99/mo"
    },
    "contextOrLimit": "1M–2M tokens (128K output)",
    "accentColor": "#0ea5e9",
    "isOpenSource": false,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://deepmind.google/technologies/gemini/",
    "logoKey": "google",
    "releasedModels": [
      "LaMDA (2021)",
      "PaLM 2 (2023)",
      "Gemini 1.0 Ultra (2023)",
      "Gemini 1.5 Pro (2024)",
      "Gemini 2.0 Flash (2024)",
      "Gemini 2.5 Pro (2025)",
      "Gemini 4 Argon (2026)"
    ],
    "tagline": {
      "uz": "Google DeepMind ning 2026-yilgi eng yangi flagman mantiqiy (Reasoning) va avtonom agent modeli",
      "tk": "Google DeepMind-iň 2026-njy ýylky iň täze baýdakçy logiki (Reasoning) we awtonom agent modeli",
      "ru": "Новейший флагман Google DeepMind 2026 года для глубоких рассуждений, науки и автономных агентов",
      "en": "Google DeepMind’s 2026 frontier reasoning and autonomous agent powerhouse with 1M context"
    },
    "description": {
      "uz": "Gemini 4 Argon — Google DeepMind ning eng so'nggi avlod 'Argon' arxitekturasi bo'lib, murakkab dasturiy ta'minot arxitekturasi, ilmiy kashfiyotlar, matematik teoremalar va avtonom ko'p bosqichli agentlik vazifalari uchun maxsus o'qitilgan. 1M tokenli to'liq chuqur tahlil va multimodal audio/video/kod integratsiyasiga ega.",
      "tk": "Gemini 4 Argon — Google DeepMind-iň iň soňky \"Argon\" arhitekturasy bolup, çylşyrymly programma inženeriýasy, ylmy açyşlar we awtonom agentler üçin ýörite döredilendir.",
      "ru": "Gemini 4 Argon — новейшая модель поколения Argon от Google DeepMind, оптимизированная для сложнейшей инженерии, научных прорывов и автономных мультиагентных конвейеров с окном в 1 миллион токенов.",
      "en": "Gemini 4 Argon is Google DeepMind’s premier reasoning model built on the Argon architecture for complex software engineering, scientific discovery, and long-horizon autonomous agent loops."
    },
    "capabilities": {
      "uz": [
        "Argon Reasoning dvigateli: minglab qatorli kod loyihalarini mustaqil tahlil qilish va yozish",
        "1M–2M tokenli ulkan kontekstda bir vaqtning o'zida soatlik video, audio va butun repozitoriyni o'qish",
        "O'zbek, turkiy, rus va 100+ tillarda benuqson akademik uslubda ishlash",
        "Deep Research & Scientific Synthesis: fanlararo ilmiy hisobotlarni avtomatik tayyorlash"
      ],
      "tk": [
        "Argon Reasoning hereketlendirijisi: müňlerçe setirli kod taslamalaryny özbaşdak seljermek",
        "1M-2M tokenli ägirt kontekst: wideo, audio we bütin repozitoriýany okamak",
        "Sebit dillerinde ýokary derejede akademik stil",
        "Ylmy açyşlar we Deep Research hasabatlary"
      ],
      "ru": [
        "Движок рассуждений Argon: решение сложнейших алгоритмических и архитектурных задач",
        "Контекстное окно 1–2 млн токенов для мгновенного анализа целых кодовых баз и видео",
        "Глубокое понимание узбекского, русского и более 100 языков на экспертном уровне",
        "Режим автономного сбора научных отчётов Deep Research"
      ],
      "en": [
        "Argon deep reasoning engine for competitive coding and autonomous software design",
        "1M–2M unified context window ingesting codebases, long videos, and scientific papers",
        "Near-native multilingual accuracy across Uzbek, Russian, and English",
        "Autonomous scientific synthesis and multi-source investigative workflows"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Murakkab dasturiy loyihalar va arxitektura",
        "Ilmiy tadqiqotlar va ma'lumotlar tahlili",
        "Ko'p soatlik video/audio fayllarni tushunish"
      ],
      "tk": [
        "Çylşyrymly programma taslamalary",
        "Ylmy gözlegler we analiz",
        "Uzyn wideo/audio faýllary seljermek"
      ],
      "ru": [
        "Проектирование сложных ИТ-систем",
        "Глубокие научные исследования",
        "Анализ гигантских архивов и видео"
      ],
      "en": [
        "Large-scale software architecture",
        "Frontier scientific discovery",
        "Multi-hour video & document analysis"
      ]
    },
    "limitations": {
      "uz": [
        "O'ta yuqori hisoblash quvvati talab qiladi (Ultra tarifida to'liq ochiladi)"
      ],
      "tk": [
        "Ýokary hasaplama kuwwatyny talap edýär"
      ],
      "ru": [
        "Для максимальной скорости требуется подписка Ultra"
      ],
      "en": [
        "Heavy compute requirements; full inference unlocked on Ultra plans"
      ]
    },
    "usageTips": {
      "uz": "Google AI Studio da tizim ko'rsatmasida 'Reasoning Depth: High' sozlamasini yoqsangiz, model har bir javob oldidan chuqur tahlil zanjirini quradi.",
      "tk": "Google AI Studio-da Reasoning Depth: High tertibini işlediň.",
      "ru": "Включайте режим глубокого размышления в Google AI Studio для олимпиадных задач и рефакторинга.",
      "en": "Set reasoning effort to High in AI Studio when tackling architectural refactoring."
    },
    "scores": {
      "reasoning": 99,
      "coding": 97,
      "creativity": 93,
      "speed": 90,
      "multimodal": 99,
      "uzbekAndMultilingual": 96,
      "costEfficiency": 88
    }
  },
  {
    "id": "gemma-2",
    "name": "Google Gemma 2 (27B Open Weights)",
    "provider": "Google DeepMind",
    "category": "llm",
    "releaseYear": "2024",
    "pricingTier": "opensource",
    "priceSummary": {
      "uz": "Ochiq manba (Kaggle & Hugging Face da bepul)",
      "tk": "Açyk çeşme / Mugt",
      "ru": "Открытые веса (Apache 2.0 / Gemma License)",
      "en": "Open Weights (Free on Hugging Face / Ollama)"
    },
    "contextOrLimit": "8,192 tokens (9B & 27B variantlar)",
    "accentColor": "#3b82f6",
    "isOpenSource": true,
    "supportsUzbek": "good",
    "websiteUrl": "https://ai.google.dev/gemma",
    "logoKey": "google",
    "releasedModels": [
      "Gemma 1 (2024)",
      "Gemma 2 (9B, 27B) (2024)",
      "PaliGemma (Vision) (2024)",
      "Codegemma (2024)"
    ],
    "tagline": {
      "uz": "Google'ning yuqori samarali ochiq kodli modeli: lokal kompyuter va serverlar uchun ideal yechim",
      "tk": "Google-iň ýokary öndürijilikli açyk çeşmeli modeli",
      "ru": "Открытые легковесные модели Google (9B и 27B), побеждающие модели вдвое большего размера",
      "en": "Google’s state-of-the-art open weights model punching above its weight class for local deployment"
    },
    "description": {
      "uz": "Gemma 2 — Google DeepMind tomonidan Gemini texnologiyalari asosida yaratilgan ochiq manbali modellar oilasi. Ayniqsa, 27B varianti o'z o'lchamidan ikki barobar katta modellarni (masalan, Llama 3 70B ning ayrim ko'rsatkichlarini) ortda qoldirib, oddiy shaxsiy kompyuterlarda Ollama orqali bemalol ishlay oladi.",
      "tk": "Gemma 2 — Google tarapyndan döredilen açyk model bolup, lokal kompýuterde çalt işleýär.",
      "ru": "Gemma 2 построена на тех же исследовательских и технологических достижениях, что и флагманский Gemini. Вариант 27B демонстрирует невероятную плотность интеллекта на один параметр, запускаясь на одной потребительской видеокарте.",
      "en": "Gemma 2 is built on the same research as Gemini. The 27B model offers competitive performance with models more than double its size while running on single consumer GPUs or Ollama."
    },
    "capabilities": {
      "uz": [
        "Lokal kompyuter va serverlarda to'liq xavfsiz, ma'lumotlarni tashqariga chiqarmasdan ishlash",
        "Ollama va LM Studio orqali birgina buyruq bilan o'rnatish (`ollama run gemma2`)",
        "Dasturlash, matematik tahlil va matnlarni tartibga solish",
        "Sliding Window Attention texnologiyasi orqali kam xotira (VRAM) sarfi"
      ],
      "tk": [
        "Lokal kompýuterde internet bolmasa hem howpsuz işlemek",
        "Ollama arkaly aňsat gurnamak",
        "Programmirleme we matematika seljermesi",
        "Az VRAM xotira talaby"
      ],
      "ru": [
        "Полная конфиденциальность: запуск офлайн без отправки данных в облако",
        "Простая установка через Ollama одной командой: ollama run gemma2:27b",
        "Превосходное качество кода, форматирования и структурирования текста",
        "Эффективная архитектура чередования локального и глобального внимания"
      ],
      "en": [
        "100% private offline inference on local workstations and edge hardware",
        "Instant one-click deployment via Ollama (ollama run gemma2:27b)",
        "Compact knowledge distillation delivering 70B-grade benchmark density",
        "Sliding window attention minimizing VRAM footprint during inference"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Maxfiy korporativ ma'lumotlar bilan ishlash",
        "Lokal dasturchilar yordamchisi",
        "Offline rejimda ishlovchi ilovalar"
      ],
      "tk": [
        "Gizlin maglumatlar bilen işlemek",
        "Lokal kömekçi",
        "Offline programmalar"
      ],
      "ru": [
        "Обработка конфиденциальных корпоративных документов",
        "Локальный ассистент разработчика в VS Code",
        "Автономные решения без интернета"
      ],
      "en": [
        "Confidential enterprise RAG pipelines",
        "Offline developer coding copilot",
        "Edge deployments without cloud dependencies"
      ]
    },
    "limitations": {
      "uz": [
        "27B modeli ishlashi uchun kamida 16GB–24GB tezkor xotira (RAM yoki VRAM) zarur"
      ],
      "tk": [
        "Işletmek üçin 16GB-24GB RAM gerek"
      ],
      "ru": [
        "Для комфортной работы версии 27B требуется видеокарта с 16-24 ГБ памяти (или квантование)"
      ],
      "en": [
        "Requires 16GB-24GB VRAM/RAM for unquantized 27B execution on local machines"
      ]
    },
    "usageTips": {
      "uz": "Oddiy noutbuklar uchun `gemma2:9b` varianti eng maqbul va juda tezkor tanlov hisoblanadi.",
      "tk": "Noutbuklar üçin gemma2:9b warianty amatly.",
      "ru": "Для обычных ноутбуков рекомендуем использовать версию gemma2:9b — работает молниеносно.",
      "en": "Use gemma2:9b for standard laptops and gemma2:27b for high-end workstations."
    },
    "scores": {
      "reasoning": 87,
      "coding": 85,
      "creativity": 84,
      "speed": 93,
      "multimodal": 35,
      "uzbekAndMultilingual": 83,
      "costEfficiency": 98
    }
  },
  {
    "id": "veo-3",
    "name": "Google Veo 3 (4K Generative Cinema)",
    "provider": "Google DeepMind",
    "category": "video",
    "releaseYear": "2025–2026",
    "pricingTier": "paid",
    "priceSummary": {
      "uz": "Google VideoFX / YouTube Shorts Creator",
      "tk": "Google VideoFX elýeterli",
      "ru": "Доступно в Google VideoFX / YouTube Studio",
      "en": "Google VideoFX / Enterprise API tier"
    },
    "contextOrLimit": "4K 60fps 60 soniyagacha video",
    "accentColor": "#4f46e5",
    "isOpenSource": false,
    "supportsUzbek": "good",
    "websiteUrl": "https://deepmind.google/technologies/veo/",
    "logoKey": "google",
    "releasedModels": [
      "Lumiere (2024)",
      "Veo 1 (2024)",
      "Veo 2 (2025)",
      "Veo 3 (2025-2026)"
    ],
    "tagline": {
      "uz": "Google DeepMind ning 4K fotorealistik video va kamera harakatini boshqaruvchi flagmani",
      "tk": "Google DeepMind-iň 4K fotorealistik wideo we kamera hereketlerini dolandyrýan modeli",
      "ru": "Кинематографический флагман Google DeepMind: 4K 60fps, реалистичная физика и точный контроль камеры",
      "en": "Google DeepMind’s generative video flagship delivering 4K resolution and cinematic cinematography controls"
    },
    "description": {
      "uz": "Veo 3 — Google DeepMind ning eng so'nggi video ishlab chiqarish texnologiyasi. U kinematografik atamalarni ('timelapse', 'aerial pan', 'shallow depth of field') professional rejissyor kabi tushunadi va 4K sifatda harakatlanuvchi jonli sahnalarni yaratadi.",
      "tk": "Veo 3 — 4K durulykda professional kinematografiki wideolary döredýän iň täze Google modelidir.",
      "ru": "Veo 3 от Google DeepMind создана специально для профессиональных кинематографистов и создателей контента. Модель в совершенстве понимает кинематографические термины и выводит кристально чистое 4K-видео.",
      "en": "Veo 3 generates high-definition 4K video clips with advanced understanding of cinematic language. It understands concepts like visual effects, lens focal lengths, and camera panning without artifacts."
    },
    "capabilities": {
      "uz": [
        "Haqiqiy 4K 60fps yuqori aniqlikdagi video kadrlari",
        "Kinematografik atamalarni to'liq tushunish (drone shot, 35mm lens, dolly zoom)",
        "Obyektlar va qahramonlarning harakat davomida o'zgarmasligi (Visual Consistency)",
        "Matn, rasm va video asosida yangi sahnalar generatsiya qilish"
      ],
      "tk": [
        "Hakyky 4K 60fps ýokary durulykdaky wideo",
        "Kinematografiki adalgalary düşünmek",
        "Gahrymanlaryň wagt boýunça keşbini ýitirmezligi",
        "Tekst we surat esasynda wideo döretmek"
      ],
      "ru": [
        "Разрешение 4K с поддержкой частоты до 60 кадров в секунду",
        "Поддержка сложной терминологии кинопроизводства (lens flare, dolly in, aerial shot)",
        "Сохранение внешности персонажей и объектов на протяжении всей сцены",
        "Генерация видео по тексту, статичному изображению или референсному ролику"
      ],
      "en": [
        "Native 4K 60fps ultra-crisp output resolution",
        "Nuanced interpretation of film terminology (dolly zooms, anamorphic bokeh)",
        "Temporal consistency preserving facial geometry across long shots",
        "Text-to-video, image-to-video, and targeted video editing pipelines"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Kino va animatsiya pre-vizualizatsiyasi",
        "Professional reklama va tizerlar",
        "YouTube va media kontent"
      ],
      "tk": [
        "Kino we animasiýa önümçiligi",
        "Mahabat tizerleri",
        "Media kontent"
      ],
      "ru": [
        "Пре-визуализация кино и анимации",
        "Создание премиальной видеорекламы",
        "Контент для телевидения и YouTube"
      ],
      "en": [
        "Feature film pre-visualization",
        "High-end advertising and product commercials",
        "Next-gen YouTube and digital production"
      ]
    },
    "limitations": {
      "uz": [
        "Yuqori hisoblash quvvati va kutish vaqti talab qilinadi"
      ],
      "tk": [
        "Ýokary kuwwat we wagt gerek bolýar"
      ],
      "ru": [
        "Высокое время рендеринга сложных 4K-сцен"
      ],
      "en": [
        "Substantial GPU rendering times required for uncompressed 4K exports"
      ]
    },
    "usageTips": {
      "uz": "So'rovda kameraning harakatini ('slow pan left across a neon cyberpunk bazaar') aniq tasvirlang.",
      "tk": "Kameranyň ugruny anyk ýazyň.",
      "ru": "Используйте точные кинематографические команды: \"slow pan left, 50mm f/1.4 lens, natural sunlight\".",
      "en": "Specify camera motion vectors and focal lengths for studio-calibrated visuals."
    },
    "scores": {
      "reasoning": 85,
      "coding": 30,
      "creativity": 99,
      "speed": 72,
      "multimodal": 99,
      "uzbekAndMultilingual": 85,
      "costEfficiency": 80
    }
  },
  {
    "id": "notebooklm",
    "name": "Google NotebookLM Plus (Audio Overview)",
    "provider": "Google DeepMind",
    "category": "research",
    "releaseYear": "2024–2026",
    "pricingTier": "free",
    "priceSummary": {
      "uz": "Google hisobida mutlaqo bepul",
      "tk": "Google hasabynda mugt",
      "ru": "Полностью бесплатно с Google аккаунтом",
      "en": "Completely free with Google Account"
    },
    "contextOrLimit": "50 ta manba (har biri 500,000 so'zgacha)",
    "accentColor": "#059669",
    "isOpenSource": false,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://notebooklm.google.com",
    "logoKey": "notebooklm",
    "releasedModels": [
      "NotebookLM (2023)",
      "NotebookLM Audio Overviews (2024)",
      "NotebookLM Plus (2025-2026)"
    ],
    "tagline": {
      "uz": "Gemini asosidagi shaxsiy tadqiqot yordamchisi va jonli Audio Podkast (Audio Overview) generatori",
      "tk": "Gemini esasyndaky ylmy kömekçi we Audio Podkast generator modeli",
      "ru": "Интеллектуальный блокнот на базе Gemini: превращает любые документы в увлекательный живой аудиоподкаст",
      "en": "Personalized AI research notebook powered by Gemini, transforming raw sources into interactive Deep Dive podcasts"
    },
    "description": {
      "uz": "NotebookLM Plus — Google ning eng foydali tadqiqot vositasi. Unga o'nlab PDF kitoblar, Word hujjatlari, YouTube havolalari yoki veb-saytlarni yuklaysiz va model faqat siz bergan manbalarga asoslanib savollarga 100% ishonchli (gallyutsinatsiyasiz) javob beradi. 'Audio Overview' tugmasi esa hujjatlaringizni ikki boshlovchi suhbatlashayotgan jonli podkastga aylantiradi.",
      "tk": "NotebookLM — resminamalaryňyzy janly sesli gepleşige (podkast) öwürýän täsin mugt guraldyr.",
      "ru": "NotebookLM использует архитектуру Gemini с привязкой строго к загруженным источникам (Grounding). Модель не выдумывает факты, а функция Audio Overview мгновенно превращает сотни страниц сухих отчётов в живой двухголосый подкаст.",
      "en": "NotebookLM synthesizes complex notes, documents, and videos into grounded summaries with citations. Its viral Audio Overview feature generates conversational two-host podcasts discussing your source material."
    },
    "capabilities": {
      "uz": [
        "Yuklangan 50 tagacha manba (PDF, Docs, YouTube, veb) bo'yicha gallyutsinatsiyasiz qat'iy javob",
        "Jonli Audio Podkast (Audio Overview): ikki suxandonning qiziqarli muhokamasi",
        "Har bir javobda manbaning aniq sahifasiga iqtibos (Citation) berish",
        "O'zbek, rus va ingliz tillaridagi darsliklarni tushunish va xulosalash"
      ],
      "tk": [
        "50 sany çeşmä esaslanyp takyk jogap bermek",
        "Audio Podkast: iki gürleýjiniň janly söhbetdeşligi",
        "Her bir jogaba anyk sahypa salgylanmasyny goýmak",
        "Derslikleri we makalalary gysga mazmuna getirmek"
      ],
      "ru": [
        "Строгое заземление (Grounding) только на загруженных пользователем документах",
        "Аудиоподкасты Audio Overview: два живых ведущих обсуждают ваш материал с шутками и интонациями",
        "Кликабельные цитаты с переходом на точные страницы источников",
        "Поддержка PDF, Google Документов, заметок и видео с YouTube"
      ],
      "en": [
        "Strict source-grounded answers anchored directly to uploaded documents",
        "Conversational Deep Dive podcasts generated from arbitrary text and PDFs",
        "Interactive in-line citations pointing to the exact supporting paragraphs",
        "Multi-format ingestion: PDFs, Google Docs, slides, and YouTube URLs"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Talabalar va tadqiqotchilar uchun kitoblar tahlili",
        "Hujjatlarni yo'lda podkast sifatida eshitish",
        "Diplom ishi va dissertatsiyalar yozish"
      ],
      "tk": [
        "Talyplar üçin kitaplary öwrenmek",
        "Ýolda podkast diňlemek",
        "Ylmy işler"
      ],
      "ru": [
        "Подготовка к экзаменам и написание диссертаций",
        "Прослушивание отчетов в машине в виде подкаста",
        "Глубокий фактчекинг сложных договоров"
      ],
      "en": [
        "Academic thesis research and exam prep",
        "Commute listening of complex whitepapers via podcast",
        "Legal contract synthesis and auditing"
      ]
    },
    "limitations": {
      "uz": [
        "Yuklanmagan tashqi Internet ma'lumotlariga suyanmaydi (faqat siz kiritgan manbalar bilan ishlaydi)"
      ],
      "tk": [
        "Diňe ýüklenen faýllara esaslanýar"
      ],
      "ru": [
        "Сфокусирован на источниках пользователя, не заменяет открытый веб-поиск"
      ],
      "en": [
        "Intentionally constrained to uploaded sources; will not invent external web facts"
      ]
    },
    "usageTips": {
      "uz": "O'quv qo'llanmangizni yuklang va 'Generate Audio Overview' tugmasini bosing — 5 daqiqada butun bobni qiziqarli radioeshittirish kabi eshitasiz.",
      "tk": "Kitaby ýükläp Audio Overview dörediň.",
      "ru": "Загрузите сложную книгу и нажмите \"Generate\" в блоке Audio Overview — получите готовый подкаст.",
      "en": "Upload lecture slides and tap Generate Audio Overview to listen to a 10-minute briefing."
    },
    "scores": {
      "reasoning": 94,
      "coding": 70,
      "creativity": 92,
      "speed": 91,
      "multimodal": 92,
      "uzbekAndMultilingual": 93,
      "costEfficiency": 97
    }
  },
  {
    "id": "claude-1",
    "name": "Anthropic Claude 1.0 (Constitutional AI)",
    "provider": "Anthropic",
    "category": "llm",
    "releaseYear": "2023",
    "pricingTier": "paid",
    "priceSummary": {
      "uz": "Tarixiy API (Anthropic Console)",
      "tk": "Taryhy API",
      "ru": "Исторический API доступ",
      "en": "Historical API (Superseded)"
    },
    "contextOrLimit": "9,000–100,000 tokens",
    "accentColor": "#d97706",
    "isOpenSource": false,
    "supportsUzbek": "fair",
    "websiteUrl": "https://anthropic.com/index/introducing-claude",
    "logoKey": "anthropic",
    "releasedModels": [
      "Claude 1.0 (2023)",
      "Claude 2.0 (2023)",
      "Claude 3 Opus (2024)",
      "Claude 3.5 Sonnet (2024)",
      "Claude 3.7 Sonnet (2025)",
      "Claude Fable (2026)"
    ],
    "tagline": {
      "uz": "Constitutional AI xavfsizlik standarti va insoniy tabiiy dialog asoschisi",
      "tk": "Constitutional AI howpsuzlyk standarty we tebigy dialog modeli",
      "ru": "Рождение Claude: первая модель с \"Конституционным ИИ\", задавшая стандарты этики и безопасности",
      "en": "The pioneer of Constitutional AI designed for helpful, harmless, and honest dialogue"
    },
    "description": {
      "uz": "Claude 1 — OpenAI ning sobiq tadqiqot bo'limi rahbarlari (Dario va Daniela Amodei) tomonidan tuzilgan Anthropic kompaniyasining birinchi modeli. Unda 'Constitutional AI' (Konstitutsiyaviy AI) usuli qo'llanilib, model inson aralashuvisiz qat'iy xavfsizlik va axloq qoidalariga bo'ysunishga o'rgatilgan.",
      "tk": "Claude 1 — Anthropic kompaniýasynyň ilkinji uly modelidir.",
      "ru": "Claude 1 дебютировала в начале 2023 года как безопасная альтернатива ChatGPT. Обученная по принципу \"Конституционного ИИ\", модель отличалась естественным тоном общения и пониженной склонностью к токсичности.",
      "en": "Claude 1 pioneered Constitutional AI, training the model using AI feedback guided by written principles rather than human labelers alone for safer and more nuanced dialogue."
    },
    "capabilities": {
      "uz": [
        "Constitutional AI: qat'iy axloqiy me'yorlar va xavfsizlik qoidalariga amal qilish",
        "Tabiiy, muloyim va insondek samimiy muloqot uslubi",
        "100K tokenli dastlabki kengaytirilgan kontekst tajribasi",
        "Matnlarni tahrirlash va xulosa qilishda yuqori sifat"
      ],
      "tk": [
        "Constitutional AI howpsuzlygy",
        "Tebigy we mylakatly söhbetdeşlik stili",
        "Ilkinji 100K giň kontekst tejribesi",
        "Tekstleri gysgaltmak we redaktirlemek"
      ],
      "ru": [
        "Принцип Constitutional AI: соблюдение этических рамок без цензурного лицемерия",
        "Теплый, интеллигентный и естественный тон ведения дискуссии",
        "Первые эксперименты с контекстом до 100 000 токенов",
        "Высокое качество академической редактуры и суммаризации"
      ],
      "en": [
        "Constitutional AI alignment minimizing evasive refusals while maintaining safety",
        "Human-like, thoughtful conversational demeanor",
        "Early 100k token context window pioneer",
        "Nuanced long-form document editing and creative writing"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Xavfsiz korporativ muloqot",
        "AI etikasini o'rganish",
        "Matnlarni adabiy tahrirlash"
      ],
      "tk": [
        "Howpsuz aragatnaşyk",
        "AI etikasyny öwrenmek",
        "Edebi redaktirleme"
      ],
      "ru": [
        "Безопасные корпоративные чаты",
        "Исследования в области этики и безопасности ИИ",
        "Литературная редактура"
      ],
      "en": [
        "Safe conversational interfaces",
        "AI alignment research",
        "Literary editing and critique"
      ]
    },
    "limitations": {
      "uz": [
        "Kod yozish va dasturlashda GPT-4 dan orqada edi, multimodal ko'rish imkoniyati yo'q edi"
      ],
      "tk": [
        "Koddа GPT-4-den yzdady, surat görmeýärdi"
      ],
      "ru": [
        "Уступала GPT-4 в сложном программировании, отсутствие компьютерного зрения"
      ],
      "en": [
        "Lacked computer vision and fell short on competitive coding compared to GPT-4"
      ]
    },
    "usageTips": {
      "uz": "Ushbu model Claude 3 va Fable avlodlarining to'g'ridan-to'g'ri xavfsizlik poydevori hisoblanadi.",
      "tk": "Claude 3-iň taryhy esasy.",
      "ru": "Исторический предшественник современных моделей Claude 3.5 и Claude Fable.",
      "en": "Serves as the architectural origin of Anthropic’s current Claude line."
    },
    "scores": {
      "reasoning": 80,
      "coding": 74,
      "creativity": 84,
      "speed": 82,
      "multimodal": 20,
      "uzbekAndMultilingual": 74,
      "costEfficiency": 76
    }
  },
  {
    "id": "claude-2",
    "name": "Claude 2.0 / 2.1 (100K–200K Tokens)",
    "provider": "Anthropic",
    "category": "llm",
    "releaseYear": "2023",
    "pricingTier": "freemium",
    "priceSummary": {
      "uz": "Claude.ai bepul / Pro $20/oy",
      "tk": "Claude.ai mugt / Pro $20/aý",
      "ru": "Бесплатно в claude.ai / Pro $20/мес",
      "en": "Free in claude.ai / Pro $20/mo"
    },
    "contextOrLimit": "100,000–200,000 tokens",
    "accentColor": "#b45309",
    "isOpenSource": false,
    "supportsUzbek": "good",
    "websiteUrl": "https://anthropic.com/index/claude-2",
    "logoKey": "anthropic",
    "releasedModels": [
      "Claude 1 (2023)",
      "Claude 2.0 (2023)",
      "Claude 2.1 (2023)",
      "Claude 3 Opus (2024)",
      "Claude Fable (2026)"
    ],
    "tagline": {
      "uz": "Butun kitoblarni xotirada saqlash imkonini bergan ilk 200,000 tokenli keng kontekst modeli",
      "tk": "Bütin kitaplary ýatda saklap bilýän ilkinji 200 müň tokenli model",
      "ru": "Первая общедоступная модель с окном в 200 000 токенов (целые книги и сотни страниц кода)",
      "en": "The first consumer model supporting 200K tokens, ingesting technical documentation and novels"
    },
    "description": {
      "uz": "Claude 2 — 2023-yil yozida ommaga taqdim etilgan bo'lib, veb-interfeysda butun kitoblar va PDF larni yuklash imkonini birinchilardan bo'lib berdi. Kod yozish, matematika va xulosalash qobiliyati sezilarli oshirildi hamda 200,000 tokenlik kontekstni kiritdi.",
      "tk": "Claude 2 — 2023-nji ýylda uly PDF faýllary okap bilýän ilkinji meşhur model boldy.",
      "ru": "Claude 2 стала огромным шагом вперед. Пользователи впервые смогли бесплатно загружать многостраничные PDF-документы прямо в чат, а версия 2.1 расширила контекст до рекордных на тот момент 200 000 токенов.",
      "en": "Claude 2 advanced coding, math, and reasoning while democratizing long-context uploads. It scored 71.2% on HumanEval coding and supported 100K (and later 200K in 2.1) token inputs directly in the web UI."
    },
    "capabilities": {
      "uz": [
        "100,000–200,000 tokenli keng kontekst (bir nechta texnik qo'llanmani bir vaqtda o'qish)",
        "HumanEval dasturlash testida 71.2% natija (Claude 1 dagi 56% dan sezilarli o'sish)",
        "Katta moliyaviy va yuridik hisobotlarni qisqartirish va tahlil qilish",
        "Gallyutsinatsiyalarni 2 barobarga kamaytirish (Claude 2.1)"
      ],
      "tk": [
        "100K-200K tokenli giň kontekst",
        "HumanEval kod synagynda 71.2% netije",
        "Maliýe we hukuk hasabatlaryny seljermek",
        "Ýalňyş maglumatlary 2 esse azaltmak"
      ],
      "ru": [
        "Окно контекста от 100K до 200K токенов для чтения целых книг и кодовых баз",
        "Рост навыков кодинга до 71.2% в бенчмарке HumanEval",
        "Качественный анализ финансовых отчетов, балансов и юридических договоров",
        "Двукратное снижение уровня ложных утверждений в версии 2.1"
      ],
      "en": [
        "100K–200K context window ingesting up to 150,000 words in a single prompt",
        "Significant coding performance leap to 71.2% on HumanEval",
        "Deep legal contract and corporate financial disclosure auditing",
        "Substantial reduction in false assertions and hallucinations (2.1)"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Katta PDF kitoblar va hisobotlar tahlili",
        "Yuridik shartnomalarni solishtirish",
        "Uzoq ilmiy maqolalarni tahrirlash"
      ],
      "tk": [
        "PDF kitaplary we hasabatlary barlamak",
        "Şertnamalary deňeşdirmek",
        "Ylmy makalalar"
      ],
      "ru": [
        "Чтение и анализ больших PDF-файлов и книг",
        "Сравнение сложных юридических договоров",
        "Редактирование объемных текстов"
      ],
      "en": [
        "Multi-chapter PDF reading and querying",
        "Comparative legal agreement reviews",
        "Long-form editorial proofreading"
      ]
    },
    "limitations": {
      "uz": [
        "200K kontekstning eng chekkasidagi faktlarni topishda ba'zan adashardi (buni Claude 3 to'liq hal qildi)"
      ],
      "tk": [
        "Uzyn kontekstde käwagt faktlary ýitirip bilýärdi"
      ],
      "ru": [
        "Проблема \"иглы в стоге сена\" на пределе 200K токенов (была полностью решена в Claude 3)"
      ],
      "en": [
        "Recall degradation towards the far edges of 200K tokens, subsequently solved in Claude 3"
      ]
    },
    "usageTips": {
      "uz": "PDF hujjatlarni chat oynasiga sudrab tashlang (Drag & Drop) va 'Ushbu hujjatdagi asosiy xatarlarni 5 bandda aytib ber' deb so'rang.",
      "tk": "PDF faýllary çata taşlap sorag beriň.",
      "ru": "Перетаскивайте договоры прямо в окно чата и просите выделить скрытые риски.",
      "en": "Drag and drop complex policy PDFs into the chat to generate executive risk summaries."
    },
    "scores": {
      "reasoning": 86,
      "coding": 82,
      "creativity": 89,
      "speed": 80,
      "multimodal": 25,
      "uzbekAndMultilingual": 80,
      "costEfficiency": 78
    }
  },
  {
    "id": "claude-3-opus",
    "name": "Claude 3 Opus (Supreme Intellect)",
    "provider": "Anthropic",
    "category": "llm",
    "releaseYear": "2024",
    "pricingTier": "paid",
    "priceSummary": {
      "uz": "Claude Pro ($20/oy) / API $15/$75 per 1M",
      "tk": "Claude Pro ($20/aý)",
      "ru": "Claude Pro $20/мес / Премиум API тариф",
      "en": "Claude Pro ($20/mo) / Enterprise API tier"
    },
    "contextOrLimit": "200,000 tokens",
    "accentColor": "#92400e",
    "isOpenSource": false,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://anthropic.com/news/claude-3-family",
    "logoKey": "anthropic",
    "releasedModels": [
      "Claude 3 Haiku (2024)",
      "Claude 3 Sonnet (2024)",
      "Claude 3 Opus (2024)",
      "Claude 3.5 Sonnet (2024)",
      "Claude Fable (2026)"
    ],
    "tagline": {
      "uz": "Chuqur falsafiy tahlil, ilmiy qiyos va akademik yozish bo'yicha uzoq vaqt yetakchi bo'lgan intellekt",
      "tk": "Çuňňur pelsepewi seljerme we ylmy ýazuw boýunça iň güýçli intellekt",
      "ru": "Вершина серии Claude 3: глубочайший интеллект, философское осмысление и эталонное владение словом",
      "en": "Anthropic’s most capable intelligence for highly complex tasks, outperforming GPT-4 upon launch"
    },
    "description": {
      "uz": "Claude 3 Opus — 2024-yil mart oyida taqdim etilgan va o'sha paytda OpenAI GPT-4 ni barcha benchmarklarda ortda qoldirgan ilk model. U insoniy samimiylik, nozik adabiy til, falsafiy teranlik va ilmiy farazlarni tahlil qilishda jahonda tengsiz obro' qozondi.",
      "tk": "Claude 3 Opus — 2024-nji ýylda GPT-4-den hem ýokary netije görkezen iň meşhur intellektdir.",
      "ru": "Claude 3 Opus стал историческим триумфом Anthropic. Модель обогнала GPT-4 во всех отраслевых бенчмарках, продемонстрировав беспрецедентный уровень эрудиции, мета-когнитивной осознанности и изящного литературного слога.",
      "en": "Claude 3 Opus demonstrated near-human levels of comprehension and fluency on complex tasks, besting peers across undergraduate-level knowledge (MMLU), graduate-level reasoning (GPQA), and basic mathematics (GSM8K)."
    },
    "capabilities": {
      "uz": [
        "Jahon benchmarklari (MMLU, GSM8K, GPQA) bo'yicha GPT-4 dan ustun natijalar",
        "Mukammal 'Needle in a Haystack' natijasi: 200,000 token orasidan sun'iy kiritilgan jumlani sezib, hatto 'siz meni tekshiryapsiz' deb aytishi bilan mashhur bo'lgan",
        "Multimodal ko'rish: qadimiy xaritalar, arxitektura chizmalari va grafiklar",
        "O'zbek, fors, arab va g'arbiy tillarda ajoyib badiiy va ilmiy matnlar tuzish"
      ],
      "tk": [
        "MMLU we GPQA synaglarynda dünýä liderligi",
        "200K kontekstde 100% takyklyk",
        "Suratlary we çyzgylary seljermek (Vision)",
        "Edebi we pelsepewi eserleri ýokary dilde ýazmak"
      ],
      "ru": [
        "Абсолютное лидерство в академических тестах GPQA, MMLU и MATH на момент выхода",
        "Идеальная точность извлечения информации (99%+ Needle-in-a-Haystack с мета-осознанием контекста)",
        "Компьютерное зрение высокого разрешения для сложных инженерных чертежей и рукописей",
        "Непревзойденный стиль литературного и академического письма на русском и узбекском языках"
      ],
      "en": [
        "State-of-the-art benchmarks outperforming contemporary frontier models upon launch",
        "Near-perfect recall over 200k tokens with meta-cognitive awareness of testing parameters",
        "High-acuity computer vision parsing diagrams, blueprints, and archival documents",
        "Mastery of humanistic nuance, philosophy, and poetic prose across global languages"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Chuqur falsafiy va ijtimoiy tadqiqotlar",
        "Akademik kitoblar va darsliklar yozish",
        "Murakkab patent va yuridik ekspertiza"
      ],
      "tk": [
        "Pelsepe we ylmy barlaglar",
        "Derslikler ýazmak",
        "Patent we hukuk ekspertizasy"
      ],
      "ru": [
        "Глубокие междисциплинарные научные исследования",
        "Написание монографий, книг и академических учебников",
        "Сложная патентная и юридическая экспертиза"
      ],
      "en": [
        "Interdisciplinary academic research",
        "Authoring long-form technical monographs and textbooks",
        "High-stakes patent and corporate legal audits"
      ]
    },
    "limitations": {
      "uz": [
        "Yuqori hisoblash sarfi va yuqori narx (keyinchalik chiqqan Claude 3.5 Sonnet kodda undan ham tez va arzon bo'ldi)"
      ],
      "tk": [
        "Ýokary baha we haýalrak tizlik"
      ],
      "ru": [
        "Высокая стоимость токенов API и умеренная скорость генерации"
      ],
      "en": [
        "Higher API cost profile compared to subsequent distillation advances in Sonnet 3.5"
      ]
    },
    "usageTips": {
      "uz": "Agar sizga eng nafis uslubdagi maqola, kitob boblari yoki chuqur tahliliy fikr kerak bo'lsa, Opus eng to'g'ri tanlovdir.",
      "tk": "Ýokary derejeli makalalar we kitaplar üçin Opus ulanyň.",
      "ru": "Выбирайте Opus для ответственных текстов, где каждое слово должно звучать безупречно.",
      "en": "Choose Opus when prose quality, depth, and diplomatic phrasing matter most."
    },
    "scores": {
      "reasoning": 96,
      "coding": 92,
      "creativity": 98,
      "speed": 72,
      "multimodal": 90,
      "uzbekAndMultilingual": 91,
      "costEfficiency": 68
    }
  },
  {
    "id": "claude-3-5-sonnet",
    "name": "Claude 3.5 Sonnet (Coding King)",
    "provider": "Anthropic",
    "category": "coding",
    "releaseYear": "2024",
    "pricingTier": "freemium",
    "priceSummary": {
      "uz": "Claude.ai bepul / Pro $20/oy / API $3/$15 per 1M",
      "tk": "Claude.ai mugt / Pro $20",
      "ru": "Бесплатно в claude.ai / Pro $20/мес",
      "en": "Free tier / Pro $20/mo / API $3/$15 per 1M"
    },
    "contextOrLimit": "200,000 tokens (Artifacts 1.0)",
    "accentColor": "#f59e0b",
    "isOpenSource": false,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://anthropic.com/news/claude-3-5-sonnet",
    "logoKey": "anthropic",
    "releasedModels": [
      "Claude 3 Opus (2024)",
      "Claude 3.5 Sonnet (2024)",
      "Claude 3.5 Haiku (2024)",
      "Claude 3.7 Sonnet (2025)",
      "Claude Fable (2026)"
    ],
    "tagline": {
      "uz": "Dasturlash olamida inqilob qilgan, Artifacts interfeysi bilan kod va veb-ilovalarni bir lahzada quruvchi afsona",
      "tk": "Programmirleme dünýäsinde rewolýusiýa eden, Artifacts bilen kody derrew işletýän model",
      "ru": "Король программирования 2024 года: феноменальный SWE-bench, интерактивные Artifacts и скорость",
      "en": "The industry-defining software engineering powerhouse introducing interactive Artifacts"
    },
    "description": {
      "uz": "Claude 3.5 Sonnet — 2024-yil iyun oyida e'lon qilingan va jahon dasturchilari orasida 1-raqamli vositaga aylangan model. U Opus dan 2 barobar tez ishlaydi, narxi 5 barobar arzon, ammo dasturlash (SWE-bench 33.7% dan 49% gacha) va mantiqda dunyodagi barcha modellardan ustun chiqdi. Uning 'Artifacts' oynasi veb-saytlar va o'yinlarni chat yonida to'g'ridan-to'g'ri ishga tushirib beradi.",
      "tk": "Claude 3.5 Sonnet — programmistler üçin dünýäde iň meşhur model bolup, Artifacts bilen tapawutlanýar.",
      "ru": "Claude 3.5 Sonnet стала непререкаемым эталоном для инженеров ПО. Она работает вдвое быстрее Claude 3 Opus при впятеро меньшей стоимости. Функция Artifacts позволила рендерить React-приложения, игры и SVG прямо в браузере в режиме реального времени.",
      "en": "Claude 3.5 Sonnet elevated software engineering across the industry. Operating at 2x the speed of Opus at one-fifth the cost, it established new SOTA benchmarks in graduate-level reasoning (GPQA) and code generation (SWE-bench), paired with the live Artifacts environment."
    },
    "capabilities": {
      "uz": [
        "SWE-bench dasturlash rekordlari: real GitHub repozitoriylaridagi murakkab xatolarni o'zi tuzatish",
        "Artifacts: React, HTML, SVG, diagrammalarni chat ichida jonli ishga tushirish",
        "Kompyuterdan foydalanish (Computer Use): sichqonchani harakatlantirish va tugmalarni bosish orqali vazifa bajarish",
        "Rasmlarni, ayniqsa grafik va arxitektura diagrammalarini tushunish bo'yicha mutlaq yetakchi"
      ],
      "tk": [
        "SWE-bench kody seljermek we düzetmek",
        "Artifacts: React we web sahypalary göni ekranda işletmek",
        "Computer Use: kompýuteri awtonom dolandyrmak",
        "Çyzgylary we diagrammalary takyk okamak"
      ],
      "ru": [
        "Рекордные показатели в SWE-bench: автономный поиск и исправление багов в репозиториях GitHub",
        "Интерактивное окружение Artifacts для мгновенного запуска веб-приложений и React-компонентов",
        "Функция Computer Use: прямое управление курсором мыши, клики и ввод текста в ОС",
        "Лидерство в задачах технического зрения (чтение сложных графиков и схем)"
      ],
      "en": [
        "Record-shattering SWE-bench performance solving real-world GitHub issues autonomously",
        "Interactive Artifacts workspace executing React, Tailwind, SVG, and games live in-app",
        "Computer Use API enabling agents to view screens, move cursors, and click UI elements",
        "State-of-the-art vision reasoning outperforming all predecessors on visual chart benchmarks"
      ]
    },
    "bestUseCases": {
      "uz": [
        "To'liq veb va mobil ilovalar yaratish",
        "Murakkab kodlarni refaktoring qilish",
        "Arxitektura diagrammalari va interaktiv prototiplar"
      ],
      "tk": [
        "Web we mobil programmalar döretmek",
        "Kody refaktoring etmek",
        "Interaktiw prototipler"
      ],
      "ru": [
        "Разработка веб- и мобильных сервисов под ключ",
        "Рефакторинг и аудит сложных кодовых баз",
        "Создание интерактивных прототипов и дашбордов"
      ],
      "en": [
        "Full-stack web & mobile app engineering",
        "Large-scale legacy code refactoring",
        "Interactive rapid prototyping via Artifacts"
      ]
    },
    "limitations": {
      "uz": [
        "Haftalik foydalanish limiti bepul versiyada tez tugashi mumkin"
      ],
      "tk": [
        "Mugt wariantda çäklendirmeler çalt gutaryp biler"
      ],
      "ru": [
        "Быстрое исчерпание лимитов на бесплатном тарифе из-за высокой популярности"
      ],
      "en": [
        "Message frequency caps on the free tier due to massive worldwide developer demand"
      ]
    },
    "usageTips": {
      "uz": "Artifacts oynasidan foydalanib: 'Menga React va Tailwind da 3D zarrachali kalkulyator yozib ber' desangiz, uni darhol ko'rib sinab ko'rishingiz mumkin.",
      "tk": "Artifacts arkaly React oýunlaryny ýazdyryp görüň.",
      "ru": "Используйте Artifacts для создания интерактивных калькуляторов, игр и виджетов за 1 промпт.",
      "en": "Ask Claude to render standalone interactive React components directly into Artifacts."
    },
    "scores": {
      "reasoning": 97,
      "coding": 98,
      "creativity": 95,
      "speed": 88,
      "multimodal": 93,
      "uzbekAndMultilingual": 93,
      "costEfficiency": 86
    }
  },
  {
    "id": "claude-3-7-sonnet",
    "name": "Claude 3.7 Sonnet (Hybrid Reasoning)",
    "provider": "Anthropic",
    "category": "llm",
    "releaseYear": "2025",
    "pricingTier": "freemium",
    "priceSummary": {
      "uz": "Claude.ai bepul / Pro $20/oy",
      "tk": "Claude.ai mugt / Pro $20",
      "ru": "Бесплатно в claude.ai / Pro $20/мес",
      "en": "Free tier / Pro $20/mo"
    },
    "contextOrLimit": "200,000 tokens (Extended Thinking)",
    "accentColor": "#ea580c",
    "isOpenSource": false,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://anthropic.com",
    "logoKey": "anthropic",
    "releasedModels": [
      "Claude 3.5 Sonnet (2024)",
      "Claude 3.7 Sonnet (2025)",
      "Claude Fable (2026)"
    ],
    "tagline": {
      "uz": "Gibrid fikrlash texnologiyasi: bir vaqtning o'zida ham chaqmoqdek tezlik, ham 64K chuqur mantiq zanjiri",
      "tk": "Gibrid pikirlenme: çalt tizlik we 64K çuňňur logiki zynjyr",
      "ru": "Первая гибридная модель: мгновенные стандартные ответы или до 64K токенов глубоких размышлений по выбору",
      "en": "First hybrid model seamlessly blending instantaneous generation with controllable extended thinking"
    },
    "description": {
      "uz": "Claude 3.7 Sonnet — 2025-yilda Anthropic tomonidan taqdim etilgan birinchi gibrid intellekt modeli. Foydalanuvchi oddiy savollar uchun uni oddiy tezkor rejimda ishlatishi, murakkab muhandislik yoki olimpiada masalalarida esa 'Extended Thinking' slaydini surib, modelga 64,000 tokengacha ichki fikrlash byudjetini berishi mumkin.",
      "tk": "Claude 3.7 Sonnet — 2025-nji ýylda çaltlyk bilen çuňňur pikirlenmäni birleşdiren gibrid modeldir.",
      "ru": "Claude 3.7 Sonnet стёрла границу между быстрыми чат-моделями и системами пошагового рассуждения. Пользователь сам регулирует бюджет размышлений: от 0 до 64 000 токенов скрытых мыслей, получая безупречный код и доказательства.",
      "en": "Claude 3.7 Sonnet is the first frontier model offering hybrid reasoning. It allows developers to dial the exact amount of test-time thinking budget needed, from zero thinking for snappy chats to 64K reasoning tokens for hard engineering."
    },
    "capabilities": {
      "uz": [
        "Fikrlash chuqurligini boshqarish (Controllable Thinking Budget: 1000 dan 64000 tokengacha)",
        "SWE-bench Verified bo'yicha 70%+ rekord ko'rsatkich",
        "Frontend va to'liq dasturiy tizimlarni xatolarsiz, yagona arxitektura bilan loyihalash",
        "Mantiqiy ziddiyatlarni va chegaraviy holatlarni (Edge Cases) oldindan aniqlash"
      ],
      "tk": [
        "Pikirlenme çuňlugyny dolandyrmak (1000-den 64K tokene çenli)",
        "SWE-bench Verified boýunça 70%+ rekord",
        "Frontend we backend ulgamlaryny ýalňyşsyz gurmak",
        "Gizlin ýalňyşlyklary öňünden tapmak"
      ],
      "ru": [
        "Управляемый бюджет размышлений: тонкая настройка от 1K до 64K токенов логической цепочки",
        "Новый мировой рекорд на SWE-bench Verified (более 70% решенных реальных задач)",
        "Архитектурный надзор: превентивное выявление багов конкурентного доступа и крайних случаев",
        "Полная интеграция с Claude Code — агентом командной строки для терминала"
      ],
      "en": [
        "Fine-grained control over thinking tokens (dialing reasoning budgets up to 64K)",
        "Surpassing 70% on SWE-bench Verified for autonomous software fixes",
        "Deep architectural synthesis anticipating subtle concurrency race conditions",
        "Native CLI integration powering terminal-based agent tools like Claude Code"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Terminal orqali kod loyihalarini boshqarish (Claude Code)",
        "Kriptografik va moliyaviy hisob-kitoblar",
        "Full-stack avtonom dasturlash"
      ],
      "tk": [
        "Terminal arkaly kod taslamalary",
        "Maliýe we kriptografiýa",
        "Full-stack programmirleme"
      ],
      "ru": [
        "Автономная разработка в терминале через Claude Code",
        "Сложный финансовый и криптографический аудит",
        "Проектирование распределенных отказоустойчивых систем"
      ],
      "en": [
        "Terminal-based software development with Claude Code",
        "Mission-critical algorithmic verification",
        "Full-stack autonomous systems engineering"
      ]
    },
    "limitations": {
      "uz": [
        "Maksimal 'Thinking' yoqilganda hisoblash narxi va token sarfi oshadi"
      ],
      "tk": [
        "Uzyn pikirlenme wagtynda token sarp edilişi köpelýär"
      ],
      "ru": [
        "При максимальном бюджете размышлений возрастает стоимость и время генерации ответа"
      ],
      "en": [
        "Full-budget 64K thinking passes consume more inference tokens and exhibit higher latency"
      ]
    },
    "usageTips": {
      "uz": "O'zbek tilidagi murakkab loyihalarda 'Tizim arxitekturasini qadamma-qadam rejalashtir' deb so'rang va Extended Thinking yoqing.",
      "tk": "Çylşyrymly meselelerde Extended Thinking açyň.",
      "ru": "Включайте Extended Thinking при поиске плавающих багов и оптимизации SQL-запросов.",
      "en": "Enable Extended Thinking when debugging elusive race conditions or optimizing microservices."
    },
    "scores": {
      "reasoning": 98,
      "coding": 98,
      "creativity": 96,
      "speed": 92,
      "multimodal": 94,
      "uzbekAndMultilingual": 94,
      "costEfficiency": 85
    }
  },
  {
    "id": "claude-fable",
    "name": "Claude Fable 5.2 / Mythos",
    "provider": "Anthropic",
    "category": "llm",
    "releaseYear": "2026",
    "pricingTier": "freemium",
    "priceSummary": {
      "uz": "Bepul (cheklangan) / Pro $20/oy",
      "tk": "Mugt (çäkli) / Pro $20/aý",
      "ru": "Бесплатно (лимит) / Pro $20/мес",
      "en": "Free (limited) / Pro $20/mo"
    },
    "contextOrLimit": "1M tokens (128K output)",
    "accentColor": "#f59e0b",
    "isOpenSource": false,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://claude.ai",
    "logoKey": "anthropic",
    "releasedModels": [
      "Claude 1.0 (2023)",
      "Claude 2.0 (2023)",
      "Claude 3 Opus/Sonnet/Haiku (2024)",
      "Claude 3.5 Sonnet & Artifacts (2024)",
      "Claude 3.7 Sonnet (2025)",
      "Claude Fable 5.2 / Mythos Tier (2026)"
    ],
    "tagline": {
      "uz": "Anthropic ning eng yuqori darajadagi 'Fable/Mythos' avtonom dasturlash va yozuv modeli",
      "tk": "Anthropic-iň iň ýokary \"Fable/Mythos\" derejeli awtonom kod we ýazuw modeli",
      "ru": "Высший уровень Fable/Mythos от Anthropic: эталонный код, автономные циклы и чистота мысли",
      "en": "Anthropic’s Mythos-class flagship for autonomous SWE-bench loops, long decodes, and natural prose"
    },
    "description": {
      "uz": "Claude Fable 5.2 (Anthropic Mythos sinfi) — jahon miqyosida dasturchilar va ilmiy tadqiqotchilar uchun benchmarklar cho'qqisida turuvchi model. SWE-bench bo'yicha yetakchi bo'lib, o'nlab fayllarni o'z ichiga olgan yirik dasturiy loyihalarni xatosiz yozadi va jonli Artifacts oynasida ishga tushiradi.",
      "tk": "Claude Fable 5.2 — dünýäde programmistler üçin iň güýçli model bolup, SWE-bench boýunça liderdir. Uly taslamalary ýalňyşsyz ýazýar.",
      "ru": "Claude Fable 5.2 — флагман Anthropic высшего класса Mythos. Удерживает абсолютное лидерство в тестах SWE-bench по автономному программированию, выдаёт до 128K токенов непрерывного кода и обладает безупречным стилем речи.",
      "en": "Claude Fable 5.2 represents Anthropic’s Mythos-tier frontier model, setting records on autonomous software engineering benchmarks like SWE-bench while delivering human-grade prose and 128K output tokens."
    },
    "capabilities": {
      "uz": [
        "SWE-bench rekordi: mustaqil ravishda butun dasturiy modullarni loyihalash va testdan o'tkazish",
        "1M tokenli kontekst va 128K tokengacha to'xtovsiz javob (uzoq kod va kitoblar uchun)",
        "Extended Thinking Fable rejimi: matematik, huquqiy va mantiqiy xulosalarni birma-bir isbotlash",
        "Artifacts 2.0: to'liq React, SVG, 3D Canvas va diagrammalarni chat ichida ko'rsatish"
      ],
      "tk": [
        "SWE-bench rekordi: programma taslamalaryny özbaşdak gurmak we synagdan geçirmek",
        "1M kontekst we 128K token çenli üznüksiz jogap",
        "Extended Thinking Fable: matematiki we logiki deliller",
        "Artifacts 2.0: React we 3D dizaýnlary ekranda derrew işletmek"
      ],
      "ru": [
        "Рекордные показатели в SWE-bench: автономное написание и тестирование кода целых проектов",
        "Контекст 1M токенов и рекордная длина генерации ответа до 128K токенов",
        "Режим расширенного мышления Fable для глубоких финансовых, юридических и научных задач",
        "Интерактивная среда Artifacts 2.0 для мгновенного запуска веб-приложений и схем"
      ],
      "en": [
        "State-of-the-art SWE-bench benchmark for multi-file autonomous software engineering",
        "1M token context with unprecedented 128K output token generation capability",
        "Extended Thinking Fable mode verifying math, formal logic, and architectural designs",
        "Next-gen Artifacts workspace rendering full interactive apps and diagrams live"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Professional dasturiy ta'minot yaratish",
        "Katta kitoblar va ilmiy maqolalar tahlili",
        "Murakkab analitika va strategiya"
      ],
      "tk": [
        "Professional programma döretmek",
        "Uly kitaplary we ylmy makalalary seljermek",
        "Çylşyrymly analiz"
      ],
      "ru": [
        "Профессиональная разработка софта",
        "Глубокая редактура и научные статьи",
        "Стратегический бизнес-анализ"
      ],
      "en": [
        "Enterprise full-stack engineering",
        "Long-form editorial & scientific treatises",
        "Multi-step autonomous agent loops"
      ]
    },
    "limitations": {
      "uz": [
        "To'g'ridan-to'g'ri rasm yoki video generatsiyasi yo'q (kod va matn uchun ixtisoslashgan)"
      ],
      "tk": [
        "Göni surat ýa-da wideo döretmeýär"
      ],
      "ru": [
        "Сфокусирован на коде и тексте (нет встроенной генерации фото и видео)"
      ],
      "en": [
        "Focused on text, logic, and code rather than native photorealistic image/video output"
      ]
    },
    "usageTips": {
      "uz": "Loyihangizdagi barcha arxitektura qoidalarini Claude Projects ga yuklang va 'Extended Thinking' tugmasini bosib vazifa bering.",
      "tk": "Claude Projects-e taslama düzgünlerini ýükläň we Extended Thinking ulanyň.",
      "ru": "Используйте Claude Projects для создания постоянного контекста вашей команды и репозитория.",
      "en": "Combine Claude Projects with Extended Thinking to create dedicated domain experts."
    },
    "scores": {
      "reasoning": 99,
      "coding": 99,
      "creativity": 96,
      "speed": 91,
      "multimodal": 86,
      "uzbekAndMultilingual": 94,
      "costEfficiency": 84
    }
  },
  {
    "id": "deepseek-coder",
    "name": "DeepSeek Coder (33B Open Weights)",
    "provider": "DeepSeek",
    "category": "coding",
    "releaseYear": "2023",
    "pricingTier": "opensource",
    "priceSummary": {
      "uz": "Ochiq manba (Hugging Face / GitHub da bepul)",
      "tk": "Açyk çeşme / Mugt",
      "ru": "Открытые веса для локального запуска",
      "en": "Open Weights (GitHub / Hugging Face)"
    },
    "contextOrLimit": "16,384 tokens (33B parametr)",
    "accentColor": "#0284c7",
    "isOpenSource": true,
    "supportsUzbek": "good",
    "websiteUrl": "https://github.com/deepseek-ai/DeepSeek-Coder",
    "logoKey": "deepseek",
    "releasedModels": [
      "DeepSeek LLM (2023)",
      "DeepSeek Coder 33B (2023)",
      "DeepSeek V2 (2024)",
      "DeepSeek V3 (2024)",
      "DeepSeek R1 (2025)",
      "DeepSeek V4 (2026)"
    ],
    "tagline": {
      "uz": "Xitoyning DeepSeek laboratoriyasi tomonidan yaratilgan ilk yuqori aniqlikdagi ochiq kodli dasturlash modeli",
      "tk": "DeepSeek laboratoriýasynyň ilkinji ýokary takyklykly açyk kod modeli",
      "ru": "Первая открытая специализированная кодинг-модель DeepSeek на 33B параметров, превзошедшая CodeLlama",
      "en": "Specialized 33B open code intelligence trained from scratch on 2 trillion tokens of code and text"
    },
    "description": {
      "uz": "DeepSeek Coder 33B — 2023-yil oxirida chiqarilgan va ochiq kodli dasturlash modellarida yangi mezon o'rnatgan model. 80 dan ortiq dasturlash tillarida 2 trillion token kod bilan o'qitilgan bo'lib, o'sha paytda Meta ning CodeLlama 34B modelidan har tomonlama ustun kelgan.",
      "tk": "DeepSeek Coder 33B — 80-den gowrak programmirleme dilinde 2 trillion token kod bilen taýýarlanan modeldir.",
      "ru": "DeepSeek Coder 33B была обучена с нуля на 2 триллионах токенов кода и естественного языка на 87 языках программирования. Модель продемонстрировала выдающиеся результаты в тестах HumanEval и MBPP среди всех открытых моделей своего времени.",
      "en": "DeepSeek Coder 33B demonstrated that dedicated open-source code models could achieve parity with closed commercial systems. Trained on 2T tokens across 87 programming languages with repository-level context."
    },
    "capabilities": {
      "uz": [
        "87 ta dasturlash tilida (Python, C++, Java, JS, Go, Rust va boshqalar) xatosiz kod yozish",
        "Fill-In-The-Middle (FIM): kodning o'rtasidagi bo'sh joylarni kontekstga qarab to'ldirish",
        "16K kontekst oynasi orqali loyihaning bir nechta bog'langan fayllarini tahlil qilish",
        "Lokal serverda va dasturchilar IDE siga (VS Code) o'rnatish imkoniyati"
      ],
      "tk": [
        "87 sany programmirleme dilinde takyk kod ýazmak",
        "FIM usuly: kod aralygyny akylly doldurmak",
        "16K kontekst bilen baglanyşykly faýllary barlamak",
        "VS Code bilen integrasiýa"
      ],
      "ru": [
        "Поддержка 87 языков программирования с глубоким пониманием синтаксиса",
        "Технология Fill-In-The-Middle (FIM) для автодополнения кода внутри существующих функций",
        "Окно контекста 16K токенов на уровне репозитория проекта",
        "Бесплатное развертывание в локальных плагинах для VS Code и JetBrains"
      ],
      "en": [
        "Proficiency across 87 programming languages from Python to Rust",
        "Project-level Fill-In-The-Middle (FIM) capability for inline tab completions",
        "16K window handling cross-file dependencies and function headers",
        "Zero-license-fee deployment on on-premise developer servers"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Kompaniya ichida maxfiy kod yozish muhiti",
        "VS Code da bepul kod avtoto'ldiruvchi (Copilot o'rniga)",
        "Kod bazalarini refaktoring qilish"
      ],
      "tk": [
        "Kompaniýa içinde howpsuz kod ýazmak",
        "VS Code-da mugt kömekçi",
        "Kody täzelemek"
      ],
      "ru": [
        "Локальный аналог GitHub Copilot без отправки закрытого кода в облако",
        "Автодополнение кода внутри IDE",
        "Автоматическое написание юнит-тестов"
      ],
      "en": [
        "Private on-premise GitHub Copilot alternative",
        "Local IDE inline autocomplete extensions",
        "Automated unit test synthesis"
      ]
    },
    "limitations": {
      "uz": [
        "Insoniy umumiy muloqot va ijodiy matnlarda ixtisoslashmagan (faqat dasturlash uchun mo'ljallangan)"
      ],
      "tk": [
        "Diňe kod üçin niýetlenen, umumy söhbetdeşlikde pesräk"
      ],
      "ru": [
        "Узкая специализация на коде: уступает универсальным чат-моделям в общих темах"
      ],
      "en": [
        "Narrow specialization on code; suboptimal for general knowledge dialogues"
      ]
    },
    "usageTips": {
      "uz": "Ollama orqali `ollama run deepseek-coder:33b` buyrug'i bilan o'rnatib, Continue.dev kengaytmasiga ulab bepul Copilot yarating.",
      "tk": "Ollama arkaly gurnap Continue.dev bilen ulanyň.",
      "ru": "Свяжите deepseek-coder с расширением Continue.dev в VS Code для бесплатного умного автодополнения.",
      "en": "Pair deepseek-coder with Continue.dev in VS Code for a zero-cost local copilot."
    },
    "scores": {
      "reasoning": 83,
      "coding": 91,
      "creativity": 65,
      "speed": 86,
      "multimodal": 10,
      "uzbekAndMultilingual": 70,
      "costEfficiency": 96
    }
  },
  {
    "id": "deepseek-v2",
    "name": "DeepSeek V2 / V2.5 (MLA Architecture)",
    "provider": "DeepSeek",
    "category": "llm",
    "releaseYear": "2024",
    "pricingTier": "opensource",
    "priceSummary": {
      "uz": "Ochiq manba / API narxi: $0.14 / 1M token (Rekord darajada arzon)",
      "tk": "Açyk çeşme / API aşa arzan",
      "ru": "Открытый код / Рекордно дешевый API: $0.14 за 1M токенов",
      "en": "Open Weights / Record-low API: $0.14 per 1M tokens"
    },
    "contextOrLimit": "128,000 tokens (MLA + DeepSeekMoE)",
    "accentColor": "#0369a1",
    "isOpenSource": true,
    "supportsUzbek": "good",
    "websiteUrl": "https://github.com/deepseek-ai/DeepSeek-V2",
    "logoKey": "deepseek",
    "releasedModels": [
      "DeepSeek Coder (2023)",
      "DeepSeek V2 (2024)",
      "DeepSeek V2.5 (2024)",
      "DeepSeek V3 (2024)",
      "DeepSeek R1 (2025)",
      "DeepSeek V4 (2026)"
    ],
    "tagline": {
      "uz": "Multi-Head Latent Attention (MLA) arxitekturasi orqali hisoblash narxlarini 10 barobarga pasaytirgan model",
      "tk": "MLA arhitekturasy arkaly bahalary 10 esse arzanlatdyran inqilaby model",
      "ru": "Инженерное чудо 2024: архитектура MLA снизила затраты на видеопамять на 93%, обрушив цены на рынке ИИ",
      "en": "Pioneered Multi-Head Latent Attention (MLA), slashing KV cache memory by 93% and disrupting AI pricing"
    },
    "description": {
      "uz": "DeepSeek V2 — 2024-yil may oyida sun'iy intellekt sanoatida narxlar inqilobini boshlab bergan model. Unda yangi ixtiro qilingan MLA (Multi-Head Latent Attention) va DeepSeekMoE arxitekturasi qo'llanilib, KV-cache xotira sarfi 93% ga qisqartirildi. Natijada OpenAI GPT-4 darajasidagi aql 10-20 barobar arzon narxda taqdim etildi.",
      "tk": "DeepSeek V2 — 2024-nji ýylda dünýäde emeli aň nyrhlaryny düýpli arzanlatdyran arhitekturadyr.",
      "ru": "DeepSeek V2 совершила ценовой переворот. Инновационная архитектура сжатия скрытых представлений внимания (MLA) сократила потребление видеопамяти под KV-кэш на 93.3%, позволив отдавать токены по цене в десятки раз ниже конкурентов при качестве на уровне GPT-4-Turbo.",
      "en": "DeepSeek V2 introduced Multi-Head Latent Attention (MLA), dramatically compressing the Key-Value cache. With 236B total parameters activating only 21B per token, it triggered a global price war in LLM APIs."
    },
    "capabilities": {
      "uz": [
        "Multi-Head Latent Attention (MLA): KV-kesh xotirasini 93.3% ga siqish orqali yuqori tezlik",
        "DeepSeekMoE: 236 milliard umumiy parametr, lekin har bir so'zda bor-yo'g'i 21 milliard aktiv parametr",
        "128,000 tokenli kontekst oynasida to'liq ishonchli xotira",
        "Matn, kod yozish va xitoy/ingliz/ko'p tilli tahlilda flagman natijalar"
      ],
      "tk": [
        "MLA arhitekturasy: xotira talabyny 93.3% azaltmak",
        "DeepSeekMoE: 236B parametr, 21B aktiv parametr",
        "128 müň token kontekst",
        "Köp dilli ýokary takyklyk we arzan baha"
      ],
      "ru": [
        "Сжатие KV-кэша на 93.3% благодаря компрессии в латентное пространство (MLA)",
        "Эффективный MoE: 236B суммарных параметров, из которых на токен активируются только 21B",
        "Контекстное окно 128K токенов для масштабных задач",
        "Обрушение цен на API до уровня нескольких центов за миллион токенов"
      ],
      "en": [
        "Multi-Head Latent Attention compressing KV cache by 93.3%",
        "Sparsely-activated DeepSeekMoE (236B total, 21B activated per token)",
        "128K context window with linear scaling efficiency",
        "Pioneering price performance that forced commercial cloud providers to slash API fees"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Yirik korporativ ma'lumotlarni arzon qayta ishlash",
        "Dasturchilar uchun arzon API",
        "RAG va hujjatlar bazalari"
      ],
      "tk": [
        "Arzan korporatiw maglumatlar seljermesi",
        "Programmistler üçin elýeterli API",
        "RAG ulgamlary"
      ],
      "ru": [
        "Высоконагруженные корпоративные чат-боты и RAG-системы с миллионным трафиком",
        "Дешевый парсинг и структурирование документов",
        "Массовая генерация контента"
      ],
      "en": [
        "High-throughput corporate RAG pipelines on tight budgets",
        "Batch parsing of terabytes of unstructured text",
        "Economical autonomous agent loops"
      ]
    },
    "limitations": {
      "uz": [
        "G'arb madaniyati va o'zbek tilidagi ayrim adabiy nozikliklarda GPT-4o va Claude dan biroz soddaroq"
      ],
      "tk": [
        "Sebit dilleriniň çylşyrymly edebi stilinde biraz ýönekeýräk"
      ],
      "ru": [
        "Уступает Claude 3.5 Sonnet в тонкостях западного культурного контекста и сложной фронтенд-разработке"
      ],
      "en": [
        "Slightly less nuanced on Western cultural idioms and frontend web framework polish than Claude"
      ]
    },
    "usageTips": {
      "uz": "DeepSeek rasmiy API sidagi bepul yoki arzon tokenlar orqali o'z startapingiz xarajatlarini 90% ga tejashingiz mumkin.",
      "tk": "API nyrhlary örän arzan bolany üçin startaplar üçin iň gowusy.",
      "ru": "Используйте официальный API DeepSeek для снижения расходов бэкенда в 10 раз.",
      "en": "Switch your default text summarization and extraction API endpoints to DeepSeek to save 90% budget."
    },
    "scores": {
      "reasoning": 90,
      "coding": 90,
      "creativity": 84,
      "speed": 91,
      "multimodal": 25,
      "uzbekAndMultilingual": 84,
      "costEfficiency": 99
    }
  },
  {
    "id": "deepseek-v3",
    "name": "DeepSeek V3 (671B MoE Frontier)",
    "provider": "DeepSeek",
    "category": "llm",
    "releaseYear": "2024",
    "pricingTier": "opensource",
    "priceSummary": {
      "uz": "Ochiq manba / API: $0.14 / 1M token (GPT-4o dan 20x arzon)",
      "tk": "Açyk çeşme / API örän arzan",
      "ru": "Открытый код (MIT) / API $0.14 за 1M токенов",
      "en": "Open Weights (MIT) / $0.14 per 1M input tokens"
    },
    "contextOrLimit": "128,000 tokens (671B MoE, 37B aktiv)",
    "accentColor": "#0284c7",
    "isOpenSource": true,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://chat.deepseek.com",
    "logoKey": "deepseek",
    "releasedModels": [
      "DeepSeek V2 (2024)",
      "DeepSeek V3 (2024)",
      "DeepSeek R1 (2025)",
      "DeepSeek V4 (2026)"
    ],
    "tagline": {
      "uz": "671 milliard parametrli arzon gigant: bor-yo'g'i 6 million dollar sarflanib GPT-4o bilan tenglashgan MoE mo'jizasi",
      "tk": "671 milliard parametrli ägirt: 6 million dollara GPT-4o bilen deňleşen açyk model",
      "ru": "Технологический шок конца 2024: 671 млрд параметров, обученных всего за $6M и на равных соревнующихся с GPT-4o",
      "en": "671B parameter open-weights titan trained for just $6M that rivaled leading Western closed models"
    },
    "description": {
      "uz": "DeepSeek V3 — 2024-yil dekabrida e'lon qilingan va jahon texnologiya bozorini shokka solgan model. AQSh gigantlari (OpenAI, Google) yuzlab million dollar sarflagan bir paytda, DeepSeek bor-yo'g'i 5.58 million dollarlik hisoblash quvvati bilan 671 milliard parametrli, GPT-4o va Claude 3.5 Sonnet bilan tenglasha oladigan ochiq manbali modelni yaratdi.",
      "tk": "DeepSeek V3 — 2024-nji ýylyň ahyrynda dünýäni haýran galdyran 671 milliard parametrli açyk modeldir.",
      "ru": "DeepSeek V3 доказала миру, что архитектурные инновации важнее бесконечных бюджетов. Обученная на 2048 ускорителях Nvidia H800 всего за $5.58 млн, модель с 671 млрд параметров MoE показала бенчмарки на уровне лучших закрытых флагманов США.",
      "en": "DeepSeek V3 shook Silicon Valley by proving extreme algorithmic efficiency. Trained from scratch on 14.8T tokens for only $5.58M on clusters of H800s, it achieved benchmark parity with GPT-4o and Claude 3.5 Sonnet while remaining open-weights."
    },
    "capabilities": {
      "uz": [
        "671 milliard parametr (har bir tokenda 37 milliard ixtisoslashgan ekspert parametrlari ishlaydi)",
        "Multi-Token Prediction (MTP): keyingi bir nechta so'zni bir vaqtda bashorat qilib, generatsiya tezligini oshirish",
        "SWE-bench, HumanEval va MMLU bo'yicha yopiq xususiy flagmanlar bilan teng natija",
        "To'liq ochiq MIT litsenziyasi: har kim o'z serverida bepul ishlatishi va o'zgartirishi mumkin"
      ],
      "tk": [
        "671B parametr (37B aktiv ekspert)",
        "Multi-Token Prediction bilen ýokary tizlik",
        "SWE-bench we MMLU synaglarynda GPT-4o bilen deň",
        "MIT açyk lisenziýasy: mugt ulanmak mümkinçiligi"
      ],
      "ru": [
        "671 миллиард параметров MoE с 37 миллиардами активируемых экспертов на токен",
        "Инновационный метод предсказания нескольких токенов сразу (Multi-Token Prediction)",
        "Паритет с GPT-4o и Claude 3.5 Sonnet в тестах MMLU, MATH и HumanEval",
        "Полная открытость по лицензии MIT для коммерческого и исследовательского использования"
      ],
      "en": [
        "671B MoE architecture with 37B activated parameters per forward pass",
        "Multi-Token Prediction (MTP) speculative decoding accelerating output speed",
        "Benchmarking parity with leading proprietary closed frontier LLMs across STEM and coding",
        "Permissive MIT open-source license enabling unconstrained enterprise hosting"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Korxonalar uchun xususiy xavfsiz sun'iy intellekt",
        "Dasturlash va kod tahlili",
        "Ko'p tilli tarjimalar va ilmiy hisobotlar"
      ],
      "tk": [
        "Kärhanalar üçin howpsuz AI",
        "Programmirleme we kod barlagy",
        "Köp dilli terjimeler"
      ],
      "ru": [
        "Развертывание суверенного ИИ внутри закрытого контура предприятия",
        "Автоматизация разработки и ревью кода",
        "Высокопроизводительный бэкенд для ИИ-сервисов"
      ],
      "en": [
        "On-premise enterprise sovereignty without external API dependencies",
        "Enterprise code review and automation",
        "Ultra-cost-effective production LLM backends"
      ]
    },
    "limitations": {
      "uz": [
        "671B modelni lokal ishga tushirish uchun bir nechta Nvidia H100/A100 serverlari talab qilinadi (yoki rasmiy arzon API kerak)"
      ],
      "tk": [
        "Lokal işletmek üçin güýçli H100 serwerleri gerek"
      ],
      "ru": [
        "Для локального развертывания полного веса требуется кластер из нескольких GPU уровня H100"
      ],
      "en": [
        "Local unquantized deployment requires multi-GPU datacenter hardware clusters"
      ]
    },
    "usageTips": {
      "uz": "Agar o'z serveringiz bo'lmasa, `chat.deepseek.com` saytida V3 modelidan mutlaqo bepul foydalanishingiz mumkin.",
      "tk": "chat.deepseek.com sahypasynda mugt ulanyň.",
      "ru": "Используйте веб-версию chat.deepseek.com — полностью бесплатно и без жестких ограничений.",
      "en": "Use chat.deepseek.com or the official API for instant access without hardware overhead."
    },
    "scores": {
      "reasoning": 95,
      "coding": 94,
      "creativity": 90,
      "speed": 94,
      "multimodal": 75,
      "uzbekAndMultilingual": 91,
      "costEfficiency": 99
    }
  },
  {
    "id": "deepseek-r1",
    "name": "DeepSeek R1 (Open Source Reasoning)",
    "provider": "DeepSeek",
    "category": "llm",
    "releaseYear": "2025",
    "pricingTier": "opensource",
    "priceSummary": {
      "uz": "Ochiq manba (bepul) / API $0.55 / 1M token",
      "tk": "Açyk çeşme / Mugt / API örän arzan",
      "ru": "Полностью открытые веса (MIT) / $0.55 за 1M токенов",
      "en": "Open Weights (MIT) / $0.55 per 1M input tokens"
    },
    "contextOrLimit": "128,000 tokens (Open Reasoning CoT)",
    "accentColor": "#0ea5e9",
    "isOpenSource": true,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://chat.deepseek.com",
    "logoKey": "deepseek",
    "releasedModels": [
      "DeepSeek V3 (2024)",
      "DeepSeek R1-Zero (2025)",
      "DeepSeek R1 (2025)",
      "DeepSeek R1 Distill (1.5B–70B) (2025)",
      "DeepSeek V4 (2026)"
    ],
    "tagline": {
      "uz": "Dunyoni hayratga solgan ochiq manbali mantiqiy fikrlash (Reasoning) inqilobi: OpenAI o1 bilan tenglashgan bepul model",
      "tk": "Dünýäni haýran galdyran açyk çeşmeli mantiqy model: OpenAI o1 bilen deň",
      "ru": "Главная сенсация начала 2025: открытая модель рассуждений, повторившая успех OpenAI o1 через чистый RL",
      "en": "The open reasoning breakthrough trained with pure Reinforcement Learning matching OpenAI o1"
    },
    "description": {
      "uz": "DeepSeek R1 — 2025-yil yanvar oyida jahon fond bozorlarini larzaga solgan, sun'iy intellekt tarixidagi eng muhim ochiq manbali yutuq. U qimmatbaho inson belgilashlarisiz (Supervised Fine-Tuning siz), sof Reinforcement Learning (RL) orqali o'z-o'zidan fikrlashni, xatolarini tekshirishni va Xalqaro Matematika Olimpiadasida (AIME 79.8%) OpenAI o1 bilan bir xil darajada masalalarni yechishni o'rgandi.",
      "tk": "DeepSeek R1 — 2025-nji ýylda dünýäni lerzä getiren, OpenAI o1 derejesindäki açyk intellektdir.",
      "ru": "DeepSeek R1 доказала, что способность глубоко размышлять (Reasoning) может возникнуть у нейросети спонтанно через обучение с подкреплением (Reinforcement Learning) без участия человека. Модель выложили в открытый доступ вместе с дистиллированными версиями от 1.5B до 70B.",
      "en": "DeepSeek R1 proved that reasoning capabilities can be incentivized directly via large-scale reinforcement learning (DeepSeek-R1-Zero). It reached 79.8% on AIME 2024, matching OpenAI o1-0912, and released distilled models runnable on consumer PCs."
    },
    "capabilities": {
      "uz": [
        "Ochiq fikrlash zanjiri (Chain-of-Thought): foydalanuvchi modelning har bir fikrini o'qiy oladi",
        "AIME 2024 matematika olimpiadasida 79.8% va MATH-500 da 97.3% rekord natija",
        "Distill qilingan kichik versiyalari (1.5B, 7B, 14B, 32B, 70B) har qanday oddiy noutbukda ishlaydi",
        "Dasturiy arxitektura va kod xatolarini o'zini o'zi sinab tuzatish"
      ],
      "tk": [
        "Açyk pikir zynjyry: pikirlenme prosesini görüp bolýar",
        "AIME 2024 matematikasynda 79.8% we MATH-500-de 97.3%",
        "Kiçi distillirlenen wariantlary noutbukda mugt işleýär",
        "Koddaky ýalňyşlary özi barlap düzetmek"
      ],
      "ru": [
        "Полностью прозрачная цепочка рассуждений (тег <think>), видимая пользователю",
        "Результат 79.8% на престижнейшем математическом тесте AIME 2024 и 97.3% на MATH-500",
        "Дистиллированные версии (1.5B, 7B, 8B, 14B, 32B, 70B) запускаются на обычных ПК и смартфонах",
        "Способность к саморефлексии: поиск альтернативных гипотез и исправление собственных ошибок"
      ],
      "en": [
        "Transparent chain-of-thought enclosed in <think> tags inspecting internal deductions",
        "79.8% Pass@1 on AIME 2024 and 97.3% on MATH-500, matching proprietary frontier models",
        "Open distilled family (1.5B to 70B) enabling offline reasoning on phones and laptops",
        "Autonomous self-correction verifying intermediate proofs before emitting final answers"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Olimpiada matematikasi va chuqur algoritmlar",
        "Lokal kompyuterda bepul 'o1' darajasidagi AI ishlatish",
        "Ilmiy maqolalar va nazariy isbotlar"
      ],
      "tk": [
        "Olimpiada matematikasy we algoritmler",
        "Lokal noutbukda o1 derejesindäki mugt AI",
        "Ylmy subutnamalar"
      ],
      "ru": [
        "Олимпиадная математика, физика и алгоритмический код",
        "Локальный запуск моделей рассуждения через Ollama на домашних ПК",
        "Академический анализ и доказательства теорем"
      ],
      "en": [
        "Olympiad mathematics, competitive coding, and formal logic",
        "Offline edge reasoning via Ollama (deepseek-r1:14b / 32b)",
        "Rigorous scientific and cryptographic verification"
      ]
    },
    "limitations": {
      "uz": [
        "Fikrlash jarayoni (fikrlash zanjiri) tufayli javob berish biroz ko'proq vaqt oladi"
      ],
      "tk": [
        "Pikirlenýän wagty jogap biraz garaşdyrýar"
      ],
      "ru": [
        "Время вывода ответа выше обычных чат-моделей из-за генерации мыслительного процесса"
      ],
      "en": [
        "Higher output latency due to generative test-time reasoning steps before user response"
      ]
    },
    "usageTips": {
      "uz": "O'z noutbukingizda ishlatish uchun `ollama run deepseek-r1:14b` ni yozing va internetsiz bepul mantiqiy intellektdan rohatlaning.",
      "tk": "Ollama arkaly deepseek-r1:14b modelini gurnap görüň.",
      "ru": "Установите deepseek-r1:14b через Ollama — это даст мощнейший интеллект уровня o1 прямо на вашем ноутбуке офлайн.",
      "en": "Run deepseek-r1:14b or 32b via Ollama locally for an unthrottled private reasoning copilot."
    },
    "scores": {
      "reasoning": 98,
      "coding": 97,
      "creativity": 88,
      "speed": 82,
      "multimodal": 68,
      "uzbekAndMultilingual": 92,
      "costEfficiency": 99
    }
  },
  {
    "id": "deepseek-v4",
    "name": "DeepSeek V4 (Unified Multimodal MoE)",
    "provider": "DeepSeek",
    "category": "llm",
    "releaseYear": "2026",
    "pricingTier": "opensource",
    "priceSummary": {
      "uz": "Ochiq manba / API $0.20 / 1M token",
      "tk": "Açyk çeşme / API aşa arzan",
      "ru": "Открытые веса / API $0.20 за 1M токенов",
      "en": "Open Weights / $0.20 per 1M tokens"
    },
    "contextOrLimit": "1,000,000 tokens (Native Video/Audio)",
    "accentColor": "#0369a1",
    "isOpenSource": true,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://deepseek.com",
    "logoKey": "deepseek",
    "releasedModels": [
      "DeepSeek V2 (2024)",
      "DeepSeek V3 (2024)",
      "DeepSeek R1 (2025)",
      "DeepSeek V4 (2026)"
    ],
    "tagline": {
      "uz": "2026-yilgi arzon, ochiq va keng kontekstli yangi avlod universal sun'iy intellekti",
      "tk": "2026-njy ýylyň arzan, açyk we giň kontekstli täze nesil uniwersal emeli aňy",
      "ru": "Новейший открытый мультимодальный гигант 2026 года с контекстом 1 миллион токенов и нативной поддержкой зрения и аудио",
      "en": "Next-generation open multimodal titan pairing million-token context with frontier reasoning"
    },
    "description": {
      "uz": "DeepSeek V4 — 2026-yilgi flagman bo'lib, R1 mantiqiy fikrlash tizimini va V3 ning ulkan MoE arxitekturasini 1 million tokenlik multimodal kontekst bilan birlashtirgan. U ochiq kodli dunyoda eng qudratli model bo'lib, xotirani tejashda yangi jahon rekordlarini o'rnatgan.",
      "tk": "DeepSeek V4 — 2026-njy ýylyň iň güýçli açyk çeşmeli multimodal modelidir.",
      "ru": "DeepSeek V4 объединила в себе логическую мощь R1 и масштабируемость V3, добавив нативную обработку видео, аудио и контекстное окно в 1 миллион токенов при сохранении рекордно низкой стоимости инференса.",
      "en": "DeepSeek V4 synthesizes R1-grade autonomous reasoning and V3 MoE capacity into a unified 1M context native multimodal system, maintaining DeepSeek’s hallmark computational efficiency."
    },
    "capabilities": {
      "uz": [
        "1M tokenli kontekst oynasi va ultra-kam xotira sarflovchi MLA 2.0 texnologiyasi",
        "Nativ multimodal: video kadrlari, audio va kodni bir vaqtning o'zida chuqur tahlil qilish",
        "O'zbek, uyg'ur, turkiy va barcha Yevrosiyo tillarida a'lo darajadagi lingvistik mahorat",
        "SWE-bench va matematik benchmarklarda mutlaq ochiq manbali yetakchilik"
      ],
      "tk": [
        "1M token kontekst we MLA 2.0",
        "Wideo, ses we kody birbada seljermek",
        "Sebit dillerinde ýokary derejeli düşünje",
        "Açyk çeşmeli modeller arasynda liderlik"
      ],
      "ru": [
        "Окно контекста 1 миллион токенов на базе оптимизированной архитектуры MLA 2.0",
        "Нативная сквозная обработка аудиозаписей, видеороликов и программных репозиториев",
        "Глубокое знание тюркских, славянских и азиатских языков",
        "Лидерство среди открытых моделей в соревновательном программировании и математике"
      ],
      "en": [
        "1M context window utilizing second-generation Multi-Head Latent Attention (MLA 2.0)",
        "Native multi-modal decoding spanning live video feeds, raw audio, and software repositories",
        "Exceptional cross-lingual synthesis across Eurasian and regional language families",
        "State-of-the-art open-weights benchmark performance across SWE-bench and math Olympiads"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Korporativ avtonom tizimlar va serverlar",
        "Katta videolarni va arxivlarni o'rganish",
        "Global dasturiy ta'minot loyihalari"
      ],
      "tk": [
        "Kärhana awtomatizasiýasy",
        "Uly wideolary seljermek",
        "Global programma taslamalary"
      ],
      "ru": [
        "Корпоративные мультимодальные агенты и локальные дата-центры",
        "Анализ больших видеоархивов и терабайтов технической документации",
        "Суверенные ИИ-системы"
      ],
      "en": [
        "Sovereign enterprise AI infrastructure",
        "Multi-modal long-horizon video & audio intelligence",
        "Global-scale autonomous coding pipelines"
      ]
    },
    "limitations": {
      "uz": [
        "To'liq modelni o'rnatish uchun korporativ darajadagi GPU serverlar kerak"
      ],
      "tk": [
        "Doly modeli işletmek üçin uly serwerler gerek"
      ],
      "ru": [
        "Для локального хостинга полной версии требуются мощные серверные мощности"
      ],
      "en": [
        "Full-model hosting demands enterprise datacenter infrastructure"
      ]
    },
    "usageTips": {
      "uz": "Ochiq manbali dunyoda eng tejamkor va kuchli model sifatida o'z dasturlaringizga API orqali ulang.",
      "tk": "Startaplar üçin iň gowy açyk çeşme saýlawy.",
      "ru": "Интегрируйте V4 в качестве основного корпоративного движка через облачный API.",
      "en": "Deploy V4 as your primary foundation model backend for unmatched price-to-performance."
    },
    "scores": {
      "reasoning": 98,
      "coding": 97,
      "creativity": 93,
      "speed": 93,
      "multimodal": 92,
      "uzbekAndMultilingual": 94,
      "costEfficiency": 99
    }
  },
  {
    "id": "llama-1",
    "name": "Meta LLaMA 1 (Foundational 65B)",
    "provider": "Meta AI",
    "category": "llm",
    "releaseYear": "2023",
    "pricingTier": "opensource",
    "priceSummary": {
      "uz": "Tadqiqotlar uchun ochiq (Research)",
      "tk": "Ylmy barlaglar üçin açyk",
      "ru": "Исследовательская некоммерческая лицензия",
      "en": "Research Open Weights (Non-commercial)"
    },
    "contextOrLimit": "2,048 tokens (7B, 13B, 33B, 65B)",
    "accentColor": "#3b82f6",
    "isOpenSource": true,
    "supportsUzbek": "fair",
    "websiteUrl": "https://ai.meta.com/blog/large-language-model-llama-meta-ai/",
    "logoKey": "meta",
    "releasedModels": [
      "LLaMA 1 (2023)",
      "Llama 2 (2023)",
      "Code Llama (2023)",
      "Llama 3 (2024)",
      "Llama 3.1 405B (2024)",
      "Llama 4 (2026)"
    ],
    "tagline": {
      "uz": "Open Source AI inqilobining ilk uchquni: butun dunyo tadqiqotchilariga ochiq model taqdim etgan poydevor",
      "tk": "Açyk emeli aň inqilabynyň ilkinji uçguny: dünýä taryhynda möhüm model",
      "ru": "Искра революции Open Source: модель Марка Цукерберга, с утечки которой начался бум открытого ИИ",
      "en": "The seminal open research release that catalyzed the entire global open-source AI ecosystem"
    },
    "description": {
      "uz": "LLaMA 1 — 2023-yil fevral oyida Meta AI tomonidan tadqiqotchilar uchun e'lon qilingan va AI tarixida eng katta burilish yasagan model. Uning og'irliklari (weights) internetga tarqalgach, butun jahon dasturchilari o'z shaxsiy kompyuterlarida (llama.cpp orqali) sun'iy intellektni ishga tushirishni o'rgandi va ochiq AI harakati boshlandi.",
      "tk": "LLaMA 1 — 2023-nji ýylda Meta tarapyndan çykarylyp, açyk emeli aň hereketini başladan modeldir.",
      "ru": "LLaMA 1 изменила правила игры навсегда. Выпуск моделей от 7B до 65B параметров доказал, что открытые системы могут соперничать с закрытыми решениями. Появление проекта llama.cpp позволило запускать модели на обычных процессорах MacBook и ПК.",
      "en": "Meta’s release of LLaMA 1 ignited the modern open-source AI movement. Demonstrating that smaller models trained on more tokens (Chinchilla-optimal) could rival GPT-3, it spawned llama.cpp and thousands of community fine-tunes."
    },
    "capabilities": {
      "uz": [
        "1.4 trillion tokenli ommaviy matnlarda sifatli o'qitilgan arxitektura",
        "llama.cpp loyihasi yordamida oddiy MacBook va noutbuklarda ishlash imkoniyati",
        "Alpaca, Vicuna kabi yuzlab mashhur jamoaviy modellarning bevosita poydevori",
        "Rotary Positional Embeddings (RoPE) va SwiGLU faollashtirish funksiyasi"
      ],
      "tk": [
        "1.4 trillion tokenli maglumatlarda taýýarlanan",
        "llama.cpp bilen ýönekeý noutbukda işletmek",
        "Vicuna we Alpaca ýaly ýüzlerçe modelleriň esasy",
        "RoPE we SwiGLU arhitekturasy"
      ],
      "ru": [
        "Обучение на 1.4 триллиона токенов общедоступных данных без секретных датасетов",
        "Запуск на потребительском \"железе\" благодаря революции квантования в llama.cpp",
        "Базовая платформа для сотен народных дообучений (Alpaca, Vicuna, WizardLM)",
        "Внедрение Rotary Positional Embeddings (RoPE) и RMSNorm, ставших стандартом индустрии"
      ],
      "en": [
        "Trained on 1.4T tokens of publicly available data validating Chinchilla scaling",
        "Sparked the 4-bit quantization revolution running locally via llama.cpp",
        "The genetic ancestor of Alpaca, Vicuna, and thousands of HuggingFace models",
        "Pioneered Rotary Positional Embeddings (RoPE) and RMSNorm as modern architecture norms"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Ochiq kodli AI evolyutsiyasini o'rganish",
        "Lokal tadqiqotlar va tajribalar",
        "Akademik laboratoriyalar"
      ],
      "tk": [
        "Açyk AI taryhyny öwrenmek",
        "Lokal barlaglar",
        "Talyplar üçin tejribeler"
      ],
      "ru": [
        "Изучение истоков революции открытых моделей",
        "Академические эксперименты с квантованием",
        "Сравнительный исторический бенчмаркинг"
      ],
      "en": [
        "Academic study of LLM architectural fundamentals",
        "Quantization and edge inference benchmarking",
        "Historical machine learning research"
      ]
    },
    "limitations": {
      "uz": [
        "Kontekst oynasi bor-yo'g'i 2048 token, tijoriy foydalanish litsenziyasi bo'lmagan"
      ],
      "tk": [
        "Kontekst diňe 2048 token, täjirçilik üçin rugsady ýokdy"
      ],
      "ru": [
        "Окно контекста 2048 токенов, отсутствие коммерческой лицензии"
      ],
      "en": [
        "Strict non-commercial research license and 2,048 token context ceiling"
      ]
    },
    "usageTips": {
      "uz": "Tarixiy ahamiyatga ega bo'lgan ushbu modelning zamonaviy davomchisi sifatida Llama 3 yoki Llama 4 ni tanlang.",
      "tk": "Häzirki wagtda Llama 3 ýa-da Llama 4 saýlaň.",
      "ru": "Для реальной работы используйте современные версии семейства Llama 3.x.",
      "en": "Deploy modern Llama 3.1/3.3 or Llama 4 for active production workloads."
    },
    "scores": {
      "reasoning": 75,
      "coding": 70,
      "creativity": 74,
      "speed": 89,
      "multimodal": 10,
      "uzbekAndMultilingual": 65,
      "costEfficiency": 96
    }
  },
  {
    "id": "llama-2",
    "name": "Meta Llama 2 (Commercial Open Source)",
    "provider": "Meta AI",
    "category": "llm",
    "releaseYear": "2023",
    "pricingTier": "opensource",
    "priceSummary": {
      "uz": "Tijoriy ochiq litsenziya / Mutlaqo bepul",
      "tk": "Täjirçilik üçin mugt lisenziýa",
      "ru": "Бесплатная коммерческая лицензия (до 700M пользователей)",
      "en": "Free Commercial Open License (up to 700M MAU)"
    },
    "contextOrLimit": "4,096 tokens (7B, 13B, 70B)",
    "accentColor": "#2563eb",
    "isOpenSource": true,
    "supportsUzbek": "good",
    "websiteUrl": "https://ai.meta.com/llama/",
    "logoKey": "meta",
    "releasedModels": [
      "LLaMA 1 (2023)",
      "Llama 2 (2023)",
      "Llama 2 Chat (2023)",
      "Code Llama (2023)",
      "Llama 3 (2024)"
    ],
    "tagline": {
      "uz": "Kompaniyalar uchun bepul tijoriy litsenziya bilan chiqarilgan birinchi ommaviy xavfsiz ochiq model",
      "tk": "Kompaniýalar üçin mugt täjirçilik lisenziýaly ilkinji meşhur açyk model",
      "ru": "Официальный приход открытого ИИ в бизнес: коммерческая лицензия, версия Chat и усиленная безопасность",
      "en": "Meta’s milestone release granting free commercial use for enterprises with fine-tuned Chat checkpoints"
    },
    "description": {
      "uz": "Llama 2 — 2023-yil iyul oyida Mark Sukerberg tomonidan e'lon qilingan va biznes olamiga sun'iy intellektni bepul olib kirgan model. Unda kompaniyalarga tijoriy foydalanishga ruxsat berildi, kontekst 4096 tokenga yetkazildi va dialog (Chat) uchun maxsus RLHF bilan o'qitilgan variantlari taqdim etildi.",
      "tk": "Llama 2 — 2023-nji ýylda biznes dünýäsine mugt tijorat lisenziýasyny beren meşhur modeldir.",
      "ru": "Llama 2 открыла шлюзы для массового внедрения ИИ в корпоративный сектор. Meta предоставила бизнесу право бесплатно использовать модель в коммерческих продуктах, обучив её на 2 триллионах токенов с применением тщательного RLHF для безопасности диалога.",
      "en": "Llama 2 unlocked enterprise adoption by pairing a permissive commercial license with fine-tuned Chat checkpoints trained on 2T tokens. Its 70B variant became the gold standard open foundation model throughout late 2023."
    },
    "capabilities": {
      "uz": [
        "2 trillion token ma'lumotlarida o'qitilgan 7B, 13B va 70B parametrli variantlar",
        "Kompaniyalar uchun o'z mahsulotlariga o'rnatishga to'liq ruxsat (Commercial License)",
        "Llama 2-Chat: insoniy muloqot va xavfsiz javoblar uchun maxsus nozik sozlangan",
        "Grouped-Query Attention (GQA) orqali tezkor va samarali xotira ishlatish"
      ],
      "tk": [
        "2 trillion token maglumatlar esasynda 7B, 13B, 70B modeller",
        "Kompaniýalar üçin mugt ulanmak hukugy",
        "Llama 2-Chat howpsuz söhbetdeşlik",
        "GQA tehnologiýasy arkaly çalt tizlik"
      ],
      "ru": [
        "Обучение на 2 триллионах токенов качественных данных с удвоенным контекстом 4096 токенов",
        "Официальное разрешение на коммерческое использование без роялти",
        "Готовые диалоговые версии Llama-2-Chat, обученные методом RLHF",
        "Внедрение Grouped-Query Attention (GQA) в модели 70B для ускорения инференса"
      ],
      "en": [
        "Trained on 2T tokens spanning 7B, 13B, and 70B parameter weights",
        "Permissive commercial license enabling startups to launch proprietary services",
        "Dedicated Llama-2-Chat aligned via RLHF and rejection sampling",
        "Grouped-Query Attention (GQA) in the 70B model for memory-efficient multi-turn chat"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Korporativ ichki chat-botlar",
        "O'zbek tiliga fine-tuning (qayta o'qitish)",
        "Xususiy serverlarda biznes dasturlari"
      ],
      "tk": [
        "Kompaniýa botlary",
        "Öz diliňe fine-tune etmek",
        "Lokal serwerler"
      ],
      "ru": [
        "Создание суверенных чат-ботов для банков и телекома",
        "Тонкая настройка (Fine-Tuning) под специфику конкретного бизнеса",
        "Локальные ИТ-ассистенты"
      ],
      "en": [
        "Enterprise internal chatbots and privacy-critical tools",
        "Fine-tuning target for domain-specific corporate knowledge",
        "On-premise business automation"
      ]
    },
    "limitations": {
      "uz": [
        "Kontekst 4096 token bo'lib, zamonaviy 128K-1M modellarga nisbatan cheklangan"
      ],
      "tk": [
        "4096 token kontekst häzirki wagtda azrak"
      ],
      "ru": [
        "Окно контекста 4K токенов уступает современным моделям с окнами от 128K"
      ],
      "en": [
        "4K token context ceiling surpassed by modern 128K+ architecture evolutions"
      ]
    },
    "usageTips": {
      "uz": "O'zbek tilidagi ma'lumotlar bilan Lora usulida fine-tuning qilish uchun qulay va ixcham model hisoblangan.",
      "tk": "LoRA usuly arkaly aňsat öwredip bolýardy.",
      "ru": "Широко использовалась для обучения методами LoRA и QLoRA на одной видеокарте.",
      "en": "Historic milestone for single-GPU QLoRA fine-tuning experimentation."
    },
    "scores": {
      "reasoning": 81,
      "coding": 76,
      "creativity": 80,
      "speed": 90,
      "multimodal": 10,
      "uzbekAndMultilingual": 74,
      "costEfficiency": 97
    }
  },
  {
    "id": "llama-3",
    "name": "Meta Llama 3 / 3.1 405B (Open Titan)",
    "provider": "Meta AI",
    "category": "llm",
    "releaseYear": "2024",
    "pricingTier": "opensource",
    "priceSummary": {
      "uz": "Ochiq manba (bepul) / Groq da o'ta tezkor bepul API",
      "tk": "Açyk çeşme / Mugt",
      "ru": "Открытый код / Доступно бесплатно на платформе Groq",
      "en": "Open Weights / Ultra-fast inference on Groq & Ollama"
    },
    "contextOrLimit": "128,000 tokens (8B, 70B, 405B)",
    "accentColor": "#1d4ed8",
    "isOpenSource": true,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://llama.meta.com",
    "logoKey": "meta",
    "releasedModels": [
      "Llama 3 8B (2024)",
      "Llama 3 70B (2024)",
      "Llama 3.1 405B (2024)",
      "Llama 3.2 Vision (2024)",
      "Llama 3.3 70B (2024)",
      "Llama 4 (2026)"
    ],
    "tagline": {
      "uz": "405 milliard parametrli dunyodagi eng katta ochiq manbali model: yopiq xususiy gigantlarga teng kelgan kuch",
      "tk": "405 milliard parametrli dünýäniň iň uly açyk modeli: yapyk gigantlar bilen deňleşen güýç",
      "ru": "Первая открытая супермодель на 405 млрд параметров, обученная на 15+ триллионах токенов и сравнявшаяся с GPT-4o",
      "en": "The world’s first frontier-class 405B open-weights model trained on 15T tokens rivaling GPT-4o"
    },
    "description": {
      "uz": "Llama 3 va 3.1 — 2024-yilda ochiq kodli sun'iy intellekt tarixini yangilagan model. U 15 trilliondan ortiq token ma'lumotlarda, 16,000 dan oshiq H100 GPU klasterlarida o'qitildi. 405 milliard parametrli flagman varianti GPT-4o va Claude 3.5 Sonnet bilan teng darajadagi mantiqiy kuchni taqdim etdi, 128K kontekstga ega bo'ldi.",
      "tk": "Llama 3.1 405B — 2024-nji ýylda dünýäde iň uly açyk çeşmeli intellekt hökmünde taryha girdi.",
      "ru": "Llama 3.1 стала поворотным моментом в противостоянии открытого и закрытого ИИ. Модель 405B была обучена на колоссальном массиве из 15.6 триллионов токенов и 16 000 графических процессоров H100, получив контекст 128K токенов и возможности дистилляции для сообщества.",
      "en": "Meta’s Llama 3.1 family, culminating in the 405B parameter titan, proved open weights could compete head-to-head with top closed frontier models on coding, math, and multilinguality with a native 128K context window."
    },
    "capabilities": {
      "uz": [
        "405 milliard parametrli eng qudratli ochiq model (kichikroq 8B va 70B variantlari bilan)",
        "128,000 tokenli kontekst: butun hujjatlar va kod loyihalarini tahlil qilish",
        "O'zbek, rus, nemis, fransuz va 30 dan ortiq tillarda a'lo darajadagi bilim",
        "Kichik modellarni o'qitish uchun sintetik ma'lumotlar yaratish (Distillation) huquqi"
      ],
      "tk": [
        "405 milliard parametrli ägirt model",
        "128 müň token giň kontekst",
        "Dünýä dillerinde ýokary derejede takyklyk",
        "Distillation: kiçi modelleri öwretmek hukugy"
      ],
      "ru": [
        "Флагман 405B с феноменальной глубиной рассуждений (плюс компактные 8B и 70B)",
        "Окно контекста 128 000 токенов с надежным извлечением фактов",
        "Продвинутая мультиязычность на 30+ языках мира",
        "Официальное разрешение на дистилляцию данных для обучения собственных моделей"
      ],
      "en": [
        "Frontier 405B dense model alongside agile 8B and 70B production workhorses",
        "128K token context window with rigorous needle-in-a-haystack verification",
        "Multilingual support spanning 30+ major languages with refined grammar",
        "Permissive license allowing the use of 405B synthetic outputs to distill smaller models"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Korxonalar uchun o'z serverida eng kuchli AI ni ishga tushirish",
        "Kichik modellarni o'qitish (Distillation)",
        "Groq platformasida sekundiga 300+ token tezlikda ishlatish"
      ],
      "tk": [
        "Öz serweriňde iň güýçli AI-ny işletmek",
        "Groq-da aşa çalt işletmek",
        "Distillasiýa"
      ],
      "ru": [
        "Развертывание суверенного ИИ высшего класса в локальных ЦОД",
        "Генерация синтетических данных и дистилляция малых нейросетей",
        "Сверхбыстрый инференс на процессорах LPU (Groq) со скоростью до 300+ токенов/сек"
      ],
      "en": [
        "Frontier sovereign on-premise deployments",
        "Synthetic data generation & knowledge distillation",
        "Ultra-fast sub-second generation on Groq hardware"
      ]
    },
    "limitations": {
      "uz": [
        "405B modelni lokal ishga tushirish uchun yirik server klasteri zarur (lekin 70B va 8B oddiy kompyuterlarda ishlaydi)"
      ],
      "tk": [
        "405B üçin uly serwerler gerek (70B we 8B amatly)"
      ],
      "ru": [
        "Для модели 405B требуются дата-центры, однако версии 8B и 70B легко запускаются на рабочих станциях"
      ],
      "en": [
        "405B requires multi-node clusters, though 70B and 8B run comfortably on workstations"
      ]
    },
    "usageTips": {
      "uz": "Dasturchilar va oddiy foydalanuvchilar uchun `Llama 3.3 70B` modeli eng ideal mutanosiblikdir — 405B aqli, lekin 70B tezligi va yengilligi.",
      "tk": "Llama 3.3 70B modelini saýlaň — aşa akylly we amatly.",
      "ru": "Выбирайте версию Llama 3.3 70B — она обеспечивает интеллект уровня 405B при скорости и скромных требованиях 70B.",
      "en": "Deploy Llama 3.3 70B for the optimal sweet spot between 405B-grade smarts and 70B-grade agility."
    },
    "scores": {
      "reasoning": 95,
      "coding": 93,
      "creativity": 91,
      "speed": 88,
      "multimodal": 72,
      "uzbekAndMultilingual": 90,
      "costEfficiency": 98
    }
  },
  {
    "id": "llama-4",
    "name": "Meta Llama 4 Scout (Multimodal Agent)",
    "provider": "Meta AI",
    "category": "llm",
    "releaseYear": "2026",
    "pricingTier": "opensource",
    "priceSummary": {
      "uz": "Ochiq manba (bepul) / Tijoriy litsenziya",
      "tk": "Açyk çeşme / Mugt",
      "ru": "Открытый код для бизнеса и исследователей",
      "en": "Open Weights / Permissive Commercial License"
    },
    "contextOrLimit": "500,000 tokens (Native Vision & Audio)",
    "accentColor": "#3b82f6",
    "isOpenSource": true,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://llama.meta.com",
    "logoKey": "meta",
    "releasedModels": [
      "Llama 3.1 (2024)",
      "Llama 3.3 (2024)",
      "Llama 4 Scout (2026)",
      "Llama 4 Omni (2026)"
    ],
    "tagline": {
      "uz": "Meta AI ning 2026-yilgi multimodal va avtonom aqlli qurilmalar uchun ochiq manbali flagmani",
      "tk": "Meta AI-nyň 2026-njy ýylky multimodal we awtonom enjamlar üçin açyk modeli",
      "ru": "Флагман Meta 2026 года: нативное зрение, аппаратная оптимизация под умные очки Ray-Ban и автономные агенты",
      "en": "Meta’s 2026 frontier open model optimized for wearable smart glasses and multi-agent loops"
    },
    "description": {
      "uz": "Llama 4 Scout — Meta AI ning 2026-yilgi inqilobiy ochiq modeli. U aqlli ko'zoynaklar (Ray-Ban Meta), mobil qurilmalar va serverlar uchun moslashtirilgan. To'g'ridan-to'g'ri ko'rish, ovoz, 500K keng kontekst va avtonom agentlik buyruqlarini mukammal bajaradi.",
      "tk": "Llama 4 Scout — 2026-njy ýylda akylly äýnekler we awtonom enjamlar üçin niýetlenen iň täze açyk modeldir.",
      "ru": "Llama 4 Scout разработана с прицелом на автономных агентов и носимые гаджеты нового поколения. Модель обладает нативным зрением, способна планировать многодневные цепочки действий и распространяется с открытыми весами.",
      "en": "Llama 4 Scout delivers native multimodal comprehension built for agentic execution and edge-to-cloud computing, maintaining Meta’s open-science commitment with state-of-the-art vision and tool-use."
    },
    "capabilities": {
      "uz": [
        "500,000 tokenli keng kontekst va video-audio oqimlarini jonli tahlil qilish",
        "Aqlli qurilmalar va robototexnika uchun apparat darajasida optimallashtirish",
        "Avtonom agentlar: o'nlab dasturlar va veb-saytlar bilan mustaqil ishlash",
        "O'zbek, turkiy va 100 dan ortiq jahon tillarida benuqson nutq madaniyati"
      ],
      "tk": [
        "500K token kontekst we janly wideo-ses seljermesi",
        "Akylly enjamlar we robotlar üçin optimizasiýa",
        "Awtonom agentler we programmalar bilen işlemek",
        "100-den gowrak dilde erkin düşünje"
      ],
      "ru": [
        "Окно контекста 500K токенов с поддержкой нативного потокового видео и аудио",
        "Аппаратная оптимизация для работы в реальном времени на умных очках и роботах",
        "Автономное исполнение сложных многошаговых сценариев (Tool Use & Function Calling)",
        "Высочайшая точность на языках Центральной Азии и СНГ"
      ],
      "en": [
        "500K context window processing live camera feeds and continuous audio streams",
        "Extreme edge hardware optimization targeting wearable smart glasses and edge NPUs",
        "Multi-step autonomous agent execution across complex tool landscapes",
        "Fluent natural prose and cross-cultural nuance across 100+ global languages"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Aqlli ko'zoynaklar va kiyiladigan gadjetlar",
        "Korporativ avtonom AI agentlar",
        "Lokal multimodal tizimlar"
      ],
      "tk": [
        "Akylly äýnekler we gadjetler",
        "Awtonom AI agentler",
        "Lokal ulgamlar"
      ],
      "ru": [
        "Умные носимые устройства (очки, гарнитуры)",
        "Автономные мультиагентные системы предприятий",
        "Локальные робототехнические комплексы"
      ],
      "en": [
        "Wearable AR smart glasses & robotics",
        "Autonomous enterprise agent swarms",
        "Private multimodal edge deployments"
      ]
    },
    "limitations": {
      "uz": [
        "To'liq video oqimini doimiy ushlab turish katta energiya sarflaydi"
      ],
      "tk": [
        "Üznüksiz wideo üçin köp energiýa gerek"
      ],
      "ru": [
        "Постоянный видеопоток требует значительных вычислительных мощностей"
      ],
      "en": [
        "Continuous real-time high-fps video decoding is battery and compute intensive"
      ]
    },
    "usageTips": {
      "uz": "Lokal serveringizda Llama 4 ni vLLM yordamida ishga tushirib, eng zamonaviy ochiq agentlik tizimini quring.",
      "tk": "vLLM bilen gurnap ulanyň.",
      "ru": "Разворачивайте через vLLM для получения максимального числа токенов в секунду.",
      "en": "Deploy via vLLM or SGLang for optimal KV cache reuse in long-horizon agent loops."
    },
    "scores": {
      "reasoning": 96,
      "coding": 94,
      "creativity": 92,
      "speed": 92,
      "multimodal": 94,
      "uzbekAndMultilingual": 93,
      "costEfficiency": 98
    }
  },
  {
    "id": "grok-1",
    "name": "xAI Grok-1 (314B Open Weights)",
    "provider": "xAI",
    "category": "llm",
    "releaseYear": "2023",
    "pricingTier": "opensource",
    "priceSummary": {
      "uz": "Ochiq manba (Apache 2.0 / GitHub da bepul)",
      "tk": "Açyk çeşme / Mugt",
      "ru": "Открытые веса (Apache 2.0 на GitHub)",
      "en": "Open Weights (Apache 2.0)"
    },
    "contextOrLimit": "8,192 tokens (314B MoE)",
    "accentColor": "#18181b",
    "isOpenSource": true,
    "supportsUzbek": "fair",
    "websiteUrl": "https://x.ai/blog/grok-os",
    "logoKey": "xai",
    "releasedModels": [
      "Grok-1 (2023)",
      "Grok-1.5 (2024)",
      "Grok-2 (2024)",
      "Grok-3 (2025-2026)"
    ],
    "tagline": {
      "uz": "Ilon Maskning 314 milliard parametrli ochiq vaznli birinchi modeli: hazil va cheklovlarsiz fikrlash ruhiyati",
      "tk": "Ilon Maskyň 314 milliard parametrli ilkinji açyk modeli: ýiti degişme we erkin pikir",
      "ru": "Первая открытая модель Илона Маска на 314 млрд параметров с бунтарским характером и юмором",
      "en": "Elon Musk’s 314B parameter open MoE model trained with a witty, rebellious perspective"
    },
    "description": {
      "uz": "Grok-1 — 2023-yil oxirida Ilon Mask va xAI jamoasi tomonidan yaratilgan va 2024-yil martida kodi to'liq ochiq qilib taqdim etilgan 314 milliard parametrli model. U 'Galaktika bo'ylab sayohat qilish qo'llanmasi' (Hitchhiker's Guide to the Galaxy) asaridan ilhomlangan bo'lib, o'tkir hazil, istehzo va erkin fikrlash bilan ajralib turadi.",
      "tk": "Grok-1 — Ilon Mask tarapyndan döredilen 314 milliard parametrli açyk modeldir.",
      "ru": "Grok-1 удивила мир своей открытостью: xAI неожиданно выложила в открытый доступ полные веса архитектуры Mixture-of-Experts на 314 миллиардов параметров под свободной лицензией Apache 2.0.",
      "en": "Grok-1 was released open-weights under Apache 2.0 by Elon Musk’s xAI. Featuring a 314B parameter MoE architecture activating 86B per token, it was trained from scratch on JAX and Rust custom stacks."
    },
    "capabilities": {
      "uz": [
        "314 milliard parametrli ulkan MoE arxitekturasi (8 ta ekspertdan 2 tasi har bir so'zda faollashadi)",
        "O'tkir hazil, satira va erkin muloqot qilish xususiyati",
        "JAX va Rust texnologiyalari asosida noldan qurilgan superkompyuter klasterida o'qitilgan",
        "To'liq ochiq Apache 2.0 litsenziyasi"
      ],
      "tk": [
        "314 milliard parametrli MoE arhitekturasy",
        "Ýiti degişmeler we erkin garaýyş",
        "Rust we JAX tehnologiýalarynda döredilen",
        "Apache 2.0 açyk lisenziýasy"
      ],
      "ru": [
        "Архитектура MoE на 314 млрд параметров (8 экспертов, 2 активируются на токен)",
        "Остроумный тон общения и готовность отвечать на провокационные вопросы",
        "Обучение на специализированном стеке JAX и Rust для максимальной производительности кластера",
        "Свободная лицензия Apache 2.0 без ограничений на коммерческое использование"
      ],
      "en": [
        "314B MoE architecture activating 86B parameters across 2-of-8 experts per token",
        "Uncensored, witty persona inspired by Hitchhiker’s Guide to the Galaxy",
        "Custom distributed training infrastructure engineered in JAX and Rust",
        "Unrestricted Apache 2.0 open-weights licensing for research and enterprise"
      ]
    },
    "bestUseCases": {
      "uz": [
        "MoE supermodellari ustida ilmiy tajribalar",
        "Kreativ va satirik matnlar to'qish",
        "Lokal katta serverlarda sinov"
      ],
      "tk": [
        "MoE modellerini öwrenmek",
        "Degişme we hekaýalar döretmek",
        "Ylmy barlaglar"
      ],
      "ru": [
        "Исследования сверхбольших архитектур MoE",
        "Генерация креативного, сатирического и нестандартного контента",
        "Тестирование распределенного инференса"
      ],
      "en": [
        "Large-scale MoE distributed systems research",
        "Satirical and creative dialogue writing",
        "Academic exploration of unconverged pre-training checkpoints"
      ]
    },
    "limitations": {
      "uz": [
        "314 milliard parametrli modelni ishga tushirish uchun kamida 8 ta Nvidia A100/H100 kartalari zarur"
      ],
      "tk": [
        "Işletmek üçin iň azyndan 8 sany güýçli wideo karta gerek"
      ],
      "ru": [
        "Огромные требования к \"железу\": требуется не менее 8 ускорителей A100/H100 даже в квантованном виде"
      ],
      "en": [
        "Massive hardware footprint requiring multi-GPU server nodes even for 4-bit inference"
      ]
    },
    "usageTips": {
      "uz": "Grok-1 ning zamonaviy va real vaqtdagi X (Twitter) ma'lumotlariga ega bo'lgan versiyasi uchun Grok-2 yoki Grok-3 ni tanlang.",
      "tk": "Häzirki wagtda Grok-2 ýa-da Grok-3 ulanyň.",
      "ru": "Для практических задач используйте Grok-2 или Grok-3 с доступом к живому поиску в X.",
      "en": "Use Grok-2 or Grok-3 for live real-time internet grounding and image synthesis."
    },
    "scores": {
      "reasoning": 82,
      "coding": 78,
      "creativity": 86,
      "speed": 84,
      "multimodal": 10,
      "uzbekAndMultilingual": 72,
      "costEfficiency": 92
    }
  },
  {
    "id": "grok-2",
    "name": "xAI Grok-2 (Live X Grounded)",
    "provider": "xAI",
    "category": "llm",
    "releaseYear": "2024",
    "pricingTier": "paid",
    "priceSummary": {
      "uz": "X Premium ($8/oy) / Premium+ ($16/oy)",
      "tk": "X Premium abunasy",
      "ru": "Подписка X Premium / Premium+ от $8/мес",
      "en": "X Premium ($8/mo) / Premium+ ($16/mo)"
    },
    "contextOrLimit": "128,000 tokens (FLUX Image Gen)",
    "accentColor": "#27272a",
    "isOpenSource": false,
    "supportsUzbek": "good",
    "websiteUrl": "https://x.ai",
    "logoKey": "xai",
    "releasedModels": [
      "Grok-1 (2023)",
      "Grok-2 (2024)",
      "Grok-2 mini (2024)",
      "Grok-3 (2025-2026)"
    ],
    "tagline": {
      "uz": "X platformasi jonli ma'lumotlari va FLUX rasm generatori integratsiyalashgan qudratli model",
      "tk": "X platformasynyň janly maglumatlary we FLUX surat generatorly güýçli model",
      "ru": "Модель с мгновенным доступом к пульсу планеты в соцсети X и встроенной генерацией фото FLUX",
      "en": "Frontier intelligence with real-time news grounding via X (Twitter) and photorealistic FLUX rendering"
    },
    "description": {
      "uz": "Grok-2 — 2024-yil avgust oyida chiqarilgan xAI flagmani. U LMSYS Chatbot Arena da GPT-4o va Claude 3.5 Sonnet bilan birinchi o'rinlarni bo'lishib, sensatsiya ko'tardi. X (Twitter) dagi har qanday yangilikni real vaqtda biladi va Black Forest Labs ning FLUX modeli orqali fotorealistik tasvirlar yaratadi.",
      "tk": "Grok-2 — 2024-nji ýylda X (Twitter) platformasyndaky janly habarlary derrew bilýän modeldir.",
      "ru": "Grok-2 совершила качественный рывок, войдя в топ-3 мирового рейтинга LMSYS Chatbot Arena. Модель в реальном времени анализирует глобальные тренды и новости из соцсети X, генерируя фотореалистичные изображения без цензурных искажений через модель FLUX.",
      "en": "Grok-2 vaulted into the upper echelons of LLM benchmarks upon release. Powered by real-time social streams on X and photorealistic image generation via FLUX.1, it delivers unfiltered, timely intelligence."
    },
    "capabilities": {
      "uz": [
        "X (Twitter) ijtimoiy tarmog'idagi barcha jonli voqealar, xabarlar va trendlarni sekundiga tahlil qilish",
        "FLUX.1 orqali cheklovlarsiz fotorealistik rasm generatsiyasi",
        "LMSYS Chatbot Arena da dunyoning top-3 ligiga kirgan intellekt darajasi",
        "Murakkab dasturlash, mantiq va matematik masalalarni yechish"
      ],
      "tk": [
        "X platformasyndaky janly habarlary sekuntda barlamak",
        "FLUX arkaly hakyky suratlar döretmek",
        "LMSYS Arena-da top-3 intellekt",
        "Programmirleme we matematika meseleleri"
      ],
      "ru": [
        "Мгновенный анализ мировых новостей и мнений из X (Twitter) прямо в момент их появления",
        "Интеграция с генератором изображений FLUX.1 с минимальными цензурными рамками",
        "Вхождение в топ-3 мирового рейтинга слепых тестов LMSYS Chatbot Arena",
        "Уверенное решение сложных алгоритмических и научных задач"
      ],
      "en": [
        "Real-time indexing and synthesis of breaking global events on X",
        "Integrated photorealistic image generation powered by FLUX.1",
        "Top-tier ranking in LMSYS Chatbot Arena competitive leaderboards",
        "Advanced code generation and competitive STEM problem solving"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Dunyo yangiliklari va moliyaviy bozorlar tahlili",
        "Fotorealistik rasm generatsiyasi",
        "Ochiq va erkin munozaralar"
      ],
      "tk": [
        "Dünýä habarlary we maliýe bazary",
        "Fotorealistik suratlar",
        "Erkin söhbetdeşlik"
      ],
      "ru": [
        "Мониторинг горячих мировых новостей и криптовалютных рынков",
        "Генерация реалистичных изображений без чрезмерных фильтров",
        "Глубокий фактчекинг свежих событий"
      ],
      "en": [
        "Breaking news and financial sentiment monitoring",
        "Candid visual synthesis without aggressive refusal guardrails",
        "Real-time investigative journalism research"
      ]
    },
    "limitations": {
      "uz": [
        "Foydalanish uchun X (Twitter) obunasi yoki API hisobi talab qilinadi"
      ],
      "tk": [
        "X Premium abunasy gerek bolýar"
      ],
      "ru": [
        "Требуется платная подписка на платформу X или отдельный аккаунт в xAI API"
      ],
      "en": [
        "Requires an active X subscription or enterprise developer API account"
      ]
    },
    "usageTips": {
      "uz": "So'nggi bir soat ichida ro'y bergan yangiliklarni bilmoqchi bo'lsangiz, Grok dan 'X dagi eng so'nggi ma'lumotlar bilan nima bo'lganini aytib ber' deb so'rang.",
      "tk": "Iň soňky habarlary soramak üçin X maglumatlaryna salgylanyň.",
      "ru": "Спрашивайте о событиях, произошедших буквально 10 минут назад — Grok знает их лучше всех.",
      "en": "Ask about breaking news from the last hour to harness real-time X platform streaming."
    },
    "scores": {
      "reasoning": 92,
      "coding": 89,
      "creativity": 93,
      "speed": 91,
      "multimodal": 90,
      "uzbekAndMultilingual": 86,
      "costEfficiency": 82
    }
  },
  {
    "id": "grok-3",
    "name": "xAI Grok-3 (Colossus 100k GPU)",
    "provider": "xAI",
    "category": "llm",
    "releaseYear": "2025–2026",
    "pricingTier": "paid",
    "priceSummary": {
      "uz": "X Premium+ ($16–$40/oy) / xAI API",
      "tk": "X Premium+ abunasy",
      "ru": "X Premium+ / Премиум API тариф xAI",
      "en": "X Premium+ / xAI Enterprise API"
    },
    "contextOrLimit": "256,000 tokens (Reasoning Mode)",
    "accentColor": "#09090b",
    "isOpenSource": false,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://x.ai",
    "logoKey": "xai",
    "releasedModels": [
      "Grok-1 (2023)",
      "Grok-2 (2024)",
      "Grok-3 (2025-2026)",
      "Grok-3 Reasoning (2026)"
    ],
    "tagline": {
      "uz": "100,000 dona Nvidia H100 GPU ega Colossus superklasterida o'qitilgan superintellekt flagmani",
      "tk": "100 müň Nvidia H100 GPU Colossus superklasterinde taýýarlanan iň täze model",
      "ru": "Титан супервычислений: обучен на крупнейшем в мире кластере Colossus из 100 000 H100 в Мемфисе",
      "en": "Trained on the 100,000 H100 liquid-cooled Colossus supercluster, pushing the frontier of AGI"
    },
    "description": {
      "uz": "Grok-3 — Ilon Maskning Memfis shahrida atigi 122 kunda qurilgan, dunyodagi eng katta 100,000 dona Nvidia H100 GPUga ega 'Colossus' superkompyuterida o'qitilgan eng qudratli model. Unda eng yuqori darajadagi mantiqiy fikrlash (DeepSearch & Reasoning), real vaqt fizik simulyatsiyasi va cheklovlarsiz ilmiy qidiruv mujassamlashgan.",
      "tk": "Grok-3 — 100,000 sany H100 GPU bolan Colossus superkompýuterinde taýýarlanan ägirt modeldir.",
      "ru": "Grok-3 стала результатом рекордного инфраструктурного проекта xAI. Обученная на гигантском суперкластере Colossus из 100 000 жидкостно-охлаждаемых GPU Nvidia H100, модель демонстрирует непревзойденную вычислительную мощь, сокрушая бенчмарки по математике, физике и логике.",
      "en": "Grok-3 represents xAI’s uncompromised push towards artificial general intelligence. Trained on the world’s largest AI cluster (100k liquid-cooled H100s in Memphis), it introduces multi-turn test-time reasoning and real-time world modeling."
    },
    "capabilities": {
      "uz": [
        "100,000 GPU li Colossus superklasterida o'qitilgan eng ulkan hisoblash quvvati",
        "DeepSearch & Reasoning: internetdagi barcha ilmiy manbalarni mustaqil o'rganib hisobot tuzish",
        "Dasturiy arxitektura va superkompyuter darajasidagi murakkab algoritmlarni yozish",
        "Haqiqatga intilish (Truth-seeking): hech qanday mafkuraviy yoki siyosiy filtrlarsiz faktlarni keltirish"
      ],
      "tk": [
        "100 müň GPU kuwwatly Colossus esasynda",
        "DeepSearch we logiki pikirlenme",
        "Superkompýuter derejesindäki çylşyrymly kod",
        "Hakykaty gözlemek: syýasy we ideologik çäklendirmesiz"
      ],
      "ru": [
        "Обучение на крупнейшем в истории вычислительном кластере из 100 000 ускорителей H100",
        "Режим глубокого рассуждения и автономных поисковых расследований DeepSearch",
        "Генерация и отладка сверхсложных системных программ и распределенных алгоритмов",
        "Философия Truth-seeking: беспристрастный анализ фактов без политкорректных искажений"
      ],
      "en": [
        "Trained on 100,000 liquid-cooled Nvidia H100 GPUs delivering unprecedented scale",
        "DeepSearch agentic investigations cross-referencing global sources and raw data",
        "High-density competitive algorithmic reasoning matching dedicated test-time systems",
        "Unfiltered truth-seeking design mandate analyzing scientific and socio-economic facts"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Global ilmiy va muhandislik kashfiyotlari",
        "Katta biznes va investitsiya tahlillari",
        "Murakkab dasturiy infratuzilma loyihalash"
      ],
      "tk": [
        "Ylmy we inženerçilik açyşlary",
        "Maýa goýum we biznes seljermesi",
        "Programma infrastrukturasy"
      ],
      "ru": [
        "Прорывные научно-инженерные разработки и физическое моделирование",
        "Инвестиционный и геополитический стратегический анализ",
        "Проектирование высоконагруженной серверной архитектуры"
      ],
      "en": [
        "Groundbreaking engineering and physics simulations",
        "Macroeconomic & geopolitical strategic synthesis",
        "High-complexity distributed systems architecture"
      ]
    },
    "limitations": {
      "uz": [
        "Yuqori darajadagi hisoblash quvvati va Premium tariflar talab qilinadi"
      ],
      "tk": [
        "Ýokary abuna tölegi talap edilýär"
      ],
      "ru": [
        "Высокая стоимость подписки для доступа к максимальным вычислительным режимам"
      ],
      "en": [
        "Premium tier subscription required to unlock peak compute reasoning features"
      ]
    },
    "usageTips": {
      "uz": "Murakkab ilmiy muammoni yechishda 'DeepSearch' tugmasini bosing — u butun jahon ma'lumotlar bazalarini qidirib to'liq hisobot tuzib beradi.",
      "tk": "DeepSearch arkaly ylmy maglumatlary derňäň.",
      "ru": "Активируйте режим DeepSearch для составления фундаментальных аналитических отчетов.",
      "en": "Turn on DeepSearch for autonomous multi-source academic and market research."
    },
    "scores": {
      "reasoning": 98,
      "coding": 95,
      "creativity": 94,
      "speed": 93,
      "multimodal": 93,
      "uzbekAndMultilingual": 91,
      "costEfficiency": 80
    }
  },
  {
    "id": "mistral-7b",
    "name": "Mistral 7B (Sliding Window Pioneer)",
    "provider": "Mistral AI",
    "category": "llm",
    "releaseYear": "2023",
    "pricingTier": "opensource",
    "priceSummary": {
      "uz": "Ochiq manba (Apache 2.0 / Bepul)",
      "tk": "Açyk çeşme / Mugt",
      "ru": "Полностью открытый код (Apache 2.0)",
      "en": "Open Source (Apache 2.0)"
    },
    "contextOrLimit": "8,192 tokens (Sliding Window Attention)",
    "accentColor": "#ea580c",
    "isOpenSource": true,
    "supportsUzbek": "good",
    "websiteUrl": "https://mistral.ai/news/announcing-mistral-7b/",
    "logoKey": "mistral",
    "releasedModels": [
      "Mistral 7B (2023)",
      "Mixtral 8x7B (2023)",
      "Mixtral 8x22B (2024)",
      "Mistral Large (2024)",
      "Codestral (2024)",
      "Mistral Large 2 (2024)"
    ],
    "tagline": {
      "uz": "Yevropa AI yulduzi: 7 milliardlik kichik o'lchami bilan Llama 2 13B modelini dog'da qoldirgan arxitektura",
      "tk": "Ýewropa AI ýyldyzy: 7B ölçegi bilen Llama 2 13B modelini yzda galdyran arhitektura",
      "ru": "Европейская сенсация 2023: компактная модель на 7 млрд параметров, разгромившая Llama 2 13B",
      "en": "The French open-source champion that outperformed all existing models up to 13B parameters"
    },
    "description": {
      "uz": "Mistral 7B — 2023-yil sentyabr oyida Parijdagi sobiq DeepMind va Meta tadqiqotchilari tomonidan yaratilgan inqilobiy model. U o'zining ixcham 7 milliard parametri bilan Llama 2 13B ni barcha testlarda ortda qoldirdi va 'Sliding Window Attention' (SWA) texnologiyasi orqali oddiy noutbuklarda chaqmoqdek tez ishladi.",
      "tk": "Mistral 7B — Parižde döredilen, 7 milliard parametr bilen ägirt uly netijeleri görkezen modeldir.",
      "ru": "Mistral 7B произвела фурор осенью 2023 года. Маленькая французская модель обогнала вдвое более крупные нейросети конкурентов во всех бенчмарках благодаря архитектуре Sliding Window Attention (SWA), став базой для тысяч производных моделей.",
      "en": "Mistral 7B demonstrated exceptional parameter efficiency. Utilizing Sliding Window Attention (SWA) and Grouped-Query Attention (GQA), it outperformed Llama 2 13B across all benchmarks while fitting on mobile hardware."
    },
    "capabilities": {
      "uz": [
        "Sliding Window Attention (SWA): kam xotira sarfi bilan 8K kontekstda yuqori tezlik",
        "Dasturlash, matematika va mantiqiy mulohazada 7B toifasidagi mutlaq yetakchilik",
        "Har qanday shaxsiy kompyuter va telefonda (Ollama / llama.cpp orqali) ishlash",
        "Cheklovlarsiz tijoriy foydalanish (Apache 2.0 litsenziyasi)"
      ],
      "tk": [
        "Sliding Window Attention arkaly az xotira sarp etmek",
        "Programmirleme we matematikada 7B toparynyň lideri",
        "Kompýuterde we telefonda çalt işletmek",
        "Apache 2.0 açyk lisenziýasy"
      ],
      "ru": [
        "Технология Sliding Window Attention (SWA) для снижения требований к оперативной памяти",
        "Безоговорочная победа над Llama 2 13B по всем метрикам кодинга и рассуждений",
        "Моментальный запуск на любых ноутбуках через Ollama (ollama run mistral)",
        "Свободная лицензия Apache 2.0 без ограничений на коммерческое использование"
      ],
      "en": [
        "Sliding Window Attention handling 8k context with linear memory efficiency",
        "Decisive benchmark victories over Llama 2 13B in code and math reasoning",
        "Lightweight footprint deployable on everyday consumer laptops and phones",
        "Permissive Apache 2.0 license enabling unrestricted commercial modification"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Lokal kompyuterda shaxsiy AI yordamchi",
        "Oddiy dasturchilar uchun bepul botlar",
        "Mobil ilovalarga neyrotarmoq joylash"
      ],
      "tk": [
        "Lokal noutbukda şahsy kömekçi",
        "Mugt Telegram botlar",
        "Mobil programmalar"
      ],
      "ru": [
        "Локальный умный ассистент на домашнем компьютере",
        "Легковесные Telegram-боты для малого бизнеса",
        "Интеграция в мобильные приложения без интернета"
      ],
      "en": [
        "Edge devices and private on-device personal assistants",
        "Lightweight customer support bots",
        "Mobile offline AI applications"
      ]
    },
    "limitations": {
      "uz": [
        "7 milliard parametrli bo'lgani sababli, juda murakkab oliy matematika va yirik kod bazalarida cheklangan"
      ],
      "tk": [
        "7B o'lchami sebäpli aşa çylşyrymly meselelerde çäkli"
      ],
      "ru": [
        "Ограниченный объем знаний из-за компактного размера в 7 миллиардов параметров"
      ],
      "en": [
        "Knowledge capacity constrained by 7B scale for niche PhD-level queries"
      ]
    },
    "usageTips": {
      "uz": "Ollama orqali `ollama run mistral` buyrug'ini bering — 30 soniyada kompyuteringizda shaxsiy sun'iy intellekt ishga tushadi.",
      "tk": "Ollama arkaly ollama run mistral diýip gurnap görüň.",
      "ru": "Команда ollama run mistral разворачивает полноценный ИИ за полминуты на любом компьютере.",
      "en": "Type ollama run mistral for an instant, responsive local assistant on your desktop."
    },
    "scores": {
      "reasoning": 82,
      "coding": 80,
      "creativity": 80,
      "speed": 96,
      "multimodal": 10,
      "uzbekAndMultilingual": 78,
      "costEfficiency": 98
    }
  },
  {
    "id": "mixtral-8x7b",
    "name": "Mistral Mixtral 8x7B (Open MoE Revolution)",
    "provider": "Mistral AI",
    "category": "llm",
    "releaseYear": "2023",
    "pricingTier": "opensource",
    "priceSummary": {
      "uz": "Ochiq manba (Apache 2.0 / Bepul torrent)",
      "tk": "Açyk çeşme / Mugt",
      "ru": "Полностью открытый код (Apache 2.0)",
      "en": "Open Source (Apache 2.0 torrent drop)"
    },
    "contextOrLimit": "32,768 tokens (Sparse MoE)",
    "accentColor": "#c2410c",
    "isOpenSource": true,
    "supportsUzbek": "good",
    "websiteUrl": "https://mistral.ai/news/mixtral-of-experts/",
    "logoKey": "mistral",
    "releasedModels": [
      "Mistral 7B (2023)",
      "Mixtral 8x7B (2023)",
      "Mixtral 8x22B (2024)",
      "Mistral Large 2 (2024)"
    ],
    "tagline": {
      "uz": "Ochiq kodli Sparse Mixture-of-Experts (MoE) inqilobi: 47B parametr, lekin 13B tezligida ishlaydi",
      "tk": "Sparse MoE rewolýusiýasy: 47B parametr, ýöne 13B tizliginde işleýän açyk model",
      "ru": "Революция открытого MoE: модель на 47 млрд параметров с инференсом со скоростью 13 млрд, победившая Llama 2 70B",
      "en": "Open sparse mixture-of-experts model outperforming Llama 2 70B with 6x faster inference"
    },
    "description": {
      "uz": "Mixtral 8x7B — 2023-yil dekabrida Mistral AI tomonidan kutilmaganda (oddiy torrent havolasi orqali) e'lon qilingan va ochiq manbali dunyoda MoE arxitekturasini ommalashtirgan model. U 47 milliard umumiy parametrga ega, lekin har bir so'zda faqat 13 milliard parametr ishlatgani uchun Llama 2 70B dan 6 barobar tez ishlagan holda undan aqlliroq bo'lib chiqdi.",
      "tk": "Mixtral 8x7B — 2023-nji ýylda dünýäde MoE tehnologiýasyny meşhur eden açyk modeldir.",
      "ru": "Mixtral 8x7B стала триумфом европейской школы ИИ. Опубликованная просто в виде ссылки на торрент, модель превзошла Llama 2 70B и сравнялась с GPT-3.5 во всех ключевых тестах, потребляя ресурсы как компактная 13B нейросеть.",
      "en": "Mixtral 8x7B is a high-quality sparse mixture-of-experts model with open weights. Licensed under Apache 2.0, it routes each token to 2 of 8 experts (totaling 47B parameters, activating 13B), outperforming Llama 2 70B on most benchmarks with 6x faster throughput."
    },
    "capabilities": {
      "uz": [
        "Sparse Mixture-of-Experts (MoE): 47B umumiy parametr, 13B aktiv parametr",
        "Llama 2 70B va GPT-3.5 dan ko'plab benchmarklarda ustunlik",
        "32K tokenli kontekst oynasi va ko'p tillilik (fransuz, nemis, ispan, ingliz, rus)",
        "Dasturlash (HumanEval va MBPP) bo'yicha kuchli natijalar"
      ],
      "tk": [
        "Sparse MoE arhitekturasy: 47B umumy, 13B aktiv parametr",
        "Llama 2 70B we GPT-3.5-den has güýçli",
        "32K token kontekst we köp dilli goldaw",
        "Programmirleme we kod ýazmak"
      ],
      "ru": [
        "Архитектура разреженной смеси экспертов (Sparse MoE): 47 млрд параметров суммарно, 13 млрд на токен",
        "Победа над Llama 2 70B и паритет с GPT-3.5 при шестикратном преимуществе в скорости",
        "Окно контекста 32 000 токенов с поддержкой английского, французского, немецкого и русского языков",
        "Высокая производительность в программировании и генерации кода"
      ],
      "en": [
        "Sparse Mixture-of-Experts routing 2 of 8 sub-networks per token (47B total / 13B active)",
        "Matches or outperforms Llama 2 70B and GPT-3.5 with 6x faster token generation",
        "32K context window natively handling French, German, Spanish, Italian, and English",
        "Exceptional code generation density on HumanEval benchmarks"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Yuqori tezlikdagi korporativ chat-botlar",
        "O'rtacha serverlarda tejamkor AI ishga tushirish",
        "Ko'p tilli matnlarni qayta ishlash"
      ],
      "tk": [
        "Çalt korporatiw botlar",
        "Amatly serwerlerde ulanmak",
        "Köp dilli tekstler"
      ],
      "ru": [
        "Высоконагруженные бизнес-приложения, требующие максимальной скорости при умеренных затратах",
        "Локальный хостинг на серверах с двумя картами RTX 3090/4090",
        "Многоязычная обработка текстов"
      ],
      "en": [
        "High-throughput low-latency enterprise conversational backends",
        "Local deployment on dual consumer GPU rigs (e.g. 2x RTX 3090)",
        "Multilingual document synthesis and transformation"
      ]
    },
    "limitations": {
      "uz": [
        "47B parametrli xotirani sig'dirish uchun kamida 48GB VRAM (yoki 4-bit kvantlash) kerak"
      ],
      "tk": [
        "Işletmek üçin 48GB VRAM gerek bolýar"
      ],
      "ru": [
        "Для неквантованного веса требуется от 48 ГБ видеопамяти"
      ],
      "en": [
        "Requires ~48GB VRAM for unquantized weights (or 4-bit quantization for 24GB VRAM)"
      ]
    },
    "usageTips": {
      "uz": "Ollama da `ollama run mixtral` buyrug'i orqali 4-bit kvantlangan variantini 32GB xotirali Mac yoki kompyuterda sinab ko'rishingiz mumkin.",
      "tk": "Ollama-da mixtral modelini barlap görüň.",
      "ru": "Используйте квантованную версию mixtral:8x7b-instruct-q4_K_M для комфортной работы на 32GB Mac/ПК.",
      "en": "Run the Q4_K_M quantized build on 32GB RAM MacBooks for responsive offline performance."
    },
    "scores": {
      "reasoning": 88,
      "coding": 86,
      "creativity": 85,
      "speed": 94,
      "multimodal": 10,
      "uzbekAndMultilingual": 85,
      "costEfficiency": 97
    }
  },
  {
    "id": "mistral-large",
    "name": "Mistral Large 2 (123B Flagship)",
    "provider": "Mistral AI",
    "category": "llm",
    "releaseYear": "2024–2025",
    "pricingTier": "freemium",
    "priceSummary": {
      "uz": "Le Chat da bepul / API: $2/$6 per 1M token",
      "tk": "Le Chat-da mugt / API elýeterli",
      "ru": "Бесплатно на платформе Le Chat / Доступен в API",
      "en": "Free on Le Chat / API $2/$6 per 1M tokens"
    },
    "contextOrLimit": "128,000 tokens (123B parametr)",
    "accentColor": "#9a3412",
    "isOpenSource": true,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://mistral.ai/news/mistral-large-2407/",
    "logoKey": "mistral",
    "releasedModels": [
      "Mistral 7B (2023)",
      "Mixtral 8x7B (2023)",
      "Mistral Large 1 (2024)",
      "Codestral (2024)",
      "Mistral Large 2 (2024-2025)"
    ],
    "tagline": {
      "uz": "123 milliard parametrli, 80 dan ortiq dasturlash tillari va ko'p tillilikda yetakchi Yevropa flagmani",
      "tk": "123 milliard parametrli, 80-den gowrak programmirleme dilinde güýçli Ýewropa modeli",
      "ru": "Флагман европейского ИИ: 123 млрд параметров, 80+ языков кодинга и конкуренция с GPT-4o на равных",
      "en": "Europe’s frontier model with 123B parameters, advanced reasoning, 128k context, and 80+ coding languages"
    },
    "description": {
      "uz": "Mistral Large 2 — 2024-yil yozida e'lon qilingan Yevropaning eng qudratli flagmani. 123 milliard parametrli model dasturlash (Codeforces, HumanEval) bo'yicha dunyoda eng yuqori o'rinlarga chiqdi, gallyutsinatsiyalarni minimallashtirdi va 128K kontekst bilan ta'minlandi.",
      "tk": "Mistral Large 2 — 123 milliard parametrli, GPT-4o bilen deňleşen Ýewropanyň iň güýçli modelidir.",
      "ru": "Mistral Large 2 закрепила за французской компанией статус мирового лидера. Модель на 123 млрд параметров специально оптимизирована для кода, математики и сложных многоязычных задач, превзойдя Llama 3.1 70B и вплотную приблизившись к GPT-4o.",
      "en": "Mistral Large 2 is an advanced 123B parameter frontier model engineered for exceptional reasoning, code synthesis, and multilingual understanding across French, German, Spanish, Russian, and dozens more."
    },
    "capabilities": {
      "uz": [
        "123 milliard parametrli yuqori intellektli arxitektura",
        "80 dan ortiq dasturlash tillarida (Python, Java, C++, TypeScript, Rust) mukammal kodlash",
        "Function Calling va murakkab agentlik ko'rsatmalarini aniq bajarish",
        "128,000 tokenli kontekst va gallyutsinatsiyani kamaytirish bo'yicha yangi yondashuv"
      ],
      "tk": [
        "123 milliard parametrli ýokary intellekt",
        "80-den gowrak programmirleme dilinde kod ýazmak",
        "Function Calling we awtonom agentler",
        "128 müň token kontekst"
      ],
      "ru": [
        "123 миллиарда параметров плотной архитектуры без потери скорости",
        "Глубокое знание более 80 языков программирования с акцентом на чистую архитектуру",
        "Поддержка продвинутого вызова функций (Tool Use) и строгого структурирования JSON",
        "Контекст 128K токенов с минимальным уровнем галлюцинаций в фактах"
      ],
      "en": [
        "123B dense architecture tuned for high-fidelity code and reasoning parity with proprietary giants",
        "Native mastery of 80+ programming frameworks and syntax standards",
        "State-of-the-art function calling and structured agent tool orchestration",
        "128k context window with minimized hallucination rates on technical citations"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Korporativ dasturiy ta'minot yaratish",
        "Yevropa va xalqaro biznes loyihalari",
        "Murakkab tizimlar tahlili"
      ],
      "tk": [
        "Programma taslamalary",
        "Halkara biznes meseleleri",
        "Çylşyrymly ulgamlar"
      ],
      "ru": [
        "Корпоративная разработка ПО и архитектурный аудит",
        "Многоязычные аналитические платформы",
        "Автономные конвейеры с вызовом API"
      ],
      "en": [
        "Enterprise software architecture and bug fixing",
        "Multilingual corporate intelligence across Europe and beyond",
        "Autonomous agent pipelines with external tool calling"
      ]
    },
    "limitations": {
      "uz": [
        "Nativ rasm yoki video generatsiyasi yo'q (matn va kodga ixtisoslashgan)"
      ],
      "tk": [
        "Surat we wideo döretmeýär"
      ],
      "ru": [
        "Сфокусирована на тексте и коде, нет встроенного генератора фото"
      ],
      "en": [
        "Text and code centric; does not include native visual diffusion generation"
      ]
    },
    "usageTips": {
      "uz": "Mistral ning rasmiy `chat.mistral.ai` (Le Chat) portalida mutlaqo bepul foydalanishingiz mumkin.",
      "tk": "chat.mistral.ai sahypasynda mugt ulanyň.",
      "ru": "Попробуйте бесплатный веб-интерфейс Le Chat на сайте mistral.ai — очень удобный и быстрый.",
      "en": "Use Le Chat at chat.mistral.ai for free interactive access with web search."
    },
    "scores": {
      "reasoning": 95,
      "coding": 94,
      "creativity": 91,
      "speed": 90,
      "multimodal": 82,
      "uzbekAndMultilingual": 92,
      "costEfficiency": 90
    }
  },
  {
    "id": "qwen-2-5-max",
    "name": "Alibaba Qwen 2.5 (72B / Max)",
    "provider": "Alibaba Cloud",
    "category": "llm",
    "releaseYear": "2024–2025",
    "pricingTier": "opensource",
    "priceSummary": {
      "uz": "Ochiq manba (bepul) / Alibaba Cloud API",
      "tk": "Açyk çeşme / Mugt",
      "ru": "Открытый код (Apache 2.0 для 72B) / API Qwen-Max",
      "en": "Open Weights (Apache 2.0) / Qwen-Max API"
    },
    "contextOrLimit": "128,000 tokens (18T token o'qitilgan)",
    "accentColor": "#4f46e5",
    "isOpenSource": true,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://qwenlm.github.io",
    "logoKey": "qwen",
    "releasedModels": [
      "Qwen 1.0 (2023)",
      "Qwen 1.5 (2024)",
      "Qwen 2 (2024)",
      "Qwen 2.5 (72B, Coder, Math) (2024)",
      "Qwen 2.5-Max (2025)",
      "Wan 2.1 (Video) (2025-2026)"
    ],
    "tagline": {
      "uz": "Dunyodagi eng kuchli ko'p tilli va dasturlash ochiq modellari seriyasi: turkiy va o'zbek tillarida a'lo natija",
      "tk": "Dünýäniň iň güýçli köp dilli we programmirleme modelleri: sebit dillerinde aýratyn gowy",
      "ru": "Флагман Alibaba: непревзойденное знание тюркских и азиатских языков, эталонный кодинг Qwen-Coder",
      "en": "Alibaba’s frontier open-source family dominating coding (Qwen2.5-Coder) and multilingual reasoning"
    },
    "description": {
      "uz": "Qwen 2.5 (va Qwen 2.5-Max) — Alibaba Cloud tomonidan yaratilgan, 18 trilliondan ortiq token ma'lumotlarda o'qitilgan jahon darajasidagi model. Ayniqsa, Qwen 2.5-Coder varianti dasturlash bo'yicha Claude 3.5 Sonnet bilan bellashuvchi birdan-bir ochiq manbali model hisoblanadi. O'zbek va turkiy tillardagi grammatika va lug'at boyligi eng yuqori baholangan.",
      "tk": "Qwen 2.5 — Alibaba tarapyndan 18 trillion token bilen taýýarlanan, kod we diller boýunça iň güýçli modeldir.",
      "ru": "Qwen 2.5 от Alibaba Cloud стала мировым лидером среди открытых мультиязычных моделей. Обученная на 18 триллионах токенов, модель превосходно владеет тюркскими языками (включая узбекский), а её версия Qwen-2.5-Coder стала эталоном для автономного написания софта.",
      "en": "Alibaba’s Qwen 2.5 family represents the state-of-the-art in open-source AI. Trained on 18T tokens, it offers unmatched prowess in mathematics, coding (Qwen2.5-Coder-32B matches Sonnet 3.5 on multiple evals), and multilingual processing."
    },
    "capabilities": {
      "uz": [
        "18 trillion tokenli o'qitish bazasi: matematika, fan va 29 dan ortiq tillarda a'lo bilim",
        "Qwen 2.5-Coder: ochiq manbali dunyoda 1-raqamli dasturlash intellekti",
        "O'zbek, uyg'ur, qozoq, turk va rus tillaridagi eng boy lug'at va aniq grammatika",
        "128,000 tokenli kontekst va 8,000 tokengacha uzun javob chiqarish"
      ],
      "tk": [
        "18 trillion tokenli maglumat bazasy",
        "Qwen 2.5-Coder: dünýäde 1-nji orundaky açyk kod modeli",
        "Sebit dillerinde iň baý sözlük we grammatika",
        "128K kontekst we 8K uzyn jogaplar"
      ],
      "ru": [
        "Обучение на 18 триллионах токенов с акцентом на математику, алгоритмы и естественные языки",
        "Qwen 2.5-Coder — безоговорочный номер 1 среди открытых моделей для программирования",
        "Наилучшее понимание узбекского, казахского, уйгурского и русского языков среди всех мировых нейросетей",
        "Контекст 128K токенов с поддержкой длинных генераций до 8K токенов"
      ],
      "en": [
        "18-trillion token pre-training dataset optimizing STEM, code, and multilingual reasoning",
        "Qwen2.5-Coder reigning as the #1 open-weights programming model worldwide",
        "Superior syntactic and semantic depth across Central Asian and Turkic language families",
        "128k context window generating up to 8,000 tokens of structured code in a single pass"
      ]
    },
    "bestUseCases": {
      "uz": [
        "O'zbek va turkiy tillardagi aqlli tizimlar",
        "Dasturchilar uchun kod yozish va refaktoring",
        "Korporativ ko'p tilli tahlil"
      ],
      "tk": [
        "Sebit dillerindäki taslamalar",
        "Programmirleme kömekçisi",
        "Köp dilli biznes ulgamlary"
      ],
      "ru": [
        "Локальные ИИ-проекты для Узбекистана и стран Центральной Азии",
        "Автономная разработка софта через Qwen-Coder в Cursor/VS Code",
        "Многоязычная служба поддержки"
      ],
      "en": [
        "Turkic and Central Asian regional enterprise AI",
        "Primary coding engine for Cursor and Continue.dev",
        "Multilingual enterprise search and customer support"
      ]
    },
    "limitations": {
      "uz": [
        "72B modelini to'liq yuklash uchun kuchli kompyuter (kamida 32GB-48GB xotira) talab qilinadi (lekin 7B va 14B oddiy noutbukda ishlaydi)"
      ],
      "tk": [
        "72B üçin güýçli noutbuk gerek (14B amatly)"
      ],
      "ru": [
        "Для версии 72B требуется мощная видеокарта, однако версии 7B и 14B легко работают на ноутбуках"
      ],
      "en": [
        "72B requires ~48GB VRAM/RAM unquantized, though the 14B/32B coder variants run on laptops"
      ]
    },
    "usageTips": {
      "uz": "Cursor AI yoki VS Code da dasturlash uchun `qwen2.5-coder:32b` modelini tanlang — u Claude darajasida bepul kod yozadi.",
      "tk": "Kody ýazmak üçin qwen2.5-coder:32b saýlaň.",
      "ru": "Подключите qwen2.5-coder:32b в качестве модели по умолчанию для кодинга — результат поразит.",
      "en": "Pair Qwen2.5-Coder-32B with Cursor or Continue for near-Sonnet coding without API fees."
    },
    "scores": {
      "reasoning": 96,
      "coding": 97,
      "creativity": 90,
      "speed": 91,
      "multimodal": 86,
      "uzbekAndMultilingual": 96,
      "costEfficiency": 98
    }
  },
  {
    "id": "wan-2-1",
    "name": "Alibaba Wan 2.1 (Kinematic Video & 3D)",
    "provider": "Alibaba Cloud",
    "category": "video",
    "releaseYear": "2025–2026",
    "pricingTier": "opensource",
    "priceSummary": {
      "uz": "Ochiq manba (Apache 2.0 / Hugging Face)",
      "tk": "Açyk çeşme / Mugt",
      "ru": "Полностью открытый код (Apache 2.0 на Hugging Face)",
      "en": "Open Source (Apache 2.0 Weights)"
    },
    "contextOrLimit": "1080p 3D Dynamic Video (Diffusion Transformer)",
    "accentColor": "#6366f1",
    "isOpenSource": true,
    "supportsUzbek": "good",
    "websiteUrl": "https://github.com/Wan-Video/Wan2.1",
    "logoKey": "qwen",
    "releasedModels": [
      "AnimateDiff (2023)",
      "CogVideoX (2024)",
      "Wan 2.1 1.3B (2025)",
      "Wan 2.1 14B (2025-2026)"
    ],
    "tagline": {
      "uz": "Alibaba ning eng so'nggi 3D harakat va kinematografik ochiq manbali video generatsiya flagmani",
      "tk": "Alibaba-nyň 3D hereketli we kinematografiki iň täze açyk wideo modeli",
      "ru": "Открытый кинематографический прорыв Alibaba: 1080p, реалистичная динамика и запуск на домашних GPU",
      "en": "Alibaba’s breakthrough open video model delivering 1080p cinema-grade physics on consumer hardware"
    },
    "description": {
      "uz": "Wan 2.1 — Alibaba Cloud tomonidan 2025-yil boshida taqdim etilgan va video generatsiya sohasida inqilob qilgan ochiq manbali model. U 1.3B va 14B variantlarida chiqarilgan bo'lib, o'zining yopiq raqobatchilari (Sora, Runway) darajasidagi 1080p sifatli videolarni yaratadi va oddiy RTX 4090 grafik kartalarida ham ishlay oladi.",
      "tk": "Wan 2.1 — Alibaba tarapyndan açyk çeşmede çykarylan, 1080p hilli wideolary döredýän modeldir.",
      "ru": "Wan 2.1 от Alibaba стала первой по-настоящему кинематографической открытой моделью генерации видео. Она рендерит ролики в 1080p с физически точными движениями людей и камеры, запускаясь даже на одной потребительской видеокарте RTX 4090.",
      "en": "Wan 2.1 democratized generative cinema. Developed by Alibaba, this open diffusion transformer synthesizes high-definition 1080p video with complex camera pans and natural physical kinetics, runnable on local consumer rigs."
    },
    "capabilities": {
      "uz": [
        "1080p Full HD video generatsiyasi va murakkab 3D harakatlar dinamikasi",
        "1.3B va 14B parametrli ochiq modellar: noutbukdan tortib yirik serverlargacha moslashuvchanlik",
        "Matndan videoga (Text-to-Video) va rasmdan videoga (Image-to-Video)",
        "Kinematografik yorug'lik, inson harakatlari va real fizika qoidalariga rioya qilish"
      ],
      "tk": [
        "1080p Full HD wideo we 3D dinamiki hereketler",
        "1.3B we 14B açyk modeller",
        "Tekstden we suratdan wideo döretmek",
        "Hakyky fizika we yşyklandyryş"
      ],
      "ru": [
        "Генерация кристально четкого видео в 1080p с динамичной 3D-перспективой",
        "Два открытых варианта (1.3B для доступности и 14B для бескомпромиссного качества)",
        "Поддержка режимов Text-to-Video и Image-to-Video с идеальным сохранением лиц",
        "Абсолютно свободная лицензия Apache 2.0 для исследователей и студий"
      ],
      "en": [
        "1080p Full HD generation with coherent spatial 3D kinematics",
        "Dual-tier release: 1.3B for edge/desktop acceleration and 14B for maximum visual fidelity",
        "Robust Text-to-Video and Image-to-Video conditioning preserving source facial identity",
        "Fully open Apache 2.0 weights runnable offline inside ComfyUI workflows"
      ]
    },
    "bestUseCases": {
      "uz": [
        "ComfyUI orqali lokal kompyuterda bepul video yaratish",
        "Ijtimoiy tarmoqlar va kliplar uchun kontent",
        "Kino va 3D harakatlar vizualizatsiyasi"
      ],
      "tk": [
        "ComfyUI arkaly lokal wideo döretmek",
        "Klipler we mahabat",
        "3D animasiýa"
      ],
      "ru": [
        "Локальная генерация видео в ComfyUI без абонентской платы",
        "Создание клипов, моушн-дизайна и вирусных роликов",
        "Визуализация спецэффектов для инди-кино"
      ],
      "en": [
        "Local offline video rendering inside ComfyUI pipelines",
        "Indie film visual effects and commercial motion graphics",
        "High-speed social video production without per-generation credit fees"
      ]
    },
    "limitations": {
      "uz": [
        "14B modelida eng yuqori sifatda generatsiya qilish uchun kamida 16GB-24GB VRAM zarur"
      ],
      "tk": [
        "Ýokary hilde işletmek üçin 16GB-24GB wideo karta gerek"
      ],
      "ru": [
        "Для версии 14B требуется производительная видеокарта с 16–24 ГБ памяти"
      ],
      "en": [
        "The 14B checkpoint requires 16GB-24GB VRAM for full-resolution rendering"
      ]
    },
    "usageTips": {
      "uz": "ComfyUI dasturiga Wan 2.1 tugunlarini o'rnatib, rasmlaringizni harakatlanuvchi jonli 1080p videoga bepul aylantiring.",
      "tk": "ComfyUI ulgamynda Wan 2.1 gurnap ulanyň.",
      "ru": "Интегрируйте модель в ComfyUI — это откроет бесконечные возможности бесплатного видеопроизводства.",
      "en": "Deploy Wan 2.1 via ComfyUI with native FP8 quantization for smooth rendering on an RTX 4070/4080."
    },
    "scores": {
      "reasoning": 84,
      "coding": 30,
      "creativity": 98,
      "speed": 78,
      "multimodal": 98,
      "uzbekAndMultilingual": 84,
      "costEfficiency": 96
    }
  },
  {
    "id": "midjourney-v7",
    "name": "Midjourney v7 (Hyper-Aesthetic Art)",
    "provider": "Midjourney",
    "category": "image",
    "releaseYear": "2025–2026",
    "pricingTier": "paid",
    "priceSummary": {
      "uz": "Basic $10/oy / Standard $30/oy / Pro $60/oy",
      "tk": "Basic $10/aý / Standart $30",
      "ru": "Подписка от $10 до $60/мес (Web и Discord)",
      "en": "Subscription: $10–$60/mo (Web & Discord)"
    },
    "contextOrLimit": "8K Ultra HD Photorealism",
    "accentColor": "#6366f1",
    "isOpenSource": false,
    "supportsUzbek": "good",
    "websiteUrl": "https://midjourney.com",
    "logoKey": "midjourney",
    "releasedModels": [
      "Midjourney v1–v3 (2022)",
      "Midjourney v4 (2022)",
      "Midjourney v5 (2023)",
      "Midjourney v6 (2024)",
      "Midjourney v7 (2025-2026)"
    ],
    "tagline": {
      "uz": "Inson tasavvuri chegarasidagi eng nafis vizual san'at va fotorealistik rasm generatsiyasi",
      "tk": "Inson hyýalynyň çägindäki iň owadan dizaýn we hakyky surat generator modeli",
      "ru": "Непревзойденный эталон художественной эстетики, кинематографического света и фотореализма",
      "en": "The gold standard in creative aesthetic fidelity, photorealism, and nuanced artistic lighting"
    },
    "description": {
      "uz": "Midjourney v7 — jahon dizaynerlari, rejissyorlari va rassomlari uchun eng nufuzli tasvir vositasi. U boshqa barcha modellardan o'zining mislsiz badiiy didi, yorug'likning nafis o'yini, inson terisi va ko'zlari fakturasini 8K mikron darajasida fotorealistik aks ettirishi bilan ajralib turadi.",
      "tk": "Midjourney v7 — dizaýnerler we suratkeşler üçin dünýäde iň kämil vizual sungat guralydyr.",
      "ru": "Midjourney v7 удерживает абсолютное лидерство в эстетическом качестве. Ни одна другая модель не передает кинематографический свет, текстуру кожи, капли дождя и художественный замысел с таким чувством вкуса и фотографической глубиной.",
      "en": "Midjourney v7 represents the absolute zenith of AI aesthetics. Celebrated by world-class art directors and film studios, it renders photorealistic scenes with cinematic color grading, rich lens effects, and micro-textures."
    },
    "capabilities": {
      "uz": [
        "Inson terisi poralari, ko'z qorachiqlari va mikron detallargacha bo'lgan 8K fotorealizm",
        "Kinematografik yorug'lik: volumetrik nurlar, neon, retro kino plyonkalari (Kodak, Polaroid)",
        "Veb-interfeys va Discord orqali birdek qulay ishlash",
        "Qahramonlar va uslubni izchil saqlash (`--cref` va `--sref` parametrlari)"
      ],
      "tk": [
        "8K fotorealizm we inçe detallar",
        "Kinematografiki yşyklandyryş we reňk sazlamasy",
        "Web sahypa we Discord arkaly ulanmak",
        "Gahrymanlaryň keşbini saklamak (--cref)"
      ],
      "ru": [
        "Безупречный микро-фотореализм: поры кожи, волоски, преломление света в каплях воды",
        "Кинематографический свет и эмуляция аналоговой пленки (Kodak Portra, 35mm, анаморфотная оптика)",
        "Удобный веб-редактор с интуитивными ползунками изменения композиции",
        "Система сохранения стиля (--sref) и консистенции персонажей (--cref)"
      ],
      "en": [
        "8K ultra-photorealism rendering authentic skin pores, ocular reflections, and micro-details",
        "Cinematographic lighting and analog film stock emulation (Kodak Portra, anamorphic bokeh)",
        "Standalone browser-based canvas editor with intuitive composition and inpainting controls",
        "Consistent character synthesis (--cref) and artistic style referencing (--sref)"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Kino tizerlari va konseptual san'at",
        "Moda jurnallari va brending",
        "Interyer va arxitektura dizayni"
      ],
      "tk": [
        "Kino dizaýny we sungat",
        "Moda we brending",
        "Arhitektura we interýer"
      ],
      "ru": [
        "Концепт-арт для кинофильмов и AAA-видеоигр",
        "Глянец, fashion-фотография и брендинг",
        "Архитектурная визуализация и дизайн интерьеров"
      ],
      "en": [
        "AAA game & feature film concept art",
        "High-fashion editorial photography & branding",
        "Architectural visualization & moodboards"
      ]
    },
    "limitations": {
      "uz": [
        "To'liq yopiq va pullik xizmat, API faqat maxsus korporativ kelishuv bilan beriladi"
      ],
      "tk": [
        "Yapyk we tölegli hyzmat"
      ],
      "ru": [
        "Полностью закрытый проприетарный сервис, нет открытых исходных кодов"
      ],
      "en": [
        "Proprietary paid service without public open-weights access"
      ]
    },
    "usageTips": {
      "uz": "So'rov oxiriga `--style raw --v 7` qo'shsangiz, fotosuratingiz reklama banneridek emas, balki jonli kamera bilan olingan haqiqiy suratdek chiqadi.",
      "tk": "--style raw koduny goşup tebigy surat alyň.",
      "ru": "Добавляйте параметр --style raw для отключения художественной стилизации и получения строгих реалистичных фото.",
      "en": "Append --style raw to disable stylized opinionation and achieve strict candid photography."
    },
    "scores": {
      "reasoning": 74,
      "coding": 20,
      "creativity": 99,
      "speed": 85,
      "multimodal": 97,
      "uzbekAndMultilingual": 82,
      "costEfficiency": 82
    }
  },
  {
    "id": "flux-1-pro",
    "name": "FLUX.1 Pro (Text & Anatomy Master)",
    "provider": "Black Forest Labs",
    "category": "image",
    "releaseYear": "2024–2026",
    "pricingTier": "freemium",
    "priceSummary": {
      "uz": "Schnell bepul / Dev ochiq / Pro API $0.05 / rasm",
      "tk": "Schnell mugt / Dev açyk / Pro API",
      "ru": "Schnell бесплатно / Dev открытый / Pro в API ($0.05)",
      "en": "Schnell Free / Dev Open / Pro API ($0.05/image)"
    },
    "contextOrLimit": "12B Flow Transformer (Murakkab matnlar)",
    "accentColor": "#10b981",
    "isOpenSource": true,
    "supportsUzbek": "good",
    "websiteUrl": "https://blackforestlabs.ai",
    "logoKey": "flux",
    "releasedModels": [
      "Stable Diffusion (2022-2023)",
      "FLUX.1 Schnell (2024)",
      "FLUX.1 Dev (2024)",
      "FLUX.1 Pro (2024-2026)"
    ],
    "tagline": {
      "uz": "Rasm ichida aniq matn yozish va inson anatomiyasi/qo'llarini chizishda jahon yetakchisi",
      "tk": "Surat içinde anyk tekst ýazmak we inson ellerini takyk çekmekde dünýä lideri",
      "ru": "Революция Black Forest Labs: безупречные человеческие руки, идеальный рендеринг надписей и открытые веса",
      "en": "12B parameter flow transformer delivering flawless hands, legible typography, and unmatched prompt fidelity"
    },
    "description": {
      "uz": "FLUX.1 — Stable Diffusion ning asl yaratuvchilari (Black Forest Labs) tomonidan 2024-yilda tuzilgan eng kuchli rasm modeli. U sun'iy intellekt tarixida birinchi marta inson barmoqlari va qo'llarini 100% xatosiz chizishni hamda rasm ichidagi harflar va uzun matnlarni benuqson yozishni uddaladi.",
      "tk": "FLUX.1 — inson barmaklaryny we tekstleri suratlarda ýalňyşsyz çekýän iň gowy modeldir.",
      "ru": "FLUX.1 создана командой ученых, стоявших у истоков Stable Diffusion. Модель на 12 млрд параметров построена на архитектуре Flow Matching и решила две главные боли ИИ-арта: правильную анатомию пальцев рук и кристально чистую отрисовку сложного текста на плакатах и вывесках.",
      "en": "Engineered by the original creators of Stable Diffusion at Black Forest Labs, FLUX.1 revolutionized open image generation. Built on a 12B parameter rectified flow transformer, it masters prompt adherence, human anatomy, and typography."
    },
    "capabilities": {
      "uz": [
        "Inson qo'llari, barmoqlari va oyoqlarini mukammal, tabiiy anatomiyada chizish",
        "Rasm ichida istalgan tildagi matnlarni, logotiplar va yozuvlarni xatosiz aks ettirish",
        "FLUX.1 Schnell: atigi 4 qadamda sekundiga tayyor rasm chiqarish",
        "ComfyUI va mahalliy kompyuterlarda to'liq mustaqil ishlash (Dev varianti)"
      ],
      "tk": [
        "Inson ellerini we barmaklaryny tebigy çekmek",
        "Surat içinde islendik ýazgyny takyk ýazmak",
        "Schnell: 4 ädimde derrew surat döretmek",
        "ComfyUI arkaly lokal kompýuterde mugt ulanmak"
      ],
      "ru": [
        "Идеальная анатомия человека: правильное количество пальцев, естественные суставы и позы",
        "Безупречный рендеринг сложного текста, неоновых вывесок и цитат внутри сцены",
        "Версия FLUX.1 Schnell генерирует качественное фото всего за 4 шага (1-2 секунды)",
        "Открытый доступ к весам FLUX.1 Dev для локального развертывания в ComfyUI"
      ],
      "en": [
        "Anatomical precision eliminating malformed hands, extra fingers, and warped limbs",
        "Industry-leading typographic rendering of quotes, logos, and intricate signage",
        "Lightning-fast FLUX.1 Schnell generating high-fidelity outputs in just 4 sampling steps",
        "Freely accessible non-commercial weights for FLUX.1 Dev deployable inside ComfyUI"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Yozuvli marketing bannerlari va afishalar",
        "Inson portretlari va fotorealistik sahnalar",
        "Lokal kompyuterda bepul rasm yaratish"
      ],
      "tk": [
        "Ýazgyly mahabat plakatlary",
        "Inson portretleri",
        "Lokal surat döretmek"
      ],
      "ru": [
        "Создание рекламных баннеров и афиш с текстом",
        "Фотореалистичные портреты людей без эффекта зловещей долины",
        "Локальная генерация арта в ComfyUI"
      ],
      "en": [
        "Marketing collateral, posters, and book covers requiring legible typography",
        "Hyper-realistic human portraiture",
        "Offline custom LoRA fine-tuning in ComfyUI"
      ]
    },
    "limitations": {
      "uz": [
        "Dev varianti yuqori hajmdagi video xotira (kamida 16GB VRAM) talab qiladi"
      ],
      "tk": [
        "Dev warianty üçin 16GB VRAM gerek"
      ],
      "ru": [
        "Для комфортной локальной работы версии Dev требуется видеокарта с 16 ГБ VRAM"
      ],
      "en": [
        "FLUX.1 Dev requires ~16GB-24GB VRAM for unquantized local inference"
      ]
    },
    "usageTips": {
      "uz": "Rasm ichiga yozuv qo'shmoqchi bo'lsangiz, uni qo'shtirnoq ichida yozing: 'a barista holding a chalkboard with text \"OYBEKOVA.UZ\"'.",
      "tk": "Ýazgyny goştumaç içinde ýazyň: \"TEKST\".",
      "ru": "Указывайте текст строго в кавычках: \"A neon sign that says \"HELLO\" on a rainy wall\".",
      "en": "Enclose text prompts in double quotes: \"A vintage cafe awning with text \"ROASTED DAILY\"\"."
    },
    "scores": {
      "reasoning": 75,
      "coding": 20,
      "creativity": 98,
      "speed": 89,
      "multimodal": 98,
      "uzbekAndMultilingual": 84,
      "costEfficiency": 91
    }
  },
  {
    "id": "runway-gen3",
    "name": "Runway Gen-3 Alpha (Motion Control)",
    "provider": "Runway",
    "category": "video",
    "releaseYear": "2024–2026",
    "pricingTier": "freemium",
    "priceSummary": {
      "uz": "Bepul kreditlar / Standart $15/oy / Pro $35/oy",
      "tk": "Mugt kredit / Standart $15",
      "ru": "Бесплатные кредиты / Подписка от $15/мес",
      "en": "Free trial credits / Standard $15/mo / Pro $35/mo"
    },
    "contextOrLimit": "10 soniyagacha HD video (Motion Brush)",
    "accentColor": "#8b5cf6",
    "isOpenSource": false,
    "supportsUzbek": "good",
    "websiteUrl": "https://runwayml.com",
    "logoKey": "runway",
    "releasedModels": [
      "Gen-1 (2023)",
      "Gen-2 (2023)",
      "Gen-3 Alpha (2024)",
      "Gen-3 Alpha Turbo (2024-2026)"
    ],
    "tagline": {
      "uz": "Kinematografik video generatsiyasi, Motion Brush va aniq kamera nazorati vositasi",
      "tk": "Kinematografiki wideo, Motion Brush we kamera dolandyryş modeli",
      "ru": "Эталон кинематографического движения: инструмент Motion Brush и контроль ракурсов для режиссеров",
      "en": "Pioneering generative cinema suite featuring Motion Brush, camera control, and expressive kinetics"
    },
    "description": {
      "uz": "Runway Gen-3 Alpha — Gollivud studiyalari va video montajchilar tomonidan eng ko'p ishlatiladigan video platformasi. U 'Motion Brush' vositasi orqali rasmning aynan qaysi qismi (masalan, faqat sharshara suvi yoki faqat mashina) qanday tezlikda harakatlanishini cho'tka bilan bo'yab belgilash imkonini beradi.",
      "tk": "Runway Gen-3 Alpha — Gollivud filmlerinde we professional wideolarda iň köp ulanylýan modeldir.",
      "ru": "Runway Gen-3 Alpha создана специально для видеопроизводства высочайшего класса. Инструмент Motion Brush позволяет художнику буквально кистью указать, какие именно части кадра должны двигаться и в каком направлении, создавая кинематографические шедевры.",
      "en": "Runway Gen-3 Alpha powers modern creative studios and Hollywood VFX teams. With specialized tools like Motion Brush and Director Mode, creators gain granular control over temporal flow, actor expressions, and camera trajectories."
    },
    "capabilities": {
      "uz": [
        "Motion Brush: statik rasmning istalgan 5 ta qismiga alohida harakat yo'nalishini berish",
        "Kamera yo'nalishini boshqarish (Camera Control: Pan, Tilt, Zoom, Orbit)",
        "Gen-3 Alpha Turbo: 7 barobar tezroq video generatsiyasi",
        "Matndan videoga va rasmdan harakatlanuvchi jonli sahnaga aylantirish"
      ],
      "tk": [
        "Motion Brush: suratyň aýry böleklerini herekete getirmek",
        "Kamera ugurlaryny anyk dolandyrmak",
        "Turbo: 7 esse çalt wideo döretmek",
        "Suratdan janly wideo öwürmek"
      ],
      "ru": [
        "Кисть движения Motion Brush: раздельное управление анимацией до 5 разных областей кадра",
        "Полный контроль траектории виртуальной камеры (панорамирование, наезд, орбитальный облет)",
        "Сверхбыстрый режим Turbo: генерация 10-секундного ролика за считанные секунды",
        "Высокая точность синхронизации губ и мимики персонажей"
      ],
      "en": [
        "Motion Brush assigning independent directional vectors to up to 5 scene elements",
        "Director Mode with precise cinematic camera trajectories (Pan, Tilt, Dolly, Orbit)",
        "Gen-3 Alpha Turbo rendering expressive 10s video clips in near-instant turnaround",
        "High-fidelity Image-to-Video transforming still concept art into dynamic camera sequences"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Musiqiy kliplar va reklama roliklari",
        "Rassomlar chizgan rasmlarni harakatga keltirish",
        "Kino vizual effektlari (VFX)"
      ],
      "tk": [
        "Klipler we mahabatlar",
        "Suratlary janlandyrmak",
        "Kino VFX effektleri"
      ],
      "ru": [
        "Музыкальные клипы, рекламные ролики и анимация",
        "Оживление статичных иллюстраций художников",
        "Визуальные спецэффекты для кинематографа"
      ],
      "en": [
        "Music videos, broadcast commercials, and visual storytelling",
        "Animating still concept art and matte paintings",
        "VFX pre-visualization and title sequences"
      ]
    },
    "limitations": {
      "uz": [
        "Bepul sinov kreditlari tez tugaydi, professional montaj uchun pullik obuna talab qilinadi"
      ],
      "tk": [
        "Mugt kreditler çalt gutarýar"
      ],
      "ru": [
        "Быстрое исчерпание бесплатных генераций, требуется платная подписка"
      ],
      "en": [
        "Limited free credits; subscription tiers required for extensive high-resolution queues"
      ]
    },
    "usageTips": {
      "uz": "Avval Midjourney yoki FLUX da ajoyib rasm chizing, keyin uni Runway Gen-3 ga yuklab 'Motion Brush' bilan suv va bulutlarni harakatlantiring.",
      "tk": "Midjourney suratyny Runway-e ýükläp janlandyryň.",
      "ru": "Создайте изображение в Midjourney, затем загрузите в Runway и оживите его кистью Motion Brush.",
      "en": "Pair Midjourney/FLUX concept stills with Runway’s Image-to-Video and Motion Brush for ideal results."
    },
    "scores": {
      "reasoning": 83,
      "coding": 25,
      "creativity": 98,
      "speed": 84,
      "multimodal": 98,
      "uzbekAndMultilingual": 82,
      "costEfficiency": 80
    }
  },
  {
    "id": "elevenlabs",
    "name": "ElevenLabs v3 (Emotional Voice AI)",
    "provider": "ElevenLabs",
    "category": "audio",
    "releaseYear": "2024–2026",
    "pricingTier": "freemium",
    "priceSummary": {
      "uz": "Oyiga 10,000 belgi bepul / Starter $5 / Creator $22",
      "tk": "10 müň belgi mugt / Starter $5",
      "ru": "10 000 символов/мес бесплатно / Starter $5 / Creator $22",
      "en": "Free 10K chars/mo / Starter $5 / Creator $22"
    },
    "contextOrLimit": "32+ Tillar (Hissiyotli ovoz klonlash)",
    "accentColor": "#1e293b",
    "isOpenSource": false,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://elevenlabs.io",
    "logoKey": "elevenlabs",
    "releasedModels": [
      "Eleven Multilingual v1 (2023)",
      "Eleven Multilingual v2 (2023)",
      "Eleven Turbo v2.5 (2024)",
      "ElevenLabs v3 (2025-2026)"
    ],
    "tagline": {
      "uz": "Tirik insondan farq qilmaydigan hissiyotli nutq, ovoz klonlash va 32+ tillarda avtomatik dublyaj",
      "tk": "Adamyň sesinden tapawutlanmaýan duýgyly nutuk we ses klonirleme modeli",
      "ru": "Золотой стандарт голосового ИИ: неотличимая от человека речь, передача шепота, смеха и мгновенное клонирование",
      "en": "The global benchmark in expressive AI speech synthesis, instant voice cloning, and emotional modulation"
    },
    "description": {
      "uz": "ElevenLabs — sun'iy intellekt ovoz sintezi bo'yicha dunyodagi mutlaq 1-raqamli platforma. U oddiy robotik tovushlardan farqli o'laroq, inson nafas olishi, kulgusi, shivirlashi, g'azabi yoki hayratini to'liq ifodalaydi. Bir daqiqalik audio orqali har qanday inson ovozini nusxalab (Voice Cloning), 32 ta tilda gapirtira oladi.",
      "tk": "ElevenLabs — dünýäde iň kämil ses dörediji platforma bolup, adamyň sesini 1 minutda klonlaýar.",
      "ru": "ElevenLabs перевернула индустрию озвучки. Нейросеть генерирует эмоциональную человеческую речь с тончайшими интонациями, паузами, вздохами и сарказмом. Функция Voice Cloning позволяет за 60 секунд скопировать голос любого спикера и перевести видео на 32 языка с сохранением тембра.",
      "en": "ElevenLabs is the undisputed leader in neural text-to-speech and audio intelligence. Rendering nuance across 32+ languages with deep emotional range (whispering, laughing, hesitation), it provides instant voice cloning and automated video dubbing."
    },
    "capabilities": {
      "uz": [
        "Inson nutqidan farqlab bo'lmaydigan hissiyotli ovoz sintezi (shivirlash, kulgi, dramatik pauzalar)",
        "Instant Voice Cloning: 1 daqiqalik audio namunadan shaxsiy ovozni klonlash",
        "Avtomatik video dublyaj: videodagi ovozni o'zbek, ingliz, rus va 32+ tillarga asl tembrda tarjima qilish",
        "Ovoz effektlari generatori (Sound Effects): matn orqali har qanday shovqin va effektlarni yaratish"
      ],
      "tk": [
        "Tebigy duýgyly ses (pyşyrdy, gülki, dramatik ses)",
        "Instant Voice Cloning: 1 minutda sesi nusgalamak",
        "Awtomatik dublýaž: sesi saklap 32 dile terjime etmek",
        "Sound Effects: tekst arkaly ses effektleri döretmek"
      ],
      "ru": [
        "Неотличимая от живого диктора генерация речи с передачей шепота, волнения и акцентов",
        "Мгновенное клонирование голоса по 60-секундному образцу записи",
        "Автоматический видеодубляж (AI Dubbing) с сохранением исходного тембра говорящего",
        "Генератор реалистичных звуковых эффектов (Sound Effects) для кино и подкастов"
      ],
      "en": [
        "Human-grade emotional range capturing whispers, shouts, laughter, and natural hesitations",
        "Instant Voice Cloning from a 60-second audio sample with uncanny timbre replication",
        "AI Dubbing translating video dialogues across 32+ languages while preserving original speaker timbre",
        "Generative sound effects engine synthesizing ambient noise, foley, and cinematic impacts"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Audio kitoblar va YouTube videolarni ovozlashtirish",
        "Xalqaro filmlar va darslarni dublyaj qilish",
        "O'yinlar va qahramonlar ovozi"
      ],
      "tk": [
        "Audio kitaplar we YouTube wideolar",
        "Filmleri we sapaklary dublýaž etmek",
        "Oýun gahrymanlarynyň sesi"
      ],
      "ru": [
        "Озвучка аудиокниг, подкастов и обучающих курсов",
        "Локализация и дубляж YouTube-роликов на десятки языков",
        "Озвучивание персонажей видеоигр и интерактивных ботов"
      ],
      "en": [
        "Audiobook narration and podcast production",
        "Cross-border YouTube video localization and dubbing",
        "Video game NPC dialogue voicing and interactive agents"
      ]
    },
    "limitations": {
      "uz": [
        "Oyiga bepul belgilar soni cheklangan, uzoq audio fayllar uchun abonent to'lovi talab etiladi"
      ],
      "tk": [
        "Mugt belgiler sany çäkli"
      ],
      "ru": [
        "Лимит бесплатных символов в месяц; коммерческое использование требует подписки"
      ],
      "en": [
        "Free tier limited to 10k characters monthly; professional usage requires subscription tiers"
      ]
    },
    "usageTips": {
      "uz": "O'zbek tilidagi matnlarni ovozlashtirishda matn orasiga vergul va nuqtalarni to'g'ri qo'ysangiz, diktor juda tabiiy nafas olib o'qiydi.",
      "tk": "Dyngylary dogry goýsaňyz, ses has tebigy çykar.",
      "ru": "Используйте многоточия и тире в тексте для создания естественных пауз и драматических переходов.",
      "en": "Insert punctuation (ellipses, em dashes) strategically to trigger natural breathing and phrasing pauses."
    },
    "scores": {
      "reasoning": 76,
      "coding": 30,
      "creativity": 98,
      "speed": 96,
      "multimodal": 96,
      "uzbekAndMultilingual": 94,
      "costEfficiency": 86
    }
  },
  {
    "id": "suno-ai",
    "name": "Suno v4 (Studio Music & Song Generation)",
    "provider": "Suno Inc.",
    "category": "audio",
    "releaseYear": "2024–2026",
    "pricingTier": "freemium",
    "priceSummary": {
      "uz": "Kunlik 50 kredit bepul (10 ta qo'shiq) / Pro $10/oy",
      "tk": "Günde 50 kredit mugt / Pro $10",
      "ru": "50 бесплатных кредитов в день / Pro $10/мес",
      "en": "50 free daily credits (10 songs) / Pro $10/mo"
    },
    "contextOrLimit": "To'liq 4 daqiqali qo'shiqlar (Vokal + Musiqa)",
    "accentColor": "#f43f5e",
    "isOpenSource": false,
    "supportsUzbek": "good",
    "websiteUrl": "https://suno.com",
    "logoKey": "suno",
    "releasedModels": [
      "Suno v1 (2023)",
      "Suno v2 (2023)",
      "Suno v3 & v3.5 (2024)",
      "Suno v4 (2024-2026)"
    ],
    "tagline": {
      "uz": "Oddiy matndan to'liq studiya sifatidagi musiqa, vokal, so'z va aranjirovka yaratuvchi AI",
      "tk": "Ýönekeý tekstden doly studiýa aýdym-sazyny, sesini we aýdym sözlerini dörediji model",
      "ru": "Хитмейкер нового поколения: создание полноценных радио-хитов за 30 секунд с вокалом и аранжировкой",
      "en": "Generates full-length radio-ready songs spanning any genre, custom lyrics, and studio master audio in seconds"
    },
    "description": {
      "uz": "Suno v4 — musiqa sanoatini larzaga solgan sun'iy intellekt. Siz shunchaki qo'shiq mavzusi yoki she'r kiritasiz, Suno esa 30 soniyada unga mos professional kuy, jonli vokal (erkak yoki ayol), baraban, gitara va to'liq aranjirovka bastalab, 4 daqiqalik radio sifatidagi tayyor qo'shiqni taqdim etadi.",
      "tk": "Suno v4 — 30 sekuntda islendik stilde doly aýdym döredip bilýän iň meşhur aýdym-saz modelidir.",
      "ru": "Suno v4 превратила любого человека в композитора и продюсера. Модель генерирует завершенные треки до 4 минут в любом жанре — от рок-баллад и хип-хопа до узбекского макома и симфонической музыки — с чистым вокалом и студийным сведением.",
      "en": "Suno v4 is the premier generative music platform. With simple text prompts or uploaded lyrics, it produces full 4-minute songs with radio-quality vocals, instrumental mastery, and realistic song structure across virtually every genre."
    },
    "capabilities": {
      "uz": [
        "To'liq 4 daqiqagacha bo'lgan studiya sifatidagi professional qo'shiqlar (Verse, Chorus, Bridge, Outro)",
        "Istalgan musiqiy janr: pop, rok, jazz, hip-hop, elektronika, sharqona milliy kuylar",
        "O'zbek, rus, ingliz va 50 dan ortiq tillarda aniq talaffuzli vokal",
        "O'z ovozingiz yoki qo'shiq yozuvini yuklab, uni to'liq orkestrga aylantirish"
      ],
      "tk": [
        "4 minutlyk studiýa hilli taýyn aýdymlar",
        "Islendik saz žanry: pop, rok, jazz, elektronika, milli aýdymlar",
        "Sebit dillerinde anyk sesli aýdym aýtmak",
        "Öz sesiňi orkestr bilen birleşdirmek"
      ],
      "ru": [
        "Генерация цельных треков до 4 минут со структурой куплет-припев-соло-аутро",
        "Поддержка любых музыкальных жанров: от поп-музыки и рока до джаза, фонка и этники",
        "Превосходный вокал на узбекском, русском, английском и десятках других языков",
        "Режим Audio Input для загрузки собственного напева и превращения его в хит"
      ],
      "en": [
        "Full 4-minute continuous songs adhering to traditional verse-chorus-bridge structures",
        "Mastery of thousands of musical genres: synthwave, symphonic metal, RnB, folk, and EDM",
        "Crisp vocal enunciation across dozens of languages including regional dialects",
        "Audio-to-audio upload enabling users to hum melodies transformed into finished masters"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Video, podkast va o'yinlar uchun saundtreklar",
        "Tug'ilgan kun va bayramlarga shaxsiy qo'shiqlar",
        "Musiqachilar uchun yangi g'oyalar va demo-treklar"
      ],
      "tk": [
        "Wideolar we oýunlar üçin aýdym-saz",
        "Şahsy gutlag aýdymlary",
        "Sazandalar üçin demo treki"
      ],
      "ru": [
        "Создание оригинальных саундтреков для игр, рекламы и видео",
        "Поздравительные персональные песни на праздники",
        "Быстрое создание демо-записей для профессиональных музыкантов"
      ],
      "en": [
        "Original royalty-free game, video, and podcast soundtracks",
        "Personalized celebratory songs for birthdays and events",
        "Rapid songwriting ideation and scratch demos for musicians"
      ]
    },
    "limitations": {
      "uz": [
        "Murakkab milliy folklor asboblarining (masalan, tor, dutor) o'ziga xos nolalarini ba'zan zamonaviy sintizatorga o'xshatib qo'yishi mumkin"
      ],
      "tk": [
        "Milli saz gurallary käwagt sintetizator ýaly eşidilip biler"
      ],
      "ru": [
        "Редкие артефакты сжатия при высоких частотах и многослойных аранжировках"
      ],
      "en": [
        "Occasional acoustic compression artifacts on dense, multi-layered orchestral passages"
      ]
    },
    "usageTips": {
      "uz": "So'rovda janrni aniq yozing: '[Genre: Uzbek Pop 2026, instruments: Dutor, live drums, emotional female vocals]' va o'z she'ringizni kiritib 'Create' bosing.",
      "tk": "Žanry we saz gurallaryny anyk görkeziň.",
      "ru": "Используйте теги структуры в тексте: [Verse], [Chorus], [Guitar Solo], [Outro] для идеальной композиции.",
      "en": "Use structural brackets in your lyrics: [Verse 1], [Chorus], [Guitar Solo], [Outro] to direct composition."
    },
    "scores": {
      "reasoning": 70,
      "coding": 20,
      "creativity": 99,
      "speed": 90,
      "multimodal": 94,
      "uzbekAndMultilingual": 86,
      "costEfficiency": 88
    }
  },
  {
    "id": "perplexity-ai",
    "name": "Perplexity Deep Research (Autonomous Search)",
    "provider": "Perplexity AI",
    "category": "research",
    "releaseYear": "2024–2026",
    "pricingTier": "freemium",
    "priceSummary": {
      "uz": "Bepul (standart qidiruv) / Pro $20/oy",
      "tk": "Mugt / Pro $20/aý",
      "ru": "Бесплатно / Pro $20/мес",
      "en": "Free tier / Pro $20/mo"
    },
    "contextOrLimit": "Internet Web Search + Reasoning (100+ manba)",
    "accentColor": "#14b8a6",
    "isOpenSource": false,
    "supportsUzbek": "excellent",
    "websiteUrl": "https://perplexity.ai",
    "logoKey": "perplexity",
    "releasedModels": [
      "Perplexity Search (2023)",
      "Sonar 32B (2024)",
      "Sonar Pro (2024)",
      "Perplexity Deep Research (2025-2026)"
    ],
    "tagline": {
      "uz": "Internetdagi yuzlab manbalarni avtonom tahlil qilib, ishonchli havolalar bilan ilmiy xulosalar beruvchi AI",
      "tk": "Internetdäki ýüzlerçe çeşmäni barlap, anyk salgylanmalar bilen ylmy jogap beriji gural",
      "ru": "Поисковая система нового поколения: глубокие автономные исследования Deep Research с десятками проверенных ссылок",
      "en": "The definitive conversational search engine performing deep multi-source research with live citations"
    },
    "description": {
      "uz": "Perplexity Deep Research — an'anaviy Google qidiruvining o'rnini egallayotgan zamonaviy tadqiqot dvigateli. Oddiy havolalar ro'yxatini berish o'rniga, u internetdagi o'nlab eng yangi ilmiy maqolalar, xabarlar va tahlillarni mustaqil o'rganadi, faktlarni bir-biri bilan solishtiradi va har bir gapiga aniq manba (raqamli havola) qo'yib beradi.",
      "tk": "Perplexity — Google gözleginiň ornuny tutýan, anyk salgylanmaly akylly ylmy gözleg ulgamydyr.",
      "ru": "Perplexity переосмыслила поиск в интернете. Режим Deep Research автономно совершает десятки поисковых запросов, читает веб-страницы, сопоставляет факты и генерирует исчерпывающий аналитический отчёт с проверяемыми сносками на первоисточники.",
      "en": "Perplexity blends leading foundation models with real-time web indexing. Its flagship Deep Research mode autonomously conducts dozens of multi-step queries, parsing papers and news to deliver cited, hallucination-resistant briefings."
    },
    "capabilities": {
      "uz": [
        "Deep Research: bitta savol bo'yicha internetda o'nlab qidiruvlarni amalga oshirib to'liq hisobot tuzish",
        "Har bir ma'lumotga aniq bosiladigan havolalar (Citations) qo'yish",
        "Akademik maqolalar, moliya yangiliklari va statistikani real vaqtda tekshirish",
        "O'zbek, rus va ingliz tillaridagi eng so'nggi ma'lumotlarni tahlil qilish"
      ],
      "tk": [
        "Deep Research: internetde onlarça gözleg edip hasabat düzmek",
        "Her maglumata anyk salgylanma goýmak",
        "Ylmy makalalary we maliýe habarlaryny janly barlamak",
        "Iň soňky täzelikleri derrew bilmek"
      ],
      "ru": [
        "Режим Deep Research: автономное проведение десятков итераций поиска с синтезом итогового отчета",
        "Проверяемые интерактивные сноски на первоисточники для каждого утверждения",
        "Поиск по академическим базам (ArXiv, PubMed) и свежим финансовым отчетам",
        "Фильтрация спама и SEO-мусора для извлечения только проверенной информации"
      ],
      "en": [
        "Autonomous multi-turn Deep Research synthesizing comprehensive multi-page whitepapers",
        "Rigorous footnote citations anchored to live URLs verifying factual integrity",
        "Academic filter mode prioritizing peer-reviewed literature across ArXiv, PubMed, and IEEE",
        "Real-time indexing cutting through commercial SEO bloat for pristine signal-to-noise ratio"
      ]
    },
    "bestUseCases": {
      "uz": [
        "Bozor tahlili va raqobatchilarni o'rganish",
        "Ilmiy dissertatsiyalar va maqolalar tayyorlash",
        "Eng so'nggi xalqaro voqealar haqida ishonchli ma'lumot olish"
      ],
      "tk": [
        "Bazar barlagy we bäsdeşleri öwrenmek",
        "Ylmy işler we dissertasiýalar",
        "Iň soňky dünýä habarlary"
      ],
      "ru": [
        "Глубокий анализ конкурентов и инвестиционных рынков",
        "Подготовка обзора литературы для диссертаций и статей",
        "Быстрый фактчекинг свежих мировых событий без рекламы"
      ],
      "en": [
        "Market landscape research and competitive intelligence",
        "Academic literature reviews and technical whitepapers",
        "Instant real-time verification of emerging news events"
      ]
    },
    "limitations": {
      "uz": [
        "Yopiq pullik obuna talab qiladigan saytlar (Paywall) ichidagi ma'lumotlarni har doim ham o'qiy olmaydi"
      ],
      "tk": [
        "Yapyk tölegli sahypalary käwagt okap bilmeýär"
      ],
      "ru": [
        "Не всегда может обойти пейволлы (платные закрытые издания)"
      ],
      "en": [
        "Subject to paywall boundaries on subscription-only news and enterprise repositories"
      ]
    },
    "usageTips": {
      "uz": "O'zbekistondagi eng so'nggi iqtisodiy yoki IT yangiliklarni bilmoqchi bo'lsangiz, 'Focus: Web' yoki 'Deep Research' rejimini tanlang.",
      "tk": "Deep Research tertibini saýlap soraň.",
      "ru": "Используйте режим Focus: Academic для поиска научных статей с формулами и доказательствами.",
      "en": "Toggle Focus to Academic when researching peer-reviewed scientific claims."
    },
    "scores": {
      "reasoning": 96,
      "coding": 86,
      "creativity": 85,
      "speed": 94,
      "multimodal": 88,
      "uzbekAndMultilingual": 93,
      "costEfficiency": 90
    }
  },
  {
    "id": "cursor-ai",
    "name": "Cursor AI / Agent (Next-Gen IDE)",
    "provider": "Anysphere",
    "category": "coding",
    "releaseYear": "2024–2026",
    "pricingTier": "freemium",
    "priceSummary": {
      "uz": "Oyiga 2000 ta tezkor so'rov / Pro $20/oy",
      "tk": "Aýda 2000 çalt sorag / Pro $20",
      "ru": "Бесплатный тариф / Pro $20/мес",
      "en": "Free tier / Pro $20/mo"
    },
    "contextOrLimit": "Butun repozitoriy (Composer & Agent Mode)",
    "accentColor": "#6366f1",
    "isOpenSource": false,
    "supportsUzbek": "good",
    "websiteUrl": "https://cursor.com",
    "logoKey": "cursor",
    "releasedModels": [
      "Cursor 0.1 (2023)",
      "Cursor Tab (2024)",
      "Cursor Composer (2024)",
      "Cursor Agent Mode (2025-2026)"
    ],
    "tagline": {
      "uz": "Dasturchilar ishini 5 baravarga tezlashtiruvchi, butun kod bazasini ko'rib o'zgartiruvchi AI muharrir",
      "tk": "Programmistleriň işini 5 esse çaltlandyrýan, bütin kody dolandyrýan AI redaktor",
      "ru": "Революционный редактор кода: автономный режим Composer, индексация репозитория и предсказание правок",
      "en": "The AI-first code editor transforming software development with Composer and autonomous Agent Mode"
    },
    "description": {
      "uz": "Cursor AI — VS Code asosida yaratilgan va dunyo dasturchilari orasida eng mashhur bo'lgan yangi avlod kod muharriri. U oddiy kod yozuvchi bot emas, balki butun loyihangizdagi yuzlab fayllarni, kutubxonalarni va terminal buyruqlarini tushunadi. 'Composer' (Ctrl+I) tugmasi orqali birdaniga 10 ta faylni bir vaqtda o'zgartirib yangi funksiyalarni qo'shadi.",
      "tk": "Cursor AI — VS Code esasyndaky iň güýçli programma redaktory bolup, bütin taslamany dolandyrýar.",
      "ru": "Cursor переосмыслил разработку программного обеспечения. Редактор на базе VS Code индексирует весь проект целиком, понимает связи между файлами и с помощью режима Composer способен автономно создать готовое многофайловое приложение или исправить ошибку в терминале за пару минут.",
      "en": "Cursor is the premier AI-native code editor forked from VS Code. Featuring whole-repository indexing, multi-file editing via Composer, and automated terminal debugging, it accelerates engineering velocity by orders of magnitude."
    },
    "capabilities": {
      "uz": [
        "Cursor Composer (Ctrl+I): bitta buyruq bilan bir vaqtda bir nechta fayllarni tahrirlash va yangilarini yaratish",
        "Butun repozitoriyni indekslash: loyihadagi har bir funksiya va klass qayerda turganini bilish",
        "Terminal integratsiyasi: terminaldagi xatolarni avtomatik ko'rib, bitta tugma bilan tuzatish",
        "Tab-to-Predict: dasturchi qayerga qarab yozayotganini oldindan sezib keyingi qatorlarni taklif qilish"
      ],
      "tk": [
        "Composer: birbada birnäçe faýly redaktirlemek",
        "Bütin taslamany indeksirlemek we bilmek",
        "Terminaldaky ýalňyşlary derrew düzetmek",
        "Tab arkaly kody öňünden aýtmak"
      ],
      "ru": [
        "Режим Composer (Ctrl+I / Cmd+I): параллельное редактирование и создание десятков файлов проекта",
        "Полная индексация репозитория с мгновенным поиском по семантике и графу вызовов",
        "Автономное исправление ошибок в терминале по клику кнопки \"Fix with AI\"",
        "Интеллектуальное предсказание следующего редактирования (Cursor Tab) на основе курсора"
      ],
      "en": [
        "Multi-file Composer applying coordinated edits and scaffolding across entire directory trees",
        "Deep whole-codebase vector embeddings ensuring context-aware implementations",
        "Terminal execution and autonomous debugging looping through compiler error stacks",
        "Copilot++ predictive multi-line autocomplete anticipating your next architectural edit"
      ]
    },
    "bestUseCases": {
      "uz": [
        "To'liq dasturiy ilovalarni tezkor ishlab chiqish",
        "Yirik kod bazalarini o'rganish va refaktoring",
        "Full-stack veb va mobil dasturlash"
      ],
      "tk": [
        "Programmalary çalt döretmek",
        "Uly kodlary refaktoring etmek",
        "Full-stack taslamalar"
      ],
      "ru": [
        "Сверхбыстрая разработка стартапов и полнофункциональных веб-приложений",
        "Рефакторинг и модернизация устаревших кодовых баз",
        "Повседневное профессиональное программирование на любом стеке"
      ],
      "en": [
        "Rapid greenfield application prototyping and feature expansion",
        "Massive codebase refactoring and modernization",
        "Daily high-throughput full-stack software development"
      ]
    },
    "limitations": {
      "uz": [
        "Pro obunasiz so'rovlar chegarasi tez tugashi mumkin"
      ],
      "tk": [
        "Mugt çäklendirmeler bar"
      ],
      "ru": [
        "Бесплатный тариф ограничен по числу быстрых запросов в месяц"
      ],
      "en": [
        "Fast frontier model requests are capped on free tier accounts"
      ]
    },
    "usageTips": {
      "uz": "Ctrl+L orqali chatni ochib `@codebase Loyihamizda autentifikatsiya qanday ishlaydi?` deb so'rang — Cursor butun kodni ko'rib tushuntirib beradi.",
      "tk": "@codebase bilen bütin taslamaňyz barada sorag beriň.",
      "ru": "Используйте @codebase в чате для вопросов по архитектуре: \"@codebase как устроена авторизация?\".",
      "en": "Type @codebase in the chat panel to ask structural architecture questions across all files."
    },
    "scores": {
      "reasoning": 96,
      "coding": 99,
      "creativity": 88,
      "speed": 95,
      "multimodal": 84,
      "uzbekAndMultilingual": 88,
      "costEfficiency": 88
    }
  }
];

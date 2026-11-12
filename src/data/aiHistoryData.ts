import { TimelineItem, LocalizedText } from '../types';

export const aiTimeline: TimelineItem[] = [
  {
    id: 'turing-1950',
    year: '1950',
    eraKey: 'symbolic',
    accentColor: '#6366f1',
    title: {
      uz: "Alan Tyuring va «Mashinalar fikrlay oladimi?»",
      tk: 'Alan Týuring we «Maşynlar pikirlenip bilýärmi?»',
      ru: 'Алан Тьюринг и вопрос «Могут ли машины мыслить?»',
      en: 'Alan Turing & "Can Machines Think?"',
    },
    summary: {
      uz: "AI falsafasi va Tyuring testi yaratildi — mashinaning aqlini inson suhbatdoshi bilan farqlab bo'lmasligi mezoni qo'yildi.",
      tk: 'AI filosofiýasy we Týuring synagy döredildi — maşynyň aňyny adamdan tapawutlandyryp bolmazlygy ölçegi goýuldy.',
      ru: 'Сформулирован знаменитый тест Тьюринга: критерий разумности машины в текстовом диалоге с человеком.',
      en: 'Introduced the Turing Test—a benchmark for machine intelligence based on indistinguishable human-like conversation.',
    },
    details: {
      uz: "1950-yilda Alan Tyuring 'Computing Machinery and Intelligence' maqolasini nashr etdi. Unda mashinalar o'rganishi mumkinligi (o'sha paytda 'child machine' g'oyasi) ilk bor ilmiy asoslab berildi.",
      tk: '1950-nji ýylda Alan Týuring özüniň meşhur makalasyny çap etdi we maşynlaryň öwrenip biljekdigini ilkinji gezek ylmy taýdan esaslandyrdy.',
      ru: 'В статье «Вычислительные машины и разум» Тьюринг не только описал тест, но и предсказал машинное обучение — идею обучения «детской машины» на опыте.',
      en: 'In his landmark 1950 paper, Turing proposed the Imitation Game and anticipated machine learning by imagining a "child machine" trained via experience.',
    },
    keyFigures: ['Alan Turing'],
    impact: {
      uz: "Sun'iy intellekt fan sifatida tug'ilishiga turtki bo'ldi.",
      tk: 'Emeli aňyň ylym hökmünde döremegine itergi berdi.',
      ru: 'Заложена философская и научная основа всего направления ИИ.',
      en: 'Sparked the scientific quest to build thinking machines.',
    },
  },
  {
    id: 'dartmouth-1956',
    year: '1956',
    eraKey: 'symbolic',
    accentColor: '#0ea5e9',
    title: {
      uz: "Dartmut konferensiyasi: «Sun'iy Intellekt» atamasi tug'ildi",
      tk: 'Dartmut maslahaty: «Emeli Aň» adalgasynyň döremegi',
      ru: 'Дартмутская конференция: рождение термина «Artificial Intelligence»',
      en: 'Dartmouth Workshop: Coining "Artificial Intelligence"',
    },
    summary: {
      uz: "Jon Makkarti, Marvin Minskiy va Klod Shennon yig'ilib, AI ni alohida ilmiy soha sifatida rasman e'lon qildilar.",
      tk: 'Jon Makkarti, Marwin Minskiý we Klod Şennon ýygnanyp, AI-ny aýratyn ylmy ugur hökmünde resmi yglan etdilar.',
      ru: 'Джон Маккарти, Марвин Минский и Клод Шеннон официально основали ИИ как самостоятельную научную дисциплину.',
      en: 'John McCarthy, Marvin Minsky, and Claude Shannon formally established Artificial Intelligence as an academic field.',
    },
    details: {
      uz: "Ilk yillarda tadqiqotchilar mantiqiy qoidalar (Symbolic AI) yordamida shaxmat o'ynaydigan va matematik teoremalarni isbotlaydigan dasturlar (Logic Theorist, ELIZA) yaratdilar.",
      tk: 'Ilkinji ýyllarda alymlar logiki düzgünler (Symbolic AI) arkaly küşt oýnaýan we teorema subut edýän programmalary döretdilar.',
      ru: 'Первые успехи строились на символьном ИИ (чётких логических правилах) — появились программы для игры в шашки, доказательства теорем и первый чат-бот ELIZA.',
      en: 'Early pioneers focused on Symbolic AI—rule-based logic programs like Logic Theorist and early chatbot ELIZA.',
    },
    keyFigures: ['John McCarthy', 'Marvin Minsky', 'Claude Shannon', 'Frank Rosenblatt'],
    impact: {
      uz: "Birinchi neyron model — Perseptron (1957) ham aynan shu davrda yaratildi.",
      tk: 'Ilkinji neýron modeli — Perseptron (1957) hem hut şu döwürde döredildi.',
      ru: 'В 1957 году Фрэнк Розенблатт создал Перцептрон — прародителя современных нейросетей.',
      en: 'Also saw the 1957 Perceptron—the earliest ancestor of modern neural networks.',
    },
  },
  {
    id: 'ai-winters-1974',
    year: '1974–1993',
    eraKey: 'winters',
    accentColor: '#64748b',
    title: {
      uz: "AI Qishlari va Ekspert Tizimlar (Backpropagation kashfiyoti)",
      tk: 'AI Gyşlary we Bilermen Ulgamlar (Backpropagation açyşy)',
      ru: '«Зимы ИИ», экспертные системы и метод Backpropagation',
      en: 'AI Winters, Expert Systems & Backpropagation',
    },
    summary: {
      uz: "Kompyuterlar quvvati yetishmasligi sababli moliyalashtirish kamaydi, biroq 1986-yilda neyron tarmoqlarni o'qitish algoritmi (Backpropagation) kashf etildi.",
      tk: 'Kompýuter kuwwatynyň ýetmezçiligi sebäpli maliýeleşdirme azaldy, ýöne 1986-njy ýylda Backpropagation algoritmi açyldy.',
      ru: 'Нехватка вычислительной мощности привела к кризисам («зимам ИИ»), но в 1986 году был популяризован метод обратного распространения ошибки.',
      en: 'Compute limits caused funding freezes ("AI Winters"), yet Hinton and colleagues popularized backpropagation in 1986.',
    },
    details: {
      uz: "Qo'lda yozilgan qoidalarga asoslangan Ekspert Tizimlar katta hajmdagi hayotiy noaniqliklarni hal qila olmadi. Lekin Geoffrey Hinton, Yann LeCun va Yoshua Bengio ko'p qatlamli neyron tarmoqlarni o'qitish matematik asoslarini yaratdilar.",
      tk: 'El bilen ýazylan düzgünli ulgamlar çylşyrymly meseleleri çözüp bilmedi. Emma Geoffrey Hinton we Yann LeCun köp gatlakly neýron torlarynyň matematiki esasyny goýdular.',
      ru: 'Жёсткие «если-то» правила не справлялись с реальным миром. В это же время Джеффри Хинтон и Ян Лекун заложили математику глубоких нейросетей.',
      en: 'Hand-coded Expert Systems proved brittle, while Geoffrey Hinton and Yann LeCun quietly laid the math for multi-layer neural learning.',
    },
    keyFigures: ['Geoffrey Hinton', 'Yann LeCun', 'Yoshua Bengio'],
    impact: {
      uz: "Kelajakdagi Chuqur O'rganish (Deep Learning) inqilobining matematik poydevori qurildi.",
      tk: 'Geljekki Çuňňur Öwreniş (Deep Learning) öwrülişiginiň matematiki binýady guruldy.',
      ru: 'Сформировался математический аппарат, на котором работают нейросети сегодня.',
      en: 'Created the backpropagation engine that powers nearly all modern neural training.',
    },
  },
  {
    id: 'ml-deepblue-1997',
    year: '1997–2011',
    eraKey: 'ml',
    accentColor: '#10b981',
    title: {
      uz: "Mashinali O'rganish (ML), Deep Blue va IBM Watson",
      tk: 'Maşyn Öwrenişi (ML), Deep Blue we IBM Watson',
      ru: 'Машинное обучение, Deep Blue и победа алгоритмов',
      en: 'Machine Learning, Deep Blue & Data-Driven AI',
    },
    summary: {
      uz: "IBM Deep Blue shaxmat chempioni Garri Kasparovni yutdi; endi AI qoidalarni qo'lda yozish o'rniga ma'lumotlardan o'zi o'rgana boshladi.",
      tk: 'IBM Deep Blue küşt çempiony Garri Kasparowy ýeňdi; AI düzgünleri el bilen ýazmagyň ýerine maglumatlardan özi öwrenip başlady.',
      ru: 'IBM Deep Blue обыграл Гарри Каспарова, а фокус науки сместился от ручных правил к статистическому машинному обучению на больших данных.',
      en: 'IBM’s Deep Blue defeated Garry Kasparov, marking a shift toward statistical Machine Learning fueled by growing web data.',
    },
    details: {
      uz: "2000-yillarda internetdagi millionlab rasmlar va matnlar (ImageNet loyihasi, Fei-Fei Li) paydo bo'ldi. Spam filtrlari, kredit skoringi va tavsiya algoritmlari kundalik hayotga kirdi.",
      tk: '2000-nji ýyllarda internetde millionlarça surat we tekst (ImageNet, Fei-Fei Li) toplandy. Spam süzgüçleri we maslahat algoritmleri ýaýrady.',
      ru: 'Появление интернета и датасета ImageNet (Фей-Фей Ли) дало алгоритмам миллионы примеров. Появились умные спам-фильтры, поиск и рекомендации.',
      en: 'With internet-scale data and Fei-Fei Li’s ImageNet dataset, ML powered search ranking, spam filtering, and recommender systems.',
    },
    keyFigures: ['Fei-Fei Li', 'Andrew Ng', 'Vladimir Vapnik'],
    impact: {
      uz: "Ma'lumotlarga asoslangan AI amaliy biznes va internet gigantlarining asosiy quroliga aylandi.",
      tk: 'Maglumatlara esaslanýan AI işewürligiň we internet ägirtleriniň esasy guralyna öwrüldi.',
      ru: 'Машинное обучение стало стандартом в поисковиках, банках и IT-корпорациях.',
      en: 'Made data-driven Machine Learning essential across search, finance, and e-commerce.',
    },
  },
  {
    id: 'deeplearning-2012',
    year: '2012–2016',
    eraKey: 'deeplearning',
    accentColor: '#f59e0b',
    title: {
      uz: "Chuqur O'rganish (Deep Learning) va AlphaGo g'alabasi",
      tk: 'Çuňňur Öwreniş (Deep Learning) we AlphaGo ýeňşi',
      ru: 'Бум Deep Learning: AlexNet на GPU и триумф AlphaGo',
      en: 'The Deep Learning Boom: AlexNet & AlphaGo',
    },
    summary: {
      uz: "AlexNet GPU videokartalari yordamida rasmlarni tanishda keskin sakrash qildi; 2016-yilda DeepMind AlphaGo Go o'yinida jahon chempionini yengdi.",
      tk: 'AlexNet GPU arkaly suratlary tanamakda uly öňegidişlik etdi; 2016-njy ýylda AlphaGo dünýä çempionyný ýeňdi.',
      ru: 'Нейросеть AlexNet на видеокартах GPU совершила прорыв в распознавании образов, а AlphaGo от DeepMind обыграл чемпиона мира по игре Го.',
      en: 'AlexNet proved GPU-accelerated Deep Learning could crush vision benchmarks, followed by DeepMind’s AlphaGo mastering intuition-heavy Go.',
    },
    details: {
      uz: "NVIDIA GPU chiplari neyron tarmoqlarni o'nlab barobar tez o'qitish imkonini berdi. Convolutional Neural Networks (CNN) kompyuter ko'rishini, Reinforcement Learning esa murakkab strategik o'yinlarni zabt etdi.",
      tk: 'NVIDIA GPU çipleri neýron torlaryny onlarça esse çalt öwretmäge mümkinçilik berdi. CNN we Reinforcement Learning ösdi.',
      ru: 'Графические процессоры NVIDIA позволили обучать глубокие свёрточные сети (CNN), а обучение с подкреплением (RL) научило ИИ интуитивной стратегии в AlphaGo.',
      en: 'NVIDIA GPUs unlocked deep convolutional nets for vision and deep reinforcement learning for superhuman game play and protein science.',
    },
    keyFigures: ['Alex Krizhevsky', 'Ilya Sutskever', 'Demis Hassabis'],
    impact: {
      uz: "AI endi inson ko'zi va qulog'idan tezroq tasvir va ovozni taniy boshladi.",
      tk: 'AI indi adamyň gözünden we gulagyndan çalt surat we ses tanap başlady.',
      ru: 'ИИ впервые превзошёл человека в распознавании изображений и речи.',
      en: 'AI surpassed human benchmarks in image recognition and speech transcription.',
    },
  },
  {
    id: 'transformer-2017',
    year: '2017',
    eraKey: 'transformer',
    accentColor: '#8b5cf6',
    title: {
      uz: "Transformer inqilobi: «Attention Is All You Need»",
      tk: 'Transformer öwrülişigi: «Attention Is All You Need»',
      ru: 'Революция Transformer: статья «Attention Is All You Need»',
      en: 'The Transformer Breakthrough: "Attention Is All You Need"',
    },
    summary: {
      uz: "Google tadqiqotchilari Transformer arxitekturasini yaratdilar — bu bugungi ChatGPT, Claude va Gemini ning yuragi hisoblanadi.",
      tk: 'Google gözlegçileri Transformer arhitekturasyny döretdiler — bu häzirki ChatGPT, Claude we Gemini-niň ýüregidir.',
      ru: 'Исследователи Google представили архитектуру Transformer с механизмом внимания — фундамент всех современных LLM.',
      en: 'Google researchers introduced the Transformer architecture and Self-Attention—the engine behind every modern LLM.',
    },
    details: {
      uz: "Oldingi tarmoqlar matnni so'zma-so'z ketma-ket o'qib, uzun gaplarni unutib qo'yar edi. Transformer esa Self-Attention mexanizmi orqali butun matndagi barcha so'zlarning o'zaro bog'liqligini bir vaqtning o'zida parallel tushunishga imkon berdi.",
      tk: 'Öňki torlar teksti sözme-söz okap, uzyn sözlemleri unudýardy. Transformer bolsa Self-Attention arkaly bütin teksti şol bir wagtda parallel düşünmäge mümkinçilik berdi.',
      ru: 'В отличие от RNN, читавших текст по одному слову, механизм Self-Attention позволил анализировать контекст всех слов одновременно и масштабироваться на терабайты текста.',
      en: 'Unlike sequential RNNs that forgot long contexts, Self-Attention lets models relate every token in a sequence simultaneously, unlocking massive parallel scaling.',
    },
    keyFigures: ['Ashish Vaswani', 'Noam Shazeer', 'Jakob Uszkoreit'],
    impact: {
      uz: "Katta Til Modellari (LLM) va Generativ AI davri boshlandi.",
      tk: 'Uly Dil Modelleri (LLM) we Generatiw AI döwri başlandy.',
      ru: 'Началась эра больших языковых моделей (LLM) и генеративного ИИ.',
      en: 'Ignited the Large Language Model (LLM) and Generative AI revolution.',
    },
  },
  {
    id: 'generative-boom-2022',
    year: '2020–2023',
    eraKey: 'generative',
    accentColor: '#ec4899',
    title: {
      uz: "Generativ AI portlashi: GPT-3, ChatGPT va Diffuziya",
      tk: 'Generatiw AI partlamasy: GPT-3, ChatGPT we Diffuziýa',
      ru: 'Взрыв генеративного ИИ: GPT-3, ChatGPT и диффузионные модели',
      en: 'Generative AI Explosion: ChatGPT & Diffusion Models',
    },
    summary: {
      uz: "ChatGPT 2 oyda 100 million foydalanuvchi to'pladi; Midjourney va Stable Diffusion bir jumladan fotorealistik rasmlar chiza boshladi.",
      tk: 'ChatGPT 2 aýda 100 million ulanyjy toplady; Midjourney bir jümleden suratlar çekip başlady.',
      ru: 'ChatGPT установил мировой рекорд роста, а диффузионные нейросети (Midjourney, DALL-E) научились рисовать по текстовому описанию.',
      en: 'ChatGPT reached 100M users in record time while Diffusion models like Midjourney turned plain text prompts into photorealistic art.',
    },
    details: {
      uz: "RLHF (Inson fikri orqali o'qitish) AI ni xavfsiz, odobli va foydali suhbatdoshga aylantirdi. AI endi faqat ma'lumotni tahlil qilmasdan, yangi matn, kod, rasm va musiqa yaratishni (Generate) boshladi.",
      tk: 'RLHF (Adam pikiri arkaly öwretmek) AI-ny amatly söhbetdeşe öwürdi. AI täze tekst, kod, surat we saz döredip başlady.',
      ru: 'Метод RLHF научил модели точно следовать инструкциям человека. ИИ перешёл от простого анализа данных к полноценному творчеству и генерации кода.',
      en: 'Alignment via RLHF made conversational AI reliable and helpful, shifting AI from analytical classification to creative synthesis.',
    },
    keyFigures: ['OpenAI Team', 'Stability AI', 'Midjourney'],
    impact: {
      uz: "AI laboratoriya devorlaridan chiqib, har bir insonning kundalik yordamchisiga aylandi.",
      tk: 'AI laboratoriýalardan çykyp, her bir adamyň gündelik kömekçisine öwrüldi.',
      ru: 'ИИ вышел из лабораторий и стал массовым инструментом для миллионов людей.',
      en: 'Brought AI into everyday life for students, writers, designers, and engineers.',
    },
  },
  {
    id: 'reasoning-agentic-2026',
    year: '2024–2026',
    eraKey: 'agentic',
    accentColor: '#4f46e5',
    title: {
      uz: "Mantiqiy Fikrlash (Reasoning), Multimodal va AI Agentlar",
      tk: 'Logiki Pikirlenme (Reasoning), Multimodal we AI Agentler',
      ru: 'Эпоха рассуждающих моделей, мультимодальности и ИИ-агентов',
      en: 'Reasoning Models, Native Multimodality & AI Agents',
    },
    summary: {
      uz: "Zamonaviy modellar (o3, Gemini 2.5/3, Claude 4, DeepSeek R1) javob berishdan oldin fikrlaydi, video/ovozni birga tushunadi va mustaqil vazifalarni bajaradi.",
      tk: 'Häzirki zaman modelleri jogap bermezden öň pikirlenýär, wideo/sesi bilelikde düşünýär we özbaşdak işleri ýerine ýetirýär.',
      ru: 'Новейшие модели (o3, Gemini, Claude, DeepSeek R1) обдумывают сложные задачи по шагам, работают с видео и аудио в реальном времени и действуют как агенты.',
      en: 'Modern frontier models think step-by-step before answering, seamlessly process text/audio/video together, and autonomously execute multi-step workflows.',
    },
    details: {
      uz: "Test-time compute (javob paytida o'ylash) tufayli AI murakkab olimpiada matematikasi va butun dasturiy loyihalarni mustaqil yecha olmoqda. Video modellari (Sora, Veo 3) esa kino darajasidagi videolarni soniyalarda yaratmoqda.",
      tk: 'Test-time compute arkaly AI çylşyrymly matematika we uly programma taslamalaryny çözýär. Wideo modelleri (Sora, Veo 3) kino derejesinde wideo döredýär.',
      ru: 'Механизм «внутреннего рассуждения» позволяет решать олимпиадные задачи и писать целые проекты, а видеомодели (Veo, Sora) генерируют реалистичные ролики со звуком.',
      en: 'Test-time reasoning unlocks PhD-level science and autonomous software engineering, while multimodal engines generate synchronized 4K video and audio.',
    },
    keyFigures: ['OpenAI', 'Google DeepMind', 'Anthropic', 'DeepSeek'],
    impact: {
      uz: "AI oddiy chatbotdan haqiqiy raqamli hamkorga va tadqiqotchiga aylandi.",
      tk: 'AI ýönekeý çattbotdan hakyky sanly hyzmatdaşa öwrüldi.',
      ru: 'ИИ превратился из простого чат-бота в полноценного автономного коллегу.',
      en: 'Transformed AI from reactive chatbots into autonomous reasoning collaborators.',
    },
  },
];

export interface AITypeCard {
  id: string;
  badge: string;
  color: string;
  title: LocalizedText;
  description: LocalizedText;
  status: LocalizedText;
}

export const aiTypes: AITypeCard[] = [
  {
    id: 'ani',
    badge: 'ANI • Narrow AI',
    color: '#0ea5e9',
    title: {
      uz: "Tor Sun'iy Intellekt (Artificial Narrow Intelligence)",
      tk: 'Dar Emeli Aň (Artificial Narrow Intelligence)',
      ru: 'Узкий ИИ (Artificial Narrow Intelligence)',
      en: 'Artificial Narrow Intelligence (ANI)',
    },
    description: {
      uz: "Muayyan bir yoki bir nechta vazifani (matn yozish, shaxmat o'ynash, rasm chizish, yuzni tanish) inson darajasida yoki undan tez bajaradigan AI. Bugungi barcha mavjud AI lar shu turga kiradi.",
      tk: 'Belli bir işi (tekst ýazmak, küşt oýnamak, surat çekmek) adam derejesinde ýa-da has çalt ýerine ýetirýän AI. Häzirki ähli AI-lar şu görnüşe degişli.',
      ru: 'ИИ, специализирующийся на конкретных задачах: генерация текста, кода, изображений, перевод или вождение авто. Все современные модели относятся к ANI.',
      en: 'AI designed to excel at specific tasks—writing, coding, image recognition, translation, or chess. All current AI systems belong to this tier.',
    },
    status: {
      uz: 'Hozir mavjud (Faol foydalaniladi)',
      tk: 'Häzir bar (Işjeň ulanylýar)',
      ru: 'Существует сейчас (Активно используется)',
      en: 'Exists today (Widespread)',
    },
  },
  {
    id: 'agi',
    badge: 'AGI • General AI',
    color: '#6366f1',
    title: {
      uz: "Umumiy Sun'iy Intellekt (Artificial General Intelligence)",
      tk: 'Umumy Emeli Aň (Artificial General Intelligence)',
      ru: 'Общий ИИ (Artificial General Intelligence)',
      en: 'Artificial General Intelligence (AGI)',
    },
    description: {
      uz: "Inson aqli kabi har qanday intellektual vazifani tushunadigan, o'zi mustaqil yangi ko'nikmalarni o'rganadigan va barcha sohalarda fikrlay oladigan nazariy daraja.",
      tk: 'Adam aňy ýaly islendik akyl işine düşünýän, özbaşdak täze endikleri öwrenýän we ähli ugurlarda pikirlenip bilýän dereje.',
      ru: 'Гипотетический ИИ, способный обучаться, рассуждать и решать любые интеллектуальные задачи на уровне человека во всех сферах.',
      en: 'Theoretical AI matching human cognitive flexibility—able to learn, reason, and transfer knowledge across any domain.',
    },
    status: {
      uz: 'Tadqiqot bosqichida (Maqsad)',
      tk: 'Gözleg tapgyrynda (Maksat)',
      ru: 'В стадии активных исследований',
      en: 'Active research frontier',
    },
  },
  {
    id: 'asi',
    badge: 'ASI • Superintelligence',
    color: '#8b5cf6',
    title: {
      uz: "Superintellekt (Artificial Superintelligence)",
      tk: 'Superintellekt (Artificial Superintelligence)',
      ru: 'Суперинтеллект (Artificial Superintelligence)',
      en: 'Artificial Superintelligence (ASI)',
    },
    description: {
      uz: "Barcha insoniyatning jami aqlidan ham minglab barobar ustun bo'lgan, yangi ilmiy qonunlarni o'zi kashf eta oladigan kelajak konsepsiyasi.",
      tk: 'Bütin adamzadyň umumy aňyndan hem müňlerçe esse ýokary bolan, täze ylmy kanunlary özi açyp bilýän geljek konsepsiýasy.',
      ru: 'Концепция ИИ, превосходящего совокупный интеллект всего человечества в науке, творчестве и стратегии.',
      en: 'A hypothetical future stage where machine intelligence vastly exceeds the combined cognitive capacity of all humanity.',
    },
    status: {
      uz: 'Kelajak nazariyasi',
      tk: 'Geljek nazariýasy',
      ru: 'Теоретическая концепция будущего',
      en: 'Theoretical future concept',
    },
  },
];

export interface LLMPipelineStep {
  step: number;
  code: string;
  color: string;
  title: LocalizedText;
  description: LocalizedText;
  example: string;
}

export const llmPipelineSteps: LLMPipelineStep[] = [
  {
    step: 1,
    code: 'Tokenization',
    color: '#0ea5e9',
    title: {
      uz: '1. Tokenizatsiya (Matnni bo‘laklash)',
      tk: '1. Tokenizasiýa (Teksti böleklere bölmek)',
      ru: '1. Токенизация (Разбиение текста)',
      en: '1. Tokenization',
    },
    description: {
      uz: "Siz yozgan gap so'z va bo'g'inlarga (tokenlarga) ajratiladi hamda har bir token raqamli ID ga aylantiriladi.",
      tk: 'Ýazan sözlemiňiz böleklere (tokenlere) bölünýär we her token sanly ID-ä öwrülýär.',
      ru: 'Ваш текст разбивается на смысловые фрагменты (токены), и каждому присваивается числовой код.',
      en: 'Your text prompt is split into sub-word chunks called tokens and converted into numeric IDs.',
    },
    example: '"Salom AI" → [1842, 415, 19201]',
  },
  {
    step: 2,
    code: 'Embeddings',
    color: '#6366f1',
    title: {
      uz: '2. Vektorlashtirish (Embeddings)',
      tk: '2. Wektorlaşdyrmak (Embeddings)',
      ru: '2. Векторные представления (Embeddings)',
      en: '2. Vector Embeddings',
    },
    description: {
      uz: "Har bir raqam ko'p o'lchamli ma'no fazosiga joylashtiriladi. Masalan, 'qirol' va 'malika' vektorlari bir-biriga yaqin joylashadi.",
      tk: 'Her san köp ölçegli many giňişligine ýerleşdirilýär. Meňzeş sözler biri-birine ýakyn durýar.',
      ru: 'Токены превращаются в векторы в многомерном пространстве смыслов, где близкие понятия находятся рядом.',
      en: 'Each token ID is mapped into a high-dimensional semantic space where related concepts sit close together.',
    },
    example: 'AI → [0.82, -0.14, 0.91, ... 4096 dims]',
  },
  {
    step: 3,
    code: 'Self-Attention',
    color: '#8b5cf6',
    title: {
      uz: '3. Diqqat mexanizmi (Transformer Attention)',
      tk: '3. Üns mehanizmi (Transformer Attention)',
      ru: '3. Механизм внимания (Self-Attention)',
      en: '3. Transformer Self-Attention',
    },
    description: {
      uz: "Neyron tarmoq qatlamlarida har bir so'z gapdagi boshqa barcha so'zlar bilan aloqasini tekshirib, kontekst va asl ma'noni tushunadi.",
      tk: 'Neýron tor gatlaklarynda her söz sözlemdäki beýleki sözler bilen baglanyşygyny barlap, kontekste düşünýär.',
      ru: 'Слои Transformer сопоставляют каждое слово со всеми остальными словами в запросе, улавливая точный контекст.',
      en: 'Attention heads weigh how every token relates to every other token simultaneously to grasp full context and nuance.',
    },
    example: 'Context weight("bank" ↔ "pul" = 0.94)',
  },
  {
    step: 4,
    code: 'Inference',
    color: '#10b981',
    title: {
      uz: '4. Fikrlash va Keyingi Tokenni Bashorat Qilish',
      tk: '4. Pikirlenme we Indiki Tokeni Çaklamak',
      ru: '4. Рассуждение и генерация ответа',
      en: '4. Reasoning & Next-Token Prediction',
    },
    description: {
      uz: "Model milliardlab parametrlar asosida eng mantiqiy va to'g'ri keyingi so'zni ketma-ket tanlaydi; Reasoning modellari esa avval ichki fikr zanjirini tuzadi.",
      tk: 'Model milliardlarça parametr esasynda iň dogry indiki sözi saýlaýar; Reasoning modelleri bolsa ilki içki pikir zynjyryny gurýar.',
      ru: 'Модель по одному предсказывает наиболее точные следующие токены, а Reasoning-модели предварительно выстраивают цепочку логических шагов.',
      en: 'The model computes probability distributions to generate the sharpest next token—with reasoning models planning internal steps first.',
    },
    example: 'P("Javob:") = 98.4% → Streaming...',
  },
];


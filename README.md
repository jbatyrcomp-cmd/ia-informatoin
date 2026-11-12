# oybekova.uz — IT va Sun'iy Intellekt 3D Bilim Portali

**oybekova.uz** — Axborot Texnologiyalari (IT) tarixi, sohalari, ishlash tamoyillari hamda Sun'iy Intellekt (AI) tarixi, zamonaviy AI vositalari va modellarini chuqur o'rganish, solishtirish va sinash uchun mo'ljallangan zamonaviy 3D interaktiv veb-portal.

Sayt **Yorug' (Light) minimalist Apple/Stripe** uslubida, shaffof oynasimon (glassmorphism) kartalar, interaktiv 3D WebGL (Three.js) sahnalari va to'liq 4 tilli (O'zbekcha, Türkmençe, Русский, English) tizimda qurilgan.

---

## 🌟 Asosiy Imkoniyatlar va Bo'limlar

1. **Bosh Sahifa (3D Hub):**
   - Markaziy interaktiv 3D neyron kristall va kiber-halqalar (sichqoncha bilan 360° aylantirish mumkin).
   - 4 ta asosiy yo'nalish kartalari.
   - 2025–2026 yillardagi eng mashhur AI modellari ko'rgazmasi.
   - **"Qaysi AI menga mos?"** interaktiv 4 bosqichli maslahatchi tizimi.

2. **IT Dunyosi (Tarixi, Turlari, Ishlashi):**
   - **Tarix:** 1837-yildagi Charlz Bebbij va Ada Lavleysdan tortib, Tyuring mashinasi, tranzistor, shaxsiy kompyuterlar, internet va bulutli davrgacha.
   - **Turlari:** Dasturlash (Software Engineering), Data Science & AI, Cloud & DevOps, Kiberxavfsizlik, Tarmoqlar & Hardware, UI/UX Dizayn.
   - **Qanday ishlaydi? (3D Tizim):** Kompyuter va internetning 5 qatlamli interaktiv 3D arxitekturasi (Hardware, OS/Kernel, Code/Runtime, TCP/IP & Network, Cloud/AI).

3. **AI Tarixi va Yaralishi:**
   - 1950 Tyuring testi, 1956 Dartmut, AI Qishlari, Mashinali O'rganish (ML), 2012 Chuqur O'rganish (Deep Learning), 2017 Transformer inqilobi, 2022 Generativ portlash va 2024–2026 Mantiqiy (Reasoning) AI modellari.
   - **Interaktiv 3D Neyron Tarmoq:** Davrlar tanlanganda neyron to'rning qatlamlari va bog'lanishlari dinamik o'zgaradi.
   - AI darajalari (ANI, AGI, ASI) va Katta Til Modellari (LLM) qanday ishlashi konveyeri (Tokenization -> Embeddings -> Attention -> Inference).

4. **Barcha AI Vositalari va Modellari (Katalog):**
   - 14+ zamonaviy flagman modellar: **OpenAI GPT-5/o3, Claude 4/3.7 Sonnet, Google Gemini 2.5 Pro, DeepSeek R1/V3, xAI Grok 3, Meta Llama 4, Alibaba Qwen 3, Mistral Large 2, Cursor AI, GitHub Copilot, Midjourney v7, FLUX.1 Pro, GPT Image, Google Veo 3, Sora, Runway Gen-4, ElevenLabs, Suno AI, Perplexity AI, Google NotebookLM**.
   - Qidiruv, toifa filtrlari (Matn/LLM, Kodlash, Rasm, Video, Audio, Tadqiqot) va narx filtri (Bepul, Freemium, Pullik, Open Source).
   - Har bir modelning to'liq imkoniyatlari, 7 ta mezonli baholash ballari, kamchiliklari va foydalanish sirlari ko'rsatilgan modal oyna.

5. **2 Modelni Solishtirish (VS Rejimi) va AI Tanlash:**
   - Istalgan 2 ta modelni yonma-yon tanlash va o'rnini almashtirish.
   - **7 mezonli 360° Radar Grafiki:** Mantiq va tahlil, Dasturlash, Kreativlik, Tezlik, Multimodallik, O'zbek va ko'p tillilik, Narx/Sifat.
   - Texnik parametrlar va amaliy cheklovlar taqqoslash jadvali.
   - G'oliblik va umumiy xulosa.
   - O'z vazifangizga qarab AI tanlab beruvchi 4 bosqichli maslahatchi (Quiz).

6. **Loyiha haqida va Muallif:**
   - oybekova.uz missiyasi, sayt texnologiyalari va taklif/savol yuborish shakli.

---

## 🛠 Texnologik Stek

- **Frontend kutubxonasi:** React 18 (TypeScript)
- **Yig'uvchi (Bundler):** Vite 6
- **3D Grafika:** Three.js + React Three Fiber (`@react-three/fiber`) + Drei (`@react-three/drei`)
- **Stil va Dizayn:** Tailwind CSS (Glassmorphism & Apple-style Light Design)
- **Ikonkalar:** Lucide React
- **Ko'p tillilik (i18n):** Maxsus TypeScript i18n tizimi (O'zbek, Turkman, Rus, Ingliz)

---

## 🚀 Loyihani Ishga Tushirish

### 1. Dasturni o'rnatish
Agar dastlabki paketlar o'rnatilmagan bo'lsa:
```bash
npm install
```

### 2. Dasturchi rejimida ishga tushirish (Local Dev Server)
```bash
npm run dev
```
Terminalda `http://localhost:5173/` manzili ochiladi. Brauzeringizda ushbu manzilga kiring.

### 3. Production uchun build qilish
```bash
npm run build
```
Loyihaning tayyor statik fayllari `dist/` papkasida hosil bo'ladi.

---

## 🌐 oybekova.uz Domeniga Joylashtirish (Deploy)

Sayt 100% frontend SPA (Single Page Application) bo'lgani sababli uni istalgan hostingga 1 daqiqada joylashtirish mumkin:

### Usul 1: Vercel yoki Netlify (Tavsiya etiladi - Bepul va Tezkor)
1. Loyihani GitHub repozitoriyingizga push qiling.
2. [Vercel](https://vercel.com) yoki [Netlify](https://netlify.com) ga kiring va GitHub dagi ushbu repozitoriyani tanlang.
3. Sozlamalarda Domen bo'limiga o'tib, `oybekova.uz` domenini ulang (DNS ga CNAME yoki A yozuvini kiritasiz).

### Usul 2: Oddiy Web Hosting (cPanel / Apache / Nginx)
1. `npm run build` buyrug'ini bering.
2. `dist/` papkasi ichidagi barcha fayllarni (`index.html`, `assets/`, va h.k.) hostingingizning `public_html` (yoki oybekova.uz ga tegishli papkaga) yuklang.
3. Sayt zudlik bilan ishga tushadi!

---

## ⚙️ Muallif va Sozlamalarni O'zgartirish

Sayt egasining ismi, email manzili, Telegram va GitHub havolalarini yangilash uchun quyidagi faylni oching:
`src/data/siteConfig.ts`

U yerdagi ma'lumotlarni o'zingiznikiga almashtirishingiz kifoya:
```typescript
export const siteConfig = {
  domain: 'oybekova.uz',
  authorPlaceholder: {
    name: 'Ismingiz',
    role: { ... },
    email: 'info@oybekova.uz',
    telegram: 'https://t.me/profilingiz',
    github: 'https://github.com/profilingiz',
  }
};
```

---

## 📄 Litsenziya
Ushbu loyiha ochiq ta'lim va axborot maqsadlarida yaratilgan.
© 2026 oybekova.uz — Barcha huquqlar himoyalangan.


// src/data/lessons.js
// Content sourced exactly from the uploaded PDF: حساسية_العين.pdf

const LESSONS = [
  // ==========================================
  // LESSON 1 — حساسية العين (Eye Allergy)
  // ==========================================
  {
    id: 1,
    cat: 'medical',
    premium: false,
    icon: '👁️',
    gradient: 'linear-gradient(135deg, #0F172A 0%, #1e3a5f 100%)',
    duration_ar: '٨ دقائق',
    duration_en: '8 minutes',
    duration_es: '8 minutos',
    lectures: 4,
    title: {
      ar: 'حساسية العين',
      en: 'Eye Allergy',
      es: 'Alergia Ocular',
    },
    desc: {
      ar: 'حوار بين طبيب ومريض حول أعراض حساسية العين وأسبابها والعلاج المناسب.',
      en: 'A dialogue between a doctor and patient about eye allergy symptoms, causes and treatment.',
      es: 'Diálogo entre médico y paciente sobre síntomas, causas y tratamiento de la alergia ocular.',
    },
    image: '1.jpg',
    content: {
      // Section 1: Dialogue (from PDF page 1 & 2)
      dialogue: [
        { speaker: 'الطبيب',   text: 'صباح الخير.' },
        { speaker: 'إبراهيم', text: 'صباح الخير دكتور.' },
        { speaker: 'الطبيب',   text: 'ما بها عيناك؟' },
        { speaker: 'إبراهيم', text: 'احمرت منذ يومين، وأشعر بالرغبة في دعكها.' },
        { speaker: 'الطبيب',   text: 'هل هناك إفرازات مخاطية فيها؟' },
        { speaker: 'إبراهيم', text: 'هناك القليل منها.' },
        { speaker: 'الطبيب',   text: 'هل تعاني من الجفاف في عينيك؟' },
        { speaker: 'إبراهيم', text: 'هناك دموع لكنني أشعر بحرقة فيهما.' },
        { speaker: 'الطبيب',   text: 'هل هناك أشجار ومزروعات في بيتك أو في مكان عملك؟' },
        { speaker: 'إبراهيم', text: 'نعم، أنا حارس مزرعة فواكه.' },
        { speaker: 'الطبيب',   text: 'وهل هناك تراب وغبار في المكان؟' },
        { speaker: 'إبراهيم', text: 'طبعا، إنها مزرعة وتتم فيها عمليات تقليب التربة وتسويتها.' },
        { speaker: 'الطبيب',   text: 'لاحظ يا إبراهيم، سأصف لك مضادات الهيستامين للتخفيف من إحساسك بالحكة ولتقليل الدموع، وأصف قطرات الكورتيزون لأن عينيك متورمتان. ويجب أن تضع نظرات شمسية جيدة أثناء العمل وعليك ألا تدعك عينيك، وتنظيفهما يكون بشاش أو قطن طبي. وحتى بعد الشفاء يجب أن تضع كمادات المياه الباردة على عينيك عدة مرات في اليوم لحمايتهما.' },
        { speaker: 'إبراهيم', text: 'شكرا دكتور.' },
        { speaker: 'الطبيب',   text: 'تفضل الوصفة، مع السلامة.' },
      ],

      // Section 2: Comprehension exercises (from PDF page 2 — ثانيا: الفهم)
      exercises: [
        {
          type: 'choice',
          question: 'يعاني إبراهيم من:',
          options: ['المياه الزرقاء', 'الحساسية في العينين ✓', 'انفصال الشبكية'],
          answer: 'الحساسية في العينين',
        },
        {
          type: 'choice',
          question: 'وصف الطبيب لإبراهيم:',
          options: ['دواء واحد', 'دوائين ✓', 'ثلاثة أدوية'],
          answer: 'دوائين',
        },
        {
          type: 'choice',
          question: 'يتم تنظيف العينين بـ:',
          options: ['اليدين', 'قطن أو شاش طبي ✓', 'الفرشاة'],
          answer: 'قطن أو شاش طبي',
        },
        {
          type: 'choice',
          question: 'يعمل إبراهيم في:',
          options: ['مزرعة فواكه ✓', 'مصنع بطاريات', 'ورشة نجارة'],
          answer: 'مزرعة فواكه',
        },
        {
          type: 'fill',
          question: 'من أسباب حساسية العينين...',
          answer: 'الغبار',
        },
        {
          type: 'fill',
          question: 'تفيد مضادات الهيستامين في...',
          answer: 'تخفيف الإحساس بالحكة',
        },
        {
          type: 'fill',
          question: 'وصف الطبيب لإبراهيم قطرات...',
          answer: 'الكورتيزون',
        },
        {
          type: 'fill',
          question: 'لحماية العينين نضع عليهما...',
          answer: 'كمادات المياه الباردة',
        },
      ],

      // Section 3: Eye description images (from PDF page 3)
      eye_descriptions: [
        { text: 'هذه العين تدمع', image: '5.png' },
        { text: 'هذه العين متورمة', image: '6.png' },
        { text: 'هذه العين حمراء', image: '7.png' },
        { text: 'هذه العين مصابة بالمياه البيضاء', image: '8.png' },
      ],

      // Section 4: Vocabulary — Sounds (from PDF page 3 — رابعا: الأصوات)
      vocab: [
        { ar: 'بؤبؤ',             en: 'Pupil' },
        { ar: 'طبيب',             en: 'Doctor' },
        { ar: 'إبرة جراحة',       en: 'Surgical Needle' },
        { ar: 'جهاز باسكال الليزري', en: 'Pascal Laser Device' },
        { ar: 'العصب البصري',     en: 'Optic Nerve' },
        { ar: 'شبكية العين',      en: 'Retina' },
        { ar: 'حاجب',             en: 'Eyebrow' },
        { ar: 'قطرات العين',      en: 'Eye Drops' },
        { ar: 'نظارات طبية',      en: 'Medical Glasses' },
        { ar: 'عدسة',             en: 'Lens / Contact Lens' },
        { ar: 'مرهم',             en: 'Ointment' },
        { ar: 'لوحة فحص الرؤية',  en: 'Vision Test Chart' },
        { ar: 'فحص طبي',          en: 'Medical Examination' },
      ],

      // Full TTS text (the complete lesson Arabic text)
      tts_text: 'حساسية العين. الحوار. الطبيب: صباح الخير. إبراهيم: صباح الخير دكتور. الطبيب: ما بها عيناك؟ إبراهيم: احمرت منذ يومين، وأشعر بالرغبة في دعكها. الطبيب: هل هناك إفرازات مخاطية فيها؟ إبراهيم: هناك القليل منها. الطبيب: هل تعاني من الجفاف في عينيك؟ إبراهيم: هناك دموع لكنني أشعر بحرقة فيهما. الطبيب: هل هناك أشجار ومزروعات في بيتك أو في مكان عملك؟ إبراهيم: نعم، أنا حارس مزرعة فواكه. الطبيب: وهل هناك تراب وغبار في المكان؟ إبراهيم: طبعا، إنها مزرعة وتتم فيها عمليات تقليب التربة وتسويتها. الطبيب: لاحظ يا إبراهيم، سأصف لك مضادات الهيستامين للتخفيف من إحساسك بالحكة ولتقليل الدموع، وأصف قطرات الكورتيزون لأن عينيك متورمتان.',
    },
  },

  // ==========================================
  // LESSON 2 — حرف الباء
  // ==========================================
  {
    id: 2,
    cat: 'sounds',
    premium: false,
    icon: '🔤',
    gradient: 'linear-gradient(135deg, #0c2d5e 0%, #2563EB 100%)',
    duration_ar: '٦ دقائق',
    duration_en: '6 minutes',
    duration_es: '6 minutos',
    lectures: 3,
    title: {
      ar: 'حرف الباء',
      en: 'The Letter Ba (ب)',
      es: 'La Letra Ba (ب)',
    },
    desc: {
      ar: 'تعلم رسم وقراءة حرف الباء في أشكاله المختلفة — أول الكلمة، وسطها، وآخرها.',
      en: 'Learn to write and read the letter Ba (ب) in its different positional forms — initial, medial, and final.',
      es: 'Aprende a escribir y leer la letra Ba (ب) en sus diferentes posiciones — inicial, media y final.',
    },
    image: '2.png',
    content: {
      // Letter forms explanation
      dialogue: [
        { speaker: 'الملاحظة', text: 'حرف الباء هو ثاني حروف الهجاء العربية، ويُكتب بأشكال مختلفة حسب موضعه في الكلمة.' },
        { speaker: 'أول الكلمة', text: 'بَ — مثل: بَيت (بيت)، بَحر (بحر)، بِنت (بنت)' },
        { speaker: 'وسط الكلمة', text: 'ـبـ — مثل: كِتَاب (كتاب)، عَرَب (عرب)، سَبَب (سبب)' },
        { speaker: 'آخر الكلمة', text: 'ـب — مثل: كَلب (كلب)، ذَهب (ذهب)، كِتاب (كتاب)' },
        { speaker: 'الحركات', text: 'بَ (فتحة) — بِ (كسرة) — بُ (ضمة) — بٍ (تنوين كسر) — بٌ (تنوين ضم) — بً (تنوين فتح)' },
      ],

      // Words with Ba from PDF page 4
      exercises: [
        {
          type: 'choice',
          question: 'من الكلمات التي تشتمل على حرف الباء:',
          options: ['خَز فَ', 'طَبل ✓', 'باتنة ✓', 'خُبز ✓', 'طَبل', 'سَرير ✓'],
          answer: 'طَبل، باتنة، خُبز، سَرير، بُلبُل',
        },
        {
          type: 'matching',
          question: 'اربط بسهم بين الحرف والكلمة التي تحتويه:',
          pairs: [
            { letter: 'بَا', word: 'بستان' },
            { letter: 'بَو', word: 'بصل' },
            { letter: 'بِي', word: 'باب' },
            { letter: 'بَ',  word: 'بنت' },
            { letter: 'بٍ',  word: 'كبير' },
            { letter: 'بُو', word: 'بومة' },
          ],
        },
        {
          type: 'text',
          question: 'اكتب حرف الباء على السطر:',
          answer: 'بَ — بِ — بُ — بٍ — بٌ — بً',
        },
        {
          type: 'text',
          question: 'اكتب حرف الباء الذي تشتمل عليه كل كلمة مما يأتي:',
          answer: 'بائع (با) — صنبور (بو) — ربيع (بي) — بيت (بَ) — بندق (بَ) — بداية (بَ)',
        },
        {
          type: 'distinguish',
          question: 'ميّز (الكلمات وحروفها الأولى):',
          items: [
            { word: 'بيض',    start: 'بَ' },
            { word: 'نمل',    start: 'نَ' },
            { word: 'ثعبان',  start: 'ثَا' },
            { word: 'نار',    start: 'نَا' },
            { word: 'دبابير', start: 'يِـ' },
            { word: 'جنين',   start: 'نيـ' },
          ],
        },
      ],

      vocab: [
        { ar: 'بَيت',     en: 'House' },
        { ar: 'بُلبُل',   en: 'Nightingale' },
        { ar: 'بُستان',   en: 'Garden' },
        { ar: 'بَصَل',    en: 'Onion' },
        { ar: 'بِنت',     en: 'Girl' },
        { ar: 'بُومة',    en: 'Owl' },
        { ar: 'رَبيع',    en: 'Spring' },
        { ar: 'بَحر',     en: 'Sea' },
        { ar: 'بَاب',     en: 'Door' },
        { ar: 'كَبير',    en: 'Big / Large' },
        { ar: 'بِدَاية',  en: 'Beginning' },
        { ar: 'بُنْدُق',  en: 'Hazelnut' },
        { ar: 'صَنبُور',  en: 'Faucet / Tap' },
        { ar: 'سَرير',    en: 'Bed' },
        { ar: 'بَائع',    en: 'Seller / Vendor' },
      ],

      tts_text: 'حرف الباء. الباء هو ثاني حروف الهجاء. بيت، بحر، بنت، ربيع، صنبور، بندق. الباء في أول الكلمة: بيت. الباء في وسط الكلمة: كتاب. الباء في آخر الكلمة: كلب.',
    },
  },

  // ==========================================
  // LESSON 3 — المفرد والمثنى
  // ==========================================
  {
    id: 3,
    cat: 'grammar',
    premium: true,
    icon: '📖',
    gradient: 'linear-gradient(135deg, #0f2744 0%, #1d4ed8 100%)',
    duration_ar: '٧ دقائق',
    duration_en: '7 minutes',
    duration_es: '7 minutos',
    lectures: 4,
    title: {
      ar: 'المفرد والمثنى',
      en: 'Singular & Dual (المثنى)',
      es: 'Singular y Dual en Árabe',
    },
    desc: {
      ar: 'تعلم قاعدة المفرد والمثنى في اللغة العربية مع أمثلة تطبيقية من الصور.',
      en: 'Learn the Arabic singular and dual form rules with visual examples and practical exercises.',
      es: 'Aprende las reglas del singular y dual árabe con ejemplos visuales y ejercicios prácticos.',
    },
    image: '3.jpg',
    content: {
      // Rules section (from PDF page 5 — خامسا: الصيغ والتراكيب)
      dialogue: [
        { speaker: 'القاعدة الأساسية', text: 'المثنى يُكوَّن بإضافة (ان) للمفرد المذكر، و(تان) للمفرد المؤنث.' },
        { speaker: 'مثال مذكر ١', text: 'طِفل (مفرد) → طِفلان (مثنى)' },
        { speaker: 'مثال مؤنث ١', text: 'قُبَّعة (مفرد) → قُبَّعتان (مثنى)' },
        { speaker: 'مثال مذكر ٢', text: 'جَمَل (مفرد) → جَمَلان (مثنى)' },
        { speaker: 'مثال مؤنث ٢', text: 'نَجمة (مفرد) → نَجمتان (مثنى)' },
        { speaker: 'ملاحظة', text: 'المثنى يُعرب بالألف والنون في حالة الرفع، وبالياء والنون في حالتَي النصب والجر.' },
      ],

      // Exercises from PDF page 6
      exercises: [
        {
          type: 'matching',
          question: 'التمرين ١: اربط بسهم بين المفرد والمثنى',
          pairs: [
            { singular: 'جسر',    dual: 'جسران' },
            { singular: 'أسد',    dual: 'أسدان' },
            { singular: 'غيمة',   dual: 'غيمتان' },
            { singular: 'فراشة',  dual: 'فراستان' },
            { singular: 'نهر',    dual: 'نهران' },
          ],
        },
        {
          type: 'fill',
          question: 'التمرين ٢: اذكر مفرد كل مثنى مما يلي',
          items: [
            { dual: 'قلمان',   singular: 'قلم' },
            { dual: 'بحران',   singular: 'بحر' },
            { dual: 'ثوبان',   singular: 'ثوب' },
            { dual: 'هاتفان',  singular: 'هاتف' },
            { dual: 'جوربان',  singular: 'جورب' },
          ],
        },
      ],

      // Visual pairs from PDF page 5
      visual_pairs: [
        { singular: 'قبعة',  dual: 'قبعتان',  icon: '🎩' },
        { singular: 'طفل',   dual: 'طفلان',   icon: '👶' },
        { singular: 'جمل',   dual: 'جمالان',  icon: '🐪' },
        { singular: 'نجمة',  dual: 'نجمتان',  icon: '⭐' },
      ],

      vocab: [
        { ar: 'جسر / جسران',   en: 'Bridge / Two Bridges' },
        { ar: 'أسد / أسدان',   en: 'Lion / Two Lions' },
        { ar: 'غيمة / غيمتان', en: 'Cloud / Two Clouds' },
        { ar: 'فراشة / فراستان', en: 'Butterfly / Two Butterflies' },
        { ar: 'نهر / نهران',   en: 'River / Two Rivers' },
        { ar: 'قلم / قلمان',   en: 'Pen / Two Pens' },
        { ar: 'بحر / بحران',   en: 'Sea / Two Seas' },
        { ar: 'ثوب / ثوبان',   en: 'Garment / Two Garments' },
        { ar: 'هاتف / هاتفان', en: 'Phone / Two Phones' },
        { ar: 'جورب / جوربان', en: 'Sock / Two Socks' },
        { ar: 'طفل / طفلان',   en: 'Child / Two Children' },
        { ar: 'نجمة / نجمتان', en: 'Star / Two Stars' },
        { ar: 'قبعة / قبعتان', en: 'Hat / Two Hats' },
        { ar: 'جمل / جمالان',  en: 'Camel / Two Camels' },
      ],

      tts_text: 'المفرد والمثنى. المثنى يُكوَّن بإضافة ان للمفرد المذكر، وتان للمفرد المؤنث. قبعة، قبعتان. طفل، طفلان. جمل، جمالان. نجمة، نجمتان. جسر، جسران. أسد، أسدان. غيمة، غيمتان. فراشة، فراستان. نهر، نهران.',
    },
  },

  // ==========================================
  // LESSON 4 — إثراء المعجم (Medical Vocabulary)
  // ==========================================
  {
    id: 4,
    cat: 'vocab',
    premium: true,
    icon: '🏥',
    gradient: 'linear-gradient(135deg, #122a4e 0%, #06B6D4 100%)',
    duration_ar: '١٠ دقائق',
    duration_en: '10 minutes',
    duration_es: '10 minutos',
    lectures: 5,
    title: {
      ar: 'إثراء المعجم — أدوات طب العيون',
      en: 'Vocabulary Enrichment — Ophthalmology Tools',
      es: 'Enriquecimiento de Vocabulario — Oftalmología',
    },
    desc: {
      ar: 'مفردات طبية أساسية تتعلق بطب العيون: الأدوات، الأجهزة، الوصفات الطبية.',
      en: 'Essential medical vocabulary related to ophthalmology: tools, devices, and prescriptions.',
      es: 'Vocabulario médico esencial relacionado con oftalmología: herramientas, dispositivos y recetas.',
    },
    image: '4.png',
    content: {
      // This section is from PDF page 6 — سادسا: إثراء المعجم
      dialogue: [
        { speaker: 'الوحدة الأولى', text: 'قطرات العين — نظارات طبية — عدسة' },
        { speaker: 'الوحدة الثانية', text: 'مرهم — لوحة فحص الرؤية — فحص طبي' },
        { speaker: 'الوحدة الثالثة', text: 'الأجهزة: جهاز باسكال الليزري — إبرة جراحة — طبيب' },
        { speaker: 'الوحدة الرابعة', text: 'أجزاء العين: بؤبؤ — العصب البصري — شبكية العين — حاجب' },
        { speaker: 'الوحدة الخامسة', text: 'أحوال العين: العين تدمع — العين متورمة — العين حمراء — العين مصابة بالمياه البيضاء' },
      ],

      exercises: [
        {
          type: 'text',
          question: 'ما هي الأدوية التي وصفها الطبيب لإبراهيم في الحوار؟',
          answer: 'مضادات الهيستامين وقطرات الكورتيزون',
        },
        {
          type: 'text',
          question: 'اذكر ثلاثة أجزاء من أجزاء العين وردت في الدرس.',
          answer: 'البؤبؤ — شبكية العين — العصب البصري',
        },
        {
          type: 'text',
          question: 'ما الفرق بين المرهم والقطرات في الاستخدام؟',
          answer: 'المرهم يُوضع على الجفن خارجياً، والقطرات تُوضع داخل العين مباشرة.',
        },
        {
          type: 'text',
          question: 'صف حالة عين إبراهيم كما ورد في الحوار.',
          answer: 'العين حمراء ومتورمة وتدمع مع إحساس بالحرقة والرغبة في الدعك.',
        },
      ],

      vocab: [
        { ar: 'قطرات العين',          en: 'Eye Drops' },
        { ar: 'نظارات طبية',          en: 'Medical Glasses / Spectacles' },
        { ar: 'عدسة لاصقة',          en: 'Contact Lens' },
        { ar: 'مرهم',                 en: 'Ointment / Eye Cream' },
        { ar: 'لوحة فحص الرؤية',      en: 'Vision Test / Eye Chart' },
        { ar: 'فحص طبي',              en: 'Medical Examination' },
        { ar: 'جهاز باسكال الليزري',  en: 'Pascal Laser Device' },
        { ar: 'إبرة جراحة',           en: 'Surgical Needle' },
        { ar: 'طبيب',                 en: 'Doctor / Physician' },
        { ar: 'بؤبؤ',                 en: 'Pupil (of the eye)' },
        { ar: 'العصب البصري',         en: 'Optic Nerve' },
        { ar: 'شبكية العين',          en: 'Retina' },
        { ar: 'حاجب',                 en: 'Eyebrow' },
        { ar: 'جفن',                  en: 'Eyelid' },
        { ar: 'وصفة طبية',            en: 'Medical Prescription' },
        { ar: 'مضادات الهيستامين',    en: 'Antihistamines' },
        { ar: 'كورتيزون',             en: 'Cortisone / Corticosteroid' },
        { ar: 'كمادات',               en: 'Compresses / Cold Packs' },
      ],

      tts_text: 'إثراء المعجم. أدوات طب العيون. قطرات العين. نظارات طبية. عدسة لاصقة. مرهم. لوحة فحص الرؤية. فحص طبي. جهاز باسكال الليزري. إبرة جراحة. البؤبؤ. العصب البصري. شبكية العين. الحاجب. الجفن. مضادات الهيستامين. الكورتيزون. كمادات الماء البارد.',
    },
  },
];

export default LESSONS;

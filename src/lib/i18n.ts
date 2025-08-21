export const locales = ["en", "ar"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Ghayth Moustapha",
      subtitle:
        "Senior Full-Stack Developer & AI Researcher crafting scalable solutions with React, Microservices, and Machine Learning",
      experience: "7+ Years Experience",
      icpc: "ICPC Regional Finalist",
      masters: "Master's in Big Data",
      hireMe: "Hire Me Now",
      viewGithub: "View GitHub",
    },
    skills: {
      title: "Technical Expertise",
      subtitle: "Delivering enterprise-grade solutions with cutting-edge technologies and proven methodologies",
      fullStack: {
        title: "Full-Stack Development",
        description: "Modern web applications with React ecosystem",
      },
      microservices: {
        title: "Microservices Architecture",
        description: "Scalable distributed systems & multi-tenancy",
      },
      dataEngineering: {
        title: "Data Engineering",
        description: "Big data pipelines & real-time analytics",
      },
      machineLearning: {
        title: "Machine Learning",
        description: "AI models & intelligent data solutions",
      },
    },
    projects: {
      title: "Featured Projects & Demos",
      subtitle: "Real-world applications serving thousands of users with modern React architecture",
      ecommerce: {
        title: "Enterprise E-commerce Platform",
        description: "Full-stack online marketplace with advanced analytics, serving 10K+ daily users",
        button: "View Live Demo",
      },
      conference: {
        title: "Government Conference System",
        description: "Enterprise platform for Iraqi Ministry managing 2000+ users and events",
        button: "Case Study",
      },
      trilux: {
        title: "Trilux LED Microservices",
        description: "Multi-tenant backend powering LED solutions across Germany",
        button: "Architecture Details",
      },
      sehpip: {
        title: "SEHPIP Data Analytics",
        description: "Transportation data pipelines with real-time map matching validation",
        button: "Technical Deep Dive",
      },
      icpcPlatform: {
        title: "ICPC Training Platform",
        description: "React-based tools for competitive programming with algorithm visualization",
        button: "Try Interactive Demo",
      },
      mlDashboard: {
        title: "ML Model Dashboard",
        description: "Interactive platform for machine learning model training and visualization",
        button: "Explore Models",
      },
    },
    about: {
      title: "About Me",
      subtitle: "Passionate about building scalable solutions that make a real impact",
      description1:
        "I'm a passionate technologist with over 7 years of experience in software engineering, specializing in full-stack development, data engineering, and machine learning. Currently working as a Researcher and Developer at Intenta Automotive GmbH in Germany.",
      description2:
        "As an ICPC Regional Finalist and Cybersecurity CTF National Finalist, I thrive on solving complex problems and building scalable systems. I hold a Master's degree in Big Data from HIAST and have extensive experience with microservices and multi-tenancy architectures.",
      currentRole: {
        title: "Current Role",
        description:
          "Researcher & Developer at Intenta Automotive GmbH, developing distributed systems for large-scale, multi-tenant applications across Germany.",
      },
      education: {
        title: "Education",
        description:
          "Master's in Big Data (HIAST, 2023-2025)\nBachelor's in Information System Engineering (SVU, 2016-2022)",
      },
      achievements: {
        title: "Achievements",
        description: "ICPC Regional Finalist (2022-2024)\nExpert on CodeForces\nCybersecurity CTF National Finalist",
      },
    },
    contact: {
      title: "Ready to Build Something Amazing?",
      subtitle:
        "Looking for a senior developer who can deliver enterprise-grade React applications, scalable microservices, or intelligent data solutions? Let's discuss your next project.",
      email: "Ghayth.moustpha@gmail.com",
      linkedin: "Connect on LinkedIn",
      stats: {
        years: "Years Experience",
        projects: "Projects Delivered",
        users: "Users Served",
      },
    },
    footer: {
      text: "© 2024 Ghayth Moustapha. Crafted with React, Vite, and a passion for exceptional user experiences.",
    },
  },
  ar: {
    nav: {
      about: "نبذة عني",
      skills: "المهارات",
      projects: "المشاريع",
      contact: "التواصل",
    },
    hero: {
      title: "غيث مصطفى",
      subtitle:
        "مطور برمجيات متقدم وباحث في الذكاء الاصطناعي متخصص في بناء حلول قابلة للتوسع باستخدام React والخدمات المصغرة والتعلم الآلي",
      experience: "7+ سنوات خبرة",
      icpc: "متأهل إقليمي ICPC",
      masters: "ماجستير في البيانات الضخمة",
      hireMe: "وظفني الآن",
      viewGithub: "عرض GitHub",
    },
    skills: {
      title: "الخبرة التقنية",
      subtitle: "تقديم حلول على مستوى المؤسسات باستخدام التقنيات المتطورة والمنهجيات المثبتة",
      fullStack: {
        title: "تطوير Full-Stack",
        description: "تطبيقات ويب حديثة باستخدام نظام React البيئي",
      },
      microservices: {
        title: "هندسة الخدمات المصغرة",
        description: "أنظمة موزعة قابلة للتوسع ومتعددة المستأجرين",
      },
      dataEngineering: {
        title: "هندسة البيانات",
        description: "خطوط أنابيب البيانات الضخمة والتحليلات في الوقت الفعلي",
      },
      machineLearning: {
        title: "التعلم الآلي",
        description: "نماذج الذكاء الاصطناعي وحلول البيانات الذكية",
      },
    },
    projects: {
      title: "المشاريع والعروض التوضيحية المميزة",
      subtitle: "تطبيقات حقيقية تخدم آلاف المستخدمين بهندسة React الحديثة",
      ecommerce: {
        title: "منصة التجارة الإلكترونية للمؤسسات",
        description: "سوق إلكتروني متكامل مع تحليلات متقدمة، يخدم أكثر من 10 آلاف مستخدم يومياً",
        button: "عرض العرض التوضيحي المباشر",
      },
      conference: {
        title: "نظام المؤتمرات الحكومي",
        description: "منصة مؤسسية للوزارة العراقية تدير أكثر من 2000 مستخدم وفعالية",
        button: "دراسة الحالة",
      },
      trilux: {
        title: "خدمات Trilux LED المصغرة",
        description: "خلفية متعددة المستأجرين تشغل حلول LED عبر ألمانيا",
        button: "تفاصيل الهندسة المعمارية",
      },
      sehpip: {
        title: "تحليلات بيانات SEHPIP",
        description: "خطوط أنابيب بيانات النقل مع التحقق من مطابقة الخرائط في الوقت الفعلي",
        button: "الغوص التقني العميق",
      },
      icpcPlatform: {
        title: "منصة تدريب ICPC",
        description: "أدوات قائمة على React للبرمجة التنافسية مع تصور الخوارزميات",
        button: "جرب العرض التفاعلي",
      },
      mlDashboard: {
        title: "لوحة تحكم نماذج ML",
        description: "منصة تفاعلية لتدريب نماذج التعلم الآلي والتصور",
        button: "استكشف النماذج",
      },
    },
    about: {
      title: "نبذة عني",
      subtitle: "شغوف ببناء حلول قابلة للتوسع تحدث تأثيراً حقيقياً",
      description1:
        "أنا تقني شغوف بأكثر من 7 سنوات من الخبرة في هندسة البرمجيات، متخصص في التطوير الشامل وهندسة البيانات والتعلم الآلي. أعمل حالياً كباحث ومطور في Intenta Automotive GmbH في ألمانيا.",
      description2:
        "كمتأهل إقليمي في ICPC ومتأهل وطني في CTF للأمن السيبراني، أزدهر في حل المشاكل المعقدة وبناء الأنظمة القابلة للتوسع. أحمل درجة الماجستير في البيانات الضخمة من HIAST ولدي خبرة واسعة في الخدمات المصغرة وهندسة متعددة المستأجرين.",
      currentRole: {
        title: "الدور الحالي",
        description:
          "باحث ومطور في Intenta Automotive GmbH، أطور أنظمة موزعة للتطبيقات واسعة النطاق ومتعددة المستأجرين عبر ألمانيا.",
      },
      education: {
        title: "التعليم",
        description: "ماجستير في البيانات الضخمة (HIAST، 2023-2025)\nبكالوريوس في هندسة نظم المعلومات (SVU، 2016-2022)",
      },
      achievements: {
        title: "الإنجازات",
        description: "متأهل إقليمي ICPC (2022-2024)\nخبير في CodeForces\nمتأهل وطني في CTF للأمن السيبراني",
      },
    },
    contact: {
      title: "مستعد لبناء شيء مذهل؟",
      subtitle:
        "تبحث عن مطور متقدم يمكنه تقديم تطبيقات React على مستوى المؤسسات، أو خدمات مصغرة قابلة للتوسع، أو حلول بيانات ذكية؟ دعنا نناقش مشروعك القادم.",
      email: "Ghayth.moustpha@gmail.com",
      linkedin: "تواصل على LinkedIn",
      stats: {
        years: "سنوات خبرة",
        projects: "مشاريع منجزة",
        users: "مستخدمين مخدومين",
      },
    },
    footer: {
      text: "© 2024 غيث مصطفى. مصنوع بـ React و Vite وشغف لتجارب المستخدم الاستثنائية.",
    },
  },
}

export function getTranslations(locale: Locale) {
  return translations[locale] || translations[defaultLocale]
}

/**
 * PORTFOLIO DATA CONFIGURATION
 * =============================================================================
 * Anda dapat mengedit seluruh informasi profil, keahlian, proyek, pengalaman,
 * dan kontak di file ini untuk mempersonalisasi portofolio Anda.
 * =============================================================================
 */

export const portfolioData = {
  // Informasi Profil Utama
  profile: {
    name: "Rizki Arbiansyah",
    title: "Software Engineer / Full Stack Developer",
    availability: "Tersedia untuk Peluang Kerja (Full-time / Remote / Freelance)",
    location: "Indonesia",
    shortBio: "Software Engineer yang berfokus pada pembangunan aplikasi web modern, performa tinggi, dan arsitektur scalable. Berpengalaman dalam ekosistem JavaScript/TypeScript, React, Node.js, dan cloud deployment.",
    aboutNarrative: [
      "Saya adalah seorang software engineer dengan passion kuat dalam membangun produk digital yang memiliki dampak nyata bagi pengguna.",
      "Fokus utama saya adalah menciptakan antarmuka yang intuitif dan responsif, didukung oleh arsitektur backend yang tangguh, clean code, serta praktik engineering modern (CI/CD, automated testing, dan cloud hosting).",
      "Selalu bersemangat untuk belajar teknologi baru, memecahkan masalah kompleks, dan berkolaborasi dalam tim berkecepatan tinggi."
    ],
    resumeUrl: "./cv-rizki-arbiansyah.pdf", // Tautan langsung ke file CV PDF
    socials: {
      github: "https://github.com/greedykid",
      linkedin: "https://linkedin.com/in/",
      email: "rizki.arbiansyah@example.com",
      whatsapp: "https://wa.me/6281234567890",
      telegram: "https://t.me/"
    }
  },

  // Statistik & Milestone Kunci
  stats: [
    { number: "3+", label: "Tahun Pengalaman Rekayasa Perangkat Lunak" },
    { number: "20+", label: "Proyek Aplikasi Selesai Dideploy" },
    { number: "99.9%", label: "Komitmen Kualitas & Uptime Standar Industri" },
    { number: "100%", label: "Kepuasan Klien & Kolaborator Tim" }
  ],

  // Matriks Keahlian (Skills Matrix)
  skillCategories: [
    {
      category: "Frontend Engineering",
      icon: "layout",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3/OKLCH", "Redux / Zustand", "Responsive UI/UX"]
    },
    {
      category: "Backend & APIs",
      icon: "server",
      skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "PostgreSQL", "MongoDB", "Prisma ORM", "JWT & Auth"]
    },
    {
      category: "DevOps, Cloud & Tools",
      icon: "cloud",
      skills: ["Git & GitHub", "GitHub Actions / CI-CD", "Docker", "Vercel / Netlify", "GitHub Pages", "Linux / Shell", "Postman", "Jest / Vitest"]
    },
    {
      category: "Core Methodologies",
      icon: "cpu",
      skills: ["Clean Architecture", "Agile / Scrum", "Performance Optimization", "Web Security Best Practices", "SEO & Web Vitals"]
    }
  ],

  // Daftar Proyek Unggulan (Featured Projects)
  projects: [
    {
      id: "project-1",
      title: "OmniFlow - AI Task & Workflow Automation Platform",
      category: "Full Stack",
      description: "Platform otomasi alur kerja terintegrasi AI untuk meningkatkan produktivitas tim. Menyediakan visual workflow builder, webhook triggers, dan analitik real-time.",
      impact: "Meningkatkan kecepatan eksekusi proses bisnis sebesar 40% dan menghemat ribuan jam kerja manual.",
      tags: ["React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
      demoUrl: "https://github.com/",
      githubUrl: "https://github.com/",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "project-2",
      title: "FinPulse - Modern Financial Analytics Dashboard",
      category: "Frontend",
      description: "Dashboard analitik finansial real-time dengan visualisasi data interaktif, dark/light theme presisi tinggi, dan modul manajemen aset terdesentralisasi.",
      impact: "Mendapatkan rating Lighthouse 98+ pada performa dan aksesibilitas penuh untuk multi-device.",
      tags: ["Next.js", "React", "Chart.js", "OKLCH CSS", "Zustand"],
      demoUrl: "https://github.com/",
      githubUrl: "https://github.com/",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "project-3",
      title: "CloudVault - Secure Encrypted Document Storage",
      category: "Full Stack",
      description: "Aplikasi penyimpanan dokumen cloud berkeamanan tingkat tinggi dengan enkripsi end-to-end (AES-256), multi-factor authentication, dan file sharing granular.",
      impact: "Berhasil mengamankan lebih dari 50,000+ dokumen tanpa downtime dalam fase stress testing.",
      tags: ["React", "Express.js", "Node.js", "MongoDB", "Docker"],
      demoUrl: "https://github.com/",
      githubUrl: "https://github.com/",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "project-4",
      title: "DevPulse - Developer Community & Knowledge Hub",
      category: "Web App",
      description: "Platform komunitas interaktif untuk developer berbagi snippet kode, artikel teknis, dan diskusi arsitektur perangkat lunak.",
      impact: "Mendukung dynamic syntax highlighting, real-time comment threads, dan sistem reputasi.",
      tags: ["React", "Tailwind CSS", "Firebase", "REST API"],
      demoUrl: "https://github.com/",
      githubUrl: "https://github.com/",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Riwayat Pengalaman Kerja
  experiences: [
    {
      role: "Full Stack Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2023 - Sekarang",
      bullets: [
        "Merancang dan mengembangkan arsitektur frontend web menggunakan React & TypeScript dengan standar clean code dan modularitas tinggi.",
        "Mengoptimalkan performa loading aplikasi hingga 45% lebih cepat melalui teknik code splitting, caching, dan lazy loading.",
        "Membangun REST API dan integrasi third-party services yang andal dengan handling error komprehensif.",
        "Berkolaborasi dalam tim lintas fungsi (Product Manager, UI/UX Designer, QA) menggunakan metodologi Agile/Scrum."
      ]
    },
    {
      role: "Frontend Developer",
      company: "Digital Studio Corp.",
      period: "2022 - 2023",
      bullets: [
        "Mengembangkan lebih dari 10+ antarmuka aplikasi web responsif untuk berbagai klien industri dari tahap desain Figma hingga produksi.",
        "Menerapkan standar aksesibilitas web (WCAG) dan SEO best practices untuk memaksimalkan reach organik.",
        "Mengotomasi pipeline testing dan build deployment menggunakan GitHub Actions."
      ]
    }
  ],

  // Riwayat Pendidikan
  education: [
    {
      degree: "Sarjana Komputer / Teknik Informatika (S.Kom)",
      institution: "Universitas / Institut Teknologi",
      period: "2018 - 2022",
      bullets: [
        "Fokus studi pada Rekayasa Perangkat Lunak, Struktur Data, Algoritma, dan Basis Data.",
        "Lulus dengan predikat Sangat Memuaskan / Cum Laude."
      ]
    }
  ],

  // Sertifikasi & Kredensial Profesional
  certificates: [
    {
      title: "Meta Certified Front-End Developer",
      issuer: "Meta / Coursera",
      date: "2023",
      credentialUrl: "https://coursera.org/"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "2023",
      credentialUrl: "https://aws.amazon.com/"
    },
    {
      title: "Full Stack JavaScript Developer Certification",
      issuer: "HackerRank / FreeCodeCamp",
      date: "2022",
      credentialUrl: "https://freecodecamp.org/"
    }
  ]
};

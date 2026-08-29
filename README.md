# 🚀 Developer Career Portfolio

Modern, high-impact developer portfolio website tailored for software engineers and tech professionals looking to land their next job or freelance opportunity. Ready for 1-click deployment on **GitHub Pages**.

---

## ✨ Fitur Utama

- 🎨 **Modern Design & OKLCH Theme System:** Tampilan dark/light mode presisi terinspirasi standar desain industri (Linear, Raycast, Vercel).
- 🧩 **Centralized Data File (`src/data/portfolioData.js`):** Ubah nama, bio, proyek, keahlian, dan kontak Anda di satu file tanpa perlu mengubah kode komponen UI.
- ⚡ **Bento & Filterable Project Showcase:** Showcase proyek dengan Live Demo, Source Code GitHub, dan highlight dampak bisnis/teknis.
- 💼 **Interactive Career & Education Timeline:** Visualisasi riwayat kerja dan studi dengan poin pencapaian terukur.
- 📱 **100% Responsive & Accessible:** Tampilan optimal di perangkat Mobile (375px), Tablet, hingga Desktop Ultra-wide.
- 🚀 **GitHub Pages Ready (Zero Backend):** Sudah dilengkapi workflow otomatis GitHub Actions (`.github/workflows/deploy.yml`).

---

## 🛠️ Cara Menjalankan di Lokal (Local Development)

1. **Jalankan development server:**
   ```bash
   npm run dev
   ```
2. Buka browser pada alamat yang muncul di terminal (biasanya `http://localhost:5173`).

3. **Uji build produksi:**
   ```bash
   npm run build
   ```

---

## 🌐 Cara Deploy ke GitHub Pages (Gratis & Otomatis)

1. Buat repository baru di akun GitHub Anda (misalnya `portofolio` atau `<username>.github.io`).
2. Hubungkan folder ini ke repository GitHub Anda dan lakukan push:
   ```bash
   git init
   git add .
   git commit -m "feat: initial modern portfolio setup"
   git branch -M main
   git remote add origin https://github.com/<username>/portofolio.git
   git push -u origin main
   ```
3. Buka repository di GitHub -> Masuk ke **Settings** -> **Pages**:
   - Di bagian **Build and deployment** > **Source**, pilih **GitHub Actions**.
4. Workflow GitHub Actions akan otomatis melakukan build dan web portofolio Anda langsung aktif di `https://<username>.github.io/portofolio/`!

---

## 📝 Personalisasi Data Profil Anda

Untuk mengganti data menjadi data asli Anda:
1. Buka file [`src/data/portfolioData.js`](file:///c:/ngoding-ngoding/portofolio/src/data/portfolioData.js).
2. Sesuaikan:
   - `profile`: Nama, headline, bio, media sosial, link CV.
   - `stats`: Angka pengalaman dan pencapaian.
   - `skillCategories`: Daftar teknologi yang Anda kuasai.
   - `projects`: Judul proyek, deskripsi, link live demo & GitHub repo.
   - `experiences` & `education`: Riwayat karier dan latar belakang pendidikan.
   - `certificates`: Sertifikasi profesional Anda.

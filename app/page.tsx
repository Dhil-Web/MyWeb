export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center">
      {/* Navigation Bar */}
      <header className="fixed top-4 z-50 w-full max-w-xl px-4">
        <nav className="flex items-center justify-between px-6 py-3 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-lg shadow-black/20">
          <span className="text-sm font-semibold text-white tracking-wide">
            Profil<span className="text-indigo-400">.</span>
          </span>
          <ul className="flex items-center gap-5 text-sm">
            <li>
              <a
                href="#about"
                className="text-slate-300 hover:text-indigo-400 transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#certificates"
                className="text-slate-300 hover:text-indigo-400 transition-colors duration-200"
              >
                Certificates
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-slate-300 hover:text-indigo-400 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Konten Utama */}
      <main className="flex-1 flex flex-col items-center gap-8 p-4 pt-24 pb-12 w-full max-w-lg">
        {/* Section: About */}
        <section
          id="about"
          className="w-full bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm scroll-mt-24"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center text-3xl font-bold text-white shadow-lg mb-4 ring-4 ring-slate-800">
              <span>JD</span>
            </div>

            <h1 className="text-2xl font-bold text-white tracking-tight">[Nama Lengkap]</h1>
            <p className="text-indigo-400 font-medium text-sm mt-1">[Bidang / Minat / Role Utama]</p>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="mt-6 border-t border-slate-800 pt-5 space-y-3 text-sm">
            <div className="flex justify-between items-center py-1">
              <span className="text-slate-400">Pendidikan</span>
              <span className="font-medium text-slate-200">[Jurusan / Institusi]</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-slate-400">Domisili</span>
              <span className="font-medium text-slate-200">[Kota, Negara]</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-slate-400">Fokus Minat</span>
              <span className="font-medium text-slate-200">[Placeholder Skill / Topik]</span>
            </div>
          </div>
        </section>

        {/* Section: Certificates */}
        <section
          id="certificates"
          className="w-full bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm scroll-mt-24"
        >
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            Certificates
          </h2>

          <div className="space-y-3">
            {/* Card Certificate 1 */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
              <div className="flex justify-between items-start">
                <span className="font-medium text-sm text-slate-200">[Nama Sertifikat / Pelatihan 1]</span>
                <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">2026</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">Penerbit: [Organisasi / Platform]</p>
              <a
                href="#"
                className="inline-block mt-3 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Lihat Kredensial &rarr;
              </a>
            </div>

            {/* Card Certificate 2 */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
              <div className="flex justify-between items-start">
                <span className="font-medium text-sm text-slate-200">[Nama Sertifikat / Pelatihan 2]</span>
                <span className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">2025</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">Penerbit: [Organisasi / Platform]</p>
              <a
                href="#"
                className="inline-block mt-3 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Lihat Kredensial &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Section: Contact & Footer */}
        <section
          id="contact"
          className="w-full bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm scroll-mt-24"
        >
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            Contact
          </h2>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:placeholder@email.com"
              className="flex-1 text-center py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-xl font-medium text-sm text-white"
            >
              Email
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 px-4 bg-slate-800 hover:bg-slate-700 transition-colors rounded-xl font-medium text-sm text-slate-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 px-4 bg-slate-800 hover:bg-slate-700 transition-colors rounded-xl font-medium text-sm text-slate-200"
            >
              LinkedIn
            </a>
          </div>

          <footer className="mt-8 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} [Nama Kamu]. Built with Next.js & Deployed on Vercel.
          </footer>
        </section>
      </main>
    </div>
  );
}
import { Link } from 'react-router-dom';
import Siswa from '../components/Siswa';
import StudentCard from '../components/StudentCard';
import { experienceCategories, portfolioFlow } from '../data/portfolioData';

function Home() {
  const requirements = [
    'Home, Experience (CRUD), Project, dan About sudah terhubung dengan routing.',
    'CRUD digunakan untuk mengelola pengalaman PKL, Freelance, Lomba, Ekstrakurikuler, dan Project.',
    'Styling memadukan Bootstrap dan CSS kustom agar portfolio terlihat rapi.',
    'API ditampilkan pada halaman About sebagai contoh integrasi data eksternal.',
    'Project siap untuk dideploy ke Vercel atau Netlify.',
  ];

  return (
    <main className="main-content">
      <div className="container">
        <section className="hero">
          <p className="eyebrow">Portfolio Siswa</p>
          <h2>Portfolio Pengalaman dan Project</h2>
          <Siswa nama="Muhammad Dinar Rizqi Rahmatdhany" kelas="XI RPL 2" />
          <div className="hero-actions">
            <Link to="/experience" className="btn-primary btn-large">
              Kelola Experience
            </Link>
            <Link to="/project" className="btn btn-outline-light btn-large">
              Lihat Project
            </Link>
          </div>
        </section>

        <section className="section">
          <div className="feature-card">
            <h2 className="mb-3">Profil Singkat</h2>
            <Siswa nama="Muhammad Dinar Rizqi Rahmatdhany" kelas="XI RPL 2" />
            <p className="section-intro mb-0">
              Setiap isi portfolio di halaman ini dibuat menyambung dengan data pada halaman
              Experience, sehingga pengunjung bisa melihat alur pengalaman sampai hasil karya.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <h2>Alur Isi Portfolio</h2>
            <p className="section-intro">
              Bagian ini mengikuti kategori yang sama dengan Experience agar isi portfolio
              terasa konsisten dan mudah dipresentasikan.
            </p>
          </div>
          <div className="student-grid">
            {portfolioFlow.map((item) => (
              <StudentCard
                key={item.title}
                title={item.title}
                category={item.category}
                tools={item.tools}
                highlight={item.highlight}
              />
            ))}
          </div>
        </section>

        <section className="section counter-section">
          <h2>Kategori Experience</h2>
          <p className="section-intro">
            Semua kategori di bawah ini tersedia di halaman Experience dan menjadi dasar isi
            seluruh portfolio.
          </p>
          <div className="checklist-grid mb-5">
            {experienceCategories.map((item) => (
              <div key={item} className="checklist-item">
                {item}
              </div>
            ))}
          </div>

          <h2>Checklist LKPD</h2>
          <p className="section-intro">
            Bagian ini merangkum fitur utama yang wajib ada pada project portfolio siswa.
          </p>
          <div className="checklist-grid">
            {requirements.map((item) => (
              <div key={item} className="checklist-item">
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;

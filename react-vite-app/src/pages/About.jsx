import { useEffect, useState } from 'react';
import { experienceCategories } from '../data/portfolioData';

function About() {
  const [apiPosts, setApiPosts] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let isMounted = true;

    async function loadApiSample() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
        const data = await response.json();

        if (!isMounted) {
          return;
        }

        setApiPosts(data);
        setStatus('success');
      } catch (error) {
        if (!isMounted) {
          return;
        }

        setStatus('error');
      }
    }

    loadApiSample();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="main-content">
      <div className="container">
        <section className="section pt-5">
          <div className="row g-4 align-items-start">
            <div className="col-lg-6">
              <div className="card h-100">
                <h1 className="card-title">About</h1>
                <p>
                  Saya adalah siswa RPL yang sedang menyusun portfolio berbasis React untuk
                  menampilkan pengalaman, project, dan hasil belajar. Seluruh isi portfolio ini
                  disusun agar menyambung dengan data pada halaman Experience.
                </p>
                <ul className="about-list">
                  <li>Nama: Muhammad Dinar Rizqi Rahmatdhany Delapan Belas</li>
                  <li>Kelas: XI RPL 2</li>
                  <li>Fokus: Frontend development dan pengembangan UI</li>
                  <li>Tools: React, Vite, JavaScript, Bootstrap, CSS</li>
                  <li>Kategori utama portfolio: {experienceCategories.join(', ')}</li>
                  <li>Target deploy: Vercel atau Netlify</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card h-100">
                <h2 className="card-title">Demo Integrasi API</h2>
                <p className="section-intro">
                  Bagian ini mengambil data dari API publik agar portfolio yang berawal dari
                  Experience juga memenuhi requirement penggunaan API.
                </p>

                {status === 'loading' ? <p>Memuat data API...</p> : null}
                {status === 'error' ? (
                  <p>Data API gagal dimuat. Coba jalankan kembali saat koneksi tersedia.</p>
                ) : null}

                {status === 'success' ? (
                  <div className="api-list">
                    {apiPosts.map((post) => (
                      <article key={post.id} className="api-item">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                      </article>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;

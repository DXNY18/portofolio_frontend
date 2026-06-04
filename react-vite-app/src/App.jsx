import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Experience from './pages/Experience';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Swal from 'sweetalert2';

function App() {
  useEffect(() => {
    Swal.fire({
      title: '<strong>HAI KAMU</strong>',
      icon: 'info',
      html: '<p>Selamat Datang di Portofolio Saya</p>',
      confirmButtonText: 'Lanjut',
      theme: 'dark',
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={
            <div className="main-content">
              <div style={{textAlign: 'center', padding: '150px 20px'}}>
                <h1>404 - Halaman Tidak Ditemukan</h1>
                <Link to="/" className="btn-primary" style={{marginTop: '20px', display: 'inline-block'}}>
                  Kembali ke Home
                </Link>
              </div>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

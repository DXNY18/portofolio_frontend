import { Link } from 'react-router-dom';

const fallbackProjects = [
  {
    id: 'project-1',
    title: 'Website Portfolio Siswa',
    place: 'React + Vite',
    year: '2026',
    description:
      'Project ini menampilkan pengalaman, profil, dan hasil belajar dalam satu website portfolio yang siap dipresentasikan.',
  },
];

function Project() {
  const savedExperiences = localStorage.getItem('portfolio-experiences');

  let projects = fallbackProjects;

  if (savedExperiences) {
    try {
      const parsed = JSON.parse(savedExperiences);
      const projectItems = parsed.filter((item) => item.category === 'Project');

      if (projectItems.length > 0) {
        projects = projectItems;
      }
    } catch {
      projects = fallbackProjects;
    }
  }

  return (
    <main className="main-content">
      <div className="container">
        <section className="section pt-5">
          <div className="section-heading">
            <h1>Project Portfolio</h1>
            <p className="section-intro">
              Halaman ini menampilkan hasil karya yang menjadi bukti lanjutan dari pengalaman
              pada halaman Experience.
            </p>
          </div>

          <div className="row g-4 mb-4">
            <div className="col-md-4">
              <div className="stats-card">
                <span className="stats-label">Total Project</span>
                <strong className="stats-value">{projects.length}</strong>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stats-card">
                <span className="stats-label">Sumber Data</span>
                <strong className="stats-value">Experience CRUD</strong>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stats-card">
                <span className="stats-label">Status</span>
                <strong className="stats-value">Siap Ditampilkan</strong>
              </div>
            </div>
          </div>

          <div className="row">
            {projects.map((project) => (
              <div key={project.id} className="col-md-6 col-xl-4 mb-4">
                <article className="card h-100">
                  <span className="badge text-bg-primary mb-3">Project</span>
                  <h2 className="card-title">{project.title}</h2>
                  <p className="mb-2">
                    <strong>Tempat / tools:</strong> {project.place}
                  </p>
                  <p className="mb-3">
                    <strong>Tahun:</strong> {project.year}
                  </p>
                  <p className="mb-0">{project.description}</p>
                </article>
              </div>
            ))}
          </div>

          <div className="card">
            <h2 className="card-title">Tambah Project Baru</h2>
            <p className="mb-3">
              Untuk menambah project lain, buka halaman Experience lalu pilih kategori
              <strong> Project</strong> saat mengisi form.
            </p>
            <Link to="/experience" className="btn btn-primary">
              Kelola Data Project
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Project;

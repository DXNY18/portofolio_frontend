import { useEffect, useMemo, useState } from 'react';
import ExperienceCard from '../components/ExperienceCard';
import { experienceCategories } from '../data/portfolioData';
import Swal from 'sweetalert2';

const initialExperiences = [
  {
    id: 1,
    title: 'PKL Frontend Developer',
    category: 'PKL',
    place: 'PT Teknologi Nusantara',
    year: '2024',
    description:
      'Membantu membuat tampilan dashboard, memperbaiki komponen, dan belajar alur kerja tim.',
  },
  {
    id: 2,
    title: 'Desain Landing Page Sekolah',
    category: 'Freelance',
    place: 'Client Internal',
    year: '2024',
    description:
      'Mengerjakan landing page sederhana, revisi desain, dan presentasi hasil ke klien.',
  },
];

function Experience() {
  const [form, setForm] = useState({
    title: '',
    category: 'PKL',
    place: '',
    year: '',
    description: '',
  });

  const [experiences, setExperiences] = useState(() => {
    const saved = localStorage.getItem('portfolio-experiences');

    if (!saved) {
      return initialExperiences;
    }

    try {
      return JSON.parse(saved);
    } catch {
      return initialExperiences;
    }
  });

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      'portfolio-experiences',
      JSON.stringify(experiences)
    );
  }, [experiences]);

  const totalByCategory = useMemo(() => {
    return experiences.reduce((acc, item) => {
      acc[item.category] =
        (acc[item.category] || 0) + 1;

      return acc;
    }, {});
  }, [experiences]);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function resetForm() {
    setForm({
      title: '',
      category: 'PKL',
      place: '',
      year: '',
      description: '',
    });

    setEditId(null);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      title: form.title.trim(),
      category: form.category,
      place: form.place.trim(),
      year: form.year.trim(),
      description: form.description.trim(),
    };

    if (
      !payload.title ||
      !payload.place ||
      !payload.year ||
      !payload.description
    ) {

      Swal.fire({
        icon: 'warning',
        title: 'Peringatan',
        text: 'Semua field pengalaman wajib diisi.',
        theme: 'dark',
      });

      return;
    }

    if (editId) {

      setExperiences((current) =>
        current.map((item) =>
          item.id === editId
            ? { ...item, ...payload }
            : item
        )
      );

      Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: 'Data berhasil diupdate',
        theme: 'dark',
      });

      resetForm();

      return;
    }

    setExperiences((current) => [
      ...current,
      {
        id: Date.now(),
        ...payload,
      },
    ]);

    Swal.fire({
      icon: 'success',
      title: 'Berhasil',
      text: 'Experience berhasil ditambahkan',
      theme: 'dark',
    });

    resetForm();
  }

  function handleEdit(experience) {
    setForm({
      title: experience.title,
      category: experience.category,
      place: experience.place,
      year: experience.year,
      description: experience.description,
    });

    setEditId(experience.id);
  }

  function handleDelete(id) {

    Swal.fire({
      title: 'Yakin?',
      text: 'Data pengalaman akan dihapus',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, hapus',
      cancelButtonText: 'Batal',
      theme: 'dark',
    }).then((result) => {

      if (result.isConfirmed) {

        setExperiences((current) =>
          current.filter((item) => item.id !== id)
        );

        Swal.fire({
          icon: 'success',
          title: 'Berhasil',
          text: 'Data berhasil dihapus',
        });
      }

    });
  }

  return (
    <main className="main-content">
      <div className="container">

        <section className="section pt-5">

          <div className="section-heading">
            <h1>Experience CRUD</h1>

            <p className="section-intro">
              Tambahkan pengalaman yang pernah diikuti
              agar portfolio berisi PKL, freelance,
              lomba, ekstrakurikuler, dan project
              secara lengkap.
            </p>
          </div>

          <div className="stats-grid mb-4">

            {experienceCategories.map((item) => (
              <div
                key={item}
                className="stats-card"
              >
                <span className="stats-label">
                  {item}
                </span>

                <strong className="stats-value">
                  {totalByCategory[item] || 0}
                </strong>
              </div>
            ))}

          </div>

          <form
            onSubmit={handleSubmit}
            className="card mb-5"
          >

            <div className="row g-3">

              <div className="col-md-6">
                <label className="form-label">
                  Nama pengalaman
                </label>

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Contoh: PKL Frontend Developer"
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">
                  Kategori
                </label>

                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="form-select"
                >
                  {experienceCategories.map((item) => (
                    <option
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">
                  Tempat / instansi
                </label>

                <input
                  type="text"
                  name="place"
                  value={form.place}
                  onChange={handleChange}
                  placeholder="Contoh: PT ABC"
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">
                  Tahun
                </label>

                <input
                  type="text"
                  name="year"
                  value={form.year}
                  onChange={handleChange}
                  placeholder="Contoh: 2024"
                  className="form-control"
                />
              </div>

              <div className="col-12">
                <label className="form-label">
                  Deskripsi kegiatan
                </label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Tuliskan deskripsi pengalaman"
                  className="form-control"
                  rows="4"
                />
              </div>

            </div>

            <div className="d-flex flex-wrap gap-2 mt-4">

              <button
                type="submit"
                className="btn btn-primary"
              >
                {editId
                  ? 'Update Experience'
                  : 'Tambah Experience'}
              </button>

              {editId ? (
                <button
                  type="button"
                  onClick={resetForm}
                  className="btn btn-secondary"
                >
                  Batal
                </button>
              ) : null}

            </div>

          </form>

          <div className="row">

            {experiences.length > 0 ? (

              experiences.map((experience) => (
                <div
                  key={experience.id}
                  className="col-md-6 col-xl-4 mb-4"
                >

                  <ExperienceCard
                    experience={experience}
                    onEdit={() =>
                      handleEdit(experience)
                    }
                    onDelete={() =>
                      handleDelete(experience.id)
                    }
                  />

                </div>
              ))

            ) : (

              <div className="col-12">
                <div className="card text-center">

                  <h3 className="card-title">
                    Belum ada data pengalaman
                  </h3>

                  <p className="mb-0">
                    Tambahkan pengalaman pertama
                    agar portfolio kamu mulai terisi.
                  </p>

                </div>
              </div>

            )}

          </div>

        </section>

      </div>
    </main>
  );
}

export default Experience;
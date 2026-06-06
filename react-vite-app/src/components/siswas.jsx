import './Siswa.css';

// Keep default export name stable for existing imports.
function SiswaInfo({ nama, kelas }) {
  return (
    <p className="kalimat">
      Website ini menampilkan pengalaman {nama} kelas {kelas}, lalu
      mengembangkannya menjadi portfolio yang runtut mulai dari PKL, freelance,
      lomba, ekstrakurikuler, sampai project.
    </p>
  );
}

export default SiswaInfo;

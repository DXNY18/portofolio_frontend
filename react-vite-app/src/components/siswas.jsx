import './Siswa.css';

// Keep default export name stable for existing imports.
function SiswaInfo(props) {
  return (
    <p className="kalimat2">
      Website ini menampilkan pengalaman {props.nama} kelas {props.kelas}, lalu
      mengembangkannya menjadi portfolio yang runtut mulai dari PKL, freelance,
      lomba, ekstrakurikuler, sampai project.
    </p>
  );
}

export default SiswaInfo;


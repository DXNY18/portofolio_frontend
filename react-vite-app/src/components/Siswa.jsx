import './Siswa.css';

function Siswa({ nama, kelas }) {
  return (
    <p className="kalimat">
      Halo, saya {nama} dari kelas {kelas}. Saya sedang membangun portfolio
      yang menampilkan pengalaman, project, dan kemampuan saya di bidang pengembangan web.
    </p>
  );
}

export default Siswa;

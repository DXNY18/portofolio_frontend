import './Siswa.css';

function Siswa(props) {
  return (
    <p className="kalimat">
      Halo, saya {props.nama} dari kelas {props.kelas}. Saya sedang membangun portfolio
      yang menampilkan pengalaman, project, dan kemampuan saya di bidang pengembangan web.
    </p>
  );
}

export default Siswa;


import { dataPemberitahuan, dataAset } from '../data/dataUndangan'

function BagianKonfirmasiKehadiran() {
  return (
    // Background sedikit lebih terang - beda dari DressCode
    <section style={{ backgroundColor: '#faf6f0', minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>

      {/* Bunga kiri */}
      <div style={{ position: 'absolute', left: 0, bottom: '40px', width: '75px' }}>
        <img src={dataAset.bunga2} alt="" style={{ width: '100%' }} />
      </div>
      {/* Bunga kanan */}
      <div style={{ position: 'absolute', right: 0, bottom: '40px', width: '75px', transform: 'scaleX(-1)' }}>
        <img src={dataAset.bunga2} alt="" style={{ width: '100%' }} />
      </div>

      {/* Arch container */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '320px' }}>
        <div style={{ backgroundColor: '#e8d0bc', borderRadius: '180px 180px 0 0', padding: '60px 32px 44px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

          {/* Judul - Great Vibes */}
          <h2 style={{ fontFamily: "'Great Vibes', cursive", fontSize: '42px', color: '#7a1f2e', marginBottom: '20px' }}>
            Konfirmasi Kehadiran
          </h2>

          {/* Tanggal */}
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#5a3a3a', marginBottom: '10px' }}>
            {dataPemberitahuan.tanggal}
          </p>

          {/* Status bold */}
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 700, color: '#3d1a1a', marginBottom: '10px' }}>
            {dataPemberitahuan.status}
          </p>

          {/* Pesan */}
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#5a3a3a', marginBottom: '28px', whiteSpace: 'pre-line', lineHeight: 1.7 }}>
            {dataPemberitahuan.pesan}
          </p>

          {/* Tombol */}
          <button style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 500, backgroundColor: '#7a1f2e', color: '#fff', borderRadius: '999px', padding: '10px 64px', border: 'none', cursor: 'pointer' }}>
            Ubah
          </button>
        </div>
      </div>
    </section>
  )
}

export default BagianKonfirmasiKehadiran

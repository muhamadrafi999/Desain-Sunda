import { dataAcaraAkad, dataAcaraResepsi, dataAset } from '../data/dataUndangan'

// Reusable kartu detail acara (Akad / Resepsi)
function KartuAcara({ data, bgType }) {
  return (
    <section style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      {/* Background conditional: foto untuk Akad, warna untuk Resepsi */}
      {bgType === 'foto' ? (
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src={dataAset.bgLandscape} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      ) : (
        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#faf6f0' }} />
      )}

      {/* Bunga sisi bawah */}
      <div style={{ position: 'absolute', [bgType === 'foto' ? 'left' : 'right']: 0, bottom: 0, width: '110px' }}>
        <img src={dataAset.bunga1} alt="" style={{ width: '100%' }} />
      </div>

      {/* Konten */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '40px 70px' }}>

        {/* Judul - Great Vibes */}
      <h2 style={{ fontFamily: "'Great Vibes', cursive", fontSize: '54px', color: '#7a1f2e', marginBottom: '28px', textAlign: 'center' }}>
        {data.judul}
      </h2>

        {/* Info detail */}
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 500, color: '#3d1a1a', marginBottom: '4px' }}>
          {data.hari} {data.tanggal}
        </p>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 500, color: '#3d1a1a', marginBottom: '20px' }}>
          {data.jam}
        </p>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', fontWeight: 600, color: '#3d1a1a', marginBottom: '10px' }}>
          {data.gedung}
        </p>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: '#5a3a3a', marginBottom: '4px' }}>
          {data.kota}
        </p>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: '#5a3a3a', marginBottom: '28px' }}>
          {data.alamat}
        </p>

        {/* Tombol Lihat Peta - tidak redirect */}
        <button
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 500, backgroundColor: '#7a1f2e', color: '#fff', borderRadius: '999px', padding: '10px 48px', border: 'none', cursor: 'default' }}
        >
          Lihat Peta
        </button>
      </div>
    </section>
  )
}

function BagianAcara() {
  return (
    <>
      {/* Section: Its Wedding Day — background sedikit lebih terang */}
      <section style={{ backgroundColor: '#faf6f0', minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

        <div style={{ position: 'absolute', left: 0, bottom: 0, width: '130px', opacity: 0.7 }}>
          <img src={dataAset.semak} alt="" style={{ width: '100%' }} />
        </div>
        <div style={{ position: 'absolute', right: 0, bottom: 0, width: '110px' }}>
          <img src={dataAset.bunga1} alt="" style={{ width: '100%' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 24px' }}>
      {/* Judul - Great Vibes - center */}
      <h2 style={{ fontFamily: "'Great Vibes', cursive", fontSize: '54px', color: '#7a1f2e', marginBottom: '28px', textAlign: 'center' }}>
            Its Wedding Day
          </h2>

          {/* Card tanggal */}
          <div style={{ backgroundColor: '#e8d8c8', borderRadius: '24px', padding: '20px 48px', textAlign: 'center' }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '26px', color: '#7a1f2e', marginBottom: '8px' }}>
              Senin
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '22px', color: '#3d1a1a' }}>Januari</span>
              <div style={{ border: '2px solid #7a1f2e', borderRadius: '10px', padding: '6px 18px' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '34px', fontWeight: 600, color: '#3d1a1a' }}>20</span>
              </div>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '22px', color: '#3d1a1a' }}>2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Akad Nikah - background foto landscape */}
      <KartuAcara data={dataAcaraAkad} bgType="foto" />

      {/* Section: Resepsi - background warna seperti BagianMempelai */}
      <KartuAcara data={dataAcaraResepsi} bgType="warna" />
    </>
  )
}

export default BagianAcara

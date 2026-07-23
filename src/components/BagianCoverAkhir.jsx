import { dataMempelai, dataAset } from '../data/dataUndangan'

function BagianCoverAkhir() {
  return (
    // Background landscape penuh - beda dari semua section sebelumnya
    <section style={{ backgroundColor: '#e8e0d0', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

      {/* Background semak/landscape memenuhi seluruh section */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img src={dataAset.semak} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
      </div>

      {/* Bunga bawah kiri */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '150px', zIndex: 10 }}>
        <img src={dataAset.bunga3} alt="" style={{ width: '100%' }} />
      </div>

      {/* Bunga bawah kanan */}
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '150px', zIndex: 10 }}>
        <img src={dataAset.bunga1} alt="" style={{ width: '100%' }} />
      </div>

      {/* Teks tengah */}
      <div style={{
        position: 'relative', zIndex: 20,
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '40px 32px',
      }}>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', letterSpacing: '3px', color: '#7a1f2e', marginBottom: '8px' }}>
          Wedding Invitation
        </p>
        <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: '60px', color: '#3d1a1a', lineHeight: 1.1, marginBottom: '8px' }}>
          Bryan &amp; Anne
        </h1>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', fontWeight: 600, color: '#3d1a1a' }}>
          {dataMempelai.hashtag}
        </p>
      </div>

    </section>
  )
}

export default BagianCoverAkhir

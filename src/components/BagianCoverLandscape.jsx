import { dataMempelai, dataAset } from '../data/dataUndangan'

function BagianCoverLandscape() {
  return (
    // Background landscape foto
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden',
      backgroundColor: '#e8e0d0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      {/* Background foto landscape */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src={dataAset.bgLandscape}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Pohon kiri bawah */}
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '130px', zIndex: 5 }}>
        <img src={dataAset.semak} alt="" style={{ width: '100%', opacity: 0.9 }} />
      </div>

      {/* Pohon kanan bawah */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '130px', zIndex: 5, transform: 'scaleX(-1)' }}>
        <img src={dataAset.semak} alt="" style={{ width: '100%', opacity: 0.9 }} />
      </div>

      {/* Bunga kiri bawah */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '160px', zIndex: 6 }}>
        <img src={dataAset.bunga3} alt="" style={{ width: '100%' }} />
      </div>

      {/* Bunga kanan bawah */}
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '150px', zIndex: 6 }}>
        <img src={dataAset.bunga1} alt="" style={{ width: '100%' }} />
      </div>

      {/* Teks tengah */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '40px 32px',
      }}>

        {/* Label Wedding Invitation */}
        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '12px',
          letterSpacing: '2px',
          color: '#7a1f2e',
          marginBottom: '6px',
        }}>
          Wedding Invitation
        </p>

        {/* Nama - Great Vibes kursif */}
        <h1 style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: '58px',
          color: '#3d1a1a',
          lineHeight: 1.1,
          marginBottom: '8px',
        }}>
          Bryan &amp; Anne
        </h1>

        {/* Hashtag */}
        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '12px',
          fontWeight: 600,
          color: '#3d1a1a',
        }}>
          {dataMempelai.hashtag}
        </p>

      </div>
    </section>
  )
}

export default BagianCoverLandscape

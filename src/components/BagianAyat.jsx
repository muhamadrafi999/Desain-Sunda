import { dataAyatQuran, dataAset } from '../data/dataUndangan'

function BagianAyat() {
  return (
    // Background foto landscape
    <section style={{ backgroundColor: '#f5f0e8', minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      {/* Background foto landscape */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img src={dataAset.bgLandscape} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Bunga kiri atas */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '140px', zIndex: 5 }}>
        <img src={dataAset.bunga1} alt="" style={{ width: '100%' }} />
      </div>

      {/* Bunga kanan bawah */}
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '150px', zIndex: 5 }}>
        <img src={dataAset.bunga2} alt="" style={{ width: '100%' }} />
      </div>

      {/* Kertas surat / parchment */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '360px', margin: '80px 24px' }}>
        <div style={{
          backgroundImage: `url(${dataAset.bgSurat})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px',
          padding: '48px 36px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Overlay tipis */}
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(255,245,220,0.1)' }} />

          {/* Teks ayat - Cormorant Garamond serif */}
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '15px', lineHeight: 2, textAlign: 'center', color: '#3d1a1a', marginBottom: '20px', position: 'relative' }}>
            {dataAyatQuran.teks}
          </p>

          {/* Sumber */}
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '15px', textAlign: 'center', fontWeight: 600, color: '#3d1a1a', position: 'relative' }}>
            {dataAyatQuran.sumber}
          </p>
        </div>
      </div>

    </section>
  )
}

export default BagianAyat

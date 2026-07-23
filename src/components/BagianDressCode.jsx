import { dataDressCode, dataAset } from '../data/dataUndangan'

function KartuDressCode({ data }) {
  const IkonPria = () => (
    <svg viewBox="0 0 60 60" fill="none" style={{ width: '40px', height: '40px' }}>
      <rect x="15" y="10" width="30" height="35" rx="4" stroke="#333" strokeWidth="2" fill="white"/>
      <path d="M22 10 L15 20 L22 18" stroke="#333" strokeWidth="1.5" fill="none"/>
      <path d="M38 10 L45 20 L38 18" stroke="#333" strokeWidth="1.5" fill="none"/>
      <line x1="30" y1="10" x2="30" y2="22" stroke="#333" strokeWidth="1.5"/>
    </svg>
  )
  const IkonWanita = () => (
    <svg viewBox="0 0 60 60" fill="none" style={{ width: '40px', height: '40px' }}>
      <path d="M30 8 C20 8 15 18 18 28 L22 45 L38 45 L42 28 C45 18 40 8 30 8Z" stroke="#333" strokeWidth="2" fill="white"/>
      <path d="M22 45 L18 55 L42 55 L38 45" stroke="#333" strokeWidth="1.5" fill="none"/>
      <ellipse cx="30" cy="9" rx="6" ry="5" stroke="#333" strokeWidth="1.5" fill="white"/>
    </svg>
  )

  return (
    <div style={{ backgroundColor: '#e8d0bc', borderRadius: '24px', padding: '20px 16px', width: '145px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#5a3a3a', marginBottom: '12px' }}>
        {data.label}
      </p>
      <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '6px' }}>
        {data.label === 'Pria' ? <IkonPria /> : <IkonWanita />}
      </div>
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', color: '#5a3a3a', marginBottom: '14px' }}>
        {data.gaya}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        {data.warna.map((warna, i) => (
          <div key={i} style={{ backgroundColor: warna, width: '32px', height: '40px', borderRadius: '999px' }} />
        ))}
      </div>
    </div>
  )
}

function BagianDressCode() {
  return (
    // Background foto landscape
    <section style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 24px' }}>

      {/* Background foto landscape */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img src={dataAset.bgLandscape} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '150px' }}>
        <img src={dataAset.bunga3} alt="" style={{ width: '100%' }} />
      </div>
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '120px' }}>
        <img src={dataAset.bunga2} alt="" style={{ width: '100%' }} />
      </div>

      {/* Judul - Great Vibes */}
      <h2 style={{ fontFamily: "'Great Vibes', cursive", fontSize: '54px', color: '#7a1f2e', marginBottom: '6px', position: 'relative', zIndex: 10, textAlign: 'center' }}>
        Dress Code
      </h2>

      {/* Sub kalimat */}
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#5a3a3a', marginBottom: '32px', position: 'relative', zIndex: 10, textAlign: 'center' }}>
        {dataDressCode.kalimat}
      </p>

      <div style={{ display: 'flex', gap: '20px', position: 'relative', zIndex: 10 }}>
        <KartuDressCode data={dataDressCode.pria} />
        <KartuDressCode data={dataDressCode.wanita} />
      </div>
    </section>
  )
}

export default BagianDressCode

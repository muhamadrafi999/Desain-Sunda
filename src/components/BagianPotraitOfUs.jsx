import { dataPotraitOfUs } from '../data/dataUndangan'

function BagianPotraitOfUs() {
  const [foto1, foto2, foto3, foto4] = dataPotraitOfUs.foto

  return (
    // Background krem standar
    <section style={{ backgroundColor: '#f5f0e8', padding: '48px 20px 44px' }}>

      {/* Judul - Great Vibes */}
      <h2 style={{ fontFamily: "'Great Vibes', cursive", fontSize: '46px', color: '#7a1f2e', marginBottom: '4px', textAlign: 'center' }}>
        {dataPotraitOfUs.judul}
      </h2>

      {/* Sub kalimat - Poppins bold */}
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', fontWeight: 600, color: '#5a3a3a', marginBottom: '20px', textAlign: 'center' }}>
        {dataPotraitOfUs.kalimat}
      </p>

      {/* Baris atas: foto besar kiri + 2 foto kanan */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '10px', marginBottom: '10px' }}>
        <div style={{ gridRow: 'span 2', borderRadius: '16px', overflow: 'hidden', height: '280px' }}>
          <img src={foto1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ borderRadius: '16px', overflow: 'hidden', height: '135px' }}>
          <img src={foto2} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ borderRadius: '16px', overflow: 'hidden', height: '135px' }}>
          <img src={foto3} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </div>

      {/* Baris bawah: 3 foto kecil sejajar */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
        <div style={{ borderRadius: '16px', overflow: 'hidden', height: '130px' }}>
          <img src={foto4} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
        </div>
        <div style={{ borderRadius: '16px', overflow: 'hidden', height: '130px' }}>
          <img src={foto1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
        </div>
        <div style={{ borderRadius: '16px', overflow: 'hidden', height: '130px' }}>
          <img src={foto2} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
        </div>
      </div>

    </section>
  )
}

export default BagianPotraitOfUs

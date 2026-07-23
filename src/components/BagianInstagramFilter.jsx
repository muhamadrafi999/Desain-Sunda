import { dataInstagramFilter, dataAset } from '../data/dataUndangan'

function BagianInstagramFilter() {
  return (
    // Background foto landscape
    <section style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 24px' }}>

      {/* Background foto landscape */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img src={dataAset.bgLandscape} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '130px' }}>
        <img src={dataAset.bunga3} alt="" style={{ width: '100%' }} />
      </div>
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '110px' }}>
        <img src={dataAset.bunga2} alt="" style={{ width: '100%' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        {/* Judul - Great Vibes */}
        <h2 style={{ fontFamily: "'Great Vibes', cursive", fontSize: '44px', color: '#7a1f2e', textAlign: 'center', marginBottom: '28px' }}>
          {dataInstagramFilter.judul}
        </h2>

        {/* Foto */}
        <div style={{ width: '210px', height: '280px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', marginBottom: '28px' }}>
          <img src={dataInstagramFilter.foto} alt="instagram filter" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>

        {/* Tombol Gunakan - tidak redirect */}
        <button
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 500, backgroundColor: '#7a1f2e', color: '#fff', borderRadius: '999px', padding: '12px 60px', border: 'none', cursor: 'default' }}
        >
          Gunakan
        </button>
      </div>
    </section>
  )
}

export default BagianInstagramFilter

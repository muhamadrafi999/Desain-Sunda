import { dataMempelai, dataAset } from '../data/dataUndangan'

function BagianCover() {
  return (
    <section style={{ backgroundColor: '#f0ebe0', minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      {/* Background semak bawah */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px' }}>
        <img src={dataAset.semak} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
      </div>

      {/* Bunga kiri bawah */}
      <div style={{ position: 'absolute', bottom: '120px', left: 0, width: '150px', zIndex: 10 }}>
        <img src={dataAset.bunga1} alt="" style={{ width: '100%' }} />
      </div>

      {/* Bunga kanan bawah */}
      <div style={{ position: 'absolute', bottom: '110px', right: 0, width: '150px', zIndex: 10 }}>
        <img src={dataAset.bunga3} alt="" style={{ width: '100%' }} />
      </div>

      {/* Konten tengah */}
      <div style={{ position: 'relative', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '56px', paddingBottom: '220px', paddingLeft: '24px', paddingRight: '24px' }}>

        {/* Label kecil */}
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', letterSpacing: '3px', color: '#7a1f2e', marginBottom: '4px', textAlign: 'center' }}>
          Wedding Invitation
        </p>

        {/* Nama - Great Vibes kursif */}
        <h1 style={{ fontFamily: "'Great Vibes', cursive", fontSize: '54px', color: '#3d1a1a', lineHeight: 1.1, marginBottom: '6px', textAlign: 'center' }}>
          Bryan &amp; Anne
        </h1>

        {/* Hashtag */}
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', fontWeight: 600, color: '#3d1a1a', marginBottom: '32px', textAlign: 'center' }}>
          {dataMempelai.hashtag}
        </p>

        {/* Frame foto arch border merah */}
        <div style={{ position: 'relative', width: '240px', height: '300px' }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: '120px 120px 0 0', border: '2px solid #7a1f2e', zIndex: 10 }} />
          <div style={{ position: 'absolute', top: '4px', left: '4px', right: '4px', bottom: 0, borderRadius: '116px 116px 0 0', overflow: 'hidden' }}>
            <img src="/aset/potrait-of-us/potrait-1.png" alt="foto mempelai" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
        </div>

      </div>
    </section>
  )
}

export default BagianCover

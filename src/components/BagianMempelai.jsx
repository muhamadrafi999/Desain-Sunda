import { dataMempelai, dataAset } from '../data/dataUndangan'

function KartuMempelai({ data, bunga, posisiBunga }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      {/* Frame foto arch */}
      <div style={{ position: 'relative', width: '200px', height: '260px' }}>
        <div style={{ position: 'absolute', inset: 0, borderRadius: '100px 100px 0 0', border: '2px solid #7a1f2e', zIndex: 10 }} />
        <div style={{ position: 'absolute', top: '4px', left: '4px', right: '4px', bottom: 0, borderRadius: '96px 96px 0 0', overflow: 'hidden' }}>
          <img src={data.foto} alt={data.namaLengkap} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
        </div>
        {/* Hiasan bunga pojok bawah */}
        <div style={{ position: 'absolute', bottom: '-24px', [posisiBunga === 'kiri' ? 'left' : 'right']: '-20px', width: '85px', zIndex: 20 }}>
          <img src={bunga} alt="" style={{ width: '100%' }} />
        </div>
      </div>

      {/* Nama - Great Vibes */}
      <h2 style={{ fontFamily: "'Great Vibes', cursive", fontSize: '42px', color: '#3d1a1a', marginTop: '40px', marginBottom: '8px', textAlign: 'center' }}>
        {data.namaLengkap}
      </h2>

      {/* Keterangan orang tua - Poppins */}
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: '#5a3a3a', textAlign: 'center', marginBottom: '12px', padding: '0 12px' }}>
        {data.namaOrangTua}
      </p>

      {/* Badge Instagram */}
      <a
        href={`https://instagram.com/${data.instagram}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#7a1f2e', color: '#fff', borderRadius: '999px', padding: '6px 16px', fontFamily: "'Poppins', sans-serif", fontSize: '12px', textDecoration: 'none' }}
      >
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        {data.instagram}
      </a>
    </div>
  )
}

function BagianMempelai() {
  return (
    // Background krem lebih terang - beda dari BagianAyat
    <section style={{ backgroundColor: '#faf6f0', minHeight: '100vh', position: 'relative', overflow: 'hidden', padding: '64px 24px 64px' }}>

      <KartuMempelai data={dataMempelai.wanita} bunga={dataAset.bunga2} posisiBunga="kiri" />

      {/* Simbol & */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '52px 0' }}>
        <span style={{ fontFamily: "'Great Vibes', cursive", fontSize: '80px', color: '#7a1f2e' }}>&amp;</span>
      </div>

      <KartuMempelai data={dataMempelai.pria} bunga={dataAset.bunga1} posisiBunga="kanan" />

    </section>
  )
}

export default BagianMempelai

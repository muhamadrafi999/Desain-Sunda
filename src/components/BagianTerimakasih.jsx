import { dataTerimakasih, dataAset } from '../data/dataUndangan'

function BagianTerimakasih() {
  return (
    // Background krem terang - beda dari HarapanUcapan
    <section style={{ backgroundColor: '#faf6f0', minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

      {/* Batas anyaman atas */}
      <img src={dataAset.batasSection} alt="" style={{ width: '100%', height: '80px', objectFit: 'cover', display: 'block' }} />

      {/* Ruang kosong */}
      <div style={{ flex: 1 }} />

      {/* Area bawah dengan arch merah */}
      <div style={{ position: 'relative', width: '100%' }}>

        {/* Bunga kiri */}
        <div style={{ position: 'absolute', left: 0, bottom: '70px', width: '120px', zIndex: 20 }}>
          <img src={dataAset.bunga3} alt="" style={{ width: '100%' }} />
        </div>

        {/* Daun kanan */}
        <div style={{ position: 'absolute', right: 0, bottom: '50px', width: '100px', zIndex: 20 }}>
          <img src={dataAset.bunga2} alt="" style={{ width: '100%' }} />
        </div>

        {/* Arch merah setengah lingkaran */}
        <div style={{
          position: 'relative', zIndex: 10,
          backgroundColor: '#7a1f2e',
          borderRadius: '200px 200px 0 0',
          padding: '64px 40px 60px',
          textAlign: 'center',
        }}>
          {/* Judul - Great Vibes */}
          <h2 style={{ fontFamily: "'Great Vibes', cursive", fontSize: '56px', color: '#fff', marginBottom: '24px' }}>
            Terimakasih
          </h2>

          {/* Teks - Poppins */}
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', lineHeight: 2, color: 'rgba(255,255,255,0.9)' }}>
            {dataTerimakasih.isi}
          </p>
        </div>

      </div>
    </section>
  )
}

export default BagianTerimakasih

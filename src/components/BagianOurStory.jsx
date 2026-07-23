import { dataOurStory, dataAset } from '../data/dataUndangan'

function BagianOurStory() {
  return (
    // Background coklat muda - beda dari BagianMempelai
    <section style={{ backgroundColor: '#ede4d8', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

      {/* Batas anyaman atas */}
      <img src={dataAset.batasSection} alt="" style={{ width: '100%', height: '80px', objectFit: 'cover', display: 'block' }} />

      {/* Konten arch */}
      <div style={{ padding: '0 20px 40px' }}>
        <div style={{ backgroundColor: '#e0cfc0', borderRadius: '200px 200px 0 0', padding: '56px 28px 36px', width: '100%' }}>

          {/* Judul Our Story - center */}
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '26px', fontWeight: 600, textAlign: 'center', color: '#3d1a1a', marginBottom: '20px' }}>
            Our Story
          </h2>

          {/* Foto */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '20px' }}>
            <img src={dataOurStory.foto} alt="our story" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
          </div>

          {/* Box cerita merah */}
          <div style={{ backgroundColor: '#7a1f2e', borderRadius: '16px', padding: '20px 24px' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', lineHeight: '1.9', textAlign: 'center', color: '#fff' }}>
              {dataOurStory.cerita}
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default BagianOurStory

import { dataLiveStreaming, dataOurFootage, dataAset } from '../data/dataUndangan'

function ThumbnailVideo({ thumbnail }) {
  return (
    <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', cursor: 'default' }}>
      <img src={thumbnail} alt="" style={{ width: '100%', height: '185px', objectFit: 'cover', display: 'block' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.25)' }} />
      {/* Tombol play - tidak redirect */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '54px', height: '54px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="22" height="22" fill="#3d1a1a" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

function BagianLiveStreaming() {
  return (
    // Background krem terang
    <section style={{ backgroundColor: '#faf6f0', minHeight: '100vh', position: 'relative', overflow: 'hidden', padding: '52px 20px' }}>

      <div style={{ position: 'absolute', top: 0, right: 0, width: '130px' }}>
        <img src={dataAset.bunga1} alt="" style={{ width: '100%' }} />
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '130px' }}>
        <img src={dataAset.bunga3} alt="" style={{ width: '100%' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>

        {/* Live Streaming */}
        <div style={{ marginBottom: '52px' }}>
          <h2 style={{ fontFamily: "'Great Vibes', cursive", fontSize: '46px', color: '#7a1f2e', marginBottom: '4px', textAlign: 'center' }}>
            {dataLiveStreaming.judul}
          </h2>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', fontWeight: 600, color: '#5a3a3a', marginBottom: '14px', textAlign: 'center' }}>
            {dataLiveStreaming.kalimat}
          </p>
          <ThumbnailVideo thumbnail={dataLiveStreaming.thumbnail} />
        </div>

        {/* Our Footage */}
        <div>
          <h2 style={{ fontFamily: "'Great Vibes', cursive", fontSize: '46px', color: '#7a1f2e', marginBottom: '4px', textAlign: 'center' }}>
            {dataOurFootage.judul}
          </h2>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', fontWeight: 600, color: '#5a3a3a', marginBottom: '14px', textAlign: 'center' }}>
            {dataOurFootage.kalimat}
          </p>
          <ThumbnailVideo thumbnail={dataOurFootage.thumbnail} />
        </div>

      </div>
    </section>
  )
}

export default BagianLiveStreaming

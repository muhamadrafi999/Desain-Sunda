import BagianCover from './components/BagianCover'
import BagianAyat from './components/BagianAyat'
import BagianMempelai from './components/BagianMempelai'
import BagianOurStory from './components/BagianOurStory'
import BagianHitungMundur from './components/BagianHitungMundur'
import BagianAcara from './components/BagianAcara'
import BagianDressCode from './components/BagianDressCode'
import BagianKonfirmasiKehadiran from './components/BagianKonfirmasiKehadiran'
import BagianPotraitOfUs from './components/BagianPotraitOfUs'
import BagianLiveStreaming from './components/BagianLiveStreaming'
import BagianInstagramFilter from './components/BagianInstagramFilter'
import BagianWeddingGift from './components/BagianWeddingGift'
import BagianHarapanUcapan from './components/BagianHarapanUcapan'
import BagianTerimakasih from './components/BagianTerimakasih'
import BagianCoverAkhir from './components/BagianCoverAkhir'

function App() {
  return (
    /*
      Container utama max-width 430px (lebar HP)
      Semua section menempel satu sama lain tanpa gap
    */
    <div style={{
      maxWidth: '430px',
      margin: '0 auto',
      overflow: 'hidden',
      /* Tidak ada padding/gap supaya background section menyambung */
    }}>
      <BagianCover />
      <BagianAyat />
      <BagianMempelai />
      <BagianOurStory />
      <BagianHitungMundur />
      <BagianAcara />
      <BagianDressCode />
      <BagianKonfirmasiKehadiran />
      <BagianPotraitOfUs />
      <BagianLiveStreaming />
      <BagianInstagramFilter />
      <BagianWeddingGift />
      <BagianHarapanUcapan />
      <BagianTerimakasih />
      <BagianCoverAkhir />
    </div>
  )
}

export default App

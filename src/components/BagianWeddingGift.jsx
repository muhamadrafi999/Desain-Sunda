import { useState } from 'react'
import { dataWeddingGift, dataAset } from '../data/dataUndangan'

function BagianWeddingGift() {
  const [form, setForm] = useState({ pengirim: '', nama: '', pesan: '', jumlah: '' })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const salinNomor = () => { navigator.clipboard.writeText(dataWeddingGift.nomorAkun); alert('Nomor akun berhasil disalin!') }

  return (
    // Background coklat pasir - beda dari InstagramFilter
    <section style={{ backgroundColor: '#ede4d8', minHeight: '100vh', position: 'relative', overflow: 'hidden', paddingBottom: '40px' }}>

      <div style={{ position: 'absolute', top: 0, left: 0, width: '140px' }}>
        <img src={dataAset.bunga3} alt="" style={{ width: '100%' }} />
      </div>
      <div style={{ position: 'absolute', top: 0, right: 0, width: '140px' }}>
        <img src={dataAset.bunga2} alt="" style={{ width: '100%' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '340px', margin: '0 auto', padding: '0 16px' }}>

        {/* Arch atas dengan judul */}
        <div style={{ backgroundColor: '#e8d8c8', borderRadius: '180px 180px 0 0', padding: '80px 24px 0' }}>
          <h2 style={{ fontFamily: "'Great Vibes', cursive", fontSize: '46px', color: '#7a1f2e', textAlign: 'center' }}>
            {dataWeddingGift.judul}
          </h2>
        </div>

        {/* Kotak merah */}
        <div style={{ backgroundColor: '#7a1f2e', borderRadius: '16px', overflow: 'hidden' }}>

          {/* Header bank */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 700, color: '#fff' }}>{dataWeddingGift.namaBank}</span>
            <span style={{ color: '#fff', fontSize: '18px', fontWeight: 700 }}>-</span>
          </div>

          {/* Info akun */}
          <div style={{ backgroundColor: '#fff', margin: '0 8px 8px', borderRadius: '12px', padding: '14px' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', color: '#888', marginBottom: '4px' }}>Nomor Akun</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 700, color: '#3d1a1a' }}>{dataWeddingGift.nomorAkun}</span>
              <button onClick={salinNomor} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#888' }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </button>
            </div>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', color: '#888', marginBottom: '4px' }}>Nama Akun</p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 700, color: '#3d1a1a' }}>{dataWeddingGift.namaAkun}</p>
          </div>

          {/* Form */}
          <div style={{ padding: '0 12px 14px' }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.75)', marginBottom: '10px' }}>
              silakan isi formulir dibawah ini
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { name: 'pengirim', placeholder: 'Chindy & pasangan' },
                { name: 'nama',     placeholder: 'Nama Aku Owner' },
                { name: 'pesan',    placeholder: 'Pesan' },
                { name: 'jumlah',   placeholder: 'Jumlah' },
              ].map((f) => (
                <input key={f.name} type="text" name={f.name} placeholder={f.placeholder}
                  value={form[f.name]} onChange={handleChange}
                  style={{ width: '100%', fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: '#3d1a1a', backgroundColor: '#fff', border: 'none', borderRadius: '999px', padding: '8px 16px', outline: 'none' }}
                />
              ))}
              <button style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: '#3d1a1a', backgroundColor: '#fff', border: 'none', borderRadius: '999px', padding: '8px 16px', cursor: 'pointer', textAlign: 'left' }}>
                Selanjutnya &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BagianWeddingGift

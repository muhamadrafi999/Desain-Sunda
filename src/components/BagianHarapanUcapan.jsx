import { useState } from 'react'

const ucapanAwal = [
  { id: 1, nama: 'Bibah', pesan: 'Selamat bergabung di klub "istri dulu baru main" 😊 Semangat jadi isamu/istri singa! Fix ga bisa curhat sampai pagi lagi nih! Tapi bahagia banget liat kalian bersatu, semoga awet sampai kakek nenek!' },
  { id: 2, nama: 'Sissy', pesan: 'Akhirnyaaa bestie halal juga! Semoga makin lengket kaya lem korea dan selalu bahagia' },
  { id: 3, nama: 'Halma', pesan: 'Selamat menempuh hidup baru! Semoga kalian selalu dilimpahi kebahagiaan, cinta, dan keberkahan.' },
  { id: 4, nama: 'Salsa', pesan: 'Selamat menempuh hidup baru! Semoga kalian selalu jadi tim terbaik dalam segala hal. Semoga rumah tangganya penuh cinta, sabar, dan rezeki yang barokah. Aamiin.' },
]

function BagianHarapanUcapan() {
  const [daftarUcapan, setDaftarUcapan] = useState(ucapanAwal)
  const [form, setForm] = useState({ nama: '', ucapan: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleKirim = (e) => {
    e.preventDefault()
    if (!form.nama.trim() || !form.ucapan.trim()) return
    setDaftarUcapan([{ id: Date.now(), nama: form.nama, pesan: form.ucapan }, ...daftarUcapan])
    setForm({ nama: '', ucapan: '' })
  }

  return (
    // Background warna sama seperti BagianWeddingGift (#ede4d8)
    <section style={{ backgroundColor: '#ede4d8', position: 'relative', overflow: 'hidden' }}>

      {/* Ornamen ukiran atas */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
        <svg viewBox="0 0 360 40" fill="none" style={{ width: '100%' }}>
          <path d="M0 20 Q90 2 180 20 Q270 38 360 20" stroke="#7a1f2e" strokeWidth="1.5" fill="none"/>
          <path d="M40 20 Q90 8 180 20 Q270 32 320 20" stroke="#7a1f2e" strokeWidth="0.8" fill="none" opacity="0.5"/>
          {[20, 60, 100, 140, 180, 220, 260, 300, 340].map((x, i) => (
            <circle key={i} cx={x} cy={20} r="2.5" fill="#7a1f2e" opacity="0.6"/>
          ))}
          <circle cx="180" cy="20" r="4" fill="#7a1f2e"/>
        </svg>
      </div>

      {/* Arch container */}
      <div style={{ maxWidth: '360px', margin: '0 auto', padding: '0 16px 40px' }}>
        <div style={{ backgroundColor: 'rgba(232,208,188,0.4)', borderRadius: '190px 190px 0 0', padding: '60px 24px 36px' }}>

          {/* Judul - Great Vibes */}
          <h2 style={{ fontFamily: "'Great Vibes', cursive", fontSize: '46px', color: '#7a1f2e', textAlign: 'center', marginBottom: '24px' }}>
            Harapan dan Ucapan
          </h2>

          {/* Form */}
          <form onSubmit={handleKirim} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            {/* Input nama - background merah */}
            <div style={{ backgroundColor: '#7a1f2e', borderRadius: '8px', padding: '12px 16px' }}>
              <input
                type="text" name="nama" placeholder="Nama"
                value={form.nama} onChange={handleChange}
                style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#fff' }}
              />
            </div>
            {/* Textarea ucapan - background putih */}
            <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '12px 16px' }}>
              <textarea
                name="ucapan" placeholder="Berikan Ucapan..."
                value={form.ucapan} onChange={handleChange}
                rows={4}
                style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', resize: 'none', fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#3d1a1a' }}
              />
            </div>
            {/* Tombol kirim */}
            <button type="submit"
              style={{ backgroundColor: '#7a1f2e', color: '#fff', borderRadius: '8px', padding: '12px', border: 'none', cursor: 'pointer', fontFamily: "'Poppins', sans-serif", fontSize: '14px', fontWeight: 600 }}>
              Kirim
            </button>
          </form>

          {/* Daftar ucapan */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '400px', overflowY: 'auto' }}>
            {daftarUcapan.map((item) => (
              <div key={item.id} style={{ backgroundColor: '#7a1f2e', borderRadius: '8px', padding: '14px 16px' }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
                  {item.nama}
                </p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.88)', lineHeight: 1.7 }}>
                  {item.pesan}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default BagianHarapanUcapan

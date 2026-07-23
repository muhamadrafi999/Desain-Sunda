import { useState, useEffect } from 'react'
import { dataTanggalAcara, dataAset } from '../data/dataUndangan'

function BagianHitungMundur() {
  const [waktu, setWaktu] = useState({ hari: 0, jam: 0, menit: 0, detik: 0 })

  useEffect(() => {
    const hitung = () => {
      const selisih = dataTanggalAcara - new Date()
      if (selisih <= 0) return setWaktu({ hari: 0, jam: 0, menit: 0, detik: 0 })
      setWaktu({
        hari:  Math.floor(selisih / 86400000),
        jam:   Math.floor((selisih % 86400000) / 3600000),
        menit: Math.floor((selisih % 3600000) / 60000),
        detik: Math.floor((selisih % 60000) / 1000),
      })
    }
    hitung()
    const id = setInterval(hitung, 1000)
    return () => clearInterval(id)
  }, [])

  const daftarWaktu = [
    { nilai: waktu.hari,  label: 'Hari' },
    { nilai: waktu.jam,   label: 'Jam' },
    { nilai: waktu.menit, label: 'Menit' },
    { nilai: waktu.detik, label: 'Detik' },
  ]

  return (
    // Background krem standar
    <section style={{ backgroundColor: '#f5f0e8', minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      {/* Pohon kiri */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', opacity: 0.75 }}>
        <img src={dataAset.semak} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right' }} />
      </div>

      {/* Bunga kanan bawah */}
      <div style={{ position: 'absolute', right: 0, bottom: 0, width: '110px' }}>
        <img src={dataAset.bunga1} alt="" style={{ width: '100%' }} />
      </div>

      {/* Ornamen ukiran atas */}
      <div style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', width: '140px' }}>
        <svg viewBox="0 0 140 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 25 Q35 5 70 25 Q105 45 130 25" stroke="#7a1f2e" strokeWidth="1.5" fill="none"/>
          <path d="M25 25 Q50 12 70 25 Q90 38 115 25" stroke="#7a1f2e" strokeWidth="1" fill="none" opacity="0.6"/>
          <circle cx="70" cy="25" r="4" fill="#7a1f2e"/>
          <circle cx="10" cy="25" r="3" fill="#7a1f2e"/>
          <circle cx="130" cy="25" r="3" fill="#7a1f2e"/>
          <path d="M60 15 Q65 8 70 15 Q75 8 80 15" stroke="#7a1f2e" strokeWidth="1.2" fill="none"/>
          <path d="M45 20 Q50 13 55 20" stroke="#7a1f2e" strokeWidth="1" fill="none"/>
          <path d="M85 20 Q90 13 95 20" stroke="#7a1f2e" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      {/* Frame kotak dengan border ganda merah */}
      <div style={{
        position: 'relative', zIndex: 10,
        border: '2px solid #7a1f2e',
        outline: '4px solid #f5f0e8',
        outlineOffset: '-8px',
        backgroundColor: '#f5f0e8',
        padding: '40px 44px',
        margin: '0 56px',
        boxShadow: 'inset 0 0 0 6px #f5f0e8, inset 0 0 0 8px #7a1f2e',
      }}>

        {/* Judul - Cormorant Garamond italic */}
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '32px', color: '#5a3a6a', textAlign: 'center', marginBottom: '32px' }}>
          Hari yang Ditunggu
        </h2>

        {/* Grid 4 angka */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px 48px' }}>
          {daftarWaktu.map(({ nilai, label }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', fontWeight: 400, color: '#3d1a1a', lineHeight: 1 }}>
                {String(nilai).padStart(2, '0')}
              </span>
              {/* Label pakai Cormorant italic sesuai desain */}
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '18px', color: '#5a3a3a' }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Tombol kalender */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
          <button
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: '#3d1a1a', border: '1px solid #7a1f2e', borderRadius: '999px', padding: '7px 24px', backgroundColor: 'transparent', cursor: 'default' }}
          >
            Tambah ke Kalender
          </button>
        </div>
      </div>
    </section>
  )
}

export default BagianHitungMundur

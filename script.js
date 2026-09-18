// --- 1. Burç Yorumları Arama Fonksiyonu ---
function burcAra() {
  const input = document.getElementById('burcInput');
  if (input && input.value.trim() !== '') {
    const query = encodeURIComponent(input.value.trim() + ' burcu günlük yorumu');
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  } else {
    alert('Lütfen bir burç adı girin!');
  }
}

// --- 2. Nöbetçi Eczane Arama Fonksiyonu ---
function eczaneAra() {
  const sehir = document.getElementById('sehir');
  const ilce = document.getElementById('ilce');
  
  if (sehir && sehir.value.trim() !== '') {
    const sehirVal = sehir.value.trim();
    const ilceVal = ilce ? ilce.value.trim() : '';
    const query = encodeURIComponent(`${sehirVal} ${ilceVal} nöbetçi eczane`);
    window.open(`https://www.google.com/maps/search/${query}`, '_blank');
  } else {
    alert('Lütfen en az bir şehir adı giriniz!');
  }
}

// --- 3. Pratik Bilgiler (Tamir / Bakım Onarım) Arama Fonksiyonu ---
function tamirAra(inputId, kategori) {
  const input = document.getElementById(inputId);
  if (input && input.value.trim() !== '') {
    const detay = input.value.trim();
    const query = encodeURIComponent(`${kategori} ${detay}`);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  } else {
    alert('Lütfen arıza tanımını yazın!');
  }
}

// --- 4. Yemek Tarifleri Arama Fonksiyonu ---
function yemekAra() {
  const input = document.getElementById('yemekInput');
  if (input && input.value.trim() !== '') {
    const query = encodeURIComponent(input.value.trim() + ' tarifi');
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  } else {
    alert('Lütfen bir yemek adı yazın!');
  }
}

// --- 5. Karaoke Yönlendirme Fonksiyonu ---
function karaokeAc(kategori) {
  const query = encodeURIComponent(`${kategori} karaoke`);
  window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
}

// --- Klavye "Enter" Tuşu Desteği (Arama kutularında Enter'a basınca çalışması için) ---
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        const parent = input.closest('.search-box, .search-form, .tamir-item');
        if (parent) {
          const btn = parent.querySelector('button');
          if (btn) btn.click();
        }
      }
    });
  });
});
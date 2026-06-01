// Shared watch catalogue and cart utilities

const WATCHES = [
  {
    id: 'rolex-submariner',
    brand: 'Rolex',
    name: 'Submariner Date',
    ref: 'Ref. 126610LN',
    price: 12500,
    badge: 'Featured',
    img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=800&q=80&fit=crop',
    ],
    desc: 'The Rolex Submariner Date is the quintessential diver\'s watch and one of the most iconic timepieces ever made. Crafted in Oystersteel with a unidirectional rotating bezel and scratch-resistant sapphire crystal, this watch is water-resistant to 300 metres and powered by the Calibre 3235 movement — offering a power reserve of approximately 70 hours.',
    specs: [
      { label: 'Case material', value: 'Oystersteel' },
      { label: 'Case diameter', value: '41 mm' },
      { label: 'Movement', value: 'Calibre 3235, Automatic' },
      { label: 'Power reserve', value: '~70 hours' },
      { label: 'Water resistance', value: '300 m / 1,000 ft' },
      { label: 'Crystal', value: 'Sapphire, scratch-resistant' },
    ],
    rating: 4.9,
    reviews: 284,
  },
  {
    id: 'rolex-datejust',
    brand: 'Rolex',
    name: 'Datejust 41',
    ref: 'Ref. 126334',
    price: 8900,
    badge: null,
    img: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80&fit=crop',
    ],
    desc: 'The Datejust is the archetype of the classic watch. First presented in 1945, it was the first self-winding waterproof chronometer wristwatch to display the date in a window at 3 o\'clock on the dial.',
    specs: [
      { label: 'Case material', value: 'Rolesor (steel & gold)' },
      { label: 'Case diameter', value: '41 mm' },
      { label: 'Movement', value: 'Calibre 3235, Automatic' },
      { label: 'Power reserve', value: '~70 hours' },
      { label: 'Water resistance', value: '100 m / 330 ft' },
      { label: 'Dial', value: 'Silver, index' },
    ],
    rating: 4.8,
    reviews: 196,
  },
  {
    id: 'omega-speedmaster',
    brand: 'Omega',
    name: 'Speedmaster Moonwatch',
    ref: 'Ref. 310.30.42.50.01.001',
    price: 6700,
    badge: 'Bestseller',
    img: 'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=800&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&q=80&fit=crop',
    ],
    desc: 'The Omega Speedmaster Moonwatch Professional is the legendary chronograph worn by NASA astronauts on every crewed mission to the Moon. Powered by the manual-winding Co-Axial Master Chronometer Calibre 3861.',
    specs: [
      { label: 'Case material', value: 'Stainless steel' },
      { label: 'Case diameter', value: '42 mm' },
      { label: 'Movement', value: 'Calibre 3861, Manual' },
      { label: 'Power reserve', value: '~50 hours' },
      { label: 'Water resistance', value: '50 m / 165 ft' },
      { label: 'Crystal', value: 'Hesalite acrylic' },
    ],
    rating: 4.9,
    reviews: 341,
  },
  {
    id: 'patek-nautilus',
    brand: 'Patek Philippe',
    name: 'Nautilus 5711',
    ref: 'Ref. 5711/1A-010',
    price: 35000,
    badge: 'Rare',
    img: 'https://images.unsplash.com/photo-1627123419023-c94cfc3f9fc5?w=800&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1627123419023-c94cfc3f9fc5?w=800&q=80&fit=crop',
    ],
    desc: 'Designed by Gérald Genta and introduced in 1976, the Nautilus redefined the concept of the luxury sports watch. Now discontinued, it commands a significant premium on the secondary market.',
    specs: [
      { label: 'Case material', value: 'Stainless steel' },
      { label: 'Case diameter', value: '40 mm' },
      { label: 'Movement', value: 'Calibre 26-330 SC, Automatic' },
      { label: 'Power reserve', value: '~45 hours' },
      { label: 'Water resistance', value: '120 m / 393 ft' },
      { label: 'Dial', value: 'Blue, horizontal embossed' },
    ],
    rating: 5.0,
    reviews: 88,
  },
  {
    id: 'ap-royal-oak',
    brand: 'Audemars Piguet',
    name: 'Royal Oak 15500ST',
    ref: 'Ref. 15500ST.OO.1220ST.01',
    price: 28000,
    badge: null,
    img: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1627123419023-c94cfc3f9fc5?w=800&q=80&fit=crop',
    ],
    desc: 'The Royal Oak was the world\'s first luxury sports watch in stainless steel, launched in 1972. The 15500ST features the new Generation 2 dial and the Calibre 4302 movement.',
    specs: [
      { label: 'Case material', value: 'Stainless steel' },
      { label: 'Case diameter', value: '41 mm' },
      { label: 'Movement', value: 'Calibre 4302, Automatic' },
      { label: 'Power reserve', value: '~70 hours' },
      { label: 'Water resistance', value: '50 m / 165 ft' },
      { label: 'Dial', value: 'Blue tapisserie' },
    ],
    rating: 4.9,
    reviews: 127,
  },
  {
    id: 'tag-carrera',
    brand: 'TAG Heuer',
    name: 'Carrera Calibre 16',
    ref: 'Ref. CV2014.BA0794',
    price: 4200,
    badge: 'In Stock',
    img: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80&fit=crop',
    imgs: [
      'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80&fit=crop',
      'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=800&q=80&fit=crop',
    ],
    desc: 'The TAG Heuer Carrera is a legendary racing chronograph, first introduced in 1963. Inspired by the treacherous Carrera Panamericana road race, this watch embodies the spirit of motorsport.',
    specs: [
      { label: 'Case material', value: 'Stainless steel' },
      { label: 'Case diameter', value: '43 mm' },
      { label: 'Movement', value: 'Calibre 16, Automatic' },
      { label: 'Power reserve', value: '~42 hours' },
      { label: 'Water resistance', value: '100 m / 330 ft' },
      { label: 'Crystal', value: 'Sapphire' },
    ],
    rating: 4.7,
    reviews: 215,
  },
];

// Upsell / accessories
const ACCESSORIES = [
  {
    id: 'watch-box',
    name: 'Luxury Watch Box',
    price: 280,
    img: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&q=80&fit=crop',
  },
  {
    id: 'strap-leather',
    name: 'Alligator Leather Strap',
    price: 450,
    img: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&q=80&fit=crop',
  },
  {
    id: 'insurance',
    name: '2-Year Insurance Plan',
    price: 320,
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80&fit=crop',
  },
];

// ── Cart helpers ──────────────────────────────────────────────────────────────

function getCart() {
  return JSON.parse(localStorage.getItem('he_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('he_cart', JSON.stringify(cart));
}

function addToCart(watch) {
  const cart = getCart();
  const existing = cart.find(i => i.id === watch.id);
  if (existing) { existing.qty += 1; } else { cart.push({ ...watch, qty: 1 }); }
  saveCart(cart);
  updateCartBadge();
}

function removeFromCart(id) {
  const cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
  updateCartBadge();
}

function cartTotal() {
  return getCart().reduce((s, i) => s + i.price * i.qty, 0);
}

function updateCartBadge() {
  const count = getCart().reduce((s, i) => s + i.qty, 0);
  // icon badge (quick mode / old usage)
  const badge = document.getElementById('cartBadge');
  if (badge) { badge.textContent = count; badge.style.display = count > 0 ? 'flex' : 'none'; }
  // inline nav count
  const navCount = document.getElementById('cartNavCount');
  if (navCount) { navCount.textContent = count; navCount.style.display = count > 0 ? 'inline-flex' : 'none'; }
}

function setModeBadge() {
  const el = document.getElementById('modeBadge');
  if (!el) return;
  if (CONFIG.QUICK_CHECKOUT) {
    el.className = 'mode-badge mode-quick';
    el.textContent = '⚡ Quick Checkout Mode';
  } else {
    el.className = 'mode-badge mode-slow';
    el.textContent = '🐢 Standard Checkout Mode';
  }
}

function showToast(msg) {
  let t = document.getElementById('globalToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'globalToast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.innerHTML = `<span class="toast-icon">✓</span> ${msg}`;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

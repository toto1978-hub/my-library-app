/* ========================================
   나만의 도서관 (My Library) - App Logic
   ======================================== */

// ===== State =====
let state = {
  books: [],
  cards: [],
  authors: [],
};

// ===== Recommended Libraries Data =====
const recommendedLibraries = [
  {
    name: '서울도서관',
    region: '서울',
    desc: '시청 옆 옛 서울시청사를 리모델링한 아름다운 도서관. 고풍스러운 건축미와 현대적 시설이 조화를 이룹니다.',
    address: '서울 중구 세종대로 110',
    hours: '평일 09:00~21:00 / 주말 09:00~18:00',
    mapUrl: 'https://map.naver.com/v5/search/서울도서관',
    emoji: '🏛️',
    restaurants: [
      { name: '무교동 낙지', category: '한식', rating: 4.5, blogUrl: 'https://search.naver.com/search.naver?query=무교동+낙지+맛집+블로그' },
      { name: '광화문 미진', category: '메밀국수', rating: 4.6, blogUrl: 'https://search.naver.com/search.naver?query=광화문+미진+맛집+블로그' },
    ],
  },
  {
    name: '국립중앙도서관',
    region: '서울',
    desc: '대한민국 대표 국가도서관. 1,200만 권 이상의 장서와 다양한 디지털 자료를 보유하고 있습니다.',
    address: '서울 서초구 반포대로 201',
    hours: '평일 09:00~18:00 / 토 09:00~17:00',
    mapUrl: 'https://map.naver.com/v5/search/국립중앙도서관',
    emoji: '📖',
    restaurants: [
      { name: '반포 리첸 카페', category: '카페/디저트', rating: 4.4, blogUrl: 'https://search.naver.com/search.naver?query=반포+리첸카페+블로그' },
      { name: '소반', category: '한정식', rating: 4.7, blogUrl: 'https://search.naver.com/search.naver?query=서초+소반+한정식+블로그' },
    ],
  },
  {
    name: '별마당 도서관',
    region: '서울',
    desc: '코엑스 안에 있는 초대형 개방형 도서관. 13m 높이의 거대한 서가와 멋진 인테리어로 유명합니다.',
    address: '서울 강남구 영동대로 513 코엑스몰',
    hours: '매일 10:00~22:00',
    mapUrl: 'https://map.naver.com/v5/search/별마당도서관',
    emoji: '⭐',
    restaurants: [
      { name: '피에노 코엑스', category: '이탈리안', rating: 4.3, blogUrl: 'https://search.naver.com/search.naver?query=코엑스+피에노+맛집+블로그' },
      { name: '발리바이리', category: '아시안', rating: 4.5, blogUrl: 'https://search.naver.com/search.naver?query=코엑스+발리바이리+블로그' },
    ],
  },
  {
    name: '서울책보고',
    region: '서울',
    desc: '송파구 옛 잠실 수영장을 리모델링한 헌책방 복합문화공간. 독특한 분위기가 매력적입니다.',
    address: '서울 송파구 올림픽로 32길 2-21',
    hours: '화~일 10:00~20:00 (월 휴관)',
    mapUrl: 'https://map.naver.com/v5/search/서울책보고',
    emoji: '📚',
    restaurants: [
      { name: '잠실 새마을식당', category: '한식', rating: 4.2, blogUrl: 'https://search.naver.com/search.naver?query=잠실+새마을식당+블로그' },
      { name: '송리단길 카페거리', category: '카페', rating: 4.6, blogUrl: 'https://search.naver.com/search.naver?query=송리단길+카페+맛집+블로그' },
    ],
  },
  {
    name: '정독도서관',
    region: '서울',
    desc: '북촌 한옥마을 근처에 위치한 역사 깊은 도서관. 아름다운 정원과 고즈넉한 분위기가 일품입니다.',
    address: '서울 종로구 북촌로5길 48',
    hours: '평일 09:00~22:00 / 주말 09:00~17:00',
    mapUrl: 'https://map.naver.com/v5/search/정독도서관',
    emoji: '🌿',
    restaurants: [
      { name: '북촌 두레', category: '한정식', rating: 4.7, blogUrl: 'https://search.naver.com/search.naver?query=북촌+두레+한정식+블로그' },
      { name: '삼청동 수제비', category: '한식', rating: 4.5, blogUrl: 'https://search.naver.com/search.naver?query=삼청동+수제비+맛집+블로그' },
    ],
  },
  {
    name: '느티나무도서관',
    region: '경기',
    desc: '용인시에 위치한 사립 공공도서관. 따뜻한 분위기와 커뮤니티 중심의 운영으로 전국적 인지도를 가지고 있습니다.',
    address: '경기 용인시 수지구 수풍로 116번길 22',
    hours: '화~토 10:00~18:00',
    mapUrl: 'https://map.naver.com/v5/search/느티나무도서관',
    emoji: '🌳',
    restaurants: [
      { name: '수지 봉된장', category: '한식', rating: 4.4, blogUrl: 'https://search.naver.com/search.naver?query=수지+봉된장+맛집+블로그' },
      { name: '카페 드 라므', category: '카페', rating: 4.3, blogUrl: 'https://search.naver.com/search.naver?query=수지+카페드라므+블로그' },
    ],
  },
  {
    name: '판교도서관',
    region: '경기',
    desc: '성남 판교 테크노밸리 인근의 현대적 도서관. IT 특화 자료와 쾌적한 열람 공간이 돋보입니다.',
    address: '경기 성남시 분당구 판교역로 200',
    hours: '평일 09:00~22:00 / 주말 09:00~17:00',
    mapUrl: 'https://map.naver.com/v5/search/판교도서관',
    emoji: '💻',
    restaurants: [
      { name: '판교 크래프트한스', category: '양식', rating: 4.5, blogUrl: 'https://search.naver.com/search.naver?query=판교+크래프트한스+맛집+블로그' },
      { name: '백패커스 콘밥', category: '한식', rating: 4.3, blogUrl: 'https://search.naver.com/search.naver?query=판교+백패커스+콘밥+블로그' },
    ],
  },
  {
    name: '파주 지혜의숲',
    region: '경기',
    desc: '파주출판도시 안의 24시간 개방 도서관. 출판사들이 기증한 수십만 권의 책들이 천장까지 쌓여있는 장관을 자랑합니다.',
    address: '경기 파주시 회동길 145',
    hours: '24시간 개방',
    mapUrl: 'https://map.naver.com/v5/search/파주지혜의숲',
    emoji: '🌲',
    restaurants: [
      { name: '더 북 카페', category: '카페', rating: 4.6, blogUrl: 'https://search.naver.com/search.naver?query=파주출판도시+더북카페+블로그' },
      { name: '헤이리 밀밭', category: '파스타', rating: 4.4, blogUrl: 'https://search.naver.com/search.naver?query=헤이리+밀밭+맛집+블로그' },
    ],
  },
  {
    name: '인천광역시립도서관(미추홀)',
    region: '인천',
    desc: '인천의 대표 공공도서관. 넓은 열람실과 다양한 문화 프로그램이 운영되고 있습니다.',
    address: '인천 미추홀구 석정로 89',
    hours: '평일 09:00~18:00 / 토 09:00~17:00',
    mapUrl: 'https://map.naver.com/v5/search/인천광역시립도서관',
    emoji: '🌊',
    restaurants: [
      { name: '신포만두', category: '만두/중식', rating: 4.5, blogUrl: 'https://search.naver.com/search.naver?query=인천+신포만두+맛집+블로그' },
      { name: '연안부두 회센터', category: '해산물', rating: 4.4, blogUrl: 'https://search.naver.com/search.naver?query=인천+연안부두+회+맛집+블로그' },
    ],
  },
  {
    name: '송도국제도서관',
    region: '인천',
    desc: '송도 센트럴파크 인근에 위치한 현대적 도서관. 국제 도시답게 다국어 자료가 풍부합니다.',
    address: '인천 연수구 센트럴로 194',
    hours: '평일 09:00~22:00 / 주말 09:00~17:00',
    mapUrl: 'https://map.naver.com/v5/search/송도국제도서관',
    emoji: '🌏',
    restaurants: [
      { name: '송도 트리플스트리트 맛집거리', category: '다양', rating: 4.3, blogUrl: 'https://search.naver.com/search.naver?query=송도+트리플스트리트+맛집+블로그' },
      { name: '커넬 송도점', category: '브런치', rating: 4.5, blogUrl: 'https://search.naver.com/search.naver?query=송도+커넬+브런치+블로그' },
    ],
  },
  {
    name: '부산시립시민도서관',
    region: '기타',
    desc: '부산의 역사와 함께한 오래된 공공도서관. 부산의 시민 사랑을 받는 대표적인 도서관입니다.',
    address: '부산 부산진구 백양대로 76',
    hours: '평일 09:00~18:00',
    mapUrl: 'https://map.naver.com/v5/search/부산시립시민도서관',
    emoji: '🐟',
    restaurants: [
      { name: '할매국밥 서면', category: '국밥', rating: 4.6, blogUrl: 'https://search.naver.com/search.naver?query=서면+할매국밥+맛집+블로그' },
      { name: '삼진어묵 체험관', category: '어묵', rating: 4.7, blogUrl: 'https://search.naver.com/search.naver?query=부산+삼진어묵+블로그' },
    ],
  },
  {
    name: '대전 한밭도서관',
    region: '기타',
    desc: '대전의 대표 도서관으로, 한밭수목원 근처에 위치해 자연과 독서를 함께 즐길 수 있습니다.',
    address: '대전 서구 한밭대로 652',
    hours: '평일 09:00~18:00',
    mapUrl: 'https://map.naver.com/v5/search/한밭도서관',
    emoji: '🌸',
    restaurants: [
      { name: '성심당 본점', category: '베이커리', rating: 4.8, blogUrl: 'https://search.naver.com/search.naver?query=대전+성심당+본점+블로그' },
      { name: '두부두루치기 맛집', category: '한식', rating: 4.5, blogUrl: 'https://search.naver.com/search.naver?query=대전+한밭수목원+근처+맛집+블로그' },
    ],
  },
];

// Library image colors (gradient backgrounds for cards since we don't have real images)
const libraryCardColors = [
  'linear-gradient(135deg, #1a1a3e 0%, #2d2b55 50%, #4834d4 100%)',
  'linear-gradient(135deg, #0c3547 0%, #0f4c75 50%, #1e90ff 100%)',
  'linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)',
  'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
  'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
  'linear-gradient(135deg, #1d4350 0%, #a43931 100%)',
  'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
  'linear-gradient(135deg, #1c1c3c 0%, #3a3a7a 50%, #6a5acd 100%)',
  'linear-gradient(135deg, #0d1117 0%, #1a3a4a 50%, #0abde3 100%)',
  'linear-gradient(135deg, #2c003e 0%, #512b58 50%, #8b5cf6 100%)',
  'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  'linear-gradient(135deg, #1b1b3a 0%, #0d7377 50%, #14ffec 100%)',
];

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  setupTabs();
  setupBookForm();
  setupCardForm();
  setupCardImageUpload();
  setupAuthorForm();
  setupRecommendFilters();
  setupScanner();
  setupNotifications();
  setupMobileConnect();
  renderAll();
  updateDate();
  checkReturnNotifications();
});

// ===== LocalStorage =====
function saveState() {
  localStorage.setItem('myLibraryApp', JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem('myLibraryApp');
  if (saved) {
    try {
      state = JSON.parse(saved);
    } catch {
      state = { books: [], cards: [], authors: [] };
    }
  }
}

// ===== Date Display =====
function updateDate() {
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
  document.getElementById('currentDate').textContent = now.toLocaleDateString('ko-KR', options);
}

// ===== Tab Navigation =====
function setupTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;

      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      document.getElementById(`panel-${tab}`).classList.add('active');
    });
  });
}

// ===== Render All =====
function renderAll() {
  renderBooks();
  renderCards();
  renderAuthors();
  renderRecommend('all');
  updateBooksBadge();
}

// ===== Toast =====
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== D-Day Calculation =====
function getDday(dateStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateStr);
  target.setHours(0, 0, 0, 0);
  const diff = Math.ceil((target - today) / (1000 * 60 * 60 * 24));
  return diff;
}

function getDdayText(dday) {
  if (dday < 0) return `${Math.abs(dday)}일 연체!`;
  if (dday === 0) return '오늘 반납!';
  return `D-${dday}`;
}

function getDdayClass(dday) {
  if (dday < 0) return 'danger';
  if (dday <= 3) return 'warning';
  return 'safe';
}

// ===== 📖 Books =====
function setupBookForm() {
  const addBtn = document.getElementById('addBookBtn');
  const form = document.getElementById('bookForm');
  const saveBtn = document.getElementById('saveBookBtn');
  const cancelBtn = document.getElementById('cancelBookBtn');

  addBtn.addEventListener('click', () => {
    form.classList.toggle('hidden');
    // Set default dates
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('borrowDate').value = today;
    const twoWeeks = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    document.getElementById('returnDate').value = twoWeeks;
  });

  cancelBtn.addEventListener('click', () => {
    form.classList.add('hidden');
    clearBookForm();
  });

  saveBtn.addEventListener('click', () => {
    const title = document.getElementById('bookTitle').value.trim();
    const author = document.getElementById('bookAuthor').value.trim();
    const library = document.getElementById('bookLibrary').value.trim();
    const borrowDate = document.getElementById('borrowDate').value;
    const returnDate = document.getElementById('returnDate').value;

    if (!title) {
      showToast('📕 책 제목을 입력해주세요');
      return;
    }
    if (!returnDate) {
      showToast('📅 반납일을 입력해주세요');
      return;
    }

    state.books.push({
      id: Date.now(),
      title,
      author,
      library,
      borrowDate,
      returnDate,
      returned: false,
    });

    saveState();
    renderBooks();
    updateBooksBadge();
    form.classList.add('hidden');
    clearBookForm();
    showToast(`📚 "${title}" 이(가) 추가되었습니다`);
  });
}

function clearBookForm() {
  document.getElementById('bookTitle').value = '';
  document.getElementById('bookAuthor').value = '';
  document.getElementById('bookLibrary').value = '';
  document.getElementById('borrowDate').value = '';
  document.getElementById('returnDate').value = '';
}

function renderBooks() {
  const list = document.getElementById('booksList');
  const empty = document.getElementById('booksEmpty');

  // Clear existing items, keep empty state
  list.querySelectorAll('.book-item').forEach(el => el.remove());

  if (state.books.length === 0) {
    empty.style.display = '';
    return;
  }

  empty.style.display = 'none';

  // Sort: non-returned first (by return date ASC), then returned
  const sorted = [...state.books].sort((a, b) => {
    if (a.returned !== b.returned) return a.returned ? 1 : -1;
    return new Date(a.returnDate) - new Date(b.returnDate);
  });

  sorted.forEach(book => {
    const dday = getDday(book.returnDate);
    const ddayClass = book.returned ? 'returned' : getDdayClass(dday);
    const ddayText = book.returned ? '반납 완료' : getDdayText(dday);
    const dotClass = book.returned ? 'returned-dot' : ddayClass;

    const el = document.createElement('div');
    el.className = `book-item${book.returned ? ' returned' : ''}`;
    el.innerHTML = `
      <div class="book-status-dot ${dotClass}"></div>
      <div class="book-info">
        <div class="book-title">${escapeHtml(book.title)}</div>
        <div class="book-meta">
          ${book.author ? `<span>✏️ ${escapeHtml(book.author)}</span>` : ''}
          ${book.library ? `<span>🏛️ ${escapeHtml(book.library)}</span>` : ''}
          ${book.borrowDate ? `<span>📅 ${book.borrowDate}</span>` : ''}
        </div>
      </div>
      <span class="book-dday dday-${ddayClass}">${ddayText}</span>
      <div class="book-actions">
        ${!book.returned ? `<button class="btn btn-sm btn-ghost" onclick="toggleReturn(${book.id})">✅ 반납</button>` : `<button class="btn btn-sm btn-ghost" onclick="toggleReturn(${book.id})">↩️ 복원</button>`}
        <button class="btn btn-sm btn-danger" onclick="deleteBook(${book.id})">🗑️</button>
      </div>
    `;
    list.appendChild(el);
  });
}

function updateBooksBadge() {
  const badge = document.getElementById('booksBadge');
  const activeBooks = state.books.filter(b => !b.returned).length;
  if (activeBooks > 0) {
    badge.textContent = activeBooks;
    badge.style.display = '';
  } else {
    badge.style.display = 'none';
  }
}

// Global functions for onclick
window.deleteBook = function (id) {
  const book = state.books.find(b => b.id === id);
  if (book && confirm(`"${book.title}"을(를) 삭제하시겠습니까?`)) {
    state.books = state.books.filter(b => b.id !== id);
    saveState();
    renderBooks();
    updateBooksBadge();
    showToast('🗑️ 삭제되었습니다');
  }
};

window.toggleReturn = function (id) {
  const book = state.books.find(b => b.id === id);
  if (book) {
    book.returned = !book.returned;
    saveState();
    renderBooks();
    updateBooksBadge();
    showToast(book.returned ? '✅ 반납 처리되었습니다' : '↩️ 다시 대출 상태로 변경되었습니다');
  }
};

// ===== 🪪 Library Cards =====
let selectedCardColor = 'gradient-blue';

function setupCardForm() {
  const addBtn = document.getElementById('addCardBtn');
  const form = document.getElementById('cardForm');
  const saveBtn = document.getElementById('saveCardBtn');
  const cancelBtn = document.getElementById('cancelCardBtn');

  addBtn.addEventListener('click', () => form.classList.toggle('hidden'));
  cancelBtn.addEventListener('click', () => {
    form.classList.add('hidden');
    clearCardForm();
  });

  // Color picker
  document.querySelectorAll('.color-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.color-opt').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      selectedCardColor = opt.dataset.color;
    });
  });

  saveBtn.addEventListener('click', () => {
    const libName = document.getElementById('cardLibName').value.trim();
    const number = document.getElementById('cardNumber').value.trim();
    const holder = document.getElementById('cardHolder').value.trim();
    const expiry = document.getElementById('cardExpiry').value;

    if (!libName) {
      showToast('🏛️ 도서관 이름을 입력해주세요');
      return;
    }

    state.cards.push({
      id: Date.now(),
      libName,
      number,
      holder,
      expiry,
      color: selectedCardColor,
      image: pendingCardImage || null,
    });

    saveState();
    renderCards();
    form.classList.add('hidden');
    clearCardForm();
    pendingCardImage = null;
    showToast(`🪪 "${libName}" 이용증이 추가되었습니다`);
  });
}

function clearCardForm() {
  document.getElementById('cardLibName').value = '';
  document.getElementById('cardNumber').value = '';
  document.getElementById('cardHolder').value = '';
  document.getElementById('cardExpiry').value = '';
}

function renderCards() {
  const grid = document.getElementById('cardsList');
  const empty = document.getElementById('cardsEmpty');

  grid.querySelectorAll('.library-card').forEach(el => el.remove());

  if (state.cards.length === 0) {
    empty.style.display = '';
    return;
  }

  empty.style.display = 'none';

  state.cards.forEach(card => {
    const expiryText = card.expiry ? `유효기간: ${card.expiry}` : '';
    const dday = card.expiry ? getDday(card.expiry) : null;
    let expiryStatus = '';
    if (dday !== null) {
      if (dday < 0) expiryStatus = ' (만료됨)';
      else if (dday <= 30) expiryStatus = ` (${dday}일 남음)`;
    }

    const el = document.createElement('div');
    el.className = `library-card ${card.color}`;
    const imageSection = card.image ? `
      <div class="card-image-section">
        <button class="card-image-toggle" onclick="toggleCardImage(${card.id})">📷 이용증 사진 보기</button>
        <div class="card-image-container hidden" id="cardImg-${card.id}">
          <img src="${card.image}" alt="이용증 사진">
        </div>
      </div>` : '';
    el.innerHTML = `
      <button class="card-delete-btn" onclick="deleteCard(${card.id})">✕</button>
      <div class="card-top">
        <div>
          <div class="card-label">LIBRARY CARD</div>
          <div class="card-lib-name">${escapeHtml(card.libName)}</div>
        </div>
      </div>
      <div class="card-number">${escapeHtml(card.number || '0000 0000')}</div>
      <div class="card-bottom">
        <div>
          <div class="card-label">MEMBER</div>
          <div class="card-holder-name">${escapeHtml(card.holder || '회원')}</div>
        </div>
        <div class="card-expiry-info">${expiryText}${expiryStatus}</div>
      </div>
      ${imageSection}
    `;
    grid.appendChild(el);
  });
}

window.deleteCard = function (id) {
  if (confirm('이 이용증을 삭제하시겠습니까?')) {
    state.cards = state.cards.filter(c => c.id !== id);
    saveState();
    renderCards();
    showToast('🗑️ 이용증이 삭제되었습니다');
  }
};

// ===== ✍️ Authors =====
function setupAuthorForm() {
  const addBtn = document.getElementById('addAuthorBtn');
  const form = document.getElementById('authorForm');
  const saveBtn = document.getElementById('saveAuthorBtn');
  const cancelBtn = document.getElementById('cancelAuthorBtn');

  addBtn.addEventListener('click', () => form.classList.toggle('hidden'));
  cancelBtn.addEventListener('click', () => {
    form.classList.add('hidden');
    clearAuthorForm();
  });

  saveBtn.addEventListener('click', () => {
    const name = document.getElementById('authorName').value.trim();
    const genre = document.getElementById('authorGenre').value;
    const memo = document.getElementById('authorMemo').value.trim();

    if (!name) {
      showToast('✏️ 작가 이름을 입력해주세요');
      return;
    }

    state.authors.push({
      id: Date.now(),
      name,
      genre,
      memo,
    });

    saveState();
    renderAuthors();
    form.classList.add('hidden');
    clearAuthorForm();
    showToast(`✍️ "${name}" 작가가 추가되었습니다`);
  });
}

function clearAuthorForm() {
  document.getElementById('authorName').value = '';
  document.getElementById('authorGenre').value = '소설';
  document.getElementById('authorMemo').value = '';
}

function renderAuthors() {
  const list = document.getElementById('authorsList');
  const empty = document.getElementById('authorsEmpty');

  list.querySelectorAll('.author-item').forEach(el => el.remove());

  if (state.authors.length === 0) {
    empty.style.display = '';
    return;
  }

  empty.style.display = 'none';

  state.authors.forEach(author => {
    const encodedName = encodeURIComponent(author.name);
    const kyoboUrl = `https://search.kyobobook.co.kr/search?keyword=${encodedName}&gbCode=TOT&target=total&online=&ejkGb=KOR&orderClick=pub`;
    const aladinUrl = `https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=All&SearchWord=${encodedName}&x=0&y=0`;
    const yes24Url = `https://www.yes24.com/Product/Search?domain=ALL&query=${encodedName}`;

    const el = document.createElement('div');
    el.className = 'author-item';
    el.innerHTML = `
      <div class="author-top">
        <div>
          <span class="author-name">${escapeHtml(author.name)}</span>
          <span class="author-genre">${escapeHtml(author.genre)}</span>
        </div>
        <button class="btn btn-sm btn-danger author-delete-btn" onclick="deleteAuthor(${author.id})">🗑️</button>
      </div>
      ${author.memo ? `<div class="author-memo">"${escapeHtml(author.memo)}"</div>` : ''}
      <div class="author-links">
        <a href="${kyoboUrl}" target="_blank" class="btn-link">📗 교보문고</a>
        <a href="${aladinUrl}" target="_blank" class="btn-link">📙 알라딘</a>
        <a href="${yes24Url}" target="_blank" class="btn-link">📘 YES24</a>
        <a href="https://search.naver.com/search.naver?where=news&query=${encodedName}+%EC%9D%B8%ED%84%B0%EB%B7%B0" target="_blank" class="btn-link">🎤 최신 인터뷰</a>
        <a href="https://www.youtube.com/results?search_query=${encodedName}+%EC%9D%B8%ED%84%B0%EB%B7%B0" target="_blank" class="btn-link">📺 YouTube</a>
      </div>
    `;
    list.appendChild(el);
  });
}

window.deleteAuthor = function (id) {
  const author = state.authors.find(a => a.id === id);
  if (author && confirm(`"${author.name}" 작가를 삭제하시겠습니까?`)) {
    state.authors = state.authors.filter(a => a.id !== id);
    saveState();
    renderAuthors();
    showToast('🗑️ 삭제되었습니다');
  }
};

// ===== 🏛️ Recommended Libraries =====
function setupRecommendFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRecommend(btn.dataset.region);
    });
  });
}

function renderRecommend(region) {
  const grid = document.getElementById('recommendList');
  grid.innerHTML = '';

  const filtered = region === 'all'
    ? recommendedLibraries
    : recommendedLibraries.filter(lib => lib.region === region);

  filtered.forEach((lib, i) => {
    const colorIndex = recommendedLibraries.indexOf(lib);
    // Build restaurant HTML
    let restaurantHtml = '';
    if (lib.restaurants && lib.restaurants.length > 0) {
      const items = lib.restaurants.map(r => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid var(--border-glass);">
          <div>
            <span style="font-weight:600;">${escapeHtml(r.name)}</span>
            <span style="font-size:0.75rem; color:var(--text-muted); margin-left:6px;">${escapeHtml(r.category)}</span>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="color:#ffc107; font-size:0.8rem;">⭐ ${r.rating}</span>
            <a href="${r.blogUrl}" target="_blank" class="btn-link" style="padding:3px 8px; font-size:0.72rem;">📝 블로그</a>
          </div>
        </div>
      `).join('');
      restaurantHtml = `
        <div style="margin-top:12px; padding-top:12px; border-top:1px solid var(--border-glass);">
          <div style="font-size:0.85rem; font-weight:600; margin-bottom:8px;">🍽️ 근처 맛집 추천</div>
          ${items}
        </div>
      `;
    }
    // Build blog search link
    const blogSearchUrl = `https://search.naver.com/search.naver?where=blog&query=${encodeURIComponent(lib.name + ' 근처 맛집')}`;

    const el = document.createElement('div');
    el.className = 'recommend-card';
    el.innerHTML = `
      <div class="recommend-img" style="background: ${libraryCardColors[colorIndex % libraryCardColors.length]}; display: flex; align-items: center; justify-content: center;">
        <span style="font-size: 3.5rem;">${lib.emoji}</span>
      </div>
      <div class="recommend-body">
        <div class="recommend-name">
          ${escapeHtml(lib.name)}
          <span class="recommend-region-badge">${lib.region}</span>
        </div>
        <div class="recommend-desc">${escapeHtml(lib.desc)}</div>
        <div class="recommend-info">📍 ${escapeHtml(lib.address)}<br>🕐 ${escapeHtml(lib.hours)}</div>
        <div class="recommend-actions">
          <a href="${lib.mapUrl}" target="_blank" class="btn-link">🗺️ 네이버 지도</a>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(lib.address)}" target="_blank" class="btn-link">🧭 길찾기</a>
          <a href="${blogSearchUrl}" target="_blank" class="btn-link">🍽️ 근처 맛집</a>
        </div>
        ${restaurantHtml}
      </div>
    `;
    grid.appendChild(el);
  });
}

// ===== Utils =====
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ===== 📷 Barcode Scanner =====
let html5QrScanner = null;
let scannedBookData = null;

function setupScanner() {
  const scanBtn = document.getElementById('scanBookBtn');
  const overlay = document.getElementById('scannerOverlay');
  const closeBtn = document.getElementById('closeScannerBtn');
  const addBtn = document.getElementById('scannerAddBtn');
  const retryBtn = document.getElementById('scannerRetryBtn');

  scanBtn.addEventListener('click', openScanner);
  closeBtn.addEventListener('click', closeScanner);
  addBtn.addEventListener('click', addScannedBook);
  retryBtn.addEventListener('click', retryScanner);

  // Close on overlay click (outside modal)
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeScanner();
  });
}

function openScanner() {
  const overlay = document.getElementById('scannerOverlay');
  const body = document.querySelector('.scanner-body');
  const result = document.getElementById('scannerResult');
  const status = document.getElementById('scannerStatus');

  overlay.classList.remove('hidden');
  result.classList.add('hidden');
  body.style.display = '';
  status.innerHTML = '<div class="scanner-pulse"></div><span>카메라를 책 뒷면의 바코드에 맞춰주세요</span>';

  scannedBookData = null;

  // Initialize scanner
  try {
    html5QrScanner = new Html5Qrcode('scannerViewfinder');

    const config = {
      fps: 10,
      qrbox: { width: 300, height: 150 },
      formatsToSupport: [
        Html5QrcodeSupportedFormats.EAN_13,
        Html5QrcodeSupportedFormats.EAN_8,
        Html5QrcodeSupportedFormats.CODE_128,
        Html5QrcodeSupportedFormats.QR_CODE,
      ],
    };

    html5QrScanner.start(
      { facingMode: 'environment' },
      config,
      onScanSuccess,
      () => { } // ignore scan failures (normal during scanning)
    ).catch(err => {
      console.error('Camera start error:', err);
      status.innerHTML = `<span>⚠️ 카메라를 사용할 수 없습니다. HTTPS 또는 localhost에서 실행해주세요.</span>`;
    });
  } catch (err) {
    console.error('Scanner init error:', err);
    document.getElementById('scannerStatus').innerHTML =
      `<span>⚠️ 스캐너를 초기화할 수 없습니다.</span>`;
  }
}

function closeScanner() {
  const overlay = document.getElementById('scannerOverlay');
  overlay.classList.add('hidden');

  if (html5QrScanner) {
    html5QrScanner.stop().catch(() => { });
    html5QrScanner.clear();
    html5QrScanner = null;
  }
}

async function onScanSuccess(decodedText) {
  // Stop scanning immediately
  if (html5QrScanner) {
    await html5QrScanner.stop().catch(() => { });
  }

  const status = document.getElementById('scannerStatus');
  const body = document.querySelector('.scanner-body');

  // Show loading state
  status.innerHTML = `
    <div class="scanner-loading">
      <div class="scanner-spinner"></div>
      <span>📖 "${decodedText}" 책 정보를 찾고 있습니다...</span>
    </div>
  `;

  // Look up book info from Open Library
  try {
    const bookInfo = await lookupISBN(decodedText);

    if (bookInfo) {
      scannedBookData = bookInfo;
      showScanResult(bookInfo);
    } else {
      // ISBN found but no data — still let user add manually
      scannedBookData = {
        title: '',
        author: '',
        isbn: decodedText,
      };
      status.innerHTML = `
        <div class="scanner-loading">
          <span>📚 바코드 "${decodedText}"를 인식했지만 책 정보를 찾지 못했습니다.</span>
          <span style="font-size:0.8rem; color: var(--text-muted);">수동으로 입력하시거나 다시 스캔해주세요.</span>
          <div style="display:flex; gap:8px; margin-top:10px;">
            <button class="btn btn-ghost" onclick="retryScanner()">🔄 다시 스캔</button>
            <button class="btn btn-primary" onclick="manualAddFromScan('${escapeHtml(decodedText)}')">✏️ 직접 입력</button>
          </div>
        </div>
      `;
    }
  } catch (err) {
    console.error('API lookup error:', err);
    status.innerHTML = `
      <div class="scanner-loading">
        <span>⚠️ 책 정보 조회 중 오류가 발생했습니다.</span>
        <div style="display:flex; gap:8px; margin-top:10px;">
          <button class="btn btn-ghost" onclick="retryScanner()">🔄 다시 스캔</button>
        </div>
      </div>
    `;
  }
}

async function lookupISBN(isbn) {
  // Clean ISBN (remove dashes, spaces)
  const cleanIsbn = isbn.replace(/[-\s]/g, '');

  try {
    const response = await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${cleanIsbn}&jscmd=data&format=json`);
    const data = await response.json();

    const key = `ISBN:${cleanIsbn}`;
    if (data[key]) {
      const book = data[key];
      return {
        title: book.title || '',
        author: (book.authors && book.authors.length > 0) ? book.authors.map(a => a.name).join(', ') : '',
        isbn: cleanIsbn,
        publisher: (book.publishers && book.publishers.length > 0) ? book.publishers[0].name : '',
        publishDate: book.publish_date || '',
        cover: book.cover ? book.cover.medium : null,
      };
    }

    // Fallback: try Open Library search API
    const searchResp = await fetch(`https://openlibrary.org/search.json?isbn=${cleanIsbn}&limit=1`);
    const searchData = await searchResp.json();

    if (searchData.docs && searchData.docs.length > 0) {
      const doc = searchData.docs[0];
      return {
        title: doc.title || '',
        author: doc.author_name ? doc.author_name.join(', ') : '',
        isbn: cleanIsbn,
        publisher: doc.publisher ? doc.publisher[0] : '',
        publishDate: doc.first_publish_year ? String(doc.first_publish_year) : '',
        cover: doc.cover_i ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg` : null,
      };
    }

    return null;
  } catch (err) {
    console.error('ISBN lookup failed:', err);
    return null;
  }
}

function showScanResult(bookInfo) {
  const body = document.querySelector('.scanner-body');
  const result = document.getElementById('scannerResult');

  body.style.display = 'none';
  result.classList.remove('hidden');

  document.getElementById('scannedTitle').textContent = `📕 ${bookInfo.title || '제목 없음'}`;
  document.getElementById('scannedAuthor').textContent = `✏️ ${bookInfo.author || '저자 미상'}`;
  document.getElementById('scannedIsbn').textContent = `ISBN: ${bookInfo.isbn}`;
}

function addScannedBook() {
  if (!scannedBookData) return;

  const today = new Date().toISOString().split('T')[0];
  const twoWeeks = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  state.books.push({
    id: Date.now(),
    title: scannedBookData.title || `스캔된 책 (${scannedBookData.isbn})`,
    author: scannedBookData.author || '',
    library: '',
    borrowDate: today,
    returnDate: twoWeeks,
    returned: false,
  });

  saveState();
  renderBooks();
  updateBooksBadge();
  closeScanner();
  showToast(`📷 "${scannedBookData.title || scannedBookData.isbn}" 이(가) 추가되었습니다!`);
}

function retryScanner() {
  const body = document.querySelector('.scanner-body');
  const result = document.getElementById('scannerResult');
  const status = document.getElementById('scannerStatus');

  result.classList.add('hidden');
  body.style.display = '';
  status.innerHTML = '<div class="scanner-pulse"></div><span>카메라를 책 뒷면의 바코드에 맞춰주세요</span>';

  scannedBookData = null;

  // Restart scanner
  if (html5QrScanner) {
    html5QrScanner.clear();
  }

  try {
    html5QrScanner = new Html5Qrcode('scannerViewfinder');
    html5QrScanner.start(
      { facingMode: 'environment' },
      {
        fps: 10,
        qrbox: { width: 300, height: 150 },
        formatsToSupport: [
          Html5QrcodeSupportedFormats.EAN_13,
          Html5QrcodeSupportedFormats.EAN_8,
          Html5QrcodeSupportedFormats.CODE_128,
          Html5QrcodeSupportedFormats.QR_CODE,
        ],
      },
      onScanSuccess,
      () => { }
    ).catch(err => {
      status.innerHTML = `<span>⚠️ 카메라를 다시 시작할 수 없습니다.</span>`;
    });
  } catch (err) {
    status.innerHTML = `<span>⚠️ 스캐너를 재시작할 수 없습니다.</span>`;
  }
}

// Close scanner and open manual form with ISBN pre-filled
window.manualAddFromScan = function (isbn) {
  closeScanner();
  // Open the manual form
  const form = document.getElementById('bookForm');
  form.classList.remove('hidden');
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('borrowDate').value = today;
  const twoWeeks = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  document.getElementById('returnDate').value = twoWeeks;
  document.getElementById('bookTitle').focus();
  showToast(`📷 바코드 ${isbn}을 인식했습니다. 책 정보를 직접 입력해주세요.`);
};

// ===== 📷 Card Image Upload =====
let pendingCardImage = null;

function setupCardImageUpload() {
  const dropZone = document.getElementById('cardImageDropZone');
  const fileInput = document.getElementById('cardImage');
  const previewArea = document.getElementById('cardImagePreviewArea');

  if (!dropZone || !fileInput) return;

  dropZone.addEventListener('click', () => fileInput.click());

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    processCardImage(file, previewArea);
  });

  // Drag and drop
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = 'var(--accent-blue)';
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.style.borderColor = '';
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.style.borderColor = '';
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      processCardImage(file, previewArea);
    }
  });
}

function processCardImage(file, previewArea) {
  const reader = new FileReader();
  reader.onload = (e) => {
    pendingCardImage = e.target.result;
    previewArea.innerHTML = `<img src="${e.target.result}" class="image-upload-preview" alt="이용증 사진">`;
  };
  reader.readAsDataURL(file);
}

// Toggle card image visibility
window.toggleCardImage = function (id) {
  const container = document.getElementById(`cardImg-${id}`);
  if (container) {
    container.classList.toggle('hidden');
  }
};

// ===== 🔔 Notifications =====
function setupNotifications() {
  const toggleBtn = document.getElementById('notifyToggle');
  if (!toggleBtn) return;

  // Check current permission state
  updateNotifyButton();

  toggleBtn.addEventListener('click', async () => {
    if (!('Notification' in window)) {
      showToast('⚠️ 이 브라우저는 알림을 지원하지 않습니다');
      return;
    }

    if (Notification.permission === 'granted') {
      showToast('✅ 알림이 이미 활성화되어 있습니다! 반납일 3일 전부터 알림을 보냅니다.');
      checkReturnNotifications();
      return;
    }

    if (Notification.permission === 'denied') {
      showToast('⚠️ 알림이 차단되어 있습니다. 브라우저 설정에서 알림을 허용해주세요.');
      return;
    }

    // Request permission
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      showToast('🔔 알림이 활성화되었습니다! 반납일이 다가오면 알려드립니다.');
      updateNotifyButton();
      checkReturnNotifications();
    } else {
      showToast('⚠️ 알림 권한이 거부되었습니다');
    }
  });

  // Periodically check (every 30 minutes)
  setInterval(checkReturnNotifications, 30 * 60 * 1000);
}

function updateNotifyButton() {
  const btn = document.getElementById('notifyToggle');
  if (!btn) return;

  if ('Notification' in window && Notification.permission === 'granted') {
    btn.classList.add('active');
    btn.innerHTML = '🔔 알림 ON';
  } else {
    btn.classList.remove('active');
    btn.innerHTML = '🔔 알림 설정';
  }
}

function checkReturnNotifications() {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;

  const activeBooks = state.books.filter(b => !b.returned);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Track which notifications we've already sent today
  const notifiedKey = `notified_${today.toISOString().split('T')[0]}`;
  const alreadyNotified = JSON.parse(localStorage.getItem(notifiedKey) || '[]');

  activeBooks.forEach(book => {
    const dday = getDday(book.returnDate);

    // Skip if already notified today for this book
    if (alreadyNotified.includes(book.id)) return;

    let message = null;
    let urgency = '';

    if (dday < 0) {
      message = `🚨 "${book.title}" ${Math.abs(dday)}일 연체중! 마스를 반납해주세요.`;
      urgency = '[연체]';
    } else if (dday === 0) {
      message = `⏰ "${book.title}" 오늘이 반납일입니다!`;
      urgency = '[오늘]';
    } else if (dday <= 3) {
      message = `📌 "${book.title}" 반납일 ${dday}일 남았습니다. (${book.returnDate})`;
      urgency = `[D-${dday}]`;
    }

    if (message) {
      try {
        new Notification(`📚 나만의 도서관 ${urgency}`, {
          body: message,
          icon: '📚',
          tag: `return-${book.id}`,
        });
        alreadyNotified.push(book.id);
      } catch (err) {
        console.error('Notification error:', err);
      }
    }
  });

  localStorage.setItem(notifiedKey, JSON.stringify(alreadyNotified));
}

// ===== 📱 Mobile Connect =====
function setupMobileConnect() {
  const btn = document.getElementById('mobileConnectBtn');
  const modal = document.getElementById('mobileModal');
  const closeBtn = document.getElementById('closeMobileBtn');
  const qrContainer = document.getElementById('qrcode');
  const urlEl = document.getElementById('mobileUrl');

  if (!btn || !modal) return;

  const ip = '192.168.0.7'; // Detected local IP
  const port = '5500';      // Default port for Live Server
  const url = `http://${ip}:${port}`;

  btn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    urlEl.textContent = url;

    // Generate QR Code if not already generated
    if (qrContainer.innerHTML === '') {
      new QRCode(qrContainer, {
        text: url,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    }
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Close on background click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });
}

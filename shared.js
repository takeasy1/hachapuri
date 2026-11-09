/* ==================== КОНСТАНТЫ ==================== */
const KEYS={
  cart:'khachapuri_cart_v1',menu:'khachapuri_menu_v1',orders:'khachapuri_orders_v1',
  reviews:'khachapuri_reviews_v1',news:'khachapuri_news_v1',users:'khachapuri_users_v1',
  session:'khachapuri_session_v1'
};
const ROLES={
  admin:{label:'Администратор',short:'Админ',color:'#c0392b'},
  manager:{label:'Менеджер',short:'Менедж',color:'#f39c12'},
  operator:{label:'Оператор',short:'Операт.',color:'#3498db'},
  news:{label:'Новости',short:'Новости',color:'#9b59b6'}
};
const ROLE_PERMISSIONS={
  admin:['dashboard','orders','menu','reviews','news','users'],
  manager:['dashboard','orders','menu','reviews','news'],
  operator:['orders'],
  news:['news']
};
const ALL_TABS=[
  {key:'dashboard',label:'📊 Дашборд'},{key:'orders',label:'📦 Заказы'},
  {key:'menu',label:'🥟 Меню'},{key:'reviews',label:'💬 Отзывы <span class="tab-badge" id="reviewsBadge"></span>'},
  {key:'news',label:'📰 Новости <span class="tab-badge" id="newsBadge"></span>'},
  {key:'users',label:'👥 Пользователи'}
];
const STATUSES={
  new:{label:'Новый',cls:'status-new'},cooking:{label:'Готовится',cls:'status-cooking'},
  delivering:{label:'В пути',cls:'status-delivering'},done:{label:'Доставлен',cls:'status-done'},
  cancelled:{label:'Отменён',cls:'status-cancelled'}
};

/* ==================== ДАННЫЕ ПО УМОЛЧАНИЮ ==================== */
const IMG={
  khachapuriImeretinskoe:'https://images.unsplash.com/photo-1604848698030-c434ba08ecea?auto=format&fit=crop&w=800&q=80',
  khachapuriAdzharskoe:'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&w=800&q=80',
  khinkali:'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=800&q=80',
  mtsvadi:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
  lobio:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
  chakhokhbili:'https://images.unsplash.com/photo-1544025162-8111f4e693c7?auto=format&fit=crop&w=800&q=80',
  pkhali:'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80',
  wine:'https://images.unsplash.com/photo-1569919659476-f0852f6834b7?auto=format&fit=crop&w=800&q=80'
};

const DEFAULT_MENU=[
  {id:1,emoji:'🥟',image:IMG.khachapuriImeretinskoe,title:'Хачапури по-имеретински',desc:'Классическая лепёшка с начинкой из сыра сулугуни и имеретинского сыра.',price:590,weight:'450 г'},
  {id:2,emoji:'🍕',image:IMG.khachapuriAdzharskoe,title:'Хачапури по-аджарски',desc:'Лодочка из теста с сыром, сливочным маслом и желтком.',price:690,weight:'400 г'},
  {id:3,emoji:'🍲',image:IMG.khinkali,title:'Хинкали с говядиной (5 шт)',desc:'Сочные грузинские пельмени с бульоном внутри, приправами и зеленью.',price:490,weight:'350 г'},
  {id:4,emoji:'🥩',image:IMG.mtsvadi,title:'Мцвади из свинины',desc:'Шашлык на углях из шейки свинины с луком и гранатом.',price:750,weight:'300 г'},
  {id:5,emoji:'🍲',image:IMG.lobio,title:'Лобио по-грузински',desc:'Тушёная красная фасоль с грецкими орехами, кинзой и специями.',price:390,weight:'250 г'},
  {id:6,emoji:'🍗',image:IMG.chakhokhbili,title:'Чахохбили из курицы',desc:'Курица, тушённая с томатами, луком и ароматной зеленью.',price:550,weight:'350 г'},
  {id:7,emoji:'🥗',image:IMG.pkhali,title:'Ассорти пхали',desc:'Закуска из шпината, свёклы и фасоли с грецким орехом.',price:420,weight:'200 г'},
  {id:8,emoji:'🍷',image:IMG.wine,title:'Киндзмараули (бокал)',desc:'Грузинское полусладкое красное вино из винограда Саперави.',price:350,weight:'150 мл'}
];

const DEFAULT_USERS=[
  {id:1,login:'admin',password:'admin123',name:'Администратор',role:'admin'},
  {id:2,login:'manager',password:'manager123',name:'Менеджер',role:'manager'},
  {id:3,login:'operator',password:'operator123',name:'Оператор',role:'operator'},
  {id:4,login:'news',password:'news123',name:'Редактор',role:'news'}
];

const DEFAULT_REVIEWS=[
  {id:'rev-seed-1',name:'Гиоргий',rating:5,text:'Хачапури просто божественные! Как в Тбилиси. Тесто тонкое, сыра много. Обязательно закажу ещё.',photo:'',date:new Date(Date.now()-2*864e5).toISOString(),approved:true},
  {id:'rev-seed-2',name:'Елена',rating:4,text:'Очень вкусные хинкали, много сока внутри. Единственное, доставка заняла чуть больше часа.',photo:'',date:new Date(Date.now()-5*864e5).toISOString(),approved:true},
  {id:'rev-seed-3',name:'Дато',rating:5,text:'Мцвади — огонь! Мясо мягкое, с дымком. Атмосфера и вкус на высоте. Спасибо!',photo:'',date:new Date(Date.now()-8*864e5).toISOString(),approved:true}
];

const DEFAULT_NEWS=[
  {id:1,title:'Вечера грузинского вина',text:'Каждую пятницу и субботу с 18:00 до 23:00 действует скидка 20% на всё грузинское вино. Приходите пробовать Саперави и Киндзмараули!',image:'',date:new Date(Date.now()-864e5).toISOString(),published:true,author:'Редактор'},
  {id:2,title:'Новые хинкали с бараниной',text:'В нашем меню пополнение! Попробуйте сочные хинкали с рубленой бараниной и ароматными специями. Уже доступны для заказа.',image:'',date:new Date(Date.now()-3*864e5).toISOString(),published:true,author:'Редактор'}
];

/* ==================== ХРАНИЛИЩЕ ==================== */
function load(key,def){try{const r=localStorage.getItem(key);if(r){const p=JSON.parse(r);if(p!=null)return p}}catch(e){}return JSON.parse(JSON.stringify(def))}
function save(key,val){try{localStorage.setItem(key,JSON.stringify(val))}catch(e){console.error('save',e);showToast('Ошибка сохранения — возможно, место закончилось')}}

function loadCart(){return load(KEYS.cart,{})}
function saveCart(c){save(KEYS.cart,c)}
function loadMenuData(){return load(KEYS.menu,DEFAULT_MENU)}
function saveMenuData(m){save(KEYS.menu,m)}
function loadOrdersData(){return load(KEYS.orders,seedOrders())}
function saveOrdersData(o){save(KEYS.orders,o)}
function loadReviewsData(){return load(KEYS.reviews,DEFAULT_REVIEWS)}
function saveReviewsData(r){save(KEYS.reviews,r)}
function loadNewsData(){return load(KEYS.news,DEFAULT_NEWS)}
function saveNewsData(n){save(KEYS.news,n)}
function loadUsersData(){return load(KEYS.users,DEFAULT_USERS)}
function saveUsersData(u){save(KEYS.users,u)}

function seedOrders(){
  const seed=[],today=new Date();today.setHours(0,0,0,0);
  const names=['Гиоргий','Манана','Дато','Нино','Левани','Тамара','Зураб','Кети'];
  const addrs=['ул. Руставели, 15','пр. Чавчавадзе, 42','ул. Пушкина, 8','ул. Лермонтова, 23','ул. Грибоедова, 10'];
  for(let d=6;d>=0;d--){
    const day=new Date(today);day.setDate(day.getDate()-d);
    const cnt=d===0?4:1+Math.floor(Math.random()*4);
    for(let i=0;i<cnt;i++){
      const od=new Date(day);od.setHours(11+Math.floor(Math.random()*11),Math.floor(Math.random()*60));
      const items=[],n=1+Math.floor(Math.random()*3),used=new Set();
      for(let j=0;j<n;j++){
        let m,g=0;
        do{m=DEFAULT_MENU[Math.floor(Math.random()*DEFAULT_MENU.length)];g++}while(used.has(m.id)&&g<20);
        if(used.has(m.id))continue;used.add(m.id);
        const q=1+Math.floor(Math.random()*2);
        items.push({id:m.id,title:m.title,price:m.price,qty:q,sum:m.price*q});
      }
      if(!items.length)continue;
      const total=items.reduce((s,i)=>s+i.sum,0);
      seed.push({id:'ORD-'+od.getTime()+'-'+i,items,total,customer:{name:names[Math.floor(Math.random()*names.length)],phone:'+7 999 '+(100+Math.floor(Math.random()*900))+'-'+(10+Math.floor(Math.random()*90))+'-'+(10+Math.floor(Math.random()*90)),address:addrs[Math.floor(Math.random()*addrs.length)],comment:''},status:d===0?['new','cooking','delivering','done'][i%4]:(Math.random()>.1?'done':'cancelled'),createdAt:od.toISOString()});
    }
  }
  return seed.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
}

/* ==================== ХЕЛПЕРЫ ==================== */
const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);
function fmt(n){return n.toLocaleString('ru-RU')}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function fmtDate(iso){return new Date(iso).toLocaleString('ru-RU',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})}
function fmtDateShort(iso){return new Date(iso).toLocaleDateString('ru-RU',{day:'2-digit',month:'short',year:'numeric'})}
function isSameDay(a,b){return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate()}
function starsHtml(r){let o='';for(let i=1;i<=5;i++)o+=i<=r?'★':'<span class="empty">★</span>';return o}
function initials(n){return n.trim().split(/\s+/).map(w=>w[0]).slice(0,2).join('').toUpperCase()}
function plural(n,one,few,many){const m10=n%10,m100=n%100;if(m10===1&&m100!==11)return one;if(m10>=2&&m10<=4&&(m100<10||m100>=20))return few;return many}
function currentSession(){try{const r=sessionStorage.getItem(KEYS.session);return r?JSON.parse(r):null}catch(e){return null}}
function saveSession(u){sessionStorage.setItem(KEYS.session,JSON.stringify({id:u.id,login:u.login,name:u.name,role:u.role}))}
function clearSession(){sessionStorage.removeItem(KEYS.session)}
function hasPermission(key){const s=currentSession();return s&&ROLE_PERMISSIONS[s.role]?.includes(key)}

/* ==================== IMAGE RESIZE ==================== */
function resizeImage(file,maxW=900,maxH=900,quality=0.82){
  return new Promise((res,rej)=>{
    const reader=new FileReader();
    reader.onerror=rej;
    reader.onload=e=>{
      const img=new Image();
      img.onerror=rej;
      img.onload=()=>{
        let w=img.width,h=img.height;
        if(w>maxW){h=h*maxW/w;w=maxW}
        if(h>maxH){w=w*maxH/h;h=maxH}
        const c=document.createElement('canvas');c.width=w;c.height=h;
        c.getContext('2d').drawImage(img,0,0,w,h);
        res(c.toDataURL('image/jpeg',quality));
      };
      img.src=e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

/* ==================== TOAST ==================== */
let toastTimer;
function showToast(msg){
  let el=document.getElementById('toast');
  if(!el){el=document.createElement('div');el.id='toast';el.className='toast';document.body.appendChild(el)}
  el.textContent=msg;el.classList.add('show');
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2500);
}

/* ==================== КОРЗИНА ==================== */
let cart={};
function cartTotalItems(){return Object.values(cart).reduce((s,q)=>s+q,0)}
function cartTotalPrice(){
  const menu=loadMenuData();
  return Object.entries(cart).reduce((s,[id,q])=>{const it=menu.find(m=>m.id===Number(id));return it?s+it.price*q:s},0);
}
function updateHeaderCart(){
  const el=document.getElementById('cartCount');
  if(el)el.textContent=cartTotalItems();
}
function addToCart(id){
  const menu=loadMenuData();
  const item=menu.find(m=>m.id===Number(id));
  if(!item)return;
  cart[id]=(cart[id]||0)+1;
  saveCart(cart);updateHeaderCart();
  if(document.getElementById('cartBody'))updateCartDrawer();
  showToast(`«${item.title}» добавлен в корзину`);
}
function changeQty(id,delta){
  if(!cart[id])return;
  cart[id]+=delta;
  if(cart[id]<=0)delete cart[id];
  saveCart(cart);updateHeaderCart();updateCartDrawer();
}
function updateCartDrawer(){
  const body=document.getElementById('cartBody');
  const checkout=document.getElementById('checkout');
  const totalEl=document.getElementById('cartTotal');
  if(!body)return;
  const menu=loadMenuData();
  const ids=Object.keys(cart);
  if(!ids.length){
    body.innerHTML=`<div class="empty-cart"><span class="icon">🛒</span><p>Корзина пуста</p><p style="font-size:.9rem;margin-top:10px;">Добавьте блюда из меню</p></div>`;
    if(checkout)checkout.style.display='none';
    if(totalEl)totalEl.textContent='0 ₽';
    return;
  }
  body.innerHTML=ids.map(id=>{
    const item=menu.find(m=>m.id===Number(id));
    if(!item)return'';
    const q=cart[id];
    const imgStyle=item.image?`background-image:url(${item.image});`:'';
    return `<div class="cart-item">
      <span class="ci-emoji ${item.image?'has-photo':''}" style="${imgStyle}">${item.emoji}</span>
      <div class="ci-info"><h4>${escapeHtml(item.title)}</h4><div class="ci-price">${fmt(item.price)} ₽ × ${q}</div></div>
      <div class="qty"><button data-action="dec" data-id="${id}">−</button><span>${q}</span><button data-action="inc" data-id="${id}">+</button></div>
      <div class="ci-total">${fmt(item.price*q)} ₽</div>
    </div>`;
  }).join('');
  if(totalEl)totalEl.textContent=fmt(cartTotalPrice())+' ₽';
  if(checkout)checkout.style.display='block';
}
function openCartDrawer(){document.getElementById('cartDrawer')?.classList.add('open');document.getElementById('cartOverlay')?.classList.add('open');document.body.classList.add('locked')}
function closeCartDrawer(){document.getElementById('cartDrawer')?.classList.remove('open');document.getElementById('cartOverlay')?.classList.remove('open');document.body.classList.remove('locked')}

/* ==================== РЕНДЕР КАРТОЧЕК ==================== */
function menuCardHtml(item){
  const imgStyle=item.image?`background-image:url(${item.image});`:'';
  return `<div class="card">
    <div class="card-image ${item.image?'has-photo':''}" style="${imgStyle}">${item.image?'':item.emoji}</div>
    <div class="card-content">
      <h3>${escapeHtml(item.title)}</h3>
      <span class="weight">${escapeHtml(item.weight)}</span>
      <p>${escapeHtml(item.desc)}</p>
      <div class="card-footer">
        <div class="price">${fmt(item.price)} ₽</div>
        <button class="add-btn" data-id="${item.id}" aria-label="Добавить">+</button>
      </div>
    </div>
  </div>`;
}
function newsCardHtml(n){
  const isNew=Date.now()-new Date(n.date).getTime()<3*864e5;
  const imgHtml=n.image?`<div class="news-image" style="background-image:url(${n.image})"></div>`:'';
  return `<article class="news-card">
    ${imgHtml}
    <div class="news-body">
      <div class="nc-head">
        <span class="nc-date">${fmtDateShort(n.date)}</span>
        ${isNew?'<span class="nc-new-badge">Новое</span>':''}
      </div>
      <h3>${escapeHtml(n.title)}</h3>
      <p>${escapeHtml(n.text)}</p>
      <div class="nc-author">✍️ ${escapeHtml(n.author||'Редактор')}</div>
    </div>
  </article>`;
}
function reviewCardHtml(r){
  const photoHtml=r.photo?`<div class="review-photo"><img src="${r.photo}" alt="фото к отзыву"></div>`:'';
  return `<div class="review-card">
    <div class="review-card-head">
      <div class="review-avatar">${initials(r.name)}</div>
      <div class="review-author"><div class="ra-name">${escapeHtml(r.name)}</div><div class="ra-date">${fmtDateShort(r.date)}</div></div>
    </div>
    <div class="review-stars">${starsHtml(r.rating)}</div>
    <div class="review-text">${escapeHtml(r.text)}</div>
    ${photoHtml}
  </div>`;
}

/* ==================== IMAGE UPLOAD HELPER ==================== */
function setupImageUpload(inputId,previewId,removeId,initial){
  const input=document.getElementById(inputId);
  const preview=document.getElementById(previewId);
  const removeBtn=removeId?document.getElementById(removeId):null;
  if(!input||!preview)return{getImage:()=>'',setImage:()=>{}};
  let current=initial||'';
  function updatePreview(){
    if(current){
      preview.style.backgroundImage=`url(${current})`;
      preview.classList.add('has-image');
      preview.innerHTML='';
      if(removeBtn)removeBtn.style.display='block';
    }else{
      preview.style.backgroundImage='';
      preview.classList.remove('has-image');
      preview.innerHTML='<span>📷 Нажмите, чтобы загрузить фото</span>';
      if(removeBtn)removeBtn.style.display='none';
    }
  }
  updatePreview();
  input.addEventListener('change',async e=>{
    const f=e.target.files[0];if(!f)return;
    if(!f.type.startsWith('image/')){showToast('Можно загружать только изображения');return}
    if(f.size>8*1024*1024){showToast('Файл слишком большой (макс. 8 МБ)');return}
    try{const b64=await resizeImage(f);current=b64;updatePreview()}catch(err){showToast('Ошибка загрузки фото')}
  });
  if(removeBtn)removeBtn.addEventListener('click',e=>{e.preventDefault();current='';input.value='';updatePreview()});
  return{getImage:()=>current,setImage:v=>{current=v||'';updatePreview()}};
}

/* ==================== ОФОРМЛЕНИЕ ЗАКАЗА ==================== */
function submitOrder(e){
  e.preventDefault();
  if(cartTotalItems()===0){showToast('Корзина пуста');return}
  const name=$('#name'),phone=$('#phone'),addr=$('#address');
  let ok=true;
  [[name,v=>v.trim().length>=2],[phone,v=>v.replace(/\D/g,'').length>=10],[addr,v=>v.trim().length>=5]].forEach(([el,check])=>{
    if(check(el.value))el.classList.remove('error');else{el.classList.add('error');ok=false}
  });
  if(!ok){showToast('Проверьте поля формы');return}
  const menu=loadMenuData();
  const orders=loadOrdersData();
  const order={
    id:'ORD-'+Date.now(),
    items:Object.entries(cart).map(([id,q])=>{const it=menu.find(m=>m.id===Number(id));return{id:Number(id),title:it.title,price:it.price,qty:q,sum:it.price*q}}),
    total:cartTotalPrice(),
    customer:{name:name.value.trim(),phone:phone.value.trim(),address:addr.value.trim(),comment:$('#comment').value.trim()},
    status:'new',createdAt:new Date().toISOString()
  };
  orders.unshift(order);saveOrdersData(orders);
  const ss=document.getElementById('successScreen');
  document.getElementById('successText').textContent=`Заказ на ${fmt(order.total)} ₽ принят. Мы позвоним на ${order.customer.phone} для подтверждения.`;
  ss.classList.add('show');
  cart={};saveCart(cart);updateHeaderCart();updateCartDrawer();
  e.target.reset();
}

/* ==================== INIT: ОБЩЕЕ ==================== */
function initCommon(){
  cart=loadCart();
  updateHeaderCart();
  document.getElementById('openCart')?.addEventListener('click',openCartDrawer);
  document.getElementById('closeCart')?.addEventListener('click',closeCartDrawer);
  document.getElementById('cartOverlay')?.addEventListener('click',closeCartDrawer);
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
      if(document.getElementById('confirmOverlay')?.classList.contains('open')){closeConfirm();return}
      closeCartDrawer();
    }
  });
  document.getElementById('cartBody')?.addEventListener('click',e=>{
    const btn=e.target.closest('button[data-action]');if(!btn)return;
    changeQty(btn.dataset.id,btn.dataset.action==='inc'?1:-1);
  });
  document.getElementById('orderForm')?.addEventListener('submit',submitOrder);
  document.getElementById('closeSuccess')?.addEventListener('click',()=>{
    document.getElementById('successScreen').classList.remove('show');
    closeCartDrawer();
  });
  ['#name','#phone','#address'].forEach(sel=>{
    const el=document.querySelector(sel);el?.addEventListener('input',()=>el.classList.remove('error'));
  });
  updateCartDrawer();
}

/* ==================== INIT: MENU PAGE ==================== */
function initMenuPage(){
  const menu=loadMenuData();
  document.getElementById('menuGrid').innerHTML=menu.map(menuCardHtml).join('');
  document.getElementById('menuGrid').addEventListener('click',e=>{
    const btn=e.target.closest('.add-btn');if(btn)addToCart(btn.dataset.id);
  });
}

/* ==================== INIT: INDEX ==================== */
function initIndexPage(){
  const menu=loadMenuData().slice(0,4);
  const grid=document.getElementById('previewMenu');
  if(grid){
    grid.innerHTML=menu.map(menuCardHtml).join('');
    grid.addEventListener('click',e=>{
      const btn=e.target.closest('.add-btn');if(btn)addToCart(btn.dataset.id);
    });
  }
  const reviews=loadReviewsData().filter(r=>r.approved).slice(0,3);
  const rGrid=document.getElementById('previewReviews');
  if(rGrid)rGrid.innerHTML=reviews.length?reviews.map(reviewCardHtml).join(''):'<div class="empty-state">Пока нет отзывов</div>';
}

/* ==================== INIT: NEWS PAGE ==================== */
function initNewsPage(){
  const list=loadNewsData().filter(n=>n.published).sort((a,b)=>new Date(b.date)-new Date(a.date));
  const grid=document.getElementById('newsList');
  grid.innerHTML=list.length?list.map(newsCardHtml).join(''):'<div class="empty-state">Пока нет новостей — заходите позже!</div>';
}

/* ==================== INIT: REVIEWS PAGE ==================== */
function initReviewsPage(){
  const all=loadReviewsData();
  const approved=all.filter(r=>r.approved).sort((a,b)=>new Date(b.date)-new Date(a.date));
  const summaryEl=document.getElementById('reviewsSummary');
  const gridEl=document.getElementById('reviewsGrid');
  if(approved.length){
    const avg=approved.reduce((s,r)=>s+r.rating,0)/approved.length;
    summaryEl.innerHTML=`<div class="avg-block"><div class="avg-num">${(Math.round(avg*10)/10).toFixed(1)}</div><div><div class="avg-stars">${starsHtml(Math.round(avg))}</div><div class="avg-count">На основе ${approved.length} ${plural(approved.length,'отзыва','отзывов','отзывов')}</div></div></div>`;
    gridEl.innerHTML=approved.map(reviewCardHtml).join('');
  }else{
    summaryEl.innerHTML='';
    gridEl.innerHTML='<div class="empty-state">Пока нет отзывов. Будьте первым!</div>';
  }
  let selected=0;
  const starInput=document.getElementById('starInput');
  function setStars(n){starInput.querySelectorAll('span').forEach(s=>s.classList.toggle('active',Number(s.dataset.value)<=n))}
  starInput.addEventListener('click',e=>{if(e.target.tagName!=='SPAN')return;selected=Number(e.target.dataset.value);setStars(selected)});
  starInput.addEventListener('mouseover',e=>{if(e.target.tagName!=='SPAN')return;setStars(Number(e.target.dataset.value))});
  starInput.addEventListener('mouseleave',()=>setStars(selected));
  const reviewImg=setupImageUpload('review-photo-input','review-photo-preview','review-photo-remove','');
  document.getElementById('reviewForm').addEventListener('submit',e=>{
    e.preventDefault();
    const name=document.getElementById('reviewName');
    const text=document.getElementById('reviewText');
    name.classList.remove('error');text.classList.remove('error');
    if(!selected){showToast('Поставьте оценку');return}
    if(name.value.trim().length<2){name.classList.add('error');showToast('Введите имя');return}
    if(text.value.trim().length<10){text.classList.add('error');showToast('Отзыв слишком короткий');return}
    const arr=loadReviewsData();
    arr.unshift({id:'rev-'+Date.now(),name:name.value.trim(),rating:selected,text:text.value.trim(),photo:reviewImg.getImage()||'',date:new Date().toISOString(),approved:false});
    saveReviewsData(arr);
    e.target.reset();selected=0;setStars(0);reviewImg.setImage('');
    showToast('Спасибо! Отзыв отправлен на модерацию');
  });
  ['reviewName','reviewText'].forEach(id=>{
    document.getElementById(id).addEventListener('input',e=>e.target.classList.remove('error'));
  });
}

/* ==================== ADMIN: INIT ==================== */
function initAdminPage(){
  const session=currentSession();
  if(session){
    const users=loadUsersData();
    const u=users.find(x=>x.id===session.id);
    if(u)showAdminPanel(u);
    else showAdminLogin();
  }else showAdminLogin();
  document.getElementById('loginBtn').addEventListener('click',tryLogin);
  document.getElementById('loginPass').addEventListener('keydown',e=>{if(e.key==='Enter')tryLogin()});
  document.getElementById('loginUser').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('loginPass').focus()});
  ['loginUser','loginPass'].forEach(id=>document.getElementById(id).addEventListener('input',()=>document.getElementById('loginError').textContent=''));
  document.getElementById('adminLogout').addEventListener('click',()=>{clearSession();showAdminLogin()});
}
function tryLogin(){
  const login=document.getElementById('loginUser').value.trim().toLowerCase();
  const pass=document.getElementById('loginPass').value;
  const users=loadUsersData();
  const u=users.find(x=>x.login.toLowerCase()===login&&x.password===pass);
  if(!u){
    document.getElementById('loginError').textContent='Неверный логин или пароль';
    const p=document.getElementById('loginPass');p.classList.add('error');setTimeout(()=>p.classList.remove('error'),500);
    return;
  }
  saveSession(u);showAdminPanel(u);
}
function showAdminLogin(){
  document.getElementById('adminLoginView').style.display='flex';
  document.getElementById('adminPanelView').classList.remove('show');
  document.getElementById('loginUser').value='';
  document.getElementById('loginPass').value='';
  document.getElementById('loginError').textContent='';
}
function showAdminPanel(user){
  document.getElementById('adminLoginView').style.display='none';
  document.getElementById('adminPanelView').classList.add('show');
  renderAdminUserInfo(user);renderAdminTabs();refreshCurrentTab();
}
let currentAdminUser=null;
function renderAdminUserInfo(u){
  currentAdminUser=u;
  const role=ROLES[u.role];
  document.getElementById('currentUserInfo').innerHTML=`
    <div class="cu-avatar" style="background:${role.color}">${initials(u.name)}</div>
    <div><div class="cu-name">${escapeHtml(u.name)}</div><div class="cu-login">@${escapeHtml(u.login)}</div></div>
    <span class="role-badge" style="background:${role.color}">${role.short}</span>`;
}
function renderAdminTabs(){
  const allowed=ALL_TABS.filter(t=>hasPermission(t.key));
  const wrap=document.getElementById('adminTabs');
  wrap.innerHTML=allowed.map((t,i)=>`<button data-tab="${t.key}" class="${i===0?'active':''}">${t.label}</button>`).join('');
  wrap.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>switchTab(b.dataset.tab)));
  if(allowed.length)switchTab(allowed[0].key);
  updateBadges();
}
function switchTab(key){
  if(!hasPermission(key))return;
  document.querySelectorAll('#adminTabs button').forEach(b=>b.classList.toggle('active',b.dataset.tab===key));
  document.querySelectorAll('.admin-tab-content').forEach(c=>c.classList.toggle('active',c.id==='tab-'+key));
  if(key==='dashboard')renderDashboard();
  if(key==='orders')renderOrders();
  if(key==='menu')renderAdminMenu();
  if(key==='reviews')renderAdminReviews();
  if(key==='news')renderAdminNews();
  if(key==='users')renderAdminUsers();
}
function refreshCurrentTab(){
  const active=document.querySelector('#adminTabs button.active');
  if(active)switchTab(active.dataset.tab);
  updateBadges();
}
function updateBadges(){
  const rv=document.getElementById('reviewsBadge');
  const nw=document.getElementById('newsBadge');
  if(rv){const p=loadReviewsData().filter(r=>!r.approved).length;rv.textContent=p>0?p:''}
  if(nw){const p=loadNewsData().filter(n=>!n.published).length;nw.textContent=p>0?p:''}
}

/* ==================== DASHBOARD ==================== */
function renderDashboard(){
  if(!hasPermission('dashboard'))return;
  const orders=loadOrdersData();
  const today=new Date();today.setHours(0,0,0,0);
  const todayO=orders.filter(o=>isSameDay(new Date(o.createdAt),today));
  const revenue=todayO.filter(o=>o.status!=='cancelled').reduce((s,o)=>s+o.total,0);
  const cancelled=todayO.filter(o=>o.status==='cancelled').length;
  const avg=todayO.length?Math.round(revenue/Math.max(1,todayO.length-cancelled)):0;
  const ic={};todayO.filter(o=>o.status!=='cancelled').forEach(o=>o.items.forEach(i=>{ic[i.title]=(ic[i.title]||0)+i.qty}));
  const top=Object.entries(ic).sort((a,b)=>b[1]-a[1])[0];
  const reviews=loadReviewsData().filter(r=>r.approved);
  const avgRating=reviews.length?(reviews.reduce((s,r)=>s+r.rating,0)/reviews.length).toFixed(1):'—';
  document.getElementById('statsGrid').innerHTML=`
    <div class="stat-card"><div class="stat-label">Заказов сегодня</div><div class="stat-value">${todayO.length}</div><div class="stat-sub">${cancelled} отменено</div></div>
    <div class="stat-card green"><div class="stat-label">Выручка сегодня</div><div class="stat-value">${fmt(revenue)} <small>₽</small></div><div class="stat-sub">без отмен</div></div>
    <div class="stat-card gold"><div class="stat-label">Средний чек</div><div class="stat-value">${fmt(avg)} <small>₽</small></div><div class="stat-sub">за сегодня</div></div>
    <div class="stat-card blue"><div class="stat-label">Рейтинг / Топ</div><div class="stat-value" style="font-size:1.4rem;">★ ${avgRating} / ${top?top[0]:'—'}</div><div class="stat-sub">${top?top[1]+' шт.':''}</div></div>`;
  const days=[];for(let i=6;i>=0;i--){const d=new Date(today);d.setDate(d.getDate()-i);days.push(d)}
  const vals=days.map(d=>{const n=new Date(d);n.setDate(n.getDate()+1);return orders.filter(o=>o.status!=='cancelled').filter(o=>{const od=new Date(o.createdAt);return od>=d&&od<n}).reduce((s,o)=>s+o.total,0)});
  const mx=Math.max(...vals,1);
  document.getElementById('chartTotal').textContent='Всего: '+fmt(vals.reduce((s,v)=>s+v,0))+' ₽';
  document.getElementById('barChart').innerHTML=vals.map(v=>`<div class="bar-item"><div class="bar" style="height:${Math.max(4,v/mx*100)}%"><span class="bar-value">${fmt(v)} ₽</span></div></div>`).join('');
  const dn=['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
  document.getElementById('barLabels').innerHTML=days.map((d,i)=>{const t=i===days.length-1;return `<span class="${t?'today':''}">${t?'Сегодня':dn[d.getDay()]+' '+d.getDate()}</span>`}).join('');
}

/* ==================== ORDERS ==================== */
let ordersFilter='all';
function renderOrders(){
  if(!hasPermission('orders'))return;
  const orders=loadOrdersData();
  const filters=[{key:'all',label:'Все'},...Object.entries(STATUSES).map(([k,v])=>({key:k,label:v.label}))];
  const counts={all:orders.length};Object.keys(STATUSES).forEach(s=>counts[s]=orders.filter(o=>o.status===s).length);
  document.getElementById('ordersFilters').innerHTML=filters.map(f=>`<button class="filter-btn ${f.key===ordersFilter?'active':''}" data-filter="${f.key}">${f.label} <span class="count">${counts[f.key]||0}</span></button>`).join('');
  const list=ordersFilter==='all'?orders:orders.filter(o=>o.status===ordersFilter);
  const wrap=document.getElementById('ordersList');
  if(!list.length){wrap.innerHTML=`<div class="no-orders"><span class="icon">📭</span>Нет заказов</div>`;return}
  wrap.innerHTML=list.map(o=>{
    const st=STATUSES[o.status]||STATUSES.new;
    const cnt=o.items.reduce((s,i)=>s+i.qty,0);
    return `<div class="order-item" data-order-id="${o.id}">
      <div class="order-head">
        <span class="order-id">${o.id.slice(-8)}</span>
        <div class="order-customer"><div class="oc-name">${escapeHtml(o.customer.name)} · ${cnt} шт.</div><div class="oc-time">${fmtDate(o.createdAt)}</div></div>
        <span class="order-total">${fmt(o.total)} ₽</span>
        <span class="status-badge ${st.cls}">${st.label}</span>
        <button class="order-expand-btn">▾</button>
      </div>
      <div class="order-details">
        <div class="order-items-list">${o.items.map(i=>`<div class="order-line"><span class="ol-title">${escapeHtml(i.title)} × ${i.qty}</span><span class="ol-sum">${fmt(i.sum)} ₽</span></div>`).join('')}</div>
        <div class="order-info">
          <div>Телефон:<strong>${escapeHtml(o.customer.phone)}</strong></div>
          <div>Адрес:<strong>${escapeHtml(o.customer.address)}</strong></div>
          ${o.customer.comment?`<div>Комментарий:<strong>${escapeHtml(o.customer.comment)}</strong></div>`:''}
        </div>
        <div class="order-status-actions">${Object.entries(STATUSES).map(([k,c])=>`<button class="status-action-btn ${o.status===k?'current':''}" data-status="${k}" data-order="${o.id}">${c.label}</button>`).join('')}</div>
      </div>
    </div>`;
  }).join('');
}

/* ==================== MENU MANAGEMENT ==================== */
let editingMenuId=null;
function renderAdminMenu(){
  if(!hasPermission('menu'))return;
  const menu=loadMenuData();
  const wrap=document.getElementById('adminMenuList');
  if(!menu.length){wrap.innerHTML=`<div class="no-orders" style="grid-column:1/-1;"><span class="icon">🍽</span>Меню пусто</div>`;return}
  wrap.innerHTML=menu.map(m=>{
    const imgStyle=m.image?`background-image:url(${m.image});`:'';
    return `<div class="admin-menu-item">
      <div class="am-emoji ${m.image?'has-photo':''}" style="${imgStyle}">${m.image?'':m.emoji}</div>
      <div class="am-info"><h4>${escapeHtml(m.title)}</h4><div><span class="am-price">${fmt(m.price)} ₽</span> <span class="am-weight">/ ${m.weight}</span></div></div>
      <div class="am-actions">
        <button class="icon-btn" data-action="edit" data-id="${m.id}">✏️</button>
        <button class="icon-btn danger" data-action="delete" data-id="${m.id}">🗑</button>
      </div>
    </div>`;
  }).join('');
}
function submitMenuForm(e){
  e.preventDefault();
  const emoji=document.getElementById('mi-emoji').value.trim()||'🍽';
  const title=document.getElementById('mi-title').value.trim();
  const desc=document.getElementById('mi-desc').value.trim();
  const price=parseInt(document.getElementById('mi-price').value,10);
  const weight=document.getElementById('mi-weight').value.trim()||'—';
  const image=menuImageUploader.getImage();
  if(!title||!price||price<1){showToast('Заполните название и цену');return}
  const menu=loadMenuData();
  if(editingMenuId!==null){
    const it=menu.find(m=>m.id===editingMenuId);
    if(it){Object.assign(it,{emoji,title,desc,price,weight,image});saveMenuData(menu);showToast('Блюдо обновлено')}
    editingMenuId=null;
    document.getElementById('menuFormTitle').textContent='➕ Добавить блюдо';
    document.getElementById('menuSubmitBtn').textContent='Добавить';
  }else{
    menu.push({id:Math.max(0,...menu.map(m=>m.id))+1,emoji,title,desc,price,weight,image});
    saveMenuData(menu);showToast('Блюдо добавлено');
  }
  e.target.reset();
  document.getElementById('mi-emoji').value='🥟';
  menuImageUploader.setImage('');
  renderAdminMenu();
}
function startEditMenu(id){
  const menu=loadMenuData();
  const it=menu.find(m=>m.id===id);if(!it)return;
  editingMenuId=id;
  document.getElementById('mi-emoji').value=it.emoji;
  document.getElementById('mi-title').value=it.title;
  document.getElementById('mi-desc').value=it.desc;
  document.getElementById('mi-price').value=it.price;
  document.getElementById('mi-weight').value=it.weight;
  menuImageUploader.setImage(it.image||'');
  document.getElementById('menuFormTitle').textContent='✏️ Редактировать блюдо';
  document.getElementById('menuSubmitBtn').textContent='Сохранить';
  document.getElementById('menuFormTitle').scrollIntoView({behavior:'smooth',block:'center'});
}
function requestDeleteMenu(id){
  const menu=loadMenuData();
  const it=menu.find(m=>m.id===id);if(!it)return;
  confirmTitle.textContent='Удалить блюдо?';
  confirmText.textContent=`Блюдо «${it.title}» будет удалено из меню.`;
  confirmAction=()=>{
    const m=loadMenuData().filter(x=>x.id!==id);
    saveMenuData(m);
    if(cart[id]){delete cart[id];saveCart(cart);updateHeaderCart()}
    renderAdminMenu();showToast('Блюдо удалено');
  };
  confirmOverlay.classList.add('open');
}

/* ==================== REVIEWS MANAGEMENT ==================== */
let reviewsFilter='pending';
function renderAdminReviews(){
  if(!hasPermission('reviews'))return;
  const all=loadReviewsData();
  const filters=[
    {key:'pending',label:'На модерации',count:all.filter(r=>!r.approved).length},
    {key:'approved',label:'Опубликованные',count:all.filter(r=>r.approved).length},
    {key:'all',label:'Все',count:all.length}
  ];
  document.getElementById('reviewsFilters').innerHTML=filters.map(f=>`<button class="filter-btn ${f.key===reviewsFilter?'active':''}" data-rfilter="${f.key}">${f.label} <span class="count">${f.count}</span></button>`).join('');
  const list=reviewsFilter==='pending'?all.filter(r=>!r.approved):reviewsFilter==='approved'?all.filter(r=>r.approved):all;
  const sorted=[...list].sort((a,b)=>new Date(b.date)-new Date(a.date));
  const wrap=document.getElementById('adminReviewsList');
  if(!sorted.length){wrap.innerHTML=`<div class="no-orders"><span class="icon">💬</span>Нет отзывов</div>`;return}
  wrap.innerHTML=sorted.map(r=>`
    <div class="admin-review-item">
      <div class="admin-review-head">
        <div class="admin-review-meta"><div class="ar-avatar">${initials(r.name)}</div><div><div class="ar-name">${escapeHtml(r.name)}</div><div class="ar-date">${fmtDate(r.date)}</div></div></div>
        <div class="admin-review-stars">${starsHtml(r.rating)}</div>
      </div>
      <div class="admin-review-text">${escapeHtml(r.text)}</div>
      ${r.photo?`<img src="${r.photo}" class="admin-review-photo" alt="фото">`:''}
      <div class="admin-review-actions">
        ${!r.approved
          ?`<button class="review-action-btn approve" data-action="approve" data-id="${r.id}">✓ Опубликовать</button><button class="review-action-btn reject" data-action="delete" data-id="${r.id}">🗑 Удалить</button>`
          :`<button class="review-action-btn hide-again" data-action="hide" data-id="${r.id}">↩ Снять</button><button class="review-action-btn reject" data-action="delete" data-id="${r.id}">🗑 Удалить</button>`}
      </div>
    </div>`).join('');
  updateBadges();
}

/* ==================== NEWS MANAGEMENT ==================== */
let editingNewsId=null;
function renderAdminNews(){
  if(!hasPermission('news'))return;
  const news=loadNewsData().sort((a,b)=>new Date(b.date)-new Date(a.date));
  const wrap=document.getElementById('adminNewsList');
  if(!news.length){wrap.innerHTML=`<div class="no-orders"><span class="icon">📰</span>Пока нет публикаций</div>`;updateBadges();return}
  wrap.innerHTML=news.map(n=>{
    const thumb=n.image?`background-image:url(${n.image});`:'';
    return `<div class="admin-news-item ${n.published?'':'draft'}">
      ${n.image?`<div class="an-thumb" style="${thumb}"></div>`:''}
      <div class="an-body">
        <div class="admin-news-head">
          <h4>${escapeHtml(n.title)}</h4>
          <span class="status-badge ${n.published?'status-done':'status-cooking'}">${n.published?'Опубликовано':'Черновик'}</span>
        </div>
        <div class="admin-news-meta"><span>📅 ${fmtDate(n.date)}</span><span>✍️ ${escapeHtml(n.author||'Редактор')}</span></div>
        <div class="admin-news-body">${escapeHtml(n.text)}</div>
        <div class="admin-news-actions">
          <button class="review-action-btn ${n.published?'hide-again':'approve'}" data-action="toggle" data-id="${n.id}">${n.published?'↩ Снять':'✓ Опубликовать'}</button>
          <button class="review-action-btn reject" data-action="edit" data-id="${n.id}">✏️ Ред.</button>
          <button class="review-action-btn reject" data-action="delete" data-id="${n.id}">🗑 Удалить</button>
        </div>
      </div>
    </div>`;
  }).join('');
  updateBadges();
}
function submitNewsForm(e){
  e.preventDefault();
  const title=document.getElementById('news-title').value.trim();
  const text=document.getElementById('news-text').value.trim();
  const published=document.getElementById('news-published').checked;
  const image=newsImageUploader.getImage();
  if(!title||!text){showToast('Заполните заголовок и текст');return}
  const news=loadNewsData();
  const session=currentSession();
  if(editingNewsId!==null){
    const n=news.find(x=>x.id===editingNewsId);
    if(n){Object.assign(n,{title,text,published,image});saveNewsData(news);showToast('Публикация обновлена')}
    editingNewsId=null;
    document.getElementById('newsFormTitle').textContent='➕ Новая публикация';
    document.getElementById('newsSubmitBtn').textContent='Опубликовать';
  }else{
    news.unshift({id:Date.now(),title,text,published,image,date:new Date().toISOString(),author:session?session.name:'Редактор'});
    saveNewsData(news);showToast(published?'Опубликовано':'Черновик сохранён');
  }
  e.target.reset();
  document.getElementById('news-published').checked=true;
  newsImageUploader.setImage('');
  renderAdminNews();
}
function startEditNews(id){
  const news=loadNewsData();
  const n=news.find(x=>x.id===id);if(!n)return;
  editingNewsId=id;
  document.getElementById('news-title').value=n.title;
  document.getElementById('news-text').value=n.text;
  document.getElementById('news-published').checked=n.published;
  newsImageUploader.setImage(n.image||'');
  document.getElementById('newsFormTitle').textContent='✏️ Редактировать публикацию';
  document.getElementById('newsSubmitBtn').textContent='Сохранить';
  document.getElementById('newsFormTitle').scrollIntoView({behavior:'smooth',block:'center'});
}

/* ==================== USERS MANAGEMENT ==================== */
let editingUserId=null;
function renderAdminUsers(){
  if(!hasPermission('users'))return;
  const users=loadUsersData();
  const wrap=document.getElementById('adminUsersList');
  wrap.innerHTML=users.map(u=>{
    const role=ROLES[u.role];
    const isSelf=currentAdminUser&&currentAdminUser.id===u.id;
    return `<div class="admin-user-item ${isSelf?'is-self':''}">
      ${isSelf?'<span class="self-marker">Вы</span>':''}
      <div class="au-avatar" style="background:${role.color}">${initials(u.name)}</div>
      <div class="au-info"><div class="au-name">${escapeHtml(u.name)}</div><div class="au-login">@${escapeHtml(u.login)}</div><span class="role-badge" style="background:${role.color}">${role.short}</span></div>
      <div class="au-actions">
        <button class="icon-btn" data-action="edit-user" data-id="${u.id}">✏️</button>
        <button class="icon-btn danger" data-action="delete-user" data-id="${u.id}" ${isSelf?'disabled':''}>🗑</button>
      </div>
    </div>`;
  }).join('');
}
function submitUserForm(e){
  e.preventDefault();
  const login=document.getElementById('u-login').value.trim().toLowerCase();
  const password=document.getElementById('u-password').value.trim();
  const name=document.getElementById('u-name').value.trim();
  const role=document.getElementById('u-role').value;
  if(!login||!password||!name){showToast('Заполните все поля');return}
  if(login.length<3){showToast('Логин — минимум 3 символа');return}
  if(password.length<4){showToast('Пароль — минимум 4 символа');return}
  const users=loadUsersData();
  const dup=users.find(u=>u.login.toLowerCase()===login&&u.id!==editingUserId);
  if(dup){showToast('Логин уже занят');return}
  if(editingUserId!==null){
    const u=users.find(x=>x.id===editingUserId);
    if(u){
      if(u.role==='admin'&&role!=='admin'&&users.filter(x=>x.role==='admin').length<=1){showToast('Нельзя убрать последнего админа');return}
      Object.assign(u,{login,password,name,role});
      if(currentAdminUser&&currentAdminUser.id===u.id){saveSession(u);currentAdminUser=u;renderAdminUserInfo(u)}
      saveUsersData(users);showToast('Пользователь обновлён');
    }
    editingUserId=null;
    document.getElementById('userFormTitle').textContent='➕ Добавить пользователя';
    document.getElementById('userSubmitBtn').textContent='Добавить';
  }else{
    users.push({id:Date.now(),login,password,name,role});
    saveUsersData(users);showToast('Пользователь добавлен');
  }
  e.target.reset();
  renderAdminUsers();
}

/* ==================== CONFIRM ==================== */
let confirmAction=null;
const confirmOverlay=document.getElementById('confirmOverlay');
const confirmTitle=document.getElementById('confirmTitle');
const confirmText=document.getElementById('confirmText');
function closeConfirm(){confirmOverlay?.classList.remove('open');confirmAction=null}
function initConfirm(){
  if(!confirmOverlay)return;
  document.getElementById('confirmCancel')?.addEventListener('click',closeConfirm);
  document.getElementById('confirmOk')?.addEventListener('click',()=>{if(confirmAction)confirmAction();closeConfirm()});
  confirmOverlay.addEventListener('click',e=>{if(e.target===confirmOverlay)closeConfirm()});
}

/* ==================== ADMIN: EVENTS ==================== */
let menuImageUploader={getImage:()=>'',setImage:()=>{}};
let newsImageUploader={getImage:()=>'',setImage:()=>{}};
function initAdminEvents(){
  document.getElementById('ordersFilters')?.addEventListener('click',e=>{
    const btn=e.target.closest('.filter-btn');if(!btn)return;
    ordersFilter=btn.dataset.filter;renderOrders();
  });
  document.getElementById('ordersList')?.addEventListener('click',e=>{
    const sb=e.target.closest('.status-action-btn');
    if(sb){
      e.stopPropagation();
      const orders=loadOrdersData();
      const o=orders.find(x=>x.id===sb.dataset.order);
      if(o){o.status=sb.dataset.status;saveOrdersData(orders);renderOrders();if(hasPermission('dashboard'))renderDashboard();showToast('Статус обновлён')}
      return;
    }
    const head=e.target.closest('.order-head');
    if(head)head.closest('.order-item').classList.toggle('expanded');
  });
  menuImageUploader=setupImageUpload('mi-image-input','mi-image-preview','mi-image-remove','');
  document.getElementById('menuItemForm')?.addEventListener('submit',submitMenuForm);
  document.getElementById('adminMenuList')?.addEventListener('click',e=>{
    const btn=e.target.closest('button[data-action]');if(!btn)return;
    if(btn.dataset.action==='edit')startEditMenu(Number(btn.dataset.id));
    if(btn.dataset.action==='delete')requestDeleteMenu(Number(btn.dataset.id));
  });
  document.getElementById('reviewsFilters')?.addEventListener('click',e=>{
    const btn=e.target.closest('.filter-btn');if(!btn)return;
    reviewsFilter=btn.dataset.rfilter;renderAdminReviews();
  });
  document.getElementById('adminReviewsList')?.addEventListener('click',e=>{
    const btn=e.target.closest('button[data-action]');if(!btn)return;
    const id=btn.dataset.id;const action=btn.dataset.action;
    const all=loadReviewsData();
    const r=all.find(x=>x.id===id);if(!r)return;
    if(action==='approve'){r.approved=true;saveReviewsData(all);showToast('Опубликован');renderAdminReviews()}
    else if(action==='hide'){r.approved=false;saveReviewsData(all);showToast('Снят с публикации');renderAdminReviews()}
    else if(action==='delete'){
      confirmTitle.textContent='Удалить отзыв?';
      confirmText.textContent=`Отзыв от ${r.name} будет удалён.`;
      confirmAction=()=>{const a=loadReviewsData().filter(x=>x.id!==id);saveReviewsData(a);renderAdminReviews();showToast('Удалён')};
      confirmOverlay.classList.add('open');
    }
  });
  newsImageUploader=setupImageUpload('news-image-input','news-image-preview','news-image-remove','');
  document.getElementById('newsForm')?.addEventListener('submit',submitNewsForm);
  document.getElementById('adminNewsList')?.addEventListener('click',e=>{
    const btn=e.target.closest('button[data-action]');if(!btn)return;
    const id=Number(btn.dataset.id);const action=btn.dataset.action;
    if(action==='toggle'){
      const news=loadNewsData();const n=news.find(x=>x.id===id);if(n){n.published=!n.published;saveNewsData(news);renderAdminNews()}
    }else if(action==='edit'){startEditNews(id)}
    else if(action==='delete'){
      const news=loadNewsData();const n=news.find(x=>x.id===id);if(!n)return;
      confirmTitle.textContent='Удалить публикацию?';
      confirmText.textContent=`«${n.title}» будет удалена.`;
      confirmAction=()=>{const a=loadNewsData().filter(x=>x.id!==id);saveNewsData(a);renderAdminNews();showToast('Удалено')};
      confirmOverlay.classList.add('open');
    }
  });
  document.getElementById('userForm')?.addEventListener('submit',submitUserForm);
  document.getElementById('adminUsersList')?.addEventListener('click',e=>{
    const btn=e.target.closest('button[data-action]');if(!btn||btn.disabled)return;
    const id=Number(btn.dataset.id);const action=btn.dataset.action;
    if(action==='edit-user'){
      const u=loadUsersData().find(x=>x.id===id);if(!u)return;
      editingUserId=id;
      document.getElementById('u-login').value=u.login;
      document.getElementById('u-password').value=u.password;
      document.getElementById('u-name').value=u.name;
      document.getElementById('u-role').value=u.role;
      document.getElementById('userFormTitle').textContent='✏️ Редактировать';
      document.getElementById('userSubmitBtn').textContent='Сохранить';
      document.getElementById('userFormTitle').scrollIntoView({behavior:'smooth',block:'center'});
    }else if(action==='delete-user'){
      const users=loadUsersData();const u=users.find(x=>x.id===id);if(!u)return;
      if(currentAdminUser&&currentAdminUser.id===id){showToast('Нельзя удалить себя');return}
      if(u.role==='admin'&&users.filter(x=>x.role==='admin').length<=1){showToast('Нельзя удалить последнего админа');return}
      confirmTitle.textContent='Удалить пользователя?';
      confirmText.textContent=`${u.name} (@${u.login}) потеряет доступ.`;
      confirmAction=()=>{const a=loadUsersData().filter(x=>x.id!==id);saveUsersData(a);renderAdminUsers();showToast('Удалён')};
      confirmOverlay.classList.add('open');
    }
  });
}

/* ==================== MAIN INIT ==================== */
function init(){
  cart=loadCart();
  initCommon();
  initConfirm();
  const page=document.body.dataset.page||'';
  if(page==='menu')initMenuPage();
  if(page==='index')initIndexPage();
  if(page==='news')initNewsPage();
  if(page==='reviews')initReviewsPage();
  if(page==='admin'){initAdminPage();initAdminEvents()}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
else init();
/* ============================================================
   Murodillo & Madinabonu — script
   ============================================================ */
const I18N = {
  uz:{
    coverEyebrow:"Nikoh to‘yi taklifnomasi", lockHint:"Taklifnomani ochish uchun suring", openText:"Ochish ›",
    welcomeTitle:"Hurmatli mehmon!",
    welcomeBody:"Sizni farzandlarimiz Murodillo va Madinabonuning hayotidagi eng baxtli kun — to‘y marosimiga taklif etamiz.",
    storyTitle:"Bizning hikoyamiz",
    storyBody:"Ikki qalbning bir orzu bilan boshlangan yo‘li, bugun baxtli hayotga aylanmoqda.",
    countTitle:"To‘ygacha qolgan vaqt", cDaysBig:"Kun", cHours:"Soat", cMins:"Daqiqa", cSecs:"Soniya",
    dateFull:"20-sentyabr, 2026-yil · Yakshanba",
    dMonth:"Sentyabr", dDow:"Yakshanba", mapBtn:"Xaritada ko‘rish",
    progTitle:"To‘y dasturi",
    oshTitle:"Nahorgi osh", oshDesc:"Ertalabki oshga taklif etamiz", toyDesc:"To‘y marosimi va ziyofat",
    venueTitle:"To‘y manzili", venueCity:"Olimbek MFY", venueStreet:"Behizor ko‘chasi, 49-uy", findUs:"Bizni toping",
    galleryTitle:"To‘yxona galereyasi",
    dressEyebrow:"Libos uslubi",
    dressBody:"Bizning maxsus kunimizda sizni ushbu ranglarda ko‘rishdan mamnun bo‘lamiz.",
    rsvpEyebrow:"Tashrifingizni tasdiqlang",
    rsvpBody:"Iltimos, qatnashishingiz haqida bizni xabardor qiling.",
    rName:"Ism Familyangiz", rNamePh:"Masalan: Akmal Yo‘ldoshev",
    rAttend:"Tashrif buyurasizmi?", rYes:"Albatta, kelaman", rNo:"Afsus, kela olmayman",
    rCount:"Necha kishi bo‘lasiz?", rComment:"Tabrik yoki izoh (ixtiyoriy)", rCommentPh:"Tilaklaringizni yozing...",
    rSubmit:"Yuborish", rOk:"Rahmat! Javobingiz qabul qilindi ✦", rErr:"Xatolik yuz berdi. Keyinroq urinib ko‘ring.", rFill:"Iltimos, ismingizni yozing.",
    gTitle:"Mehmonlar ro‘yxati", gTotal:"Jami", gOk:"Keladi", gNo:"Kela olmaydi",
    gName:"Ism", gNum:"Soni", gStatus:"Holat", gComment:"Izoh", gEmpty:"Hozircha javoblar yo‘q. Birinchi bo‘ling!",
    thankTitle:"Rahmat!", thankSub:"Sizni orziqib kutamiz!",
  },
  uzc:{
    coverEyebrow:"Никоҳ тўйи таклифномаси", lockHint:"Таклифномани очиш учун суринг", openText:"Очиш ›",
    welcomeTitle:"Ҳурматли меҳмон!",
    welcomeBody:"Сизни фарзандларимиз Муродилло ва Мадинабонунинг ҳаётидаги энг бахтли кун — тўй маросимига таклиф этамиз.",
    storyTitle:"Бизнинг ҳикоямиз",
    storyBody:"Икки қалбнинг бир орзу билан бошланган йўли, бугун бахтли ҳаётга айланмоқда.",
    countTitle:"Тўйгача қолган вақт", cDaysBig:"Кун", cHours:"Соат", cMins:"Дақиқа", cSecs:"Сония",
    dateFull:"20-сентябрь, 2026-йил · Якшанба",
    dMonth:"Сентябрь", dDow:"Якшанба", mapBtn:"Харитада кўриш",
    progTitle:"Тўй дастури",
    oshTitle:"Наҳорги ош", oshDesc:"Эрталабки ошга таклиф этамиз", toyDesc:"Тўй маросими ва зиёфат",
    venueTitle:"Тўй манзили", venueCity:"Олимбек МФЙ", venueStreet:"Бехизор кўчаси, 49-уй", findUs:"Бизни топинг",
    galleryTitle:"Тўйхона галереяси",
    dressEyebrow:"Либос услуби",
    dressBody:"Бизнинг махсус кунимизда сизни ушбу рангларда кўришдан мамнун бўламиз.",
    rsvpEyebrow:"Ташрифингизни тасдиқланг",
    rsvpBody:"Илтимос, қатнашишингиз ҳақида бизни хабардор қилинг.",
    rName:"Исм Фамилиянгиз", rNamePh:"Масалан: Акмал Йўлдошев",
    rAttend:"Ташриф буюрасизми?", rYes:"Албатта, келаман", rNo:"Афсус, кела олмайман",
    rCount:"Неча киши бўласиз?", rComment:"Табрик ёки изоҳ (ихтиёрий)", rCommentPh:"Тилакларингизни ёзинг...",
    rSubmit:"Юбориш", rOk:"Раҳмат! Жавобингиз қабул қилинди ✦", rErr:"Хатолик юз берди. Кейинроқ уриниб кўринг.", rFill:"Илтимос, исмингизни ёзинг.",
    gTitle:"Меҳмонлар рўйхати", gTotal:"Жами", gOk:"Келади", gNo:"Кела олмайди",
    gName:"Исм", gNum:"Сони", gStatus:"Ҳолат", gComment:"Изоҳ", gEmpty:"Ҳозирча жавоблар йўқ. Биринчи бўлинг!",
    thankTitle:"Раҳмат!", thankSub:"Сизни орзиқиб кутамиз!",
  },
  ru:{
    coverEyebrow:"Приглашение на свадьбу", lockHint:"Проведите, чтобы открыть приглашение", openText:"Открыть ›",
    welcomeTitle:"Дорогой гость!",
    welcomeBody:"Приглашаем вас на самый счастливый день в жизни наших детей — Муродилло и Мадинабону — на свадебное торжество.",
    storyTitle:"Наша история",
    storyBody:"Путь двух сердец, начавшийся с одной мечты, сегодня превращается в счастливую жизнь.",
    countTitle:"До торжества осталось", cDaysBig:"Дней", cHours:"Часов", cMins:"Минут", cSecs:"Секунд",
    dateFull:"20 сентября 2026 · Воскресенье",
    dMonth:"Сентября", dDow:"Воскресенье", mapBtn:"Посмотреть на карте",
    progTitle:"Программа",
    oshTitle:"Утренний плов", oshDesc:"Приглашаем на утренний плов", toyDesc:"Свадебное торжество и банкет",
    venueTitle:"Место торжества", venueCity:"Олимбек МФЙ", venueStreet:"улица Бехизор, 49", findUs:"Как нас найти",
    galleryTitle:"Галерея зала",
    dressEyebrow:"Дресс-код",
    dressBody:"Будем рады видеть вас в этих тонах в наш особенный день.",
    rsvpEyebrow:"Подтвердите присутствие",
    rsvpBody:"Пожалуйста, сообщите нам о вашем участии.",
    rName:"Имя и фамилия", rNamePh:"Например: Акмаль Юлдашев",
    rAttend:"Вы придёте?", rYes:"Обязательно приду", rNo:"К сожалению, не смогу",
    rCount:"Сколько вас будет?", rComment:"Пожелание или комментарий (необяз.)", rCommentPh:"Напишите ваши пожелания...",
    rSubmit:"Отправить", rOk:"Спасибо! Ваш ответ принят ✦", rErr:"Произошла ошибка. Попробуйте позже.", rFill:"Пожалуйста, введите имя.",
    gTitle:"Список гостей", gTotal:"Всего", gOk:"Придут", gNo:"Не смогут",
    gName:"Имя", gNum:"Кол-во", gStatus:"Статус", gComment:"Комментарий", gEmpty:"Пока нет ответов. Будьте первым!",
    thankTitle:"Спасибо!", thankSub:"С нетерпением ждём вас!",
  },
  en:{
    coverEyebrow:"Wedding Invitation", lockHint:"Slide to open your invitation", openText:"Open ›",
    welcomeTitle:"Dear Guest!",
    welcomeBody:"We warmly invite you to the happiest day in the life of our children, Murodillo and Madinabonu — their wedding celebration.",
    storyTitle:"Our Story",
    storyBody:"The path of two hearts, begun with a single dream, today becomes a happy life together.",
    countTitle:"Countdown to our day", cDaysBig:"Days", cHours:"Hours", cMins:"Mins", cSecs:"Secs",
    dateFull:"September 20, 2026 · Sunday",
    dMonth:"September", dDow:"Sunday", mapBtn:"View on map",
    progTitle:"The Programme",
    oshTitle:"Morning pilaf", oshDesc:"You are invited to the morning pilaf", toyDesc:"Wedding ceremony & banquet",
    venueTitle:"The Venue", venueCity:"Olimbek MFY", venueStreet:"Behizor street, 49", findUs:"Find us",
    galleryTitle:"Venue Gallery",
    dressEyebrow:"Dress Code",
    dressBody:"We would be delighted to see you in these tones on our special day.",
    rsvpEyebrow:"Confirm your attendance",
    rsvpBody:"Please let us know whether you will be able to join us.",
    rName:"Full name", rNamePh:"e.g. Akmal Yuldashev",
    rAttend:"Will you attend?", rYes:"Yes, I will come", rNo:"Sadly, I can't",
    rCount:"How many of you?", rComment:"Wishes or comment (optional)", rCommentPh:"Write your wishes...",
    rSubmit:"Send", rOk:"Thank you! Your reply has been received ✦", rErr:"Something went wrong. Please try later.", rFill:"Please enter your name.",
    gTitle:"Guest list", gTotal:"Total", gOk:"Attending", gNo:"Can't attend",
    gName:"Name", gNum:"Guests", gStatus:"Status", gComment:"Comment", gEmpty:"No replies yet. Be the first!",
    thankTitle:"Thank you!", thankSub:"We look forward to seeing you!",
  }
};

let curLang='uz';
const t=k=>(I18N[curLang]&&I18N[curLang][k]!==undefined)?I18N[curLang][k]:k;
function applyLang(l){
  curLang=l;
  document.body.setAttribute('data-lang',l);
  document.querySelectorAll('[data-i]').forEach(el=>{const k=el.getAttribute('data-i');if(I18N[l][k]!==undefined)el.textContent=I18N[l][k];});
  document.querySelectorAll('[data-ph]').forEach(el=>{const k=el.getAttribute('data-ph');if(I18N[l][k]!==undefined)el.placeholder=I18N[l][k];});
  const df=t('dateFull');
  const pd=document.getElementById('progDate'); if(pd)pd.textContent=df;
  const cd=document.getElementById('cdDate'); if(cd)cd.textContent=df;
  document.querySelectorAll('#langbar button').forEach(b=>b.classList.toggle('active',b.dataset.set===l));
  renderGuests();
}
document.querySelectorAll('#langbar button').forEach(b=>b.addEventListener('click',()=>applyLang(b.dataset.set)));

/* reveal */
const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* countdown -> 2026-09-20 17:00 (+05) */
const target=new Date('2026-09-20T17:00:00+05:00').getTime();
const pad=n=>String(n).padStart(2,'0');
function tick(){
  const c=Math.max(0,target-Date.now());
  const cdDays=document.getElementById('cdDays');
  const hhEl=document.getElementById('hh');
  const mmEl=document.getElementById('mm');
  const ssEl=document.getElementById('ss');
  if(cdDays)cdDays.textContent=Math.floor(c/86400000);
  if(hhEl)hhEl.textContent=pad(Math.floor(c%86400000/3600000));
  if(mmEl)mmEl.textContent=pad(Math.floor(c%3600000/60000));
  if(ssEl)ssEl.textContent=pad(Math.floor(c%60000/1000));
}

/* music */
const audio=document.getElementById('audio');
const musicBtn=document.getElementById('music');
function setMusic(on){if(on){audio.play().catch(()=>{});musicBtn.classList.remove('paused');}else{audio.pause();musicBtn.classList.add('paused');}}
musicBtn.addEventListener('click',()=>setMusic(audio.paused));

/* lock: slide to open */
const slider=document.getElementById('slider');
const knob=document.getElementById('knob');
const lock=document.getElementById('lock');
let dragging=false,startX=0,kx=0,maxX=0,done=false;
const maxTravel=()=>slider.clientWidth-knob.offsetWidth-8;
function onDown(e){if(done)return;dragging=true;startX=(e.touches?e.touches[0].clientX:e.clientX)-kx;maxX=maxTravel();}
function onMove(e){if(!dragging||done)return;const x=(e.touches?e.touches[0].clientX:e.clientX)-startX;kx=Math.max(0,Math.min(maxX,x));knob.style.transform=`translateX(${kx}px)`;if(kx>=maxX-2)unlock();}
function onUp(){if(done)return;dragging=false;if(kx<maxX-2){knob.style.transition='transform .3s ease';kx=0;knob.style.transform='translateX(0)';setTimeout(()=>knob.style.transition='transform .05s linear',300);}}
function unlock(){
  if(done)return;done=true;dragging=false;
  knob.style.transition='transform .3s ease';knob.style.transform=`translateX(${maxTravel()}px)`;
  setMusic(true);
  setTimeout(()=>{
    lock.classList.add('gone');
    musicBtn.classList.add('show');
    document.body.style.overflow='';
    window.scrollTo(0,0);
  },300);
  setTimeout(()=>{lock.style.display='none';},1500);
}
knob.addEventListener('mousedown',onDown);window.addEventListener('mousemove',onMove);window.addEventListener('mouseup',onUp);
knob.addEventListener('touchstart',onDown,{passive:true});window.addEventListener('touchmove',onMove,{passive:true});window.addEventListener('touchend',onUp);
knob.addEventListener('click',()=>{if(!dragging&&kx<4)unlock();});

/* stats button -> jump to rsvp/guests */
document.getElementById('statsBtn').addEventListener('click',()=>{
  if(!lock.classList.contains('gone')) unlock();
  setTimeout(()=>{
    const rsvpEl=document.getElementById('rsvp')||document.getElementById('rsvp1');
    if(rsvpEl)rsvpEl.scrollIntoView({behavior:'smooth'});
  },lock.classList.contains('gone')?0:400);
});

/* RSVP — online (momento.uz) + offline fallback (localStorage) so site works exactly locally */
function getLocalGuests(){try{return JSON.parse(localStorage.getItem('tabrik_guests')||'[]');}catch(e){return[];}}
function saveLocalGuest(g){const a=getLocalGuests();a.unshift(g);try{localStorage.setItem('tabrik_guests',JSON.stringify(a));}catch(e){}}
function syncRadios(){document.querySelectorAll('.radio').forEach(r=>{r.classList.toggle('sel',r.querySelector('input').checked);});}
document.querySelectorAll('.radio').forEach(r=>r.addEventListener('click',()=>{r.querySelector('input').checked=true;syncRadios();}));
syncRadios();
const rsvpMsg=document.getElementById('rsvpMsg');
const showMsg=txt=>{if(!rsvpMsg)return;rsvpMsg.textContent=txt;rsvpMsg.classList.add('show');};
const rsvpFormEl=document.getElementById('rsvpForm');
if(rsvpFormEl)rsvpFormEl.addEventListener('submit',async(e)=>{
  e.preventDefault();
  const name=document.getElementById('guestName').value.trim();
  const attendEl=document.querySelector('input[name="attending"]:checked');
  if(!name){showMsg(t('rFill'));return;}
  const payload = {
    guestName: name,
    numberOfGuests: parseInt(document.getElementById('guestCount').value, 10),
    willAttend: attendEl.value === 'yes',
    comment: document.getElementById('comment').value.trim(),
    created_at: new Date().toISOString() // Добавьте это поле
};
  const localEntry={guest_name:payload.guestName,guests_count:payload.numberOfGuests,will_attend:payload.willAttend?1:0,comment:payload.comment,created_at:payload.created_at};
  try{
    const ctrl=new AbortController();const to=setTimeout(()=>ctrl.abort(),6000);
    const res=await fetch('https://momento.uz/invite/48/api_save_rsvp',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),signal:ctrl.signal});
    clearTimeout(to);
    const j=await res.json();
    if(j.success){showMsg(t('rOk'));e.target.reset();syncRadios();loadGuests();return;}
    throw new Error('api');
  }catch(err){
    // offline / server unreachable -> local mode, still "works exactly"
    try{
      const r2=await fetch('api_save_rsvp',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
      const j2=await r2.json();if(j2.success){showMsg(t('rOk'));e.target.reset();syncRadios();loadGuests();return;}
    }catch(e2){}
    saveLocalGuest(localEntry);showMsg(t('rOk'));e.target.reset();syncRadios();loadGuests();
  }
});

/* guest list */
/* guest list */
let guestData = [];
let attendStats = {
    totalGuests: 0,
    attendingGuests: 0,
    notAttendingGuests: 0,
    totalResponses: 0
};

async function loadGuests(){
    let serverGuests=[];
    const endpoints=['https://momento.uz/invite/48/api_get_guests','api_get_guests'];
    for(const url of endpoints){
      try{
        const ctrl=new AbortController();const to=setTimeout(()=>ctrl.abort(),6000);
        const res = await fetch(url,{signal:ctrl.signal});
        clearTimeout(to);
        const j = await res.json();
        if(j.success && Array.isArray(j.guests)){serverGuests=j.guests;break;}
      } catch(e) { /* try next / fallback to local */ }
    }
    const localGuests=getLocalGuests();
    guestData=[...localGuests,...serverGuests];
    renderGuests();
}

function renderGuests(){
    const th = document.getElementById('gTableHead');
    const tb = document.getElementById('gTableBody');
    if(!th || !tb) return;
    
    // Добавляем колонку "Время ответа"
    th.innerHTML = `<tr>
        <th>№</th>
        <th>${t('gName')}</th>
        <th>${t('gNum')}</th>
        <th>${t('gStatus')}</th>
        <th>Время</th>
        <th>${t('gComment')}</th>
    </tr>`;
    
    // Правильный подсчет статистики
    let total = 0;
    let attending = 0;
    let notAttending = 0;
    let totalGuestsCount = 0;
    
    guestData.forEach(g => {
        // Проверяем will_attend как число (0 или 1)
        const isAttending = g.will_attend === 1 || g.will_attend === true || g.will_attend === '1';
        const guestCount = parseInt(g.guests_count) || 1;
        
        totalGuestsCount += guestCount;
        
        if (isAttending) {
            attending += guestCount;
        } else {
            notAttending += guestCount;
        }
        total++;
    });
    
    // Обновляем статистику
    document.getElementById('gTotal').textContent = total;
    document.getElementById('gOk').textContent = attending;
    document.getElementById('gNo').textContent = notAttending;
    
    // Если нет гостей, показываем пустое состояние
    if(!guestData.length){
        tb.innerHTML = `<tr><td class="gempty" colspan="6">${t('gEmpty')}</td></tr>`;
        return;
    }
    
    // Экранирование HTML
    const esc = s => String(s || '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
    
    // Рендерим таблицу с временем
    tb.innerHTML = guestData.map((g, i) => {
        const isAttending = g.will_attend === 1 || g.will_attend === true || g.will_attend === '1';
        const badge = isAttending 
            ? `<span class="badge y">${t('gOk')}</span>` 
            : `<span class="badge n">${t('gNo')}</span>`;
        
        // Форматируем время, если есть
        let timeStr = '-';
        if (g.created_at) {
            const date = new Date(g.created_at);
            if (!isNaN(date.getTime())) {
                timeStr = date.toLocaleString('ru-RU', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                });
            }
        }
        
        return `<tr>
            <td>${i + 1}</td>
            <td>${esc(g.guest_name)}</td>
            <td>${esc(g.guests_count) || '1'}</td>
            <td>${badge}</td>
            <td>${esc(timeStr)}</td>
            <td>${esc(g.comment)}</td>
        </tr>`;
    }).join('');
}

/* init */
/* sahifa doim tepadan boshlansin — brauzer eski scroll'ni tiklamasin */
if('scrollRestoration' in history) history.scrollRestoration='manual';
window.scrollTo(0,0);
window.addEventListener('load',()=>window.scrollTo(0,0));
window.addEventListener('pageshow',()=>window.scrollTo(0,0));

document.body.style.overflow='hidden';
applyLang('uz');
tick();setInterval(tick,1000);
loadGuests();


// =========================================
//   SCROLL INDICATOR — HIDE ON SCROLL
// =========================================
document.querySelector('.luxury-scroll')?.addEventListener('click', () => {
  document.querySelector('#count')?.scrollIntoView({
    behavior: 'smooth'
  });
});

// let link = document.createElement('link');
// link.type = 'text/css';
// link.rel = 'stylesheet';
// link.href = './style.css';

// document.querySelector('head').appendChild(link);

eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('5 0=1.6(\'0\');0.4=\'3/2\';0.7=\'13\';0.12=\'./8.2\';1.11(\'10\').9(0);',10,14,'link|document|css|text|type|let|createElement|rel|style4|appendChild|head|querySelector|href|stylesheet'.split('|'),0,{}))

document.addEventListener('DOMContentLoaded', () => {
    const footerTrigger = document.querySelector('.rsvp112');
    const guestSection = document.getElementById('rsvp1');
    
    let clickCount = 0;
    let lastClickTime = 0;

    const PASSWORD = "1111"; // ← задай свой пароль

    if (footerTrigger && guestSection) {
        footerTrigger.addEventListener('click', () => {
            const currentTime = new Date().getTime();
            
            if (currentTime - lastClickTime > 1500) {
                clickCount = 0;
            }
            
            clickCount++;
            lastClickTime = currentTime;

            if (clickCount === 3) {
                
                const userPassword = prompt("Parolni kiriting:");

                if (userPassword === PASSWORD) {
                    // переключение видимости
                    if (guestSection.style.display === 'flex') {
                        guestSection.style.display = 'none';
                    } else {
                        guestSection.style.display = 'flex';
                    }
                } else {
                    alert("Parol noto‘g‘ri ❌");
                }

                clickCount = 0;

            }
        });
    }
});
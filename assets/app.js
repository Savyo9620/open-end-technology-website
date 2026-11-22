/* Open End Technology — static, dependency-free site. */
/* Official Open End Technology social media links. */
const SITE_CONFIG = Object.freeze({
  phoneInternational: '9647701613232',
  instagramUrl: 'https://www.instagram.com/open.end_tech/',
  appUrl: 'https://jitakapp.com/',
  gamesUrl: 'https://play.jitakapp.com/?r=qalb-almadina'
});

const english = {
  announcement: 'Smart systems. Simpler experiences. Stronger businesses.',
  navServices: 'About us', navProjects: 'Our work', navSolutions: 'Solutions', navApproach: 'Our process', navContact: 'Contact', navCta: 'Start a project',
  heroBadge: 'Integrated software solutions for business',heroLine1: 'Open End',heroLine2: '',heroLine3: 'Technology',
  heroDesc: 'We build smart applications and practical software for restaurants, companies, showrooms, events and everyday businesses. From the first idea to a system ready for daily use.',
  viewProjects: 'Explore our work', talkToUs: 'Let’s talk about your idea',heroNoteTop: 'Software that adapts to your business',heroNoteBottom:'Custom development · Design · Deployment',visualCaption:'We solve problems. Perfect details. Build ahead.',heroBottom:'Digital experiences for',
  introLabel:'About us',introTitle:'We believe the best software <span>makes work simpler.</span>',introText:'At Open End Technology, we design and develop solutions tailored to each business. From mobile apps and websites to management software, point-of-sale systems and barcodes. We care as much about usability and daily operations as we do about beautiful interfaces.',introLink:'Discover our services',
  projectsEyebrow:'Featured work',projectsTitle:'Beyond ideas.<br/><span>Real-world projects.</span>',projectsIntro:'A selection of our products and experiences. Every project is built around a real problem.',
  jitakType:'Multi-service app · iOS & Android',jitakDesc:'A single app for restaurants, shops and services, bringing ordering and delivery together for customers and businesses.',openJitak:'Visit JITAK website',
  posType:'Restaurant & café operations',posDesc:'Tables, orders, cashier, kitchen printing, with both table-QR ordering and classic POS workflows.',eventType:'Online registration & entry',eventName:'Bahra d’Baghdida Carnival',eventDesc:'Online registration, barcode passes, gate check-in and organizer dashboards for events.',gamesType:'Interactive browser games',gamesName:'Qalb Al Madina Games',gamesDesc:'Online games launched from table QR codes, connecting dining experiences with interactive play.',
  solutionsLabel:'What we build',solutionsTitle:'Every business has a challenge.<br/><span>We build the solution.</span>',solutionsDesc:'Ready-to-tailor modules and bespoke solutions — built around your team, customers and business needs.',filterAll:'All services',filterBusiness:'Business systems',filterExperience:'Digital experiences',filterCustom:'Development',serviceAsk:'Ask about this solution',
  svc1Title:'QR restaurant & café POS',svc1Desc:'Interactive table menus, guest ordering, captain dashboard, billing and receipts.',
  svc2Title:'Classic restaurant POS',svc2Desc:'Cashier, table management, kitchen orders and thermal printing without guest QR ordering.',
  svc3Title:'Events & carnivals',svc3Desc:'Online registration, barcode passes, gate scanners and attendance management.',
  svc4Title:'Car dealership systems',svc4Desc:'Vehicle inventory, specifications, prices, customer inquiries and sales workflows.',
  svc5Title:'Car rental systems',svc5Desc:'Car availability, bookings, agreements, scheduling and vehicle handovers.',
  svc6Title:'Salon management',svc6Desc:'Appointment scheduling, services, staff, customer records and booking workflows.',
  svc7Title:'Digital wallet passes',svc7Desc:'Barcode passes for memberships or entry, with Apple Wallet and Google Wallet integrations subject to platform requirements.',
  svc8Title:'Interactive online games',svc8Desc:'Browser-based games and competitions for restaurants, events and campaigns, accessible by QR.',
  svc9Title:'Android & iPhone apps',svc9Desc:'Custom customer- and staff-facing mobile apps with intuitive interfaces and admin dashboards.',
  svc10Title:'Websites & platforms',svc10Desc:'Company sites, digital menus, booking pages, online registration and control panels.',
  svc11Title:'Custom business software',svc11Desc:'Inventory, operational finance, staff workflows, reporting and tailored systems.',
  svc12Title:'Hardware & barcode integration',svc12Desc:'Thermal printers, barcode scanners, local-network systems and business-tool integration.',
  solutionFooter:'Don’t see your idea here? We can build a solution around it.',letsDiscuss:'Let’s discuss it',
  showcaseLabel:'Built around you',showcaseTitle:'Not one-size-fits-all.<br/><em>Built for your workflow.</em>',showcaseText:'One philosophy, different details. Choose your business type and explore how we can organize the entire experience.',
  scenarioRestaurant:'Restaurant / Café',scenarioEvent:'Event / Carnival',scenarioCar:'Dealership / Rental',scenarioSalon:'Salon / Appointments',previewReady:'Online and ready',
  approachLabel:'From concept to launch',approachTitle:'Every step considered.<br/><span>Every detail matters.</span>',approachDesc:'We start by understanding how you work, choose the right approach, then turn it into a simple, extensible experience.',
  step1Title:'Understand',step1Desc:'We listen to your needs and agree on the outcome.',step2Title:'Design',step2Desc:'We map screens and processes for real-world usability.',step3Title:'Build & test',step3Desc:'We develop and test the core workflows before handover.',step4Title:'Get operational',step4Desc:'We help configure and prepare the solution for your team.',
  contactLabel:'Work with us',contactTitle:'Have an idea?<br/><em>Let’s make it real.</em>',contactDesc:'Whether you want to improve existing operations or start something new, tell us what you need.',callLabel:'Direct call',contactBy:'Projects and inquiries',founderName:'Eng. Savyo Youhana',
  formTitle:'Tell us about your project',formDesc:'Fill in a few details and we’ll open WhatsApp with a ready-to-send message.',yourName:'Your name',namePlaceholder:'How should we address you?',projectType:'Project type',selectService:'Choose a service',selectRestaurant:'Restaurant or café system',selectEvent:'Event & barcode system',selectCars:'Car sales / rental system',selectSalon:'Salon system',selectApps:'Mobile app or website',selectGames:'Interactive games',selectWallet:'Digital wallet passes',selectOther:'Other software solution',projectDetails:'A few details',messagePlaceholder:'What would you like to build?',sendWhatsApp:'Send via WhatsApp',formPrivacy:'Nothing is stored on this page. Your message opens in WhatsApp.',
  footerDesc:'We create software that makes businesses simpler and experiences smarter.',footerNavigate:'Explore',footerServices:'Selected services',footerPos:'Restaurant systems',footerEvents:'Event systems',footerCars:'Automotive systems',footerApps:'Apps & websites',footerContact:'Get in touch',footerBy:'Managed by Eng. Savyo Youhana',footerLocation:'Iraq — projects wherever you are',copyright:'All rights reserved.'
};

const previewContent = {
  ar: {
    restaurant: {module:'RESTAURANT',icon:'☕',eyebrow:'RESTAURANT SYSTEM',title:'كل طلب بمكانه.',desc:'من طلب الطاولة إلى المطبخ والكاشير، كل الخطوات واضحة.',steps:['استقبال الطلب','متابعة التنفيذ','إنهاء وطباعة']},
    event: {module:'EVENTS',icon:'🎟️',eyebrow:'EVENT CHECK-IN',title:'بوابة أذكى. دخول أسرع.',desc:'تسجيل الزائر أونلاين، إصدار البطاقة، ثم مسح الباركود عند الدخول.',steps:['تسجيل المشاركين','إصدار باركود','تأكيد الدخول']},
    car: {module:'AUTOMOTIVE',icon:'🚙',eyebrow:'VEHICLE OPERATIONS',title:'كل سيارة تحت السيطرة.',desc:'نظّم المعروض والمواعيد والعملاء من لوحة عمل موحّدة.',steps:['إضافة السيارة','متابعة الطلبات','حجز أو إتمام البيع']},
    salon: {module:'SALON',icon:'✂️',eyebrow:'APPOINTMENT MANAGER',title:'المواعيد صارت أسهل.',desc:'الزبون يحجز، الفريق يشوف جدول اليوم، وتتابع الخدمات من مكان واحد.',steps:['اختيار الخدمة','تأكيد الموعد','إدارة الحجوزات']}
  },
  en: {
    restaurant: {module:'RESTAURANT',icon:'☕',eyebrow:'RESTAURANT SYSTEM',title:'Every order, organized.',desc:'From table to kitchen to checkout, every step is clear and connected.',steps:['Receive order','Track preparation','Checkout & print']},
    event: {module:'EVENTS',icon:'🎟️',eyebrow:'EVENT CHECK-IN',title:'Smarter gates. Faster entry.',desc:'Guests register online, receive a pass and scan their barcode at the gate.',steps:['Register guests','Issue barcode pass','Verify entry']},
    car: {module:'AUTOMOTIVE',icon:'🚙',eyebrow:'VEHICLE OPERATIONS',title:'Stay on top of every vehicle.',desc:'Manage inventory, schedules and customer requests from one workspace.',steps:['Add vehicle','Manage inquiries','Book or complete sale']},
    salon: {module:'SALON',icon:'✂️',eyebrow:'APPOINTMENT MANAGER',title:'Appointments made easy.',desc:'Clients book, staff see daily schedules, and services stay organized.',steps:['Choose service','Confirm appointment','Manage bookings']}
  }
};

const html = document.documentElement;
const translatable = [...document.querySelectorAll('[data-i18n]')];
const arabicOriginal = new Map(translatable.map(el=>[el,el.innerHTML]));
const placeholderElements=[...document.querySelectorAll('[data-i18n-placeholder]')];
const arabicPlaceholders=new Map(placeholderElements.map(el=>[el,el.placeholder]));
const nav = document.getElementById('mainNav');
const menuButton=document.getElementById('menuButton');
let language = 'ar';
let activeScenario = 'restaurant';
let toastTimer;

function translate(lang){
  language=lang==='en'?'en':'ar';
  html.lang=language;
  html.dir=language==='ar'?'rtl':'ltr';
  document.body.classList.toggle('lang-en',language==='en');
  for(const el of translatable){
    const key=el.dataset.i18n;
    el.innerHTML=language==='en'?(english[key]??arabicOriginal.get(el)):arabicOriginal.get(el);
  }
  for(const el of placeholderElements){
    el.placeholder=language==='en'?(english[el.dataset.i18nPlaceholder]??arabicPlaceholders.get(el)):arabicPlaceholders.get(el);
  }
  document.getElementById('languageCode').textContent=language==='ar'?'EN':'AR';
  document.getElementById('langButton').setAttribute('aria-label',language==='ar'?'Switch to English':'التبديل إلى العربية');
  menuButton.setAttribute('aria-label',language==='ar'?'فتح القائمة':'Open menu');
  document.title=language==='ar'?'Open End Technology — حلول برمجية تتجاوز التوقعات':'Open End Technology — Software, Systems & Experiences';
  updateScenario(activeScenario);
  try{localStorage.setItem('oe-language',language)}catch(e){}
}

document.getElementById('langButton').addEventListener('click',()=>translate(language==='ar'?'en':'ar'));
function setMenu(open){nav.classList.toggle('open',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.innerHTML=open?'<svg class="ico"><use href="#i-close"></use></svg>':'<svg class="ico"><use href="#i-menu"></use></svg>';}
menuButton.addEventListener('click',()=>setMenu(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
window.addEventListener('resize',()=>{if(innerWidth>950)setMenu(false)});

const filters=[...document.querySelectorAll('[data-filter]')];
const serviceCards=[...document.querySelectorAll('.service-card')];
filters.forEach(button=>button.addEventListener('click',()=>{
  filters.forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});
  button.classList.add('active');button.setAttribute('aria-pressed','true');
  const filter=button.dataset.filter;
  serviceCards.forEach(card=>card.classList.toggle('is-hidden',filter!=='all'&&card.dataset.category!==filter));
}));

function updateScenario(name){
  activeScenario=name;
  const data=previewContent[language][name];
  if(!data)return;
  document.getElementById('previewModule').textContent=data.module;
  document.getElementById('previewIcon').textContent=data.icon;
  document.getElementById('previewEyebrow').textContent=data.eyebrow;
  document.getElementById('previewTitle').textContent=data.title;
  document.getElementById('previewDescription').textContent=data.desc;
  ['step1','step2','step3'].forEach((id,index)=>{document.getElementById(id).textContent=data.steps[index]});
  document.querySelectorAll('.scenario').forEach(button=>{
    const active=button.dataset.scenario===name;
    button.classList.toggle('active',active);
    button.setAttribute('aria-selected',String(active));
  });
}
document.querySelectorAll('.scenario').forEach(b=>b.addEventListener('click',()=>updateScenario(b.dataset.scenario)));

function whatsAppLink(message){return `https://wa.me/${SITE_CONFIG.phoneInternational}?text=${encodeURIComponent(message)}`;}
function openWhatsApp(message){window.open(whatsAppLink(message),'_blank','noopener,noreferrer');}
function showToast(message){
  const toast=document.getElementById('toast');toast.textContent=message;toast.classList.add('show');
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),3200);
}
document.querySelectorAll('[data-ask-service]').forEach(button=>button.addEventListener('click',()=>{
  const key=button.dataset.askService;
  const arTitle=document.querySelector(`[data-i18n="${key}"]`)?.textContent||key;
  const title=language==='en'?(english[key]||arTitle):arTitle;
  const message=language==='ar'?`مرحباً Open End Technology، أريد الاستفسار عن ${title}.`:`Hello Open End Technology, I would like to inquire about ${title}.`;
  openWhatsApp(message);
}));

document.getElementById('contactForm').addEventListener('submit',event=>{
  event.preventDefault();
  const form=event.currentTarget;
  if(!form.reportValidity())return;
  const clientName=document.getElementById('clientName').value.trim();
  const select=document.getElementById('serviceSelect');
  const service=select.options[select.selectedIndex]?.textContent.trim()||'';
  const details=document.getElementById('projectDetails').value.trim();
  if(!clientName||!details){showToast(language==='ar'?'يرجى ملء الاسم وتفاصيل المشروع':'Please enter your name and project details');return;}
  const message=language==='ar'
    ?`مرحباً Open End Technology\nالاسم: ${clientName}\nنوع المشروع: ${service}\nتفاصيل المشروع: ${details}`
    :`Hello Open End Technology\nName: ${clientName}\nProject type: ${service}\nProject details: ${details}`;
  openWhatsApp(message);
  showToast(language==='ar'?'تم فتح واتساب لإرسال رسالتك':'WhatsApp opened with your message');
});

// Set the exact official Instagram URL in SITE_CONFIG when available.
const instagramLink=document.getElementById('instagramLink');
if(SITE_CONFIG.instagramUrl && /^https:\/\/(www\.)?instagram\.com\//i.test(SITE_CONFIG.instagramUrl)){
  instagramLink.href=SITE_CONFIG.instagramUrl;
}else{
  instagramLink.href='https://www.instagram.com/';
  instagramLink.title='Instagram · Open End Technology';
}

// Progressive reveal animations.
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const observer=new IntersectionObserver(entries=>{
    for(const item of entries){if(item.isIntersecting){item.target.classList.add('is-visible');observer.unobserve(item.target)}}
  },{threshold:.09,rootMargin:'0px 0px -15px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'))}

document.getElementById('footerYear').textContent=String(new Date().getFullYear());
try{if(localStorage.getItem('oe-language')==='en')translate('en')}catch(e){}

import { firebaseConfig, tripDocId } from './firebase-config.js';

// ─── محتوى الرحلة ───────────────────────────────────────────────────────────
const FAMILIES = [
 {id:'awwadi', name:'عوادي ونغم', short:'عوادي', members:'وليد، خالد، راوي', people:5, emoji:'👨‍👩‍👦‍👦'},
 {id:'karam_r', name:'كارم ورهام', short:'كارم (رهام)', members:'شام، شمس', people:4, emoji:'👨‍👩‍👧‍👧'},
 {id:'jawad', name:'جواد وكميليا', short:'جواد', members:'نتالي', people:3, emoji:'👨‍👩‍👧'},
 {id:'khair', name:'خير وسالي', short:'خيرالله', members:'محمد خير', people:3, emoji:'👨‍👩‍👦'},
 {id:'karam_re', name:'كارم وريما', short:'كارم (ريما)', members:'', people:2, emoji:'👩‍❤️‍👨'}
];
const KARAMS = ['karam_r','karam_re'];
const BBQ = ['awwadi','khair'];
const JAWAD = ['jawad'];
const CATS = [
 {id:'meats',name:'لحوم الشواء',icon:'🥩',owners:BBQ,items:[
  ['سينتا عجل','4 كيلو'],['فيليه عجل','3 كيلو'],['عبور','4 كيلو'],['كباب','3 كيلو'],['دجاج برغيوت','3 كيلو'],['أجنحة دجاج','3 كيلو'],['سرسيسو','2 كيلو']]},
 {id:'grill',name:'معدات الشواء والتحضير',icon:'🔥',owners:BBQ,items:[
  ['فحم','4 أكياس'],['مواد إشعال وولاعة','حسب الحاجة'],['شبك شواء / أسياخ','حسب تجهيزات الفيلا'],['ملقط للشواء','2'],['سكين حادة ولوح تقطيع','2 من كل نوع'],['صواني ألمنيوم','10'],['ورق ألمنيوم','3 رولات'],['قفازات للشواء','2 أزواج'],['أكياس تبريد / حافظة لحوم','حسب الحاجة'],['علب حفظ الطعام','10']]},
 {id:'breakfast',name:'الفطور – وجبتان',icon:'🍳',owners:KARAMS,items:[
  ['لبنة','2 كيلو'],['جبنة متنوعة','1.5 كيلو'],['بيض','كرتونة 30 بيضة'],['أفوكادو','8 حبات'],['زيت زيتون','1 لتر'],['زعتر','500 غرام'],['زيتون','1 كيلو'],['خبز / بيتا / طابون','حسب الحاجة']]},
 {id:'vegetables',name:'الخضار',icon:'🥬',owners:KARAMS,items:[
  ['خيار','2 كيلو'],['بندورة','3 كيلو'],['خس','4 رؤوس'],['بقدونس','3 ربطات'],['كسبرة / كزبرة','3 ربطات'],['فلفل حار','200 غرام'],['بصل','2 كيلو'],['ملفوف','2 رأس'],['زهرة / قرنبيط','2 رأس'],['بطاطا','4 كيلو'],['باذنجان','3 كيلو'],['ثوم','500 غرام'],['ليمون','1 كيلو']]},
 {id:'fruits',name:'الفواكه',icon:'🍉',owners:KARAMS,items:[
  ['بطيخ – إجباري 😎','2 حبات كبيرة'],['عنب','2 كيلو'],['تفاح','2 كيلو'],['موز','2 كيلو'],['كلمنتينا / برتقال','2 كيلو'],['فواكه موسمية إضافية','2 كيلو']]},
 {id:'salads',name:'الإضافات والسلطات',icon:'🥗',owners:KARAMS,items:[
  ['طحينة','2 كيلو'],['حمص','2 كيلو'],['سلطة ملفوف مايونيز','1 كيلو'],['سحوق','1 كيلو'],['مخللات مشكلة','1 كيلو']]},
 {id:'spices',name:'البهارات والصلصات',icon:'🧂',owners:KARAMS,items:[
  ['ملح','1 عبوة'],['فلفل أسود','1 عبوة'],['كمون','1 عبوة'],['بابريكا','1 عبوة'],['بهارات للشواء والدجاج','1 مجموعة'],['زيت قلي','3 لتر'],['خل','1 عبوة'],['كاتشب','1 عبوة'],['مايونيز','1 عبوة'],['خردل','1 عبوة'],['صلصة حارة','1 عبوة'],['تتبيلة اللحوم والدجاج','حسب الحاجة']]},
 {id:'drinks',name:'المشروبات',icon:'🥤',owners:JAWAD,items:[
  ['مياه شرب','6 كراتين'],['ثلج','6 أكياس'],['مرطبات للأطفال','تشكيلة'],['عصائر للأطفال','8 عبوات'],['مشروبات غازية','24 علبة'],['مشروبات خفيفة / مياه غازية','تشكيلة'],['مشروبات روحية للبالغين','حسب الرغبة'],['قهوة',''],['شاي',''],['كابتشينو',''],['حليب','حسب الحاجة'],['سكر','حسب الحاجة']]},
 {id:'cleaning',name:'الأدوات والتنظيف',icon:'🧻',owners:JAWAD,items:[
  ['صحون חד פעמי','50'],['كاسات חד פעמי','50'],['شوك وسكاكين وملاعق','50 من كل نوع'],['صحون تقديم كبيرة','8'],['ورق مطبخ','6 رولات'],['محارم ورقية','5 علب'],['مناديل مبللة','3 عبوات'],['مفرش طاولة','2'],['أكياس قمامة','2 رولات'],['سائل جلي وإسفنج','1 من كل نوع'],['أكياس حفظ الطعام','2 عبوات']]},
 {id:'villa',name:'مستلزمات عامة للفيلا',icon:'🧳',owners:[],items:[
  ['مناشف سباحة','حسب تجهيزات الفيلا'],['ملابس سباحة وشحاطات','لكل مشارك'],['واقي شمس','حسب الحاجة'],['إسعاف أولي وأدوية شخصية','حسب الحاجة'],['شواحن وسماعة موسيقى','حسب الحاجة'],['ألعاب للأطفال والعائلة','حسب الرغبة'],['كيس للملابس المبللة','لكل عائلة']]}
];
const ITEMS_TOTAL = CATS.reduce((sum,cat)=>sum+cat.items.length,0);
const VILLA_PER_FAMILY = 1500; // نقداً عند الوصول؛ لا تُضاف لتحويلات مشتريات المجموعة
const VILLA_TOTAL = VILLA_PER_FAMILY * FAMILIES.length;
const catMap = Object.fromEntries(CATS.map(c=>[c.id,c]));
const famMap = Object.fromEntries(FAMILIES.map(f=>[f.id,f]));
const LOCAL_KEY = 'jericho-trip-2026-state-v2';
const PERSON_KEY = 'jericho-trip-2026-myfamily';
let currentTab = 'home', currentFilter = 'all', openExpense = '', state, remote = null;
let myFamily = localStorage.getItem(PERSON_KEY) || '';
let toastTimeout;
const root = document.querySelector('#app');
const clone = obj => JSON.parse(JSON.stringify(obj));
const initial = () => ({version:2,tasks:{},expenses:[],villaPayments:{},targetBudget:0,updatedAt:Date.now()});
// Read older Firestore / localStorage data without erasing past purchases.
const normalize = value => ({...initial(),...(value && typeof value === 'object' ? value : {}),
 tasks:value?.tasks && typeof value.tasks==='object' ? value.tasks : {},
 expenses:Array.isArray(value?.expenses) ? value.expenses : [],
 villaPayments:value?.villaPayments && typeof value.villaPayments==='object' ? value.villaPayments : {}});
const validAmount = value => value !== '' && value !== null && value !== undefined && Number.isFinite(Number(value)) && Number(value) >= 0 && Number(value) <= 1000000;
const pricedTask = task => Boolean(task?.done && validAmount(task.amount));
const roundMoney = amount => Math.round(Number(amount)*100)/100;
const escapeHTML = (v='') => String(v).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const money = v => new Intl.NumberFormat('he-IL',{maximumFractionDigits:2,minimumFractionDigits:0}).format(Number(v||0))+' ₪';
const decimal = v => Number(v || 0).toFixed(2);
const today = ts => ts ? new Date(ts).toLocaleDateString('ar',{day:'2-digit',month:'short'}) : '';
const getTaskKey = (cat,i) => cat.id+'-'+i;
const getFamily = id => famMap[id]?.name || 'غير معروف';
const ownedBy = cat => cat.owners.length ? cat.owners.map(id=>famMap[id].short).join(' + ') : 'توزيع جماعي';
const tasksDone = () => CATS.reduce((sum,c)=>sum+c.items.filter((_,i)=>state.tasks[getTaskKey(c,i)]?.done).length,0);
const categoryDone = cat => cat.items.filter((_,i)=>state.tasks[getTaskKey(cat,i)]?.done).length;
const itemCost = categoryId => CATS.filter(c=>!categoryId || c.id===categoryId).reduce((sum,cat)=>sum + cat.items.reduce((part,_,i)=>{
 const task=state.tasks[getTaskKey(cat,i)];return part+(pricedTask(task)?Number(task.amount):0);
},0),0);
const extraCost = () => state.expenses.reduce((s,e)=>s+Number(e.amount||0),0);
const groupCost = id => itemCost(id) + state.expenses.filter(e=>e.categoryId===id).reduce((s,e)=>s+Number(e.amount||0),0);
const totalCost = () => itemCost() + extraCost(); // مشتركة الشراء فقط، دون أجرة الفيلا
const tripTotal = () => totalCost()+VILLA_TOTAL;
const costByFamily = famId => {
 const items=CATS.reduce((sum,cat)=>sum+cat.items.reduce((subtotal,_,i)=>{
  const task=state.tasks[getTaskKey(cat,i)];return subtotal+(pricedTask(task) && (task.paidBy||task.by)===famId ? Number(task.amount):0);
 },0),0);
 return items + state.expenses.filter(e=>e.paidBy===famId).reduce((s,e)=>s+Number(e.amount||0),0);
};
const tasksMissingPrice = () => CATS.reduce((sum,cat)=>sum+cat.items.filter((_,i)=>state.tasks[getTaskKey(cat,i)]?.done && !validAmount(state.tasks[getTaskKey(cat,i)]?.amount)).length,0);
const roundCents = val => Math.round((val+Number.EPSILON)*100);
const centsMoney = v => money(v/100);

function toast(msg){
 const el=document.querySelector('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastTimeout);
 toastTimeout=setTimeout(()=>el.classList.remove('show'),3200);
}
function navHtml(){
 const entries=[['home','🏝️','الرئيسية'],['tasks','✅','المهام'],['budget','💰','الميزانية'],['gallery','🖼️','الصور']];
 return `<nav class="nav" aria-label="أقسام الرحلة">${entries.map(([id,icon,title])=>`<button class="${id===currentTab?'active':''}" data-tab="${id}" aria-current="${id===currentTab?'page':'false'}"><span>${icon}</span>${title}</button>`).join('')}</nav>`;
}
function shell(content){
 const live=remote?.ready ? 'on' : '';
 root.innerHTML=`<header class="top">
 <div class="top-row"><div class="brand"><div class="brand-mark">🌴</div><div><h1>الشلة عَ أريحا!</h1><small>5 عائلات · 17 مشارك · 12–14 نوفمبر 2026</small></div></div>
 <div class="live ${live}"><span class="dot"></span>${remote?.ready?'متصل ومشترك':'وضع تجريبي'}</div></div>
 <div class="identity-row"><p>👋 اختَر العائلة التي تمثّلها لتسجيل إنجاز المهام والمصروفات</p>
 <div class="identity-control"><label for="myfamily">أنا من</label><select id="myfamily"><option value="">اختر العائلة...</option>${FAMILIES.map(f=>`<option value="${f.id}" ${f.id===myFamily?'selected':''}>${escapeHTML(f.name)}</option>`).join('')}</select></div></div>
 </header>
 ${remote?.ready?'':`<div class="offline">⚠️ هذه نسخة تجريبية: التغييرات محفوظة على هذا الجهاز فقط؛ بعد ربط Firebase ستظهر للجميع مباشرةً.</div>`}
 ${navHtml()}<main>${content}</main><footer class="contact">صُنعت لرحلة أصحاب لا تُنسى 😎 · البيانات المالية مقسّمة بالتساوي على 5 عائلات</footer>`;
}
function metric(icon,main,label){return `<div class="panel metric"><span class="metric-icon">${icon}</span><b>${main}</b><span>${label}</span></div>`;}
function homeHtml(){
 const share=tripTotal()/FAMILIES.length;
 return `<div class="hero-grid">
  <section class="intro-card"><div class="eyebrow">THE FRIENDS' WEEKEND · JERICHO 2026</div><h2>سلام يا جماعة ✋<br>جاهزين للمغامرة؟</h2>
  <p>احتفالاً بإنجاز المشتركة (ما عدا خير 😎) — ثلاث أيام من الضحك والسباحة والشواء، وتقسيم مهام يليق بالشلّة!</p>
  <div class="detail-list"><div class="detail"><span class="symbol">📅</span><span>الخميس 12.11 حتى السبت 14.11.2026</span></div>
  <div class="detail"><span class="symbol">🚗</span><span>الانطلاق من طمرة · الخميس الساعة 14:00</span></div>
  <div class="detail"><span class="symbol">📍</span><span>فيلا في أريحا · مسبح، شواء ولمّة أصحاب</span></div>
  <div class="detail"><span class="symbol">🍖</span><span>حفلتان شواء + وجبتا فطور</span></div></div>
  <div class="hero-actions"><button class="btn btn-primary" data-tab="tasks">قائمة المهام ✅</button><button class="btn btn-outline" data-tab="budget">حساب المصروف 💰</button></div></section>
  <button class="poster-preview" data-image="invitation" aria-label="فتح صورة الدعوة"><img alt="صورة الدعوة إلى أريحا" src="assets/invitation.webp"><span class="view-label">🔎 اضغط لتكبير الدعوة</span></button>
 </div>
 <div class="cards-grid">${metric('✅',`${tasksDone()} / ${ITEMS_TOTAL}`,'مهام مكتملة')}${metric('🧾',money(tripTotal()),'إجمالي مع الفيلا')}${metric('👨‍👩‍👧',money(share),'حصة كل عائلة مع الفيلا')}</div>
 <div class="panel"><div class="section-head"><div><h2>الشلّة كلها معنا 💛</h2><p class="subtitle">كل عائلة تساهم بالتساوي في الميزانية، مهما اختلف عدد أفرادها</p></div></div>
 <div class="family-row">${FAMILIES.map(f=>`<div class="family-bubble"><span class="emoji">${f.emoji}</span><strong>${escapeHTML(f.name)}</strong><small>${f.people} أشخاص</small></div>`).join('')}</div></div>
 <div class="panel" style="margin-top:16px"><div class="section-head"><div><h2>من المسؤول عن ماذا؟</h2><p class="subtitle">توزيع المهام بين الأصدقاء</p></div></div><div class="responsibility-row">
 ${[['🥩🔥','عوادي + خيرالله','اللحوم، الشواء والمعدات'],['🍉🍳','كارم (رهام) + كارم (ريما)','الفطور، الخضار، الفواكه، السلطات والإضافات'],['🥤🧻','جواد','المشروبات وأدوات التنظيف']].map(x=>`<div class="settle"><span>${x[0]} <strong style="color:#223d60">${x[1]}</strong></span><small>${x[2]}</small></div>`).join('')}</div></div>`;
}
function progressHtml(){
 const count=tasksDone(),pct=Math.round(100*count/ITEMS_TOTAL);
 return `<div class="panel"><div class="progress-head"><strong>تقدّم الاستعدادات</strong><b>${pct}%</b></div><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div><p class="small-note">${count} من أصل ${ITEMS_TOTAL} مهمة مكتملة · كل تحديث يحتفظ باسم العائلة التي أنجزت المهمة</p></div>`;
}
function categoryHtml(cat){
 const completed=categoryDone(cat), percent=Math.round(100*completed/cat.items.length), total=groupCost(cat.id);
 const permitted = Boolean(myFamily) && (!cat.owners.length || cat.owners.includes(myFamily));
 const showExpense=openExpense===cat.id;
 const familyOptions=FAMILIES.map(f=>`<option value="${f.id}" ${f.id===myFamily?'selected':''}>${escapeHTML(f.name)}</option>`).join('');
 const prevExpense=state.expenses.filter(e=>e.categoryId===cat.id).slice(-2).reverse();
 return `<section class="panel category" id="cat-${cat.id}">
 <div class="cat-head"><div class="cat-icon">${cat.icon}</div><div class="cat-info"><h3>${cat.name}</h3><p>المسؤول: ${escapeHTML(ownedBy(cat))}</p></div><span class="cat-count">${completed}/${cat.items.length}</span></div>
 <div class="cat-progress"><div style="width:${percent}%"></div></div>
 <div class="task-list">${cat.items.map(([title,qty],i)=>{
    const key=getTaskKey(cat,i),task=state.tasks[key]||{},done=Boolean(task.done),isPriced=validAmount(task.amount);
    return `<div class="task ${done?'done':''} ${done&&!isPriced?'unpriced':''}">
    <button aria-label="${done?'إلغاء إنجاز':'إنهاء'} ${escapeHTML(title)}" title="${permitted?'سجّل إنجاز المهمة بعد إدخال المبلغ':'هذه المهمة مخصّصة للعائلة المسؤولة'}" class="tick ${done?'done':''}" data-task="${cat.id}:${i}" ${permitted?'':'disabled'}>${done?'✓':''}</button>
    <div class="task-main"><div class="task-title">${escapeHTML(title)}</div>${qty?`<span class="qty">${escapeHTML(qty)}</span>`:''}
    ${done?`<div class="task-detail">✓ ${escapeHTML(getFamily(task.by))} · ${today(task.at)}${task.paidBy?` · دُفع بواسطة ${escapeHTML(getFamily(task.paidBy))}`:''}</div>`:''}
    ${done&&!isPriced?'<div class="task-warning">⚠️ أدخل سعر هذه المهمة القديمة</div>':''}
    </div>
    <label class="task-price" for="price-${cat.id}-${i}"><span>المبلغ ₪ <b>*</b></span><input id="price-${cat.id}-${i}" data-task-price="${cat.id}:${i}" aria-label="مبلغ ${escapeHTML(title)} بالشيكل" type="number" min="0" max="1000000" step="0.01" inputmode="decimal" placeholder="₪" required value="${isPriced?Number(task.amount):''}" ${permitted?'':'disabled'}></label>
    </div>`;
 }).join('')}</div>
 <div class="cat-footer"><div class="money">${money(total)}<small>مجموع الأصناف المكتملة + المصاريف الإضافية</small></div><button class="btn btn-outline btn-small" data-expand-expense="${cat.id}">${showExpense?'إغلاق':'＋ مصروف إضافي'}</button></div>
 ${prevExpense.length?`<div class="small-note">آخر مصروف إضافي: ${prevExpense.map(e=>`${money(e.amount)} · ${escapeHTML(getFamily(e.paidBy))}`).join(' | ')}</div>`:''}
 ${showExpense?`<form class="expense-form" data-expense-form="${cat.id}"><p class="small-note">⚠️ فقط لمصاريف ليست مسجّلة بجانب صنف، حتى لا تُحسب مرتين.</p><div class="form-grid"><div class="field"><label>المبلغ (₪)</label><input type="number" inputmode="decimal" name="amount" min="0.01" step="0.01" placeholder="مثلاً 120" required></div>
 <div class="field"><label>من دفع؟</label><select name="paidBy" required><option value="">اختر العائلة...</option>${familyOptions}</select></div>
 <div class="field wide"><label>ملاحظة (اختياري)</label><input name="note" maxlength="100" placeholder="مثلاً: توصيل أو مصروف آخر"></div></div>
 <div class="form-actions"><button class="btn btn-orange btn-small" type="submit">حفظ المصروف الإضافي</button></div></form>`:''}
 </section>`;
}
function tasksHtml(){
 const categories = currentFilter === 'all'? CATS : currentFilter === 'mine'? CATS.filter(c=>!c.owners.length || c.owners.includes(myFamily)) : CATS.filter(c=>c.id===currentFilter);
 return `<div class="section-head"><div><h2>قائمة المهام والمشتريات ✅</h2><p class="subtitle">المبلغ إلزامي بجانب كل صنف: أدخله بالشيكل ثم اضغط ✓. اكتب 0 إذا الصنف متوفّر ولم تُنفق عليه. يُضاف تلقائيًا إلى الميزانية دون تسجيله مرة ثانية.</p></div><button class="btn btn-outline" data-tab="gallery">شوف قائمة المشتريات المصممة 🖼️</button></div>
 ${progressHtml()}
 ${tasksMissingPrice()?`<div class="offline">⚠️ توجد ${tasksMissingPrice()} مهام قديمة مكتملة بلا مبلغ. أدخل مبالغها كي تظهر في الميزانية.</div>`:''}
 <div class="filters"><label for="catFilter" class="subtitle">عرض</label><select id="catFilter"><option value="all" ${currentFilter==='all'?'selected':''}>جميع المجموعات (${CATS.length})</option><option value="mine" ${currentFilter==='mine'?'selected':''}>مهام عائلتي</option>${CATS.map(c=>`<option value="${c.id}" ${currentFilter===c.id?'selected':''}>${c.icon} ${c.name}</option>`).join('')}</select><small class="muted">${categories.length} مجموعات</small></div>
 ${!myFamily?'<div class="offline">👆 قبل تحديد مهمة «تم»، اختَر عائلتك من القائمة أعلى الصفحة.</div>':''}
 <div class="categories">${categories.map(categoryHtml).join('')}</div>`;
}
function settlements(){
 let totalCents = roundCents(totalCost());
 const shareBase=Math.floor(totalCents / FAMILIES.length);
 const shareRemainder=totalCents % FAMILIES.length;
 const nets=FAMILIES.map((f,i)=>({id:f.id,name:f.name,paid:roundCents(costByFamily(f.id)),share:shareBase+(i<shareRemainder?1:0)})).map(f=>({...f,net:f.paid-f.share}));
 const creditors=nets.filter(x=>x.net>0).map(x=>({...x,amount:x.net}));
 const debtors=nets.filter(x=>x.net<0).map(x=>({...x,amount:-x.net}));
 const transfers=[];let i=0,j=0;
 while(i<debtors.length && j<creditors.length){const amt=Math.min(debtors[i].amount,creditors[j].amount);if(amt>0)transfers.push({from:debtors[i].name,to:creditors[j].name,amount:amt});debtors[i].amount-=amt;creditors[j].amount-=amt;if(debtors[i].amount===0)i++;if(creditors[j].amount===0)j++;}
 return {nets,transfers,share:totalCents/5/100};
}
function budgetHtml(){
 const purchases=totalCost(), total=tripTotal(), {nets,transfers,share:purchaseShare}=settlements(), share=purchaseShare+VILLA_PER_FAMILY;
 const expenseEntries=state.expenses.map(e=>({...e,kind:'extra',title:catMap[e.categoryId]?.name||'مصاريف إضافية'}));
 const itemEntries=CATS.flatMap(c=>c.items.map(([title],i)=>({task:state.tasks[getTaskKey(c,i)],categoryId:c.id,title,kind:'task',key:getTaskKey(c,i)})).filter(e=>pricedTask(e.task)).map(e=>({id:e.key,categoryId:e.categoryId,title:e.title,kind:e.kind,paidBy:e.task.paidBy||e.task.by,amount:Number(e.task.amount),at:e.task.at,by:e.task.by})));
 const expenses=[...expenseEntries,...itemEntries].sort((a,b)=>(b.at||0)-(a.at||0));
 const villaPaid=FAMILIES.filter(f=>state.villaPayments?.[f.id]?.paid).length;
 return `<div class="section-head"><div><h2>إدارة الميزانية 💰</h2><p class="subtitle">المشتريات مقسّمة بالتساوي على خمس عائلات، وإيجار الفيلا ${money(VILLA_PER_FAMILY)} لكل عائلة نقدًا عند الوصول</p></div></div>
 <div class="budget-overview">${[['🛒','المشتريات والإضافات',money(purchases)],['🏡','إيجار الفيلا (5 × 1,500)',money(VILLA_TOTAL)],['💸','إجمالي الرحلة',money(total)],['👨‍👩‍👧','حصة كل عائلة شاملة الفيلا',money(share)],['🧾','الأصناف والمصروفات المسجّلة',expenses.length],['🎯','الميزانية المخططة',money(state.targetBudget)]].map(([icon,title,value])=>`<div class="panel money-card"><p>${icon} ${title}</p><b>${value}</b></div>`).join('')}</div>
 <div class="panel villa-panel"><div class="section-head"><div><h2>🏡 إيجار الفيلا — نقدًا عند الوصول</h2><p class="subtitle">${money(VILLA_PER_FAMILY)} على كل عائلة · المجموع ${money(VILLA_TOTAL)} · ${villaPaid} من 5 عائلات دفعت</p></div><span class="villa-chip">دفع نقدي عند الوصول</span></div>
 <div class="villa-family-grid">${FAMILIES.map(f=>{const record=state.villaPayments?.[f.id]||{},paid=Boolean(record.paid);return `<div class="villa-family ${paid?'villa-paid':''}"><div><strong>${escapeHTML(f.name)}</strong><small>${money(VILLA_PER_FAMILY)} · ${paid?'تم الدفع نقدًا ✅':'بانتظار الدفع عند الوصول'}</small></div><button class="btn ${paid?'btn-muted':'btn-orange'} btn-small" data-villa="${f.id}" ${myFamily===f.id?'':'disabled'} aria-label="${paid?'إلغاء تأكيد الدفع':'تأكيد الدفع'} ل${escapeHTML(f.name)}">${paid?'↩️ تراجع':'✓ تأكيد الدفع'}</button></div>`;}).join('')}</div><p class="small-note">كل عائلة تؤكد دفع إيجارها بنفسها. إيجار الفيلا محسوب ضمن ميزانية الرحلة، ولكنه منفصل عن تحويلات المشتريات بين العائلات لمنع الازدواج.</p></div>
 <div class="panel" style="margin-bottom:16px"><form id="targetForm" style="display:flex;align-items:end;gap:10px;flex-wrap:wrap"><div class="field" style="flex:1;min-width:180px"><label>ميزانية الرحلة المخططة، شاملة الفيلا (₪)</label><input type="number" name="target" min="0" step="0.01" value="${Number(state.targetBudget||0)}" required></div><button class="btn btn-outline" type="submit">احفظ الهدف</button><span class="small-note">${state.targetBudget ? (state.targetBudget >= total ? `المتبقي من السقف: ${money(state.targetBudget-total)}`:`تجاوزنا الميزانية بـ ${money(total-state.targetBudget)}`) : 'اختياري: حدّد سقفًا يشمل الإيجار'}</span></form></div>
 <div class="section-head"><div><h2>تقسيم المشتريات بين العائلات</h2><p class="subtitle">الجدول أدناه للمشتريات فقط · أضف ${money(VILLA_PER_FAMILY)} لكل عائلة نقدًا للفيلا</p></div></div>
 <div class="family-finance">${nets.map(f=>`<div class="panel family-fin"><h3>${escapeHTML(f.name)}</h3><p>دفع للمشتريات</p><b>${centsMoney(f.paid)}</b><p>حصته من المشتريات</p><b>${centsMoney(f.share)}</b><p>+ إيجار الفيلا</p><b>${money(VILLA_PER_FAMILY)}</b><p class="${f.net>0?'positive':f.net<0?'negative':'neutral'}">${f.net>0?'له':f.net<0?'عليه':'متوازن'} (مشتريات)</p><b class="${f.net>0?'positive':f.net<0?'negative':'neutral'}">${centsMoney(Math.abs(f.net))}</b></div>`).join('')}</div>
 <div class="finance-grid" style="margin-top:18px"><div class="panel"><h3 class="tiny-title">💵 مصروف إضافي غير مسجّل ضمن المهام</h3>
 <p class="small-note">لا تضف هنا أسعار الأصناف التي أدخلتها في تبويب المهام، لأنها تُحسب تلقائيًا.</p>
 <form id="budgetExpense" class="form-grid"><div class="field"><label>المجموعة</label><select name="categoryId" required>${CATS.map(c=>`<option value="${c.id}">${c.icon} ${c.name}</option>`).join('')}</select></div>
 <div class="field"><label>من دفع؟</label><select name="paidBy" required><option value="">اختر العائلة</option>${FAMILIES.map(f=>`<option value="${f.id}" ${myFamily===f.id?'selected':''}>${escapeHTML(f.name)}</option>`).join('')}</select></div>
 <div class="field"><label>المبلغ (₪)</label><input type="number" inputmode="decimal" name="amount" min="0.01" step="0.01" required placeholder="0"></div>
 <div class="field"><label>ملاحظة</label><input name="note" maxlength="100" placeholder="مثلاً: مصاريف توصيل"></div>
 <div class="field wide"><button class="btn btn-orange" type="submit">＋ إضافة المصروف الإضافي</button></div></form></div>
 <div class="panel"><h3 class="tiny-title">🤝 تسوية حساب المشتريات بين العائلات</h3><p class="section-intro">التحويلات المقترحة للمشتريات فقط، دون إيجار الفيلا:</p>
 ${transfers.length?transfers.map(t=>`<div class="settle"><span>${escapeHTML(t.from)} ← يدفع لـ ← ${escapeHTML(t.to)}</span><strong>${centsMoney(t.amount)}</strong></div>`).join(''):'<div class="empty">كل العائلات متوازنة، أو لم تُسجَّل مصروفات بعد 🎉</div>'}
 <p class="small-note">إذا تم إجراء تحويل نقدي خارج التطبيق، يجب مراعاته يدويًا. إيجار الفيلا يُدفع نقدًا مباشرة عند الوصول ولا يدخل في التحويلات.</p></div></div>
 <div class="panel transactions"><div class="section-head"><div><h2>سجل مشتريات المهام والمصاريف الإضافية</h2><p class="subtitle">الأصناف المكتملة تظهر تلقائيًا. فقط المصروف الإضافي يمكن حذفه هنا.</p></div></div>
 ${expenses.length?`<div class="table-scroll"><table class="expense-table"><thead><tr><th>البند</th><th>الدافع</th><th>المبلغ</th><th>التاريخ</th><th></th></tr></thead><tbody>${expenses.map(e=>`<tr><td><strong>${escapeHTML(e.title||'غير معروف')}</strong><div class="small-note">${e.kind==='task'?'✔ مهمة مكتملة':'➕ مصروف إضافي'}${e.kind==='extra'&&e.note?` · ${escapeHTML(e.note)}`:''}</div></td><td>${escapeHTML(getFamily(e.paidBy))}</td><td style="white-space:nowrap"><b>${money(e.amount)}</b></td><td>${today(e.at)}</td><td>${e.kind==='extra'&&myFamily===e.paidBy?`<button class="btn btn-danger btn-small" data-delete="${escapeHTML(e.id)}" aria-label="حذف المصروف">✕</button>`:''}</td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">لم تُسجّل مشتريات بعد. أدخل مبلغًا بجانب مهمة ثم اضغط ✓، أو سجّل مصروفًا إضافيًا.</div>'}
 </div>`;
}
function galleryHtml(){
 const photos=[['invitation','صورة الدعوة 🎉','الأصدقاء، الفيلا، موعد الانطلاق وخطة الرحلة','assets/invitation.webp'],['shopping','قائمة المشتريات 📋','تصميم الـ Checklist الأصلي مع الصور والكميات','assets/shopping-checklist.webp']];
 return `<div class="section-head"><div><h2>صور الرحلة 🖼️</h2><p class="subtitle">الصورتان اللتان صممناهما للرحلة، جاهزتان للمشاركة في واتساب</p></div></div>
 <div class="gallery">${photos.map(([id,name,description,src])=>`<section class="panel gallery-card"><button class="image-button" data-image="${id}" aria-label="تكبير ${name}"><img src="${src}" loading="lazy" alt="${name}"></button><h3>${name}</h3><p class="subtitle">${description}</p><div class="actions"><button class="btn btn-outline btn-small" data-image="${id}">🔎 تكبير</button><a class="btn btn-orange btn-small" download="${id}-jericho.webp" href="${src}">⬇ حفظ الصورة</a></div></section>`).join('')}</div>
 <p class="small-note">القائمة التفاعلية في تبويب «المهام» هي المرجع المحدّث للأصناف والكميات، حتى إذا ظهر اختلاف في كتابة التفاصيل داخل صورة الـ Checklist.</p>`;
}
function render(){
 if(!state)return;
 const sections={home:homeHtml,tasks:tasksHtml,budget:budgetHtml,gallery:galleryHtml};
 shell(sections[currentTab]());
}
function go(tab){currentTab=tab;openExpense='';window.scrollTo({top:0,behavior:'smooth'});render();}
function ensurePerson(){if(!myFamily){toast('اختَر عائلتك أولاً من الأعلى 👆');return false;}return true;}
async function write(mutator){
 try{
  if(remote?.ready){
   await remote.runTransaction(remote.db,async transaction=>{
    const snap=await transaction.get(remote.ref);
    const base=snap.exists()?normalize(snap.data()):initial();
    const updated=mutator(clone(base));updated.updatedAt=Date.now();
    transaction.set(remote.ref,updated);
   });
  }else{
   const next=mutator(clone(normalize(state)));next.updatedAt=Date.now();state=next;localStorage.setItem(LOCAL_KEY,JSON.stringify(state));render();
  }
  return true;
 }catch(error){console.error('Save failed:',error);toast('تعذّر حفظ التغيير، تأكد من الاتصال والصلاحيات');return false;}
}
function addExpenseFromForm(form){
 const values=Object.fromEntries(new FormData(form));
 const categoryId=values.categoryId||form.getAttribute('data-expense-form');
 const amount=Math.round(Number(values.amount)*100)/100;
 if(!catMap[categoryId] || !famMap[values.paidBy] || !Number.isFinite(amount) || amount<=0 || amount>1000000){toast('تأكد من المبلغ والعائلة الدافعة');return;}
 if(!ensurePerson())return;
 const expense={id:`exp_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,categoryId,paidBy:values.paidBy,amount,note:String(values.note||'').trim().slice(0,100),enteredBy:myFamily,at:Date.now()};
 write(s=>{s.expenses.push(expense);return s;}).then(ok=>{if(ok){openExpense='';render();toast('تم تسجيل المصروف ✅');}});
}
function openLightbox(type){
 const image=document.querySelector('#lightboxImage'),overlay=document.querySelector('#imageOverlay');
 image.src=type==='invitation'?'assets/invitation.webp':'assets/shopping-checklist.webp';overlay.hidden=false;overlay.setAttribute('aria-hidden','false');
 document.body.style.overflow='hidden';
}
function closeLightbox(){const overlay=document.querySelector('#imageOverlay');overlay.hidden=true;overlay.setAttribute('aria-hidden','true');document.body.style.overflow='';}

document.addEventListener('click', event=>{
 const nav=event.target.closest('[data-tab]');if(nav){go(nav.dataset.tab);return;}
 const pic=event.target.closest('[data-image]');if(pic){openLightbox(pic.dataset.image);return;}
 const check=event.target.closest('[data-task]');if(check){
  if(!ensurePerson())return;
  const [id,iStr]=check.dataset.task.split(':');const cat=catMap[id],i=Number(iStr);
  if(!cat || i<0 || i>=cat.items.length)return;
  if(cat.owners.length&&!cat.owners.includes(myFamily)){toast('هذه المجموعة مسؤولية: '+ownedBy(cat));return;}
  const key=getTaskKey(cat,i),previous=state.tasks[key]||{},actor=myFamily,now=Date.now(),nextDone=!previous.done;
  let amount=previous.amount;
  if(nextDone){
   const input=document.getElementById(`price-${id}-${i}`);
   if(!input || !validAmount(input.value) || !input.validity.valid){toast('المبلغ إلزامي بجانب المهمة — اكتب 0 إذا لم تُنفق شيئًا');input?.focus();return;}
   amount=roundMoney(input.value);
  }
  write(s=>{s.tasks[key]={...s.tasks[key],done:nextDone,by:actor,paidBy:nextDone?actor:(s.tasks[key]?.paidBy||actor),amount,at:now};return s;}).then(ok=>{if(ok)toast(nextDone?'تم الإنجاز وحفظ المبلغ ✅':'أُلغيت المهمة، ولن يُحسب مبلغها حتى إعادة الإنجاز');});return;
 }
 const villa=event.target.closest('[data-villa]');if(villa){
  if(!ensurePerson())return;
  const famId=villa.dataset.villa;
  if(famId!==myFamily){toast('كل عائلة تؤكد الدفع الخاص بها فقط');return;}
  const paid=!Boolean(state.villaPayments?.[famId]?.paid);
  if(paid && !confirm('هل دفعت عائلتكم 1,500 ₪ نقدًا لإيجار الفيلا عند الوصول؟'))return;
  write(s=>{s.villaPayments[famId]={paid,by:myFamily,at:Date.now()};return s;}).then(ok=>{if(ok)toast(paid?'تم تأكيد الدفع النقدي ✅':'تم التراجع عن تأكيد الدفع');});return;
 }

 const expand=event.target.closest('[data-expand-expense]');if(expand){openExpense=openExpense===expand.dataset.expandExpense?'':expand.dataset.expandExpense;render();return;}
 const del=event.target.closest('[data-delete]');if(del){if(!ensurePerson())return;const entry=state.expenses.find(e=>e.id===del.dataset.delete);if(!entry||entry.paidBy!==myFamily){toast('يمكن فقط للعائلة الدافعة تصحيح مصروفها');return;}if(confirm('متأكد أنك تريد حذف هذه العملية؟'))write(s=>{s.expenses=s.expenses.filter(e=>e.id!==entry.id);return s;}).then(ok=>{if(ok)toast('تم حذف العملية');});}
});
document.addEventListener('submit',event=>{
 const form=event.target;
 if(form.matches('[data-expense-form],#budgetExpense')){event.preventDefault();addExpenseFromForm(form);return;}
 if(form.id==='targetForm'){event.preventDefault();if(!ensurePerson())return;const amount=Math.round(Number(new FormData(form).get('target'))*100)/100;if(!Number.isFinite(amount)||amount<0){toast('أدخل ميزانية صحيحة');return;}write(s=>{s.targetBudget=amount;return s;}).then(ok=>{if(ok)toast('تم حفظ الميزانية المخططة');});}
});
document.addEventListener('change',event=>{
 if(event.target.id==='myfamily'){myFamily=event.target.value;localStorage.setItem(PERSON_KEY,myFamily);render();if(myFamily)toast('أهلاً بعائلة '+getFamily(myFamily)+' 👋');}
 if(event.target.id==='catFilter'){currentFilter=event.target.value;render();}
 const price=event.target.closest('[data-task-price]');if(price){
  const [id,iStr]=price.dataset.taskPrice.split(':'),cat=catMap[id],i=Number(iStr);
  if(!cat || !Number.isInteger(i) || i<0 || i>=cat.items.length)return;
  const current=state.tasks[getTaskKey(cat,i)];
  if(!current?.done)return; // A draft price is committed when marking the item complete.
  if(!myFamily || (cat.owners.length && !cat.owners.includes(myFamily))){toast('تعديل المبلغ متاح للمسؤولين فقط');return;}
  if(!validAmount(price.value)||!price.validity.valid){toast('المبلغ إلزامي. اكتب 0 إذا لم يُدفع شيء');price.focus();return;}
  const amount=roundMoney(price.value),key=getTaskKey(cat,i);
  write(s=>{s.tasks[key]={...s.tasks[key],amount,priceUpdatedBy:myFamily,priceUpdatedAt:Date.now()};return s;}).then(ok=>{if(ok)toast('تم تحديث مبلغ المهمة في الميزانية ✅');});
 }
});
document.querySelector('#closeImage').addEventListener('click',closeLightbox);
document.querySelector('#imageOverlay').addEventListener('click',event=>{if(event.target.id==='imageOverlay')closeLightbox();});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeLightbox();});

// ─── تشغيل محلي أو سحابي ─────────────────────────────────────────────────────
function loadLocal(){
 try{const saved=JSON.parse(localStorage.getItem(LOCAL_KEY));state=normalize(saved);}
 catch{state=initial();}
 render();
}
async function connect(){
 if(!firebaseConfig.apiKey || !firebaseConfig.projectId || !firebaseConfig.appId){loadLocal();return;}
 try{
  const [fbApp,fbAuth,fbStore]=await Promise.all([
   import('https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js'),
   import('https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js'),
   import('https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js')
  ]);
  const app=fbApp.initializeApp(firebaseConfig),auth=fbAuth.getAuth(app);
  await fbAuth.signInAnonymously(auth);
  const db=fbStore.getFirestore(app),ref=fbStore.doc(db,'trips',tripDocId);
  remote={ready:false,db,ref,runTransaction:fbStore.runTransaction};
  await fbStore.runTransaction(db,async tx=>{const snap=await tx.get(ref);if(!snap.exists())tx.set(ref,initial());});
  remote.ready=true;
  fbStore.onSnapshot(ref,snap=>{state=snap.exists()?normalize(snap.data()):initial();render();},error=>{
   console.error(error);remote.ready=false;toast('فُقد الاتصال المباشر، لن تُحفظ التغييرات حتى يعود الاتصال');render();
  });
 }catch(error){console.error('Firebase initialization failed:',error);remote=null;loadLocal();toast('تعذّر الاتصال بـ Firebase؛ تم فتح النسخة التجريبية');}
}
connect();

const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const P=[['index','Home'],['about','About'],['fleet','Fleet'],['routes','Routes'],['contact','Contact']],cur=document.body.dataset.p;
$('#hd').innerHTML=`<header><div class="w"><a href="index.html"><img src="assets/logo.png" alt="Supreme Logistics"></a><nav aria-label="Main">${P.map(([f,n])=>`<a href="${f}.html"${f==cur?' class="on" aria-current="page"':''}>${n}</a>`).join('')}</nav><a class="btn" href="contact.html">Get a quote</a></div></header>`;
$('#ft').innerHTML=`<footer><div class="w"><div class="g"><div><img src="assets/logo.png" alt="Supreme Logistics" style="height:40px;background:#fff;padding:4px 8px;border-radius:4px;margin-bottom:14px"><p>FTL container transport across Maharashtra and key interstate corridors. Service Through Commitment.</p></div><div><h4>Pages</h4>${P.map(([f,n])=>`<a href="${f}.html">${n}</a>`).join('')}</div><div><h4>Admin &amp; registered office</h4><p>A-04, Ganraj Society, Opp. Parasnath Complex, Bhiwandi, Dist. Thane, Maharashtra - 421302</p><a href="tel:+919970844585">+91 99708 44585</a><a href="tel:+919822114953">+91 98221 14953</a><a href="mailto:Supremelogistics095@gmail.com">Supremelogistics095@gmail.com</a></div></div><div class="c">&copy; ${new Date().getFullYear()} Supreme Logistics. All rights reserved.</div></div></footer>`;
const CITIES=[['Pune','Maharashtra hub'],['Solapur','Maharashtra hub'],['Aurangabad','Maharashtra hub'],['Nashik','Maharashtra hub'],['Kolhapur','Maharashtra hub'],['Satara','Maharashtra hub'],['Ahmedabad','Interstate corridor'],['Chennai','Interstate corridor'],['Raipur','Interstate corridor'],['Bangalore','Interstate corridor'],['Bhubaneswar','Interstate corridor']];
const STOCK_IMAGES={
'truck.png':'photo-1601584115197-04ecc0da31d7',
'ind-fmcg.jpg':'photo-1566576721346-d4a3b4eaeb55',
'ind-manufacturing.jpg':'photo-1581091226825-a6a2a5aee158',
'ind-ecommerce.jpg':'photo-1586528116311-ad8dd3c8310d',
'ind-packaging.jpg':'photo-1605600659873-d808a13e4d9a',
'driver.jpg':'photo-1516321318423-f06f85e504b3',
'about-depot.jpg':'photo-1494412519320-aa613dfb7738',
'about-team.jpg':'photo-1521737711867-e3b97375f902',
'fleet-maintenance.jpg':'photo-1486262715619-67b85e0b08d3',
'fleet-gps.jpg':'photo-1551288049-bebda4e38f71',
'fleet-20ft.jpg':'photo-1519003722824-194d4455a60c',
'fleet-22ft.jpg':'photo-1601584115197-04ecc0da31d7',
'fleet-32ft.jpg':'photo-1566933293069-b55c7f326dd4',
'routes-banner.jpg':'photo-1501706362039-c6e13d8a4e1d'
};
function ph(e){const s=e.dataset.src;if(!s)return;e.classList.remove('ok');$('.cap',e)?.remove();const id=STOCK_IMAGES[s]||STOCK_IMAGES['fleet-22ft.jpg'];const url='https://images.unsplash.com/'+id+'?auto=format&fit=crop&w=1400&q=82';const i=new Image();i.onload=()=>{e.style.backgroundImage='linear-gradient(0deg,#0d1a3533,#0d1a3508),url("'+url+'")';e.classList.add('ok')};i.onerror=()=>{e.style.backgroundImage='linear-gradient(135deg,#14264b,#263e70)';e.classList.add('ok')};i.src=url}
$$('.ph').forEach(e=>{if(e.dataset.src)ph(e)});
const SZ=[['20 FT',62.5,'Compact and dense loads','Right-sized for high-value, heavy or smaller full-truckload consignments.','fleet-20ft.jpg','Side view of a 20 FT container truck'],['22 FT',69,'The balanced choice','For loads that outgrow a 20 FT without needing a full 32 FT trip.','fleet-22ft.jpg','Side view of a 22 FT container truck'],['32 FT',100,'Maximum volume per trip','Our largest container body for bulky and high-volume freight.','fleet-32ft.jpg','Side view of a 32 FT container truck']];
$$('[data-sizes]').forEach(el=>{el.innerHTML=`<div class="two"><div><div class="tabs" role="tablist">${SZ.map((s,i)=>`<button role="tab" aria-selected="${i==1?0:0}" data-i="${i}">${s[0]}</button>`).join('')}</div><div class="cont"></div><div class="panel"><h3></h3><p></p><a class="btn" href="contact.html">Book this size</a></div></div><div class="ph r43" data-src="" data-cap=""></div></div>`;
const set=i=>{const s=SZ[i];$$('button',el).forEach((b,j)=>b.setAttribute('aria-selected',j==i));$('.cont',el).style.width=s[1]+'%';$('h3',el).textContent=s[0]+' - '+s[2];$('p',el).textContent=s[3];$('.btn',el).href='contact.html?size='+encodeURIComponent(s[0]);const p=$('.ph',el);p.className='ph r43';p.style.backgroundImage='';p.dataset.src=s[4];p.dataset.cap='Image: '+s[4]+' - '+s[5];ph(p)};
$$('button',el).forEach(b=>b.onclick=()=>set(+b.dataset.i));set(2)});
$$('[data-routes]').forEach(el=>{el.innerHTML=`<div class="two" style="align-items:start"><div><div class="chips">${['Maharashtra hub','Interstate corridor'].map(g=>`<h3>${g}s</h3>`+CITIES.filter(c=>c[1]==g).map(c=>`<button aria-pressed="false">${c[0]}</button>`).join('')).join('')}</div></div><div class="lane" aria-live="polite"></div></div>`;
const pick=n=>{const c=CITIES.find(x=>x[0]==n);$$('.chips button',el).forEach(b=>b.setAttribute('aria-pressed',b.textContent==n));$('.lane',el).innerHTML=`<h3>Bhiwandi to ${n}</h3><small>${c[1]}</small><div class="line"><i></i><span>Bhiwandi</span><span>${n}</span></div><p>Full-truckload on 20 FT, 22 FT or 32 FT containers. Own vehicles, GPS tracked from loading to proof of delivery.</p><a class="btn" href="contact.html?to=${n}">Get a quote for this lane</a>`};
$$('.chips button',el).forEach(b=>b.onclick=()=>pick(b.textContent));pick('Pune')});
$$('[data-cta]').forEach(el=>{el.innerHTML=`<div class="cb"><div class="w"><h2>Where does your freight need to go?</h2><form><select aria-label="Destination">${CITIES.map(c=>`<option>${c[0]}</option>`).join('')}<option>Other</option></select><button class="btn">Get a quote</button></form></div></div>`;$('form',el).onsubmit=e=>{e.preventDefault();location.href='contact.html?to='+encodeURIComponent($('select',el).value)}});

$$('[data-tabs]').forEach(g=>{const b=$$('[role=tab]',g),p=$$('[role=tabpanel]',g);b.forEach((x,i)=>x.onclick=()=>{b.forEach((y,j)=>{y.setAttribute('aria-selected',i==j);p[j].hidden=i!=j})})});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const n=+e.target.dataset.n,t=performance.now();(function f(x){const k=Math.min(1,(x-t)/1400);e.target.textContent=Math.round(n*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)})(t)}));$$('[data-n]').forEach(e=>io.observe(e));
const q=$('#q');if(q){const u=new URLSearchParams(location.search);if(u.get('to'))q.b.value=u.get('to');if(u.get('size'))q.s.value=u.get('size');
q.onsubmit=e=>{e.preventDefault();const f=new FormData(q),g=k=>f.get(k)||'-';window.open('https://wa.me/919970844585?text='+encodeURIComponent(`Quote request\nName: ${g('n')}\nPhone: ${g('p')}\nPickup: ${g('a')}\nDrop: ${g('b')}\nContainer: ${g('s')}\nCargo: ${g('c')}`),'_blank','noopener')}}

/* Abertura: as carinhas da Laís montam o topo do site, como cursores num arquivo do Figma.
   Toda vez que alguém abre o site (não repete ao navegar entre páginas na mesma aba), no máximo ~2,6 s, pulável, e nunca com "reduzir movimento". */
(function(){
  const q=new URLSearchParams(location.search);
  let replay=false;try{replay=sessionStorage.getItem('lm-replay')==='1';sessionStorage.removeItem('lm-replay')}catch(e){}
  const force=q.has('intro')||window.LM_INTRO_FORCE===true||replay;
  let seen=false;try{seen=sessionStorage.getItem('lm-intro')==='1'}catch(e){}
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hero=document.querySelector('.hero');
  window.LM_BUILD=force||(!seen&&!reduce);
  if(!hero||(!force&&(seen||reduce))||location.hash&&location.hash!=='#topo'&&!force)return;
  try{sessionStorage.setItem('lm-intro','1')}catch(e){}

  const L=(document.documentElement.lang||'pt').slice(0,2);
  const T={pt:['Entender','Desenhar','Validar','Entregar','Pular'],en:['Understand','Design','Validate','Ship','Skip'],es:['Entender','Diseñar','Validar','Entregar','Saltar']}[L]||[];
  const st=document.createElement('style');
  st.textContent=`
  .intro-on .hero-t>*{opacity:0}
  .intro-on .hero .stagewrap>*{opacity:0}
  .intro-on .hero .wrap{position:relative;z-index:1}
  .hero .in-cover{position:absolute;inset:0;background:var(--bg);z-index:0;pointer-events:none}
  .in-cur{position:fixed;left:0;top:0;z-index:9999;pointer-events:none;display:flex;align-items:flex-start;gap:2px;will-change:transform;filter:drop-shadow(0 6px 10px rgba(58,26,31,.22))}
  .in-cur svg{width:20px;height:22px;flex:none}
  .in-cur .lab{display:flex;align-items:center;gap:6px;margin-top:14px;padding:4px 10px 4px 4px;border-radius:999px;font:600 13px/1 Inter,system-ui,sans-serif;color:#fff;white-space:nowrap}
  .in-cur .lab img{width:24px;height:24px;border-radius:50%;background:#fff;object-fit:cover}
  .in-check{position:fixed;z-index:9998;pointer-events:none;width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:#B5C46F;color:#2a3410;font:700 18px/1 Inter;box-shadow:0 6px 16px rgba(0,0,0,.18)}
  .in-skip{position:fixed;right:18px;bottom:18px;z-index:10000;border:0;border-radius:999px;padding:9px 16px;font:600 13px Inter,system-ui,sans-serif;background:light-dark(#3a1a1f,#f6e9ea);color:light-dark(#fff,#1c0f12);cursor:pointer;opacity:.85}
  .in-skip:hover,.in-skip:focus-visible{opacity:1}`;
  document.head.appendChild(st);
  document.documentElement.classList.add('intro-on');

  const cover=document.createElement('div');cover.className='in-cover';hero.appendChild(cover);
  const C=[['#8E0926','img/lais-cara.webp'],['#CB7288','img/cara-pisca.webp'],['#7d8c38','img/cara-surpresa.webp'],['#6A4228','img/lais-cara.webp']];
  const curs=C.map(([c,src],i)=>{const d=document.createElement('div');d.className='in-cur';d.setAttribute('aria-hidden','true');
    d.innerHTML=`<svg viewBox="0 0 20 22"><path d="M2 2l15 8-6.5 1.6L7.5 18z" fill="${c}" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg><span class="lab" style="background:${c}"><img src="${src}" alt="">${T[i]||''}</span>`;
    document.body.appendChild(d);return d});
  const skip=document.createElement('button');skip.className='in-skip';skip.type='button';skip.textContent=(T[4]||'Pular')+' ✕';document.body.appendChild(skip);

  const anims=[];let done=false,timers=[];
  const at=(ms,fn)=>timers.push(setTimeout(fn,ms));
  const R=el=>el.getBoundingClientRect();
  const W=innerWidth,H=innerHeight;
  const starts=[[-60,-40],[W+40,H*.25],[-60,H+40],[W+40,H+40]];
  const h1=hero.querySelector('h1'),sub=hero.querySelector('.sub'),me=hero.querySelector('.me'),btns=hero.querySelector('.btns');
  const pt=(el,fx,fy)=>{if(!el)return[W/2,H/2];const r=R(el);let x=r.left+r.width*fx,y=r.top+r.height*fy;if(y>H-90){x=W*.62;y=H-110}return[Math.min(Math.max(x,16),W-140),y]};
  const targets=[pt(h1,.55,.6),pt(sub,.35,.9),pt(me,.45,.35),pt(btns,.3,.7)];

  function move(i,from,to,dur,delay){
    const a=curs[i].animate([{transform:`translate(${from[0]}px,${from[1]}px)`},{transform:`translate(${to[0]}px,${to[1]}px)`}],{duration:dur,delay,easing:'cubic-bezier(.3,.7,.2,1)',fill:'forwards'});anims.push(a);return a}
  function show(el,kf,dur){if(!el)return;el.style.opacity='1';const a=el.animate(kf,{duration:dur,easing:'cubic-bezier(.2,.8,.2,1)'});anims.push(a)}

  // 1) Entender: o título se escreve
  move(0,starts[0],targets[0],650,0);
  at(560,()=>{const hello=hero.querySelector('.hello');[hello,h1].forEach(e=>show(e,[{clipPath:'inset(0 100% 0 0)',opacity:1},{clipPath:'inset(0 0 0 0)',opacity:1}],520))});
  // 2) Desenhar: o fundo rosa é pintado a partir do cursor, e o texto aparece
  move(1,starts[1],targets[1],700,180);
  at(820,()=>{const r=R(hero),[x,y]=targets[1];const a=cover.animate([{clipPath:`circle(150% at ${x-r.left}px ${y-r.top}px)`},{clipPath:`circle(0% at ${x-r.left}px ${y-r.top}px)`}],{duration:620,easing:'cubic-bezier(.5,0,.2,1)',fill:'forwards'});anims.push(a);
    [...hero.querySelectorAll('.stagewrap>*:not(.me):not(.bubble)')].forEach(e=>show(e,[{opacity:0},{opacity:1}],500));
    [...hero.querySelectorAll('.hero-t>*:not(.hello):not(h1):not(.btns)')].forEach((e,k)=>at(120+k*70,()=>show(e,[{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'none'}],420)))});
  // 3) Validar: a mascote entra
  move(2,starts[2],targets[2],700,420);
  at(1120,()=>{show(me,[{opacity:0,transform:'translateY(24px) scale(.94)'},{opacity:1,transform:'none'}],560);show(hero.querySelector('.bubble'),[{opacity:0},{opacity:1}],400)});
  // 4) Entregar: botões + ✓
  move(3,starts[3],targets[3],700,700);
  at(1420,()=>{show(btns,[{opacity:0,transform:'scale(.96)'},{opacity:1,transform:'none'}],380);
    const ck=document.createElement('div');ck.className='in-check';ck.textContent='✓';const[x,y]=targets[3];ck.style.left=(x-6)+'px';ck.style.top=(y-46)+'px';document.body.appendChild(ck);
    const a=ck.animate([{transform:'scale(0)'},{transform:'scale(1.15)',offset:.6},{transform:'scale(1)'}],{duration:380,easing:'ease-out'});anims.push(a);at(900,()=>ck.animate([{opacity:1},{opacity:0}],{duration:250,fill:'forwards'}));at(1200,()=>ck.remove())});
  // saída
  at(2050,()=>curs.forEach((c,i)=>{const s=starts[(i+2)%4];move(i,targets[i],[s[0],s[1]],520,i*50)}));
  at(2650,finish);

  function finish(){if(done)return;done=true;timers.forEach(clearTimeout);anims.forEach(a=>{try{a.finish()}catch(e){}});
    curs.forEach(c=>c.remove());cover.remove();skip.remove();document.querySelectorAll('.in-check').forEach(e=>e.remove());
    hero.querySelectorAll('.hero-t>*,.stagewrap>*').forEach(e=>e.style.opacity='');
    document.documentElement.classList.remove('intro-on');removeEventListener('keydown',onKey);window.LM_INTRO_DONE=true;dispatchEvent(new Event('lm-intro-done'))}
  function onKey(e){if(e.key==='Escape')finish()}
  skip.addEventListener('click',finish);addEventListener('keydown',onKey);
  addEventListener('pointerdown',e=>{if(e.target!==skip)finish()},{once:true});
  addEventListener('wheel',finish,{once:true,passive:true});
})();

/* Construção ao rolar: as carinhas-cursor desenham a caixa de cada elemento (como uma seleção no Figma),
   a caixa vira esqueleto e o conteúdo aparece. Várias carinhas trabalham ao mesmo tempo. */
(function(){
  if(!window.LM_BUILD||!('IntersectionObserver' in window))return;
  const L=(document.documentElement.lang||'pt').slice(0,2);
  const LAB={pt:['Entender','Desenhar','Validar','Entregar'],en:['Understand','Design','Validate','Ship'],es:['Entender','Diseñar','Validar','Entregar']}[L]||[];
  const C=[['#8E0926','img/lais-cara.webp'],['#CB7288','img/cara-pisca.webp'],['#7d8c38','img/cara-surpresa.webp'],['#6A4228','img/lais-cara.webp']];
  const st=document.createElement('style');
  st.textContent=`.bld-wait{opacity:0}
  .bc{position:absolute;left:0;top:0;z-index:9999;pointer-events:none;display:flex;align-items:flex-start;gap:2px;will-change:transform;filter:drop-shadow(0 6px 10px rgba(58,26,31,.22))}
  .bc svg{width:20px;height:22px;flex:none}
  .bc .lab{display:flex;align-items:center;gap:6px;margin-top:14px;padding:4px 10px 4px 4px;border-radius:999px;font:600 13px/1 Inter,system-ui,sans-serif;color:#fff;white-space:nowrap}
  .bc .lab img{width:24px;height:24px;border-radius:50%;background:#fff;object-fit:cover}
  .bsel{position:absolute;z-index:9998;pointer-events:none;border:1.5px solid var(--c);background:color-mix(in srgb,var(--c) 6%,transparent);border-radius:4px;box-sizing:border-box}
  .bsel i{position:absolute;width:7px;height:7px;background:#fff;border:1.5px solid var(--c);border-radius:1px}
  .bsel i:nth-child(1){left:-4px;top:-4px}.bsel i:nth-child(2){right:-4px;top:-4px}.bsel i:nth-child(3){left:-4px;bottom:-4px}.bsel i:nth-child(4){right:-4px;bottom:-4px}
  .bsel b{position:absolute;left:50%;bottom:-24px;transform:translateX(-50%);background:var(--c);color:#fff;font:600 11px/1 Inter,system-ui,sans-serif;padding:4px 6px;border-radius:4px;white-space:nowrap}
  .bsel.sk{background:repeating-linear-gradient(90deg,color-mix(in srgb,var(--c) 10%,transparent) 0 40%,color-mix(in srgb,var(--c) 18%,transparent) 50%,color-mix(in srgb,var(--c) 10%,transparent) 60% 100%);background-size:200% 100%;animation:bsk 1s linear infinite}
  @keyframes bsk{to{background-position:-200% 0}}`;
  document.head.appendChild(st);
  document.documentElement.style.overflowX='clip';
  const SPEC=[['#projetos .sec-h','.sec-h>div>p,.jump'],['#projetos .group','.g-label>*:not(h3),.card'],['#processo','.psteps>li'],['#recomendacoes','.qgrid>figure'],['#sobre','.pstack,.about>*:not(.pstack)'],['#trajetoria','.tl-grid>*,.tl>*'],['#arquivos','.fold'],['#contato','.ct-card,.ct-left>*']];
  const units=[];
  SPEC.forEach(([sel,it])=>document.querySelectorAll(sel).forEach(root=>{
    const head=root.querySelector('.g-label h3,h2,h3');
    let items=it?[...root.querySelectorAll(it)]:[];
    items=items.filter((e,i,a)=>!a.some(o=>o!==e&&o.contains(e)));
    if(root.getBoundingClientRect().bottom<0)return;
    const els=[head,...items].filter(Boolean);
    els.forEach(e=>e.classList.add('bld-wait'));
    units.push({root,els,done:false});
  }));
  if(!units.length)return;
  let n=0,SPD=1,STOP=false;try{SPD=+localStorage.getItem('lm-bspd')||1}catch(e){}
  const sleep=ms=>new Promise(r=>setTimeout(r,ms/SPD));
  const box=el=>{const r=el.getBoundingClientRect();return{x:r.left+scrollX,y:r.top+scrollY,w:r.width,h:r.height}};
  function mkCursor(k){const[col,src]=C[k%4];const c=document.createElement('div');c.className='bc';c.setAttribute('aria-hidden','true');
    c.innerHTML=`<svg viewBox="0 0 20 22"><path d="M2 2l15 8-6.5 1.6L7.5 18z" fill="${col}" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg><span class="lab" style="background:${col}"><img src="${src}" alt="">${LAB[k%4]||''}</span>`;
    document.body.appendChild(c);return{el:c,col,x:0,y:0}}
  function go(cur,x,y,ms){const a=cur.el.animate([{transform:`translate(${cur.x}px,${cur.y}px)`},{transform:`translate(${x}px,${y}px)`}],{duration:ms/SPD,easing:'cubic-bezier(.45,.05,.25,1)',fill:'forwards'});cur.x=x;cur.y=y;return a.finished}
  async function draw(cur,el,fast){
    if(STOP){el.classList.remove('bld-wait');return}
    const b=box(el);if(!b.w||!b.h){el.classList.remove('bld-wait');return}
    await go(cur,b.x,b.y,fast?260:380);
    const s=document.createElement('div');s.className='bsel';s.style.setProperty('--c',cur.col);
    s.innerHTML='<i></i><i></i><i></i><i></i><b></b>';Object.assign(s.style,{left:b.x+'px',top:b.y+'px',width:'0px',height:'0px'});document.body.appendChild(s);
    const lab=s.querySelector('b');const D=(fast?380:560)/SPD,t0=performance.now();
    cur.el.animate([{transform:`translate(${b.x}px,${b.y}px)`},{transform:`translate(${b.x+b.w}px,${b.y+b.h}px)`}],{duration:D,easing:'cubic-bezier(.45,.05,.25,1)',fill:'forwards'});cur.x=b.x+b.w;cur.y=b.y+b.h;
    await new Promise(res=>{(function f(now){const p=Math.min(1,(now-t0)/D),e=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;const w=b.w*e,h=b.h*e;s.style.width=w+'px';s.style.height=h+'px';lab.textContent=`${Math.round(w)} × ${Math.round(h)}`;p<1?requestAnimationFrame(f):res()})(performance.now())});
    if(STOP){s.remove();el.classList.remove('bld-wait');return}
    s.classList.add('sk');await sleep(fast?160:260);
    el.classList.remove('bld-wait');el.animate([{opacity:0},{opacity:1}],{duration:320/SPD,easing:'ease-out'});
    s.animate([{opacity:1},{opacity:0}],{duration:320,fill:'forwards'}).onfinish=()=>s.remove();
  }

  // barra de controle: velocidade e "mostrar tudo"
  const TX={pt:{re:'Ver a animação de novo',min:'Esconder controles',max:'Mostrar controles da animação',wait:'Role para continuar ↓',ok:'Site montado',b:'Construindo',sp:['Devagar','Normal','Rápido'],all:'Mostrar tudo',lab:'Velocidade da animação'},en:{re:'Replay the animation',min:'Hide controls',max:'Show animation controls',wait:'Scroll to keep going ↓',ok:'All built',b:'Building',sp:['Slow','Normal','Fast'],all:'Show all',lab:'Animation speed'},es:{re:'Ver la animación de nuevo',min:'Ocultar controles',max:'Mostrar controles de la animación',wait:'Desplázate para seguir ↓',ok:'Sitio armado',b:'Construyendo',sp:['Lento','Normal','Rápido'],all:'Mostrar todo',lab:'Velocidad de la animación'}}[L]||{};
  const bst=document.createElement('style');bst.textContent=`.bbar{position:fixed;left:50%;bottom:18px;transform:translate(-50%,0);z-index:10000;display:flex;align-items:center;gap:12px;padding:7px 8px 7px 10px;border-radius:999px;background:light-dark(rgba(255,255,255,.92),rgba(38,21,25,.92));color:var(--ink);border:1px solid var(--line);box-shadow:0 10px 30px rgba(58,26,31,.18);backdrop-filter:blur(8px);font:500 13px/1 Inter,system-ui,sans-serif;transition:opacity .3s,transform .3s}
  .bbar.off{opacity:0;transform:translate(-50%,16px);pointer-events:none}
  .bbar .fc{display:flex}.bbar .fc img{width:26px;height:26px;border-radius:50%;border:2px solid var(--c);background:#fff;margin-left:-8px;object-fit:cover}.bbar .fc img:first-child{margin-left:0}
  .bbar .bnow{white-space:nowrap;max-width:200px;overflow:hidden;text-overflow:ellipsis}.bbar .bnow b{font-weight:600}
  .bbar .seg{display:flex;background:var(--peach2);border-radius:999px;padding:3px}
  .bbar .seg button,.bbar .all{white-space:nowrap;border:0;background:none;color:inherit;font:600 12px Inter,system-ui,sans-serif;padding:7px 11px;border-radius:999px;cursor:pointer}
  .bbar .seg button[aria-pressed=true]{background:var(--cocoa);color:#fff}
  .bbar .all{background:var(--ink);color:var(--bg)}
  .bbar button:focus-visible{outline:2px solid var(--blush);outline-offset:2px}
  .bbar .bic{display:flex;gap:2px;padding-left:6px;border-left:1px solid var(--line)}
  .bbar .bmin,.bbar .bre{border:0;background:none;color:var(--mut);width:32px;height:32px;border-radius:50%;cursor:pointer;display:grid;place-items:center;padding:0}
  .bbar .bmin:hover,.bbar .bre:hover{background:var(--peach2);color:var(--ink)}
  .bbar.fin .all{display:none}
  .bpeek{position:fixed;right:18px;bottom:18px;z-index:10000;width:52px;height:52px;border-radius:50%;border:2px solid var(--cocoa);background:#fff;padding:0;cursor:pointer;box-shadow:0 10px 24px rgba(58,26,31,.22);transition:transform .2s}
  .bpeek:hover{transform:translateY(-2px) scale(1.05)}
  .bpeek img{width:100%;height:100%;border-radius:50%;object-fit:cover}
  .bpeek[hidden]{display:none}
  @media(max-width:600px){.bbar{gap:8px;bottom:12px}.bbar .bnow{display:none}.bbar .seg button,.bbar .all{padding:7px 9px}}`;document.head.appendChild(bst);
  const bar=document.createElement('div');bar.className='bbar off';bar.setAttribute('role','group');bar.setAttribute('aria-label',TX.lab||'');
  bar.innerHTML=`<span class="fc" aria-hidden="true">${C.map(([c,src])=>`<img src="${src}" alt="" style="--c:${c}">`).join('')}</span><span class="bnow"><span class="bl">${TX.b}</span> <b></b></span><span class="seg">${[.5,1,2].map((v,i)=>`<button type="button" data-v="${v}" aria-pressed="${v===SPD}">${TX.sp[i]}</button>`).join('')}</span><button type="button" class="all">${TX.all}</button><span class="bic"><button type="button" class="bre" aria-label="${TX.re}" title="${TX.re}"><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg></button><button type="button" class="bmin" aria-label="${TX.min}" title="${TX.min}"><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></button></span>`;
  document.body.appendChild(bar);
  const peek=document.createElement('button');peek.type='button';peek.className='bpeek';peek.hidden=true;peek.setAttribute('aria-label',TX.max);peek.title=TX.max;peek.innerHTML='<img src="img/cara-pisca.webp" alt="">';document.body.appendChild(peek);
  let mini=false;try{mini=localStorage.getItem('lm-bmini')==='1'}catch(e){}
  const setMini=v=>{mini=v;try{localStorage.setItem('lm-bmini',v?'1':'0')}catch(e){}bar.style.display=v?'none':'';peek.hidden=!v||!document.body.contains(bar);if(!v)bar.querySelector('.bmin').focus();else peek.focus()};
  bar.querySelector('.bmin').onclick=()=>setMini(true);
  bar.querySelector('.bre').onclick=()=>{try{sessionStorage.setItem('lm-replay','1')}catch(e){}if(history.scrollRestoration)history.scrollRestoration='manual';scrollTo(0,0);location.reload()};peek.onclick=()=>setMini(false);
  const nowB=bar.querySelector('.bnow b'),nowLab=bar.querySelector('.bnow .bl');let active=0,hideT;
  bar.querySelectorAll('.seg button').forEach(btn=>btn.onclick=()=>{SPD=+btn.dataset.v;try{localStorage.setItem('lm-bspd',SPD)}catch(e){}bar.querySelectorAll('.seg button').forEach(x=>x.setAttribute('aria-pressed',x===btn))});
  function showAll(){STOP=true;units.forEach(u=>{u.done=true;u.els.forEach(e=>e.classList.remove('bld-wait'))});document.querySelectorAll('.bc,.bsel').forEach(e=>e.remove());nowLab.textContent=TX.ok;nowB.textContent='✓';bar.classList.add('fin')}
  bar.querySelector('.all').onclick=showAll;
  const secName=u=>{const sec=u.root.closest('section');const h=sec&&sec.querySelector('h2');return h?h.textContent.trim():''};
  function busy(u,on){if(STOP)return;active+=on?1:-1;if(on){nowLab.textContent=TX.b;nowB.textContent='· '+secName(u)}else if(active<=0){if(units.every(x=>x.done)){nowLab.textContent=TX.ok;nowB.textContent='✓';bar.classList.add('fin')}else{nowLab.textContent=TX.wait;nowB.textContent=''}}}
  async function build(u){
    if(u.done||STOP)return;u.done=true;busy(u,true);
    const lanes=Math.min(3,Math.max(1,Math.ceil(u.els.length/2)));
    const W=document.documentElement.clientWidth;
    const curs=[...Array(lanes)].map((_,i)=>{const c=mkCursor(n+i);const b=box(u.els[0]);c.x=i%2?W-30:-30;c.y=b.y+i*40;c.el.style.transform=`translate(${c.x}px,${c.y}px)`;return c});n+=lanes;
    const queue=[...u.els];const fast=queue.length>4;
    await Promise.all(curs.map(async c=>{while(queue.length&&!STOP){await draw(c,queue.shift(),fast)}queue.splice(0).forEach(e=>e.classList.remove('bld-wait'));if(STOP){c.el.remove();return}
      await go(c,c.x<W/2?-60:W+20,c.y+40,420);c.el.remove()}));
    busy(u,false);
  }
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const u=units.find(x=>x.root===e.target);if(u){build(u);io.unobserve(e.target)}}}),{rootMargin:'0px 0px -12% 0px',threshold:0});
  // espera a abertura do topo terminar antes de começar a construir o que já está na tela
  const startIO=()=>{if(startIO.on)return;startIO.on=true;bar.classList.remove('off');if(mini){bar.style.display='none';peek.hidden=false}nowLab.textContent=TX.wait;units.forEach(u=>io.observe(u.root))};
  if(window.LM_INTRO_DONE||!document.documentElement.classList.contains('intro-on'))startIO();else{addEventListener('lm-intro-done',startIO,{once:true});setTimeout(startIO,3200)}
  addEventListener('scroll',()=>{units.forEach(u=>{if(!u.done&&u.root.getBoundingClientRect().bottom<0){u.done=true;u.els.forEach(e=>e.classList.remove('bld-wait'))}})},{passive:true});
})();

// Page motion and interactive demos, ported from the original inline script.
// Runs once per page load; it builds parts of the DOM (loader pixels, title
// letters, marquee copy, palette, terminal tabs), so it must not run twice.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function startEffects() {
  const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
  const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const hasGsap=true;
  gsap.registerPlugin(ScrollTrigger);

  /* ---------- loader ---------- */
  const pxBox=$('#loaderPx');for(let i=0;i<24*14;i++){pxBox.appendChild(document.createElement('i'));}
  const px=pxBox.children, lo={v:0};
  function finishLoad(){
    const tl=hasGsap?gsap.timeline():null;
    if(!tl){$('#loader').style.display='none';return;}
    tl.to('#loader .px i',{opacity:(i)=>((i*7)%13<3?0.9:0),duration:.05,stagger:{each:.0012,from:"random"}})
      .to('#loader',{yPercent:-100,duration:.9,ease:'expo.inOut'})
      .from('#htitle .ch',{yPercent:115,rotate:6,opacity:0,stagger:.045,duration:1,ease:'expo.out'},'-=.45')
      .from('.hero-in',{y:28,opacity:0,stagger:.1,duration:.8,ease:'power3.out'},'-=.75')
      .set('#loader',{display:'none'});
    if(window.ScrollTrigger)ScrollTrigger.refresh();
  }
  (function load(){ // never trap the visitor: rAF counter + hard backstop
    let done=false;const end=()=>{if(!done){done=true;finishLoad();}};
    const t0=performance.now(),DUR=RM?200:1500;
    (function tick(now){const p=Math.min(1,((now||performance.now())-t0)/DUR);
      $('#ln').textContent=String(Math.round(p*100)).padStart(3,'0');
      $('#loader .bar').style.width=(p*100)+'%';
      if(p<1&&!done)requestAnimationFrame(tick);else end();})(t0);
    setTimeout(end,DUR+4000);
  })();

  /* ---------- title split ---------- */
  const ht=$('#htitle'),txt=ht.textContent;ht.innerHTML=[...txt].map((c,i)=>`<span class="ch">${c}</span>`).join('');

  /* ---------- cursor + pixel trail ---------- */
  const cur=$('.cur'),dot=$('.cur-dot'),trail=$('#trail');
  let mx=innerWidth/2,my=innerHeight/2,cx=mx,cy=my,lastPx=0;
  addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;dot.style.transform=`translate(${mx}px,${my}px)`;
    const now=performance.now();
    if(!RM&&now-lastPx>34){lastPx=now;const p=document.createElement('i');const s=4+Math.random()*8;
      p.style.cssText=`left:${mx-4}px;top:${my-4}px;width:${s}px;height:${s}px;opacity:.95`;trail.appendChild(p);
      let life=1;const fall=setInterval(()=>{life-=.09;p.style.opacity=life;p.style.transform=`translate(${(Math.random()-.5)*30}px,${(Math.random()-.2)*36}px) scale(${life})`;if(life<=0){clearInterval(fall);p.remove();}},40);
      while(trail.children.length>60)trail.firstChild.remove();}
  });
  (function loop(){cx+=(mx-cx)*.18;cy+=(my-cy)*.18;cur.style.transform=`translate(${cx}px,${cy}px)`;requestAnimationFrame(loop)})();
  $$('a,button,.chap,.chip,.fcard').forEach(el=>{el.addEventListener('pointerenter',()=>cur.classList.add('big'));el.addEventListener('pointerleave',()=>cur.classList.remove('big'))});
  addEventListener('pointermove',e=>{const t=e.target;const s=t&&t.closest?t.closest('.feat,.chap,.dcard,.fcard,.stack,.mock'):null;if(s){const r=s.getBoundingClientRect();s.style.setProperty('--mx',(e.clientX-r.left)+'px');s.style.setProperty('--my',(e.clientY-r.top)+'px');}},{passive:true});
  $$('.magnet').forEach(b=>{b.addEventListener('pointermove',e=>{if(!hasGsap)return;const r=b.getBoundingClientRect();gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.3,y:(e.clientY-r.top-r.height/2)*.4,duration:.4})});b.addEventListener('pointerleave',()=>{if(hasGsap)gsap.to(b,{x:0,y:0,duration:.7,ease:'elastic.out(1,.4)'})})});

  /* ---------- hero pixel field ---------- */
  const cv=$('#field'),ctx=cv.getContext('2d');
  let W,H,cols,rows,cell=26,dots=[],t0=performance.now(),frames=0,fpsT=performance.now();
  function sizeField(){const d=Math.min(devicePixelRatio||1,1.5);W=cv.clientWidth;H=cv.clientHeight;cv.width=W*d;cv.height=H*d;ctx.setTransform(d,0,0,d,0,0);
    cols=Math.ceil(W/cell)+1;rows=Math.ceil(H/cell)+1;dots=[];
    for(let y=0;y<rows;y++)for(let x=0;x<cols;x++)dots.push({x:x*cell,y:y*cell,s:Math.random()*Math.PI*2});}
  sizeField();addEventListener('resize',sizeField);
  let fieldOn=true;
  new IntersectionObserver(es=>{fieldOn=es[0].isIntersecting}).observe($('#hero'));
  function drawField(now){
    requestAnimationFrame(drawField);
    if(!fieldOn)return;
    const t=(now-t0)/1000;
    ctx.clearRect(0,0,W,H);
    const dark=document.documentElement.dataset.theme!=="light";
    for(const d of dots){
      const dx=d.x-mx,dy=(d.y+H*0)- (my+scrollY-$('#hero').offsetTop+H*0);
      const dist=Math.hypot(d.x-mx,d.y-(my-(scrollY>0?0:0))-($('#hero').getBoundingClientRect().top*-1+0)*0 - 0);
      const w=Math.sin(d.s+t*1.4)*.5+.5;
      const m=Math.max(0,1-Math.hypot(d.x-mx,d.y-(my-$('#hero').getBoundingClientRect().top))/340);
      const a=.12+w*.3+m*.75;
      const sz=1.5+w*2.4+m*4;
      ctx.fillStyle=dark?(m>.35?`rgba(140,165,255,${a})`:`rgba(150,150,180,${a*.8})`):(m>.35?`rgba(70,100,230,${a})`:`rgba(60,60,80,${a*.7})`);
      ctx.fillRect(d.x+Math.sin(t+d.s)*3,d.y+Math.cos(t*.8+d.s)*3,sz,sz);
    }
    frames++;const el=now-fpsT;
    if(el>500){$('#hudF').textContent=Math.round(frames*1000/el);frames=0;fpsT=now;
      const s=t,mm=String(Math.floor(s/60)).padStart(2,'0'),ss=(s%60).toFixed(3).padStart(6,'0');$('#hudT').textContent=`${mm}:${ss}`;}
  }
  requestAnimationFrame(drawField);

  /* ---------- marquee duplicate ---------- */
  const mq=$('#mq');mq.innerHTML+=mq.innerHTML;

  /* ---------- progress ---------- */
  addEventListener('scroll',()=>{const h=document.documentElement;$('#progress').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';},{passive:true});

  /* ---------- reveals ---------- */
  if(hasGsap&&typeof ScrollTrigger!=="undefined"&&!RM){
    $$('.reveal').forEach(el=>{gsap.fromTo(el,{opacity:0,y:36},{opacity:1,y:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%'}})});
    $$('.split').forEach(el=>{gsap.from(el,{yPercent:30,opacity:0,duration:1,ease:'expo.out',scrollTrigger:{trigger:el,start:'top 86%'}})});
    const track=$('#htrack');
    if(track){
      let down=false,sx=0,sl=0;
      track.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&innerWidth>820){down=true;sx=e.clientX;sl=track.scrollLeft;}});
      track.addEventListener('pointermove',e=>{if(down)track.scrollLeft=sl-(e.clientX-sx);});
      ['pointerup','pointercancel','pointerleave'].forEach(ev=>track.addEventListener(ev,()=>down=false));
    }
    if(document.readyState==='complete')ScrollTrigger.refresh();else addEventListener('load',()=>ScrollTrigger.refresh());
  }else{$$('.reveal').forEach(el=>{el.style.opacity=1;el.style.transform='none'})}

  /* ---------- chapters scrub ---------- */
  const reel=$('#reel');
  let pendingSeek=null;
  reel.addEventListener('loadedmetadata',()=>{if(pendingSeek!=null){try{reel.currentTime=pendingSeek;}catch(e){}pendingSeek=null;}});
  $$('#chapters .chap').forEach(c=>c.addEventListener('click',()=>{
    $$('#chapters .chap').forEach(x=>x.classList.remove('on'));c.classList.add('on');
    const t=parseFloat(c.dataset.t),go=()=>{reel.play().catch(()=>{});};
    if(reel.readyState>=1){try{reel.currentTime=t;}catch(e){pendingSeek=t;}go();}
    else{pendingSeek=t;try{reel.load();}catch(e){}go();}
    $('#reelCap').textContent='LAUNCH FILM · @ '+c.dataset.t+'s · '+c.querySelector('h4').textContent.toUpperCase();
  }));

  /* ---------- craft viz canvases ---------- */
  function fit(c){const r=c.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);c.width=r.width*d;c.height=r.height*d;const x=c.getContext('2d');x.setTransform(d,0,0,d,0,0);return[x,r.width,r.height];}
  function anim(id,fn){const c=$(id);if(!c)return;let[X,w,h]=fit(c);addEventListener('resize',()=>{[X,w,h]=fit(c)});let s=Math.random()*10;(function f(){requestAnimationFrame(f);const r=c.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;s+=.016;fn(X,w,h,s);})();}
  anim('#vizWave',(X,w,h,s)=>{X.clearRect(0,0,w,h);const reduced=(s%6)>3;X.strokeStyle=reduced?'rgba(160,160,180,.6)':'#8fa4ff';X.lineWidth=2;X.beginPath();for(let x=0;x<=w;x+=4){const y=h/2+(reduced?0:Math.sin(x*.05+s*2)*22*Math.sin(x*.01+s)+Math.sin(x*.11+s*3)*6);x?X.lineTo(x,y):X.moveTo(x,y);}X.stroke();
    X.font='11px JetBrains Mono';X.fillStyle=reduced?'rgba(255,255,255,.75)':'#8fa4ff';X.fillText(reduced?'prefers-reduced-motion: reduce → static':'motion: no preference → animated',10,16);});
  anim('#vizCursor',(X,w,h,s)=>{X.clearRect(0,0,w,h);const x=w/2+Math.sin(s)*w*.3,y=h/2+Math.cos(s*1.3)*h*.28;
    X.strokeStyle='rgba(140,165,255,.9)';X.lineWidth=1.5;X.strokeRect(x-46,y-30,92,60);X.beginPath();X.moveTo(x-46,y-38);X.lineTo(x-46,y-30);X.moveTo(x+46,y-38);X.lineTo(x+46,y-30);X.stroke();
    X.fillStyle='#8fa4ff';for(let i=0;i<14;i++){X.globalAlpha=1-i/14;X.fillRect(x-s*40+i*9,y+((i*37)%40)-20,5,5);}X.globalAlpha=1;
    X.strokeStyle='#fff';X.beginPath();X.arc(x,y,10+Math.sin(s*4)*2,0,7);X.stroke();});
  anim('#vizActivity',(X,w,h,s)=>{X.clearRect(0,0,w,h);const rows=7,cols=26,g=3,cw=(w-20)/cols,ch=(h-34)/rows,sz=Math.min(cw,ch)-g;const lv=['rgba(140,140,160,.15)','#3b4a8f','#5468c9','#7a8ff0','#a8b8ff'];
    for(let c=0;c<cols;c++)for(let r=0;r<rows;r++){const n=Math.sin(c*1.7+r*2.3)*.5+.5,wv=Math.sin(c*.45-s*1.5)*.5+.5;const l=Math.min(4,Math.floor(n*wv*6));X.fillStyle=lv[l];X.fillRect(10+c*cw,24+r*ch,sz,sz);}
    X.fillStyle='rgba(255,255,255,.7)';X.font='11px JetBrains Mono';X.fillText('contributions · last year · profile.githubUser',10,14);});
  anim('#vizPixels',(X,w,h,s)=>{X.clearRect(0,0,w,h);const n=12,cw=w/n,ch=h/8,wipe=(s%3)/3;for(let gy=0;gy<8;gy++)for(let gx=0;gx<n;gx++){const on=gx/n<wipe;X.fillStyle=on?'#8fa4ff':'rgba(140,140,160,.18)';X.fillRect(gx*cw+2,gy*ch+2,cw-4,ch-4);}});

  /* ---------- counters + rings ---------- */
  function count(el){const to=parseFloat(el.dataset.to),dec=parseInt(el.dataset.dec||0),pre=el.dataset.prefix||'',suf=el.dataset.suf||'';
    const o={v:0};const step=()=>{o.v+=(to-o.v)*.08;if(Math.abs(to-o.v)<.05)o.v=to;el.textContent=pre+o.v.toFixed(dec)+suf;if(o.v!==to)requestAnimationFrame(step);};step();}
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){count(e.target);io.unobserve(e.target);}}),{threshold:.4});
  $$('.count').forEach(el=>io.observe(el));
  const rio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){
    $$('#rings .fgc').forEach((c,i)=>{const C=2*Math.PI*60;setTimeout(()=>{c.style.transition='stroke-dashoffset 1.6s cubic-bezier(.2,.8,.2,1)';c.style.strokeDashoffset=C*(1-(+c.dataset.v)/100);},i*180);});
    rio.disconnect();}}),{threshold:.3});
  rio.observe($('#rings'));

  /* ---------- filters ---------- */
  $$('.fdemo .chip').forEach(b=>b.addEventListener('click',()=>{
    $$('.fdemo .chip').forEach(x=>x.classList.remove('on'));b.classList.add('on');
    const f=b.dataset.f;$$('#fgrid .fcard').forEach(c=>{c.classList.toggle('hide',f!=='All'&&c.dataset.c!==f);});
  }));

  /* ---------- palette ---------- */
  const routes=[['Home → /','hero'],['Projects → /#projects','inside'],['Experience → /#experience','resume'],['Blog → /blog','ship'],['Contact → /#contact','resume'],['GitHub → link','resume'],['LinkedIn → link','resume'],['Email → link','resume'],['Resume → /resume','resume'],['Northwind Dashboard → /work/northwind-dashboard','ship'],['Pocket Budget → /work/pocket-budget','ship'],['Plainfile CLI → /work/plainfile-cli','ship'],['Getting started with quietfolio → post','ship'],['How the SEO and AEO setup works → post','proof'],['Deploying to GitHub Pages or Netlify → post','ship']];
  const pal=$('#pal'),palIn=$('#palIn'),palOpts=$('#palOpts');let sel=0,items=routes;
  function renderPal(){palOpts.innerHTML=items.map((r,i)=>`<div class="opt${i===sel?' sel':''}" data-i="${i}"><span>${r[0]}</span><span>↵</span></div>`).join('')||'<div class="opt"><span>no match</span></div>';
    $$('#palOpts .opt').forEach(o=>o.addEventListener('click',()=>goPal(parseInt(o.dataset.i||0))));}
  function openPal(){$('#pal').classList.add('open');palIn.value='';items=routes;sel=0;renderPal();setTimeout(()=>palIn.focus(),30);}
  function closePal(){$('#pal').classList.remove('open');}
  function goPal(i){const r=items[i];if(!r)return closePal();closePal();document.getElementById(r[1])?.scrollIntoView({behavior:RM?'auto':'smooth'});}
  palIn.addEventListener('input',()=>{const q=palIn.value.toLowerCase();items=routes.filter(r=>r[0].toLowerCase().includes(q));sel=0;renderPal();});
  palIn.addEventListener('keydown',e=>{if(e.key==='ArrowDown'){sel=Math.min(sel+1,items.length-1);renderPal();e.preventDefault();}if(e.key==='ArrowUp'){sel=Math.max(sel-1,0);renderPal();e.preventDefault();}if(e.key==='Enter')goPal(sel);if(e.key==='Escape')closePal();});
  pal.addEventListener('click',e=>{if(e.target===pal)closePal();});
  addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();pal.classList.contains('open')?closePal():openPal();}if(e.key==='Escape')closePal();});
  $('#palBtn').addEventListener('click',openPal);

  /* ---------- theme: page + demo ---------- */
  function setTheme(t){document.documentElement.dataset.theme=t;}
  $('#themeBtn').addEventListener('click',()=>{setTheme(document.documentElement.dataset.theme==='light'?'dark':'light');});
  const demoB=$('#demoBrowser'),wipe=$('#themeWipe');let light=false;
  $('#demoTheme').addEventListener('click',e=>{
    light=!light;const r=demoB.getBoundingClientRect();
    const x=e.clientX-r.left,y=e.clientY-r.top;
    wipe.style.background=light?'#0b0b10':'#f6f3ec';
    wipe.animate([{clipPath:'inset(0)',opacity:0},{clipPath:'inset(0)',opacity:1},{clipPath:'inset(0)',opacity:0}],{duration:500,easing:'ease-out'});
    setTimeout(()=>demoB.classList.toggle('light',light),250);
    $('#demoTitle').textContent=light?'Light, remembered next visit.':'Dark, the default.';
  });

  /* ---------- terminal ---------- */
  const terms={
    mine:{label:'Make it yours',body:`<span class="p">$</span> git clone https://github.com/salahu01/quietfolio-template my-site\n<span class="p">$</span> cd my-site && nvm use && npm install\n<span class="p">$</span> npm run dev  <span class="c"># http://localhost:3000</span>\n<span class="c"># then: lib/data.ts · content/*.json · public/img/</span> <span class="caret"></span>`},
    check:{label:'Check (CI)',body:`<span class="p">$</span> npm run check\n<span class="c"># lint → typecheck → validate → build</span>\n<span class="p">$</span> npm run validate  <span class="c"># links, images, slugs</span>\n<span class="p">$</span> npm run resume    <span class="c"># rebuild resume.pdf</span> <span class="caret"></span>`},
    pages:{label:'GitHub Pages',body:`<span class="p">$</span> npm run deploy:pages\n<span class="c"># STATIC_EXPORT=1, NEXT_PUBLIC_BASE_PATH=/&lt;repo&gt;</span>\n<span class="c"># Settings → Pages → gh-pages / root</span>\n<span class="c"># → https://&lt;user&gt;.github.io/&lt;repo&gt;/ · no Actions needed</span> <span class="caret"></span>`},
    node:{label:'Netlify / Vercel',body:`<span class="c"># connect the repo, then set:</span>\nNEXT_PUBLIC_SITE_URL=https://yourdomain.com\n<span class="c"># Node build: security headers, strict CSP,</span>\n<span class="c"># /work redirect, AVIF/WebP images (netlify.toml included)</span> <span class="caret"></span>`}};
  const tt=$('#ttabs'),to=$('#tout');
  Object.entries(terms).forEach(([k,v],i)=>{const b=document.createElement('button');b.textContent=v.label;b.dataset.k=k;if(!i)b.classList.add('on');b.addEventListener('click',()=>{$$('#ttabs button').forEach(x=>x.classList.remove('on'));b.classList.add('on');to.innerHTML=terms[k].body;});tt.appendChild(b);});
  to.innerHTML=terms.mine.body;
}

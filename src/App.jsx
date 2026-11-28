import React, { useEffect, useMemo, useRef, useState } from "react";
import "./styles.css";
import { GuardianArt, Crest } from "./GuardianArt.jsx";
const GH="https://github.com/KBSanchai";
const projects=[
{id:"docgen",no:"01",title:"DocGen",sub:"Offline AI document automation",desc:"A local-first Windows desktop app for business document workflows. Extracts purchase-order fields with PDF/DOCX parsing, Tesseract OCR and an on-device Ollama model, then generates documents from templates.",stack:["Electron","React","TypeScript","FastAPI","Ollama","SQLite"],cat:"AI & AUTOMATION",year:"2026",repo:"",label:"Repository not publicly linked",mark:"文",theme:"ember"},
{id:"agro-dashboard",no:"02",title:"Precision Agriculture Dashboard",sub:"Drone-based crop intelligence",desc:"A drone-focused agriculture dashboard built during an internship, combining crop-health analytics, NDVI stress detection and an AI chatbot for field insights.",stack:["React","TypeScript","Vite","NDVI","Agriculture AI"],cat:"FULL-STACK",year:"2025",repo:"https://github.com/KBSanchai/Agro-Visionaries-by-Asteri-PVT",label:"View repository",mark:"農",theme:"moss"},
{id:"crop-classifier",no:"03",title:"Intelligent Pesticide & Fertilizer System",sub:"Computer vision for precision spraying",desc:"A computer-vision and deep-learning system for classifying plant diseases and crop insects, with IoT-based targeted sprinkling according to detected conditions.",stack:["Python","ResNet18","Computer Vision","Deep Learning","IoT"],cat:"AI & ML",year:"2025",repo:"https://github.com/KBSanchai/crop-insect-classifier",label:"View model repository",mark:"葉",theme:"moss"},
{id:"agro-ai",no:"04",title:"Agro AI Assistant",sub:"Crop diagnosis and treatment guidance",desc:"An AI-powered agriculture dashboard for crop disease diagnosis, treatment recommendations, weather correlation, plant tracking, analytics and secure authentication.",stack:["React","Vite","Supabase","Gemini","Hugging Face","Docker"],cat:"FULL-STACK",year:"2026",repo:"https://github.com/KBSanchai/AI-Agro-Assistant",label:"View repository",mark:"芽",theme:"moss"},
{id:"image",no:"05",title:"Image Classification App",sub:"DIP, OpenCLIP and AI explanations",desc:"A Streamlit application that applies image-processing filters, classifies images using OpenCLIP, generates explanations with Ollama and exports PDF reports.",stack:["Python","Streamlit","PyTorch","OpenCLIP","OpenCV","Ollama"],cat:"AI & ML",year:"2025",repo:"https://github.com/KBSanchai/Image-Classification-App-with-DIP-Enhancements-Ollama-and-PDF-Export",label:"View source code",mark:"映",theme:"ice"},
{id:"cattle-rag",no:"06",title:"Cattle & Buffalo RAG Assistant",sub:"A local knowledge-grounded chatbot",desc:"A retrieval-augmented assistant for cattle and buffalo breed information, using a document knowledge base, vector search, Ollama embeddings and a FastAPI service.",stack:["Python","LangChain","Chroma","Ollama","FastAPI"],cat:"AI & AUTOMATION",year:"2025",repo:"https://github.com/KBSanchai/Cattle-and-Buffalo-RAG-LLM-Chartbot-with-ollama-and-FastAPI",label:"View source code",mark:"牛",theme:"ember"},
{id:"sql",no:"07",title:"SQL Chatbot with MySQL",sub:"Natural language to database queries",desc:"A conversational SQL application with login and signup, translating natural-language questions into SQL, querying MySQL and summarising results with LangChain and Ollama.",stack:["Python","LangChain","Ollama","Streamlit","MySQL"],cat:"AI & AUTOMATION",year:"2025",repo:"https://github.com/KBSanchai/LLM-Chatbot-with-MySQL",label:"View source code",mark:"問",theme:"ice"},
{id:"theater",no:"08",title:"Smart Theater Management System",sub:"Theater ticketing and management",desc:"A theater ticket-booking and management project, with a Jenkins pipeline included in the repository.",stack:["Web Development","Jenkins","CI/CD"],cat:"FULL-STACK",year:"2025",repo:"https://github.com/KBSanchai/Smart-Theater-Management-System",label:"View repository",mark:"映",theme:"ember"},
];
const skills=[
["LANGUAGES",["C","C++","Java","Python"]],
["FRONTEND & BACKEND",["React.js","Node.js","Tailwind CSS","Next.js","REST APIs"]],
["CLOUD, DEVOPS & DATABASES",["AWS","Google Cloud","Docker","MySQL","Supabase"]],
["AI & MACHINE LEARNING",["LLM APIs","Multi-Agent Systems","Generative AI"]],
["TOOLS",["Git","GitHub","Figma","VS Code"]]
];
const jobs=[
["JUN — AUG 2026","Software Intern","ACA Technologies · Chennai, India","Built DocGen, a local-first Windows desktop app with Electron, React, TypeScript and FastAPI. Implemented purchase-order extraction using PDF/DOCX parsing, Tesseract OCR and Ollama; developed template-driven document generation and trainer, intern and finance modules with SMTP email."],
["MAY — JUN 2025","Software Intern","Stabilitas Pvt Ltd · Tirupati, India","Built a drone-based precision agriculture dashboard with crop-health analytics, NDVI stress detection and an AI chatbot."]
];
const education=[
["2023 — 2027","B.Tech in Computer Science and Engineering (AI & ML)","SRM Institute of Science and Technology · Chennai, India"],
["2017 — 2023","CBSE","Maharishi International Residential School · Kanchipuram, India"]
];
const certs=[
["Salesforce Certified Agentforce Specialist","DEC 2025","Credential ID: 7204077"],
["Cloud-Based CRM and SaaS with Internship — TechForce Academy Australia","AUG — NOV 2025",""],
["AWS Academy Graduate — Data Engineering","2026",""],
["Generative AI Foundations","2026",""],
["Google Cloud Computing Foundations Certificate","2026",""],
["Google Cloud Engineering Certificate","2026",""]
];
const awards=[
["3rd Place — SRM SDG Hackathon","NOV 2024","School of Computing, SRMIST"],
["TechXcelerate Hackathon","MAR 2025","BITS Pilani, Hyderabad Campus"],
["IdeaSpark Hackathon","MAR 2025","Founders Club, SRMIST, Chennai"],
["HACKRIX ’25 Open Innovation Hackathon","OCT 2025","Department of Computational Intelligence & Techvantage, SRMIST"]
];
const filters=["ALL","AI & ML","AI & AUTOMATION","FULL-STACK","DEVOPS"];
const suppliedProjectArt={
 docgen:{normal:"02-docgen-normal.webp",bankai:"02-docgen-bankai.webp"},
 "agro-dashboard":{normal:"03-agriculture-normal.webp",bankai:"03-agriculture-bankai.webp"},
 "crop-classifier":{normal:"04-sign-language-normal.webp",bankai:"04-sign-language-bankai.webp"},
 "agro-ai":{normal:"05-driver-monitoring-normal.webp",bankai:"05-driver-monitoring-bankai.webp"},
 image:{normal:"07-image-classification-normal-v2.webp",bankai:"07-image-classification-bankai-v2.webp"},
 "cattle-rag":{normal:"06-cattle-rag-normal.webp",bankai:"06-cattle-rag-bankai.webp"},
 sql:{normal:"11-sql-chatbot-normal.webp",bankai:"11-sql-chatbot-bankai.webp"},
 theater:{normal:"08-cinevault-normal.webp",bankai:"08-cinevault-bankai.webp"}
};
const portfolioImage=(name)=>import.meta.env.BASE_URL+"portfolio-images/"+name;

const bleachProjectArt={
 docgen:{src:import.meta.env.BASE_URL+"bleach-projects/01-docgen.webp"},
 "agro-dashboard":{src:import.meta.env.BASE_URL+"bleach-projects/02-agro-dashboard.webp"},
 "crop-classifier":{src:import.meta.env.BASE_URL+"bleach-projects/03-crop-classifier.webp"},
 "agro-ai":{src:import.meta.env.BASE_URL+"bleach-projects/04-agro-ai.webp"},
 image:{src:import.meta.env.BASE_URL+"bleach-projects/05-image-classification.webp"},
 "cattle-rag":{src:import.meta.env.BASE_URL+"bleach-projects/07-cattle-rag.webp"},
 sql:{src:import.meta.env.BASE_URL+"bleach-projects/08-sql-chatbot.webp"},
 theater:{src:import.meta.env.BASE_URL+"bleach-projects/09-theater.webp"},
 cicd:{src:import.meta.env.BASE_URL+"bleach-projects/10-cicd.webp"},
};
const skillCrest={"LANGUAGES":"AI & ML","FRONTEND & BACKEND":"FULL-STACK","CLOUD, DEVOPS & DATABASES":"DEVOPS","AI & MACHINE LEARNING":"AI & ML","TOOLS":"FULL-STACK"};
function App(){
 const [menu,setMenu]=useState(false),[filter,setFilter]=useState("ALL"),[progress,setProgress]=useState(0),[bankai,setBankai]=useState(false),[bankaiTransition,setBankaiTransition]=useState("");
 const scrollTrack=useRef(null);
 const visible=useMemo(()=>filter==="ALL"?projects:projects.filter(p=>p.cat===filter),[filter]);
 useEffect(()=>{
  const track=scrollTrack.current;
  const update=()=>{
   const wide=window.innerWidth>=1000&&track;
   if(wide){
    const total=track.scrollWidth-track.clientWidth;
    setProgress(total>0?track.scrollLeft/total*100:0);
    document.body.classList.toggle("is-scrolled",track.scrollLeft>20);
   }else{
    const total=document.documentElement.scrollHeight-window.innerHeight;
    setProgress(total>0?window.scrollY/total*100:0);
    document.body.classList.toggle("is-scrolled",window.scrollY>24);
   }
  };
  track?.addEventListener("scroll",update,{passive:true});
  window.addEventListener("scroll",update,{passive:true});
  window.addEventListener("resize",update);
  update();
  return()=>{
   track?.removeEventListener("scroll",update);
   window.removeEventListener("scroll",update);
   window.removeEventListener("resize",update);
  };
 },[]);
 useEffect(()=>{
  const root=window.innerWidth>=1000?scrollTrack.current:null;
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");observer.unobserve(e.target)}}),{root,threshold:.08});
  document.querySelectorAll(".reveal:not(.is-visible)").forEach(n=>observer.observe(n));
  return()=>observer.disconnect();
 },[filter]);
 useEffect(()=>{
  const track=scrollTrack.current;
  if(!track)return;
  let target=track.scrollLeft;
  let raf=0;
  const wide=()=>window.innerWidth>=1000;
  const clampTarget=value=>Math.max(0,Math.min(value,track.scrollWidth-track.clientWidth));
  const animate=()=>{
   const distance=target-track.scrollLeft;
   if(Math.abs(distance)<0.7){
    track.scrollLeft=target;
    raf=0;
    return;
   }
   track.scrollLeft+=distance*.19;
   raf=requestAnimationFrame(animate);
  };
  const moveTo=value=>{
   target=clampTarget(value);
   if(!raf)raf=requestAnimationFrame(animate);
  };
  const onWheel=e=>{
   if(!wide()||e.ctrlKey||e.metaKey)return;
   if(e.altKey){
    const panel=e.target.closest("main#home > .section, main#home > .contact-section");
    if(panel){e.preventDefault();panel.scrollTop+=e.deltaY||e.deltaX;}
    return;
   }
   const delta=Math.abs(e.deltaX)>Math.abs(e.deltaY)*.65?e.deltaX:e.deltaY;
   if(!delta)return;
   e.preventDefault();
   moveTo(target+delta*1.08);
  };
  const onKey=e=>{
   if(!wide())return;
   const tag=document.activeElement?.tagName;
   if(["A","BUTTON","INPUT","TEXTAREA","SELECT"].includes(tag))return;
   let next=null;
   if(e.key==="ArrowRight"||e.key==="PageDown")next=target+window.innerWidth*.72;
   if(e.key==="ArrowLeft"||e.key==="PageUp")next=target-window.innerWidth*.72;
   if(e.key==="Home")next=0;
   if(e.key==="End")next=track.scrollWidth;
   if(next===null)return;
   e.preventDefault();
   moveTo(next);
  };
  const onResize=()=>{target=clampTarget(track.scrollLeft);};
  const onNativeScroll=()=>{if(!raf)target=clampTarget(track.scrollLeft);};
  track.addEventListener("wheel",onWheel,{passive:false});
  track.addEventListener("scroll",onNativeScroll,{passive:true});
  window.addEventListener("keydown",onKey);
  window.addEventListener("resize",onResize);
  return()=>{
   track.removeEventListener("wheel",onWheel);
   track.removeEventListener("scroll",onNativeScroll);
   window.removeEventListener("keydown",onKey);
   window.removeEventListener("resize",onResize);
   if(raf)cancelAnimationFrame(raf);
  };
 },[]);
 useEffect(()=>{
  const finePointer=window.matchMedia("(hover: hover) and (pointer: fine)");
  const reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)");
  if(!finePointer.matches||reducedMotion.matches)return;
  const canvas=document.createElement("canvas");
  canvas.className="ink-brush-canvas";
  canvas.setAttribute("aria-hidden","true");
  const ctx=canvas.getContext("2d",{alpha:true});
  const brush=document.createElement("div");
  brush.className="ink-brush-cursor";
  brush.setAttribute("aria-hidden","true");
  brush.innerHTML='<svg viewBox="0 0 240 214" role="presentation"><defs><linearGradient id="brushWood" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#181817"/><stop offset=".28" stop-color="#575653"/><stop offset=".55" stop-color="#292927"/><stop offset=".82" stop-color="#77746d"/><stop offset="1" stop-color="#20201f"/></linearGradient><linearGradient id="brushMetal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d7d5cc"/><stop offset=".2" stop-color="#6e6d69"/><stop offset=".42" stop-color="#e4e1d8"/><stop offset=".65" stop-color="#4c4b49"/><stop offset="1" stop-color="#b1aea6"/></linearGradient><linearGradient id="brushHair" x1="0" y1="0" x2=".5" y2="1"><stop offset="0" stop-color="#ddd9ce"/><stop offset=".34" stop-color="#7b7974"/><stop offset=".72" stop-color="#292927"/><stop offset="1" stop-color="#070707"/></linearGradient><filter id="brushShadow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2"/></filter></defs><path d="M20 207 C44 190 67 170 91 144 C122 111 158 76 193 41 C202 32 213 21 222 13" fill="none" stroke="#141414" stroke-opacity=".24" stroke-width="19" filter="url(#brushShadow)"/><path d="M79 151 C98 127 126 99 155 70 C179 46 199 25 216 12 C224 8 231 13 226 21 C211 39 191 61 170 82 C142 111 114 140 91 163 Z" fill="url(#brushWood)" stroke="#1c1b1a" stroke-width="2"/><path d="M95 145 C129 110 162 78 196 42 M105 147 C137 113 170 80 207 34 M118 132 C150 98 183 65 213 30" fill="none" stroke="#d0cdc3" stroke-opacity=".24" stroke-width="1.4"/><path d="M210 10 C217 1 230 2 235 11 C239 21 230 29 221 27 C212 25 208 17 210 10 Z" fill="none" stroke="#252422" stroke-width="5"/><path d="M212 10 C218 4 228 5 232 12" fill="none" stroke="#bbb8af" stroke-width="1.5"/><path d="M92 135 C102 121 111 111 123 100 L141 116 C129 129 117 142 104 156 Z" fill="url(#brushMetal)" stroke="#4a4946" stroke-width="1.6"/><path d="M101 125 L134 105 M96 138 L125 115 M106 151 L137 122" stroke="#e4e0d7" stroke-opacity=".52" stroke-width="2"/><path d="M77 149 C84 139 91 133 99 126 L111 139 C103 149 94 160 86 169 Z" fill="url(#brushMetal)" stroke="#353432" stroke-width="1.6"/><path d="M82 148 L105 130 M89 159 L111 139" stroke="#e4e0d7" stroke-opacity=".45" stroke-width="1.5"/><path d="M85 165 C67 176 39 194 14 213 C34 207 65 194 93 179 C105 172 111 163 111 154 L99 145 C95 153 91 160 85 165 Z" fill="url(#brushHair)" stroke="#282725" stroke-width="1.3"/><path d="M90 160 C66 176 39 197 14 213 M95 162 C69 180 43 199 18 211 M100 158 C78 177 50 196 24 207 M104 156 C84 173 59 191 32 202 M108 154 C89 170 68 185 42 197 M99 169 C78 185 57 198 36 207 M87 169 C65 185 44 200 23 210" fill="none" stroke="#e0ddd4" stroke-opacity=".58" stroke-width="1.2"/><path d="M14 213 C18 207 23 204 29 202 C25 208 19 212 14 213 Z" fill="#080808"/><path d="M72 174 L91 158" stroke="#f2eee4" stroke-opacity=".55" stroke-width="1.5"/></svg>';
  document.body.appendChild(canvas);
  document.body.appendChild(brush);
  let previous=null,lastInk=0,clearTimer=0,fadeTimer=0,raf=0;
  const dpr=Math.min(window.devicePixelRatio||1,2);
  const resizeCanvas=()=>{
   const w=window.innerWidth,h=window.innerHeight;
   canvas.width=Math.round(w*dpr);
   canvas.height=Math.round(h*dpr);
   canvas.style.width=w+"px";
   canvas.style.height=h+"px";
   ctx.setTransform(dpr,0,0,dpr,0,0);
   previous=null;
  };
  resizeCanvas();
  const paint=(a,b)=>{
   const dx=b.x-a.x,dy=b.y-a.y;
   const distance=Math.hypot(dx,dy);
   if(distance<1.1)return;
   const speed=Math.min(28,distance);
   const width=Math.max(3.5,Math.min(18,15.5-speed*.36));
   const midX=(a.x+b.x)/2,midY=(a.y+b.y)/2;
   ctx.save();
   ctx.globalCompositeOperation="source-over";
   ctx.lineCap="round";
   ctx.lineJoin="round";
   ctx.shadowColor="rgba(20,18,16,.23)";
   ctx.shadowBlur=3;
   ctx.strokeStyle="rgba(25,24,22,.17)";
   ctx.lineWidth=width*1.9;
   ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.quadraticCurveTo(midX,midY,b.x,b.y);ctx.stroke();
   ctx.shadowBlur=0;
   ctx.strokeStyle="rgba(25,24,22,.46)";
   ctx.lineWidth=width;
   ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.quadraticCurveTo(midX,midY,b.x,b.y);ctx.stroke();
   ctx.strokeStyle="rgba(8,8,8,.20)";
   ctx.lineWidth=Math.max(1.1,width*.24);
   ctx.beginPath();ctx.moveTo(a.x+1.2,a.y-1.1);ctx.quadraticCurveTo(a.x+1.2,a.y-1.1,midX+1.2,midY-1.1);ctx.stroke();
   ctx.restore();
   if(distance>6&&performance.now()-lastInk>32){
    lastInk=performance.now();
    const splats=Math.min(4,Math.max(1,Math.round(distance/12)));
    for(let i=0;i<splats;i++){
     const t=Math.random();
     const px=a.x+dx*t+(Math.random()-.5)*width*2.8;
     const py=a.y+dy*t+(Math.random()-.5)*width*2.8;
     const radius=Math.random()*2.6+.65;
     ctx.beginPath();ctx.fillStyle="rgba(22,21,19,"+(Math.random()*.25+.12)+")";
     ctx.ellipse(px,py,radius,radius*(.55+Math.random()),Math.random(),0,Math.PI*2);ctx.fill();
    }
   }
  };
  const positionBrush=(x,y)=>{
   const w=brush.offsetWidth,h=brush.offsetHeight;
   brush.style.transform="translate3d("+(x-w*.055)+"px,"+(y-h*.965)+"px,0)";
  };
  const onMove=e=>{
   if(e.pointerType==="touch")return;
   positionBrush(e.clientX,e.clientY);
   brush.classList.toggle("is-interactive",!!e.target.closest("a,button,[role='button'],.project-card,.filter"));
   brush.classList.remove("is-hidden");
   canvas.classList.remove("is-fading");
   if(clearTimer)window.clearTimeout(clearTimer);
   if(fadeTimer)window.clearTimeout(fadeTimer);
   if(previous)paint(previous,{x:e.clientX,y:e.clientY});
   previous={x:e.clientX,y:e.clientY};
   clearTimer=window.setTimeout(()=>{
    canvas.classList.add("is-fading");
    fadeTimer=window.setTimeout(()=>{
     ctx.clearRect(0,0,canvas.width/dpr,canvas.height/dpr);
     canvas.classList.remove("is-fading");
    },1750);
   },4800);
  };
  const onDown=()=>brush.classList.add("is-pressed");
  const onUp=()=>brush.classList.remove("is-pressed");
  const onLeave=()=>{brush.classList.add("is-hidden");previous=null;};
  const onEnter=()=>brush.classList.remove("is-hidden");
  window.addEventListener("pointermove",onMove,{passive:true});
  window.addEventListener("pointerdown",onDown);
  window.addEventListener("pointerup",onUp);
  window.addEventListener("resize",resizeCanvas);
  document.addEventListener("mouseleave",onLeave);
  document.addEventListener("mouseenter",onEnter);
  return()=>{
   window.removeEventListener("pointermove",onMove);
   window.removeEventListener("pointerdown",onDown);
   window.removeEventListener("pointerup",onUp);
   window.removeEventListener("resize",resizeCanvas);
   document.removeEventListener("mouseleave",onLeave);
   document.removeEventListener("mouseenter",onEnter);
   if(clearTimer)window.clearTimeout(clearTimer);
   if(fadeTimer)window.clearTimeout(fadeTimer);
   if(raf)cancelAnimationFrame(raf);
   canvas.remove();brush.remove();
  };
 },[]);
 useEffect(()=>{document.body.classList.toggle("bankai-mode",bankai);return()=>document.body.classList.remove("bankai-mode")},[bankai]);
 useEffect(()=>{
  if(!bankaiTransition)return;
  document.body.classList.add("bankai-transitioning");
  const timer=window.setTimeout(()=>setBankaiTransition(""),1380);
  return()=>{
   window.clearTimeout(timer);
   document.body.classList.remove("bankai-transitioning");
  };
 },[bankaiTransition]);
 const toggleBankai=()=>{
  const next=!bankai;
  setBankaiTransition(next?"release":"restore");
  setBankai(next);
 };
 const close=()=>setMenu(false);
 return <>
<div className="book-opening" aria-hidden="true"><div className="book-opening-cover book-opening-left"><span>巻物</span></div><div className="book-opening-cover book-opening-right"><span>01</span></div><div className="book-opening-seal">✦</div></div>
  {bankaiTransition&&<div className={"bankai-transition-overlay "+bankaiTransition} aria-hidden="true"><div className="bankai-transition-wash"/><div className="bankai-transition-slash"/><div className="bankai-transition-emblem"><span>卍解</span><i/></div><p>{bankaiTransition==="release"?"BANKAI · RELEASE":"RELEASE SEALED"}</p></div>}
  <div className="scroll-progress" style={{width:progress+"%"}}/>
  <header className="site-header"><a className="wordmark" href="#home" onClick={close}>SANCHAI<span>®</span></a><button className="menu-toggle" aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?"CLOSE −":"MENU +"}</button><nav className={menu?"nav-links open":"nav-links"} aria-label="Main navigation">{[["KNOW ME","#about"],["WORK","#work"],["TECH STACK","#skills"],["JOURNEY","#journey"]].map(([t,h])=><a key={t} href={h} onClick={close}>{t}</a>)}<a className="nav-contact" href="#contact" onClick={close}>SET UP A MEET ↗</a></nav><button className={"bankai-toggle"+(bankai?" active":"")} type="button" aria-pressed={bankai} onClick={toggleBankai}><span className="bankai-sigil">✦</span>{bankai?"BANKAI ON":"BANKAI MODE"}</button></header>
  <main id="home" ref={scrollTrack} tabIndex={0} aria-label="Portfolio handscroll">
   <section className="hero"><div className="hero-grain"/><div className="hero-meta"><span>VOLUME 01 / 2026</span><span>MANGA NOTES · SOFTWARE · AI / ML</span></div>
    <div className="hero-layout"><div className="hero-copy"><div className="eyebrow"><i/> COMPUTER SCIENCE · AI & MACHINE LEARNING</div><h1>TURNING<br/><span className="outline">IDEAS INTO</span><br/><span className="red-word">INTELLIGENCE.</span></h1><p className="hero-intro">I'm <strong>Sanchai K B</strong> — a Computer Science and Engineering student building at the intersection of artificial intelligence, software engineering and meaningful products.</p><div className="hero-actions"><a className="button button-red" href="#work">EXPLORE MY WORK <span>↘</span></a><a className="button button-ghost" href="mailto:kbsanchai12@gmail.com">LET'S CONNECT <span>↗</span></a></div><div className="hero-social"><a href={GH} target="_blank" rel="noreferrer">GITHUB ↗</a><a href="mailto:kbsanchai12@gmail.com">EMAIL ↗</a><a href="tel:+919150672408">PHONE ↗</a></div></div>
     <div className="hero-scene" aria-hidden="true"><div className="hero-state-stage"><img className="hero-state-image hero-state-before" src={portfolioImage("01-hero-normal.webp")} alt="" fetchPriority="high"/><img className="hero-state-image hero-state-bankai" src={portfolioImage("01-hero-bankai.webp")} alt="" fetchPriority="high"/></div></div>
    </div><div className="hero-bottom"><span>INK THE IDEA. BUILD THE FUTURE.</span><a href="#about">TURN THE PAGE <b>↓</b></a></div><div className="hero-vertical">TECH STACK • PYTHON • REACT • AI / ML • FASTAPI • DOCKER</div>
   </section>
   <div className="marquee"><div>{Array.from({length:2},(_,i)=><span key={i}>ARTIFICIAL INTELLIGENCE <b>✳</b> COMPUTER VISION <b>✳</b> GENERATIVE AI <b>✳</b> FULL-STACK DEVELOPMENT <b>✳</b> LOCAL-FIRST SOFTWARE <b>✳</b> </span>)}</div></div>
   <section className="section about-section" id="about"><div className="section-label reveal"><span>01 / THE PERSON BEHIND THE PIXELS</span><span>PROFILE</span></div><div className="about-layout"><div className="about-title reveal"><p className="eyebrow">A LITTLE ABOUT ME</p><h2>CURIOUS<br/>BY NATURE.<br/><em>BUILDER</em><br/>BY CHOICE.</h2><div className="about-japanese">探求 · 創造 · 進化</div></div><div className="about-content reveal"><p className="about-statement">I turn complex ideas into <em>clear, useful experiences.</em></p><p className="about-body">From building local-first AI tools to developing computer-vision systems and full-stack applications, I enjoy taking ideas from experimentation to software people can actually use.</p><div className="about-details"><div><span>EDUCATION</span><strong>B.Tech — CSE (AI & ML)</strong><small>SRM Institute of Science and Technology · 2023–2027</small></div><div><span>BASED IN</span><strong>Chennai, India</strong><small>English · Tamil · Hindi</small></div></div><div className="about-links"><a href={GH} target="_blank" rel="noreferrer">GITHUB PROFILE ↗</a><a href="mailto:kbsanchai12@gmail.com">KBSANCHAI12@GMAIL.COM ↗</a></div></div></div><div className="stat-strip reveal"><div><strong>08</strong><span>PROJECTS FEATURED</span></div><div><strong>02</strong><span>INTERNSHIPS</span></div><div><strong>04</strong><span>HACKATHON HIGHLIGHTS</span></div><div><strong>05+</strong><span>AI / SOFTWARE DOMAINS</span></div></div></section>
   <section className="section projects-section" id="work"><div className="section-label reveal"><span>02 / SELECTED WORK</span><span>PROJECT ARCHIVE · 2024—2026</span></div><div className="section-heading reveal"><h2>BUILT WITH<br/><em>INTENTION.</em></h2><p>A collection of AI experiments, software products and engineering projects. Open a repository to explore the implementation.</p></div><div className="filter-row reveal" role="group" aria-label="Filter projects">{filters.map(x=><button key={x} className={filter===x?"filter active":"filter"} onClick={()=>setFilter(x)}>{x!=="ALL"&&<Crest type={x} size={16}/>}<span>{x}</span></button>)}</div><div className="projects-grid">{visible.map(p=><article className={"project-card reveal theme-"+p.theme} key={p.id}><div className={"project-art"+(suppliedProjectArt[p.id]?" project-art-supplied":"")}><div className="project-art-orbit"/><Crest type={p.cat} size={27} className="project-crest"/><span className="project-art-mark">{p.mark}</span><span className="project-art-no">{p.no} / 08</span><span className="project-art-line"/>{suppliedProjectArt[p.id]?<><img className="project-uploaded-art project-uploaded-normal" src={portfolioImage(suppliedProjectArt[p.id].normal)} alt="" aria-hidden="true" loading="lazy" decoding="async"/><img className="project-uploaded-art project-uploaded-bankai" src={portfolioImage(suppliedProjectArt[p.id].bankai)} alt="" aria-hidden="true" loading="lazy" decoding="async"/></>:<img className="bleach-project-character" src={bleachProjectArt[p.id].src} alt="" aria-hidden="true" loading="lazy" decoding="async"/>}</div><div className="project-info"><div className="project-meta"><span>{p.cat}</span><span>{p.year}</span></div><h3>{p.title}</h3><p className="project-subtitle">{p.sub}</p><p className="project-description">{p.desc}</p><div className="project-stack">{p.stack.map(tag=><span key={tag}>{tag}</span>)}</div>{p.repo?<a className="project-link" href={p.repo} target="_blank" rel="noreferrer">{p.label} <span>↗</span></a>:<span className="project-private">{p.label}</span>}</div></article>)}</div><div className="all-repos reveal"><span>MORE CODE, EXPERIMENTS & NOTES</span><a href="https://github.com/KBSanchai?tab=repositories" target="_blank" rel="noreferrer">EXPLORE ALL GITHUB REPOSITORIES ↗</a></div></section>
   <section className="section skills-section" id="skills"><div className="section-label reveal"><span>03 / TECHNICAL ARSENAL</span><span>TOOLS & TECHNOLOGIES</span></div><div className="section-heading reveal"><h2>TOOLS OF<br/><em>THE TRADE.</em></h2><p>A growing toolkit for prototyping ideas, building intelligent systems and shipping working software.</p></div><div className="skills-list">{skills.map(([name,items],i)=><div className="skill-row reveal" key={name}><div className="skill-number"><span>0{i+1}</span><Crest type={skillCrest[name]} size={27}/></div><h3>{name}</h3><div className="skill-chips">{items.map(x=><span key={x}>{x}</span>)}</div></div>)}</div></section>
   <section className="section journey-section" id="journey"><div className="section-label reveal"><span>04 / THE JOURNEY</span><span>EXPERIENCE & EDUCATION</span></div><div className="section-heading reveal"><h2>LEARNING<br/><em>BY BUILDING.</em></h2><p>Professional experience, academic foundations and the moments that made the journey memorable.</p></div><div className="timeline">{jobs.map((j,i)=><div className="timeline-item reveal" key={j[2]}><div className="timeline-date">{j[0]}</div><div className="timeline-content"><span>INTERNSHIP / 0{i+1}</span><h3>{j[1]}</h3><h4>{j[2]}</h4><p>{j[3]}</p></div><div className="timeline-symbol">職</div></div>)}</div><div className="education-block reveal"><div className="eyebrow">EDUCATION</div>{education.map(e=><div className="education-row" key={e[1]}><span>{e[0]}</span><div><h3>{e[1]}</h3><p>{e[2]}</p></div></div>)}</div></section>
   <section className="section honours-section"><div className="section-label reveal"><span>05 / RECOGNITION</span><span>CERTIFICATIONS & ACHIEVEMENTS</span></div><div className="honours-layout"><div className="honours-heading reveal"><h2>ALWAYS<br/><em>LEVELING UP.</em></h2><p>Stay curious. Keep learning. Make the next version better.</p></div><div className="honours-content"><div className="eyebrow reveal">CERTIFICATIONS</div><div className="cert-list">{certs.map(([name,date,detail],i)=><div className="cert-row reveal" key={name}><span>0{i+1}</span><div><strong>{name}</strong>{detail&&<small>{detail}</small>}</div><time>{date}</time></div>)}</div><div className="eyebrow achievement-label reveal">HACKATHONS & ACHIEVEMENTS</div><div className="achievement-list">{awards.map(([name,date,place],i)=><div className="achievement-row reveal" key={name}><span>{date}</span><div><strong>{name}</strong><small>{place}</small></div>{i===0&&<b className="achievement-rank">03</b>}</div>)}</div></div></div></section>
   <section className="contact-section" id="contact"><div className="contact-backdrop"><div className="contact-sun"/><div className="contact-kanji">終</div></div><div className="contact-inner"><div className="section-label reveal"><span>06 / YOUR MOVE</span><span>OPEN TO WHAT'S NEXT</span></div><p className="eyebrow reveal">HAVE A GOOD IDEA?</p><h2 className="reveal">LET'S MAKE<br/><em>IT REAL.</em></h2><div className="contact-bottom reveal"><p>Interested in AI, software engineering or building something useful together? I'd love to hear from you.</p><div className="contact-links"><a href="mailto:kbsanchai12@gmail.com">KBSANCHAI12@GMAIL.COM ↗</a><a href="tel:+919150672408">+91 91506 72408 ↗</a><a href={GH} target="_blank" rel="noreferrer">GITHUB PROFILE ↗</a></div></div></div></section>
  <footer className="site-footer"><a className="footer-logo" href="#home">SANCHAI<span>®</span></a><span>CHENNAI, INDIA · ENGLISH / TAMIL / HINDI</span><a href="#home">BACK TO TOP ↑</a><small>© {new Date().getFullYear()} SANCHAI K B · BUILT WITH CURIOSITY</small></footer>
  </main>
 </>;
}
export default App;

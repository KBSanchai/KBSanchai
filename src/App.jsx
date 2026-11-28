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
  if(!finePointer.matches)return;
  const cursor=document.createElement("img");
  cursor.className="kon-cursor";
  cursor.src="data:image/webp;base64,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";
  cursor.alt="";
  cursor.draggable=false;
  cursor.setAttribute("aria-hidden","true");
  document.body.appendChild(cursor);
  const onMove=e=>{
   if(e.pointerType==="touch")return;
   cursor.style.transform="translate3d("+(e.clientX-18)+"px,"+(e.clientY-16)+"px,0)";
   cursor.classList.toggle("is-interactive",!!e.target.closest("a,button,[role='button'],.project-card,.filter"));
   cursor.classList.add("is-visible");
  };
  const onDown=()=>cursor.classList.add("is-pressed");
  const onUp=()=>cursor.classList.remove("is-pressed");
  const onLeave=()=>cursor.classList.remove("is-visible");
  const onEnter=()=>cursor.classList.add("is-visible");
  window.addEventListener("pointermove",onMove,{passive:true});
  window.addEventListener("pointerdown",onDown);
  window.addEventListener("pointerup",onUp);
  document.addEventListener("mouseleave",onLeave);
  document.addEventListener("mouseenter",onEnter);
  return()=>{
   window.removeEventListener("pointermove",onMove);
   window.removeEventListener("pointerdown",onDown);
   window.removeEventListener("pointerup",onUp);
   document.removeEventListener("mouseleave",onLeave);
   document.removeEventListener("mouseenter",onEnter);
   cursor.remove();
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

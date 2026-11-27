import { useEffect, useState } from "react";
import "./styles.css";

const projects = [
  { n:"01", title:"DocGen", type:"OFFLINE AI / DESKTOP", date:"JUN — AUG 2026", desc:"An offline AI desktop application for automating business document workflows, extracting structured fields, and generating polished documents.", stack:["FastAPI","React","Electron","Ollama","SQLite"], symbol:"文", color:"red" },
  { n:"02", title:"Agro AI Assistant", type:"COMPUTER VISION / AGRITECH", date:"2026", desc:"A vision-based assistant for identifying crop diseases and insects to support more informed pesticide and fertilizer decisions.", stack:["Python","PyTorch","ResNet18","Roboflow","Supabase"], symbol:"葉", color:"green" },
  { n:"03", title:"Cattle & Buffalo RAG", type:"RETRIEVAL-AUGMENTED GENERATION", date:"2026", desc:"A document-grounded assistant that answers cattle and buffalo domain questions using a PDF knowledge base and a local language model.", stack:["LangChain","Ollama","FAISS","FastAPI","Flutter"], symbol:"牛", color:"white" },
  { n:"04", title:"Sign Language Detection", type:"AI / ACCESSIBILITY", date:"2026", desc:"A sign-language detection and translation system developed with a reported 98.3% accuracy, designed to make communication more accessible.", stack:["Python","Deep Learning","Computer Vision"], symbol:"手", color:"red" }
];
const skillGroups = [
  ["LANGUAGES",["Python","Java","C","C++","SQL"]],
  ["AI / MACHINE LEARNING",["Machine Learning","Deep Learning","Computer Vision","LLMs","RAG","TensorFlow","PyTorch"]],
  ["DEVELOPMENT",["React","FastAPI","Flutter","Electron","REST APIs"]],
  ["TOOLS & CLOUD",["Git","Docker","Jenkins","AWS","GCP","Ollama","MySQL","SQLite"]]
];
const experience = [
  ["2026","Developer Intern — DocGen","Built an offline AI document automation workflow with FastAPI, React, local LLMs and a desktop interface.","ACA Technologies"],
  ["2023 — 2027","B.Tech — CSE, AI & ML","SRM Institute of Science and Technology. Focused on AI, machine learning and computational intelligence.","SRMIST"],
  ["2025","Salesforce Agentforce Specialist","Earned the Salesforce Certified Agentforce Specialist credential.","CERTIFICATION"]
];
const certs = ["Salesforce Certified Agentforce Specialist","AWS Academy Graduate — Data Engineering","Generative AI Foundations","Google Cloud Computing Foundations","Cloud-Based CRM and SaaS Internship"];
function Reveal({children, className=""}) {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal:not(.seen)");
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add("seen"); io.unobserve(e.target); }
    }), {threshold:.12});
    nodes.forEach(n=>io.observe(n));
    return ()=>io.disconnect();
  },[]);
  return <div className={"reveal "+className}>{children}</div>;
}
function App(){
  const [menu,setMenu]=useState(false);
  const [active,setActive]=useState("ALL");
  useEffect(()=>{
    const onScroll=()=>document.body.classList.toggle("is-scrolled",window.scrollY>20);
    window.addEventListener("scroll",onScroll,{passive:true});
    return ()=>window.removeEventListener("scroll",onScroll);
  },[]);
  const filtered=active==="ALL"?projects:projects.filter(p=>p.type.includes(active));
  return <>
    <header className="site-header"><a className="wordmark" href="#home">SANCHAI<span>®</span></a>
      <button className="menu-toggle" onClick={()=>setMenu(!menu)}>{menu?"CLOSE −":"MENU +"}</button>
      <nav className={menu?"nav-links open":"nav-links"}>{[["ABOUT","#about"],["WORK","#work"],["ARSENAL","#skills"],["JOURNEY","#journey"]].map(([t,l])=><a key={t} href={l} onClick={()=>setMenu(false)}>{t}</a>)}<a className="nav-contact" href="#contact" onClick={()=>setMenu(false)}>LET'S TALK ↗</a></nav>
    </header>
    <main id="home">
      <section className="hero">
        <div className="hero-top"><span>PORTFOLIO / 2026</span><span>AI ENGINEERING · CREATIVE TECHNOLOGY</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><i/> A DEVELOPER WITH A CREATOR'S MINDSET</div>
            <h1>MAKING<br/><span className="outline">IDEAS</span><br/><span className="accent">INTELLIGENT.</span></h1>
            <p>I'm <b>Sanchai K B</b> — a computer science student building at the intersection of artificial intelligence, software engineering, and human-centred ideas.</p>
            <div className="hero-actions"><a className="button button-red" href="#work">EXPLORE MY WORK <span>↘</span></a><a className="button button-ghost" href="#contact">LET'S CONNECT <span>↗</span></a></div>
          </div>
          <div className="hero-visual">
            <div className="visual-index">SOUL SOCIETY<br/><b>CREATIVE DIVISION</b></div>
            <div className="moon"/>
            <div className="cityline"/>
            <div className="hero-figure"><div className="figure-hair"/><div className="figure-head"/><div className="figure-body"/><div className="figure-sash"/></div>
            <div className="blade-line"/>
            <div className="kanji">斬<br/><small>BANKAI</small></div>
            <div className="visual-bottom"><span>斬魄刀 / BUILDING WITH PURPOSE</span><span>NO. 001</span></div>
          </div>
        </div>
        <div className="hero-bottom"><span>THINK DEEPLY. BUILD BOLDLY.</span><a href="#about">SCROLL TO DISCOVER ↓</a></div>
      </section>
      <div className="marquee"><div>{Array.from({length:2},(_,i)=><span key={i}>ARTIFICIAL INTELLIGENCE <b>✳</b> COMPUTER VISION <b>✳</b> CREATIVE DEVELOPMENT <b>✳</b> LOCAL-FIRST AI <b>✳</b> </span>)}</div></div>
      <section className="section about" id="about"><div className="section-kicker">01 / THE PERSON BEHIND THE PIXELS</div><div className="about-grid"><h2>CURIOUS<br/>BY NATURE.<br/><em>BUILDER</em><br/>BY CHOICE.</h2><div className="about-content"><p className="large-copy">I turn complex ideas into <em>clear, useful experiences.</em> Whether it's a local language model, a computer-vision system, or a product workflow, I enjoy taking ideas from a rough sketch to something people can actually use.</p><div className="about-facts"><div><span>EDUCATION</span><b>B.Tech — CSE, AI & ML</b><small>SRM Institute of Science and Technology</small></div><div><span>BASED IN</span><b>Chennai, India</b><small>Open to opportunities & collaboration</small></div></div></div></div></section>
      <section className="section work" id="work"><div className="section-kicker">02 / SELECTED PROJECTS <span>2024 — 2026</span></div><div className="section-heading"><h2>WORK THAT<br/><em>SPEAKS.</em></h2><p>A selection of experiments and products where software meets real-world problems.</p></div>
        <div className="filters">{["ALL","AI","COMPUTER VISION","OFFLINE AI"].map(f=><button className={active===f?"selected":""} onClick={()=>setActive(f)} key={f}>{f}</button>)}</div>
        <div className="project-grid">{filtered.map(p=><article className={"project-card "+p.color} key={p.n}><div className="project-top"><span>PROJECT / {p.n}</span><span>{p.date}</span></div><div className="project-symbol">{p.symbol}</div><div className="project-type">{p.type}</div><h3>{p.title}</h3><p>{p.desc}</p><div className="stack">{p.stack.map(s=><span key={s}>{s}</span>)}</div><span className="project-arrow">↗</span></article>)}</div>
      </section>
      <section className="section skills" id="skills"><div className="section-kicker">03 / THE ARSENAL</div><div className="section-heading"><h2>TOOLS OF<br/><em>THE TRADE.</em></h2><p>Technologies I use to explore, prototype, and ship ideas.</p></div><div className="skill-list">{skillGroups.map(([name,items])=><div className="skill-row" key={name}><h3>{name}</h3><div>{items.map(s=><span key={s}>{s}</span>)}</div></div>)}</div></section>
      <section className="section journey" id="journey"><div className="section-kicker">04 / THE JOURNEY</div><div className="section-heading"><h2>STILL IN<br/><em>PROGRESS.</em></h2><p>Learning through building, collaboration, and a healthy amount of curiosity.</p></div><div className="timeline">{experience.map(([date,title,desc,place])=><div className="timeline-row" key={title}><span className="timeline-date">{date}</span><div><h3>{title}</h3><p>{desc}</p></div><span className="timeline-place">{place}</span></div>)}</div></section>
      <section className="section recognition"><div className="section-kicker">05 / CONTINUOUS LEARNING</div><h2>COLLECTING<br/><em>KNOWLEDGE.</em></h2><div className="cert-grid">{certs.map((c,i)=><div className="cert-item" key={c}><span>0{i+1}</span><b>{c}</b><i>↗</i></div>)}</div><div className="award"><span>HIGHLIGHT / 2024</span><p><b>3rd Place — SRM SDG Hackathon</b><br/>Recognised for an autonomous fertilizer drone project.</p></div></section>
      <section className="contact-section" id="contact"><div className="contact-inner"><div className="section-kicker">06 / YOUR MOVE</div><h2>HAVE A GOOD<br/>IDEA? LET'S<br/><em>MAKE IT REAL.</em></h2><div className="contact-bottom"><p>Interested in AI, product engineering, or building something useful together? My inbox is open.</p><a href="mailto:kbsanchai@gmail.com">KBSANCHAI@GMAIL.COM ↗</a></div><div className="contact-kanji">終</div></div></section>
    </main>
    <footer><span>© {new Date().getFullYear()} SANCHAI K B</span><span>DESIGNED WITH INTENT · BUILT WITH CURIOSITY</span><a href="#home">BACK TO TOP ↑</a></footer>
  </>;
}
export default App;

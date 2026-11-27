import React, { useEffect, useState } from "react";
import "./styles.css";

const links = {
  github: "https://github.com/KBSanchai",
  docgen: "https://github.com/KBSanchai",
  agro: "https://github.com/KBSanchai/crop-insect-classifier",
  image: "https://github.com/KBSanchai/Image-Classification-App-with-DIP-Enhancements-Ollama-and-PDF-Export",
  cattle: "https://github.com/KBSanchai",
  chatbot: "https://github.com/KBSanchai/LLM-Chatbot-with-MySQL"
};
const projects = [
  { n:"01", title:"DocGen", type:"OFFLINE AI / DESKTOP", date:"JUN — AUG 2026", desc:"A local-first Windows desktop app that automates business document workflows. Built PO field extraction with PDF/DOCX parsing, Tesseract OCR and an on-device Ollama model, plus template-driven PDF/DOCX generation and workflow modules.", stack:["Electron","React","TypeScript","FastAPI","Ollama","SQLite"], symbol:"文", color:"red", href:links.docgen, linkLabel:"GITHUB PROFILE" },
  { n:"02", title:"Intelligent Pesticide & Fertilizer Sprinkling System", type:"COMPUTER VISION / IOT", date:"PROJECT", desc:"Classifies plant diseases and crop insects using computer vision and deep learning, then supports targeted sprinkling based on detected conditions instead of blanket spraying.", stack:["Python","Computer Vision","Deep Learning","IoT"], symbol:"葉", color:"green", href:links.agro, linkLabel:"VIEW CLASSIFIER REPO" },
  { n:"03", title:"Image Classification App", type:"DIP / OPENCLIP / GENERATIVE AI", date:"PROJECT", desc:"A Streamlit app combining digital image processing filters, OpenCLIP image classification, Ollama (LLaMA 3.2) explanations and PDF report export.", stack:["Python","Streamlit","PyTorch","OpenCLIP","OpenCV","Ollama"], symbol:"映", color:"white", href:links.image, linkLabel:"VIEW SOURCE CODE" },
  { n:"04", title:"Cattle Breed Detection", type:"MOBILE AI / COMPUTER VISION", date:"PROJECT", desc:"A cross-platform Flutter app for image-based cattle breed identification, using a TensorFlow model served through FastAPI with Firebase integration.", stack:["Flutter","TensorFlow","Firebase","FastAPI"], symbol:"牛", color:"red", href:links.cattle, linkLabel:"GITHUB PROFILE" },
  { n:"05", title:"AI Chatbot", type:"LOCAL LLM / DATABASE", date:"PROJECT", desc:"A locally hosted Gradio chatbot powered by TinyLLaMA and connected to MySQL to query stored data through natural-language prompts.", stack:["Python","Gradio","TinyLLaMA","MySQL"], symbol:"対", color:"white", href:links.chatbot, linkLabel:"VIEW SOURCE CODE" }
];
const skillGroups = [
  ["LANGUAGES",["C","C++","Java","Python"]],
  ["FRONTEND / BACKEND",["React.js","Node.js","Tailwind CSS","Next.js","REST APIs"]],
  ["CLOUD / DEVOPS / DATABASES",["AWS","Google Cloud","Docker","MySQL","Supabase"]],
  ["AI / MACHINE LEARNING",["LLM APIs","Multi-Agent Systems","Generative AI"]],
  ["TOOLS",["Git","GitHub","Figma","VS Code"]]
];
const experience = [
  ["JUN — AUG 2026","Software Intern","ACA Technologies · Chennai, India","Built DocGen, a local-first Windows desktop app with Electron, React, TypeScript and FastAPI. Implemented PO extraction using PDF/DOCX parsing, Tesseract OCR and Ollama; developed document generation and trainer, intern and finance modules with SMTP email."],
  ["MAY — JUN 2025","Software Intern","Stabilitas Pvt Ltd · Tirupati, India","Built a drone-based precision agriculture dashboard with crop health analytics, NDVI stress detection and an AI chatbot."]
];
const education = [
  ["2023 — 2027","B.Tech in Computer Science and Engineering (AI & ML)","SRM Institute of Science and Technology · Chennai, India"],
  ["2017 — 2023","CBSE","Maharishi International Residential School · Kanchipuram, India"]
];
const certs = [
  ["Salesforce Certified Agentforce Specialist","DEC 2025","Credential ID: 7204077"],
  ["Cloud-Based CRM and SaaS with Internship — TechForce Academy Australia","AUG — NOV 2025",""],
  ["AWS Academy Graduate — Data Engineering","2026",""],
  ["Generative AI Foundations","2026",""],
  ["Google Cloud Computing Foundations Certificate","2026",""],
  ["Google Cloud Engineering Certificate","2026",""]
];
const achievements = [
  ["3rd Place — SRM SDG Hackathon","NOV 2024","School of Computing, SRMIST"],
  ["TechXcelerate Hackathon","MAR 2025","BITS Pilani, Hyderabad Campus"],
  ["IdeaSpark Hackathon","MAR 2025","Founders Club, SRMIST, Chennai"],
  ["HACKRIX ’25 Open Innovation Hackathon","OCT 2025","Department of Computational Intelligence & Techvantage, SRMIST"]
];
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
      <section className="hero"><div className="hero-top"><span>PORTFOLIO / 2026</span><span>AI ENGINEERING · CREATIVE TECHNOLOGY</span></div>
        <div className="hero-grid"><div className="hero-copy"><div className="eyebrow"><i/> SOFTWARE · AI / ML · PRODUCT BUILDER</div>
          <h1>MAKING<br/><span className="outline">IDEAS</span><br/><span className="accent">INTELLIGENT.</span></h1>
          <p>I'm <b>Sanchai K B</b> — a Computer Science and Engineering student specialising in AI & Machine Learning, building useful software across AI, full-stack development and automation.</p>
          <div className="hero-actions"><a className="button button-red" href="#work">EXPLORE MY WORK <span>↘</span></a><a className="button button-ghost" href="mailto:kbsanchai12@gmail.com">CONTACT ME <span>↗</span></a></div>
          <div className="hero-social"><a href={links.github} target="_blank" rel="noreferrer">GITHUB ↗</a><a href="mailto:kbsanchai12@gmail.com">EMAIL ↗</a><a href="tel:+919150672408">PHONE ↗</a></div>
        </div>
        <div className="hero-visual"><div className="visual-index">SOUL SOCIETY<br/><b>CREATIVE DIVISION</b></div><div className="moon"/><div className="cityline"/><div className="hero-figure"><div className="figure-hair"/><div className="figure-head"/><div className="figure-body"/><div className="figure-sash"/></div><div className="blade-line"/><div className="kanji">斬<br/><small>BANKAI</small></div><div className="visual-bottom"><span>斬魄刀 / BUILDING WITH PURPOSE</span><span>NO. 001</span></div></div></div>
        <div className="hero-bottom"><span>THINK DEEPLY. BUILD BOLDLY.</span><a href="#about">SCROLL TO DISCOVER ↓</a></div>
      </section>
      <div className="marquee"><div>{Array.from({length:2},(_,i)=><span key={i}>ARTIFICIAL INTELLIGENCE <b>✳</b> COMPUTER VISION <b>✳</b> FULL-STACK DEVELOPMENT <b>✳</b> GENERATIVE AI <b>✳</b> </span>)}</div></div>
      <section className="section about" id="about"><div className="section-kicker">01 / PROFILE</div><div className="about-grid"><h2>CURIOUS<br/>BY NATURE.<br/><em>BUILDER</em><br/>BY CHOICE.</h2><div className="about-content"><p className="large-copy">I build practical software with a focus on <em>AI, automation and thoughtful engineering.</em> I enjoy taking ideas from experimentation to working applications — from local-first AI tools to computer-vision systems.</p><div className="about-facts"><div><span>EDUCATION</span><b>B.Tech — CSE (AI & ML)</b><small>SRM Institute of Science and Technology · 2023–2027</small></div><div><span>LOCATION</span><b>Chennai, India</b><small>English · Tamil · Hindi</small></div></div><div className="profile-links"><a href={links.github} target="_blank" rel="noreferrer">GITHUB PROFILE ↗</a><a href="mailto:kbsanchai12@gmail.com">KBSANCHAI12@GMAIL.COM ↗</a></div></div></div></section>
      <section className="section work" id="work"><div className="section-kicker">02 / PROJECTS <span>SELECTED FROM RESUME</span></div><div className="section-heading"><h2>WORK THAT<br/><em>SPEAKS.</em></h2><p>Five projects spanning offline AI, computer vision, image processing, mobile applications and natural-language interfaces.</p></div>
        <div className="filters">{["ALL","AI","COMPUTER VISION","OFFLINE AI"].map(f=><button className={active===f?"selected":""} onClick={()=>setActive(f)} key={f}>{f}</button>)}</div>
        <div className="project-grid">{filtered.map(p=><article className={"project-card "+p.color} key={p.n}><div className="project-top"><span>PROJECT / {p.n}</span><span>{p.date}</span></div><div className="project-symbol">{p.symbol}</div><div className="project-type">{p.type}</div><h3>{p.title}</h3><p>{p.desc}</p><div className="stack">{p.stack.map(s=><span key={s}>{s}</span>)}</div><a className="project-link" href={p.href} target="_blank" rel="noreferrer">{p.linkLabel} ↗</a></article>)}</div>
      </section>
      <section className="section skills" id="skills"><div className="section-kicker">03 / TECHNICAL SKILLS</div><div className="section-heading"><h2>TOOLS OF<br/><em>THE TRADE.</em></h2><p>Technologies and tools listed in my resume.</p></div><div className="skill-list">{skillGroups.map(([name,items])=><div className="skill-row" key={name}><h3>{name}</h3><div>{items.map(s=><span key={s}>{s}</span>)}</div></div>)}</div></section>
      <section className="section journey" id="journey"><div className="section-kicker">04 / EXPERIENCE & EDUCATION</div><div className="section-heading"><h2>LEARNING<br/><em>BY BUILDING.</em></h2><p>Professional experience and academic foundations.</p></div><div className="timeline">{experience.map(([date,title,place,desc])=><div className="timeline-row" key={title}><span className="timeline-date">{date}</span><div><h3>{title}</h3><b className="timeline-company">{place}</b><p>{desc}</p></div></div>)}</div><div className="education-list"><div className="section-kicker">EDUCATION</div>{education.map(([date,title,place])=><div className="timeline-row" key={title}><span className="timeline-date">{date}</span><div><h3>{title}</h3><b className="timeline-company">{place}</b></div></div>)}</div></section>
      <section className="section recognition"><div className="section-kicker">05 / CERTIFICATIONS & ACHIEVEMENTS</div><h2>ALWAYS<br/><em>LEVELING UP.</em></h2><div className="cert-grid">{certs.map(([name,date,detail],i)=><div className="cert-item" key={name}><span>0{i+1}</span><div><b>{name}</b><small>{detail}</small></div><time>{date}</time></div>)}</div><div className="award-list"><div className="section-kicker">HACKATHONS & RECOGNITION</div>{achievements.map(([name,date,place])=><div className="award" key={name}><span>{date}</span><p><b>{name}</b><br/>{place}</p></div>)}</div></section>
      <section className="contact-section" id="contact"><div className="contact-inner"><div className="section-kicker">06 / GET IN TOUCH</div><h2>HAVE A GOOD<br/>IDEA? LET'S<br/><em>MAKE IT REAL.</em></h2><div className="contact-bottom"><p>Interested in AI, software engineering, or building something useful together? Let's connect.</p><div className="contact-links"><a href="mailto:kbsanchai12@gmail.com">KBSANCHAI12@GMAIL.COM ↗</a><a href="tel:+919150672408">+91 91506 72408 ↗</a><a href={links.github} target="_blank" rel="noreferrer">GITHUB PROFILE ↗</a></div></div><div className="contact-kanji">終</div></div></section>
    </main>
    <footer><span>© {new Date().getFullYear()} SANCHAI K B</span><span>ENGLISH · TAMIL · HINDI</span><a href="#home">BACK TO TOP ↑</a></footer>
  </>;
}
export default App;

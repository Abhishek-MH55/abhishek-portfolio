import { useState, useEffect } from "react";

const LOGO_B64 = "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";

const EXPERIENCE = [
  { id:"01", role:"Integration Specialist", company:"Tata Consultancy Services", period:"Jul 2023 – Present", duration:"2 yrs 10 mos", location:"Paris, France", tags:["webMethods 10.x","AWS Solutions Architect","API Gateway","OpenAPI","REST","SOAP","webMethods.io","Datadog"], desc:"Leading integration architecture for enterprise clients in Europe. Designing end-to-end middleware solutions using webMethods 10.x, API Gateway, AWS, and OpenAPI standards. Implementing observability pipelines with Datadog across manufacturing and utility sectors." },
  { id:"02", role:"Integration Developer", company:"Tata Consultancy Services", period:"Aug 2019 – Jul 2023", duration:"4 yrs", location:"Mumbai, India", tags:["webMethods","Splunk","B2B Integration","EAI","SOA","Flow Services","Kafka","Solace"], desc:"Developed and maintained complex B2B and EAI integration solutions. Built Flow Services and SOAP/REST web services, handled migration projects across IBM and SAG components, and monitored system health using Splunk. Worked with event-driven messaging using Kafka and Solace." },
  { id:"03", role:"AWS Engineer", company:"Tata Consultancy Services", period:"Aug 2018 – Jul 2019", duration:"1 yr", location:"Mumbai, India", tags:["AWS","webMethods","Cloud Infrastructure","DevOps"], desc:"Managed AWS infrastructure and cloud environments supporting integration workloads. Deployed and maintained webMethods components on AWS, ensuring high availability and performance." },
  { id:"04", role:"System Administrator", company:"Tata Consultancy Services", period:"Aug 2017 – Jul 2018", duration:"1 yr", location:"Mumbai, India", tags:["System Administration","Shell Scripting","Linux"], desc:"Administered Linux-based systems, automated routine operations with shell scripting, and maintained infrastructure stability across enterprise environments." },
];

const SKILLS = [
  { category:"Integration & Middleware", items:["webMethods 10.x","Integration Server","API Gateway","webMethods Designer","webMethods.io","Flow Services","IBM MQ","IBM DataPower"] },
  { category:"APIs & Architecture", items:["OpenAPI / Swagger","REST APIs","SOAP","B2B Integration","EAI","SOA","Service Orchestration","Microservices"] },
  { category:"Cloud & Messaging", items:["AWS Solutions Architect","Azure","Kafka","Solace","Docker","DevOps","CI/CD","Linux"] },
  { category:"Monitoring & Tools", items:["Datadog","Splunk","API Management","Platform Admin","Solution Design","Migration Projects","Shell Scripting"] },
];

const CERTS = [
  { title:"IBM Certified Integration Developer", issuer:"IBM", icon:"◈" },
  { title:"IBM MQ Administrator", issuer:"IBM", icon:"◈" },
  { title:"webMethods API Management Professional", issuer:"Software AG", icon:"◈" },
  { title:"webMethods Platform Administrator", issuer:"Software AG", icon:"◈" },
  { title:"AWS Solutions Architect", issuer:"Amazon Web Services", icon:"⬡" },
  { title:"Azure Certified", issuer:"Microsoft", icon:"⬡" },
];

const BLOGS = [
  { id:"01", title:"Understanding webMethods Flow Services", date:"Mar 2026", readTime:"6 min read", tag:"Integration", excerpt:"A deep-dive into designing efficient Flow Services in webMethods Integration Server — patterns, best practices, and common pitfalls when building enterprise integrations.", href:"#" },
  { id:"02", title:"OpenAPI-First Design: Why It Matters", date:"Feb 2026", readTime:"5 min read", tag:"API Design", excerpt:"How adopting an OpenAPI-first approach transforms the way teams collaborate, document, and evolve APIs — with practical examples from real middleware projects.", href:"#" },
  { id:"03", title:"Kafka vs Solace: Choosing the Right Broker", date:"Jan 2026", readTime:"7 min read", tag:"Messaging", excerpt:"A practical comparison of Kafka and Solace for enterprise messaging — throughput, delivery guarantees, operational complexity, and when to use each.", href:"#" },
];

const LANGUAGES = [
  { lang:"English", level:"Fluent", pct:95 },
  { lang:"French",  level:"Conversational", pct:65 },
  { lang:"Hindi",   level:"Native", pct:100 },
  { lang:"Marathi", level:"Native", pct:100 },
];

const HOBBIES = [
  { icon:"🎵", label:"Music" },
  { icon:"📚", label:"Books" },
  { icon:"⚽", label:"Football" },
];

// ── SVG Icons ──
const IconWhatsApp  = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
const IconInstagram = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;
const IconGitHub    = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>;
const IconLinkedIn  = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const IconX         = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.636L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>;
const IconEmail     = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>;
const IconArrow     = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>;
const IconClock     = () => <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>;

const useScrollReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("revealed")),
      { threshold: 0.08 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [cur, setCur]   = useState({ x: -100, y: -100 });
  const [hov, setHov]   = useState(false);
  const [activeNav, setActiveNav] = useState("");
  useScrollReveal();

  useEffect(() => {
    const m = (e) => setCur({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", m);
    return () => window.removeEventListener("mousemove", m);
  }, []);

  // Inject CSS variables onto :root so ALL colors switch instantly on theme toggle
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--bg',       T.bg);
    root.style.setProperty('--surf',     T.surf);
    root.style.setProperty('--surfAlt',  T.surfAlt);
    root.style.setProperty('--border',   T.border);
    root.style.setProperty('--text',     T.text);
    root.style.setProperty('--muted',    T.muted);
    root.style.setProperty('--accent',   T.accent);
    root.style.setProperty('--accentSoft', T.accentSoft);
    root.style.setProperty('--accentGlow', T.accentGlow);
    root.style.setProperty('--tag',      T.tag);
    root.style.setProperty('--tagText',  T.tagText);
    document.body.style.background = T.bg;
    document.body.style.color = T.text;
  }, [dark]);

  useEffect(() => {
    const ids = ["home","experience","about","skills","certifications","blog","contact"];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveNav(e.target.id)),
      { threshold: 0.28 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const on = () => setHov(true), off = () => setHov(false);

  const T = dark ? {
    bg:"#080808", surf:"#0f0f0f", surfAlt:"#121212",
    border:"rgba(255,255,255,0.055)", text:"#edeae4",
    muted:"rgba(237,234,228,0.38)", accent:"#b5a07e",
    accentSoft:"rgba(181,160,126,0.07)", accentGlow:"rgba(181,160,126,0.14)",
    tag:"rgba(181,160,126,0.08)", tagText:"#b5a07e", navBg:"rgba(8,8,8,0.9)",
    progressBg:"rgba(255,255,255,0.06)",
  } : {
    bg:"#f4f1ec", surf:"#ffffff", surfAlt:"#ede9e2",
    border:"rgba(0,0,0,0.065)", text:"#18160f",
    muted:"rgba(24,22,15,0.42)", accent:"#7a5f38",
    accentSoft:"rgba(122,95,56,0.07)", accentGlow:"rgba(122,95,56,0.13)",
    tag:"rgba(122,95,56,0.08)", tagText:"#7a5f38", navBg:"rgba(244,241,236,0.92)",
    progressBg:"rgba(0,0,0,0.06)",
  };

  const SOCIAL = [
    { label:"WhatsApp",  href:"https://wa.me/919619458970",                  Icon:IconWhatsApp,  color:"#25D366" },
    { label:"Instagram", href:"https://instagram.com/abhi._mhatre/",        Icon:IconInstagram, color:"#E1306C" },
    { label:"GitHub",    href:"https://github.com/Abhishek-MH55",            Icon:IconGitHub,    color:T.text   },
    { label:"LinkedIn",  href:"https://linkedin.com/in/abhishekpmhatre",       Icon:IconLinkedIn,  color:"#0A66C2" },
    { label:"X",         href:"https://x.com/abhishekmhatre_",                Icon:IconX,         color:T.text   },
    { label:"Email",     href:"mailto:abhishekmhatre55@gmail.com",                  Icon:IconEmail,     color:T.accent },
  ];

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;1,300;1,400&family=JetBrains+Mono:wght@300;400&family=Outfit:wght@300;400;500&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    html{scroll-behavior:smooth}
    body{background:${T.bg};color:${T.text};font-family:'Outfit',sans-serif;font-weight:300;overflow-x:hidden;cursor:none;transition:background .5s,color .5s}
    h1,h2,h3,h4,h5,h6,p,span,div,li,a{color:inherit}
    ::selection{background:${T.accent}22;color:${T.accent}}
    a{text-decoration:none;color:inherit}

    .cdot{position:fixed;top:0;left:0;z-index:9999;pointer-events:none;width:7px;height:7px;border-radius:50%;background:${T.accent};transform:translate(-50%,-50%)}
    .cring{position:fixed;top:0;left:0;z-index:9998;pointer-events:none;width:32px;height:32px;border-radius:50%;border:1px solid ${T.accent}45;transform:translate(-50%,-50%);transition:all .3s cubic-bezier(.16,1,.3,1)}
    .cring.h{width:52px;height:52px;border-color:${T.accent}80}

    /* Nav */
    nav{position:fixed;top:0;left:0;right:0;z-index:200;display:flex;align-items:center;justify-content:space-between;padding:16px 52px;background:${T.navBg};backdrop-filter:blur(24px);border-bottom:1px solid ${T.border};transition:background .5s,border-color .5s}
    .logo-wrap{display:flex;align-items:center;gap:12px;cursor:none}
    .logo-img{width:36px;height:36px;border-radius:6px;object-fit:contain}
    .logo-text{font-family:'Playfair Display',serif;font-size:19px;font-weight:400;letter-spacing:.04em;color:${T.text};transition:color .5s}
    .logo-text span{color:${T.accent}}
    .nlinks{display:flex;gap:30px;list-style:none}
    .nlinks a{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:${T.muted};cursor:none;position:relative;transition:color .2s}
    .nlinks a.act,.nlinks a:hover{color:${T.text}}
    .nlinks a::after{content:'';position:absolute;bottom:-4px;left:0;right:100%;height:1px;background:${T.accent};transition:right .35s cubic-bezier(.16,1,.3,1)}
    .nlinks a.act::after,.nlinks a:hover::after{right:0}
    .nright{display:flex;align-items:center;gap:14px}
    .avail{display:flex;align-items:center;gap:7px;font-family:'JetBrains Mono',monospace;font-size:10px;color:${T.muted};letter-spacing:.05em}
    .adot{width:6px;height:6px;border-radius:50%;background:#4ade80;box-shadow:0 0 8px #4ade8055;animation:blink 2.5s ease-in-out infinite}
    @keyframes blink{0%,100%{opacity:1}50%{opacity:.35}}
    .tgl{width:44px;height:24px;border-radius:12px;border:1px solid ${T.border};background:${T.surf};cursor:none;position:relative;transition:background .4s;flex-shrink:0}
    .tglth{position:absolute;top:4px;left:${dark?"22px":"4px"};width:14px;height:14px;border-radius:50%;background:${T.accent};transition:left .3s cubic-bezier(.16,1,.3,1)}

    /* Floating social dock */
    .social-dock{position:fixed;left:20px;top:50%;transform:translateY(-50%);z-index:150;display:flex;flex-direction:column;gap:4px}
    .sdock-item{display:flex;align-items:center;cursor:none;position:relative}
    .sdock-icon{width:38px;height:38px;display:flex;align-items:center;justify-content:center;border:1px solid ${T.border};background:${T.surf};color:${T.muted};border-radius:2px;transition:all .25s cubic-bezier(.16,1,.3,1)}
    .sdock-item:hover .sdock-icon{border-color:var(--sc);color:var(--sc);transform:translateX(4px)}
    .sdock-label{position:absolute;left:46px;white-space:nowrap;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.06em;text-transform:uppercase;color:${T.text};background:${T.surf};border:1px solid ${T.border};padding:4px 9px;border-radius:2px;opacity:0;pointer-events:none;transform:translateX(-6px);transition:opacity .2s,transform .2s}
    .sdock-item:hover .sdock-label{opacity:1;transform:translateX(0)}

    /* Hero */
    .hero{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding:0 52px 88px;position:relative;overflow:hidden}
    .hgrid{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(${T.border} 1px,transparent 1px),linear-gradient(90deg,${T.border} 1px,transparent 1px);background-size:72px 72px;mask-image:radial-gradient(ellipse 75% 75% at 65% 55%,black 10%,transparent 100%);opacity:.55}
    .horb{position:absolute;top:12%;right:8%;width:440px;height:440px;border-radius:50%;background:radial-gradient(circle,${T.accent}10 0%,transparent 68%);pointer-events:none;animation:orb 7s ease-in-out infinite}
    /* Hero logo watermark */
    .hero-logo-bg{position:absolute;bottom:60px;right:52px;width:200px;height:200px;opacity:.04;pointer-events:none}
    @keyframes orb{0%,100%{transform:scale(1) translateY(0);opacity:.7}50%{transform:scale(1.08) translateY(-12px);opacity:1}}
    .hbadge{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${T.accent};margin-bottom:22px;opacity:0;animation:fu .8s .3s forwards;transition:color .5s}
    .hname{font-family:'Playfair Display',serif;font-size:clamp(58px,8.5vw,122px);font-weight:300;line-height:.92;letter-spacing:-.02em;color:${T.text};opacity:0;animation:fu .9s .5s forwards;transition:color .5s}
    .hname em{font-style:italic;color:${T.accent}}
    .htitle{font-size:clamp(14px,1.6vw,17px);color:${T.muted};margin-top:26px;max-width:520px;line-height:1.65;opacity:0;animation:fu .9s .7s forwards;transition:color .5s}
    .htitle strong{color:${T.text};font-weight:400}
    .hchips{display:flex;flex-wrap:wrap;gap:9px;margin-top:26px;opacity:0;animation:fu .9s .85s forwards}
    .chip{padding:6px 13px;border:1px solid ${T.border};border-radius:100px;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.05em;color:${T.muted};transition:border-color .2s,color .5s,background .5s}
    .chip:hover{border-color:${T.accent}55;color:${T.text}}
    .hctas{display:flex;align-items:center;gap:24px;margin-top:44px;opacity:0;animation:fu .9s 1s forwards}
    .btnp{display:inline-flex;align-items:center;gap:9px;padding:13px 26px;background:${T.accent};color:${T.bg};font-size:12px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;cursor:none;border-radius:2px;transition:transform .2s,box-shadow .2s}
    .btnp:hover{transform:translateY(-2px);box-shadow:0 14px 32px ${T.accentGlow}}
    .btng{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:${T.muted};cursor:none;transition:color .2s}
    .btng:hover{color:${T.text}}
    .hscroll{position:absolute;right:52px;bottom:88px;display:flex;flex-direction:column;align-items:center;gap:10px;font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:${T.muted};opacity:0;animation:fu .9s 1.2s forwards}
    .sbar{width:1px;height:56px;background:linear-gradient(to bottom,${T.accent},transparent);animation:sd 2.2s ease-in-out infinite}
    @keyframes sd{0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}51%{transform:scaleY(1);transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}
    @keyframes fu{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}

    section{padding:112px 52px;transition:background .5s,color .5s}
    .slabel{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:${T.accent};margin-bottom:14px;display:flex;align-items:center;gap:14px;transition:color .5s}
    .slabel::after{content:'';flex:1;max-width:60px;height:1px;background:${T.accent}38}
    .stitle{font-family:'Playfair Display',serif;font-size:clamp(34px,4.5vw,54px);font-weight:300;line-height:1.1;letter-spacing:-.01em;margin-bottom:52px;color:${T.text};transition:color .5s}
    .stitle em{font-style:italic;color:${T.accent}}

    /* Experience */
    #experience{background:${T.bg}}
    .explist{display:flex;flex-direction:column;position:relative}
    .explist::before{content:'';position:absolute;left:0;top:0;bottom:0;width:1px;background:linear-gradient(to bottom,transparent,${T.border} 8%,${T.border} 92%,transparent)}
    .exprow{padding:34px 0 34px 36px;border-bottom:1px solid ${T.border};display:grid;grid-template-columns:1fr auto;gap:24px;align-items:start;position:relative;cursor:default;transition:padding-left .3s cubic-bezier(.16,1,.3,1)}
    .exprow::before{content:'';position:absolute;left:-4.5px;top:42px;width:9px;height:9px;border-radius:50%;border:1.5px solid ${T.accent};background:${T.bg};transition:background .3s}
    .exprow:hover{padding-left:48px}
    .exprow:hover::before{background:${T.accent}}
    .erole{font-family:'Playfair Display',serif;font-size:22px;font-weight:400;color:${T.text};margin-bottom:4px;transition:color .5s}
    .exprow:hover .erole{color:${T.accent}}
    .eco{font-size:12px;color:${T.muted};margin-bottom:10px;font-family:'JetBrains Mono',monospace;letter-spacing:.04em}
    .eco span{color:${T.accent}44;margin:0 8px}
    .edesc{font-size:14px;line-height:1.7;color:${T.muted};max-width:580px;margin-bottom:14px;transition:color .5s}
    .etags{display:flex;flex-wrap:wrap;gap:8px}
    .tag{padding:4px 11px;background:${T.tag};color:${T.tagText};font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.04em;border-radius:100px}
    .emeta{text-align:right}
    .eperiod{font-family:'JetBrains Mono',monospace;font-size:11px;color:${T.muted};white-space:nowrap;margin-bottom:4px}
    .edur{font-size:12px;color:${T.muted}}

    /* About */
    #about{background:${T.surfAlt}}
    .agrid{display:grid;grid-template-columns:1.1fr 1fr;gap:80px;align-items:start}
    .abody p{font-size:15px;line-height:1.85;color:${T.muted};margin-bottom:17px;transition:color .5s}
    .abody p strong{color:${T.text};font-weight:400;transition:color .5s}
    .aright{display:flex;flex-direction:column;gap:28px}
    .astats{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .stat{padding:26px;border:1px solid ${T.border};background:${T.surf};border-radius:2px;transition:border-color .3s,transform .3s}
    .stat:hover{border-color:${T.accent}40;transform:translateY(-4px)}
    .statn{font-family:'Playfair Display',serif;font-size:44px;font-weight:300;color:${T.accent};line-height:1;transition:color .5s}
    .statl{font-size:12px;color:${T.muted};margin-top:7px;letter-spacing:.04em;transition:color .5s}

    /* Languages */
    .langs-block{padding:28px;border:1px solid ${T.border};background:${T.surf};border-radius:2px}
    .langs-title{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:${T.accent};margin-bottom:18px}
    .lang-row{margin-bottom:14px}
    .lang-row:last-child{margin-bottom:0}
    .lang-top{display:flex;justify-content:space-between;margin-bottom:6px;font-size:12px}
    .lang-name{color:${T.text};transition:color .5s}
    .lang-level{color:${T.muted};font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.04em}
    .lang-bar{height:2px;background:${T.progressBg};border-radius:1px;overflow:hidden}
    .lang-fill{height:100%;background:${T.accent};border-radius:1px;transition:width 1s cubic-bezier(.16,1,.3,1)}

    /* Hobbies */
    .hobbies-block{display:flex;gap:12px;flex-wrap:wrap}
    .hobby{display:flex;align-items:center;gap:9px;padding:10px 18px;border:1px solid ${T.border};background:${T.surf};border-radius:2px;font-size:13px;color:${T.muted};transition:border-color .2s,color .2s}
    .hobby:hover{border-color:${T.accent}44;color:${T.text}}
    .hobby-icon{font-size:18px}

    /* Skills */
    #skills{background:${T.bg}}
    .sgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:2px}
    .sgroup{padding:36px;background:${T.surf};transition:background .3s}
    .sgroup:hover{background:${T.surfAlt}}
    .scat{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:${T.accent};margin-bottom:17px}
    .sitems{display:flex;flex-wrap:wrap;gap:9px}
    .sitem{padding:7px 14px;border:1px solid ${T.border};font-size:12px;color:${T.muted};border-radius:1px;cursor:default;transition:border-color .2s,color .5s,background .5s}
    .sitem:hover{border-color:${T.accent}50;color:${T.text};background:${T.accentSoft}}

    /* Certifications */
    #certifications{background:${T.surfAlt}}
    .cgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:14px}
    .ccard{padding:26px 26px 26px 22px;border:1px solid ${T.border};background:${T.surf};border-radius:2px;display:flex;align-items:flex-start;gap:16px;transition:border-color .3s,transform .3s,background .3s}
    .ccard:hover{border-color:${T.accent}40;transform:translateY(-4px);background:${T.surfAlt}}
    .cicon{font-size:20px;color:${T.accent};line-height:1;margin-top:2px;flex-shrink:0}
    .ctitle{font-size:14px;color:${T.text};font-weight:400;margin-bottom:5px;line-height:1.4;transition:color .5s}
    .cissuer{font-family:'JetBrains Mono',monospace;font-size:10px;color:${T.muted};letter-spacing:.06em;text-transform:uppercase;transition:color .5s}

    /* Blog */
    #blog{background:${T.bg}}
    .bgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:2px}
    .bcard{padding:36px;background:${T.surf};position:relative;overflow:hidden;cursor:none;transition:background .3s}
    .bcard::after{content:'';position:absolute;left:0;top:0;bottom:0;width:0;background:${T.accent};transition:width .3s cubic-bezier(.16,1,.3,1)}
    .bcard:hover{background:${T.surfAlt}}
    .bcard:hover::after{width:3px}
    .bcard-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
    .btag{padding:4px 11px;background:${T.tag};color:${T.tagText};font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.04em;border-radius:100px}
    .bmeta{display:flex;align-items:center;gap:7px;font-family:'JetBrains Mono',monospace;font-size:10px;color:${T.muted}}
    .bnum{font-family:'JetBrains Mono',monospace;font-size:10px;color:${T.muted};margin-bottom:12px;letter-spacing:.08em}
    .btitle{font-family:'Playfair Display',serif;font-size:20px;font-weight:400;color:${T.text};margin-bottom:14px;line-height:1.3;transition:color .5s}
    .bcard:hover .btitle{color:${T.accent}}
    .bexcerpt{font-size:13px;line-height:1.7;color:${T.muted};margin-bottom:24px;transition:color .5s}
    .bread{display:inline-flex;align-items:center;gap:7px;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:${T.accent}}
    .bread svg{transition:transform .2s}
    .bcard:hover .bread svg{transform:translate(3px,-3px)}

    /* Contact */
    #contact{background:${T.surfAlt}}
    .cwrap{max-width:640px}
    .cline{font-family:'Playfair Display',serif;font-size:clamp(24px,3.5vw,42px);font-weight:300;line-height:1.3;margin-bottom:34px}
    .cline em{font-style:italic;color:${T.accent}}
    .csocial{display:flex;flex-wrap:wrap;gap:12px}
    .csoc-btn{display:flex;align-items:center;gap:10px;padding:12px 20px;border:1px solid ${T.border};font-size:12px;letter-spacing:.07em;text-transform:uppercase;color:${T.muted};cursor:none;transition:all .25s cubic-bezier(.16,1,.3,1);border-radius:2px}
    .csoc-btn:hover{border-color:var(--sc);color:var(--sc);background:${T.accentSoft};transform:translateY(-2px)}
    .csoc-label{font-size:11px;letter-spacing:.07em}

    /* Footer */
    footer{padding:26px 52px;border-top:1px solid ${T.border};display:flex;justify-content:space-between;align-items:center;background:${T.bg};transition:background .5s}
    .ft{font-family:'JetBrains Mono',monospace;font-size:10px;color:${T.muted};letter-spacing:.05em;transition:color .5s}
    .fsoc{display:flex;gap:14px;align-items:center}
    .fsoc a{color:${T.muted};transition:color .2s;cursor:none;display:flex;align-items:center}
    .fsoc a:hover{color:${T.accent}}
    .footer-logo{width:22px;height:22px;object-fit:contain;opacity:.4;transition:opacity .2s}
    .footer-logo:hover{opacity:.8}

    [data-reveal]{opacity:0;transform:translateY(26px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
    [data-reveal].revealed{opacity:1;transform:translateY(0)}
    [data-reveal][data-d="1"]{transition-delay:.1s}
    [data-reveal][data-d="2"]{transition-delay:.2s}
    [data-reveal][data-d="3"]{transition-delay:.3s}
    [data-reveal][data-d="4"]{transition-delay:.4s}

    @media(max-width:900px){
      nav{padding:16px 20px}
      .nlinks{display:none}
      .social-dock{display:none}
      section{padding:80px 20px}
      .hero{padding:0 20px 64px}
      .hscroll,.hero-logo-bg{display:none}
      .agrid{grid-template-columns:1fr;gap:40px}
      .sgrid{grid-template-columns:1fr}
      .exprow{grid-template-columns:1fr}
      .emeta{display:none}
      .bgrid{grid-template-columns:1fr}
      footer{flex-direction:column;gap:10px;padding:20px;text-align:center}
    }
  `;

  const NAV = ["Experience","About","Skills","Certifications","Blog","Contact"];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="cdot" style={{ left: cur.x, top: cur.y }} />
      <div className={`cring${hov?" h":""}`} style={{ left: cur.x, top: cur.y }} />

      {/* Floating Social Dock */}
      <div className="social-dock">
        {SOCIAL.map(({ label, href, Icon, color }) => (
          <div key={label} className="sdock-item" onMouseEnter={on} onMouseLeave={off}>
            <a href={href} target="_blank" rel="noreferrer" className="sdock-icon" style={{"--sc": color}}>
              <Icon />
            </a>
            <div className="sdock-label">{label}</div>
          </div>
        ))}
      </div>

      {/* Nav */}
      <nav>
        <a href="#home" className="logo-wrap" onMouseEnter={on} onMouseLeave={off}>
          <img src={`data:image/png;base64,${LOGO_B64}`} alt="AM" className="logo-img" />
          <div className="logo-text">Abhishek<span>.</span></div>
        </a>
        <ul className="nlinks">
          {NAV.map(n => (
            <li key={n}>
              <a href={`#${n.toLowerCase()}`}
                className={activeNav === n.toLowerCase() ? "act" : ""}
                onMouseEnter={on} onMouseLeave={off}>{n}
              </a>
            </li>
          ))}
        </ul>
        <div className="nright">
          <div className="avail"><div className="adot" />Open to Work</div>
          <button className="tgl" onClick={() => setDark(d => !d)}
            onMouseEnter={on} onMouseLeave={off} aria-label="Toggle theme">
            <div className="tglth" />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hgrid" />
        <div className="horb" />
        <img src={`data:image/png;base64,${LOGO_B64}`} alt="" className="hero-logo-bg" />
        <div className="hbadge">Integration Specialist · IBM &amp; AWS Certified</div>
        <h1 className="hname">Abhishek<br /><em>Mhatre</em></h1>
        <p className="htitle">
          <strong>Enterprise Integration Engineer</strong> with 8+ years at TCS —
          bridging systems through IBM middleware, webMethods, OpenAPI, and cloud architecture
          across manufacturing &amp; utility sectors.
        </p>
        <div className="hchips">
          {["IBM Certified","AWS Solutions Architect","Azure","webMethods 10.x","OpenAPI","Kafka · Solace","Datadog","8 yrs 9 mos @ TCS"].map(c=>(
            <span key={c} className="chip">{c}</span>
          ))}
        </div>
        <div className="hctas">
          <a href="#experience" className="btnp" onMouseEnter={on} onMouseLeave={off}>
            View Experience
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#contact" className="btng" onMouseEnter={on} onMouseLeave={off}>Get in touch →</a>
        </div>
        <div className="hscroll"><div className="sbar" />Scroll</div>
      </section>

      {/* Experience */}
      <section id="experience">
        <div className="slabel" data-reveal>Career</div>
        <h2 className="stitle" data-reveal data-d="1">8+ Years at <em>TCS</em></h2>
        <div className="explist">
          {EXPERIENCE.map((e, i) => (
            <div key={e.id} className="exprow" data-reveal data-d={String((i%3)+1)}>
              <div>
                <div className="erole">{e.role}</div>
                <div className="eco">{e.company}<span>·</span>{e.location}</div>
                <div className="edesc">{e.desc}</div>
                <div className="etags">{e.tags.map(t=><span key={t} className="tag">{t}</span>)}</div>
              </div>
              <div className="emeta">
                <div className="eperiod">{e.period}</div>
                <div className="edur">{e.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ background: T.surfAlt }}>
        <div className="slabel" data-reveal>About</div>
        <div className="agrid">
          <div className="abody" data-reveal data-d="1">
            <p>I'm <strong>Abhishek Mhatre</strong>, an IBM &amp; AWS Certified Integration Engineer with nearly a decade of delivering enterprise middleware solutions at <strong>Tata Consultancy Services</strong>.</p>
            <p>My expertise spans <strong>IBM middleware, webMethods, OpenAPI-first API design, B2B integrations, EAI, and SOA</strong> — serving manufacturing and utility clients across India and Europe. I work with event-driven platforms like <strong>Kafka and Solace</strong>, and monitor systems end-to-end with <strong>Datadog</strong>.</p>
            <p>Currently designing integration architectures for European clients from <strong>Paris, France</strong>. Passionate about clean, scalable, and observable integration systems.</p>
            <p>B.Tech from <strong>D Y Patil RAIT, Mumbai</strong>.</p>
          </div>
          <div className="aright" data-reveal data-d="2">
            <div className="astats">
              {[{n:"8+",l:"Years at TCS"},{n:"IBM",l:"Middleware Certified"},{n:"AWS",l:"Solutions Architect"},{n:"2",l:"Continents Worked"}].map(s=>(
                <div key={s.l} className="stat" onMouseEnter={on} onMouseLeave={off}>
                  <div className="statn">{s.n}</div>
                  <div className="statl">{s.l}</div>
                </div>
              ))}
            </div>
            {/* Languages */}
            <div className="langs-block">
              <div className="langs-title">Languages</div>
              {LANGUAGES.map(l => (
                <div key={l.lang} className="lang-row">
                  <div className="lang-top">
                    <span className="lang-name">{l.lang}</span>
                    <span className="lang-level">{l.level}</span>
                  </div>
                  <div className="lang-bar">
                    <div className="lang-fill" style={{ width: `${l.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            {/* Hobbies */}
            <div className="hobbies-block">
              {HOBBIES.map(h => (
                <div key={h.label} className="hobby" onMouseEnter={on} onMouseLeave={off}>
                  <span className="hobby-icon">{h.icon}</span>
                  {h.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="slabel" data-reveal>Expertise</div>
        <h2 className="stitle" data-reveal data-d="1">Technical <em>Skills</em></h2>
        <div className="sgrid" data-reveal data-d="2">
          {SKILLS.map(g=>(
            <div key={g.category} className="sgroup">
              <div className="scat">{g.category}</div>
              <div className="sitems">
                {g.items.map(item=>(
                  <span key={item} className="sitem" onMouseEnter={on} onMouseLeave={off}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" style={{ background: T.surfAlt }}>
        <div className="slabel" data-reveal>Credentials</div>
        <h2 className="stitle" data-reveal data-d="1">Certifications &amp; <em>Badges</em></h2>
        <div className="cgrid" data-reveal data-d="2">
          {CERTS.map(c=>(
            <div key={c.title} className="ccard" onMouseEnter={on} onMouseLeave={off}>
              <div className="cicon">{c.icon}</div>
              <div>
                <div className="ctitle">{c.title}</div>
                <div className="cissuer">{c.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section id="blog">
        <div className="slabel" data-reveal>Writing</div>
        <h2 className="stitle" data-reveal data-d="1">From the <em>Blog</em></h2>
        <div className="bgrid" data-reveal data-d="2">
          {BLOGS.map(b => (
            <a key={b.id} href={b.href} className="bcard" onMouseEnter={on} onMouseLeave={off}>
              <div className="bnum">{b.id}</div>
              <div className="bcard-top">
                <span className="btag">{b.tag}</span>
                <div className="bmeta"><IconClock /><span>{b.readTime}</span><span style={{opacity:.4}}>·</span><span>{b.date}</span></div>
              </div>
              <div className="btitle">{b.title}</div>
              <div className="bexcerpt">{b.excerpt}</div>
              <div className="bread">Read article <IconArrow /></div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ background: T.surfAlt }}>
        <div className="slabel" data-reveal>Contact</div>
        <div className="cwrap">
          <h2 className="cline" data-reveal data-d="1">
            Let's build something<br /><em>seamlessly connected.</em>
          </h2>
          <div className="csocial" data-reveal data-d="2">
            {SOCIAL.map(({ label, href, Icon, color }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className="csoc-btn" style={{"--sc": color}}
                onMouseEnter={on} onMouseLeave={off}>
                <Icon /><span className="csoc-label">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <span className="ft">© 2026 Abhishek Mhatre · Integration Specialist</span>
        <div className="fsoc">
          <img src={`data:image/png;base64,${LOGO_B64}`} alt="AM" className="footer-logo" />
          {SOCIAL.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" title={label} onMouseEnter={on} onMouseLeave={off}>
              <Icon />
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}

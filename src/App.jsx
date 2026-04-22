import { useState, useEffect } from "react";

const LOGO = "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";


const ADMIN_PASSWORD = "abhishek2026"; // ← change this to your own password

const EXP = [
  { id:"01", role:"Integration Specialist", co:"Tata Consultancy Services", period:"Jul 2023 – Present", dur:"2 yrs 10 mos", loc:"Paris, France", tags:["webMethods 10.x","AWS Solutions Architect","API Desingn and management","OpenAPI","REST","SOAP","Datadog"], desc:"Leading integration architecture for enterprise clients in Europe. Designing end-to-end middleware solutions using webMethods 10.x, API Gateway, AWS, and OpenAPI standards. Implementing observability pipelines with Datadog." },
  { id:"02", role:"Integration Developer", co:"Tata Consultancy Services", period:"Aug 2019 – Jul 2023", dur:"4 yrs", loc:"Mumbai, India", tags:["webMethods","Splunk","B2B","EAI","SOA","Kafka","Solace"], desc:"Developed B2B and EAI integration solutions. Built Flow Services and SOAP/REST web services, handled IBM/SAG migration projects, monitored health via Splunk. Used Kafka and Solace for event-driven messaging." },
  { id:"03", role:"AWS Engineer", co:"Tata Consultancy Services", period:"Aug 2018 – Jul 2019", dur:"1 yr", loc:"Mumbai, India", tags:["AWS","webMethods","Cloud","DevOps"], desc:"Managed AWS infrastructure supporting integration workloads. Deployed and maintained webMethods on AWS ensuring high availability." },
  { id:"04", role:"System Administrator", co:"Tata Consultancy Services", period:"Aug 2017 – Jul 2018", dur:"1 yr", loc:"Mumbai, India", tags:["Linux","Shell Scripting","System Administration","Java","Python","MySQL","ITIL"], desc:"Administered Linux systems, automated operations via shell scripting, maintained infrastructure stability." },
];
const SKILLS = [
  { cat:"Integration & Middleware", items:["webMethods 10.x","Integration Server","API Gateway","webMethods Designer","webMethods.io","Flow Services","IBM MQ","IBM DataPower"] },
  { cat:"APIs & Architecture", items:["OpenAPI / Swagger","REST APIs","SOAP","B2B Integration","EAI","SOA","Service Orchestration","Microservices"] },
  { cat:"Cloud & Messaging", items:["AWS Solutions Architect","Azure","Kafka","Solace","Docker","DevOps","CI/CD","Linux"] },
  { cat:"Monitoring & Tools", items:["Datadog","Splunk","API Management","Platform Admin","Solution Design","Migration Projects"] },
];
const CERTS = [
  { title:"IBM Certified Integration Developer", issuer:"IBM", icon:"◈" },
  { title:"IBM MQ Administrator", issuer:"IBM", icon:"◈" },
  { title:"webMethods API Management Professional", issuer:"Software AG", icon:"◈" },
  { title:"webMethods Platform Administrator", issuer:"Software AG", icon:"◈" },
  { title:"AWS Solutions Architect", issuer:"Amazon Web Services", icon:"⬡" },
  { title:"Azure Certified", issuer:"Microsoft", icon:"⬡" },
];
const LANGS = [
  { lang:"English", level:"Fluent", pct:95 },
  { lang:"French",  level:"Basic", pct:50 },
  { lang:"Hindi",   level:"Native", pct:100 },
  { lang:"Marathi", level:"Native", pct:100 },
];
const HOBBIES = [{ icon:"🎵", label:"Music" },{ icon:"📚", label:"Books" },{ icon:"⚽", label:"Football" }];

const DEFAULT_BLOGS = [
  { id:"b1", title:"Understanding webMethods Flow Services", date:"Mar 2026", readTime:"6 min read", tag:"Integration",
    content:"Flow Services are the backbone of webMethods integrations.\n\nThey allow you to orchestrate complex business logic visually while retaining full control over error handling and performance.\n\n## Key Patterns\n\n**Sequence** — execute steps in order\n**Branch** — conditional logic\n**Loop** — iterate over document lists\n**Try/Catch** — robust error handling\n\nAlways design with idempotency in mind, especially for B2B retry scenarios." },
  { id:"b2", title:"OpenAPI-First Design: Why It Matters", date:"Feb 2026", readTime:"5 min read", tag:"API Design",
    content:"OpenAPI-first means writing your API contract before writing implementation code.\n\nThis shifts the conversation from how it works to what it should do.\n\n## Benefits\n\n**Consumer alignment** — frontend teams can mock immediately\n**Auto-generated docs** — Swagger UI from day one\n**Validation** — request/response validation at the gateway\n**Versioning** — contract changes are visible and traceable\n\nIn webMethods API Gateway, OpenAPI specs drive policy enforcement automatically." },
  { id:"b3", title:"Kafka vs Solace: Choosing the Right Broker", date:"Jan 2026", readTime:"7 min read", tag:"Messaging",
    content:"Both are excellent but they solve different problems.\n\n## Kafka\n\n**Best for:** high-throughput event streaming, log aggregation, replay\n**Guarantees:** at-least-once by default, exactly-once with transactions\n**Ops complexity:** higher — partitions, consumer groups, offsets\n\n## Solace\n\n**Best for:** low-latency pub/sub, IoT, financial messaging\n**Guarantees:** exclusive queues, persistent messages natively\n**Ops complexity:** lower — rich protocol support\n\n## My Take\n\nFor enterprise integration middleware, Solace wins on simplicity. For data pipelines and event sourcing, Kafka is the clear choice." },
];

const SOCIAL = [
  { label:"WhatsApp",  href:"https://wa.me/919619458970",             color:"#25D366", d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" },
  { label:"Instagram", href:"https://instagram.com//abhi._mhatre/",  color:"#E1306C", d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { label:"GitHub",    href:"https://github.com/Abhishek-MH55",      color:"currentColor", d:"M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" },
  { label:"LinkedIn",  href:"https://linkedin.com/in/abhishekpmhatre", color:"#0A66C2", d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { label:"X",         href:"https://x.com/abhishekmhatre_",           color:"currentColor", d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.636L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" },
  { label:"Email",     href:"mailto:abhishekmhatre55@gmail.com",             color:"#b5a07e", email:true },
];

function SI({ s, sz=17 }) {
  if (s.email) return (
    <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  );
  return <svg width={sz} height={sz} viewBox="0 0 24 24" fill="currentColor"><path d={s.d}/></svg>;
}

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("rv")),
      { threshold: 0.08 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};

// ── Blog Editor (admin only) ───────────────────────────────
function Editor({ blog, T, onSave, onClose }) {
  const [title, setTitle] = useState(blog.title || "");
  const [tag,   setTag]   = useState(blog.tag || "Integration");
  const [body,  setBody]  = useState(blog.content || "");
  const [prev,  setPrev]  = useState(false);
  const TAGS = ["Integration","API Design","Messaging","Cloud","DevOps","Architecture","Other"];
  const wc = body.trim().split(/\s+/).filter(Boolean).length;
  const rt = Math.max(1, Math.ceil(wc / 200));
  const ok = title.trim() && body.trim();
  const inp = { background:T.sA, border:"1px solid "+T.bo, color:T.tx, fontFamily:"Outfit,sans-serif", fontSize:14, padding:"11px 14px", borderRadius:2, outline:"none", width:"100%", transition:"border-color .2s,background .4s,color .5s" };

  return (
    <div style={{position:"fixed",inset:0,zIndex:900,background:"rgba(0,0,0,.75)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={onClose}>
      <div style={{background:T.su,border:"1px solid "+T.bo,borderRadius:4,width:"100%",maxWidth:740,maxHeight:"92vh",display:"flex",flexDirection:"column",overflow:"hidden",transition:"background .4s,border-color .5s"}} onClick={e=>e.stopPropagation()}>
        <div style={{display:"flex",alignItems:"center",gap:10,padding:"16px 22px",borderBottom:"1px solid "+T.bo,flexShrink:0}}>
          <span style={{fontFamily:"JetBrains Mono,monospace",fontSize:10,letterSpacing:".1em",textTransform:"uppercase",color:T.ac}}>{blog.id?"Edit Post":"New Post"}</span>
          <button style={{marginLeft:"auto",padding:"4px 12px",border:"1px solid "+T.bo,background:"transparent",color:T.mu,fontFamily:"JetBrains Mono,monospace",fontSize:10,letterSpacing:".06em",textTransform:"uppercase",cursor:"pointer",borderRadius:100,transition:"all .2s"}} onClick={()=>setPrev(p=>!p)}>{prev?"✎ Edit":"👁 Preview"}</button>
          <button style={{width:26,height:26,border:"1px solid "+T.bo,background:"transparent",color:T.mu,cursor:"pointer",borderRadius:2,fontSize:13,transition:"all .2s"}} onClick={onClose}>✕</button>
        </div>
        <div style={{flex:1,overflowY:"auto",padding:"18px 22px",display:"flex",flexDirection:"column",gap:12}}>
          {!prev ? (<>
            <input style={{...inp,fontFamily:"Playfair Display,serif",fontSize:20,fontWeight:300}} placeholder="Post title…" value={title} onChange={e=>setTitle(e.target.value)}/>
            <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
              {TAGS.map(t=>(
                <button key={t} onClick={()=>setTag(t)} style={{padding:"4px 11px",border:"1px solid "+(tag===t?T.ac:T.bo),background:tag===t?T.aS:"transparent",color:tag===t?T.ac:T.mu,fontFamily:"JetBrains Mono,monospace",fontSize:10,letterSpacing:".06em",textTransform:"uppercase",cursor:"pointer",borderRadius:100,transition:"all .2s"}}>{t}</button>
              ))}
            </div>
            <div style={{fontFamily:"JetBrains Mono,monospace",fontSize:10,color:T.mu,letterSpacing:".05em"}}>Tip: ## Heading · **bold** · blank line = paragraph</div>
            <textarea style={{...inp,lineHeight:1.75,resize:"vertical",minHeight:260}} placeholder="Write your post here…" value={body} onChange={e=>setBody(e.target.value)}/>
            <div style={{fontFamily:"JetBrains Mono,monospace",fontSize:10,color:T.mu,textAlign:"right"}}>{wc} words · ~{rt} min read</div>
          </>) : (
            <div>
              <h2 style={{fontFamily:"Playfair Display,serif",fontSize:26,fontWeight:300,color:T.tx,marginBottom:12}}>{title||"Untitled"}</h2>
              <span style={{padding:"3px 10px",background:T.tg,color:T.tT,fontFamily:"JetBrains Mono,monospace",fontSize:10,borderRadius:100}}>{tag}</span>
              <div style={{marginTop:16}}>
                {body.split("\n").map((line,i)=>
                  line.startsWith("## ")?<h3 key={i} style={{fontFamily:"Playfair Display,serif",fontSize:17,fontWeight:400,color:T.tx,margin:"16px 0 7px"}}>{line.slice(3)}</h3>
                  :line.startsWith("**")&&line.endsWith("**")?<p key={i} style={{fontWeight:500,color:T.tx,marginBottom:7,fontSize:14}}>{line.slice(2,-2)}</p>
                  :line.trim()===""?<br key={i}/>
                  :<p key={i} style={{fontSize:14,lineHeight:1.8,color:T.mu,marginBottom:10}}>{line}</p>
                )}
              </div>
            </div>
          )}
        </div>
        <div style={{display:"flex",gap:10,padding:"14px 22px",borderTop:"1px solid "+T.bo,flexShrink:0}}>
          <button onClick={()=>ok&&onSave({...blog,title:title.trim(),tag,content:body})} style={{display:"inline-flex",alignItems:"center",gap:7,padding:"10px 20px",background:ok?T.ac:"#666",color:T.bg,fontSize:12,fontWeight:500,letterSpacing:".07em",textTransform:"uppercase",border:"none",borderRadius:2,cursor:ok?"pointer":"default",opacity:ok?1:.5,transition:"all .2s"}}>
            💾 {blog.id?"Save Changes":"Publish Post"}
          </button>
          <button onClick={onClose} style={{padding:"10px 16px",border:"1px solid "+T.bo,background:"transparent",color:T.mu,fontSize:12,letterSpacing:".06em",textTransform:"uppercase",cursor:"pointer",borderRadius:2,fontFamily:"JetBrains Mono,monospace",transition:"all .2s"}}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

// ── Admin Login Modal ──────────────────────────────────────
function AdminLogin({ T, onLogin, onClose }) {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);
  const submit = () => {
    if (pw === ADMIN_PASSWORD) { onLogin(); setErr(false); }
    else { setErr(true); setPw(""); }
  };
  return (
    <div style={{position:"fixed",inset:0,zIndex:910,background:"rgba(0,0,0,.8)",backdropFilter:"blur(10px)",display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={onClose}>
      <div style={{background:T.su,border:"1px solid "+T.bo,borderRadius:4,width:"100%",maxWidth:360,padding:32,transition:"background .4s,border-color .5s"}} onClick={e=>e.stopPropagation()}>
        <div style={{fontFamily:"Playfair Display,serif",fontSize:22,fontWeight:300,color:T.tx,marginBottom:6}}>Admin Access</div>
        <div style={{fontFamily:"JetBrains Mono,monospace",fontSize:10,letterSpacing:".08em",color:T.mu,marginBottom:24,textTransform:"uppercase"}}>Enter password to manage posts</div>
        <input
          type="password"
          placeholder="Password"
          value={pw}
          onChange={e=>{setPw(e.target.value);setErr(false);}}
          onKeyDown={e=>e.key==="Enter"&&submit()}
          style={{width:"100%",background:T.sA,border:"1px solid "+(err?"#f87171":T.bo),color:T.tx,fontFamily:"Outfit,sans-serif",fontSize:14,padding:"11px 14px",borderRadius:2,outline:"none",marginBottom:err?8:16,transition:"border-color .2s,background .4s"}}
        />
        {err&&<div style={{fontFamily:"JetBrains Mono,monospace",fontSize:10,color:"#f87171",marginBottom:14,letterSpacing:".06em"}}>Incorrect password. Try again.</div>}
        <div style={{display:"flex",gap:10}}>
          <button onClick={submit} style={{flex:1,padding:"11px",background:T.ac,color:T.bg,border:"none",borderRadius:2,fontSize:12,fontWeight:500,letterSpacing:".07em",textTransform:"uppercase",cursor:"pointer",transition:"all .2s"}}>Login</button>
          <button onClick={onClose} style={{flex:1,padding:"11px",background:"transparent",color:T.mu,border:"1px solid "+T.bo,borderRadius:2,fontSize:12,letterSpacing:".07em",textTransform:"uppercase",cursor:"pointer",transition:"all .2s"}}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [cur,  setCur]  = useState({x:-100,y:-100});
  const [hov,  setHov]  = useState(false);
  const [aN,   setAN]   = useState("");

  // Blog state
  const [ftag, setFtag] = useState("All");
  const [bView,setBView]= useState(null);
  const [bEdit,setBEdit]= useState(null);
  const [toast,setToast]= useState({msg:"",type:"ok"});
  const [showLogin, setShowLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Blogs persisted in localStorage
  const [blogs, setBlogs] = useState(()=>{
    try { const s=localStorage.getItem("am_blogs"); return s?JSON.parse(s):DEFAULT_BLOGS; } catch { return DEFAULT_BLOGS; }
  });

  // Likes: { [blogId]: count }
  const [likes, setLikes] = useState(()=>{
    try { const s=localStorage.getItem("am_likes"); return s?JSON.parse(s):{}; } catch { return {}; }
  });
  // Liked by this session: Set of blog ids
  const [liked, setLiked] = useState(()=>{
    try { const s=localStorage.getItem("am_liked"); return new Set(JSON.parse(s)||[]); } catch { return new Set(); }
  });

  useReveal();

  const D = dark;
  const T = D ? {
    bg:"#080808",su:"#0f0f0f",sA:"#131313",bo:"rgba(255,255,255,0.06)",
    tx:"#edeae4",mu:"rgba(237,234,228,0.38)",ac:"#b5a07e",
    aS:"rgba(181,160,126,0.08)",aG:"rgba(181,160,126,0.15)",
    tg:"rgba(181,160,126,0.08)",tT:"#b5a07e",nB:"rgba(8,8,8,0.9)",pB:"rgba(255,255,255,0.06)",
  } : {
    bg:"#f4f1ec",su:"#ffffff",sA:"#ede9e2",bo:"rgba(0,0,0,0.07)",
    tx:"#18160f",mu:"rgba(24,22,15,0.42)",ac:"#7a5f38",
    aS:"rgba(122,95,56,0.08)",aG:"rgba(122,95,56,0.14)",
    tg:"rgba(122,95,56,0.08)",tT:"#7a5f38",nB:"rgba(244,241,236,0.92)",pB:"rgba(0,0,0,0.06)",
  };

  useEffect(()=>{ const m=e=>setCur({x:e.clientX,y:e.clientY}); window.addEventListener("mousemove",m); return()=>window.removeEventListener("mousemove",m); },[]);
  useEffect(()=>{ document.body.style.background=T.bg; document.body.style.color=T.tx; },[dark]);
  useEffect(()=>{
    const ids=["home","experience","about","skills","certifications","blog","contact"];
    const obs=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&setAN(e.target.id)),{threshold:0.3});
    ids.forEach(id=>{const el=document.getElementById(id);if(el)obs.observe(el);});
    return()=>obs.disconnect();
  },[]);

  const saveBlogs = u => { setBlogs(u); try{localStorage.setItem("am_blogs",JSON.stringify(u));}catch{} };

  const doSave = d => {
    if(d.id) { saveBlogs(blogs.map(b=>b.id===d.id?d:b)); showToast("Post updated ✓"); }
    else {
      const nb={...d,id:"b"+Date.now(),date:new Date().toLocaleDateString("en-GB",{month:"short",year:"numeric"}),readTime:Math.max(1,Math.ceil(d.content.split(" ").length/200))+" min read"};
      saveBlogs([nb,...blogs]);
      showToast("Post published ✓");
    }
    setBEdit(null);
  };

  // Like handler
  const doLike = (blogId) => {
    if (liked.has(blogId)) return; // already liked
    const newLikes = {...likes, [blogId]:(likes[blogId]||0)+1};
    const newLiked = new Set([...liked, blogId]);
    setLikes(newLikes);
    setLiked(newLiked);
    try{localStorage.setItem("am_likes",JSON.stringify(newLikes));}catch{}
    try{localStorage.setItem("am_liked",JSON.stringify([...newLiked]));}catch{}
  };

  // Share handler — creates rich share text with title, excerpt, and URL
  const doShare = (blog) => {
    const url = window.location.href.split("#")[0] + "#blog";
    const text = `"${blog.title}" by Abhishek Mhatre\n\n${(blog.content||"").split("\n")[0].slice(0,120)}…\n\nRead more: ${url}`;
    if (navigator.share) {
      navigator.share({ title: blog.title, text: `${blog.title} by Abhishek Mhatre`, url })
        .then(() => showToast("Shared successfully ✓"))
        .catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  };

  const fallbackCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(()=>showToast("Copied to clipboard ✓","ok"))
      .catch(()=>showToast("Copy failed — share manually","err"));
  };

  const showToast = (msg, type="ok") => {
    setToast({msg,type});
    setTimeout(()=>setToast({msg:"",type:"ok"}),2800);
  };

  const handleAdminClick = () => {
    if (isAdmin) { setIsAdmin(false); showToast("Logged out"); }
    else setShowLogin(true);
  };

  const on=()=>setHov(true), off=()=>setHov(false);
  const allTags=["All",...Array.from(new Set(blogs.map(b=>b.tag)))];
  const filtered=ftag==="All"?blogs:blogs.filter(b=>b.tag===ftag);
  const NAV=["Experience","About","Skills","Certifications","Blog","Contact"];

  const renderContent = c => (c||"").split("\n").map((ln,i)=>
    ln.startsWith("## ")?<h3 key={i} style={{fontFamily:"Playfair Display,serif",fontSize:17,fontWeight:400,color:T.tx,margin:"16px 0 7px",transition:"color .5s"}}>{ln.slice(3)}</h3>
    :ln.startsWith("**")&&ln.endsWith("**")?<p key={i} style={{fontWeight:500,color:T.tx,marginBottom:7,fontSize:14,transition:"color .5s"}}>{ln.slice(2,-2)}</p>
    :ln.trim()===""?<br key={i}/>
    :<p key={i} style={{fontSize:15,lineHeight:1.8,color:T.mu,marginBottom:10,transition:"color .5s"}}>{ln}</p>
  );

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;1,300;1,400&family=JetBrains+Mono:wght@300;400&family=Outfit:wght@300;400;500&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    html{scroll-behavior:smooth}
    body{font-family:Outfit,sans-serif;font-weight:300;overflow-x:hidden;cursor:none;transition:background .5s,color .5s}
    ::selection{background:${T.ac}22;color:${T.ac}}
    a{text-decoration:none;color:inherit}
    button{font-family:inherit;border:none;background:none}

    .cd{position:fixed;top:0;left:0;z-index:9999;pointer-events:none;width:7px;height:7px;border-radius:50%;background:${T.ac};transform:translate(-50%,-50%)}
    .cr{position:fixed;top:0;left:0;z-index:9998;pointer-events:none;width:32px;height:32px;border-radius:50%;border:1px solid ${T.ac}44;transform:translate(-50%,-50%);transition:all .3s cubic-bezier(.16,1,.3,1)}
    .cr.h{width:52px;height:52px;border-color:${T.ac}88}

    nav{position:fixed;top:0;left:0;right:0;z-index:200;display:flex;align-items:center;justify-content:space-between;padding:15px 52px;background:${T.nB};backdrop-filter:blur(24px);border-bottom:1px solid ${T.bo};transition:all .5s}
    .nlo{display:flex;align-items:center;gap:10px;cursor:none;text-decoration:none}
    .nlo img{width:33px;height:33px;border-radius:5px;object-fit:contain}
    .nlt{font-family:Playfair Display,serif;font-size:19px;font-weight:400;letter-spacing:.04em;color:${T.tx};transition:color .5s}
    .nlt span{color:${T.ac}}
    ul.nm{display:flex;gap:28px;list-style:none}
    ul.nm a{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:${T.mu};cursor:none;position:relative;transition:color .2s;text-decoration:none}
    ul.nm a.on,ul.nm a:hover{color:${T.tx}}
    ul.nm a::after{content:'';position:absolute;bottom:-4px;left:0;right:100%;height:1px;background:${T.ac};transition:right .35s cubic-bezier(.16,1,.3,1)}
    ul.nm a.on::after,ul.nm a:hover::after{right:0}
    .nr{display:flex;align-items:center;gap:12px}
    .av{display:flex;align-items:center;gap:7px;font-family:JetBrains Mono,monospace;font-size:10px;color:${T.mu};letter-spacing:.05em;transition:color .5s}
    .avd{width:6px;height:6px;border-radius:50%;background:#4ade80;box-shadow:0 0 8px #4ade8055;animation:blink 2.5s ease-in-out infinite}
    @keyframes blink{0%,100%{opacity:1}50%{opacity:.35}}
    .tg{width:44px;height:24px;border-radius:12px;border:1px solid ${T.bo};background:${T.su};cursor:none;position:relative;transition:all .4s;flex-shrink:0}
    .tgt{position:absolute;top:4px;left:${dark?"22px":"4px"};width:14px;height:14px;border-radius:50%;background:${T.ac};transition:left .3s cubic-bezier(.16,1,.3,1)}
    .adm-btn{display:flex;align-items:center;gap:6px;padding:5px 11px;border:1px solid ${T.bo};background:transparent;color:${T.mu};font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.07em;text-transform:uppercase;cursor:none;border-radius:2px;transition:all .2s}
    .adm-btn:hover{border-color:${T.ac};color:${T.ac}}
    .adm-btn.active{border-color:${T.ac};color:${T.ac};background:${T.aS}}

    .sdk{position:fixed;left:20px;top:50%;transform:translateY(-50%);z-index:150;display:flex;flex-direction:column;gap:4px}
    .sdk-i{display:flex;align-items:center;position:relative;cursor:none}
    .sdk-ic{width:38px;height:38px;display:flex;align-items:center;justify-content:center;border:1px solid ${T.bo};background:${T.su};color:${T.mu};border-radius:2px;transition:all .25s cubic-bezier(.16,1,.3,1)}
    .sdk-i:hover .sdk-ic{transform:translateX(4px);border-color:var(--sc);color:var(--sc)}
    .sdk-lb{position:absolute;left:46px;white-space:nowrap;font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.06em;text-transform:uppercase;color:${T.tx};background:${T.su};border:1px solid ${T.bo};padding:4px 9px;border-radius:2px;opacity:0;pointer-events:none;transform:translateX(-6px);transition:opacity .2s,transform .2s}
    .sdk-i:hover .sdk-lb{opacity:1;transform:translateX(0)}

    .hero{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding:0 52px 88px;position:relative;overflow:hidden;background:${T.bg};transition:background .5s}
    .hg{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(${T.bo} 1px,transparent 1px),linear-gradient(90deg,${T.bo} 1px,transparent 1px);background-size:72px 72px;mask-image:radial-gradient(ellipse 75% 75% at 65% 55%,black 10%,transparent 100%);opacity:.55}
    .ho{position:absolute;top:12%;right:8%;width:440px;height:440px;border-radius:50%;background:radial-gradient(circle,${T.ac}10 0%,transparent 68%);pointer-events:none;animation:orb 7s ease-in-out infinite}
    .hwm{position:absolute;bottom:60px;right:52px;width:190px;height:190px;opacity:.04;pointer-events:none}
    @keyframes orb{0%,100%{transform:scale(1);opacity:.7}50%{transform:scale(1.08) translateY(-12px);opacity:1}}
    .hb{font-family:JetBrains Mono,monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${T.ac};margin-bottom:22px;opacity:0;animation:fu .8s .3s forwards;transition:color .5s}
    .hn{font-family:Playfair Display,serif;font-size:clamp(58px,8.5vw,122px);font-weight:300;line-height:.92;letter-spacing:-.02em;color:${T.tx};opacity:0;animation:fu .9s .5s forwards;transition:color .5s}
    .hn em{font-style:italic;color:${T.ac}}
    .ht{font-size:clamp(14px,1.6vw,17px);color:${T.mu};margin-top:26px;max-width:520px;line-height:1.65;opacity:0;animation:fu .9s .7s forwards;transition:color .5s}
    .ht strong{color:${T.tx};font-weight:400;transition:color .5s}
    .hcp{display:flex;flex-wrap:wrap;gap:9px;margin-top:26px;opacity:0;animation:fu .9s .85s forwards}
    .chip{padding:6px 13px;border:1px solid ${T.bo};border-radius:100px;font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.05em;color:${T.mu};transition:all .3s}
    .chip:hover{border-color:${T.ac}55;color:${T.tx}}
    .hct{display:flex;align-items:center;gap:24px;margin-top:44px;opacity:0;animation:fu .9s 1s forwards}
    .bp{display:inline-flex;align-items:center;gap:9px;padding:13px 26px;background:${T.ac};color:${T.bg};font-size:12px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;cursor:none;border-radius:2px;transition:transform .2s,box-shadow .2s;text-decoration:none}
    .bp:hover{transform:translateY(-2px);box-shadow:0 14px 32px ${T.aG}}
    .bg-btn{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:${T.mu};cursor:none;transition:color .2s}
    .bg-btn:hover{color:${T.tx}}
    .hsc{position:absolute;right:52px;bottom:88px;display:flex;flex-direction:column;align-items:center;gap:10px;font-family:JetBrains Mono,monospace;font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:${T.mu};opacity:0;animation:fu .9s 1.2s forwards}
    .sb{width:1px;height:56px;background:linear-gradient(to bottom,${T.ac},transparent);animation:sd 2.2s ease-in-out infinite}
    @keyframes sd{0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}51%{transform:scaleY(1);transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}
    @keyframes fu{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}

    section{padding:112px 52px;transition:background .5s,color .5s}
    .sl{font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:${T.ac};margin-bottom:14px;display:flex;align-items:center;gap:14px;transition:color .5s}
    .sl::after{content:'';flex:1;max-width:60px;height:1px;background:${T.ac}38}
    .st{font-family:Playfair Display,serif;font-size:clamp(34px,4.5vw,54px);font-weight:300;line-height:1.1;letter-spacing:-.01em;margin-bottom:52px;color:${T.tx};transition:color .5s}
    .st em{font-style:italic;color:${T.ac}}

    .el{display:flex;flex-direction:column;position:relative}
    .el::before{content:'';position:absolute;left:0;top:0;bottom:0;width:1px;background:linear-gradient(to bottom,transparent,${T.bo} 8%,${T.bo} 92%,transparent)}
    .er{padding:34px 0 34px 36px;border-bottom:1px solid ${T.bo};display:grid;grid-template-columns:1fr auto;gap:24px;align-items:start;position:relative;cursor:default;transition:padding-left .3s cubic-bezier(.16,1,.3,1)}
    .er::before{content:'';position:absolute;left:-4.5px;top:42px;width:9px;height:9px;border-radius:50%;border:1.5px solid ${T.ac};background:${T.bg};transition:background .3s}
    .er:hover{padding-left:48px}
    .er:hover::before{background:${T.ac}}
    .ero{font-family:Playfair Display,serif;font-size:22px;font-weight:400;color:${T.tx};margin-bottom:4px;transition:color .3s}
    .er:hover .ero{color:${T.ac}}
    .eco{font-size:12px;color:${T.mu};margin-bottom:10px;font-family:JetBrains Mono,monospace;letter-spacing:.04em;transition:color .5s}
    .eco span{color:${T.ac}44;margin:0 8px}
    .ede{font-size:14px;line-height:1.7;color:${T.mu};max-width:580px;margin-bottom:14px;transition:color .5s}
    .etgs{display:flex;flex-wrap:wrap;gap:8px}
    .etg{padding:4px 11px;background:${T.tg};color:${T.tT};font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.04em;border-radius:100px;transition:all .5s}
    .em2{text-align:right}
    .ep{font-family:JetBrains Mono,monospace;font-size:11px;color:${T.mu};white-space:nowrap;margin-bottom:4px;transition:color .5s}
    .edu{font-size:12px;color:${T.mu};transition:color .5s}

    .ag{display:grid;grid-template-columns:1.1fr 1fr;gap:80px;align-items:start}
    .ab p{font-size:15px;line-height:1.85;color:${T.mu};margin-bottom:17px;transition:color .5s}
    .ab p strong{color:${T.tx};font-weight:400;transition:color .5s}
    .ar{display:flex;flex-direction:column;gap:18px}
    .as{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .asc{padding:24px;border:1px solid ${T.bo};background:${T.su};border-radius:2px;transition:all .3s}
    .asc:hover{border-color:${T.ac}40;transform:translateY(-4px)}
    .asn{font-family:Playfair Display,serif;font-size:42px;font-weight:300;color:${T.ac};line-height:1;transition:color .5s}
    .asl{font-size:12px;color:${T.mu};margin-top:7px;letter-spacing:.04em;transition:color .5s}
    .lb{padding:22px;border:1px solid ${T.bo};background:${T.su};border-radius:2px;transition:all .5s}
    .lt{font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:${T.ac};margin-bottom:14px;transition:color .5s}
    .lr{margin-bottom:11px}
    .lrh{display:flex;justify-content:space-between;margin-bottom:5px;font-size:12px}
    .lrn{color:${T.tx};transition:color .5s}
    .lrv{color:${T.mu};font-family:JetBrains Mono,monospace;font-size:10px;transition:color .5s}
    .lrb{height:2px;background:${T.pB};border-radius:1px;overflow:hidden}
    .lrf{height:100%;background:${T.ac};border-radius:1px;transition:background .5s}
    .hobs{display:flex;gap:10px;flex-wrap:wrap}
    .hob{display:flex;align-items:center;gap:8px;padding:9px 15px;border:1px solid ${T.bo};background:${T.su};border-radius:2px;font-size:13px;color:${T.mu};transition:all .3s}
    .hob:hover{border-color:${T.ac}44;color:${T.tx}}

    .sg{display:grid;grid-template-columns:repeat(2,1fr);gap:2px}
    .sgr{padding:34px;background:${T.su};transition:background .3s}
    .sgr:hover{background:${T.sA}}
    .sc{font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:${T.ac};margin-bottom:15px;transition:color .5s}
    .si2{display:flex;flex-wrap:wrap;gap:9px}
    .sk{padding:7px 14px;border:1px solid ${T.bo};font-size:12px;color:${T.mu};border-radius:1px;cursor:default;transition:all .2s}
    .sk:hover{border-color:${T.ac}50;color:${T.tx};background:${T.aS}}

    .cg{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:14px}
    .cc{padding:22px;border:1px solid ${T.bo};background:${T.su};border-radius:2px;display:flex;align-items:flex-start;gap:13px;transition:all .3s}
    .cc:hover{border-color:${T.ac}40;transform:translateY(-4px);background:${T.sA}}
    .ci{font-size:18px;color:${T.ac};line-height:1;margin-top:2px;flex-shrink:0;transition:color .5s}
    .ct{font-size:14px;color:${T.tx};font-weight:400;margin-bottom:5px;line-height:1.4;transition:color .5s}
    .cis{font-family:JetBrains Mono,monospace;font-size:10px;color:${T.mu};letter-spacing:.06em;text-transform:uppercase;transition:color .5s}

    /* ── Blog ── */
    .bb{display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:16px;margin-bottom:52px}
    .bnw{display:inline-flex;align-items:center;gap:7px;padding:9px 17px;border:1px solid ${T.ac};background:transparent;color:${T.ac};font-family:JetBrains Mono,monospace;font-size:11px;letter-spacing:.07em;text-transform:uppercase;cursor:none;border-radius:2px;transition:all .2s}
    .bnw:hover{background:${T.ac};color:${T.bg}}
    .bf{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:26px}
    .bft{padding:5px 13px;border:1px solid ${T.bo};background:transparent;color:${T.mu};font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.07em;text-transform:uppercase;cursor:none;border-radius:100px;transition:all .2s}
    .bft:hover,.bft.on{border-color:${T.ac};color:${T.ac};background:${T.aS}}
    .bgd{display:grid;grid-template-columns:repeat(auto-fill,minmax(310px,1fr));gap:2px}
    .bc{padding:28px;background:${T.su};position:relative;overflow:hidden;cursor:default;transition:background .3s}
    .bc::after{content:'';position:absolute;left:0;top:0;bottom:0;width:0;background:${T.ac};transition:width .3s cubic-bezier(.16,1,.3,1)}
    .bc:hover{background:${T.sA}}
    .bc:hover::after{width:3px}
    .bct{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
    .btg{padding:4px 10px;background:${T.tg};color:${T.tT};font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.04em;border-radius:100px;transition:all .5s}
    .bm{display:flex;align-items:center;gap:6px;font-family:JetBrains Mono,monospace;font-size:10px;color:${T.mu};transition:color .5s}
    .bti{font-family:Playfair Display,serif;font-size:19px;font-weight:400;color:${T.tx};margin-bottom:7px;line-height:1.3;transition:color .3s}
    .bc:hover .bti{color:${T.ac}}
    .bex{font-size:13px;line-height:1.65;color:${T.mu};margin-bottom:18px;transition:color .5s}

    /* Blog action row */
    .ba{display:flex;align-items:center;gap:8px;border-top:1px solid ${T.bo};padding-top:13px;flex-wrap:wrap}
    .bat{display:inline-flex;align-items:center;gap:5px;padding:6px 12px;border:1px solid ${T.bo};background:transparent;color:${T.mu};font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.05em;text-transform:uppercase;cursor:none;border-radius:1px;transition:all .2s}
    .bat-r:hover{border-color:${T.ac};color:${T.ac};background:${T.aS}}
    .bat-e:hover{border-color:#60a5fa;color:#60a5fa;background:rgba(96,165,250,.07)}
    .bat-s:hover{border-color:#34d399;color:#34d399;background:rgba(52,211,153,.07)}

    /* Like button */
    .like-btn{display:inline-flex;align-items:center;gap:5px;padding:6px 12px;border:1px solid ${T.bo};background:transparent;font-family:JetBrains Mono,monospace;font-size:10px;letter-spacing:.05em;text-transform:uppercase;cursor:none;border-radius:1px;transition:all .25s;margin-left:auto}
    .like-btn.liked{border-color:#f472b6;color:#f472b6;background:rgba(244,114,182,.08)}
    .like-btn:not(.liked){color:${T.mu}}
    .like-btn:not(.liked):hover{border-color:#f472b6;color:#f472b6;background:rgba(244,114,182,.07)}
    .like-count{font-size:11px}

    /* Admin badge on card */
    .admin-actions{display:flex;gap:8px;margin-top:10px;padding-top:10px;border-top:1px dashed ${T.bo}}

    /* Modals */
    .ov{position:fixed;inset:0;z-index:900;background:rgba(0,0,0,.75);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;padding:20px}
    .mb{background:${T.su};border:1px solid ${T.bo};border-radius:4px;width:100%;max-width:700px;max-height:90vh;display:flex;flex-direction:column;overflow:hidden;transition:background .4s,border-color .5s}
    .mh{display:flex;align-items:center;gap:10px;padding:16px 22px;border-bottom:1px solid ${T.bo};flex-shrink:0}
    .mme{display:flex;align-items:center;gap:6px;font-family:JetBrains Mono,monospace;font-size:10px;color:${T.mu};margin-left:auto;transition:color .5s}
    .mcl{width:26px;height:26px;border:1px solid ${T.bo};background:transparent;color:${T.mu};font-size:13px;cursor:none;border-radius:2px;transition:all .2s}
    .mcl:hover{border-color:${T.ac};color:${T.ac}}
    .mti{font-family:Playfair Display,serif;font-size:clamp(20px,3vw,30px);font-weight:300;color:${T.tx};padding:20px 22px 8px;line-height:1.2;flex-shrink:0;transition:color .5s}
    .mbo{padding:0 22px 20px;overflow-y:auto;flex:1}
    .mft{display:flex;align-items:center;gap:10px;padding:13px 22px;border-top:1px solid ${T.bo};flex-shrink:0}

    .csl{display:flex;flex-wrap:wrap;gap:10px}
    .csb{display:flex;align-items:center;gap:8px;padding:11px 17px;border:1px solid ${T.bo};font-size:12px;letter-spacing:.07em;text-transform:uppercase;color:${T.mu};cursor:none;border-radius:2px;transition:all .2s;background:transparent;text-decoration:none}
    .csb:hover{border-color:var(--sc);color:var(--sc);background:${T.aS};transform:translateY(-2px)}

    .tst{position:fixed;bottom:28px;left:50%;transform:translateX(-50%);z-index:1000;font-family:JetBrains Mono,monospace;font-size:11px;letter-spacing:.06em;padding:9px 18px;border-radius:2px;animation:tsti .3s ease;white-space:nowrap}
    .tst.ok{background:${T.ac};color:${T.bg};box-shadow:0 8px 24px ${T.aG}}
    .tst.err{background:#f87171;color:#fff}
    @keyframes tsti{from{opacity:0;transform:translateX(-50%) translateY(8px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}

    footer{padding:22px 52px;border-top:1px solid ${T.bo};display:flex;justify-content:space-between;align-items:center;background:${T.bg};transition:all .5s}
    .ft{font-family:JetBrains Mono,monospace;font-size:10px;color:${T.mu};letter-spacing:.05em;transition:color .5s}
    .fs{display:flex;gap:11px;align-items:center}
    .fs a{color:${T.mu};transition:color .2s;cursor:none;display:flex;align-items:center}
    .fs a:hover{color:${T.ac}}
    .fl{width:20px;height:20px;object-fit:contain;opacity:.3;transition:opacity .2s}
    .fl:hover{opacity:.75}

    [data-reveal]{opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
    [data-reveal].rv{opacity:1;transform:translateY(0)}
    [data-reveal][data-d="1"]{transition-delay:.1s}
    [data-reveal][data-d="2"]{transition-delay:.2s}
    [data-reveal][data-d="3"]{transition-delay:.3s}

    @media(max-width:900px){
      nav{padding:13px 18px}
      ul.nm,.sdk,.hsc,.hwm{display:none}
      section{padding:80px 18px}
      .hero{padding:0 18px 60px}
      .ag{grid-template-columns:1fr;gap:40px}
      .sg{grid-template-columns:1fr}
      .er{grid-template-columns:1fr}
      .em2{display:none}
      .bgd{grid-template-columns:1fr}
      footer{flex-direction:column;gap:10px;padding:16px;text-align:center}
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:css}}/>
      <div className="cd" style={{left:cur.x,top:cur.y}}/>
      <div className={"cr"+(hov?" h":"")} style={{left:cur.x,top:cur.y}}/>

      {/* Social Dock */}
      <div className="sdk">
        {SOCIAL.map(s=>(
          <div key={s.label} className="sdk-i" onMouseEnter={on} onMouseLeave={off}>
            <a href={s.href} target="_blank" rel="noreferrer" className="sdk-ic" style={{"--sc":s.color==="currentColor"?T.tx:s.color}}>
              <SI s={s} sz={17}/>
            </a>
            <div className="sdk-lb">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Nav */}
      <nav>
        <a href="#home" className="nlo" onMouseEnter={on} onMouseLeave={off}>
          <img src={"data:image/png;base64,"+LOGO} alt="AM"/>
          <div className="nlt">Abhishek<span>.</span></div>
        </a>
        <ul className="nm">
          {NAV.map(n=>(
            <li key={n}>
              <a href={"#"+n.toLowerCase()} className={aN===n.toLowerCase()?"on":""} onMouseEnter={on} onMouseLeave={off}>{n}</a>
            </li>
          ))}
        </ul>
        <div className="nr">
          <div className="av"><div className="avd"/>Open to Work</div>
          {/* Admin toggle — subtle, in nav */}
          <button className={"adm-btn"+(isAdmin?" active":"")} onClick={handleAdminClick} onMouseEnter={on} onMouseLeave={off} title={isAdmin?"Click to logout":"Admin login"}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
            </svg>
            {isAdmin?"Admin":""}
          </button>
          <button className="tg" onClick={()=>setDark(d=>!d)} onMouseEnter={on} onMouseLeave={off} aria-label="Toggle theme"><div className="tgt"/></button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hg"/><div className="ho"/>
        <img src={"data:image/png;base64,"+LOGO} alt="" className="hwm"/>
        <div className="hb">Integration Specialist · IBM &amp; AWS Certified</div>
        <h1 className="hn">Abhishek<br/><em>Mhatre</em></h1>
        <p className="ht"><strong>Enterprise Integration Specialist</strong> with 8+ years at TCS — bridging systems through IBM middleware, webMethods along with different Integration technologies and cloud architecture across manufacturing &amp; utility sectors.</p>
        <div className="hcp">
          {["IBM Certified","AWS Solutions Architect","Azure","webMethods 10.x","DevOps","Kafka","Solace","API design and management","Datadog","Splunk","Kuberneteses","Docker"].map(c=>(<span key={c} className="chip">{c}</span>))}
        </div>
        <div className="hct">
          <a href="#experience" className="bp" onMouseEnter={on} onMouseLeave={off}>View Experience <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
          <button className="bg-btn" onClick={()=>document.getElementById("contact").scrollIntoView({behavior:"smooth"})} onMouseEnter={on} onMouseLeave={off}>Get in touch →</button>
        </div>
        <div className="hsc"><div className="sb"/>Scroll</div>
      </section>

      {/* Experience */}
      <section id="experience" style={{background:T.bg}}>
        <div className="sl" data-reveal>Career</div>
        <h2 className="st" data-reveal data-d="1">8+ Years at <em>TCS</em></h2>
        <div className="el">
          {EXP.map((e,i)=>(
            <div key={e.id} className="er" data-reveal data-d={String((i%3)+1)}>
              <div>
                <div className="ero">{e.role}</div>
                <div className="eco">{e.co}<span>·</span>{e.loc}</div>
                <div className="ede">{e.desc}</div>
                <div className="etgs">{e.tags.map(t=><span key={t} className="etg">{t}</span>)}</div>
              </div>
              <div className="em2"><div className="ep">{e.period}</div><div className="edu">{e.dur}</div></div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" style={{background:T.sA}}>
        <div className="sl" data-reveal>About</div>
        <div className="ag">
          <div className="ab" data-reveal data-d="1">
            <p>I'm <strong>Abhishek Mhatre</strong>, an IBM &amp; AWS Certified Integration Engineer with nearly a decade at <strong>Tata Consultancy Services</strong>.</p>
            <p>My expertise spans <strong>IBM middleware, webMethods, OpenAPI-first API design and management, B2B integrations, Splunk,EAI, and SOA</strong> — serving manufacturing and utility clients across India and Europe. I work with <strong>Kafka and Solace</strong> for event-driven systems, monitoring end-to-end with <strong>Datadog</strong>.</p>
            <p>Currently designing integration architectures for European clients from <strong>Paris, France</strong>. B.Tech from <strong>D Y Patil RAIT, Mumbai</strong>.</p>
          </div>
          <div className="ar" data-reveal data-d="2">
            <div className="as">
              {[{n:"8+",l:"Years in integration domain"},{n:"IBM",l:"Middleware Certified"},{n:"AWS",l:"Solutions Architect"},{n:"6",l:"IBM webMethods Certifications"}].map(s=>(
                <div key={s.l} className="asc" onMouseEnter={on} onMouseLeave={off}><div className="asn">{s.n}</div><div className="asl">{s.l}</div></div>
              ))}
            </div>
            <div className="lb">
              <div className="lt">Languages</div>
              {LANGS.map(l=>(
                <div key={l.lang} className="lr">
                  <div className="lrh"><span className="lrn">{l.lang}</span><span className="lrv">{l.level}</span></div>
                  <div className="lrb"><div className="lrf" style={{width:l.pct+"%"}}/></div>
                </div>
              ))}
            </div>
            <div className="hobs">
              {HOBBIES.map(h=>(<div key={h.label} className="hob" onMouseEnter={on} onMouseLeave={off}><span>{h.icon}</span>{h.label}</div>))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{background:T.bg}}>
        <div className="sl" data-reveal>Expertise</div>
        <h2 className="st" data-reveal data-d="1">Technical <em>Skills</em></h2>
        <div className="sg" data-reveal data-d="2">
          {SKILLS.map(g=>(
            <div key={g.cat} className="sgr"><div className="sc">{g.cat}</div>
              <div className="si2">{g.items.map(item=><span key={item} className="sk" onMouseEnter={on} onMouseLeave={off}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" style={{background:T.sA}}>
        <div className="sl" data-reveal>Credentials</div>
        <h2 className="st" data-reveal data-d="1">Certifications &amp; <em>Badges</em></h2>
        <div className="cg" data-reveal data-d="2">
          {CERTS.map(c=>(
            <div key={c.title} className="cc" onMouseEnter={on} onMouseLeave={off}>
              <div className="ci">{c.icon}</div>
              <div><div className="ct">{c.title}</div><div className="cis">{c.issuer}</div></div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Blog ── */}
      <section id="blog" style={{background:T.bg}}>
        <div className="sl" data-reveal>Writing</div>
        <div className="bb" data-reveal data-d="1">
          <h2 className="st" style={{marginBottom:0}}>From the <em>Blog</em></h2>
          {/* New Post button — admin only */}
          {isAdmin && (
            <button className="bnw" onClick={()=>setBEdit({title:"",tag:"Integration",content:""})} onMouseEnter={on} onMouseLeave={off}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
              New Post
            </button>
          )}
        </div>
        {/* Tag filters */}
        <div className="bf" data-reveal data-d="2">
          {allTags.map(t=>(
            <button key={t} className={"bft"+(ftag===t?" on":"")} onClick={()=>setFtag(t)} onMouseEnter={on} onMouseLeave={off}>{t}</button>
          ))}
        </div>
        {/* Blog cards */}
        <div className="bgd" data-reveal data-d="3">
          {filtered.map(b=>{
            const likeCount = likes[b.id]||0;
            const hasLiked  = liked.has(b.id);
            return (
              <div key={b.id} className="bc">
                <div className="bct">
                  <span className="btg">{b.tag}</span>
                  <div className="bm"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>{b.readTime} · {b.date}</div>
                </div>
                <div className="bti">{b.title}</div>
                <div className="bex">{(b.content||"").split("\n")[0].slice(0,140)}{(b.content||"").length>140?"…":""}</div>
                {/* Public actions: Read, Share, Like */}
                <div className="ba">
                  <button className="bat bat-r" onClick={()=>setBView(b)} onMouseEnter={on} onMouseLeave={off}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>Read
                  </button>
                  <button className="bat bat-s" onClick={()=>doShare(b)} onMouseEnter={on} onMouseLeave={off}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>Share
                  </button>
                  {/* Like button — pushed to right */}
                  <button className={"like-btn"+(hasLiked?" liked":"")} onClick={()=>doLike(b.id)} onMouseEnter={on} onMouseLeave={off} title={hasLiked?"You liked this":"Like this post"}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill={hasLiked?"#f472b6":"none"} stroke={hasLiked?"#f472b6":"currentColor"} strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                    </svg>
                    <span className="like-count">{likeCount>0?likeCount:""}</span>
                  </button>
                </div>
                {/* Admin-only: Edit */}
                {isAdmin && (
                  <div className="admin-actions">
                    <button className="bat bat-e" onClick={()=>setBEdit(b)} onMouseEnter={on} onMouseLeave={off}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>Edit Post
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {filtered.length===0&&<div style={{fontFamily:"JetBrains Mono,monospace",fontSize:12,color:T.mu,padding:"28px 0"}}>No posts yet.</div>}
      </section>

      {/* Contact */}
      <section id="contact" style={{background:T.sA}}>
        <div className="sl" data-reveal>Contact</div>
        <div style={{maxWidth:600}}>
          <h2 className="st" data-reveal data-d="1" style={{marginBottom:28}}>Let's build something<br/><em>seamlessly connected.</em></h2>
          <div className="csl" data-reveal data-d="2">
            {SOCIAL.map(s=>(
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="csb" style={{"--sc":s.color==="currentColor"?T.tx:s.color}} onMouseEnter={on} onMouseLeave={off}>
                <SI s={s} sz={15}/>{s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <span className="ft">© 2026 Abhishek Mhatre · Integration Specialist</span>
        <div className="fs">
          <img src={"data:image/png;base64,"+LOGO} alt="AM" className="fl"/>
          {SOCIAL.map(s=>(<a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label} onMouseEnter={on} onMouseLeave={off}><SI s={s} sz={14}/></a>))}
        </div>
      </footer>

      {/* ── Read Modal ── */}
      {bView&&(
        <div className="ov" onClick={()=>setBView(null)}>
          <div className="mb" onClick={e=>e.stopPropagation()}>
            <div className="mh">
              <span className="btg">{bView.tag}</span>
              <div className="mme"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>{bView.readTime} · {bView.date}</div>
              <button className="mcl" onClick={()=>setBView(null)}>✕</button>
            </div>
            <div className="mti">{bView.title}</div>
            <div className="mbo">{renderContent(bView.content)}</div>
            <div className="mft">
              {/* Share from modal */}
              <button className="bat bat-s" onClick={()=>doShare(bView)} onMouseEnter={on} onMouseLeave={off}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>Share Post
              </button>
              {/* Like from modal */}
              <button className={"like-btn"+(liked.has(bView.id)?" liked":"")} onClick={()=>doLike(bView.id)} onMouseEnter={on} onMouseLeave={off}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill={liked.has(bView.id)?"#f472b6":"none"} stroke={liked.has(bView.id)?"#f472b6":"currentColor"} strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
                {(likes[bView.id]||0)>0 ? (likes[bView.id]||0)+" likes" : "Like"}
              </button>
              {/* Admin edit from modal */}
              {isAdmin&&(
                <button className="bat bat-e" style={{marginLeft:"auto"}} onClick={()=>{setBView(null);setBEdit(bView);}} onMouseEnter={on} onMouseLeave={off}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>Edit
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Editor Modal (admin only) ── */}
      {bEdit!==null&&<Editor blog={bEdit} T={T} onSave={doSave} onClose={()=>setBEdit(null)}/>}

      {/* ── Admin Login Modal ── */}
      {showLogin&&<AdminLogin T={T} onLogin={()=>{setIsAdmin(true);setShowLogin(false);showToast("Welcome back, Abhishek ✓");}} onClose={()=>setShowLogin(false)}/>}

      {/* ── Toast ── */}
      {toast.msg&&<div className={"tst "+toast.type}>{toast.msg}</div>}
    </>
  );
}

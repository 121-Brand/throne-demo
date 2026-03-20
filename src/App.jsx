import { useState, useEffect, useRef } from "react";
import { Crown, ChevronRight, ChevronLeft, CheckCircle, Sparkles, Activity, Target, HardHat, Maximize, Minimize, Users, BookOpen, Calculator, Briefcase, Clock } from "lucide-react";

const A="#D4A843",G="#34D399",R="#F87171",B="#60A5FA",P="#A78BFA",BG="#0D0F13",CD="#1A1D24",CD2="#22262F",BR="#2A2E38",TX="#E8E6E1",T2="#9CA3AF";

const steps=[
  {id:"title",label:"Throne",sec:"Intro"},
  {id:"marcus",label:"The Problem",sec:"Intro"},
  {id:"bridge",label:"The Answer",sec:"Intro"},
  {id:"layers",label:"Three Layers",sec:"Solution"},
  {id:"onboard",label:"Onboarding",sec:"Solution"},
  {id:"formula",label:"Formula Demo",sec:"Product"},
  {id:"agents",label:"AI Agents",sec:"Product"},
  {id:"business",label:"Pricing & Market",sec:"Business"},
  {id:"close",label:"Close",sec:"Close"},
];

const sections=["Intro","Solution","Product","Business","Close"];
const secColors={Intro:B,Solution:A,Product:G,Business:A,Close:A};

function Badge({children,color=A}){return <span style={{background:`${color}22`,color,fontSize:10,fontWeight:600,padding:"3px 10px",borderRadius:16,whiteSpace:"nowrap"}}>{children}</span>}
function Card({children,style={},accent}){return <div style={{background:CD,border:`1px solid ${BR}`,borderRadius:10,padding:"14px 16px",position:"relative",overflow:"hidden",...style}}>{accent&&<div style={{position:"absolute",top:0,left:0,right:0,height:2,background:accent}}/>}{children}</div>}

function AnimNum({value,color=A}){
  const[d,setD]=useState(0);
  useEffect(()=>{setD(0);let n=0;const end=typeof value==="number"?value:0;const tick=()=>{n+=Math.ceil((end-n)/10);if(n>=end){setD(end);return}setD(n);requestAnimationFrame(tick)};requestAnimationFrame(tick)},[value]);
  return <span style={{color,fontWeight:800,fontFamily:"Georgia,serif"}}>{d.toLocaleString()}</span>;
}

function Pulse({children,onClick,style={}}){
  const[p,setP]=useState(false);
  return <button onClick={()=>{setP(true);setTimeout(()=>setP(false),150);onClick?.()}} style={{transform:p?"scale(0.96)":"scale(1)",transition:"transform 0.12s",cursor:"pointer",border:"none",...style}}>{children}</button>;
}

// ===== SLIDES =====

function SlideTitle(){
  return <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:12}}>
    <Crown size={56} color={A}/>
    <div style={{fontSize:52,fontWeight:800,color:TX,letterSpacing:"0.12em",fontFamily:"Georgia,serif"}}>THRONE</div>
    <div style={{width:100,height:3,background:A,borderRadius:2}}/>
    <div style={{fontSize:18,color:T2,marginTop:6}}>The operating system that works as hard as you.</div>
    <div style={{fontSize:12,color:T2,marginTop:16}}>Ezra Hoehne · Spencer Walraven · Chase Brink</div>
  </div>;
}

function SlideMarcus(){
  return <div style={{display:"flex",gap:24,alignItems:"stretch",height:"100%"}}>
    <div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",gap:6}}>
      <div style={{color:A,fontSize:15,fontWeight:600}}>Meet Marcus</div>
      <h2 style={{fontSize:28,fontWeight:700,color:TX,margin:"0 0 12px",fontFamily:"Georgia,serif"}}>His business is running him.</h2>
      <div style={{display:"flex",flexDirection:"column",gap:6}}>
        {[
          {t:"Phoenix Home Services doing $1.2M/year",c:R},
          {t:"Handyman + roofing",c:R},
          {t:"6 employees, 8 subs",c:G},
          {t:"Quoting takes 45 minutes",c:A},
          {t:"Pricing has been wrong for months",c:A},
          {t:"4 tools that don't talk to each other",c:B},
        ].map((x,i) =>
          <div key={i} style={{display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:4,height:24,background:x.c,borderRadius:2,flexShrink:0}}/>
            <span style={{color:TX,fontSize:14,fontWeight:600}}>{x.t}</span>
          </div>
        )}
      </div>
    </div>
    <div style={{display:"flex",flexDirection:"column",gap:12,width:200,justifyContent:"center"}}>
      <Card style={{textAlign:"center",padding:"18px 12px"}}>
        <div style={{fontSize:40,fontWeight:800,color:R,fontFamily:"Georgia,serif"}}>60-80</div>
        <div style={{color:T2,fontSize:10,marginTop:4}}>Hrs/week — because the</div>
        <div style={{color:T2,fontSize:10}}>"system" is him</div>
      </Card>
      <Card style={{textAlign:"center",padding:"18px 12px"}}>
        <div style={{fontSize:40,fontWeight:800,color:A,fontFamily:"Georgia,serif"}}>$96K</div>
        <div style={{color:T2,fontSize:10,marginTop:4}}>Lost per year to inefficiency</div>
        <div style={{color:T2,fontSize:10}}>he can't see</div>
      </Card>
    </div>
  </div>;
}

function SlideBridge(){
  return <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"}}>
    <div style={{fontSize:36,fontWeight:700,color:TX,fontFamily:"Georgia,serif",textAlign:"center",lineHeight:1.3}}>What if one simple, robust system<br/>replaced all of it?</div>
    <div style={{width:80,height:3,background:A,borderRadius:2,marginTop:20}}/>
  </div>;
}

function SlideLayers(){
  const layers=[
    {n:"Level 1",t:"The Filing Cabinet",d:"All your data, organized, with cross-platform API integration.",c:B},
    {n:"Level 2",t:"The Smartest Employee",d:"Industry-specific formulas. Least amount of inputs = maximum amount of outputs.",c:A},
    {n:"Level 3",t:"The Virtual Ops Manager",d:"9 built-in AI agents that do the work. Open API for custom automation.",c:G},
  ];
  return <div style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"}}>
    <Badge color={A}>The Solution</Badge>
    <h2 style={{fontSize:30,fontWeight:700,color:TX,margin:"8px 0 20px",fontFamily:"Georgia,serif"}}>Three layers. One platform.</h2>
    <div style={{display:"flex",flexDirection:"column",gap:12}}>
      {layers.map((l,i) =>
        <Card key={i} style={{padding:"14px 18px",borderLeft:`4px solid ${l.c}`}}>
          <div style={{display:"flex",alignItems:"center",gap:16}}>
            <span style={{color:l.c,fontSize:12,fontWeight:700,width:50}}>{l.n}</span>
            <div>
              <div style={{color:TX,fontSize:18,fontWeight:700,fontFamily:"Georgia,serif"}}>{l.t}</div>
              <div style={{color:T2,fontSize:12,marginTop:2}}>{l.d}</div>
            </div>
          </div>
        </Card>
      )}
    </div>
  </div>;
}

function SlideOnboard(){
  const[step,setStep]=useState(0);
  const ob=[
    {l:"Account Created",d:"Google sign-in. 30 seconds.",ic:CheckCircle},
    {l:"Formulas Selected",d:"On-Call Labor + Small Repeatable + Custom Large Scale.",ic:Crown},
    {l:"Catalog Loaded",d:"152 services, pricing, SOPs, checklists — from Best Practices or your own docs.",ic:BookOpen},
    {l:"AI Transfers Your Data",d:"Upload any spreadsheet, PDF, or export — AI maps and imports it automatically.",ic:Sparkles},
    {l:"Pricing Configured",d:"Labor rate, markup, margin target. Sample calc shown live.",ic:Calculator},
    {l:"Team Invited",d:"Role-based access. Field techs get mobile, admin gets desktop.",ic:Users},
    {l:"First Quote Sent",d:"Formula-compiled, client-ready. Total time: 11 minutes.",ic:CheckCircle},
  ];
  useEffect(()=>{if(step<ob.length-1){const t=setTimeout(()=>setStep(s=>s+1),800);return()=>clearTimeout(t)}},[step]);
  return <div style={{display:"flex",gap:20,alignItems:"stretch",height:"100%"}}>
    <div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <Badge color={G}>Onboarding</Badge>
      <h2 style={{fontSize:22,fontWeight:700,color:TX,margin:"8px 0 4px",fontFamily:"Georgia,serif"}}>Signup to sending first quote in 11 minutes.</h2>
      <div style={{padding:8,background:`${R}11`,borderRadius:6,border:`1px solid ${R}33`,marginBottom:12}}>
        <span style={{color:TX,fontSize:11,fontWeight:600}}>Other systems take weeks or months to set up. </span>
        <span style={{color:T2,fontSize:11}}>Throne has a smart AI that transfers your existing documents into our format — making the entire process incredibly simple.</span>
      </div>
      <Card>
        <div style={{display:"flex",flexDirection:"column",gap:2}}>
          {ob.map((o,i)=>{const done=i<=step;const active=i===step;return <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"6px 10px",background:active?`${G}11`:"transparent",borderRadius:6,opacity:done?1:0.25,transition:"all 0.3s"}}>
            <div style={{width:22,height:22,borderRadius:"50%",background:done?`${G}22`:CD2,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              {done?<CheckCircle size={11} color={G}/>:<span style={{color:T2,fontSize:9}}>{i+1}</span>}
            </div>
            <div style={{flex:1}}>
              <span style={{color:done?TX:T2,fontSize:11,fontWeight:600}}>{o.l}</span>
              <span style={{color:T2,fontSize:10,marginLeft:6}}>{o.d}</span>
            </div>
          </div>})}
        </div>
      </Card>
    </div>
    {step>=ob.length-1&&<div style={{width:180,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:`${G}11`,borderRadius:12,padding:16,border:`1px solid ${G}33`}}>
      <Sparkles size={24} color={G}/>
      <div style={{color:G,fontSize:32,fontWeight:800,margin:"6px 0 4px",fontFamily:"Georgia,serif"}}>11 min</div>
      <div style={{color:T2,fontSize:10,textAlign:"center"}}>152 services loaded.<br/>Pricing engine live.<br/>Team has access.<br/>First quote sent.</div>
    </div>}
  </div>;
}

function SlideFormula(){
  const[loading,setLoading]=useState(false);
  const[fired,setFired]=useState(false);
  const fire=()=>{if(fired)return;setLoading(true);setTimeout(()=>{setLoading(false);setFired(true)},1200)};
  return <div style={{display:"flex",gap:16,alignItems:"stretch",height:"100%"}}>
    <div style={{width:240,display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
        <HardHat size={16} color={G}/><Badge color={G}>Small Repeatable</Badge>
      </div>
      <div style={{color:T2,fontSize:11,marginBottom:10}}>One of our <span style={{color:TX,fontWeight:600}}>three powerful formulas</span>. Each one compiles complete operational output from minimal input.</div>
      <Card accent={G} style={{padding:"10px 12px",marginBottom:10}}>
        <div style={{color:G,fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:6}}>Input</div>
        <div style={{background:BG,borderRadius:6,padding:8,fontFamily:"'Courier New',monospace",fontSize:11,color:G,lineHeight:1.7,whiteSpace:"pre-line"}}>{"Job: Flat Roof Recoat\nSqft: 4,200\nTier: Standard"}</div>
      </Card>
      {!fired ? (
        <Pulse onClick={fire} style={{width:"100%",padding:"10px 0",background:loading?CD2:G,borderRadius:8,color:loading?T2:"#000",fontSize:12,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
          {loading?<><span style={{display:"inline-block",animation:"spin 1s linear infinite"}}>⟳</span> Compiling...</>:<><Sparkles size={12}/> Run Formula</>}
        </Pulse>
      ) : (
        <div style={{textAlign:"center",padding:8,background:`${G}22`,borderRadius:8}}>
          <span style={{color:G,fontSize:12,fontWeight:600}}>✓ Compiled in 1.8s</span>
        </div>
      )}
    </div>
    <div style={{flex:1,opacity:fired?1:0.08,transition:"opacity 0.6s",display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <Card accent={fired?G:BR}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
          <span style={{color:G,fontSize:10,fontWeight:700,textTransform:"uppercase"}}>Throne Compiles</span>
          <span style={{fontSize:26,fontWeight:800,color:TX,fontFamily:"Georgia,serif"}}>$18,480</span>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:8}}>
          <div style={{background:CD2,borderRadius:8,padding:10}}>
            <div style={{color:A,fontSize:9,fontWeight:700,marginBottom:6}}>SERVICES & PRICING</div>
            {["Pressure Wash — $2,100","Primer (4,200×$1.20) — $5,040","Finish (4,200×$1.85) — $7,770","Flashing — $1,890","Inspection — $680","Markup — $1,000"].map((s,i) => <div key={i} style={{color:T2,fontSize:10,padding:"2px 0",borderBottom:i<5?`1px solid ${BR}`:"none"}}>{s}</div>)}
          </div>
          <div style={{background:CD2,borderRadius:8,padding:10}}>
            <div style={{color:G,fontSize:9,fontWeight:700,marginBottom:6}}>ALSO GENERATED</div>
            {["Weather protocol","3-day crew schedule","QA thickness test","Photo documentation","Maintenance plan offer","Upsell triggers"].map((s,i) => <div key={i} style={{color:T2,fontSize:10,padding:"2px 0",display:"flex",gap:4,alignItems:"center"}}><CheckCircle size={8} color={G}/>{s}</div>)}
          </div>
        </div>
        <div style={{background:BG,borderRadius:6,padding:8,color:T2,fontSize:11}}>44% margin | {"<"}3% callback | 78% maintenance renewal</div>
      </Card>
    </div>
  </div>;
}

function SlideAgents(){
  return <div style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"}}>
    <Badge color={P}>L3 AI Agents</Badge>
    <h2 style={{fontSize:22,fontWeight:700,color:TX,margin:"8px 0 4px",fontFamily:"Georgia,serif"}}>Superpowered by the three-layer system.</h2>
    <p style={{color:T2,fontSize:11,margin:"0 0 12px"}}>These are 2 of 9 agents. All powered by your real L1 data compiled through L2 Formulas.</p>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
      <Card accent={R}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><Activity size={15} color={R}/><span style={{color:TX,fontSize:14,fontWeight:700}}>Pricebook Drift Engine</span></div>
        <p style={{color:T2,fontSize:11,lineHeight:1.5,margin:"0 0 10px"}}>Compares estimated vs actual costs across every completed job. Finds the money you're losing and fixes it with one click.</p>
        <Card style={{background:BG,padding:"8px 10px"}}>
          <div style={{color:T2,fontSize:9,marginBottom:3}}>90-day analysis · 31 completed jobs</div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline"}}>
            <span style={{color:TX,fontSize:11}}>Monthly recovery:</span>
            <span style={{color:A,fontSize:20,fontWeight:800,fontFamily:"Georgia,serif"}}>$<AnimNum value={3840} color={A}/>/mo</span>
          </div>
        </Card>
        <div style={{fontSize:10,color:G,fontWeight:600,marginTop:6}}>One-click apply. Every change reversible.</div>
      </Card>
      <Card accent={G}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><Target size={15} color={G}/><span style={{color:TX,fontSize:14,fontWeight:700}}>Service Plan Advisor</span></div>
        <p style={{color:T2,fontSize:11,lineHeight:1.5,margin:"0 0 10px"}}>Analyzes job history and finds recurring revenue hiding in one-time jobs. Builds the plan, prices it, projects the ROI.</p>
        <Card style={{background:BG,padding:"8px 10px"}}>
          <div style={{color:TX,fontSize:12,fontWeight:700,marginBottom:2}}>Annual Roof Care Plan — $833/yr</div>
          <div style={{color:T2,fontSize:10}}>Inspection + drain cleaning + touch-up coating</div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginTop:6}}>
            <span style={{color:T2,fontSize:10}}>At 20 clients:</span>
            <span style={{color:G,fontSize:20,fontWeight:800,fontFamily:"Georgia,serif"}}>$<AnimNum value={16660} color={G}/>/yr</span>
          </div>
        </Card>
        <div style={{fontSize:10,color:A,fontWeight:600,marginTop:6}}>Recurring revenue = 3-5x valuation multiplier.</div>
      </Card>
    </div>
  </div>;
}

function SlideBusiness(){
  const tiers=[
    {n:"Students",p:"Free",d:"Verified school email · 2 yrs · 3 users",c:T2},
    {n:"Startup",p:"$100/mo",d:"3 users · L1+L2",c:B},
    {n:"Business",p:"$300/mo",d:"Unlimited users · L1+L2",c:G},
    {n:"Automated Scale",p:"$500/mo",d:"Unlimited · L1+L2+L3 · 9 agents",c:A},
  ];
  const tools=[
    {l:"Construction CRM",p:32,c:B},
    {l:"Generic CRM",p:29,c:P},
    {l:"Custom / In-House",p:22,c:A},
    {l:"Just Outlook",p:17,c:R},
  ];
  return <div style={{display:"flex",gap:20,alignItems:"stretch",height:"100%"}}>
    {/* Left: Pricing */}
    <div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <Badge color={A}>Pricing</Badge>
      <h2 style={{fontSize:22,fontWeight:700,color:TX,margin:"8px 0 14px",fontFamily:"Georgia,serif"}}>Simple pricing.</h2>
      <div style={{display:"flex",flexDirection:"column",gap:6}}>
        {tiers.map((t,i) =>
          <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 14px",background:CD,borderRadius:8,borderLeft:`3px solid ${t.c}`}}>
            <span style={{color:TX,fontSize:13,fontWeight:700,width:110}}>{t.n}</span>
            <span style={{color:t.c,fontSize:18,fontWeight:800,fontFamily:"Georgia,serif",width:90}}>{t.p}</span>
            <span style={{color:T2,fontSize:10}}>{t.d}</span>
          </div>
        )}
      </div>
      <div style={{color:T2,fontSize:10,marginTop:8}}>Plus: $2K setup · $20K consulting bundle ($28K value)</div>
    </div>
    {/* Right: Market */}
    <div style={{width:280,display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <Badge color={B}>Market</Badge>
      <div style={{marginTop:8,marginBottom:12}}>
        {tools.map((t,i) =>
          <div key={i} style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
            <span style={{color:t.c,fontSize:16,fontWeight:800,fontFamily:"Georgia,serif",width:40,textAlign:"right"}}>{t.p}%</span>
            <div style={{flex:1}}>
              <div style={{color:TX,fontSize:11,fontWeight:600}}>{t.l}</div>
              <div style={{height:3,background:CD,borderRadius:2,overflow:"hidden",marginTop:2}}>
                <div style={{height:"100%",width:`${t.p*2.5}%`,background:t.c,borderRadius:2,opacity:0.5}}/>
              </div>
            </div>
          </div>
        )}
      </div>
      <div style={{display:"flex",gap:8}}>
        <Card style={{flex:1,textAlign:"center",padding:10}}>
          <div style={{color:G,fontSize:24,fontWeight:800,fontFamily:"Georgia,serif"}}><AnimNum value={680} color={G}/>K</div>
          <div style={{color:T2,fontSize:9}}>target businesses</div>
        </Card>
        <Card style={{flex:1,textAlign:"center",padding:10}}>
          <div style={{color:A,fontSize:24,fontWeight:800,fontFamily:"Georgia,serif"}}>$1.6B</div>
          <div style={{color:T2,fontSize:9}}>addressable/yr</div>
        </Card>
      </div>
      <div style={{marginTop:8,padding:6,background:`${R}11`,borderRadius:6,border:`1px solid ${R}33`}}>
        <span style={{color:TX,fontSize:9,fontWeight:600}}>#1 complaint: </span>
        <span style={{color:T2,fontSize:9}}>CRMs take as much time to manage as they save. Throne takes 11 min to set up.</span>
      </div>
    </div>
  </div>;
}

function SlideClose(){
  return <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:12}}>
    <Crown size={52} color={A}/>
    <div style={{fontSize:48,fontWeight:800,color:TX,letterSpacing:"0.1em",fontFamily:"Georgia,serif"}}>THRONE</div>
    <div style={{width:80,height:3,background:A,borderRadius:2}}/>
    <div style={{fontSize:17,color:T2,marginTop:8,textAlign:"center",fontStyle:"italic",lineHeight:1.4}}>Your business deserves a system<br/>that works as hard as you do.</div>
    <div style={{fontSize:15,color:A,fontWeight:700,marginTop:12}}>demo.thronesystem.com</div>
  </div>;
}

// ===== SHELL =====

export default function App(){
  const[cur,setCur]=useState(0);
  const ref=useRef(null);
  const[fs,setFs]=useState(false);

  useEffect(()=>{ref.current?.scrollTo({top:0})},[cur]);

  useEffect(()=>{
    const h=(e)=>{
      if(e.key==="ArrowRight"||e.key===" "){e.preventDefault();setCur(c=>Math.min(steps.length-1,c+1))}
      else if(e.key==="ArrowLeft"){e.preventDefault();setCur(c=>Math.max(0,c-1))}
      else if(e.key==="f"||e.key==="F"){e.preventDefault();toggleFs()}
    };
    window.addEventListener("keydown",h);
    return ()=>window.removeEventListener("keydown",h);
  },[]);

  const toggleFs=()=>{
    if(!document.fullscreenElement){document.documentElement.requestFullscreen().catch(()=>{});setFs(true)}
    else{document.exitFullscreen();setFs(false)}
  };

  const render=()=>{
    switch(steps[cur].id){
      case"title":return <SlideTitle/>;
      case"marcus":return <SlideMarcus/>;
      case"bridge":return <SlideBridge/>;
      case"layers":return <SlideLayers/>;
      case"onboard":return <SlideOnboard/>;
      case"formula":return <SlideFormula/>;
      case"agents":return <SlideAgents/>;
      case"business":return <SlideBusiness/>;
      case"close":return <SlideClose/>;
      default:return null;
    }
  };

  return <div style={{height:"100vh",width:"100vw",background:BG,fontFamily:"'Segoe UI',system-ui,sans-serif",color:TX,display:"flex",flexDirection:"column",overflow:"hidden"}}>
    <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');*{box-sizing:border-box;margin:0;padding:0}@keyframes spin{to{transform:rotate(360deg)}}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:${BR};border-radius:2px}`}</style>

    {/* Header */}
    <div style={{padding:"8px 20px",borderBottom:`1px solid ${BR}`,display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
      <div style={{display:"flex",alignItems:"center",gap:8}}>
        <div style={{width:28,height:28,borderRadius:6,background:`linear-gradient(135deg,${A},#B8860B)`,display:"flex",alignItems:"center",justifyContent:"center"}}><Crown size={14} color="#000"/></div>
        <span style={{color:TX,fontSize:14,fontWeight:800,letterSpacing:"0.06em"}}>THRONE</span>
        <span style={{color:T2,fontSize:11}}>Investor Demo</span>
      </div>
      <div style={{display:"flex",gap:12,alignItems:"center"}}>
        <span style={{color:T2,fontSize:11}}>{cur+1} / {steps.length}</span>
        <button onClick={toggleFs} style={{background:"none",border:"none",cursor:"pointer",color:T2,display:"flex"}}>{fs?<Minimize size={14}/>:<Maximize size={14}/>}</button>
      </div>
    </div>

    {/* Section bar */}
    <div style={{padding:"6px 20px",borderBottom:`1px solid ${BR}`,display:"flex",gap:2,flexShrink:0}}>
      {sections.map(s=>{const active=steps[cur].sec===s;const passed=sections.indexOf(steps[cur].sec)>sections.indexOf(s);
        return <div key={s} style={{flex:1,padding:"4px 0",textAlign:"center",borderRadius:4,background:active?`${secColors[s]}22`:passed?`${G}08`:"transparent",borderBottom:`2px solid ${active?secColors[s]:passed?G:"transparent"}`,transition:"all 0.3s"}}>
          <span style={{fontSize:10,fontWeight:active?700:400,color:active?secColors[s]:passed?G:T2}}>{s}</span>
        </div>
      })}
    </div>

    {/* Step pills */}
    <div style={{padding:"6px 20px",borderBottom:`1px solid ${BR}`,display:"flex",gap:3,overflow:"auto",flexShrink:0}}>
      {steps.map((s,i)=><button key={i} onClick={()=>setCur(i)} style={{
        padding:"3px 10px",borderRadius:14,border:"none",cursor:"pointer",fontSize:10,fontWeight:i===cur?700:400,whiteSpace:"nowrap",
        background:i===cur?`${A}22`:i<cur?`${G}10`:"transparent",color:i===cur?A:i<cur?G:T2,
      }}>{i<cur?"✓ ":""}{s.label}</button>)}
    </div>

    {/* Content */}
    <div ref={ref} style={{flex:1,overflow:"auto",padding:"16px 20px"}}>
      <div key={cur} style={{maxWidth:840,margin:"0 auto",height:"100%"}}>{render()}</div>
    </div>

    {/* Nav */}
    <div style={{padding:"8px 20px",borderTop:`1px solid ${BR}`,display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
      <Pulse onClick={()=>setCur(c=>Math.max(0,c-1))} style={{display:"flex",alignItems:"center",gap:4,padding:"6px 14px",background:cur===0?CD:CD2,borderRadius:6,color:cur===0?T2:TX,fontSize:12,opacity:cur===0?0.4:1}}>
        <ChevronLeft size={14}/> Back
      </Pulse>
      <div style={{display:"flex",gap:3}}>{steps.map((_,i)=><div key={i} style={{width:i===cur?18:5,height:4,borderRadius:2,background:i===cur?A:i<cur?G:BR,transition:"all 0.3s"}}/>)}</div>
      {cur<steps.length-1?
        <Pulse onClick={()=>setCur(c=>c+1)} style={{display:"flex",alignItems:"center",gap:4,padding:"6px 14px",background:A,borderRadius:6,color:"#000",fontSize:12,fontWeight:700}}>Continue <ChevronRight size={14}/></Pulse>:
        <Pulse onClick={()=>setCur(0)} style={{display:"flex",alignItems:"center",gap:4,padding:"6px 14px",background:A,borderRadius:6,color:"#000",fontSize:12,fontWeight:700}}>↻ Start Over</Pulse>
      }
    </div>
  </div>;
}

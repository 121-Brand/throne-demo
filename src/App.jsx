import { useState, useEffect, useRef } from "react";
import { Crown, ChevronRight, ChevronLeft, CheckCircle, Sparkles, Activity, Target, Wrench, HardHat, Building2, Maximize, Minimize, Users, BookOpen, Calculator, Briefcase, Clock } from "lucide-react";

const A="#D4A843",G="#34D399",R="#F87171",B="#60A5FA",P="#A78BFA",BG="#0D0F13",CD="#1A1D24",CD2="#22262F",BR="#2A2E38",TX="#E8E6E1",T2="#9CA3AF";

const steps=[
  {id:"title",label:"Throne",day:"Intro"},
  {id:"marcus",label:"The Problem",day:"Intro"},
  {id:"bridge",label:"The Answer",day:"Intro"},
  {id:"layers",label:"Three Layers",day:"Solution"},
  {id:"onboard",label:"Onboarding",day:"Solution"},
  {id:"f1",label:"On-Call Labor",day:"Formulas"},
  {id:"f2",label:"Small Repeatable",day:"Formulas"},
  {id:"f3",label:"Large Scale",day:"Formulas"},
  {id:"agents",label:"AI Agents",day:"AI Power"},
  {id:"pricing",label:"Pricing",day:"Business"},
  {id:"market",label:"Opportunity",day:"Business"},
  {id:"close",label:"Close",day:"Close"},
];

const dayList=["Intro","Solution","Formulas","AI Power","Business","Close"];
const dayColors={Intro:B,Solution:A,Formulas:G,"AI Power":P,Business:A,Close:A};

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

// ===================== SLIDES =====================

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
    <div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",gap:8}}>
      <Badge color={R}>The Problem</Badge>
      <h2 style={{fontSize:26,fontWeight:700,color:TX,margin:0,fontFamily:"Georgia,serif"}}>Meet Marcus. His business is running him.</h2>
      <p style={{color:T2,fontSize:13,lineHeight:1.5,margin:0}}>Phoenix Home Services — $1.2M/year. Handyman + roofing. 6 employees, 8 subs. Successful by every measure. But it runs on his brain, and that doesn't scale.</p>
      <div style={{display:"flex",flexDirection:"column",gap:8,marginTop:4}}>
        {[
          {icon:"⏱",t:"Quoting takes 45 minutes",d:"Pricing lives in a spreadsheet only he understands",c:R},
          {icon:"💸",t:"Pricing has been wrong for months",d:"Nobody catches it until the P&L comes in short",c:A},
          {icon:"🔧",t:"4 tools that don't talk to each other",d:"Spreadsheets + Jobber + texts + his head",c:B},
          {icon:"📋",t:"$96K lost per year to invisible inefficiency",d:"Stale pricing, missed follow-ups, untracked costs",c:A},
        ].map((x,i) =>
          <Card key={i} style={{padding:"8px 12px"}} accent={x.c}>
            <div style={{display:"flex",gap:8,alignItems:"flex-start"}}>
              <span style={{fontSize:13,flexShrink:0}}>{x.icon}</span>
              <div><span style={{color:TX,fontSize:12,fontWeight:600}}>{x.t}</span> <span style={{color:T2,fontSize:11}}>— {x.d}</span></div>
            </div>
          </Card>
        )}
      </div>
    </div>
    <div style={{display:"flex",flexDirection:"column",gap:10,width:180,justifyContent:"center"}}>
      <Card style={{textAlign:"center",padding:"14px 10px"}}>
        <div style={{fontSize:32,fontWeight:800,color:R,fontFamily:"Georgia,serif"}}>60-80</div>
        <div style={{color:T2,fontSize:9,marginTop:3}}>hrs/week — the "system" is him</div>
      </Card>
      <Card style={{textAlign:"center",padding:"14px 10px",background:`${G}11`,border:`1px solid ${G}33`}}>
        <div style={{fontSize:32,fontWeight:800,color:G,fontFamily:"Georgia,serif"}}>40</div>
        <div style={{color:G,fontSize:9,marginTop:3}}>what Throne gets him to</div>
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
    {l:"Account Created",d:"Business name, Google sign-in. 30 seconds.",ic:CheckCircle},
    {l:"Business Profile",d:"Residential contractor, $1-2M, Phoenix AZ.",ic:Briefcase},
    {l:"Formulas Selected",d:"On-Call Labor (handyman) + Small Repeatable (roofing).",ic:Crown},
    {l:"Catalog Loaded",d:"152 services, pricing models, SOPs, checklists — instantly.",ic:BookOpen},
    {l:"Pricing Configured",d:"$35/hr loaded · 25% material markup · 40% target margin.",ic:Calculator},
    {l:"Team Invited",d:"6 users, role-based access. Field techs → mobile. Admin → desktop.",ic:Users},
    {l:"First Quote Sent",d:"Formula-compiled, client-ready. Total time: 11 minutes.",ic:Sparkles},
  ];
  useEffect(()=>{if(step<ob.length-1){const t=setTimeout(()=>setStep(s=>s+1),900);return()=>clearTimeout(t)}},[step]);
  return <div style={{display:"flex",gap:20,alignItems:"stretch",height:"100%"}}>
    <div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <Badge color={G}>Onboarding</Badge>
      <h2 style={{fontSize:24,fontWeight:700,color:TX,margin:"8px 0 4px",fontFamily:"Georgia,serif"}}>Signup to sending first quote in 11 minutes.</h2>
      <p style={{color:T2,fontSize:12,margin:"0 0 14px"}}>Not days. Not weeks. Marcus is operational before his coffee gets cold.</p>
      <Card>
        <div style={{display:"flex",flexDirection:"column",gap:2}}>
          {ob.map((o,i)=>{const done=i<=step;const active=i===step;return <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"7px 10px",background:active?`${G}11`:"transparent",borderRadius:6,opacity:done?1:0.25,transition:"all 0.3s"}}>
            <div style={{width:24,height:24,borderRadius:"50%",background:done?`${G}22`:CD2,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              {done?<CheckCircle size={12} color={G}/>:<span style={{color:T2,fontSize:9}}>{i+1}</span>}
            </div>
            <div style={{flex:1}}>
              <span style={{color:done?TX:T2,fontSize:12,fontWeight:600}}>{o.l}</span>
              <span style={{color:T2,fontSize:10,marginLeft:6}}>{o.d}</span>
            </div>
          </div>})}
        </div>
      </Card>
    </div>
    {step>=ob.length-1&&<div style={{width:200,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:`${G}11`,borderRadius:12,padding:20,border:`1px solid ${G}33`}}>
      <Sparkles size={28} color={G}/>
      <div style={{color:G,fontSize:36,fontWeight:800,margin:"8px 0 4px",fontFamily:"Georgia,serif"}}>11 min</div>
      <div style={{color:T2,fontSize:11,textAlign:"center"}}>152 services loaded.<br/>Pricing engine live.<br/>Team has access.<br/>First quote sent.</div>
    </div>}
  </div>;
}

function FormulaSlide({type,color,icon:Icon,inputs,total,services,extras,metrics}){
  const[loading,setLoading]=useState(false);
  const[fired,setFired]=useState(false);
  const fire=()=>{if(fired)return;setLoading(true);setTimeout(()=>{setLoading(false);setFired(true)},1200)};

  return <div style={{display:"flex",gap:16,alignItems:"stretch",height:"100%"}}>
    <div style={{width:240,display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
        <Icon size={16} color={color}/><Badge color={color}>{type}</Badge>
      </div>
      <Card accent={color} style={{padding:"10px 12px",marginBottom:10}}>
        <div style={{color,fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:6}}>Input</div>
        <div style={{background:BG,borderRadius:6,padding:8,fontFamily:"'Courier New',monospace",fontSize:11,color:G,lineHeight:1.7,whiteSpace:"pre-line"}}>{inputs}</div>
      </Card>
      {!fired ? (
        <Pulse onClick={fire} style={{width:"100%",padding:"10px 0",background:loading?CD2:color,borderRadius:8,color:loading?T2:"#000",fontSize:12,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
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
          <span style={{fontSize:26,fontWeight:800,color:TX,fontFamily:"Georgia,serif"}}>{total}</span>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:8}}>
          <div style={{background:CD2,borderRadius:8,padding:10}}>
            <div style={{color:A,fontSize:9,fontWeight:700,marginBottom:6}}>SERVICES & PRICING</div>
            {services.map((s,i) => <div key={i} style={{color:T2,fontSize:10,padding:"2px 0",borderBottom:i<services.length-1?`1px solid ${BR}`:"none"}}>{s}</div>)}
          </div>
          <div style={{background:CD2,borderRadius:8,padding:10}}>
            <div style={{color:G,fontSize:9,fontWeight:700,marginBottom:6}}>ALSO GENERATED</div>
            {extras.map((s,i) => <div key={i} style={{color:T2,fontSize:10,padding:"2px 0",display:"flex",gap:4,alignItems:"center"}}><CheckCircle size={8} color={G}/>{s}</div>)}
          </div>
        </div>
        <div style={{background:BG,borderRadius:6,padding:8,color:T2,fontSize:11}}>{metrics}</div>
      </Card>
    </div>
  </div>;
}

function SlideAgents(){
  return <div style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"}}>
    <Badge color={P}>L3 AI Agents</Badge>
    <h2 style={{fontSize:24,fontWeight:700,color:TX,margin:"8px 0 4px",fontFamily:"Georgia,serif"}}>Superpowered by the three-layer system.</h2>
    <p style={{color:T2,fontSize:12,margin:"0 0 14px"}}>These are 2 of 9 agents. All powered by your real L1 data compiled through L2 Formulas.</p>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
      <Card accent={R}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}><Activity size={16} color={R}/><span style={{color:TX,fontSize:15,fontWeight:700}}>Pricebook Drift Engine</span></div>
        <p style={{color:T2,fontSize:12,lineHeight:1.5,margin:"0 0 12px"}}>Compares estimated vs actual costs across every completed job. Finds the money you're losing and fixes it with one click.</p>
        <Card style={{background:BG,padding:"10px 12px"}}>
          <div style={{color:T2,fontSize:10,marginBottom:4}}>90-day analysis · 31 completed jobs</div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline"}}>
            <span style={{color:TX,fontSize:12}}>Monthly recovery:</span>
            <span style={{color:A,fontSize:22,fontWeight:800,fontFamily:"Georgia,serif"}}>$<AnimNum value={3840} color={A}/>/mo</span>
          </div>
        </Card>
        <div style={{fontSize:11,color:G,fontWeight:600,marginTop:8}}>One-click apply. Every change reversible.</div>
      </Card>
      <Card accent={G}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}><Target size={16} color={G}/><span style={{color:TX,fontSize:15,fontWeight:700}}>Service Plan Advisor</span></div>
        <p style={{color:T2,fontSize:12,lineHeight:1.5,margin:"0 0 12px"}}>Analyzes job history and finds recurring revenue hiding in one-time jobs. Builds the plan, prices it, projects the ROI.</p>
        <Card style={{background:BG,padding:"10px 12px"}}>
          <div style={{color:TX,fontSize:13,fontWeight:700,marginBottom:2}}>Annual Roof Care Plan — $833/yr</div>
          <div style={{color:T2,fontSize:10}}>Inspection + drain cleaning + touch-up coating</div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginTop:6}}>
            <span style={{color:T2,fontSize:11}}>At 20 clients:</span>
            <span style={{color:G,fontSize:22,fontWeight:800,fontFamily:"Georgia,serif"}}>$<AnimNum value={16660} color={G}/>/yr</span>
          </div>
        </Card>
        <div style={{fontSize:11,color:A,fontWeight:600,marginTop:8}}>Recurring revenue = 3-5x valuation multiplier.</div>
      </Card>
    </div>
  </div>;
}

function SlidePricing(){
  const tiers=[
    {n:"Students",p:"Free",d:"2 years · Verified with school email · 3 users · L1+L2",c:T2},
    {n:"Startup",p:"$100/mo",d:"3 users · L1+L2",c:B},
    {n:"Business",p:"$300/mo",d:"Unlimited users · L1+L2",c:G},
    {n:"Automated Scale",p:"$500/mo",d:"Unlimited users · L1+L2+L3 · 9 AI agents",c:A},
  ];
  return <div style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"}}>
    <Badge color={A}>Business Model</Badge>
    <h2 style={{fontSize:28,fontWeight:700,color:TX,margin:"8px 0 20px",fontFamily:"Georgia,serif"}}>Simple pricing.</h2>
    <div style={{display:"flex",flexDirection:"column",gap:10}}>
      {tiers.map((t,i) =>
        <Card key={i} style={{padding:"12px 16px",borderLeft:`4px solid ${t.c}`}}>
          <div style={{display:"flex",alignItems:"center",gap:20}}>
            <span style={{color:TX,fontSize:16,fontWeight:700,fontFamily:"Georgia,serif",width:150}}>{t.n}</span>
            <span style={{color:t.c,fontSize:22,fontWeight:800,fontFamily:"Georgia,serif",width:120}}>{t.p}</span>
            <span style={{color:T2,fontSize:13}}>{t.d}</span>
          </div>
        </Card>
      )}
    </div>
    <div style={{color:T2,fontSize:12,marginTop:14}}>Plus: $2K white-glove setup · $20K consulting bundle ($28K value)</div>
  </div>;
}

function SlideMarket(){
  const tools=[
    {l:"Construction CRM",p:32,d:"Buildertrend, Jobber — stores data, doesn't think",c:B},
    {l:"Generic CRM",p:29,d:"Salesforce, HubSpot — not built for contractors",c:P},
    {l:"Custom / In-House",p:22,d:"Spreadsheets that break when shared",c:A},
    {l:"Just Outlook",p:17,d:"Email is the entire system",c:R},
  ];
  return <div style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"}}>
    <Badge color={A}>The Opportunity</Badge>
    <h2 style={{fontSize:24,fontWeight:700,color:TX,margin:"8px 0 16px",fontFamily:"Georgia,serif"}}>Here's what contractors use today.</h2>
    <div style={{display:"flex",gap:20}}>
      <div style={{flex:1}}>
        {tools.map((t,i) =>
          <div key={i} style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
            <span style={{color:t.c,fontSize:20,fontWeight:800,fontFamily:"Georgia,serif",width:48,textAlign:"right",flexShrink:0}}>{t.p}%</span>
            <div style={{flex:1}}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <span style={{color:TX,fontSize:13,fontWeight:700}}>{t.l}</span>
                <span style={{color:T2,fontSize:10}}>— {t.d}</span>
              </div>
              <div style={{height:4,background:CD,borderRadius:2,overflow:"hidden",marginTop:4}}>
                <div style={{height:"100%",width:`${t.p*2.5}%`,background:t.c,borderRadius:2,opacity:0.5}}/>
              </div>
            </div>
          </div>
        )}
        <div style={{color:T2,fontSize:9,marginTop:4,fontStyle:"italic",marginLeft:60}}>Source: JBKnowledge Construction Technology Report</div>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:10,width:180}}>
        <Card style={{textAlign:"center",padding:14}}>
          <div style={{color:G,fontSize:32,fontWeight:800,fontFamily:"Georgia,serif"}}><AnimNum value={680} color={G}/>K</div>
          <div style={{color:T2,fontSize:10,marginTop:4}}>target businesses</div>
        </Card>
        <Card style={{textAlign:"center",padding:14}}>
          <div style={{color:A,fontSize:32,fontWeight:800,fontFamily:"Georgia,serif"}}>$1.6B</div>
          <div style={{color:T2,fontSize:10,marginTop:4}}>annual addressable</div>
          <div style={{color:T2,fontSize:9,marginTop:2}}>680K × $200/mo</div>
        </Card>
      </div>
    </div>
    <div style={{marginTop:14,padding:10,background:`${A}11`,borderRadius:8,textAlign:"center"}}>
      <span style={{color:TX,fontSize:13,fontWeight:600}}>None of these tools compile operational output from your data. That's what Throne does.</span>
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

// ===================== SHELL =====================

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
      case"f1":return <FormulaSlide type="On-Call Labor" color={B} icon={Wrench} inputs={"Service: Faucet + Disposal\nTier: Standard"} total="$485" services={["Faucet Replace — $185","Disposal Install — $265","Dispatch Fee — $35"]} extras={["6-step checklist","Material list","Upsell triggers","Schedule block","Invoice template"]} metrics="Avg ticket: $380 | First-visit completion: 94% | Response: <24hrs"/>;
      case"f2":return <FormulaSlide type="Small Repeatable" color={G} icon={HardHat} inputs={"Job: Flat Roof Recoat\nSqft: 4,200\nTier: Standard"} total="$18,480" services={["Pressure Wash — $2,100","Primer (4,200×$1.20) — $5,040","Finish (4,200×$1.85) — $7,770","Flashing — $1,890","Inspection — $680","Markup — $1,000"]} extras={["Weather protocol","3-day crew schedule","QA thickness test","Photo docs","Maintenance offer"]} metrics="44% margin | <3% callback | 78% maintenance renewal"/>;
      case"f3":return <FormulaSlide type="Custom Large Scale" color={A} icon={Building2} inputs={"Project: Kitchen Remodel\nTier: Standard\nSqft: 180"} total="$42,150" services={["Demo — $3,200","Electrical — $4,800","Plumbing — $3,600","Cabinets — $8,400","Countertop — $6,750","Tile — $2,880","Fixtures — $2,400","Paint — $1,850","Punch — $950","PM Overhead — $7,320"]} extras={["4-stage lifecycle","Sub assignments","Budget tracker","Change orders","Milestone invoicing","Warranty package"]} metrics="38-42% margin | <10% budget variance | <2 change orders"/>;
      case"agents":return <SlideAgents/>;
      case"pricing":return <SlidePricing/>;
      case"market":return <SlideMarket/>;
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
      {dayList.map(d=>{const active=steps[cur].day===d;const passed=dayList.indexOf(steps[cur].day)>dayList.indexOf(d);
        return <div key={d} style={{flex:1,padding:"4px 0",textAlign:"center",borderRadius:4,background:active?`${dayColors[d]}22`:passed?`${G}08`:"transparent",borderBottom:`2px solid ${active?dayColors[d]:passed?G:"transparent"}`,transition:"all 0.3s"}}>
          <span style={{fontSize:10,fontWeight:active?700:400,color:active?dayColors[d]:passed?G:T2}}>{d}</span>
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
    <div ref={ref} style={{flex:1,overflow:"auto",padding:"16px 20px",position:"relative"}}>
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

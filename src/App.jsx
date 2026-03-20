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

function FadeIn({children,delay=0,from="below",style={}}){
  const[v,setV]=useState(false);
  useEffect(()=>{const t=setTimeout(()=>setV(true),delay);return()=>clearTimeout(t)},[delay]);
  const transforms={below:"translateY(24px)",above:"translateY(-24px)",left:"translateX(-30px)",right:"translateX(30px)",none:"scale(0.97)"};
  return <div style={{opacity:v?1:0,transform:v?"translate(0) scale(1)":transforms[from]||transforms.below,transition:`opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,...style}}>{children}</div>;
}

function ExpandLine({delay=0,color=A,width=100,height=3}){
  const[v,setV]=useState(false);
  useEffect(()=>{const t=setTimeout(()=>setV(true),delay);return()=>clearTimeout(t)},[delay]);
  return <div style={{width:v?width:0,height,background:color,borderRadius:height/2,transition:`width 0.6s cubic-bezier(0.4,0,0.2,1) ${delay}ms`}}/>;
}

function CountUp({end,duration=1200,delay=0,prefix="",suffix="",color=A,size=40}){
  const[val,setVal]=useState(0);
  const[started,setStarted]=useState(false);
  useEffect(()=>{const t=setTimeout(()=>setStarted(true),delay);return()=>clearTimeout(t)},[delay]);
  useEffect(()=>{if(!started)return;let start=0;const steps=30;const inc=Math.ceil(end/steps);let frame=0;
    const tick=()=>{frame++;start=Math.min(start+inc,end);setVal(start);if(start<end)setTimeout(tick,duration/steps)};
    tick();
  },[started,end]);
  return <span style={{color,fontSize:size,fontWeight:800,fontFamily:"Georgia,serif"}}>{prefix}{val.toLocaleString()}{suffix}</span>;
}

function Ring({value,max,color,size=80,delay=0}){
  const[v,setV]=useState(false);
  useEffect(()=>{const t=setTimeout(()=>setV(true),delay);return()=>clearTimeout(t)},[delay]);
  const r=size/2-6;const circ=2*Math.PI*r;const pct=value/max;
  return <svg width={size} height={size} style={{transform:"rotate(-90deg)"}}>
    <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={BR} strokeWidth={5}/>
    <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={5} strokeLinecap="round"
      strokeDasharray={circ} strokeDashoffset={v?circ*(1-pct):circ} style={{transition:`stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1) ${delay}ms`}}/>
  </svg>;
}

function TypeWriter({text,delay=0,speed=60,color=TX,size=52,weight=800,spacing="0.12em"}){
  const[shown,setShown]=useState(0);
  const[started,setStarted]=useState(false);
  useEffect(()=>{const t=setTimeout(()=>setStarted(true),delay);return()=>clearTimeout(t)},[delay]);
  useEffect(()=>{if(!started)return;if(shown>=text.length)return;const t=setTimeout(()=>setShown(s=>s+1),speed);return()=>clearTimeout(t)},[shown,started,text]);
  return <div style={{fontSize:size,fontWeight:weight,color,letterSpacing:spacing,fontFamily:"Georgia,serif",minHeight:size*1.2,textAlign:"center",width:"100%"}}>{text.slice(0,shown)}<span style={{opacity:shown<text.length?1:0,color:A,transition:"opacity 0.3s"}}>|</span></div>;
}

// ===== SLIDES =====

function SlideTitle(){
  return <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:12}}>
    <FadeIn delay={100} from="above"><Crown size={56} color={A}/></FadeIn>
    <FadeIn delay={250} from="none"><div style={{fontSize:52,fontWeight:800,color:TX,letterSpacing:"0.12em",fontFamily:"Georgia,serif",textAlign:"center"}}>THRONE</div></FadeIn>
    <ExpandLine delay={500} color={A} width={100} height={3}/>
    <FadeIn delay={700} from="below"><div style={{fontSize:18,color:T2,marginTop:6}}>The operating system that works as hard as you.</div></FadeIn>
    <FadeIn delay={900} from="below"><div style={{fontSize:12,color:T2,marginTop:16}}>Ezra Hoehne · Spencer Walraven · Chase Brink</div></FadeIn>
  </div>;
}

function SlideMarcus(){
  const lines=[
    {t:"$1.2M contractor. Handyman + roofing. 14 people.",c:G},
    {t:"Quoting takes 45 min. Pricing has been wrong for months.",c:A},
    {t:"4 disconnected tools. None of them think.",c:B},
  ];
  return <div style={{display:"flex",gap:24,alignItems:"center",height:"100%"}}>
    <div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <FadeIn delay={100} from="left"><div style={{color:A,fontSize:15,fontWeight:600,marginBottom:8}}>Meet Marcus</div></FadeIn>
      <FadeIn delay={200} from="left"><h2 style={{fontSize:32,fontWeight:700,color:TX,margin:"0 0 20px",fontFamily:"Georgia,serif",lineHeight:1.2}}>His business is running him.</h2></FadeIn>
      <div style={{display:"flex",flexDirection:"column",gap:12}}>
        {lines.map((l,i)=>
          <FadeIn key={i} delay={350+i*200} from="left">
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <div style={{width:5,height:36,background:l.c,borderRadius:3,flexShrink:0}}/>
              <span style={{color:TX,fontSize:17,fontWeight:600}}>{l.t}</span>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
    <div style={{display:"flex",flexDirection:"column",gap:20,width:200,alignItems:"center",justifyContent:"center"}}>
      <FadeIn delay={500} from="right">
        <div style={{position:"relative",width:100,height:100,display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Ring value={80} max={100} color={R} size={100} delay={600}/>
          <div style={{position:"absolute",textAlign:"center"}}>
            <CountUp end={80} delay={700} color={R} size={28}/>
            <div style={{color:T2,fontSize:8}}>hrs/week</div>
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={700} from="right">
        <div style={{position:"relative",width:100,height:100,display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Ring value={96} max={120} color={A} size={100} delay={800}/>
          <div style={{position:"absolute",textAlign:"center"}}>
            <CountUp end={96} delay={900} prefix="$" suffix="K" color={A} size={24}/>
            <div style={{color:T2,fontSize:8}}>lost/year</div>
          </div>
        </div>
      </FadeIn>
    </div>
  </div>;
}

function SlideBridge(){
  const[v,setV]=useState(false);
  useEffect(()=>{const t=setTimeout(()=>setV(true),200);return()=>clearTimeout(t)},[]);
  return <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"}}>
    <div style={{fontSize:36,fontWeight:700,color:TX,fontFamily:"Georgia,serif",textAlign:"center",lineHeight:1.3,filter:v?"blur(0)":"blur(6px)",transform:v?"scale(1)":"scale(1.08)",opacity:v?1:0,transition:"all 1s cubic-bezier(0.4,0,0.2,1)"}}>What if one simple, robust system<br/>replaced all of it?</div>
    <div style={{marginTop:20,display:"flex",justifyContent:"center"}}><ExpandLine delay={800} color={A} width={80} height={3}/></div>
  </div>;
}

function SlideLayers(){
  const layers=[
    {n:"Level 1",t:"The Filing Cabinet",d:"All your data, organized, with cross-platform API integration.",c:B},
    {n:"Level 2",t:"The Smartest Employee",d:"Industry-specific formulas. Least amount of inputs = maximum amount of outputs.",c:A},
    {n:"Level 3",t:"The Virtual Ops Manager",d:"9 built-in AI agents that do the work. Open API for custom automation.",c:G},
  ];
  return <div style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"}}>
    <FadeIn delay={100} from="below"><Badge color={A}>The Solution</Badge></FadeIn>
    <FadeIn delay={300} from="below"><h2 style={{fontSize:30,fontWeight:700,color:TX,margin:"8px 0 20px",fontFamily:"Georgia,serif"}}>Three layers. One platform.</h2></FadeIn>
    <div style={{display:"flex",flexDirection:"column",gap:12}}>
      {layers.map((l,i) =>
        <FadeIn key={i} delay={600+i*350} from="left">
          <Card style={{padding:"14px 18px",borderLeft:`4px solid ${l.c}`}}>
            <div style={{display:"flex",alignItems:"center",gap:16}}>
              <span style={{color:l.c,fontSize:12,fontWeight:700,width:50}}>{l.n}</span>
              <div>
                <div style={{color:TX,fontSize:18,fontWeight:700,fontFamily:"Georgia,serif"}}>{l.t}</div>
                <div style={{color:T2,fontSize:12,marginTop:2}}>{l.d}</div>
              </div>
            </div>
          </Card>
        </FadeIn>
      )}
    </div>
  </div>;
}

function SlideOnboard(){
  const[step,setStep]=useState(0);
  const done=step>=6;
  const ob=[
    {l:"Account Created",d:"Google sign-in. 30 seconds."},
    {l:"Formulas Selected",d:"On-Call Labor + Small Repeatable + Custom Large Scale."},
    {l:"Catalog Loaded",d:"152 services, pricing, SOPs, checklists."},
    {l:"AI Transfers Your Data",d:"Upload any spreadsheet, PDF, or export. AI maps it automatically."},
    {l:"Pricing Configured",d:"Labor rate, markup, margin target."},
    {l:"Team Invited",d:"Role-based access. Field → mobile, admin → desktop."},
    {l:"First Quote Sent",d:"Formula-compiled, client-ready. 11 minutes total."},
  ];
  useEffect(()=>{if(step<ob.length-1){const t=setTimeout(()=>setStep(s=>s+1),800);return()=>clearTimeout(t)}},[step]);
  return <div style={{display:"flex",gap:16,alignItems:"stretch",height:"100%"}}>
    <div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <Badge color={G}>Onboarding</Badge>
      <h2 style={{fontSize:20,fontWeight:700,color:TX,margin:"6px 0 8px",fontFamily:"Georgia,serif"}}>Signup to sending first quote in 11 minutes.</h2>
      <Card style={{padding:"8px 12px"}}>
        <div style={{display:"flex",flexDirection:"column",gap:0}}>
          {ob.map((o,i)=>{const d=i<=step;const active=i===step;return <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"4px 8px",background:active?`${G}11`:"transparent",borderRadius:4,opacity:d?1:0.25,transition:"all 0.3s"}}>
            <div style={{width:18,height:18,borderRadius:"50%",background:d?`${G}22`:CD2,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              {d?<CheckCircle size={9} color={G}/>:<span style={{color:T2,fontSize:8}}>{i+1}</span>}
            </div>
            <span style={{color:d?TX:T2,fontSize:10,fontWeight:600}}>{o.l}</span>
            <span style={{color:T2,fontSize:9}}>{o.d}</span>
          </div>})}
        </div>
      </Card>
      {done&&<FadeIn delay={200} from="below">
        <div style={{padding:10,background:`${R}11`,borderRadius:8,border:`1px solid ${R}33`,marginTop:10}}>
          <div style={{color:TX,fontSize:13,fontWeight:700,marginBottom:4}}>Other systems take weeks or months to fully set up.</div>
          <div style={{color:T2,fontSize:12,lineHeight:1.5}}>Throne has a smart AI that transfers your existing documents into our format, making the entire process incredibly simple.</div>
        </div>
      </FadeIn>}
    </div>
    {done&&<div style={{width:160,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:`${G}11`,borderRadius:12,padding:14,border:`1px solid ${G}33`}}>
      <Sparkles size={22} color={G}/>
      <div style={{color:G,fontSize:28,fontWeight:800,margin:"4px 0",fontFamily:"Georgia,serif"}}>11 min</div>
      <div style={{color:T2,fontSize:9,textAlign:"center"}}>152 services loaded.<br/>Pricing engine live.<br/>Team has access.<br/>First quote sent.</div>
    </div>}
  </div>;
}

function SlideFormula(){
  const tierList=["Minimum","Standard","Premium"];
  const tierMult={Minimum:0.80,Standard:1.0,Premium:1.35};

  const jobs={
    "Flat Roof Recoat":{
      Minimum:{services:[{n:"Pressure Wash",rate:0.40},{n:"Single Coat Application",rate:1.60},{n:"Flashing Spot-Repair",rate:0.25},{n:"Basic Inspection",flat:400}],markup:600,extras:["Basic checklist","Material list","Photo documentation","1-year warranty"],metric:"48% margin | <5% callback | 1-yr warranty"},
      Standard:{services:[{n:"Pressure Wash",rate:0.50},{n:"Primer Coat",rate:1.20},{n:"Finish Coat",rate:1.85},{n:"Flashing Detail",rate:0.45},{n:"Inspection + Warranty",flat:680}],markup:1000,extras:["Weather protocol","3-day crew schedule","QA thickness test","Photo documentation","Maintenance plan offer","5-year warranty"],metric:"44% margin | <3% callback | 5-yr warranty"},
      Premium:{services:[{n:"Full Pressure Wash + Chemical Treat",rate:0.65},{n:"Crack & Seam Repair",rate:0.40},{n:"Primer Coat",rate:1.20},{n:"Reinforced Finish Coat",rate:2.25},{n:"Full Flashing Replacement",rate:0.60},{n:"Drain Clearing",rate:0.20},{n:"Mil Thickness Verification",flat:450},{n:"Final Inspection + Cert",flat:850}],markup:1400,extras:["Weather protocol","Dedicated PM","4-day crew schedule","QA thickness test","Drone pre-survey","Photo documentation","Annual maintenance plan","Client presentation","10-year warranty"],metric:"41% margin | <1% callback | 10-yr warranty"},
    },
    "Roof Tear-Off & Replace":{
      Minimum:{services:[{n:"Tear-Off",rate:0.90},{n:"Basic Underlayment",rate:0.50},{n:"TPO Membrane",rate:2.10},{n:"Edge Flashing",rate:0.35},{n:"Inspection",flat:600}],markup:1000,extras:["Dumpster scheduling","Material list","Basic photo docs","5-year warranty"],metric:"45% margin | 4-day schedule | 5-yr warranty"},
      Standard:{services:[{n:"Tear-Off & Haul",rate:1.10},{n:"Deck Repair (10%)",rate:0.35},{n:"Underlayment",rate:0.65},{n:"TPO Membrane",rate:2.40},{n:"Flashing & Edge",rate:0.55},{n:"Final Inspection",flat:850}],markup:1500,extras:["Permit coordination","Dumpster scheduling","Material delivery plan","Drone roof survey","Warranty registration","Client photo report","10-year warranty"],metric:"42% margin | 5-day schedule | 10-yr warranty"},
      Premium:{services:[{n:"Full Tear-Off & Haul",rate:1.25},{n:"Deck Inspection & Repair",rate:0.50},{n:"Ice & Water Shield",rate:0.45},{n:"Premium Underlayment",rate:0.80},{n:"60-mil TPO Membrane",rate:2.85},{n:"Custom Flashing & Edge",rate:0.70},{n:"Skylight & Penetration Sealing",rate:0.30},{n:"Drone Final Inspection",flat:1100},{n:"Owner Walkthrough",flat:400}],markup:2200,extras:["Permit coordination","Dedicated PM","Dumpster & haul scheduling","Staged material delivery","Drone pre & post survey","Daily progress photos","Warranty registration","Client presentation package","20-year warranty"],metric:"39% margin | 6-day schedule | 20-yr warranty"},
    },
    "Roof Coating (Silicone)":{
      Minimum:{services:[{n:"Power Wash",rate:0.35},{n:"Basic Seam Repair",rate:0.40},{n:"Silicone Single Coat",rate:1.80},{n:"Inspection",flat:400}],markup:600,extras:["Weather check","Before/after photos","Basic maintenance guide","3-year warranty"],metric:"47% margin | 1-day job | 3-yr warranty"},
      Standard:{services:[{n:"Power Wash",rate:0.45},{n:"Seam & Crack Repair",rate:0.60},{n:"Silicone Base Coat",rate:1.50},{n:"Silicone Top Coat",rate:1.50},{n:"Detail Work",rate:0.40},{n:"Inspection",flat:550}],markup:800,extras:["Weather window check","Mil thickness test","Before/after photos","Maintenance schedule","Upsell: annual plan","7-year warranty"],metric:"44% margin | 2-day job | 7-yr warranty"},
      Premium:{services:[{n:"Chemical Wash & Prep",rate:0.55},{n:"Full Seam & Crack Repair",rate:0.75},{n:"Rust Spot Treatment",rate:0.25},{n:"Silicone Base Coat",rate:1.50},{n:"Reinforced Silicone Top Coat",rate:1.85},{n:"Penetration Sealing",rate:0.30},{n:"Detail & Edge Work",rate:0.50},{n:"Mil Verification + Cert",flat:700}],markup:1200,extras:["Weather window optimization","Dedicated PM","Mil thickness test (3-point)","Drone documentation","Before/after photo package","Annual maintenance plan","Client presentation","Priority scheduling","15-year warranty"],metric:"40% margin | 3-day job | 15-yr warranty"},
    },
  };
  const jobNames=Object.keys(jobs);

  const[jobIdx,setJobIdx]=useState(0);
  const[sqft,setSqft]=useState(4200);
  const[sqftInput,setSqftInput]=useState("4200");
  const[tier,setTier]=useState("Standard");
  const[phase,setPhase]=useState("idle");
  const[visLines,setVisLines]=useState(0);
  const[runTotal,setRunTotal]=useState(0);

  const jobData=jobs[jobNames[jobIdx]][tier];
  const lines=jobData.services.map(b=>({n:b.n,amt:b.flat?b.flat:Math.round(sqft*b.rate)}));
  const allLines=[...lines,{n:"Markup & Overhead",amt:jobData.markup}];
  const total=allLines.reduce((s,l)=>s+l.amt,0);

  const fire=()=>{
    if(phase==="compiling")return;
    setPhase("compiling");setVisLines(0);setRunTotal(0);
    let i=0;const al=[...allLines];
    const tick=()=>{
      if(i>=al.length){setTimeout(()=>setPhase("done"),300);return}
      i++;setVisLines(i);
      setRunTotal(al.slice(0,i).reduce((s,l)=>s+l.amt,0));
      setTimeout(tick,150);
    };
    setTimeout(tick,350);
  };

  const reset=()=>{setPhase("idle");setVisLines(0);setRunTotal(0)};
  const handleSqft=(v)=>{const n=parseInt(v.replace(/\D/g,""))||0;setSqft(Math.min(20000,Math.max(0,n)));setSqftInput(v);reset()};
  const handleSlider=(v)=>{setSqft(v);setSqftInput(String(v));reset()};

  const sel={background:BG,border:`1px solid ${BR}`,borderRadius:4,color:G,fontSize:11,padding:"4px 6px",fontFamily:"'Courier New',monospace",cursor:"pointer",outline:"none"};

  return <div style={{display:"flex",gap:16,alignItems:"stretch",height:"100%"}}>
    <div style={{width:250,display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
        <HardHat size={16} color={G}/><Badge color={G}>Small Repeatable</Badge>
      </div>
      <div style={{color:T2,fontSize:10,marginBottom:10}}>One of our <span style={{color:TX,fontWeight:600}}>three powerful formulas</span>. Adjust the inputs — watch it recompile.</div>
      <Card accent={G} style={{padding:"10px 12px",marginBottom:10}}>
        <div style={{color:G,fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:8}}>Input — try changing these</div>
        <div style={{display:"flex",flexDirection:"column",gap:6}}>
          <div>
            <div style={{color:T2,fontSize:9,marginBottom:2}}>Job Type</div>
            <select value={jobIdx} onChange={e=>{setJobIdx(+e.target.value);reset()}} style={{...sel,width:"100%"}} onClick={e=>e.stopPropagation()}>
              {jobNames.map((j,i)=><option key={i} value={i} style={{background:BG}}>{j}</option>)}
            </select>
          </div>
          <div>
            <div style={{color:T2,fontSize:9,marginBottom:2}}>Square Feet</div>
            <div style={{display:"flex",gap:6,alignItems:"center"}}>
              <input type="text" value={sqftInput} onChange={e=>{handleSqft(e.target.value)}} onClick={e=>e.stopPropagation()} style={{...sel,width:70,textAlign:"center"}}/>
              <input type="range" min={500} max={15000} step={100} value={sqft} onChange={e=>{handleSlider(+e.target.value)}} onClick={e=>e.stopPropagation()} style={{flex:1,accentColor:G,cursor:"pointer"}}/>
            </div>
          </div>
          <div>
            <div style={{color:T2,fontSize:9,marginBottom:2}}>Tier</div>
            <div style={{display:"flex",gap:4}}>
              {tierList.map(t=><button key={t} onClick={e=>{e.stopPropagation();setTier(t);reset()}} style={{flex:1,padding:"4px 0",borderRadius:4,border:`1px solid ${tier===t?G:BR}`,background:tier===t?`${G}22`:"transparent",color:tier===t?G:T2,fontSize:10,fontWeight:600,cursor:"pointer"}}>{t}</button>)}
            </div>
          </div>
        </div>
      </Card>
      <Pulse onClick={fire} style={{width:"100%",padding:"10px 0",background:phase==="compiling"?CD2:phase==="done"?`${G}22`:G,borderRadius:8,color:phase==="compiling"?T2:phase==="done"?G:"#000",fontSize:12,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
        {phase==="compiling"?<><span style={{display:"inline-block",animation:"spin 1s linear infinite"}}>⟳</span> Compiling...</>:phase==="done"?<>✓ Compiled — click to re-run</>:<><Sparkles size={12}/> Run Formula</>}
      </Pulse>
    </div>
    <div style={{flex:1,opacity:phase==="idle"?0.06:1,transition:"opacity 0.4s",display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <Card accent={phase==="done"?G:BR}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
          <span style={{color:G,fontSize:10,fontWeight:700,textTransform:"uppercase"}}>Throne Compiles</span>
          <span style={{fontSize:26,fontWeight:800,color:TX,fontFamily:"Georgia,serif"}}>${phase==="done"?total.toLocaleString():runTotal.toLocaleString()}</span>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:8}}>
          <div style={{background:CD2,borderRadius:8,padding:10}}>
            <div style={{color:A,fontSize:9,fontWeight:700,marginBottom:6}}>SERVICES & PRICING</div>
            {allLines.map((l,i) => <div key={i} style={{color:T2,fontSize:10,padding:"2px 0",borderBottom:i<allLines.length-1?`1px solid ${BR}`:"none",opacity:i<visLines?1:0.1,transition:"opacity 0.2s",display:"flex",justifyContent:"space-between"}}>
              <span>{l.n}</span><span style={{color:TX,fontWeight:600}}>${l.amt.toLocaleString()}</span>
            </div>)}
          </div>
          <div style={{background:CD2,borderRadius:8,padding:10}}>
            <div style={{color:G,fontSize:9,fontWeight:700,marginBottom:6}}>ALSO GENERATED</div>
            {jobData.extras.map((s,i) => <div key={i} style={{color:T2,fontSize:10,padding:"2px 0",display:"flex",gap:4,alignItems:"center",opacity:phase==="done"?1:0.1,transition:"opacity 0.3s"}}><CheckCircle size={8} color={G}/>{s}</div>)}
          </div>
        </div>
        <div style={{background:BG,borderRadius:6,padding:8,color:T2,fontSize:10,opacity:phase==="done"?1:0.1,transition:"opacity 0.3s"}}>{jobData.metric}</div>
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
    <FadeIn delay={100} from="above"><Crown size={52} color={A}/></FadeIn>
    <FadeIn delay={250} from="none"><div style={{fontSize:48,fontWeight:800,color:TX,letterSpacing:"0.1em",fontFamily:"Georgia,serif",textAlign:"center"}}>THRONE</div></FadeIn>
    <ExpandLine delay={450} color={A} width={80} height={3}/>
    <FadeIn delay={650} from="below"><div style={{fontSize:17,color:T2,marginTop:8,textAlign:"center",fontStyle:"italic",lineHeight:1.4}}>Your business deserves a system<br/>that works as hard as you do.</div></FadeIn>
    <FadeIn delay={850} from="below"><div style={{fontSize:15,color:A,fontWeight:700,marginTop:12,animation:"glow 2s ease-in-out infinite alternate"}}>demo.thronesystem.com</div></FadeIn>
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
    <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');*{box-sizing:border-box;margin:0;padding:0}@keyframes spin{to{transform:rotate(360deg)}}@keyframes glow{from{text-shadow:0 0 4px #D4A84333}to{text-shadow:0 0 16px #D4A84366}}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:${BR};border-radius:2px}`}</style>

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

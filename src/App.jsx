import { useState, useEffect, useRef } from "react";
import { Crown, ChevronRight, ChevronLeft, CheckCircle, Sparkles, Activity, Target, HardHat, Maximize, Minimize, Clock, ArrowRight, DollarSign, FileText, Shield, Calculator, Zap, AlertTriangle, X as XIcon, Database, Cpu, Bot, TrendingUp, BarChart3, Users, Briefcase } from "lucide-react";

const A="#D4A843",G="#34D399",R="#F87171",B="#60A5FA",P="#A78BFA",BG="#0D0F13",CD="#1A1D24",CD2="#22262F",BR="#2A2E38",TX="#E8E6E1",T2="#9CA3AF";

const steps=[
  {id:"title",label:"Throne",sec:"Intro"},
  {id:"problem",label:"The Problem",sec:"Intro"},
  {id:"answer",label:"The Answer",sec:"Solution"},
  {id:"layers1",label:"Three Layers",sec:"Solution"},
  {id:"firstday",label:"First Day",sec:"Product"},
  {id:"formula",label:"The Formula",sec:"Product"},
  {id:"afterjob",label:"After the Job",sec:"Product"},
  {id:"pricing",label:"Pricing",sec:"Business"},
  {id:"competition",label:"Competition",sec:"Business"},
  {id:"close",label:"Close",sec:"Close"},
];

const sections=["Intro","Solution","Product","Business","Close"];
const secColors={Intro:B,Solution:A,Product:G,Business:A,Close:A};

function Badge({children,color=A}){return <span style={{background:color+"22",color,fontSize:10,fontWeight:600,padding:"3px 10px",borderRadius:16,whiteSpace:"nowrap"}}>{children}</span>}
function Card({children,style={},accent}){return <div style={{background:CD,border:"1px solid "+BR,borderRadius:10,padding:"14px 16px",position:"relative",overflow:"hidden",...style}}>{accent&&<div style={{position:"absolute",top:0,left:0,right:0,height:2,background:accent}}/>}{children}</div>}
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
  return <div style={{opacity:v?1:0,transform:v?"translate(0) scale(1)":transforms[from]||transforms.below,transition:"opacity 0.7s cubic-bezier(0.4,0,0.2,1) "+delay+"ms, transform 0.7s cubic-bezier(0.4,0,0.2,1) "+delay+"ms",...style}}>{children}</div>;
}
function ExpandLine({delay=0,color=A,width=100,height=3}){
  const[v,setV]=useState(false);
  useEffect(()=>{const t=setTimeout(()=>setV(true),delay);return()=>clearTimeout(t)},[delay]);
  return <div style={{width:v?width:0,height,background:color,borderRadius:height/2,transition:"width 0.6s cubic-bezier(0.4,0,0.2,1) "+delay+"ms"}}/>;
}
function CountUp({end,duration=1200,delay=0,prefix="",suffix="",color=A,size=40}){
  const[val,setVal]=useState(0);const[started,setStarted]=useState(false);
  useEffect(()=>{const t=setTimeout(()=>setStarted(true),delay);return()=>clearTimeout(t)},[delay]);
  useEffect(()=>{if(!started)return;let s=0;const st=30;const inc=Math.ceil(end/st);
    const tick=()=>{s=Math.min(s+inc,end);setVal(s);if(s<end)setTimeout(tick,duration/st)};tick();
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
      strokeDasharray={circ} strokeDashoffset={v?circ*(1-pct):circ} style={{transition:"stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1) "+delay+"ms"}}/>
  </svg>;
}

// ===== SLIDE 1: TITLE =====
function SlideTitle(){
  return <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:12}}>
    <FadeIn delay={100} from="above"><Crown size={56} color={A}/></FadeIn>
    <FadeIn delay={250} from="none"><div style={{fontSize:52,fontWeight:800,color:TX,letterSpacing:"0.12em",fontFamily:"Georgia,serif",textAlign:"center"}}>THRONE</div></FadeIn>
    <ExpandLine delay={500} color={A} width={100} height={3}/>
    <FadeIn delay={700} from="below"><div style={{fontSize:18,color:T2,marginTop:6,textAlign:"center"}}>The OS that works as hard as you.</div></FadeIn>
    <FadeIn delay={900} from="below"><div style={{fontSize:12,color:T2,marginTop:16}}>Ezra Hoehne · Spencer Walraven · Chase Brink</div></FadeIn>
  </div>;
}

// ===== SLIDE 2: THE PROBLEM (relatable, aggravating) =====
function SlideProblem(){
  const scenes=[
    {time:"5:30 AM",text:"Alarm goes off. Already behind.",c:T2,delay:300},
    {time:"7:00 AM",text:"On the job site. Phone won't stop ringing.",c:T2,delay:800},
    {time:"12:00 PM",text:"Lunch? That's when you do quotes.",c:A,delay:1300},
    {time:"6:00 PM",text:"Family's eating dinner. You're updating spreadsheets.",c:R,delay:1800},
    {time:"10:30 PM",text:"Still working. Pricing is probably wrong. You just don't know it yet.",c:R,delay:2300},
  ];
  const[shown,setShown]=useState(0);
  useEffect(()=>{
    const timers=scenes.map((_,i)=>setTimeout(()=>setShown(i+1),scenes[i].delay));
    return ()=>timers.forEach(clearTimeout);
  },[]);
  return <div style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",padding:"0 20px"}}>
    <div style={{maxWidth:640,margin:"0 auto",width:"100%"}}>
      <FadeIn delay={100} from="above"><Badge color={R}>The problem</Badge></FadeIn>
      <FadeIn delay={150} from="none"><h2 style={{fontSize:26,fontWeight:700,color:TX,margin:"10px 0 20px",fontFamily:"Georgia,serif"}}>A day in the life.</h2></FadeIn>
      <div style={{display:"flex",flexDirection:"column",gap:0}}>
        {scenes.map((s,i)=>(
          <div key={i} style={{display:"flex",alignItems:"flex-start",gap:14,padding:"10px 0",borderLeft:i<shown?"2px solid "+(s.c===R?R:s.c===A?A:BR):"2px solid "+BG,marginLeft:40,paddingLeft:14,opacity:i<shown?1:0,transform:i<shown?"translateX(0)":"translateX(-10px)",transition:"all 0.6s cubic-bezier(0.4,0,0.2,1)"}}>
            <span style={{color:s.c===R?R:s.c===A?A:T2,fontSize:12,fontWeight:700,fontFamily:"'Courier New',monospace",width:56,flexShrink:0}}>{s.time}</span>
            <span style={{color:s.c===R?R:s.c===A?A:TX,fontSize:16,fontWeight:s.c===R?700:500}}>{s.text}</span>
          </div>
        ))}
      </div>
      {shown>=5&&<FadeIn delay={200} from="below">
        <div style={{marginTop:20,marginLeft:40,paddingLeft:14,display:"flex",gap:20}}>
          <div style={{textAlign:"center"}}>
            <div style={{color:R,fontSize:28,fontWeight:800,fontFamily:"Georgia,serif"}}>80</div>
            <div style={{color:T2,fontSize:10}}>hrs/week</div>
          </div>
          <div style={{textAlign:"center"}}>
            <div style={{color:A,fontSize:28,fontWeight:800,fontFamily:"Georgia,serif"}}>$96K</div>
            <div style={{color:T2,fontSize:10}}>lost/year</div>
          </div>
          <div style={{textAlign:"center"}}>
            <div style={{color:B,fontSize:28,fontWeight:800,fontFamily:"Georgia,serif"}}>0</div>
            <div style={{color:T2,fontSize:10}}>tools that help</div>
          </div>
        </div>
      </FadeIn>}
      {shown>=5&&<FadeIn delay={800} from="below">
        <div style={{marginTop:20,padding:"14px 0",borderTop:"1px solid "+G+"33",textAlign:"center"}}>
          <div style={{fontSize:22,fontWeight:700,color:G,fontFamily:"Georgia,serif"}}>It doesn't have to be like this.</div>
        </div>
      </FadeIn>}
    </div>
  </div>;
}

// ===== SLIDE 3: MEET MARCUS =====
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

// ===== SLIDE 4: THE ANSWER (chaos → cheating) =====
function SlideAnswer(){
  const[phase,setPhase]=useState(0);
  useEffect(()=>{
    const t1=setTimeout(()=>setPhase(1),400);
    const t2=setTimeout(()=>setPhase(2),1800);
    return()=>{clearTimeout(t1);clearTimeout(t2)};
  },[]);
  const chaos=["Quote spreadsheet","Client texts","Invoice template","Google calendar","Pricing PDF","Sub contacts","Checklist notepad","QuickBooks","Permit tracker","Material receipts","Employee hours","Scope notes"];
  const rots=[3,-5,7,-2,6,-4,2,-6,5,-3,4,-7];
  const offX=[2,-3,4,-1,3,-2,1,-4,3,-2,2,-3];
  const offY=[1,-2,3,-1,2,-3,1,-2,2,-1,3,-2];
  return <div style={{display:"flex",gap:24,alignItems:"center",height:"100%"}}>
    {/* LEFT: Solution */}
    <div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",opacity:phase>=2?1:0,transform:phase>=2?"translateX(0)":"translateX(-30px)",transition:"all 0.8s cubic-bezier(0.16,1,0.3,1)"}}>
      <div style={{display:"flex",alignItems:"center",gap:10,padding:"16px 24px",background:`linear-gradient(135deg, ${A}15, ${G}10)`,border:"2px solid "+A,borderRadius:14,marginBottom:14}}>
        <Crown size={24} color={A}/>
        <span style={{fontSize:24,fontWeight:800,color:TX,fontFamily:"Georgia,serif",letterSpacing:"0.06em"}}>THRONE</span>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:6}}>
        {[
          {t:"Quote in 90 seconds",c:G},{t:"Pricing always accurate",c:A},
          {t:"AI that knows your numbers",c:P},{t:"Everything in one place",c:B},
        ].map((w,i)=>
          <FadeIn key={i} delay={200+i*200} from="left">
            <div style={{padding:"8px 14px",background:w.c+"12",borderLeft:"3px solid "+w.c,borderRadius:6,color:w.c,fontSize:13,fontWeight:600}}>{w.t}</div>
          </FadeIn>
        )}
      </div>
      <FadeIn delay={1200} from="below">
        <div style={{marginTop:14,color:TX,fontSize:15,fontWeight:600,fontFamily:"Georgia,serif"}}>Same business. Fraction of the effort.</div>
        <div style={{color:A,fontSize:13,fontWeight:600,marginTop:4,fontStyle:"italic"}}>It feels like cheating.</div>
      </FadeIn>
    </div>
    {/* RIGHT: Chaos (stays visible) */}
    <div style={{width:340,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <div style={{color:T2,fontSize:10,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8,opacity:phase>=1?1:0,transition:"opacity 0.5s"}}>Without Throne</div>
      <div style={{display:"flex",flexWrap:"wrap",gap:5,justifyContent:"center",padding:8,background:R+"08",borderRadius:12,border:"1px solid "+R+"22"}}>
        {chaos.map((c,i)=>{
          const colors=[R,A,B,T2,P];
          return <div key={i} style={{
            padding:"4px 8px",background:CD,border:"1px solid "+colors[i%5]+"33",borderRadius:4,
            color:colors[i%5],fontSize:9,fontWeight:500,
            transform:phase>=1?"rotate("+rots[i]+"deg) translate("+offX[i]+"px, "+offY[i]+"px)":"scale(0)",
            opacity:phase>=1?0.85:0,transition:"all 0.5s "+(i*50)+"ms cubic-bezier(0.4,0,0.2,1)",
          }}>{c}</div>
        })}
      </div>
      <div style={{color:R,fontSize:11,fontWeight:600,marginTop:8,opacity:phase>=1?1:0,transition:"opacity 0.5s 0.6s"}}>Scattered. Manual. Fragile.</div>
    </div>
  </div>;
}

// ===== SLIDE 5: THREE LAYERS (pipeline with outputs) =====
function SlideLayers1(){
  const[active,setActive]=useState(-1);
  useEffect(()=>{
    const t1=setTimeout(()=>setActive(0),400);
    const t2=setTimeout(()=>setActive(1),1200);
    const t3=setTimeout(()=>setActive(2),2400);
    return()=>{clearTimeout(t1);clearTimeout(t2);clearTimeout(t3)};
  },[]);
  const layers=[
    {n:"L1",t:"Organized",sub:"Pricing, SOPs, checklists, services",c:B,icon:<Database size={16}/>},
    {n:"L2",t:"Compiled",sub:"3 inputs \u2192 full output package",c:A,icon:<Cpu size={16}/>},
    {n:"L3",t:"Operated",sub:"9 AI agents act on your data",c:G,icon:<Bot size={16}/>},
  ];
  return <div style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"}}>
    <FadeIn delay={100} from="below"><Badge color={A}>How Throne works</Badge></FadeIn>
    <FadeIn delay={200} from="below"><h2 style={{fontSize:24,fontWeight:700,color:TX,margin:"8px 0 14px",fontFamily:"Georgia,serif"}}>Data flows through three layers.</h2></FadeIn>
    {/* Pipeline row */}
    <div style={{display:"flex",alignItems:"center",gap:0,width:"100%"}}>
      {/* Input */}
      <div style={{width:80,display:"flex",flexDirection:"column",gap:4,flexShrink:0}}>
        {["Spreadsheets","PDFs","Knowledge"].map((s,i)=>
          <FadeIn key={i} delay={300+i*100} from="left">
            <div style={{padding:"4px 6px",background:CD,border:"1px solid "+BR,borderRadius:4,color:T2,fontSize:8,textAlign:"center"}}>{s}</div>
          </FadeIn>
        )}
      </div>
      <div style={{color:T2,fontSize:14,margin:"0 3px"}}>{"\u2192"}</div>
      {/* L1 */}
      <div style={{flex:1,padding:"10px 6px",background:active>=0?B+"18":CD,border:"2px solid "+(active>=0?B:BR),borderRadius:10,textAlign:"center",transition:"all 0.5s",display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
        <div style={{color:active>=0?B:T2}}><Database size={14}/></div>
        <div style={{color:active>=0?B:T2,fontSize:9,fontWeight:700}}>L1</div>
        <div style={{color:active>=0?TX:T2,fontSize:12,fontWeight:700,fontFamily:"Georgia,serif"}}>Organized</div>
        <div style={{color:T2,fontSize:7}}>Pricing, SOPs, checklists</div>
      </div>
      <div style={{color:active>=1?A:BR,fontSize:14,margin:"0 3px",transition:"color 0.5s"}}>{"\u2192"}</div>
      {/* L2 */}
      <div style={{flex:1,padding:"10px 6px",background:active>=1?A+"18":CD,border:"2px solid "+(active>=1?A:BR),borderRadius:10,textAlign:"center",transition:"all 0.5s",display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
        <div style={{color:active>=1?A:T2}}><Cpu size={14}/></div>
        <div style={{color:active>=1?A:T2,fontSize:9,fontWeight:700}}>L2</div>
        <div style={{color:active>=1?TX:T2,fontSize:12,fontWeight:700,fontFamily:"Georgia,serif"}}>Compiled</div>
        <div style={{color:T2,fontSize:7}}>3 inputs {"\u2192"} full package</div>
      </div>
      <div style={{color:active>=2?G:BR,fontSize:14,margin:"0 3px",transition:"color 0.5s"}}>{"\u2192"}</div>
      {/* L3 */}
      <div style={{flex:1,padding:"10px 6px",background:active>=2?G+"18":CD,border:"2px solid "+(active>=2?G:BR),borderRadius:10,textAlign:"center",transition:"all 0.5s",display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
        <div style={{color:active>=2?G:T2}}><Bot size={14}/></div>
        <div style={{color:active>=2?G:T2,fontSize:9,fontWeight:700}}>L3</div>
        <div style={{color:active>=2?TX:T2,fontSize:12,fontWeight:700,fontFamily:"Georgia,serif"}}>Operated</div>
        <div style={{color:T2,fontSize:7}}>9 AI agents</div>
      </div>
      {/* L3 outputs to the right */}
      <div style={{opacity:active>=2?1:0,transition:"opacity 0.5s",display:"flex",alignItems:"center",margin:"0 3px"}}>
        <span style={{color:G,fontSize:14}}>{"\u2192"}</span>
      </div>
      <div style={{width:95,display:"flex",flexDirection:"column",gap:4,flexShrink:0,opacity:active>=2?1:0,transition:"opacity 0.5s"}}>
        {["Marketing","Scheduling","Drift detection"].map((s,i)=>
          <div key={i} style={{padding:"5px 8px",background:G+"15",border:"1px solid "+G+"44",borderRadius:6,color:G,fontSize:9,textAlign:"center",fontWeight:600}}>{s}</div>
        )}
      </div>
    </div>
    {/* L2 outputs below L2 with arrow */}
    <div style={{display:"flex",width:"100%",marginTop:4}}>
      <div style={{width:80,flexShrink:0}}/>
      <div style={{width:20,flexShrink:0}}/>
      <div style={{flex:1}}/>
      <div style={{width:20,flexShrink:0}}/>
      {/* Centered under L2 */}
      <div style={{flex:1,opacity:active>=1?1:0,transition:"opacity 0.5s",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <span style={{color:A,fontSize:14}}>{"\u2193"}</span>
        <div style={{display:"flex",gap:4}}>
          {["Job scope","Materials","Checklist"].map((s,i)=>
            <div key={i} style={{padding:"5px 8px",background:A+"12",border:"1px solid "+A+"33",borderRadius:6,color:A,fontSize:9,fontWeight:600}}>{s}</div>
          )}
        </div>
      </div>
      <div style={{width:20,flexShrink:0}}/>
      <div style={{flex:1}}/>
      <div style={{width:20,flexShrink:0}}/>
      <div style={{width:95,flexShrink:0}}/>
    </div>
    <FadeIn delay={2800} from="below">
      <div style={{display:"flex",alignItems:"center",gap:8,marginTop:12,padding:"8px 14px",background:A+"11",borderRadius:8,border:"1px solid "+A+"33"}}>
        <Shield size={14} color={A}/>
        <span style={{color:A,fontSize:11,fontWeight:600}}>We offer a $2K setup to build Layer 1 for companies that need help organizing their operations — saving weeks of work.</span>
      </div>
    </FadeIn>
  </div>;
}

// ===== SLIDE 7: FIRST DAY =====
function SlideFirstDay(){
  const[step,setStep]=useState(0);
  const done=step>=6;
  const ob=[
    {l:"Setup Fee Paid",d:"$2,000 \u2014 We compile his documents, configure his Formulas."},
    {l:"Documents Compiled",d:"Spreadsheets, PDFs, head-knowledge \u2192 organized in Layer 1."},
    {l:"Formulas Configured",d:"On-Call Labor + Small Repeatable + Custom Large Scale."},
    {l:"152 Services Loaded",d:"Pricing, SOPs, checklists \u2014 all from his existing data."},
    {l:"Team Invited",d:"Role-based access. Field crew on mobile, admin on desktop."},
    {l:"Pricing Engine Live",d:"Labor rate, markup, margin target \u2014 all calibrated."},
    {l:"First Quote Sent",d:"Formula-compiled, client-ready. 11 minutes after signing in."},
  ];
  useEffect(()=>{if(step<ob.length-1){const t=setTimeout(()=>setStep(s=>s+1),700);return()=>clearTimeout(t)}},[step]);
  return <div style={{display:"flex",gap:16,alignItems:"center",height:"100%"}}>
    <div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <Badge color={G}>Marcus's First Day</Badge>
      <h2 style={{fontSize:20,fontWeight:700,color:TX,margin:"6px 0 4px",fontFamily:"Georgia,serif"}}>Setup to first quote — 11 minutes.</h2>
      <p style={{color:T2,fontSize:11,margin:"0 0 10px"}}>The $2,000 setup transforms everything scattered across spreadsheets, PDFs, and your head into one system that operates efficiently in Throne.</p>
      <Card style={{padding:"8px 12px"}}>
        <div style={{display:"flex",flexDirection:"column",gap:0}}>
          {ob.map((o,i)=>{const d=i<=step;const active=i===step;return <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"5px 8px",background:active?G+"11":"transparent",borderRadius:4,opacity:d?1:0.2,transition:"all 0.3s"}}>
            <div style={{width:20,height:20,borderRadius:"50%",background:d?G+"22":CD2,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              {d?<CheckCircle size={10} color={G}/>:<span style={{color:T2,fontSize:8}}>{i+1}</span>}
            </div>
            <div style={{flex:1}}>
              <span style={{color:d?TX:T2,fontSize:10,fontWeight:600}}>{o.l}</span>
              <span style={{color:T2,fontSize:9,marginLeft:6}}>{o.d}</span>
            </div>
          </div>})}
        </div>
      </Card>
    </div>
    {done&&<FadeIn delay={200} from="right">
      <div style={{width:180,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:12}}>
        <div style={{background:G+"11",borderRadius:12,padding:16,border:"1px solid "+G+"33",textAlign:"center",width:"100%"}}>
          <Sparkles size={22} color={G}/>
          <div style={{color:G,fontSize:32,fontWeight:800,margin:"4px 0",fontFamily:"Georgia,serif"}}>11 min</div>
          <div style={{color:T2,fontSize:9}}>152 services loaded.<br/>Pricing engine live.<br/>Team has access.<br/>First quote sent.</div>
        </div>
        <div style={{background:R+"11",borderRadius:8,padding:10,border:"1px solid "+R+"33",textAlign:"center",width:"100%"}}>
          <div style={{color:R,fontSize:11,fontWeight:700}}>Other platforms?</div>
          <div style={{color:T2,fontSize:10}}>Weeks to months of setup.</div>
        </div>
        <div style={{background:B+"11",borderRadius:8,padding:8,border:"1px solid "+B+"33",textAlign:"center",width:"100%"}}>
          <div style={{color:T2,fontSize:9}}>*11 min when your reporting is organized and ready to upload.</div>
        </div>
      </div>
    </FadeIn>}
  </div>;
}

// ===== SLIDE 8: THE FORMULA =====
function SlideFormula(){
  const tierList=["Minimum","Standard","Premium"];
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
  const[jobIdx,setJobIdx]=useState(0);const[sqft,setSqft]=useState(4200);const[sqftInput,setSqftInput]=useState("4200");
  const[tier,setTier]=useState("Standard");const[phase,setPhase]=useState("idle");const[visLines,setVisLines]=useState(0);const[runTotal,setRunTotal]=useState(0);
  const jobData=jobs[jobNames[jobIdx]][tier];
  const lines=jobData.services.map(b=>({n:b.n,amt:b.flat?b.flat:Math.round(sqft*b.rate)}));
  const allLines=[...lines,{n:"Markup & Overhead",amt:jobData.markup}];
  const total=allLines.reduce((s,l)=>s+l.amt,0);
  const fire=()=>{if(phase==="compiling")return;setPhase("compiling");setVisLines(0);setRunTotal(0);let i=0;const al=[...allLines];
    const tick=()=>{if(i>=al.length){setTimeout(()=>setPhase("done"),300);return}i++;setVisLines(i);setRunTotal(al.slice(0,i).reduce((s,l)=>s+l.amt,0));setTimeout(tick,150)};setTimeout(tick,350)};
  const reset=()=>{setPhase("idle");setVisLines(0);setRunTotal(0)};
  const handleSqft=(v)=>{const n=parseInt(v.replace(/\D/g,""))||0;setSqft(Math.min(20000,Math.max(0,n)));setSqftInput(v);reset()};
  const handleSlider=(v)=>{setSqft(v);setSqftInput(String(v));reset()};
  const sel={background:BG,border:"1px solid "+BR,borderRadius:4,color:G,fontSize:11,padding:"4px 6px",fontFamily:"'Courier New',monospace",cursor:"pointer",outline:"none"};
  return <div style={{display:"flex",gap:16,alignItems:"stretch",height:"100%"}}>
    <div style={{width:250,display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}><HardHat size={16} color={G}/><Badge color={G}>Marcus Gets a Call</Badge></div>
      <div style={{color:T2,fontSize:10,marginBottom:10}}>Flat roof recoat, 4,200 sq ft. <span style={{color:TX,fontWeight:600}}>Watch what used to take 45 minutes.</span></div>
      <Card accent={G} style={{padding:"10px 12px",marginBottom:10}}>
        <div style={{color:G,fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:8}}>3 Inputs — that's all</div>
        <div style={{display:"flex",flexDirection:"column",gap:6}}>
          <div><div style={{color:T2,fontSize:9,marginBottom:2}}>Job Type</div>
            <select value={jobIdx} onChange={e=>{setJobIdx(+e.target.value);reset()}} style={{...sel,width:"100%"}} onClick={e=>e.stopPropagation()}>
              {jobNames.map((j,i)=><option key={i} value={i} style={{background:BG}}>{j}</option>)}</select></div>
          <div><div style={{color:T2,fontSize:9,marginBottom:2}}>Square Feet</div>
            <div style={{display:"flex",gap:6,alignItems:"center"}}>
              <input type="text" value={sqftInput} onChange={e=>{handleSqft(e.target.value)}} onClick={e=>e.stopPropagation()} style={{...sel,width:70,textAlign:"center"}}/>
              <input type="range" min={500} max={15000} step={100} value={sqft} onChange={e=>{handleSlider(+e.target.value)}} onClick={e=>e.stopPropagation()} style={{flex:1,accentColor:G,cursor:"pointer"}}/></div></div>
          <div><div style={{color:T2,fontSize:9,marginBottom:2}}>Tier</div>
            <div style={{display:"flex",gap:4}}>
              {tierList.map(t=><button key={t} onClick={e=>{e.stopPropagation();setTier(t);reset()}} style={{flex:1,padding:"4px 0",borderRadius:4,border:"1px solid "+(tier===t?G:BR),background:tier===t?G+"22":"transparent",color:tier===t?G:T2,fontSize:10,fontWeight:600,cursor:"pointer"}}>{t}</button>)}</div></div>
        </div>
      </Card>
      <Pulse onClick={fire} style={{width:"100%",padding:"10px 0",background:phase==="compiling"?CD2:phase==="done"?G+"22":G,borderRadius:8,color:phase==="compiling"?T2:phase==="done"?G:"#000",fontSize:12,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
        {phase==="compiling"?<><span style={{display:"inline-block",animation:"spin 1s linear infinite"}}>{"\u27F3"}</span> Compiling...</>:phase==="done"?<>{"\u2713"} Compiled — click to re-run</>:<><Sparkles size={12}/> Run Formula</>}
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
            {allLines.map((l,i)=><div key={i} style={{color:T2,fontSize:10,padding:"2px 0",borderBottom:i<allLines.length-1?"1px solid "+BR:"none",opacity:i<visLines?1:0.1,transition:"opacity 0.2s",display:"flex",justifyContent:"space-between"}}>
              <span>{l.n}</span><span style={{color:TX,fontWeight:600}}>${l.amt.toLocaleString()}</span></div>)}
          </div>
          <div style={{background:CD2,borderRadius:8,padding:10}}>
            <div style={{color:G,fontSize:9,fontWeight:700,marginBottom:6}}>ALSO GENERATED</div>
            {jobData.extras.map((s,i)=><div key={i} style={{color:T2,fontSize:10,padding:"2px 0",display:"flex",gap:4,alignItems:"center",opacity:phase==="done"?1:0.1,transition:"opacity 0.3s"}}><CheckCircle size={8} color={G}/>{s}</div>)}
          </div>
        </div>
        <div style={{background:BG,borderRadius:6,padding:8,color:T2,fontSize:10,opacity:phase==="done"?1:0.1,transition:"opacity 0.3s"}}>{jobData.metric}</div>
      </Card>
    </div>
  </div>;
}

// ===== SLIDE 9: AFTER THE JOB =====
function SlideAfterJob(){
  return <div style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"}}>
    <Badge color={P}>After the Job</Badge>
    <h2 style={{fontSize:22,fontWeight:700,color:TX,margin:"8px 0 4px",fontFamily:"Georgia,serif"}}>The job's done. Now Throne goes to work.</h2>
    <p style={{color:T2,fontSize:11,margin:"0 0 12px"}}>This is Layer 3 — AI that acts on Marcus's real data. These are 2 of 9 built-in agents.</p>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
      <Card accent={R}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><Activity size={15} color={R}/><span style={{color:TX,fontSize:14,fontWeight:700}}>Pricebook Drift Engine</span></div>
        <p style={{color:T2,fontSize:11,lineHeight:1.5,margin:"0 0 10px"}}>Compares what Marcus quoted vs what jobs actually cost. Finds the money he's been losing — and fixes it with one click.</p>
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
        <p style={{color:T2,fontSize:11,lineHeight:1.5,margin:"0 0 10px"}}>Finds recurring revenue hiding in Marcus's one-time jobs. Builds the plan, prices it, projects the ROI.</p>
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
    <FadeIn delay={400} from="below">
      <div style={{marginTop:10,padding:"6px 12px",background:P+"11",borderRadius:6,border:"1px solid "+P+"33"}}>
        <span style={{color:P,fontSize:10,fontWeight:600}}>Throne's AI-friendly data organization and advanced Formula engine create the foundation that takes AI from generic to extraordinary — purpose-built for your business.</span>
      </div>
    </FadeIn>
  </div>;
}

// ===== SLIDE 10: PRICING (clean) =====
function SlidePricing(){
  const tiers=[
    {n:"Students",p:"Free",d:"Verified school email \u00B7 2 yrs \u00B7 3 users",c:T2},
    {n:"Startup",p:"$100/mo",d:"3 users \u00B7 L1+L2",c:B},
    {n:"Business",p:"$300/mo",d:"Unlimited users \u00B7 L1+L2",c:G},
    {n:"Automated Scale",p:"$500/mo",d:"Unlimited \u00B7 L1+L2+L3 \u00B7 9 agents",c:A},
  ];
  return <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%"}}>
    <Badge color={A}>Pricing</Badge>
    <h2 style={{fontSize:26,fontWeight:700,color:TX,margin:"10px 0 20px",fontFamily:"Georgia,serif"}}>Simple pricing.</h2>
    <div style={{display:"flex",flexDirection:"column",gap:8,width:"100%",maxWidth:600}}>
      {tiers.map((t,i)=>
        <FadeIn key={i} delay={300+i*200} from="left">
          <div style={{display:"flex",alignItems:"center",gap:16,padding:"12px 18px",background:CD,borderRadius:10,borderLeft:"4px solid "+t.c}}>
            <span style={{color:TX,fontSize:14,fontWeight:700,width:120}}>{t.n}</span>
            <span style={{color:t.c,fontSize:22,fontWeight:800,fontFamily:"Georgia,serif",width:100}}>{t.p}</span>
            <span style={{color:T2,fontSize:11,flex:1}}>{t.d}</span>
          </div>
        </FadeIn>
      )}
    </div>
    <FadeIn delay={1200} from="below">
      <div style={{marginTop:16,display:"flex",gap:12}}>
        <div style={{padding:"6px 14px",background:A+"15",borderRadius:6,color:A,fontSize:11,fontWeight:600}}>+ $2K setup fee</div>
        <div style={{padding:"6px 14px",background:B+"15",borderRadius:6,color:B,fontSize:11,fontWeight:600}}>$20K consulting bundle available</div>
      </div>
    </FadeIn>
  </div>;
}

// ===== SLIDE 11: COMPETITION =====
function SlideCompetition(){
  const features=["Formula compilation","Pricebook Drift Engine","AI with real data context","Built-in HR suite","Open API","11-min setup"];
  const comps=[
    {n:"Throne",p:"$100-500",vals:[1,1,1,1,1,1],c:A,highlight:true},
    {n:"Buildertrend",p:"$10K/yr",vals:[0,0,0,0,0,0],c:T2},
    {n:"ServiceTitan",p:"$500+",vals:[0,0,0.5,0,0.5,0],c:T2},
    {n:"Jobber",p:"$69-349",vals:[0,0,0,0,0,0],c:T2},
    {n:"HubSpot",p:"$800+",vals:[0,0,0,0,0.5,0],c:T2},
  ];
  return <div style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"}}>
    <Badge color={A}>Competition</Badge>
    <h2 style={{fontSize:22,fontWeight:700,color:TX,margin:"8px 0 4px",fontFamily:"Georgia,serif"}}>Throne vs. everyone else.</h2>
    <p style={{color:T2,fontSize:11,margin:"0 0 12px"}}>Feature-by-feature. No spin.</p>
    <Card style={{padding:0,overflow:"hidden"}}>
      {/* Header */}
      <div style={{display:"grid",gridTemplateColumns:"2fr "+comps.map(()=>"1fr").join(" "),borderBottom:"1px solid "+BR}}>
        <div style={{padding:"8px 10px"}}/>
        {comps.map((c,i)=><div key={i} style={{padding:"6px 4px",textAlign:"center",background:c.highlight?A+"15":"transparent",borderLeft:"1px solid "+BR}}>
          <div style={{color:c.highlight?A:TX,fontSize:10,fontWeight:700}}>{c.n}</div>
          <div style={{color:c.highlight?A:T2,fontSize:8}}>{c.p}/mo</div>
        </div>)}
      </div>
      {/* Rows */}
      {features.map((f,fi)=>
        <div key={fi} style={{display:"grid",gridTemplateColumns:"2fr "+comps.map(()=>"1fr").join(" "),borderBottom:fi<features.length-1?"1px solid "+BR:"none"}}>
          <div style={{padding:"4px 10px",color:T2,fontSize:9}}>{f}</div>
          {comps.map((c,ci)=><div key={ci} style={{padding:"4px 4px",textAlign:"center",borderLeft:"1px solid "+BR,background:c.highlight?A+"08":"transparent"}}>
            <span style={{color:c.vals[fi]===1?G:c.vals[fi]===0.5?A:R,fontSize:c.vals[fi]===0.5?10:11,fontWeight:700}}>
              {c.vals[fi]===1?"\u2713":c.vals[fi]===0.5?"Basic":"\u2717"}
            </span>
          </div>)}
        </div>
      )}
    </Card>
    <FadeIn delay={600} from="below">
      <div style={{display:"flex",gap:12,marginTop:12}}>
        <Card style={{flex:1,textAlign:"center",padding:"12px 8px"}}>
          <div style={{color:G,fontSize:32,fontWeight:800,fontFamily:"Georgia,serif"}}><AnimNum value={680} color={G}/>K</div>
          <div style={{color:T2,fontSize:10}}>target businesses</div>
        </Card>
        <Card style={{flex:1,textAlign:"center",padding:"12px 8px"}}>
          <div style={{color:A,fontSize:32,fontWeight:800,fontFamily:"Georgia,serif"}}>$1.6B</div>
          <div style={{color:T2,fontSize:10}}>addressable/yr</div>
        </Card>
        <Card style={{flex:1,textAlign:"center",padding:10}}>
          <div style={{color:R,fontSize:12,fontWeight:700}}>#1 complaint</div>
          <div style={{color:TX,fontSize:11,marginTop:4}}>CRMs take as much time to manage as they save.</div>
          <div style={{color:A,fontSize:11,fontWeight:600,marginTop:4}}>Throne takes 11 min to set up.</div>
        </Card>
      </div>
    </FadeIn>
  </div>;
}

// ===== SLIDE 12: CLOSE =====
function SlideClose(){
  return <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:12}}>
    <FadeIn delay={100} from="above"><Crown size={52} color={A}/></FadeIn>
    <FadeIn delay={250} from="none"><div style={{fontSize:48,fontWeight:800,color:TX,letterSpacing:"0.1em",fontFamily:"Georgia,serif",textAlign:"center"}}>THRONE</div></FadeIn>
    <ExpandLine delay={450} color={A} width={80} height={3}/>
    <FadeIn delay={650} from="below"><div style={{fontSize:17,color:T2,marginTop:8,textAlign:"center",fontStyle:"italic",lineHeight:1.4}}>The OS that works as hard as you.</div></FadeIn>
    <FadeIn delay={850} from="below">
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:8,marginTop:16}}>
        <div style={{fontSize:14,color:TX,fontWeight:700}}>We're raising to build through beta and reach paying customers.</div>
        <div style={{fontSize:13,color:A,fontWeight:600}}>121brandaz@gmail.com</div>
      </div>
    </FadeIn>
    <FadeIn delay={1050} from="below"><div style={{fontSize:12,color:T2,marginTop:8}}>Ezra Hoehne · Spencer Walraven · Chase Brink</div></FadeIn>
  </div>;
}

// ===== SHELL =====
export default function App(){
  const[cur,setCur]=useState(0);const ref=useRef(null);const[fs,setFs]=useState(false);
  useEffect(()=>{ref.current?.scrollTo({top:0})},[cur]);
  useEffect(()=>{
    const h=(e)=>{
      if(e.key==="ArrowRight"||e.key===" "){e.preventDefault();setCur(c=>Math.min(steps.length-1,c+1))}
      else if(e.key==="ArrowLeft"){e.preventDefault();setCur(c=>Math.max(0,c-1))}
      else if(e.key==="f"||e.key==="F"){e.preventDefault();toggleFs()}
    };window.addEventListener("keydown",h);return()=>window.removeEventListener("keydown",h);
  },[]);
  const toggleFs=()=>{if(!document.fullscreenElement){document.documentElement.requestFullscreen().catch(()=>{});setFs(true)}else{document.exitFullscreen();setFs(false)}};
  const render=()=>{
    switch(steps[cur].id){
      case"title":return <SlideTitle/>;case"problem":return <SlideProblem/>;
      case"answer":return <SlideAnswer/>;case"layers1":return <SlideLayers1/>;
      case"firstday":return <SlideFirstDay/>;case"formula":return <SlideFormula/>;case"afterjob":return <SlideAfterJob/>;
      case"pricing":return <SlidePricing/>;case"competition":return <SlideCompetition/>;case"close":return <SlideClose/>;
      default:return null;
    }
  };
  return <div style={{height:"100vh",width:"100vw",background:BG,fontFamily:"'Segoe UI',system-ui,sans-serif",color:TX,display:"flex",flexDirection:"column",overflow:"hidden"}}>
    <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');*{box-sizing:border-box;margin:0;padding:0}@keyframes spin{to{transform:rotate(360deg)}}@keyframes glow{from{text-shadow:0 0 4px #D4A84333}to{text-shadow:0 0 16px #D4A84366}}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:${BR};border-radius:2px}`}</style>
    <div style={{padding:"8px 20px",borderBottom:"1px solid "+BR,display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
      <div style={{display:"flex",alignItems:"center",gap:8}}>
        <div style={{width:28,height:28,borderRadius:6,background:"linear-gradient(135deg,"+A+",#B8860B)",display:"flex",alignItems:"center",justifyContent:"center"}}><Crown size={14} color="#000"/></div>
        <span style={{color:TX,fontSize:14,fontWeight:800,letterSpacing:"0.06em"}}>THRONE</span>
        <span style={{color:T2,fontSize:11}}>Investor Demo</span>
      </div>
      <div style={{display:"flex",gap:12,alignItems:"center"}}>
        <span style={{color:T2,fontSize:11}}>{cur+1} / {steps.length}</span>
        <button onClick={toggleFs} style={{background:"none",border:"none",cursor:"pointer",color:T2,display:"flex"}}>{fs?<Minimize size={14}/>:<Maximize size={14}/>}</button>
      </div>
    </div>
    <div style={{padding:"6px 20px",borderBottom:"1px solid "+BR,display:"flex",gap:2,flexShrink:0}}>
      {sections.map(s=>{const active=steps[cur].sec===s;const passed=sections.indexOf(steps[cur].sec)>sections.indexOf(s);
        return <div key={s} style={{flex:1,padding:"4px 0",textAlign:"center",borderRadius:4,background:active?secColors[s]+"22":passed?G+"08":"transparent",borderBottom:"2px solid "+(active?secColors[s]:passed?G:"transparent"),transition:"all 0.3s"}}>
          <span style={{fontSize:10,fontWeight:active?700:400,color:active?secColors[s]:passed?G:T2}}>{s}</span>
        </div>})}
    </div>
    <div style={{padding:"6px 20px",borderBottom:"1px solid "+BR,display:"flex",gap:3,overflow:"auto",flexShrink:0}}>
      {steps.map((s,i)=><button key={i} onClick={()=>setCur(i)} style={{
        padding:"3px 10px",borderRadius:14,border:"none",cursor:"pointer",fontSize:10,fontWeight:i===cur?700:400,whiteSpace:"nowrap",
        background:i===cur?A+"22":i<cur?G+"10":"transparent",color:i===cur?A:i<cur?G:T2,
      }}>{i<cur?"\u2713 ":""}{s.label}</button>)}
    </div>
    <div ref={ref} style={{flex:1,overflow:"auto",padding:"16px 20px"}}>
      <div key={cur} style={{maxWidth:840,margin:"0 auto",height:"100%"}}>{render()}</div>
    </div>
    <div style={{padding:"8px 20px",borderTop:"1px solid "+BR,display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
      <Pulse onClick={()=>setCur(c=>Math.max(0,c-1))} style={{display:"flex",alignItems:"center",gap:4,padding:"6px 14px",background:cur===0?CD:CD2,borderRadius:6,color:cur===0?T2:TX,fontSize:12,opacity:cur===0?0.4:1}}>
        <ChevronLeft size={14}/> Back
      </Pulse>
      <div style={{display:"flex",gap:3}}>{steps.map((_,i)=><div key={i} style={{width:i===cur?18:5,height:4,borderRadius:2,background:i===cur?A:i<cur?G:BR,transition:"all 0.3s"}}/>)}</div>
      {cur<steps.length-1?
        <Pulse onClick={()=>setCur(c=>c+1)} style={{display:"flex",alignItems:"center",gap:4,padding:"6px 14px",background:A,borderRadius:6,color:"#000",fontSize:12,fontWeight:700}}>Continue <ChevronRight size={14}/></Pulse>:
        <Pulse onClick={()=>setCur(0)} style={{display:"flex",alignItems:"center",gap:4,padding:"6px 14px",background:A,borderRadius:6,color:"#000",fontSize:12,fontWeight:700}}>{"\u21BB"} Start Over</Pulse>
      }
    </div>
  </div>;
}

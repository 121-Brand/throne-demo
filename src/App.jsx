import { useState, useEffect, useRef } from "react";
import { Crown, ChevronRight, ChevronLeft, CheckCircle, Clock, DollarSign, Users, Zap, Shield, Star, TrendingUp, Wrench, HardHat, Building2, Layers, Bot, Activity, Target, Heart, Calculator, Globe, Sparkles, FileText, Send, CreditCard, BarChart3, BookOpen, Briefcase, AlertTriangle } from "lucide-react";

const A="#D4A843",G="#34D399",R="#F87171",B="#60A5FA",P="#A78BFA",PK="#F472B6",BG="#0D0F13",CD="#1A1D24",CD2="#22262F",BR="#2A2E38",TX="#E8E6E1",T2="#9CA3AF";

const steps=[
  {id:"intro",label:"Meet Marcus",day:"Monday",num:1},
  {id:"onboard",label:"Onboarding",day:"Monday",num:2},
  {id:"l1",label:"The Database",day:"Monday",num:3},
  {id:"f1",label:"On-Call Labor",day:"Tuesday",num:4},
  {id:"f2",label:"Small Repeatable",day:"Tuesday",num:5},
  {id:"f3",label:"Large Scale",day:"Tuesday",num:6},
  {id:"hr1",label:"New Hire",day:"Wednesday",num:7},
  {id:"hr2",label:"Payroll & Compliance",day:"Wednesday",num:8},
  {id:"drift",label:"Drift Engine",day:"Thursday",num:9},
  {id:"advisor",label:"Plan Advisor",day:"Thursday",num:10},
  {id:"ai",label:"AI Assistant",day:"Friday",num:11},
  {id:"api",label:"Open API",day:"Friday",num:12},
  {id:"roi",label:"Your ROI",day:"Results",num:13},
  {id:"vs",label:"vs Competition",day:"Results",num:14},
  {id:"end",label:"Full Picture",day:"Results",num:15},
];

const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Results"];
const dayColors={Monday:B,Tuesday:A,Wednesday:PK,Thursday:R,Friday:P,Results:G};

const cumulative=[
  {hours:0,money:0,auto:0},{hours:12,money:0,auto:7},{hours:12,money:0,auto:7},
  {hours:13,money:0,auto:9},{hours:14,money:0,auto:11},{hours:16,money:0,auto:15},
  {hours:18,money:0,auto:19},{hours:20,money:0,auto:23},
  {hours:24,money:3840,auto:28},{hours:28,money:20500,auto:34},
  {hours:32,money:20500,auto:38},{hours:34,money:20500,auto:42},
  {hours:42,money:24700,auto:47},{hours:42,money:24700,auto:47},{hours:42,money:24700,auto:47},
];

function Badge({children,color=A}){return <span style={{background:`${color}22`,color,fontSize:10,fontWeight:600,padding:"2px 8px",borderRadius:16,whiteSpace:"nowrap"}}>{children}</span>}
function Card({children,style={},accent}){return <div style={{background:CD,border:`1px solid ${BR}`,borderRadius:10,padding:"12px 14px",position:"relative",overflow:"hidden",...style}}>{accent&&<div style={{position:"absolute",top:0,left:0,right:0,height:2,background:accent}}/>}{children}</div>}

function AnimN({value,color=A}){
  const[d,setD]=useState(0);
  useEffect(()=>{if(d<value){const t=setTimeout(()=>setD(v=>Math.min(v+Math.ceil((value-d)/8),value)),40);return()=>clearTimeout(t)};},[d,value]);
  useEffect(()=>{setD(0)},[value]);
  return <span style={{color,fontWeight:800,fontFamily:"Georgia,serif"}}>{typeof value==="number"&&value>=1000?`$${(d/1000).toFixed(1)}K`:d}</span>;
}

function Pulse({children,onClick,style={}}){
  const[p,setP]=useState(false);
  return <button onClick={()=>{setP(true);setTimeout(()=>setP(false),200);onClick?.();}} style={{transform:p?"scale(0.95)":"scale(1)",transition:"transform 0.15s",cursor:"pointer",...style}}>{children}</button>;
}

function Intro(){
  return <div style={{display:"flex",gap:14,alignItems:"stretch",height:"100%"}}>
    <div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",gap:12}}>
      <Badge color={R}>The Problem</Badge>
      <h2 style={{fontSize:22,fontWeight:700,color:TX,margin:0,fontFamily:"Georgia,serif"}}>Meet Marcus. He's drowning.</h2>
      <p style={{color:T2,fontSize:13,lineHeight:1.5,margin:0}}>Phoenix Home Services — $1.2M contractor. Handyman + roofing. 6 employees, 8 subs, one very tired owner.</p>
      <div style={{padding:10,background:`${A}11`,borderRadius:8,border:`1px solid ${A}33`}}>
        <p style={{color:A,fontSize:12,fontWeight:600,margin:0}}>He heard about Throne. Let's watch his first week.</p>
      </div>
    </div>
    <div style={{display:"flex",flexDirection:"column",gap:10,width:280}}>
      {[{s:"62",u:"hrs/week",l:"His 'system' is himself",c:R},{s:"~$96K",u:"/year lost",l:"Stale pricing, missed follow-ups, untracked costs",c:A},{s:"4",u:"disconnected tools",l:"Spreadsheets + Jobber + texting + memory",c:B}].map((x,i)=>
        <Card key={i}><div style={{textAlign:"center"}}><span style={{fontSize:26,fontWeight:800,color:x.c,fontFamily:"Georgia,serif"}}>{x.s}</span><span style={{fontSize:10,color:x.c,marginLeft:4}}>{x.u}</span><div style={{fontSize:10,color:T2,marginTop:4}}>{x.l}</div></div></Card>
      )}
    </div>
  </div>;
}

function Onboard(){
  const[s,setS]=useState(0);
  const ob=[
    {l:"Account Created",d:"Business name, Google sign-in. 30 seconds.",ic:CheckCircle},
    {l:"Business Profile",d:"Residential contractor, $1-2M, Phoenix AZ.",ic:Briefcase},
    {l:"Formulas Selected",d:"On-Call Labor (handyman) + Small Repeatable (roofing).",ic:Layers},
    {l:"Catalog Loaded",d:"152 services, pricing models, SOPs, checklists — instantly.",ic:BookOpen},
    {l:"Pricing Configured",d:"$35/hr loaded · 25% material markup · 40% target margin.",ic:Calculator},
    {l:"Team Invited",d:"6 users, role-based access. Field techs → mobile. Admin → desktop.",ic:Users},
    {l:"Operational",d:"First quote ready. Total time: 11 minutes.",ic:Sparkles},
  ];
  useEffect(()=>{if(s<ob.length-1){const t=setTimeout(()=>setS(v=>v+1),900);return()=>clearTimeout(t)};},[s]);
  return <div style={{display:"flex",gap:16,alignItems:"stretch"}}>
    <div style={{flex:1}}>
      <div style={{marginBottom:10}}><Badge color={G}>Monday Morning</Badge></div>
      <h2 style={{fontSize:20,fontWeight:700,color:TX,margin:"0 0 4px",fontFamily:"Georgia,serif"}}>Signup to first quote in 11 minutes</h2>
      <p style={{color:T2,fontSize:12,margin:"0 0 12px"}}>Not days. Not weeks. Marcus is operational before his coffee gets cold.</p>
      <Card>{ob.map((o,i)=>{const done=i<=s,act=i===s;return <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"6px 8px",background:act?`${G}11`:"transparent",borderRadius:6,opacity:done?1:0.3,transition:"all 0.3s"}}>
        <div style={{width:22,height:22,borderRadius:"50%",background:done?`${G}22`:CD2,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{done?<CheckCircle size={12} color={G}/>:<span style={{color:T2,fontSize:9}}>{i+1}</span>}</div>
        <div style={{flex:1}}><span style={{color:done?TX:T2,fontSize:12,fontWeight:600}}>{o.l}</span><span style={{color:T2,fontSize:10,marginLeft:6}}>{o.d}</span></div>
      </div>})}</Card>
    </div>
    {s>=ob.length-1&&<div style={{width:220,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:`${G}11`,borderRadius:10,padding:16,border:`1px solid ${G}33`}}>
      <Sparkles size={28} color={G}/>
      <div style={{color:G,fontSize:18,fontWeight:800,margin:"8px 0 4px",fontFamily:"Georgia,serif"}}>11 min</div>
      <div style={{color:T2,fontSize:11,textAlign:"center"}}>152 services loaded. Pricing engine live. Team has access.</div>
    </div>}
  </div>;
}

function L1(){
  const items=[
    {t:"152 Services",d:"3-tier pricing, SOPs, checklists, upsells",ic:FileText,c:A},
    {t:"Client Database",d:"Properties, history, communications, referrals",ic:Users,c:B},
    {t:"Sub Roster",d:"Compliance tracking, expiration alerts, gate enforcement",ic:Shield,c:G},
    {t:"Pricing Engine",d:"CEILING(cost/(1-margin)) — real formulas, not guessing",ic:Calculator,c:P},
    {t:"HR Suite",d:"Employees, PTO, payroll sync, 30/60/90 check-ins",ic:Briefcase,c:PK},
    {t:"Financial Tracking",d:"Job-level P&L, bill line-item allocation, real-time margins",ic:DollarSign,c:A},
  ];
  return <div>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
      <div><Badge color={B}>Layer 1: Base OS</Badge><h2 style={{fontSize:20,fontWeight:700,color:TX,margin:"6px 0 0",fontFamily:"Georgia,serif"}}>Every spreadsheet he ever needed — one place</h2></div>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
      {items.map((it,i)=><Card key={i} accent={it.c} style={{padding:"10px 12px"}}>
        <div style={{display:"flex",gap:8,alignItems:"flex-start"}}>
          <it.ic size={14} color={it.c} style={{marginTop:2,flexShrink:0}}/>
          <div><div style={{color:TX,fontSize:12,fontWeight:600}}>{it.t}</div><div style={{color:T2,fontSize:10,lineHeight:1.4,marginTop:2}}>{it.d}</div></div>
        </div>
      </Card>)}
    </div>
    <div style={{marginTop:10,padding:8,background:`${B}11`,borderRadius:8,textAlign:"center"}}><span style={{color:B,fontSize:11,fontWeight:600}}>This is the filing cabinet. Now let's see what happens when Throne thinks with this data.</span></div>
  </div>;
}

function Formula({type,color,scenario,inputs,outputs,upsell,metrics,footer}){
  const[fired,setFired]=useState(false);
  const[loading,setLoading]=useState(false);
  const fire=()=>{setLoading(true);setTimeout(()=>{setLoading(false);setFired(true);},1200);};
  return <div style={{display:"grid",gridTemplateColumns:"240px 1fr",gap:12,alignItems:"start"}}>
    <div>
      <Badge color={color}>{type}</Badge>
      <h2 style={{fontSize:18,fontWeight:700,color:TX,margin:"6px 0 4px",fontFamily:"Georgia,serif"}}>{scenario.t}</h2>
      <p style={{color:T2,fontSize:11,margin:"0 0 10px",lineHeight:1.4}}>{scenario.d}</p>
      <Card accent={color} style={{padding:"10px 12px",marginBottom:8}}>
        <div style={{color,fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:6}}>Marcus Enters</div>
        <div style={{background:BG,borderRadius:6,padding:8,fontFamily:"'Courier New',monospace",fontSize:11,color:G,lineHeight:1.6,whiteSpace:"pre-line"}}>{inputs}</div>
      </Card>
      {!fired?<Pulse onClick={fire} style={{width:"100%",padding:"10px 0",background:loading?CD2:color,border:"none",borderRadius:8,color:loading?T2:"#000",fontSize:12,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
        {loading?<><span style={{animation:"spin 1s linear infinite",display:"inline-block"}}>⟳</span> Compiling...</>:<><Sparkles size={12}/> Run Formula</>}
      </Pulse>:
      <div style={{textAlign:"center",padding:6,background:`${color}22`,borderRadius:6}}><span style={{color,fontSize:11,fontWeight:600}}>✓ Compiled in 1.8s</span></div>}
    </div>
    <div style={{opacity:fired?1:0.15,transition:"opacity 0.5s",pointerEvents:fired?"auto":"none"}}>
      <Card accent={fired?G:BR} style={{padding:"10px 12px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
          <span style={{color:G,fontSize:9,fontWeight:700,textTransform:"uppercase"}}>Throne Compiles</span>
          <span style={{fontSize:20,fontWeight:800,color:TX,fontFamily:"Georgia,serif"}}>{outputs.total}</span>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:8}}>
          <div style={{background:CD2,borderRadius:6,padding:8}}>
            <div style={{color:A,fontSize:9,fontWeight:600,marginBottom:4}}>SERVICES</div>
            {outputs.services.map((s,i)=><div key={i} style={{color:T2,fontSize:10,padding:"1px 0"}}>{s}</div>)}
          </div>
          <div style={{background:CD2,borderRadius:6,padding:8}}>
            <div style={{color:G,fontSize:9,fontWeight:600,marginBottom:4}}>ALSO GENERATED</div>
            {outputs.also.map((s,i)=><div key={i} style={{color:T2,fontSize:10,padding:"1px 0",display:"flex",gap:3,alignItems:"center"}}><CheckCircle size={8} color={G}/>{s}</div>)}
          </div>
        </div>
        <div style={{display:"flex",gap:6}}>
          {upsell&&<div style={{flex:1,padding:5,background:`${A}11`,borderRadius:4,fontSize:10,color:T2}}>💡 <span style={{color:A}}>Upsell:</span> {upsell}</div>}
          <div style={{flex:1,padding:5,background:CD2,borderRadius:4,fontSize:10,color:T2}}>{metrics}</div>
        </div>
      </Card>
      {fired&&footer&&<div style={{marginTop:6,padding:6,background:`${color}11`,borderRadius:6,textAlign:"center"}}><span style={{color,fontSize:10,fontWeight:600}}>{footer}</span></div>}
    </div>
  </div>;
}

function HR1(){
  return <div>
    <div style={{marginBottom:8}}><Badge color={PK}>Wednesday — New Hire</Badge><h2 style={{fontSize:20,fontWeight:700,color:TX,margin:"6px 0 0",fontFamily:"Georgia,serif"}}>Marcus hired Chris Nguyen. Watch what auto-generates.</h2></div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
      {[
        {ic:Users,c:B,t:"Employee Record Created",d:"Field Tech, Handyman division. $22/hr, loaded rate $35.50. Reports to Marcus."},
        {ic:FileText,c:G,t:"12-Item Onboarding Checklist",d:"W-4, I-9, direct deposit, driver's license, safety training, tool issue, Throne account, orientation."},
        {ic:Clock,c:A,t:"30/60/90 Check-Ins Scheduled",d:'Day 30: "Safe & reliable?" · Day 60: "Productive?" · Day 90: "Long-term fit?" 7-day reminders.'},
        {ic:Sparkles,c:P,t:"Role-Based Access Configured",d:"Chris sees: today's jobs, checklists, receipt capture, daily report. Works with one thumb on a phone."},
      ].map((x,i)=><Card key={i} accent={x.c} style={{padding:"10px 12px"}}>
        <div style={{display:"flex",gap:8,alignItems:"flex-start"}}><x.ic size={14} color={x.c} style={{marginTop:2,flexShrink:0}}/><div><div style={{color:TX,fontSize:12,fontWeight:600}}>{x.t}</div><div style={{color:T2,fontSize:10,lineHeight:1.4,marginTop:2}}>{x.d}</div></div></div>
      </Card>)}
    </div>
    <div style={{marginTop:8,padding:6,background:`${PK}11`,borderRadius:6,textAlign:"center"}}><span style={{color:PK,fontSize:11,fontWeight:600}}>No HR software subscription. No separate onboarding system. All inside Throne.</span></div>
  </div>;
}

function HR2(){
  return <div>
    <div style={{marginBottom:8}}><Badge color={PK}>Wednesday — Payroll & Compliance</Badge><h2 style={{fontSize:20,fontWeight:700,color:TX,margin:"6px 0 0",fontFamily:"Georgia,serif"}}>Payroll flows in. Compliance enforces itself.</h2></div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
      <Card accent={P}>
        <div style={{color:P,fontSize:10,fontWeight:700,marginBottom:8}}>PAYROLL INTEGRATION (PAYCHEX)</div>
        {[{l:"Last Period Gross",v:"$18,420"},{l:"Avg Overtime/Week",v:"4.2 hrs"},{l:"Loaded Rate (avg)",v:"$38.50/hr"},{l:"PTO Balance (team)",v:"42 days"}].map((x,i)=>
          <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"4px 0",borderBottom:i<3?`1px solid ${BR}`:"none"}}><span style={{color:T2,fontSize:11}}>{x.l}</span><span style={{color:TX,fontSize:11,fontWeight:600}}>{x.v}</span></div>
        )}
        <div style={{marginTop:8,color:T2,fontSize:10}}>Hours auto-import. Labor costs update on every project in real-time.</div>
      </Card>
      <Card accent={G}>
        <div style={{color:G,fontSize:10,fontWeight:700,marginBottom:8}}>SUB COMPLIANCE ENGINE</div>
        <div style={{color:T2,fontSize:11,marginBottom:8}}>8 subs tracked. Every document monitored:</div>
        {["W-9 received","COI verified","Workers comp verified","Hold harmless signed","Business license verified","Rate sheet agreed"].map((x,i)=>
          <div key={i} style={{display:"flex",gap:4,alignItems:"center",padding:"2px 0"}}><CheckCircle size={9} color={G}/><span style={{color:T2,fontSize:10}}>{x}</span></div>
        )}
        <div style={{marginTop:8,padding:6,background:`${R}11`,borderRadius:4}}>
          <span style={{color:R,fontSize:10,fontWeight:600}}>⚠ Non-compliant subs auto-blocked from job assignment</span>
        </div>
      </Card>
    </div>
  </div>;
}

function Drift(){
  const[applied,setApplied]=useState(false);
  const drifts=[{s:"Bathroom Tile",e:"$1,850",a:"$2,120",d:"+14.6%",r:"$810/mo",st:"critical"},{s:"Cabinet Install",e:"$4,200",a:"$4,680",d:"+11.4%",r:"$1,440/mo",st:"critical"},{s:"Roof Recoat /sqft",e:"$3.20",a:"$3.45",d:"+7.8%",r:"$620/mo",st:"watch"}];
  return <div>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
      <div><Badge color={R}>L3 · Agent 6 of 9</Badge><h2 style={{fontSize:20,fontWeight:700,color:TX,margin:"6px 0 0",fontFamily:"Georgia,serif"}}>Marcus has been losing $3,840 every month.</h2><p style={{color:T2,fontSize:11,margin:"2px 0 0"}}>His prices haven't kept up. The Drift Engine found it in 90 days of data.</p></div>
      <div style={{textAlign:"right",padding:"8px 12px",background:`${A}11`,borderRadius:8}}><div style={{color:T2,fontSize:9}}>MONTHLY RECOVERY</div><div style={{color:A,fontSize:22,fontWeight:800,fontFamily:"Georgia,serif"}}>$3,840</div></div>
    </div>
    <Card accent={R} style={{marginBottom:8}}>
      <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:4,padding:"4px 0",borderBottom:`1px solid ${BR}`,marginBottom:4}}>
        <span style={{color:T2,fontSize:9,fontWeight:600}}>SERVICE</span><span style={{color:T2,fontSize:9,fontWeight:600}}>EST → ACT</span><span style={{color:T2,fontSize:9,fontWeight:600}}>DRIFT</span><span style={{color:T2,fontSize:9,fontWeight:600}}>RECOVERY</span>
      </div>
      {drifts.map((d,i)=><div key={i} style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:4,padding:"6px 0",borderBottom:i<2?`1px solid ${BR}`:"none",alignItems:"center"}}>
        <span style={{color:TX,fontSize:11,fontWeight:500}}>{d.s}</span>
        <span style={{color:T2,fontSize:10}}>{d.e} → {d.a}</span>
        <Badge color={d.st==="critical"?R:A}>{d.d}</Badge>
        <span style={{color:G,fontSize:10,fontWeight:600}}>{d.r}</span>
      </div>)}
    </Card>
    {!applied?<Pulse onClick={()=>setApplied(true)} style={{width:"100%",padding:"10px 0",background:A,border:"none",borderRadius:8,color:"#000",fontSize:12,fontWeight:700}}>Apply All Recommendations · One-Click · Rollback Anytime</Pulse>:
    <div style={{padding:10,background:`${G}11`,borderRadius:8,border:`1px solid ${G}33`,textAlign:"center"}}><CheckCircle size={16} color={G} style={{marginBottom:4}}/><div style={{color:G,fontSize:12,fontWeight:700}}>Prices updated across 3 services</div><div style={{color:T2,fontSize:10}}>Cascading recalculation complete. Active quotes unchanged. Every change individually reversible.</div></div>}
  </div>;
}

function Advisor(){
  return <div>
    <div style={{marginBottom:8}}><Badge color={G}>L3 · Agent 9 of 9</Badge><h2 style={{fontSize:20,fontWeight:700,color:TX,margin:"6px 0 0",fontFamily:"Georgia,serif"}}>Throne found Marcus $16,660 in recurring revenue.</h2><p style={{color:T2,fontSize:11,margin:"2px 0 0"}}>It analyzed his job history and found a pattern he didn't see.</p></div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
      <Card accent={B}>
        <div style={{color:B,fontSize:10,fontWeight:700,marginBottom:6}}>PATTERN DETECTED</div>
        <div style={{color:TX,fontSize:12,fontWeight:600,marginBottom:4}}>14 one-time roof inspections in 6 months</div>
        <div style={{color:T2,fontSize:11,lineHeight:1.5}}>9 of those clients needed coating touch-ups within 90 days. These are maintenance plan candidates. The system found the recurring revenue hiding in one-time jobs.</div>
      </Card>
      <Card accent={G}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
          <span style={{color:G,fontSize:10,fontWeight:700}}>RECOMMENDED PLAN</span>
          <span style={{color:A,fontSize:16,fontWeight:800,fontFamily:"Georgia,serif"}}>$833/yr</span>
        </div>
        <div style={{color:TX,fontSize:12,fontWeight:700,marginBottom:6}}>Annual Roof Care Plan</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
          <div style={{background:CD2,borderRadius:6,padding:6}}>
            <div style={{fontSize:9,color:G,fontWeight:600,marginBottom:3}}>INCLUDES</div>
            {["Inspection ($350)","Drain clean ($180)","Touch-up ($450)","15% discount"].map((s,i)=><div key={i} style={{color:T2,fontSize:9}}>✓ {s}</div>)}
          </div>
          <div style={{background:CD2,borderRadius:6,padding:6}}>
            <div style={{fontSize:9,color:A,fontWeight:600,marginBottom:3}}>AT 20 CLIENTS</div>
            <div style={{color:G,fontSize:14,fontWeight:800,fontFamily:"Georgia,serif"}}>$16,660/yr</div>
            <div style={{color:T2,fontSize:9,marginTop:2}}>Recurring = 3-5x valuation multiplier</div>
          </div>
        </div>
      </Card>
    </div>
    <div style={{marginTop:8,padding:6,background:`${G}11`,borderRadius:6,textAlign:"center"}}><span style={{color:G,fontSize:10,fontWeight:600}}>Not reporting — consulting. It finds opportunities, calculates ROI, drafts marketing, tracks adoption, tells Marcus when to hire.</span></div>
  </div>;
}

function AI(){
  const[msgs,setMsgs]=useState([]);const[typing,setTyping]=useState(false);
  const qs=[
    {q:"How's our margin?",a:"Q1: 42.4% — 4pts above floor. Roofing: 44.8%, Handyman: 39.1%. Drift Engine flagged bathroom tile 14.6% under. Revenue: $124K/mo, up 15% MoM."},
    {q:"Quote 3,000sqft roof recoat",a:"Small Repeatable Formula → $14,220 Standard. Prep ($1,800) + Primer ($3,600) + Finish ($5,550) + Flashing ($1,590) + Inspection ($680) + markup ($1,000). Margin: 43.2%. Send to client?"},
    {q:"Expiring sub docs?",a:"3 subs: Desert Electric COI (Apr 12), Mesa Plumbing workers comp (Apr 28), Southwest Tile license (May 1). Draft reminder emails? They'll auto-block from assignments if lapsed."},
  ];
  const ask=(i)=>{setMsgs(m=>[...m,{r:"u",t:qs[i].q}]);setTyping(true);setTimeout(()=>{setTyping(false);setMsgs(m=>[...m,{r:"a",t:qs[i].a}]);},1200);};
  return <div>
    <div style={{marginBottom:8}}><Badge color={P}>Throne AI Assistant</Badge><h2 style={{fontSize:20,fontWeight:700,color:TX,margin:"6px 0 0",fontFamily:"Georgia,serif"}}>Ask anything. It knows Marcus's entire business.</h2></div>
    <Card accent={P} style={{padding:12}}>
      <div style={{display:"flex",gap:6,alignItems:"center",marginBottom:10,paddingBottom:8,borderBottom:`1px solid ${BR}`}}>
        <Crown size={14} color={A}/><span style={{color:TX,fontSize:12,fontWeight:600}}>Throne AI</span><span style={{color:G,fontSize:9}}>● Full business context</span>
      </div>
      <div style={{minHeight:120,display:"flex",flexDirection:"column",gap:6,marginBottom:10}}>
        {msgs.length===0&&<div style={{color:T2,fontSize:12,textAlign:"center",padding:20,fontStyle:"italic"}}>Click a question to see it in action.</div>}
        {msgs.map((m,i)=><div key={i} style={{alignSelf:m.r==="u"?"flex-end":"flex-start",maxWidth:"80%",padding:"8px 12px",borderRadius:8,background:m.r==="u"?`${A}22`:CD2,color:m.r==="u"?A:TX,fontSize:11,lineHeight:1.5}}>{m.t}</div>)}
        {typing&&<div style={{padding:"6px 12px",background:CD2,borderRadius:8,color:T2,fontSize:11,alignSelf:"flex-start"}}>Querying business data...</div>}
      </div>
      <div style={{display:"flex",gap:6}}>
        {qs.map((q,i)=><Pulse key={i} onClick={()=>!typing&&ask(i)} style={{flex:1,padding:"6px 10px",background:BG,border:`1px solid ${BR}`,borderRadius:16,color:T2,fontSize:10,opacity:typing?0.5:1}}>{q.q}</Pulse>)}
      </div>
    </Card>
    <div style={{marginTop:6,color:T2,fontSize:10,textAlign:"center"}}>Not a generic chatbot. Queries real data, runs real Formulas, returns answers from actual numbers.</div>
  </div>;
}

function API(){
  return <div>
    <div style={{marginBottom:8}}><Badge color={B}>Open API — Automated Scale</Badge><h2 style={{fontSize:20,fontWeight:700,color:TX,margin:"6px 0 0",fontFamily:"Georgia,serif"}}>Everything Throne does, your code can do too.</h2></div>
    <Card accent={B}>
      <div style={{background:BG,borderRadius:6,padding:12,fontFamily:"'Courier New',monospace",fontSize:11,lineHeight:1.6,overflowX:"auto"}}>
        <div style={{color:T2}}>// Execute a Formula programmatically</div>
        <div><span style={{color:G}}>POST</span> <span style={{color:TX}}>/v1/orgs/&#123;id&#125;/formulas/small-repeatable/execute</span></div>
        <div style={{color:B,marginTop:4}}>&#123; "job_type": "flat_roof_recoat", "sqft": 3000, "tier": "standard" &#125;</div>
        <div style={{color:T2,marginTop:6}}>// Returns: quote, services, materials, schedule, checklists</div>
        <div style={{color:A}}>&#123; "quote_total": <span style={{color:G}}>14220</span>, "services": [...], "materials": [...], "schedule": &#123;...&#125; &#125;</div>
      </div>
    </Card>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:6,marginTop:8}}>
      {[{l:"Full CRUD",d:"All L1 entities"},{l:"Trigger Agents",d:"All 9 agents"},{l:"Webhooks",d:"23+ events"},{l:"50K req/day",d:"Rate limited"}].map((x,i)=>
        <Card key={i} style={{padding:8,textAlign:"center"}}><div style={{color:B,fontSize:11,fontWeight:600}}>{x.l}</div><div style={{color:T2,fontSize:9}}>{x.d}</div></Card>
      )}
    </div>
  </div>;
}

function ROI(){
  const tl=[
    {p:"Week 1",v:"$0",h:"12 hrs",d:"Onboarded 11 min. First quote 2 min vs 45.",c:T2},
    {p:"Month 1",v:"$4.2K",h:"42 hrs",d:"3 pricing errors caught. $4,200 margin recovered.",c:B},
    {p:"Quarter 1",v:"$26K",h:"156 hrs",d:"$18K margin + 2 plans launched ($8K ARR).",c:G},
    {p:"Year 1",v:"$127K",h:"680 hrs",d:"$82K margin + $45K recurring. Owner: 40 hrs/wk.",c:A},
    {p:"Year 5",v:"$584K",h:"3,800 hrs",d:"Valuation up 2-3x. Ready to sell or scale.",c:A},
  ];
  return <div>
    <div style={{marginBottom:10}}><Badge color={A}>Return on Investment</Badge><h2 style={{fontSize:20,fontWeight:700,color:TX,margin:"6px 0 0",fontFamily:"Georgia,serif"}}>What Throne is worth to Marcus — paying $500/mo</h2></div>
    <div style={{display:"flex",gap:6,marginBottom:10}}>
      {tl.map((t,i)=><Card key={i} accent={t.c} style={{flex:1,padding:"10px 8px",textAlign:"center"}}>
        <div style={{color:T2,fontSize:9,fontWeight:600}}>{t.p}</div>
        <div style={{color:t.c,fontSize:20,fontWeight:800,fontFamily:"Georgia,serif",margin:"4px 0"}}>{t.v}</div>
        <div style={{color:G,fontSize:9}}>{t.h} saved</div>
        <div style={{color:T2,fontSize:9,marginTop:4,lineHeight:1.3}}>{t.d}</div>
      </Card>)}
    </div>
    <div style={{padding:10,background:`${A}11`,borderRadius:8,border:`1px solid ${A}33`,textAlign:"center"}}>
      <div style={{color:A,fontSize:14,fontWeight:700,fontFamily:"Georgia,serif"}}>Make the people you have 10x more productive.</div>
      <div style={{color:T2,fontSize:11,marginTop:4}}>Minimum input → Maximum output. Every feature keeps the company lean and efficient — not selling more seats.</div>
    </div>
  </div>;
}

function VS(){
  const cols=[
    {name:"Throne",price:"$100-500",vals:["✓","✓","✓","✓","✓","✓","✓","✓"],color:A,highlight:true},
    {name:"Buildertrend",price:"$499+",vals:["✗","✗","✗","✗","✗","✗","✗","Partial"],color:T2},
    {name:"Jobber",price:"$69-349",vals:["✗","✗","✗","✗","✗","✗","✗","✗"],color:T2},
    {name:"ServiceTitan",price:"$500+",vals:["✗","✗","✗","Partial","✗","✗","✗","Partial"],color:T2},
  ];
  const rows=["Formula compilation (3 inputs → full package)","Pricebook Drift Engine","Multi-rail payments (RTP/FedNow/Zelle)","AI Assistant with real business context","Bill line-item allocation across jobs","Built-in HR suite","Throne Academy","Service Plan Advisor"];
  return <div>
    <div style={{marginBottom:8}}><Badge color={A}>Competitive Landscape</Badge><h2 style={{fontSize:20,fontWeight:700,color:TX,margin:"6px 0 0",fontFamily:"Georgia,serif"}}>Throne vs. everyone else</h2></div>
    <Card style={{padding:0,overflow:"hidden"}}>
      <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr",borderBottom:`1px solid ${BR}`}}>
        <div style={{padding:"8px 10px"}}/>
        {cols.map((c,i)=><div key={i} style={{padding:"8px 6px",textAlign:"center",background:c.highlight?`${A}15`:"transparent",borderLeft:`1px solid ${BR}`}}>
          <div style={{color:c.highlight?A:TX,fontSize:12,fontWeight:700}}>{c.name}</div>
          <div style={{color:c.highlight?A:T2,fontSize:10}}>{c.price}/mo</div>
        </div>)}
      </div>
      {rows.map((r,ri)=><div key={ri} style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr",borderBottom:ri<rows.length-1?`1px solid ${BR}`:"none"}}>
        <div style={{padding:"5px 10px",color:T2,fontSize:10}}>{r}</div>
        {cols.map((c,ci)=><div key={ci} style={{padding:"5px 6px",textAlign:"center",borderLeft:`1px solid ${BR}`,background:c.highlight?`${A}08`:"transparent"}}>
          <span style={{color:c.vals[ri]==="✓"?G:c.vals[ri]==="Partial"?A:R,fontSize:11,fontWeight:600}}>{c.vals[ri]}</span>
        </div>)}
      </div>)}
    </Card>
    <div style={{marginTop:8,padding:6,background:`${A}11`,borderRadius:6,textAlign:"center"}}><span style={{color:A,fontSize:10,fontWeight:600}}>Full L1 + L2 starts at $100/mo. No other platform compiles operational output from minimal input.</span></div>
  </div>;
}

function End(){
  return <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
    <Card accent={R} style={{opacity:0.7}}>
      <div style={{color:R,fontSize:10,fontWeight:700,marginBottom:8}}>BEFORE THRONE</div>
      {["62 hrs/week — can't take a vacation","$96K/yr lost to pricing drift","4 disconnected tools","Quotes take 45 min with errors","No compliance tracking","Every month starts at $0 revenue"].map((s,i)=>
        <div key={i} style={{color:T2,fontSize:11,padding:"3px 0",display:"flex",gap:4}}><span style={{color:R}}>✗</span>{s}</div>
      )}
    </Card>
    <Card accent={G}>
      <div style={{color:G,fontSize:10,fontWeight:700,marginBottom:8}}>WITH THRONE</div>
      {["40 hrs/week — system runs operations","$127K value added Year 1","One platform, every role covered","Formula quotes in 2 min from real data","100% compliance, auto-blocked subs","$45K+ recurring from Plan Advisor"].map((s,i)=>
        <div key={i} style={{color:T2,fontSize:11,padding:"3px 0",display:"flex",gap:4}}><span style={{color:G}}>✓</span>{s}</div>
      )}
    </Card>
    <div style={{gridColumn:"1/-1",textAlign:"center",padding:14,background:`linear-gradient(135deg,${CD},#1a1a10)`,borderRadius:10,border:`1px solid ${A}33`}}>
      <div style={{fontSize:18,fontWeight:700,color:TX,fontFamily:"Georgia,serif"}}>Your business deserves a system that thinks as hard as you do.</div>
      <div style={{color:A,fontSize:13,marginTop:6}}>$100 / $300 / $500 per month · Every tier gets full L1 + L2 · No crippled versions</div>
    </div>
  </div>;
}

export default function App(){
  const[cur,setCur]=useState(0);
  const ref=useRef(null);
  const stats=cumulative[cur]||cumulative[cumulative.length-1];
  useEffect(()=>{ref.current?.scrollTo({top:0});},[cur]);

  const render=()=>{
    switch(steps[cur].id){
      case"intro":return <Intro/>;case"onboard":return <Onboard/>;case"l1":return <L1/>;
      case"f1":return <Formula type="On-Call Labor" color={B} scenario={{t:"Faucet + disposal install",d:"Tuesday. Call comes in. Marcus opens Throne."}} inputs={"Service: Faucet + Disposal\nTier: Standard"} outputs={{total:"$485",services:["Faucet Replace — $185","Disposal Install — $265","Dispatch — $35"],also:["Checklist (6 items)","Material list","Upsell triggers","Schedule block","Invoice template"]}} upsell="Grout wear → regrout ($120)" metrics="Avg ticket: $380 | 94% first-visit" footer="Complete quote from 2 inputs in 45 seconds."/>;
      case"f2":return <Formula type="Small Repeatable" color={G} scenario={{t:"4,200 sqft flat roof recoat",d:"Desert Vista HOA. Marcus enters the job details."}} inputs={"Job: Flat Roof Recoat\nMeasurement: 4,200 sqft\nTier: Standard"} outputs={{total:"$18,480",services:["Wash & Prep — $2,100","Primer 4,200×$1.20 — $5,040","Finish 4,200×$1.85 — $7,770","Flashing — $1,890","Inspection — $680","Markup — $1,000"],also:["Weather protocol","3-day crew schedule","QA thickness test","Photo documentation","Maintenance plan offer"]}} upsell="Aging drains → replace ($450/ea)" metrics="44% margin | <3% callback" footer="Full scope + material calcs from sqft + crew schedule. 3 inputs."/>;
      case"f3":return <Formula type="Custom Large Scale" color={A} scenario={{t:"Henderson kitchen remodel",d:"$42K, 6 weeks, 10 services, 4 subs."}} inputs={"Project: Kitchen Remodel\nTier: Standard\nSqft: 180"} outputs={{total:"$42,150",services:["Demo — $3,200","Electrical — $4,800","Plumbing — $3,600","Cabinets — $8,400","Countertop — $6,750","Tile — $2,880","Fixtures — $2,400","Paint — $1,850","Punch — $950","PM — $7,320"],also:["4-stage lifecycle","Sub assignments","Budget tracker","Change orders","Milestone invoicing","Warranty package"]}} upsell="Under-cab lighting ($680)" metrics="38-42% margin | <10% variance" footer="$42K project package from 3 inputs."/>;
      case"hr1":return <HR1/>;case"hr2":return <HR2/>;case"drift":return <Drift/>;case"advisor":return <Advisor/>;case"ai":return <AI/>;case"api":return <API/>;case"roi":return <ROI/>;case"vs":return <VS/>;case"end":return <End/>;default:return null;
    }
  };

  return <div style={{height:"100vh",width:"100vw",background:BG,fontFamily:"'Segoe UI',system-ui,sans-serif",color:TX,display:"flex",flexDirection:"column",overflow:"hidden"}}>
    <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');*{box-sizing:border-box;margin:0}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:${BR};border-radius:2px}@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    {/* Header */}
    <div style={{padding:"8px 20px",borderBottom:`1px solid ${BR}`,display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
      <div style={{display:"flex",alignItems:"center",gap:8}}>
        <div style={{width:28,height:28,borderRadius:6,background:`linear-gradient(135deg,${A},#B8860B)`,display:"flex",alignItems:"center",justifyContent:"center"}}><Crown size={14} color="#000"/></div>
        <span style={{color:TX,fontSize:14,fontWeight:800,letterSpacing:"0.06em"}}>THRONE</span>
        <span style={{color:T2,fontSize:11}}>Interactive Demo</span>
      </div>
      <div style={{display:"flex",gap:12,alignItems:"center"}}>
        <div style={{display:"flex",gap:10}}>
          {[{l:"Hours Saved",v:stats.hours,c:G},{l:"Value Added",v:stats.money,c:A},{l:"Automations",v:stats.auto,c:B}].map((x,i)=>
            <div key={i} style={{textAlign:"center"}}><div style={{fontSize:14,fontWeight:800,fontFamily:"Georgia,serif"}}><AnimN value={x.v} color={x.c}/></div><div style={{color:T2,fontSize:8}}>{x.l}</div></div>
          )}
        </div>
      </div>
    </div>
    {/* Day bar */}
    <div style={{padding:"6px 20px",borderBottom:`1px solid ${BR}`,display:"flex",gap:2,flexShrink:0}}>
      {days.map(d=>{const active=steps[cur].day===d;const passed=days.indexOf(steps[cur].day)>days.indexOf(d);
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
    <div ref={ref} style={{flex:1,overflow:"auto",padding:"16px 20px"}}>
      <div key={cur} style={{maxWidth:760,margin:"0 auto"}}>{render()}</div>
    </div>
    {/* Nav */}
    <div style={{padding:"8px 20px",borderTop:`1px solid ${BR}`,display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
      <Pulse onClick={()=>setCur(c=>Math.max(0,c-1))} style={{display:"flex",alignItems:"center",gap:4,padding:"6px 14px",background:cur===0?CD:CD2,border:`1px solid ${BR}`,borderRadius:6,color:cur===0?T2:TX,fontSize:12,opacity:cur===0?0.4:1}}>
        <ChevronLeft size={14}/> Back
      </Pulse>
      <div style={{display:"flex",gap:3}}>{steps.map((_,i)=><div key={i} style={{width:i===cur?16:4,height:4,borderRadius:2,background:i===cur?A:i<cur?G:BR,transition:"all 0.3s"}}/>)}</div>
      {cur<steps.length-1?
        <Pulse onClick={()=>setCur(c=>c+1)} style={{display:"flex",alignItems:"center",gap:4,padding:"6px 14px",background:A,border:"none",borderRadius:6,color:"#000",fontSize:12,fontWeight:700}}>Continue <ChevronRight size={14}/></Pulse>:
        <Pulse onClick={()=>setCur(0)} style={{display:"flex",alignItems:"center",gap:4,padding:"6px 14px",background:A,border:"none",borderRadius:6,color:"#000",fontSize:12,fontWeight:700}}>↻ Start Over</Pulse>
      }
    </div>
  </div>;
}

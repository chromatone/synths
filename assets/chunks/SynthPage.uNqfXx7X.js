import{u as b,b as S,_ as w}from"./useClicks.pjLzFjJy.js";import{r as h,w as p,o as _,b as l,d as i,g as t,y as g,z as m,e as B,v as C,T as N,n as L,J as z,t as s,A as V,h as v,K as D,q as o,f as F,I,L as T,i as $}from"./framework.5dgMT4wJ.js";const A={class:"flex flex-col gap-4 bg-light-300 dark-bg-dark-300 rounded-lg shadow-xl overflow-hidden mx-auto"},q=["title","src"],E={class:"flex flex-col p-4 gap-1 bottom-0 bg-light-100 dark-bg-dark-200 w-full max-w-180 mx-auto mb-12 relative"},J={class:"text-xl flex items-center gap-4"},K={class:"font-bold"},M=t("div",{class:"flex-auto"},null,-1),P={class:"p-0 flex gap-4"},j=["href"],G={class:"px-2 py-0 bg-light-800 dark-bg-dark-800 rounded-xl transition text-sm select-none text-center z-200 flex items-center gap-1 opacity-40 hover-opacity-100 transition"},H=t("div",{class:"i-la-eye"},null,-1),O={key:0,class:"flex-1 flex items-end flex flex-wrap gap-2"},Q={key:1,class:"p-0"},R={class:"mt-4"},Y={__name:"SynthPage",props:{title:{type:String,default:""},description:{type:String,default:""},author:{type:String,default:""},author_link:{type:String,default:""},cover:{type:String,default:""},slug:{type:String,default:""},url:{type:String,default:""},tags:{type:Array,default:[]},archive:{type:Boolean,default:!1},archive_link:{type:String,default:""},iframe:{type:Boolean,default:!1},clicks:{type:Number,default:0},id:{type:Number,default:0}},setup(e){const n=e,r=h(!1);function y(a){a.timeStamp<5e3&&(r.value=!0)}const{clickSynth:k,clicksCount:d}=b(n.id);p(()=>n.clicks,a=>d.value=a,{immediate:!0});const c=h(0);return _(async()=>{await k();let a=await S("synth_stats",n.id);c.value=(a==null?void 0:a.stars)||0}),(a,U)=>{var u;const x=w;return l(),i("div",A,[t("div",{class:L(["p-0l h-70vh h-70svh bg-cover bg-center",{"animate-pulse":e.iframe&&!r.value}]),style:z({backgroundImage:`url(/cover/${e.slug}.webp)`})},[g(N,{name:"fade"},{default:m(()=>[B(t("iframe",{class:"w-full h-70vh h-70svh bg-light-100 dark-bg-dark-800",allow:"midi *",onLoad:y,title:e.title,src:e.archive?e.archive_link:e.url},null,40,q),[[C,r.value]])]),_:1})],6),t("div",E,[t("div",J,[t("div",K,s(e.title),1),e.author?(l(),V(D(e.author_link?"a":"div"),{key:0,class:"text-lg font-300",target:"_blank",href:e.author_link},{default:m(()=>[v("by "+s(e.author),1)]),_:1},8,["href"])):o("",!0),M,g(x,{id:e.id,stars:c.value},null,8,["id","stars"])]),t("div",P,[t("a",{class:"my-2 font-mono text-sm",href:e.url,target:"_blank"},s(e.url),9,j),t("div",G,[v(s(F(d)),1),H])]),((u=e.tags)==null?void 0:u.length)>0?(l(),i("div",O,[(l(!0),i(I,null,T(e.tags,f=>(l(),i("div",{class:"px-2 py-1 text-sm bg-light-800 dark-bg-dark-500 rounded-lg",key:f},s(f),1))),128))])):o("",!0),e.description?(l(),i("div",Q,s(e.description),1)):o("",!0),t("div",R,[$(a.$slots,"default")])])])}}};export{Y as _};

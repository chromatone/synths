import{u as b,b as w,_ as S}from"./useClicks.DBr_plfA.js";import{r as g,w as p,o as _,b as l,d as i,g as t,e as C,v as B,n as N,J as z,y as v,z as m,T as $,t as s,A as L,h as y,K as V,q as c,f as D,I,L as T,i as A}from"./framework.BMc-2bSs.js";const F={class:"flex flex-col gap-4 bg-light-300 dark-bg-dark-300 rounded-lg shadow-xl overflow-hidden mx-auto"},q={class:"h-70vh h-70svh"},E=["title","src"],J={class:"flex flex-col p-4 gap-1 bottom-0 bg-light-100 dark-bg-dark-200 w-full max-w-180 mx-auto mb-12 relative"},K={class:"text-xl flex items-center gap-4"},M={class:"font-bold"},P=t("div",{class:"flex-auto"},null,-1),j={class:"p-0 flex gap-4"},G=["href"],H={class:"px-2 py-0 bg-light-800 dark-bg-dark-800 rounded-xl transition text-sm select-none text-center z-200 flex items-center gap-1 opacity-40 hover-opacity-100 transition"},O=t("div",{class:"i-la-eye"},null,-1),Q={key:0,class:"flex-1 flex items-end flex flex-wrap gap-2"},R={key:1,class:"p-0"},U={class:"mt-4"},Y={__name:"SynthPage",props:{title:{type:String,default:""},description:{type:String,default:""},author:{type:String,default:""},author_link:{type:String,default:""},cover:{type:String,default:""},slug:{type:String,default:""},url:{type:String,default:""},tags:{type:Array,default:[]},archive:{type:Boolean,default:!1},archive_link:{type:String,default:""},iframe:{type:Boolean,default:!1},clicks:{type:Number,default:0},id:{type:Number,default:0}},setup(e){const d=e,n=g(!1),{clickSynth:k,clicksCount:u}=b(d.id);p(()=>d.clicks,a=>u.value=a,{immediate:!0});const h=g(0);return _(async()=>{await k();let a=await w("synth_stats",d.id);h.value=(a==null?void 0:a.stars)||0}),(a,o)=>{var f;const x=S;return l(),i("div",F,[t("div",q,[C(t("div",{class:N(["h-70vh h-70svh bg-cover bg-center absolute z-100 w-full",{"animate-pulse":e.iframe&&!n.value}]),onClick:o[0]||(o[0]=r=>n.value=!0),style:z({backgroundImage:`url(/cover/${e.slug}.webp)`})},null,6),[[B,!n.value]]),v($,{name:"fade"},{default:m(()=>[t("iframe",{class:"w-full h-70vh h-70svh bg-light-100 dark-bg-dark-800",allow:"midi *",onLoad:o[1]||(o[1]=r=>n.value=!0),title:e.title,src:e.archive?e.archive_link:e.url},null,40,E)]),_:1})]),t("div",J,[t("div",K,[t("div",M,s(e.title),1),e.author?(l(),L(V(e.author_link?"a":"div"),{key:0,class:"text-lg font-300",target:"_blank",href:e.author_link},{default:m(()=>[y("by "+s(e.author),1)]),_:1},8,["href"])):c("",!0),P,v(x,{id:e.id,stars:h.value},null,8,["id","stars"])]),t("div",j,[t("a",{class:"my-2 font-mono text-sm",href:e.url,target:"_blank"},s(e.url),9,G),t("div",H,[y(s(D(u)),1),O])]),((f=e.tags)==null?void 0:f.length)>0?(l(),i("div",Q,[(l(!0),i(I,null,T(e.tags,r=>(l(),i("div",{class:"px-2 py-1 text-sm bg-light-800 dark-bg-dark-500 rounded-lg",key:r},s(r),1))),128))])):c("",!0),e.description?(l(),i("div",R,s(e.description),1)):c("",!0),t("div",U,[A(a.$slots,"default")])])])}}};export{Y as _};
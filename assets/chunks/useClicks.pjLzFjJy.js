import{a as y,c as v,r as p,b as l,d as u,C as b,U as w}from"./framework.5dgMT4wJ.js";import{w as g,j as k,l as S,S as _}from"./chunk-LDFD35JM.27RXxW-q.js";const n=y("favourites",{3:"default",29:"default",39:"default"}),C={key:0,class:"i-la-star"},j={key:1,class:"i-la-star-solid text-yellow"},N={__name:"SynthFav",props:{id:{type:Number,default:0},stars:{type:Number,default:0}},setup(r){const e=r,s=v(()=>n.value[e.id]),o=p(e.stars);async function t(){if((n.value[e.id]===void 0||n.value[e.id]===null)&&m(e.id),n.value[e.id]==="default"){n.value[e.id]=null;return}n.value[e.id]=!n.value[e.id]}async function m(d){var c,i,f;try{const a=await fetch("https://dbs.chromatone.center/flows/trigger/f235dc43-5911-4a7a-8327-5a5c39beb3b2",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({id:d})});o.value=await(a==null?void 0:a.json())}catch(a){console.error(a,(i=(c=a==null?void 0:a.errors)==null?void 0:c[0])==null?void 0:i.message,(f=a==null?void 0:a.response)==null?void 0:f.status)}}return(d,c)=>(l(),u("button",{class:"p-0 cursor-pointer flex items-center gap-1 justify-center relative",onClick:c[0]||(c[0]=b(i=>t(),["stop","prevent"])),title:"Toggle star"},[s.value?(l(),u("div",j)):(l(),u("div",C))]))}},h=g("https://dbs.chromatone.center/").with(k());async function O(r,e){try{return await h.request(_(r,e))}catch(s){console.log(s)}}async function P(r,e,s){try{return await h.request(S(r,e,s))}catch(o){console.log(o)}}async function T(r){var e,s,o;try{const t=await fetch("https://dbs.chromatone.center/flows/trigger/96844b2f-abd0-41ed-bfe1-c5bcf788a98d",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({id:r})});return await(t==null?void 0:t.json())}catch(t){console.error(t,(s=(e=t==null?void 0:t.errors)==null?void 0:e[0])==null?void 0:s.message,(o=t==null?void 0:t.response)==null?void 0:o.status)}}function q(r,e=0){const s=p(e),o=w(T,1e4);async function t(){s.value=await o(r)}return{clicksCount:s,clickSynth:t}}export{N as _,O as a,P as b,n as f,q as u};

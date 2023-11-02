import{o as c,c as p,a as e,_ as D,r as O,m as R,l as h,u as t,w as b,M as j,t as y,b as _,q as P,O as E,i as M,P as T,v as S,h as L,N as B,j as V,k as I,g as v,Q as w,R as U,S as Y,U as z,V as G,W as H,X as K,Y as W,Z as q,$ as J,a0 as Q,a1 as X,a2 as Z,e as ee,a3 as te,a4 as ae,a5 as oe,a6 as se,a7 as ne}from"./chunks/framework.e7ab0c78.js";import{u as F}from"./chunks/useForm.27717f80.js";import"./chunks/index.93d9c75a.js";const le={class:"flex items-center gap-1 p-4 bg-light-100 bg-opacity-70 dark-bg-dark-400 dark-bg-opacity-40 w-full justify-center"},ie=e("div",{class:"p-0"},"Made with 🧡 by",-1),re=e("a",{href:"https://shop.playtronica.com",target:"_blank"},"Playtronica ",-1),ce=e("span",null,"&",-1),de=e("a",{href:"https://chromatone.center",target:"_blank"},"Chromatone",-1),pe=[ie,re,ce,de];function ue(o,a){return c(),p("div",le,pe)}const me={},_e=D(me,[["render",ue]]);const fe={key:0,class:"fixed z-1000 min-h-40dvh bottom-0 w-full bg-light-800 bg-opacity-80 backdrop-blur flex flex-col items-center gap-4 justify-center dark-bg-dark-200 dark-bg-opacity-80 p-8 shadow max-w-180 bottom-0 rounded-xl"},he={key:0,class:"flex flex-col gap-4 max-w-45ch text-center"},ge={class:"text-3xl font-bold"},xe=e("div",{class:"text-xl"},"You are part of web-musicians community",-1),be={class:"text-sm flex gap-2 justify-center"},ve={key:1,class:"flex flex-col gap-8 relative pt-8 items-center"},ye={class:"text-center max-w-55ch",for:"email"},we={class:"flex gap-4 flex-col w-full"},ke={class:"flex items-center gap-2"},$e=e("div",{class:"p-2 w-24 font-bold text-right"},"E-mail *",-1),Ce=["maxlength"],Ae={class:"flex items-center gap-2"},Pe=e("div",{class:"p-2 w-24 font-bold text-right"},"Name",-1),Ee=["maxlength","placeholder"],Me=["disabled"],Te={__name:"FormMain",setup(o){const{name:a,email:s,isValidEmail:l,isFormOpen:r,grantAccess:d,storedEmail:k,storedName:u,resetEmail:f,isAccessGranted:g,namePlaceholder:x,passwordPlaceholder:$,password:qe,generatePassword:Je,maxLength:C,claimInvite:Qe,invited:Xe}=F();return O(),(A,n)=>(c(),R(B,{name:"panel"},{default:h(()=>[t(r)?(c(),p("div",fe,[b(e("button",{class:"i-la-times absolute top-4 right-4 text-2xl hover-opacity-90 opacity-50 transition",onClick:n[0]||(n[0]=i=>r.value=!1)},null,512),[[j,t(r)]]),t(g)?(c(),p("div",he,[e("div",ge,"Hello, "+y(t(u))+"!",1),xe,e("div",be,[_(y(t(k)),1),e("span",{class:"opacity-20 hover-opacity-50 transition cursor-pointer",onClick:n[1]||(n[1]=(...i)=>t(f)&&t(f)(...i))},"Log out")])])):(c(),p("div",ve,[e("label",ye,[P(A.$slots,"default")]),e("div",we,[e("label",ke,[$e,b(e("input",{class:E(["flex-1 p-4 md-p-4 rounded-xl bg-light-200 shadow-md dark-bg-dark-400 flex-1 border-2 border-solid border-opacity-60 dark-border-opacity-40",{"border-red-700 dark-border-red-300":t(s)&&!t(l),"border-green-700 dark-border-green-800":t(s)&&t(l),"border-light-300":!t(s)}]),ref:"target",maxlength:t(C),"onUpdate:modelValue":n[2]||(n[2]=i=>M(s)?s.value=i:null),id:"email",name:"email",type:"email",onKeydown:n[3]||(n[3]=T(i=>t(d)(),["enter"])),placeholder:"your@gmail.com"},null,42,Ce),[[S,t(s)]])]),e("label",Ae,[Pe,b(e("input",{class:"flex-1 p-4 md-p-4 rounded-xl bg-light-200 shadow-md dark-bg-dark-400","onUpdate:modelValue":n[4]||(n[4]=i=>M(a)?a.value=i:null),id:"name",maxlength:t(C),name:"name",type:"text",onKeydown:n[5]||(n[5]=T(i=>t(d)(),["enter"])),placeholder:t(x)},null,40,Ee),[[S,t(a)]])])]),e("button",{class:E(["text-sm md-text-md p-4 font-bold md-p-4 rounded-xl shadow-xl hover-shadow-2xl transition -hover-translate-y-2px disabled-opacity-40 active-translate-y-0 active-shadow-md bg-green-400 dark-bg-green-700",{"grayscale-50":!t(l)}]),onClick:n[6]||(n[6]=i=>t(d)()),disabled:!t(l),title:"Your access status will be saved per device and you won't need to enter your e-mail again."},[P(A.$slots,"button",{},()=>[_("GET ACCESS")])],10,Me)]))])):L("",!0)]),_:3}))}};const Se={class:"flex flex-col noise items-center relative min-h-100svh"},Ve={class:"w-full backdrop-blur-xl sticky top-0 z-100 bg-light-200 bg-opacity-60 dark-bg-dark-300 dark-bg-opacity-60"},Fe={class:"flex flex items-center w-full max-w-180 mx-auto gap-4 px-2"},Ne={class:"p-2 flex items-center gap-4",href:"/"},De=["src"],Oe={class:"text-xl font-600"},Re=e("div",{class:"flex-1"},null,-1),je={key:0,class:"i-la-sun"},Le={key:1,class:"i-tabler-moon-2"},Be=e("div",{class:"i-ph-user-circle-duotone p-5"},null,-1),Ie=[Be],Ue={class:"flex flex-wrap w-full mx-auto flex-auto justify-center"},Ye={__name:"MainLayout",setup(o){const{isFormOpen:a,searchParams:s}=F(),{theme:l,site:r,isDark:d}=V();return(k,u)=>{const f=I("content"),g=Te,x=_e;return c(),p("div",Se,[e("div",Ve,[e("div",Fe,[e("a",Ne,[e("img",{class:"w-12",src:t(l).logo,alt:"Web-synths collection logo"},null,8,De),e("div",Oe,y(t(r).title),1)]),Re,e("button",{class:"text-xl",onClick:u[0]||(u[0]=$=>d.value=!t(d)),"aria-label":"Dark mode toggle"},[t(d)?(c(),p("div",Le)):(c(),p("div",je))]),e("button",{class:"p-4 z-2000 cursor-pointer","aria-label":"Player profile",onClick:u[1]||(u[1]=$=>a.value=!t(a))},Ie)])]),e("div",Ue,[v(f,{class:"w-full",id:"content"})]),v(g,null,{button:h(()=>[_("JOIN THE COMMUNITY")]),notice:h(()=>[_("Your access status will be saved per device and you won't need to enter your e-mail again.")]),default:h(()=>[_("We are building a community of web-based musicians. Type in your e-mail to instantly gain full access to the collection and receive occasional community updates from us. Stay tuned! ")]),_:1}),v(x)])}}};const ze={Layout:Ye,enhanceApp({app:o}){}};function N(o){if(o.extends){const a=N(o.extends);return{...a,...o,async enhanceApp(s){a.enhanceApp&&await a.enhanceApp(s),o.enhanceApp&&await o.enhanceApp(s)}}}return o}const m=N(ze),Ge=Z({name:"VitePressApp",setup(){const{site:o}=V();return ee(()=>{te(()=>{document.documentElement.lang=o.value.lang,document.documentElement.dir=o.value.dir})}),ae(),oe(),se(),m.setup&&m.setup(),()=>ne(m.Layout)}});async function He(){const o=We(),a=Ke();a.provide(Y,o);const s=z(o.route);return a.provide(G,s),a.component("Content",H),a.component("ClientOnly",K),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return s.frontmatter.value}},$params:{get(){return s.page.value.params}}}),m.enhanceApp&&await m.enhanceApp({app:a,router:o,siteData:W}),{app:a,router:o,data:s}}function Ke(){return q(Ge)}function We(){let o=w,a;return J(s=>{let l=Q(s),r=null;return l&&(o&&(a=l),(o||a===l)&&(l=l.replace(/\.js$/,".lean.js")),r=X(()=>import(l),[])),w&&(o=!1),r},m.NotFound)}w&&He().then(({app:o,router:a,data:s})=>{a.go().then(()=>{U(a.route,s.site),o.mount("#app")})});export{He as createApp};

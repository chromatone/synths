if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const d=e=>i(e,r),u={module:{uri:r},exports:a,require:d};s[r]=Promise.all(n.map((e=>u[e]||d(e)))).then((e=>(l(...e),a)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"d882e7e594f79647726869d54beef7ac"},{url:"ableton/index.html",revision:"70dba1338fab8294b9f72a93a6ab3c6f"},{url:"acid-machine-2/index.html",revision:"00d0f7d21afa4651dddb52eff52070b8"},{url:"aqwertyon/index.html",revision:"0c2dfe3e5e966cc4a8741d31abf3d76a"},{url:"archive/synthescheisse/index.html",revision:"723c41e4238ba7b9cacdc5e4649a2dee"},{url:"archive/synthescheisse/SYNTHESCHEISSE_files/script.js",revision:"0f2f9610db3c70bf3ef8128066641621"},{url:"archive/synthescheisse/SYNTHESCHEISSE_files/style.css",revision:"4f047b48cc6fa6eac39a6b6026a8e350"},{url:"assets/ableton_index.md.143f5ac0.js",revision:null},{url:"assets/ableton_index.md.143f5ac0.lean.js",revision:null},{url:"assets/acid-machine-2_index.md.4d6fbf6e.js",revision:null},{url:"assets/acid-machine-2_index.md.4d6fbf6e.lean.js",revision:null},{url:"assets/app.505ce423.js",revision:null},{url:"assets/aqwertyon_index.md.33b5c45b.js",revision:null},{url:"assets/aqwertyon_index.md.33b5c45b.lean.js",revision:null},{url:"assets/auth_accept.md.50f64a99.js",revision:null},{url:"assets/auth_accept.md.50f64a99.lean.js",revision:null},{url:"assets/auth_index.md.1c7bc261.js",revision:null},{url:"assets/auth_index.md.1c7bc261.lean.js",revision:null},{url:"assets/auth_invite.md.63547f55.js",revision:null},{url:"assets/auth_invite.md.63547f55.lean.js",revision:null},{url:"assets/auth_logout.md.9f2afb17.js",revision:null},{url:"assets/auth_logout.md.9f2afb17.lean.js",revision:null},{url:"assets/auth_reset.md.1cb2ccba.js",revision:null},{url:"assets/auth_reset.md.1cb2ccba.lean.js",revision:null},{url:"assets/auth.md.0dee2e27.js",revision:null},{url:"assets/auth.md.0dee2e27.lean.js",revision:null},{url:"assets/cardboard-synth_index.md.63b40037.js",revision:null},{url:"assets/cardboard-synth_index.md.63b40037.lean.js",revision:null},{url:"assets/chunks/framework.60289e44.js",revision:null},{url:"assets/chunks/SynthPage.7cf728fa.js",revision:null},{url:"assets/chunks/useForm.240d0884.js",revision:null},{url:"assets/disco-computer_index.md.951d0340.js",revision:null},{url:"assets/disco-computer_index.md.951d0340.lean.js",revision:null},{url:"assets/dotpiano_index.md.01f2c661.js",revision:null},{url:"assets/dotpiano_index.md.01f2c661.lean.js",revision:null},{url:"assets/dx7_index.md.800b6fde.js",revision:null},{url:"assets/dx7_index.md.800b6fde.lean.js",revision:null},{url:"assets/elementary_index.md.9c0200fe.js",revision:null},{url:"assets/elementary_index.md.9c0200fe.lean.js",revision:null},{url:"assets/index.md.b7feb991.js",revision:null},{url:"assets/index.md.b7feb991.lean.js",revision:null},{url:"assets/juno-106_index.md.03b3afd9.js",revision:null},{url:"assets/juno-106_index.md.03b3afd9.lean.js",revision:null},{url:"assets/meet-the-heisenberg_index.md.0388b758.js",revision:null},{url:"assets/meet-the-heisenberg_index.md.0388b758.lean.js",revision:null},{url:"assets/midi-driven-web-audio_index.md.5f6aacf9.js",revision:null},{url:"assets/midi-driven-web-audio_index.md.5f6aacf9.lean.js",revision:null},{url:"assets/mod-synth_index.md.c064e802.js",revision:null},{url:"assets/mod-synth_index.md.c064e802.lean.js",revision:null},{url:"assets/muted-io_index.md.1afb573d.js",revision:null},{url:"assets/muted-io_index.md.1afb573d.lean.js",revision:null},{url:"assets/note-sculptor_index.md.5158189c.js",revision:null},{url:"assets/note-sculptor_index.md.5158189c.lean.js",revision:null},{url:"assets/nv-1_index.md.54598950.js",revision:null},{url:"assets/nv-1_index.md.54598950.lean.js",revision:null},{url:"assets/olif-sy-1-k_index.md.81af5581.js",revision:null},{url:"assets/olif-sy-1-k_index.md.81af5581.lean.js",revision:null},{url:"assets/omni_index.md.391f449e.js",revision:null},{url:"assets/omni_index.md.391f449e.lean.js",revision:null},{url:"assets/online-sequencer_index.md.708a0c35.js",revision:null},{url:"assets/online-sequencer_index.md.708a0c35.lean.js",revision:null},{url:"assets/pixel-synth_index.md.a4e3b277.js",revision:null},{url:"assets/pixel-synth_index.md.a4e3b277.lean.js",revision:null},{url:"assets/README.md.8a779224.js",revision:null},{url:"assets/README.md.8a779224.lean.js",revision:null},{url:"assets/sample-stich_index.md.7a25c3a4.js",revision:null},{url:"assets/sample-stich_index.md.7a25c3a4.lean.js",revision:null},{url:"assets/sampler_index.md.6fa8bc53.js",revision:null},{url:"assets/sampler_index.md.6fa8bc53.lean.js",revision:null},{url:"assets/sound-box_index.md.598028af.js",revision:null},{url:"assets/sound-box_index.md.598028af.lean.js",revision:null},{url:"assets/sound-trap_index.md.9b49fe28.js",revision:null},{url:"assets/sound-trap_index.md.9b49fe28.lean.js",revision:null},{url:"assets/style.4998db6f.css",revision:null},{url:"assets/sympathetic_index.md.e80199ac.js",revision:null},{url:"assets/sympathetic_index.md.e80199ac.lean.js",revision:null},{url:"assets/tanguy-synth_index.md.1d301112.js",revision:null},{url:"assets/tanguy-synth_index.md.1d301112.lean.js",revision:null},{url:"assets/theremin_index.md.1bf39c57.js",revision:null},{url:"assets/theremin_index.md.1bf39c57.lean.js",revision:null},{url:"assets/touch-pianist_index.md.fc528ca8.js",revision:null},{url:"assets/touch-pianist_index.md.fc528ca8.lean.js",revision:null},{url:"assets/touchme_index.md.3f62541b.js",revision:null},{url:"assets/touchme_index.md.3f62541b.lean.js",revision:null},{url:"assets/video-sampler_index.md.edac1ac1.js",revision:null},{url:"assets/video-sampler_index.md.edac1ac1.lean.js",revision:null},{url:"assets/virtual-piano_index.md.23e37fd8.js",revision:null},{url:"assets/virtual-piano_index.md.23e37fd8.lean.js",revision:null},{url:"assets/waveform_index.md.80756949.js",revision:null},{url:"assets/waveform_index.md.80756949.lean.js",revision:null},{url:"assets/web-audio-synth-v2_index.md.5e8b3e4e.js",revision:null},{url:"assets/web-audio-synth-v2_index.md.5e8b3e4e.lean.js",revision:null},{url:"assets/web-modular_index.md.a933ae33.js",revision:null},{url:"assets/web-modular_index.md.a933ae33.lean.js",revision:null},{url:"assets/web-sid_index.md.ab2ef37b.js",revision:null},{url:"assets/web-sid_index.md.ab2ef37b.lean.js",revision:null},{url:"assets/websynths_index.md.27f345b7.js",revision:null},{url:"assets/websynths_index.md.27f345b7.lean.js",revision:null},{url:"auth.html",revision:"0e69d6909f02c98968471c0df0ac83fc"},{url:"auth/accept.html",revision:"b72f5e3d7ac2eb4a897023cafb993af6"},{url:"auth/index.html",revision:"aa931d4bec67ca58c38bb755ccdbbe37"},{url:"auth/invite.html",revision:"a18f80289d51c81addf2b6e632673550"},{url:"auth/logout.html",revision:"6e67c864d18e3f19332c82e17d1aac5d"},{url:"auth/reset.html",revision:"629c9aceee8b77bd994aa0942f370629"},{url:"cardboard-synth/index.html",revision:"062964c6ea0e4c4ddef35c511ed831a4"},{url:"circe/demo.html",revision:"0b40a4783cb88c9ffd8c7c77929526bf"},{url:"click-logo.svg",revision:"f15e71cb394926c5f8c08f64186d2d49"},{url:"cover/ableton.webp",revision:"6561f3301d66aa1c539618ad69b0970b"},{url:"cover/acid-machine-2.webp",revision:"0bdcb6a585d98e228f33fce8535165f8"},{url:"cover/aqwertyon.webp",revision:"4c83d130087f32f6b8327489335e6089"},{url:"cover/cardboard-synth.webp",revision:"842a5d7d270ecbcc5938abcd7233a877"},{url:"cover/disco-computer.webp",revision:"d8bd371e147c409948754fdb7271818e"},{url:"cover/dotpiano.webp",revision:"64a8992fed0646c1f69549c831cd29c1"},{url:"cover/dx7.webp",revision:"2a2b579b95ff6aa3963668e5e2f85cdb"},{url:"cover/elementary.webp",revision:"719ff527ab0a5b2bb36a786939a7aa7a"},{url:"cover/juno-106.webp",revision:"e1cf6e6273bf0be11c5f1d5bf84128d4"},{url:"cover/meet-the-heisenberg.webp",revision:"b6e71413c053db186ea329c26634ff20"},{url:"cover/midi-driven-web-audio.webp",revision:"5beec8a10a45b43036af77925a32da40"},{url:"cover/mod-synth.webp",revision:"411b5cef60a7b3d68e1af4b64733bbbf"},{url:"cover/muted-io.webp",revision:"270d9fcab69ffd2bf681e6f7fae5d0bb"},{url:"cover/note-sculptor.webp",revision:"bc28fc2a6de523a8b7d91a786304e91a"},{url:"cover/nv-1.webp",revision:"fbdc3df1e9a26649c3000eaffef0b363"},{url:"cover/olif-sy-1-k.webp",revision:"18cea99e25862b5f586e7919e612fe3a"},{url:"cover/omni.webp",revision:"0bc08fd308c6194698034e4c4bb6ae30"},{url:"cover/online-sequencer.webp",revision:"481fe6b3e0a802898b316bfdb2dd7e45"},{url:"cover/pixel-synth.webp",revision:"dd5c95af8d0325b27a2869d2882ab07e"},{url:"cover/sample-stich.webp",revision:"f5efcb964577c0bfd6b4037f56c8f302"},{url:"cover/sampler.webp",revision:"729fd09b498dd0518c1cbb5838afbd3c"},{url:"cover/sound-box.webp",revision:"e8ef166f3e5c80eda155939d1ea67543"},{url:"cover/sound-trap.webp",revision:"e1624dc83e48e0d6d27c5c6eb934ce49"},{url:"cover/sympathetic.webp",revision:"a7a9685862320c9410d0f605f6c6741d"},{url:"cover/tanguy-synth.webp",revision:"09af8153c0aff16ec7399651bb46a5c4"},{url:"cover/theremin.webp",revision:"9fd01e25b38bfa33cfd281045505ce7d"},{url:"cover/touch-pianist.webp",revision:"aeee9a11958d8670946d2e281851b733"},{url:"cover/touchme.webp",revision:"768b2b4f2c37244818a1763c434b0ad7"},{url:"cover/video-sampler.webp",revision:"dd7347a83ee7fea3a8050d8ba84ebb9d"},{url:"cover/virtual-piano.webp",revision:"457ea2aa9317311b89b9e7efb185f138"},{url:"cover/waveform.webp",revision:"e45bc980654e6e97904253df33a8c8f5"},{url:"cover/web-audio-synth-v2.webp",revision:"0b03a73b9e3a5bee31674e8fa38aae39"},{url:"cover/web-modular.webp",revision:"9fd34e9f10e6de32e73676fdb0c1865b"},{url:"cover/web-sid.webp",revision:"54eeeaac03e0a17e09668f07ce97a32c"},{url:"cover/websynths.webp",revision:"307db3845204ddf77af11734e86fe8ca"},{url:"disco-computer/index.html",revision:"f2405c337132f6a710ac81192fd9fb8b"},{url:"dotpiano/index.html",revision:"45d2ad7700eea24aaff426b0d94e4e03"},{url:"dx7/index.html",revision:"5fb22b5ac38c5b1405a7eda808127e8f"},{url:"elementary/index.html",revision:"71d94a8c337076d18bcd31d0a0dc38eb"},{url:"icon.png",revision:"eb8e7369ba634f3bd1a96d889be50f7d"},{url:"index.html",revision:"91ceb017b7b324c88bcc0033ea90ed03"},{url:"juno-106/index.html",revision:"98d4e4f4e7e72111c934a96fbf5c9ea4"},{url:"line.svg",revision:"4866b853d0c5c97e9f654fa32580076a"},{url:"logo.svg",revision:"134c144f78e462c4672fc8f64e69df9e"},{url:"meet-the-heisenberg/index.html",revision:"165b1082c1ff4349a98d355ba83082a2"},{url:"midi-driven-web-audio/index.html",revision:"4eff4b432d85714bfd1e856d9d730047"},{url:"mod-synth/index.html",revision:"85065ddd7abd126777e36d77886f1bce"},{url:"muted-io/index.html",revision:"0a958b19a8fb584f1ca8fe20b247099a"},{url:"note-sculptor/index.html",revision:"1d0e7da08d0f5509232c741616193270"},{url:"nv-1/index.html",revision:"e2b6c657e6f7a3df1c603741a1b7a954"},{url:"olif-sy-1-k/index.html",revision:"7d9de6d9300b1a8ddf6ca8dcbab1d59f"},{url:"omni/index.html",revision:"a0b0e41a9b6cfd231f6653656e8f1f2d"},{url:"online-sequencer/index.html",revision:"dd4ddf22c046ed9ffcae555283a8dfba"},{url:"pixel-synth/index.html",revision:"7df82494346346638caf611ef14eba92"},{url:"pl-logo.webp",revision:"9f0d66adf550fa40e8b2e03ff997eb34"},{url:"README.html",revision:"662152286ef8831c6179cdffc631f7fe"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"sample-stich/index.html",revision:"0c42c1001978321b9f1ee594bbeb1e57"},{url:"sampler/index.html",revision:"441a8259f341b16a5f3748419321a97f"},{url:"sound-box/index.html",revision:"3e40684d04e8690993b201b9c0b55e5c"},{url:"sound-trap/index.html",revision:"00343de88b758e31ec0fda4db2d84112"},{url:"sympathetic/index.html",revision:"809fdf24c91a35fd78967d70deabebc8"},{url:"tanguy-synth/index.html",revision:"a1a59cee1de8e652369fa7e4486e5c5b"},{url:"theremin/index.html",revision:"9338f73a3bdf15299a53568623179985"},{url:"touch-pianist/index.html",revision:"304c778eadf6291ae6a2c1ffe13dd4f1"},{url:"touchme/index.html",revision:"584c26ce9bd9742c642d8eca9683bf3b"},{url:"video-sampler/index.html",revision:"476e839f43fd30a04f6b122d787d6ed3"},{url:"virtual-piano/index.html",revision:"a1593b5301ac2fcd84de15d73a1fb503"},{url:"waveform/index.html",revision:"b6cfa837faa55018fa7a04bfb9e13f04"},{url:"web-audio-synth-v2/index.html",revision:"94237408f6a799c56bb6f36c5f737953"},{url:"web-modular/index.html",revision:"fea0938672ea796b2c60282bae5c1c3e"},{url:"web-sid/index.html",revision:"ee0695ee85cc5484b69a91455c8341ca"},{url:"websynths/index.html",revision:"3d0209f3d560559c2ccb740bb6762046"},{url:"logo.svg",revision:"134c144f78e462c4672fc8f64e69df9e"},{url:"icon.png",revision:"eb8e7369ba634f3bd1a96d889be50f7d"},{url:"manifest.webmanifest",revision:"aee00a3fc5429948aa59c7d1c9d825cc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

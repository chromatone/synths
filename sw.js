if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const a=e=>i(e,d),u={module:{uri:d},exports:r,require:a};s[d]=Promise.all(n.map((e=>u[e]||a(e)))).then((e=>(l(...e),r)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"bc5a2bab4cb488295cc6f0d8e37a85d8"},{url:"ableton/index.html",revision:"e6705d84e493d6ecfcb95f9fc89157ca"},{url:"acid-machine-2/index.html",revision:"afeb9fbd9207787768ef67228f53e1c4"},{url:"aqwertyon/index.html",revision:"df5234dadf449ddd321a4cdd5a261737"},{url:"archive/synthescheisse/index.html",revision:"723c41e4238ba7b9cacdc5e4649a2dee"},{url:"archive/synthescheisse/SYNTHESCHEISSE_files/script.js",revision:"0f2f9610db3c70bf3ef8128066641621"},{url:"archive/synthescheisse/SYNTHESCHEISSE_files/style.css",revision:"4f047b48cc6fa6eac39a6b6026a8e350"},{url:"assets/ableton_index.md.acf042a6.js",revision:null},{url:"assets/ableton_index.md.acf042a6.lean.js",revision:null},{url:"assets/acid-machine-2_index.md.4c03de8c.js",revision:null},{url:"assets/acid-machine-2_index.md.4c03de8c.lean.js",revision:null},{url:"assets/app.d3db9bfb.js",revision:null},{url:"assets/aqwertyon_index.md.d155cdc6.js",revision:null},{url:"assets/aqwertyon_index.md.d155cdc6.lean.js",revision:null},{url:"assets/auth_accept.md.8c4c92ba.js",revision:null},{url:"assets/auth_accept.md.8c4c92ba.lean.js",revision:null},{url:"assets/auth_index.md.f997a05e.js",revision:null},{url:"assets/auth_index.md.f997a05e.lean.js",revision:null},{url:"assets/auth_invite.md.969f8937.js",revision:null},{url:"assets/auth_invite.md.969f8937.lean.js",revision:null},{url:"assets/auth_logout.md.32f82811.js",revision:null},{url:"assets/auth_logout.md.32f82811.lean.js",revision:null},{url:"assets/auth_reset.md.3ab0d878.js",revision:null},{url:"assets/auth_reset.md.3ab0d878.lean.js",revision:null},{url:"assets/auth.md.d0d12119.js",revision:null},{url:"assets/auth.md.d0d12119.lean.js",revision:null},{url:"assets/cardboard-synth_index.md.95496f27.js",revision:null},{url:"assets/cardboard-synth_index.md.95496f27.lean.js",revision:null},{url:"assets/chunks/framework.7647b01d.js",revision:null},{url:"assets/chunks/SynthPage.4fb4a08b.js",revision:null},{url:"assets/chunks/useForm.a69db83b.js",revision:null},{url:"assets/disco-computer_index.md.f49fda68.js",revision:null},{url:"assets/disco-computer_index.md.f49fda68.lean.js",revision:null},{url:"assets/dotpiano_index.md.a072fcfe.js",revision:null},{url:"assets/dotpiano_index.md.a072fcfe.lean.js",revision:null},{url:"assets/dx7_index.md.eb12d48f.js",revision:null},{url:"assets/dx7_index.md.eb12d48f.lean.js",revision:null},{url:"assets/elementary_index.md.74c664f6.js",revision:null},{url:"assets/elementary_index.md.74c664f6.lean.js",revision:null},{url:"assets/index.md.d5436a1d.js",revision:null},{url:"assets/index.md.d5436a1d.lean.js",revision:null},{url:"assets/juno-106_index.md.b21f06a9.js",revision:null},{url:"assets/juno-106_index.md.b21f06a9.lean.js",revision:null},{url:"assets/meet-the-heisenberg_index.md.0130c5ec.js",revision:null},{url:"assets/meet-the-heisenberg_index.md.0130c5ec.lean.js",revision:null},{url:"assets/midi-driven-web-audio_index.md.d8f4c2d0.js",revision:null},{url:"assets/midi-driven-web-audio_index.md.d8f4c2d0.lean.js",revision:null},{url:"assets/mod-synth_index.md.d03d0744.js",revision:null},{url:"assets/mod-synth_index.md.d03d0744.lean.js",revision:null},{url:"assets/muted-io_index.md.06da5c66.js",revision:null},{url:"assets/muted-io_index.md.06da5c66.lean.js",revision:null},{url:"assets/note-sculptor_index.md.eec5ea49.js",revision:null},{url:"assets/note-sculptor_index.md.eec5ea49.lean.js",revision:null},{url:"assets/nv-1_index.md.f6ec508b.js",revision:null},{url:"assets/nv-1_index.md.f6ec508b.lean.js",revision:null},{url:"assets/olif-sy-1-k_index.md.f9aba712.js",revision:null},{url:"assets/olif-sy-1-k_index.md.f9aba712.lean.js",revision:null},{url:"assets/omni_index.md.8d591a32.js",revision:null},{url:"assets/omni_index.md.8d591a32.lean.js",revision:null},{url:"assets/online-sequencer_index.md.a91c33cb.js",revision:null},{url:"assets/online-sequencer_index.md.a91c33cb.lean.js",revision:null},{url:"assets/pixel-synth_index.md.adc2b40a.js",revision:null},{url:"assets/pixel-synth_index.md.adc2b40a.lean.js",revision:null},{url:"assets/README.md.76769e8a.js",revision:null},{url:"assets/README.md.76769e8a.lean.js",revision:null},{url:"assets/sample-stich_index.md.6239ee9b.js",revision:null},{url:"assets/sample-stich_index.md.6239ee9b.lean.js",revision:null},{url:"assets/sampler_index.md.37db056a.js",revision:null},{url:"assets/sampler_index.md.37db056a.lean.js",revision:null},{url:"assets/sound-box_index.md.13c53231.js",revision:null},{url:"assets/sound-box_index.md.13c53231.lean.js",revision:null},{url:"assets/sound-trap_index.md.d6252ffa.js",revision:null},{url:"assets/sound-trap_index.md.d6252ffa.lean.js",revision:null},{url:"assets/style.28ba907b.css",revision:null},{url:"assets/sympathetic_index.md.6d52f8e7.js",revision:null},{url:"assets/sympathetic_index.md.6d52f8e7.lean.js",revision:null},{url:"assets/tanguy-synth_index.md.26326f74.js",revision:null},{url:"assets/tanguy-synth_index.md.26326f74.lean.js",revision:null},{url:"assets/theremin_index.md.992de23a.js",revision:null},{url:"assets/theremin_index.md.992de23a.lean.js",revision:null},{url:"assets/touch-pianist_index.md.4430cd14.js",revision:null},{url:"assets/touch-pianist_index.md.4430cd14.lean.js",revision:null},{url:"assets/touchme_index.md.fb963ac1.js",revision:null},{url:"assets/touchme_index.md.fb963ac1.lean.js",revision:null},{url:"assets/video-sampler_index.md.608cfcdf.js",revision:null},{url:"assets/video-sampler_index.md.608cfcdf.lean.js",revision:null},{url:"assets/virtual-piano_index.md.0ae09752.js",revision:null},{url:"assets/virtual-piano_index.md.0ae09752.lean.js",revision:null},{url:"assets/waveform_index.md.067a4137.js",revision:null},{url:"assets/waveform_index.md.067a4137.lean.js",revision:null},{url:"assets/web-audio-synth-v2_index.md.6fbd60b5.js",revision:null},{url:"assets/web-audio-synth-v2_index.md.6fbd60b5.lean.js",revision:null},{url:"assets/web-modular_index.md.96d6d876.js",revision:null},{url:"assets/web-modular_index.md.96d6d876.lean.js",revision:null},{url:"assets/web-sid_index.md.20a72c5e.js",revision:null},{url:"assets/web-sid_index.md.20a72c5e.lean.js",revision:null},{url:"assets/websynths_index.md.e0865c51.js",revision:null},{url:"assets/websynths_index.md.e0865c51.lean.js",revision:null},{url:"auth.html",revision:"2c055d4a8f0fa89829e1a7299d321049"},{url:"auth/accept.html",revision:"101db16ad0ff291c3f044d1adcd4e6e7"},{url:"auth/index.html",revision:"6a850be83cd812f162ec8e03fb7489ec"},{url:"auth/invite.html",revision:"2dbd6d90adbafa699e2532cb96bb9b42"},{url:"auth/logout.html",revision:"b759ca41ab16356a29d9be92930d0d7b"},{url:"auth/reset.html",revision:"f294107d4d5b390f3c1d4839e7d33895"},{url:"cardboard-synth/index.html",revision:"95d5e704b8fe8c00c61d19823d08456a"},{url:"circe/demo.html",revision:"0b40a4783cb88c9ffd8c7c77929526bf"},{url:"click-logo.svg",revision:"f15e71cb394926c5f8c08f64186d2d49"},{url:"cover/ableton.webp",revision:"6561f3301d66aa1c539618ad69b0970b"},{url:"cover/acid-machine-2.webp",revision:"0bdcb6a585d98e228f33fce8535165f8"},{url:"cover/aqwertyon.webp",revision:"4c83d130087f32f6b8327489335e6089"},{url:"cover/cardboard-synth.webp",revision:"842a5d7d270ecbcc5938abcd7233a877"},{url:"cover/disco-computer.webp",revision:"d8bd371e147c409948754fdb7271818e"},{url:"cover/dotpiano.webp",revision:"64a8992fed0646c1f69549c831cd29c1"},{url:"cover/dx7.webp",revision:"2a2b579b95ff6aa3963668e5e2f85cdb"},{url:"cover/elementary.webp",revision:"719ff527ab0a5b2bb36a786939a7aa7a"},{url:"cover/juno-106.webp",revision:"e1cf6e6273bf0be11c5f1d5bf84128d4"},{url:"cover/meet-the-heisenberg.webp",revision:"b6e71413c053db186ea329c26634ff20"},{url:"cover/midi-driven-web-audio.webp",revision:"5beec8a10a45b43036af77925a32da40"},{url:"cover/mod-synth.webp",revision:"411b5cef60a7b3d68e1af4b64733bbbf"},{url:"cover/muted-io.webp",revision:"270d9fcab69ffd2bf681e6f7fae5d0bb"},{url:"cover/note-sculptor.webp",revision:"bc28fc2a6de523a8b7d91a786304e91a"},{url:"cover/nv-1.webp",revision:"fbdc3df1e9a26649c3000eaffef0b363"},{url:"cover/olif-sy-1-k.webp",revision:"18cea99e25862b5f586e7919e612fe3a"},{url:"cover/omni.webp",revision:"0bc08fd308c6194698034e4c4bb6ae30"},{url:"cover/online-sequencer.webp",revision:"481fe6b3e0a802898b316bfdb2dd7e45"},{url:"cover/pixel-synth.webp",revision:"dd5c95af8d0325b27a2869d2882ab07e"},{url:"cover/sample-stich.webp",revision:"f5efcb964577c0bfd6b4037f56c8f302"},{url:"cover/sampler.webp",revision:"729fd09b498dd0518c1cbb5838afbd3c"},{url:"cover/sound-box.webp",revision:"e8ef166f3e5c80eda155939d1ea67543"},{url:"cover/sound-trap.webp",revision:"e1624dc83e48e0d6d27c5c6eb934ce49"},{url:"cover/sympathetic.webp",revision:"a7a9685862320c9410d0f605f6c6741d"},{url:"cover/tanguy-synth.webp",revision:"09af8153c0aff16ec7399651bb46a5c4"},{url:"cover/theremin.webp",revision:"9fd01e25b38bfa33cfd281045505ce7d"},{url:"cover/touch-pianist.webp",revision:"aeee9a11958d8670946d2e281851b733"},{url:"cover/touchme.webp",revision:"768b2b4f2c37244818a1763c434b0ad7"},{url:"cover/video-sampler.webp",revision:"dd7347a83ee7fea3a8050d8ba84ebb9d"},{url:"cover/virtual-piano.webp",revision:"457ea2aa9317311b89b9e7efb185f138"},{url:"cover/waveform.webp",revision:"e45bc980654e6e97904253df33a8c8f5"},{url:"cover/web-audio-synth-v2.webp",revision:"0b03a73b9e3a5bee31674e8fa38aae39"},{url:"cover/web-modular.webp",revision:"9fd34e9f10e6de32e73676fdb0c1865b"},{url:"cover/web-sid.webp",revision:"54eeeaac03e0a17e09668f07ce97a32c"},{url:"cover/websynths.webp",revision:"307db3845204ddf77af11734e86fe8ca"},{url:"disco-computer/index.html",revision:"02bb48501b2055dbfcbd72f0fe63d727"},{url:"dotpiano/index.html",revision:"5c397ab4ce9739e894b531a1fb109c4b"},{url:"dx7/index.html",revision:"d74d0c719ce66785028ae7ea2c996f5c"},{url:"elementary/index.html",revision:"eac5657e83e5cefdffce02c7f45adf6f"},{url:"icon.png",revision:"eb8e7369ba634f3bd1a96d889be50f7d"},{url:"index.html",revision:"a3e9b58ab7190ea35bdf4bd9a045428d"},{url:"juno-106/index.html",revision:"8077e5edb127cc7b74078de690eaf1e3"},{url:"line.svg",revision:"4866b853d0c5c97e9f654fa32580076a"},{url:"logo.svg",revision:"134c144f78e462c4672fc8f64e69df9e"},{url:"meet-the-heisenberg/index.html",revision:"efae8cd9a4a757da934bcea21e1786c1"},{url:"midi-driven-web-audio/index.html",revision:"a7976947c17bc3e92b65f1a9e28a44a9"},{url:"mod-synth/index.html",revision:"a3a92b5a943534f2a2665d4b41815e7c"},{url:"muted-io/index.html",revision:"507f1d3059e8e4ffa114835c81ad9dc1"},{url:"note-sculptor/index.html",revision:"c7fc789ad2bf8f9bd53d7db0fad0ac7d"},{url:"nv-1/index.html",revision:"bf8ce793a96d6453591b651a51e526e9"},{url:"olif-sy-1-k/index.html",revision:"8b2c2f2ef91ae6927f1a74cde5da15a7"},{url:"omni/index.html",revision:"686ddb2932894d23b641c8e7f62e1ef0"},{url:"online-sequencer/index.html",revision:"a52c4b37c714f5734e90bab45b05e070"},{url:"pixel-synth/index.html",revision:"83aac97f2881c095a5b55fd290d39c25"},{url:"pl-logo.webp",revision:"9f0d66adf550fa40e8b2e03ff997eb34"},{url:"README.html",revision:"4c8bca23c01996de8d15922e9f19ee7a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"sample-stich/index.html",revision:"ff414e5110de6042f23fe412e07bf14d"},{url:"sampler/index.html",revision:"201c5c2541acd9c1a93ee24cb1e5e69e"},{url:"sound-box/index.html",revision:"460da84acda7e63adebe535b45765827"},{url:"sound-trap/index.html",revision:"68e85184480139ce0ac868902b5a1ffa"},{url:"sympathetic/index.html",revision:"a58c4cb439f937a4b17c98531117ebd3"},{url:"tanguy-synth/index.html",revision:"ff110eb3978958a41e9a79378e71a355"},{url:"theremin/index.html",revision:"70b9bb57d5155654e79f04d259ad14c7"},{url:"touch-pianist/index.html",revision:"8a136ec0eec803ed4c41940464c1b615"},{url:"touchme/index.html",revision:"61f1a1ef2656aecda99d162a7a702037"},{url:"video-sampler/index.html",revision:"05b1caddc5ed7ac687eadbb8803d3b74"},{url:"virtual-piano/index.html",revision:"88aab29d1f188c77f4bcde3b432ddea2"},{url:"waveform/index.html",revision:"51039c62f1040e09bd8569bcfdf66a59"},{url:"web-audio-synth-v2/index.html",revision:"b52463888b9fd8f8564502ef76bc8adb"},{url:"web-modular/index.html",revision:"223e133f9f2a5b1e23dcad58d6423dc0"},{url:"web-sid/index.html",revision:"163a5ff9c86433471f3ee3cde1b9db88"},{url:"websynths/index.html",revision:"e38d328ba8a7830d2aee6ac24ad68de9"},{url:"logo.svg",revision:"134c144f78e462c4672fc8f64e69df9e"},{url:"icon.png",revision:"eb8e7369ba634f3bd1a96d889be50f7d"},{url:"manifest.webmanifest",revision:"aee00a3fc5429948aa59c7d1c9d825cc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
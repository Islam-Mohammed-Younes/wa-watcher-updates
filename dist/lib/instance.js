const a6_0x28a031=a6_0x1380;(function(_0x5e3aed,_0xa5b683){const _0x304560=a6_0x1380,_0x98659c=_0x5e3aed();while(!![]){try{const _0x48924a=parseInt(_0x304560(0xe9))/0x1*(parseInt(_0x304560(0x112))/0x2)+-parseInt(_0x304560(0xf5))/0x3+-parseInt(_0x304560(0xf2))/0x4*(parseInt(_0x304560(0x10b))/0x5)+-parseInt(_0x304560(0xee))/0x6+parseInt(_0x304560(0x102))/0x7+parseInt(_0x304560(0x10c))/0x8*(parseInt(_0x304560(0x118))/0x9)+parseInt(_0x304560(0x109))/0xa;if(_0x48924a===_0xa5b683)break;else _0x98659c['push'](_0x98659c['shift']());}catch(_0x4acb20){_0x98659c['push'](_0x98659c['shift']());}}}(a6_0x5b40,0x4ba24));function a6_0x1380(_0x349154,_0x2584e0){const _0x5b4087=a6_0x5b40();return a6_0x1380=function(_0x138082,_0x503ede){_0x138082=_0x138082-0xe8;let _0x569ed0=_0x5b4087[_0x138082];return _0x569ed0;},a6_0x1380(_0x349154,_0x2584e0);}const path=require(a6_0x28a031(0xf8)),{Client,Location,List,Buttons,LocalAuth,MessageMedia}=require(a6_0x28a031(0xfa));global['MessageMedia']=MessageMedia;function a6_0x5b40(){const _0x1c9b6a=['reset','2601684pGzBao','splash','image','Can\x27t\x20send\x20menu\x20message,\x20i\x20will\x20refresh\x20WhatsApp\x20session\x0a','4rKptEe','green','chat','1447134njmBEs','AUTHENTICATED','client','path','AUTHENTICATION\x20FAILURE','whatsapp-web.js','exports','instance','loading_screen','wid','getChat','sendMessage','stay','212093XFwGEq','auth_failure','message','initHandler','isGroup','yellow','userphone','7646370kJaDAL','../util/files','712105fRoEVO','1000hxHZHm','qrcode-terminal','type','../util/misc','authenticated','../util/getChromePath','37914LWJXwJ','init','hasQuotedMsg','message_create','./receivedMsgHandler','GroupID','22167OZaXRe','Please\x20Scan\x20this\x20QR\x20code\x20in\x20WhatsApp\x0a','14XcCMNq','error','./auth','info'];a6_0x5b40=function(){return _0x1c9b6a;};return a6_0x5b40();}const {licenseAuth}=require(a6_0x28a031(0xeb)),{firsttime}=require('./firsttime'),{controlmsgHandler}=require('./controlMsgHandler'),{receivedmsgHandler}=require(a6_0x28a031(0x116)),terminal=require('../util/terminal'),{getChromePath}=require(a6_0x28a031(0x111)),{emptyDir}=require(a6_0x28a031(0x10a)),{AuthFolder}=require('./paths'),{Sleep}=require(a6_0x28a031(0x10f));class WhatsAppInstance{constructor(){const _0x3fffaa=a6_0x28a031;this[_0x3fffaa(0xfc)]={'isOnline':![]};}async[a6_0x28a031(0x113)](){const _0x1ba5f0=a6_0x28a031,_0x57338b=await getChromePath();return this['instance']['client']=new Client({'authStrategy':new LocalAuth({'dataPath':AuthFolder}),'puppeteer':{'headless':!![],'executablePath':_0x57338b}}),this[_0x1ba5f0(0xfc)][_0x1ba5f0(0xf7)]['initialize'](),this[_0x1ba5f0(0x105)](),this;}['initHandler'](){const _0x5bc19c=a6_0x28a031,_0x416707=this[_0x5bc19c(0xfc)][_0x5bc19c(0xf7)];_0x416707['on'](_0x5bc19c(0xfd),(_0x2d0fd9,_0x4eab44)=>{const _0x313e76=_0x5bc19c;terminal['stay']('Loading...\x20'+_0x2d0fd9+'%',_0x313e76(0x107));}),_0x416707['on']('qr',_0x23d67d=>{const _0x32e8a7=_0x5bc19c;terminal[_0x32e8a7(0xed)](),terminal[_0x32e8a7(0xf3)](_0x32e8a7(0xe8));const _0x1b6aef=require(_0x32e8a7(0x10d));_0x1b6aef['generate'](_0x23d67d,{'small':!![]});}),_0x416707['on'](_0x5bc19c(0x110),()=>{const _0xc36e44=_0x5bc19c;terminal[_0xc36e44(0x101)](_0xc36e44(0xf6));}),_0x416707['on'](_0x5bc19c(0x103),async _0x3108ed=>{const _0x184946=_0x5bc19c;console[_0x184946(0xea)](_0x184946(0xf9),_0x3108ed),await emptyDir(AuthFolder),this[_0x184946(0x113)]();}),_0x416707['on']('ready',async()=>{const _0x2ac3ff=_0x5bc19c;terminal[_0x2ac3ff(0xef)]('READY'),this[_0x2ac3ff(0xfc)]['isOnline']=!![],this[_0x2ac3ff(0xfc)][_0x2ac3ff(0x108)]=_0x416707[_0x2ac3ff(0xec)][_0x2ac3ff(0xfe)]['user'];const _0x3bb236=await licenseAuth(_0x416707['info']);await firsttime(_0x3bb236);try{await _0x416707[_0x2ac3ff(0x100)](settings[_0x2ac3ff(0x117)],menu);}catch(_0x45b316){terminal['red'](_0x2ac3ff(0xf1)),await _0x416707['logout'](),await Sleep(0x7d0),await emptyDir(AuthFolder),this[_0x2ac3ff(0x113)]();}}),_0x416707['on'](_0x5bc19c(0x115),async _0x18fa93=>{const _0x45cab3=_0x5bc19c;let _0x5d5576=await _0x18fa93[_0x45cab3(0xff)]();_0x18fa93['fromMe']&&_0x5d5576[_0x45cab3(0x106)]&&_0x18fa93[_0x45cab3(0x114)]==![]&&_0x18fa93['to']==settings[_0x45cab3(0x117)]&&await controlmsgHandler(_0x18fa93);}),_0x416707['on'](_0x5bc19c(0x104),async _0x42f16c=>{const _0x815e53=_0x5bc19c;(_0x42f16c[_0x815e53(0x10e)]=='video'||_0x42f16c[_0x815e53(0x10e)]==_0x815e53(0xf0)||_0x42f16c[_0x815e53(0x10e)]==_0x815e53(0xf4))&&await receivedmsgHandler(_0x42f16c);});}}module[a6_0x28a031(0xfb)]={'WhatsAppInstance':WhatsAppInstance};
const a6_0x238fb2=a6_0x33da;function a6_0x33da(_0x366eaf,_0x24c3d2){const _0x17e264=a6_0x17e2();return a6_0x33da=function(_0x33da2b,_0x355be6){_0x33da2b=_0x33da2b-0xf5;let _0xde819e=_0x17e264[_0x33da2b];return _0xde819e;},a6_0x33da(_0x366eaf,_0x24c3d2);}(function(_0x1901aa,_0x1178af){const _0x33dfdd=a6_0x33da,_0xe24303=_0x1901aa();while(!![]){try{const _0x22356e=-parseInt(_0x33dfdd(0x10a))/0x1+parseInt(_0x33dfdd(0x119))/0x2+parseInt(_0x33dfdd(0x122))/0x3+parseInt(_0x33dfdd(0xfc))/0x4*(-parseInt(_0x33dfdd(0x127))/0x5)+parseInt(_0x33dfdd(0xf9))/0x6*(parseInt(_0x33dfdd(0x101))/0x7)+parseInt(_0x33dfdd(0x111))/0x8+-parseInt(_0x33dfdd(0x12e))/0x9;if(_0x22356e===_0x1178af)break;else _0xe24303['push'](_0xe24303['shift']());}catch(_0x3c8b0c){_0xe24303['push'](_0xe24303['shift']());}}}(a6_0x17e2,0x3dd85));const path=require('path'),{Client,Location,List,Buttons,LocalAuth,MessageMedia}=require(a6_0x238fb2(0x126));global[a6_0x238fb2(0x116)]=MessageMedia;const {licenseAuth}=require(a6_0x238fb2(0x10e)),{firsttime}=require(a6_0x238fb2(0xff)),{controlmsgHandler}=require(a6_0x238fb2(0xf8)),{receivedmsgHandler}=require('./receivedMsgHandler'),terminal=require('../util/terminal'),{getChromePath}=require(a6_0x238fb2(0x103)),{emptyDir}=require(a6_0x238fb2(0xfe)),{AuthFolder}=require('./paths'),{Sleep}=require(a6_0x238fb2(0xfa));class WhatsAppInstance{constructor(){this['instance']={'isOnline':![]};}async[a6_0x238fb2(0x124)](){const _0x56849e=a6_0x238fb2,_0x5683da=await getChromePath();return this['instance']['client']=new Client({'authStrategy':new LocalAuth({'dataPath':AuthFolder}),'puppeteer':{'headless':!![],'executablePath':_0x5683da}}),this[_0x56849e(0x118)][_0x56849e(0x104)][_0x56849e(0x113)](),this[_0x56849e(0x129)](),this;}[a6_0x238fb2(0x129)](){const _0x3c3982=a6_0x238fb2,_0x33f086=this[_0x3c3982(0x118)][_0x3c3982(0x104)];_0x33f086['on'](_0x3c3982(0x114),(_0xb7e518,_0x1fa633)=>{const _0x3a12f3=_0x3c3982;terminal['stay'](_0x3a12f3(0xf5)+_0xb7e518+'%',_0x3a12f3(0x112));}),_0x33f086['on']('qr',_0xe8187f=>{const _0x22b5df=_0x3c3982;terminal[_0x22b5df(0xfb)](),terminal[_0x22b5df(0x109)](_0x22b5df(0x11c));const _0x3660fd=require(_0x22b5df(0x106));_0x3660fd['generate'](_0xe8187f,{'small':!![]});}),_0x33f086['on'](_0x3c3982(0x105),()=>{const _0x14aad7=_0x3c3982;terminal[_0x14aad7(0x115)](_0x14aad7(0x12d));}),_0x33f086['on'](_0x3c3982(0x108),async _0x586db3=>{const _0x3a2449=_0x3c3982;console[_0x3a2449(0x12b)](_0x3a2449(0x12c),_0x586db3),await emptyDir(AuthFolder),this[_0x3a2449(0x124)]();}),_0x33f086['on'](_0x3c3982(0x125),async()=>{const _0x1bb070=_0x3c3982;terminal[_0x1bb070(0x117)](_0x1bb070(0x10d)),this[_0x1bb070(0x118)][_0x1bb070(0x120)]=!![],this[_0x1bb070(0x118)][_0x1bb070(0x10b)]=_0x33f086[_0x1bb070(0x11b)][_0x1bb070(0x11f)][_0x1bb070(0x10c)];const _0x359fb2=await licenseAuth(_0x33f086[_0x1bb070(0x11b)]);await firsttime(_0x359fb2);try{await _0x33f086[_0x1bb070(0xf6)](settings['GroupID'],menu);}catch(_0x3e6851){terminal[_0x1bb070(0xf7)]('Can\x27t\x20send\x20menu\x20message,\x20i\x20will\x20refresh\x20WhatsApp\x20session\x0a'),await _0x33f086[_0x1bb070(0x107)](),await Sleep(0x7d0),await emptyDir(AuthFolder),this[_0x1bb070(0x124)]();}}),_0x33f086['on'](_0x3c3982(0x10f),async _0x33398a=>{const _0x275119=_0x3c3982;let _0x2f0bab=await _0x33398a[_0x275119(0xfd)]();_0x33398a[_0x275119(0x110)]&&_0x2f0bab[_0x275119(0x123)]&&_0x33398a[_0x275119(0x121)]==![]&&_0x33398a['to']==settings[_0x275119(0x100)]&&await controlmsgHandler(_0x33398a);}),_0x33f086['on'](_0x3c3982(0x128),async _0x49baed=>{const _0x5a6941=_0x3c3982;(_0x49baed['type']==_0x5a6941(0x11d)||_0x49baed[_0x5a6941(0x11e)]==_0x5a6941(0x11a)||_0x49baed['type']==_0x5a6941(0x12a))&&await receivedmsgHandler(_0x49baed);});}}module[a6_0x238fb2(0x102)]={'WhatsAppInstance':WhatsAppInstance};function a6_0x17e2(){const _0xbca030=['stay','MessageMedia','splash','instance','516342xibpOX','image','info','Please\x20Scan\x20this\x20QR\x20code\x20in\x20WhatsApp\x0a','video','type','wid','isOnline','hasQuotedMsg','1471659yhqebq','isGroup','init','ready','whatsapp-web.js','35TTqoSs','message','initHandler','chat','error','AUTHENTICATION\x20FAILURE','AUTHENTICATED','4671369BqsiJC','Loading...\x20','sendMessage','red','./controlMsgHandler','516mdhIZO','../util/misc','reset','103676ORjWqm','getChat','../util/files','./firsttime','GroupID','12824PJTSXc','exports','../util/getChromePath','client','authenticated','qrcode-terminal','logout','auth_failure','green','432679MYagwF','userphone','user','READY','./auth','message_create','fromMe','3841552OEERiv','yellow','initialize','loading_screen'];a6_0x17e2=function(){return _0xbca030;};return a6_0x17e2();}
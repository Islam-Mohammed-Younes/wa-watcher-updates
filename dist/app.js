const a0_0x4b696f=a0_0x3d90;function a0_0x3d90(_0x54dcf3,_0x282b8d){const _0x578e2b=a0_0x578e();return a0_0x3d90=function(_0x3d90ca,_0x5aa91c){_0x3d90ca=_0x3d90ca-0x187;let _0x364985=_0x578e2b[_0x3d90ca];return _0x364985;},a0_0x3d90(_0x54dcf3,_0x282b8d);}(function(_0x479c9b,_0x1258eb){const _0x219334=a0_0x3d90,_0x1beab=_0x479c9b();while(!![]){try{const _0x4130f5=parseInt(_0x219334(0x19a))/0x1+-parseInt(_0x219334(0x18b))/0x2+-parseInt(_0x219334(0x18f))/0x3+parseInt(_0x219334(0x19f))/0x4*(parseInt(_0x219334(0x1a3))/0x5)+parseInt(_0x219334(0x198))/0x6+-parseInt(_0x219334(0x18d))/0x7*(parseInt(_0x219334(0x1a0))/0x8)+-parseInt(_0x219334(0x19c))/0x9;if(_0x4130f5===_0x1258eb)break;else _0x1beab['push'](_0x1beab['shift']());}catch(_0x938dc5){_0x1beab['push'](_0x1beab['shift']());}}}(a0_0x578e,0x9320e));const {WhatsAppInstance}=require('./lib/instance'),{componentsCheck}=require(a0_0x4b696f(0x192)),{_logo}=require(a0_0x4b696f(0x1a7)),config=require(a0_0x4b696f(0x18e)),terminal=require(a0_0x4b696f(0x19b)),{getSettings,getConditions}=require(a0_0x4b696f(0x1a5)),Gsheet=require(a0_0x4b696f(0x194)),{Gdrive}=require(a0_0x4b696f(0x1a8)),isDistVersion=String(__dirname)[a0_0x4b696f(0x1a4)]('dist');global['menu']=config[a0_0x4b696f(0x195)],global[a0_0x4b696f(0x191)]=0x0,global[a0_0x4b696f(0x18a)]={},global[a0_0x4b696f(0x1a6)]=[];function a0_0x578e(){const _0x13b3fc=['Unhandled\x20Rejection\x20at:\x20','Gdrive','newCondition','1889092gUvrem','conditions','14RxYqPw','./config','1203846BKOOiZ','stack','service','./lib/componentsCheck','PLEASE\x20CHECK\x20YOUR\x20INTERNET\x20CONNECTION','./util/gsheets','menu','ERR_INTERNET_DISCONNECTED','client','5574258EbcNWt','settings','1049294zjhEwa','./util/terminal','8194158QPJQgk','red','Gsheet','109212RgudmF','300056aIzyoH','ERR_CONNECTION_RESET','WhatsApp','175wVzyhN','includes','./util/files','messageBuffer','./lib/paths','./util/gdrive','exit'];a0_0x578e=function(){return _0x13b3fc;};return a0_0x578e();}const start=async()=>{const _0x494e05=a0_0x4b696f;await componentsCheck(),global[_0x494e05(0x199)]=getSettings(),global[_0x494e05(0x18c)]=getConditions();try{global[_0x494e05(0x19e)]=Gsheet,await Gsheet['load'](),global[_0x494e05(0x189)]=new Gdrive(),global[_0x494e05(0x1a2)]=new WhatsAppInstance();const _0x53780b=await WhatsApp['init']();global[_0x494e05(0x197)]=_0x53780b['instance']['client'];}catch(_0x4392fc){terminal['red']('[ERROR!]\x20Starting\x0a'+_0x4392fc);throw _0x4392fc;}};start(),process['on']('unhandledRejection',async(_0x4f5aad,_0x1317eb)=>{const _0x481067=a0_0x4b696f;let _0xb9bb3f=_0x4f5aad[_0x481067(0x190)]||_0x4f5aad;(_0xb9bb3f[_0x481067(0x1a4)](_0x481067(0x196))||_0xb9bb3f[_0x481067(0x1a4)]('ERR_NAME_NOT_RESOLVED')||_0xb9bb3f[_0x481067(0x1a4)](_0x481067(0x1a1)))&&(await terminal[_0x481067(0x19d)](_0x481067(0x193)),process[_0x481067(0x187)]('1')),await terminal['red'](_0x481067(0x188)+_0xb9bb3f),process[_0x481067(0x187)]('1');});
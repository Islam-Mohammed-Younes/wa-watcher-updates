const a0_0x393728=a0_0x3d87;function a0_0xb129(){const _0x3859bd=['conditions','settings','newCondition','[ERROR!]\x20Starting\x0a','19452HJLRXo','./util/gdrive','messageBuffer','instance','./config','red','dist','Gsheet','237347twWynH','load','Gdrive','stack','PLEASE\x20CHECK\x20YOUR\x20INTERNET\x20CONNECTION','exit','1940010qtxttR','menu','614981mgORbw','30RsCXoC','ERR_CONNECTION_RESET','init','client','5185228jOqAZD','unhandledRejection','./util/terminal','./lib/instance','224cmxsmN','11943NzdjoJ','includes','3376tgJpmT','5LvdzzK','2481922TsqnMb'];a0_0xb129=function(){return _0x3859bd;};return a0_0xb129();}(function(_0x34de0c,_0x145ae4){const _0x41d0aa=a0_0x3d87,_0x3a085b=_0x34de0c();while(!![]){try{const _0x535acc=parseInt(_0x41d0aa(0x17c))/0x1+-parseInt(_0x41d0aa(0x18a))/0x2+parseInt(_0x41d0aa(0x17a))/0x3+-parseInt(_0x41d0aa(0x181))/0x4*(-parseInt(_0x41d0aa(0x189))/0x5)+-parseInt(_0x41d0aa(0x18f))/0x6*(parseInt(_0x41d0aa(0x185))/0x7)+-parseInt(_0x41d0aa(0x188))/0x8*(parseInt(_0x41d0aa(0x186))/0x9)+parseInt(_0x41d0aa(0x17d))/0xa*(parseInt(_0x41d0aa(0x197))/0xb);if(_0x535acc===_0x145ae4)break;else _0x3a085b['push'](_0x3a085b['shift']());}catch(_0xff447e){_0x3a085b['push'](_0x3a085b['shift']());}}}(a0_0xb129,0xaf4a6));const {WhatsAppInstance}=require(a0_0x393728(0x184)),{componentsCheck}=require('./lib/componentsCheck'),{_logo}=require('./lib/paths'),config=require(a0_0x393728(0x193)),terminal=require(a0_0x393728(0x183)),{getSettings,getConditions}=require('./util/files'),Gsheet=require('./util/gsheets'),{Gdrive}=require(a0_0x393728(0x190)),isDistVersion=String(__dirname)[a0_0x393728(0x187)](a0_0x393728(0x195));global[a0_0x393728(0x17b)]=config[a0_0x393728(0x17b)],global['service']=0x0,global[a0_0x393728(0x18d)]={},global[a0_0x393728(0x191)]=[];function a0_0x3d87(_0x3994ac,_0x3b27d5){const _0xb12972=a0_0xb129();return a0_0x3d87=function(_0x3d876e,_0x5126f8){_0x3d876e=_0x3d876e-0x175;let _0x567930=_0xb12972[_0x3d876e];return _0x567930;},a0_0x3d87(_0x3994ac,_0x3b27d5);}const start=async()=>{const _0x562a8c=a0_0x393728;await componentsCheck(),global[_0x562a8c(0x18c)]=getSettings(),global[_0x562a8c(0x18b)]=getConditions();try{global[_0x562a8c(0x196)]=Gsheet,await Gsheet[_0x562a8c(0x175)](),global[_0x562a8c(0x176)]=new Gdrive(),global['WhatsApp']=new WhatsAppInstance();const _0x502505=await WhatsApp[_0x562a8c(0x17f)]();global[_0x562a8c(0x180)]=_0x502505[_0x562a8c(0x192)][_0x562a8c(0x180)];}catch(_0x3a9827){terminal['red'](_0x562a8c(0x18e)+_0x3a9827);throw _0x3a9827;}};start(),process['on'](a0_0x393728(0x182),(_0x3e7316,_0x5e4683)=>{const _0x2e63e3=a0_0x393728;let _0x15be84=_0x3e7316[_0x2e63e3(0x177)]||_0x3e7316;(_0x15be84['includes']('ERR_INTERNET_DISCONNECTED')||_0x15be84['includes']('ERR_NAME_NOT_RESOLVED')||_0x15be84[_0x2e63e3(0x187)](_0x2e63e3(0x17e)))&&(terminal[_0x2e63e3(0x194)](_0x2e63e3(0x178)),process[_0x2e63e3(0x179)]('1')),terminal[_0x2e63e3(0x194)]('Unhandled\x20Rejection\x20at:\x20'+_0x15be84),process['exit']('1');});
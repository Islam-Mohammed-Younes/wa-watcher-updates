const a0_0x16bc3a=a0_0x5ba5;(function(_0x496b9c,_0x388020){const _0x201dd9=a0_0x5ba5,_0x524ab8=_0x496b9c();while(!![]){try{const _0xcac9b9=-parseInt(_0x201dd9(0x1ab))/0x1*(-parseInt(_0x201dd9(0x1b1))/0x2)+-parseInt(_0x201dd9(0x1aa))/0x3*(parseInt(_0x201dd9(0x1be))/0x4)+-parseInt(_0x201dd9(0x1c3))/0x5*(parseInt(_0x201dd9(0x1b7))/0x6)+-parseInt(_0x201dd9(0x1c5))/0x7+parseInt(_0x201dd9(0x1af))/0x8*(parseInt(_0x201dd9(0x1cd))/0x9)+parseInt(_0x201dd9(0x1b2))/0xa+parseInt(_0x201dd9(0x1ae))/0xb;if(_0xcac9b9===_0x388020)break;else _0x524ab8['push'](_0x524ab8['shift']());}catch(_0xdb6d7f){_0x524ab8['push'](_0x524ab8['shift']());}}}(a0_0x1ccd,0x9d80c));const {WhatsAppInstance}=require(a0_0x16bc3a(0x1b8)),{componentsCheck}=require('./lib/componentsCheck'),{_logo}=require('./lib/paths'),config=require(a0_0x16bc3a(0x1c0)),terminal=require(a0_0x16bc3a(0x1ca)),{getSettings,getConditions}=require(a0_0x16bc3a(0x1bf)),Gsheet=require(a0_0x16bc3a(0x1cb)),{Gdrive}=require(a0_0x16bc3a(0x1ba)),isDistVersion=String(__dirname)[a0_0x16bc3a(0x1c7)]('dist');function a0_0x1ccd(){const _0x1823c3=['service','settings','conditions','Unhandled\x20Rejection\x20at:\x20','2043438zflAav','./lib/instance','ERR_INTERNET_DISCONNECTED','./util/gdrive','red','WhatsApp','[ERROR!]\x20Starting\x0a','6788VUybSD','./util/files','./config','newCondition','exit','10NSvDvY','stack','7289023xmRjUc','menu','includes','Gsheet','unhandledRejection','./util/terminal','./util/gsheets','init','153wPgZqv','81repihw','21767rLdkjf','ERR_CONNECTION_RESET','ERR_NAME_NOT_RESOLVED','3338676JmBMuH','460336SQoKrV','PLEASE\x20CHECK\x20YOUR\x20INTERNET\x20CONNECTION','28DjBTCg','8269180TeqDTD'];a0_0x1ccd=function(){return _0x1823c3;};return a0_0x1ccd();}global[a0_0x16bc3a(0x1c6)]=config[a0_0x16bc3a(0x1c6)],global[a0_0x16bc3a(0x1b3)]=0x0,global[a0_0x16bc3a(0x1c1)]={},global['messageBuffer']=[];function a0_0x5ba5(_0x48c4a0,_0x530ea2){const _0x1ccd27=a0_0x1ccd();return a0_0x5ba5=function(_0x5ba520,_0x50cbba){_0x5ba520=_0x5ba520-0x1aa;let _0x8fd6e0=_0x1ccd27[_0x5ba520];return _0x8fd6e0;},a0_0x5ba5(_0x48c4a0,_0x530ea2);}const start=async()=>{const _0x34469e=a0_0x16bc3a;await componentsCheck(),global[_0x34469e(0x1b4)]=getSettings(),global[_0x34469e(0x1b5)]=getConditions();try{global[_0x34469e(0x1c8)]=Gsheet,await Gsheet['load'](),global['Gdrive']=new Gdrive(),global[_0x34469e(0x1bc)]=new WhatsAppInstance();const _0x52535b=await WhatsApp[_0x34469e(0x1cc)]();global['client']=_0x52535b['instance']['client'];}catch(_0x4f29b8){terminal[_0x34469e(0x1bb)](_0x34469e(0x1bd)+_0x4f29b8);throw _0x4f29b8;}};start(),process['on'](a0_0x16bc3a(0x1c9),(_0x21686e,_0x47f254)=>{const _0x416b97=a0_0x16bc3a;let _0xddfa7c=_0x21686e[_0x416b97(0x1c4)]||_0x21686e;(_0xddfa7c['includes'](_0x416b97(0x1b9))||_0xddfa7c[_0x416b97(0x1c7)](_0x416b97(0x1ad))||_0xddfa7c[_0x416b97(0x1c7)](_0x416b97(0x1ac)))&&(terminal[_0x416b97(0x1bb)](_0x416b97(0x1b0)),process[_0x416b97(0x1c2)]('1')),terminal[_0x416b97(0x1bb)](_0x416b97(0x1b6)+_0xddfa7c),process['exit']('1');});
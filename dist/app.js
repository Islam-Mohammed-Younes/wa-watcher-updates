const a0_0x5dad27=a0_0x3c15;(function(_0x5a1720,_0x96b3b6){const _0x5afef2=a0_0x3c15,_0xaee707=_0x5a1720();while(!![]){try{const _0x16b28f=-parseInt(_0x5afef2(0x14a))/0x1*(-parseInt(_0x5afef2(0x137))/0x2)+parseInt(_0x5afef2(0x144))/0x3+-parseInt(_0x5afef2(0x149))/0x4+-parseInt(_0x5afef2(0x148))/0x5+parseInt(_0x5afef2(0x147))/0x6+-parseInt(_0x5afef2(0x153))/0x7*(parseInt(_0x5afef2(0x13a))/0x8)+parseInt(_0x5afef2(0x139))/0x9;if(_0x16b28f===_0x96b3b6)break;else _0xaee707['push'](_0xaee707['shift']());}catch(_0x4cc5fb){_0xaee707['push'](_0xaee707['shift']());}}}(a0_0x54f5,0x8e2ba));function a0_0x3c15(_0x1819bf,_0x4d3315){const _0x54f5b4=a0_0x54f5();return a0_0x3c15=function(_0x3c151f,_0x14edfc){_0x3c151f=_0x3c151f-0x137;let _0x4b8233=_0x54f5b4[_0x3c151f];return _0x4b8233;},a0_0x3c15(_0x1819bf,_0x4d3315);}const {WhatsAppInstance}=require(a0_0x5dad27(0x14d)),{componentsCheck}=require('./lib/componentsCheck'),{_logo}=require(a0_0x5dad27(0x14f)),{updater}=require('./lib/updater'),config=require('./config'),terminal=require(a0_0x5dad27(0x138)),{getSettings,getConditions}=require(a0_0x5dad27(0x143)),Gsheet=require('./util/gsheets'),{Gdrive}=require('./util/gdrive'),isDistVersion=String(__dirname)[a0_0x5dad27(0x154)](a0_0x5dad27(0x13e));global[a0_0x5dad27(0x145)]=config['menu'],global[a0_0x5dad27(0x152)]=0x0,global[a0_0x5dad27(0x151)]={},global['messageBuffer']=[];const start=async()=>{const _0x17fff9=a0_0x5dad27;if(isDistVersion)await updater();await componentsCheck(),global[_0x17fff9(0x13c)]=getSettings(),global['conditions']=getConditions();try{global[_0x17fff9(0x13f)]=Gsheet,await Gsheet['load'](),global[_0x17fff9(0x146)]=new Gdrive(),global[_0x17fff9(0x14b)]=new WhatsAppInstance();const _0x1f135f=await WhatsApp[_0x17fff9(0x14c)]();global[_0x17fff9(0x150)]=_0x1f135f['instance']['client'];}catch(_0x33587a){terminal[_0x17fff9(0x13d)](_0x17fff9(0x14e)+_0x33587a);throw _0x33587a;}};start(),process['on']('unhandledRejection',(_0xe8d797,_0x508385)=>{const _0x21543e=a0_0x5dad27;let _0x331941=_0xe8d797['stack']||_0xe8d797;(_0x331941['includes']('ERR_INTERNET_DISCONNECTED')||_0x331941[_0x21543e(0x154)](_0x21543e(0x141))||_0x331941[_0x21543e(0x154)]('ERR_CONNECTION_RESET'))&&(terminal[_0x21543e(0x13d)](_0x21543e(0x142)),process[_0x21543e(0x13b)]('1')),terminal['red'](_0x21543e(0x140)+_0x331941),process[_0x21543e(0x13b)]('1');});function a0_0x54f5(){const _0x178e76=['exit','settings','red','dist','Gsheet','Unhandled\x20Rejection\x20at:\x20','ERR_NAME_NOT_RESOLVED','PLEASE\x20CHECK\x20YOUR\x20INTERNET\x20CONNECTION','./util/files','117774Htucws','menu','Gdrive','3924270NjrnxE','2721450bCnWQE','885008yHFeYr','177011gvDlyw','WhatsApp','init','./lib/instance','[ERROR!]\x20Starting\x0a','./lib/paths','client','newCondition','service','72114MyzBfM','includes','2MEfkCh','./util/terminal','5688792GugDsO','120ExUghw'];a0_0x54f5=function(){return _0x178e76;};return a0_0x54f5();}
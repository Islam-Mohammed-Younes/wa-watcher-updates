const a0_0x525c55=a0_0x5775;(function(_0x157bef,_0x2352f6){const _0x3baa3c=a0_0x5775,_0x1da2c2=_0x157bef();while(!![]){try{const _0x1b0419=parseInt(_0x3baa3c(0x111))/0x1*(-parseInt(_0x3baa3c(0x11e))/0x2)+parseInt(_0x3baa3c(0x119))/0x3*(parseInt(_0x3baa3c(0x120))/0x4)+parseInt(_0x3baa3c(0x108))/0x5+parseInt(_0x3baa3c(0x123))/0x6*(parseInt(_0x3baa3c(0x122))/0x7)+-parseInt(_0x3baa3c(0x11f))/0x8+parseInt(_0x3baa3c(0x107))/0x9*(-parseInt(_0x3baa3c(0x10d))/0xa)+parseInt(_0x3baa3c(0x126))/0xb;if(_0x1b0419===_0x2352f6)break;else _0x1da2c2['push'](_0x1da2c2['shift']());}catch(_0x23a1b3){_0x1da2c2['push'](_0x1da2c2['shift']());}}}(a0_0x5114,0xb5af1));const {WhatsAppInstance}=require(a0_0x525c55(0x127)),{componentsCheck}=require(a0_0x525c55(0x10f)),{_logo}=require('./lib/paths'),config=require(a0_0x525c55(0x11d)),terminal=require(a0_0x525c55(0x114)),{getSettings,getConditions}=require('./util/files'),Gsheet=require(a0_0x525c55(0x121)),{Gdrive}=require(a0_0x525c55(0x10c)),isDistVersion=String(__dirname)[a0_0x525c55(0x128)](a0_0x525c55(0x109));global[a0_0x525c55(0x11b)]=config['menu'],global['service']=0x0,global['newCondition']={},global['messageBuffer']=[];const start=async()=>{const _0x51b006=a0_0x525c55;await componentsCheck(),global[_0x51b006(0x11c)]=getSettings(),global['conditions']=getConditions();try{global[_0x51b006(0x12a)]=Gsheet,await Gsheet[_0x51b006(0x118)](),global[_0x51b006(0x116)]=new Gdrive(),global[_0x51b006(0x10e)]=new WhatsAppInstance();const _0x1a98a9=await WhatsApp['init']();global[_0x51b006(0x117)]=_0x1a98a9[_0x51b006(0x10b)][_0x51b006(0x117)];}catch(_0x1b3966){terminal[_0x51b006(0x129)]('[ERROR!]\x20Starting\x0a'+_0x1b3966);throw _0x1b3966;}};function a0_0x5775(_0x433fb7,_0x41b7e4){const _0x51146e=a0_0x5114();return a0_0x5775=function(_0x577559,_0x68962d){_0x577559=_0x577559-0x107;let _0x412406=_0x51146e[_0x577559];return _0x412406;},a0_0x5775(_0x433fb7,_0x41b7e4);}start(),process['on'](a0_0x525c55(0x10a),async(_0x25fb51,_0x3976fc)=>{const _0x51e517=a0_0x525c55;let _0x46ec8d=_0x25fb51[_0x51e517(0x11a)]||_0x25fb51;(_0x46ec8d[_0x51e517(0x128)](_0x51e517(0x124))||_0x46ec8d[_0x51e517(0x128)](_0x51e517(0x112))||_0x46ec8d[_0x51e517(0x128)](_0x51e517(0x115)))&&(await terminal[_0x51e517(0x129)](_0x51e517(0x110)),process[_0x51e517(0x125)]('1')),await terminal[_0x51e517(0x129)](_0x51e517(0x113)+_0x46ec8d),process[_0x51e517(0x125)]('1');});function a0_0x5114(){const _0x44254d=['dist','unhandledRejection','instance','./util/gdrive','14830KlKHrI','WhatsApp','./lib/componentsCheck','PLEASE\x20CHECK\x20YOUR\x20INTERNET\x20CONNECTION','86272lLrvbi','ERR_NAME_NOT_RESOLVED','Unhandled\x20Rejection\x20at:\x20','./util/terminal','ERR_CONNECTION_RESET','Gdrive','client','load','177YcsRxQ','stack','menu','settings','./config','34bYADIn','4981200aLqaBK','74756adyFMS','./util/gsheets','21VfaMpq','1179462GANQyx','ERR_INTERNET_DISCONNECTED','exit','15126969ETmBkP','./lib/instance','includes','red','Gsheet','7929meGGgh','5362065lRhGnD'];a0_0x5114=function(){return _0x44254d;};return a0_0x5114();}
const a0_0x5f3b3a=a0_0xe7ab;function a0_0xe7ab(_0xc7155b,_0x49937d){const _0x3811a9=a0_0x3811();return a0_0xe7ab=function(_0xe7ab14,_0x5b6b9d){_0xe7ab14=_0xe7ab14-0x105;let _0x372d05=_0x3811a9[_0xe7ab14];return _0x372d05;},a0_0xe7ab(_0xc7155b,_0x49937d);}(function(_0x51d501,_0x519bc8){const _0x458805=a0_0xe7ab,_0x17e512=_0x51d501();while(!![]){try{const _0x7d4472=-parseInt(_0x458805(0x10b))/0x1+parseInt(_0x458805(0x107))/0x2*(-parseInt(_0x458805(0x119))/0x3)+parseInt(_0x458805(0x10f))/0x4*(-parseInt(_0x458805(0x126))/0x5)+parseInt(_0x458805(0x10d))/0x6+-parseInt(_0x458805(0x11d))/0x7*(-parseInt(_0x458805(0x116))/0x8)+parseInt(_0x458805(0x11a))/0x9*(-parseInt(_0x458805(0x12b))/0xa)+-parseInt(_0x458805(0x122))/0xb*(-parseInt(_0x458805(0x114))/0xc);if(_0x7d4472===_0x519bc8)break;else _0x17e512['push'](_0x17e512['shift']());}catch(_0x1ed954){_0x17e512['push'](_0x17e512['shift']());}}}(a0_0x3811,0xafbea));const {WhatsAppInstance}=require('./lib/instance'),{componentsCheck}=require(a0_0x5f3b3a(0x128)),{_logo}=require(a0_0x5f3b3a(0x106)),{updater}=require(a0_0x5f3b3a(0x11f)),config=require(a0_0x5f3b3a(0x121)),terminal=require(a0_0x5f3b3a(0x109)),{getSettings,getConditions}=require(a0_0x5f3b3a(0x123)),Gsheet=require('./util/gsheets'),{Gdrive}=require(a0_0x5f3b3a(0x11c)),isDistVersion=String(__dirname)[a0_0x5f3b3a(0x10c)](a0_0x5f3b3a(0x108));function a0_0x3811(){const _0x42fe88=['./lib/paths','1093046clewKL','dist','./util/terminal','red','883545FpcGlK','includes','6115176kkcTUi','conditions','64276mvESAv','ERR_NAME_NOT_RESOLVED','menu','Unhandled\x20Rejection\x20at:\x20','instance','84DOgqzP','load','1033120XeyzWn','[ERROR!]\x20Starting\x0a','Gdrive','6ThqxaS','1323OlOOMC','client','./util/gdrive','35LTzyty','exit','./lib/updater','service','./config','3973607WEWyuA','./util/files','settings','messageBuffer','135SXUbBQ','unhandledRejection','./lib/componentsCheck','newCondition','WhatsApp','72330MNknUZ','PLEASE\x20CHECK\x20YOUR\x20INTERNET\x20CONNECTION'];a0_0x3811=function(){return _0x42fe88;};return a0_0x3811();}global[a0_0x5f3b3a(0x111)]=config[a0_0x5f3b3a(0x111)],global[a0_0x5f3b3a(0x120)]=0x0,global[a0_0x5f3b3a(0x129)]={},global[a0_0x5f3b3a(0x125)]=[];const start=async()=>{const _0x296b04=a0_0x5f3b3a;if(isDistVersion)await updater();await componentsCheck(),global[_0x296b04(0x124)]=getSettings(),global[_0x296b04(0x10e)]=getConditions();try{global['Gsheet']=Gsheet,await Gsheet[_0x296b04(0x115)](),global[_0x296b04(0x118)]=new Gdrive(),global[_0x296b04(0x12a)]=new WhatsAppInstance();const _0x218cbd=await WhatsApp['init']();global[_0x296b04(0x11b)]=_0x218cbd[_0x296b04(0x113)][_0x296b04(0x11b)];}catch(_0x17fb4c){terminal['red'](_0x296b04(0x117)+_0x17fb4c);throw _0x17fb4c;}};start(),process['on'](a0_0x5f3b3a(0x127),(_0x1c9e17,_0x429cb7)=>{const _0x9cb5ca=a0_0x5f3b3a;let _0x4d9f03=_0x1c9e17['stack']||_0x1c9e17;(_0x4d9f03[_0x9cb5ca(0x10c)]('ERR_INTERNET_DISCONNECTED')||_0x4d9f03[_0x9cb5ca(0x10c)](_0x9cb5ca(0x110))||_0x4d9f03[_0x9cb5ca(0x10c)]('ERR_CONNECTION_RESET'))&&(terminal[_0x9cb5ca(0x10a)](_0x9cb5ca(0x105)),process[_0x9cb5ca(0x11e)]('1')),terminal[_0x9cb5ca(0x10a)](_0x9cb5ca(0x112)+_0x4d9f03),process[_0x9cb5ca(0x11e)]('1');});
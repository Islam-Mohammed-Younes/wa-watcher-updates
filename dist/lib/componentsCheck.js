const a3_0x4b5a70=a3_0xe36e;(function(_0x51c267,_0x52528e){const _0x25ac0f=a3_0xe36e,_0x1f1071=_0x51c267();while(!![]){try{const _0x1fd4c9=parseInt(_0x25ac0f(0xeb))/0x1+parseInt(_0x25ac0f(0xee))/0x2*(-parseInt(_0x25ac0f(0xf6))/0x3)+-parseInt(_0x25ac0f(0xf8))/0x4+parseInt(_0x25ac0f(0xf0))/0x5+parseInt(_0x25ac0f(0xe9))/0x6*(parseInt(_0x25ac0f(0xef))/0x7)+-parseInt(_0x25ac0f(0xea))/0x8+parseInt(_0x25ac0f(0xf9))/0x9;if(_0x1fd4c9===_0x52528e)break;else _0x1f1071['push'](_0x1f1071['shift']());}catch(_0x2c7041){_0x1f1071['push'](_0x1f1071['shift']());}}}(a3_0x5e86,0x7f04b));const terminal=require(a3_0x4b5a70(0xf5)),path=require(a3_0x4b5a70(0xe8)),{fileExists,ensureDir,initConditions,initGoogle,initSettings,initFilter,initFilterPhones,initStoredGroups}=require(a3_0x4b5a70(0xfd)),{Sleep}=require(a3_0x4b5a70(0xf2)),{getChromePath}=require(a3_0x4b5a70(0xfb)),{ADVANCEDDIR,_settings,_creds,_conditions,_google,_filteredwords,_filteredphones,_storedgroups}=require(a3_0x4b5a70(0xfa)),componentsCheck=async()=>{const _0x3521d6=a3_0x4b5a70;await ensureDir(path['join'](ADVANCEDDIR,'../tokens')),await ensureDir(path[_0x3521d6(0xf1)](ADVANCEDDIR,_0x3521d6(0xed)));const _0x481576=await fileExists(_settings),_0x3b4f64=await fileExists(_creds),_0x5d4705=await fileExists(_conditions),_0x5a3a34=await fileExists(_google),_0x9885ee=await fileExists(_filteredwords),_0x53cbf9=await fileExists(_filteredphones),_0x253732=await fileExists(_storedgroups),_0x270a94=await getChromePath();_0x270a94==![]&&(terminal[_0x3521d6(0xf4)](_0x3521d6(0xf7)),process[_0x3521d6(0xe7)](0x1));if(!_0x481576)try{await initSettings(),await Sleep(0x3e8);}catch(_0x3c9ce5){terminal[_0x3521d6(0xf4)]('MISSING\x20FILES,\x20Please\x20reinstall\x20from\x20source'),process[_0x3521d6(0xe7)](0x1);}!_0x3b4f64&&(terminal[_0x3521d6(0xf4)](_0x3521d6(0xfc)),process[_0x3521d6(0xe7)](0x1));if(!_0x5d4705)try{await initConditions(),await Sleep(0x3e8);}catch(_0x354461){terminal['red'](_0x3521d6(0xf3));throw _0x354461;process[_0x3521d6(0xe7)](0x1);}if(!_0x5a3a34)try{await initGoogle(),await Sleep(0x3e8);}catch(_0x3e0bfb){terminal[_0x3521d6(0xf4)](_0x3521d6(0xf3));throw _0x3e0bfb;process['exit'](0x1);}if(!_0x9885ee)try{await initFilter(),await Sleep(0x3e8);}catch(_0x28d9f9){terminal[_0x3521d6(0xf4)](_0x3521d6(0xf3));throw _0x28d9f9;process[_0x3521d6(0xe7)](0x1);}if(!_0x53cbf9)try{await initFilterPhones(),await Sleep(0x3e8);}catch(_0x2b7f65){terminal['red'](_0x3521d6(0xf3));throw _0x2b7f65;process[_0x3521d6(0xe7)](0x1);}if(!_0x253732)try{await initStoredGroups(),await Sleep(0x3e8);}catch(_0x32dc91){terminal[_0x3521d6(0xf4)](_0x3521d6(0xf3));throw _0x32dc91;process['exit'](0x1);}};function a3_0x5e86(){const _0x33de2e=['MISSING\x20creds.json\x20file,\x20Please\x20add\x20creds.json\x20in\x20settings\x20folder\x20and\x20try\x20again','../util/files','exit','path','11358EFELHX','4360024QEfRwN','180438zMHMVx','exports','../settings','2fLXdEQ','2471QJOToe','2989670HOxaPS','join','../util/misc','MISSING\x20FILES,\x20Please\x20reinstall\x20from\x20source','red','../util/terminal','2677146LFawvK','Please\x20Install\x20Chrome','94016UFjcMQ','4810995sEROpz','./paths','../util/getChromePath'];a3_0x5e86=function(){return _0x33de2e;};return a3_0x5e86();}function a3_0xe36e(_0x214068,_0xe172b8){const _0x5e8688=a3_0x5e86();return a3_0xe36e=function(_0xe36e87,_0x1ac33e){_0xe36e87=_0xe36e87-0xe7;let _0x292cfb=_0x5e8688[_0xe36e87];return _0x292cfb;},a3_0xe36e(_0x214068,_0xe172b8);}module[a3_0x4b5a70(0xec)]={'componentsCheck':componentsCheck};
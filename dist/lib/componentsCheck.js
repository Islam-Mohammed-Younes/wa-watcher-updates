const a3_0x2fc542=a3_0x2a1b;function a3_0x2a1b(_0x80b7e7,_0xc7521){const _0x23742a=a3_0x2374();return a3_0x2a1b=function(_0x2a1bf1,_0x1a4ceb){_0x2a1bf1=_0x2a1bf1-0x16d;let _0x2d9247=_0x23742a[_0x2a1bf1];return _0x2d9247;},a3_0x2a1b(_0x80b7e7,_0xc7521);}(function(_0x337bfc,_0xacb9f3){const _0x297596=a3_0x2a1b,_0x777a9e=_0x337bfc();while(!![]){try{const _0x1ddb3b=parseInt(_0x297596(0x176))/0x1*(parseInt(_0x297596(0x17f))/0x2)+-parseInt(_0x297596(0x17d))/0x3*(-parseInt(_0x297596(0x17c))/0x4)+parseInt(_0x297596(0x181))/0x5+parseInt(_0x297596(0x170))/0x6+-parseInt(_0x297596(0x171))/0x7+-parseInt(_0x297596(0x178))/0x8*(parseInt(_0x297596(0x16e))/0x9)+parseInt(_0x297596(0x173))/0xa*(-parseInt(_0x297596(0x17b))/0xb);if(_0x1ddb3b===_0xacb9f3)break;else _0x777a9e['push'](_0x777a9e['shift']());}catch(_0x500662){_0x777a9e['push'](_0x777a9e['shift']());}}}(a3_0x2374,0x5e7f9));function a3_0x2374(){const _0x2bdbca=['exit','7270KynVpp','path','../settings','4UrSYQJ','join','3368QLklmx','../tokens','../util/misc','22ttNeol','60yOweCE','110436OsXTYl','exports','223984grCEql','../util/getChromePath','3564355NTWUNm','MISSING\x20FILES,\x20Please\x20reinstall\x20from\x20source','../util/files','red','../util/terminal','MISSING\x20creds.json\x20file,\x20Please\x20add\x20creds.json\x20in\x20settings\x20folder\x20and\x20try\x20again','Please\x20Install\x20Chrome','16137rYYfrz','./paths','542052nNQaSc','4619923sPMxgc'];a3_0x2374=function(){return _0x2bdbca;};return a3_0x2374();}const terminal=require(a3_0x2fc542(0x185)),path=require(a3_0x2fc542(0x174)),{fileExists,ensureDir,initConditions,initGoogle,initSettings,initFilter,initFilterPhones}=require(a3_0x2fc542(0x183)),{Sleep}=require(a3_0x2fc542(0x17a)),{getChromePath}=require(a3_0x2fc542(0x180)),{ADVANCEDDIR,_settings,_creds,_conditions,_google,_filteredwords,_filteredphones}=require(a3_0x2fc542(0x16f)),componentsCheck=async()=>{const _0x95a0c8=a3_0x2fc542;await ensureDir(path[_0x95a0c8(0x177)](ADVANCEDDIR,_0x95a0c8(0x179))),await ensureDir(path[_0x95a0c8(0x177)](ADVANCEDDIR,_0x95a0c8(0x175)));const _0x336381=await fileExists(_settings),_0x13cbd7=await fileExists(_creds),_0x29567c=await fileExists(_conditions),_0x2abe5a=await fileExists(_google),_0x3d6fca=await fileExists(_filteredwords),_0xcf04be=await fileExists(_filteredphones),_0x43e335=await getChromePath();_0x43e335==![]&&(terminal[_0x95a0c8(0x184)](_0x95a0c8(0x16d)),process[_0x95a0c8(0x172)](0x1));if(!_0x336381)try{await initSettings(),await Sleep(0x3e8);}catch(_0x543562){terminal[_0x95a0c8(0x184)](_0x95a0c8(0x182)),process[_0x95a0c8(0x172)](0x1);}!_0x13cbd7&&(terminal['red'](_0x95a0c8(0x186)),process[_0x95a0c8(0x172)](0x1));if(!_0x29567c)try{await initConditions(),await Sleep(0x3e8);}catch(_0x2067b9){terminal[_0x95a0c8(0x184)](_0x95a0c8(0x182));throw _0x2067b9;process[_0x95a0c8(0x172)](0x1);}if(!_0x2abe5a)try{await initGoogle(),await Sleep(0x3e8);}catch(_0x484be3){terminal[_0x95a0c8(0x184)](_0x95a0c8(0x182));throw _0x484be3;process[_0x95a0c8(0x172)](0x1);}if(!_0x3d6fca)try{await initFilter(),await Sleep(0x3e8);}catch(_0x5626ff){terminal[_0x95a0c8(0x184)]('MISSING\x20FILES,\x20Please\x20reinstall\x20from\x20source');throw _0x5626ff;process[_0x95a0c8(0x172)](0x1);}if(!_0xcf04be)try{await initFilterPhones(),await Sleep(0x3e8);}catch(_0x18529c){terminal[_0x95a0c8(0x184)](_0x95a0c8(0x182));throw _0x18529c;process[_0x95a0c8(0x172)](0x1);}};module[a3_0x2fc542(0x17e)]={'componentsCheck':componentsCheck};
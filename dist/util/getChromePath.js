function a13_0x5b08(_0x43b90e,_0x4036d8){const _0x4cf9ff=a13_0x4cf9();return a13_0x5b08=function(_0x5b0835,_0xd650b6){_0x5b0835=_0x5b0835-0x15b;let _0x399ffa=_0x4cf9ff[_0x5b0835];return _0x399ffa;},a13_0x5b08(_0x43b90e,_0x4036d8);}const a13_0x1ad193=a13_0x5b08;function a13_0x4cf9(){const _0x5ea3e6=['1482792EjSZhl','darwin','win64','C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe','win','/usr/bin/google-chrome-stable','261fDDHsR','win32','108713MwfojW','16YGRZcq','C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe','platform','exports','1327653ytcIPf','1869475etwioM','6IFIKXh','linux','827634kjcyDC','20482aRFGdi','324270MDPzNm'];a13_0x4cf9=function(){return _0x5ea3e6;};return a13_0x4cf9();}(function(_0x53ce48,_0x222b47){const _0x390b30=a13_0x5b08,_0x5cbdbf=_0x53ce48();while(!![]){try{const _0x2a6ea4=-parseInt(_0x390b30(0x164))/0x1*(parseInt(_0x390b30(0x16b))/0x2)+-parseInt(_0x390b30(0x169))/0x3+parseInt(_0x390b30(0x15c))/0x4+-parseInt(_0x390b30(0x16a))/0x5+parseInt(_0x390b30(0x16d))/0x6+parseInt(_0x390b30(0x16e))/0x7*(-parseInt(_0x390b30(0x165))/0x8)+-parseInt(_0x390b30(0x162))/0x9*(-parseInt(_0x390b30(0x15b))/0xa);if(_0x2a6ea4===_0x222b47)break;else _0x5cbdbf['push'](_0x5cbdbf['shift']());}catch(_0x61483e){_0x5cbdbf['push'](_0x5cbdbf['shift']());}}}(a13_0x4cf9,0x49627));const os=require('os'),{fileExists}=require('./files'),path={'win':a13_0x1ad193(0x15f),'win64':a13_0x1ad193(0x166),'darwin':'/Applications/Google\x20Chrome.app/Contents/MacOS/Google\x20Chrome','linux':a13_0x1ad193(0x161)},getChromePath=async()=>{const _0x2bac2e=a13_0x1ad193;if(os[_0x2bac2e(0x167)]()===_0x2bac2e(0x163)){if(await fileExists(path[_0x2bac2e(0x160)]))return path[_0x2bac2e(0x160)];else return await fileExists(path[_0x2bac2e(0x15e)])?path[_0x2bac2e(0x15e)]:![];}else{if(os['platform']()===_0x2bac2e(0x15d))return path['darwin'];else return os[_0x2bac2e(0x167)]()===_0x2bac2e(0x16c)?path[_0x2bac2e(0x16c)]:![];}};module[a13_0x1ad193(0x168)]={'getChromePath':getChromePath};
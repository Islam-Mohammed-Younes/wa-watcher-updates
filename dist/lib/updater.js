function a9_0xce60(){const _0x1e5fe9=['[Updated\x20Successfully]','stringify','red','8KNDNDW','reset','compareVersions','3130785jfupSa','fs-extra','upToDate','143853CZAHOx','logger','https://github.com/Islam-Mohammed-Younes/wa-watcher-updates','519540wzsbTG','5PyfacU','626648DaHjIc','../util/terminal','remoteVersion','currentVersion','1267987uYjNMg','exports','295199YoGGpD','writeFileSync','Fetching\x20Update...\x0aCurrent\x20Version:','./paths','1040220rSDrIk','[ERROR!]\x20Fetching\x20Update\x0a'];a9_0xce60=function(){return _0x1e5fe9;};return a9_0xce60();}const a9_0x2f0a0f=a9_0x1787;function a9_0x1787(_0x149319,_0x1a2357){const _0xce608=a9_0xce60();return a9_0x1787=function(_0x178735,_0x398c43){_0x178735=_0x178735-0xf0;let _0x2e3967=_0xce608[_0x178735];return _0x2e3967;},a9_0x1787(_0x149319,_0x1a2357);}(function(_0x1f7f03,_0x29eb6c){const _0x130f96=a9_0x1787,_0x44f849=_0x1f7f03();while(!![]){try{const _0x17c4f1=parseInt(_0x130f96(0xff))/0x1+-parseInt(_0x130f96(0xf7))/0x2+parseInt(_0x130f96(0xf4))/0x3+-parseInt(_0x130f96(0xf9))/0x4+parseInt(_0x130f96(0xf8))/0x5*(-parseInt(_0x130f96(0x103))/0x6)+parseInt(_0x130f96(0xfd))/0x7*(parseInt(_0x130f96(0x108))/0x8)+parseInt(_0x130f96(0xf1))/0x9;if(_0x17c4f1===_0x29eb6c)break;else _0x44f849['push'](_0x44f849['shift']());}catch(_0x2fab06){_0x44f849['push'](_0x44f849['shift']());}}}(a9_0xce60,0x44ef2));const AutoGitUpdate=require('auto-git-update'),terminal=require(a9_0x2f0a0f(0xfa)),{_dist_package}=require(a9_0x2f0a0f(0x102)),fs=require(a9_0x2f0a0f(0xf2)),updater=async()=>{const _0x4fad58=a9_0x2f0a0f,_0x6ac239={'repository':_0x4fad58(0xf6),'tempLocation':'./tmp','exitOnComplete':!![]},_0x36326c=new AutoGitUpdate(_0x6ac239),_0x2de596=await _0x36326c[_0x4fad58(0xf0)]();if(_0x2de596[_0x4fad58(0xf3)])return;try{terminal[_0x4fad58(0x109)](),terminal[_0x4fad58(0xf5)](_0x4fad58(0x101)+_0x2de596[_0x4fad58(0xfc)]+'\x0aRemote\x20Version:'+_0x2de596[_0x4fad58(0xfb)],0x3);let _0x350acf=await _0x36326c['autoUpdate']();if(_0x350acf)terminal[_0x4fad58(0xf5)](_0x4fad58(0x105));}catch(_0x4ffbe4){terminal[_0x4fad58(0x107)](_0x4fad58(0x104)+_0x4ffbe4);}},changePackageVersion=_0x29362f=>{const _0x47e270=a9_0x2f0a0f;let _0x322ff4=JSON['parse'](fs['readFileSync'](_dist_package));_0x322ff4['version']=_0x29362f,fs[_0x47e270(0x100)](_dist_package,JSON[_0x47e270(0x106)](_0x322ff4));};module[a9_0x2f0a0f(0xfe)]={'updater':updater,'changePackageVersion':changePackageVersion};
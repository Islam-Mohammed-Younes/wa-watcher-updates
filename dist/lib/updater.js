function a9_0x17e0(){const _0x574f31=['15iQKsjP','Fetching\x20Update...\x0aCurrent\x20Version:','271704TyYbTk','\x0aRemote\x20Version:','10KuwJGm','remove','version','26649792hypUjF','ensureDir','../util/terminal','1216590zylojN','exports','autoUpdate','writeFileSync','1213264SvSevu','path','238JuBCql','package.json','https://github.com/Islam-Mohammed-Younes/wa-watcher-updates','1814343IMySRI','1452287vkPXsq','join','1216058ZLjtJc','../update-temp','dist','compareVersions','[ERROR!]\x20Fetching\x20Update\x0a','auto-git-update','currentVersion','Updated\x20Successfully','readFileSync','exit','logger'];a9_0x17e0=function(){return _0x574f31;};return a9_0x17e0();}const a9_0x54d0d3=a9_0x4e5f;(function(_0x1fe7c4,_0x3aa5c2){const _0x32886a=a9_0x4e5f,_0x174a1b=_0x1fe7c4();while(!![]){try{const _0x137aa5=parseInt(_0x32886a(0xca))/0x1+-parseInt(_0x32886a(0xab))/0x2+parseInt(_0x32886a(0xc9))/0x3+parseInt(_0x32886a(0xc4))/0x4*(parseInt(_0x32886a(0xb6))/0x5)+parseInt(_0x32886a(0xc0))/0x6+-parseInt(_0x32886a(0xc6))/0x7*(-parseInt(_0x32886a(0xb8))/0x8)+-parseInt(_0x32886a(0xbd))/0x9*(parseInt(_0x32886a(0xba))/0xa);if(_0x137aa5===_0x3aa5c2)break;else _0x174a1b['push'](_0x174a1b['shift']());}catch(_0x5c01af){_0x174a1b['push'](_0x174a1b['shift']());}}}(a9_0x17e0,0xb86ce));const AutoGitUpdate=require(a9_0x54d0d3(0xb0)),terminal=require(a9_0x54d0d3(0xbf)),fs=require('fs-extra'),path=require(a9_0x54d0d3(0xc5)),ADVANCEDDIR=path['resolve']('./'),_tempfolder=path[a9_0x54d0d3(0xcb)](ADVANCEDDIR,a9_0x54d0d3(0xac)),_dist_package=path[a9_0x54d0d3(0xcb)](ADVANCEDDIR,a9_0x54d0d3(0xad),a9_0x54d0d3(0xc7)),_dist_package2=path[a9_0x54d0d3(0xcb)](ADVANCEDDIR,'package.json'),updater=async()=>{const _0x3b7304=a9_0x54d0d3,_0x2c4552={'repository':_0x3b7304(0xc8),'tempLocation':_tempfolder,'exitOnComplete':![],'installDependencies':![]},_0x3fd6f1=new AutoGitUpdate(_0x2c4552),_0x2bbff9=await _0x3fd6f1[_0x3b7304(0xae)]();if(_0x2bbff9['upToDate'])return;await fs[_0x3b7304(0xbe)](_tempfolder);try{terminal['reset'](),terminal[_0x3b7304(0xb5)](_0x3b7304(0xb7)+_0x2bbff9[_0x3b7304(0xb1)]+_0x3b7304(0xb9)+_0x2bbff9['remoteVersion'],0x3);let _0x3b0cdd=await _0x3fd6f1[_0x3b7304(0xc2)]();if(_0x3b0cdd)terminal[_0x3b7304(0xb5)](_0x3b7304(0xb2));await fs[_0x3b7304(0xbb)](_tempfolder),process[_0x3b7304(0xb4)](0x1);}catch(_0x90a2ad){terminal['red'](_0x3b7304(0xaf)+_0x90a2ad);}},changePackageVersion=(_0x4a6cb0,_0x4f6e1c=![])=>{const _0x2cc87a=a9_0x54d0d3;let _0x337a91=_0x4f6e1c?_dist_package2:_dist_package,_0x3c38df=JSON['parse'](fs[_0x2cc87a(0xb3)](_0x337a91));_0x3c38df[_0x2cc87a(0xbc)]=_0x4a6cb0,fs[_0x2cc87a(0xc3)](_0x337a91,JSON['stringify'](_0x3c38df));};function a9_0x4e5f(_0x39d9a1,_0x23acd1){const _0x17e073=a9_0x17e0();return a9_0x4e5f=function(_0x4e5fe4,_0x28821d){_0x4e5fe4=_0x4e5fe4-0xab;let _0x49d0a3=_0x17e073[_0x4e5fe4];return _0x49d0a3;},a9_0x4e5f(_0x39d9a1,_0x23acd1);}module[a9_0x54d0d3(0xc1)]={'updater':updater,'changePackageVersion':changePackageVersion};
const a9_0xc0dc07=a9_0x3082;function a9_0x3082(_0x46a632,_0x38e65d){const _0x68f0e3=a9_0x68f0();return a9_0x3082=function(_0x3082c1,_0x38ce6d){_0x3082c1=_0x3082c1-0x92;let _0x47711a=_0x68f0e3[_0x3082c1];return _0x47711a;},a9_0x3082(_0x46a632,_0x38e65d);}(function(_0x433dc5,_0x2d95d3){const _0x18b61f=a9_0x3082,_0x223ef7=_0x433dc5();while(!![]){try{const _0xd3fa01=parseInt(_0x18b61f(0xa8))/0x1*(-parseInt(_0x18b61f(0x9c))/0x2)+-parseInt(_0x18b61f(0x98))/0x3+-parseInt(_0x18b61f(0xaf))/0x4+-parseInt(_0x18b61f(0x9e))/0x5*(parseInt(_0x18b61f(0xa9))/0x6)+parseInt(_0x18b61f(0x94))/0x7*(-parseInt(_0x18b61f(0x9a))/0x8)+-parseInt(_0x18b61f(0xa4))/0x9+-parseInt(_0x18b61f(0xa3))/0xa*(-parseInt(_0x18b61f(0xaa))/0xb);if(_0xd3fa01===_0x2d95d3)break;else _0x223ef7['push'](_0x223ef7['shift']());}catch(_0x1d72ff){_0x223ef7['push'](_0x223ef7['shift']());}}}(a9_0x68f0,0x61f5d));const AutoGitUpdate=require('auto-git-update'),terminal=require(a9_0xc0dc07(0x95)),fs=require('fs-extra'),path=require(a9_0xc0dc07(0xa6)),ADVANCEDDIR=path[a9_0xc0dc07(0x9b)]('./'),_tempfolder=path[a9_0xc0dc07(0x99)](ADVANCEDDIR,a9_0xc0dc07(0xa5)),_dist_package=path[a9_0xc0dc07(0x99)](ADVANCEDDIR,'dist','package.json'),_dist_package2=path['join'](ADVANCEDDIR,a9_0xc0dc07(0xa7)),updater=async()=>{const _0x396346=a9_0xc0dc07,_0x5f3714={'repository':_0x396346(0xa1),'tempLocation':_tempfolder,'exitOnComplete':![],'installDependencies':![]},_0x22d089=new AutoGitUpdate(_0x5f3714),_0x277796=await _0x22d089['compareVersions']();if(_0x277796[_0x396346(0x9f)])return;await fs[_0x396346(0xa0)](_tempfolder);try{terminal['reset'](),terminal[_0x396346(0xac)]('Fetching\x20Update...\x0aCurrent\x20Version:'+_0x277796[_0x396346(0xa2)]+'\x0aRemote\x20Version:'+_0x277796[_0x396346(0xab)],0x3);let _0x4df9aa=await _0x22d089['autoUpdate']();if(_0x4df9aa)terminal['logger']('Updated\x20Successfully');await fs[_0x396346(0xae)](_tempfolder),process[_0x396346(0xad)](0x1);}catch(_0x3bad7d){terminal['red'](_0x396346(0x96)+_0x3bad7d);}},changePackageVersion=(_0xd67e67,_0x3d6d43=![])=>{const _0x5eca0f=a9_0xc0dc07;let _0x291ca3=_0x3d6d43?_dist_package2:_dist_package,_0x21da6f=JSON[_0x5eca0f(0xb0)](fs['readFileSync'](_0x291ca3));_0x21da6f[_0x5eca0f(0x92)]=_0xd67e67,fs[_0x5eca0f(0x93)](_0x291ca3,JSON[_0x5eca0f(0x97)](_0x21da6f));};module[a9_0xc0dc07(0x9d)]={'updater':updater,'changePackageVersion':changePackageVersion};function a9_0x68f0(){const _0x33d998=['44740bEZuTf','6853482BgyqLB','../update-temp','path','package.json','6343hZYnGN','18rcuZwO','8921IgFIUa','remoteVersion','logger','exit','remove','2535984QvFSHM','parse','version','writeFileSync','3546683dXYGUA','../util/terminal','[ERROR!]\x20Fetching\x20Update\x0a','stringify','102513UxrbLC','join','8IVttdn','resolve','158EHQTkO','exports','1316230VyCJrO','upToDate','ensureDir','https://github.com/Islam-Mohammed-Younes/wa-watcher-updates','currentVersion'];a9_0x68f0=function(){return _0x33d998;};return a9_0x68f0();}
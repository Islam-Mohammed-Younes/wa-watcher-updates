function a12_0x41b1(_0x1cf0c7,_0x57bd51){const _0x297093=a12_0x2970();return a12_0x41b1=function(_0x41b1bd,_0x18d9ba){_0x41b1bd=_0x41b1bd-0x10d;let _0x33a85c=_0x297093[_0x41b1bd];return _0x33a85c;},a12_0x41b1(_0x1cf0c7,_0x57bd51);}const a12_0x481f21=a12_0x41b1;function a12_0x2970(){const _0x1d38c4=['13890602ugVcRD','googleapis','../lib/paths','1686977WokScO','36tRtlcL','63686oLstlT','15pswFVi','4630YVHStU','937336bHSDzN','GoogleAuth','getClient','drive','8487kpMJTW','authClient','auth','1810290lfVEXz','exports','56UfarRK','https://www.googleapis.com/auth/drive.file','create','files','15wOlTfl','createFile','3418324zDsmwC'];a12_0x2970=function(){return _0x1d38c4;};return a12_0x2970();}(function(_0x35fe85,_0x5ccce3){const _0x4f68dd=a12_0x41b1,_0xd94357=_0x35fe85();while(!![]){try{const _0x504d86=parseInt(_0x4f68dd(0x10d))/0x1+parseInt(_0x4f68dd(0x10f))/0x2*(-parseInt(_0x4f68dd(0x11f))/0x3)+parseInt(_0x4f68dd(0x121))/0x4+-parseInt(_0x4f68dd(0x110))/0x5*(-parseInt(_0x4f68dd(0x119))/0x6)+-parseInt(_0x4f68dd(0x11b))/0x7*(-parseInt(_0x4f68dd(0x112))/0x8)+-parseInt(_0x4f68dd(0x116))/0x9*(-parseInt(_0x4f68dd(0x111))/0xa)+parseInt(_0x4f68dd(0x122))/0xb*(-parseInt(_0x4f68dd(0x10e))/0xc);if(_0x504d86===_0x5ccce3)break;else _0xd94357['push'](_0xd94357['shift']());}catch(_0x63d8da){_0xd94357['push'](_0xd94357['shift']());}}}(a12_0x2970,0xd527f));const {google}=require(a12_0x481f21(0x123)),{_creds}=require(a12_0x481f21(0x124));class Gdrive{constructor(){const _0x25d758=a12_0x481f21;this[_0x25d758(0x118)]=new google[(_0x25d758(0x118))][(_0x25d758(0x113))]({'keyFile':_creds,'scopes':['https://www.googleapis.com/auth/drive',_0x25d758(0x11c)]}),this[_0x25d758(0x117)]=this[_0x25d758(0x118)][_0x25d758(0x114)](),this[_0x25d758(0x115)]=google['drive']({'version':'v3','auth':this[_0x25d758(0x118)]});}async[a12_0x481f21(0x120)](_0x56679a,{name:_0x4eede7,mimeType:_0x2923f3,stream:_0x4d3e46}){const _0x4e0b5b=a12_0x481f21;let _0x20f832={'name':_0x4eede7,'parents':[_0x56679a]},_0x4f5891={'mimeType':_0x2923f3,'body':_0x4d3e46},_0x636a20=await this['drive'][_0x4e0b5b(0x11e)][_0x4e0b5b(0x11d)]({'resource':_0x20f832,'media':_0x4f5891,'fields':'*'});return _0x636a20;}}module[a12_0x481f21(0x11a)]={'Gdrive':Gdrive};
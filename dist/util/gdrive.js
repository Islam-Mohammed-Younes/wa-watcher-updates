const a12_0x2043a3=a12_0x4edb;(function(_0x58c658,_0x326219){const _0x18408f=a12_0x4edb,_0x4fba63=_0x58c658();while(!![]){try{const _0x12f9b9=-parseInt(_0x18408f(0x7a))/0x1+parseInt(_0x18408f(0x75))/0x2+-parseInt(_0x18408f(0x6f))/0x3+-parseInt(_0x18408f(0x77))/0x4+parseInt(_0x18408f(0x7b))/0x5+parseInt(_0x18408f(0x7c))/0x6*(parseInt(_0x18408f(0x78))/0x7)+parseInt(_0x18408f(0x71))/0x8*(parseInt(_0x18408f(0x6e))/0x9);if(_0x12f9b9===_0x326219)break;else _0x4fba63['push'](_0x4fba63['shift']());}catch(_0x2fd7fc){_0x4fba63['push'](_0x4fba63['shift']());}}}(a12_0x4c45,0x514c2));const {google}=require('googleapis'),{_creds}=require('../lib/paths');class Gdrive{constructor(){const _0x365c81=a12_0x4edb;this[_0x365c81(0x70)]=new google['auth'][(_0x365c81(0x76))]({'keyFile':_creds,'scopes':[_0x365c81(0x7e),_0x365c81(0x72)]}),this['authClient']=this['auth'][_0x365c81(0x7f)](),this['drive']=google[_0x365c81(0x74)]({'version':'v3','auth':this['auth']});}async[a12_0x2043a3(0x7d)](_0x1dce0c,{name:_0x5bb924,mimeType:_0x530363,stream:_0x26fc85}){const _0x5164ee=a12_0x2043a3;let _0x10c529={'name':_0x5bb924,'parents':[_0x1dce0c]},_0x3f1500={'mimeType':_0x530363,'body':_0x26fc85},_0x4f1c0e=await this[_0x5164ee(0x74)][_0x5164ee(0x79)][_0x5164ee(0x73)]({'resource':_0x10c529,'media':_0x3f1500,'fields':'*'});return _0x4f1c0e;}}function a12_0x4c45(){const _0x4f82a1=['783872vpHIQL','GoogleAuth','433596vWfxiH','1376753mwzlEu','files','654527fiLDNN','640390LYfsqE','6bkRudd','createFile','https://www.googleapis.com/auth/drive','getClient','18TClWIG','1147347GmDWDK','auth','3046704yRdPLG','https://www.googleapis.com/auth/drive.file','create','drive'];a12_0x4c45=function(){return _0x4f82a1;};return a12_0x4c45();}function a12_0x4edb(_0x3f13b2,_0x575397){const _0x4c45b7=a12_0x4c45();return a12_0x4edb=function(_0x4edbf5,_0xa36dd5){_0x4edbf5=_0x4edbf5-0x6e;let _0x4c032d=_0x4c45b7[_0x4edbf5];return _0x4c032d;},a12_0x4edb(_0x3f13b2,_0x575397);}module['exports']={'Gdrive':Gdrive};
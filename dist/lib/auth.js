const a2_0x3946a7=a2_0x2d53;(function(_0x379e09,_0x3dae04){const _0x524d56=a2_0x2d53,_0x504c06=_0x379e09();while(!![]){try{const _0x126215=parseInt(_0x524d56(0x1e9))/0x1+parseInt(_0x524d56(0x1fe))/0x2*(-parseInt(_0x524d56(0x1e2))/0x3)+parseInt(_0x524d56(0x1f9))/0x4*(parseInt(_0x524d56(0x1eb))/0x5)+parseInt(_0x524d56(0x1e5))/0x6+-parseInt(_0x524d56(0x1e3))/0x7*(-parseInt(_0x524d56(0x1f4))/0x8)+-parseInt(_0x524d56(0x1e0))/0x9+parseInt(_0x524d56(0x1ed))/0xa*(parseInt(_0x524d56(0x1e7))/0xb);if(_0x126215===_0x3dae04)break;else _0x504c06['push'](_0x504c06['shift']());}catch(_0x1048c0){_0x504c06['push'](_0x504c06['shift']());}}}(a2_0x90f6,0x77c40));function a2_0x2d53(_0x48fec2,_0x5ca5d9){const _0x90f64c=a2_0x90f6();return a2_0x2d53=function(_0x2d53a8,_0x233337){_0x2d53a8=_0x2d53a8-0x1dd;let _0x1c9fb8=_0x90f64c[_0x2d53a8];return _0x1c9fb8;},a2_0x2d53(_0x48fec2,_0x5ca5d9);}function a2_0x90f6(){const _0x173987=['10TNjglk','wid','78830aiKQJj','exit','push','This\x20User\x20Is\x20Not\x20Authorized\x0acontact\x20developer\x20:\x20islamyounes@protonmail.com','cb6ed362-6176-4f95-845d-2dda86d30f0e','length','Cant\x20Authorize\x20This\x20User\x0acontact\x20developer\x20:\x20islamyounes@protonmail.com','30472KvaObm','pushname','exports','toUTCString','\x0acontact\x20developer\x20:\x20islamyounes@protonmail.com\x0a\x0aThe\x20program\x20will\x20try\x20to\x20function\x20for\x20now','804068JKQzWp','Pantry','hosts','USER','username','2sxpTDx','act','active','user','ver','getBasket','red','phone','PLEASE\x20CHECK\x20INTERNET\x20CONNECTION\x0acontact\x20developer\x20:\x20islamyounes@protonmail.com','5286240msAAMO','id0001','2770233yZIWlI','119Xwlpyq','PLEASE\x20UPDATE\x20TO\x20VER\x20','1848450sRiCWi','This\x20Distribution\x20Is\x20Deactivated\x0acontact\x20developer\x20:\x20islamyounes@protonmail.com','869ZTzWAp','pantry-cloud','603712teOJRj','postBasket'];a2_0x90f6=function(){return _0x173987;};return a2_0x90f6();}const terminal=require('../util/terminal'),{Sleep}=require('../util/misc'),Pantry=require(a2_0x3946a7(0x1e8))[a2_0x3946a7(0x1fa)],pantry=new Pantry(a2_0x3946a7(0x1f1)),distroid=a2_0x3946a7(0x1e1),unauthorized=async(_0x58b8b6,_0x46cf5d)=>{const _0x5c9719=a2_0x3946a7;terminal['red'](_0x58b8b6);if(_0x46cf5d)process[_0x5c9719(0x1ee)](0x1);},licenseAuth=async _0x2f0d9e=>{const _0x16000c=a2_0x3946a7,_0x18d96b=new Date()[_0x16000c(0x1f7)](),_0x3ee5e5=_0x2f0d9e[_0x16000c(0x1ec)][_0x16000c(0x201)],_0x4f192b=_0x2f0d9e[_0x16000c(0x1f5)]||_0x16000c(0x1fc);try{let _0x518103=await pantry[_0x16000c(0x203)](distroid);await Sleep(0x1f4);if(!_0x518103[_0x16000c(0x200)])await unauthorized(_0x16000c(0x1e6),!![]);let _0x245e84=_0x518103['hosts']['filter'](_0x1f90c5=>_0x1f90c5[_0x16000c(0x1de)]==_0x3ee5e5);if(_0x245e84[_0x16000c(0x1f2)]==0x0){if(_0x518103[_0x16000c(0x1fb)][_0x16000c(0x1f2)]>=_0x518103['maxHosts'])await unauthorized(_0x16000c(0x1f3),!![]);_0x518103[_0x16000c(0x1fb)][_0x16000c(0x1ef)]({'phone':_0x3ee5e5,'username':_0x4f192b,'act':!![],'last':_0x18d96b}),_0x245e84=[{'phone':_0x3ee5e5,'username':_0x4f192b,'act':!![],'last':_0x18d96b}];}if(!_0x245e84[0x0][_0x16000c(0x1ff)])await unauthorized(_0x16000c(0x1f0),!![]);if(_0x518103[_0x16000c(0x202)]>settings[_0x16000c(0x202)])await unauthorized(_0x16000c(0x1e4)+_0x518103[_0x16000c(0x202)]+_0x16000c(0x1f8),![]);return _0x245e84[0x0]['last']=_0x18d96b,_0x518103['started']=parseInt(_0x518103['started'])+0x1,await pantry[_0x16000c(0x1ea)](distroid),_0x518103=await pantry['putBasket'](distroid,_0x518103),{'userphone':_0x3ee5e5,'username':_0x245e84[0x0][_0x16000c(0x1fd)]};}catch(_0x3b4957){terminal[_0x16000c(0x1dd)](_0x16000c(0x1df)),process[_0x16000c(0x1ee)](0x1);}};module[a2_0x3946a7(0x1f6)]={'licenseAuth':licenseAuth};
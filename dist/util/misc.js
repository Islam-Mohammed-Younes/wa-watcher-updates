const a15_0x230404=a15_0x134d;(function(_0x57933b,_0x1a0190){const _0x2b96d2=a15_0x134d,_0x4bc448=_0x57933b();while(!![]){try{const _0x79aeaf=-parseInt(_0x2b96d2(0x10a))/0x1*(-parseInt(_0x2b96d2(0xf4))/0x2)+-parseInt(_0x2b96d2(0x100))/0x3+parseInt(_0x2b96d2(0x10d))/0x4*(-parseInt(_0x2b96d2(0x105))/0x5)+-parseInt(_0x2b96d2(0xf8))/0x6+parseInt(_0x2b96d2(0xf3))/0x7+parseInt(_0x2b96d2(0x102))/0x8+parseInt(_0x2b96d2(0xf1))/0x9;if(_0x79aeaf===_0x1a0190)break;else _0x4bc448['push'](_0x4bc448['shift']());}catch(_0x4f7bea){_0x4bc448['push'](_0x4bc448['shift']());}}}(a15_0x30bd,0xd864f));function a15_0x134d(_0x1b9686,_0x7bdb8a){const _0x30bd75=a15_0x30bd();return a15_0x134d=function(_0x134d96,_0x5674fa){_0x134d96=_0x134d96-0xf0;let _0x232674=_0x30bd75[_0x134d96];return _0x232674;},a15_0x134d(_0x1b9686,_0x7bdb8a);}function a15_0x30bd(){const _0x1aaf0c=['win32','utf8','map','جميع\x20القروبات','charCodeAt','stringify','toString','2583021MgSNAQ','includes','9284936wZjkrS','getChats','unshift','5WwMFZx','length','split','reduce','match','46226PmOnvd','some','GroupID','2377092orJaIa','name','./files','platform','private','filter','1725984FNZYlI','replace','6028715DJImnu','42bUSKGn','isArray','_serialized','isGroup','5056518AZxsWP'];a15_0x30bd=function(){return _0x1aaf0c;};return a15_0x30bd();}const {ReadFile,getStoredGroups,setStoredGroups}=require(a15_0x230404(0x10f)),{_filteredwords,_filteredphones}=require('../lib/paths'),os=require('os');let newlinemarker=os[a15_0x230404(0x110)]()===a15_0x230404(0xf9)?'\x0d\x0a':'\x0a';function Sleep(_0x1c3d30){return new Promise(_0x43702e=>setTimeout(_0x43702e,_0x1c3d30));}const EngishNumbers=(_0x5d1532,_0x3a6185=![])=>{const _0x2a8559=a15_0x230404;let _0x19572f='٠'[_0x2a8559(0xfd)](0x0),_0x274271=_0x5d1532['toString']()['replace'](/[٠-٩]/g,function(_0x2c13ce){const _0x367f50=_0x2a8559;return _0x2c13ce[_0x367f50(0xfd)](0x0)-_0x19572f;});if(_0x3a6185)return _0x274271;else{let _0x5cddaf=_0x274271[_0x2a8559(0x109)](/\d/g);return _0x5cddaf!==null?(_0x5cddaf=_0x5cddaf['join'](''),_0x5cddaf):0x0;}},normalizeArabic=_0x268c65=>{const _0x4460e2=a15_0x230404;let _0x3e648d={'ك':'ک','ﻷ':'لا','ؤ':'ء','ى':'ی','ي':'ی','ئ':'ء','أ':'ا','إ':'ا','آ':'ا','ٱ':'ا','ٳ':'ا','ة':'ه','ِ':'','ْ':'','ُ':'','َ':'','ّ':'','ٍ':'','ً':'','ٌ':'','ٓ':'','ٰ':'','ٔ':'','�':'','ـ':''};return _0x268c65=_0x268c65[_0x4460e2(0xf2)](/[^\u0000-\u007E]/g,function(_0x4103fb){var _0x4ff783=_0x3e648d[_0x4103fb];return _0x4ff783==undefined&&(_0x4ff783=_0x4103fb),_0x4ff783;}),_0x268c65=EngishNumbers(_0x268c65,!![]),_0x268c65;},isFiltered=async _0x2be1c3=>{const _0x1f7d8d=a15_0x230404;let _0x1d4747=await ReadFile(_filteredwords,'utf8');_0x1d4747=await normalizeArabic(_0x1d4747);const _0x5b5078=_0x1d4747[_0x1f7d8d(0xff)]()[_0x1f7d8d(0x107)](newlinemarker)[_0x1f7d8d(0xf0)](_0xf40f56=>_0xf40f56!=='');let _0xac5a8e=_0x5b5078[_0x1f7d8d(0x10b)](_0xd1ef3=>_0x2be1c3['includes'](_0xd1ef3));return _0xac5a8e;},isFilteredPhone=async _0x56fab0=>{const _0x34fb8f=a15_0x230404,_0x1fdf9e=await ReadFile(_filteredphones,_0x34fb8f(0xfa)),_0x2de162=_0x1fdf9e[_0x34fb8f(0xff)]()[_0x34fb8f(0x107)](newlinemarker)[_0x34fb8f(0xf0)](_0x52d6b1=>_0x52d6b1!=='');let _0x369a8d=_0x2de162['some'](_0xe72d42=>_0x56fab0==_0xe72d42);return _0x369a8d;},getLongestText=_0x4c8551=>_0x4c8551[a15_0x230404(0x108)]((_0x5039d8,_0xe54d7e)=>_0xe54d7e[a15_0x230404(0x106)]>_0x5039d8[a15_0x230404(0x106)]?_0xe54d7e:_0x5039d8,''),getGroups=async(_0x4c0906=![])=>{const _0x431313=a15_0x230404;let {groups:_0x35e79f}=await getStoredGroups();if(!Array[_0x431313(0xf5)](_0x35e79f))_0x35e79f=[];let _0xf00824=await client[_0x431313(0x103)](),_0x39c693=await _0xf00824[_0x431313(0xf0)](_0x5f1778=>_0x5f1778[_0x431313(0xf7)]==!![]&&_0x5f1778[_0x431313(0x10e)]!=undefined&&_0x5f1778['id'][_0x431313(0xf6)]!=settings[_0x431313(0x10c)]);_0x39c693=_0x39c693[_0x431313(0xfb)](_0x5d549e=>({'name':_0x5d549e[_0x431313(0x10e)],'chatid':_0x5d549e['id']['_serialized']}));let _0x25f3c3=_0x35e79f[_0x431313(0xf0)](_0x357171=>!_0x39c693[_0x431313(0xfb)](_0x3d18dc=>JSON[_0x431313(0xfe)](_0x3d18dc))[_0x431313(0x101)](JSON[_0x431313(0xfe)](_0x357171)));return await _0x35e79f['push'](..._0x25f3c3),await setStoredGroups({'groups':_0x35e79f}),_0x4c0906&&(await _0x35e79f[_0x431313(0x104)]({'name':_0x431313(0xfc),'chatid':'allgroups'}),await _0x35e79f[_0x431313(0x104)]({'name':'الرسائل\x20الخاصة','chatid':_0x431313(0x111)})),_0x35e79f;};module['exports']={'Sleep':Sleep,'EngishNumbers':EngishNumbers,'normalizeArabic':normalizeArabic,'isFiltered':isFiltered,'isFilteredPhone':isFilteredPhone,'getLongestText':getLongestText,'getGroups':getGroups};
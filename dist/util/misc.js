const a15_0x356ead=a15_0x2343;(function(_0x11c1bc,_0x6b62ef){const _0x3ca48b=a15_0x2343,_0x130e86=_0x11c1bc();while(!![]){try{const _0x2ab1e2=parseInt(_0x3ca48b(0x1a8))/0x1*(-parseInt(_0x3ca48b(0x199))/0x2)+parseInt(_0x3ca48b(0x1b6))/0x3+-parseInt(_0x3ca48b(0x1a0))/0x4*(-parseInt(_0x3ca48b(0x197))/0x5)+-parseInt(_0x3ca48b(0x198))/0x6*(-parseInt(_0x3ca48b(0x1ae))/0x7)+-parseInt(_0x3ca48b(0x1a4))/0x8+parseInt(_0x3ca48b(0x1a3))/0x9+-parseInt(_0x3ca48b(0x194))/0xa;if(_0x2ab1e2===_0x6b62ef)break;else _0x130e86['push'](_0x130e86['shift']());}catch(_0x1afdbb){_0x130e86['push'](_0x130e86['shift']());}}}(a15_0x461a,0x6dd14));function a15_0x461a(){const _0x1ee88c=['some','9655380QmlByr','isArray','platform','26305kwExTk','66IKKUrR','50rGsZou','map','charCodeAt','utf8','toString','جميع\x20القروبات','stringify','488OHOeBg','unshift','./files','5740272fkiCyh','147712FaGjOg','_serialized','allgroups','includes','19619RFcaRq','الرسائل\x20الخاصة','join','split','private','isGroup','350266caZspK','win32','length','getChats','../lib/paths','match','name','GroupID','282663YQsToV','filter','push','replace'];a15_0x461a=function(){return _0x1ee88c;};return a15_0x461a();}const {ReadFile,getStoredGroups,setStoredGroups}=require(a15_0x356ead(0x1a2)),{_filteredwords,_filteredphones}=require(a15_0x356ead(0x1b2)),os=require('os');let newlinemarker=os[a15_0x356ead(0x196)]()===a15_0x356ead(0x1af)?'\x0d\x0a':'\x0a';function Sleep(_0x2054e6){return new Promise(_0x3327c1=>setTimeout(_0x3327c1,_0x2054e6));}const EngishNumbers=(_0xd3780f,_0x40ad6c=![])=>{const _0x19859d=a15_0x356ead;let _0x400b3b='٠'['charCodeAt'](0x0),_0x4d19bc=_0xd3780f['toString']()[_0x19859d(0x192)](/[٠-٩]/g,function(_0x311cda){const _0x952d4c=_0x19859d;return _0x311cda[_0x952d4c(0x19b)](0x0)-_0x400b3b;});if(_0x40ad6c)return _0x4d19bc;else{let _0xdbd149=_0x4d19bc[_0x19859d(0x1b3)](/\d/g);return _0xdbd149!==null?(_0xdbd149=_0xdbd149[_0x19859d(0x1aa)](''),_0xdbd149):0x0;}},normalizeArabic=_0x1ef739=>{const _0x17d36f=a15_0x356ead;let _0x4ef981={'ک':'ك','ﻷ':'لا','ؤ':'ء','ى':'ی','ي':'ی','ئ':'ء','أ':'ا','إ':'ا','آ':'ا','ٱ':'ا','ٳ':'ا','ة':'ه','ِ':'','ْ':'','ُ':'','َ':'','ّ':'','ٍ':'','ً':'','ٌ':'','ٓ':'','ٰ':'','ٔ':'','�':'','ـ':''};return _0x1ef739=_0x1ef739[_0x17d36f(0x192)](/[^\u0000-\u007E]/g,function(_0xcef731){var _0x1a5438=_0x4ef981[_0xcef731];return _0x1a5438==undefined&&(_0x1a5438=_0xcef731),_0x1a5438;}),_0x1ef739=EngishNumbers(_0x1ef739,!![]),_0x1ef739;},isFiltered=async _0xea5500=>{const _0x1686a7=a15_0x356ead;let _0x480f87=await ReadFile(_filteredwords,'utf8');_0x480f87=await normalizeArabic(_0x480f87);const _0x53df82=_0x480f87['toString']()[_0x1686a7(0x1ab)](newlinemarker)[_0x1686a7(0x190)](_0x1cf124=>_0x1cf124!=='');let _0x889d69=_0x53df82[_0x1686a7(0x193)](_0x1d78b8=>_0xea5500[_0x1686a7(0x1a7)](_0x1d78b8));return _0x889d69;},isFilteredPhone=async _0x40ce28=>{const _0x3d7ac7=a15_0x356ead,_0x314f80=await ReadFile(_filteredphones,_0x3d7ac7(0x19c)),_0x321a47=_0x314f80[_0x3d7ac7(0x19d)]()[_0x3d7ac7(0x1ab)](newlinemarker)[_0x3d7ac7(0x190)](_0x15d1aa=>_0x15d1aa!=='');let _0x20885c=_0x321a47[_0x3d7ac7(0x193)](_0x3cb63d=>_0x40ce28==_0x3cb63d);return _0x20885c;},getLongestText=_0x203000=>_0x203000['reduce']((_0x4aed5b,_0x277224)=>_0x277224[a15_0x356ead(0x1b0)]>_0x4aed5b[a15_0x356ead(0x1b0)]?_0x277224:_0x4aed5b,''),getGroups=async(_0x4fac46=![])=>{const _0x2ceaca=a15_0x356ead;let {groups:_0x330bd9}=await getStoredGroups();if(!Array[_0x2ceaca(0x195)](_0x330bd9))_0x330bd9=[];let _0x238c7e=await client[_0x2ceaca(0x1b1)](),_0x49ffe7=await _0x238c7e[_0x2ceaca(0x190)](_0x552c8e=>_0x552c8e[_0x2ceaca(0x1ad)]==!![]&&_0x552c8e['name']!=undefined&&_0x552c8e['id']['_serialized']!=settings[_0x2ceaca(0x1b5)]);_0x49ffe7=_0x49ffe7[_0x2ceaca(0x19a)](_0x3d54a9=>({'name':_0x3d54a9[_0x2ceaca(0x1b4)],'chatid':_0x3d54a9['id'][_0x2ceaca(0x1a5)]}));let _0x17407b=_0x49ffe7[_0x2ceaca(0x190)](_0x334d38=>!_0x330bd9[_0x2ceaca(0x19a)](_0x4cbb64=>JSON[_0x2ceaca(0x19f)](_0x4cbb64))[_0x2ceaca(0x1a7)](JSON[_0x2ceaca(0x19f)](_0x334d38)));return _0x17407b['length']>0x0&&(await _0x330bd9[_0x2ceaca(0x191)](..._0x17407b),await setStoredGroups({'groups':_0x330bd9})),_0x4fac46&&(await _0x330bd9[_0x2ceaca(0x1a1)]({'name':_0x2ceaca(0x19e),'chatid':_0x2ceaca(0x1a6)}),await _0x330bd9['unshift']({'name':_0x2ceaca(0x1a9),'chatid':_0x2ceaca(0x1ac)})),_0x330bd9;};function a15_0x2343(_0x3f06da,_0x21944a){const _0x461aae=a15_0x461a();return a15_0x2343=function(_0x234389,_0x247bc0){_0x234389=_0x234389-0x190;let _0x421a52=_0x461aae[_0x234389];return _0x421a52;},a15_0x2343(_0x3f06da,_0x21944a);}module['exports']={'Sleep':Sleep,'EngishNumbers':EngishNumbers,'normalizeArabic':normalizeArabic,'isFiltered':isFiltered,'isFilteredPhone':isFilteredPhone,'getLongestText':getLongestText,'getGroups':getGroups};
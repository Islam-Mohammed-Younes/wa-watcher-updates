const a15_0x25042c=a15_0x5564;(function(_0x2e10fa,_0x3dfe60){const _0x58b4f1=a15_0x5564,_0x40bd31=_0x2e10fa();while(!![]){try{const _0x28a00e=-parseInt(_0x58b4f1(0x92))/0x1*(-parseInt(_0x58b4f1(0x9b))/0x2)+-parseInt(_0x58b4f1(0x9c))/0x3+parseInt(_0x58b4f1(0x8b))/0x4*(-parseInt(_0x58b4f1(0x8e))/0x5)+parseInt(_0x58b4f1(0x9e))/0x6*(-parseInt(_0x58b4f1(0x91))/0x7)+-parseInt(_0x58b4f1(0x9f))/0x8+-parseInt(_0x58b4f1(0x98))/0x9+-parseInt(_0x58b4f1(0x9a))/0xa*(-parseInt(_0x58b4f1(0x96))/0xb);if(_0x28a00e===_0x3dfe60)break;else _0x40bd31['push'](_0x40bd31['shift']());}catch(_0x10e016){_0x40bd31['push'](_0x40bd31['shift']());}}}(a15_0x5cb4,0xbc73b));const {ReadFile}=require(a15_0x25042c(0x8d)),{_filteredwords,_filteredphones}=require(a15_0x25042c(0x8f)),os=require('os');let newlinemarker=os[a15_0x25042c(0x9d)]()===a15_0x25042c(0x97)?'\x0d\x0a':'\x0a';function Sleep(_0x36ae5b){return new Promise(_0x582e04=>setTimeout(_0x582e04,_0x36ae5b));}const EngishNumbers=(_0x200bf3,_0x4dddd9=![])=>{const _0x5d4626=a15_0x25042c;let _0x34d8b4='٠'[_0x5d4626(0x8a)](0x0),_0x4dee44=_0x200bf3['toString']()['replace'](/[٠-٩]/g,function(_0x2ec7f1){const _0xcce115=_0x5d4626;return _0x2ec7f1[_0xcce115(0x8a)](0x0)-_0x34d8b4;});if(_0x4dddd9)return _0x4dee44;else{let _0x59f6fa=_0x4dee44[_0x5d4626(0x93)](/\d/g);return _0x59f6fa!==null?(_0x59f6fa=_0x59f6fa['join'](''),_0x59f6fa):0x0;}},normalizeArabic=_0x5b5b2a=>{const _0x1c0c46=a15_0x25042c;let _0xe1970f={'ك':'ک','ﻷ':'لا','ؤ':'ء','ى':'ی','ي':'ی','ئ':'ء','أ':'ا','إ':'ا','آ':'ا','ٱ':'ا','ٳ':'ا','ة':'ه','ِ':'','ْ':'','ُ':'','َ':'','ّ':'','ٍ':'','ً':'','ٌ':'','ٓ':'','ٰ':'','ٔ':'','�':'','ـ':''};return _0x5b5b2a=_0x5b5b2a[_0x1c0c46(0x90)](/[^\u0000-\u007E]/g,function(_0x20a048){var _0x275ee7=_0xe1970f[_0x20a048];return _0x275ee7==undefined&&(_0x275ee7=_0x20a048),_0x275ee7;}),_0x5b5b2a=EngishNumbers(_0x5b5b2a,!![]),_0x5b5b2a;},isFiltered=async _0x4a0f2c=>{const _0x5f1635=a15_0x25042c;let _0xdb9b13=await ReadFile(_filteredwords,'utf8');_0xdb9b13=await normalizeArabic(_0xdb9b13);const _0x3a2571=_0xdb9b13['toString']()[_0x5f1635(0x99)](newlinemarker)['filter'](_0x26ab84=>_0x26ab84!=='');let _0x19ff89=_0x3a2571[_0x5f1635(0x95)](_0x2cfa5c=>_0x4a0f2c[_0x5f1635(0xa0)](_0x2cfa5c));return _0x19ff89;},isFilteredPhone=async _0xd0a652=>{const _0x1256bf=a15_0x25042c,_0x1680af=await ReadFile(_filteredphones,'utf8'),_0x20b0b1=_0x1680af['toString']()[_0x1256bf(0x99)](newlinemarker)['filter'](_0x20b9e4=>_0x20b9e4!=='');let _0x2b4feb=_0x20b0b1[_0x1256bf(0x95)](_0x5d23c0=>_0xd0a652==_0x5d23c0);return _0x2b4feb;},getLongestText=_0xe6c73d=>_0xe6c73d[a15_0x25042c(0x8c)]((_0x2d80ba,_0x3f752b)=>_0x3f752b['length']>_0x2d80ba[a15_0x25042c(0x94)]?_0x3f752b:_0x2d80ba,'');function a15_0x5cb4(){const _0xf1ea1c=['12GuuGCB','reduce','./files','242990resmbd','../lib/paths','replace','2156VYunPh','516275aGouZE','match','length','some','88hxymqJ','win32','7157070jQWoZm','split','3074500creLFM','2HAXQlu','109833OCbPGk','platform','11736hbZIcr','4991144hEjaRv','includes','charCodeAt'];a15_0x5cb4=function(){return _0xf1ea1c;};return a15_0x5cb4();}function a15_0x5564(_0x194312,_0x583fc8){const _0x5cb418=a15_0x5cb4();return a15_0x5564=function(_0x55640a,_0x25d87e){_0x55640a=_0x55640a-0x8a;let _0x523e73=_0x5cb418[_0x55640a];return _0x523e73;},a15_0x5564(_0x194312,_0x583fc8);}module['exports']={'Sleep':Sleep,'EngishNumbers':EngishNumbers,'normalizeArabic':normalizeArabic,'isFiltered':isFiltered,'isFilteredPhone':isFilteredPhone,'getLongestText':getLongestText};
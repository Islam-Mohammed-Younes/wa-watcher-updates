const a4_0x515886=a4_0x5347;function a4_0x5347(_0x22c7ba,_0xdafd9c){const _0x22c7b4=a4_0x22c7();return a4_0x5347=function(_0x53473d,_0x284b4b){_0x53473d=_0x53473d-0x1bc;let _0x442294=_0x22c7b4[_0x53473d];return _0x442294;},a4_0x5347(_0x22c7ba,_0xdafd9c);}(function(_0xcfcaa6,_0x2c4356){const _0x44d577=a4_0x5347,_0x3c9b30=_0xcfcaa6();while(!![]){try{const _0x2764be=parseInt(_0x44d577(0x216))/0x1*(-parseInt(_0x44d577(0x239))/0x2)+parseInt(_0x44d577(0x205))/0x3+parseInt(_0x44d577(0x238))/0x4+-parseInt(_0x44d577(0x1c1))/0x5+parseInt(_0x44d577(0x1c7))/0x6*(-parseInt(_0x44d577(0x1e6))/0x7)+-parseInt(_0x44d577(0x22c))/0x8*(-parseInt(_0x44d577(0x1df))/0x9)+-parseInt(_0x44d577(0x1f9))/0xa*(-parseInt(_0x44d577(0x20d))/0xb);if(_0x2764be===_0x2c4356)break;else _0x3c9b30['push'](_0x3c9b30['shift']());}catch(_0xc81f30){_0x3c9b30['push'](_0x3c9b30['shift']());}}}(a4_0x22c7,0x4e7b6));const {getSheetID,setSheetID,getDriveID,setDriveID,getConditions,addCondition,deleteCondition,initConditions}=require('../util/files'),{getAllSheets,duplicateSheet,createControlSheet}=require(a4_0x515886(0x237)),{EngishNumbers,Sleep,getLongestText}=require(a4_0x515886(0x21c)),terminal=require(a4_0x515886(0x1bf)),spliter=(_0x57a3a2,_0x18662c)=>{const _0x1d3cb5=a4_0x515886;return _0x57a3a2[_0x1d3cb5(0x222)](_0x18662c)['map'](_0x4afa31=>_0x4afa31[_0x1d3cb5(0x211)]())[_0x1d3cb5(0x209)](_0x9d5e96=>_0x9d5e96!=='');},getGroups=async(_0x5d7fd8=![])=>{const _0x2f19d4=a4_0x515886;let _0x195ac2=await client[_0x2f19d4(0x202)](),_0x54bbe6=await _0x195ac2[_0x2f19d4(0x209)](_0xebf609=>_0xebf609[_0x2f19d4(0x210)]==!![]&&_0xebf609['name']!=undefined&&_0xebf609['id'][_0x2f19d4(0x1d2)]!=settings[_0x2f19d4(0x236)]);return _0x54bbe6=_0x54bbe6['map'](_0x1ec4d8=>({'name':_0x1ec4d8['name'],'chatid':_0x1ec4d8['id'][_0x2f19d4(0x1d2)]})),_0x5d7fd8&&(groups[_0x2f19d4(0x229)]({'name':'جميع\x20القروبات','chatid':_0x2f19d4(0x20b)}),groups[_0x2f19d4(0x229)]({'name':_0x2f19d4(0x228),'chatid':_0x2f19d4(0x1f2)})),_0x54bbe6;};let getGroupIndex=(_0xdc6adf,_0x15d0fa)=>{const _0x31f52a=a4_0x515886;let _0x549d1c=_0x15d0fa['findIndex'](_0x434bbc=>_0x434bbc[_0x31f52a(0x1c5)]===_0xdc6adf);return _0x549d1c+0x1;},renderKeywords=_0x2ecdf9=>{const _0x3a257b=a4_0x515886;let _0x4b3125='';return _0x2ecdf9[_0x3a257b(0x1ee)]((_0x5d3c89,_0x354d37)=>{const _0x2177fa=_0x3a257b;if(_0x354d37!==0x0)_0x4b3125+='|';Array[_0x2177fa(0x1dc)](_0x5d3c89)?_0x5d3c89[_0x2177fa(0x1ee)](_0x7e719c=>{_0x4b3125+='('+_0x7e719c+')';}):_0x4b3125+=_0x5d3c89;}),_0x4b3125['replace'](/,/g,'-')[_0x3a257b(0x211)]();},renderApplicable=(_0x40005b,_0x3ceff0)=>{const _0x339c6d=a4_0x515886;let _0x8b86f6='';return _0x40005b['forEach']((_0x57357b,_0x1e4bb0)=>{const _0x35027e=a4_0x5347;if(_0x1e4bb0!==0x0)_0x8b86f6+='|';if(_0x57357b[_0x35027e(0x1c5)]===_0x35027e(0x1f2)){_0x8b86f6+=0x1;return;}else{if(_0x57357b[_0x35027e(0x1c5)]===_0x35027e(0x20b)){_0x8b86f6+=0x2;return;}else{if(_0x57357b[_0x35027e(0x1c5)]===_0x35027e(0x231)){_0x8b86f6+='(',_0x57357b[_0x35027e(0x231)][_0x35027e(0x1ee)]((_0x3a3ba5,_0x5bd86a)=>{const _0x41e099=_0x35027e;_0x8b86f6+=getGroupIndex(_0x3a3ba5[_0x41e099(0x1c5)],_0x3ceff0);if(_0x5bd86a!==_0x57357b['except'][_0x41e099(0x1f7)]-0x1)_0x8b86f6+='-';}),_0x8b86f6+=')';return;}else _0x8b86f6+=getGroupIndex(_0x57357b[_0x35027e(0x1c5)],_0x3ceff0);}}}),_0x8b86f6[_0x339c6d(0x211)]();},getKeywords=_0x22a351=>{const _0x2a4d53=a4_0x515886,_0x40a1be=/\(([^)]+)\)/g;let _0x52bef9=spliter(_0x22a351,'|');return _0x52bef9=_0x52bef9[_0x2a4d53(0x1fc)](_0x90bf8=>{const _0x2cfa41=_0x2a4d53;return _0x40a1be[_0x2cfa41(0x1fe)](_0x90bf8)?_0x90bf8[_0x2cfa41(0x20e)](_0x40a1be)[_0x2cfa41(0x1fc)](_0x43830e=>spliter(_0x43830e[_0x2cfa41(0x1fb)](/[()]/g,''),'-')):_0x90bf8;}),_0x52bef9;},getApplicable=async _0x88acc8=>{const _0x3f1401=a4_0x515886;let _0x5cd66c=await getGroups(),_0xca393f=[],_0x13a7ee=spliter(_0x88acc8,'|');const _0x299988=/\(([^)]+)\)/g;for await(let _0x19237e of _0x13a7ee){if(_0x299988[_0x3f1401(0x1fe)](_0x19237e)){let _0x3de3b8=spliter(_0x19237e[_0x3f1401(0x1fb)](/[()]/g,''),'-');_0x3de3b8=_0x3de3b8['filter'](_0x1aec6d=>_0x1aec6d!=0x1||_0x1aec6d!=0x2)[_0x3f1401(0x1fc)](_0x2f5d2b=>({'name':_0x5cd66c[parseInt(_0x2f5d2b)-0x3][_0x3f1401(0x206)],'chatid':_0x5cd66c[parseInt(_0x2f5d2b)-0x3][_0x3f1401(0x1c5)]})),_0xca393f[_0x3f1401(0x1d9)]({'name':'جميع\x20القروبات\x20باستثناء\x20'+_0x3de3b8[_0x3f1401(0x1f7)]+_0x3f1401(0x1e4),'chatid':_0x3f1401(0x231),'except':_0x3de3b8});}else{_0x19237e=parseInt(_0x19237e);if(!Number[_0x3f1401(0x1fa)](_0x19237e))break;if(_0x19237e==0x1)_0xca393f[_0x3f1401(0x1d9)]({'name':'الرسائل\x20الخاصة','chatid':'private'});else{if(_0x19237e==0x2)_0xca393f[_0x3f1401(0x1d9)]({'name':_0x3f1401(0x213),'chatid':_0x3f1401(0x20b)});else{let _0x2c34f9=_0x19237e-0x3;_0xca393f[_0x3f1401(0x1d9)](_0x5cd66c[_0x2c34f9]);}}}}let _0x11fbc5=_0xca393f[_0x3f1401(0x1eb)](_0x1bfdcd=>_0x1bfdcd[_0x3f1401(0x1c5)]==_0x3f1401(0x20b));return _0x11fbc5&&(_0xca393f=_0xca393f[_0x3f1401(0x209)](_0x254112=>!_0x254112['chatid'][_0x3f1401(0x1f6)](_0x3f1401(0x1d6)))),_0xca393f;},getGsheet=async _0x492d90=>{const _0x4a9aa0=a4_0x515886,_0x3e17d6=await getAllSheets();let _0x404c15=_0x3e17d6['some'](_0x1f8107=>_0x1f8107['sheetName']==_0x492d90);if(!_0x404c15){let _0x558b08=await duplicateSheet(_0x492d90);return _0x558b08;}let _0x152191=_0x3e17d6[_0x4a9aa0(0x209)](_0x5595f1=>_0x5595f1['sheetName']==_0x492d90);return _0x152191[0x0];};const processSync=async _0x4dde29=>{const _0x2a71bc=a4_0x515886;if(_0x4dde29['length']<0x1)return;await initConditions();for await(let _0x11daac of _0x4dde29){_0x11daac['keywords']=getKeywords(_0x11daac['keywords']),_0x11daac[_0x2a71bc(0x22e)]=getKeywords(_0x11daac[_0x2a71bc(0x22e)]),_0x11daac[_0x2a71bc(0x1e5)]=await getApplicable(_0x11daac[_0x2a71bc(0x1e5)]),_0x11daac[_0x2a71bc(0x1bd)]=await getGsheet(_0x11daac[_0x2a71bc(0x1bd)]),await addCondition(_0x11daac);}},controlmsgHandler=async _0x26e4b4=>{const _0xcc4393=a4_0x515886,_0x338fe3=async _0x5d26d6=>{const _0x2530bd=a4_0x5347;service=0x0,await _0x26e4b4[_0x2530bd(0x1de)](''+(_0x5d26d6?_0x5d26d6:_0x2530bd(0x220))),newCondition={},await client[_0x2530bd(0x224)](settings[_0x2530bd(0x236)],menu);};await Sleep(0x1f4);_0x26e4b4[_0xcc4393(0x201)]==_0xcc4393(0x212)&&(_0x26e4b4[_0xcc4393(0x1e7)]=EngishNumbers(_0x26e4b4[_0xcc4393(0x1e7)],!![]));if(_0x26e4b4['body']==_0xcc4393(0x220)||_0x26e4b4[_0xcc4393(0x1e7)]==_0xcc4393(0x1d4))return;if(_0x26e4b4[_0xcc4393(0x1e7)]==_0xcc4393(0x1d3)||_0x26e4b4[_0xcc4393(0x1e7)]==_0xcc4393(0x20f)){await _0x338fe3();return;}if(service==_0xcc4393(0x1f1)){const _0x491cc7=conditions[_0xcc4393(0x1eb)](_0x557b99=>_0x557b99[_0xcc4393(0x206)]==_0x26e4b4[_0xcc4393(0x1e7)]);if(_0x491cc7){await _0x338fe3(_0xcc4393(0x1c0));return;}newCondition[_0xcc4393(0x206)]=_0x26e4b4['body'],await _0x26e4b4[_0xcc4393(0x1de)](_0xcc4393(0x1e8)),service=_0xcc4393(0x227);return;}if(service==_0xcc4393(0x227)){newCondition[_0xcc4393(0x1d1)]=getKeywords(_0x26e4b4[_0xcc4393(0x1e7)]),await _0x26e4b4[_0xcc4393(0x1de)](_0xcc4393(0x1f0)),service='newCondition-blockedkeyword';return;}if(service==_0xcc4393(0x22d)){_0x26e4b4['body']=='0'?newCondition[_0xcc4393(0x22e)]=[]:newCondition[_0xcc4393(0x22e)]=getKeywords(_0x26e4b4[_0xcc4393(0x1e7)]);let _0x4f4ac9=await getGroups(),_0x2f5c54='فضلا\x20قم\x20باختيار\x20جهة\x20السحب\x20🕵\x0aيمكنك\x20اختيار\x20اكثر\x20من\x20جهة\x20مع\x20الفصل\x20بين\x20ارقامها\x20بعلامة\x20*|*\x0aمثال\x201|2\x0a\x0aلاستثناء\x20قروبات\x20من\x20جميع\x20القروبات\x0aادخل\x20ارقام\x20الجروبات\x20المستثناه\x20بين\x20قوسين\x20وبينهم\x20علامة\x20*-*\x0aمثال:\x20(5-6-9)\x0aيمكن\x20ايضا\x20جمعها\x20مع\x20الرسائل\x20الخاصة\x0a1|(9-6-5)\x0a\x0a';_0x2f5c54+='1-الرسائل\x20الخاصة\x0a2-جميع\x20القروبات\x0a';var _0x2b897c=0x2;for await(const _0x10c487 of _0x4f4ac9){_0x2b897c+=0x1,_0x2f5c54+=_0x2b897c+'-'+_0x10c487['name']+'\x0a';}await _0x26e4b4[_0xcc4393(0x1de)](_0x2f5c54),service=_0xcc4393(0x1ef);return;}if(service==_0xcc4393(0x1ef)){newCondition[_0xcc4393(0x1e5)]=await getApplicable(_0x26e4b4[_0xcc4393(0x1e7)]);const _0x503383=await getAllSheets();let _0x42076c=_0xcc4393(0x1c4);_0x42076c+=_0xcc4393(0x1ff);var _0x2b897c=0x1;for await(const _0x5d8d92 of _0x503383){_0x2b897c+=0x1,_0x42076c+=_0x2b897c+'-'+_0x5d8d92['sheetName']+'\x0a';}await _0x26e4b4[_0xcc4393(0x1de)](_0x42076c),service='newCondition-gsheet';return;}if(service=='newCondition-gsheet'){const _0x56b63b=await getAllSheets();let _0x310cec={};_0x2b897c=parseInt(_0x26e4b4['body']);if(!Number['isInteger'](_0x2b897c))return;if(_0x2b897c==0x1)try{_0x310cec=await duplicateSheet(newCondition['name']);}catch(_0x4ae72b){await _0x338fe3(_0xcc4393(0x1ea)),terminal[_0xcc4393(0x200)]('[ERROR!]\x20Google\x20Sheets:'+_0x4ae72b);return;}else{let _0x1dfeb5=_0x2b897c-0x2;_0x310cec=_0x56b63b[_0x1dfeb5];}newCondition[_0xcc4393(0x1bd)]=_0x310cec,await _0x26e4b4[_0xcc4393(0x1de)](_0xcc4393(0x1cd)),service=_0xcc4393(0x1d8);return;}if(service==_0xcc4393(0x1d8)){_0x26e4b4[_0xcc4393(0x1e7)]=='0'?newCondition[_0xcc4393(0x1e0)]=![]:newCondition[_0xcc4393(0x1e0)]=_0x26e4b4[_0xcc4393(0x1e7)];await _0x26e4b4[_0xcc4393(0x1de)](_0xcc4393(0x1cc)),service=_0xcc4393(0x1f4);return;}if(service==_0xcc4393(0x1f4)){_0x26e4b4['body']=='0'?newCondition[_0xcc4393(0x1de)]=![]:newCondition['reply']=_0x26e4b4[_0xcc4393(0x1e7)];await addCondition(newCondition);const _0x5c5c80=newCondition[_0xcc4393(0x1e5)][_0xcc4393(0x1fc)](_0x101c05=>_0x101c05[_0xcc4393(0x206)])['join']();await _0x26e4b4[_0xcc4393(0x1de)](_0xcc4393(0x1cf)+newCondition['name']+_0xcc4393(0x1cb)+renderKeywords(newCondition[_0xcc4393(0x1d1)])+'*\x0aالكلمات\x20المعطِلةُ:\x20*'+(newCondition[_0xcc4393(0x22e)][_0xcc4393(0x1f7)]>0x0?renderKeywords(newCondition[_0xcc4393(0x22e)]):'بدون')+_0xcc4393(0x230)+_0x5c5c80+_0xcc4393(0x1ca)+newCondition[_0xcc4393(0x1bd)][_0xcc4393(0x22f)]+_0xcc4393(0x218)+(newCondition[_0xcc4393(0x1e0)]?newCondition['replyprivate']:'*بدون\x20رد*')+_0xcc4393(0x1e1)+(newCondition[_0xcc4393(0x1de)]?newCondition['reply']:_0xcc4393(0x1fd))),await client[_0xcc4393(0x224)](settings['GroupID'],menu),global[_0xcc4393(0x223)]=getConditions(),newCondition={},service=0x0;}if(service=='deleteCondition-name'){let _0x3bb4c8=parseInt(_0x26e4b4[_0xcc4393(0x1e7)]);if(!Number[_0xcc4393(0x1fa)](_0x3bb4c8))return;if(_0x3bb4c8>=conditions[_0xcc4393(0x1f7)]+0x1){await _0x338fe3(_0xcc4393(0x1c8));return;}_0x3bb4c8=_0x3bb4c8-0x1;const _0x34a0b4=conditions[_0x3bb4c8];await deleteCondition(_0x34a0b4[_0xcc4393(0x206)]),global['conditions']=getConditions(),await _0x26e4b4[_0xcc4393(0x1de)](_0xcc4393(0x1c9)),await client[_0xcc4393(0x224)](settings[_0xcc4393(0x236)],menu),service=0x0;return;}if(service=='Googlecodes-sheets'){const _0x534799=getDriveID();let _0x598116='';if(_0x26e4b4['body']!='0'){_0x26e4b4[_0xcc4393(0x1e7)][_0xcc4393(0x1f6)](_0xcc4393(0x1c2))?_0x598116=getLongestText(_0x26e4b4[_0xcc4393(0x1e7)][_0xcc4393(0x222)]('/')):_0x598116=_0x26e4b4[_0xcc4393(0x1e7)];try{await setSheetID(_0x598116),await Gsheet[_0xcc4393(0x21e)](),await _0x26e4b4[_0xcc4393(0x1de)]('تم\x20اضافة\x20الكود\x20بنجاح\x20🥳\x0a'+_0x598116);}catch(_0x20a333){terminal[_0xcc4393(0x200)](_0xcc4393(0x1d5)),await _0x26e4b4[_0xcc4393(0x1de)](_0xcc4393(0x1db)+_0x598116);}}await _0x26e4b4[_0xcc4393(0x1de)](_0xcc4393(0x204)+(_0x534799!=''?_0x534799:_0xcc4393(0x226))+_0xcc4393(0x1d7)),service=_0xcc4393(0x20c);return;}if(service==_0xcc4393(0x20c)){let _0x3fa1d2='';_0x26e4b4['body']!='0'&&(_0x26e4b4['body'][_0xcc4393(0x1f6)](_0xcc4393(0x21b))?_0x3fa1d2=getLongestText(_0x26e4b4[_0xcc4393(0x1e7)][_0xcc4393(0x222)]('/')):_0x3fa1d2=_0x26e4b4[_0xcc4393(0x1e7)],await setDriveID(_0x3fa1d2),await _0x26e4b4[_0xcc4393(0x1de)](_0xcc4393(0x234)+_0x3fa1d2));await client['sendMessage'](settings[_0xcc4393(0x236)],menu),service=0x0;return;}switch(_0x26e4b4[_0xcc4393(0x1e7)]){case _0xcc4393(0x233):case _0xcc4393(0x22b):await _0x26e4b4['reply'](menu),service=0x0;return;case'1':service=_0xcc4393(0x1f1),await _0x26e4b4[_0xcc4393(0x1de)](_0xcc4393(0x208));return;break;case'2':service=_0xcc4393(0x225);if(conditions[_0xcc4393(0x1f7)]===0x0)await _0x338fe3(_0xcc4393(0x1c3));else{let _0x9b6543=_0xcc4393(0x21d);var _0x2b897c=0x0;for await(const _0x5a72d9 of conditions){_0x2b897c+=0x1,_0x9b6543+=_0x2b897c+'-'+_0x5a72d9['name']+'\x0a';}await _0x26e4b4[_0xcc4393(0x1de)](_0x9b6543);}return;break;case'3':service=0x0;if(conditions['length']===0x0)await _0x338fe3(_0xcc4393(0x1ed));else{let _0x3a3d7b=_0xcc4393(0x1d0);for await(const _0x13897d of conditions){let _0x4025e0=_0x13897d[_0xcc4393(0x1e5)][_0xcc4393(0x1fc)](_0x1a983a=>_0x1a983a[_0xcc4393(0x206)])[_0xcc4393(0x1e2)]();_0x3a3d7b+=_0xcc4393(0x232)+_0x13897d[_0xcc4393(0x206)]+_0xcc4393(0x1cb)+renderKeywords(_0x13897d['keywords'])+_0xcc4393(0x1f8)+(_0x13897d[_0xcc4393(0x22e)][_0xcc4393(0x1f7)]>0x0?renderKeywords(_0x13897d[_0xcc4393(0x22e)]):_0xcc4393(0x1e3))+'*\x0aجهة\x20السحب:\x20*'+_0x4025e0+_0xcc4393(0x1ca)+_0x13897d[_0xcc4393(0x1bd)][_0xcc4393(0x22f)]+_0xcc4393(0x218)+(_0x13897d[_0xcc4393(0x1e0)]?_0x13897d['replyprivate']:_0xcc4393(0x1fd))+'\x0aالرد\x20في\x20القروبات:\x0a'+(_0x13897d[_0xcc4393(0x1de)]?_0x13897d[_0xcc4393(0x1de)]:_0xcc4393(0x1fd));}await _0x26e4b4[_0xcc4393(0x1de)](_0x3a3d7b),await _0x26e4b4['reply'](menu);}return;case'4':const _0x51b344=getSheetID();await _0x26e4b4[_0xcc4393(0x1de)](_0xcc4393(0x1da)+(_0x51b344!=''?_0x51b344:_0xcc4393(0x226))+_0xcc4393(0x1d7)),service=_0xcc4393(0x235);return;case'5':service=0x0;const _0x4f0ce8=await getAllSheets(!![]);let _0x6e4a4c=_0x4f0ce8[_0xcc4393(0x1eb)](_0x275684=>_0x275684[_0xcc4393(0x22f)]==_0xcc4393(0x21a));if(_0x6e4a4c){await _0x26e4b4['reply'](_0xcc4393(0x20a)),terminal['stay']('SYNC...',_0xcc4393(0x215));let _0x38dafe=global[_0xcc4393(0x22a)][_0xcc4393(0x21f)]['CONTROL'];await _0x38dafe[_0xcc4393(0x1f5)](_0xcc4393(0x203));let _0x199fc3=[];for(let _0x5d3ecd=0x5;_0x5d3ecd<0x64;_0x5d3ecd++){let _0x55dbbe={'name':String(_0x38dafe[_0xcc4393(0x1ce)]('A'+_0x5d3ecd)['value']),'keywords':String(_0x38dafe[_0xcc4393(0x1ce)]('B'+_0x5d3ecd)[_0xcc4393(0x1ec)]),'blockedkeywords':String(_0x38dafe[_0xcc4393(0x1ce)]('C'+_0x5d3ecd)[_0xcc4393(0x1ec)])==_0xcc4393(0x1c6)?'':String(_0x38dafe[_0xcc4393(0x1ce)]('C'+_0x5d3ecd)[_0xcc4393(0x1ec)]),'applicable':String(_0x38dafe['getCellByA1']('D'+_0x5d3ecd)[_0xcc4393(0x1ec)]),'gsheet':String(_0x38dafe[_0xcc4393(0x1ce)]('E'+_0x5d3ecd)['value']),'replyprivate':_0x38dafe[_0xcc4393(0x1ce)]('F'+_0x5d3ecd)[_0xcc4393(0x1ec)]===null?![]:String(_0x38dafe[_0xcc4393(0x1ce)]('F'+_0x5d3ecd)[_0xcc4393(0x1ec)]),'reply':_0x38dafe[_0xcc4393(0x1ce)]('G'+_0x5d3ecd)[_0xcc4393(0x1ec)]===null?![]:String(_0x38dafe[_0xcc4393(0x1ce)]('G'+_0x5d3ecd)['value'])};if(_0x55dbbe[_0xcc4393(0x1d1)]=='null')continue;_0x199fc3[_0xcc4393(0x1d9)](_0x55dbbe);}let _0x31d0f6=await getGroups(!![]);await _0x38dafe[_0xcc4393(0x1f5)]('Y1:Z');let _0x550123=0x0;for await(const _0x8f698e of _0x31d0f6){_0x550123+=0x1,_0x38dafe[_0xcc4393(0x207)][_0xcc4393(0x1ce)]('Y'+(_0x550123+0x1))[_0xcc4393(0x1ec)]=_0x8f698e[_0xcc4393(0x206)],_0x38dafe[_0xcc4393(0x207)][_0xcc4393(0x1ce)]('Z'+(_0x550123+0x1))['value']=_0x550123;}try{await processSync(_0x199fc3),global['conditions']=getConditions(),await _0x26e4b4[_0xcc4393(0x1de)](_0xcc4393(0x217)),terminal[_0xcc4393(0x1f3)]();}catch(_0x260223){await _0x26e4b4[_0xcc4393(0x1de)]('خطأ\x20اثناء\x20المزامنة\x20😢'),terminal[_0xcc4393(0x200)](_0xcc4393(0x1be)+_0x260223);}}else{terminal[_0xcc4393(0x1dd)](_0xcc4393(0x219),_0xcc4393(0x215));try{let _0x548835=await getGroups(),_0x457402=await createControlSheet(_0x548835);for await(const _0x245625 of global[_0xcc4393(0x223)]){values=[_0x245625['name'],renderKeywords(_0x245625[_0xcc4393(0x1d1)]),renderKeywords(_0x245625[_0xcc4393(0x22e)]),renderApplicable(_0x245625[_0xcc4393(0x1e5)],_0x548835),_0x245625[_0xcc4393(0x1bd)][_0xcc4393(0x22f)],''+(_0x245625['replyprivate']?_0x245625[_0xcc4393(0x1e0)]:''),''+(_0x245625['reply']?_0x245625[_0xcc4393(0x1de)]:'')],await _0x457402['sheet'][_0xcc4393(0x1e9)](values);}await _0x26e4b4[_0xcc4393(0x1de)](_0xcc4393(0x214));}catch(_0x38f706){terminal[_0xcc4393(0x200)](_0xcc4393(0x221)+_0x38f706),await _0x26e4b4['reply']('خطأ\x20😢\x0aلا\x20يمكنني\x20اضافة\x20شيت\x20الكنترول\x0aتأكد\x20من\x20ادخال\x20كافة\x20البيانات\x20و\x20اعد\x20المحاولة');}terminal[_0xcc4393(0x1f3)]();}await _0x26e4b4[_0xcc4393(0x1de)](menu);return;}};function a4_0x22c7(){const _0x11fd52=['newCondition-reply-private','push','تفضل\x20بكتابة\x20كود\x20Google\x20Sheets\x20او\x20رابط\x20الملف\x0aالكود\x20الحالي\x20:\x0a','لا\x20يمكنني\x20الوصول\x20لهذا\x20الشيت\x20الان\x20ولكني\x20حفظت\x20الكود\x20😑\x0a','isArray','stay','reply','438813wBTRvF','replyprivate','\x0aالرد\x20في\x20القروبات:\x0a','join','بدون','\x20قروب','applicable','189VZwIpf','body','فضلا\x20ادخل\x20*الكلمات\x20المفتاحية*\x20مع\x20الفصل\x20بينهم\x20بعلامة\x20*|*\x20✉️🔑\x0aيمكنك\x20ايضا\x20اشتراط\x20توافر\x20اكثر\x20من\x20كلمة\x20مفتاحية\x20بإضافة\x20++\x0aامثلة\x20:\x0aعرض\x20خاص|توفير\x0aعرض\x20خاص\x20++\x20كتب|توفير\x0aيمكن\x20استخدام\x20الكلمات\x20المفتاحية\x20المتقدمة\x20:\x0a(احتاج-ارید)(دکتور-طبیب)(عیون-نظر)|😎','addRow','حدث\x20خطأ\x20في\x20الوصول\x20لجوجل\x20شيتس\x20😣\x0aتاكد\x20ان\x20اسم\x20الشرط\x20الجديد\x20لا\x20يطابق\x20شيت\x20موجود\x20بالفعل','some','value','لا\x20يوجد\x20شروط\x20لعرضها\x20📭','forEach','newCondition-applicable','فضلا\x20ادخل\x20*الكلمات\x20المعطِلة*\x20مع\x20الفصل\x20بينهم\x20بعلامة\x20*|*\x20😃\x0aاذا\x20كنت\x20لا\x20تريد\x20كلمات\x20معطِلة\x20ادخل\x20رقم\x200\x20😎\x0aهذه\x20الكلمات\x20اذا\x20توافرت\x20سيتم\x20تجاهل\x20الرسالة\x20حتى\x20وان\x20توفرت\x20بها\x20الكلمات\x20المفتاحية\x0aيمكنك\x20ايضا\x20اشتراط\x20جمع\x20اكثر\x20من\x20كلمة\x20معطلة\x20بإضافة\x20++\x0aامثلة\x20:\x0aمطلوب|محتاج|نحتاج|احتاج\x0aمطلوب\x20++\x20كتب|محتاج\x0aيمكن\x20استخدام\x20الكلمات\x20المفتاحية\x20المتقدمة\x20:\x0a(احتاج-ارید)(كتاب-كتب)','newCondition-name','private','reset','newCondition-reply-group','loadCells','includes','length','*\x0aالكلمات\x20المعطِلةُ:\x20*','730kGFRRd','isInteger','replace','map','*بدون\x20رد*','test','1-شيت\x20جديد\x0a','red','type','getChats','A5:G100','تفضل\x20بكتابة\x20كود\x20Google\x20Drive\x20او\x20رابط\x20المجلد\x0aالكود\x20الحالي\x20:\x0a','1111761NpSJhS','name','sheet','مرحباً\x20بك\x20في\x20خدمة\x20انشاء\x20شرط\x20جديد\x20لسحب\x20الرسائل\x0aفضلا\x20ادخل\x20اسم\x20الشرط\x20الجديد\x20🖋️\x0a\x0aللإلغاء\x20❌\x20ادخل\x20كلمة\x20الغاء','filter','جارٍ\x20المزامنة\x20🔄','allgroups','Googlecodes-drive','101398mODtdF','match','الغاء','isGroup','trim','chat','جميع\x20القروبات','تم\x20اضافة\x20شيت\x20الكنترول\x20لاول\x20مرة\x20يمكنك\x20الان\x20المزامنة','blue','194egVhZV','تمت\x20المزامنة\x20بنجاح\x20✅','*\x0aالرد\x20في\x20الخاص:\x0a','SYNC...','CONTROL','/folders/','../util/misc','فضلا\x20قم\x20باختيار\x20الشرط\x20المطلوب\x20حذفه\x20📋\x0a\x0a','load','sheetsByTitle','تم\x20الالغاء\x20بنجاح\x20✅','[ERROR!]\x20Can\x27t\x20Create\x20Control\x20Sheet:','split','conditions','sendMessage','deleteCondition-name','لا\x20يوجد','newCondition-keyword','الرسائل\x20الخاصة','unshift','GSpreadsheet','قائمة','24EDYWln','newCondition-blockedkeyword','blockedkeywords','sheetName','*\x0aجهة\x20السحب:\x20*','except','\x0a\x0aاسم\x20الشرط:\x20*','خدمة','تم\x20اضافة\x20الكود\x20بنجاح\x20🥳\x0a','Googlecodes-sheets','GroupID','../util/gsheets','1428720DVKjVU','4208LBuwka','exports','gsheet','[ERROR!]\x20Syncing\x20with\x20G\x20Sheets:','../util/terminal','هذا\x20الشرط\x20موجود\x20مسبقا\x20حاول\x20مرة\x20اخرى\x20باسم\x20مختلف😐','1047450vnjXsm','/d/','لا\x20يوجد\x20شروط\x20لحذفها\x20📭','فضلا\x20قم\x20باختيار\x20شيت\x20حفظ\x20الرسائل\x20💾\x0a\x0a','chatid','null','135072DlFzsK','رقم\x20غير\x20صحيح\x20حاول\x20مرة\x20اخرى\x20😐','تم\x20حذف\x20الشرط\x20بنجاح\x20🥳','*\x0aجوجل\x20شيت:\x20*','*\x0aالكلمات\x20المفتاحية:\x20*','فضلا\x20ادخل\x20الرد\x20الذي\x20سيرسلة\x20البرنامج\x20على\x20الرسائل\x20التي\x20تطبق\x20هذا\x20الشرط\x20🧐\x0a*في\x20القروبات*\x0aاذا\x20كنت\x20لا\x20تريد\x20رد\x20ادخل\x20رقم\x200\x20🤐','فضلا\x20ادخل\x20الرد\x20الذي\x20سيرسلة\x20البرنامج\x20على\x20الرسائل\x20التي\x20تطبق\x20هذا\x20الشرط\x20🧐\x0a*في\x20الخاص*\x0aاذا\x20كنت\x20لا\x20تريد\x20رد\x20ادخل\x20رقم\x200\x20🤐','getCellByA1','تم\x20انشاء\x20الشرط\x20بنجاح\x20🥳\x0a\x0aالاسم:\x20*','📚\x20*كل\x20الشروط*\x20📚','keywords','_serialized','إلغاء','يمكنك\x20ارسال\x20رسائل\x20نصية\x20فقط','[ERROR!]\x20Can\x27t\x20Access\x20This\x20Google\x20Sheet','@g.us','\x0aادخل\x200\x20لابقائه\x20بدون\x20تغيير'];a4_0x22c7=function(){return _0x11fd52;};return a4_0x22c7();}module[a4_0x515886(0x1bc)]={'controlmsgHandler':controlmsgHandler,'renderKeywords':renderKeywords};
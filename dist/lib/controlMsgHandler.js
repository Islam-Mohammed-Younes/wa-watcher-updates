function a4_0x18d3(_0x8d7e17,_0x283b8a){const _0x1e8b42=a4_0x1e8b();return a4_0x18d3=function(_0x18d3f2,_0xe892b9){_0x18d3f2=_0x18d3f2-0xcf;let _0x102240=_0x1e8b42[_0x18d3f2];return _0x102240;},a4_0x18d3(_0x8d7e17,_0x283b8a);}const a4_0x34a53e=a4_0x18d3;(function(_0x36abdc,_0x7417cd){const _0x45d0db=a4_0x18d3,_0x39c3e2=_0x36abdc();while(!![]){try{const _0x5c052e=-parseInt(_0x45d0db(0xd7))/0x1+parseInt(_0x45d0db(0xd1))/0x2+-parseInt(_0x45d0db(0xef))/0x3*(-parseInt(_0x45d0db(0x145))/0x4)+parseInt(_0x45d0db(0xcf))/0x5+parseInt(_0x45d0db(0xd3))/0x6+parseInt(_0x45d0db(0x10a))/0x7*(parseInt(_0x45d0db(0x138))/0x8)+-parseInt(_0x45d0db(0x13f))/0x9*(parseInt(_0x45d0db(0x12a))/0xa);if(_0x5c052e===_0x7417cd)break;else _0x39c3e2['push'](_0x39c3e2['shift']());}catch(_0x510834){_0x39c3e2['push'](_0x39c3e2['shift']());}}}(a4_0x1e8b,0x23133));const {getSheetID,setSheetID,getDriveID,setDriveID,getConditions,addCondition,deleteCondition,initConditions}=require('../util/files'),{getAllSheets,duplicateSheet,createControlSheet}=require('../util/gsheets'),{EngishNumbers,Sleep,getLongestText,getGroups}=require('../util/misc'),terminal=require(a4_0x34a53e(0x131)),spliter=(_0x74d30c,_0x1dd39c)=>{const _0x288db3=a4_0x34a53e;return _0x74d30c[_0x288db3(0x140)](_0x1dd39c)[_0x288db3(0x13a)](_0x7672d1=>_0x7672d1['trim']())[_0x288db3(0x110)](_0x289a28=>_0x289a28!=='');};let getGroupIndex=(_0x4aa4c6,_0x41b48f)=>{const _0x43ee53=a4_0x34a53e;let _0x58647c=_0x41b48f[_0x43ee53(0xec)](_0x2b2b48=>_0x2b2b48[_0x43ee53(0x134)]===_0x4aa4c6);return _0x58647c+0x1;},renderKeywords=_0x14194a=>{const _0x59d9c3=a4_0x34a53e;let _0x35cd45='';return _0x14194a[_0x59d9c3(0xfb)]((_0x57af19,_0x14fe10)=>{const _0x336174=_0x59d9c3;if(_0x14fe10!==0x0)_0x35cd45+='|';Array[_0x336174(0xd2)](_0x57af19)?_0x57af19['forEach'](_0x7363b4=>{_0x35cd45+='('+_0x7363b4+')';}):_0x35cd45+=_0x57af19;}),_0x35cd45['replace'](/,/g,'-')[_0x59d9c3(0x121)]();},renderApplicable=(_0x7a9174,_0x23b935)=>{const _0x9b3e76=a4_0x34a53e;let _0x57efe7='';return _0x7a9174['forEach']((_0x5b3c71,_0x3c0a64)=>{const _0x3b4030=a4_0x18d3;if(_0x3c0a64!==0x0)_0x57efe7+='|';if(_0x5b3c71['chatid']===_0x3b4030(0x111)){_0x57efe7+=0x1;return;}else{if(_0x5b3c71[_0x3b4030(0x134)]==='allgroups'){_0x57efe7+=0x2;return;}else{if(_0x5b3c71[_0x3b4030(0x134)]==='except'){_0x57efe7+='(',_0x5b3c71[_0x3b4030(0xf4)][_0x3b4030(0xfb)]((_0x5af386,_0x5cd517)=>{const _0x28b654=_0x3b4030;_0x57efe7+=getGroupIndex(_0x5af386[_0x28b654(0x134)],_0x23b935);if(_0x5cd517!==_0x5b3c71[_0x28b654(0xf4)][_0x28b654(0xd9)]-0x1)_0x57efe7+='-';}),_0x57efe7+=')';return;}else{let _0x490e8b=getGroupIndex(_0x5b3c71[_0x3b4030(0x134)],_0x23b935);_0x490e8b==0x0?_0x57efe7+=0x2:_0x57efe7+=_0x490e8b;}}}}),_0x57efe7[_0x9b3e76(0x121)]();},getKeywords=_0x35d812=>{const _0x45ca11=/\(([^)]+)\)/g;let _0x105e1b=spliter(_0x35d812,'|');return _0x105e1b=_0x105e1b['map'](_0x490815=>{const _0x1d7437=a4_0x18d3;return _0x45ca11[_0x1d7437(0xe6)](_0x490815)?_0x490815[_0x1d7437(0x13c)](_0x45ca11)[_0x1d7437(0x13a)](_0x47d05d=>spliter(_0x47d05d['replace'](/[()]/g,''),'-')):_0x490815;}),_0x105e1b;},getApplicable=async _0x52f546=>{const _0x5f186a=a4_0x34a53e;let _0x184af9=await getGroups(),_0x4d4fc2=[],_0x449dd0=spliter(_0x52f546,'|');const _0x2eee72=/\(([^)]+)\)/g;for await(let _0x33d12f of _0x449dd0){if(_0x2eee72['test'](_0x33d12f)){let _0x1d0b70=spliter(_0x33d12f[_0x5f186a(0xf2)](/[()]/g,''),'-');_0x1d0b70=_0x1d0b70[_0x5f186a(0x110)](_0x3bf489=>_0x3bf489!=0x1||_0x3bf489!=0x2)[_0x5f186a(0x13a)](_0x1e4fb0=>({'name':_0x184af9[parseInt(_0x1e4fb0)-0x3][_0x5f186a(0x128)],'chatid':_0x184af9[parseInt(_0x1e4fb0)-0x3][_0x5f186a(0x134)]})),_0x4d4fc2['push']({'name':_0x5f186a(0x136)+_0x1d0b70[_0x5f186a(0xd9)]+_0x5f186a(0x105),'chatid':'except','except':_0x1d0b70});}else{_0x33d12f=parseInt(_0x33d12f);if(!Number['isInteger'](_0x33d12f))continue;if(_0x33d12f==0x1)_0x4d4fc2[_0x5f186a(0x117)]({'name':_0x5f186a(0xdf),'chatid':'private'});else{if(_0x33d12f==0x2)_0x4d4fc2['push']({'name':_0x5f186a(0x115),'chatid':_0x5f186a(0xd8)});else{let _0x42f65a=_0x33d12f-0x3;_0x4d4fc2['push'](_0x184af9[_0x42f65a]);}}}}let _0x1f5219=_0x4d4fc2[_0x5f186a(0xe4)](_0x5f5cbd=>_0x5f5cbd['chatid']==_0x5f186a(0xd8));return _0x1f5219&&(_0x4d4fc2=_0x4d4fc2['filter'](_0x4ae562=>!_0x4ae562[_0x5f186a(0x134)][_0x5f186a(0xe8)]('@g.us'))),_0x4d4fc2;},getGsheet=async _0x454bdf=>{const _0x22cadf=a4_0x34a53e,_0x1914af=await getAllSheets();let _0x37693d=_0x1914af[_0x22cadf(0xe4)](_0x3ebebb=>_0x3ebebb[_0x22cadf(0xdb)]==_0x454bdf);if(!_0x37693d){let _0x1e5c7b=await duplicateSheet(_0x454bdf);return _0x1e5c7b;}let _0x39d6a3=_0x1914af[_0x22cadf(0x110)](_0x4e4f76=>_0x4e4f76[_0x22cadf(0xdb)]==_0x454bdf);return _0x39d6a3[0x0];};function a4_0x1e8b(){const _0x7a234e=['push','فضلا\x20ادخل\x20*الكلمات\x20المعطِلة*\x20مع\x20الفصل\x20بينهم\x20بعلامة\x20*|*\x20😃\x0aاذا\x20كنت\x20لا\x20تريد\x20كلمات\x20معطِلة\x20ادخل\x20رقم\x200\x20😎\x0aهذه\x20الكلمات\x20اذا\x20توافرت\x20سيتم\x20تجاهل\x20الرسالة\x20حتى\x20وان\x20توفرت\x20بها\x20الكلمات\x20المفتاحية\x0aيمكنك\x20ايضا\x20اشتراط\x20جمع\x20اكثر\x20من\x20كلمة\x20معطلة\x20بإضافة\x20++\x0aامثلة\x20:\x0aمطلوب|محتاج|نحتاج|احتاج\x0aمطلوب\x20++\x20كتب|محتاج\x0aيمكن\x20استخدام\x20الكلمات\x20المفتاحية\x20المتقدمة\x20:\x0a(احتاج-ارید)(كتاب-كتب)','لا\x20يوجد\x20شروط\x20لعرضها\x20📭','*\x0aجوجل\x20شيت:\x20*','Googlecodes-sheets','رقم\x20غير\x20صحيح\x20حاول\x20مرة\x20اخرى\x20😐','📚\x20*كل\x20الشروط*\x20📚','applicable','red','reset','trim','قائمة','تم\x20اضافة\x20شيت\x20الكنترول\x20لاول\x20مرة\x20يمكنك\x20الان\x20المزامنة','خطأ\x20😢\x0aلا\x20يمكنني\x20اضافة\x20شيت\x20الكنترول\x0aتأكد\x20من\x20ادخال\x20كافة\x20البيانات\x20و\x20اعد\x20المحاولة','sheet','getCellByA1','*\x0aالكلمات\x20المفتاحية:\x20*','name','[ERROR!]\x20Can\x27t\x20Access\x20This\x20Google\x20Sheet','2180QFaedx','sheetsByTitle','1-الرسائل\x20الخاصة\x0a2-جميع\x20القروبات\x0a','newCondition-name','\x0a\x0aاسم\x20الشرط:\x20*','GSpreadsheet','blockedkeywords','../util/terminal','load','newCondition-reply-private','chatid','replyprivate','جميع\x20القروبات\x20باستثناء\x20','فضلا\x20قم\x20باختيار\x20الشرط\x20المطلوب\x20حذفه\x20📋\x0a\x0a','40dgyjtk','تفضل\x20بكتابة\x20كود\x20Google\x20Drive\x20او\x20رابط\x20المجلد\x0aالكود\x20الحالي\x20:\x0a','map','value','match','newCondition-applicable','deleteCondition-name','18639eLAtdq','split','loadCells','CONTROL','جارٍ\x20المزامنة\x20🔄','بدون','4ydnBcI','تم\x20الالغاء\x20بنجاح\x20✅','734155KSaQxj','[ERROR!]\x20Google\x20Sheets:','43560cdUygH','isArray','762324qrFGah','addRow','exports','لا\x20يوجد','25013GTPGSO','allgroups','length','\x0aالرد\x20في\x20القروبات:\x0a','sheetName','*\x0aالكلمات\x20المعطِلةُ:\x20*','body','gsheet','الرسائل\x20الخاصة','blue','newCondition-gsheet','فضلا\x20ادخل\x20*الكلمات\x20المفتاحية*\x20مع\x20الفصل\x20بينهم\x20بعلامة\x20*|*\x20✉️🔑\x0aيمكنك\x20ايضا\x20اشتراط\x20توافر\x20اكثر\x20من\x20كلمة\x20مفتاحية\x20بإضافة\x20++\x0aامثلة\x20:\x0aعرض\x20خاص|توفير\x0aعرض\x20خاص\x20++\x20كتب|توفير\x0aيمكن\x20استخدام\x20الكلمات\x20المفتاحية\x20المتقدمة\x20:\x0a(احتاج-ارید)(دکتور-طبیب)(عیون-نظر)|😎','null','some','newCondition-reply-group','test','لا\x20يوجد\x20شروط\x20لحذفها\x20📭','includes','*بدون\x20رد*','en-EG','toLocaleDateString','findIndex','newCondition-keyword','تم\x20اضافة\x20الكود\x20بنجاح\x20🥳\x0a','830814tFOoTq','تم\x20حذف\x20الشرط\x20بنجاح\x20🥳','حدث\x20خطأ\x20في\x20الوصول\x20لجوجل\x20شيتس\x20😣\x0aتاكد\x20ان\x20اسم\x20الشرط\x20الجديد\x20لا\x20يطابق\x20شيت\x20موجود\x20بالفعل','replace','\x0aادخل\x200\x20لابقائه\x20بدون\x20تغيير','except','type','*\x0aالرد\x20في\x20الخاص:\x0a','Googlecodes-drive','إلغاء','*\x0aجهة\x20السحب:\x20*','لا\x20يمكنني\x20الوصول\x20لهذا\x20الشيت\x20الان\x20ولكني\x20حفظت\x20الكود\x20😑\x0a','forEach','تم\x20انشاء\x20الشرط\x20بنجاح\x20🥳\x0a\x0aالاسم:\x20*','Y1:Z','A1:G100','GroupID','reply','مرحباً\x20بك\x20في\x20خدمة\x20انشاء\x20شرط\x20جديد\x20لسحب\x20الرسائل\x0aفضلا\x20ادخل\x20اسم\x20الشرط\x20الجديد\x20🖋️\x0a\x0aللإلغاء\x20❌\x20ادخل\x20كلمة\x20الغاء','/folders/','en-GB','conditions','\x20قروب','join','newCondition-blockedkeyword','SYNC...','isInteger','66577UNidBt','خدمة','تمت\x20المزامنة\x20بنجاح\x20✅','saveUpdatedCells','sendMessage','هذا\x20الشرط\x20موجود\x20مسبقا\x20حاول\x20مرة\x20اخرى\x20باسم\x20مختلف😐','filter','private','الغاء','keywords','فضلا\x20ادخل\x20الرد\x20الذي\x20سيرسلة\x20البرنامج\x20على\x20الرسائل\x20التي\x20تطبق\x20هذا\x20الشرط\x20🧐\x0a*في\x20القروبات*\x0aاذا\x20كنت\x20لا\x20تريد\x20رد\x20ادخل\x20رقم\x200\x20🤐','جميع\x20القروبات','stay'];a4_0x1e8b=function(){return _0x7a234e;};return a4_0x1e8b();}const processSync=async _0x2fcff0=>{const _0x1d3d72=a4_0x34a53e;if(_0x2fcff0[_0x1d3d72(0xd9)]<0x1)return;await initConditions();for await(let _0x5db1d4 of _0x2fcff0){_0x5db1d4[_0x1d3d72(0x113)]=getKeywords(_0x5db1d4['keywords']),_0x5db1d4['blockedkeywords']=getKeywords(_0x5db1d4[_0x1d3d72(0x130)]),_0x5db1d4['applicable']=await getApplicable(_0x5db1d4[_0x1d3d72(0x11e)]),_0x5db1d4[_0x1d3d72(0xde)]=await getGsheet(_0x5db1d4['gsheet']),await addCondition(_0x5db1d4);}},controlmsgHandler=async _0x243796=>{const _0x4830c3=a4_0x34a53e,_0x21429a=async _0x221e41=>{const _0xa0258=a4_0x18d3;service=0x0,await _0x243796[_0xa0258(0x100)](''+(_0x221e41?_0x221e41:_0xa0258(0x146))),newCondition={},await client[_0xa0258(0x10e)](settings['GroupID'],menu);};await Sleep(0x1f4);_0x243796[_0x4830c3(0xf5)]=='chat'&&(_0x243796[_0x4830c3(0xdd)]=EngishNumbers(_0x243796[_0x4830c3(0xdd)],!![]));if(_0x243796[_0x4830c3(0xdd)]==_0x4830c3(0x146)||_0x243796[_0x4830c3(0xdd)]=='يمكنك\x20ارسال\x20رسائل\x20نصية\x20فقط')return;if(_0x243796[_0x4830c3(0xdd)]==_0x4830c3(0xf8)||_0x243796['body']==_0x4830c3(0x112)){await _0x21429a();return;}if(service=='newCondition-name'){const _0x12a035=conditions[_0x4830c3(0xe4)](_0x1d5b55=>_0x1d5b55[_0x4830c3(0x128)]==_0x243796['body']);if(_0x12a035){await _0x21429a(_0x4830c3(0x10f));return;}newCondition[_0x4830c3(0x128)]=_0x243796['body'],await _0x243796[_0x4830c3(0x100)](_0x4830c3(0xe2)),service=_0x4830c3(0xed);return;}if(service==_0x4830c3(0xed)){newCondition[_0x4830c3(0x113)]=getKeywords(_0x243796[_0x4830c3(0xdd)]),await _0x243796['reply'](_0x4830c3(0x118)),service=_0x4830c3(0x107);return;}if(service==_0x4830c3(0x107)){_0x243796[_0x4830c3(0xdd)]=='0'?newCondition[_0x4830c3(0x130)]=[]:newCondition[_0x4830c3(0x130)]=getKeywords(_0x243796['body']);let _0x4e701c=await getGroups(),_0x40c858='فضلا\x20قم\x20باختيار\x20جهة\x20السحب\x20🕵\x0aيمكنك\x20اختيار\x20اكثر\x20من\x20جهة\x20مع\x20الفصل\x20بين\x20ارقامها\x20بعلامة\x20*|*\x0aمثال\x201|2\x0a\x0aلاستثناء\x20قروبات\x20من\x20جميع\x20القروبات\x0aادخل\x20ارقام\x20الجروبات\x20المستثناه\x20بين\x20قوسين\x20وبينهم\x20علامة\x20*-*\x0aمثال:\x20(5-6-9)\x0aيمكن\x20ايضا\x20جمعها\x20مع\x20الرسائل\x20الخاصة\x0a1|(9-6-5)\x0a\x0a';_0x40c858+=_0x4830c3(0x12c);var _0x2584ad=0x2;for await(const _0x1bd6e3 of _0x4e701c){_0x2584ad+=0x1,_0x40c858+=_0x2584ad+'-'+_0x1bd6e3[_0x4830c3(0x128)]+'\x0a';}await _0x243796['reply'](_0x40c858),service='newCondition-applicable';return;}if(service==_0x4830c3(0x13d)){newCondition['applicable']=await getApplicable(_0x243796[_0x4830c3(0xdd)]);const _0x15dbb4=await getAllSheets();let _0x49051f='فضلا\x20قم\x20باختيار\x20شيت\x20حفظ\x20الرسائل\x20💾\x0a\x0a';_0x49051f+='1-شيت\x20جديد\x0a';var _0x2584ad=0x1;for await(const _0x20d84e of _0x15dbb4){_0x2584ad+=0x1,_0x49051f+=_0x2584ad+'-'+_0x20d84e[_0x4830c3(0xdb)]+'\x0a';}await _0x243796[_0x4830c3(0x100)](_0x49051f),service='newCondition-gsheet';return;}if(service==_0x4830c3(0xe1)){const _0x587dcd=await getAllSheets();let _0x2eede4={};_0x2584ad=parseInt(_0x243796[_0x4830c3(0xdd)]);if(!Number[_0x4830c3(0x109)](_0x2584ad))return;if(_0x2584ad==0x1)try{_0x2eede4=await duplicateSheet(newCondition[_0x4830c3(0x128)]);}catch(_0x5b6579){await _0x21429a(_0x4830c3(0xf1)),terminal[_0x4830c3(0x11f)](_0x4830c3(0xd0)+_0x5b6579);return;}else{let _0x37df09=_0x2584ad-0x2;_0x2eede4=_0x587dcd[_0x37df09];}newCondition[_0x4830c3(0xde)]=_0x2eede4,await _0x243796['reply']('فضلا\x20ادخل\x20الرد\x20الذي\x20سيرسلة\x20البرنامج\x20على\x20الرسائل\x20التي\x20تطبق\x20هذا\x20الشرط\x20🧐\x0a*في\x20الخاص*\x0aاذا\x20كنت\x20لا\x20تريد\x20رد\x20ادخل\x20رقم\x200\x20🤐'),service=_0x4830c3(0x133);return;}if(service==_0x4830c3(0x133)){_0x243796[_0x4830c3(0xdd)]=='0'?newCondition[_0x4830c3(0x135)]=![]:newCondition[_0x4830c3(0x135)]=_0x243796[_0x4830c3(0xdd)];await _0x243796['reply'](_0x4830c3(0x114)),service=_0x4830c3(0xe5);return;}if(service==_0x4830c3(0xe5)){_0x243796[_0x4830c3(0xdd)]=='0'?newCondition[_0x4830c3(0x100)]=![]:newCondition[_0x4830c3(0x100)]=_0x243796['body'];await addCondition(newCondition);const _0x2e60bc=newCondition[_0x4830c3(0x11e)][_0x4830c3(0x13a)](_0x160c54=>_0x160c54[_0x4830c3(0x128)])['join']();await _0x243796[_0x4830c3(0x100)](_0x4830c3(0xfc)+newCondition['name']+_0x4830c3(0x127)+renderKeywords(newCondition[_0x4830c3(0x113)])+_0x4830c3(0xdc)+(newCondition['blockedkeywords']['length']>0x0?renderKeywords(newCondition[_0x4830c3(0x130)]):_0x4830c3(0x144))+_0x4830c3(0xf9)+_0x2e60bc+_0x4830c3(0x11a)+newCondition['gsheet'][_0x4830c3(0xdb)]+'*\x0aالرد\x20في\x20الخاص:\x0a'+(newCondition[_0x4830c3(0x135)]?newCondition[_0x4830c3(0x135)]:_0x4830c3(0xe9))+_0x4830c3(0xda)+(newCondition[_0x4830c3(0x100)]?newCondition[_0x4830c3(0x100)]:_0x4830c3(0xe9))),await client[_0x4830c3(0x10e)](settings[_0x4830c3(0xff)],menu),global[_0x4830c3(0x104)]=getConditions(),newCondition={},service=0x0;}if(service==_0x4830c3(0x13e)){let _0x3bede8=parseInt(_0x243796[_0x4830c3(0xdd)]);if(!Number['isInteger'](_0x3bede8))return;if(_0x3bede8>=conditions['length']+0x1){await _0x21429a(_0x4830c3(0x11c));return;}_0x3bede8=_0x3bede8-0x1;const _0x5d422b=conditions[_0x3bede8];await deleteCondition(_0x5d422b[_0x4830c3(0x128)]),global[_0x4830c3(0x104)]=getConditions(),await _0x243796[_0x4830c3(0x100)](_0x4830c3(0xf0)),await client[_0x4830c3(0x10e)](settings[_0x4830c3(0xff)],menu),service=0x0;return;}if(service==_0x4830c3(0x11b)){const _0x10e5b1=getDriveID();let _0x607bd1='';if(_0x243796['body']!='0'){_0x243796['body']['includes']('/d/')?_0x607bd1=getLongestText(_0x243796[_0x4830c3(0xdd)]['split']('/')):_0x607bd1=_0x243796[_0x4830c3(0xdd)];try{await setSheetID(_0x607bd1),await Gsheet[_0x4830c3(0x132)](),await _0x243796[_0x4830c3(0x100)]('تم\x20اضافة\x20الكود\x20بنجاح\x20🥳\x0a'+_0x607bd1);}catch(_0x4f14f9){terminal['red'](_0x4830c3(0x129)),await _0x243796[_0x4830c3(0x100)](_0x4830c3(0xfa)+_0x607bd1);}}await _0x243796[_0x4830c3(0x100)](_0x4830c3(0x139)+(_0x10e5b1!=''?_0x10e5b1:'لا\x20يوجد')+_0x4830c3(0xf3)),service=_0x4830c3(0xf7);return;}if(service==_0x4830c3(0xf7)){let _0x2f75f3='';_0x243796['body']!='0'&&(_0x243796[_0x4830c3(0xdd)][_0x4830c3(0xe8)](_0x4830c3(0x102))?_0x2f75f3=getLongestText(_0x243796['body'][_0x4830c3(0x140)]('/')):_0x2f75f3=_0x243796['body'],await setDriveID(_0x2f75f3),await _0x243796[_0x4830c3(0x100)](_0x4830c3(0xee)+_0x2f75f3));await client[_0x4830c3(0x10e)](settings[_0x4830c3(0xff)],menu),service=0x0;return;}switch(_0x243796[_0x4830c3(0xdd)]){case _0x4830c3(0x10b):case _0x4830c3(0x122):await _0x243796[_0x4830c3(0x100)](menu),service=0x0;return;case'1':service=_0x4830c3(0x12d),await _0x243796[_0x4830c3(0x100)](_0x4830c3(0x101));return;break;case'2':service=_0x4830c3(0x13e);if(conditions[_0x4830c3(0xd9)]===0x0)await _0x21429a(_0x4830c3(0xe7));else{let _0x4a2f44=_0x4830c3(0x137);var _0x2584ad=0x0;for await(const _0x20baeb of conditions){_0x2584ad+=0x1,_0x4a2f44+=_0x2584ad+'-'+_0x20baeb[_0x4830c3(0x128)]+'\x0a';}await _0x243796[_0x4830c3(0x100)](_0x4a2f44);}return;break;case'3':service=0x0;if(conditions[_0x4830c3(0xd9)]===0x0)await _0x21429a(_0x4830c3(0x119));else{let _0x1218a4=_0x4830c3(0x11d);for await(const _0x59b82c of conditions){let _0x2d4a42=_0x59b82c['applicable']['map'](_0xdd6842=>_0xdd6842[_0x4830c3(0x128)])[_0x4830c3(0x106)]();_0x1218a4+=_0x4830c3(0x12e)+_0x59b82c['name']+'*\x0aالكلمات\x20المفتاحية:\x20*'+renderKeywords(_0x59b82c[_0x4830c3(0x113)])+_0x4830c3(0xdc)+(_0x59b82c[_0x4830c3(0x130)][_0x4830c3(0xd9)]>0x0?renderKeywords(_0x59b82c[_0x4830c3(0x130)]):_0x4830c3(0x144))+'*\x0aجهة\x20السحب:\x20*'+_0x2d4a42+'*\x0aجوجل\x20شيت:\x20*'+_0x59b82c['gsheet'][_0x4830c3(0xdb)]+_0x4830c3(0xf6)+(_0x59b82c[_0x4830c3(0x135)]?_0x59b82c['replyprivate']:_0x4830c3(0xe9))+_0x4830c3(0xda)+(_0x59b82c['reply']?_0x59b82c[_0x4830c3(0x100)]:_0x4830c3(0xe9));}await _0x243796[_0x4830c3(0x100)](_0x1218a4),await _0x243796[_0x4830c3(0x100)](menu);}return;case'4':const _0x5c15d7=getSheetID();await _0x243796['reply']('تفضل\x20بكتابة\x20كود\x20Google\x20Sheets\x20او\x20رابط\x20الملف\x0aالكود\x20الحالي\x20:\x0a'+(_0x5c15d7!=''?_0x5c15d7:_0x4830c3(0xd6))+_0x4830c3(0xf3)),service='Googlecodes-sheets';return;case'5':service=0x0;const _0x1b17a5=await getAllSheets(!![]);let _0x4a5fa7=_0x1b17a5[_0x4830c3(0xe4)](_0x2ef3ad=>_0x2ef3ad['sheetName']==_0x4830c3(0x142));if(_0x4a5fa7){const _0x1a0aed=new Date(),_0x478db8=_0x1a0aed[_0x4830c3(0xeb)](_0x4830c3(0x103))+'\x20'+_0x1a0aed['toLocaleTimeString'](_0x4830c3(0xea));await _0x243796['reply'](_0x4830c3(0x143)),terminal[_0x4830c3(0x116)](_0x4830c3(0x108),_0x4830c3(0xe0));let _0xb8ec90=global[_0x4830c3(0x12f)][_0x4830c3(0x12b)]['CONTROL'];await _0xb8ec90['loadCells'](_0x4830c3(0xfe)),await _0xb8ec90[_0x4830c3(0x141)](_0x4830c3(0xfd));let _0xfa10a2=[];for(let _0x22d6d1=0x5;_0x22d6d1<0x64;_0x22d6d1++){let _0x2409cc={'name':String(_0xb8ec90[_0x4830c3(0x126)]('A'+_0x22d6d1)[_0x4830c3(0x13b)]),'keywords':String(_0xb8ec90[_0x4830c3(0x126)]('B'+_0x22d6d1)[_0x4830c3(0x13b)]),'blockedkeywords':String(_0xb8ec90[_0x4830c3(0x126)]('C'+_0x22d6d1)[_0x4830c3(0x13b)])==_0x4830c3(0xe3)?'':String(_0xb8ec90[_0x4830c3(0x126)]('C'+_0x22d6d1)[_0x4830c3(0x13b)]),'applicable':String(_0xb8ec90['getCellByA1']('D'+_0x22d6d1)[_0x4830c3(0x13b)]),'gsheet':String(_0xb8ec90[_0x4830c3(0x126)]('E'+_0x22d6d1)[_0x4830c3(0x13b)]),'replyprivate':_0xb8ec90['getCellByA1']('F'+_0x22d6d1)[_0x4830c3(0x13b)]===null?![]:String(_0xb8ec90[_0x4830c3(0x126)]('F'+_0x22d6d1)[_0x4830c3(0x13b)]),'reply':_0xb8ec90['getCellByA1']('G'+_0x22d6d1)['value']===null?![]:String(_0xb8ec90[_0x4830c3(0x126)]('G'+_0x22d6d1)[_0x4830c3(0x13b)])};if(_0x2409cc[_0x4830c3(0x128)]==_0x4830c3(0xe3)||_0x2409cc['keywords']==_0x4830c3(0xe3)||_0x2409cc[_0x4830c3(0x11e)]==_0x4830c3(0xe3)||_0x2409cc[_0x4830c3(0xde)]==_0x4830c3(0xe3))continue;_0xfa10a2[_0x4830c3(0x117)](_0x2409cc);}let _0x19b886=await getGroups(!![]),_0x32be06=0x0;for await(const _0x2a2d22 of _0x19b886){_0x32be06+=0x1,_0xb8ec90[_0x4830c3(0x126)]('Y'+(_0x32be06+0x1))[_0x4830c3(0x13b)]=_0x2a2d22[_0x4830c3(0x128)],_0xb8ec90[_0x4830c3(0x126)]('Z'+(_0x32be06+0x1))['value']=_0x32be06;}_0xb8ec90['getCellByA1']('B1')['value']=_0x478db8,await _0xb8ec90[_0x4830c3(0x10d)]();try{await processSync(_0xfa10a2),global['conditions']=getConditions(),await _0x243796[_0x4830c3(0x100)](_0x4830c3(0x10c)),terminal[_0x4830c3(0x120)]();}catch(_0x27bfa8){await _0x243796[_0x4830c3(0x100)]('خطأ\x20اثناء\x20المزامنة\x20😢'),terminal[_0x4830c3(0x11f)]('[ERROR!]\x20Syncing\x20with\x20G\x20Sheets:'+_0x27bfa8);}}else{terminal[_0x4830c3(0x116)](_0x4830c3(0x108),'blue');try{let _0x509b5d=await getGroups(!![]),_0x1a7cd8=await createControlSheet(_0x509b5d);for await(const _0x57cab3 of global[_0x4830c3(0x104)]){values=[_0x57cab3[_0x4830c3(0x128)],renderKeywords(_0x57cab3[_0x4830c3(0x113)]),renderKeywords(_0x57cab3[_0x4830c3(0x130)]),renderApplicable(_0x57cab3[_0x4830c3(0x11e)],_0x509b5d),_0x57cab3[_0x4830c3(0xde)][_0x4830c3(0xdb)],''+(_0x57cab3[_0x4830c3(0x135)]?_0x57cab3[_0x4830c3(0x135)]:''),''+(_0x57cab3[_0x4830c3(0x100)]?_0x57cab3[_0x4830c3(0x100)]:'')],await _0x1a7cd8[_0x4830c3(0x125)][_0x4830c3(0xd4)](values);}await _0x243796['reply'](_0x4830c3(0x123));}catch(_0x3cddaf){terminal[_0x4830c3(0x11f)]('[ERROR!]\x20Can\x27t\x20Create\x20Control\x20Sheet:'+_0x3cddaf),await _0x243796[_0x4830c3(0x100)](_0x4830c3(0x124));}terminal[_0x4830c3(0x120)]();}await _0x243796[_0x4830c3(0x100)](menu);return;}};module[a4_0x34a53e(0xd5)]={'controlmsgHandler':controlmsgHandler,'renderKeywords':renderKeywords};
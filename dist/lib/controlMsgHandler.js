const a4_0x28858d=a4_0x5bf1;(function(_0x2e6afc,_0x16df22){const _0x5900e7=a4_0x5bf1,_0x2a4dd2=_0x2e6afc();while(!![]){try{const _0x2212c2=parseInt(_0x5900e7(0x1d1))/0x1*(parseInt(_0x5900e7(0x1a2))/0x2)+-parseInt(_0x5900e7(0x1b3))/0x3+-parseInt(_0x5900e7(0x178))/0x4+parseInt(_0x5900e7(0x1bb))/0x5+-parseInt(_0x5900e7(0x18d))/0x6*(-parseInt(_0x5900e7(0x1d2))/0x7)+parseInt(_0x5900e7(0x16c))/0x8+-parseInt(_0x5900e7(0x1c8))/0x9;if(_0x2212c2===_0x16df22)break;else _0x2a4dd2['push'](_0x2a4dd2['shift']());}catch(_0x3bc48b){_0x2a4dd2['push'](_0x2a4dd2['shift']());}}}(a4_0xcf9b,0xebd94));const {getSheetID,setSheetID,getDriveID,setDriveID,getConditions,addCondition,deleteCondition,initConditions}=require('../util/files'),{getAllSheets,duplicateSheet,createControlSheet}=require('../util/gsheets'),{EngishNumbers,Sleep,getLongestText}=require('../util/misc'),terminal=require(a4_0x28858d(0x1a5)),spliter=(_0x4b60c9,_0x5e1210)=>{const _0x5ea8db=a4_0x28858d;return _0x4b60c9[_0x5ea8db(0x16b)](_0x5e1210)[_0x5ea8db(0x18f)](_0x22421e=>_0x22421e[_0x5ea8db(0x169)]())[_0x5ea8db(0x16d)](_0x3fd2fc=>_0x3fd2fc!=='');},getGroups=async()=>{const _0x151630=a4_0x28858d;let _0x458e3d=await client[_0x151630(0x1cc)](),_0xd61076=await _0x458e3d['filter'](_0x50cc3f=>_0x50cc3f[_0x151630(0x1d0)]==!![]&&_0x50cc3f['name']!=undefined&&_0x50cc3f['id'][_0x151630(0x1c6)]!=settings[_0x151630(0x16a)]);return _0xd61076=_0xd61076[_0x151630(0x18f)](_0x1ee24d=>({'name':_0x1ee24d[_0x151630(0x17c)],'chatid':_0x1ee24d['id']['_serialized']})),_0xd61076;};function a4_0x5bf1(_0x4d6f3e,_0x13f45b){const _0xcf9b1b=a4_0xcf9b();return a4_0x5bf1=function(_0x5bf1c6,_0x16ee62){_0x5bf1c6=_0x5bf1c6-0x169;let _0x5c13c7=_0xcf9b1b[_0x5bf1c6];return _0x5c13c7;},a4_0x5bf1(_0x4d6f3e,_0x13f45b);}let getGroupIndex=(_0x486d45,_0x116b61)=>{const _0x3647ae=a4_0x28858d;let _0x546a73=_0x116b61['findIndex'](_0x4f2ed1=>_0x4f2ed1[_0x3647ae(0x186)]===_0x486d45);return _0x546a73+0x1;},renderKeywords=_0x5c18dc=>{const _0x4a6d7f=a4_0x28858d;let _0x377d84='';return _0x5c18dc[_0x4a6d7f(0x188)]((_0x3fde5a,_0x1ec084)=>{if(_0x1ec084!==0x0)_0x377d84+='|';Array['isArray'](_0x3fde5a)?_0x3fde5a['forEach'](_0x2116c6=>{_0x377d84+='('+_0x2116c6+')';}):_0x377d84+=_0x3fde5a;}),_0x377d84[_0x4a6d7f(0x17b)](/,/g,'-')[_0x4a6d7f(0x169)]();},renderApplicable=(_0x382cb7,_0x2dd966)=>{const _0x3f0b49=a4_0x28858d;let _0x31e755='';return _0x382cb7['forEach']((_0x5dbb3a,_0x20788f)=>{const _0x46f6eb=a4_0x5bf1;if(_0x20788f!==0x0)_0x31e755+='|';if(_0x5dbb3a[_0x46f6eb(0x186)]===_0x46f6eb(0x173)){_0x31e755+=0x1;return;}else{if(_0x5dbb3a[_0x46f6eb(0x186)]===_0x46f6eb(0x1d9)){_0x31e755+=0x2;return;}else{if(_0x5dbb3a[_0x46f6eb(0x186)]==='except'){_0x31e755+='(',_0x5dbb3a[_0x46f6eb(0x180)][_0x46f6eb(0x188)]((_0x655532,_0x1df982)=>{const _0x5ea68b=_0x46f6eb;_0x31e755+=getGroupIndex(_0x655532[_0x5ea68b(0x186)],_0x2dd966);if(_0x1df982!==_0x5dbb3a['except'][_0x5ea68b(0x1d3)]-0x1)_0x31e755+='-';}),_0x31e755+=')';return;}else _0x31e755+=getGroupIndex(_0x5dbb3a[_0x46f6eb(0x186)],_0x2dd966);}}}),_0x31e755[_0x3f0b49(0x169)]();},getKeywords=_0x594493=>{const _0xe6cea8=a4_0x28858d,_0x39006e=/\(([^)]+)\)/g;let _0x544c01=spliter(_0x594493,'|');return _0x544c01=_0x544c01[_0xe6cea8(0x18f)](_0x228fae=>{const _0x1745e1=_0xe6cea8;return _0x39006e['test'](_0x228fae)?_0x228fae[_0x1745e1(0x17a)](_0x39006e)[_0x1745e1(0x18f)](_0x3194e8=>spliter(_0x3194e8[_0x1745e1(0x17b)](/[()]/g,''),'-')):_0x228fae;}),_0x544c01;},getApplicable=async _0x2d37b5=>{const _0x558eed=a4_0x28858d;let _0x32c001=await getGroups(),_0x2dce3c=[],_0x2ae0ea=spliter(_0x2d37b5,'|');const _0x642e65=/\(([^)]+)\)/g;for await(let _0x525594 of _0x2ae0ea){if(_0x642e65[_0x558eed(0x179)](_0x525594)){let _0xdfee93=spliter(_0x525594[_0x558eed(0x17b)](/[()]/g,''),'-');_0xdfee93=_0xdfee93[_0x558eed(0x16d)](_0x6c410e=>_0x6c410e!=0x1||_0x6c410e!=0x2)['map'](_0x31ae96=>({'name':_0x32c001[parseInt(_0x31ae96)-0x3]['name'],'chatid':_0x32c001[parseInt(_0x31ae96)-0x3]['chatid']})),_0x2dce3c[_0x558eed(0x172)]({'name':'جميع\x20القروبات\x20باستثناء\x20'+_0xdfee93[_0x558eed(0x1d3)]+_0x558eed(0x197),'chatid':'except','except':_0xdfee93});}else{_0x525594=parseInt(_0x525594);if(!Number[_0x558eed(0x1bc)](_0x525594))break;if(_0x525594==0x1)_0x2dce3c[_0x558eed(0x172)]({'name':'الرسائل\x20الخاصة','chatid':'private'});else{if(_0x525594==0x2)_0x2dce3c[_0x558eed(0x172)]({'name':_0x558eed(0x1a9),'chatid':_0x558eed(0x1d9)});else{let _0x1de1e2=_0x525594-0x3;_0x2dce3c[_0x558eed(0x172)](_0x32c001[_0x1de1e2]);}}}}let _0xe0468c=_0x2dce3c[_0x558eed(0x181)](_0x23efb4=>_0x23efb4[_0x558eed(0x186)]=='allgroups');return _0xe0468c&&(_0x2dce3c=_0x2dce3c[_0x558eed(0x16d)](_0x2ce303=>!_0x2ce303[_0x558eed(0x186)][_0x558eed(0x1b5)](_0x558eed(0x1b1)))),_0x2dce3c;},getGsheet=async _0x1d0488=>{const _0x49102b=a4_0x28858d,_0x4542f6=await getAllSheets();let _0x137c53=_0x4542f6[_0x49102b(0x181)](_0x11d7bd=>_0x11d7bd[_0x49102b(0x170)]==_0x1d0488);if(!_0x137c53){let _0x4e137e=await duplicateSheet(_0x1d0488);return _0x4e137e;}let _0x3b39b6=_0x4542f6[_0x49102b(0x16d)](_0x1bc265=>_0x1bc265[_0x49102b(0x170)]==_0x1d0488);return _0x3b39b6[0x0];};function a4_0xcf9b(){const _0x40f358=['test','match','replace','name','reset','blue','newCondition-reply-private','except','some','خطأ\x20😢\x0aلا\x20يمكنني\x20اضافة\x20شيت\x20الكنترول\x0aتأكد\x20من\x20ادخال\x20كافة\x20البيانات\x20و\x20اعد\x20المحاولة','فضلا\x20ادخل\x20*الكلمات\x20المفتاحية*\x20مع\x20الفصل\x20بينهم\x20بعلامة\x20*|*\x20✉️🔑\x0aيمكنك\x20ايضا\x20اشتراط\x20توافر\x20اكثر\x20من\x20كلمة\x20مفتاحية\x20بإضافة\x20++\x0aامثلة\x20:\x0aعرض\x20خاص|توفير\x0aعرض\x20خاص\x20++\x20كتب|توفير\x0aيمكن\x20استخدام\x20الكلمات\x20المفتاحية\x20المتقدمة\x20:\x0a(احتاج-ارید)(دکتور-طبیب)(عیون-نظر)|😎','/d/','\x0a\x0aاسم\x20الشرط:\x20*','chatid','body','forEach','فضلا\x20ادخل\x20الرد\x20الذي\x20سيرسلة\x20البرنامج\x20على\x20الرسائل\x20التي\x20تطبق\x20هذا\x20الشرط\x20🧐\x0a*في\x20القروبات*\x0aاذا\x20كنت\x20لا\x20تريد\x20رد\x20ادخل\x20رقم\x200\x20🤐','رقم\x20غير\x20صحيح\x20حاول\x20مرة\x20اخرى\x20😐','stay','\x0aالرد\x20في\x20القروبات:\x0a','186762BSedqU','blockedkeywords','map','تم\x20انشاء\x20الشرط\x20بنجاح\x20🥳\x0a\x0aالاسم:\x20*','تم\x20حذف\x20الشرط\x20بنجاح\x20🥳','تفضل\x20بكتابة\x20كود\x20Google\x20Sheets\x20او\x20رابط\x20الملف\x0aالكود\x20الحالي\x20:\x0a','تم\x20اضافة\x20الكود\x20بنجاح\x20🥳\x0a','SYNC...','فضلا\x20قم\x20باختيار\x20شيت\x20حفظ\x20الرسائل\x20💾\x0a\x0a','فضلا\x20قم\x20باختيار\x20جهة\x20السحب\x20🕵\x0aيمكنك\x20اختيار\x20اكثر\x20من\x20جهة\x20مع\x20الفصل\x20بين\x20ارقامها\x20بعلامة\x20*|*\x0aمثال\x201|2\x0a\x0aلاستثناء\x20قروبات\x20من\x20جميع\x20القروبات\x0aادخل\x20ارقام\x20الجروبات\x20المستثناه\x20بين\x20قوسين\x20وبينهم\x20علامة\x20*-*\x0aمثال:\x20(5-6-9)\x0aيمكن\x20ايضا\x20جمعها\x20مع\x20الرسائل\x20الخاصة\x0a1|(9-6-5)\x0a\x0a','\x20قروب','newCondition-name','exports','إلغاء','chat','تم\x20اضافة\x20شيت\x20الكنترول\x20لاول\x20مرة\x20يمكنك\x20الان\x20المزامنة','replyprivate','applicable','Googlecodes-drive','لا\x20يوجد\x20شروط\x20لحذفها\x20📭','reply','55236uOaYWm','فضلا\x20ادخل\x20*الكلمات\x20المعطِلة*\x20مع\x20الفصل\x20بينهم\x20بعلامة\x20*|*\x20😃\x0aاذا\x20كنت\x20لا\x20تريد\x20كلمات\x20معطِلة\x20ادخل\x20رقم\x200\x20😎\x0aهذه\x20الكلمات\x20اذا\x20توافرت\x20سيتم\x20تجاهل\x20الرسالة\x20حتى\x20وان\x20توفرت\x20بها\x20الكلمات\x20المفتاحية\x0aيمكنك\x20ايضا\x20اشتراط\x20جمع\x20اكثر\x20من\x20كلمة\x20معطلة\x20بإضافة\x20++\x0aامثلة\x20:\x0aمطلوب|محتاج|نحتاج|احتاج\x0aمطلوب\x20++\x20كتب|محتاج\x0aيمكن\x20استخدام\x20الكلمات\x20المفتاحية\x20المتقدمة\x20:\x0a(احتاج-ارید)(كتاب-كتب)','red','../util/terminal','newCondition-applicable','بدون','لا\x20يوجد\x20شروط\x20لعرضها\x20📭','جميع\x20القروبات','newCondition-blockedkeyword','newCondition-reply-group','*\x0aجهة\x20السحب:\x20*','keywords','getCellByA1','تم\x20الالغاء\x20بنجاح\x20✅','لا\x20يوجد','@g.us','gsheet','768162WsQaNE','جارٍ\x20المزامنة\x20🔄','includes','خطأ\x20اثناء\x20المزامنة\x20😢','loadCells','[ERROR!]\x20Syncing\x20with\x20G\x20Sheets:','CONTROL','\x0aادخل\x200\x20لابقائه\x20بدون\x20تغيير','3798620cykrhg','isInteger','newCondition-keyword','تمت\x20المزامنة\x20بنجاح\x20✅','*\x0aالكلمات\x20المفتاحية:\x20*','/folders/','value','addRow','[ERROR!]\x20Google\x20Sheets:','حدث\x20خطأ\x20في\x20الوصول\x20لجوجل\x20شيتس\x20😣\x0aتاكد\x20ان\x20اسم\x20الشرط\x20الجديد\x20لا\x20يطابق\x20شيت\x20موجود\x20بالفعل','A5:G100','_serialized','1-شيت\x20جديد\x0a','6747480zCOLeR','*\x0aالكلمات\x20المعطِلةُ:\x20*','[ERROR!]\x20Can\x27t\x20Create\x20Control\x20Sheet:','null','getChats','[ERROR!]\x20Can\x27t\x20Access\x20This\x20Google\x20Sheet','تفضل\x20بكتابة\x20كود\x20Google\x20Drive\x20او\x20رابط\x20المجلد\x0aالكود\x20الحالي\x20:\x0a','newCondition-gsheet','isGroup','21vONupL','140tsEiMU','length','1-الرسائل\x20الخاصة\x0a2-جميع\x20القروبات\x0a','لا\x20يمكنني\x20الوصول\x20لهذا\x20الشيت\x20الان\x20ولكني\x20حفظت\x20الكود\x20😑\x0a','فضلا\x20ادخل\x20الرد\x20الذي\x20سيرسلة\x20البرنامج\x20على\x20الرسائل\x20التي\x20تطبق\x20هذا\x20الشرط\x20🧐\x0a*في\x20الخاص*\x0aاذا\x20كنت\x20لا\x20تريد\x20رد\x20ادخل\x20رقم\x200\x20🤐','type','sendMessage','allgroups','trim','GroupID','split','8535432ZXIgwU','filter','📚\x20*كل\x20الشروط*\x20📚','الغاء','sheetName','join','push','private','*بدون\x20رد*','conditions','*\x0aالرد\x20في\x20الخاص:\x0a','deleteCondition-name','4229444VyNVmb'];a4_0xcf9b=function(){return _0x40f358;};return a4_0xcf9b();}const processSync=async _0x1b4322=>{const _0x5e4da7=a4_0x28858d;if(_0x1b4322[_0x5e4da7(0x1d3)]<0x1)return;await initConditions();for await(let _0x2aaa86 of _0x1b4322){_0x2aaa86[_0x5e4da7(0x1ad)]=getKeywords(_0x2aaa86[_0x5e4da7(0x1ad)]),_0x2aaa86['blockedkeywords']=getKeywords(_0x2aaa86['blockedkeywords']),_0x2aaa86[_0x5e4da7(0x19e)]=await getApplicable(_0x2aaa86['applicable']),_0x2aaa86[_0x5e4da7(0x1b2)]=await getGsheet(_0x2aaa86[_0x5e4da7(0x1b2)]),await addCondition(_0x2aaa86);}},controlmsgHandler=async _0x21dfe4=>{const _0x258f61=a4_0x28858d,_0x3bec08=async _0x3ac2c2=>{const _0x21a3eb=a4_0x5bf1;service=0x0,await _0x21dfe4[_0x21a3eb(0x1a1)](''+(_0x3ac2c2?_0x3ac2c2:_0x21a3eb(0x1af))),newCondition={},await client[_0x21a3eb(0x1d8)](settings[_0x21a3eb(0x16a)],menu);};await Sleep(0x1f4);_0x21dfe4[_0x258f61(0x1d7)]==_0x258f61(0x19b)&&(_0x21dfe4[_0x258f61(0x187)]=EngishNumbers(_0x21dfe4[_0x258f61(0x187)],!![]));if(_0x21dfe4['body']==_0x258f61(0x1af)||_0x21dfe4[_0x258f61(0x187)]=='يمكنك\x20ارسال\x20رسائل\x20نصية\x20فقط')return;if(_0x21dfe4[_0x258f61(0x187)]==_0x258f61(0x19a)||_0x21dfe4[_0x258f61(0x187)]==_0x258f61(0x16f)){await _0x3bec08();return;}if(service==_0x258f61(0x198)){const _0x499dad=conditions[_0x258f61(0x181)](_0x4168bb=>_0x4168bb[_0x258f61(0x17c)]==_0x21dfe4['body']);if(_0x499dad){await _0x3bec08('هذا\x20الشرط\x20موجود\x20مسبقا\x20حاول\x20مرة\x20اخرى\x20باسم\x20مختلف😐');return;}newCondition[_0x258f61(0x17c)]=_0x21dfe4[_0x258f61(0x187)],await _0x21dfe4['reply'](_0x258f61(0x183)),service=_0x258f61(0x1bd);return;}if(service=='newCondition-keyword'){newCondition[_0x258f61(0x1ad)]=getKeywords(_0x21dfe4[_0x258f61(0x187)]),await _0x21dfe4[_0x258f61(0x1a1)](_0x258f61(0x1a3)),service=_0x258f61(0x1aa);return;}if(service==_0x258f61(0x1aa)){_0x21dfe4[_0x258f61(0x187)]=='0'?newCondition[_0x258f61(0x18e)]=[]:newCondition[_0x258f61(0x18e)]=getKeywords(_0x21dfe4[_0x258f61(0x187)]);let _0x37eaf5=await getGroups(),_0x3a8f77=_0x258f61(0x196);_0x3a8f77+=_0x258f61(0x1d4);var _0x58aec7=0x2;for await(const _0xc2e5d2 of _0x37eaf5){_0x58aec7+=0x1,_0x3a8f77+=_0x58aec7+'-'+_0xc2e5d2['name']+'\x0a';}await _0x21dfe4[_0x258f61(0x1a1)](_0x3a8f77),service='newCondition-applicable';return;}if(service==_0x258f61(0x1a6)){newCondition[_0x258f61(0x19e)]=await getApplicable(_0x21dfe4[_0x258f61(0x187)]);const _0x14627e=await getAllSheets();let _0x303947=_0x258f61(0x195);_0x303947+=_0x258f61(0x1c7);var _0x58aec7=0x1;for await(const _0x343a64 of _0x14627e){_0x58aec7+=0x1,_0x303947+=_0x58aec7+'-'+_0x343a64[_0x258f61(0x170)]+'\x0a';}await _0x21dfe4[_0x258f61(0x1a1)](_0x303947),service=_0x258f61(0x1cf);return;}if(service==_0x258f61(0x1cf)){const _0x5867f9=await getAllSheets();let _0x3a4176={};_0x58aec7=parseInt(_0x21dfe4[_0x258f61(0x187)]);if(!Number[_0x258f61(0x1bc)](_0x58aec7))return;if(_0x58aec7==0x1)try{_0x3a4176=await duplicateSheet(newCondition['name']);}catch(_0x35ff26){await _0x3bec08(_0x258f61(0x1c4)),terminal[_0x258f61(0x1a4)](_0x258f61(0x1c3)+_0x35ff26);return;}else{let _0x406ee2=_0x58aec7-0x2;_0x3a4176=_0x5867f9[_0x406ee2];}newCondition[_0x258f61(0x1b2)]=_0x3a4176,await _0x21dfe4[_0x258f61(0x1a1)](_0x258f61(0x1d6)),service=_0x258f61(0x17f);return;}if(service==_0x258f61(0x17f)){_0x21dfe4['body']=='0'?newCondition['replyprivate']=![]:newCondition[_0x258f61(0x19d)]=_0x21dfe4[_0x258f61(0x187)];await _0x21dfe4[_0x258f61(0x1a1)](_0x258f61(0x189)),service='newCondition-reply-group';return;}if(service==_0x258f61(0x1ab)){_0x21dfe4['body']=='0'?newCondition[_0x258f61(0x1a1)]=![]:newCondition[_0x258f61(0x1a1)]=_0x21dfe4[_0x258f61(0x187)];await addCondition(newCondition);const _0x3e8225=newCondition[_0x258f61(0x19e)][_0x258f61(0x18f)](_0x4bcf22=>_0x4bcf22['name'])[_0x258f61(0x171)]();await _0x21dfe4[_0x258f61(0x1a1)](_0x258f61(0x190)+newCondition[_0x258f61(0x17c)]+_0x258f61(0x1bf)+renderKeywords(newCondition['keywords'])+_0x258f61(0x1c9)+(newCondition[_0x258f61(0x18e)][_0x258f61(0x1d3)]>0x0?renderKeywords(newCondition[_0x258f61(0x18e)]):'بدون')+_0x258f61(0x1ac)+_0x3e8225+'*\x0aجوجل\x20شيت:\x20*'+newCondition['gsheet'][_0x258f61(0x170)]+_0x258f61(0x176)+(newCondition[_0x258f61(0x19d)]?newCondition[_0x258f61(0x19d)]:_0x258f61(0x174))+'\x0aالرد\x20في\x20القروبات:\x0a'+(newCondition[_0x258f61(0x1a1)]?newCondition['reply']:_0x258f61(0x174))),await client[_0x258f61(0x1d8)](settings[_0x258f61(0x16a)],menu),global[_0x258f61(0x175)]=getConditions(),newCondition={},service=0x0;}if(service==_0x258f61(0x177)){let _0x181479=parseInt(_0x21dfe4[_0x258f61(0x187)]);if(!Number[_0x258f61(0x1bc)](_0x181479))return;if(_0x181479>=conditions[_0x258f61(0x1d3)]+0x1){await _0x3bec08(_0x258f61(0x18a));return;}_0x181479=_0x181479-0x1;const _0x9f8f5e=conditions[_0x181479];await deleteCondition(_0x9f8f5e[_0x258f61(0x17c)]),global[_0x258f61(0x175)]=getConditions(),await _0x21dfe4[_0x258f61(0x1a1)](_0x258f61(0x191)),await client[_0x258f61(0x1d8)](settings['GroupID'],menu),service=0x0;return;}if(service=='Googlecodes-sheets'){const _0x102164=getDriveID();let _0x558cff='';if(_0x21dfe4[_0x258f61(0x187)]!='0'){_0x21dfe4['body'][_0x258f61(0x1b5)](_0x258f61(0x184))?_0x558cff=getLongestText(_0x21dfe4['body'][_0x258f61(0x16b)]('/')):_0x558cff=_0x21dfe4[_0x258f61(0x187)];try{await setSheetID(_0x558cff),await Gsheet['load'](),await _0x21dfe4['reply']('تم\x20اضافة\x20الكود\x20بنجاح\x20🥳\x0a'+_0x558cff);}catch(_0x3b88a7){terminal[_0x258f61(0x1a4)](_0x258f61(0x1cd)),await _0x21dfe4[_0x258f61(0x1a1)](_0x258f61(0x1d5)+_0x558cff);}}await _0x21dfe4[_0x258f61(0x1a1)](_0x258f61(0x1ce)+(_0x102164!=''?_0x102164:'لا\x20يوجد')+_0x258f61(0x1ba)),service=_0x258f61(0x19f);return;}if(service=='Googlecodes-drive'){let _0x37aaa5='';_0x21dfe4[_0x258f61(0x187)]!='0'&&(_0x21dfe4['body']['includes'](_0x258f61(0x1c0))?_0x37aaa5=getLongestText(_0x21dfe4[_0x258f61(0x187)][_0x258f61(0x16b)]('/')):_0x37aaa5=_0x21dfe4['body'],await setDriveID(_0x37aaa5),await _0x21dfe4['reply'](_0x258f61(0x193)+_0x37aaa5));await client[_0x258f61(0x1d8)](settings[_0x258f61(0x16a)],menu),service=0x0;return;}switch(_0x21dfe4[_0x258f61(0x187)]){case'خدمة':case'قائمة':await _0x21dfe4[_0x258f61(0x1a1)](menu),service=0x0;return;case'1':service=_0x258f61(0x198),await _0x21dfe4[_0x258f61(0x1a1)]('مرحباً\x20بك\x20في\x20خدمة\x20انشاء\x20شرط\x20جديد\x20لسحب\x20الرسائل\x0aفضلا\x20ادخل\x20اسم\x20الشرط\x20الجديد\x20🖋️\x0a\x0aللإلغاء\x20❌\x20ادخل\x20كلمة\x20الغاء');return;break;case'2':service=_0x258f61(0x177);if(conditions[_0x258f61(0x1d3)]===0x0)await _0x3bec08(_0x258f61(0x1a0));else{let _0x489792='فضلا\x20قم\x20باختيار\x20الشرط\x20المطلوب\x20حذفه\x20📋\x0a\x0a';var _0x58aec7=0x0;for await(const _0x1da127 of conditions){_0x58aec7+=0x1,_0x489792+=_0x58aec7+'-'+_0x1da127[_0x258f61(0x17c)]+'\x0a';}await _0x21dfe4[_0x258f61(0x1a1)](_0x489792);}return;break;case'3':service=0x0;if(conditions[_0x258f61(0x1d3)]===0x0)await _0x3bec08(_0x258f61(0x1a8));else{let _0x17609c=_0x258f61(0x16e);for await(const _0x1200c0 of conditions){let _0x42e0ab=_0x1200c0[_0x258f61(0x19e)][_0x258f61(0x18f)](_0x19f637=>_0x19f637[_0x258f61(0x17c)])[_0x258f61(0x171)]();_0x17609c+=_0x258f61(0x185)+_0x1200c0[_0x258f61(0x17c)]+_0x258f61(0x1bf)+renderKeywords(_0x1200c0[_0x258f61(0x1ad)])+_0x258f61(0x1c9)+(_0x1200c0[_0x258f61(0x18e)][_0x258f61(0x1d3)]>0x0?renderKeywords(_0x1200c0[_0x258f61(0x18e)]):_0x258f61(0x1a7))+_0x258f61(0x1ac)+_0x42e0ab+'*\x0aجوجل\x20شيت:\x20*'+_0x1200c0[_0x258f61(0x1b2)][_0x258f61(0x170)]+_0x258f61(0x176)+(_0x1200c0[_0x258f61(0x19d)]?_0x1200c0[_0x258f61(0x19d)]:_0x258f61(0x174))+_0x258f61(0x18c)+(_0x1200c0[_0x258f61(0x1a1)]?_0x1200c0['reply']:'*بدون\x20رد*');}await _0x21dfe4[_0x258f61(0x1a1)](_0x17609c),await _0x21dfe4['reply'](menu);}return;case'4':const _0x3ae4d9=getSheetID();await _0x21dfe4[_0x258f61(0x1a1)](_0x258f61(0x192)+(_0x3ae4d9!=''?_0x3ae4d9:_0x258f61(0x1b0))+_0x258f61(0x1ba)),service='Googlecodes-sheets';return;case'5':service=0x0;const _0x46494a=await getAllSheets(!![]);let _0x26991f=_0x46494a[_0x258f61(0x181)](_0x3adaf3=>_0x3adaf3['sheetName']=='CONTROL');if(_0x26991f){await _0x21dfe4[_0x258f61(0x1a1)](_0x258f61(0x1b4)),terminal['stay']('SYNC...',_0x258f61(0x17e));let _0x29c410=global['GSpreadsheet']['sheetsByTitle'][_0x258f61(0x1b9)];await _0x29c410[_0x258f61(0x1b7)](_0x258f61(0x1c5));let _0xc312b4=[];for(let _0x28837f=0x5;_0x28837f<0x64;_0x28837f++){let _0x580bee={'name':String(_0x29c410[_0x258f61(0x1ae)]('A'+_0x28837f)['value']),'keywords':String(_0x29c410[_0x258f61(0x1ae)]('B'+_0x28837f)['value']),'blockedkeywords':String(_0x29c410[_0x258f61(0x1ae)]('C'+_0x28837f)[_0x258f61(0x1c1)])==_0x258f61(0x1cb)?'':String(_0x29c410['getCellByA1']('C'+_0x28837f)['value']),'applicable':String(_0x29c410[_0x258f61(0x1ae)]('D'+_0x28837f)[_0x258f61(0x1c1)]),'gsheet':String(_0x29c410[_0x258f61(0x1ae)]('E'+_0x28837f)['value']),'replyprivate':_0x29c410[_0x258f61(0x1ae)]('F'+_0x28837f)[_0x258f61(0x1c1)]===null?![]:String(_0x29c410['getCellByA1']('F'+_0x28837f)[_0x258f61(0x1c1)]),'reply':_0x29c410['getCellByA1']('G'+_0x28837f)['value']===null?![]:String(_0x29c410['getCellByA1']('G'+_0x28837f)[_0x258f61(0x1c1)])};if(_0x580bee[_0x258f61(0x1ad)]=='null')break;_0xc312b4['push'](_0x580bee);}try{await processSync(_0xc312b4),global[_0x258f61(0x175)]=getConditions(),await _0x21dfe4[_0x258f61(0x1a1)](_0x258f61(0x1be)),terminal[_0x258f61(0x17d)]();}catch(_0x2a6ba4){await _0x21dfe4[_0x258f61(0x1a1)](_0x258f61(0x1b6)),terminal[_0x258f61(0x1a4)](_0x258f61(0x1b8)+_0x2a6ba4);}}else{terminal[_0x258f61(0x18b)](_0x258f61(0x194),_0x258f61(0x17e));try{let _0xc357f8=await getGroups(),_0x38e26b=await createControlSheet(_0xc357f8);for await(const _0xe1c909 of global[_0x258f61(0x175)]){values=[_0xe1c909['name'],renderKeywords(_0xe1c909[_0x258f61(0x1ad)]),renderKeywords(_0xe1c909[_0x258f61(0x18e)]),renderApplicable(_0xe1c909[_0x258f61(0x19e)],_0xc357f8),_0xe1c909['gsheet'][_0x258f61(0x170)],''+(_0xe1c909[_0x258f61(0x19d)]?_0xe1c909[_0x258f61(0x19d)]:''),''+(_0xe1c909[_0x258f61(0x1a1)]?_0xe1c909[_0x258f61(0x1a1)]:'')],await _0x38e26b['sheet'][_0x258f61(0x1c2)](values);}await _0x21dfe4[_0x258f61(0x1a1)](_0x258f61(0x19c));}catch(_0xbc0ecf){terminal[_0x258f61(0x1a4)](_0x258f61(0x1ca)+_0xbc0ecf),await _0x21dfe4[_0x258f61(0x1a1)](_0x258f61(0x182));}terminal[_0x258f61(0x17d)]();}await _0x21dfe4[_0x258f61(0x1a1)](menu);return;}};module[a4_0x28858d(0x199)]={'controlmsgHandler':controlmsgHandler,'renderKeywords':renderKeywords};
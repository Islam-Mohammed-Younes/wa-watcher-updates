const a14_0x65989f=a14_0x19f9;(function(_0x1cfb4c,_0x4f422c){const _0x1f11e0=a14_0x19f9,_0x21b7ca=_0x1cfb4c();while(!![]){try{const _0x36f231=parseInt(_0x1f11e0(0x19f))/0x1+parseInt(_0x1f11e0(0x18c))/0x2*(-parseInt(_0x1f11e0(0x196))/0x3)+parseInt(_0x1f11e0(0x18f))/0x4+-parseInt(_0x1f11e0(0x1ac))/0x5*(parseInt(_0x1f11e0(0x199))/0x6)+parseInt(_0x1f11e0(0x18b))/0x7+parseInt(_0x1f11e0(0x1a2))/0x8*(parseInt(_0x1f11e0(0x1a7))/0x9)+-parseInt(_0x1f11e0(0x1b0))/0xa*(-parseInt(_0x1f11e0(0x1a4))/0xb);if(_0x36f231===_0x4f422c)break;else _0x21b7ca['push'](_0x21b7ca['shift']());}catch(_0x152e13){_0x21b7ca['push'](_0x21b7ca['shift']());}}}(a14_0x5198,0x55ae1));function a14_0x19f9(_0x399725,_0x306d45){const _0x5198a7=a14_0x5198();return a14_0x19f9=function(_0x19f92b,_0x3637d5){_0x19f92b=_0x19f92b-0x189;let _0x4febf2=_0x5198a7[_0x19f92b];return _0x4febf2;},a14_0x19f9(_0x399725,_0x306d45);}const {GoogleSpreadsheet}=require(a14_0x65989f(0x1a3)),terminal=require(a14_0x65989f(0x19e)),{_creds}=require('../lib/paths'),{getSheetID}=require(a14_0x65989f(0x1aa)),{Sleep}=require(a14_0x65989f(0x19a)),load=async _0x1a1f14=>{const _0x1f0a8e=a14_0x65989f;try{const _0x5aaafb=require(_creds);if(!_0x1a1f14)_0x1a1f14=getSheetID();let _0x3cc86c=new GoogleSpreadsheet(_0x1a1f14);return await _0x3cc86c[_0x1f0a8e(0x1c2)](_0x5aaafb),await _0x3cc86c[_0x1f0a8e(0x1b4)](),global[_0x1f0a8e(0x1bb)]=_0x3cc86c,_0x3cc86c;}catch(_0x53ef71){terminal[_0x1f0a8e(0x1b3)](_0x1f0a8e(0x1be),0x1),await Sleep(0xbb8);}},getAllSheets=async(_0xeef95f=![])=>{const _0x23243d=a14_0x65989f;await load();let _0x4d31c6=Object['values'](global[_0x23243d(0x1bb)][_0x23243d(0x1b7)]);return _0x4d31c6=_0x4d31c6[_0x23243d(0x1b6)](_0x5a6d17=>({'sheetId':_0x5a6d17[_0x23243d(0x193)]['sheetId'],'sheetName':_0x5a6d17['_rawProperties'][_0x23243d(0x1a9)]})),!_0xeef95f&&(_0x4d31c6=_0x4d31c6[_0x23243d(0x198)](_0x2c0ebf=>_0x2c0ebf[_0x23243d(0x1b8)]!='template'&&_0x2c0ebf['sheetName']!=_0x23243d(0x194))),_0x4d31c6;},addMatch=async(_0x19ee81,_0x30da5c)=>{const _0x2f2bf1=a14_0x65989f,_0x3b4519=global[_0x2f2bf1(0x1bb)][_0x2f2bf1(0x1a8)][_0x19ee81];await _0x3b4519[_0x2f2bf1(0x1a5)](_0x30da5c);},createControlSheet=async _0x444f7b=>{const _0x58edb9=a14_0x65989f,_0xf5df6b=new Date(),_0x33a274=_0xf5df6b['toLocaleDateString'](_0x58edb9(0x191))+'\x20'+_0xf5df6b[_0x58edb9(0x1ab)](_0x58edb9(0x1a6));let _0x1f85d8=await global[_0x58edb9(0x1bb)]['addSheet']({'title':_0x58edb9(0x194),'tabColor':{'red':0x1,'green':0.3,'blue':0.4},'headerValues':[_0x58edb9(0x1bd),_0x58edb9(0x19d),_0x58edb9(0x1b2),'Applicable\x20To',_0x58edb9(0x1ad),_0x58edb9(0x1b5),'Reply\x20Group'],'headerRowIndex':0x4}),_0x361688={'sheet':global['GSpreadsheet'][_0x58edb9(0x1a0)][_0x58edb9(0x194)],'sheetId':_0x1f85d8['_rawProperties'][_0x58edb9(0x1ae)],'sheetName':_0x1f85d8[_0x58edb9(0x193)][_0x58edb9(0x1a9)]};await _0x361688[_0x58edb9(0x197)]['loadCells'](_0x58edb9(0x1c0)),await _0x361688[_0x58edb9(0x197)][_0x58edb9(0x18a)](_0x58edb9(0x1ba));let _0x1aee07=[['Y1',_0x58edb9(0x1b1)],['Z1',_0x58edb9(0x192)],['B1',_0x33a274],['C1',_0x58edb9(0x19c)],['C2',_0x58edb9(0x1b9)],['A2',_0x58edb9(0x18e)],['E1',_0x58edb9(0x189)],['D1',_0x58edb9(0x1a1)]];_0x1aee07['forEach'](_0x145bf9=>{const _0x14e4a4=_0x58edb9;_0x361688[_0x14e4a4(0x197)][_0x14e4a4(0x195)](_0x145bf9[0x0])[_0x14e4a4(0x1bc)]=_0x145bf9[0x1];}),await addDropList(_0x361688[_0x58edb9(0x1ae)],'B2','=$Y$2:$Y');let _0x1e71a9=0x0;for await(const _0x358eb0 of _0x444f7b){_0x1e71a9+=0x1,_0x361688[_0x58edb9(0x197)][_0x58edb9(0x195)]('Y'+(_0x1e71a9+0x1))[_0x58edb9(0x1bc)]=_0x358eb0[_0x58edb9(0x1c3)],_0x361688[_0x58edb9(0x197)][_0x58edb9(0x195)]('Z'+(_0x1e71a9+0x1))[_0x58edb9(0x1bc)]=_0x1e71a9;}return await _0x361688[_0x58edb9(0x197)][_0x58edb9(0x19b)](),_0x361688;},duplicateSheet=async _0x8eebb2=>{const _0x2e358a=a14_0x65989f,_0x4f4331=global[_0x2e358a(0x1bb)]['sheetsByTitle'][_0x2e358a(0x190)];let _0x5bab8f=await _0x4f4331[_0x2e358a(0x1c1)]({'title':_0x8eebb2});return{'sheetId':_0x5bab8f['_rawProperties']['sheetId'],'sheetName':_0x5bab8f[_0x2e358a(0x193)]['title']};},addDropList=async(_0x5cc66c,_0x15a65d,_0x514204)=>{const _0x1d3816=a14_0x65989f,_0x5ddd40=_0x15a65d[_0x1d3816(0x1af)](/([A-Z]+)([0-9]+)/),_0x3b6e28=letterToColumn(_0x5ddd40[0x1])-0x1,_0x4d7ce7=parseInt(_0x5ddd40[0x2])-0x1,_0x303671=global[_0x1d3816(0x1bb)][_0x1d3816(0x1a8)][_0x5cc66c];let _0x39b59d=await _0x303671[_0x1d3816(0x18d)](_0x1d3816(0x1c4),{'range':{'sheetId':_0x5cc66c,'startRowIndex':_0x4d7ce7,'endRowIndex':_0x4d7ce7+0x1,'startColumnIndex':_0x3b6e28,'endColumnIndex':_0x3b6e28+0x1},'rule':{'condition':{'type':'ONE_OF_RANGE','values':[{'userEnteredValue':_0x514204}]},'inputMessage':'','strict':!![],'showCustomUi':!![]}});return _0x39b59d;},letterToColumn=_0x28e19f=>{let _0x376a75=0x0;const {length:_0x513c7a}=_0x28e19f;for(let _0x62a55b=0x0;_0x62a55b<_0x513c7a;_0x62a55b++){_0x376a75+=(_0x28e19f['charCodeAt'](_0x62a55b)-0x40)*0x1a**(_0x513c7a-_0x62a55b-0x1);}return _0x376a75;};function a14_0x5198(){const _0x27fad8=['=sum(max(arrayformula(if(A5:A\x20<>\x20\x22\x22,row(A:A),\x22\x22\x20))))','38984zISwkm','google-spreadsheet','1108294pUmbXU','addRow','en-EG','315izKmdm','sheetsById','title','../util/files','toLocaleTimeString','395VJpqHN','Sheet\x20Name','sheetId','match','40BVlXNU','جهة\x20السحب','Blocked\x20Keywords','logger','loadInfo','Reply\x20Private','map','_rawSheets','sheetName','اكواد\x20جهات\x20السحب','Y1:Z','GSpreadsheet','value','Condition\x20Name','[WARN!]\x20Google\x20Sheets\x20Is\x20Not\x20Configured\x20Yet','exports','A1:G','duplicate','useServiceAccountAuth','name','setDataValidation','عدد\x20الشروط','loadCells','712859mroqIt','2BrcrJP','_makeSingleUpdateRequest','=VLOOKUP(B2,Y2:Z,2,FALSE)','235020alBjlJ','template','en-GB','الكود','_rawProperties','CONTROL','getCellByA1','1407999blQtyU','sheet','filter','25170gjJqyO','./misc','saveUpdatedCells','آخر\x20مزامنة','Keywords','../util/terminal','417520Ezhddy','sheetsByTitle'];a14_0x5198=function(){return _0x27fad8;};return a14_0x5198();}module[a14_0x65989f(0x1bf)]={'load':load,'addMatch':addMatch,'getAllSheets':getAllSheets,'duplicateSheet':duplicateSheet,'createControlSheet':createControlSheet};
const a15_0x501748=a15_0x1d32;function a15_0x1c08(){const _0x48bee5=['sheetName','GSpreadsheet','الرسائل\x20الخاصة','Reply\x20Private','جهة\x20السحب','../util/terminal','sheetsByTitle','match','32hAYfGy','useServiceAccountAuth','template','172508wyaxfN','_makeSingleUpdateRequest','sheetsById','logger','duplicate','اكواد\x20جهات\x20السحب','google-spreadsheet','forEach','الكود','Sheet\x20Name','addRow','getCellByA1','1505512DEEgrK','_rawProperties','title','charCodeAt','private','value','1211538cvqrOc','map','name','values','./misc','A1:G','CONTROL','=$Y$2:$Y','sheet','en-EG','12863130AJHwGW','Blocked\x20Keywords','saveUpdatedCells','en-GB','2BtPkkg','../lib/paths','742507tcWeba','allgroups','1390155kqRtAQ','30NJfLPZ','exports','loadCells','filter','sheetId','unshift','891612ibAAGq','[WARN!]\x20Google\x20Sheets\x20Is\x20Not\x20Configured\x20Yet'];a15_0x1c08=function(){return _0x48bee5;};return a15_0x1c08();}(function(_0x2f242c,_0xeeaa0c){const _0x32b8bf=a15_0x1d32,_0x542de5=_0x2f242c();while(!![]){try{const _0x389617=parseInt(_0x32b8bf(0x90))/0x1+-parseInt(_0x32b8bf(0x8e))/0x2*(-parseInt(_0x32b8bf(0x80))/0x3)+-parseInt(_0x32b8bf(0x7a))/0x4+-parseInt(_0x32b8bf(0x92))/0x5*(parseInt(_0x32b8bf(0x93))/0x6)+-parseInt(_0x32b8bf(0x6e))/0x7*(-parseInt(_0x32b8bf(0xa3))/0x8)+parseInt(_0x32b8bf(0x99))/0x9+parseInt(_0x32b8bf(0x8a))/0xa;if(_0x389617===_0xeeaa0c)break;else _0x542de5['push'](_0x542de5['shift']());}catch(_0x43e688){_0x542de5['push'](_0x542de5['shift']());}}}(a15_0x1c08,0xd2e21));const {GoogleSpreadsheet}=require(a15_0x501748(0x74)),terminal=require(a15_0x501748(0xa0)),{_creds}=require(a15_0x501748(0x8f)),{getSheetID}=require('../util/files'),{Sleep}=require(a15_0x501748(0x84)),load=async _0x50d7ab=>{const _0x111468=a15_0x501748;try{const _0x44e827=require(_creds);if(!_0x50d7ab)_0x50d7ab=getSheetID();let _0x5197c8=new GoogleSpreadsheet(_0x50d7ab);return await _0x5197c8[_0x111468(0xa4)](_0x44e827),await _0x5197c8['loadInfo'](),global[_0x111468(0x9c)]=_0x5197c8,_0x5197c8;}catch(_0x527b2e){terminal[_0x111468(0x71)](_0x111468(0x9a),0x1),await Sleep(0xbb8);}},getAllSheets=async(_0x4338d8=![])=>{const _0x373c25=a15_0x501748;await load();let _0x5efed4=Object[_0x373c25(0x83)](global[_0x373c25(0x9c)]['_rawSheets']);return _0x5efed4=_0x5efed4[_0x373c25(0x81)](_0x49dde6=>({'sheetId':_0x49dde6[_0x373c25(0x7b)][_0x373c25(0x97)],'sheetName':_0x49dde6[_0x373c25(0x7b)][_0x373c25(0x7c)]})),!_0x4338d8&&(_0x5efed4=_0x5efed4[_0x373c25(0x96)](_0x17aad5=>_0x17aad5[_0x373c25(0x9b)]!=_0x373c25(0xa5)&&_0x17aad5[_0x373c25(0x9b)]!='CONTROL')),_0x5efed4;},addMatch=async(_0x478cdf,_0x135fa1)=>{const _0x1efde7=a15_0x501748,_0x1307d0=global[_0x1efde7(0x9c)]['sheetsById'][_0x478cdf];await _0x1307d0[_0x1efde7(0x78)](_0x135fa1);},createControlSheet=async _0x4d3947=>{const _0x29b300=a15_0x501748,_0x2a6dca=new Date(),_0x4f3293=_0x2a6dca['toLocaleDateString'](_0x29b300(0x8d))+'\x20'+_0x2a6dca['toLocaleTimeString'](_0x29b300(0x89));_0x4d3947[_0x29b300(0x98)]({'name':'جميع\x20القروبات','chatid':_0x29b300(0x91)}),_0x4d3947[_0x29b300(0x98)]({'name':_0x29b300(0x9d),'chatid':_0x29b300(0x7e)});let _0x484c18=await global[_0x29b300(0x9c)]['addSheet']({'title':_0x29b300(0x86),'tabColor':{'red':0x1,'green':0.3,'blue':0.4},'headerValues':['Condition\x20Name','Keywords',_0x29b300(0x8b),'Applicable\x20To',_0x29b300(0x77),_0x29b300(0x9e),'Reply\x20Group'],'headerRowIndex':0x4}),_0x2eeb42={'sheet':global[_0x29b300(0x9c)][_0x29b300(0xa1)][_0x29b300(0x86)],'sheetId':_0x484c18[_0x29b300(0x7b)]['sheetId'],'sheetName':_0x484c18[_0x29b300(0x7b)][_0x29b300(0x7c)]};await _0x2eeb42['sheet'][_0x29b300(0x95)](_0x29b300(0x85)),await _0x2eeb42[_0x29b300(0x88)]['loadCells']('Y1:Z');let _0x26b261=[['Y1',_0x29b300(0x9f)],['Z1',_0x29b300(0x76)],['B1',_0x4f3293],['C1','آخر\x20مزامنة'],['C2',_0x29b300(0x73)],['A2','=VLOOKUP(B2,Y2:Z,2,FALSE)']];_0x26b261[_0x29b300(0x75)](_0x5cc188=>{const _0x55e843=_0x29b300;_0x2eeb42[_0x55e843(0x88)][_0x55e843(0x79)](_0x5cc188[0x0])[_0x55e843(0x7f)]=_0x5cc188[0x1];}),await addDropList(_0x2eeb42[_0x29b300(0x97)],'B2',_0x29b300(0x87));let _0x3c5a94=0x0;for await(const _0x337591 of _0x4d3947){_0x3c5a94+=0x1,_0x2eeb42[_0x29b300(0x88)][_0x29b300(0x79)]('Y'+(_0x3c5a94+0x1))[_0x29b300(0x7f)]=_0x337591[_0x29b300(0x82)],_0x2eeb42[_0x29b300(0x88)][_0x29b300(0x79)]('Z'+(_0x3c5a94+0x1))['value']=_0x3c5a94;}return await _0x2eeb42[_0x29b300(0x88)][_0x29b300(0x8c)](),_0x2eeb42;},duplicateSheet=async _0x4963be=>{const _0x2e0cf2=a15_0x501748,_0x24daa3=global['GSpreadsheet'][_0x2e0cf2(0xa1)]['template'];let _0x1cc8da=await _0x24daa3[_0x2e0cf2(0x72)]({'title':_0x4963be});return{'sheetId':_0x1cc8da['_rawProperties'][_0x2e0cf2(0x97)],'sheetName':_0x1cc8da[_0x2e0cf2(0x7b)][_0x2e0cf2(0x7c)]};},addDropList=async(_0x5f5861,_0x3d2615,_0x2ba010)=>{const _0x41496b=a15_0x501748,_0x4cbafd=_0x3d2615[_0x41496b(0xa2)](/([A-Z]+)([0-9]+)/),_0x41d616=letterToColumn(_0x4cbafd[0x1])-0x1,_0x1e285b=parseInt(_0x4cbafd[0x2])-0x1,_0x5d44a3=global[_0x41496b(0x9c)][_0x41496b(0x70)][_0x5f5861];let _0x3e29e4=await _0x5d44a3[_0x41496b(0x6f)]('setDataValidation',{'range':{'sheetId':_0x5f5861,'startRowIndex':_0x1e285b,'endRowIndex':_0x1e285b+0x1,'startColumnIndex':_0x41d616,'endColumnIndex':_0x41d616+0x1},'rule':{'condition':{'type':'ONE_OF_RANGE','values':[{'userEnteredValue':_0x2ba010}]},'inputMessage':'','strict':!![],'showCustomUi':!![]}});return _0x3e29e4;},letterToColumn=_0x242c43=>{const _0x3a3c69=a15_0x501748;let _0x595b57=0x0;const {length:_0x2c7089}=_0x242c43;for(let _0x12b0ee=0x0;_0x12b0ee<_0x2c7089;_0x12b0ee++){_0x595b57+=(_0x242c43[_0x3a3c69(0x7d)](_0x12b0ee)-0x40)*0x1a**(_0x2c7089-_0x12b0ee-0x1);}return _0x595b57;};function a15_0x1d32(_0x33b9fe,_0x2c0863){const _0x1c08c8=a15_0x1c08();return a15_0x1d32=function(_0x1d3205,_0x5a914f){_0x1d3205=_0x1d3205-0x6e;let _0x1ee673=_0x1c08c8[_0x1d3205];return _0x1ee673;},a15_0x1d32(_0x33b9fe,_0x2c0863);}module[a15_0x501748(0x94)]={'load':load,'addMatch':addMatch,'getAllSheets':getAllSheets,'duplicateSheet':duplicateSheet,'createControlSheet':createControlSheet};
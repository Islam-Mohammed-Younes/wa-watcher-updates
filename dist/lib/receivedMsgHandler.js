function a8_0x5170(_0x52a177,_0x7a87aa){const _0x16ea5d=a8_0x16ea();return a8_0x5170=function(_0x51701f,_0xa03afb){_0x51701f=_0x51701f-0x10d;let _0x177e8d=_0x16ea5d[_0x51701f];return _0x177e8d;},a8_0x5170(_0x52a177,_0x7a87aa);}const a8_0x3056f4=a8_0x5170;function a8_0x16ea(){const _0x18c97c=['2998824mgSJAJ','map','8bOLyyt','keywords','[ERROR!]\x20Sending\x20to\x20Google\x20Sheets:','1162352dvZKdw','type','6486075WOHoNl','./controlMsgHandler','allgroups','gsheet','applicable','[MATCH!]\x20','getChat','replyprivate','filter','31260747HUHXJG','../util/dataOps','8464692lNboDW','Gdrive','2697094eGaqqt','messageBuffer','toLocaleTimeString','exports','sendSeen','addMatch','every','except','data','../util/files','webViewLink','[ERROR!]\x20Uploading\x20File\x20to\x20Gdrive:','isGroup','from','split','[REPEATED\x20MESSAGE!]\x20','en-EG','name','../util/misc','en-GB','2854935waNsku','GroupID','includes','length','getChats','forEach','phone','toLocaleDateString','isArray','downloadMedia','conditions','../config','reply','chatid','logger','blockedkeywords','createFile','red','some','push'];a8_0x16ea=function(){return _0x18c97c;};return a8_0x16ea();}(function(_0x2547ee,_0x887337){const _0x334bb9=a8_0x5170,_0x314ef9=_0x2547ee();while(!![]){try{const _0x2ca5b4=-parseInt(_0x334bb9(0x13f))/0x1+-parseInt(_0x334bb9(0x112))/0x2+parseInt(_0x334bb9(0x126))/0x3+parseInt(_0x334bb9(0x13a))/0x4+-parseInt(_0x334bb9(0x141))/0x5+-parseInt(_0x334bb9(0x110))/0x6+-parseInt(_0x334bb9(0x10e))/0x7*(-parseInt(_0x334bb9(0x13c))/0x8);if(_0x2ca5b4===_0x887337)break;else _0x314ef9['push'](_0x314ef9['shift']());}catch(_0x110f9f){_0x314ef9['push'](_0x314ef9['shift']());}}}(a8_0x16ea,0xe7834));const {messageBufferMAXLENGTH}=require(a8_0x3056f4(0x131)),{getSheetID,getDriveID}=require(a8_0x3056f4(0x11b)),{data2Stream}=require(a8_0x3056f4(0x10f)),{isFiltered,isFilteredPhone,normalizeArabic}=require(a8_0x3056f4(0x124)),{renderKeywords}=require(a8_0x3056f4(0x142)),terminal=require('../util/terminal'),getGroups=async()=>{const _0x1c165b=a8_0x3056f4;let _0x5ee5ef=await client[_0x1c165b(0x12a)](),_0x42a5f8=await _0x5ee5ef[_0x1c165b(0x10d)](_0x2b6ba8=>_0x2b6ba8[_0x1c165b(0x11e)]==!![]&&_0x2b6ba8[_0x1c165b(0x123)]!=undefined&&_0x2b6ba8['id']['_serialized']!=settings[_0x1c165b(0x127)]);return _0x42a5f8=_0x42a5f8[_0x1c165b(0x13b)](_0x46bd23=>({'name':_0x46bd23[_0x1c165b(0x123)],'chatid':_0x46bd23['id']['_serialized']})),_0x42a5f8;},storeMedia=async(_0x34b178,_0xd2865c)=>{const _0x9e42b4=a8_0x3056f4,_0x4c909f=getDriveID();if(_0x4c909f=='')return terminal[_0x9e42b4(0x134)]('[WARN!]\x20Google\x20Drive\x20Is\x20Not\x20Configured\x20Yet',0x1),'';const _0x5b83c5=await _0x34b178[_0x9e42b4(0x12f)](),_0x1d1a92=await data2Stream(_0x5b83c5,_0xd2865c);try{const _0x368723=await global[_0x9e42b4(0x111)][_0x9e42b4(0x136)](_0x4c909f,_0x1d1a92);return _0x368723[_0x9e42b4(0x11a)][_0x9e42b4(0x11c)];}catch(_0x335d86){terminal['red'](_0x9e42b4(0x11d)+_0x335d86);}},isRepeated=async({message:_0x21f6d9,phone:_0x5c822b})=>{const _0x349db3=a8_0x3056f4,_0x4282ae=messageBuffer[_0x349db3(0x138)](_0x5e8d9d=>_0x5e8d9d['message']==_0x21f6d9&&_0x5e8d9d[_0x349db3(0x12c)]==_0x5c822b);return _0x4282ae;},isMatchText=(_0xd3f0ef,_0x4b6199)=>{const _0x52999b=a8_0x3056f4;_0x4b6199=normalizeArabic(_0x4b6199);if(_0x4b6199[_0x52999b(0x128)]('++')){let _0x448cc9=_0x4b6199[_0x52999b(0x120)]('++')['map'](_0x1947db=>_0x1947db['trim']())[_0x52999b(0x10d)](_0x4d8eab=>_0x4d8eab!=='');return _0x448cc9[_0x52999b(0x118)](_0x1a215b=>_0xd3f0ef[_0x52999b(0x128)](_0x1a215b));}else return _0xd3f0ef['includes'](_0x4b6199);},receivedmsgHandler=async _0x9b5d01=>{const _0x29718d=a8_0x3056f4,_0x2af161=new Date(),_0x1c66b6=_0x2af161[_0x29718d(0x12d)](_0x29718d(0x125))+'\x20'+_0x2af161[_0x29718d(0x114)](_0x29718d(0x122));let _0x7cae8b=await _0x9b5d01[_0x29718d(0x147)]();const _0x3469ab=_0x7cae8b[_0x29718d(0x11e)],_0x521201=_0x3469ab?_0x9b5d01[_0x29718d(0x11f)]:'private',_0x3fd53c=_0x3469ab?_0x9b5d01['author'][_0x29718d(0x120)]('@')[0x0]:_0x9b5d01[_0x29718d(0x11f)][_0x29718d(0x120)]('@')[0x0],_0xd58a2=normalizeArabic(_0x9b5d01['body']);if(await isFiltered(_0xd58a2)){terminal[_0x29718d(0x134)]('[FILTERED\x20WORD!]\x20'+_0x3fd53c,0x1);return;}if(await isFilteredPhone(_0x3fd53c)){terminal[_0x29718d(0x134)]('[FILTERED\x20PHONE!]\x20'+_0x3fd53c,0x1);return;}if(await isRepeated({'message':_0xd58a2,'phone':_0x3fd53c})){terminal[_0x29718d(0x134)](_0x29718d(0x121)+_0x3fd53c,0x1);return;}for(const _0x1082d5 of global[_0x29718d(0x130)]){let _0x37fbd8=_0x1082d5[_0x29718d(0x145)]['some'](_0x25596b=>_0x25596b['chatid']==_0x521201||_0x3469ab&&_0x25596b['chatid']==_0x29718d(0x143)||_0x3469ab&&_0x25596b[_0x29718d(0x133)]==_0x29718d(0x119)&&_0x25596b['except']['every'](_0x4144d0=>_0x4144d0[_0x29718d(0x133)]!=_0x521201)),_0x92ef08=_0x1082d5['keywords'][_0x29718d(0x138)](_0x260947=>{const _0x47f715=_0x29718d;if(Array[_0x47f715(0x12e)](_0x260947)){let _0x4cf1bf=!![];return _0x260947['forEach'](_0x19a4b9=>{const _0x18c907=_0x47f715;Array[_0x18c907(0x12e)](_0x19a4b9)?_0x4cf1bf=_0x4cf1bf&&_0x19a4b9[_0x18c907(0x138)](_0x1ade87=>{const _0x4c2baf=_0x18c907;return _0x1ade87=normalizeArabic(_0x1ade87),_0xd58a2[_0x4c2baf(0x128)](_0x1ade87);}):_0x4cf1bf=_0x4cf1bf&&isMatchText(_0xd58a2,_0x19a4b9);}),_0x4cf1bf;}else return isMatchText(_0xd58a2,_0x260947);}),_0xb32ad2=_0x1082d5[_0x29718d(0x135)][_0x29718d(0x138)](_0x330203=>{const _0x23ebc8=_0x29718d;if(Array[_0x23ebc8(0x12e)](_0x330203)){let _0x1596c0=!![];return _0x330203[_0x23ebc8(0x12b)](_0x3589aa=>{const _0x451e38=_0x23ebc8;Array[_0x451e38(0x12e)](_0x3589aa)?_0x1596c0=_0x1596c0&&_0x3589aa[_0x451e38(0x138)](_0x55dff7=>{const _0x2ff68d=_0x451e38;return _0x55dff7=normalizeArabic(_0x55dff7),_0xd58a2[_0x2ff68d(0x128)](_0x55dff7);}):_0x1596c0=_0x1596c0&&isMatchText(_0xd58a2,_0x3589aa);}),_0x1596c0;}else return isMatchText(_0xd58a2,_0x330203);});if(_0x37fbd8)_0x7cae8b[_0x29718d(0x116)]();if(_0x37fbd8&&_0x92ef08&&!_0xb32ad2){const _0x574564=getSheetID();if(_0x574564=='')return;let _0x418e45=_0x3469ab?(await getGroups())[_0x29718d(0x10d)](_0x4a63a0=>_0x4a63a0[_0x29718d(0x133)]==_0x521201)[0x0][_0x29718d(0x123)]:'Private',_0x50934a=renderKeywords(_0x1082d5[_0x29718d(0x13d)]),_0x41352d=_0x9b5d01['hasMedia']?await storeMedia(_0x9b5d01,_0x3fd53c):'';const _0x46775c=[_0x1c66b6,_0x3fd53c,_0x418e45,_0xd58a2,_0x41352d,_0x1082d5[_0x29718d(0x123)],_0x50934a];terminal['logger'](_0x29718d(0x146)+_0x418e45+'-'+_0x3fd53c+'=>'+_0x9b5d01[_0x29718d(0x140)]);const _0x4c9092=_0x1082d5[_0x29718d(0x144)]['sheetId'];try{Gsheet[_0x29718d(0x117)](_0x4c9092,_0x46775c);}catch(_0x446098){terminal[_0x29718d(0x137)](_0x29718d(0x13e)+_0x446098);}if(_0x1082d5[_0x29718d(0x132)]&&_0x3469ab)_0x9b5d01[_0x29718d(0x132)](_0x1082d5[_0x29718d(0x132)]);if(_0x1082d5[_0x29718d(0x148)])client['sendMessage'](_0x3fd53c+'@c.us',_0x1082d5[_0x29718d(0x148)]);let _0x56249d=messageBuffer[_0x29718d(0x129)];_0x56249d>messageBufferMAXLENGTH&&messageBuffer['splice'](0x0,_0x56249d-messageBufferMAXLENGTH),global[_0x29718d(0x113)][_0x29718d(0x139)]({'message':_0xd58a2,'phone':_0x3fd53c});}}};module[a8_0x3056f4(0x115)]={'receivedmsgHandler':receivedmsgHandler};
const a8_0x231aec=a8_0x4a86;function a8_0x2562(){const _0x2c5a61=['keywords','splice','createFile','1130gZovFe','4072lzufpo','97749JUcMCx','Gdrive','getChats','reply','logger','GroupID','some','split','gsheet','forEach','messageBuffer','3150390ibqBTo','except','119OzEZYI','author','812560nsHaTV','../util/terminal','[REPEATED\x20MESSAGE!]\x20','type','_serialized','every','map','blockedkeywords','[FILTERED\x20PHONE!]\x20','filter','../util/dataOps','208Oirqcw','21672DQLGef','name','push','trim','body','applicable','isArray','data','addMatch','[FILTERED\x20WORD!]\x20','[ERROR!]\x20Uploading\x20File\x20to\x20Gdrive:','toLocaleDateString','from','[WARN!]\x20Google\x20Drive\x20Is\x20Not\x20Configured\x20Yet','[ERROR!]\x20Sending\x20to\x20Google\x20Sheets:','exports','3317790bVZquX','93546JgxAWt','en-GB','chatid','en-EG','includes','sendMessage','replyprivate','length','conditions','isGroup','[MATCH!]\x20','red','../config','private','getChat','../util/misc','phone'];a8_0x2562=function(){return _0x2c5a61;};return a8_0x2562();}(function(_0x28fcf7,_0x212cf9){const _0x1ee9e2=a8_0x4a86,_0xfc1bef=_0x28fcf7();while(!![]){try{const _0x421648=-parseInt(_0x1ee9e2(0xa3))/0x1*(parseInt(_0x1ee9e2(0x88))/0x2)+-parseInt(_0x1ee9e2(0xb5))/0x3+-parseInt(_0x1ee9e2(0x98))/0x4+-parseInt(_0x1ee9e2(0xb4))/0x5+parseInt(_0x1ee9e2(0x94))/0x6+-parseInt(_0x1ee9e2(0x96))/0x7*(parseInt(_0x1ee9e2(0xa4))/0x8)+-parseInt(_0x1ee9e2(0x89))/0x9*(-parseInt(_0x1ee9e2(0x87))/0xa);if(_0x421648===_0x212cf9)break;else _0xfc1bef['push'](_0xfc1bef['shift']());}catch(_0x2b40a2){_0xfc1bef['push'](_0xfc1bef['shift']());}}}(a8_0x2562,0x5dfa9));const {messageBufferMAXLENGTH}=require(a8_0x231aec(0x7f)),{getSheetID,getDriveID}=require('../util/files'),{data2Stream}=require(a8_0x231aec(0xa2)),{isFiltered,isFilteredPhone,normalizeArabic}=require(a8_0x231aec(0x82)),{renderKeywords}=require('./controlMsgHandler'),terminal=require(a8_0x231aec(0x99)),getGroups=async()=>{const _0x3f38c9=a8_0x231aec;let _0x164e22=await client[_0x3f38c9(0x8b)](),_0x147cb0=await _0x164e22[_0x3f38c9(0xa1)](_0x566479=>_0x566479[_0x3f38c9(0x7c)]==!![]&&_0x566479['name']!=undefined&&_0x566479['id']['_serialized']!=settings[_0x3f38c9(0x8e)]);return _0x147cb0=_0x147cb0[_0x3f38c9(0x9e)](_0x5b41f8=>({'name':_0x5b41f8[_0x3f38c9(0xa5)],'chatid':_0x5b41f8['id'][_0x3f38c9(0x9c)]})),_0x147cb0;},storeMedia=async(_0x51a670,_0x38c7ea)=>{const _0x1f4cfa=a8_0x231aec,_0x85474f=getDriveID();if(_0x85474f=='')return terminal[_0x1f4cfa(0x8d)](_0x1f4cfa(0xb1),0x1),'';const _0x2d226e=await _0x51a670['downloadMedia'](),_0x9c2d74=await data2Stream(_0x2d226e,_0x38c7ea);try{const _0x1a45ba=await global[_0x1f4cfa(0x8a)][_0x1f4cfa(0x86)](_0x85474f,_0x9c2d74);return _0x1a45ba[_0x1f4cfa(0xab)]['webViewLink'];}catch(_0x56ca59){terminal[_0x1f4cfa(0x7e)](_0x1f4cfa(0xae)+_0x56ca59);}},isRepeated=async({message:_0x10bc98,phone:_0x35c0bd})=>{const _0x5e4f62=a8_0x231aec,_0x8e996c=messageBuffer[_0x5e4f62(0x8f)](_0xbd7d01=>_0xbd7d01['message']==_0x10bc98&&_0xbd7d01[_0x5e4f62(0x83)]==_0x35c0bd);return _0x8e996c;},isMatchText=(_0x2ce51f,_0x5ae2be)=>{const _0x5de6d8=a8_0x231aec;_0x5ae2be=normalizeArabic(_0x5ae2be);if(_0x5ae2be[_0x5de6d8(0xb9)]('++')){let _0x15461c=_0x5ae2be[_0x5de6d8(0x90)]('++')[_0x5de6d8(0x9e)](_0x2356ab=>_0x2356ab[_0x5de6d8(0xa7)]())[_0x5de6d8(0xa1)](_0x3d4227=>_0x3d4227!=='');return _0x15461c[_0x5de6d8(0x9d)](_0x3fbe3a=>_0x2ce51f[_0x5de6d8(0xb9)](_0x3fbe3a));}else return _0x2ce51f[_0x5de6d8(0xb9)](_0x5ae2be);},receivedmsgHandler=async _0x471ba4=>{const _0x5e856b=a8_0x231aec,_0x2cc8b9=new Date(),_0x3dcde3=_0x2cc8b9[_0x5e856b(0xaf)](_0x5e856b(0xb6))+'\x20'+_0x2cc8b9['toLocaleTimeString'](_0x5e856b(0xb8));let _0x47c701=await _0x471ba4[_0x5e856b(0x81)]();const _0x309860=_0x47c701['isGroup'],_0x267bbf=_0x309860?_0x471ba4[_0x5e856b(0xb0)]:_0x5e856b(0x80),_0x17cf65=_0x309860?_0x471ba4[_0x5e856b(0x97)]['split']('@')[0x0]:_0x471ba4[_0x5e856b(0xb0)][_0x5e856b(0x90)]('@')[0x0],_0x4aab90=normalizeArabic(_0x471ba4[_0x5e856b(0xa8)]);if(await isFiltered(_0x4aab90)){terminal[_0x5e856b(0x8d)](_0x5e856b(0xad)+_0x17cf65,0x1);return;}if(await isFilteredPhone(_0x17cf65)){terminal[_0x5e856b(0x8d)](_0x5e856b(0xa0)+_0x17cf65,0x1);return;}if(await isRepeated({'message':_0x4aab90,'phone':_0x17cf65})){terminal[_0x5e856b(0x8d)](_0x5e856b(0x9a)+_0x17cf65,0x1);return;}for(const _0x284705 of global[_0x5e856b(0x7b)]){let _0x8084d6=_0x284705[_0x5e856b(0xa9)][_0x5e856b(0x8f)](_0x63e9b8=>_0x63e9b8[_0x5e856b(0xb7)]==_0x267bbf||_0x309860&&_0x63e9b8[_0x5e856b(0xb7)]=='allgroups'||_0x309860&&_0x63e9b8[_0x5e856b(0xb7)]==_0x5e856b(0x95)&&_0x63e9b8[_0x5e856b(0x95)][_0x5e856b(0x9d)](_0x412aa1=>_0x412aa1[_0x5e856b(0xb7)]!=_0x267bbf)),_0x383ac8=_0x284705[_0x5e856b(0x84)]['some'](_0x2b704b=>{const _0x1c3725=_0x5e856b;if(Array[_0x1c3725(0xaa)](_0x2b704b)){let _0x44bc0d=!![];return _0x2b704b[_0x1c3725(0x92)](_0xa37852=>{const _0x119f55=_0x1c3725;Array[_0x119f55(0xaa)](_0xa37852)?_0x44bc0d=_0x44bc0d&&_0xa37852['some'](_0x4330f6=>{return _0x4330f6=normalizeArabic(_0x4330f6),_0x4aab90['includes'](_0x4330f6);}):_0x44bc0d=_0x44bc0d&&isMatchText(_0x4aab90,_0xa37852);}),_0x44bc0d;}else return isMatchText(_0x4aab90,_0x2b704b);}),_0x49bc99=_0x284705[_0x5e856b(0x9f)][_0x5e856b(0x8f)](_0x53019e=>{const _0xbd58ac=_0x5e856b;if(Array['isArray'](_0x53019e)){let _0x19d397=!![];return _0x53019e[_0xbd58ac(0x92)](_0x37b1cc=>{const _0x5071c1=_0xbd58ac;Array[_0x5071c1(0xaa)](_0x37b1cc)?_0x19d397=_0x19d397&&_0x37b1cc[_0x5071c1(0x8f)](_0x14d4c5=>{const _0x40d24=_0x5071c1;return _0x14d4c5=normalizeArabic(_0x14d4c5),_0x4aab90[_0x40d24(0xb9)](_0x14d4c5);}):_0x19d397=_0x19d397&&isMatchText(_0x4aab90,_0x37b1cc);}),_0x19d397;}else return isMatchText(_0x4aab90,_0x53019e);});if(_0x8084d6)_0x47c701['sendSeen']();if(_0x8084d6&&_0x383ac8&&!_0x49bc99){const _0x26eccd=getSheetID();if(_0x26eccd=='')return;let _0xfdf266=_0x309860?(await getGroups())[_0x5e856b(0xa1)](_0xfecd5f=>_0xfecd5f[_0x5e856b(0xb7)]==_0x267bbf)[0x0]['name']:'Private',_0x46726e=renderKeywords(_0x284705[_0x5e856b(0x84)]),_0x264c44=_0x471ba4['hasMedia']?await storeMedia(_0x471ba4,_0x17cf65):'';const _0x171e1d=[_0x3dcde3,_0x17cf65,_0xfdf266,_0x4aab90,_0x264c44,_0x284705['name'],_0x46726e];terminal[_0x5e856b(0x8d)](_0x5e856b(0x7d)+_0xfdf266+'-'+_0x17cf65+'=>'+_0x471ba4[_0x5e856b(0x9b)]);const _0x3f756b=_0x284705[_0x5e856b(0x91)]['sheetId'];try{Gsheet[_0x5e856b(0xac)](_0x3f756b,_0x171e1d);}catch(_0x28d899){terminal[_0x5e856b(0x7e)](_0x5e856b(0xb2)+_0x28d899);}if(_0x284705[_0x5e856b(0x8c)]&&_0x309860)_0x471ba4['reply'](_0x284705['reply']);if(_0x284705[_0x5e856b(0xbb)])client[_0x5e856b(0xba)](_0x17cf65+'@c.us',_0x284705[_0x5e856b(0xbb)]);let _0x1ff117=messageBuffer[_0x5e856b(0xbc)];_0x1ff117>messageBufferMAXLENGTH&&messageBuffer[_0x5e856b(0x85)](0x0,_0x1ff117-messageBufferMAXLENGTH),global[_0x5e856b(0x93)][_0x5e856b(0xa6)]({'message':_0x4aab90,'phone':_0x17cf65});}}};function a8_0x4a86(_0x3d3a78,_0x40a565){const _0x256230=a8_0x2562();return a8_0x4a86=function(_0x4a86ad,_0x2043a1){_0x4a86ad=_0x4a86ad-0x7b;let _0x1e3658=_0x256230[_0x4a86ad];return _0x1e3658;},a8_0x4a86(_0x3d3a78,_0x40a565);}module[a8_0x231aec(0xb3)]={'receivedmsgHandler':receivedmsgHandler};
const a11_0x3a0dd5=a11_0x5809;function a11_0x370b(){const _0xaf23fd=['5815gXwtIu','92UySDSi','push','spreadsheetId','fs-extra','readFile','readFileSync','6576iHJEPV','52255yotLRm','filter','emptyDir','parse','writeFile','access','1897lXPGgE','799356dSycIW','9004140oToJAh','188tmTVaS','1381140omIQOb','stringify','util','gdriveId','ensureDir','exports','11841sxSHJr','../lib/paths'];a11_0x370b=function(){return _0xaf23fd;};return a11_0x370b();}(function(_0x1de98b,_0x48b913){const _0xd95495=a11_0x5809,_0xdfd17b=_0x1de98b();while(!![]){try{const _0x464927=-parseInt(_0xd95495(0x1da))/0x1+-parseInt(_0xd95495(0x1d1))/0x2*(parseInt(_0xd95495(0x1d8))/0x3)+parseInt(_0xd95495(0x1db))/0x4*(parseInt(_0xd95495(0x1c8))/0x5)+-parseInt(_0xd95495(0x1cf))/0x6+parseInt(_0xd95495(0x1ce))/0x7*(-parseInt(_0xd95495(0x1c7))/0x8)+-parseInt(_0xd95495(0x1d2))/0x9+parseInt(_0xd95495(0x1d0))/0xa;if(_0x464927===_0x48b913)break;else _0xdfd17b['push'](_0xdfd17b['shift']());}catch(_0x150240){_0xdfd17b['push'](_0xdfd17b['shift']());}}}(a11_0x370b,0x3e22a));const fs=require(a11_0x3a0dd5(0x1c4)),{promisify}=require(a11_0x3a0dd5(0x1d4)),WriteFile=promisify(fs[a11_0x3a0dd5(0x1cc)]),ReadFile=promisify(fs[a11_0x3a0dd5(0x1c5)]),{AuthFolder}=require(a11_0x3a0dd5(0x1d9)),emptyDir=async _0xa18e32=>await fs[a11_0x3a0dd5(0x1ca)](_0xa18e32),getSettings=()=>{const _0x108e21=a11_0x3a0dd5,{_settings:_0x427a81,_filteredwords:_0x1b4f1d}=require(_0x108e21(0x1d9)),_0x3f39e6=JSON[_0x108e21(0x1cb)](fs[_0x108e21(0x1c6)](_0x427a81));return _0x3f39e6;},setSettings=async _0x2d9756=>{const _0x5ceb4e=a11_0x3a0dd5,{_settings:_0x25b90a}=require(_0x5ceb4e(0x1d9));await WriteFile(_0x25b90a,JSON[_0x5ceb4e(0x1d3)](_0x2d9756));},initSettings=async()=>{const _0x20fb50=a11_0x3a0dd5,{_settings:_0x2a663a}=require('../lib/paths');await WriteFile(_0x2a663a,JSON[_0x20fb50(0x1d3)]({'GroupID':'','ver':0x1}),{'flag':'wx'}),await fs['emptyDir'](AuthFolder);},getStoredGroups=()=>{const _0x2c1785=a11_0x3a0dd5,{_storedgroups:_0x2ae6cc}=require('../lib/paths'),_0x3a544c=JSON[_0x2c1785(0x1cb)](fs[_0x2c1785(0x1c6)](_0x2ae6cc));return _0x3a544c;},setStoredGroups=async _0x223091=>{const {_storedgroups:_0x490d55}=require('../lib/paths');await WriteFile(_0x490d55,JSON['stringify'](_0x223091));},initStoredGroups=async()=>{const _0x1abe25=a11_0x3a0dd5,{_storedgroups:_0x4387c9}=require(_0x1abe25(0x1d9));await WriteFile(_0x4387c9,JSON[_0x1abe25(0x1d3)]({'groups':[]}),{'flag':'w'});},initFilter=async()=>{const {_filteredwords:_0x149804}=require('../lib/paths');await WriteFile(_0x149804,'',{'flag':'wx'});},initFilterPhones=async()=>{const _0x12e54e=a11_0x3a0dd5,{_filteredphones:_0x16e34f}=require(_0x12e54e(0x1d9));await WriteFile(_0x16e34f,'',{'flag':'wx'});},getSheetID=()=>{const _0x469ee5=a11_0x3a0dd5,{_google:_0x22d870}=require(_0x469ee5(0x1d9)),_0x374e01=JSON['parse'](fs[_0x469ee5(0x1c6)](_0x22d870));return _0x374e01[_0x469ee5(0x1dd)];},setSheetID=async _0x3cf342=>{const _0x47c4b0=a11_0x3a0dd5,{_google:_0x87304f}=require('../lib/paths'),_0x3727fb=JSON[_0x47c4b0(0x1cb)](fs['readFileSync'](_0x87304f));_0x3727fb[_0x47c4b0(0x1dd)]=_0x3cf342,await WriteFile(_0x87304f,JSON[_0x47c4b0(0x1d3)](_0x3727fb));},getDriveID=()=>{const _0x48e9a6=a11_0x3a0dd5,{_google:_0x2fc76a}=require(_0x48e9a6(0x1d9)),_0x22f67d=JSON[_0x48e9a6(0x1cb)](fs['readFileSync'](_0x2fc76a));return _0x22f67d[_0x48e9a6(0x1d5)];},setDriveID=async _0x27992d=>{const _0x439ab1=a11_0x3a0dd5,{_google:_0x285a8f}=require(_0x439ab1(0x1d9)),_0x1e821c=JSON[_0x439ab1(0x1cb)](fs['readFileSync'](_0x285a8f));_0x1e821c[_0x439ab1(0x1d5)]=_0x27992d,await WriteFile(_0x285a8f,JSON[_0x439ab1(0x1d3)](_0x1e821c));},initGoogle=async()=>{const _0x3aa8b9=a11_0x3a0dd5,{_google:_0x435af7}=require(_0x3aa8b9(0x1d9));await WriteFile(_0x435af7,JSON[_0x3aa8b9(0x1d3)]({'spreadsheetId':'','gdriveId':''}),{'flag':'wx'});},getConditions=()=>{const _0x320355=a11_0x3a0dd5,{_conditions:_0x517d3a}=require('../lib/paths'),{conditions:_0x2d2389}=JSON[_0x320355(0x1cb)](fs['readFileSync'](_0x517d3a));return _0x2d2389;},addCondition=async _0xb62304=>{const _0x306a60=a11_0x3a0dd5,{_conditions:_0x4ad33a}=require(_0x306a60(0x1d9));let {conditions:_0x342617}=JSON[_0x306a60(0x1cb)](fs[_0x306a60(0x1c6)](_0x4ad33a));_0x342617[_0x306a60(0x1dc)](_0xb62304),await WriteFile(_0x4ad33a,JSON[_0x306a60(0x1d3)]({'conditions':_0x342617}));},deleteCondition=async _0x13ddc4=>{const _0x3e66d1=a11_0x3a0dd5,{_conditions:_0x2224aa}=require('../lib/paths');let {conditions:_0x160fa6}=JSON['parse'](fs['readFileSync'](_0x2224aa));_0x160fa6=_0x160fa6[_0x3e66d1(0x1c9)](_0x5763f8=>_0x5763f8['name']!=_0x13ddc4),await WriteFile(_0x2224aa,JSON[_0x3e66d1(0x1d3)]({'conditions':_0x160fa6}));},initConditions=async()=>{const _0xffbf1e=a11_0x3a0dd5,{_conditions:_0xb4a3ac}=require(_0xffbf1e(0x1d9));await WriteFile(_0xb4a3ac,JSON[_0xffbf1e(0x1d3)]({'conditions':[]}),{'flag':'w'});},fileExists=_0x4c697a=>new Promise(_0x3409f5=>fs[a11_0x3a0dd5(0x1cd)](_0x4c697a,fs['F_OK'],_0x36c04c=>_0x3409f5(!_0x36c04c))),ensureDir=async _0x42b1b3=>{const _0x55811c=a11_0x3a0dd5;await fs[_0x55811c(0x1d6)](_0x42b1b3);};function a11_0x5809(_0x3ba603,_0x252132){const _0x370bb4=a11_0x370b();return a11_0x5809=function(_0x580914,_0xe00a39){_0x580914=_0x580914-0x1c4;let _0x2b8ec3=_0x370bb4[_0x580914];return _0x2b8ec3;},a11_0x5809(_0x3ba603,_0x252132);}module[a11_0x3a0dd5(0x1d7)]={'getSettings':getSettings,'setSettings':setSettings,'initSettings':initSettings,'getStoredGroups':getStoredGroups,'setStoredGroups':setStoredGroups,'initStoredGroups':initStoredGroups,'getSheetID':getSheetID,'setSheetID':setSheetID,'getDriveID':getDriveID,'setDriveID':setDriveID,'getConditions':getConditions,'addCondition':addCondition,'deleteCondition':deleteCondition,'initConditions':initConditions,'initGoogle':initGoogle,'fileExists':fileExists,'ensureDir':ensureDir,'emptyDir':emptyDir,'ReadFile':ReadFile,'initFilter':initFilter,'initFilterPhones':initFilterPhones};
const a11_0x537407=a11_0x24ff;function a11_0x24ff(_0x5a3039,_0x31f6e4){const _0x4b6809=a11_0x4b68();return a11_0x24ff=function(_0x24ffa3,_0x386e5a){_0x24ffa3=_0x24ffa3-0x75;let _0x276c94=_0x4b6809[_0x24ffa3];return _0x276c94;},a11_0x24ff(_0x5a3039,_0x31f6e4);}(function(_0x562c68,_0x44c164){const _0x4b642b=a11_0x24ff,_0x119a81=_0x562c68();while(!![]){try{const _0x3facb3=parseInt(_0x4b642b(0x7b))/0x1*(-parseInt(_0x4b642b(0x7f))/0x2)+-parseInt(_0x4b642b(0x78))/0x3+parseInt(_0x4b642b(0x88))/0x4*(-parseInt(_0x4b642b(0x80))/0x5)+-parseInt(_0x4b642b(0x8a))/0x6+-parseInt(_0x4b642b(0x7c))/0x7+parseInt(_0x4b642b(0x79))/0x8*(-parseInt(_0x4b642b(0x89))/0x9)+parseInt(_0x4b642b(0x87))/0xa;if(_0x3facb3===_0x44c164)break;else _0x119a81['push'](_0x119a81['shift']());}catch(_0x4bfa3b){_0x119a81['push'](_0x119a81['shift']());}}}(a11_0x4b68,0x4170f));const fs=require(a11_0x537407(0x7d)),{promisify}=require('util'),WriteFile=promisify(fs[a11_0x537407(0x86)]),ReadFile=promisify(fs['readFile']),{AuthFolder}=require('../lib/paths'),emptyDir=async _0xf58278=>await fs[a11_0x537407(0x7e)](_0xf58278),getSettings=()=>{const _0x5afe49=a11_0x537407,{_settings:_0x4da623,_filteredwords:_0x5f0dd3}=require(_0x5afe49(0x82)),_0x970010=JSON['parse'](fs[_0x5afe49(0x8b)](_0x4da623));return _0x970010;},setSettings=async _0x17954e=>{const _0x3b0cbd=a11_0x537407,{_settings:_0xb0b0b3}=require('../lib/paths');await WriteFile(_0xb0b0b3,JSON[_0x3b0cbd(0x84)](_0x17954e));},initSettings=async()=>{const _0x4c28ec=a11_0x537407,{_settings:_0x81ba11}=require(_0x4c28ec(0x82));await WriteFile(_0x81ba11,JSON[_0x4c28ec(0x84)]({'GroupID':'','ver':0x1}),{'flag':'wx'}),await fs[_0x4c28ec(0x7e)](AuthFolder);},getStoredGroups=()=>{const _0x5af718=a11_0x537407,{_storedgroups:_0x487ced}=require(_0x5af718(0x82)),_0x4b87ff=JSON[_0x5af718(0x75)](fs[_0x5af718(0x8b)](_0x487ced));return _0x4b87ff;},setStoredGroups=async _0x4ab8fa=>{const _0x20f54f=a11_0x537407,{_storedgroups:_0xa4ff02}=require(_0x20f54f(0x82));await WriteFile(_0xa4ff02,JSON[_0x20f54f(0x84)](_0x4ab8fa));},initStoredGroups=async()=>{const _0xfd76f4=a11_0x537407,{_storedgroups:_0x1cdf73}=require(_0xfd76f4(0x82));await WriteFile(_0x1cdf73,JSON[_0xfd76f4(0x84)]({'groups':[]}),{'flag':'w'});},initFilter=async()=>{const _0x13ac74=a11_0x537407,{_filteredwords:_0x103044}=require(_0x13ac74(0x82));await WriteFile(_0x103044,'',{'flag':'wx'});},initFilterPhones=async()=>{const {_filteredphones:_0xb92db7}=require('../lib/paths');await WriteFile(_0xb92db7,'',{'flag':'wx'});},getSheetID=()=>{const _0x52b4c0=a11_0x537407,{_google:_0x370e7a}=require(_0x52b4c0(0x82)),_0x4471d2=JSON[_0x52b4c0(0x75)](fs[_0x52b4c0(0x8b)](_0x370e7a));return _0x4471d2['spreadsheetId'];},setSheetID=async _0x2b11fa=>{const _0x1a25e1=a11_0x537407,{_google:_0x9a4d17}=require(_0x1a25e1(0x82)),_0x19f6e2=JSON['parse'](fs[_0x1a25e1(0x8b)](_0x9a4d17));_0x19f6e2[_0x1a25e1(0x81)]=_0x2b11fa,await WriteFile(_0x9a4d17,JSON[_0x1a25e1(0x84)](_0x19f6e2));},getDriveID=()=>{const _0x1f9dc9=a11_0x537407,{_google:_0x4bfe12}=require(_0x1f9dc9(0x82)),_0x2f85b7=JSON['parse'](fs[_0x1f9dc9(0x8b)](_0x4bfe12));return _0x2f85b7['gdriveId'];},setDriveID=async _0x396ad4=>{const _0x3adba4=a11_0x537407,{_google:_0x377e83}=require('../lib/paths'),_0x4eb2e0=JSON[_0x3adba4(0x75)](fs[_0x3adba4(0x8b)](_0x377e83));_0x4eb2e0['gdriveId']=_0x396ad4,await WriteFile(_0x377e83,JSON[_0x3adba4(0x84)](_0x4eb2e0));},initGoogle=async()=>{const _0x3fc5f4=a11_0x537407,{_google:_0x4781ef}=require('../lib/paths');await WriteFile(_0x4781ef,JSON[_0x3fc5f4(0x84)]({'spreadsheetId':'','gdriveId':''}),{'flag':'wx'});},getConditions=()=>{const _0x2521f9=a11_0x537407,{_conditions:_0xc7fffb}=require(_0x2521f9(0x82)),{conditions:_0x8890a5}=JSON['parse'](fs[_0x2521f9(0x8b)](_0xc7fffb));return _0x8890a5;},addCondition=async _0x39bc22=>{const _0x43d906=a11_0x537407,{_conditions:_0xe208e5}=require(_0x43d906(0x82));let {conditions:_0x125f1d}=JSON[_0x43d906(0x75)](fs[_0x43d906(0x8b)](_0xe208e5));_0x125f1d[_0x43d906(0x85)](_0x39bc22),await WriteFile(_0xe208e5,JSON['stringify']({'conditions':_0x125f1d}));},deleteCondition=async _0x40b9b7=>{const _0x1b6f54=a11_0x537407,{_conditions:_0x1af3b8}=require('../lib/paths');let {conditions:_0xbc503}=JSON[_0x1b6f54(0x75)](fs[_0x1b6f54(0x8b)](_0x1af3b8));_0xbc503=_0xbc503[_0x1b6f54(0x8c)](_0x1aee8f=>_0x1aee8f[_0x1b6f54(0x76)]!=_0x40b9b7),await WriteFile(_0x1af3b8,JSON[_0x1b6f54(0x84)]({'conditions':_0xbc503}));},initConditions=async()=>{const _0x49009d=a11_0x537407,{_conditions:_0x13ce85}=require(_0x49009d(0x82));await WriteFile(_0x13ce85,JSON[_0x49009d(0x84)]({'conditions':[]}),{'flag':'w'});},log2file=async _0x3116c9=>{const _0x5d37fe=a11_0x537407,{_logger:_0x5b0870}=require(_0x5d37fe(0x82));await WriteFile(_0x5b0870,_0x3116c9+'\x20\x0a',{'flag':'a'});},fileExists=_0x832f7=>new Promise(_0x299439=>fs[a11_0x537407(0x77)](_0x832f7,fs[a11_0x537407(0x83)],_0x40e785=>_0x299439(!_0x40e785))),ensureDir=async _0x900a46=>{await fs['ensureDir'](_0x900a46);};module[a11_0x537407(0x7a)]={'getSettings':getSettings,'setSettings':setSettings,'initSettings':initSettings,'getStoredGroups':getStoredGroups,'setStoredGroups':setStoredGroups,'initStoredGroups':initStoredGroups,'getSheetID':getSheetID,'setSheetID':setSheetID,'getDriveID':getDriveID,'setDriveID':setDriveID,'getConditions':getConditions,'addCondition':addCondition,'deleteCondition':deleteCondition,'initConditions':initConditions,'initGoogle':initGoogle,'fileExists':fileExists,'ensureDir':ensureDir,'emptyDir':emptyDir,'ReadFile':ReadFile,'initFilter':initFilter,'initFilterPhones':initFilterPhones,'log2file':log2file};function a11_0x4b68(){const _0x33ebae=['exports','7ssaLit','1239434EmRdap','fs-extra','emptyDir','61474WSoKoH','5Hwgrqs','spreadsheetId','../lib/paths','F_OK','stringify','push','writeFile','20030810TeQuLO','1455012neEqYx','27jBfbsB','3172776mrCLab','readFileSync','filter','parse','name','access','146799YqRWfQ','1070216fYMWiP'];a11_0x4b68=function(){return _0x33ebae;};return a11_0x4b68();}
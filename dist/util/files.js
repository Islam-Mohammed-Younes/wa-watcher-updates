const a11_0x5cdf3e=a11_0x2466;(function(_0x1b77fa,_0x4720b5){const _0x7a3b95=a11_0x2466,_0x8f7e5=_0x1b77fa();while(!![]){try{const _0x368a8a=parseInt(_0x7a3b95(0xe1))/0x1*(parseInt(_0x7a3b95(0xe5))/0x2)+parseInt(_0x7a3b95(0xd2))/0x3*(parseInt(_0x7a3b95(0xe6))/0x4)+parseInt(_0x7a3b95(0xd8))/0x5+parseInt(_0x7a3b95(0xe8))/0x6+parseInt(_0x7a3b95(0xdd))/0x7*(parseInt(_0x7a3b95(0xd6))/0x8)+-parseInt(_0x7a3b95(0xe4))/0x9+-parseInt(_0x7a3b95(0xe2))/0xa;if(_0x368a8a===_0x4720b5)break;else _0x8f7e5['push'](_0x8f7e5['shift']());}catch(_0x4a216d){_0x8f7e5['push'](_0x8f7e5['shift']());}}}(a11_0xbe68,0xcde80));const fs=require(a11_0x5cdf3e(0xdf)),{promisify}=require(a11_0x5cdf3e(0xd7)),WriteFile=promisify(fs[a11_0x5cdf3e(0xd4)]),ReadFile=promisify(fs[a11_0x5cdf3e(0xd9)]),{AuthFolder}=require(a11_0x5cdf3e(0xe9)),emptyDir=async _0x257ac0=>await fs[a11_0x5cdf3e(0xe7)](_0x257ac0),getSettings=()=>{const _0x3db361=a11_0x5cdf3e,{_settings:_0x4d3746,_filteredwords:_0x39bff7}=require('../lib/paths'),_0x1be1f8=JSON['parse'](fs[_0x3db361(0xea)](_0x4d3746));return _0x1be1f8;},setSettings=async _0x48e5cd=>{const _0x52f30a=a11_0x5cdf3e,{_settings:_0xf2ad74}=require(_0x52f30a(0xe9));await WriteFile(_0xf2ad74,JSON['stringify'](_0x48e5cd));},initSettings=async()=>{const _0x4c38f4=a11_0x5cdf3e,{_settings:_0x5b03c7}=require('../lib/paths');await WriteFile(_0x5b03c7,JSON[_0x4c38f4(0xd3)]({'GroupID':'','ver':0x1}),{'flag':'wx'}),await fs[_0x4c38f4(0xe7)](AuthFolder);},initFilter=async()=>{const _0x3eb8d6=a11_0x5cdf3e,{_filteredwords:_0x19cdd3}=require(_0x3eb8d6(0xe9));await WriteFile(_0x19cdd3,'',{'flag':'wx'});},initFilterPhones=async()=>{const {_filteredphones:_0x1f2fb1}=require('../lib/paths');await WriteFile(_0x1f2fb1,'',{'flag':'wx'});},getSheetID=()=>{const _0x48eb6b=a11_0x5cdf3e,{_google:_0x9afbdb}=require(_0x48eb6b(0xe9)),_0x22581d=JSON[_0x48eb6b(0xeb)](fs[_0x48eb6b(0xea)](_0x9afbdb));return _0x22581d[_0x48eb6b(0xdc)];},setSheetID=async _0xfc756a=>{const _0x24a9fa=a11_0x5cdf3e,{_google:_0x228500}=require(_0x24a9fa(0xe9)),_0x4262f6=JSON[_0x24a9fa(0xeb)](fs['readFileSync'](_0x228500));_0x4262f6[_0x24a9fa(0xdc)]=_0xfc756a,await WriteFile(_0x228500,JSON['stringify'](_0x4262f6));},getDriveID=()=>{const _0x2d61f5=a11_0x5cdf3e,{_google:_0x50c010}=require(_0x2d61f5(0xe9)),_0x463a3b=JSON[_0x2d61f5(0xeb)](fs[_0x2d61f5(0xea)](_0x50c010));return _0x463a3b[_0x2d61f5(0xe3)];},setDriveID=async _0x802ac2=>{const _0x15f1e4=a11_0x5cdf3e,{_google:_0x163eb6}=require(_0x15f1e4(0xe9)),_0x186bf2=JSON[_0x15f1e4(0xeb)](fs[_0x15f1e4(0xea)](_0x163eb6));_0x186bf2[_0x15f1e4(0xe3)]=_0x802ac2,await WriteFile(_0x163eb6,JSON['stringify'](_0x186bf2));},initGoogle=async()=>{const _0x2f837f=a11_0x5cdf3e,{_google:_0x2e2baa}=require(_0x2f837f(0xe9));await WriteFile(_0x2e2baa,JSON['stringify']({'spreadsheetId':'','gdriveId':''}),{'flag':'wx'});},getConditions=()=>{const _0x76631a=a11_0x5cdf3e,{_conditions:_0x2f1eab}=require(_0x76631a(0xe9)),{conditions:_0x36159b}=JSON['parse'](fs['readFileSync'](_0x2f1eab));return _0x36159b;},addCondition=async _0x13bf95=>{const _0x25ef51=a11_0x5cdf3e,{_conditions:_0x39ddb4}=require(_0x25ef51(0xe9));let {conditions:_0x1b8fbb}=JSON[_0x25ef51(0xeb)](fs[_0x25ef51(0xea)](_0x39ddb4));_0x1b8fbb[_0x25ef51(0xd5)](_0x13bf95),await WriteFile(_0x39ddb4,JSON[_0x25ef51(0xd3)]({'conditions':_0x1b8fbb}));},deleteCondition=async _0x194327=>{const _0x19b0ca=a11_0x5cdf3e,{_conditions:_0xc39c6d}=require(_0x19b0ca(0xe9));let {conditions:_0x39b8b7}=JSON[_0x19b0ca(0xeb)](fs[_0x19b0ca(0xea)](_0xc39c6d));_0x39b8b7=_0x39b8b7[_0x19b0ca(0xe0)](_0x4d2db3=>_0x4d2db3['name']!=_0x194327),await WriteFile(_0xc39c6d,JSON[_0x19b0ca(0xd3)]({'conditions':_0x39b8b7}));},initConditions=async()=>{const _0x27b313=a11_0x5cdf3e,{_conditions:_0x1505a5}=require(_0x27b313(0xe9));await WriteFile(_0x1505a5,JSON['stringify']({'conditions':[]}),{'flag':'w'});},fileExists=_0x3bfe85=>new Promise(_0x44af74=>fs[a11_0x5cdf3e(0xda)](_0x3bfe85,fs[a11_0x5cdf3e(0xde)],_0x432be1=>_0x44af74(!_0x432be1))),ensureDir=async _0x5bea1a=>{const _0x4ab65a=a11_0x5cdf3e;await fs[_0x4ab65a(0xdb)](_0x5bea1a);};module['exports']={'getSettings':getSettings,'setSettings':setSettings,'initSettings':initSettings,'getSheetID':getSheetID,'setSheetID':setSheetID,'getDriveID':getDriveID,'setDriveID':setDriveID,'getConditions':getConditions,'addCondition':addCondition,'deleteCondition':deleteCondition,'initConditions':initConditions,'initGoogle':initGoogle,'fileExists':fileExists,'ensureDir':ensureDir,'emptyDir':emptyDir,'ReadFile':ReadFile,'initFilter':initFilter,'initFilterPhones':initFilterPhones};function a11_0x2466(_0x270c24,_0x1d0bef){const _0xbe687b=a11_0xbe68();return a11_0x2466=function(_0x246665,_0x35548a){_0x246665=_0x246665-0xd2;let _0x3fef33=_0xbe687b[_0x246665];return _0x3fef33;},a11_0x2466(_0x270c24,_0x1d0bef);}function a11_0xbe68(){const _0x50bdb2=['emptyDir','7067310fxiyjz','../lib/paths','readFileSync','parse','24312BMfcEE','stringify','writeFile','push','152GrvjEh','util','6180640kpfVPo','readFile','access','ensureDir','spreadsheetId','600957lcMjqR','F_OK','fs-extra','filter','1116897JiWrCL','29469060evrYjt','gdriveId','12418965JOBisp','2AsbsdF','4SWbhth'];a11_0xbe68=function(){return _0x50bdb2;};return a11_0xbe68();}
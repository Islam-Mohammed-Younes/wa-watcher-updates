function a16_0x4d71(_0x1dee0b,_0x43f33d){const _0x5d3637=a16_0x5d36();return a16_0x4d71=function(_0x4d7188,_0x306738){_0x4d7188=_0x4d7188-0xa2;let _0x5cd890=_0x5d3637[_0x4d7188];return _0x5cd890;},a16_0x4d71(_0x1dee0b,_0x43f33d);}function a16_0x5d36(){const _0x1fa7ea=['reset','terminal','width','./misc','bgRed','102646zwrNNp','green','moveTo','75993WyqThw','exports','bold','2778fVWiUM','300208npQbrn','brightGreen','terminal-kit','2323424kaqiKI','bgBlue','../lib/paths','brightRed','drawImage','948240VKmfLY','height','brightMagenta','1541395ZdXaKT','8hlOQLA','clear','bgGreen','483PmUzgO','yellow','log'];a16_0x5d36=function(){return _0x1fa7ea;};return a16_0x5d36();}const a16_0x4a3db5=a16_0x4d71;(function(_0x19d57e,_0x5e6dc4){const _0x40d88d=a16_0x4d71,_0x27bf27=_0x19d57e();while(!![]){try{const _0x4829a4=parseInt(_0x40d88d(0xa3))/0x1+-parseInt(_0x40d88d(0xaa))/0x2+-parseInt(_0x40d88d(0xa6))/0x3*(-parseInt(_0x40d88d(0xb6))/0x4)+parseInt(_0x40d88d(0xb5))/0x5+-parseInt(_0x40d88d(0xa9))/0x6*(-parseInt(_0x40d88d(0xb9))/0x7)+-parseInt(_0x40d88d(0xad))/0x8+parseInt(_0x40d88d(0xb2))/0x9;if(_0x4829a4===_0x5e6dc4)break;else _0x27bf27['push'](_0x27bf27['shift']());}catch(_0x1e53e4){_0x27bf27['push'](_0x27bf27['shift']());}}}(a16_0x5d36,0x26a9a));const term=require(a16_0x4a3db5(0xac))[a16_0x4a3db5(0xbd)],{_logo}=require(a16_0x4a3db5(0xaf)),{Sleep}=require(a16_0x4a3db5(0xbf)),log=_0x2d2cbe=>{const _0x2acc28=a16_0x4a3db5;console[_0x2acc28(0xbb)](_0x2d2cbe);},reset=()=>{const _0x4f429a=a16_0x4a3db5;term[_0x4f429a(0xbc)]();},green=_0xa4783f=>{const _0x462add=a16_0x4a3db5;term[_0x462add(0xb7)](),term[_0x462add(0xa8)][_0x462add(0xb8)](_0xa4783f+'\x0a');},red=_0x2cfa3e=>{const _0x18242e=a16_0x4a3db5;term[_0x18242e(0xa2)][_0x18242e(0xa8)](_0x2cfa3e+'\x0a');},logger=(_0x2526f6,_0x17a4e8=0x0)=>{const _0x5b2a80=a16_0x4a3db5;switch(_0x17a4e8){case 0x1:term[_0x5b2a80(0xa8)]['brightYellow'](_0x2526f6+'\x0a');break;case 0x2:term['bold'][_0x5b2a80(0xb0)](_0x2526f6+'\x0a');break;case 0x3:term['bold'][_0x5b2a80(0xb4)](_0x2526f6+'\x0a');break;default:term[_0x5b2a80(0xa8)][_0x5b2a80(0xab)](_0x2526f6+'\x0a');break;}},splash=async _0x37cf1f=>{const _0x1f2844=a16_0x4a3db5;term[_0x1f2844(0xbc)](),term[_0x1f2844(0xa5)][_0x1f2844(0xa8)][_0x1f2844(0xb8)](term[_0x1f2844(0xbe)]/0x2,term[_0x1f2844(0xb3)]/0x2,''+_0x37cf1f),await Sleep(0xfa0),term[_0x1f2844(0xbc)]();},stay=(_0x14222b,_0x363e55=a16_0x4a3db5(0xa4))=>{const _0x3ac2fb=a16_0x4a3db5;term['clear']();if(_0x363e55==_0x3ac2fb(0xba)){term['moveTo'][_0x3ac2fb(0xa8)]['bgYellow'](term['width']/0x2,term[_0x3ac2fb(0xb3)]/0x2,''+_0x14222b);return;}else{if(_0x363e55=='blue'){term[_0x3ac2fb(0xa5)][_0x3ac2fb(0xa8)][_0x3ac2fb(0xae)](term[_0x3ac2fb(0xbe)]/0x2,term[_0x3ac2fb(0xb3)]/0x2,''+_0x14222b);return;}}term[_0x3ac2fb(0xa5)][_0x3ac2fb(0xa8)]['bgGreen'](term[_0x3ac2fb(0xbe)]/0x2,term[_0x3ac2fb(0xb3)]/0x2,''+_0x14222b);},progressBarStart=(_0x3c9eea,_0x3746c9)=>{green(_0x3c9eea);const _0x15a5bd=term['progressBar']({'width':0x50,'title':_0x3746c9,'eta':!![],'percent':!![]});return _0x15a5bd;},drawImage=_0x46b49c=>{const _0x36e858=a16_0x4a3db5;term[_0x36e858(0xb1)](_0x46b49c,{'shrink':{'width':term[_0x36e858(0xbe)]*0.7,'height':(term[_0x36e858(0xb3)]-0x1)*0x2*0.7}});};module[a16_0x4a3db5(0xa7)]={'log':log,'reset':reset,'green':green,'red':red,'logger':logger,'splash':splash,'stay':stay,'progressBarStart':progressBarStart,'drawImage':drawImage,'term':term};
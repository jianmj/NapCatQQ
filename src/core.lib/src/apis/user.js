const _0x3fe8e5=_0x1bfc;(function(_0x3d25b1,_0x4312d0){const _0x351a6e=_0x1bfc,_0x82cdff=_0x3d25b1();while(!![]){try{const _0x54998b=parseInt(_0x351a6e(0xa5))/0x1*(-parseInt(_0x351a6e(0xb1))/0x2)+-parseInt(_0x351a6e(0x9e))/0x3+parseInt(_0x351a6e(0xb7))/0x4+-parseInt(_0x351a6e(0xb3))/0x5*(-parseInt(_0x351a6e(0xa4))/0x6)+parseInt(_0x351a6e(0xcd))/0x7+parseInt(_0x351a6e(0x9d))/0x8+parseInt(_0x351a6e(0xb6))/0x9;if(_0x54998b===_0x4312d0)break;else _0x82cdff['push'](_0x82cdff['shift']());}catch(_0x25b0a8){_0x82cdff['push'](_0x82cdff['shift']());}}}(_0x32d0,0x6e405));import{Credentials,selfInfo}from'@/core/data';import{napCatCore}from'@/core';import{ProfileListener}from'@/core/listeners';import{randomUUID}from'crypto';import{HttpGetCookies}from'../../../common/utils/request';import{logError}from'@/common/utils/log';function _0x32d0(){const _0x37eca4=['2842696DPTMac','KEUNR','setSelfOnlineStatus','then','getUserDetailInfo','get','Vfxwq','getRobotService','getSkey','CreatTime','getMsgService','PxFmz','errMsg','&u1=https%3A%2F%2Fh5.qzone.qq.com%2Fqqnt%2Fqzoneinpcqq%2Ffriend%3Frefresh%3D0%26clientuin%3D0%26darkMode%3D0&keyindex=','setBuddyProfileLike','QoAZc','lIBcw','qxkRq','bgRWF','uin','PskeyTime','onLoginSuccess','1907955xFXpIo','&clientkey=','getPskey','getUserInfo','Fyfyv','sCVAQ','forEach','session','push','now','addListener','jARUp','getProfileService','getPSkey','fromEntries','getRobotUinRange','ZLDEZ','izglc','like','keyIndex','onProfileDetailInfoChanged','entries','lRGoY','robotUinRanges','result','aOWLn','2321104xaeYjN','1320201lDmYSE','getUserDetailInfo\x20timeout','XHPxz','getProfileLikeService','forceFetchClientKey','LaQdH','33624ykyUry','78983wcuDjS','getTipOffService','https://ssl.ptlogin2.qq.com/jump?ptlang=1033&clientuin=','DjhnA','uid','Skey','set','获取Pskey失败','setQQAvatar','setHeader','length','STuLc','22ervzYt','PskeyData','340VJbENd','response','getSelfInfo','954180BZgbam'];_0x32d0=function(){return _0x37eca4;};return _0x32d0();}const userInfoCache={},profileListener=new ProfileListener(),userDetailHandlers=new Map();function _0x1bfc(_0x46b878,_0x30f152){const _0x32d0cf=_0x32d0();return _0x1bfc=function(_0x1bfc0c,_0x5642e1){_0x1bfc0c=_0x1bfc0c-0x89;let _0x5e192d=_0x32d0cf[_0x1bfc0c];return _0x5e192d;},_0x1bfc(_0x46b878,_0x30f152);}profileListener[_0x3fe8e5(0x97)]=_0x5ea68f=>{const _0x50666a=_0x3fe8e5;userInfoCache[_0x5ea68f['uid']]=_0x5ea68f,userDetailHandlers[_0x50666a(0x89)](_0x13e5f5=>_0x13e5f5(_0x5ea68f));},setTimeout(()=>{const _0x3787c6=_0x3fe8e5;napCatCore[_0x3787c6(0xcc)](()=>{const _0x7d6b6b=_0x3787c6;napCatCore[_0x7d6b6b(0x8d)](profileListener);});},0x64);export class NTQQUserApi{static async[_0x3fe8e5(0xb9)](_0x5b2c11,_0xecb1e1,_0x2f5814){const _0x2e37cc=_0x3fe8e5;return napCatCore[_0x2e37cc(0x8a)][_0x2e37cc(0xc1)]()['setStatus']({'status':_0x5b2c11,'extStatus':_0xecb1e1,'batteryStatus':_0x2f5814});}static async[_0x3fe8e5(0x95)](_0x626071,_0x33f6e9=0x1){const _0x4e7e7c=_0x3fe8e5;return napCatCore[_0x4e7e7c(0x8a)][_0x4e7e7c(0xa1)]()[_0x4e7e7c(0xc5)]({'friendUid':_0x626071,'sourceId':0x47,'doLikeCount':_0x33f6e9,'doLikeTollCount':0x0});}static async[_0x3fe8e5(0xad)](_0x20e836){const _0x202cf7=_0x3fe8e5,_0x171993=napCatCore['session'][_0x202cf7(0x8f)]()[_0x202cf7(0xae)](_0x20e836);return{'result':_0x171993?.[_0x202cf7(0x9b)],'errMsg':_0x171993?.[_0x202cf7(0xc3)]};}static async[_0x3fe8e5(0xb5)](){}static async[_0x3fe8e5(0xd0)](_0x17cb8){}static async[_0x3fe8e5(0xbb)](_0x354d06){const _0x1e98c9=_0x3fe8e5,_0x3dec3a={'STuLc':function(_0x462f40,_0x9b38bc){return _0x462f40(_0x9b38bc);},'Vfxwq':_0x1e98c9(0x9f),'qxkRq':function(_0x10b866){return _0x10b866();},'DjhnA':function(_0x2801b2,_0x401c09,_0x546115){return _0x2801b2(_0x401c09,_0x546115);}},_0x3ef905=napCatCore[_0x1e98c9(0x8a)][_0x1e98c9(0x8f)]();return new Promise((_0xf93998,_0x18a950)=>{const _0x3d30f4=_0x1e98c9,_0xae3997={'ZLDEZ':function(_0x335d29,_0x5e0fca){const _0x455cae=_0x1bfc;return _0x3dec3a[_0x455cae(0xb0)](_0x335d29,_0x5e0fca);},'izglc':_0x3dec3a[_0x3d30f4(0xbd)],'jARUp':function(_0x3f9efc,_0x25efe6){return _0x3f9efc===_0x25efe6;}},_0x2338f4=_0x3dec3a[_0x3d30f4(0xc8)](randomUUID);let _0x1b4b4b=![];_0x3dec3a[_0x3d30f4(0xa8)](setTimeout,()=>{const _0x413634=_0x3d30f4;!_0x1b4b4b&&_0xae3997[_0x413634(0x93)](_0x18a950,_0xae3997[_0x413634(0x94)]);},0x1388),userDetailHandlers[_0x3d30f4(0xab)](_0x2338f4,_0xa193a0=>{const _0x2b2f4c=_0x3d30f4;_0xae3997[_0x2b2f4c(0x8e)](_0xa193a0[_0x2b2f4c(0xa9)],_0x354d06)&&(_0x1b4b4b=!![],userDetailHandlers['delete'](_0x2338f4),_0xae3997[_0x2b2f4c(0x93)](_0xf93998,_0xa193a0));}),_0x3ef905['getUserDetailInfoWithBizInfo'](_0x354d06,[0x0])[_0x3d30f4(0xba)](_0x36926a=>{});});}static async[_0x3fe8e5(0x90)](_0x4154ea,_0x495ae3=!![]){const _0x52d64e=_0x3fe8e5,_0x4e8c05={'PxFmz':function(_0x535287,_0x351301){return _0x535287||_0x351301;},'Fyfyv':function(_0x5b0e24,_0xc8ded1){return _0x5b0e24>_0xc8ded1;},'aOWLn':function(_0x3f6cf4,_0xf46f){return _0x3f6cf4-_0xf46f;},'bgRWF':function(_0x29cd3c,_0x2f6b6a){return _0x29cd3c*_0x2f6b6a;},'gZXla':function(_0x38d858,_0x56ea3f){return _0x38d858===_0x56ea3f;},'lIBcw':function(_0x2767bd,_0x54e7e6,_0x4971fb){return _0x2767bd(_0x54e7e6,_0x4971fb);},'XHPxz':_0x52d64e(0xac)};let _0x59c4fe=[],_0xd687d1={};for(let _0x567a68 in _0x4154ea){let _0x2619f2=Credentials['PskeyData'][_0x52d64e(0xbc)](_0x4154ea[_0x567a68]),_0x1438c6=Credentials[_0x52d64e(0xcb)][_0x52d64e(0xbc)](_0x4154ea[_0x567a68]);_0x4e8c05[_0x52d64e(0xc2)](!_0x2619f2,!_0x1438c6)||_0x4e8c05[_0x52d64e(0xd1)](_0x4e8c05[_0x52d64e(0x9c)](Date['now'](),_0x1438c6),_0x4e8c05[_0x52d64e(0xc9)](0x708,0x3e8))||!_0x495ae3?_0x59c4fe[_0x52d64e(0x8b)](_0x4154ea[_0x567a68]):_0xd687d1[_0x4154ea[_0x567a68]]=_0x2619f2;}let _0x2f637f={'result':0x0,'errMsg':'','domainPskeyMap':new Map()};_0x4e8c05['Fyfyv'](_0x59c4fe[_0x52d64e(0xaf)],0x0)&&(_0x2f637f=await napCatCore[_0x52d64e(0x8a)][_0x52d64e(0xa6)]()[_0x52d64e(0xcf)](_0x59c4fe,!![]));let _0x565e2c=_0x2f637f['domainPskeyMap'];for(let _0x71c11c of _0x565e2c[_0x52d64e(0x98)]()){Credentials[_0x52d64e(0xb2)]['set'](_0x71c11c[0x0],_0x71c11c[0x1]),Credentials[_0x52d64e(0xcb)][_0x52d64e(0xab)](_0x71c11c[0x0],Date[_0x52d64e(0x8c)]());}let _0x43b74f=Object['assign'](Object[_0x52d64e(0x91)](_0x565e2c),_0xd687d1);if(_0x4e8c05['gZXla'](_0x2f637f['result'],0x0))return _0x43b74f;else _0x4e8c05[_0x52d64e(0xc7)](logError,_0x4e8c05[_0x52d64e(0xa0)],_0x2f637f[_0x52d64e(0xc3)]);return{};}static async[_0x3fe8e5(0x92)](){const _0x262c9d=_0x3fe8e5,_0x2d53e9=await napCatCore[_0x262c9d(0x8a)][_0x262c9d(0xbe)]()[_0x262c9d(0x92)]({'justFetchMsgConfig':'1','type':0x1,'version':0x0,'aioKeywordVersion':0x0});return _0x2d53e9?.[_0x262c9d(0xb4)]?.[_0x262c9d(0x9a)];}static async[_0x3fe8e5(0xbf)](_0x663475=!![]){const _0x5e3653=_0x3fe8e5,_0x2bba6c={'QoAZc':function(_0x3e35a7,_0xd35cc){return _0x3e35a7==_0xd35cc;},'KEUNR':function(_0x3b485e,_0x4415eb){return _0x3b485e+_0x4415eb;},'sCVAQ':function(_0x48768d,_0x3f6f5d){return _0x48768d+_0x3f6f5d;},'lRGoY':_0x5e3653(0xa7),'LaQdH':_0x5e3653(0xce),'GpXaR':_0x5e3653(0xc4),'ELesw':function(_0x550fcf,_0x3736a4){return _0x550fcf(_0x3736a4);}};try{if(_0x2bba6c[_0x5e3653(0xc6)](Credentials[_0x5e3653(0xc0)],0x0)||Date[_0x5e3653(0x8c)]()-Credentials[_0x5e3653(0xc0)]>0x3e8*0xe10||!_0x663475){const _0x4513ca=await napCatCore[_0x5e3653(0x8a)]['getTicketService']()[_0x5e3653(0xa2)]('');if(_0x4513ca[_0x5e3653(0x9b)]!==0x0)return'';const _0x58afd1=_0x4513ca['clientKey'],_0x40e7eb=_0x4513ca[_0x5e3653(0x96)],_0x59d8d0=_0x2bba6c['KEUNR'](_0x2bba6c[_0x5e3653(0xb8)](_0x2bba6c[_0x5e3653(0xd2)](_0x2bba6c[_0x5e3653(0xd2)](_0x2bba6c['sCVAQ'](_0x2bba6c[_0x5e3653(0x99)],selfInfo[_0x5e3653(0xca)]),_0x2bba6c[_0x5e3653(0xa3)]),_0x58afd1),_0x2bba6c['GpXaR']),_0x40e7eb),_0x4656b9=await _0x2bba6c['ELesw'](HttpGetCookies,_0x59d8d0),_0x34f3bd=_0x4656b9[_0x5e3653(0xbc)]('skey');if(!_0x34f3bd)return'';return Credentials[_0x5e3653(0xc0)]=Date[_0x5e3653(0x8c)](),Credentials['Skey']=_0x34f3bd,_0x34f3bd;}return Credentials[_0x5e3653(0xaa)];}catch(_0x3e7f27){}return undefined;}}
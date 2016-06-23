import WebSocketConnection from "./websocket"

var om_opkid=getCookie_op("keyid"),
login="test",
password="test",
domen="onlinesaler.ru",
version="5.24",
om_intervalOP

om_connect();

const listeners = [];

function om_connect() {
	let port=443;
	let om_serhost="148.251.82.26";
	console.log(login);
	let om_ws=new WebSocketConnection({url: {
				ws: 'ws://' + om_serhost + ':'+port+'/myRoute',
				polling:''
			},root : 'js/'
		});
	  
	om_ws.onopen = function() { 	
console.log("open");
		let textonline=("{\"cmd\":\"Login\",\"login\":\"" + login + "\",\"password\":\"" + password + "\",\"domen\":\"" + domen + "\",\"version\":\"" + version + "\"}");
		
		
		om_ws.send(textonline);
		window.clearInterval(om_intervalOP);
		om_intervalOP=setInterval(function(){
				om_ws.send('{"cmd":"Ok"}');
			}, 20000);
		
		
		window.onbeforeunload = function(e){
		if(om_ws.readyState == 1){
		
			om_closed=true;
			om_ws.send('{"cmd":"exit"}');

		}
		
		}
	}
	om_ws.onclose = function() {//if(om_domen=="mediaindustrial.ru") console.log("onclose");
		if(!om_closed)
		setTimeout(om_connect,5000)}
let Xtest=0;
	om_ws.onmessage = function(e) {
		
		console.log('init.js om_ws.onmessage '+(Xtest++));
		console.log(e);
		listeners.map(callback => callback(e));
/*
		var mo=JSON.parse(e.data)
           
		switch(mo.cmd) {
			
			
			case "relogin":
				textonline=("{\"cmd\":\"Login\",\"login\":\"" + login + "\",\"password\":\"" + password + "\",\"domen\":\"" + domen + "\",\"version\":\"" + version + "\"}");				
				om_ws.send(textonline);
			break
			case "Message":
			
			var msg=om_unescape(mo.text)
	  
			//if (msg==om_save.cursentmsg) {om_echomsg(om_save.cursentmsg);om_save.cursentmsg="";setCookie_op ("textsend", "");return} // пришло эхо на введенное сообщение
			//om_hia_addmsg(om_getTime(),mo.username,(typeof(mo.i)!="undefined"?mo.i:""),om_unescape(mo.text),(mo.username=="Я"?0:1));
      
			if(sound=="true")
			soundManager.setup({
					url: 'http://onlinesaler.ru/swfx/',   

					onready: function() {
          
						var mySound = soundManager.createSound({
								id: 'aSound',
								url: 'http://onlinesaler.ru/mp3/msg_in.mp3'
							});
						mySound.play();
            
					},                 
					ontimeout: function() {
					}
				});
			
			break
			
			case "GetHistoryAll": 		
			var ar=[],curdate="",namesend;
			
			om_clear_hia()
			
			
			
			
			if(typeof(mo.hist)!="undefined"&&mo.hist!=null && mo.hist.length>0) om_hist=1;
			
			if(typeof(mo.hist)!="undefined"&&mo.hist!=null)
			for (var i=0; i< mo.hist.length; i++) { 
			    
				nline=mo.hist[i]
				if (curdate!=nline.data) {
					curdate=nline.data
					//om_hia_addmsg("","","<img src='http://onlinesaler.ru/images/template/3/calendar.png'/> "+getgooddate(curdate),2)
					om_lastname="";
				}	
				
				namesend=(nline.m=="1")?nline.name:"Я";		
				//om_hia_addmsg(nline.time,namesend,(typeof(nline.i)!="undefined"?nline.i:""),om_unescape(nline.text).replace(/\|\~\|/g, "<br>")	,nline.m)
				
				
			}

			break
	  
			case "KeyPress":

			break

			case "MousePachSend":
				pach=mo.pach.replace(/'/g, '"');
				
				element=lookupElementByXPath1(pach);
				//console.log(element);
				//console.log(mo.name+" "+mo.img);				
				omscrollTop= (mo.y-(document.documentElement.clientHeight/2)); 
				omscrollLeft= (mo.x-(document.documentElement.clientWidth/2));
				  
			window.scroll(omscrollLeft,omscrollTop);
			break
	

		default:
		}																																																						
	*/}
}


function om_unescape(txt){
	if(txt==null || txt=="") return txt;
	//    txt=unescape(txt)
	txt=decodeURI(txt);
	txt=txt.replace(/</g, '&lt;');
	txt=txt.replace(/>/g, '&gt;');
	txt=txt.replace(/\r\n/g, '<br/>');
	txt=txt.replace(/\n/g, '<br/>');
	txt=txt.replace(/%3F/g, '?');
	txt=txt.replace(/%3A/g, ':');
	txt=txt.replace(/%2F/g, '/');
	txt=txt.replace(/%2C/g, ',');
	txt=txt.replace(/%2С/g, ',');
	txt=txt.replace(/%40/g, '@');
	txt=txt.replace(/%2B/g, '+');
	txt=txt.replace(/%3D/g, '=');
	var re = /(http:[^<\s]*)/g;
	txt=txt.replace(re, "<a href='$1' target='_blank'>$1</a>");
	var sm = /smile:(\S*)\(\s*\)/g;
	txt=txt.replace(sm, "<img height='20px' src='http://onlinesaler.ru/images/smile/$1'/>");
	return txt;
}


function setCookie_op(name, value, expires, path, domain, secure) {

	var expdate = new Date(); //Создаем объект даты
	var  monthFromNow =  expdate.getTime() + (60*24*60*60*1000);
	expdate.setTime(monthFromNow); //Устанавливаем  значение даты

	document.cookie = name + "=" + escape(value) +
	((expires) ? "; expires=" + expires : "; expires=" +expdate.toGMTString()) +
	((path) ? "; path=" + path : "") +
	((domain) ? "; domain=" + domain : "") +
	((secure) ? "; secure" : "");
}
function getCookie_op(c_name) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=");
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1) c_end = document.cookie.length;
			return unescape(document.cookie.substring(c_start, c_end));
		}
	}
	return "";
}
function lookupElementByXPath1(path) { 
    //Получаем элемент через его айди
	//console.log(path.substr(4, [path.length - 6]));
    if (path.substr(0,4) == 'id("'){
    //    return document.getElementById(path.substr(4, [path.length - 6]));
    }
     
    //Получаем элемент через путь
    var evaluator = new XPathEvaluator(); 
   // path=path.replace(/([0123456789]+)/g, '[$1]');
    console.log(path);
    var result = evaluator.evaluate(path, document.documentElement, null,XPathResult.ANY_TYPE, null); 
	//console.log(evaluator); 
    return  result.iterateNext(); 
}
function createXPathFromElement1(elm) { 
    var allNodes = document.getElementsByTagName('*'); 
    for (segs = []; elm && elm.nodeType == 1; elm = elm.parentNode) 
    { 
        if (elm.hasAttribute('id')) { 
                var uniqueIdCount = 0; 
                for (var n=0;n < allNodes.length;n++) { 
                    if (allNodes[n].hasAttribute('id') && allNodes[n].id == elm.id) uniqueIdCount++; 
                    if (uniqueIdCount > 1) break; 
                }; 
                if ( uniqueIdCount == 1) { 
                    segs.unshift('id("' + elm.getAttribute('id') + '")'); 
                    return segs.join('/'); 
                } else { 
                    segs.unshift(elm.nodeName.toLowerCase() + '[@id="' + elm.getAttribute('id') + '"]'); 
                } 
        } else if (elm.hasAttribute('class')&& document.getElementsByClassName(elm.getAttribute('class')).length==1) { 
            segs.unshift(elm.nodeName.toLowerCase() + '[@class="' + elm.getAttribute('class') + '"]'); 
        } else { 
            for (i = 1, sib = elm.previousSibling; sib; sib = sib.previousSibling) { 
                if (sib.nodeName == elm.nodeName)  i++; }; 
                segs.unshift(elm.nodeName.toLowerCase() + '[' + i + ']'); 
        }; 
    }; 
    return segs.length ? '/' + segs.join('/') : null; 
};
let Ytest=0;


export default function onMessage(callback){
  listeners.push(callback);
}

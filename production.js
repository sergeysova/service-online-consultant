/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _init = __webpack_require__(1);

	var _init2 = _interopRequireDefault(_init);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _init2.default)();
	/*
	function addTodo(text) {
	  return {
	    type: ADD_TODO,
	    text
	  }
	}

	let usersReducer = function(state=0, action){
		return state
	};

	let helloReducer = function(state={}, action){
		return state;
	};

	let reducer = combineReducers({
		users: usersReducer,
		hello: helloReducer

	});


	let store = createStore(usersReducer);


	store.subscribe(()=>{
		console.log("store changed ", store.getState())
	})




	store.dispatch({type: "INC", change: 1})
	/*
	console.log(data);

	const app = document.getElementById('app');

	ReactDOM.render(<ListClients users={data}/>, app);
	*/

	/*
	import React, { Component } from "react";
	import ReactDOM from "react-dom";

	import ListClients from "./components/ListClientsCol";
	import {data} from "./json.js";
	*/
	//import {combineReducers, createStore} from "redux";

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = myfunc;

	var _websocket = __webpack_require__(2);

	var _websocket2 = _interopRequireDefault(_websocket);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var om_opkid = getCookie_op("keyid"),
	    login = "test",
	    password = "test",
	    domen = "onlinesaler.ru",
	    version = "5.24",
	    om_intervalOP;

	om_connect();

	function om_connect() {
		var port = 443;
		var om_serhost = "148.251.82.26";
		console.log(login);
		var om_ws = new _websocket2.default({ url: {
				ws: 'ws://' + om_serhost + ':' + port + '/myRoute',
				polling: ''
			}, root: 'js/'
		});

		om_ws.onopen = function () {
			console.log("open");
			var textonline = "{\"cmd\":\"Login\",\"login\":\"" + login + "\",\"password\":\"" + password + "\",\"domen\":\"" + domen + "\",\"version\":\"" + version + "\"}";

			om_ws.send(textonline);
			window.clearInterval(om_intervalOP);
			om_intervalOP = setInterval(function () {
				om_ws.send('{"cmd":"Ok"}');
			}, 20000);

			window.onbeforeunload = function (e) {
				if (om_ws.readyState == 1) {

					om_closed = true;
					om_ws.send('{"cmd":"exit"}');
				}
			};
		};
		om_ws.onclose = function () {
			//if(om_domen=="mediaindustrial.ru") console.log("onclose");
			if (!om_closed) setTimeout(om_connect, 5000);
		};
		var Xtest = 0;
		om_ws.onmessage = function (e) {

			console.log('init.js om_ws.onmessage ' + Xtest++);
			console.log(e);
			myfunc(e);
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
	  	*/
		};
	}

	function om_unescape(txt) {
		if (txt == null || txt == "") return txt;
		//    txt=unescape(txt)
		txt = decodeURI(txt);
		txt = txt.replace(/</g, '&lt;');
		txt = txt.replace(/>/g, '&gt;');
		txt = txt.replace(/\r\n/g, '<br/>');
		txt = txt.replace(/\n/g, '<br/>');
		txt = txt.replace(/%3F/g, '?');
		txt = txt.replace(/%3A/g, ':');
		txt = txt.replace(/%2F/g, '/');
		txt = txt.replace(/%2C/g, ',');
		txt = txt.replace(/%2С/g, ',');
		txt = txt.replace(/%40/g, '@');
		txt = txt.replace(/%2B/g, '+');
		txt = txt.replace(/%3D/g, '=');
		var re = /(http:[^<\s]*)/g;
		txt = txt.replace(re, "<a href='$1' target='_blank'>$1</a>");
		var sm = /smile:(\S*)\(\s*\)/g;
		txt = txt.replace(sm, "<img height='20px' src='http://onlinesaler.ru/images/smile/$1'/>");
		return txt;
	}

	function setCookie_op(name, value, expires, path, domain, secure) {

		var expdate = new Date(); //Создаем объект даты
		var monthFromNow = expdate.getTime() + 60 * 24 * 60 * 60 * 1000;
		expdate.setTime(monthFromNow); //Устанавливаем  значение даты

		document.cookie = name + "=" + escape(value) + (expires ? "; expires=" + expires : "; expires=" + expdate.toGMTString()) + (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + (secure ? "; secure" : "");
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
		if (path.substr(0, 4) == 'id("') {}
		//    return document.getElementById(path.substr(4, [path.length - 6]));


		//Получаем элемент через путь
		var evaluator = new XPathEvaluator();
		// path=path.replace(/([0123456789]+)/g, '[$1]');
		console.log(path);
		var result = evaluator.evaluate(path, document.documentElement, null, XPathResult.ANY_TYPE, null);
		//console.log(evaluator);
		return result.iterateNext();
	}
	function createXPathFromElement1(elm) {
		var allNodes = document.getElementsByTagName('*');
		for (segs = []; elm && elm.nodeType == 1; elm = elm.parentNode) {
			if (elm.hasAttribute('id')) {
				var uniqueIdCount = 0;
				for (var n = 0; n < allNodes.length; n++) {
					if (allNodes[n].hasAttribute('id') && allNodes[n].id == elm.id) uniqueIdCount++;
					if (uniqueIdCount > 1) break;
				};
				if (uniqueIdCount == 1) {
					segs.unshift('id("' + elm.getAttribute('id') + '")');
					return segs.join('/');
				} else {
					segs.unshift(elm.nodeName.toLowerCase() + '[@id="' + elm.getAttribute('id') + '"]');
				}
			} else if (elm.hasAttribute('class') && document.getElementsByClassName(elm.getAttribute('class')).length == 1) {
				segs.unshift(elm.nodeName.toLowerCase() + '[@class="' + elm.getAttribute('class') + '"]');
			} else {
				for (i = 1, sib = elm.previousSibling; sib; sib = sib.previousSibling) {
					if (sib.nodeName == elm.nodeName) i++;
				};
				segs.unshift(elm.nodeName.toLowerCase() + '[' + i + ']');
			};
		};
		return segs.length ? '/' + segs.join('/') : null;
	};
	var Ytest = 0;
	function myfunc(e, callback) {
		//return(e);
		console.log("Myfunc" + Ytest++);
		console.log(e);
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = WebSocketConnection;

	var WebSocketServicePrivider = 'WS';
	if (typeof console == 'undefined') {
	  console = { log: function log(msg) {} };
	}
	/**
	   params = {
	              url   : {
	                        ws      : '',
	                        comet   : '',
	                        polling  : ''
	                      }
	            }
	**/

	function WebSocketConnection(params) {

	  var self = this;
	  /**
	   * Путь к js и swf файлам
	   */
	  this.root = 'http://onlinesaler.ru/js/common/';

	  /**
	   * WebSocket соединение
	   */
	  var WS = null;

	  /**
	   * Статус WebSocket соединения
	   */
	  this.readyState = 0;
	  this.bufferedAmount = 0;
	  this.readyCallbacks = [];

	  /**
	   * Закрытие соединения с сервером
	   */
	  this.close = function () {
	    if (WS) WS.close();
	  };

	  this.ready = function (c) {
	    console.log(ready);
	    if (self.readyState == 1) {
	      c();
	    } else {
	      if (WS) self.readyCallbacks.push(c);
	    }
	  };

	  /**
	   * Отправка данных на сервер
	   */
	  this.send = function (data) {
	    //       console.log(data);
	    try {
	      if (WS) WS.send(data);
	    } catch (e) {
	      // if (!e instanceof MyError) {
	      // если не мое - бросаем дальше
	      //   throw e
	      //  }

	    }
	  };

	  /**** События  ****/

	  // получен новый пакет данных
	  var onmessageEvent = function onmessageEvent(e) {
	    //	console.log("onmessageEvent")
	    if (self.onmessage) self.onmessage(e);
	  };

	  // соединение с сервером установлено
	  var onopenEvent = function onopenEvent() {
	    //console.log("onopenEvent")	
	    self.readyState = 1;
	    if (self.onopen) self.onopen();
	    var c;
	    while (c = self.readyCallbacks.pop()) {
	      c();
	    }
	  };

	  // соединение с сервером закрыто
	  var oncloseEvent = function oncloseEvent() {
	    //	console.log("oncloseEvent")	
	    self.readyState = 3;
	    if (self.onclose) self.onclose();
	  };

	  /**
	   * Загрузка файла
	   */
	  var loadFile = function loadFile(file) {

	    var script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.src = self.root + file;
	    var c = document.head || document.body;
	    c.appendChild(script);
	  };

	  /**
	   * Загрузка драйвера
	   */
	  var loadEmulator = function loadEmulator(type, onLoaded) {

	    if (type == 'flash') {
	      // загружаем флешовый эмулятор

	      WebSocket__swfLocation = self.root + 'WebSocketMainInsecure1.swf'; // путь к swf файлу

	      if (!("FABridge" in window)) loadFile('fabridge.js'); // если не загружен FABridge, загружаем

	      if (!("swfobject" in window)) loadFile('swfobject.js'); // если не загружен swfobject, загружаем

	      var interval1 = setInterval(function () {
	        if ("FABridge" in window && "swfobject" in window) {
	          clearInterval(interval1);
	          loadFile('websocket_flash.js?1');
	        }
	      }, 10);
	    } else if (type == 'comet') {
	      // загружаем comet эмулятор
	      //loadFile('websocket_polling.js');
	      loadFile('websocket_comet.js?1');
	    } else if (type == 'polling') {
	      // загружаем long-poling эмулятор
	      WebSocketServicePrivider = 'polling';
	      // loadFile('websocket_polling.js?1');
	    } else {
	        alert('Error loadEmulator');
	        return;
	      }

	    var interval2 = setInterval(function () {
	      if ("WebSocket" in window) {
	        clearInterval(interval2);
	        onLoaded();
	      }
	    }, 5);
	  };

	  /**
	   * Проверка на доступность драйверов
	   */
	  var loadDriver = function loadDriver(driver, onError) {

	    if (!driver) onError();
	    var loaded = false;

	    switch (driver) {

	      case 'ws':
	        loaded = WSDriver();
	        break;

	      case 'comet':
	        if (om_srv != 3) {
	          loaded = SockJSDriver();
	        } else loaded = CometDriver();
	        break;

	      case 'polling':
	        if (om_srv != 3) {
	          loaded = SockJSDriver();
	        } else loaded = PollingDriver();
	        break;
	    }

	    if (!loaded) {
	      onError();
	    }
	  };

	  /**
	   * Проверка на доступность нативного WebSocket или Flash плеера
	   */
	  var WSDriver = function WSDriver() {
	    if (!("WebSocket" in window)) return false;
	    var IEFLASH = false;
	    if (navigator.userAgent && navigator.userAgent.indexOf('MSIE') >= 0) {
	      if (_typeof(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) == "object") IEFLASH = true;
	    }

	    // if(document.URL=="http://onlinesaler.ru/") alert(navigator.userAgent);
	    if (navigator.userAgent.indexOf("Android") + 1) return false;
	    if (navigator.userAgent.indexOf("iPad") + 1) return false;
	    //if(  navigator.userAgent.indexOf("Safari")+1 ) return false;

	    if ("WebSocket" in window && document.URL.indexOf("https") == -1) {
	      createSocket(params.url.ws);
	      return true;
	    }

	    var x,
	        flashinstalled = 0;
	    var MSDetect = false;

	    if (navigator.plugins && navigator.plugins.length) {
	      x = navigator.plugins["Shockwave Flash"];
	      if (x) {
	        flashinstalled = 2;
	      } else {
	        flashinstalled = 1;
	      }

	      if (navigator.plugins["Shockwave Flash 9.0"] || navigator.plugins["Shockwave Flash 10.0"] || navigator.plugins["Shockwave Flash 10.1"]) {
	        flashinstalled = 2;
	      }
	    } else if (navigator.mimeTypes && navigator.mimeTypes.length) {

	      x = navigator.mimeTypes['application/x-shockwave-flash'];
	      if (x && x.enabledPlugin) flashinstalled = 2;else flashinstalled = 1;
	    } else if (IEFLASH) {
	      flashinstalled = 2;
	    } else {
	      MSDetect = true;
	    }

	    // console.log(navigator.plugins);
	    // console.log(navigator.mimeTypes);

	    if (flashinstalled != 2 && MSDetect == true) {
	      var iframe = document.createElement('iframe');
	      //with (iframe.style) {
	      left = top = "-100px";
	      height = width = "1px";
	      position = 'absolute';
	      display = 'none';
	      //    }
	      document.body.appendChild(iframe);
	      var win;
	      if (typeof iframe.contentWindow != 'undefined') {
	        win = iframe.contentWindow.window;
	      } else if (iframe.window) {
	        win = iframe.window;
	      }

	      if (win) {
	        //alert("dd");
	        win.flashinstalled = 0;
	        win.document.writeln("<html><body>");
	        win.document.writeln('<script LANGUAGE="VBScript">');
	        win.document.writeln('on error resume next');
	        win.document.writeln('For i = 1 to 11');
	        win.document.writeln('If Not(IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & i))) Then');
	        win.document.writeln('Else');
	        win.document.writeln('flashinstalled2 = 2');
	        win.document.writeln('End If');
	        win.document.writeln('Next');
	        win.document.writeln('If flashinstalled2 = 0 Then');
	        win.document.writeln('flashinstalled2 = 1');
	        win.document.writeln('End If');
	        win.document.writeln('</script>');
	        win.document.writeln('<script type="text/javascript">');
	        win.document.writeln('flashinstalled = flashinstalled2');
	        win.document.writeln('</script>');
	        win.document.writeln("</body></html>");
	        flashinstalled = win.flashinstalled;
	      }
	    }

	    if (flashinstalled == 2) {
	      loadEmulator('flash', function () {
	        createSocket(params.url.ws);
	      });
	      return true;
	    }
	    return false;
	  };

	  /**
	   * Проверка на доступность драйвера comet
	   */
	  var CometDriver = function CometDriver() {

	    if ("WebSocket" in window && "WebSocketServicePrivider" in window && WebSocketServicePrivider == 'comet') {
	      createSocketComet(params.url.comet);
	    } else {
	      loadEmulator('comet', function () {
	        createSocketComet(params.url.comet);
	      });
	    }

	    return true;
	  };

	  /**
	   * Проверка на доступность драйвера long-polling
	   */
	  var PollingDriver = function PollingDriver() {

	    /*
	           if("WebSocket" in window && ("WebSocketServicePrivider" in window) && WebSocketServicePrivider == 'polling'){
	            	  createSocketComet(params.url.polling);
	           }else{
	             loadEmulator('polling', function(){
	       
	                createSocketComet(params.url.polling);
	             });
	           }
	     */
	    WebSocketServicePrivider = 'polling';
	    createSocketComet(params.url.polling);
	    return true;
	  };
	  /**
	   * Проверка на доступность драйвера SockJS
	   */
	  var SockJSDriver = function SockJSDriver() {
	    console.log("SockJSDriver");
	    WebSocketServicePrivider = 'polling';
	    createSocketJS(params.url.polling);
	    return true;
	  };

	  /**
	   * Иннициализируем вебсокет
	   */
	  var createSocket = function createSocket(url) {
	    try {

	      WS = new WebSocket(url);
	      WS.onopen = onopenEvent;
	      WS.onmessage = onmessageEvent;
	      WS.onclose = oncloseEvent;
	    } catch (e) {}
	  };

	  var createSocketComet = function createSocketComet(url) {
	    try {

	      WS = new CometWebSocket(url);
	      WS.onopen = onopenEvent;
	      WS.onmessage = onmessageEvent;
	      WS.onclose = oncloseEvent;
	    } catch (e) {}
	  };

	  var createSocketJS = function createSocketJS(url) {
	    try {
	      port = 8083;
	      // if(om_srv==2) port=444;
	      WS = new SockJS('http://' + om_serhost + ':' + port + '/sockjs/');
	      WS.onopen = onopenEvent;
	      WS.onmessage = onmessageEvent;
	      WS.onclose = oncloseEvent;
	    } catch (e) {}
	  };

	  var priority = [];

	  var i = 0;
	  for (var type in params.url) {
	    priority[i] = type;
	    i++;
	  };

	  if (_typeof(priority[0]) != undefined) {

	    loadDriver(priority[0], function () {

	      if (_typeof(priority[1]) != undefined) {

	        loadDriver(priority[1], function () {

	          if (_typeof(priority[2]) != undefined) {

	            loadDriver(priority[2], function () {});
	          }
	        });
	      }
	    });
	  }
	};

/***/ }
/******/ ]);
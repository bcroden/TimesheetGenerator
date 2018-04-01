!function(t,e){if("function"==typeof define&&define.amd)define(["exports","moment","draggabilly"],e);else if("undefined"!=typeof exports)e(exports,require("moment"),require("draggabilly"));else{var i={exports:{}};e(i.exports,t.moment,t.draggabilly),t.mdDateTimePicker=i.exports}}(this,function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var d=a(e),l=a(i),o=function(){function t(t,e){for(var i,a=0;a<e.length;a++)i=e[a],i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),n=function(){function t(e){var i=e.type,a=e.init,l=void 0===a?(0,d.default)():a,o=e.past,n=void 0===o?(0,d.default)().subtract(21,"years"):o,c=e.future,r=void 0===c?l:c,_=e.mode,u=void 0!==_&&_,h=e.orientation,m=void 0===h?"LANDSCAPE":h,p=e.trigger,g=void 0===p?"":p,v=e.ok,f=void 0===v?"ok":v,D=e.cancel,k=void 0===D?"cancel":D,C=e.colon,y=void 0===C||C,L=e.autoClose,b=void 0!==L&&L,w=e.inner24,E=void 0!==w&&w,I=e.prevHandle,M=void 0===I?'<div class="mddtp-prev-handle"></div>':I,x=e.nextHandle,T=void 0===x?'<div class="mddtp-next-handle"></div>':x;s(this,t),this._type=i,this._init=l,this._past=n,this._future=r,this._mode=u,this._orientation=m,this._trigger=g,this._ok=f,this._cancel=k,this._colon=y,this._autoClose=b,this._inner24=E,this._prevHandle=M,this._nextHandle=T,this._sDialog={},"undefined"==typeof document||document.getElementById("mddtp-picker__"+this._type)||this._buildDialog()}return o(t,[{key:"hide",value:function(){this._selectDialog(),this._hideDialog()}},{key:"show",value:function(){this._selectDialog(),"date"===this._type?this._initDateDialog(this._init):"time"===this._type&&this._initTimeDialog(this._init),this._showDialog()}},{key:"isOpen",value:function(){return this._selectDialog(),!!t.dialog.state}},{key:"isClosed",value:function(){return this._selectDialog(),!t.dialog.state}},{key:"toggle",value:function(){this._selectDialog(),t.dialog.state?this.hide():this.show()}},{key:"_selectDialog",value:function(){this._sDialog.picker=document.getElementById("mddtp-picker__"+[this._type]);for(var t=["viewHolder","years","header","cancel","ok","left","right","previous","current","next","subtitle","title","titleDay","titleMonth","AM","PM","needle","hourView","minuteView","hour","minute","fakeNeedle","circularHolder","circle","dotSpan"],e=t.length;e--;)this._sDialog[t[e]]=document.getElementById("mddtp-"+this._type+"__"+t[e]);this._sDialog.tDate=this._init.clone(),this._sDialog.sDate=this._init.clone()}},{key:"_showDialog",value:function(){var e=this;t.dialog.state=!0,this._sDialog.picker.classList.remove("mddtp-picker--inactive"),this._sDialog.picker.classList.add("zoomIn"),"PORTRAIT"===this._orientation&&this._sDialog.picker.classList.add("mddtp-picker--portrait"),setTimeout(function(){e._sDialog.picker.classList.remove("zoomIn")},300)}},{key:"_hideDialog",value:function(){var e=this,i=this._sDialog.years,a=e._sDialog.title,s=e._sDialog.subtitle,d=this._sDialog.viewHolder,l=this._sDialog.AM,o=this._sDialog.PM,n=this._sDialog.minute,c=this._sDialog.hour,r=this._sDialog.minuteView,_=this._sDialog.hourView,u=this._sDialog.picker,h=this._sDialog.needle,m=this._sDialog.dotSpan,p="mddtp-picker__color--active",g="mddtp-picker__circularView--hidden";t.dialog.state=!1,t.dialog.view=!0,this._sDialog.picker.classList.add("zoomOut"),"date"===this._type?(i.classList.remove("zoomIn","zoomOut"),i.classList.add("mddtp-picker__years--invisible"),a.classList.remove(p),s.classList.add(p),d.classList.remove("zoomOut")):(l.classList.remove(p),o.classList.remove(p),n.classList.remove(p),c.classList.add(p),r.classList.add(g),_.classList.remove(g),s.setAttribute("style","display: none"),m.setAttribute("style","display: none"),h.className="mddtp-picker__selection"),setTimeout(function(){e._sDialog.picker.classList.remove("mddtp-picker--portrait"),e._sDialog.picker.classList.remove("zoomOut"),e._sDialog.picker.classList.add("mddtp-picker--inactive");var t=u.cloneNode(!0);u.parentNode.replaceChild(t,u)},300)}},{key:"_buildDialog",value:function(){var t=this._type,e=document.createDocumentFragment(),i=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div"),o=document.createElement("button"),n=document.createElement("button");if(i.id="mddtp-picker__"+t,i.classList.add("mddtp-picker"),i.classList.add("mddtp-picker-"+t),i.classList.add("mddtp-picker--inactive"),i.classList.add("animated"),this._addId(a,"header"),this._addClass(a,"header"),i.appendChild(a),this._addClass(s,"body"),s.appendChild(l),i.appendChild(s),"date"===this._type){var c=document.createElement("div"),r=document.createElement("div"),_=document.createElement("div"),u=document.createElement("div"),h=document.createElement("div"),m=document.createElement("ul"),p=document.createElement("li"),g=document.createElement("li"),v=document.createElement("li"),f=document.createElement("button"),D=document.createElement("button"),k=document.createElement("ul");this._addId(c,"subtitle"),this._addClass(c,"subtitle"),this._addId(r,"title"),this._addClass(r,"title",["mddtp-picker__color--active"]),this._addId(_,"titleDay"),this._addId(u,"titleMonth"),r.appendChild(_),r.appendChild(u),a.appendChild(c),a.appendChild(r),this._addId(h,"viewHolder"),this._addClass(h,"viewHolder",["animated"]),this._addClass(m,"views"),this._addId(p,"previous"),p.classList.add("mddtp-picker__view"),this._addId(g,"current"),g.classList.add("mddtp-picker__view"),this._addId(v,"next"),v.classList.add("mddtp-picker__view"),this._addView(p),this._addView(g),this._addView(v),h.appendChild(m),m.appendChild(p),m.appendChild(g),m.appendChild(v),this._addId(f,"left"),f.classList.add("mddtp-button"),this._addClass(f,"left"),f.setAttribute("type","button"),f.innerHTML=this._prevHandle,this._addId(D,"right"),D.classList.add("mddtp-button"),this._addClass(D,"right"),D.setAttribute("type","button"),D.innerHTML=this._nextHandle,this._addId(k,"years"),this._addClass(k,"years",["mddtp-picker__years--invisible","animated"]),s.appendChild(h),s.appendChild(f),s.appendChild(D),s.appendChild(k)}else{var C=document.createElement("div"),y=document.createElement("span"),L=document.createElement("span"),b=document.createElement("span"),w=document.createElement("div"),E=document.createElement("div"),I=document.createElement("div"),M=document.createElement("div"),x=document.createElement("div"),T=document.createElement("span"),A=document.createElement("span"),V=document.createElement("span"),N=document.createElement("div"),H=document.createElement("div"),B=document.createElement("div");this._addId(C,"title"),this._addClass(C,"title"),this._addId(y,"hour"),y.classList.add("mddtp-picker__color--active"),L.textContent=":",this._addId(L,"dotSpan"),L.setAttribute("style","display: none"),this._addId(b,"minute"),this._addId(w,"subtitle"),this._addClass(w,"subtitle"),w.setAttribute("style","display: none"),this._addId(E,"AM"),E.textContent=(0,d.default)().localeData().meridiem(1,1,!0),this._addId(I,"PM"),I.textContent=(0,d.default)().localeData().meridiem(13,1,!0),C.appendChild(y),C.appendChild(L),C.appendChild(b),w.appendChild(E),w.appendChild(I),a.appendChild(C),a.appendChild(w),this._addId(M,"circularHolder"),this._addClass(M,"circularHolder"),this._addId(x,"needle"),x.classList.add("mddtp-picker__selection"),this._addClass(T,"dot"),this._addClass(A,"line"),this._addId(V,"circle"),this._addClass(V,"circle"),this._addId(N,"minuteView"),N.classList.add("mddtp-picker__circularView"),N.classList.add("mddtp-picker__circularView--hidden"),this._addId(H,"fakeNeedle"),H.classList.add("mddtp-picker__circle--fake"),this._addId(B,"hourView"),B.classList.add("mddtp-picker__circularView"),x.appendChild(T),x.appendChild(A),x.appendChild(V),M.appendChild(x),M.appendChild(N),M.appendChild(H),M.appendChild(B),s.appendChild(M)}l.classList.add("mddtp-picker__action"),this._autoClose===!0&&(l.style.display="none"),this._addId(o,"cancel"),o.classList.add("mddtp-button"),o.setAttribute("type","button"),this._addId(n,"ok"),n.classList.add("mddtp-button"),n.setAttribute("type","button"),l.appendChild(o),l.appendChild(n),s.appendChild(l),e.appendChild(i),document.getElementsByTagName("body").item(0).appendChild(e)}},{key:"_initTimeDialog",value:function(t){var e=this._sDialog.hour,i=this._sDialog.minute,a=this._sDialog.subtitle,s=this._sDialog.dotSpan;if(this._mode){var d=parseInt(t.format("H"),10);0===d&&(d="00"),this._fillText(e,d),this._colon&&s.removeAttribute("style")}else this._fillText(e,t.format("h")),t._locale.isPM(t.format("A"))?this._sDialog.PM.classList.add("mddtp-picker__color--active"):this._sDialog.AM.classList.add("mddtp-picker__color--active"),a.removeAttribute("style"),s.removeAttribute("style");this._fillText(i,t.format("mm")),this._initHour(),this._initMinute(),this._attachEventHandlers(),this._changeM(),this._dragDial(),this._switchToView(e),this._switchToView(i),this._addClockEvent(),this._setButtonText()}},{key:"_initHour",value:function(){var t=this._sDialog.hourView,e=this._sDialog.needle,i="mddtp-hour__selected",a="mddtp-picker__cell--selected",s="mddtp-picker__cell--rotate-",d="mddtp-picker__cell",l=document.createDocumentFragment(),o=void 0;if(this._mode){var n=this._inner24===!0?10:5;o=parseInt(this._sDialog.tDate.format("H"),10);for(var c=1,r=n;c<=24;c++,r+=n){var _=document.createElement("div"),u=document.createElement("span");_.classList.add(d),u.textContent=24===c?"00":c;var h=r;this._inner24===!0&&c>12&&(h-=120,_.classList.add("mddtp-picker__cell--rotate24")),_.classList.add(s+h),o===c&&(_.id=i,_.classList.add(a),e.classList.add(s+h)),24===c&&0===o&&(_.id=i,_.classList.add(a),e.classList.add(s+h)),_.appendChild(u),l.appendChild(_)}}else{o=parseInt(this._sDialog.tDate.format("h"),10);for(var m=1,p=10;m<=12;m++,p+=10){var g=document.createElement("div"),v=document.createElement("span");g.classList.add(d),v.textContent=m,g.classList.add(s+p),o===m&&(g.id=i,g.classList.add(a),e.classList.add(s+p)),g.appendChild(v),l.appendChild(g)}}for(;t.lastChild;)t.removeChild(t.lastChild);t.appendChild(l)}},{key:"_initMinute",value:function(){for(var t=this._sDialog.minuteView,e=parseInt(this._sDialog.tDate.format("m"),10),i=document.createDocumentFragment(),a=5,s=10;a<=60;a+=5,s+=10){var d=document.createElement("div"),l=document.createElement("span");d.classList.add("mddtp-picker__cell"),l.textContent=60===a?this._numWithZero(0):this._numWithZero(a),0===e&&(e=60),d.classList.add("mddtp-picker__cell--rotate-"+s),(e===a||e-1===a||e+1===a||1===e&&60===a)&&(d.id="mddtp-minute__selected",d.classList.add("mddtp-picker__cell--selected")),d.appendChild(l),i.appendChild(d)}for(;t.lastChild;)t.removeChild(t.lastChild);t.appendChild(i)}},{key:"_initDateDialog",value:function(t){var e=this._sDialog.subtitle,i=this._sDialog.title,a=this._sDialog.titleDay,s=this._sDialog.titleMonth;this._fillText(e,t.format("YYYY")),this._fillText(a,t.format("ddd, ")),this._fillText(s,t.format("MMM D")),this._initYear(),this._initViewHolder(),this._attachEventHandlers(),this._changeMonth(),this._switchToView(e),this._switchToView(i),this._setButtonText()}},{key:"_initViewHolder",value:function(){var t=this._sDialog.tDate,e=this._sDialog.current,i=this._sDialog.previous,a=this._sDialog.next,s=this._past,l=this._future;t.isBefore(s,"month")&&(t=s.clone()),t.isAfter(l,"month")&&(t=l.clone()),this._sDialog.tDate=t,this._initMonth(e,t),this._initMonth(a,(0,d.default)(this._getMonth(t,1))),this._initMonth(i,(0,d.default)(this._getMonth(t,-1))),this._toMoveMonth()}},{key:"_initMonth",value:function(t,e){var i=e.format("MMMM YYYY"),a=t.getElementsByTagName("div");this._fillText(a[0],i);var s=document.createDocumentFragment(),l=a[3],o=d.default.weekdays(!0).indexOf(d.default.weekdays(!1,(0,d.default)(e).date(1).day())),n=-1,c=-1,r=parseInt((0,d.default)(e).endOf("month").format("D"),10)+o-1,_=o,u="mddtp-picker__cell",h=r;(0,d.default)().isSame(e,"month")&&(n=parseInt((0,d.default)().format("D"),10),n+=o-1),this._past.isSame(e,"month")&&(_=parseInt(this._past.format("D"),10),_+=o-1),this._future.isSame(e,"month")&&(h=parseInt(this._future.format("D"),10),h+=o-1),this._sDialog.sDate.isSame(e,"month")&&(c=parseInt((0,d.default)(e).format("D"),10),c+=o-1);for(var m=0;m<42;m++){var p=document.createElement("span"),g=m-o+1;m>=o&&m<=r&&(m>h||m<_?p.classList.add(u+"--disabled"):p.classList.add(u),this._fillText(p,g)),n===m&&p.classList.add(u+"--today"),c===m&&(p.classList.add(u+"--selected"),p.id="mddtp-date__selected"),s.appendChild(p)}for(;l.lastChild;)l.removeChild(l.lastChild);l.appendChild(s),this._addCellClickEvent(l)}},{key:"_initYear",value:function(){for(var t,e=this._sDialog.years,i=this._sDialog.tDate.year(),a=document.createDocumentFragment(),s=this._past.year(),d=this._future.year(),l=s;l<=d;l++)t=document.createElement("li"),t.textContent=l,l===i&&(t.id="mddtp-date__currentYear",t.classList.add("mddtp-picker__li--current")),a.appendChild(t);for(;e.lastChild;)e.removeChild(e.lastChild);e.appendChild(a),this._changeYear(e)}},{key:"_pointNeedle",value:function(e){var i=60,a=void 0,s=this._sDialog.circle,d=this._sDialog.fakeNeedle,l=this._sDialog.circularHolder,o=e._sDialog.needle;o.className="",o.classList.add("mddtp-picker__selection"),t.dialog.view?e._mode?(i=24,0===(a=parseInt(e._sDialog.sDate.format("H"),10))&&(a=24)):(i=12,a=e._sDialog.sDate.format("h")):(a=e._sDialog.sDate.format("m"),e._autoClose!==!0&&setTimeout(function(){var t=l.getBoundingClientRect(),e=s.getBoundingClientRect();d.setAttribute("style","left:"+(e.left-t.left)+"px;top:"+(e.top-t.top)+"px")},300));var n=e._calcRotation(i,parseInt(a,10));n&&o.classList.add(n)}},{key:"_switchToView",value:function(t){var e=this;"date"==this._type?t.onclick=function(){e._switchToDateView(t,e)}:(this._inner24===!0&&e._mode&&(parseInt(e._sDialog.sDate.format("H"),10)>12?e._sDialog.needle.classList.add("mddtp-picker__cell--rotate24"):e._sDialog.needle.classList.remove("mddtp-picker__cell--rotate24")),t.onclick=function(){e._switchToTimeView(e)})}},{key:"_switchToTimeView",value:function(e){var i=e._sDialog.hourView,a=e._sDialog.minuteView,s=e._sDialog.hour,d=e._sDialog.minute,l="mddtp-picker__circularView--hidden";i.classList.toggle(l),a.classList.toggle(l),s.classList.toggle("mddtp-picker__color--active"),d.classList.toggle("mddtp-picker__color--active"),t.dialog.view=!t.dialog.view,e._pointNeedle(e)}},{key:"_switchToDateView",value:function(e,i){e.setAttribute("disabled","");var a=i._sDialog.viewHolder,s=i._sDialog.years,d=i._sDialog.title,l=i._sDialog.subtitle,o=document.getElementById("mddtp-date__currentYear");t.dialog.view?(a.classList.add("zoomOut"),s.classList.remove("mddtp-picker__years--invisible"),s.classList.add("zoomIn"),o.scrollIntoViewIfNeeded&&o.scrollIntoViewIfNeeded()):(s.classList.add("zoomOut"),a.classList.remove("zoomOut"),a.classList.add("zoomIn"),setTimeout(function(){s.classList.remove("zoomIn","zoomOut"),s.classList.add("mddtp-picker__years--invisible"),a.classList.remove("zoomIn")},300)),d.classList.toggle("mddtp-picker__color--active"),l.classList.toggle("mddtp-picker__color--active"),t.dialog.view=!t.dialog.view,setTimeout(function(){e.removeAttribute("disabled")},300)}},{key:"_addClockEvent",value:function(){var t=this,e=this._sDialog.hourView,i=this._sDialog.minuteView,a="mddtp-picker__cell--selected";e.onclick=function(e){var i="mddtp-hour__selected",s=document.getElementById(i),d=0;e.target&&"SPAN"==e.target.nodeName&&(s.id="",s.classList.remove(a),e.target.parentNode.classList.add(a),e.target.parentNode.id=i,d=t._mode?parseInt(e.target.textContent,10):"AM"===t._sDialog.sDate.format("A")?e.target.textContent:parseInt(e.target.textContent,10)+12,t._sDialog.sDate.hour(d),t._sDialog.hour.textContent=e.target.textContent,t._pointNeedle(t),setTimeout(function(){t._switchToTimeView(t)},700))},i.onclick=function(e){var i="mddtp-minute__selected",s=document.getElementById(i),d=0;e.target&&"SPAN"==e.target.nodeName&&(s&&(s.id="",s.classList.remove(a)),e.target.parentNode.classList.add(a),e.target.parentNode.id=i,d=e.target.textContent,t._sDialog.sDate.minute(d),t._sDialog.minute.textContent=d,t._pointNeedle(t),t._autoClose===!0&&t._sDialog.ok.onclick())}}},{key:"_addCellClickEvent",value:function(t){var e=this;t.onclick=function(t){if(t.target&&"SPAN"==t.target.nodeName&&t.target.classList.contains("mddtp-picker__cell")){var i=t.target.textContent,a=e._sDialog.tDate.date(i),s="mddtp-date__selected",d="mddtp-picker__cell--selected",l=document.getElementById(s),o=e._sDialog.subtitle,n=e._sDialog.titleDay,c=e._sDialog.titleMonth;l&&(l.classList.remove(d),l.id=""),t.target.classList.add(d),t.target.id=s,e._sDialog.sDate=a.clone(),e._fillText(o,a.year()),e._fillText(n,a.format("ddd, ")),e._fillText(c,a.format("MMM D")),e._autoClose===!0&&e._sDialog.ok.onclick()}}}},{key:"_toMoveMonth",value:function(){var t=this._sDialog.tDate,e=this._sDialog.left,i=this._sDialog.right,a=this._past,s=this._future;e.removeAttribute("disabled"),i.removeAttribute("disabled"),e.classList.remove("mddtp-button--disabled"),i.classList.remove("mddtp-button--disabled"),t.isSame(a,"month")&&(e.setAttribute("disabled",""),e.classList.add("mddtp-button--disabled")),t.isSame(s,"month")&&(i.setAttribute("disabled",""),i.classList.add("mddtp-button--disabled"))}},{key:"_changeMonth",value:function(){function t(t,d){var l=!1,o=e._sDialog.next,n=e._sDialog.current,c=e._sDialog.previous;i.setAttribute("disabled",""),a.setAttribute("disabled",""),n.classList.add(t),c.classList.add(t),o.classList.add(t);var r=d.cloneNode(!0),_=void 0;d===o?(_=c,n.parentNode.appendChild(r),o.id=n.id,n.id=c.id,c=n,n=o,o=r):(l=!0,_=o,c.id=n.id,n.id=o.id,o=n,n=c),setTimeout(function(){d===c&&(n.parentNode.insertBefore(r,n),c=r),e._sDialog.next=o,e._sDialog.current=n,e._sDialog.previous=c,n.classList.add(s),o.classList.add(s),c.classList.add(s),n.classList.remove(t),o.classList.remove(t),c.classList.remove(t),_.parentNode.removeChild(_)},300),setTimeout(function(){n.classList.remove(s),o.classList.remove(s),c.classList.remove(s),e._sDialog.tDate=l?e._getMonth(e._sDialog.tDate,-1):e._getMonth(e._sDialog.tDate,1),e._initViewHolder()},350),setTimeout(function(){i.classList.contains("mddtp-button--disabled")||i.removeAttribute("disabled"),a.classList.contains("mddtp-button--disabled")||a.removeAttribute("disabled")},400)}var e=this,i=this._sDialog.left,a=this._sDialog.right,s="mddtp-picker__view--pause";i.onclick=function(){t("mddtp-picker__view--right",e._sDialog.previous)},a.onclick=function(){t("mddtp-picker__view--left",e._sDialog.next)}}},{key:"_changeYear",value:function(t){var e=this;t.onclick=function(i){if(i.target&&"LI"==i.target.nodeName){var a=document.getElementById("mddtp-date__currentYear");a.id="",a.classList.remove("mddtp-picker__li--current"),i.target.id="mddtp-date__currentYear",i.target.classList.add("mddtp-picker__li--current"),e._switchToDateView(t,e),e._sDialog.tDate.year(parseInt(i.target.textContent,10)),e._initViewHolder()}}}},{key:"_changeM",value:function(){var t=this,e=this._sDialog.AM,i=this._sDialog.PM;e.onclick=function(a){var s="AM";t._sDialog.sDate._locale.isPM(t._sDialog.sDate.format("A"))&&(s="PM"),"PM"===s&&(t._sDialog.sDate.subtract(12,"h"),e.classList.toggle("mddtp-picker__color--active"),i.classList.toggle("mddtp-picker__color--active"))},i.onclick=function(a){var s="AM";t._sDialog.sDate._locale.isPM(t._sDialog.sDate.format("A"))&&(s="PM"),"AM"===s&&(t._sDialog.sDate.add(12,"h"),e.classList.toggle("mddtp-picker__color--active"),i.classList.toggle("mddtp-picker__color--active"))}}},{key:"_dragDial",value:function(){var t=this,e=this._sDialog.needle,i=this._sDialog.circle,a=this._sDialog.fakeNeedle,s=this._sDialog.circularHolder,d=this._sDialog.minute,o="mddtp-picker__selection--quick",n="mddtp-picker__cell--selected",c=s.getBoundingClientRect(),r=void 0,_=new l.default(a,{containment:!0});_.on("pointerDown",function(t){c=s.getBoundingClientRect()}),_.on("pointerMove",function(t){var i=t.clientX,a=t.clientY;void 0===i&&(void 0===t.pageX?t.touches&&t.touches.length>0?(i=t.touches[0].clientX,a=t.touches[0].clientY):console.error("coult not detect pageX, pageY"):(i=pageX-document.body.scrollLeft-document.documentElement.scrollLeft,a=pageY-document.body.scrollTop-document.documentElement.scrollTop));var s=i-c.left-c.width/2,d=a-c.top-c.height/2,l=Math.atan2(-d,s);e.className="",l<0&&(l+=2*Math.PI),l*=180/Math.PI,l=360-l,l>270&&(l-=360),r=parseInt(l/6);var n=Math.abs(6*r-l);Math.abs(6*(r+1)-l)<n&&r++,r+=15,e.classList.add("mddtp-picker__selection"),e.classList.add(o),e.classList.add("mddtp-picker__cell--rotate-"+2*r)});var u=function(s){var l=t._sDialog.minuteView.getElementsByTagName("div"),_="mddtp-minute__selected",u=document.getElementById(_),h=i.getBoundingClientRect();a.setAttribute("style","left:"+(h.left-c.left)+"px;top:"+(h.top-c.top)+"px"),e.classList.remove(o);var m=r;1===m&&(m=60),m=t._nearestDivisor(m,5),60===r&&(r=0),u&&(u.id="",u.classList.remove(n)),m>0&&(m/=5,m--,l[m].id=_,l[m].classList.add(n)),d.textContent=t._numWithZero(r),t._sDialog.sDate.minutes(r)};_.on("pointerUp",u),_.on("dragEnd",u)}},{key:"_attachEventHandlers",value:function(){var t=this,e=this._sDialog.ok,i=this._sDialog.cancel,a=new CustomEvent("onCancel"),s=new CustomEvent("onOk");i.onclick=function(){t.toggle(),t._trigger&&t._trigger.dispatchEvent(a)},e.onclick=function(){t._init=t._sDialog.sDate,t.toggle(),t._trigger&&t._trigger.dispatchEvent(s)}}},{key:"_setButtonText",value:function(){this._sDialog.cancel.textContent=this._cancel,this._sDialog.ok.textContent=this._ok}},{key:"_getMonth",value:function(t,e){var i=void 0;return i=t.clone(),e>0?i.add(Math.abs(e),"M"):i.subtract(Math.abs(e),"M")}},{key:"_nearestDivisor",value:function(t,e){return t%e==0?t:(t-1)%e==0?t-1:(t+1)%e==0?t+1:-1}},{key:"_numWithZero",value:function(t){return t>9?""+t:"0"+t}},{key:"_fillText",value:function(t,e){t.firstChild?t.firstChild.nodeValue=e:t.appendChild(document.createTextNode(e))}},{key:"_addId",value:function(t,e){t.id="mddtp-"+this._type+"__"+e}},{key:"_addClass",value:function(t,e,i){t.classList.add("mddtp-picker__"+e);var a=0;for(i&&(a=i.length,i.reverse());a--;)t.classList.add(i[a])}},{key:"_addView",value:function(t){for(var e=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div"),l=d.default.weekdaysMin(!0).reverse(),o=7;o--;){var n=document.createElement("span");n.textContent=l[o],a.appendChild(n)}this._addClass(e,"month"),this._addClass(i,"grid"),this._addClass(a,"th"),this._addClass(s,"tr"),t.appendChild(e),t.appendChild(i),i.appendChild(a),i.appendChild(s)}},{key:"_calcRotation",value:function(t,e){return e*=12===t?10:24===t?5:2,60===t&&0===e&&(e=120),"mddtp-picker__cell--rotate-"+e}},{key:"time",get:function(){return this._init},set:function(t){t&&(this._init=t)}},{key:"trigger",get:function(){return this._trigger},set:function(t){t&&(this._trigger=t)}}],[{key:"dialog",get:function(){return t._dialog},set:function(e){t.dialog=e}}]),t}();n._dialog={view:!0,state:!1},t.default=n});

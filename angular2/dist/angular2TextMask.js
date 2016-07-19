!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@angular/common"),require("@angular/core")):"function"==typeof define&&define.amd?define(["@angular/common","@angular/core"],t):"object"==typeof exports?exports.angular2TextMask=t(require("@angular/common"),require("@angular/core")):e.angular2TextMask=t(e.ng.common,e.ng.core)}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=r(7),i=r(6),u=r(5),c=function(){function e(e,t){this.ngControl=t,this.textMaskConfig={mask:"",guide:!0,placeholderChar:"_",pipe:void 0,keepCharPositions:!1,onReject:void 0,onAccept:void 0},this.inputElement=e.nativeElement}return e.prototype.ngOnInit=function(){var e=this.textMaskConfig.placeholderChar;this.control=u["default"](Object.assign({inputElement:this.inputElement,placeholderChar:e},this.textMaskConfig))},e.prototype.onInput=function(){this.control.update(),this.ngControl.viewToModelUpdate(this.inputElement.value)},n([a.Input("textMask"),o("design:type",Object)],e.prototype,"textMaskConfig",void 0),e=n([a.Directive({selector:"input[textMask]",host:{"(input)":"onInput()"}}),o("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.ElementRef&&a.ElementRef)&&t||Object,"function"==typeof(r="undefined"!=typeof i.NgControl&&i.NgControl)&&r||Object])],e);var t,r}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=c,t.Directive=c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.maskingCharactersEnums={numeric:"1",alphabetic:"A",alphanumeric:"?",uppercase:"U",lowercase:"L",any:"*"},t.maskingCharacters=["1","A","?","U","L","*"],t.placeholderChar="_"},function(e,t,r){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?d:arguments[0],t=arguments.length<=1||void 0===arguments[1]?f.placeholderChar:arguments[1];if(e.indexOf(t)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(t)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));for(var r=!1,n=d,o=0;o<e.length;o++){var a=e[o];"\\"!==a||r===!0?r!==!0?n+=f.maskingCharacters.indexOf(a)!==-1?t:a:(r=!1,n+=a):(r=!0,n+=d)}return n}function o(){var e=arguments.length<=0||void 0===arguments[0]?d:arguments[0];return e.split(d)}function a(){var e=arguments.length<=0||void 0===arguments[0]?d:arguments[0],t=arguments[1];switch(t){case f.maskingCharactersEnums.numeric:return u(e);case f.maskingCharactersEnums.uppercase:case f.maskingCharactersEnums.lowercase:case f.maskingCharactersEnums.alphabetic:return c(e);case f.maskingCharactersEnums.alphanumeric:return u(e)||c(e);case f.maskingCharactersEnums.any:return h.test(e)===!1;default:return!1}}function i(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case f.maskingCharactersEnums.uppercase:return e.toUpperCase();case f.maskingCharactersEnums.lowercase:return e.toLowerCase();default:return e}}function u(e){return!isNaN(e)&&h.test(e)!==!0}function c(e){return p.test(e)}function s(e){return"string"==typeof e||e instanceof String}function l(e){return e&&void 0===e.length&&!isNaN(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.tokenize=o,t.isAcceptableChar=a,t.potentiallyTransformChar=i,t.isString=s,t.isNumber=l;var f=r(1),d="",h=/\s/g,p=/^[a-zA-Z]+$/},function(e,t){"use strict";function r(e){var t=e.previousConformedValue,r=void 0===t?"":t,o=e.currentCaretPosition,a=void 0===o?0:o,i=e.conformedValue,u=e.rawValue,c=e.placeholderChar,s=e.placeholder,l=e.indexesOfPipedChars,f=void 0===l?n:l;if(0===a)return 0;var d=u.length,h=r.length,p=s.length,v=i.length,m=d-h,g=m>0,C=1===d,y=m>1&&!g&&!C;if(y)return a;var k=g&&(r===i||i===s),b=0;if(k?b=a-m:!function(){for(var e=i.toLowerCase(),t=u.toLowerCase(),r=t.substr(0,a).split(""),n=r.filter(function(t){return e.indexOf(t)!==-1}),o=n[n.length-1],c=f.map(function(t){return e[t]}),s=c.filter(function(e){return e===o}).length,l=n.filter(function(e){return e===o}).length,d=l+s,h=0,p=0;p<v;p++){var m=e[p];if(b=p+1,m===o&&h++,h>=d)break}}(),g){for(var j=b,x=b;x<=p;x++)if(s[x]===c&&(j=x),s[x]===c||x===p)return j}else for(var P=b;P>=0;P--)if(s[P-1]===c||0===P)return P}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var n=[]},function(e,t,r){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments.length<=1||void 0===arguments[1]?"":arguments[1],r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=r.guide,i=void 0===n||n,u=r.previousConformedValue,c=void 0===u?"":u,s=r.placeholderChar,l=void 0===s?a.placeholderChar:s,f=r.placeholder,d=void 0===f?(0,o.convertMaskToPlaceholder)(t,l):f,h=r.currentCaretPosition,p=r.keepCharPositions,v=i===!1&&void 0!==c,m=e.length,g=c.length,C=d.length,y=m-g,k=y>0,b=h+(k?-y:0),j=b+Math.abs(y);if(p===!0&&!k){for(var x="",P=b;P<j;P++)d[P]===l&&(x+=l);e=e.slice(0,b)+x+e.slice(b,m)}for(var O=t.replace(/\\./g," "),w=e.split("").map(function(e,t){return{"char":e,isNew:t>=b&&t<j}}),M=0,E=0;E<C;E++){var _=E>=b&&""!==c,R=(_?E+y:E)-M,T=w[R];void 0!==T&&d[E]===T["char"]&&T["char"]!==l&&(w.splice(R,1),M++)}var V="",N=!1;e:for(var S=0;S<C;S++){var A=d[S];if(A===l){if(w.length>0)for(;w.length>0;){var L=w.shift(),q=L["char"],I=L.isNew;if(q===l&&v!==!0){V+=l;continue e}if((0,o.isAcceptableChar)(q,O[S])){if(p===!0&&I!==!1&&""!==c&&i!==!1&&k){for(var U=w.length,D=null,J=0;J<U;J++){var z=w[J];if(z["char"]!==l&&z.isNew===!1)break;if(z["char"]===l){D=J;break}}null!==D?(V+=(0,o.potentiallyTransformChar)(q,O[S]),w.splice(D,1)):S--}else V+=(0,o.potentiallyTransformChar)(q,O[S]);continue e}N=!0}v===!1&&(V+=d.substr(S,C));break}V+=A}if(v&&k===!1){for(var Z=null,$=0;$<V.length;$++)d[$]===l&&(Z=$);V=null!==Z?V.substr(0,Z+1):""}return{conformedValue:V,meta:{someCharsRejected:N}}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var o=r(2),a=r(1)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=e.inputElement,r=e.mask,n=e.guide,o=e.pipe,u=e.placeholderChar,s=void 0===u?d.placeholderChar:u,h=e.onAccept,p=e.onReject,v=e.keepCharPositions,m=void 0!==v&&v,g={previousConformedValue:""},C=void 0,y=void 0;return(0,f.isString)(r)&&(C=(0,f.convertMaskToPlaceholder)(r,s)),""===t.placeholder&&t.setAttribute("placeholder",C),{state:g,update:function(){var e=arguments.length<=0||void 0===arguments[0]?t.value:arguments[0];if(e!==g.previousConformedValue){var u=i(e);"function"==typeof r?(y=r(u),C=(0,f.convertMaskToPlaceholder)(y,s)):y=r;var d=t.selectionStart,v=g.previousConformedValue,k={previousConformedValue:v,guide:n,placeholderChar:s,pipe:o,placeholder:C,currentCaretPosition:d,keepCharPositions:m},b=(0,l["default"])(u,y,k),j=b.conformedValue,x=b.meta.someCharsRejected,P="function"==typeof o,O={};P&&(O=o(j,k),O===!1&&(O={value:v,rejected:!0}));var w=P?O.value:j,M=(0,c["default"])({previousConformedValue:v,conformedValue:w,placeholder:C,rawValue:u,currentCaretPosition:d,placeholderChar:s,indexesOfPipedChars:O.indexesOfPipedChars}),E=w===C&&0===M,_=E?"":w;t.value=_,a(t,M),g.previousConformedValue=_,"function"==typeof h&&_!==v&&h();var R=u.length<v.length;"function"==typeof p&&(x||O.rejected)&&R===!1&&p({conformedValue:w,pipeRejection:O.rejected,maskRejection:x})}}}}function a(e,t){document.activeElement===e&&e.setSelectionRange(t,t,"none")}function i(e){if((0,f.isString)(e))return e;if((0,f.isNumber)(e))return String(e);if(void 0===e||null===e)return"";throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var u=r(3),c=n(u),s=r(4),l=n(s),f=r(2),d=r(1)},function(t,r){t.exports=e},function(e,r){e.exports=t}])});
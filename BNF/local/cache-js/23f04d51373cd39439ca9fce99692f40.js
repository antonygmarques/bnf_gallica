/* compact [
	../prive/javascript/jquery.js?1491570413
	../prive/javascript/jquery.form.js?1491570413
	../prive/javascript/jquery.autosave.js?1491570413
	../prive/javascript/jquery.placeholder-label.js?1491570413
	../prive/javascript/ajaxCallback.js?1491570413
	../prive/javascript/jquery.cookie.js?1491570413
	../prive/javascript/spip_barre.js?1491570413
	../prive/javascript/layer.js?1491570413
	../prive/javascript/presentation.js?1491570413
	../prive/javascript/gadgets.js?1491570413
	../plugins-dist/jquery_ui/prive/javascript/ui/effect.js
	../plugins-dist/mediabox/javascript/jquery.colorbox.js?1491570413
	../plugins-dist/mediabox/javascript/spip.mediabox.js?1491570413
	../plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js
	../plugins-dist/porte_plume/javascript/jquery.previsu_spip.js
	page=porte_plume_start.js(lang=fr)
	../plugins-dist/porte_plume/javascript/porte_plume_forcer_hauteur.js
] 57.3% */

/* ../prive/javascript/jquery.js?1491570413 */

(function(global,factory){
if(typeof module==="object"&&typeof module.exports==="object"){
module.exports=global.document?
factory(global,true):
function(w){
if(!w.document){
throw new Error("jQuery requires a window with a document");
}
return factory(w);
};
}else{
factory(global);
}
}(typeof window!=="undefined"?window:this,function(window,noGlobal){
var deletedIds=[];
var document=window.document;
var slice=deletedIds.slice;
var concat=deletedIds.concat;
var push=deletedIds.push;
var indexOf=deletedIds.indexOf;
var class2type={};
var toString=class2type.toString;
var hasOwn=class2type.hasOwnProperty;
var support={};
var
version="1.12.4",
jQuery=function(selector,context){
return new jQuery.fn.init(selector,context);
},
rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
rmsPrefix=/^-ms-/,
rdashAlpha=/-([\da-z])/gi,
fcamelCase=function(all,letter){
return letter.toUpperCase();
};
jQuery.fn=jQuery.prototype={
jquery:version,
constructor:jQuery,
selector:"",
length:0,
toArray:function(){
return slice.call(this);
},
get:function(num){
return num!=null?
(num<0?this[num+this.length]:this[num]):
slice.call(this);
},
pushStack:function(elems){
var ret=jQuery.merge(this.constructor(),elems);
ret.prevObject=this;
ret.context=this.context;
return ret;
},
each:function(callback){
return jQuery.each(this,callback);
},
map:function(callback){
return this.pushStack(jQuery.map(this,function(elem,i){
return callback.call(elem,i,elem);
}));
},
slice:function(){
return this.pushStack(slice.apply(this,arguments));
},
first:function(){
return this.eq(0);
},
last:function(){
return this.eq(-1);
},
eq:function(i){
var len=this.length,
j=+i+(i<0?len:0);
return this.pushStack(j>=0&&j<len?[this[j]]:[]);
},
end:function(){
return this.prevObject||this.constructor();
},
push:push,
sort:deletedIds.sort,
splice:deletedIds.splice
};
jQuery.extend=jQuery.fn.extend=function(){
var src,copyIsArray,copy,name,options,clone,
target=arguments[0]||{},
i=1,
length=arguments.length,
deep=false;
if(typeof target==="boolean"){
deep=target;
target=arguments[i]||{};
i++;
}
if(typeof target!=="object"&&!jQuery.isFunction(target)){
target={};
}
if(i===length){
target=this;
i--;
}
for(;i<length;i++){
if((options=arguments[i])!=null){
for(name in options){
src=target[name];
copy=options[name];
if(target===copy){
continue;
}
if(deep&&copy&&(jQuery.isPlainObject(copy)||
(copyIsArray=jQuery.isArray(copy)))){
if(copyIsArray){
copyIsArray=false;
clone=src&&jQuery.isArray(src)?src:[];
}else{
clone=src&&jQuery.isPlainObject(src)?src:{};
}
target[name]=jQuery.extend(deep,clone,copy);
}else if(copy!==undefined){
target[name]=copy;
}
}
}
}
return target;
};
jQuery.extend({
expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),
isReady:true,
error:function(msg){
throw new Error(msg);
},
noop:function(){},
isFunction:function(obj){
return jQuery.type(obj)==="function";
},
isArray:Array.isArray||function(obj){
return jQuery.type(obj)==="array";
},
isWindow:function(obj){
return obj!=null&&obj==obj.window;
},
isNumeric:function(obj){
var realStringObj=obj&&obj.toString();
return!jQuery.isArray(obj)&&(realStringObj-parseFloat(realStringObj)+1)>=0;
},
isEmptyObject:function(obj){
var name;
for(name in obj){
return false;
}
return true;
},
isPlainObject:function(obj){
var key;
if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){
return false;
}
try{
if(obj.constructor&&
!hasOwn.call(obj,"constructor")&&
!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){
return false;
}
}catch(e){
return false;
}
if(!support.ownFirst){
for(key in obj){
return hasOwn.call(obj,key);
}
}
for(key in obj){}
return key===undefined||hasOwn.call(obj,key);
},
type:function(obj){
if(obj==null){
return obj+"";
}
return typeof obj==="object"||typeof obj==="function"?
class2type[toString.call(obj)]||"object":
typeof obj;
},
globalEval:function(data){
if(data&&jQuery.trim(data)){
(window.execScript||function(data){
window["eval"].call(window,data);
})(data);
}
},
camelCase:function(string){
return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);
},
nodeName:function(elem,name){
return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();
},
each:function(obj,callback){
var length,i=0;
if(isArrayLike(obj)){
length=obj.length;
for(;i<length;i++){
if(callback.call(obj[i],i,obj[i])===false){
break;
}
}
}else{
for(i in obj){
if(callback.call(obj[i],i,obj[i])===false){
break;
}
}
}
return obj;
},
trim:function(text){
return text==null?
"":
(text+"").replace(rtrim,"");
},
makeArray:function(arr,results){
var ret=results||[];
if(arr!=null){
if(isArrayLike(Object(arr))){
jQuery.merge(ret,
typeof arr==="string"?
[arr]:arr
);
}else{
push.call(ret,arr);
}
}
return ret;
},
inArray:function(elem,arr,i){
var len;
if(arr){
if(indexOf){
return indexOf.call(arr,elem,i);
}
len=arr.length;
i=i?i<0?Math.max(0,len+i):i:0;
for(;i<len;i++){
if(i in arr&&arr[i]===elem){
return i;
}
}
}
return-1;
},
merge:function(first,second){
var len=+second.length,
j=0,
i=first.length;
while(j<len){
first[i++]=second[j++];
}
if(len!==len){
while(second[j]!==undefined){
first[i++]=second[j++];
}
}
first.length=i;
return first;
},
grep:function(elems,callback,invert){
var callbackInverse,
matches=[],
i=0,
length=elems.length,
callbackExpect=!invert;
for(;i<length;i++){
callbackInverse=!callback(elems[i],i);
if(callbackInverse!==callbackExpect){
matches.push(elems[i]);
}
}
return matches;
},
map:function(elems,callback,arg){
var length,value,
i=0,
ret=[];
if(isArrayLike(elems)){
length=elems.length;
for(;i<length;i++){
value=callback(elems[i],i,arg);
if(value!=null){
ret.push(value);
}
}
}else{
for(i in elems){
value=callback(elems[i],i,arg);
if(value!=null){
ret.push(value);
}
}
}
return concat.apply([],ret);
},
guid:1,
proxy:function(fn,context){
var args,proxy,tmp;
if(typeof context==="string"){
tmp=fn[context];
context=fn;
fn=tmp;
}
if(!jQuery.isFunction(fn)){
return undefined;
}
args=slice.call(arguments,2);
proxy=function(){
return fn.apply(context||this,args.concat(slice.call(arguments)));
};
proxy.guid=fn.guid=fn.guid||jQuery.guid++;
return proxy;
},
now:function(){
return+(new Date());
},
support:support
});
if(typeof Symbol==="function"){
jQuery.fn[Symbol.iterator]=deletedIds[Symbol.iterator];
}
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
function(i,name){
class2type["[object "+name+"]"]=name.toLowerCase();
});
function isArrayLike(obj){
var length=!!obj&&"length"in obj&&obj.length,
type=jQuery.type(obj);
if(type==="function"||jQuery.isWindow(obj)){
return false;
}
return type==="array"||length===0||
typeof length==="number"&&length>0&&(length-1)in obj;
}
var Sizzle=
(function(window){
var i,
support,
Expr,
getText,
isXML,
tokenize,
compile,
select,
outermostContext,
sortInput,
hasDuplicate,
setDocument,
document,
docElem,
documentIsHTML,
rbuggyQSA,
rbuggyMatches,
matches,
contains,
expando="sizzle"+1*new Date(),
preferredDoc=window.document,
dirruns=0,
done=0,
classCache=createCache(),
tokenCache=createCache(),
compilerCache=createCache(),
sortOrder=function(a,b){
if(a===b){
hasDuplicate=true;
}
return 0;
},
MAX_NEGATIVE=1<<31,
hasOwn=({}).hasOwnProperty,
arr=[],
pop=arr.pop,
push_native=arr.push,
push=arr.push,
slice=arr.slice,
indexOf=function(list,elem){
var i=0,
len=list.length;
for(;i<len;i++){
if(list[i]===elem){
return i;
}
}
return-1;
},
booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
whitespace="[\\x20\\t\\r\\n\\f]",
identifier="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+
"*([*^$|!~]?=)"+whitespace+
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+
"*\\]",
pseudos=":("+identifier+")(?:\\(("+
"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+
"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+
".*"+
")\\)|)",
rwhitespace=new RegExp(whitespace+"+","g"),
rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),
rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),
rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),
rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),
rpseudo=new RegExp(pseudos),
ridentifier=new RegExp("^"+identifier+"$"),
matchExpr={
"ID":new RegExp("^#("+identifier+")"),
"CLASS":new RegExp("^\\.("+identifier+")"),
"TAG":new RegExp("^("+identifier+"|[*])"),
"ATTR":new RegExp("^"+attributes),
"PSEUDO":new RegExp("^"+pseudos),
"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+
"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+
"*(\\d+)|))"+whitespace+"*\\)|)","i"),
"bool":new RegExp("^(?:"+booleans+")$","i"),
"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+
whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")
},
rinputs=/^(?:input|select|textarea|button)$/i,
rheader=/^h\d$/i,
rnative=/^[^{]+\{\s*\[native \w/,
rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
rsibling=/[+~]/,
rescape=/'|\\/g,
runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),
funescape=function(_,escaped,escapedWhitespace){
var high="0x"+escaped-0x10000;
return high!==high||escapedWhitespace?
escaped:
high<0?
String.fromCharCode(high+0x10000):
String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);
},
unloadHandler=function(){
setDocument();
};
try{
push.apply(
(arr=slice.call(preferredDoc.childNodes)),
preferredDoc.childNodes
);
arr[preferredDoc.childNodes.length].nodeType;
}catch(e){
push={apply:arr.length?
function(target,els){
push_native.apply(target,slice.call(els));
}:
function(target,els){
var j=target.length,
i=0;
while((target[j++]=els[i++])){}
target.length=j-1;
}
};
}
function Sizzle(selector,context,results,seed){
var m,i,elem,nid,nidselect,match,groups,newSelector,
newContext=context&&context.ownerDocument,
nodeType=context?context.nodeType:9;
results=results||[];
if(typeof selector!=="string"||!selector||
nodeType!==1&&nodeType!==9&&nodeType!==11){
return results;
}
if(!seed){
if((context?context.ownerDocument||context:preferredDoc)!==document){
setDocument(context);
}
context=context||document;
if(documentIsHTML){
if(nodeType!==11&&(match=rquickExpr.exec(selector))){
if((m=match[1])){
if(nodeType===9){
if((elem=context.getElementById(m))){
if(elem.id===m){
results.push(elem);
return results;
}
}else{
return results;
}
}else{
if(newContext&&(elem=newContext.getElementById(m))&&
contains(context,elem)&&
elem.id===m){
results.push(elem);
return results;
}
}
}else if(match[2]){
push.apply(results,context.getElementsByTagName(selector));
return results;
}else if((m=match[3])&&support.getElementsByClassName&&
context.getElementsByClassName){
push.apply(results,context.getElementsByClassName(m));
return results;
}
}
if(support.qsa&&
!compilerCache[selector+" "]&&
(!rbuggyQSA||!rbuggyQSA.test(selector))){
if(nodeType!==1){
newContext=context;
newSelector=selector;
}else if(context.nodeName.toLowerCase()!=="object"){
if((nid=context.getAttribute("id"))){
nid=nid.replace(rescape,"\\$&");
}else{
context.setAttribute("id",(nid=expando));
}
groups=tokenize(selector);
i=groups.length;
nidselect=ridentifier.test(nid)?"#"+nid:"[id='"+nid+"']";
while(i--){
groups[i]=nidselect+" "+toSelector(groups[i]);
}
newSelector=groups.join(",");
newContext=rsibling.test(selector)&&testContext(context.parentNode)||
context;
}
if(newSelector){
try{
push.apply(results,
newContext.querySelectorAll(newSelector)
);
return results;
}catch(qsaError){
}finally{
if(nid===expando){
context.removeAttribute("id");
}
}
}
}
}
}
return select(selector.replace(rtrim,"$1"),context,results,seed);
}
function createCache(){
var keys=[];
function cache(key,value){
if(keys.push(key+" ")>Expr.cacheLength){
delete cache[keys.shift()];
}
return(cache[key+" "]=value);
}
return cache;
}
function markFunction(fn){
fn[expando]=true;
return fn;
}
function assert(fn){
var div=document.createElement("div");
try{
return!!fn(div);
}catch(e){
return false;
}finally{
if(div.parentNode){
div.parentNode.removeChild(div);
}
div=null;
}
}
function addHandle(attrs,handler){
var arr=attrs.split("|"),
i=arr.length;
while(i--){
Expr.attrHandle[arr[i]]=handler;
}
}
function siblingCheck(a,b){
var cur=b&&a,
diff=cur&&a.nodeType===1&&b.nodeType===1&&
(~b.sourceIndex||MAX_NEGATIVE)-
(~a.sourceIndex||MAX_NEGATIVE);
if(diff){
return diff;
}
if(cur){
while((cur=cur.nextSibling)){
if(cur===b){
return-1;
}
}
}
return a?1:-1;
}
function createInputPseudo(type){
return function(elem){
var name=elem.nodeName.toLowerCase();
return name==="input"&&elem.type===type;
};
}
function createButtonPseudo(type){
return function(elem){
var name=elem.nodeName.toLowerCase();
return(name==="input"||name==="button")&&elem.type===type;
};
}
function createPositionalPseudo(fn){
return markFunction(function(argument){
argument=+argument;
return markFunction(function(seed,matches){
var j,
matchIndexes=fn([],seed.length,argument),
i=matchIndexes.length;
while(i--){
if(seed[(j=matchIndexes[i])]){
seed[j]=!(matches[j]=seed[j]);
}
}
});
});
}
function testContext(context){
return context&&typeof context.getElementsByTagName!=="undefined"&&context;
}
support=Sizzle.support={};
isXML=Sizzle.isXML=function(elem){
var documentElement=elem&&(elem.ownerDocument||elem).documentElement;
return documentElement?documentElement.nodeName!=="HTML":false;
};
setDocument=Sizzle.setDocument=function(node){
var hasCompare,parent,
doc=node?node.ownerDocument||node:preferredDoc;
if(doc===document||doc.nodeType!==9||!doc.documentElement){
return document;
}
document=doc;
docElem=document.documentElement;
documentIsHTML=!isXML(document);
if((parent=document.defaultView)&&parent.top!==parent){
if(parent.addEventListener){
parent.addEventListener("unload",unloadHandler,false);
}else if(parent.attachEvent){
parent.attachEvent("onunload",unloadHandler);
}
}
support.attributes=assert(function(div){
div.className="i";
return!div.getAttribute("className");
});
support.getElementsByTagName=assert(function(div){
div.appendChild(document.createComment(""));
return!div.getElementsByTagName("*").length;
});
support.getElementsByClassName=rnative.test(document.getElementsByClassName);
support.getById=assert(function(div){
docElem.appendChild(div).id=expando;
return!document.getElementsByName||!document.getElementsByName(expando).length;
});
if(support.getById){
Expr.find["ID"]=function(id,context){
if(typeof context.getElementById!=="undefined"&&documentIsHTML){
var m=context.getElementById(id);
return m?[m]:[];
}
};
Expr.filter["ID"]=function(id){
var attrId=id.replace(runescape,funescape);
return function(elem){
return elem.getAttribute("id")===attrId;
};
};
}else{
delete Expr.find["ID"];
Expr.filter["ID"]=function(id){
var attrId=id.replace(runescape,funescape);
return function(elem){
var node=typeof elem.getAttributeNode!=="undefined"&&
elem.getAttributeNode("id");
return node&&node.value===attrId;
};
};
}
Expr.find["TAG"]=support.getElementsByTagName?
function(tag,context){
if(typeof context.getElementsByTagName!=="undefined"){
return context.getElementsByTagName(tag);
}else if(support.qsa){
return context.querySelectorAll(tag);
}
}:
function(tag,context){
var elem,
tmp=[],
i=0,
results=context.getElementsByTagName(tag);
if(tag==="*"){
while((elem=results[i++])){
if(elem.nodeType===1){
tmp.push(elem);
}
}
return tmp;
}
return results;
};
Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){
if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){
return context.getElementsByClassName(className);
}
};
rbuggyMatches=[];
rbuggyQSA=[];
if((support.qsa=rnative.test(document.querySelectorAll))){
assert(function(div){
docElem.appendChild(div).innerHTML="<a id='"+expando+"'></a>"+
"<select id='"+expando+"-\r\\' msallowcapture=''>"+
"<option selected=''></option></select>";
if(div.querySelectorAll("[msallowcapture^='']").length){
rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");
}
if(!div.querySelectorAll("[selected]").length){
rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");
}
if(!div.querySelectorAll("[id~="+expando+"-]").length){
rbuggyQSA.push("~=");
}
if(!div.querySelectorAll(":checked").length){
rbuggyQSA.push(":checked");
}
if(!div.querySelectorAll("a#"+expando+"+*").length){
rbuggyQSA.push(".#.+[+~]");
}
});
assert(function(div){
var input=document.createElement("input");
input.setAttribute("type","hidden");
div.appendChild(input).setAttribute("name","D");
if(div.querySelectorAll("[name=d]").length){
rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");
}
if(!div.querySelectorAll(":enabled").length){
rbuggyQSA.push(":enabled",":disabled");
}
div.querySelectorAll("*,:x");
rbuggyQSA.push(",.*:");
});
}
if((support.matchesSelector=rnative.test((matches=docElem.matches||
docElem.webkitMatchesSelector||
docElem.mozMatchesSelector||
docElem.oMatchesSelector||
docElem.msMatchesSelector)))){
assert(function(div){
support.disconnectedMatch=matches.call(div,"div");
matches.call(div,"[s!='']:x");
rbuggyMatches.push("!=",pseudos);
});
}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));
rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));
hasCompare=rnative.test(docElem.compareDocumentPosition);
contains=hasCompare||rnative.test(docElem.contains)?
function(a,b){
var adown=a.nodeType===9?a.documentElement:a,
bup=b&&b.parentNode;
return a===bup||!!(bup&&bup.nodeType===1&&(
adown.contains?
adown.contains(bup):
a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16
));
}:
function(a,b){
if(b){
while((b=b.parentNode)){
if(b===a){
return true;
}
}
}
return false;
};
sortOrder=hasCompare?
function(a,b){
if(a===b){
hasDuplicate=true;
return 0;
}
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;
if(compare){
return compare;
}
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?
a.compareDocumentPosition(b):
1;
if(compare&1||
(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){
if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){
return-1;
}
if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){
return 1;
}
return sortInput?
(indexOf(sortInput,a)-indexOf(sortInput,b)):
0;
}
return compare&4?-1:1;
}:
function(a,b){
if(a===b){
hasDuplicate=true;
return 0;
}
var cur,
i=0,
aup=a.parentNode,
bup=b.parentNode,
ap=[a],
bp=[b];
if(!aup||!bup){
return a===document?-1:
b===document?1:
aup?-1:
bup?1:
sortInput?
(indexOf(sortInput,a)-indexOf(sortInput,b)):
0;
}else if(aup===bup){
return siblingCheck(a,b);
}
cur=a;
while((cur=cur.parentNode)){
ap.unshift(cur);
}
cur=b;
while((cur=cur.parentNode)){
bp.unshift(cur);
}
while(ap[i]===bp[i]){
i++;
}
return i?
siblingCheck(ap[i],bp[i]):
ap[i]===preferredDoc?-1:
bp[i]===preferredDoc?1:
0;
};
return document;
};
Sizzle.matches=function(expr,elements){
return Sizzle(expr,null,null,elements);
};
Sizzle.matchesSelector=function(elem,expr){
if((elem.ownerDocument||elem)!==document){
setDocument(elem);
}
expr=expr.replace(rattributeQuotes,"='$1']");
if(support.matchesSelector&&documentIsHTML&&
!compilerCache[expr+" "]&&
(!rbuggyMatches||!rbuggyMatches.test(expr))&&
(!rbuggyQSA||!rbuggyQSA.test(expr))){
try{
var ret=matches.call(elem,expr);
if(ret||support.disconnectedMatch||
elem.document&&elem.document.nodeType!==11){
return ret;
}
}catch(e){}
}
return Sizzle(expr,document,null,[elem]).length>0;
};
Sizzle.contains=function(context,elem){
if((context.ownerDocument||context)!==document){
setDocument(context);
}
return contains(context,elem);
};
Sizzle.attr=function(elem,name){
if((elem.ownerDocument||elem)!==document){
setDocument(elem);
}
var fn=Expr.attrHandle[name.toLowerCase()],
val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?
fn(elem,name,!documentIsHTML):
undefined;
return val!==undefined?
val:
support.attributes||!documentIsHTML?
elem.getAttribute(name):
(val=elem.getAttributeNode(name))&&val.specified?
val.value:
null;
};
Sizzle.error=function(msg){
throw new Error("Syntax error, unrecognized expression: "+msg);
};
Sizzle.uniqueSort=function(results){
var elem,
duplicates=[],
j=0,
i=0;
hasDuplicate=!support.detectDuplicates;
sortInput=!support.sortStable&&results.slice(0);
results.sort(sortOrder);
if(hasDuplicate){
while((elem=results[i++])){
if(elem===results[i]){
j=duplicates.push(i);
}
}
while(j--){
results.splice(duplicates[j],1);
}
}
sortInput=null;
return results;
};
getText=Sizzle.getText=function(elem){
var node,
ret="",
i=0,
nodeType=elem.nodeType;
if(!nodeType){
while((node=elem[i++])){
ret+=getText(node);
}
}else if(nodeType===1||nodeType===9||nodeType===11){
if(typeof elem.textContent==="string"){
return elem.textContent;
}else{
for(elem=elem.firstChild;elem;elem=elem.nextSibling){
ret+=getText(elem);
}
}
}else if(nodeType===3||nodeType===4){
return elem.nodeValue;
}
return ret;
};
Expr=Sizzle.selectors={
cacheLength:50,
createPseudo:markFunction,
match:matchExpr,
attrHandle:{},
find:{},
relative:{
">":{dir:"parentNode",first:true},
" ":{dir:"parentNode"},
"+":{dir:"previousSibling",first:true},
"~":{dir:"previousSibling"}
},
preFilter:{
"ATTR":function(match){
match[1]=match[1].replace(runescape,funescape);
match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);
if(match[2]==="~="){
match[3]=" "+match[3]+" ";
}
return match.slice(0,4);
},
"CHILD":function(match){
match[1]=match[1].toLowerCase();
if(match[1].slice(0,3)==="nth"){
if(!match[3]){
Sizzle.error(match[0]);
}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));
match[5]=+((match[7]+match[8])||match[3]==="odd");
}else if(match[3]){
Sizzle.error(match[0]);
}
return match;
},
"PSEUDO":function(match){
var excess,
unquoted=!match[6]&&match[2];
if(matchExpr["CHILD"].test(match[0])){
return null;
}
if(match[3]){
match[2]=match[4]||match[5]||"";
}else if(unquoted&&rpseudo.test(unquoted)&&
(excess=tokenize(unquoted,true))&&
(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){
match[0]=match[0].slice(0,excess);
match[2]=unquoted.slice(0,excess);
}
return match.slice(0,3);
}
},
filter:{
"TAG":function(nodeNameSelector){
var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();
return nodeNameSelector==="*"?
function(){return true;}:
function(elem){
return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;
};
},
"CLASS":function(className){
var pattern=classCache[className+" "];
return pattern||
(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&
classCache(className,function(elem){
return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");
});
},
"ATTR":function(name,operator,check){
return function(elem){
var result=Sizzle.attr(elem,name);
if(result==null){
return operator==="!=";
}
if(!operator){
return true;
}
result+="";
return operator==="="?result===check:
operator==="!="?result!==check:
operator==="^="?check&&result.indexOf(check)===0:
operator==="*="?check&&result.indexOf(check)>-1:
operator==="$="?check&&result.slice(-check.length)===check:
operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:
operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":
false;
};
},
"CHILD":function(type,what,argument,first,last){
var simple=type.slice(0,3)!=="nth",
forward=type.slice(-4)!=="last",
ofType=what==="of-type";
return first===1&&last===0?
function(elem){
return!!elem.parentNode;
}:
function(elem,context,xml){
var cache,uniqueCache,outerCache,node,nodeIndex,start,
dir=simple!==forward?"nextSibling":"previousSibling",
parent=elem.parentNode,
name=ofType&&elem.nodeName.toLowerCase(),
useCache=!xml&&!ofType,
diff=false;
if(parent){
if(simple){
while(dir){
node=elem;
while((node=node[dir])){
if(ofType?
node.nodeName.toLowerCase()===name:
node.nodeType===1){
return false;
}
}
start=dir=type==="only"&&!start&&"nextSibling";
}
return true;
}
start=[forward?parent.firstChild:parent.lastChild];
if(forward&&useCache){
node=parent;
outerCache=node[expando]||(node[expando]={});
uniqueCache=outerCache[node.uniqueID]||
(outerCache[node.uniqueID]={});
cache=uniqueCache[type]||[];
nodeIndex=cache[0]===dirruns&&cache[1];
diff=nodeIndex&&cache[2];
node=nodeIndex&&parent.childNodes[nodeIndex];
while((node=++nodeIndex&&node&&node[dir]||
(diff=nodeIndex=0)||start.pop())){
if(node.nodeType===1&&++diff&&node===elem){
uniqueCache[type]=[dirruns,nodeIndex,diff];
break;
}
}
}else{
if(useCache){
node=elem;
outerCache=node[expando]||(node[expando]={});
uniqueCache=outerCache[node.uniqueID]||
(outerCache[node.uniqueID]={});
cache=uniqueCache[type]||[];
nodeIndex=cache[0]===dirruns&&cache[1];
diff=nodeIndex;
}
if(diff===false){
while((node=++nodeIndex&&node&&node[dir]||
(diff=nodeIndex=0)||start.pop())){
if((ofType?
node.nodeName.toLowerCase()===name:
node.nodeType===1)&&
++diff){
if(useCache){
outerCache=node[expando]||(node[expando]={});
uniqueCache=outerCache[node.uniqueID]||
(outerCache[node.uniqueID]={});
uniqueCache[type]=[dirruns,diff];
}
if(node===elem){
break;
}
}
}
}
}
diff-=last;
return diff===first||(diff%first===0&&diff/first>=0);
}
};
},
"PSEUDO":function(pseudo,argument){
var args,
fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||
Sizzle.error("unsupported pseudo: "+pseudo);
if(fn[expando]){
return fn(argument);
}
if(fn.length>1){
args=[pseudo,pseudo,"",argument];
return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?
markFunction(function(seed,matches){
var idx,
matched=fn(seed,argument),
i=matched.length;
while(i--){
idx=indexOf(seed,matched[i]);
seed[idx]=!(matches[idx]=matched[i]);
}
}):
function(elem){
return fn(elem,0,args);
};
}
return fn;
}
},
pseudos:{
"not":markFunction(function(selector){
var input=[],
results=[],
matcher=compile(selector.replace(rtrim,"$1"));
return matcher[expando]?
markFunction(function(seed,matches,context,xml){
var elem,
unmatched=matcher(seed,null,xml,[]),
i=seed.length;
while(i--){
if((elem=unmatched[i])){
seed[i]=!(matches[i]=elem);
}
}
}):
function(elem,context,xml){
input[0]=elem;
matcher(input,null,xml,results);
input[0]=null;
return!results.pop();
};
}),
"has":markFunction(function(selector){
return function(elem){
return Sizzle(selector,elem).length>0;
};
}),
"contains":markFunction(function(text){
text=text.replace(runescape,funescape);
return function(elem){
return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;
};
}),
"lang":markFunction(function(lang){
if(!ridentifier.test(lang||"")){
Sizzle.error("unsupported lang: "+lang);
}
lang=lang.replace(runescape,funescape).toLowerCase();
return function(elem){
var elemLang;
do{
if((elemLang=documentIsHTML?
elem.lang:
elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){
elemLang=elemLang.toLowerCase();
return elemLang===lang||elemLang.indexOf(lang+"-")===0;
}
}while((elem=elem.parentNode)&&elem.nodeType===1);
return false;
};
}),
"target":function(elem){
var hash=window.location&&window.location.hash;
return hash&&hash.slice(1)===elem.id;
},
"root":function(elem){
return elem===docElem;
},
"focus":function(elem){
return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);
},
"enabled":function(elem){
return elem.disabled===false;
},
"disabled":function(elem){
return elem.disabled===true;
},
"checked":function(elem){
var nodeName=elem.nodeName.toLowerCase();
return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);
},
"selected":function(elem){
if(elem.parentNode){
elem.parentNode.selectedIndex;
}
return elem.selected===true;
},
"empty":function(elem){
for(elem=elem.firstChild;elem;elem=elem.nextSibling){
if(elem.nodeType<6){
return false;
}
}
return true;
},
"parent":function(elem){
return!Expr.pseudos["empty"](elem);
},
"header":function(elem){
return rheader.test(elem.nodeName);
},
"input":function(elem){
return rinputs.test(elem.nodeName);
},
"button":function(elem){
var name=elem.nodeName.toLowerCase();
return name==="input"&&elem.type==="button"||name==="button";
},
"text":function(elem){
var attr;
return elem.nodeName.toLowerCase()==="input"&&
elem.type==="text"&&
((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");
},
"first":createPositionalPseudo(function(){
return[0];
}),
"last":createPositionalPseudo(function(matchIndexes,length){
return[length-1];
}),
"eq":createPositionalPseudo(function(matchIndexes,length,argument){
return[argument<0?argument+length:argument];
}),
"even":createPositionalPseudo(function(matchIndexes,length){
var i=0;
for(;i<length;i+=2){
matchIndexes.push(i);
}
return matchIndexes;
}),
"odd":createPositionalPseudo(function(matchIndexes,length){
var i=1;
for(;i<length;i+=2){
matchIndexes.push(i);
}
return matchIndexes;
}),
"lt":createPositionalPseudo(function(matchIndexes,length,argument){
var i=argument<0?argument+length:argument;
for(;--i>=0;){
matchIndexes.push(i);
}
return matchIndexes;
}),
"gt":createPositionalPseudo(function(matchIndexes,length,argument){
var i=argument<0?argument+length:argument;
for(;++i<length;){
matchIndexes.push(i);
}
return matchIndexes;
})
}
};
Expr.pseudos["nth"]=Expr.pseudos["eq"];
for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){
Expr.pseudos[i]=createInputPseudo(i);
}
for(i in{submit:true,reset:true}){
Expr.pseudos[i]=createButtonPseudo(i);
}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;
Expr.setFilters=new setFilters();
tokenize=Sizzle.tokenize=function(selector,parseOnly){
var matched,match,tokens,type,
soFar,groups,preFilters,
cached=tokenCache[selector+" "];
if(cached){
return parseOnly?0:cached.slice(0);
}
soFar=selector;
groups=[];
preFilters=Expr.preFilter;
while(soFar){
if(!matched||(match=rcomma.exec(soFar))){
if(match){
soFar=soFar.slice(match[0].length)||soFar;
}
groups.push((tokens=[]));
}
matched=false;
if((match=rcombinators.exec(soFar))){
matched=match.shift();
tokens.push({
value:matched,
type:match[0].replace(rtrim," ")
});
soFar=soFar.slice(matched.length);
}
for(type in Expr.filter){
if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||
(match=preFilters[type](match)))){
matched=match.shift();
tokens.push({
value:matched,
type:type,
matches:match
});
soFar=soFar.slice(matched.length);
}
}
if(!matched){
break;
}
}
return parseOnly?
soFar.length:
soFar?
Sizzle.error(selector):
tokenCache(selector,groups).slice(0);
};
function toSelector(tokens){
var i=0,
len=tokens.length,
selector="";
for(;i<len;i++){
selector+=tokens[i].value;
}
return selector;
}
function addCombinator(matcher,combinator,base){
var dir=combinator.dir,
checkNonElements=base&&dir==="parentNode",
doneName=done++;
return combinator.first?
function(elem,context,xml){
while((elem=elem[dir])){
if(elem.nodeType===1||checkNonElements){
return matcher(elem,context,xml);
}
}
}:
function(elem,context,xml){
var oldCache,uniqueCache,outerCache,
newCache=[dirruns,doneName];
if(xml){
while((elem=elem[dir])){
if(elem.nodeType===1||checkNonElements){
if(matcher(elem,context,xml)){
return true;
}
}
}
}else{
while((elem=elem[dir])){
if(elem.nodeType===1||checkNonElements){
outerCache=elem[expando]||(elem[expando]={});
uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});
if((oldCache=uniqueCache[dir])&&
oldCache[0]===dirruns&&oldCache[1]===doneName){
return(newCache[2]=oldCache[2]);
}else{
uniqueCache[dir]=newCache;
if((newCache[2]=matcher(elem,context,xml))){
return true;
}
}
}
}
}
};
}
function elementMatcher(matchers){
return matchers.length>1?
function(elem,context,xml){
var i=matchers.length;
while(i--){
if(!matchers[i](elem,context,xml)){
return false;
}
}
return true;
}:
matchers[0];
}
function multipleContexts(selector,contexts,results){
var i=0,
len=contexts.length;
for(;i<len;i++){
Sizzle(selector,contexts[i],results);
}
return results;
}
function condense(unmatched,map,filter,context,xml){
var elem,
newUnmatched=[],
i=0,
len=unmatched.length,
mapped=map!=null;
for(;i<len;i++){
if((elem=unmatched[i])){
if(!filter||filter(elem,context,xml)){
newUnmatched.push(elem);
if(mapped){
map.push(i);
}
}
}
}
return newUnmatched;
}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){
if(postFilter&&!postFilter[expando]){
postFilter=setMatcher(postFilter);
}
if(postFinder&&!postFinder[expando]){
postFinder=setMatcher(postFinder,postSelector);
}
return markFunction(function(seed,results,context,xml){
var temp,i,elem,
preMap=[],
postMap=[],
preexisting=results.length,
elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),
matcherIn=preFilter&&(seed||!selector)?
condense(elems,preMap,preFilter,context,xml):
elems,
matcherOut=matcher?
postFinder||(seed?preFilter:preexisting||postFilter)?
[]:
results:
matcherIn;
if(matcher){
matcher(matcherIn,matcherOut,context,xml);
}
if(postFilter){
temp=condense(matcherOut,postMap);
postFilter(temp,[],context,xml);
i=temp.length;
while(i--){
if((elem=temp[i])){
matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);
}
}
}
if(seed){
if(postFinder||preFilter){
if(postFinder){
temp=[];
i=matcherOut.length;
while(i--){
if((elem=matcherOut[i])){
temp.push((matcherIn[i]=elem));
}
}
postFinder(null,(matcherOut=[]),temp,xml);
}
i=matcherOut.length;
while(i--){
if((elem=matcherOut[i])&&
(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){
seed[temp]=!(results[temp]=elem);
}
}
}
}else{
matcherOut=condense(
matcherOut===results?
matcherOut.splice(preexisting,matcherOut.length):
matcherOut
);
if(postFinder){
postFinder(null,results,matcherOut,xml);
}else{
push.apply(results,matcherOut);
}
}
});
}
function matcherFromTokens(tokens){
var checkContext,matcher,j,
len=tokens.length,
leadingRelative=Expr.relative[tokens[0].type],
implicitRelative=leadingRelative||Expr.relative[" "],
i=leadingRelative?1:0,
matchContext=addCombinator(function(elem){
return elem===checkContext;
},implicitRelative,true),
matchAnyContext=addCombinator(function(elem){
return indexOf(checkContext,elem)>-1;
},implicitRelative,true),
matchers=[function(elem,context,xml){
var ret=(!leadingRelative&&(xml||context!==outermostContext))||(
(checkContext=context).nodeType?
matchContext(elem,context,xml):
matchAnyContext(elem,context,xml));
checkContext=null;
return ret;
}];
for(;i<len;i++){
if((matcher=Expr.relative[tokens[i].type])){
matchers=[addCombinator(elementMatcher(matchers),matcher)];
}else{
matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);
if(matcher[expando]){
j=++i;
for(;j<len;j++){
if(Expr.relative[tokens[j].type]){
break;
}
}
return setMatcher(
i>1&&elementMatcher(matchers),
i>1&&toSelector(
tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})
).replace(rtrim,"$1"),
matcher,
i<j&&matcherFromTokens(tokens.slice(i,j)),
j<len&&matcherFromTokens((tokens=tokens.slice(j))),
j<len&&toSelector(tokens)
);
}
matchers.push(matcher);
}
}
return elementMatcher(matchers);
}
function matcherFromGroupMatchers(elementMatchers,setMatchers){
var bySet=setMatchers.length>0,
byElement=elementMatchers.length>0,
superMatcher=function(seed,context,xml,results,outermost){
var elem,j,matcher,
matchedCount=0,
i="0",
unmatched=seed&&[],
setMatched=[],
contextBackup=outermostContext,
elems=seed||byElement&&Expr.find["TAG"]("*",outermost),
dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),
len=elems.length;
if(outermost){
outermostContext=context===document||context||outermost;
}
for(;i!==len&&(elem=elems[i])!=null;i++){
if(byElement&&elem){
j=0;
if(!context&&elem.ownerDocument!==document){
setDocument(elem);
xml=!documentIsHTML;
}
while((matcher=elementMatchers[j++])){
if(matcher(elem,context||document,xml)){
results.push(elem);
break;
}
}
if(outermost){
dirruns=dirrunsUnique;
}
}
if(bySet){
if((elem=!matcher&&elem)){
matchedCount--;
}
if(seed){
unmatched.push(elem);
}
}
}
matchedCount+=i;
if(bySet&&i!==matchedCount){
j=0;
while((matcher=setMatchers[j++])){
matcher(unmatched,setMatched,context,xml);
}
if(seed){
if(matchedCount>0){
while(i--){
if(!(unmatched[i]||setMatched[i])){
setMatched[i]=pop.call(results);
}
}
}
setMatched=condense(setMatched);
}
push.apply(results,setMatched);
if(outermost&&!seed&&setMatched.length>0&&
(matchedCount+setMatchers.length)>1){
Sizzle.uniqueSort(results);
}
}
if(outermost){
dirruns=dirrunsUnique;
outermostContext=contextBackup;
}
return unmatched;
};
return bySet?
markFunction(superMatcher):
superMatcher;
}
compile=Sizzle.compile=function(selector,match){
var i,
setMatchers=[],
elementMatchers=[],
cached=compilerCache[selector+" "];
if(!cached){
if(!match){
match=tokenize(selector);
}
i=match.length;
while(i--){
cached=matcherFromTokens(match[i]);
if(cached[expando]){
setMatchers.push(cached);
}else{
elementMatchers.push(cached);
}
}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));
cached.selector=selector;
}
return cached;
};
select=Sizzle.select=function(selector,context,results,seed){
var i,tokens,token,type,find,
compiled=typeof selector==="function"&&selector,
match=!seed&&tokenize((selector=compiled.selector||selector));
results=results||[];
if(match.length===1){
tokens=match[0]=match[0].slice(0);
if(tokens.length>2&&(token=tokens[0]).type==="ID"&&
support.getById&&context.nodeType===9&&documentIsHTML&&
Expr.relative[tokens[1].type]){
context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];
if(!context){
return results;
}else if(compiled){
context=context.parentNode;
}
selector=selector.slice(tokens.shift().value.length);
}
i=matchExpr["needsContext"].test(selector)?0:tokens.length;
while(i--){
token=tokens[i];
if(Expr.relative[(type=token.type)]){
break;
}
if((find=Expr.find[type])){
if((seed=find(
token.matches[0].replace(runescape,funescape),
rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context
))){
tokens.splice(i,1);
selector=seed.length&&toSelector(tokens);
if(!selector){
push.apply(results,seed);
return results;
}
break;
}
}
}
}
(compiled||compile(selector,match))(
seed,
context,
!documentIsHTML,
results,
!context||rsibling.test(selector)&&testContext(context.parentNode)||context
);
return results;
};
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;
support.detectDuplicates=!!hasDuplicate;
setDocument();
support.sortDetached=assert(function(div1){
return div1.compareDocumentPosition(document.createElement("div"))&1;
});
if(!assert(function(div){
div.innerHTML="<a href='#'></a>";
return div.firstChild.getAttribute("href")==="#";
})){
addHandle("type|href|height|width",function(elem,name,isXML){
if(!isXML){
return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);
}
});
}
if(!support.attributes||!assert(function(div){
div.innerHTML="<input/>";
div.firstChild.setAttribute("value","");
return div.firstChild.getAttribute("value")==="";
})){
addHandle("value",function(elem,name,isXML){
if(!isXML&&elem.nodeName.toLowerCase()==="input"){
return elem.defaultValue;
}
});
}
if(!assert(function(div){
return div.getAttribute("disabled")==null;
})){
addHandle(booleans,function(elem,name,isXML){
var val;
if(!isXML){
return elem[name]===true?name.toLowerCase():
(val=elem.getAttributeNode(name))&&val.specified?
val.value:
null;
}
});
}
return Sizzle;
})(window);
jQuery.find=Sizzle;
jQuery.expr=Sizzle.selectors;
jQuery.expr[":"]=jQuery.expr.pseudos;
jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;
jQuery.text=Sizzle.getText;
jQuery.isXMLDoc=Sizzle.isXML;
jQuery.contains=Sizzle.contains;
var dir=function(elem,dir,until){
var matched=[],
truncate=until!==undefined;
while((elem=elem[dir])&&elem.nodeType!==9){
if(elem.nodeType===1){
if(truncate&&jQuery(elem).is(until)){
break;
}
matched.push(elem);
}
}
return matched;
};
var siblings=function(n,elem){
var matched=[];
for(;n;n=n.nextSibling){
if(n.nodeType===1&&n!==elem){
matched.push(n);
}
}
return matched;
};
var rneedsContext=jQuery.expr.match.needsContext;
var rsingleTag=(/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/);
var risSimple=/^.[^:#\[\.,]*$/;
function winnow(elements,qualifier,not){
if(jQuery.isFunction(qualifier)){
return jQuery.grep(elements,function(elem,i){
return!!qualifier.call(elem,i,elem)!==not;
});
}
if(qualifier.nodeType){
return jQuery.grep(elements,function(elem){
return(elem===qualifier)!==not;
});
}
if(typeof qualifier==="string"){
if(risSimple.test(qualifier)){
return jQuery.filter(qualifier,elements,not);
}
qualifier=jQuery.filter(qualifier,elements);
}
return jQuery.grep(elements,function(elem){
return(jQuery.inArray(elem,qualifier)>-1)!==not;
});
}
jQuery.filter=function(expr,elems,not){
var elem=elems[0];
if(not){
expr=":not("+expr+")";
}
return elems.length===1&&elem.nodeType===1?
jQuery.find.matchesSelector(elem,expr)?[elem]:[]:
jQuery.find.matches(expr,jQuery.grep(elems,function(elem){
return elem.nodeType===1;
}));
};
jQuery.fn.extend({
find:function(selector){
var i,
ret=[],
self=this,
len=self.length;
if(typeof selector!=="string"){
return this.pushStack(jQuery(selector).filter(function(){
for(i=0;i<len;i++){
if(jQuery.contains(self[i],this)){
return true;
}
}
}));
}
for(i=0;i<len;i++){
jQuery.find(selector,self[i],ret);
}
ret=this.pushStack(len>1?jQuery.unique(ret):ret);
ret.selector=this.selector?this.selector+" "+selector:selector;
return ret;
},
filter:function(selector){
return this.pushStack(winnow(this,selector||[],false));
},
not:function(selector){
return this.pushStack(winnow(this,selector||[],true));
},
is:function(selector){
return!!winnow(
this,
typeof selector==="string"&&rneedsContext.test(selector)?
jQuery(selector):
selector||[],
false
).length;
}
});
var rootjQuery,
rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
init=jQuery.fn.init=function(selector,context,root){
var match,elem;
if(!selector){
return this;
}
root=root||rootjQuery;
if(typeof selector==="string"){
if(selector.charAt(0)==="<"&&
selector.charAt(selector.length-1)===">"&&
selector.length>=3){
match=[null,selector,null];
}else{
match=rquickExpr.exec(selector);
}
if(match&&(match[1]||!context)){
if(match[1]){
context=context instanceof jQuery?context[0]:context;
jQuery.merge(this,jQuery.parseHTML(
match[1],
context&&context.nodeType?context.ownerDocument||context:document,
true
));
if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){
for(match in context){
if(jQuery.isFunction(this[match])){
this[match](context[match]);
}else{
this.attr(match,context[match]);
}
}
}
return this;
}else{
elem=document.getElementById(match[2]);
if(elem&&elem.parentNode){
if(elem.id!==match[2]){
return rootjQuery.find(selector);
}
this.length=1;
this[0]=elem;
}
this.context=document;
this.selector=selector;
return this;
}
}else if(!context||context.jquery){
return(context||root).find(selector);
}else{
return this.constructor(context).find(selector);
}
}else if(selector.nodeType){
this.context=this[0]=selector;
this.length=1;
return this;
}else if(jQuery.isFunction(selector)){
return typeof root.ready!=="undefined"?
root.ready(selector):
selector(jQuery);
}
if(selector.selector!==undefined){
this.selector=selector.selector;
this.context=selector.context;
}
return jQuery.makeArray(selector,this);
};
init.prototype=jQuery.fn;
rootjQuery=jQuery(document);
var rparentsprev=/^(?:parents|prev(?:Until|All))/,
guaranteedUnique={
children:true,
contents:true,
next:true,
prev:true
};
jQuery.fn.extend({
has:function(target){
var i,
targets=jQuery(target,this),
len=targets.length;
return this.filter(function(){
for(i=0;i<len;i++){
if(jQuery.contains(this,targets[i])){
return true;
}
}
});
},
closest:function(selectors,context){
var cur,
i=0,
l=this.length,
matched=[],
pos=rneedsContext.test(selectors)||typeof selectors!=="string"?
jQuery(selectors,context||this.context):
0;
for(;i<l;i++){
for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){
if(cur.nodeType<11&&(pos?
pos.index(cur)>-1:
cur.nodeType===1&&
jQuery.find.matchesSelector(cur,selectors))){
matched.push(cur);
break;
}
}
}
return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);
},
index:function(elem){
if(!elem){
return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;
}
if(typeof elem==="string"){
return jQuery.inArray(this[0],jQuery(elem));
}
return jQuery.inArray(
elem.jquery?elem[0]:elem,this);
},
add:function(selector,context){
return this.pushStack(
jQuery.uniqueSort(
jQuery.merge(this.get(),jQuery(selector,context))
)
);
},
addBack:function(selector){
return this.add(selector==null?
this.prevObject:this.prevObject.filter(selector)
);
}
});
function sibling(cur,dir){
do{
cur=cur[dir];
}while(cur&&cur.nodeType!==1);
return cur;
}
jQuery.each({
parent:function(elem){
var parent=elem.parentNode;
return parent&&parent.nodeType!==11?parent:null;
},
parents:function(elem){
return dir(elem,"parentNode");
},
parentsUntil:function(elem,i,until){
return dir(elem,"parentNode",until);
},
next:function(elem){
return sibling(elem,"nextSibling");
},
prev:function(elem){
return sibling(elem,"previousSibling");
},
nextAll:function(elem){
return dir(elem,"nextSibling");
},
prevAll:function(elem){
return dir(elem,"previousSibling");
},
nextUntil:function(elem,i,until){
return dir(elem,"nextSibling",until);
},
prevUntil:function(elem,i,until){
return dir(elem,"previousSibling",until);
},
siblings:function(elem){
return siblings((elem.parentNode||{}).firstChild,elem);
},
children:function(elem){
return siblings(elem.firstChild);
},
contents:function(elem){
return jQuery.nodeName(elem,"iframe")?
elem.contentDocument||elem.contentWindow.document:
jQuery.merge([],elem.childNodes);
}
},function(name,fn){
jQuery.fn[name]=function(until,selector){
var ret=jQuery.map(this,fn,until);
if(name.slice(-5)!=="Until"){
selector=until;
}
if(selector&&typeof selector==="string"){
ret=jQuery.filter(selector,ret);
}
if(this.length>1){
if(!guaranteedUnique[name]){
ret=jQuery.uniqueSort(ret);
}
if(rparentsprev.test(name)){
ret=ret.reverse();
}
}
return this.pushStack(ret);
};
});
var rnotwhite=(/\S+/g);
function createOptions(options){
var object={};
jQuery.each(options.match(rnotwhite)||[],function(_,flag){
object[flag]=true;
});
return object;
}
jQuery.Callbacks=function(options){
options=typeof options==="string"?
createOptions(options):
jQuery.extend({},options);
var
firing,
memory,
fired,
locked,
list=[],
queue=[],
firingIndex=-1,
fire=function(){
locked=options.once;
fired=firing=true;
for(;queue.length;firingIndex=-1){
memory=queue.shift();
while(++firingIndex<list.length){
if(list[firingIndex].apply(memory[0],memory[1])===false&&
options.stopOnFalse){
firingIndex=list.length;
memory=false;
}
}
}
if(!options.memory){
memory=false;
}
firing=false;
if(locked){
if(memory){
list=[];
}else{
list="";
}
}
},
self={
add:function(){
if(list){
if(memory&&!firing){
firingIndex=list.length-1;
queue.push(memory);
}
(function add(args){
jQuery.each(args,function(_,arg){
if(jQuery.isFunction(arg)){
if(!options.unique||!self.has(arg)){
list.push(arg);
}
}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){
add(arg);
}
});
})(arguments);
if(memory&&!firing){
fire();
}
}
return this;
},
remove:function(){
jQuery.each(arguments,function(_,arg){
var index;
while((index=jQuery.inArray(arg,list,index))>-1){
list.splice(index,1);
if(index<=firingIndex){
firingIndex--;
}
}
});
return this;
},
has:function(fn){
return fn?
jQuery.inArray(fn,list)>-1:
list.length>0;
},
empty:function(){
if(list){
list=[];
}
return this;
},
disable:function(){
locked=queue=[];
list=memory="";
return this;
},
disabled:function(){
return!list;
},
lock:function(){
locked=true;
if(!memory){
self.disable();
}
return this;
},
locked:function(){
return!!locked;
},
fireWith:function(context,args){
if(!locked){
args=args||[];
args=[context,args.slice?args.slice():args];
queue.push(args);
if(!firing){
fire();
}
}
return this;
},
fire:function(){
self.fireWith(this,arguments);
return this;
},
fired:function(){
return!!fired;
}
};
return self;
};
jQuery.extend({
Deferred:function(func){
var tuples=[
["resolve","done",jQuery.Callbacks("once memory"),"resolved"],
["reject","fail",jQuery.Callbacks("once memory"),"rejected"],
["notify","progress",jQuery.Callbacks("memory")]
],
state="pending",
promise={
state:function(){
return state;
},
always:function(){
deferred.done(arguments).fail(arguments);
return this;
},
then:function(){
var fns=arguments;
return jQuery.Deferred(function(newDefer){
jQuery.each(tuples,function(i,tuple){
var fn=jQuery.isFunction(fns[i])&&fns[i];
deferred[tuple[1]](function(){
var returned=fn&&fn.apply(this,arguments);
if(returned&&jQuery.isFunction(returned.promise)){
returned.promise()
.progress(newDefer.notify)
.done(newDefer.resolve)
.fail(newDefer.reject);
}else{
newDefer[tuple[0]+"With"](
this===promise?newDefer.promise():this,
fn?[returned]:arguments
);
}
});
});
fns=null;
}).promise();
},
promise:function(obj){
return obj!=null?jQuery.extend(obj,promise):promise;
}
},
deferred={};
promise.pipe=promise.then;
jQuery.each(tuples,function(i,tuple){
var list=tuple[2],
stateString=tuple[3];
promise[tuple[1]]=list.add;
if(stateString){
list.add(function(){
state=stateString;
},tuples[i^1][2].disable,tuples[2][2].lock);
}
deferred[tuple[0]]=function(){
deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);
return this;
};
deferred[tuple[0]+"With"]=list.fireWith;
});
promise.promise(deferred);
if(func){
func.call(deferred,deferred);
}
return deferred;
},
when:function(subordinate){
var i=0,
resolveValues=slice.call(arguments),
length=resolveValues.length,
remaining=length!==1||
(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,
deferred=remaining===1?subordinate:jQuery.Deferred(),
updateFunc=function(i,contexts,values){
return function(value){
contexts[i]=this;
values[i]=arguments.length>1?slice.call(arguments):value;
if(values===progressValues){
deferred.notifyWith(contexts,values);
}else if(!(--remaining)){
deferred.resolveWith(contexts,values);
}
};
},
progressValues,progressContexts,resolveContexts;
if(length>1){
progressValues=new Array(length);
progressContexts=new Array(length);
resolveContexts=new Array(length);
for(;i<length;i++){
if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){
resolveValues[i].promise()
.progress(updateFunc(i,progressContexts,progressValues))
.done(updateFunc(i,resolveContexts,resolveValues))
.fail(deferred.reject);
}else{
--remaining;
}
}
}
if(!remaining){
deferred.resolveWith(resolveContexts,resolveValues);
}
return deferred.promise();
}
});
var readyList;
jQuery.fn.ready=function(fn){
jQuery.ready.promise().done(fn);
return this;
};
jQuery.extend({
isReady:false,
readyWait:1,
holdReady:function(hold){
if(hold){
jQuery.readyWait++;
}else{
jQuery.ready(true);
}
},
ready:function(wait){
if(wait===true?--jQuery.readyWait:jQuery.isReady){
return;
}
jQuery.isReady=true;
if(wait!==true&&--jQuery.readyWait>0){
return;
}
readyList.resolveWith(document,[jQuery]);
if(jQuery.fn.triggerHandler){
jQuery(document).triggerHandler("ready");
jQuery(document).off("ready");
}
}
});
function detach(){
if(document.addEventListener){
document.removeEventListener("DOMContentLoaded",completed);
window.removeEventListener("load",completed);
}else{
document.detachEvent("onreadystatechange",completed);
window.detachEvent("onload",completed);
}
}
function completed(){
if(document.addEventListener||
window.event.type==="load"||
document.readyState==="complete"){
detach();
jQuery.ready();
}
}
jQuery.ready.promise=function(obj){
if(!readyList){
readyList=jQuery.Deferred();
if(document.readyState==="complete"||
(document.readyState!=="loading"&&!document.documentElement.doScroll)){
window.setTimeout(jQuery.ready);
}else if(document.addEventListener){
document.addEventListener("DOMContentLoaded",completed);
window.addEventListener("load",completed);
}else{
document.attachEvent("onreadystatechange",completed);
window.attachEvent("onload",completed);
var top=false;
try{
top=window.frameElement==null&&document.documentElement;
}catch(e){}
if(top&&top.doScroll){
(function doScrollCheck(){
if(!jQuery.isReady){
try{
top.doScroll("left");
}catch(e){
return window.setTimeout(doScrollCheck,50);
}
detach();
jQuery.ready();
}
})();
}
}
}
return readyList.promise(obj);
};
jQuery.ready.promise();
var i;
for(i in jQuery(support)){
break;
}
support.ownFirst=i==="0";
support.inlineBlockNeedsLayout=false;
jQuery(function(){
var val,div,body,container;
body=document.getElementsByTagName("body")[0];
if(!body||!body.style){
return;
}
div=document.createElement("div");
container=document.createElement("div");
container.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
body.appendChild(container).appendChild(div);
if(typeof div.style.zoom!=="undefined"){
div.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
support.inlineBlockNeedsLayout=val=div.offsetWidth===3;
if(val){
body.style.zoom=1;
}
}
body.removeChild(container);
});
(function(){
var div=document.createElement("div");
support.deleteExpando=true;
try{
delete div.test;
}catch(e){
support.deleteExpando=false;
}
div=null;
})();
var acceptData=function(elem){
var noData=jQuery.noData[(elem.nodeName+" ").toLowerCase()],
nodeType=+elem.nodeType||1;
return nodeType!==1&&nodeType!==9?
false:
!noData||noData!==true&&elem.getAttribute("classid")===noData;
};
var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
rmultiDash=/([A-Z])/g;
function dataAttr(elem,key,data){
if(data===undefined&&elem.nodeType===1){
var name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();
data=elem.getAttribute(name);
if(typeof data==="string"){
try{
data=data==="true"?true:
data==="false"?false:
data==="null"?null:
+data+""===data?+data:
rbrace.test(data)?jQuery.parseJSON(data):
data;
}catch(e){}
jQuery.data(elem,key,data);
}else{
data=undefined;
}
}
return data;
}
function isEmptyDataObject(obj){
var name;
for(name in obj){
if(name==="data"&&jQuery.isEmptyObject(obj[name])){
continue;
}
if(name!=="toJSON"){
return false;
}
}
return true;
}
function internalData(elem,name,data,pvt){
if(!acceptData(elem)){
return;
}
var ret,thisCache,
internalKey=jQuery.expando,
isNode=elem.nodeType,
cache=isNode?jQuery.cache:elem,
id=isNode?elem[internalKey]:elem[internalKey]&&internalKey;
if((!id||!cache[id]||(!pvt&&!cache[id].data))&&
data===undefined&&typeof name==="string"){
return;
}
if(!id){
if(isNode){
id=elem[internalKey]=deletedIds.pop()||jQuery.guid++;
}else{
id=internalKey;
}
}
if(!cache[id]){
cache[id]=isNode?{}:{toJSON:jQuery.noop};
}
if(typeof name==="object"||typeof name==="function"){
if(pvt){
cache[id]=jQuery.extend(cache[id],name);
}else{
cache[id].data=jQuery.extend(cache[id].data,name);
}
}
thisCache=cache[id];
if(!pvt){
if(!thisCache.data){
thisCache.data={};
}
thisCache=thisCache.data;
}
if(data!==undefined){
thisCache[jQuery.camelCase(name)]=data;
}
if(typeof name==="string"){
ret=thisCache[name];
if(ret==null){
ret=thisCache[jQuery.camelCase(name)];
}
}else{
ret=thisCache;
}
return ret;
}
function internalRemoveData(elem,name,pvt){
if(!acceptData(elem)){
return;
}
var thisCache,i,
isNode=elem.nodeType,
cache=isNode?jQuery.cache:elem,
id=isNode?elem[jQuery.expando]:jQuery.expando;
if(!cache[id]){
return;
}
if(name){
thisCache=pvt?cache[id]:cache[id].data;
if(thisCache){
if(!jQuery.isArray(name)){
if(name in thisCache){
name=[name];
}else{
name=jQuery.camelCase(name);
if(name in thisCache){
name=[name];
}else{
name=name.split(" ");
}
}
}else{
name=name.concat(jQuery.map(name,jQuery.camelCase));
}
i=name.length;
while(i--){
delete thisCache[name[i]];
}
if(pvt?!isEmptyDataObject(thisCache):!jQuery.isEmptyObject(thisCache)){
return;
}
}
}
if(!pvt){
delete cache[id].data;
if(!isEmptyDataObject(cache[id])){
return;
}
}
if(isNode){
jQuery.cleanData([elem],true);
}else if(support.deleteExpando||cache!=cache.window){
delete cache[id];
}else{
cache[id]=undefined;
}
}
jQuery.extend({
cache:{},
noData:{
"applet ":true,
"embed ":true,
"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
},
hasData:function(elem){
elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];
return!!elem&&!isEmptyDataObject(elem);
},
data:function(elem,name,data){
return internalData(elem,name,data);
},
removeData:function(elem,name){
return internalRemoveData(elem,name);
},
_data:function(elem,name,data){
return internalData(elem,name,data,true);
},
_removeData:function(elem,name){
return internalRemoveData(elem,name,true);
}
});
jQuery.fn.extend({
data:function(key,value){
var i,name,data,
elem=this[0],
attrs=elem&&elem.attributes;
if(key===undefined){
if(this.length){
data=jQuery.data(elem);
if(elem.nodeType===1&&!jQuery._data(elem,"parsedAttrs")){
i=attrs.length;
while(i--){
if(attrs[i]){
name=attrs[i].name;
if(name.indexOf("data-")===0){
name=jQuery.camelCase(name.slice(5));
dataAttr(elem,name,data[name]);
}
}
}
jQuery._data(elem,"parsedAttrs",true);
}
}
return data;
}
if(typeof key==="object"){
return this.each(function(){
jQuery.data(this,key);
});
}
return arguments.length>1?
this.each(function(){
jQuery.data(this,key,value);
}):
elem?dataAttr(elem,key,jQuery.data(elem,key)):undefined;
},
removeData:function(key){
return this.each(function(){
jQuery.removeData(this,key);
});
}
});
jQuery.extend({
queue:function(elem,type,data){
var queue;
if(elem){
type=(type||"fx")+"queue";
queue=jQuery._data(elem,type);
if(data){
if(!queue||jQuery.isArray(data)){
queue=jQuery._data(elem,type,jQuery.makeArray(data));
}else{
queue.push(data);
}
}
return queue||[];
}
},
dequeue:function(elem,type){
type=type||"fx";
var queue=jQuery.queue(elem,type),
startLength=queue.length,
fn=queue.shift(),
hooks=jQuery._queueHooks(elem,type),
next=function(){
jQuery.dequeue(elem,type);
};
if(fn==="inprogress"){
fn=queue.shift();
startLength--;
}
if(fn){
if(type==="fx"){
queue.unshift("inprogress");
}
delete hooks.stop;
fn.call(elem,next,hooks);
}
if(!startLength&&hooks){
hooks.empty.fire();
}
},
_queueHooks:function(elem,type){
var key=type+"queueHooks";
return jQuery._data(elem,key)||jQuery._data(elem,key,{
empty:jQuery.Callbacks("once memory").add(function(){
jQuery._removeData(elem,type+"queue");
jQuery._removeData(elem,key);
})
});
}
});
jQuery.fn.extend({
queue:function(type,data){
var setter=2;
if(typeof type!=="string"){
data=type;
type="fx";
setter--;
}
if(arguments.length<setter){
return jQuery.queue(this[0],type);
}
return data===undefined?
this:
this.each(function(){
var queue=jQuery.queue(this,type,data);
jQuery._queueHooks(this,type);
if(type==="fx"&&queue[0]!=="inprogress"){
jQuery.dequeue(this,type);
}
});
},
dequeue:function(type){
return this.each(function(){
jQuery.dequeue(this,type);
});
},
clearQueue:function(type){
return this.queue(type||"fx",[]);
},
promise:function(type,obj){
var tmp,
count=1,
defer=jQuery.Deferred(),
elements=this,
i=this.length,
resolve=function(){
if(!(--count)){
defer.resolveWith(elements,[elements]);
}
};
if(typeof type!=="string"){
obj=type;
type=undefined;
}
type=type||"fx";
while(i--){
tmp=jQuery._data(elements[i],type+"queueHooks");
if(tmp&&tmp.empty){
count++;
tmp.empty.add(resolve);
}
}
resolve();
return defer.promise(obj);
}
});
(function(){
var shrinkWrapBlocksVal;
support.shrinkWrapBlocks=function(){
if(shrinkWrapBlocksVal!=null){
return shrinkWrapBlocksVal;
}
shrinkWrapBlocksVal=false;
var div,body,container;
body=document.getElementsByTagName("body")[0];
if(!body||!body.style){
return;
}
div=document.createElement("div");
container=document.createElement("div");
container.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
body.appendChild(container).appendChild(div);
if(typeof div.style.zoom!=="undefined"){
div.style.cssText=
"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+
"box-sizing:content-box;display:block;margin:0;border:0;"+
"padding:1px;width:1px;zoom:1";
div.appendChild(document.createElement("div")).style.width="5px";
shrinkWrapBlocksVal=div.offsetWidth!==3;
}
body.removeChild(container);
return shrinkWrapBlocksVal;
};
})();
var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");
var cssExpand=["Top","Right","Bottom","Left"];
var isHidden=function(elem,el){
elem=el||elem;
return jQuery.css(elem,"display")==="none"||
!jQuery.contains(elem.ownerDocument,elem);
};
function adjustCSS(elem,prop,valueParts,tween){
var adjusted,
scale=1,
maxIterations=20,
currentValue=tween?
function(){return tween.cur();}:
function(){return jQuery.css(elem,prop,"");},
initial=currentValue(),
unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),
initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&
rcssNum.exec(jQuery.css(elem,prop));
if(initialInUnit&&initialInUnit[3]!==unit){
unit=unit||initialInUnit[3];
valueParts=valueParts||[];
initialInUnit=+initial||1;
do{
scale=scale||".5";
initialInUnit=initialInUnit/scale;
jQuery.style(elem,prop,initialInUnit+unit);
}while(
scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations
);
}
if(valueParts){
initialInUnit=+initialInUnit||+initial||0;
adjusted=valueParts[1]?
initialInUnit+(valueParts[1]+1)*valueParts[2]:
+valueParts[2];
if(tween){
tween.unit=unit;
tween.start=initialInUnit;
tween.end=adjusted;
}
}
return adjusted;
}
var access=function(elems,fn,key,value,chainable,emptyGet,raw){
var i=0,
length=elems.length,
bulk=key==null;
if(jQuery.type(key)==="object"){
chainable=true;
for(i in key){
access(elems,fn,i,key[i],true,emptyGet,raw);
}
}else if(value!==undefined){
chainable=true;
if(!jQuery.isFunction(value)){
raw=true;
}
if(bulk){
if(raw){
fn.call(elems,value);
fn=null;
}else{
bulk=fn;
fn=function(elem,key,value){
return bulk.call(jQuery(elem),value);
};
}
}
if(fn){
for(;i<length;i++){
fn(
elems[i],
key,
raw?value:value.call(elems[i],i,fn(elems[i],key))
);
}
}
}
return chainable?
elems:
bulk?
fn.call(elems):
length?fn(elems[0],key):emptyGet;
};
var rcheckableType=(/^(?:checkbox|radio)$/i);
var rtagName=(/<([\w:-]+)/);
var rscriptType=(/^$|\/(?:java|ecma)script/i);
var rleadingWhitespace=(/^\s+/);
var nodeNames="abbr|article|aside|audio|bdi|canvas|data|datalist|"+
"details|dialog|figcaption|figure|footer|header|hgroup|main|"+
"mark|meter|nav|output|picture|progress|section|summary|template|time|video";
function createSafeFragment(document){
var list=nodeNames.split("|"),
safeFrag=document.createDocumentFragment();
if(safeFrag.createElement){
while(list.length){
safeFrag.createElement(
list.pop()
);
}
}
return safeFrag;
}
(function(){
var div=document.createElement("div"),
fragment=document.createDocumentFragment(),
input=document.createElement("input");
div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
support.leadingWhitespace=div.firstChild.nodeType===3;
support.tbody=!div.getElementsByTagName("tbody").length;
support.htmlSerialize=!!div.getElementsByTagName("link").length;
support.html5Clone=
document.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";
input.type="checkbox";
input.checked=true;
fragment.appendChild(input);
support.appendChecked=input.checked;
div.innerHTML="<textarea>x</textarea>";
support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;
fragment.appendChild(div);
input=document.createElement("input");
input.setAttribute("type","radio");
input.setAttribute("checked","checked");
input.setAttribute("name","t");
div.appendChild(input);
support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;
support.noCloneEvent=!!div.addEventListener;
div[jQuery.expando]=1;
support.attributes=!div.getAttribute(jQuery.expando);
})();
var wrapMap={
option:[1,"<select multiple='multiple'>","</select>"],
legend:[1,"<fieldset>","</fieldset>"],
area:[1,"<map>","</map>"],
param:[1,"<object>","</object>"],
thead:[1,"<table>","</table>"],
tr:[2,"<table><tbody>","</tbody></table>"],
col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],
td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
_default:support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]
};
wrapMap.optgroup=wrapMap.option;
wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;
wrapMap.th=wrapMap.td;
function getAll(context,tag){
var elems,elem,
i=0,
found=typeof context.getElementsByTagName!=="undefined"?
context.getElementsByTagName(tag||"*"):
typeof context.querySelectorAll!=="undefined"?
context.querySelectorAll(tag||"*"):
undefined;
if(!found){
for(found=[],elems=context.childNodes||context;
(elem=elems[i])!=null;
i++
){
if(!tag||jQuery.nodeName(elem,tag)){
found.push(elem);
}else{
jQuery.merge(found,getAll(elem,tag));
}
}
}
return tag===undefined||tag&&jQuery.nodeName(context,tag)?
jQuery.merge([context],found):
found;
}
function setGlobalEval(elems,refElements){
var elem,
i=0;
for(;(elem=elems[i])!=null;i++){
jQuery._data(
elem,
"globalEval",
!refElements||jQuery._data(refElements[i],"globalEval")
);
}
}
var rhtml=/<|&#?\w+;/,
rtbody=/<tbody/i;
function fixDefaultChecked(elem){
if(rcheckableType.test(elem.type)){
elem.defaultChecked=elem.checked;
}
}
function buildFragment(elems,context,scripts,selection,ignored){
var j,elem,contains,
tmp,tag,tbody,wrap,
l=elems.length,
safe=createSafeFragment(context),
nodes=[],
i=0;
for(;i<l;i++){
elem=elems[i];
if(elem||elem===0){
if(jQuery.type(elem)==="object"){
jQuery.merge(nodes,elem.nodeType?[elem]:elem);
}else if(!rhtml.test(elem)){
nodes.push(context.createTextNode(elem));
}else{
tmp=tmp||safe.appendChild(context.createElement("div"));
tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();
wrap=wrapMap[tag]||wrapMap._default;
tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];
j=wrap[0];
while(j--){
tmp=tmp.lastChild;
}
if(!support.leadingWhitespace&&rleadingWhitespace.test(elem)){
nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
}
if(!support.tbody){
elem=tag==="table"&&!rtbody.test(elem)?
tmp.firstChild:
wrap[1]==="<table>"&&!rtbody.test(elem)?
tmp:
0;
j=elem&&elem.childNodes.length;
while(j--){
if(jQuery.nodeName((tbody=elem.childNodes[j]),"tbody")&&
!tbody.childNodes.length){
elem.removeChild(tbody);
}
}
}
jQuery.merge(nodes,tmp.childNodes);
tmp.textContent="";
while(tmp.firstChild){
tmp.removeChild(tmp.firstChild);
}
tmp=safe.lastChild;
}
}
}
if(tmp){
safe.removeChild(tmp);
}
if(!support.appendChecked){
jQuery.grep(getAll(nodes,"input"),fixDefaultChecked);
}
i=0;
while((elem=nodes[i++])){
if(selection&&jQuery.inArray(elem,selection)>-1){
if(ignored){
ignored.push(elem);
}
continue;
}
contains=jQuery.contains(elem.ownerDocument,elem);
tmp=getAll(safe.appendChild(elem),"script");
if(contains){
setGlobalEval(tmp);
}
if(scripts){
j=0;
while((elem=tmp[j++])){
if(rscriptType.test(elem.type||"")){
scripts.push(elem);
}
}
}
}
tmp=null;
return safe;
}
(function(){
var i,eventName,
div=document.createElement("div");
for(i in{submit:true,change:true,focusin:true}){
eventName="on"+i;
if(!(support[i]=eventName in window)){
div.setAttribute(eventName,"t");
support[i]=div.attributes[eventName].expando===false;
}
}
div=null;
})();
var rformElems=/^(?:input|select|textarea)$/i,
rkeyEvent=/^key/,
rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,
rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,
rtypenamespace=/^([^.]*)(?:\.(.+)|)/;
function returnTrue(){
return true;
}
function returnFalse(){
return false;
}
function safeActiveElement(){
try{
return document.activeElement;
}catch(err){}
}
function on(elem,types,selector,data,fn,one){
var origFn,type;
if(typeof types==="object"){
if(typeof selector!=="string"){
data=data||selector;
selector=undefined;
}
for(type in types){
on(elem,type,selector,data,types[type],one);
}
return elem;
}
if(data==null&&fn==null){
fn=selector;
data=selector=undefined;
}else if(fn==null){
if(typeof selector==="string"){
fn=data;
data=undefined;
}else{
fn=data;
data=selector;
selector=undefined;
}
}
if(fn===false){
fn=returnFalse;
}else if(!fn){
return elem;
}
if(one===1){
origFn=fn;
fn=function(event){
jQuery().off(event);
return origFn.apply(this,arguments);
};
fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);
}
return elem.each(function(){
jQuery.event.add(this,types,fn,data,selector);
});
}
jQuery.event={
global:{},
add:function(elem,types,handler,data,selector){
var tmp,events,t,handleObjIn,
special,eventHandle,handleObj,
handlers,type,namespaces,origType,
elemData=jQuery._data(elem);
if(!elemData){
return;
}
if(handler.handler){
handleObjIn=handler;
handler=handleObjIn.handler;
selector=handleObjIn.selector;
}
if(!handler.guid){
handler.guid=jQuery.guid++;
}
if(!(events=elemData.events)){
events=elemData.events={};
}
if(!(eventHandle=elemData.handle)){
eventHandle=elemData.handle=function(e){
return typeof jQuery!=="undefined"&&
(!e||jQuery.event.triggered!==e.type)?
jQuery.event.dispatch.apply(eventHandle.elem,arguments):
undefined;
};
eventHandle.elem=elem;
}
types=(types||"").match(rnotwhite)||[""];
t=types.length;
while(t--){
tmp=rtypenamespace.exec(types[t])||[];
type=origType=tmp[1];
namespaces=(tmp[2]||"").split(".").sort();
if(!type){
continue;
}
special=jQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
special=jQuery.event.special[type]||{};
handleObj=jQuery.extend({
type:type,
origType:origType,
data:data,
handler:handler,
guid:handler.guid,
selector:selector,
needsContext:selector&&jQuery.expr.match.needsContext.test(selector),
namespace:namespaces.join(".")
},handleObjIn);
if(!(handlers=events[type])){
handlers=events[type]=[];
handlers.delegateCount=0;
if(!special.setup||
special.setup.call(elem,data,namespaces,eventHandle)===false){
if(elem.addEventListener){
elem.addEventListener(type,eventHandle,false);
}else if(elem.attachEvent){
elem.attachEvent("on"+type,eventHandle);
}
}
}
if(special.add){
special.add.call(elem,handleObj);
if(!handleObj.handler.guid){
handleObj.handler.guid=handler.guid;
}
}
if(selector){
handlers.splice(handlers.delegateCount++,0,handleObj);
}else{
handlers.push(handleObj);
}
jQuery.event.global[type]=true;
}
elem=null;
},
remove:function(elem,types,handler,selector,mappedTypes){
var j,handleObj,tmp,
origCount,t,events,
special,handlers,type,
namespaces,origType,
elemData=jQuery.hasData(elem)&&jQuery._data(elem);
if(!elemData||!(events=elemData.events)){
return;
}
types=(types||"").match(rnotwhite)||[""];
t=types.length;
while(t--){
tmp=rtypenamespace.exec(types[t])||[];
type=origType=tmp[1];
namespaces=(tmp[2]||"").split(".").sort();
if(!type){
for(type in events){
jQuery.event.remove(elem,type+types[t],handler,selector,true);
}
continue;
}
special=jQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
handlers=events[type]||[];
tmp=tmp[2]&&
new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");
origCount=j=handlers.length;
while(j--){
handleObj=handlers[j];
if((mappedTypes||origType===handleObj.origType)&&
(!handler||handler.guid===handleObj.guid)&&
(!tmp||tmp.test(handleObj.namespace))&&
(!selector||selector===handleObj.selector||
selector==="**"&&handleObj.selector)){
handlers.splice(j,1);
if(handleObj.selector){
handlers.delegateCount--;
}
if(special.remove){
special.remove.call(elem,handleObj);
}
}
}
if(origCount&&!handlers.length){
if(!special.teardown||
special.teardown.call(elem,namespaces,elemData.handle)===false){
jQuery.removeEvent(elem,type,elemData.handle);
}
delete events[type];
}
}
if(jQuery.isEmptyObject(events)){
delete elemData.handle;
jQuery._removeData(elem,"events");
}
},
trigger:function(event,data,elem,onlyHandlers){
var handle,ontype,cur,
bubbleType,special,tmp,i,
eventPath=[elem||document],
type=hasOwn.call(event,"type")?event.type:event,
namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];
cur=tmp=elem=elem||document;
if(elem.nodeType===3||elem.nodeType===8){
return;
}
if(rfocusMorph.test(type+jQuery.event.triggered)){
return;
}
if(type.indexOf(".")>-1){
namespaces=type.split(".");
type=namespaces.shift();
namespaces.sort();
}
ontype=type.indexOf(":")<0&&"on"+type;
event=event[jQuery.expando]?
event:
new jQuery.Event(type,typeof event==="object"&&event);
event.isTrigger=onlyHandlers?2:3;
event.namespace=namespaces.join(".");
event.rnamespace=event.namespace?
new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):
null;
event.result=undefined;
if(!event.target){
event.target=elem;
}
data=data==null?
[event]:
jQuery.makeArray(data,[event]);
special=jQuery.event.special[type]||{};
if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){
return;
}
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){
bubbleType=special.delegateType||type;
if(!rfocusMorph.test(bubbleType+type)){
cur=cur.parentNode;
}
for(;cur;cur=cur.parentNode){
eventPath.push(cur);
tmp=cur;
}
if(tmp===(elem.ownerDocument||document)){
eventPath.push(tmp.defaultView||tmp.parentWindow||window);
}
}
i=0;
while((cur=eventPath[i++])&&!event.isPropagationStopped()){
event.type=i>1?
bubbleType:
special.bindType||type;
handle=(jQuery._data(cur,"events")||{})[event.type]&&
jQuery._data(cur,"handle");
if(handle){
handle.apply(cur,data);
}
handle=ontype&&cur[ontype];
if(handle&&handle.apply&&acceptData(cur)){
event.result=handle.apply(cur,data);
if(event.result===false){
event.preventDefault();
}
}
}
event.type=type;
if(!onlyHandlers&&!event.isDefaultPrevented()){
if(
(!special._default||
special._default.apply(eventPath.pop(),data)===false
)&&acceptData(elem)
){
if(ontype&&elem[type]&&!jQuery.isWindow(elem)){
tmp=elem[ontype];
if(tmp){
elem[ontype]=null;
}
jQuery.event.triggered=type;
try{
elem[type]();
}catch(e){
}
jQuery.event.triggered=undefined;
if(tmp){
elem[ontype]=tmp;
}
}
}
}
return event.result;
},
dispatch:function(event){
event=jQuery.event.fix(event);
var i,j,ret,matched,handleObj,
handlerQueue=[],
args=slice.call(arguments),
handlers=(jQuery._data(this,"events")||{})[event.type]||[],
special=jQuery.event.special[event.type]||{};
args[0]=event;
event.delegateTarget=this;
if(special.preDispatch&&special.preDispatch.call(this,event)===false){
return;
}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);
i=0;
while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){
event.currentTarget=matched.elem;
j=0;
while((handleObj=matched.handlers[j++])&&
!event.isImmediatePropagationStopped()){
if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){
event.handleObj=handleObj;
event.data=handleObj.data;
ret=((jQuery.event.special[handleObj.origType]||{}).handle||
handleObj.handler).apply(matched.elem,args);
if(ret!==undefined){
if((event.result=ret)===false){
event.preventDefault();
event.stopPropagation();
}
}
}
}
}
if(special.postDispatch){
special.postDispatch.call(this,event);
}
return event.result;
},
handlers:function(event,handlers){
var i,matches,sel,handleObj,
handlerQueue=[],
delegateCount=handlers.delegateCount,
cur=event.target;
if(delegateCount&&cur.nodeType&&
(event.type!=="click"||isNaN(event.button)||event.button<1)){
for(;cur!=this;cur=cur.parentNode||this){
if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){
matches=[];
for(i=0;i<delegateCount;i++){
handleObj=handlers[i];
sel=handleObj.selector+" ";
if(matches[sel]===undefined){
matches[sel]=handleObj.needsContext?
jQuery(sel,this).index(cur)>-1:
jQuery.find(sel,this,null,[cur]).length;
}
if(matches[sel]){
matches.push(handleObj);
}
}
if(matches.length){
handlerQueue.push({elem:cur,handlers:matches});
}
}
}
}
if(delegateCount<handlers.length){
handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)});
}
return handlerQueue;
},
fix:function(event){
if(event[jQuery.expando]){
return event;
}
var i,prop,copy,
type=event.type,
originalEvent=event,
fixHook=this.fixHooks[type];
if(!fixHook){
this.fixHooks[type]=fixHook=
rmouseEvent.test(type)?this.mouseHooks:
rkeyEvent.test(type)?this.keyHooks:
{};
}
copy=fixHook.props?this.props.concat(fixHook.props):this.props;
event=new jQuery.Event(originalEvent);
i=copy.length;
while(i--){
prop=copy[i];
event[prop]=originalEvent[prop];
}
if(!event.target){
event.target=originalEvent.srcElement||document;
}
if(event.target.nodeType===3){
event.target=event.target.parentNode;
}
event.metaKey=!!event.metaKey;
return fixHook.filter?fixHook.filter(event,originalEvent):event;
},
props:("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase "+
"metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
fixHooks:{},
keyHooks:{
props:"char charCode key keyCode".split(" "),
filter:function(event,original){
if(event.which==null){
event.which=original.charCode!=null?original.charCode:original.keyCode;
}
return event;
}
},
mouseHooks:{
props:("button buttons clientX clientY fromElement offsetX offsetY "+
"pageX pageY screenX screenY toElement").split(" "),
filter:function(event,original){
var body,eventDoc,doc,
button=original.button,
fromElement=original.fromElement;
if(event.pageX==null&&original.clientX!=null){
eventDoc=event.target.ownerDocument||document;
doc=eventDoc.documentElement;
body=eventDoc.body;
event.pageX=original.clientX+
(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-
(doc&&doc.clientLeft||body&&body.clientLeft||0);
event.pageY=original.clientY+
(doc&&doc.scrollTop||body&&body.scrollTop||0)-
(doc&&doc.clientTop||body&&body.clientTop||0);
}
if(!event.relatedTarget&&fromElement){
event.relatedTarget=fromElement===event.target?
original.toElement:
fromElement;
}
if(!event.which&&button!==undefined){
event.which=(button&1?1:(button&2?3:(button&4?2:0)));
}
return event;
}
},
special:{
load:{
noBubble:true
},
focus:{
trigger:function(){
if(this!==safeActiveElement()&&this.focus){
try{
this.focus();
return false;
}catch(e){
}
}
},
delegateType:"focusin"
},
blur:{
trigger:function(){
if(this===safeActiveElement()&&this.blur){
this.blur();
return false;
}
},
delegateType:"focusout"
},
click:{
trigger:function(){
if(jQuery.nodeName(this,"input")&&this.type==="checkbox"&&this.click){
this.click();
return false;
}
},
_default:function(event){
return jQuery.nodeName(event.target,"a");
}
},
beforeunload:{
postDispatch:function(event){
if(event.result!==undefined&&event.originalEvent){
event.originalEvent.returnValue=event.result;
}
}
}
},
simulate:function(type,elem,event){
var e=jQuery.extend(
new jQuery.Event(),
event,
{
type:type,
isSimulated:true
}
);
jQuery.event.trigger(e,null,elem);
if(e.isDefaultPrevented()){
event.preventDefault();
}
}
};
jQuery.removeEvent=document.removeEventListener?
function(elem,type,handle){
if(elem.removeEventListener){
elem.removeEventListener(type,handle);
}
}:
function(elem,type,handle){
var name="on"+type;
if(elem.detachEvent){
if(typeof elem[name]==="undefined"){
elem[name]=null;
}
elem.detachEvent(name,handle);
}
};
jQuery.Event=function(src,props){
if(!(this instanceof jQuery.Event)){
return new jQuery.Event(src,props);
}
if(src&&src.type){
this.originalEvent=src;
this.type=src.type;
this.isDefaultPrevented=src.defaultPrevented||
src.defaultPrevented===undefined&&
src.returnValue===false?
returnTrue:
returnFalse;
}else{
this.type=src;
}
if(props){
jQuery.extend(this,props);
}
this.timeStamp=src&&src.timeStamp||jQuery.now();
this[jQuery.expando]=true;
};
jQuery.Event.prototype={
constructor:jQuery.Event,
isDefaultPrevented:returnFalse,
isPropagationStopped:returnFalse,
isImmediatePropagationStopped:returnFalse,
preventDefault:function(){
var e=this.originalEvent;
this.isDefaultPrevented=returnTrue;
if(!e){
return;
}
if(e.preventDefault){
e.preventDefault();
}else{
e.returnValue=false;
}
},
stopPropagation:function(){
var e=this.originalEvent;
this.isPropagationStopped=returnTrue;
if(!e||this.isSimulated){
return;
}
if(e.stopPropagation){
e.stopPropagation();
}
e.cancelBubble=true;
},
stopImmediatePropagation:function(){
var e=this.originalEvent;
this.isImmediatePropagationStopped=returnTrue;
if(e&&e.stopImmediatePropagation){
e.stopImmediatePropagation();
}
this.stopPropagation();
}
};
jQuery.each({
mouseenter:"mouseover",
mouseleave:"mouseout",
pointerenter:"pointerover",
pointerleave:"pointerout"
},function(orig,fix){
jQuery.event.special[orig]={
delegateType:fix,
bindType:fix,
handle:function(event){
var ret,
target=this,
related=event.relatedTarget,
handleObj=event.handleObj;
if(!related||(related!==target&&!jQuery.contains(target,related))){
event.type=handleObj.origType;
ret=handleObj.handler.apply(this,arguments);
event.type=fix;
}
return ret;
}
};
});
if(!support.submit){
jQuery.event.special.submit={
setup:function(){
if(jQuery.nodeName(this,"form")){
return false;
}
jQuery.event.add(this,"click._submit keypress._submit",function(e){
var elem=e.target,
form=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?
jQuery.prop(elem,"form"):
undefined;
if(form&&!jQuery._data(form,"submit")){
jQuery.event.add(form,"submit._submit",function(event){
event._submitBubble=true;
});
jQuery._data(form,"submit",true);
}
});
},
postDispatch:function(event){
if(event._submitBubble){
delete event._submitBubble;
if(this.parentNode&&!event.isTrigger){
jQuery.event.simulate("submit",this.parentNode,event);
}
}
},
teardown:function(){
if(jQuery.nodeName(this,"form")){
return false;
}
jQuery.event.remove(this,"._submit");
}
};
}
if(!support.change){
jQuery.event.special.change={
setup:function(){
if(rformElems.test(this.nodeName)){
if(this.type==="checkbox"||this.type==="radio"){
jQuery.event.add(this,"propertychange._change",function(event){
if(event.originalEvent.propertyName==="checked"){
this._justChanged=true;
}
});
jQuery.event.add(this,"click._change",function(event){
if(this._justChanged&&!event.isTrigger){
this._justChanged=false;
}
jQuery.event.simulate("change",this,event);
});
}
return false;
}
jQuery.event.add(this,"beforeactivate._change",function(e){
var elem=e.target;
if(rformElems.test(elem.nodeName)&&!jQuery._data(elem,"change")){
jQuery.event.add(elem,"change._change",function(event){
if(this.parentNode&&!event.isSimulated&&!event.isTrigger){
jQuery.event.simulate("change",this.parentNode,event);
}
});
jQuery._data(elem,"change",true);
}
});
},
handle:function(event){
var elem=event.target;
if(this!==elem||event.isSimulated||event.isTrigger||
(elem.type!=="radio"&&elem.type!=="checkbox")){
return event.handleObj.handler.apply(this,arguments);
}
},
teardown:function(){
jQuery.event.remove(this,"._change");
return!rformElems.test(this.nodeName);
}
};
}
if(!support.focusin){
jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){
var handler=function(event){
jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));
};
jQuery.event.special[fix]={
setup:function(){
var doc=this.ownerDocument||this,
attaches=jQuery._data(doc,fix);
if(!attaches){
doc.addEventListener(orig,handler,true);
}
jQuery._data(doc,fix,(attaches||0)+1);
},
teardown:function(){
var doc=this.ownerDocument||this,
attaches=jQuery._data(doc,fix)-1;
if(!attaches){
doc.removeEventListener(orig,handler,true);
jQuery._removeData(doc,fix);
}else{
jQuery._data(doc,fix,attaches);
}
}
};
});
}
jQuery.fn.extend({
on:function(types,selector,data,fn){
return on(this,types,selector,data,fn);
},
one:function(types,selector,data,fn){
return on(this,types,selector,data,fn,1);
},
off:function(types,selector,fn){
var handleObj,type;
if(types&&types.preventDefault&&types.handleObj){
handleObj=types.handleObj;
jQuery(types.delegateTarget).off(
handleObj.namespace?
handleObj.origType+"."+handleObj.namespace:
handleObj.origType,
handleObj.selector,
handleObj.handler
);
return this;
}
if(typeof types==="object"){
for(type in types){
this.off(type,selector,types[type]);
}
return this;
}
if(selector===false||typeof selector==="function"){
fn=selector;
selector=undefined;
}
if(fn===false){
fn=returnFalse;
}
return this.each(function(){
jQuery.event.remove(this,types,fn,selector);
});
},
trigger:function(type,data){
return this.each(function(){
jQuery.event.trigger(type,data,this);
});
},
triggerHandler:function(type,data){
var elem=this[0];
if(elem){
return jQuery.event.trigger(type,data,elem,true);
}
}
});
var rinlinejQuery=/ jQuery\d+="(?:null|\d+)"/g,
rnoshimcache=new RegExp("<(?:"+nodeNames+")[\\s/>]","i"),
rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
rnoInnerhtml=/<script|<style|<link/i,
rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,
rscriptTypeMasked=/^true\/(.*)/,
rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
safeFragment=createSafeFragment(document),
fragmentDiv=safeFragment.appendChild(document.createElement("div"));
function manipulationTarget(elem,content){
return jQuery.nodeName(elem,"table")&&
jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?
elem.getElementsByTagName("tbody")[0]||
elem.appendChild(elem.ownerDocument.createElement("tbody")):
elem;
}
function disableScript(elem){
elem.type=(jQuery.find.attr(elem,"type")!==null)+"/"+elem.type;
return elem;
}
function restoreScript(elem){
var match=rscriptTypeMasked.exec(elem.type);
if(match){
elem.type=match[1];
}else{
elem.removeAttribute("type");
}
return elem;
}
function cloneCopyEvent(src,dest){
if(dest.nodeType!==1||!jQuery.hasData(src)){
return;
}
var type,i,l,
oldData=jQuery._data(src),
curData=jQuery._data(dest,oldData),
events=oldData.events;
if(events){
delete curData.handle;
curData.events={};
for(type in events){
for(i=0,l=events[type].length;i<l;i++){
jQuery.event.add(dest,type,events[type][i]);
}
}
}
if(curData.data){
curData.data=jQuery.extend({},curData.data);
}
}
function fixCloneNodeIssues(src,dest){
var nodeName,e,data;
if(dest.nodeType!==1){
return;
}
nodeName=dest.nodeName.toLowerCase();
if(!support.noCloneEvent&&dest[jQuery.expando]){
data=jQuery._data(dest);
for(e in data.events){
jQuery.removeEvent(dest,e,data.handle);
}
dest.removeAttribute(jQuery.expando);
}
if(nodeName==="script"&&dest.text!==src.text){
disableScript(dest).text=src.text;
restoreScript(dest);
}else if(nodeName==="object"){
if(dest.parentNode){
dest.outerHTML=src.outerHTML;
}
if(support.html5Clone&&(src.innerHTML&&!jQuery.trim(dest.innerHTML))){
dest.innerHTML=src.innerHTML;
}
}else if(nodeName==="input"&&rcheckableType.test(src.type)){
dest.defaultChecked=dest.checked=src.checked;
if(dest.value!==src.value){
dest.value=src.value;
}
}else if(nodeName==="option"){
dest.defaultSelected=dest.selected=src.defaultSelected;
}else if(nodeName==="input"||nodeName==="textarea"){
dest.defaultValue=src.defaultValue;
}
}
function domManip(collection,args,callback,ignored){
args=concat.apply([],args);
var first,node,hasScripts,
scripts,doc,fragment,
i=0,
l=collection.length,
iNoClone=l-1,
value=args[0],
isFunction=jQuery.isFunction(value);
if(isFunction||
(l>1&&typeof value==="string"&&
!support.checkClone&&rchecked.test(value))){
return collection.each(function(index){
var self=collection.eq(index);
if(isFunction){
args[0]=value.call(this,index,self.html());
}
domManip(self,args,callback,ignored);
});
}
if(l){
fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);
first=fragment.firstChild;
if(fragment.childNodes.length===1){
fragment=first;
}
if(first||ignored){
scripts=jQuery.map(getAll(fragment,"script"),disableScript);
hasScripts=scripts.length;
for(;i<l;i++){
node=fragment;
if(i!==iNoClone){
node=jQuery.clone(node,true,true);
if(hasScripts){
jQuery.merge(scripts,getAll(node,"script"));
}
}
callback.call(collection[i],node,i);
}
if(hasScripts){
doc=scripts[scripts.length-1].ownerDocument;
jQuery.map(scripts,restoreScript);
for(i=0;i<hasScripts;i++){
node=scripts[i];
if(rscriptType.test(node.type||"")&&
!jQuery._data(node,"globalEval")&&
jQuery.contains(doc,node)){
if(node.src){
if(jQuery._evalUrl){
jQuery._evalUrl(node.src);
}
}else{
jQuery.globalEval(
(node.text||node.textContent||node.innerHTML||"")
.replace(rcleanScript,"")
);
}
}
}
}
fragment=first=null;
}
}
return collection;
}
function remove(elem,selector,keepData){
var node,
elems=selector?jQuery.filter(selector,elem):elem,
i=0;
for(;(node=elems[i])!=null;i++){
if(!keepData&&node.nodeType===1){
jQuery.cleanData(getAll(node));
}
if(node.parentNode){
if(keepData&&jQuery.contains(node.ownerDocument,node)){
setGlobalEval(getAll(node,"script"));
}
node.parentNode.removeChild(node);
}
}
return elem;
}
jQuery.extend({
htmlPrefilter:function(html){
return html.replace(rxhtmlTag,"<$1></$2>");
},
clone:function(elem,dataAndEvents,deepDataAndEvents){
var destElements,node,clone,i,srcElements,
inPage=jQuery.contains(elem.ownerDocument,elem);
if(support.html5Clone||jQuery.isXMLDoc(elem)||
!rnoshimcache.test("<"+elem.nodeName+">")){
clone=elem.cloneNode(true);
}else{
fragmentDiv.innerHTML=elem.outerHTML;
fragmentDiv.removeChild(clone=fragmentDiv.firstChild);
}
if((!support.noCloneEvent||!support.noCloneChecked)&&
(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){
destElements=getAll(clone);
srcElements=getAll(elem);
for(i=0;(node=srcElements[i])!=null;++i){
if(destElements[i]){
fixCloneNodeIssues(node,destElements[i]);
}
}
}
if(dataAndEvents){
if(deepDataAndEvents){
srcElements=srcElements||getAll(elem);
destElements=destElements||getAll(clone);
for(i=0;(node=srcElements[i])!=null;i++){
cloneCopyEvent(node,destElements[i]);
}
}else{
cloneCopyEvent(elem,clone);
}
}
destElements=getAll(clone,"script");
if(destElements.length>0){
setGlobalEval(destElements,!inPage&&getAll(elem,"script"));
}
destElements=srcElements=node=null;
return clone;
},
cleanData:function(elems,forceAcceptData){
var elem,type,id,data,
i=0,
internalKey=jQuery.expando,
cache=jQuery.cache,
attributes=support.attributes,
special=jQuery.event.special;
for(;(elem=elems[i])!=null;i++){
if(forceAcceptData||acceptData(elem)){
id=elem[internalKey];
data=id&&cache[id];
if(data){
if(data.events){
for(type in data.events){
if(special[type]){
jQuery.event.remove(elem,type);
}else{
jQuery.removeEvent(elem,type,data.handle);
}
}
}
if(cache[id]){
delete cache[id];
if(!attributes&&typeof elem.removeAttribute!=="undefined"){
elem.removeAttribute(internalKey);
}else{
elem[internalKey]=undefined;
}
deletedIds.push(id);
}
}
}
}
}
});
jQuery.fn.extend({
domManip:domManip,
detach:function(selector){
return remove(this,selector,true);
},
remove:function(selector){
return remove(this,selector);
},
text:function(value){
return access(this,function(value){
return value===undefined?
jQuery.text(this):
this.empty().append(
(this[0]&&this[0].ownerDocument||document).createTextNode(value)
);
},null,value,arguments.length);
},
append:function(){
return domManip(this,arguments,function(elem){
if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
var target=manipulationTarget(this,elem);
target.appendChild(elem);
}
});
},
prepend:function(){
return domManip(this,arguments,function(elem){
if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
var target=manipulationTarget(this,elem);
target.insertBefore(elem,target.firstChild);
}
});
},
before:function(){
return domManip(this,arguments,function(elem){
if(this.parentNode){
this.parentNode.insertBefore(elem,this);
}
});
},
after:function(){
return domManip(this,arguments,function(elem){
if(this.parentNode){
this.parentNode.insertBefore(elem,this.nextSibling);
}
});
},
empty:function(){
var elem,
i=0;
for(;(elem=this[i])!=null;i++){
if(elem.nodeType===1){
jQuery.cleanData(getAll(elem,false));
}
while(elem.firstChild){
elem.removeChild(elem.firstChild);
}
if(elem.options&&jQuery.nodeName(elem,"select")){
elem.options.length=0;
}
}
return this;
},
clone:function(dataAndEvents,deepDataAndEvents){
dataAndEvents=dataAndEvents==null?false:dataAndEvents;
deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;
return this.map(function(){
return jQuery.clone(this,dataAndEvents,deepDataAndEvents);
});
},
html:function(value){
return access(this,function(value){
var elem=this[0]||{},
i=0,
l=this.length;
if(value===undefined){
return elem.nodeType===1?
elem.innerHTML.replace(rinlinejQuery,""):
undefined;
}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&
(support.htmlSerialize||!rnoshimcache.test(value))&&
(support.leadingWhitespace||!rleadingWhitespace.test(value))&&
!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){
value=jQuery.htmlPrefilter(value);
try{
for(;i<l;i++){
elem=this[i]||{};
if(elem.nodeType===1){
jQuery.cleanData(getAll(elem,false));
elem.innerHTML=value;
}
}
elem=0;
}catch(e){}
}
if(elem){
this.empty().append(value);
}
},null,value,arguments.length);
},
replaceWith:function(){
var ignored=[];
return domManip(this,arguments,function(elem){
var parent=this.parentNode;
if(jQuery.inArray(this,ignored)<0){
jQuery.cleanData(getAll(this));
if(parent){
parent.replaceChild(elem,this);
}
}
},ignored);
}
});
jQuery.each({
appendTo:"append",
prependTo:"prepend",
insertBefore:"before",
insertAfter:"after",
replaceAll:"replaceWith"
},function(name,original){
jQuery.fn[name]=function(selector){
var elems,
i=0,
ret=[],
insert=jQuery(selector),
last=insert.length-1;
for(;i<=last;i++){
elems=i===last?this:this.clone(true);
jQuery(insert[i])[original](elems);
push.apply(ret,elems.get());
}
return this.pushStack(ret);
};
});
var iframe,
elemdisplay={
HTML:"block",
BODY:"block"
};
function actualDisplay(name,doc){
var elem=jQuery(doc.createElement(name)).appendTo(doc.body),
display=jQuery.css(elem[0],"display");
elem.detach();
return display;
}
function defaultDisplay(nodeName){
var doc=document,
display=elemdisplay[nodeName];
if(!display){
display=actualDisplay(nodeName,doc);
if(display==="none"||!display){
iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>"))
.appendTo(doc.documentElement);
doc=(iframe[0].contentWindow||iframe[0].contentDocument).document;
doc.write();
doc.close();
display=actualDisplay(nodeName,doc);
iframe.detach();
}
elemdisplay[nodeName]=display;
}
return display;
}
var rmargin=(/^margin/);
var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");
var swap=function(elem,options,callback,args){
var ret,name,
old={};
for(name in options){
old[name]=elem.style[name];
elem.style[name]=options[name];
}
ret=callback.apply(elem,args||[]);
for(name in options){
elem.style[name]=old[name];
}
return ret;
};
var documentElement=document.documentElement;
(function(){
var pixelPositionVal,pixelMarginRightVal,boxSizingReliableVal,
reliableHiddenOffsetsVal,reliableMarginRightVal,reliableMarginLeftVal,
container=document.createElement("div"),
div=document.createElement("div");
if(!div.style){
return;
}
div.style.cssText="float:left;opacity:.5";
support.opacity=div.style.opacity==="0.5";
support.cssFloat=!!div.style.cssFloat;
div.style.backgroundClip="content-box";
div.cloneNode(true).style.backgroundClip="";
support.clearCloneStyle=div.style.backgroundClip==="content-box";
container=document.createElement("div");
container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+
"padding:0;margin-top:1px;position:absolute";
div.innerHTML="";
container.appendChild(div);
support.boxSizing=div.style.boxSizing===""||div.style.MozBoxSizing===""||
div.style.WebkitBoxSizing==="";
jQuery.extend(support,{
reliableHiddenOffsets:function(){
if(pixelPositionVal==null){
computeStyleTests();
}
return reliableHiddenOffsetsVal;
},
boxSizingReliable:function(){
if(pixelPositionVal==null){
computeStyleTests();
}
return boxSizingReliableVal;
},
pixelMarginRight:function(){
if(pixelPositionVal==null){
computeStyleTests();
}
return pixelMarginRightVal;
},
pixelPosition:function(){
if(pixelPositionVal==null){
computeStyleTests();
}
return pixelPositionVal;
},
reliableMarginRight:function(){
if(pixelPositionVal==null){
computeStyleTests();
}
return reliableMarginRightVal;
},
reliableMarginLeft:function(){
if(pixelPositionVal==null){
computeStyleTests();
}
return reliableMarginLeftVal;
}
});
function computeStyleTests(){
var contents,divStyle,
documentElement=document.documentElement;
documentElement.appendChild(container);
div.style.cssText=
"-webkit-box-sizing:border-box;box-sizing:border-box;"+
"position:relative;display:block;"+
"margin:auto;border:1px;padding:1px;"+
"top:1%;width:50%";
pixelPositionVal=boxSizingReliableVal=reliableMarginLeftVal=false;
pixelMarginRightVal=reliableMarginRightVal=true;
if(window.getComputedStyle){
divStyle=window.getComputedStyle(div);
pixelPositionVal=(divStyle||{}).top!=="1%";
reliableMarginLeftVal=(divStyle||{}).marginLeft==="2px";
boxSizingReliableVal=(divStyle||{width:"4px"}).width==="4px";
div.style.marginRight="50%";
pixelMarginRightVal=(divStyle||{marginRight:"4px"}).marginRight==="4px";
contents=div.appendChild(document.createElement("div"));
contents.style.cssText=div.style.cssText=
"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+
"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
contents.style.marginRight=contents.style.width="0";
div.style.width="1px";
reliableMarginRightVal=
!parseFloat((window.getComputedStyle(contents)||{}).marginRight);
div.removeChild(contents);
}
div.style.display="none";
reliableHiddenOffsetsVal=div.getClientRects().length===0;
if(reliableHiddenOffsetsVal){
div.style.display="";
div.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
div.childNodes[0].style.borderCollapse="separate";
contents=div.getElementsByTagName("td");
contents[0].style.cssText="margin:0;border:0;padding:0;display:none";
reliableHiddenOffsetsVal=contents[0].offsetHeight===0;
if(reliableHiddenOffsetsVal){
contents[0].style.display="";
contents[1].style.display="none";
reliableHiddenOffsetsVal=contents[0].offsetHeight===0;
}
}
documentElement.removeChild(container);
}
})();
var getStyles,curCSS,
rposition=/^(top|right|bottom|left)$/;
if(window.getComputedStyle){
getStyles=function(elem){
var view=elem.ownerDocument.defaultView;
if(!view||!view.opener){
view=window;
}
return view.getComputedStyle(elem);
};
curCSS=function(elem,name,computed){
var width,minWidth,maxWidth,ret,
style=elem.style;
computed=computed||getStyles(elem);
ret=computed?computed.getPropertyValue(name)||computed[name]:undefined;
if((ret===""||ret===undefined)&&!jQuery.contains(elem.ownerDocument,elem)){
ret=jQuery.style(elem,name);
}
if(computed){
if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){
width=style.width;
minWidth=style.minWidth;
maxWidth=style.maxWidth;
style.minWidth=style.maxWidth=style.width=ret;
ret=computed.width;
style.width=width;
style.minWidth=minWidth;
style.maxWidth=maxWidth;
}
}
return ret===undefined?
ret:
ret+"";
};
}else if(documentElement.currentStyle){
getStyles=function(elem){
return elem.currentStyle;
};
curCSS=function(elem,name,computed){
var left,rs,rsLeft,ret,
style=elem.style;
computed=computed||getStyles(elem);
ret=computed?computed[name]:undefined;
if(ret==null&&style&&style[name]){
ret=style[name];
}
if(rnumnonpx.test(ret)&&!rposition.test(name)){
left=style.left;
rs=elem.runtimeStyle;
rsLeft=rs&&rs.left;
if(rsLeft){
rs.left=elem.currentStyle.left;
}
style.left=name==="fontSize"?"1em":ret;
ret=style.pixelLeft+"px";
style.left=left;
if(rsLeft){
rs.left=rsLeft;
}
}
return ret===undefined?
ret:
ret+""||"auto";
};
}
function addGetHookIf(conditionFn,hookFn){
return{
get:function(){
if(conditionFn()){
delete this.get;
return;
}
return(this.get=hookFn).apply(this,arguments);
}
};
}
var
ralpha=/alpha\([^)]*\)/i,
ropacity=/opacity\s*=\s*([^)]*)/i,
rdisplayswap=/^(none|table(?!-c[ea]).+)/,
rnumsplit=new RegExp("^("+pnum+")(.*)$","i"),
cssShow={position:"absolute",visibility:"hidden",display:"block"},
cssNormalTransform={
letterSpacing:"0",
fontWeight:"400"
},
cssPrefixes=["Webkit","O","Moz","ms"],
emptyStyle=document.createElement("div").style;
function vendorPropName(name){
if(name in emptyStyle){
return name;
}
var capName=name.charAt(0).toUpperCase()+name.slice(1),
i=cssPrefixes.length;
while(i--){
name=cssPrefixes[i]+capName;
if(name in emptyStyle){
return name;
}
}
}
function showHide(elements,show){
var display,elem,hidden,
values=[],
index=0,
length=elements.length;
for(;index<length;index++){
elem=elements[index];
if(!elem.style){
continue;
}
values[index]=jQuery._data(elem,"olddisplay");
display=elem.style.display;
if(show){
if(!values[index]&&display==="none"){
elem.style.display="";
}
if(elem.style.display===""&&isHidden(elem)){
values[index]=
jQuery._data(elem,"olddisplay",defaultDisplay(elem.nodeName));
}
}else{
hidden=isHidden(elem);
if(display&&display!=="none"||!hidden){
jQuery._data(
elem,
"olddisplay",
hidden?display:jQuery.css(elem,"display")
);
}
}
}
for(index=0;index<length;index++){
elem=elements[index];
if(!elem.style){
continue;
}
if(!show||elem.style.display==="none"||elem.style.display===""){
elem.style.display=show?values[index]||"":"none";
}
}
return elements;
}
function setPositiveNumber(elem,value,subtract){
var matches=rnumsplit.exec(value);
return matches?
Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):
value;
}
function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){
var i=extra===(isBorderBox?"border":"content")?
4:
name==="width"?1:0,
val=0;
for(;i<4;i+=2){
if(extra==="margin"){
val+=jQuery.css(elem,extra+cssExpand[i],true,styles);
}
if(isBorderBox){
if(extra==="content"){
val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);
}
if(extra!=="margin"){
val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);
}
}else{
val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);
if(extra!=="padding"){
val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);
}
}
}
return val;
}
function getWidthOrHeight(elem,name,extra){
var valueIsBorderBox=true,
val=name==="width"?elem.offsetWidth:elem.offsetHeight,
styles=getStyles(elem),
isBorderBox=support.boxSizing&&
jQuery.css(elem,"boxSizing",false,styles)==="border-box";
if(val<=0||val==null){
val=curCSS(elem,name,styles);
if(val<0||val==null){
val=elem.style[name];
}
if(rnumnonpx.test(val)){
return val;
}
valueIsBorderBox=isBorderBox&&
(support.boxSizingReliable()||val===elem.style[name]);
val=parseFloat(val)||0;
}
return(val+
augmentWidthOrHeight(
elem,
name,
extra||(isBorderBox?"border":"content"),
valueIsBorderBox,
styles
)
)+"px";
}
jQuery.extend({
cssHooks:{
opacity:{
get:function(elem,computed){
if(computed){
var ret=curCSS(elem,"opacity");
return ret===""?"1":ret;
}
}
}
},
cssNumber:{
"animationIterationCount":true,
"columnCount":true,
"fillOpacity":true,
"flexGrow":true,
"flexShrink":true,
"fontWeight":true,
"lineHeight":true,
"opacity":true,
"order":true,
"orphans":true,
"widows":true,
"zIndex":true,
"zoom":true
},
cssProps:{
"float":support.cssFloat?"cssFloat":"styleFloat"
},
style:function(elem,name,value,extra){
if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){
return;
}
var ret,type,hooks,
origName=jQuery.camelCase(name),
style=elem.style;
name=jQuery.cssProps[origName]||
(jQuery.cssProps[origName]=vendorPropName(origName)||origName);
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];
if(value!==undefined){
type=typeof value;
if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){
value=adjustCSS(elem,name,ret);
type="number";
}
if(value==null||value!==value){
return;
}
if(type==="number"){
value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");
}
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){
style[name]="inherit";
}
if(!hooks||!("set"in hooks)||
(value=hooks.set(elem,value,extra))!==undefined){
try{
style[name]=value;
}catch(e){}
}
}else{
if(hooks&&"get"in hooks&&
(ret=hooks.get(elem,false,extra))!==undefined){
return ret;
}
return style[name];
}
},
css:function(elem,name,extra,styles){
var num,val,hooks,
origName=jQuery.camelCase(name);
name=jQuery.cssProps[origName]||
(jQuery.cssProps[origName]=vendorPropName(origName)||origName);
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];
if(hooks&&"get"in hooks){
val=hooks.get(elem,true,extra);
}
if(val===undefined){
val=curCSS(elem,name,styles);
}
if(val==="normal"&&name in cssNormalTransform){
val=cssNormalTransform[name];
}
if(extra===""||extra){
num=parseFloat(val);
return extra===true||isFinite(num)?num||0:val;
}
return val;
}
});
jQuery.each(["height","width"],function(i,name){
jQuery.cssHooks[name]={
get:function(elem,computed,extra){
if(computed){
return rdisplayswap.test(jQuery.css(elem,"display"))&&
elem.offsetWidth===0?
swap(elem,cssShow,function(){
return getWidthOrHeight(elem,name,extra);
}):
getWidthOrHeight(elem,name,extra);
}
},
set:function(elem,value,extra){
var styles=extra&&getStyles(elem);
return setPositiveNumber(elem,value,extra?
augmentWidthOrHeight(
elem,
name,
extra,
support.boxSizing&&
jQuery.css(elem,"boxSizing",false,styles)==="border-box",
styles
):0
);
}
};
});
if(!support.opacity){
jQuery.cssHooks.opacity={
get:function(elem,computed){
return ropacity.test((computed&&elem.currentStyle?
elem.currentStyle.filter:
elem.style.filter)||"")?
(0.01*parseFloat(RegExp.$1))+"":
computed?"1":"";
},
set:function(elem,value){
var style=elem.style,
currentStyle=elem.currentStyle,
opacity=jQuery.isNumeric(value)?"alpha(opacity="+value*100+")":"",
filter=currentStyle&&currentStyle.filter||style.filter||"";
style.zoom=1;
if((value>=1||value==="")&&
jQuery.trim(filter.replace(ralpha,""))===""&&
style.removeAttribute){
style.removeAttribute("filter");
if(value===""||currentStyle&&!currentStyle.filter){
return;
}
}
style.filter=ralpha.test(filter)?
filter.replace(ralpha,opacity):
filter+" "+opacity;
}
};
}
jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,
function(elem,computed){
if(computed){
return swap(elem,{"display":"inline-block"},
curCSS,[elem,"marginRight"]);
}
}
);
jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,
function(elem,computed){
if(computed){
return(
parseFloat(curCSS(elem,"marginLeft"))||
(jQuery.contains(elem.ownerDocument,elem)?
elem.getBoundingClientRect().left-
swap(elem,{marginLeft:0},function(){
return elem.getBoundingClientRect().left;
}):
0
)
)+"px";
}
}
);
jQuery.each({
margin:"",
padding:"",
border:"Width"
},function(prefix,suffix){
jQuery.cssHooks[prefix+suffix]={
expand:function(value){
var i=0,
expanded={},
parts=typeof value==="string"?value.split(" "):[value];
for(;i<4;i++){
expanded[prefix+cssExpand[i]+suffix]=
parts[i]||parts[i-2]||parts[0];
}
return expanded;
}
};
if(!rmargin.test(prefix)){
jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;
}
});
jQuery.fn.extend({
css:function(name,value){
return access(this,function(elem,name,value){
var styles,len,
map={},
i=0;
if(jQuery.isArray(name)){
styles=getStyles(elem);
len=name.length;
for(;i<len;i++){
map[name[i]]=jQuery.css(elem,name[i],false,styles);
}
return map;
}
return value!==undefined?
jQuery.style(elem,name,value):
jQuery.css(elem,name);
},name,value,arguments.length>1);
},
show:function(){
return showHide(this,true);
},
hide:function(){
return showHide(this);
},
toggle:function(state){
if(typeof state==="boolean"){
return state?this.show():this.hide();
}
return this.each(function(){
if(isHidden(this)){
jQuery(this).show();
}else{
jQuery(this).hide();
}
});
}
});
function Tween(elem,options,prop,end,easing){
return new Tween.prototype.init(elem,options,prop,end,easing);
}
jQuery.Tween=Tween;
Tween.prototype={
constructor:Tween,
init:function(elem,options,prop,end,easing,unit){
this.elem=elem;
this.prop=prop;
this.easing=easing||jQuery.easing._default;
this.options=options;
this.start=this.now=this.cur();
this.end=end;
this.unit=unit||(jQuery.cssNumber[prop]?"":"px");
},
cur:function(){
var hooks=Tween.propHooks[this.prop];
return hooks&&hooks.get?
hooks.get(this):
Tween.propHooks._default.get(this);
},
run:function(percent){
var eased,
hooks=Tween.propHooks[this.prop];
if(this.options.duration){
this.pos=eased=jQuery.easing[this.easing](
percent,this.options.duration*percent,0,1,this.options.duration
);
}else{
this.pos=eased=percent;
}
this.now=(this.end-this.start)*eased+this.start;
if(this.options.step){
this.options.step.call(this.elem,this.now,this);
}
if(hooks&&hooks.set){
hooks.set(this);
}else{
Tween.propHooks._default.set(this);
}
return this;
}
};
Tween.prototype.init.prototype=Tween.prototype;
Tween.propHooks={
_default:{
get:function(tween){
var result;
if(tween.elem.nodeType!==1||
tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){
return tween.elem[tween.prop];
}
result=jQuery.css(tween.elem,tween.prop,"");
return!result||result==="auto"?0:result;
},
set:function(tween){
if(jQuery.fx.step[tween.prop]){
jQuery.fx.step[tween.prop](tween);
}else if(tween.elem.nodeType===1&&
(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||
jQuery.cssHooks[tween.prop])){
jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);
}else{
tween.elem[tween.prop]=tween.now;
}
}
}
};
Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={
set:function(tween){
if(tween.elem.nodeType&&tween.elem.parentNode){
tween.elem[tween.prop]=tween.now;
}
}
};
jQuery.easing={
linear:function(p){
return p;
},
swing:function(p){
return 0.5-Math.cos(p*Math.PI)/2;
},
_default:"swing"
};
jQuery.fx=Tween.prototype.init;
jQuery.fx.step={};
var
fxNow,timerId,
rfxtypes=/^(?:toggle|show|hide)$/,
rrun=/queueHooks$/;
function createFxNow(){
window.setTimeout(function(){
fxNow=undefined;
});
return(fxNow=jQuery.now());
}
function genFx(type,includeWidth){
var which,
attrs={height:type},
i=0;
includeWidth=includeWidth?1:0;
for(;i<4;i+=2-includeWidth){
which=cssExpand[i];
attrs["margin"+which]=attrs["padding"+which]=type;
}
if(includeWidth){
attrs.opacity=attrs.width=type;
}
return attrs;
}
function createTween(value,prop,animation){
var tween,
collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),
index=0,
length=collection.length;
for(;index<length;index++){
if((tween=collection[index].call(animation,prop,value))){
return tween;
}
}
}
function defaultPrefilter(elem,props,opts){
var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,
anim=this,
orig={},
style=elem.style,
hidden=elem.nodeType&&isHidden(elem),
dataShow=jQuery._data(elem,"fxshow");
if(!opts.queue){
hooks=jQuery._queueHooks(elem,"fx");
if(hooks.unqueued==null){
hooks.unqueued=0;
oldfire=hooks.empty.fire;
hooks.empty.fire=function(){
if(!hooks.unqueued){
oldfire();
}
};
}
hooks.unqueued++;
anim.always(function(){
anim.always(function(){
hooks.unqueued--;
if(!jQuery.queue(elem,"fx").length){
hooks.empty.fire();
}
});
});
}
if(elem.nodeType===1&&("height"in props||"width"in props)){
opts.overflow=[style.overflow,style.overflowX,style.overflowY];
display=jQuery.css(elem,"display");
checkDisplay=display==="none"?
jQuery._data(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;
if(checkDisplay==="inline"&&jQuery.css(elem,"float")==="none"){
if(!support.inlineBlockNeedsLayout||defaultDisplay(elem.nodeName)==="inline"){
style.display="inline-block";
}else{
style.zoom=1;
}
}
}
if(opts.overflow){
style.overflow="hidden";
if(!support.shrinkWrapBlocks()){
anim.always(function(){
style.overflow=opts.overflow[0];
style.overflowX=opts.overflow[1];
style.overflowY=opts.overflow[2];
});
}
}
for(prop in props){
value=props[prop];
if(rfxtypes.exec(value)){
delete props[prop];
toggle=toggle||value==="toggle";
if(value===(hidden?"hide":"show")){
if(value==="show"&&dataShow&&dataShow[prop]!==undefined){
hidden=true;
}else{
continue;
}
}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);
}else{
display=undefined;
}
}
if(!jQuery.isEmptyObject(orig)){
if(dataShow){
if("hidden"in dataShow){
hidden=dataShow.hidden;
}
}else{
dataShow=jQuery._data(elem,"fxshow",{});
}
if(toggle){
dataShow.hidden=!hidden;
}
if(hidden){
jQuery(elem).show();
}else{
anim.done(function(){
jQuery(elem).hide();
});
}
anim.done(function(){
var prop;
jQuery._removeData(elem,"fxshow");
for(prop in orig){
jQuery.style(elem,prop,orig[prop]);
}
});
for(prop in orig){
tween=createTween(hidden?dataShow[prop]:0,prop,anim);
if(!(prop in dataShow)){
dataShow[prop]=tween.start;
if(hidden){
tween.end=tween.start;
tween.start=prop==="width"||prop==="height"?1:0;
}
}
}
}else if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){
style.display=display;
}
}
function propFilter(props,specialEasing){
var index,name,easing,value,hooks;
for(index in props){
name=jQuery.camelCase(index);
easing=specialEasing[name];
value=props[index];
if(jQuery.isArray(value)){
easing=value[1];
value=props[index]=value[0];
}
if(index!==name){
props[name]=value;
delete props[index];
}
hooks=jQuery.cssHooks[name];
if(hooks&&"expand"in hooks){
value=hooks.expand(value);
delete props[name];
for(index in value){
if(!(index in props)){
props[index]=value[index];
specialEasing[index]=easing;
}
}
}else{
specialEasing[name]=easing;
}
}
}
function Animation(elem,properties,options){
var result,
stopped,
index=0,
length=Animation.prefilters.length,
deferred=jQuery.Deferred().always(function(){
delete tick.elem;
}),
tick=function(){
if(stopped){
return false;
}
var currentTime=fxNow||createFxNow(),
remaining=Math.max(0,animation.startTime+animation.duration-currentTime),
temp=remaining/animation.duration||0,
percent=1-temp,
index=0,
length=animation.tweens.length;
for(;index<length;index++){
animation.tweens[index].run(percent);
}
deferred.notifyWith(elem,[animation,percent,remaining]);
if(percent<1&&length){
return remaining;
}else{
deferred.resolveWith(elem,[animation]);
return false;
}
},
animation=deferred.promise({
elem:elem,
props:jQuery.extend({},properties),
opts:jQuery.extend(true,{
specialEasing:{},
easing:jQuery.easing._default
},options),
originalProperties:properties,
originalOptions:options,
startTime:fxNow||createFxNow(),
duration:options.duration,
tweens:[],
createTween:function(prop,end){
var tween=jQuery.Tween(elem,animation.opts,prop,end,
animation.opts.specialEasing[prop]||animation.opts.easing);
animation.tweens.push(tween);
return tween;
},
stop:function(gotoEnd){
var index=0,
length=gotoEnd?animation.tweens.length:0;
if(stopped){
return this;
}
stopped=true;
for(;index<length;index++){
animation.tweens[index].run(1);
}
if(gotoEnd){
deferred.notifyWith(elem,[animation,1,0]);
deferred.resolveWith(elem,[animation,gotoEnd]);
}else{
deferred.rejectWith(elem,[animation,gotoEnd]);
}
return this;
}
}),
props=animation.props;
propFilter(props,animation.opts.specialEasing);
for(;index<length;index++){
result=Animation.prefilters[index].call(animation,elem,props,animation.opts);
if(result){
if(jQuery.isFunction(result.stop)){
jQuery._queueHooks(animation.elem,animation.opts.queue).stop=
jQuery.proxy(result.stop,result);
}
return result;
}
}
jQuery.map(props,createTween,animation);
if(jQuery.isFunction(animation.opts.start)){
animation.opts.start.call(elem,animation);
}
jQuery.fx.timer(
jQuery.extend(tick,{
elem:elem,
anim:animation,
queue:animation.opts.queue
})
);
return animation.progress(animation.opts.progress)
.done(animation.opts.done,animation.opts.complete)
.fail(animation.opts.fail)
.always(animation.opts.always);
}
jQuery.Animation=jQuery.extend(Animation,{
tweeners:{
"*":[function(prop,value){
var tween=this.createTween(prop,value);
adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);
return tween;
}]
},
tweener:function(props,callback){
if(jQuery.isFunction(props)){
callback=props;
props=["*"];
}else{
props=props.match(rnotwhite);
}
var prop,
index=0,
length=props.length;
for(;index<length;index++){
prop=props[index];
Animation.tweeners[prop]=Animation.tweeners[prop]||[];
Animation.tweeners[prop].unshift(callback);
}
},
prefilters:[defaultPrefilter],
prefilter:function(callback,prepend){
if(prepend){
Animation.prefilters.unshift(callback);
}else{
Animation.prefilters.push(callback);
}
}
});
jQuery.speed=function(speed,easing,fn){
var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{
complete:fn||!fn&&easing||
jQuery.isFunction(speed)&&speed,
duration:speed,
easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing
};
opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:
opt.duration in jQuery.fx.speeds?
jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;
if(opt.queue==null||opt.queue===true){
opt.queue="fx";
}
opt.old=opt.complete;
opt.complete=function(){
if(jQuery.isFunction(opt.old)){
opt.old.call(this);
}
if(opt.queue){
jQuery.dequeue(this,opt.queue);
}
};
return opt;
};
jQuery.fn.extend({
fadeTo:function(speed,to,easing,callback){
return this.filter(isHidden).css("opacity",0).show()
.end().animate({opacity:to},speed,easing,callback);
},
animate:function(prop,speed,easing,callback){
var empty=jQuery.isEmptyObject(prop),
optall=jQuery.speed(speed,easing,callback),
doAnimation=function(){
var anim=Animation(this,jQuery.extend({},prop),optall);
if(empty||jQuery._data(this,"finish")){
anim.stop(true);
}
};
doAnimation.finish=doAnimation;
return empty||optall.queue===false?
this.each(doAnimation):
this.queue(optall.queue,doAnimation);
},
stop:function(type,clearQueue,gotoEnd){
var stopQueue=function(hooks){
var stop=hooks.stop;
delete hooks.stop;
stop(gotoEnd);
};
if(typeof type!=="string"){
gotoEnd=clearQueue;
clearQueue=type;
type=undefined;
}
if(clearQueue&&type!==false){
this.queue(type||"fx",[]);
}
return this.each(function(){
var dequeue=true,
index=type!=null&&type+"queueHooks",
timers=jQuery.timers,
data=jQuery._data(this);
if(index){
if(data[index]&&data[index].stop){
stopQueue(data[index]);
}
}else{
for(index in data){
if(data[index]&&data[index].stop&&rrun.test(index)){
stopQueue(data[index]);
}
}
}
for(index=timers.length;index--;){
if(timers[index].elem===this&&
(type==null||timers[index].queue===type)){
timers[index].anim.stop(gotoEnd);
dequeue=false;
timers.splice(index,1);
}
}
if(dequeue||!gotoEnd){
jQuery.dequeue(this,type);
}
});
},
finish:function(type){
if(type!==false){
type=type||"fx";
}
return this.each(function(){
var index,
data=jQuery._data(this),
queue=data[type+"queue"],
hooks=data[type+"queueHooks"],
timers=jQuery.timers,
length=queue?queue.length:0;
data.finish=true;
jQuery.queue(this,type,[]);
if(hooks&&hooks.stop){
hooks.stop.call(this,true);
}
for(index=timers.length;index--;){
if(timers[index].elem===this&&timers[index].queue===type){
timers[index].anim.stop(true);
timers.splice(index,1);
}
}
for(index=0;index<length;index++){
if(queue[index]&&queue[index].finish){
queue[index].finish.call(this);
}
}
delete data.finish;
});
}
});
jQuery.each(["toggle","show","hide"],function(i,name){
var cssFn=jQuery.fn[name];
jQuery.fn[name]=function(speed,easing,callback){
return speed==null||typeof speed==="boolean"?
cssFn.apply(this,arguments):
this.animate(genFx(name,true),speed,easing,callback);
};
});
jQuery.each({
slideDown:genFx("show"),
slideUp:genFx("hide"),
slideToggle:genFx("toggle"),
fadeIn:{opacity:"show"},
fadeOut:{opacity:"hide"},
fadeToggle:{opacity:"toggle"}
},function(name,props){
jQuery.fn[name]=function(speed,easing,callback){
return this.animate(props,speed,easing,callback);
};
});
jQuery.timers=[];
jQuery.fx.tick=function(){
var timer,
timers=jQuery.timers,
i=0;
fxNow=jQuery.now();
for(;i<timers.length;i++){
timer=timers[i];
if(!timer()&&timers[i]===timer){
timers.splice(i--,1);
}
}
if(!timers.length){
jQuery.fx.stop();
}
fxNow=undefined;
};
jQuery.fx.timer=function(timer){
jQuery.timers.push(timer);
if(timer()){
jQuery.fx.start();
}else{
jQuery.timers.pop();
}
};
jQuery.fx.interval=13;
jQuery.fx.start=function(){
if(!timerId){
timerId=window.setInterval(jQuery.fx.tick,jQuery.fx.interval);
}
};
jQuery.fx.stop=function(){
window.clearInterval(timerId);
timerId=null;
};
jQuery.fx.speeds={
slow:600,
fast:200,
_default:400
};
jQuery.fn.delay=function(time,type){
time=jQuery.fx?jQuery.fx.speeds[time]||time:time;
type=type||"fx";
return this.queue(type,function(next,hooks){
var timeout=window.setTimeout(next,time);
hooks.stop=function(){
window.clearTimeout(timeout);
};
});
};
(function(){
var a,
input=document.createElement("input"),
div=document.createElement("div"),
select=document.createElement("select"),
opt=select.appendChild(document.createElement("option"));
div=document.createElement("div");
div.setAttribute("className","t");
div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
a=div.getElementsByTagName("a")[0];
input.setAttribute("type","checkbox");
div.appendChild(input);
a=div.getElementsByTagName("a")[0];
a.style.cssText="top:1px";
support.getSetAttribute=div.className!=="t";
support.style=/top/.test(a.getAttribute("style"));
support.hrefNormalized=a.getAttribute("href")==="/a";
support.checkOn=!!input.value;
support.optSelected=opt.selected;
support.enctype=!!document.createElement("form").enctype;
select.disabled=true;
support.optDisabled=!opt.disabled;
input=document.createElement("input");
input.setAttribute("value","");
support.input=input.getAttribute("value")==="";
input.value="t";
input.setAttribute("type","radio");
support.radioValue=input.value==="t";
})();
var rreturn=/\r/g,
rspaces=/[\x20\t\r\n\f]+/g;
jQuery.fn.extend({
val:function(value){
var hooks,ret,isFunction,
elem=this[0];
if(!arguments.length){
if(elem){
hooks=jQuery.valHooks[elem.type]||
jQuery.valHooks[elem.nodeName.toLowerCase()];
if(
hooks&&
"get"in hooks&&
(ret=hooks.get(elem,"value"))!==undefined
){
return ret;
}
ret=elem.value;
return typeof ret==="string"?
ret.replace(rreturn,""):
ret==null?"":ret;
}
return;
}
isFunction=jQuery.isFunction(value);
return this.each(function(i){
var val;
if(this.nodeType!==1){
return;
}
if(isFunction){
val=value.call(this,i,jQuery(this).val());
}else{
val=value;
}
if(val==null){
val="";
}else if(typeof val==="number"){
val+="";
}else if(jQuery.isArray(val)){
val=jQuery.map(val,function(value){
return value==null?"":value+"";
});
}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];
if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){
this.value=val;
}
});
}
});
jQuery.extend({
valHooks:{
option:{
get:function(elem){
var val=jQuery.find.attr(elem,"value");
return val!=null?
val:
jQuery.trim(jQuery.text(elem)).replace(rspaces," ");
}
},
select:{
get:function(elem){
var value,option,
options=elem.options,
index=elem.selectedIndex,
one=elem.type==="select-one"||index<0,
values=one?null:[],
max=one?index+1:options.length,
i=index<0?
max:
one?index:0;
for(;i<max;i++){
option=options[i];
if((option.selected||i===index)&&
(support.optDisabled?
!option.disabled:
option.getAttribute("disabled")===null)&&
(!option.parentNode.disabled||
!jQuery.nodeName(option.parentNode,"optgroup"))){
value=jQuery(option).val();
if(one){
return value;
}
values.push(value);
}
}
return values;
},
set:function(elem,value){
var optionSet,option,
options=elem.options,
values=jQuery.makeArray(value),
i=options.length;
while(i--){
option=options[i];
if(jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){
try{
option.selected=optionSet=true;
}catch(_){
option.scrollHeight;
}
}else{
option.selected=false;
}
}
if(!optionSet){
elem.selectedIndex=-1;
}
return options;
}
}
}
});
jQuery.each(["radio","checkbox"],function(){
jQuery.valHooks[this]={
set:function(elem,value){
if(jQuery.isArray(value)){
return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1);
}
}
};
if(!support.checkOn){
jQuery.valHooks[this].get=function(elem){
return elem.getAttribute("value")===null?"on":elem.value;
};
}
});
var nodeHook,boolHook,
attrHandle=jQuery.expr.attrHandle,
ruseDefault=/^(?:checked|selected)$/i,
getSetAttribute=support.getSetAttribute,
getSetInput=support.input;
jQuery.fn.extend({
attr:function(name,value){
return access(this,jQuery.attr,name,value,arguments.length>1);
},
removeAttr:function(name){
return this.each(function(){
jQuery.removeAttr(this,name);
});
}
});
jQuery.extend({
attr:function(elem,name,value){
var ret,hooks,
nType=elem.nodeType;
if(nType===3||nType===8||nType===2){
return;
}
if(typeof elem.getAttribute==="undefined"){
return jQuery.prop(elem,name,value);
}
if(nType!==1||!jQuery.isXMLDoc(elem)){
name=name.toLowerCase();
hooks=jQuery.attrHooks[name]||
(jQuery.expr.match.bool.test(name)?boolHook:nodeHook);
}
if(value!==undefined){
if(value===null){
jQuery.removeAttr(elem,name);
return;
}
if(hooks&&"set"in hooks&&
(ret=hooks.set(elem,value,name))!==undefined){
return ret;
}
elem.setAttribute(name,value+"");
return value;
}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){
return ret;
}
ret=jQuery.find.attr(elem,name);
return ret==null?undefined:ret;
},
attrHooks:{
type:{
set:function(elem,value){
if(!support.radioValue&&value==="radio"&&
jQuery.nodeName(elem,"input")){
var val=elem.value;
elem.setAttribute("type",value);
if(val){
elem.value=val;
}
return value;
}
}
}
},
removeAttr:function(elem,value){
var name,propName,
i=0,
attrNames=value&&value.match(rnotwhite);
if(attrNames&&elem.nodeType===1){
while((name=attrNames[i++])){
propName=jQuery.propFix[name]||name;
if(jQuery.expr.match.bool.test(name)){
if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){
elem[propName]=false;
}else{
elem[jQuery.camelCase("default-"+name)]=
elem[propName]=false;
}
}else{
jQuery.attr(elem,name,"");
}
elem.removeAttribute(getSetAttribute?name:propName);
}
}
}
});
boolHook={
set:function(elem,value,name){
if(value===false){
jQuery.removeAttr(elem,name);
}else if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){
elem.setAttribute(!getSetAttribute&&jQuery.propFix[name]||name,name);
}else{
elem[jQuery.camelCase("default-"+name)]=elem[name]=true;
}
return name;
}
};
jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){
var getter=attrHandle[name]||jQuery.find.attr;
if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){
attrHandle[name]=function(elem,name,isXML){
var ret,handle;
if(!isXML){
handle=attrHandle[name];
attrHandle[name]=ret;
ret=getter(elem,name,isXML)!=null?
name.toLowerCase():
null;
attrHandle[name]=handle;
}
return ret;
};
}else{
attrHandle[name]=function(elem,name,isXML){
if(!isXML){
return elem[jQuery.camelCase("default-"+name)]?
name.toLowerCase():
null;
}
};
}
});
if(!getSetInput||!getSetAttribute){
jQuery.attrHooks.value={
set:function(elem,value,name){
if(jQuery.nodeName(elem,"input")){
elem.defaultValue=value;
}else{
return nodeHook&&nodeHook.set(elem,value,name);
}
}
};
}
if(!getSetAttribute){
nodeHook={
set:function(elem,value,name){
var ret=elem.getAttributeNode(name);
if(!ret){
elem.setAttributeNode(
(ret=elem.ownerDocument.createAttribute(name))
);
}
ret.value=value+="";
if(name==="value"||value===elem.getAttribute(name)){
return value;
}
}
};
attrHandle.id=attrHandle.name=attrHandle.coords=
function(elem,name,isXML){
var ret;
if(!isXML){
return(ret=elem.getAttributeNode(name))&&ret.value!==""?
ret.value:
null;
}
};
jQuery.valHooks.button={
get:function(elem,name){
var ret=elem.getAttributeNode(name);
if(ret&&ret.specified){
return ret.value;
}
},
set:nodeHook.set
};
jQuery.attrHooks.contenteditable={
set:function(elem,value,name){
nodeHook.set(elem,value===""?false:value,name);
}
};
jQuery.each(["width","height"],function(i,name){
jQuery.attrHooks[name]={
set:function(elem,value){
if(value===""){
elem.setAttribute(name,"auto");
return value;
}
}
};
});
}
if(!support.style){
jQuery.attrHooks.style={
get:function(elem){
return elem.style.cssText||undefined;
},
set:function(elem,value){
return(elem.style.cssText=value+"");
}
};
}
var rfocusable=/^(?:input|select|textarea|button|object)$/i,
rclickable=/^(?:a|area)$/i;
jQuery.fn.extend({
prop:function(name,value){
return access(this,jQuery.prop,name,value,arguments.length>1);
},
removeProp:function(name){
name=jQuery.propFix[name]||name;
return this.each(function(){
try{
this[name]=undefined;
delete this[name];
}catch(e){}
});
}
});
jQuery.extend({
prop:function(elem,name,value){
var ret,hooks,
nType=elem.nodeType;
if(nType===3||nType===8||nType===2){
return;
}
if(nType!==1||!jQuery.isXMLDoc(elem)){
name=jQuery.propFix[name]||name;
hooks=jQuery.propHooks[name];
}
if(value!==undefined){
if(hooks&&"set"in hooks&&
(ret=hooks.set(elem,value,name))!==undefined){
return ret;
}
return(elem[name]=value);
}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){
return ret;
}
return elem[name];
},
propHooks:{
tabIndex:{
get:function(elem){
var tabindex=jQuery.find.attr(elem,"tabindex");
return tabindex?
parseInt(tabindex,10):
rfocusable.test(elem.nodeName)||
rclickable.test(elem.nodeName)&&elem.href?
0:
-1;
}
}
},
propFix:{
"for":"htmlFor",
"class":"className"
}
});
if(!support.hrefNormalized){
jQuery.each(["href","src"],function(i,name){
jQuery.propHooks[name]={
get:function(elem){
return elem.getAttribute(name,4);
}
};
});
}
if(!support.optSelected){
jQuery.propHooks.selected={
get:function(elem){
var parent=elem.parentNode;
if(parent){
parent.selectedIndex;
if(parent.parentNode){
parent.parentNode.selectedIndex;
}
}
return null;
},
set:function(elem){
var parent=elem.parentNode;
if(parent){
parent.selectedIndex;
if(parent.parentNode){
parent.parentNode.selectedIndex;
}
}
}
};
}
jQuery.each([
"tabIndex",
"readOnly",
"maxLength",
"cellSpacing",
"cellPadding",
"rowSpan",
"colSpan",
"useMap",
"frameBorder",
"contentEditable"
],function(){
jQuery.propFix[this.toLowerCase()]=this;
});
if(!support.enctype){
jQuery.propFix.enctype="encoding";
}
var rclass=/[\t\r\n\f]/g;
function getClass(elem){
return jQuery.attr(elem,"class")||"";
}
jQuery.fn.extend({
addClass:function(value){
var classes,elem,cur,curValue,clazz,j,finalValue,
i=0;
if(jQuery.isFunction(value)){
return this.each(function(j){
jQuery(this).addClass(value.call(this,j,getClass(this)));
});
}
if(typeof value==="string"&&value){
classes=value.match(rnotwhite)||[];
while((elem=this[i++])){
curValue=getClass(elem);
cur=elem.nodeType===1&&
(" "+curValue+" ").replace(rclass," ");
if(cur){
j=0;
while((clazz=classes[j++])){
if(cur.indexOf(" "+clazz+" ")<0){
cur+=clazz+" ";
}
}
finalValue=jQuery.trim(cur);
if(curValue!==finalValue){
jQuery.attr(elem,"class",finalValue);
}
}
}
}
return this;
},
removeClass:function(value){
var classes,elem,cur,curValue,clazz,j,finalValue,
i=0;
if(jQuery.isFunction(value)){
return this.each(function(j){
jQuery(this).removeClass(value.call(this,j,getClass(this)));
});
}
if(!arguments.length){
return this.attr("class","");
}
if(typeof value==="string"&&value){
classes=value.match(rnotwhite)||[];
while((elem=this[i++])){
curValue=getClass(elem);
cur=elem.nodeType===1&&
(" "+curValue+" ").replace(rclass," ");
if(cur){
j=0;
while((clazz=classes[j++])){
while(cur.indexOf(" "+clazz+" ")>-1){
cur=cur.replace(" "+clazz+" "," ");
}
}
finalValue=jQuery.trim(cur);
if(curValue!==finalValue){
jQuery.attr(elem,"class",finalValue);
}
}
}
}
return this;
},
toggleClass:function(value,stateVal){
var type=typeof value;
if(typeof stateVal==="boolean"&&type==="string"){
return stateVal?this.addClass(value):this.removeClass(value);
}
if(jQuery.isFunction(value)){
return this.each(function(i){
jQuery(this).toggleClass(
value.call(this,i,getClass(this),stateVal),
stateVal
);
});
}
return this.each(function(){
var className,i,self,classNames;
if(type==="string"){
i=0;
self=jQuery(this);
classNames=value.match(rnotwhite)||[];
while((className=classNames[i++])){
if(self.hasClass(className)){
self.removeClass(className);
}else{
self.addClass(className);
}
}
}else if(value===undefined||type==="boolean"){
className=getClass(this);
if(className){
jQuery._data(this,"__className__",className);
}
jQuery.attr(this,"class",
className||value===false?
"":
jQuery._data(this,"__className__")||""
);
}
});
},
hasClass:function(selector){
var className,elem,
i=0;
className=" "+selector+" ";
while((elem=this[i++])){
if(elem.nodeType===1&&
(" "+getClass(elem)+" ").replace(rclass," ")
.indexOf(className)>-1
){
return true;
}
}
return false;
}
});
jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+
"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+
"change select submit keydown keypress keyup error contextmenu").split(" "),
function(i,name){
jQuery.fn[name]=function(data,fn){
return arguments.length>0?
this.on(name,null,data,fn):
this.trigger(name);
};
});
jQuery.fn.extend({
hover:function(fnOver,fnOut){
return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);
}
});
var location=window.location;
var nonce=jQuery.now();
var rquery=(/\?/);
var rvalidtokens=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
jQuery.parseJSON=function(data){
if(window.JSON&&window.JSON.parse){
return window.JSON.parse(data+"");
}
var requireNonComma,
depth=null,
str=jQuery.trim(data+"");
return str&&!jQuery.trim(str.replace(rvalidtokens,function(token,comma,open,close){
if(requireNonComma&&comma){
depth=0;
}
if(depth===0){
return token;
}
requireNonComma=open||comma;
depth+=!close-!open;
return"";
}))?
(Function("return "+str))():
jQuery.error("Invalid JSON: "+data);
};
jQuery.parseXML=function(data){
var xml,tmp;
if(!data||typeof data!=="string"){
return null;
}
try{
if(window.DOMParser){
tmp=new window.DOMParser();
xml=tmp.parseFromString(data,"text/xml");
}else{
xml=new window.ActiveXObject("Microsoft.XMLDOM");
xml.async="false";
xml.loadXML(data);
}
}catch(e){
xml=undefined;
}
if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){
jQuery.error("Invalid XML: "+data);
}
return xml;
};
var
rhash=/#.*$/,
rts=/([?&])_=[^&]*/,
rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
rnoContent=/^(?:GET|HEAD)$/,
rprotocol=/^\/\//,
rurl=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
prefilters={},
transports={},
allTypes="*/".concat("*"),
ajaxLocation=location.href,
ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];
function addToPrefiltersOrTransports(structure){
return function(dataTypeExpression,func){
if(typeof dataTypeExpression!=="string"){
func=dataTypeExpression;
dataTypeExpression="*";
}
var dataType,
i=0,
dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];
if(jQuery.isFunction(func)){
while((dataType=dataTypes[i++])){
if(dataType.charAt(0)==="+"){
dataType=dataType.slice(1)||"*";
(structure[dataType]=structure[dataType]||[]).unshift(func);
}else{
(structure[dataType]=structure[dataType]||[]).push(func);
}
}
}
};
}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){
var inspected={},
seekingTransport=(structure===transports);
function inspect(dataType){
var selected;
inspected[dataType]=true;
jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){
var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);
if(typeof dataTypeOrTransport==="string"&&
!seekingTransport&&!inspected[dataTypeOrTransport]){
options.dataTypes.unshift(dataTypeOrTransport);
inspect(dataTypeOrTransport);
return false;
}else if(seekingTransport){
return!(selected=dataTypeOrTransport);
}
});
return selected;
}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");
}
function ajaxExtend(target,src){
var deep,key,
flatOptions=jQuery.ajaxSettings.flatOptions||{};
for(key in src){
if(src[key]!==undefined){
(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];
}
}
if(deep){
jQuery.extend(true,target,deep);
}
return target;
}
function ajaxHandleResponses(s,jqXHR,responses){
var firstDataType,ct,finalDataType,type,
contents=s.contents,
dataTypes=s.dataTypes;
while(dataTypes[0]==="*"){
dataTypes.shift();
if(ct===undefined){
ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");
}
}
if(ct){
for(type in contents){
if(contents[type]&&contents[type].test(ct)){
dataTypes.unshift(type);
break;
}
}
}
if(dataTypes[0]in responses){
finalDataType=dataTypes[0];
}else{
for(type in responses){
if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){
finalDataType=type;
break;
}
if(!firstDataType){
firstDataType=type;
}
}
finalDataType=finalDataType||firstDataType;
}
if(finalDataType){
if(finalDataType!==dataTypes[0]){
dataTypes.unshift(finalDataType);
}
return responses[finalDataType];
}
}
function ajaxConvert(s,response,jqXHR,isSuccess){
var conv2,current,conv,tmp,prev,
converters={},
dataTypes=s.dataTypes.slice();
if(dataTypes[1]){
for(conv in s.converters){
converters[conv.toLowerCase()]=s.converters[conv];
}
}
current=dataTypes.shift();
while(current){
if(s.responseFields[current]){
jqXHR[s.responseFields[current]]=response;
}
if(!prev&&isSuccess&&s.dataFilter){
response=s.dataFilter(response,s.dataType);
}
prev=current;
current=dataTypes.shift();
if(current){
if(current==="*"){
current=prev;
}else if(prev!=="*"&&prev!==current){
conv=converters[prev+" "+current]||converters["* "+current];
if(!conv){
for(conv2 in converters){
tmp=conv2.split(" ");
if(tmp[1]===current){
conv=converters[prev+" "+tmp[0]]||
converters["* "+tmp[0]];
if(conv){
if(conv===true){
conv=converters[conv2];
}else if(converters[conv2]!==true){
current=tmp[0];
dataTypes.unshift(tmp[1]);
}
break;
}
}
}
}
if(conv!==true){
if(conv&&s["throws"]){
response=conv(response);
}else{
try{
response=conv(response);
}catch(e){
return{
state:"parsererror",
error:conv?e:"No conversion from "+prev+" to "+current
};
}
}
}
}
}
}
return{state:"success",data:response};
}
jQuery.extend({
active:0,
lastModified:{},
etag:{},
ajaxSettings:{
url:ajaxLocation,
type:"GET",
isLocal:rlocalProtocol.test(ajaxLocParts[1]),
global:true,
processData:true,
async:true,
contentType:"application/x-www-form-urlencoded; charset=UTF-8",
accepts:{
"*":allTypes,
text:"text/plain",
html:"text/html",
xml:"application/xml, text/xml",
json:"application/json, text/javascript"
},
contents:{
xml:/\bxml\b/,
html:/\bhtml/,
json:/\bjson\b/
},
responseFields:{
xml:"responseXML",
text:"responseText",
json:"responseJSON"
},
converters:{
"* text":String,
"text html":true,
"text json":jQuery.parseJSON,
"text xml":jQuery.parseXML
},
flatOptions:{
url:true,
context:true
}
},
ajaxSetup:function(target,settings){
return settings?
ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):
ajaxExtend(jQuery.ajaxSettings,target);
},
ajaxPrefilter:addToPrefiltersOrTransports(prefilters),
ajaxTransport:addToPrefiltersOrTransports(transports),
ajax:function(url,options){
if(typeof url==="object"){
options=url;
url=undefined;
}
options=options||{};
var
parts,
i,
cacheURL,
responseHeadersString,
timeoutTimer,
fireGlobals,
transport,
responseHeaders,
s=jQuery.ajaxSetup({},options),
callbackContext=s.context||s,
globalEventContext=s.context&&
(callbackContext.nodeType||callbackContext.jquery)?
jQuery(callbackContext):
jQuery.event,
deferred=jQuery.Deferred(),
completeDeferred=jQuery.Callbacks("once memory"),
statusCode=s.statusCode||{},
requestHeaders={},
requestHeadersNames={},
state=0,
strAbort="canceled",
jqXHR={
readyState:0,
getResponseHeader:function(key){
var match;
if(state===2){
if(!responseHeaders){
responseHeaders={};
while((match=rheaders.exec(responseHeadersString))){
responseHeaders[match[1].toLowerCase()]=match[2];
}
}
match=responseHeaders[key.toLowerCase()];
}
return match==null?null:match;
},
getAllResponseHeaders:function(){
return state===2?responseHeadersString:null;
},
setRequestHeader:function(name,value){
var lname=name.toLowerCase();
if(!state){
name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;
requestHeaders[name]=value;
}
return this;
},
overrideMimeType:function(type){
if(!state){
s.mimeType=type;
}
return this;
},
statusCode:function(map){
var code;
if(map){
if(state<2){
for(code in map){
statusCode[code]=[statusCode[code],map[code]];
}
}else{
jqXHR.always(map[jqXHR.status]);
}
}
return this;
},
abort:function(statusText){
var finalText=statusText||strAbort;
if(transport){
transport.abort(finalText);
}
done(0,finalText);
return this;
}
};
deferred.promise(jqXHR).complete=completeDeferred.add;
jqXHR.success=jqXHR.done;
jqXHR.error=jqXHR.fail;
s.url=((url||s.url||ajaxLocation)+"")
.replace(rhash,"")
.replace(rprotocol,ajaxLocParts[1]+"//");
s.type=options.method||options.type||s.method||s.type;
s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""];
if(s.crossDomain==null){
parts=rurl.exec(s.url.toLowerCase());
s.crossDomain=!!(parts&&
(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||
(parts[3]||(parts[1]==="http:"?"80":"443"))!==
(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443")))
);
}
if(s.data&&s.processData&&typeof s.data!=="string"){
s.data=jQuery.param(s.data,s.traditional);
}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);
if(state===2){
return jqXHR;
}
fireGlobals=jQuery.event&&s.global;
if(fireGlobals&&jQuery.active++===0){
jQuery.event.trigger("ajaxStart");
}
s.type=s.type.toUpperCase();
s.hasContent=!rnoContent.test(s.type);
cacheURL=s.url;
if(!s.hasContent){
if(s.data){
cacheURL=(s.url+=(rquery.test(cacheURL)?"&":"?")+s.data);
delete s.data;
}
if(s.cache===false){
s.url=rts.test(cacheURL)?
cacheURL.replace(rts,"$1_="+nonce++):
cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++;
}
}
if(s.ifModified){
if(jQuery.lastModified[cacheURL]){
jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);
}
if(jQuery.etag[cacheURL]){
jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);
}
}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){
jqXHR.setRequestHeader("Content-Type",s.contentType);
}
jqXHR.setRequestHeader(
"Accept",
s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?
s.accepts[s.dataTypes[0]]+
(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):
s.accepts["*"]
);
for(i in s.headers){
jqXHR.setRequestHeader(i,s.headers[i]);
}
if(s.beforeSend&&
(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){
return jqXHR.abort();
}
strAbort="abort";
for(i in{success:1,error:1,complete:1}){
jqXHR[i](s[i]);
}
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);
if(!transport){
done(-1,"No Transport");
}else{
jqXHR.readyState=1;
if(fireGlobals){
globalEventContext.trigger("ajaxSend",[jqXHR,s]);
}
if(state===2){
return jqXHR;
}
if(s.async&&s.timeout>0){
timeoutTimer=window.setTimeout(function(){
jqXHR.abort("timeout");
},s.timeout);
}
try{
state=1;
transport.send(requestHeaders,done);
}catch(e){
if(state<2){
done(-1,e);
}else{
throw e;
}
}
}
function done(status,nativeStatusText,responses,headers){
var isSuccess,success,error,response,modified,
statusText=nativeStatusText;
if(state===2){
return;
}
state=2;
if(timeoutTimer){
window.clearTimeout(timeoutTimer);
}
transport=undefined;
responseHeadersString=headers||"";
jqXHR.readyState=status>0?4:0;
isSuccess=status>=200&&status<300||status===304;
if(responses){
response=ajaxHandleResponses(s,jqXHR,responses);
}
response=ajaxConvert(s,response,jqXHR,isSuccess);
if(isSuccess){
if(s.ifModified){
modified=jqXHR.getResponseHeader("Last-Modified");
if(modified){
jQuery.lastModified[cacheURL]=modified;
}
modified=jqXHR.getResponseHeader("etag");
if(modified){
jQuery.etag[cacheURL]=modified;
}
}
if(status===204||s.type==="HEAD"){
statusText="nocontent";
}else if(status===304){
statusText="notmodified";
}else{
statusText=response.state;
success=response.data;
error=response.error;
isSuccess=!error;
}
}else{
error=statusText;
if(status||!statusText){
statusText="error";
if(status<0){
status=0;
}
}
}
jqXHR.status=status;
jqXHR.statusText=(nativeStatusText||statusText)+"";
if(isSuccess){
deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);
}else{
deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);
}
jqXHR.statusCode(statusCode);
statusCode=undefined;
if(fireGlobals){
globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",
[jqXHR,s,isSuccess?success:error]);
}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);
if(fireGlobals){
globalEventContext.trigger("ajaxComplete",[jqXHR,s]);
if(!(--jQuery.active)){
jQuery.event.trigger("ajaxStop");
}
}
}
return jqXHR;
},
getJSON:function(url,data,callback){
return jQuery.get(url,data,callback,"json");
},
getScript:function(url,callback){
return jQuery.get(url,undefined,callback,"script");
}
});
jQuery.each(["get","post"],function(i,method){
jQuery[method]=function(url,data,callback,type){
if(jQuery.isFunction(data)){
type=type||callback;
callback=data;
data=undefined;
}
return jQuery.ajax(jQuery.extend({
url:url,
type:method,
dataType:type,
data:data,
success:callback
},jQuery.isPlainObject(url)&&url));
};
});
jQuery._evalUrl=function(url){
return jQuery.ajax({
url:url,
type:"GET",
dataType:"script",
cache:true,
async:false,
global:false,
"throws":true
});
};
jQuery.fn.extend({
wrapAll:function(html){
if(jQuery.isFunction(html)){
return this.each(function(i){
jQuery(this).wrapAll(html.call(this,i));
});
}
if(this[0]){
var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){
wrap.insertBefore(this[0]);
}
wrap.map(function(){
var elem=this;
while(elem.firstChild&&elem.firstChild.nodeType===1){
elem=elem.firstChild;
}
return elem;
}).append(this);
}
return this;
},
wrapInner:function(html){
if(jQuery.isFunction(html)){
return this.each(function(i){
jQuery(this).wrapInner(html.call(this,i));
});
}
return this.each(function(){
var self=jQuery(this),
contents=self.contents();
if(contents.length){
contents.wrapAll(html);
}else{
self.append(html);
}
});
},
wrap:function(html){
var isFunction=jQuery.isFunction(html);
return this.each(function(i){
jQuery(this).wrapAll(isFunction?html.call(this,i):html);
});
},
unwrap:function(){
return this.parent().each(function(){
if(!jQuery.nodeName(this,"body")){
jQuery(this).replaceWith(this.childNodes);
}
}).end();
}
});
function getDisplay(elem){
return elem.style&&elem.style.display||jQuery.css(elem,"display");
}
function filterHidden(elem){
if(!jQuery.contains(elem.ownerDocument||document,elem)){
return true;
}
while(elem&&elem.nodeType===1){
if(getDisplay(elem)==="none"||elem.type==="hidden"){
return true;
}
elem=elem.parentNode;
}
return false;
}
jQuery.expr.filters.hidden=function(elem){
return support.reliableHiddenOffsets()?
(elem.offsetWidth<=0&&elem.offsetHeight<=0&&
!elem.getClientRects().length):
filterHidden(elem);
};
jQuery.expr.filters.visible=function(elem){
return!jQuery.expr.filters.hidden(elem);
};
var r20=/%20/g,
rbracket=/\[\]$/,
rCRLF=/\r?\n/g,
rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,
rsubmittable=/^(?:input|select|textarea|keygen)/i;
function buildParams(prefix,obj,traditional,add){
var name;
if(jQuery.isArray(obj)){
jQuery.each(obj,function(i,v){
if(traditional||rbracket.test(prefix)){
add(prefix,v);
}else{
buildParams(
prefix+"["+(typeof v==="object"&&v!=null?i:"")+"]",
v,
traditional,
add
);
}
});
}else if(!traditional&&jQuery.type(obj)==="object"){
for(name in obj){
buildParams(prefix+"["+name+"]",obj[name],traditional,add);
}
}else{
add(prefix,obj);
}
}
jQuery.param=function(a,traditional){
var prefix,
s=[],
add=function(key,value){
value=jQuery.isFunction(value)?value():(value==null?"":value);
s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);
};
if(traditional===undefined){
traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;
}
if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){
jQuery.each(a,function(){
add(this.name,this.value);
});
}else{
for(prefix in a){
buildParams(prefix,a[prefix],traditional,add);
}
}
return s.join("&").replace(r20,"+");
};
jQuery.fn.extend({
serialize:function(){
return jQuery.param(this.serializeArray());
},
serializeArray:function(){
return this.map(function(){
var elements=jQuery.prop(this,"elements");
return elements?jQuery.makeArray(elements):this;
})
.filter(function(){
var type=this.type;
return this.name&&!jQuery(this).is(":disabled")&&
rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&
(this.checked||!rcheckableType.test(type));
})
.map(function(i,elem){
var val=jQuery(this).val();
return val==null?
null:
jQuery.isArray(val)?
jQuery.map(val,function(val){
return{name:elem.name,value:val.replace(rCRLF,"\r\n")};
}):
{name:elem.name,value:val.replace(rCRLF,"\r\n")};
}).get();
}
});
jQuery.ajaxSettings.xhr=window.ActiveXObject!==undefined?
function(){
if(this.isLocal){
return createActiveXHR();
}
if(document.documentMode>8){
return createStandardXHR();
}
return/^(get|post|head|put|delete|options)$/i.test(this.type)&&
createStandardXHR()||createActiveXHR();
}:
createStandardXHR;
var xhrId=0,
xhrCallbacks={},
xhrSupported=jQuery.ajaxSettings.xhr();
if(window.attachEvent){
window.attachEvent("onunload",function(){
for(var key in xhrCallbacks){
xhrCallbacks[key](undefined,true);
}
});
}
support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);
xhrSupported=support.ajax=!!xhrSupported;
if(xhrSupported){
jQuery.ajaxTransport(function(options){
if(!options.crossDomain||support.cors){
var callback;
return{
send:function(headers,complete){
var i,
xhr=options.xhr(),
id=++xhrId;
xhr.open(
options.type,
options.url,
options.async,
options.username,
options.password
);
if(options.xhrFields){
for(i in options.xhrFields){
xhr[i]=options.xhrFields[i];
}
}
if(options.mimeType&&xhr.overrideMimeType){
xhr.overrideMimeType(options.mimeType);
}
if(!options.crossDomain&&!headers["X-Requested-With"]){
headers["X-Requested-With"]="XMLHttpRequest";
}
for(i in headers){
if(headers[i]!==undefined){
xhr.setRequestHeader(i,headers[i]+"");
}
}
xhr.send((options.hasContent&&options.data)||null);
callback=function(_,isAbort){
var status,statusText,responses;
if(callback&&(isAbort||xhr.readyState===4)){
delete xhrCallbacks[id];
callback=undefined;
xhr.onreadystatechange=jQuery.noop;
if(isAbort){
if(xhr.readyState!==4){
xhr.abort();
}
}else{
responses={};
status=xhr.status;
if(typeof xhr.responseText==="string"){
responses.text=xhr.responseText;
}
try{
statusText=xhr.statusText;
}catch(e){
statusText="";
}
if(!status&&options.isLocal&&!options.crossDomain){
status=responses.text?200:404;
}else if(status===1223){
status=204;
}
}
}
if(responses){
complete(status,statusText,responses,xhr.getAllResponseHeaders());
}
};
if(!options.async){
callback();
}else if(xhr.readyState===4){
window.setTimeout(callback);
}else{
xhr.onreadystatechange=xhrCallbacks[id]=callback;
}
},
abort:function(){
if(callback){
callback(undefined,true);
}
}
};
}
});
}
function createStandardXHR(){
try{
return new window.XMLHttpRequest();
}catch(e){}
}
function createActiveXHR(){
try{
return new window.ActiveXObject("Microsoft.XMLHTTP");
}catch(e){}
}
jQuery.ajaxSetup({
accepts:{
script:"text/javascript, application/javascript, "+
"application/ecmascript, application/x-ecmascript"
},
contents:{
script:/\b(?:java|ecma)script\b/
},
converters:{
"text script":function(text){
jQuery.globalEval(text);
return text;
}
}
});
jQuery.ajaxPrefilter("script",function(s){
if(s.cache===undefined){
s.cache=false;
}
if(s.crossDomain){
s.type="GET";
s.global=false;
}
});
jQuery.ajaxTransport("script",function(s){
if(s.crossDomain){
var script,
head=document.head||jQuery("head")[0]||document.documentElement;
return{
send:function(_,callback){
script=document.createElement("script");
script.async=true;
if(s.scriptCharset){
script.charset=s.scriptCharset;
}
script.src=s.url;
script.onload=script.onreadystatechange=function(_,isAbort){
if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){
script.onload=script.onreadystatechange=null;
if(script.parentNode){
script.parentNode.removeChild(script);
}
script=null;
if(!isAbort){
callback(200,"success");
}
}
};
head.insertBefore(script,head.firstChild);
},
abort:function(){
if(script){
script.onload(undefined,true);
}
}
};
}
});
var oldCallbacks=[],
rjsonp=/(=)\?(?=&|$)|\?\?/;
jQuery.ajaxSetup({
jsonp:"callback",
jsonpCallback:function(){
var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));
this[callback]=true;
return callback;
}
});
jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){
var callbackName,overwritten,responseContainer,
jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?
"url":
typeof s.data==="string"&&
(s.contentType||"")
.indexOf("application/x-www-form-urlencoded")===0&&
rjsonp.test(s.data)&&"data"
);
if(jsonProp||s.dataTypes[0]==="jsonp"){
callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?
s.jsonpCallback():
s.jsonpCallback;
if(jsonProp){
s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);
}else if(s.jsonp!==false){
s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;
}
s.converters["script json"]=function(){
if(!responseContainer){
jQuery.error(callbackName+" was not called");
}
return responseContainer[0];
};
s.dataTypes[0]="json";
overwritten=window[callbackName];
window[callbackName]=function(){
responseContainer=arguments;
};
jqXHR.always(function(){
if(overwritten===undefined){
jQuery(window).removeProp(callbackName);
}else{
window[callbackName]=overwritten;
}
if(s[callbackName]){
s.jsonpCallback=originalSettings.jsonpCallback;
oldCallbacks.push(callbackName);
}
if(responseContainer&&jQuery.isFunction(overwritten)){
overwritten(responseContainer[0]);
}
responseContainer=overwritten=undefined;
});
return"script";
}
});
jQuery.parseHTML=function(data,context,keepScripts){
if(!data||typeof data!=="string"){
return null;
}
if(typeof context==="boolean"){
keepScripts=context;
context=false;
}
context=context||document;
var parsed=rsingleTag.exec(data),
scripts=!keepScripts&&[];
if(parsed){
return[context.createElement(parsed[1])];
}
parsed=buildFragment([data],context,scripts);
if(scripts&&scripts.length){
jQuery(scripts).remove();
}
return jQuery.merge([],parsed.childNodes);
};
var _load=jQuery.fn.load;
jQuery.fn.load=function(url,params,callback){
if(typeof url!=="string"&&_load){
return _load.apply(this,arguments);
}
var selector,type,response,
self=this,
off=url.indexOf(" ");
if(off>-1){
selector=jQuery.trim(url.slice(off,url.length));
url=url.slice(0,off);
}
if(jQuery.isFunction(params)){
callback=params;
params=undefined;
}else if(params&&typeof params==="object"){
type="POST";
}
if(self.length>0){
jQuery.ajax({
url:url,
type:type||"GET",
dataType:"html",
data:params
}).done(function(responseText){
response=arguments;
self.html(selector?
jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):
responseText);
}).always(callback&&function(jqXHR,status){
self.each(function(){
callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);
});
});
}
return this;
};
jQuery.each([
"ajaxStart",
"ajaxStop",
"ajaxComplete",
"ajaxError",
"ajaxSuccess",
"ajaxSend"
],function(i,type){
jQuery.fn[type]=function(fn){
return this.on(type,fn);
};
});
jQuery.expr.filters.animated=function(elem){
return jQuery.grep(jQuery.timers,function(fn){
return elem===fn.elem;
}).length;
};
function getWindow(elem){
return jQuery.isWindow(elem)?
elem:
elem.nodeType===9?
elem.defaultView||elem.parentWindow:
false;
}
jQuery.offset={
setOffset:function(elem,options,i){
var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,
position=jQuery.css(elem,"position"),
curElem=jQuery(elem),
props={};
if(position==="static"){
elem.style.position="relative";
}
curOffset=curElem.offset();
curCSSTop=jQuery.css(elem,"top");
curCSSLeft=jQuery.css(elem,"left");
calculatePosition=(position==="absolute"||position==="fixed")&&
jQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1;
if(calculatePosition){
curPosition=curElem.position();
curTop=curPosition.top;
curLeft=curPosition.left;
}else{
curTop=parseFloat(curCSSTop)||0;
curLeft=parseFloat(curCSSLeft)||0;
}
if(jQuery.isFunction(options)){
options=options.call(elem,i,jQuery.extend({},curOffset));
}
if(options.top!=null){
props.top=(options.top-curOffset.top)+curTop;
}
if(options.left!=null){
props.left=(options.left-curOffset.left)+curLeft;
}
if("using"in options){
options.using.call(elem,props);
}else{
curElem.css(props);
}
}
};
jQuery.fn.extend({
offset:function(options){
if(arguments.length){
return options===undefined?
this:
this.each(function(i){
jQuery.offset.setOffset(this,options,i);
});
}
var docElem,win,
box={top:0,left:0},
elem=this[0],
doc=elem&&elem.ownerDocument;
if(!doc){
return;
}
docElem=doc.documentElement;
if(!jQuery.contains(docElem,elem)){
return box;
}
if(typeof elem.getBoundingClientRect!=="undefined"){
box=elem.getBoundingClientRect();
}
win=getWindow(doc);
return{
top:box.top+(win.pageYOffset||docElem.scrollTop)-(docElem.clientTop||0),
left:box.left+(win.pageXOffset||docElem.scrollLeft)-(docElem.clientLeft||0)
};
},
position:function(){
if(!this[0]){
return;
}
var offsetParent,offset,
parentOffset={top:0,left:0},
elem=this[0];
if(jQuery.css(elem,"position")==="fixed"){
offset=elem.getBoundingClientRect();
}else{
offsetParent=this.offsetParent();
offset=this.offset();
if(!jQuery.nodeName(offsetParent[0],"html")){
parentOffset=offsetParent.offset();
}
parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);
parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true);
}
return{
top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),
left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)
};
},
offsetParent:function(){
return this.map(function(){
var offsetParent=this.offsetParent;
while(offsetParent&&(!jQuery.nodeName(offsetParent,"html")&&
jQuery.css(offsetParent,"position")==="static")){
offsetParent=offsetParent.offsetParent;
}
return offsetParent||documentElement;
});
}
});
jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){
var top=/Y/.test(prop);
jQuery.fn[method]=function(val){
return access(this,function(elem,method,val){
var win=getWindow(elem);
if(val===undefined){
return win?(prop in win)?win[prop]:
win.document.documentElement[method]:
elem[method];
}
if(win){
win.scrollTo(
!top?val:jQuery(win).scrollLeft(),
top?val:jQuery(win).scrollTop()
);
}else{
elem[method]=val;
}
},method,val,arguments.length,null);
};
});
jQuery.each(["top","left"],function(i,prop){
jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,
function(elem,computed){
if(computed){
computed=curCSS(elem,prop);
return rnumnonpx.test(computed)?
jQuery(elem).position()[prop]+"px":
computed;
}
}
);
});
jQuery.each({Height:"height",Width:"width"},function(name,type){
jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},
function(defaultExtra,funcName){
jQuery.fn[funcName]=function(margin,value){
var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),
extra=defaultExtra||(margin===true||value===true?"margin":"border");
return access(this,function(elem,type,value){
var doc;
if(jQuery.isWindow(elem)){
return elem.document.documentElement["client"+name];
}
if(elem.nodeType===9){
doc=elem.documentElement;
return Math.max(
elem.body["scroll"+name],doc["scroll"+name],
elem.body["offset"+name],doc["offset"+name],
doc["client"+name]
);
}
return value===undefined?
jQuery.css(elem,type,extra):
jQuery.style(elem,type,value,extra);
},type,chainable?margin:undefined,chainable,null);
};
});
});
jQuery.fn.extend({
bind:function(types,data,fn){
return this.on(types,null,data,fn);
},
unbind:function(types,fn){
return this.off(types,null,fn);
},
delegate:function(selector,types,data,fn){
return this.on(types,selector,data,fn);
},
undelegate:function(selector,types,fn){
return arguments.length===1?
this.off(selector,"**"):
this.off(types,selector||"**",fn);
}
});
jQuery.fn.size=function(){
return this.length;
};
jQuery.fn.andSelf=jQuery.fn.addBack;
if(typeof define==="function"&&define.amd){
define("jquery",[],function(){
return jQuery;
});
}
var
_jQuery=window.jQuery,
_$=window.$;
jQuery.noConflict=function(deep){
if(window.$===jQuery){
window.$=_$;
}
if(deep&&window.jQuery===jQuery){
window.jQuery=_jQuery;
}
return jQuery;
};
if(!noGlobal){
window.jQuery=window.$=jQuery;
}
return jQuery;
}));


/* ../prive/javascript/jquery.form.js?1491570413 */

(function(factory){
"use strict";
if(typeof define==='function'&&define.amd){
define(['jquery'],factory);
}else{
factory((typeof(jQuery)!='undefined')?jQuery:window.Zepto);
}
}
(function($){
"use strict";
var feature={};
feature.fileapi=$("<input type='file'/>").get(0).files!==undefined;
feature.formdata=window.FormData!==undefined;
var hasProp=!!$.fn.prop;
$.fn.attr2=function(){
if(!hasProp){
return this.attr.apply(this,arguments);
}
var val=this.prop.apply(this,arguments);
if((val&&val.jquery)||typeof val==='string'){
return val;
}
return this.attr.apply(this,arguments);
};
$.fn.ajaxSubmit=function(options){
if(!this.length){
log('ajaxSubmit: skipping submit process - no element selected');
return this;
}
var method,action,url,$form=this;
if(typeof options=='function'){
options={success:options};
}
else if(options===undefined){
options={};
}
method=options.type||this.attr2('method');
action=options.url||this.attr2('action');
url=(typeof action==='string')?$.trim(action):'';
url=url||window.location.href||'';
if(url){
url=(url.match(/^([^#]+)/)||[])[1];
}
options=$.extend(true,{
url:url,
success:$.ajaxSettings.success,
type:method||$.ajaxSettings.type,
iframeSrc:/^https/i.test(window.location.href||'')?'javascript:false':'about:blank'
},options);
var veto={};
this.trigger('form-pre-serialize',[this,options,veto]);
if(veto.veto){
log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
return this;
}
if(options.beforeSerialize&&options.beforeSerialize(this,options)===false){
log('ajaxSubmit: submit aborted via beforeSerialize callback');
return this;
}
var traditional=options.traditional;
if(traditional===undefined){
traditional=$.ajaxSettings.traditional;
}
var elements=[];
var qx,a=this.formToArray(options.semantic,elements);
if(options.data){
options.extraData=options.data;
qx=$.param(options.data,traditional);
}
if(options.beforeSubmit&&options.beforeSubmit(a,this,options)===false){
log('ajaxSubmit: submit aborted via beforeSubmit callback');
return this;
}
this.trigger('form-submit-validate',[a,this,options,veto]);
if(veto.veto){
log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
return this;
}
var q=$.param(a,traditional);
if(qx){
q=(q?(q+'&'+qx):qx);
}
if(options.type.toUpperCase()=='GET'){
options.url+=(options.url.indexOf('?')>=0?'&':'?')+q;
options.data=null;
}
else{
options.data=q;
}
var callbacks=[];
if(options.resetForm){
callbacks.push(function(){$form.resetForm();});
}
if(options.clearForm){
callbacks.push(function(){$form.clearForm(options.includeHidden);});
}
if(!options.dataType&&options.target){
var oldSuccess=options.success||function(){};
callbacks.push(function(data){
var fn=options.replaceTarget?'replaceWith':'html';
$(options.target)[fn](data).each(oldSuccess,arguments);
});
}
else if(options.success){
callbacks.push(options.success);
}
options.success=function(data,status,xhr){
var context=options.context||this;
for(var i=0,max=callbacks.length;i<max;i++){
callbacks[i].apply(context,[data,status,xhr||$form,$form]);
}
};
if(options.error){
var oldError=options.error;
options.error=function(xhr,status,error){
var context=options.context||this;
oldError.apply(context,[xhr,status,error,$form]);
};
}
if(options.complete){
var oldComplete=options.complete;
options.complete=function(xhr,status){
var context=options.context||this;
oldComplete.apply(context,[xhr,status,$form]);
};
}
var fileInputs=$('input[type=file]:enabled',this).filter(function(){return $(this).val()!=='';});
var hasFileInputs=fileInputs.length>0;
var mp='multipart/form-data';
var multipart=($form.attr('enctype')==mp||$form.attr('encoding')==mp);
var fileAPI=feature.fileapi&&feature.formdata;
log("fileAPI :"+fileAPI);
var shouldUseFrame=(hasFileInputs||multipart)&&!fileAPI;
var jqxhr;
if(options.iframe!==false&&(options.iframe||shouldUseFrame)){
if(options.closeKeepAlive){
$.get(options.closeKeepAlive,function(){
jqxhr=fileUploadIframe(a);
});
}
else{
jqxhr=fileUploadIframe(a);
}
}
else if((hasFileInputs||multipart)&&fileAPI){
jqxhr=fileUploadXhr(a);
}
else{
jqxhr=$.ajax(options);
}
$form.removeData('jqxhr').data('jqxhr',jqxhr);
for(var k=0;k<elements.length;k++){
elements[k]=null;
}
this.trigger('form-submit-notify',[this,options]);
return this;
function deepSerialize(extraData){
var serialized=$.param(extraData,options.traditional).split('&');
var len=serialized.length;
var result=[];
var i,part;
for(i=0;i<len;i++){
serialized[i]=serialized[i].replace(/\+/g,' ');
part=serialized[i].split('=');
result.push([decodeURIComponent(part[0]),decodeURIComponent(part[1])]);
}
return result;
}
function fileUploadXhr(a){
var formdata=new FormData();
for(var i=0;i<a.length;i++){
formdata.append(a[i].name,a[i].value);
}
if(options.extraData){
var serializedData=deepSerialize(options.extraData);
for(i=0;i<serializedData.length;i++){
if(serializedData[i]){
formdata.append(serializedData[i][0],serializedData[i][1]);
}
}
}
options.data=null;
var s=$.extend(true,{},$.ajaxSettings,options,{
contentType:false,
processData:false,
cache:false,
type:method||'POST'
});
if(options.uploadProgress){
s.xhr=function(){
var xhr=$.ajaxSettings.xhr();
if(xhr.upload){
xhr.upload.addEventListener('progress',function(event){
var percent=0;
var position=event.loaded||event.position;
var total=event.total;
if(event.lengthComputable){
percent=Math.ceil(position/total*100);
}
options.uploadProgress(event,position,total,percent);
},false);
}
return xhr;
};
}
s.data=null;
var beforeSend=s.beforeSend;
s.beforeSend=function(xhr,o){
if(options.formData){
o.data=options.formData;
}
else{
o.data=formdata;
}
if(beforeSend){
beforeSend.call(this,xhr,o);
}
};
return $.ajax(s);
}
function fileUploadIframe(a){
var form=$form[0],el,i,s,g,id,$io,io,xhr,sub,n,timedOut,timeoutHandle;
var deferred=$.Deferred();
deferred.abort=function(status){
xhr.abort(status);
};
if(a){
for(i=0;i<elements.length;i++){
el=$(elements[i]);
if(hasProp){
el.prop('disabled',false);
}
else{
el.removeAttr('disabled');
}
}
}
s=$.extend(true,{},$.ajaxSettings,options);
s.context=s.context||s;
id='jqFormIO'+(new Date().getTime());
if(s.iframeTarget){
$io=$(s.iframeTarget);
n=$io.attr2('name');
if(!n){
$io.attr2('name',id);
}
else{
id=n;
}
}
else{
$io=$('<iframe name="'+id+'" src="'+s.iframeSrc+'" />');
$io.css({position:'absolute',top:'-1000px',left:'-1000px'});
}
io=$io[0];
xhr={
aborted:0,
responseText:null,
responseXML:null,
status:0,
statusText:'n/a',
getAllResponseHeaders:function(){},
getResponseHeader:function(){},
setRequestHeader:function(){},
abort:function(status){
var e=(status==='timeout'?'timeout':'aborted');
log('aborting upload... '+e);
this.aborted=1;
try{
if(io.contentWindow.document.execCommand){
io.contentWindow.document.execCommand('Stop');
}
}
catch(ignore){}
$io.attr('src',s.iframeSrc);
xhr.error=e;
if(s.error){
s.error.call(s.context,xhr,e,status);
}
if(g){
$.event.trigger("ajaxError",[xhr,s,e]);
}
if(s.complete){
s.complete.call(s.context,xhr,e);
}
}
};
g=s.global;
if(g&&0===$.active++){
$.event.trigger("ajaxStart");
}
if(g){
$.event.trigger("ajaxSend",[xhr,s]);
}
if(s.beforeSend&&s.beforeSend.call(s.context,xhr,s)===false){
if(s.global){
$.active--;
}
deferred.reject();
return deferred;
}
if(xhr.aborted){
deferred.reject();
return deferred;
}
sub=form.clk;
if(sub){
n=sub.name;
if(n&&!sub.disabled){
s.extraData=s.extraData||{};
s.extraData[n]=sub.value;
if(sub.type=="image"){
s.extraData[n+'.x']=form.clk_x;
s.extraData[n+'.y']=form.clk_y;
}
}
}
var CLIENT_TIMEOUT_ABORT=1;
var SERVER_ABORT=2;
function getDoc(frame){
var doc=null;
try{
if(frame.contentWindow){
doc=frame.contentWindow.document;
}
}catch(err){
log('cannot get iframe.contentWindow document: '+err);
}
if(doc){
return doc;
}
try{
doc=frame.contentDocument?frame.contentDocument:frame.document;
}catch(err){
log('cannot get iframe.contentDocument: '+err);
doc=frame.document;
}
return doc;
}
var csrf_token=$('meta[name=csrf-token]').attr('content');
var csrf_param=$('meta[name=csrf-param]').attr('content');
if(csrf_param&&csrf_token){
s.extraData=s.extraData||{};
s.extraData[csrf_param]=csrf_token;
}
function doSubmit(){
var t=$form.attr2('target'),
a=$form.attr2('action'),
mp='multipart/form-data',
et=$form.attr('enctype')||$form.attr('encoding')||mp;
form.setAttribute('target',id);
if(!method||/post/i.test(method)){
form.setAttribute('method','POST');
}
if(a!=s.url){
form.setAttribute('action',s.url);
}
if(!s.skipEncodingOverride&&(!method||/post/i.test(method))){
$form.attr({
encoding:'multipart/form-data',
enctype:'multipart/form-data'
});
}
if(s.timeout){
timeoutHandle=setTimeout(function(){timedOut=true;cb(CLIENT_TIMEOUT_ABORT);},s.timeout);
}
function checkState(){
try{
var state=getDoc(io).readyState;
log('state = '+state);
if(state&&state.toLowerCase()=='uninitialized'){
setTimeout(checkState,50);
}
}
catch(e){
log('Server abort: ',e,' (',e.name,')');
cb(SERVER_ABORT);
if(timeoutHandle){
clearTimeout(timeoutHandle);
}
timeoutHandle=undefined;
}
}
var extraInputs=[];
try{
if(s.extraData){
for(var n in s.extraData){
if(s.extraData.hasOwnProperty(n)){
if($.isPlainObject(s.extraData[n])&&s.extraData[n].hasOwnProperty('name')&&s.extraData[n].hasOwnProperty('value')){
extraInputs.push(
$('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
.appendTo(form)[0]);
}else{
extraInputs.push(
$('<input type="hidden" name="'+n+'">').val(s.extraData[n])
.appendTo(form)[0]);
}
}
}
}
if(!s.iframeTarget){
$io.appendTo('body');
}
if(io.attachEvent){
io.attachEvent('onload',cb);
}
else{
io.addEventListener('load',cb,false);
}
setTimeout(checkState,15);
try{
form.submit();
}catch(err){
var submitFn=document.createElement('form').submit;
submitFn.apply(form);
}
}
finally{
form.setAttribute('action',a);
form.setAttribute('enctype',et);
if(t){
form.setAttribute('target',t);
}else{
$form.removeAttr('target');
}
$(extraInputs).remove();
}
}
if(s.forceSync){
doSubmit();
}
else{
setTimeout(doSubmit,10);
}
var data,doc,domCheckCount=50,callbackProcessed;
function cb(e){
if(xhr.aborted||callbackProcessed){
return;
}
doc=getDoc(io);
if(!doc){
log('cannot access response document');
e=SERVER_ABORT;
}
if(e===CLIENT_TIMEOUT_ABORT&&xhr){
xhr.abort('timeout');
deferred.reject(xhr,'timeout');
return;
}
else if(e==SERVER_ABORT&&xhr){
xhr.abort('server abort');
deferred.reject(xhr,'error','server abort');
return;
}
if(!doc||doc.location.href==s.iframeSrc){
if(!timedOut){
return;
}
}
if(io.detachEvent){
io.detachEvent('onload',cb);
}
else{
io.removeEventListener('load',cb,false);
}
var status='success',errMsg;
try{
if(timedOut){
throw'timeout';
}
var isXml=s.dataType=='xml'||doc.XMLDocument||$.isXMLDoc(doc);
log('isXml='+isXml);
if(!isXml&&window.opera&&(doc.body===null||!doc.body.innerHTML)){
if(--domCheckCount){
log('requeing onLoad callback, DOM not available');
setTimeout(cb,250);
return;
}
}
var docRoot=doc.body?doc.body:doc.documentElement;
xhr.responseText=docRoot?docRoot.innerHTML:null;
xhr.responseXML=doc.XMLDocument?doc.XMLDocument:doc;
if(isXml){
s.dataType='xml';
}
xhr.getResponseHeader=function(header){
var headers={'content-type':s.dataType};
return headers[header.toLowerCase()];
};
if(docRoot){
xhr.status=Number(docRoot.getAttribute('status'))||xhr.status;
xhr.statusText=docRoot.getAttribute('statusText')||xhr.statusText;
}
var dt=(s.dataType||'').toLowerCase();
var scr=/(json|script|text)/.test(dt);
if(scr||s.textarea){
var ta=doc.getElementsByTagName('textarea')[0];
if(ta){
xhr.responseText=ta.value;
xhr.status=Number(ta.getAttribute('status'))||xhr.status;
xhr.statusText=ta.getAttribute('statusText')||xhr.statusText;
}
else if(scr){
var pre=doc.getElementsByTagName('pre')[0];
var b=doc.getElementsByTagName('body')[0];
if(pre){
xhr.responseText=pre.textContent?pre.textContent:pre.innerText;
}
else if(b){
xhr.responseText=b.textContent?b.textContent:b.innerText;
}
}
}
else if(dt=='xml'&&!xhr.responseXML&&xhr.responseText){
xhr.responseXML=toXml(xhr.responseText);
}
try{
data=httpData(xhr,dt,s);
}
catch(err){
status='parsererror';
xhr.error=errMsg=(err||status);
}
}
catch(err){
log('error caught: ',err);
status='error';
xhr.error=errMsg=(err||status);
}
if(xhr.aborted){
log('upload aborted');
status=null;
}
if(xhr.status){
status=(xhr.status>=200&&xhr.status<300||xhr.status===304)?'success':'error';
}
if(status==='success'){
if(s.success){
s.success.call(s.context,data,'success',xhr);
}
deferred.resolve(xhr.responseText,'success',xhr);
if(g){
$.event.trigger("ajaxSuccess",[xhr,s]);
}
}
else if(status){
if(errMsg===undefined){
errMsg=xhr.statusText;
}
if(s.error){
s.error.call(s.context,xhr,status,errMsg);
}
deferred.reject(xhr,'error',errMsg);
if(g){
$.event.trigger("ajaxError",[xhr,s,errMsg]);
}
}
if(g){
$.event.trigger("ajaxComplete",[xhr,s]);
}
if(g&&!--$.active){
$.event.trigger("ajaxStop");
}
if(s.complete){
s.complete.call(s.context,xhr,status);
}
callbackProcessed=true;
if(s.timeout){
clearTimeout(timeoutHandle);
}
setTimeout(function(){
if(!s.iframeTarget){
$io.remove();
}
else{
$io.attr('src',s.iframeSrc);
}
xhr.responseXML=null;
},100);
}
var toXml=$.parseXML||function(s,doc){
if(window.ActiveXObject){
doc=new ActiveXObject('Microsoft.XMLDOM');
doc.async='false';
doc.loadXML(s);
}
else{
doc=(new DOMParser()).parseFromString(s,'text/xml');
}
return(doc&&doc.documentElement&&doc.documentElement.nodeName!='parsererror')?doc:null;
};
var parseJSON=$.parseJSON||function(s){
return window['eval']('('+s+')');
};
var httpData=function(xhr,type,s){
var ct=xhr.getResponseHeader('content-type')||'',
xml=type==='xml'||!type&&ct.indexOf('xml')>=0,
data=xml?xhr.responseXML:xhr.responseText;
if(xml&&data.documentElement.nodeName==='parsererror'){
if($.error){
$.error('parsererror');
}
}
if(s&&s.dataFilter){
data=s.dataFilter(data,type);
}
if(typeof data==='string'){
if(type==='json'||!type&&ct.indexOf('json')>=0){
data=parseJSON(data);
}else if(type==="script"||!type&&ct.indexOf("javascript")>=0){
$.globalEval(data);
}
}
return data;
};
return deferred;
}
};
$.fn.ajaxForm=function(options){
options=options||{};
options.delegation=options.delegation&&$.isFunction($.fn.on);
if(!options.delegation&&this.length===0){
var o={s:this.selector,c:this.context};
if(!$.isReady&&o.s){
log('DOM not ready, queuing ajaxForm');
$(function(){
$(o.s,o.c).ajaxForm(options);
});
return this;
}
log('terminating; zero elements found by selector'+($.isReady?'':' (DOM not ready)'));
return this;
}
if(options.delegation){
$(document)
.off('submit.form-plugin',this.selector,doAjaxSubmit)
.off('click.form-plugin',this.selector,captureSubmittingElement)
.on('submit.form-plugin',this.selector,options,doAjaxSubmit)
.on('click.form-plugin',this.selector,options,captureSubmittingElement);
return this;
}
return this.ajaxFormUnbind()
.bind('submit.form-plugin',options,doAjaxSubmit)
.bind('click.form-plugin',options,captureSubmittingElement);
};
function doAjaxSubmit(e){
var options=e.data;
if(!e.isDefaultPrevented()){
e.preventDefault();
$(e.target).ajaxSubmit(options);
}
}
function captureSubmittingElement(e){
var target=e.target;
var $el=$(target);
if(!($el.is("[type=submit],[type=image]"))){
var t=$el.closest('[type=submit]');
if(t.length===0){
return;
}
target=t[0];
}
var form=this;
form.clk=target;
if(target.type=='image'){
if(e.offsetX!==undefined){
form.clk_x=e.offsetX;
form.clk_y=e.offsetY;
}else if(typeof $.fn.offset=='function'){
var offset=$el.offset();
form.clk_x=e.pageX-offset.left;
form.clk_y=e.pageY-offset.top;
}else{
form.clk_x=e.pageX-target.offsetLeft;
form.clk_y=e.pageY-target.offsetTop;
}
}
setTimeout(function(){form.clk=form.clk_x=form.clk_y=null;},100);
}
$.fn.ajaxFormUnbind=function(){
return this.unbind('submit.form-plugin click.form-plugin');
};
$.fn.formToArray=function(semantic,elements){
var a=[];
if(this.length===0){
return a;
}
var form=this[0];
var formId=this.attr('id');
var els=semantic?form.getElementsByTagName('*'):form.elements;
var els2;
if(els&&!/MSIE [678]/.test(navigator.userAgent)){
els=$(els).get();
}
if(formId){
els2=$(':input[form="'+formId+'"]').get();
if(els2.length){
els=(els||[]).concat(els2);
}
}
if(!els||!els.length){
return a;
}
var i,j,n,v,el,max,jmax;
for(i=0,max=els.length;i<max;i++){
el=els[i];
n=el.name;
if(!n||el.disabled){
continue;
}
if(semantic&&form.clk&&el.type=="image"){
if(form.clk==el){
a.push({name:n,value:$(el).val(),type:el.type});
a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y});
}
continue;
}
v=$.fieldValue(el,true);
if(v&&v.constructor==Array){
if(elements){
elements.push(el);
}
for(j=0,jmax=v.length;j<jmax;j++){
a.push({name:n,value:v[j]});
}
}
else if(feature.fileapi&&el.type=='file'){
if(elements){
elements.push(el);
}
var files=el.files;
if(files.length){
for(j=0;j<files.length;j++){
a.push({name:n,value:files[j],type:el.type});
}
}
else{
a.push({name:n,value:'',type:el.type});
}
}
else if(v!==null&&typeof v!='undefined'){
if(elements){
elements.push(el);
}
a.push({name:n,value:v,type:el.type,required:el.required});
}
}
if(!semantic&&form.clk){
var $input=$(form.clk),input=$input[0];
n=input.name;
if(n&&!input.disabled&&input.type=='image'){
a.push({name:n,value:$input.val()});
a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y});
}
}
return a;
};
$.fn.formSerialize=function(semantic){
return $.param(this.formToArray(semantic));
};
$.fn.fieldSerialize=function(successful){
var a=[];
this.each(function(){
var n=this.name;
if(!n){
return;
}
var v=$.fieldValue(this,successful);
if(v&&v.constructor==Array){
for(var i=0,max=v.length;i<max;i++){
a.push({name:n,value:v[i]});
}
}
else if(v!==null&&typeof v!='undefined'){
a.push({name:this.name,value:v});
}
});
return $.param(a);
};
$.fn.fieldValue=function(successful){
for(var val=[],i=0,max=this.length;i<max;i++){
var el=this[i];
var v=$.fieldValue(el,successful);
if(v===null||typeof v=='undefined'||(v.constructor==Array&&!v.length)){
continue;
}
if(v.constructor==Array){
$.merge(val,v);
}
else{
val.push(v);
}
}
return val;
};
$.fieldValue=function(el,successful){
var n=el.name,t=el.type,tag=el.tagName.toLowerCase();
if(successful===undefined){
successful=true;
}
if(successful&&(!n||el.disabled||t=='reset'||t=='button'||
(t=='checkbox'||t=='radio')&&!el.checked||
(t=='submit'||t=='image')&&el.form&&el.form.clk!=el||
tag=='select'&&el.selectedIndex==-1)){
return null;
}
if(tag=='select'){
var index=el.selectedIndex;
if(index<0){
return null;
}
var a=[],ops=el.options;
var one=(t=='select-one');
var max=(one?index+1:ops.length);
for(var i=(one?index:0);i<max;i++){
var op=ops[i];
if(op.selected){
var v=op.value;
if(!v){
v=(op.attributes&&op.attributes.value&&!(op.attributes.value.specified))?op.text:op.value;
}
if(one){
return v;
}
a.push(v);
}
}
return a;
}
return $(el).val();
};
$.fn.clearForm=function(includeHidden){
return this.each(function(){
$('input,select,textarea',this).clearFields(includeHidden);
});
};
$.fn.clearFields=$.fn.clearInputs=function(includeHidden){
var re=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
return this.each(function(){
var t=this.type,tag=this.tagName.toLowerCase();
if(re.test(t)||tag=='textarea'){
this.value='';
}
else if(t=='checkbox'||t=='radio'){
this.checked=false;
}
else if(tag=='select'){
this.selectedIndex=-1;
}
else if(t=="file"){
if(/MSIE/.test(navigator.userAgent)){
$(this).replaceWith($(this).clone(true));
}else{
$(this).val('');
}
}
else if(includeHidden){
if((includeHidden===true&&/hidden/.test(t))||
(typeof includeHidden=='string'&&$(this).is(includeHidden))){
this.value='';
}
}
});
};
$.fn.resetForm=function(){
return this.each(function(){
if(typeof this.reset=='function'||(typeof this.reset=='object'&&!this.reset.nodeType)){
this.reset();
}
});
};
$.fn.enable=function(b){
if(b===undefined){
b=true;
}
return this.each(function(){
this.disabled=!b;
});
};
$.fn.selected=function(select){
if(select===undefined){
select=true;
}
return this.each(function(){
var t=this.type;
if(t=='checkbox'||t=='radio'){
this.checked=select;
}
else if(this.tagName.toLowerCase()=='option'){
var $sel=$(this).parent('select');
if(select&&$sel[0]&&$sel[0].type=='select-one'){
$sel.find('option').selected(false);
}
this.selected=select;
}
});
};
$.fn.ajaxSubmit.debug=false;
function log(){
if(!$.fn.ajaxSubmit.debug){
return;
}
var msg='[jquery.form] '+Array.prototype.join.call(arguments,'');
if(window.console&&window.console.log){
window.console.log(msg);
}
else if(window.opera&&window.opera.postError){
window.opera.postError(msg);
}
}
}));


/* ../prive/javascript/jquery.autosave.js?1491570413 */

(function($){
$.fn.autosave=function(opt){
opt=$.extend({
url:window.location,
confirm:false,
confirmstring:'Sauvegarder ?'
},opt);
var save_changed=function(){
$('form.autosavechanged')
.each(function(){
if(!opt.confirm||confirm(opt.confirmstring)){
var contenu=$(this).serialize();
var d=new Date();
contenu=contenu+"&__timestamp="+Math.round(d.getTime()/1000);
$.post(opt.url,{
'action':'session',
'var':'autosave_'+$('input[name=autosave]',this).val(),
'val':contenu
});
}
}).removeClass('autosavechanged');
}
$(window)
.bind('unload',save_changed);
return this
.bind('keyup',function(){
$(this).addClass('autosavechanged');
})
.bind('change',function(){
$(this).addClass('autosavechanged');
save_changed();
})
.bind('submit',function(){
save_changed();
;
});
}
})(jQuery);


/* ../prive/javascript/jquery.placeholder-label.js?1491570413 */

(function($){
$.placeholderLabel={
placeholder_class:null,
add_placeholder:function(){
if($(this).val()==$(this).attr('placeholder')){
$(this).val('').removeClass($.placeholderLabel.placeholder_class);
}
},
remove_placeholder:function(){
if($(this).val()==''){
$(this).val($(this).attr('placeholder')).addClass($.placeholderLabel.placeholder_class);
}
},
disable_placeholder_fields:function(){
$(this).find("input[placeholder]").each(function(){
if($(this).val()==$(this).attr('placeholder')){
$(this).val('');
}
});
return true;
}
};
$.fn.placeholderLabel=function(options){
var dummy=document.createElement('input');
if(dummy.placeholder!=undefined){
return this;
}
var config={
placeholder_class:'placeholder'
};
if(options)$.extend(config,options);
$.placeholderLabel.placeholder_class=config.placeholder_class;
this.each(function(){
var input=$(this);
input.focus($.placeholderLabel.add_placeholder);
input.blur($.placeholderLabel.remove_placeholder);
input.triggerHandler('focus');
input.triggerHandler('blur');
$(this.form).submit($.placeholderLabel.disable_placeholder_fields);
});
return this;
}
})(jQuery);


/* ../prive/javascript/ajaxCallback.js?1491570413 */
jQuery.spip=jQuery.spip||{};
jQuery.spip.log=function(){
if(jQuery.spip.debug&&window.console&&window.console.log)
window.console.log.apply(this,arguments);
}
if(!jQuery.spip.load_handlers){
jQuery.spip.load_handlers=new Array();
function onAjaxLoad(f){
jQuery.spip.load_handlers.push(f);
};
jQuery.spip.triggerAjaxLoad=function(root){
jQuery.spip.log('triggerAjaxLoad');
jQuery.spip.log(root);
for(var i=0;i<jQuery.spip.load_handlers.length;i++)
jQuery.spip.load_handlers[i].apply(root);
};
jQuery.spip.intercepted={};
jQuery.spip.intercepted.load=jQuery.fn.load;
jQuery.fn.load=function(url,params,callback){
callback=callback||function(){};
if(params){
if(params.constructor==Function){
callback=params;
params=null;
}
}
var callback2=function(){jQuery.spip.log('jQuery.load');jQuery.spip.triggerAjaxLoad(this);callback.apply(this,arguments);};
return jQuery.spip.intercepted.load.apply(this,[url,params,callback2]);
};
jQuery.spip.intercepted.ajaxSubmit=jQuery.fn.ajaxSubmit;
jQuery.fn.ajaxSubmit=function(options){
options=options||{};
if(typeof options.onAjaxLoad=="undefined"||options.onAjaxLoad!=false){
var me=jQuery(this).parents('div.ajax');
if(me.length)
me=me.parent();
else
me=document;
if(typeof options=='function')
options={success:options};
var callback=options.success||function(){};
options.success=function(){callback.apply(this,arguments);jQuery.spip.log('jQuery.ajaxSubmit');jQuery.spip.triggerAjaxLoad(me);}
}
return jQuery.spip.intercepted.ajaxSubmit.apply(this,[options]);
}
jQuery.spip.intercepted.ajax=jQuery.ajax;
jQuery.ajax=function(type){
var s=jQuery.extend(true,{},jQuery.ajaxSettings,type);
var callbackContext=s.context||s;
try{
if(jQuery.ajax.caller==jQuery.spip.intercepted.load||jQuery.ajax.caller==jQuery.spip.intercepted.ajaxSubmit)
return jQuery.spip.intercepted.ajax(type);
}
catch(err){}
var orig_complete=s.complete||function(){};
type.complete=function(res,status){
var dataType=type.dataType;
var ct=(res&&(typeof res.getResponseHeader=='function'))
?res.getResponseHeader("content-type"):'';
var xml=!dataType&&ct&&ct.indexOf("xml")>=0;
orig_complete.call(callbackContext,res,status);
if(!dataType&&!xml||dataType=="html"){
jQuery.spip.log('jQuery.ajax');
if(typeof s.onAjaxLoad=="undefined"||s.onAjaxLoad!=false)
jQuery.spip.triggerAjaxLoad(s.ajaxTarget?s.ajaxTarget:document);
}
};
return jQuery.spip.intercepted.ajax(type);
};
}
jQuery.uaMatch=function(ua){
ua=ua.toLowerCase();
var match=/(chrome)[ \/]([\w.]+)/.exec(ua)||/(webkit)[ \/]([\w.]+)/.exec(ua)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)||/(msie) ([\w.]+)/.exec(ua)||
ua.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)||
[];
return{
browser:match[1]||"",
version:match[2]||"0"
};
};
if(!jQuery.browser){
matched=jQuery.uaMatch(navigator.userAgent);
browser={};
if(matched.browser){
browser[matched.browser]=true;
browser.version=matched.version;
}
if(browser.chrome){
browser.webkit=true;
}else if(browser.webkit){
browser.safari=true;
}
jQuery.browser=browser;
}
jQuery.getScript=function(url,callback){
return $.ajax({
url:url,
dataType:"script",
success:callback,
cache:true
});
}
jQuery.fn.positionner=function(force,setfocus){
var offset=jQuery(this).offset();
var hauteur=parseInt(jQuery(this).css('height'));
var scrolltop=self['pageYOffset']||
jQuery.boxModel&&document.documentElement['scrollTop']||
document.body['scrollTop'];
var h=jQuery(window).height();
var scroll=0;
if(force||(offset&&offset['top']-5<=scrolltop))
scroll=offset['top']-5;
else if(offset&&offset['top']+hauteur-h+5>scrolltop)
scroll=Math.min(offset['top']-5,offset['top']+hauteur-h+15);
if(scroll)
jQuery('html,body')
.animate({scrollTop:scroll},300);
if(setfocus!==false)
jQuery(jQuery('*',this).filter('input[type=text],textarea')[0]).focus();
return this;
}
jQuery.spip.virtualbuffer_id='spip_virtualbufferupdate';
jQuery.spip.initReaderBuffer=function(){
if(jQuery('#'+jQuery.spip.virtualbuffer_id).length)return;
jQuery('body').append('<p style="float:left;width:0;height:0;position:absolute;left:-5000px;top:-5000px;"><input type="hidden" name="'+jQuery.spip.virtualbuffer_id+'" id="'+jQuery.spip.virtualbuffer_id+'" value="0" /></p>');
}
jQuery.spip.updateReaderBuffer=function(){
var i=jQuery('#'+jQuery.spip.virtualbuffer_id);
if(!i.length)return;
i.val(parseInt(i.val())+1);
}
jQuery.fn.formulaire_setARIA=function(){
if(!this.closest('.ariaformprop').length){
this.find('script').remove();
this.wrap('<div class="ariaformprop" aria-live="polite" aria-atomic="true" aria-relevant="additions"></div>');
jQuery('form',this).not('[aria-live]').attr('aria-live','off');
}
return this;
}
jQuery.fn.formulaire_dyn_ajax=function(target){
if(this.length)
jQuery.spip.initReaderBuffer();
return this.each(function(){
var scrollwhensubmit=!jQuery(this).is('.noscroll');
var cible=target||this;
jQuery(cible).formulaire_setARIA();
jQuery('form:not(.noajax):not(.bouton_action_post)',this).each(function(){
var leform=this;
var leclk,leclk_x,leclk_y;
var onError=function(xhr,status,error,$form){
jQuery(leform).ajaxFormUnbind().find('input[name="var_ajax"]').remove();
var msg="Erreur";
if(typeof(error_on_ajaxform)!=="undefined")msg=error_on_ajaxform;
jQuery(leform).prepend("<p class='error ajax-error none'>"+msg+"</p>").find('.ajax-error').show('fast');
jQuery(cible).closest('.ariaformprop').endLoading(true);
}
jQuery(this).prepend("<input type='hidden' name='var_ajax' value='form' />")
.ajaxForm({
beforeSubmit:function(){
leclk=leform.clk;
if(leclk){
var n=leclk.name;
if(n&&!leclk.disabled&&leclk.type=="image"){
leclk_x=leform.clk_x;
leclk_y=leform.clk_y;
}
}
jQuery(cible).wrap('<div />');
cible=jQuery(cible).parent();
jQuery(cible).closest('.ariaformprop').animateLoading();
if(scrollwhensubmit)
jQuery(cible).positionner(false,false);
},
error:onError,
success:function(c,status,xhr,$form){
if(c.match(/^\s*noajax\s*$/)){
jQuery("input[name=var_ajax]",leform).remove();
if(leclk){
var n=leclk.name;
if(n&&!leclk.disabled){
jQuery(leform).prepend("<input type='hidden' name='"+n+"' value='"+leclk.value+"' />");
if(leclk.type=="image"){
jQuery(leform).prepend("<input type='hidden' name='"+n+".x' value='"+leform.clk_x+"' />");
jQuery(leform).prepend("<input type='hidden' name='"+n+".y' value='"+leform.clk_y+"' />");
}
}
}
jQuery(leform).ajaxFormUnbind().submit();
}
else{
if(!c.length||c.indexOf("ajax-form-is-ok")==-1)
return onError.apply(this,[status,xhr,$form]);
var preloaded=jQuery.spip.preloaded_urls;
jQuery.spip.preloaded_urls={};
jQuery(cible).html(c);
var a=jQuery('a:first',cible).eq(0);
var d=jQuery('div.ajax',cible);
if(!d.length){
jQuery(cible).addClass('ajax');
if(!scrollwhensubmit)
jQuery(cible).addClass('noscroll');
}
else{
d.siblings('br.bugajaxie').remove();
cible=jQuery(":first",cible);
cible.unwrap();
}
if(a.length
&&a.is('a[name=ajax_ancre]')
&&jQuery(a.attr('href'),cible).length){
a=a.attr('href');
if(jQuery(a,cible).length)
setTimeout(function(){
jQuery(a,cible).positionner(false);
},10);
jQuery(cible).closest('.ariaformprop').endLoading(true);
}
else{
if(a.length&&a.is('a[name=ajax_redirect]')){
a=a.get(0).href;
setTimeout(function(){
var cur=window.location.href.split('#');
document.location.replace(a);
if(cur[0]==a.split('#')[0]){
window.location.reload();
}
},10);
jQuery(cible).closest('.ariaformprop').animateLoading();
}
else{
jQuery(cible).closest('.ariaformprop').endLoading(true);
}
}
if(!jQuery('.reponse_formulaire_ok',cible).length)
jQuery.spip.preloaded_urls=preloaded;
jQuery.spip.updateReaderBuffer();
}
}
})
.addClass('noajax hasajax');
});
});
}
jQuery.fn.formulaire_verifier=function(callback,champ){
var erreurs={'message_erreur':'form non ajax'};
var me=this;
if(jQuery(me).closest('.ariaformprop').attr('aria-busy')!='true'){
if(jQuery(me).is('form.hasajax')){
jQuery(me).ajaxSubmit({
dataType:"json",
data:{formulaire_action_verifier_json:true},
success:function(errs){
var args=[errs,champ]
if(jQuery(me).closest('.ariaformprop').attr('aria-busy')!='true')
callback.apply(me,args);
}
});
}
else
callback.apply(me,[erreurs,champ]);
}
return this;
}
jQuery.fn.formulaire_activer_verif_auto=function(callback){
callback=callback||formulaire_actualiser_erreurs;
var me=jQuery(this).closest('.ariaformprop');
var check=function(){
var name=jQuery(this).attr('name');
setTimeout(function(){me.find('form').formulaire_verifier(callback,name);},50);
}
var activer=function(){
if(me.find('form').attr('data-verifjson')!='on'){
me
.find('form')
.attr('data-verifjson','on')
.find('input,select,textarea')
.bind('change',check);
}
}
jQuery(activer);
onAjaxLoad(function(){setTimeout(activer,150);});
}
function formulaire_actualiser_erreurs(erreurs){
var parent=jQuery(this).closest('.formulaire_spip');
if(!parent.length)return;
parent.find('.reponse_formulaire,.erreur_message').fadeOut().remove();
parent.find('.erreur').removeClass('erreur');
if(erreurs['message_ok'])
parent.find('form').before('<p class="reponse_formulaire reponse_formulaire_ok">'+erreurs['message_ok']+'</p>');
if(erreurs['message_erreur'])
parent.find('form').before('<p class="reponse_formulaire reponse_formulaire_erreur">'+erreurs['message_erreur']+'</p>');
for(var k in erreurs){
var saisie=parent.find('.editer_'+k);
if(saisie.length){
saisie.addClass('erreur');
saisie.find('label').after('<span class="erreur_message">'+erreurs[k]+'</span>');
}
}
}
var ajax_confirm=true;
var ajax_confirm_date=0;
var spip_confirm=window.confirm;
function _confirm(message){
ajax_confirm=spip_confirm(message);
if(!ajax_confirm){
var d=new Date();
ajax_confirm_date=d.getTime();
}
return ajax_confirm;
}
window.confirm=_confirm;
var ajaxbloc_selecteur;
jQuery.spip.preloaded_urls={};
jQuery.spip.on_ajax_loaded=function(blocfrag,c,href,history){
history=history||(history==null);
if(typeof href==undefined||href==null)
history=false;
if(history)
jQuery.spip.setHistoryState(blocfrag);
if(jQuery(blocfrag).attr('data-loaded-callback')){
var callback=eval(jQuery(blocfrag).attr('data-loaded-callback'));
callback.call(blocfrag,c,href,history);
}
else{
jQuery(blocfrag)
.html(c)
.endLoading();
}
if(typeof href!=undefined)
jQuery(blocfrag).attr('data-url',href);
if(history){
jQuery.spip.pushHistoryState(href);
jQuery.spip.setHistoryState(blocfrag);
}
var a=jQuery('a:first',jQuery(blocfrag)).eq(0);
if(a.length
&&a.is('a[name=ajax_ancre]')
&&jQuery(a.attr('href'),blocfrag).length){
a=a.attr('href');
jQuery(a,blocfrag).positionner(false);
}
jQuery.spip.log('on_ajax_loaded');
jQuery.spip.triggerAjaxLoad(blocfrag);
a=jQuery(blocfrag).parents('form.hasajax')
if(a.length)
a.eq(0).removeClass('noajax').parents('div.ajax').formulaire_dyn_ajax();
jQuery.spip.updateReaderBuffer();
}
jQuery.spip.stateId=0;
jQuery.spip.setHistoryState=function(blocfrag){
if(!window.history.replaceState)return;
if(!blocfrag.attr('id')){
while(jQuery('#ghsid'+jQuery.spip.stateId).length)
jQuery.spip.stateId++;
blocfrag.attr('id','ghsid'+jQuery.spip.stateId);
}
var href=blocfrag.attr('data-url')||blocfrag.attr('data-origin');
href=jQuery("<"+"a href='"+href+"'></a>").get(0).href;
var state={
id:blocfrag.attr('id'),
href:href
};
var ajaxid=blocfrag.attr('class').match(/\bajax-id-[\w-]+\b/);
if(ajaxid&&ajaxid.length)
state["ajaxid"]=ajaxid[0];
window.history.replaceState(state,window.document.title,window.document.location);
}
jQuery.spip.pushHistoryState=function(href,title){
if(!window.history.pushState)
return false;
window.history.pushState({},title,href);
}
window.onpopstate=function(popState){
if(popState.state&&popState.state.href){
var blocfrag=false;
if(popState.state.id){
blocfrag=jQuery('#'+popState.state.id);
}
if((!blocfrag||!blocfrag.length)&&popState.state.ajaxid){
blocfrag=jQuery('.ajaxbloc.'+popState.state.ajaxid);
}
if(blocfrag&&blocfrag.length==1){
jQuery.spip.ajaxClick(blocfrag,popState.state.href,{history:false});
return true;
}
else{
window.location.href=popState.state.href;
}
}
}
jQuery.spip.loadAjax=function(blocfrag,url,href,options){
var force=options.force||false;
if(jQuery(blocfrag).attr('data-loading-callback')){
var callback=eval(jQuery(blocfrag).attr('data-loading-callback'));
callback.call(blocfrag,url,href,options);
}
else{
jQuery(blocfrag).animateLoading();
}
if(jQuery.spip.preloaded_urls[url]&&!force){
if(jQuery.spip.preloaded_urls[url]=="<!--loading-->"){
setTimeout(function(){jQuery.spip.loadAjax(blocfrag,url,href,options);},100);
return;
}
jQuery.spip.on_ajax_loaded(blocfrag,jQuery.spip.preloaded_urls[url],href,options.history);
}else{
var d=new Date();
jQuery.spip.preloaded_urls[url]="<!--loading-->";
jQuery.ajax({
url:parametre_url(url,'var_t',d.getTime()),
onAjaxLoad:false,
success:function(c){
jQuery.spip.on_ajax_loaded(blocfrag,c,href,options.history);
jQuery.spip.preloaded_urls[url]=c;
if(options.callback&&typeof options.callback=="function")
options.callback.apply(blocfrag);
},
error:function(){
jQuery.spip.preloaded_urls[url]='';
}
});
}
}
jQuery.spip.makeAjaxUrl=function(href,ajax_env,origin){
var url=href.split('#');
url[0]=parametre_url(url[0],'var_ajax',1);
url[0]=parametre_url(url[0],'var_ajax_env',ajax_env);
if(origin){
var p=origin.indexOf('?');
if(p!==-1){
var args=origin.substring(p+1).split('&');
var val;
var arg;
for(var n=0;n<args.length;n++){
arg=args[n].split('=');
arg=unescape(arg[0]);
p=arg.indexOf('[');
if(p!==-1)
arg=arg.substring(0,p);
val=parametre_url(url[0],arg);
if(typeof val=="undefined"||val==null)
url[0]=url[0]+'&'+arg+'=';
}
}
}
if(url[1])
url[0]=parametre_url(url[0],'var_ajax_ancre',url[1]);
return url[0];
}
jQuery.spip.ajaxReload=function(blocfrag,options){
var ajax_env=blocfrag.attr('data-ajax-env');
if(!ajax_env||ajax_env==undefined)return;
var href=options.href||blocfrag.attr('data-url')||blocfrag.attr('data-origin');
if(href&&typeof href!=undefined){
options=options||{};
var callback=options.callback||null;
var history=options.history||false;
var args=options.args||{};
for(var key in args)
href=parametre_url(href,key,args[key]==undefined?'':args[key],'&',args[key]==undefined?false:true);
var url=jQuery.spip.makeAjaxUrl(href,ajax_env,blocfrag.attr('data-origin'));
jQuery.spip.loadAjax(blocfrag,url,href,{force:true,callback:callback,history:history});
return true;
}
}
jQuery.spip.ajaxClick=function(blocfrag,href,options){
var ajax_env=blocfrag.attr('data-ajax-env');
if(!ajax_env||ajax_env==undefined)return;
if(!ajax_confirm){
ajax_confirm=true;
var d=new Date();
if((d.getTime()-ajax_confirm_date)<=2)
return false;
}
var url=jQuery.spip.makeAjaxUrl(href,ajax_env,blocfrag.attr('data-origin'));
jQuery.spip.loadAjax(blocfrag,url,href,options);
return false;
}
jQuery.fn.ajaxbloc=function(){
if(this.length)
jQuery.spip.initReaderBuffer();
if(ajaxbloc_selecteur==undefined)
ajaxbloc_selecteur='.pagination a,a.ajax';
return this.each(function(){
jQuery('div.ajaxbloc',this).ajaxbloc();
var blocfrag=jQuery(this);
var ajax_env=blocfrag.attr('data-ajax-env');
if(!ajax_env||ajax_env==undefined)return;
blocfrag.not('.bind-ajaxReload').bind('ajaxReload',function(event,options){
if(jQuery.spip.ajaxReload(blocfrag,options))
event.stopPropagation();
}).addClass('bind-ajaxReload')
.attr('aria-live','polite').attr('aria-atomic','true');
jQuery('form',this).not('[aria-live]').attr('aria-live','off');
jQuery(ajaxbloc_selecteur,this).not('.noajax,.bind-ajax')
.click(function(){return jQuery.spip.ajaxClick(blocfrag,this.href,{force:jQuery(this).is('.nocache'),history:!(jQuery(this).is('.nohistory')||jQuery(this).closest('.box_modalbox').length)});})
.addClass('bind-ajax')
.filter('.preload').each(function(){
var href=this.href;
var url=jQuery.spip.makeAjaxUrl(href,ajax_env,blocfrag.attr('data-origin'));
if(!jQuery.spip.preloaded_urls[url]){
jQuery.spip.preloaded_urls[url]='<!--loading-->';
jQuery.ajax({url:url,onAjaxLoad:false,success:function(r){jQuery.spip.preloaded_urls[url]=r;},error:function(){jQuery.spip.preloaded_urls[url]='';}});
}
});
jQuery('form.bouton_action_post.ajax',this).not('.noajax,.bind-ajax').each(function(){
var leform=this;
var url=jQuery(this).attr('action').split('#');
jQuery(this)
.prepend("<input type='hidden' name='var_ajax' value='1' /><input type='hidden' name='var_ajax_env' value='"+(ajax_env)+"' />"+(url[1]?"<input type='hidden' name='var_ajax_ancre' value='"+url[1]+"' />":""))
.ajaxForm({
beforeSubmit:function(){
jQuery(blocfrag).animateLoading().positionner(false);
},
onAjaxLoad:false,
success:function(c){
jQuery.spip.on_ajax_loaded(blocfrag,c);
jQuery.spip.preloaded_urls={};
}
})
.addClass('bind-ajax');
});
});
};
jQuery.fn.followLink=function(){
$(this).click();
if(!$(this).is('.bind-ajax'))
window.location.href=$(this).get(0).href;
return this;
}
function ajaxReload(ajaxid,options){
jQuery('div.ajaxbloc.ajax-id-'+ajaxid).ajaxReload(options);
}
jQuery.fn.ajaxReload=function(options){
options=options||{};
jQuery(this).trigger('ajaxReload',[options]);
return this;
}
jQuery.fn.animateLoading=function(){
this.attr('aria-busy','true').addClass('loading').children().css('opacity',0.5);
if(typeof ajax_image_searching!='undefined'){
var i=(this).find('.image_loading');
if(i.length)i.eq(0).html(ajax_image_searching);
else this.prepend('<span class="image_loading">'+ajax_image_searching+'</span>');
}
return this;
}
jQuery.fn.animeajax=jQuery.fn.animateLoading;
jQuery.fn.endLoading=function(hard){
hard=hard||false;
this.attr('aria-busy','false').removeClass('loading');
if(hard){
this.children().css('opacity','');
this.find('.image_loading').html('');
}
return this;
}
jQuery.fn.animateRemove=function(callback){
if(this.length){
var me=this;
var color=$("<div class='remove'></div>").css('background-color');
var sel=$(this);
if(sel.is('tr'))
sel=sel.add('>td',sel);
sel.addClass('remove').css({backgroundColor:color}).animate({opacity:"0.0"},'fast',function(){
sel.removeClass('remove').css({backgroundColor:''});
if(callback)
callback.apply(me);
});
}
return this;
}
jQuery.fn.animateAppend=function(callback){
if(this.length){
var me=this;
var color=$("<div class='append'></div>").css('background-color');
var origin=$(this).css('background-color')||'#ffffff';
if(origin=='transparent')origin='#ffffff';
var sel=$(this);
if(sel.is('tr'))
sel=sel.add('>td',sel);
sel.css('opacity','0.0').addClass('append').css({backgroundColor:color}).animate({opacity:"1.0"},1000,function(){
sel.animate({backgroundColor:origin},3000,function(){
sel.removeClass('append').css({backgroundColor:''});
if(callback)
callback.apply(me);
});
});
}
return this;
}
function parametre_url(url,c,v,sep,force_vide){
if(typeof(url)=='undefined'){
url='';
}
var p;
var ancre='';
var a='./';
var args=[];
p=url.indexOf('#');
if(p!=-1){
ancre=url.substring(p);
url=url.substring(0,p);
}
p=url.indexOf('?');
if(p!==-1){
if(p>0)a=url.substring(0,p);
args=url.substring(p+1).split('&');
}
else
a=url;
var regexp=new RegExp('^('+c.replace('[]','\\[\\]')+'\\[?\\]?)(=.*)?$');
var ajouts=[];
var u=(typeof(v)!=='object')?encodeURIComponent(v):v;
var na=[];
var v_read=null;
for(var n=0;n<args.length;n++){
var val=args[n];
try{
val=decodeURIComponent(val);
}catch(e){}
var r=val.match(regexp);
if(r&&r.length){
if(v==null){
if(r[1].substr(-2)=='[]'){
if(!v_read)v_read=[];
v_read.push((r.length>2&&typeof r[2]!=='undefined')?r[2].substring(1):'');
}
else{
return(r.length>2&&typeof r[2]!=='undefined')?r[2].substring(1):'';
}
}
else if(!v.length){
}
else if(r[1].substr(-2)!='[]'){
na.push(r[1]+'='+u);
ajouts.push(r[1]);
}
}
else
na.push(args[n]);
}
if(v==null)return v_read;
if(v||v.length||force_vide){
ajouts="="+ajouts.join("=")+"=";
var all=c.split('|');
for(n=0;n<all.length;n++){
if(ajouts.search("="+all[n]+"=")==-1){
if(typeof(v)!=='object'){
na.push(all[n]+'='+u);
}
else{
var id=((all[n].substring(-2)=='[]')?all[n]:all[n]+"[]");
for(p=0;p<v.length;p++)
na.push(id+'='+encodeURIComponent(v[p]));
}
}
}
}
if(na.length){
if(!sep)sep='&';
a=a+"?"+na.join(sep);
}
return a+ancre;
}
if(!window.var_zajax_content)
window.var_zajax_content='contenu';
jQuery(function(){
jQuery('form:not(.bouton_action_post)').parents('div.ajax')
.formulaire_dyn_ajax();
jQuery('div.ajaxbloc').ajaxbloc();
jQuery("input[placeholder]:text").placeholderLabel();
jQuery('a.popin').click(function(){if(jQuery.modalbox)jQuery.modalbox(parametre_url(jQuery(this).attr('data-href-popin')?jQuery(this).attr('data-href-popin'):this.href,"var_zajax",jQuery(this).attr('data-var_zajax')?jQuery(this).attr('data-var_zajax'):var_zajax_content));return false;});
});
onAjaxLoad(function(){
if(jQuery){
jQuery('form:not(.bouton_action_post)',this).parents('div.ajax')
.formulaire_dyn_ajax();
if(jQuery(this).is('div.ajaxbloc'))
jQuery(this).ajaxbloc();
else if(jQuery(this).closest('div.ajaxbloc').length)
jQuery(this).closest('div.ajaxbloc').ajaxbloc();
else
jQuery('div.ajaxbloc',this).ajaxbloc();
jQuery("input[placeholder]:text",this).placeholderLabel();
jQuery('a.popin',this).click(function(){if(jQuery.modalbox)jQuery.modalbox(parametre_url(jQuery(this).attr('data-href-popin')?jQuery(this).attr('data-href-popin'):this.href,"var_zajax",jQuery(this).attr('data-var_zajax')?jQuery(this).attr('data-var_zajax'):var_zajax_content));return false;});
}
});


/* ../prive/javascript/jquery.cookie.js?1491570413 */

(function(factory){
if(typeof define==='function'&&define.amd){
define(['jquery'],factory);
}else if(typeof exports==='object'){
factory(require('jquery'));
}else{
factory(jQuery);
}
}(function($){
var pluses=/\+/g;
function encode(s){
return config.raw?s:encodeURIComponent(s);
}
function decode(s){
return config.raw?s:decodeURIComponent(s);
}
function stringifyCookieValue(value){
return encode(config.json?JSON.stringify(value):String(value));
}
function parseCookieValue(s){
if(s.indexOf('"')===0){
s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\');
}
try{
s=decodeURIComponent(s.replace(pluses,' '));
return config.json?JSON.parse(s):s;
}catch(e){}
}
function read(s,converter){
var value=config.raw?s:parseCookieValue(s);
return $.isFunction(converter)?converter(value):value;
}
var config=$.cookie=function(key,value,options){
if(value!==undefined&&!$.isFunction(value)){
options=$.extend({},config.defaults,options);
if(typeof options.expires==='number'){
var days=options.expires,t=options.expires=new Date();
t.setTime(+t+days*864e+5);
}
return(document.cookie=[
encode(key),'=',stringifyCookieValue(value),
options.expires?'; expires='+options.expires.toUTCString():'',
options.path?'; path='+options.path:'',
options.domain?'; domain='+options.domain:'',
options.secure?'; secure':''
].join(''));
}
var result=key?undefined:{};
var cookies=document.cookie?document.cookie.split('; '):[];
for(var i=0,l=cookies.length;i<l;i++){
var parts=cookies[i].split('=');
var name=decode(parts.shift());
var cookie=parts.join('=');
if(key&&key===name){
result=read(cookie,value);
break;
}
if(!key&&(cookie=read(cookie))!==undefined){
result[name]=cookie;
}
}
return result;
};
config.defaults={};
$.removeCookie=function(key,options){
if($.cookie(key)===undefined){
return false;
}
$.cookie(key,'',$.extend({},options,{expires:-1}));
return!$.cookie(key);
};
}));


/* ../prive/javascript/spip_barre.js?1491570413 */

var theSelection=false;
var clientPC=navigator.userAgent.toLowerCase();
var clientVer=parseInt(navigator.appVersion);
var is_ie=((clientPC.indexOf("msie")!=-1)&&(clientPC.indexOf("opera")==-1));
var is_nav=((clientPC.indexOf('mozilla')!=-1)&&(clientPC.indexOf('spoofer')==-1)
&&(clientPC.indexOf('compatible')==-1)&&(clientPC.indexOf('opera')==-1)
&&(clientPC.indexOf('webtv')==-1)&&(clientPC.indexOf('hotjava')==-1));
var is_moz=0;
var is_win=((clientPC.indexOf("win")!=-1)||(clientPC.indexOf("16bit")!=-1));
var is_mac=(clientPC.indexOf("mac")!=-1);
function barre_inserer(text,champ){
var txtarea=champ;
if(document.selection){
txtarea.focus();
var r=document.selection.createRange();
if(r==null){
txtarea.selectionStart=txtarea.value.length;
txtarea.selectionEnd=txtarea.selectionStart;
}
else{
var re=txtarea.createTextRange();
var rc=re.duplicate();
re.moveToBookmark(r.getBookmark());
rc.setEndPoint('EndToStart',re);
txtarea.selectionStart=rc.text.length;
txtarea.selectionEnd=rc.text.length+r.text.length;
}
}
mozWrap(txtarea,'',text);
}
function helpline(help,champ){
champ.value=help;
}
function setCaretToEnd(input){
setSelectionRange(input,input.value.length,input.value.length);
}
function setSelectionRange(input,selectionStart,selectionEnd){
if(input.setSelectionRange){
input.focus();
input.setSelectionRange(selectionStart,selectionEnd);
}
else if(input.createTextRange){
var range=input.createTextRange();
range.collapse(true);
range.moveEnd('character',selectionEnd);
range.moveStart('character',selectionStart);
range.select();
}
}
function mozWrap(txtarea,open,close)
{
var selLength=txtarea.textLength;
var selStart=txtarea.selectionStart;
var selEnd=txtarea.selectionEnd;
if(selEnd==1||selEnd==2)
selEnd=selLength;
var selTop=txtarea.scrollTop;
if(selEnd-selStart>0&&(txtarea.value).substring(selEnd-1,selEnd)==' ')selEnd=selEnd-1;
var s1=(txtarea.value).substring(0,selStart);
var s2=(txtarea.value).substring(selStart,selEnd)
var s3=(txtarea.value).substring(selEnd,selLength);
if((txtarea.value).substring(selEnd,selEnd+1)=='}'&&close.substring(0,1)=="}")close=close+" ";
if((txtarea.value).substring(selEnd-1,selEnd)=='}'&&close.substring(0,1)=="}")close=" "+close;
if((txtarea.value).substring(selStart-1,selStart)=='{'&&open.substring(0,1)=="{")open=" "+open;
if((txtarea.value).substring(selStart,selStart+1)=='{'&&open.substring(0,1)=="{")open=open+" ";
txtarea.value=s1+open+s2+close+s3;
selDeb=selStart+open.length;
selFin=selEnd+close.length;
window.setSelectionRange(txtarea,selDeb,selFin);
txtarea.scrollTop=selTop;
txtarea.focus();
return;
}
function storeCaret(textEl){
if(textEl.createTextRange)
textEl.caretPos=document.selection.createRange().duplicate();
}


/* ../prive/javascript/layer.js?1491570413 */
var url_chargee=new Array();
var xhr_actifs={};
function slide_horizontal(couche,slide,align,depart,etape){
var obj=jQuery("#"+couche);
if(!obj.length)return;
obj=obj.get(0);
if(!etape){
if(align=='left')depart=obj.scrollLeft;
else depart=obj.firstChild.offsetWidth-obj.scrollLeft;
etape=0;
}
etape=Math.round(etape)+1;
pos=Math.round(depart)+Math.round(((slide-depart)/10)*etape);
if(align=='left')obj.scrollLeft=pos;
else obj.scrollLeft=obj.firstChild.offsetWidth-pos;
if(etape<10)setTimeout("slide_horizontal('"+couche+"', '"+slide+"', '"+align+"', '"+depart+"', '"+etape+"')",60);
}
function changerhighlight(couche){
jQuery(couche)
.addClass('on')
.siblings()
.not(couche)
.removeClass('on');
jQuery('.petite-racine.on').removeClass('on');
}
function aff_selection(arg,idom,url,event){
var noeud=jQuery("#"+idom);
if(noeud.length){
noeud.hide();
charger_node_url(url+arg,noeud.get(0),'','',event);
}
return false;
}
function aff_selection_titre(titre,id,idom,nid)
{
var t=jQuery('#titreparent');
var p=t.closest('form');
t.attr('value',titre);
p.find('#'+nid).attr('value',id).trigger('change');
p.find("#"+idom).hide('fast');
if(p.is('.submit_plongeur'))p.get(p.length-1).submit();
else p.find("#"+idom).prev('div').find('a').eq(0).focus();
}
function aff_selection_provisoire(id,racine,url,col,sens,informer,event){
if(url.href=='javascript:void(0)'){
slide_horizontal(racine+'_principal',((col-1)*150),sens);
aff_selection(id,racine+"_selection",informer);
}
else{
charger_id_url(url.href,
racine+'_col_'+(col+1),
function(){
slide_horizontal(racine+'_principal',((col-1)*150),sens);
aff_selection(id,racine+"_selection",informer);
},
event);
}
return false;
}
function onkey_rechercher(valeur,rac,url,img,nid,init){
var Field=jQuery("#"+rac).get(0);
if(!valeur.length){
init=jQuery("#"+init).get(0);
if(init&&init.href){charger_node_url(init.href,Field);}
}else{
charger_node_url(url+valeur,
Field,
function(){
var n=Field.childNodes.length-1;
if((n==1)){
noeud=Field.childNodes[n].firstChild;
if(noeud.title)
aff_selection_titre(noeud.firstChild.nodeValue,noeud.title,rac,nid);
}
},
img);
}
return false;
}
var verifForm_clicked=false;
function verifForm(racine){
verifForm_clicked=false;
if(!jQuery)return;
if(!jQuery.browser.msie)
jQuery('form:not(.bouton_action_post)',racine||document).not('.verifformok')
.keypress(function(e){
if(
((e.ctrlKey&&(
(((e.charCode||e.keyCode)==115)||((e.charCode||e.keyCode)==83))
||(e.charCode==19&&e.keyCode==19)
)
)
||(e.keyCode==19&&jQuery.browser.opera))
&&!verifForm_clicked
){
verifForm_clicked=true;
jQuery(this).find('input[type=submit]')
.click();
return false;
}
}).addClass('verifformok');
else
jQuery('form:not(.bouton_action_post)',racine||document).not('.verifformok')
.keydown(function(e){
if(!e.charCode&&e.keyCode==119&&!verifForm_clicked){
verifForm_clicked=true;
jQuery(this).find('input[type=submit]')
.click();
return false;
}
}).addClass('verifformok');
}
function AjaxSqueezeNode(trig,target,f,event){
var i,callback;
if(!f){
callback=function(){verifForm(this);}
}
else{
callback=function(res,status){
f.apply(this,[res,status]);
verifForm(this);
}
}
valid=false;
if(typeof(window['_OUTILS_DEVELOPPEURS'])!='undefined'){
if(!(navigator.userAgent.toLowerCase().indexOf("firefox/1.0")))
valid=(typeof event=='object')&&(event.altKey||event.metaKey);
}
if(typeof(trig)=='string'){
if(valid){
window.open(trig+'&transformer_xml=valider_xml');
}else{
jQuery(target).animeajax();
}
res=jQuery.ajax({
"url":trig,
"complete":function(r,s){
AjaxRet(r,s,target,callback);
jQuery(target).endLoading();
}
});
return res;
}
if(valid){
var doc=window.open("","valider").document;
doc.open();
doc.close();
target=doc.body;
}
else{
jQuery(target).animeajax();
}
jQuery(trig).ajaxSubmit({
"target":target,
"success":function(res,status){
if(status=='error')return this.html('Erreur HTTP');
callback.apply(this,[res,status]);
},
"beforeSubmit":function(vars){
if(valid)
vars.push({"name":"transformer_xml","value":"valider_xml"});
return true;
}
});
return true;
}
function AjaxRet(res,status,target,callback){
if(res.aborted)return;
if(status=='error')return jQuery(target).html('HTTP Error');
jQuery(target)
.html(res.responseText)
.each(callback,[res.responseText,status]);
}
function charger_id_url(myUrl,myField,jjscript,event){
var Field=jQuery("#"+myField);
if(!Field.length)return true;
if(!myUrl){
Field.empty();
retour_id_url(Field.get(0),jjscript);
return true;
}
else
return charger_node_url(myUrl,Field.get(0),jjscript,jQuery('#'+'img_'+myField).get(0),event);
}
function charger_node_url(myUrl,Field,jjscript,img,event){
if(url_chargee[myUrl]){
var el=jQuery(Field).html(url_chargee[myUrl])[0];
retour_id_url(el,jjscript);
jQuery.spip.triggerAjaxLoad(el);
return false;
}
else{
if(img)img.style.visibility="visible";
if(xhr_actifs[Field]){xhr_actifs[Field].aborted=true;xhr_actifs[Field].abort();}
xhr_actifs[Field]=AjaxSqueezeNode(myUrl,
Field,
function(r){
xhr_actifs[Field]=undefined;
if(img)img.style.visibility="hidden";
url_chargee[myUrl]=r;
retour_id_url(Field,jjscript);
slide_horizontal($(Field).children().attr("id")+'_principal',$(Field).width(),$(Field).css("text-align"));
},
event);
return false;
}
}
function retour_id_url(Field,jjscript){
jQuery(Field).css({'visibility':'visible','display':'block'});
if(jjscript)jjscript();
}
function charger_node_url_si_vide(url,noeud,gifanime,jjscript,event){
if(noeud.style.display!='none'){
noeud.style.display='none';}
else{
if(noeud.innerHTML!=""){
noeud.style.visibility="visible";
noeud.style.display="block";
}else{
charger_node_url(url,noeud,'',gifanime,event);
}
}
return false;
}
jQuery(document).ready(function(){
verifForm();
onAjaxLoad(verifForm);
});


/* ../prive/javascript/presentation.js?1491570413 */

$.fn.hoverClass=function(c){
return this.each(function(){
$(this).hover(
function(){$(this).addClass(c);},
function(){$(this).removeClass(c);}
);
});
};
var accepter_change_statut=false;
function selec_statut(id,type,decal,puce,script){
node=$('.imgstatut'+type+id);
if(!accepter_change_statut)
accepter_change_statut=confirm(confirm_changer_statut);
if(!accepter_change_statut||!node.length)return;
$('.statutdecal'+type+id)
.css('margin-left',decal+'px')
.removeClass('on');
$.get(script,function(c){
if(!c)
node.attr('src',puce);
else{
r=window.open();
r.document.write(c);
r.document.close();
}
});
}
function prepare_selec_statut(node,nom,type,id,action)
{
$(node)
.hoverClass('on')
.addClass('on')
.load(action+'&type='+type+'&id='+id);
}
jQuery.fn.showother=function(cible){
var me=this;
if(me.is('.replie')){
me.addClass('deplie').removeClass('replie');
jQuery(cible)
.slideDown('fast',
function(){
jQuery(me)
.addClass('blocdeplie')
.removeClass('blocreplie')
.removeClass('togglewait');
}
).trigger('deplie');
}
return this;
}
jQuery.fn.hideother=function(cible){
var me=this;
if(!me.is('.replie')){
me.addClass('replie').removeClass('deplie');
jQuery(cible)
.slideUp('fast',
function(){
jQuery(me)
.addClass('blocreplie')
.removeClass('blocdeplie')
.removeClass('togglewait');
}
).trigger('replie');
}
return this;
}
jQuery.fn.toggleother=function(cible){
if(this.is('.deplie'))
return this.hideother(cible);
else
return this.showother(cible);
}
jQuery.fn.depliant=function(cible){
if(!this.is('.depliant')){
var time=400;
var me=this;
this
.addClass('depliant');
if(!me.is('.deplie')){
me.addClass('hover')
.addClass('togglewait');
var t=setTimeout(function(){
me.toggleother(cible);
t=null;
},time);
}
me
.hover(function(e){
me
.addClass('hover');
if(!me.is('.deplie')){
me.addClass('togglewait');
if(t){clearTimeout(t);t=null;}
t=setTimeout(function(){
me.toggleother(cible);
t=null;
},time);
}
}
,function(e){
if(t){clearTimeout(t);t=null;}
me
.removeClass('hover');
})
.end();
}
return this;
}
jQuery.fn.depliant_clicancre=function(cible){
var me=this.parent();
if(me.is('.togglewait'))return false;
me.toggleother(cible);
return false;
}
function reloadExecPage(exec,blocs){
if(window.jQuery){
jQuery(function(){
if(!blocs)
blocs="#navigation,#extra";
jQuery(blocs).find('>div').ajaxReload({args:{exec:exec}});
if(exec.match(/_edit$/))
jQuery('body').addClass('edition');
else
jQuery('body').removeClass('edition');
})
}
}


/* ../prive/javascript/gadgets.js?1491570413 */
function init_gadgets(url_menu_rubrique){
jQuery('#boutonbandeautoutsite').one('mouseover',function(){
jQuery(this).siblings('ul').find('li:first>a').animeajax();
jQuery.ajax({
url:url_menu_rubrique,
success:function(c){
jQuery('#boutonbandeautoutsite').siblings('ul').remove();
jQuery('#boutonbandeautoutsite')
.after(c)
.parent().find('li').menuFocus();
}
});
});
}
function focus_zone(selecteur){
jQuery(selecteur).eq(0).find('a,input:visible').get(0).focus();
return false;
}
jQuery(document).ready(function(){
init_gadgets(url_menu_rubrique);
var is_open=0;
jQuery.fn.menuItemOpen=function(){
jQuery(this)
.addClass('actif')
.parents('li').addClass('actif');
jQuery(this).siblings('li').removeClass('actif_tempo');
is_open=true;
return this;
}
jQuery.fn.menuItemClose=function(){
jQuery(this)
.removeClass('actif_tempo');
is_open=(jQuery(this).parents('ul').eq(-1).find('li.actif').length>0);
return this;
}
jQuery.fn.menuFocus=function(){
jQuery(this)
.hover(
function(){
if(this.timerout)
clearTimeout(this.timerout);
this.timerout=null;
this.timerin=null;
if(is_open)
jQuery(this).menuItemOpen();
else{
var me=jQuery(this);
this.timerin=setTimeout(function(){
me.menuItemOpen(null);
},200);
}
}
,
function(){
if(this.timerin)
clearTimeout(this.timerin);
this.timerin=null;
if(is_open){
var me=jQuery(this).removeClass('actif').addClass('actif_tempo');
this.timerout=setTimeout(function(){
me.menuItemClose();
},400);
}
}
)
.find('>a').focus(function(){
jQuery(this).parents('li').addClass('actif');
})
.blur(function(){
jQuery(this).parents('li').removeClass('actif');
});
return this;
}
jQuery('#bando_navigation').hover(function(){
hauteur=parseInt(jQuery('#bando_navigation .largeur').height())
+parseInt(jQuery('#bando_navigation').css("padding-top"))
+parseInt(jQuery('#bando_navigation').css("padding-bottom"));
jQuery('#bando_navigation ul li>ul').css({'top':hauteur});
});
jQuery('#bando_navigation li').menuFocus();
jQuery('#bando_outils ul.bandeau_rubriques li').menuFocus();
jQuery('#bandeau_haut #formRecherche input').hover(function(){
jQuery('#bandeau_haut ul.actif').trigger('mouseout');
});
jQuery('#bando_liens_rapides a')
.focus(function(){
jQuery('#bando_liens_rapides').addClass('actif');
})
.blur(function(){
jQuery('#bando_liens_rapides').removeClass('actif');
});
if(typeof window.test_accepte_ajax!="undefined")
test_accepte_ajax();
});


/* ../plugins-dist/jquery_ui/prive/javascript/ui/effect.js */

(function(factory){
if(typeof define==="function"&&define.amd){
define(["jquery"],factory);
}else{
factory(jQuery);
}
}(function($){
var dataSpace="ui-effects-",
jQuery=$;
$.effects={
effect:{}
};
(function(jQuery,undefined){
var stepHooks="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
rplusequals=/^([\-+])=\s*(\d+\.?\d*)/,
stringParsers=[{
re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
parse:function(execResult){
return[
execResult[1],
execResult[2],
execResult[3],
execResult[4]
];
}
},{
re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
parse:function(execResult){
return[
execResult[1]*2.55,
execResult[2]*2.55,
execResult[3]*2.55,
execResult[4]
];
}
},{
re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
parse:function(execResult){
return[
parseInt(execResult[1],16),
parseInt(execResult[2],16),
parseInt(execResult[3],16)
];
}
},{
re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,
parse:function(execResult){
return[
parseInt(execResult[1]+execResult[1],16),
parseInt(execResult[2]+execResult[2],16),
parseInt(execResult[3]+execResult[3],16)
];
}
},{
re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
space:"hsla",
parse:function(execResult){
return[
execResult[1],
execResult[2]/100,
execResult[3]/100,
execResult[4]
];
}
}],
color=jQuery.Color=function(color,green,blue,alpha){
return new jQuery.Color.fn.parse(color,green,blue,alpha);
},
spaces={
rgba:{
props:{
red:{
idx:0,
type:"byte"
},
green:{
idx:1,
type:"byte"
},
blue:{
idx:2,
type:"byte"
}
}
},
hsla:{
props:{
hue:{
idx:0,
type:"degrees"
},
saturation:{
idx:1,
type:"percent"
},
lightness:{
idx:2,
type:"percent"
}
}
}
},
propTypes={
"byte":{
floor:true,
max:255
},
"percent":{
max:1
},
"degrees":{
mod:360,
floor:true
}
},
support=color.support={},
supportElem=jQuery("<p>")[0],
colors,
each=jQuery.each;
supportElem.style.cssText="background-color:rgba(1,1,1,.5)";
support.rgba=supportElem.style.backgroundColor.indexOf("rgba")>-1;
each(spaces,function(spaceName,space){
space.cache="_"+spaceName;
space.props.alpha={
idx:3,
type:"percent",
def:1
};
});
function clamp(value,prop,allowEmpty){
var type=propTypes[prop.type]||{};
if(value==null){
return(allowEmpty||!prop.def)?null:prop.def;
}
value=type.floor?~~value:parseFloat(value);
if(isNaN(value)){
return prop.def;
}
if(type.mod){
return(value+type.mod)%type.mod;
}
return 0>value?0:type.max<value?type.max:value;
}
function stringParse(string){
var inst=color(),
rgba=inst._rgba=[];
string=string.toLowerCase();
each(stringParsers,function(i,parser){
var parsed,
match=parser.re.exec(string),
values=match&&parser.parse(match),
spaceName=parser.space||"rgba";
if(values){
parsed=inst[spaceName](values);
inst[spaces[spaceName].cache]=parsed[spaces[spaceName].cache];
rgba=inst._rgba=parsed._rgba;
return false;
}
});
if(rgba.length){
if(rgba.join()==="0,0,0,0"){
jQuery.extend(rgba,colors.transparent);
}
return inst;
}
return colors[string];
}
color.fn=jQuery.extend(color.prototype,{
parse:function(red,green,blue,alpha){
if(red===undefined){
this._rgba=[null,null,null,null];
return this;
}
if(red.jquery||red.nodeType){
red=jQuery(red).css(green);
green=undefined;
}
var inst=this,
type=jQuery.type(red),
rgba=this._rgba=[];
if(green!==undefined){
red=[red,green,blue,alpha];
type="array";
}
if(type==="string"){
return this.parse(stringParse(red)||colors._default);
}
if(type==="array"){
each(spaces.rgba.props,function(key,prop){
rgba[prop.idx]=clamp(red[prop.idx],prop);
});
return this;
}
if(type==="object"){
if(red instanceof color){
each(spaces,function(spaceName,space){
if(red[space.cache]){
inst[space.cache]=red[space.cache].slice();
}
});
}else{
each(spaces,function(spaceName,space){
var cache=space.cache;
each(space.props,function(key,prop){
if(!inst[cache]&&space.to){
if(key==="alpha"||red[key]==null){
return;
}
inst[cache]=space.to(inst._rgba);
}
inst[cache][prop.idx]=clamp(red[key],prop,true);
});
if(inst[cache]&&jQuery.inArray(null,inst[cache].slice(0,3))<0){
inst[cache][3]=1;
if(space.from){
inst._rgba=space.from(inst[cache]);
}
}
});
}
return this;
}
},
is:function(compare){
var is=color(compare),
same=true,
inst=this;
each(spaces,function(_,space){
var localCache,
isCache=is[space.cache];
if(isCache){
localCache=inst[space.cache]||space.to&&space.to(inst._rgba)||[];
each(space.props,function(_,prop){
if(isCache[prop.idx]!=null){
same=(isCache[prop.idx]===localCache[prop.idx]);
return same;
}
});
}
return same;
});
return same;
},
_space:function(){
var used=[],
inst=this;
each(spaces,function(spaceName,space){
if(inst[space.cache]){
used.push(spaceName);
}
});
return used.pop();
},
transition:function(other,distance){
var end=color(other),
spaceName=end._space(),
space=spaces[spaceName],
startColor=this.alpha()===0?color("transparent"):this,
start=startColor[space.cache]||space.to(startColor._rgba),
result=start.slice();
end=end[space.cache];
each(space.props,function(key,prop){
var index=prop.idx,
startValue=start[index],
endValue=end[index],
type=propTypes[prop.type]||{};
if(endValue===null){
return;
}
if(startValue===null){
result[index]=endValue;
}else{
if(type.mod){
if(endValue-startValue>type.mod/2){
startValue+=type.mod;
}else if(startValue-endValue>type.mod/2){
startValue-=type.mod;
}
}
result[index]=clamp((endValue-startValue)*distance+startValue,prop);
}
});
return this[spaceName](result);
},
blend:function(opaque){
if(this._rgba[3]===1){
return this;
}
var rgb=this._rgba.slice(),
a=rgb.pop(),
blend=color(opaque)._rgba;
return color(jQuery.map(rgb,function(v,i){
return(1-a)*blend[i]+a*v;
}));
},
toRgbaString:function(){
var prefix="rgba(",
rgba=jQuery.map(this._rgba,function(v,i){
return v==null?(i>2?1:0):v;
});
if(rgba[3]===1){
rgba.pop();
prefix="rgb(";
}
return prefix+rgba.join()+")";
},
toHslaString:function(){
var prefix="hsla(",
hsla=jQuery.map(this.hsla(),function(v,i){
if(v==null){
v=i>2?1:0;
}
if(i&&i<3){
v=Math.round(v*100)+"%";
}
return v;
});
if(hsla[3]===1){
hsla.pop();
prefix="hsl(";
}
return prefix+hsla.join()+")";
},
toHexString:function(includeAlpha){
var rgba=this._rgba.slice(),
alpha=rgba.pop();
if(includeAlpha){
rgba.push(~~(alpha*255));
}
return"#"+jQuery.map(rgba,function(v){
v=(v||0).toString(16);
return v.length===1?"0"+v:v;
}).join("");
},
toString:function(){
return this._rgba[3]===0?"transparent":this.toRgbaString();
}
});
color.fn.parse.prototype=color.fn;
function hue2rgb(p,q,h){
h=(h+1)%1;
if(h*6<1){
return p+(q-p)*h*6;
}
if(h*2<1){
return q;
}
if(h*3<2){
return p+(q-p)*((2/3)-h)*6;
}
return p;
}
spaces.hsla.to=function(rgba){
if(rgba[0]==null||rgba[1]==null||rgba[2]==null){
return[null,null,null,rgba[3]];
}
var r=rgba[0]/255,
g=rgba[1]/255,
b=rgba[2]/255,
a=rgba[3],
max=Math.max(r,g,b),
min=Math.min(r,g,b),
diff=max-min,
add=max+min,
l=add*0.5,
h,s;
if(min===max){
h=0;
}else if(r===max){
h=(60*(g-b)/diff)+360;
}else if(g===max){
h=(60*(b-r)/diff)+120;
}else{
h=(60*(r-g)/diff)+240;
}
if(diff===0){
s=0;
}else if(l<=0.5){
s=diff/add;
}else{
s=diff/(2-add);
}
return[Math.round(h)%360,s,l,a==null?1:a];
};
spaces.hsla.from=function(hsla){
if(hsla[0]==null||hsla[1]==null||hsla[2]==null){
return[null,null,null,hsla[3]];
}
var h=hsla[0]/360,
s=hsla[1],
l=hsla[2],
a=hsla[3],
q=l<=0.5?l*(1+s):l+s-l*s,
p=2*l-q;
return[
Math.round(hue2rgb(p,q,h+(1/3))*255),
Math.round(hue2rgb(p,q,h)*255),
Math.round(hue2rgb(p,q,h-(1/3))*255),
a
];
};
each(spaces,function(spaceName,space){
var props=space.props,
cache=space.cache,
to=space.to,
from=space.from;
color.fn[spaceName]=function(value){
if(to&&!this[cache]){
this[cache]=to(this._rgba);
}
if(value===undefined){
return this[cache].slice();
}
var ret,
type=jQuery.type(value),
arr=(type==="array"||type==="object")?value:arguments,
local=this[cache].slice();
each(props,function(key,prop){
var val=arr[type==="object"?key:prop.idx];
if(val==null){
val=local[prop.idx];
}
local[prop.idx]=clamp(val,prop);
});
if(from){
ret=color(from(local));
ret[cache]=local;
return ret;
}else{
return color(local);
}
};
each(props,function(key,prop){
if(color.fn[key]){
return;
}
color.fn[key]=function(value){
var vtype=jQuery.type(value),
fn=(key==="alpha"?(this._hsla?"hsla":"rgba"):spaceName),
local=this[fn](),
cur=local[prop.idx],
match;
if(vtype==="undefined"){
return cur;
}
if(vtype==="function"){
value=value.call(this,cur);
vtype=jQuery.type(value);
}
if(value==null&&prop.empty){
return this;
}
if(vtype==="string"){
match=rplusequals.exec(value);
if(match){
value=cur+parseFloat(match[2])*(match[1]==="+"?1:-1);
}
}
local[prop.idx]=value;
return this[fn](local);
};
});
});
color.hook=function(hook){
var hooks=hook.split(" ");
each(hooks,function(i,hook){
jQuery.cssHooks[hook]={
set:function(elem,value){
var parsed,curElem,
backgroundColor="";
if(value!=="transparent"&&(jQuery.type(value)!=="string"||(parsed=stringParse(value)))){
value=color(parsed||value);
if(!support.rgba&&value._rgba[3]!==1){
curElem=hook==="backgroundColor"?elem.parentNode:elem;
while(
(backgroundColor===""||backgroundColor==="transparent")&&
curElem&&curElem.style
){
try{
backgroundColor=jQuery.css(curElem,"backgroundColor");
curElem=curElem.parentNode;
}catch(e){
}
}
value=value.blend(backgroundColor&&backgroundColor!=="transparent"?
backgroundColor:
"_default");
}
value=value.toRgbaString();
}
try{
elem.style[hook]=value;
}catch(e){
}
}
};
jQuery.fx.step[hook]=function(fx){
if(!fx.colorInit){
fx.start=color(fx.elem,hook);
fx.end=color(fx.end);
fx.colorInit=true;
}
jQuery.cssHooks[hook].set(fx.elem,fx.start.transition(fx.end,fx.pos));
};
});
};
color.hook(stepHooks);
jQuery.cssHooks.borderColor={
expand:function(value){
var expanded={};
each(["Top","Right","Bottom","Left"],function(i,part){
expanded["border"+part+"Color"]=value;
});
return expanded;
}
};
colors=jQuery.Color.names={
aqua:"#00ffff",
black:"#000000",
blue:"#0000ff",
fuchsia:"#ff00ff",
gray:"#808080",
green:"#008000",
lime:"#00ff00",
maroon:"#800000",
navy:"#000080",
olive:"#808000",
purple:"#800080",
red:"#ff0000",
silver:"#c0c0c0",
teal:"#008080",
white:"#ffffff",
yellow:"#ffff00",
transparent:[null,null,null,0],
_default:"#ffffff"
};
})(jQuery);
(function(){
var classAnimationActions=["add","remove","toggle"],
shorthandStyles={
border:1,
borderBottom:1,
borderColor:1,
borderLeft:1,
borderRight:1,
borderTop:1,
borderWidth:1,
margin:1,
padding:1
};
$.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(_,prop){
$.fx.step[prop]=function(fx){
if(fx.end!=="none"&&!fx.setAttr||fx.pos===1&&!fx.setAttr){
jQuery.style(fx.elem,prop,fx.end);
fx.setAttr=true;
}
};
});
function getElementStyles(elem){
var key,len,
style=elem.ownerDocument.defaultView?
elem.ownerDocument.defaultView.getComputedStyle(elem,null):
elem.currentStyle,
styles={};
if(style&&style.length&&style[0]&&style[style[0]]){
len=style.length;
while(len--){
key=style[len];
if(typeof style[key]==="string"){
styles[$.camelCase(key)]=style[key];
}
}
}else{
for(key in style){
if(typeof style[key]==="string"){
styles[key]=style[key];
}
}
}
return styles;
}
function styleDifference(oldStyle,newStyle){
var diff={},
name,value;
for(name in newStyle){
value=newStyle[name];
if(oldStyle[name]!==value){
if(!shorthandStyles[name]){
if($.fx.step[name]||!isNaN(parseFloat(value))){
diff[name]=value;
}
}
}
}
return diff;
}
if(!$.fn.addBack){
$.fn.addBack=function(selector){
return this.add(selector==null?
this.prevObject:this.prevObject.filter(selector)
);
};
}
$.effects.animateClass=function(value,duration,easing,callback){
var o=$.speed(duration,easing,callback);
return this.queue(function(){
var animated=$(this),
baseClass=animated.attr("class")||"",
applyClassChange,
allAnimations=o.children?animated.find("*").addBack():animated;
allAnimations=allAnimations.map(function(){
var el=$(this);
return{
el:el,
start:getElementStyles(this)
};
});
applyClassChange=function(){
$.each(classAnimationActions,function(i,action){
if(value[action]){
animated[action+"Class"](value[action]);
}
});
};
applyClassChange();
allAnimations=allAnimations.map(function(){
this.end=getElementStyles(this.el[0]);
this.diff=styleDifference(this.start,this.end);
return this;
});
animated.attr("class",baseClass);
allAnimations=allAnimations.map(function(){
var styleInfo=this,
dfd=$.Deferred(),
opts=$.extend({},o,{
queue:false,
complete:function(){
dfd.resolve(styleInfo);
}
});
this.el.animate(this.diff,opts);
return dfd.promise();
});
$.when.apply($,allAnimations.get()).done(function(){
applyClassChange();
$.each(arguments,function(){
var el=this.el;
$.each(this.diff,function(key){
el.css(key,"");
});
});
o.complete.call(animated[0]);
});
});
};
$.fn.extend({
addClass:(function(orig){
return function(classNames,speed,easing,callback){
return speed?
$.effects.animateClass.call(this,
{add:classNames},speed,easing,callback):
orig.apply(this,arguments);
};
})($.fn.addClass),
removeClass:(function(orig){
return function(classNames,speed,easing,callback){
return arguments.length>1?
$.effects.animateClass.call(this,
{remove:classNames},speed,easing,callback):
orig.apply(this,arguments);
};
})($.fn.removeClass),
toggleClass:(function(orig){
return function(classNames,force,speed,easing,callback){
if(typeof force==="boolean"||force===undefined){
if(!speed){
return orig.apply(this,arguments);
}else{
return $.effects.animateClass.call(this,
(force?{add:classNames}:{remove:classNames}),
speed,easing,callback);
}
}else{
return $.effects.animateClass.call(this,
{toggle:classNames},force,speed,easing);
}
};
})($.fn.toggleClass),
switchClass:function(remove,add,speed,easing,callback){
return $.effects.animateClass.call(this,{
add:add,
remove:remove
},speed,easing,callback);
}
});
})();
(function(){
$.extend($.effects,{
version:"1.11.4",
save:function(element,set){
for(var i=0;i<set.length;i++){
if(set[i]!==null){
element.data(dataSpace+set[i],element[0].style[set[i]]);
}
}
},
restore:function(element,set){
var val,i;
for(i=0;i<set.length;i++){
if(set[i]!==null){
val=element.data(dataSpace+set[i]);
if(val===undefined){
val="";
}
element.css(set[i],val);
}
}
},
setMode:function(el,mode){
if(mode==="toggle"){
mode=el.is(":hidden")?"show":"hide";
}
return mode;
},
getBaseline:function(origin,original){
var y,x;
switch(origin[0]){
case"top":y=0;break;
case"middle":y=0.5;break;
case"bottom":y=1;break;
default:y=origin[0]/original.height;
}
switch(origin[1]){
case"left":x=0;break;
case"center":x=0.5;break;
case"right":x=1;break;
default:x=origin[1]/original.width;
}
return{
x:x,
y:y
};
},
createWrapper:function(element){
if(element.parent().is(".ui-effects-wrapper")){
return element.parent();
}
var props={
width:element.outerWidth(true),
height:element.outerHeight(true),
"float":element.css("float")
},
wrapper=$("<div></div>")
.addClass("ui-effects-wrapper")
.css({
fontSize:"100%",
background:"transparent",
border:"none",
margin:0,
padding:0
}),
size={
width:element.width(),
height:element.height()
},
active=document.activeElement;
try{
active.id;
}catch(e){
active=document.body;
}
element.wrap(wrapper);
if(element[0]===active||$.contains(element[0],active)){
$(active).focus();
}
wrapper=element.parent();
if(element.css("position")==="static"){
wrapper.css({position:"relative"});
element.css({position:"relative"});
}else{
$.extend(props,{
position:element.css("position"),
zIndex:element.css("z-index")
});
$.each(["top","left","bottom","right"],function(i,pos){
props[pos]=element.css(pos);
if(isNaN(parseInt(props[pos],10))){
props[pos]="auto";
}
});
element.css({
position:"relative",
top:0,
left:0,
right:"auto",
bottom:"auto"
});
}
element.css(size);
return wrapper.css(props).show();
},
removeWrapper:function(element){
var active=document.activeElement;
if(element.parent().is(".ui-effects-wrapper")){
element.parent().replaceWith(element);
if(element[0]===active||$.contains(element[0],active)){
$(active).focus();
}
}
return element;
},
setTransition:function(element,list,factor,value){
value=value||{};
$.each(list,function(i,x){
var unit=element.cssUnit(x);
if(unit[0]>0){
value[x]=unit[0]*factor+unit[1];
}
});
return value;
}
});
function _normalizeArguments(effect,options,speed,callback){
if($.isPlainObject(effect)){
options=effect;
effect=effect.effect;
}
effect={effect:effect};
if(options==null){
options={};
}
if($.isFunction(options)){
callback=options;
speed=null;
options={};
}
if(typeof options==="number"||$.fx.speeds[options]){
callback=speed;
speed=options;
options={};
}
if($.isFunction(speed)){
callback=speed;
speed=null;
}
if(options){
$.extend(effect,options);
}
speed=speed||options.duration;
effect.duration=$.fx.off?0:
typeof speed==="number"?speed:
speed in $.fx.speeds?$.fx.speeds[speed]:
$.fx.speeds._default;
effect.complete=callback||options.complete;
return effect;
}
function standardAnimationOption(option){
if(!option||typeof option==="number"||$.fx.speeds[option]){
return true;
}
if(typeof option==="string"&&!$.effects.effect[option]){
return true;
}
if($.isFunction(option)){
return true;
}
if(typeof option==="object"&&!option.effect){
return true;
}
return false;
}
$.fn.extend({
effect:function(){
var args=_normalizeArguments.apply(this,arguments),
mode=args.mode,
queue=args.queue,
effectMethod=$.effects.effect[args.effect];
if($.fx.off||!effectMethod){
if(mode){
return this[mode](args.duration,args.complete);
}else{
return this.each(function(){
if(args.complete){
args.complete.call(this);
}
});
}
}
function run(next){
var elem=$(this),
complete=args.complete,
mode=args.mode;
function done(){
if($.isFunction(complete)){
complete.call(elem[0]);
}
if($.isFunction(next)){
next();
}
}
if(elem.is(":hidden")?mode==="hide":mode==="show"){
elem[mode]();
done();
}else{
effectMethod.call(elem[0],args,done);
}
}
return queue===false?this.each(run):this.queue(queue||"fx",run);
},
show:(function(orig){
return function(option){
if(standardAnimationOption(option)){
return orig.apply(this,arguments);
}else{
var args=_normalizeArguments.apply(this,arguments);
args.mode="show";
return this.effect.call(this,args);
}
};
})($.fn.show),
hide:(function(orig){
return function(option){
if(standardAnimationOption(option)){
return orig.apply(this,arguments);
}else{
var args=_normalizeArguments.apply(this,arguments);
args.mode="hide";
return this.effect.call(this,args);
}
};
})($.fn.hide),
toggle:(function(orig){
return function(option){
if(standardAnimationOption(option)||typeof option==="boolean"){
return orig.apply(this,arguments);
}else{
var args=_normalizeArguments.apply(this,arguments);
args.mode="toggle";
return this.effect.call(this,args);
}
};
})($.fn.toggle),
cssUnit:function(key){
var style=this.css(key),
val=[];
$.each(["em","px","%","pt"],function(i,unit){
if(style.indexOf(unit)>0){
val=[parseFloat(style),unit];
}
});
return val;
}
});
})();
(function(){
var baseEasings={};
$.each(["Quad","Cubic","Quart","Quint","Expo"],function(i,name){
baseEasings[name]=function(p){
return Math.pow(p,i+2);
};
});
$.extend(baseEasings,{
Sine:function(p){
return 1-Math.cos(p*Math.PI/2);
},
Circ:function(p){
return 1-Math.sqrt(1-p*p);
},
Elastic:function(p){
return p===0||p===1?p:
-Math.pow(2,8*(p-1))*Math.sin(((p-1)*80-7.5)*Math.PI/15);
},
Back:function(p){
return p*p*(3*p-2);
},
Bounce:function(p){
var pow2,
bounce=4;
while(p<((pow2=Math.pow(2,--bounce))-1)/11){}
return 1/Math.pow(4,3-bounce)-7.5625*Math.pow((pow2*3-2)/22-p,2);
}
});
$.each(baseEasings,function(name,easeIn){
$.easing["easeIn"+name]=easeIn;
$.easing["easeOut"+name]=function(p){
return 1-easeIn(1-p);
};
$.easing["easeInOut"+name]=function(p){
return p<0.5?
easeIn(p*2)/2:
1-easeIn(p*-2+2)/2;
};
});
})();
return $.effects;
}));


/* ../plugins-dist/mediabox/javascript/jquery.colorbox.js?1491570413 */

(function($,document,window){
var
defaults={
html:false,
photo:false,
iframe:false,
inline:false,
transition:"elastic",
speed:300,
fadeOut:300,
width:false,
initialWidth:"600",
innerWidth:false,
maxWidth:false,
minWidth:false,
height:false,
initialHeight:"450",
innerHeight:false,
maxHeight:false,
minHeight:false,
scalePhotos:true,
scrolling:true,
opacity:0.9,
preloading:true,
className:false,
overlayClose:true,
escKey:true,
arrowKey:true,
top:false,
bottom:false,
left:false,
right:false,
fixed:false,
data:undefined,
closeButton:true,
fastIframe:true,
open:false,
reposition:true,
loop:true,
slideshow:false,
slideshowAuto:true,
slideshowSpeed:2500,
slideshowStart:"start slideshow",
slideshowStop:"stop slideshow",
photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
retinaImage:false,
retinaUrl:false,
retinaSuffix:'@2x.$1',
current:"image {current} of {total}",
previous:"previous",
next:"next",
close:"close",
xhrError:"This content failed to load.",
imgError:"This image failed to load.",
returnFocus:true,
trapFocus:true,
onOpen:false,
onLoad:false,
onComplete:false,
onCleanup:false,
onClosed:false,
rel:function(){
return this.rel;
},
href:function(){
return $(this).attr('href');
},
title:function(){
return this.title;
},
createImg:function(){
var img=new Image();
var attrs=$(this).data('cbox-img-attrs');
if(typeof attrs==='object'){
$.each(attrs,function(key,val){
img[key]=val;
});
}
return img;
},
createIframe:function(){
var iframe=document.createElement('iframe');
var attrs=$(this).data('cbox-iframe-attrs');
if(typeof attrs==='object'){
$.each(attrs,function(key,val){
iframe[key]=val;
});
}
if('frameBorder'in iframe){
iframe.frameBorder=0;
}
if('allowTransparency'in iframe){
iframe.allowTransparency="true";
}
iframe.name=(new Date()).getTime();
iframe.allowFullscreen=true;
return iframe;
}
},
colorbox='colorbox',
colorbox_class='box_mediabox box_modalbox',
prefix='cbox',
boxElement=prefix+'Element',
event_open=prefix+'_open',
event_load=prefix+'_load',
event_complete=prefix+'_complete',
event_cleanup=prefix+'_cleanup',
event_closed=prefix+'_closed',
event_purge=prefix+'_purge',
$overlay,
$box,
$wrap,
$content,
$topBorder,
$leftBorder,
$rightBorder,
$bottomBorder,
$related,
$window,
$loaded,
$loadingBay,
$loadingOverlay,
$title,
$current,
$slideshow,
$next,
$prev,
$close,
$groupControls,
$events=$('<a/>'),
settings,
interfaceHeight,
interfaceWidth,
loadedHeight,
loadedWidth,
index,
photo,
open,
active,
closing,
loadingTimer,
publicMethod,
div="div",
requests=0,
previousCSS={},
init;
function $tag(tag,id,css){
var element=document.createElement(tag);
if(id){
element.id=prefix+id;
}
if(css){
element.style.cssText=css;
}
return $(element);
}
function winheight(){
return window.innerHeight?window.innerHeight:$(window).height();
}
function Settings(element,options){
if(options!==Object(options)){
options={};
}
this.cache={};
this.el=element;
this.value=function(key){
var dataAttr;
if(this.cache[key]===undefined){
dataAttr=$(this.el).attr('data-cbox-'+key);
if(dataAttr!==undefined){
this.cache[key]=dataAttr;
}else if(options[key]!==undefined){
this.cache[key]=options[key];
}else if(defaults[key]!==undefined){
this.cache[key]=defaults[key];
}
}
return this.cache[key];
};
this.get=function(key){
var value=this.value(key);
return $.isFunction(value)?value.call(this.el,this):value;
};
}
function getIndex(increment){
var
max=$related.length,
newIndex=(index+increment)%max;
return(newIndex<0)?max+newIndex:newIndex;
}
function setSize(size,dimension){
return Math.round((/%/.test(size)?((dimension==='x'?$window.width():winheight())/100):1)*parseInt(size,10));
}
function isImage(settings,url){
return settings.get('photo')||settings.get('photoRegex').test(url);
}
function retinaUrl(settings,url){
return settings.get('retinaUrl')&&window.devicePixelRatio>1?url.replace(settings.get('photoRegex'),settings.get('retinaSuffix')):url;
}
function trapFocus(e){
if('contains'in $box[0]&&!$box[0].contains(e.target)&&e.target!==$overlay[0]){
e.stopPropagation();
$box.focus();
}
}
function setClass(str){
if(setClass.str!==str){
$box.add($overlay).removeClass(setClass.str).addClass(str);
setClass.str=str;
}
}
function getRelated(rel){
index=0;
if(rel&&rel!==false&&rel!=='nofollow'){
$related=$('.'+boxElement).filter(function(){
var options=$.data(this,colorbox);
var settings=new Settings(this,options);
return(settings.get('rel')===rel);
});
index=$related.index(settings.el);
if(index===-1){
$related=$related.add(settings.el);
index=$related.length-1;
}
}else{
$related=$(settings.el);
}
}
function trigger(event){
$(document).trigger(event);
$events.triggerHandler(event);
}
var slideshow=(function(){
var active,
className=prefix+"Slideshow_",
click="click."+prefix,
timeOut;
function clear(){
clearTimeout(timeOut);
}
function set(){
if(settings.get('loop')||$related[index+1]){
clear();
timeOut=setTimeout(publicMethod.next,settings.get('slideshowSpeed'));
}
}
function start(){
$slideshow
.html(settings.get('slideshowStop'))
.unbind(click)
.one(click,stop);
$events
.bind(event_complete,set)
.bind(event_load,clear);
$box.removeClass(className+"off").addClass(className+"on");
}
function stop(){
clear();
$events
.unbind(event_complete,set)
.unbind(event_load,clear);
$slideshow
.html(settings.get('slideshowStart'))
.unbind(click)
.one(click,function(){
publicMethod.next();
start();
});
$box.removeClass(className+"on").addClass(className+"off");
}
function reset(){
active=false;
$slideshow.hide();
clear();
$events
.unbind(event_complete,set)
.unbind(event_load,clear);
$box.removeClass(className+"off "+className+"on");
}
return function(){
if(active){
if(!settings.get('slideshow')){
$events.unbind(event_cleanup,reset);
reset();
}
}else{
if(settings.get('slideshow')&&$related[1]){
active=true;
$events.one(event_cleanup,reset);
if(settings.get('slideshowAuto')){
start();
}else{
stop();
}
$slideshow.show();
}
}
};
}());
function launch(element){
var options;
if(!closing){
options=$(element).data(colorbox);
settings=new Settings(element,options);
getRelated(settings.get('rel'));
if(!open){
open=active=true;
setClass(settings.get('className'));
$box.css({visibility:'hidden',display:'block',opacity:''});
$loaded=$tag(div,'LoadedContent','width:0; height:0; overflow:hidden; visibility:hidden');
$content.css({width:'',height:''}).append($loaded);
interfaceHeight=$topBorder.height()+$bottomBorder.height()+$content.outerHeight(true)-$content.height();
interfaceWidth=$leftBorder.width()+$rightBorder.width()+$content.outerWidth(true)-$content.width();
loadedHeight=$loaded.outerHeight(true);
loadedWidth=$loaded.outerWidth(true);
var initialWidth=setSize(settings.get('initialWidth'),'x');
var initialHeight=setSize(settings.get('initialHeight'),'y');
var maxWidth=settings.get('maxWidth');
var maxHeight=settings.get('maxHeight');
settings.w=Math.max((maxWidth!==false?Math.min(initialWidth,setSize(maxWidth,'x')):initialWidth)-loadedWidth-interfaceWidth,0);
settings.h=Math.max((maxHeight!==false?Math.min(initialHeight,setSize(maxHeight,'y')):initialHeight)-loadedHeight-interfaceHeight,0);
$loaded.css({width:'',height:settings.h});
publicMethod.position();
trigger(event_open);
settings.get('onOpen');
$groupControls.add($title).hide();
$box.focus();
if(settings.get('trapFocus')){
if(document.addEventListener){
document.addEventListener('focus',trapFocus,true);
$events.one(event_closed,function(){
document.removeEventListener('focus',trapFocus,true);
});
}
}
if(settings.get('returnFocus')){
$events.one(event_closed,function(){
$(settings.el).focus();
});
}
}
var opacity=parseFloat(settings.get('opacity'));
$overlay.css({
opacity:opacity===opacity?opacity:'',
cursor:settings.get('overlayClose')?'pointer':'',
visibility:'visible'
}).show();
if(settings.get('closeButton')){
$close.html(settings.get('close')).appendTo($content);
}else{
$close.appendTo('<div/>');
}
load();
}
}
function appendHTML(){
if(!$box){
init=false;
$window=$(window);
$box=$tag(div).attr({
id:colorbox,
'class':($.support.opacity===false?prefix+'IE ':'')+colorbox_class,
role:'dialog',
tabindex:'-1'
}).hide();
$overlay=$tag(div,"Overlay").hide();
$loadingOverlay=$([$tag(div,"LoadingOverlay")[0],$tag(div,"LoadingGraphic")[0]]);
$wrap=$tag(div,"Wrapper");
$content=$tag(div,"Content").append(
$title=$tag(div,"Title"),
$current=$tag(div,"Current"),
$prev=$('<button type="button"/>').attr({id:prefix+'Previous'}),
$next=$('<button type="button"/>').attr({id:prefix+'Next'}),
$slideshow=$tag('button',"Slideshow"),
$loadingOverlay
);
$close=$('<button type="button"/>').attr({id:prefix+'Close'});
$wrap.append(
$tag(div).append(
$tag(div,"TopLeft"),
$topBorder=$tag(div,"TopCenter"),
$tag(div,"TopRight")
),
$tag(div,false,'clear:left').append(
$leftBorder=$tag(div,"MiddleLeft"),
$content,
$rightBorder=$tag(div,"MiddleRight")
),
$tag(div,false,'clear:left').append(
$tag(div,"BottomLeft"),
$bottomBorder=$tag(div,"BottomCenter"),
$tag(div,"BottomRight")
)
).find('div div').css({'float':'left'});
$loadingBay=$tag(div,false,'position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;');
$groupControls=$next.add($prev).add($current).add($slideshow);
}
if(document.body&&!$box.parent().length){
$(document.body).append($overlay,$box.append($wrap,$loadingBay));
}
}
function addBindings(){
function clickHandler(e){
if(!(e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey)){
e.preventDefault();
launch(this);
}
}
if($box){
if(!init){
init=true;
$next.click(function(){
publicMethod.next();
});
$prev.click(function(){
publicMethod.prev();
});
$close.click(function(){
publicMethod.close();
});
$overlay.click(function(){
if(settings.get('overlayClose')){
publicMethod.close();
}
});
$(document).bind('keydown.'+prefix,function(e){
var key=e.keyCode;
if(open&&settings.get('escKey')&&key===27){
e.preventDefault();
publicMethod.close();
}
if(open&&settings.get('arrowKey')&&$related[1]&&!e.altKey){
if(key===37){
e.preventDefault();
$prev.click();
}else if(key===39){
e.preventDefault();
$next.click();
}
}
});
if($.isFunction($.fn.on)){
$(document).on('click.'+prefix,'.'+boxElement,clickHandler);
}else{
$('.'+boxElement).live('click.'+prefix,clickHandler);
}
}
return true;
}
return false;
}
if($[colorbox]){
return;
}
$(appendHTML);
publicMethod=$.fn[colorbox]=$[colorbox]=function(options,callback){
var settings;
var $obj=this;
options=options||{};
if($.isFunction($obj)){
$obj=$('<a/>');
options.open=true;
}
if(!$obj[0]){
return $obj;
}
appendHTML();
if(addBindings()){
if(callback){
options.onComplete=callback;
}
$obj.each(function(){
var old=$.data(this,colorbox)||{};
$.data(this,colorbox,$.extend(old,options));
var eltclass=$(this).attr('class');
if(eltclass){
if(eltclass.indexOf("boxWidth-")!==-1){
var w=eltclass.match(/boxWidth-([^\s'">]*)/);
w=w[1].replace(/pc/,'%');
$.data(this,colorbox,$.extend($.data(this,colorbox),{width:w}));
}
if(eltclass.indexOf("boxHeight-")!==-1){
var h=eltclass.match(/boxHeight-([^\s'">]*)/);
h=h[1].replace(/pc/,'%');
$.data(this,colorbox,$.extend($.data(this,colorbox),{height:h}));
}
if(eltclass.indexOf("boxIframe")!==-1){
$.data(this,colorbox,$.extend($.data(this,colorbox),{iframe:true}));
}
if(eltclass.indexOf("boxInline")!==-1){
$.data(this,colorbox,$.extend($.data(this,colorbox),{inline:true}));
}
if(eltclass.indexOf("boxSlideshow_off")!==-1){
$.data(this,colorbox,$.extend($.data(this,colorbox),{slideshow:false}));
}
}
}).addClass(boxElement);
settings=new Settings($obj[0],options);
if(settings.get('open')){
launch($obj[0]);
}
}
return $obj;
};
publicMethod.position=function(speed,loadedCallback){
var
css,
top=0,
left=0,
offset=$box.offset(),
scrollTop,
scrollLeft;
$window.unbind('resize.'+prefix);
$box.css({top:-9e4,left:-9e4});
scrollTop=$window.scrollTop();
scrollLeft=$window.scrollLeft();
if(settings.get('fixed')){
offset.top-=scrollTop;
offset.left-=scrollLeft;
$box.css({position:'fixed'});
}else{
top=scrollTop;
left=scrollLeft;
$box.css({position:'absolute'});
}
if(settings.get('right')!==false){
left+=Math.max($window.width()-settings.w-loadedWidth-interfaceWidth-setSize(settings.get('right'),'x'),0);
}else if(settings.get('left')!==false){
left+=setSize(settings.get('left'),'x');
}else{
left+=Math.round(Math.max($window.width()-settings.w-loadedWidth-interfaceWidth,0)/2);
}
if(settings.get('bottom')!==false){
top+=Math.max(winheight()-settings.h-loadedHeight-interfaceHeight-setSize(settings.get('bottom'),'y'),0);
}else if(settings.get('top')!==false){
top+=setSize(settings.get('top'),'y');
}else{
top+=Math.round(Math.max(winheight()-settings.h-loadedHeight-interfaceHeight,0)/2);
}
$box.css({top:offset.top,left:offset.left,visibility:'visible'});
$wrap[0].style.width=$wrap[0].style.height="9999px";
function modalDimensions(){
$topBorder[0].style.width=$bottomBorder[0].style.width=$content[0].style.width=(parseInt($box[0].style.width,10)-interfaceWidth)+'px';
$content[0].style.height=$leftBorder[0].style.height=$rightBorder[0].style.height=(parseInt($box[0].style.height,10)-interfaceHeight)+'px';
}
css={width:settings.w+loadedWidth+interfaceWidth,height:settings.h+loadedHeight+interfaceHeight,top:top,left:left};
if(speed){
var tempSpeed=0;
$.each(css,function(i){
if(css[i]!==previousCSS[i]){
tempSpeed=speed;
return;
}
});
speed=tempSpeed;
}
previousCSS=css;
if(!speed){
$box.css(css);
}
$box.dequeue().animate(css,{
duration:speed||0,
complete:function(){
modalDimensions();
active=false;
$wrap[0].style.width=(settings.w+loadedWidth+interfaceWidth)+"px";
$wrap[0].style.height=(settings.h+loadedHeight+interfaceHeight)+"px";
if(settings.get('reposition')){
setTimeout(function(){
$window.bind('resize.'+prefix,publicMethod.position);
},1);
}
if($.isFunction(loadedCallback)){
loadedCallback();
}
},
step:modalDimensions
});
};
publicMethod.resize=function(options){
var scrolltop;
if(open){
options=options||{};
if(options.width){
settings.w=setSize(options.width,'x')-loadedWidth-interfaceWidth;
}
if(options.innerWidth){
settings.w=setSize(options.innerWidth,'x');
}
$loaded.css({width:settings.w});
if(options.height){
settings.h=setSize(options.height,'y')-loadedHeight-interfaceHeight;
}
if(options.innerHeight){
settings.h=setSize(options.innerHeight,'y');
}
if(!options.innerHeight&&!options.height){
scrolltop=$loaded.scrollTop();
$loaded.css({height:"auto"});
settings.h=$loaded.height();
}
$loaded.css({height:settings.h});
if(scrolltop){
$loaded.scrollTop(scrolltop);
}
publicMethod.position(settings.get('transition')==="none"?0:settings.get('speed'));
}
};
publicMethod.prep=function(object){
if(!open){
return;
}
var callback,speed=settings.get('transition')==="none"?0:settings.get('speed');
$loaded.remove();
$loaded=$tag(div,'LoadedContent').append(object);
function getWidth(){
settings.w=settings.w||$loaded.width();
settings.w=settings.minw&&settings.minw>settings.w?settings.minw:settings.w;
settings.w=settings.mw&&settings.mw<settings.w?settings.mw:settings.w;
return settings.w;
}
function getHeight(){
settings.h=settings.h||$loaded.height();
settings.h=settings.minh&&settings.minh>settings.h?settings.minh:settings.h;
settings.h=settings.mh&&settings.mh<settings.h?settings.mh:settings.h;
return settings.h;
}
$loaded.hide()
.appendTo($loadingBay.show())
.css({width:getWidth(),overflow:settings.get('scrolling')?'auto':'hidden'})
.css({height:getHeight()})
.prependTo($content);
$loadingBay.hide();
$(photo).css({'float':'none'});
setClass(settings.get('className'));
callback=function(){
var total=$related.length,
iframe,
complete;
if(!open){
return;
}
function removeFilter(){
if($.support.opacity===false){
$box[0].style.removeAttribute('filter');
}
}
complete=function(){
clearTimeout(loadingTimer);
$loadingOverlay.hide();
trigger(event_complete);
settings.get('onComplete');
};
$title.html(settings.get('title')).show();
$loaded.show();
if(total>1){
if(typeof settings.get('current')==="string"){
$current.html(settings.get('current').replace('{current}',index+1).replace('{total}',total)).show();
}
$next[(settings.get('loop')||index<total-1)?"show":"hide"]().html(settings.get('next'));
$prev[(settings.get('loop')||index)?"show":"hide"]().html(settings.get('previous'));
slideshow();
if(settings.get('preloading')){
$.each([getIndex(-1),getIndex(1)],function(){
var img,
i=$related[this],
settings=new Settings(i,$.data(i,colorbox)),
src=settings.get('href');
if(src&&isImage(settings,src)){
src=retinaUrl(settings,src);
img=document.createElement('img');
img.src=src;
}
});
}
}else{
$groupControls.hide();
}
if(settings.get('iframe')){
iframe=settings.get('createIframe');
if(!settings.get('scrolling')){
iframe.scrolling="no";
}
$(iframe)
.attr({
src:settings.get('href'),
'class':prefix+'Iframe'
})
.one('load',complete)
.appendTo($loaded);
$events.one(event_purge,function(){
iframe.src="//about:blank";
});
if(settings.get('fastIframe')){
$(iframe).trigger('load');
}
}else{
complete();
}
if(settings.get('transition')==='fade'){
$box.fadeTo(speed,1,removeFilter);
}else{
removeFilter();
}
};
if(settings.get('transition')==='fade'){
$box.fadeTo(speed,0,function(){
publicMethod.position(0,callback);
});
}else{
publicMethod.position(speed,callback);
}
};
function load(){
var href,setResize,prep=publicMethod.prep,$inline,request=++requests;
active=true;
photo=false;
trigger(event_purge);
trigger(event_load);
settings.get('onLoad');
settings.h=settings.get('height')?
setSize(settings.get('height'),'y')-loadedHeight-interfaceHeight:
settings.get('innerHeight')&&setSize(settings.get('innerHeight'),'y');
settings.w=settings.get('width')?
setSize(settings.get('width'),'x')-loadedWidth-interfaceWidth:
settings.get('innerWidth')&&setSize(settings.get('innerWidth'),'x');
settings.mw=settings.w;
settings.mh=settings.h;
settings.minw=settings.w;
settings.minh=settings.h;
if(settings.get('maxWidth')){
settings.mw=setSize(settings.get('maxWidth'),'x')-loadedWidth-interfaceWidth;
settings.mw=settings.w&&settings.w<settings.mw?settings.w:settings.mw;
}
if(settings.get('minWidth')){
settings.minw=setSize(settings.get('minWidth'),'x')-loadedWidth-interfaceWidth;
settings.minw=settings.w&&settings.w>settings.minw?settings.w:settings.minw;
}
if(settings.get('maxHeight')){
settings.mh=setSize(settings.get('maxHeight'),'y')-loadedHeight-interfaceHeight;
settings.mh=settings.h&&settings.h<settings.mh?settings.h:settings.mh;
}
if(settings.get('minHeight')){
settings.minh=setSize(settings.get('minHeight'),'y')-loadedHeight-interfaceHeight;
settings.minh=settings.h&&settings.h>settings.minh?settings.h:settings.minh;
}
href=settings.get('href');
loadingTimer=setTimeout(function(){
$loadingOverlay.show();
},100);
if(settings.get('inline')){
var $target=$(href);
$inline=$('<div>').hide().insertBefore($target);
$events.one(event_purge,function(){
$inline.replaceWith($target);
});
prep($target);
}else if(settings.get('iframe')){
prep(" ");
}else if(settings.get('html')){
prep(settings.get('html'));
}else if(isImage(settings,href)){
href=retinaUrl(settings,href);
photo=settings.get('createImg');
$(photo)
.addClass(prefix+'Photo')
.bind('error.'+prefix,function(){
prep($tag(div,'Error').html(settings.get('imgError')));
})
.one('load',function(){
if(request!==requests){
return;
}
setTimeout(function(){
var percent;
if(settings.get('retinaImage')&&window.devicePixelRatio>1){
photo.height=photo.height/window.devicePixelRatio;
photo.width=photo.width/window.devicePixelRatio;
}
if(settings.get('scalePhotos')){
setResize=function(){
photo.height-=photo.height*percent;
photo.width-=photo.width*percent;
};
if(settings.mw&&photo.width>settings.mw){
percent=(photo.width-settings.mw)/photo.width;
setResize();
}
if(settings.mh&&photo.height>settings.mh){
percent=(photo.height-settings.mh)/photo.height;
setResize();
}
}
if(settings.h){
photo.style.marginTop=Math.max(settings.mh-photo.height,0)/2+'px';
}
if($related[1]&&(settings.get('loop')||$related[index+1])){
photo.style.cursor='pointer';
$(photo).bind('click.'+prefix,function(){
publicMethod.next();
});
}
photo.style.width=photo.width+'px';
photo.style.height=photo.height+'px';
prep(photo);
},1);
});
photo.src=href;
}else if(href){
$loadingBay.load(href,settings.get('data'),function(data,status){
if(request===requests){
prep(status==='error'?$tag(div,'Error').html(settings.get('xhrError')):$(this).contents());
}
});
}
}
publicMethod.next=function(){
if(!active&&$related[1]&&(settings.get('loop')||$related[index+1])){
index=getIndex(1);
launch($related[index]);
}
};
publicMethod.prev=function(){
if(!active&&$related[1]&&(settings.get('loop')||index)){
index=getIndex(-1);
launch($related[index]);
}
};
publicMethod.close=function(){
if(open&&!closing){
closing=true;
open=false;
trigger(event_cleanup);
settings.get('onCleanup');
$window.unbind('.'+prefix);
$overlay.fadeTo(settings.get('fadeOut')||0,0);
$box.stop().fadeTo(settings.get('fadeOut')||0,0,function(){
$box.hide();
$overlay.hide();
trigger(event_purge);
$loaded.remove();
setTimeout(function(){
closing=false;
trigger(event_closed);
settings.get('onClosed');
},1);
});
}
};
publicMethod.remove=function(){
if(!$box){return;}
$box.stop();
$[colorbox].close();
$box.stop(false,true).remove();
$overlay.remove();
closing=false;
$box=null;
$('.'+boxElement)
.removeData(colorbox)
.removeClass(boxElement);
$(document).unbind('click.'+prefix).unbind('keydown.'+prefix);
};
publicMethod.element=function(){
return $(settings.el);
};
publicMethod.settings=defaults;
}(jQuery,document,window));


/* ../plugins-dist/mediabox/javascript/spip.mediabox.js?1491570413 */

var mediaboxInit=function(){
var options={
transition:box_settings.trans,
speed:box_settings.speed,
maxWidth:box_settings.maxW,
maxHeight:box_settings.maxH,
minWidth:box_settings.minW,
minHeight:box_settings.minH,
opacity:box_settings.opa,
slideshowSpeed:box_settings.ssSpeed,
slideshowStart:box_settings.str_ssStart,
slideshowStop:box_settings.str_ssStop,
current:box_settings.str_cur,
previous:box_settings.str_prev,
next:box_settings.str_next,
close:box_settings.str_close,
splash_url:box_settings.splash_url
};
if(box_settings.sel_g){
jQuery(box_settings.sel_g,this).not('.hasbox,#colorbox')
.attr("onclick","")
.colorbox(jQuery.extend({},options,{rel:'galerieauto',slideshow:true,slideshowAuto:false}))
.addClass("hasbox");
}
if(box_settings.tt_img){
jQuery("a[type=\'image/jpeg\'],a[type=\'image/png\'],a[type=\'image/gif\']",this).not('.hasbox')
.attr("onclick","")
.colorbox(options)
.addClass("hasbox")
;
}
if(box_settings.sel_c){
jQuery(box_settings.sel_c).not('.hasbox')
.colorbox(jQuery.extend({},options,{slideshow:true,slideshowAuto:false}))
.addClass("hasbox")
;
}
};
if(typeof(box_settings)!='undefined')
(function($){if(typeof onAjaxLoad=="function")onAjaxLoad(mediaboxInit);$(mediaboxInit);})(jQuery);
;(function($){
$.fn.mediabox=function(options){
var cbox_options={
overlayClose:true,
iframe:false,
maxWidth:box_settings.maxW,
maxHeight:box_settings.maxH,
minWidth:box_settings.minW,
minHeight:box_settings.minH,
opacity:box_settings.opa,
slideshowStart:box_settings.str_ssStart,
slideshowStop:box_settings.str_ssStop,
current:box_settings.str_cur,
previous:box_settings.str_prev,
next:box_settings.str_next,
close:box_settings.str_close,
onOpen:(options&&options.onOpen)||null,
onComplete:(options&&options.onShow)||null,
onClosed:(options&&options.onClose)||null
};
if(!this.length)
return $.colorbox($.extend(cbox_options,options));
else
return this.colorbox($.extend(cbox_options,options));
};
$.mediaboxClose=function(){$.fn.colorbox.close();};
$.modalbox=function(href,options){$.fn.mediabox($.extend({href:href,inline:href.match(/^#/)?true:false,overlayClose:true},options));};
$.modalboxload=function(url,options){$.modalbox(url,options);};
$.modalboxclose=$.mediaboxClose;
})(jQuery);


/* ../plugins-dist/porte_plume/javascript/jquery.markitup_pour_spip.js */

;(function($){
$.fn.markItUp=function(settings,extraSettings){
var method,params,options,ctrlKey,shiftKey,altKey;ctrlKey=shiftKey=altKey=false;
markitup_prompt=false;
if(typeof settings=='string'){
method=settings;
params=extraSettings;
}
options={id:'',
nameSpace:'',
root:'',
lang:'',
previewHandler:false,
previewInWindow:'',
previewInElement:'',
previewAutoRefresh:true,
previewPosition:'after',
previewTemplatePath:'~/templates/preview.html',
previewParser:false,
previewParserPath:'',
previewParserVar:'data',
previewParserAjaxType:'POST',
resizeHandle:true,
beforeInsert:'',
afterInsert:'',
onEnter:{},
onShiftEnter:{},
onCtrlEnter:{},
onTab:{},
markupSet:[{}]
};
$.extend(options,settings,extraSettings);
if(!options.root){
$('script').each(function(a,tag){
miuScript=$(tag).get(0).src.match(/(.*)jquery\.markitup(\.pack)?\.js$/);
if(miuScript!==null){
options.root=miuScript[1];
}
});
}
var uaMatch=function(ua){
ua=ua.toLowerCase();
var match=/(chrome)[ \/]([\w.]+)/.exec(ua)||/(webkit)[ \/]([\w.]+)/.exec(ua)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)||/(msie) ([\w.]+)/.exec(ua)||
ua.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)||
[];
return{
browser:match[1]||"",
version:match[2]||"0"
};
};
var matched=uaMatch(navigator.userAgent);
var browser={};
if(matched.browser){
browser[matched.browser]=true;
browser.version=matched.version;
}
if(browser.chrome){
browser.webkit=true;
}else if(browser.webkit){
browser.safari=true;
}
return this.each(function(){
var $$,textarea,levels,scrollPosition,caretPosition,
clicked,hash,header,footer,previewWindow,template,iFrame,abort,
before,after;
$$=$(this);
textarea=this;
levels=[];
abort=false;
scrollPosition=caretPosition=0;
caretOffset=-1;
options.previewParserPath=localize(options.previewParserPath);
options.previewTemplatePath=localize(options.previewTemplatePath);
if(method){
switch(method){
case'remove':
remove();
break;
case'insert':
markup(params);
break;
default:
$.error('Method '+method+' does not exist on jQuery.markItUp');
}
return;
}
function localize(data,inText){
if(inText){
return data.replace(/("|')~\//g,"$1"+options.root);
}
return data.replace(/^~\//,options.root);
}
function init(){
id='';nameSpace='';
if(options.id){
id='id="'+options.id+'"';
}else if($$.attr("id")){
id='id="markItUp'+($$.attr("id").substr(0,1).toUpperCase())+($$.attr("id").substr(1))+'"';
}
if(options.nameSpace){
nameSpace='class="'+options.nameSpace+'"';
}
currentScrollPosition=$$.scrollTop();
$$.wrap('<div '+nameSpace+'></div>');
$$.wrap('<div '+id+' class="markItUp"></div>');
$$.wrap('<div class="markItUpContainer"></div>');
$$.addClass("markItUpEditor");
$$.scrollTop(currentScrollPosition);
header=$('<div class="markItUpHeader"></div>').insertBefore($$);
$(dropMenus(options.markupSet)).appendTo(header);
$(header).find("li.markItUpDropMenu ul:empty").parent().remove();
footer=$('<div class="markItUpFooter"></div>').insertAfter($$);
if(options.resizeHandle===true&&browser.safari!==true){
resizeHandle=$('<div class="markItUpResizeHandle"></div>')
.insertAfter($$)
.bind("mousedown.markItUp",function(e){
var h=$$.height(),y=e.clientY,mouseMove,mouseUp;
mouseMove=function(e){
$$.css("height",Math.max(20,e.clientY+h-y)+"px");
return false;
};
mouseUp=function(e){
$("html").unbind("mousemove.markItUp",mouseMove).unbind("mouseup.markItUp",mouseUp);
return false;
};
$("html").bind("mousemove.markItUp",mouseMove).bind("mouseup.markItUp",mouseUp);
});
footer.append(resizeHandle);
}
$$.bind('keydown.markItUp',keyPressed).bind('keyup',keyPressed);
$$.bind("insertion.markItUp",function(e,settings){
if(settings.target!==false){
get();
}
if(textarea===$.markItUp.focused){
markup(settings);
}
});
$$.bind('focus.markItUp',function(){
$.markItUp.focused=this;
});
if(options.previewInElement){
refreshPreview();
}
}
function dropMenus(markupSet){
var ul=$('<ul></ul>'),i=0;
var lang=($$.attr('lang')||options.lang);
$('li:hover > ul',ul).css('display','block');
$.each(markupSet,function(){
var button=this,t='',title,li,j;
if((!lang||!button.lang||($.inArray(lang,button.lang)!=-1))
&&(!button.lang_not||($.inArray(lang,button.lang_not)==-1))){
button.title?title=(button.key)?(button.title||'')+' [Ctrl+'+button.key+']':(button.title||''):title=(button.key)?(button.name||'')+' [Ctrl+'+button.key+']':(button.name||'');
key=(button.key)?'accesskey="'+button.key+'"':'';
if(button.separator){
li=$('<li class="markItUpSeparator">'+(button.separator||'')+'</li>').appendTo(ul);
}else{
i++;
for(j=levels.length-1;j>=0;j--){
t+=levels[j]+"-";
}
li=$('<li class="markItUpButton markItUpButton'+t+(i)+' '+(button.className||'')+'"><a href="#" '+key+' title="'+title+'"><em>'+(button.name||'')+'</em></a></li>')
.bind("contextmenu.markItUp",function(){
return false;
}).bind('click.markItUp',function(e){
e.preventDefault();
}).bind("focusin.markItUp",function(){
$$.focus();
}).bind('mouseup',function(e){
if(button.call){
eval(button.call)(e);
}
setTimeout(function(){markup(button)},1);
return false;
}).bind('mouseenter.markItUp',function(){
$('> ul',this).show();
$(document).one('click',function(){
$('ul ul',header).hide();
}
);
}).bind('mouseleave.markItUp',function(){
$('> ul',this).hide();
}).appendTo(ul);
if(button.dropMenu){
levels.push(i);
$(li).addClass('markItUpDropMenu').append(dropMenus(button.dropMenu));
}
}
}
});
levels.pop();
return ul;
}
function magicMarkups(string){
if(string){
string=string.toString();
string=string.replace(/\(\!\(([\s\S]*?)\)\!\)/g,
function(x,a){
var b=a.split('|!|');
if(altKey===true){
return(b[1]!==undefined)?b[1]:b[0];
}else{
return(b[1]===undefined)?"":b[0];
}
}
);
string=string.replace(/\[\!\[([\s\S]*?)\]\!\]/g,
function(x,a){
var b=a.split(':!:');
if(abort===true){
return false;
}
markitup_prompt=true;
value=prompt(b[0],(b[1])?b[1]:'');
if(value===null){
abort=true;
}
setTimeout(function(){markitup_prompt=false;},500);
return value;
}
);
return string;
}
return"";
}
function prepare(action){
if($.isFunction(action)){
action=action(hash);
}
return magicMarkups(action);
}
function build(string){
var openWith=prepare(clicked.openWith);
var placeHolder=prepare(clicked.placeHolder);
var replaceWith=prepare(clicked.replaceWith);
var closeWith=prepare(clicked.closeWith);
var openBlockWith=prepare(clicked.openBlockWith);
var closeBlockWith=prepare(clicked.closeBlockWith);
var multiline=clicked.multiline;
if(replaceWith!==""){
block=openWith+replaceWith+closeWith;
}else if(selection===''&&placeHolder!==''){
block=openWith+placeHolder+closeWith;
}else if(multiline===true){
string=string||selection;
var lines=[string],blocks=[];
if(multiline===true){
lines=string.split(/\r?\n/);
}
for(var l=0;l<lines.length;l++){
line=lines[l];
var trailingSpaces;
if(trailingSpaces=line.match(/ *$/)){
blocks.push(openWith+line.replace(/ *$/g,'')+closeWith+trailingSpaces);
}else{
blocks.push(openWith+line+closeWith);
}
}
block=blocks.join("\n");
}else{
block=openWith+(string||selection)+closeWith;
}
block=openBlockWith+block+closeBlockWith;
return{block:block,
openBlockWith:openBlockWith,
openWith:openWith,
replaceWith:replaceWith,
placeHolder:placeHolder,
closeWith:closeWith,
closeBlockWith:closeBlockWith
};
}
function selectWord(){
selectionBeforeAfter(/\s|[.,;:!¡?¿()]/);
selectionSave();
}
function selectLine(){
selectionBeforeAfter(/\r?\n/);
selectionSave();
}
function selectionRemoveLast(pattern){
if(!pattern)pattern=/\s/;
last=selection[selection.length-1];
if(last&&last.match(pattern)){
set(caretPosition,selection.length-1);
get();
$.extend(hash,{caretPosition:caretPosition,scrollPosition:scrollPosition});
}
}
function selectionBeforeAfter(pattern){
if(!pattern)pattern=/\s/;
sautAvantIE=sautApresIE=0;
if(browser.msie){
lenSelection=selection.length-fixIeBug(selection);
if(caretPosition){
set(caretPosition-1,2);
sautAvantIE=fixIeBug(document.selection.createRange().text);
}
set(caretPosition,2);
sautApresIE=fixIeBug(document.selection.createRange().text);
set(0,caretPosition);
before=document.selection.createRange().text;
set(caretPosition+lenSelection,textarea.value.length);
after=document.selection.createRange().text;
set(caretPosition,lenSelection);
selection=document.selection.createRange().text;
}else{
before=textarea.value.substring(0,caretPosition);
after=textarea.value.substring(caretPosition+selection.length-fixIeBug(selection));
}
before=before.split(pattern);
after=after.split(pattern);
if(sautAvantIE)before.push("");
if(sautApresIE)after.unshift("");
}
function selectionSave(){
nb_before=before?before[before.length-1].length:0;
nb_after=after?after[0].length:0;
nb=nb_before+selection.length+nb_after-fixIeBug(selection);
caretPosition=caretPosition-nb_before;
set(caretPosition,nb);
get();
$.extend(hash,{selection:selection,caretPosition:caretPosition,scrollPosition:scrollPosition});
}
function markup(button){
var len,j,n,i;
hash=clicked=button;
get();
$.extend(hash,{line:"",
root:options.root,
textarea:textarea,
selection:(selection||''),
caretPosition:caretPosition,
ctrlKey:ctrlKey,
shiftKey:shiftKey,
altKey:altKey
}
);
if(button.selectionType){
if(button.selectionType=="word"){
if(!selection){
selectWord();
}else{
selectionRemoveLast(/\s/);
}
}
if(button.selectionType=="line"){
selectLine();
}
if(button.selectionType=="return"){
if(!browser.msie){
selectionBeforeAfter(/\r?\n/);
before_last=before[before.length-1];
after='';
if(r=before_last.match(/^-([*#]+) ?(.*)$/)){
if(r[2]){
button.replaceWith="\n-"+r[1]+' ';
before_last='';
}else{
button.replaceWith="\n";
}
}else{
before_last='';
button.replaceWith="\n";
}
before[before.length-1]=before_last;
selectionSave();
}
}
}
prepare(options.beforeInsert);
prepare(clicked.beforeInsert);
if((ctrlKey===true&&shiftKey===true)||button.multiline===true){
prepare(clicked.beforeMultiInsert);
}
$.extend(hash,{line:1});
if((ctrlKey===true&&shiftKey===true)||button.forceMultiline===true){
lines=selection.split(/\r?\n/);
for(j=0,n=lines.length,i=0;i<n;i++){
if(n==1||$.trim(lines[i])!==''){
$.extend(hash,{line:++j,selection:lines[i]});
lines[i]=build(lines[i]).block;
}else{
lines[i]="";
}
}
string={block:lines.join('\n')};
start=caretPosition;
len=string.block.length+((browser.opera)?n-1:0);
}else if(ctrlKey===true){
string=build(selection);
start=caretPosition+string.openWith.length;
len=string.block.length-string.openWith.length-string.closeWith.length;
len=len-(string.block.match(/ $/)?1:0);
len-=fixIeBug(string.block);
}else if(shiftKey===true){
string=build(selection);
start=caretPosition;
len=string.block.length;
len-=fixIeBug(string.block);
}else{
string=build(selection);
start=caretPosition+string.block.length;
len=0;
start-=fixIeBug(string.block);
}
if((selection===''&&string.replaceWith==='')){
caretOffset+=fixOperaBug(string.block);
start=caretPosition+string.openBlockWith.length+string.openWith.length;
len=string.block.length-string.openBlockWith.length-string.openWith.length-string.closeWith.length-string.closeBlockWith.length;
caretOffset=$$.val().substring(caretPosition,$$.val().length).length;
caretOffset-=fixOperaBug($$.val().substring(0,caretPosition));
}
$.extend(hash,{caretPosition:caretPosition,scrollPosition:scrollPosition});
if(string.block!==selection&&abort===false){
insert(string.block);
set(start,len);
}else{
caretOffset=-1;
}
get();
$.extend(hash,{line:'',selection:selection});
if((ctrlKey===true&&shiftKey===true)||button.multiline===true){
prepare(clicked.afterMultiInsert);
}
prepare(clicked.afterInsert);
prepare(options.afterInsert);
if(previewWindow&&options.previewAutoRefresh){
refreshPreview();
}
shiftKey=altKey=ctrlKey=abort=false;
}
function fixOperaBug(string){
if(browser.opera){
return string.length-string.replace(/\n*/g,'').length;
}
return 0;
}
function fixIeBug(string){
if(browser.msie){
return string.length-string.replace(/\r*/g,'').length;
}
return 0;
}
function insert(block){
if(document.selection){
var newSelection=document.selection.createRange();
newSelection.text=block;
}else{
textarea.value=textarea.value.substring(0,caretPosition)+block+textarea.value.substring(caretPosition+selection.length,textarea.value.length);
}
}
function set(start,len){
if(textarea.createTextRange){
if(browser.opera&&browser.version>=9.5&&len==0){
return false;
}
range=textarea.createTextRange();
range.collapse(true);
range.moveStart('character',start);
range.moveEnd('character',len);
range.select();
}else if(textarea.setSelectionRange){
textarea.setSelectionRange(start,start+len);
}
textarea.scrollTop=scrollPosition;
textarea.focus();
}
function get(){
textarea.focus();
scrollPosition=textarea.scrollTop;
if(document.selection){
selection=document.selection.createRange().text;
if(browser.msie){
var range=document.selection.createRange(),rangeCopy=range.duplicate();
rangeCopy.moveToElementText(textarea);
caretPosition=-1;
while(rangeCopy.inRange(range)){
rangeCopy.moveStart('character');
caretPosition++;
}
}else{
caretPosition=textarea.selectionStart;
}
}else{
caretPosition=textarea.selectionStart;
selection=textarea.value.substring(caretPosition,textarea.selectionEnd);
}
return selection;
}
function preview(){
if(typeof options.previewHandler==='function'){
previewWindow=true;
}else if(options.previewInElement){
previewWindow=$(options.previewInElement);
}else if(!previewWindow||previewWindow.closed){
if(options.previewInWindow){
previewWindow=window.open('','preview',options.previewInWindow);
$(window).unload(function(){
previewWindow.close();
});
}else{
iFrame=$('<iframe class="markItUpPreviewFrame"></iframe>');
if(options.previewPosition=='after'){
iFrame.insertAfter(footer);
}else{
iFrame.insertBefore(header);
}
previewWindow=iFrame[iFrame.length-1].contentWindow||frame[iFrame.length-1];
}
}else if(altKey===true){
if(iFrame){
iFrame.remove();
}else{
previewWindow.close();
}
previewWindow=iFrame=false;
}
if(!options.previewAutoRefresh){
refreshPreview();
}
if(options.previewInWindow){
previewWindow.focus();
}
}
function refreshPreview(){
renderPreview();
}
function renderPreview(){
var phtml;
if(options.previewHandler&&typeof options.previewHandler==='function'){
options.previewHandler($$.val());
}else if(options.previewParser&&typeof options.previewParser==='function'){
var data=options.previewParser($$.val());
writeInPreview(localize(data,1));
}else if(options.previewParserPath!==''){
$.ajax({
type:options.previewParserAjaxType,
dataType:'text',
global:false,
url:options.previewParserPath,
data:options.previewParserVar+'='+encodeURIComponent($$.val()),
success:function(data){
writeInPreview(localize(data,1));
}
});
}else{
if(!template){
$.ajax({
url:options.previewTemplatePath,
dataType:'text',
global:false,
success:function(data){
writeInPreview(localize(data,1).replace(/<!-- content -->/g,$$.val()));
}
});
}
}
return false;
}
function writeInPreview(data){
if(options.previewInElement){
$(options.previewInElement).html(data);
}else if(previewWindow&&previewWindow.document){
try{
sp=previewWindow.document.documentElement.scrollTop
}catch(e){
sp=0;
}
previewWindow.document.open();
previewWindow.document.write(data);
previewWindow.document.close();
previewWindow.document.documentElement.scrollTop=sp;
}
}
function keyPressed(e){
shiftKey=e.shiftKey;
altKey=e.altKey;
ctrlKey=(!(e.altKey&&e.ctrlKey))?(e.ctrlKey||e.metaKey):false;
if(e.type==='keydown'){
if(ctrlKey===true){
li=$('a[accesskey="'+((e.keyCode==13)?'\\n':String.fromCharCode(e.keyCode))+'"]',header).parent('li');
if(li.length!==0){
ctrlKey=false;
setTimeout(function(){
li.triggerHandler('mouseup');
},1);
return false;
}
}
if(!browser.opera){
if(e.keyCode===13||e.keyCode===10){
if(ctrlKey===true){
ctrlKey=false;
markup(options.onCtrlEnter);
return options.onCtrlEnter.keepDefault;
}else if(shiftKey===true){
shiftKey=false;
markup(options.onShiftEnter);
return options.onShiftEnter.keepDefault;
}else{
markup(options.onEnter);
return options.onEnter.keepDefault;
}
}
if(e.keyCode===9){
if(shiftKey==true||ctrlKey==true||altKey==true){
return false;
}
if(caretOffset!==-1){
get();
caretOffset=$$.val().length-caretOffset;
set(caretOffset,0);
caretOffset=-1;
return false;
}else{
markup(options.onTab);
return options.onTab.keepDefault;
}
}
}
}
}
function remove(){
$$.unbind(".markItUp").removeClass('markItUpEditor');
$$.parent('div').parent('div.markItUp').parent('div').replaceWith($$);
var relativeRef=$$.parent('div').parent('div.markItUp').parent('div');
if(relativeRef.length){
relativeRef.replaceWith($$);
}
$$.data('markItUp',null);
}
init();
});
};
$.fn.markItUpRemove=function(){
return this.each(function(){
$(this).markItUp('remove');
}
);
};
$.markItUp=function(settings){
var options={target:false};
$.extend(options,settings);
if(options.target){
return $(options.target).each(function(){
$(this).focus();
$(this).trigger('insertion',[options]);
});
}else{
$('textarea').trigger('insertion',[options]);
}
};
})(jQuery);


/* ../plugins-dist/porte_plume/javascript/jquery.previsu_spip.js */
;(function($){
$.fn.previsu_spip=function(settings){
var options;
options={
previewParserPath:'',
previewParserVar:'data',
textEditer:'Editer',
textVoir:'Voir',
textFullScreen:'Plein écran'
};
$.extend(options,settings);
return this.each(function(){
var $$,textarea,tabs,preview;
$$=$(this);
textarea=this;
function init(){
$$.addClass("pp_previsualisation");
tabs=$('<div class="markItUpTabs"></div>').prependTo($$.parent());
$(tabs).append(
'<a href="#fullscreen" class="fullscreen">'+options.textFullScreen+'</a>'+
'<a href="#previsuVoir" class="previsuVoir">'+options.textVoir+'</a>'+
'<a href="#previsuEditer" class="previsuEditer on">'+options.textEditer+'</a>'
);
preview=$('<div class="markItUpPreview"></div>').insertAfter(tabs);
preview.hide();
var is_full_screen=false;
var mark=$$.parent();
var objet=mark.parents('.formulaire_spip')[0].className.match(/formulaire_editer_(\w+)/);
objet=(objet?objet[1]:'');
var champ=mark.parents('.editer')[0].className.match(/editer_(\w+)/);
champ=(champ?champ[1].toUpperCase():'');
var textarea=mark.find('textarea.pp_previsualisation');
var preview=mark.find('.markItUpPreview');
var dir=textarea.attr('dir');
if(dir){
preview.attr('dir',dir);
}
tabs.find('.fullscreen').click(function(){
if(!mark.is('.fullscreen')){
textarea.data('height-origin',textarea.css('height'));
}
mark.toggleClass('fullscreen');
if(mark.is('.fullscreen')){
is_full_screen=true;
if(!mark.is('.livepreview')){
var original_texte="";
function refresh_preview(){
var texte=textarea.val();
if(original_texte==texte){
return;
}
renderPreview(preview.addClass('ajaxLoad'),texte,champ,objet);
original_texte=texte;
}
var timerPreview=null;
mark.addClass('livepreview').find('.markItUpEditor').bind('keyup click change focus refreshpreview',function(e){
if(is_full_screen){
if(timerPreview)clearTimeout(timerPreview);
timerPreview=setTimeout(refresh_preview,500);
}
});
$(window).bind('keyup',function(e){
if(is_full_screen){
if(e.type=='keyup'&&e.keyCode==27&&!markitup_prompt){
mark.removeClass('fullscreen');
textarea.css('height',textarea.data('height-origin'));
is_full_screen=false;
}
}
});
}
mark.find('.markItUpEditor').trigger('refreshpreview');
}
else{
textarea.css('height',textarea.data('height-origin'));
is_full_screen=false;
}
return false;
});
tabs.find('.previsuVoir').click(function(){
preview.height(
mark.find('.markItUpHeader').height()
+mark.find('.markItUpEditor').height()
+mark.find('.markItUpFooter').height()
);
mark.find('.markItUpHeader,.markItUpEditor,.markItUpFooter').hide();
$(this).addClass('on').next().removeClass('on');
renderPreview(
preview.show().addClass('ajaxLoad'),
mark.find('textarea.pp_previsualisation').val(),
champ,
objet,
false
);
return false;
});
tabs.find('.previsuEditer').click(function(){
mark.find('.markItUpPreview').hide();
mark.find('.markItUpHeader,.markItUpEditor,.markItUpFooter').show();
$(this).addClass('on').prev().removeClass('on');
return false;
});
}
function renderPreview(node,val,champ,objet,async){
if(options.previewParserPath!==''){
$.ajax({
type:'POST',
async:typeof(async)=="undefined"?true:async,
url:options.previewParserPath,
data:'champ='+champ
+'&objet='+objet
+'&'+options.previewParserVar+'='+encodeURIComponent(val),
success:function(data){
node.html(data).removeClass('ajaxLoad');
$("a",node).attr("target","blank");
}
});
}
}
init();
});
};
})(jQuery);


/* page=porte_plume_start.js(lang=fr) */
barre_outils_edition={"nameSpace":"edition","previewAutoRefresh":false,"onEnter":{"keepDefault":false,"selectionType":"return","replaceWith":"\n"}
,"onShiftEnter":{"keepDefault":false,"replaceWith":"\n_ "}
,"onCtrlEnter":{"keepDefault":false,"replaceWith":"\n\n"}
,"markupSet":[{"name":"Transformer en {{{intertitre}}}","key":"H","className":"outil_header1","openWith":"\n{{{","closeWith":"}}}\n","selectionType":"line"}
,{"name":"Mettre en {{gras}}","key":"B","className":"outil_bold","replaceWith":function(h){return espace_si_accolade(h,'{{','}}');},"selectionType":"word"}
,{"name":"Mettre en {italique}","key":"I","className":"outil_italic","replaceWith":function(h){return espace_si_accolade(h,'{','}');},"selectionType":"word"}
,{"name":"Mettre en liste","className":"outil_liste_ul separateur_avant","replaceWith":function(h){return outil_liste(h,'*');},"selectionType":"line","forceMultiline":true,"dropMenu":[{"id":"liste_ol","name":"Mettre en liste numérotée","className":"outil_liste_ol","replaceWith":function(h){return outil_liste(h,'#');},"display":true,"selectionType":"line","forceMultiline":true}
,{"id":"desindenter","name":"Désindenter une liste","className":"outil_desindenter","replaceWith":function(h){return outil_desindenter(h);},"display":true,"selectionType":"line","forceMultiline":true}
,{"id":"indenter","name":"Indenter une liste","className":"outil_indenter","replaceWith":function(h){return outil_indenter(h);},"display":true,"selectionType":"line","forceMultiline":true}
]
}
,{"name":"Transformer en [lien hypertexte->http://...]","key":"L","className":"outil_link separateur separateur_apres sepLink","openWith":"[","closeWith":"->[![Veuillez indiquer l’adresse de votre lien (vous pouvez indiquer une adresse Internet sous la forme http://www.monsite.com, une adresse courriel, ou simplement indiquer le numéro d’un article de ce site.]!]]"}
,{"name":"Transformer en [[Note de bas de page]]","className":"outil_notes separateur_avant","openWith":"[[","closeWith":"]]","selectionType":"word"}
,{"name":"<quote>Citer un message</quote>","key":"Q","className":"outil_quote separateur separateur_apres sepGuillemets","openWith":"\n<quote>","closeWith":"</quote>\n","selectionType":"word","dropMenu":[{"id":"barre_poesie","name":"Mettre en forme comme une <poesie>poésie</poesie>","className":"outil_poesie","openWith":"\n<poesie>","closeWith":"</poesie>\n","display":true,"selectionType":"line"}
]
}
,{"name":"Entourer de « guillemets »","className":"outil_guillemets","openWith":"«","closeWith":"»","lang":["fr","eo","cpf","ar","es"]
,"selectionType":"word","dropMenu":[{"id":"guillemets_simples","name":"Entourer de “guillemets de second niveau”","className":"outil_guillemets_simples","openWith":"“","closeWith":"”","display":true,"lang":["fr","eo","cpf","ar","es"]
,"selectionType":"word"}
]
}
,{"name":"Entourer de « guillemets »","className":"outil_guillemets_de","openWith":"„","closeWith":"“","lang":["bg","de","pl","hr","src"]
,"selectionType":"word","dropMenu":[{"id":"guillemets_de_simples","name":"Entourer de “guillemets de second niveau”","className":"outil_guillemets_de_simples","openWith":"&sbquo;","closeWith":"‘","display":true,"lang":["bg","de","pl","hr","src"]
,"selectionType":"word"}
]
}
,{"name":"Entourer de « guillemets »","className":"outil_guillemets_simples separateur_avant","openWith":"“","closeWith":"”","lang_not":["fr","eo","cpf","ar","es","bg","de","pl","hr","src"]
,"selectionType":"word","dropMenu":[{"id":"guillemets_autres_simples","name":"Entourer de “guillemets de second niveau”","className":"outil_guillemets_uniques","openWith":"‘","closeWith":"’","display":true,"lang_not":["fr","eo","cpf","ar","es","bg","de","pl","hr","src"]
,"selectionType":"word"}
]
}
,{"name":"Insérer des caractères spécifiques","className":"outil_caracteres separateur separateur_apres sepCaracteres separateur_avant","dropMenu":[{"id":"A_grave","name":"Insérer un À","className":"outil_a_maj_grave","replaceWith":"À","display":true,"lang":["fr","eo","cpf"]
}
,{"id":"E_aigu","name":"Insérer un É","className":"outil_e_maj_aigu","replaceWith":"É","display":true,"lang":["fr","eo","cpf"]
}
,{"id":"E_grave","name":"Insérer un È","className":"outil_e_maj_grave","replaceWith":"È","display":true,"lang":["fr","eo","cpf"]
}
,{"id":"aelig","name":"Insérer un æ","className":"outil_aelig","replaceWith":"æ","display":true,"lang":["fr","eo","cpf"]
}
,{"id":"AElig","name":"Insérer un Æ","className":"outil_aelig_maj","replaceWith":"Æ","display":true,"lang":["fr","eo","cpf"]
}
,{"id":"oe","name":"Insérer un œ","className":"outil_oe","replaceWith":"œ","display":true,"lang":["fr"]
}
,{"id":"OE","name":"Insérer un Œ","className":"outil_oe_maj","replaceWith":"Œ","display":true,"lang":["fr"]
}
,{"id":"Ccedil","name":"Insérer un Ç","className":"outil_ccedil_maj","replaceWith":"Ç","display":true,"lang":["fr","eo","cpf"]
}
,{"id":"uppercase","name":"Passer en majuscules","className":"outil_uppercase","replaceWith":function(markitup){return markitup.selection.toUpperCase()},"display":true,"lang":["fr","en"]
}
,{"id":"lowercase","name":"Passer en minuscules","className":"outil_lowercase","replaceWith":function(markitup){return markitup.selection.toLowerCase()},"display":true,"lang":["fr","en"]
}
]
}
,{"name":"Insérer un code informatique (code)","className":"outil_code separateur separateur_apres sepCode","openWith":"<code>","closeWith":"</code>","dropMenu":[{"id":"cadre","name":"Insérer un code préformaté (cadre)","className":"outil_cadre","openWith":"<cadre>\n","closeWith":"\n</cadre>","display":true}
]
}
]
}
function outil_liste(h,c){
if((s=h.selection)&&(r=s.match(/^-([*#]+) (.*)$/))){
r[1]=r[1].replace(/[#*]/g,c);
s='-'+r[1]+' '+r[2];
}else{
s='-'+c+' '+s;
}
return s;
}
function outil_indenter(h){
if(s=h.selection){
if(s.substr(0,2)=='-*'){
s='-**'+s.substr(2);
}else if(s.substr(0,2)=='-#'){
s='-##'+s.substr(2);
}else{
s='-* '+s;
}
}
return s;
}
function outil_desindenter(h){
if(s=h.selection){
if(s.substr(0,3)=='-**'){
s='-*'+s.substr(3);
}else if(s.substr(0,3)=='-* '){
s=s.substr(3);
}else if(s.substr(0,3)=='-##'){
s='-#'+s.substr(3);
}else if(s.substr(0,3)=='-# '){
s=s.substr(3);
}
}
return s;
}
function espace_si_accolade(h,openWith,closeWith){
if(s=h.selection){
if(s.charAt(0)=='{'){
return openWith+' '+s+' '+closeWith;
}
else if(c=h.textarea.selectionStart){
if(h.textarea.value.charAt(c-1)=='{'){
return' '+openWith+s+closeWith+' ';
}
}
}
return openWith+s+closeWith;
}
barre_outils_forum={"nameSpace":"forum","previewAutoRefresh":false,"onEnter":{"keepDefault":false,"selectionType":"return","replaceWith":"\n"}
,"onShiftEnter":{"keepDefault":false,"replaceWith":"\n_ "}
,"onCtrlEnter":{"keepDefault":false,"replaceWith":"\n\n"}
,"markupSet":[{"name":"Mettre en {{gras}}","key":"B","className":"outil_bold","replaceWith":function(h){return espace_si_accolade(h,'{{','}}');},"selectionType":"word"}
,{"name":"Mettre en {italique}","key":"I","className":"outil_italic separateur_avant","replaceWith":function(h){return espace_si_accolade(h,'{','}');},"selectionType":"word"}
,{"name":"Transformer en [lien hypertexte->http://...]","key":"L","className":"outil_link separateur separateur_apres sepLink separateur_avant","openWith":"[","closeWith":"->[![Veuillez indiquer l’adresse de votre lien (vous pouvez indiquer une adresse Internet sous la forme http://www.monsite.com, une adresse courriel, ou simplement indiquer le numéro d’un article de ce site.]!]]"}
,{"name":"<quote>Citer un message</quote>","key":"Q","className":"outil_quote separateur separateur_apres sepGuillemets","openWith":"\n<quote>","closeWith":"</quote>\n","selectionType":"word"}
,{"name":"Entourer de « guillemets »","className":"outil_guillemets","openWith":"«","closeWith":"»","lang":["fr","eo","cpf","ar","es"]
,"selectionType":"word","dropMenu":[{"id":"guillemets_simples","name":"Entourer de “guillemets de second niveau”","className":"outil_guillemets_simples","openWith":"“","closeWith":"”","display":true,"lang":["fr","eo","cpf","ar","es"]
,"selectionType":"word"}
]
}
,{"name":"Entourer de « guillemets »","className":"outil_guillemets_de","openWith":"„","closeWith":"“","lang":["bg","de","pl","hr","src"]
,"selectionType":"word","dropMenu":[{"id":"guillemets_de_simples","name":"Entourer de “guillemets de second niveau”","className":"outil_guillemets_de_simples","openWith":"&sbquo;","closeWith":"‘","display":true,"lang":["bg","de","pl","hr","src"]
,"selectionType":"word"}
]
}
,{"name":"Entourer de « guillemets »","className":"outil_guillemets_simples separateur_avant","openWith":"“","closeWith":"”","lang_not":["fr","eo","cpf","ar","es","bg","de","pl","hr","src"]
,"selectionType":"word","dropMenu":[{"id":"guillemets_autres_simples","name":"Entourer de “guillemets de second niveau”","className":"outil_guillemets_uniques","openWith":"‘","closeWith":"’","display":true,"lang_not":["fr","eo","cpf","ar","es","bg","de","pl","hr","src"]
,"selectionType":"word"}
]
}
]
}
function outil_liste(h,c){
if((s=h.selection)&&(r=s.match(/^-([*#]+) (.*)$/))){
r[1]=r[1].replace(/[#*]/g,c);
s='-'+r[1]+' '+r[2];
}else{
s='-'+c+' '+s;
}
return s;
}
function outil_indenter(h){
if(s=h.selection){
if(s.substr(0,2)=='-*'){
s='-**'+s.substr(2);
}else if(s.substr(0,2)=='-#'){
s='-##'+s.substr(2);
}else{
s='-* '+s;
}
}
return s;
}
function outil_desindenter(h){
if(s=h.selection){
if(s.substr(0,3)=='-**'){
s='-*'+s.substr(3);
}else if(s.substr(0,3)=='-* '){
s=s.substr(3);
}else if(s.substr(0,3)=='-##'){
s='-#'+s.substr(3);
}else if(s.substr(0,3)=='-# '){
s=s.substr(3);
}
}
return s;
}
function espace_si_accolade(h,openWith,closeWith){
if(s=h.selection){
if(s.charAt(0)=='{'){
return openWith+' '+s+' '+closeWith;
}
else if(c=h.textarea.selectionStart){
if(h.textarea.value.charAt(c-1)=='{'){
return' '+openWith+s+closeWith+' ';
}
}
}
return openWith+s+closeWith;
}
;(function($){
$.fn.barre_outils=function(nom,settings){
options={
lang:'fr'
};
$.extend(options,settings);
return $(this)
.not('.markItUpEditor, .no_barre')
.markItUp(eval('barre_outils_'+nom),{lang:options.lang})
.parent().find('.markItUpButton a').attr('tabindex',-1)
.end();
};
$.fn.barre_previsualisation=function(settings){
options={
previewParserPath:"index.php?action=porte_plume_previsu",
textEditer:"Éditer",
textVoir:"Voir"
};
$.extend(options,settings);
return $(this)
.not('.pp_previsualisation, .no_previsualisation')
.previsu_spip(options)
.parent().find('.markItUpTabs a').attr('tabindex',-1)
.end();
};
$(window).load(function(){
function barrebouilles(){
$('.formulaire_spip textarea.inserer_barre_forum').barre_outils('forum');
$('.formulaire_spip textarea.inserer_barre_edition').barre_outils('edition');
$('.formulaire_spip textarea.inserer_previsualisation').barre_previsualisation();
$('textarea.textarea_forum').barre_outils('forum');
$('.formulaire_forum textarea[name=texte]').barre_outils('forum');
$('.formulaire_spip textarea[name=texte]')
.barre_outils('edition').end()
.barre_previsualisation();
}
barrebouilles();
onAjaxLoad(barrebouilles);
});
})(jQuery);


/* ../plugins-dist/porte_plume/javascript/porte_plume_forcer_hauteur.js */
function barre_forcer_hauteur(){
jQuery(".markItUpEditor",this==window?null:this).each(function(){
var hauteur_min=jQuery(this).height();
var hauteur_max=parseInt(jQuery(window).height())-200;
var hauteur=hauteur_min;
var signes=jQuery(this).val().length;
if(signes){
var hauteur_signes=Math.round(signes/4)+50;
if(hauteur_signes>hauteur_min&&hauteur_signes<hauteur_max){
hauteur=hauteur_signes;
}else{
if(hauteur_signes>hauteur_max){
hauteur=hauteur_max;
}
}
jQuery(this).height(hauteur);
}
});
}
jQuery(window).on("load",function(){
barre_forcer_hauteur();
onAjaxLoad(barre_forcer_hauteur);
});



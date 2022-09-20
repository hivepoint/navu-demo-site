"use strict";(()=>{var di=Object.defineProperty;var hi=Object.getOwnPropertyDescriptor;var c=(i,e,t,r)=>{for(var s=r>1?void 0:r?hi(e,t):e,n=i.length-1,o;n>=0;n--)(o=i[n])&&(s=(r?o(e,t,s):o(s))||s);return r&&s&&di(e,t,s),s};var He=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ge=Symbol(),St=new WeakMap,$e=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(He&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=St.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&St.set(t,e))}return e}toString(){return this.cssText}},kt=i=>new $e(typeof i=="string"?i:i+"",void 0,Ge),w=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((r,s,n)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[n+1],i[0]);return new $e(t,i,Ge)},Ye=(i,e)=>{He?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let r=document.createElement("style"),s=window.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=t.cssText,i.appendChild(r)})},qe=He?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return kt(t)})(i):i;var Ze,At=window.trustedTypes,ui=At?At.emptyScript:"",Tt=window.reactiveElementPolyfillSupport,Je={toAttribute(i,e){switch(e){case Boolean:i=i?ui:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Ct=(i,e)=>e!==i&&(e==e||i==i),Xe={attribute:!0,type:String,converter:Je,reflect:!1,hasChanged:Ct},N=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,r)=>{let s=this._$Ep(r,t);s!==void 0&&(this._$Ev.set(s,r),e.push(s))}),e}static createProperty(e,t=Xe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let r=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(s){let n=this[e];this[t]=s,this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Xe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let s of r)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let s of r)t.unshift(qe(s))}else e!==void 0&&t.push(qe(e));return t}static _$Ep(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ye(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=Xe){var s,n;let o=this.constructor._$Ep(e,r);if(o!==void 0&&r.reflect===!0){let p=((n=(s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&n!==void 0?n:Je.toAttribute)(t,r.type);this._$El=e,p==null?this.removeAttribute(o):this.setAttribute(o,p),this._$El=null}}_$AK(e,t){var r,s;let n=this.constructor,o=n._$Ev.get(e);if(o!==void 0&&this._$El!==o){let p=n.getPropertyOptions(o),a=p.converter,l=(s=(r=a?.fromAttribute)!==null&&r!==void 0?r:typeof a=="function"?a:null)!==null&&s!==void 0?s:Je.fromAttribute;this._$El=o,this[o]=l(t,p.type),this._$El=null}}requestUpdate(e,t,r){let s=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Ct)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,n)=>this[n]=s),this._$Ei=void 0);let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(r)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};N.finalized=!0,N.elementProperties=new Map,N.elementStyles=[],N.shadowRootOptions={mode:"open"},Tt?.({ReactiveElement:N}),((Ze=globalThis.reactiveElementVersions)!==null&&Ze!==void 0?Ze:globalThis.reactiveElementVersions=[]).push("1.3.4");var Qe,fe=globalThis.trustedTypes,Et=fe?fe.createPolicy("lit-html",{createHTML:i=>i}):void 0,Y=`lit$${(Math.random()+"").slice(9)}$`,Ut="?"+Y,mi=`<${Ut}>`,ge=document,ke=(i="")=>ge.createComment(i),Ae=i=>i===null||typeof i!="object"&&typeof i!="function",zt=Array.isArray,fi=i=>zt(i)||typeof i?.[Symbol.iterator]=="function",Se=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pt=/-->/g,Rt=/>/g,se=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Dt=/'/g,Mt=/"/g,Ht=/^(?:script|style|textarea|title)$/i,qt=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),f=qt(1),Xi=qt(2),oe=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Ot=new WeakMap,It=(i,e,t)=>{var r,s;let n=(r=t?.renderBefore)!==null&&r!==void 0?r:e,o=n._$litPart$;if(o===void 0){let p=(s=t?.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=o=new ae(e.insertBefore(ke(),p),p,void 0,t??{})}return o._$AI(i),o},me=ge.createTreeWalker(ge,129,null,!1),gi=(i,e)=>{let t=i.length-1,r=[],s,n=e===2?"<svg>":"",o=Se;for(let a=0;a<t;a++){let l=i[a],m,d,h=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===Se?d[1]==="!--"?o=Pt:d[1]!==void 0?o=Rt:d[2]!==void 0?(Ht.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=se):d[3]!==void 0&&(o=se):o===se?d[0]===">"?(o=s??Se,h=-1):d[1]===void 0?h=-2:(h=o.lastIndex-d[2].length,m=d[1],o=d[3]===void 0?se:d[3]==='"'?Mt:Dt):o===Mt||o===Dt?o=se:o===Pt||o===Rt?o=Se:(o=se,s=void 0);let y=o===se&&i[a+1].startsWith("/>")?" ":"";n+=o===Se?l+mi:h>=0?(r.push(m),l.slice(0,h)+"$lit$"+l.slice(h)+Y+y):l+Y+(h===-2?(r.push(void 0),a):y)}let p=n+(i[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Et!==void 0?Et.createHTML(p):p,r]},ne=class{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let n=0,o=0,p=e.length-1,a=this.parts,[l,m]=gi(e,t);if(this.el=ne.createElement(l,r),me.currentNode=this.el.content,t===2){let d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(s=me.nextNode())!==null&&a.length<p;){if(s.nodeType===1){if(s.hasAttributes()){let d=[];for(let h of s.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(Y)){let u=m[o++];if(d.push(h),u!==void 0){let y=s.getAttribute(u.toLowerCase()+"$lit$").split(Y),C=/([.?@])?(.*)/.exec(u);a.push({type:1,index:n,name:C[2],strings:y,ctor:C[1]==="."?tt:C[1]==="?"?it:C[1]==="@"?rt:xe})}else a.push({type:6,index:n})}for(let h of d)s.removeAttribute(h)}if(Ht.test(s.tagName)){let d=s.textContent.split(Y),h=d.length-1;if(h>0){s.textContent=fe?fe.emptyScript:"";for(let u=0;u<h;u++)s.append(d[u],ke()),me.nextNode(),a.push({type:2,index:++n});s.append(d[h],ke())}}}else if(s.nodeType===8)if(s.data===Ut)a.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf(Y,d+1))!==-1;)a.push({type:7,index:n}),d+=Y.length-1}n++}}static createElement(e,t){let r=ge.createElement("template");return r.innerHTML=e,r}};function ve(i,e,t=i,r){var s,n,o,p;if(e===oe)return e;let a=r!==void 0?(s=t._$Cl)===null||s===void 0?void 0:s[r]:t._$Cu,l=Ae(e)?void 0:e._$litDirective$;return a?.constructor!==l&&((n=a?._$AO)===null||n===void 0||n.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,t,r)),r!==void 0?((o=(p=t)._$Cl)!==null&&o!==void 0?o:p._$Cl=[])[r]=a:t._$Cu=a),a!==void 0&&(e=ve(i,a._$AS(i,e.values),a,r)),e}var et=class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;let{el:{content:r},parts:s}=this._$AD,n=((t=e?.creationScope)!==null&&t!==void 0?t:ge).importNode(r,!0);me.currentNode=n;let o=me.nextNode(),p=0,a=0,l=s[0];for(;l!==void 0;){if(p===l.index){let m;l.type===2?m=new ae(o,o.nextSibling,this,e):l.type===1?m=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(m=new st(o,this,e)),this.v.push(m),l=s[++a]}p!==l?.index&&(o=me.nextNode(),p++)}return n}m(e){let t=0;for(let r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},ae=class{constructor(e,t,r,s){var n;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$C_=(n=s?.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$C_}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ve(this,e,t),Ae(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==oe&&this.T(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.k(e):fi(e)?this.S(e):this.T(e)}j(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.j(e))}T(e){this._$AH!==A&&Ae(this._$AH)?this._$AA.nextSibling.data=e:this.k(ge.createTextNode(e)),this._$AH=e}$(e){var t;let{values:r,_$litType$:s}=e,n=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=ne.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.m(r);else{let o=new et(n,this),p=o.p(this.options);o.m(r),this.k(p),this._$AH=o}}_$AC(e){let t=Ot.get(e.strings);return t===void 0&&Ot.set(e.strings,t=new ne(e)),t}S(e){zt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,s=0;for(let n of e)s===t.length?t.push(r=new ae(this.j(ke()),this.j(ke()),this,this.options)):r=t[s],r._$AI(n),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){let s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$C_=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},xe=class{constructor(e,t,r,s,n){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,s){let n=this.strings,o=!1;if(n===void 0)e=ve(this,e,t,0),o=!Ae(e)||e!==this._$AH&&e!==oe,o&&(this._$AH=e);else{let p=e,a,l;for(e=n[0],a=0;a<n.length-1;a++)l=ve(this,p[r+a],t,a),l===oe&&(l=this._$AH[a]),o||(o=!Ae(l)||l!==this._$AH[a]),l===A?e=A:e!==A&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}o&&!s&&this.P(e)}P(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},tt=class extends xe{constructor(){super(...arguments),this.type=3}P(e){this.element[this.name]=e===A?void 0:e}},vi=fe?fe.emptyScript:"",it=class extends xe{constructor(){super(...arguments),this.type=4}P(e){e&&e!==A?this.element.setAttribute(this.name,vi):this.element.removeAttribute(this.name)}},rt=class extends xe{constructor(e,t,r,s,n){super(e,t,r,s,n),this.type=5}_$AI(e,t=this){var r;if((e=(r=ve(this,e,t,0))!==null&&r!==void 0?r:A)===oe)return;let s=this._$AH,n=e===A&&s!==A||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==A&&(s===A||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},st=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ve(this,e)}};var Lt=window.litHtmlPolyfillSupport;Lt?.(ne,ae),((Qe=globalThis.litHtmlVersions)!==null&&Qe!==void 0?Qe:globalThis.litHtmlVersions=[]).push("2.2.7");var ot,nt;var Z=class extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=It(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return oe}};Z.finalized=!0,Z._$litElement$=!0,(ot=globalThis.litElementHydrateSupport)===null||ot===void 0||ot.call(globalThis,{LitElement:Z});var Ft=globalThis.litElementPolyfillSupport;Ft?.({LitElement:Z});((nt=globalThis.litElementVersions)!==null&&nt!==void 0?nt:globalThis.litElementVersions=[]).push("3.2.2");var S=i=>e=>typeof e=="function"?((t,r)=>(window.customElements.define(t,r),r))(i,e):((t,r)=>{let{kind:s,elements:n}=r;return{kind:s,elements:n,finisher(o){window.customElements.define(t,o)}}})(i,e);var xi=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function L(i){return(e,t)=>t!==void 0?((r,s,n)=>{s.constructor.createProperty(n,r)})(i,e,t):xi(i,e)}function g(i){return L({...i,state:!0})}var X=({finisher:i,descriptor:e})=>(t,r)=>{var s;if(r===void 0){let n=(s=t.originalKey)!==null&&s!==void 0?s:t.key,o=e!=null?{kind:"method",placement:"prototype",key:n,descriptor:e(t.key)}:{...t,key:n};return i!=null&&(o.finisher=function(p){i(p,n)}),o}{let n=t.constructor;e!==void 0&&Object.defineProperty(t,r,e(r)),i?.(n,r)}};function R(i,e){return X({descriptor:t=>{let r={get(){var s,n;return(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(i))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){let s=typeof t=="symbol"?Symbol():"__"+t;r.get=function(){var n,o;return this[s]===void 0&&(this[s]=(o=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i))!==null&&o!==void 0?o:null),this[s]}}return r}})}function Ie(i){return X({descriptor:e=>({get(){var t,r;return(r=(t=this.renderRoot)===null||t===void 0?void 0:t.querySelectorAll(i))!==null&&r!==void 0?r:[]},enumerable:!0,configurable:!0})})}var at,_r=((at=window.HTMLSlotElement)===null||at===void 0?void 0:at.prototype.assignedElements)!=null?(i,e)=>i.assignedElements(e):(i,e)=>i.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);var lt=class extends Event{constructor(t,r){super(t,{bubbles:!0,composed:!0});this._detail=r}get detail(){return this._detail}},v=class extends Z{fire(e,t){this.dispatchEvent(new lt(e,t))}};v.styles=w`
    * {box-sizing: border-box;}
    [hidden] {display: none !important;}
    .horiz {display: flex; flex-direction: row;}
    .vert {display: flex; flex-direction: column;}
    .center {align-items: center;}
    .center2 {justify-content: center; align-items: center;}
    .flex {flex: 1;}
    .wrap {flex-wrap: wrap;}
  `;var be=class extends v{constructor(){super(...arguments);this.active=!1}render(){return f`
    <div id="container" class="${this.active?"active":""}">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    `}};be.styles=[v.styles,w`
      :host {
        display: inline-block; 
      }
      .line {
        width: var(--thinking-width, 20px);
        height: 1px;
        margin-bottom: 4px;
        background-color: var(--thinking-color, #bb8ecd);
      }
      #container.active .line:nth-child(2) {
        animation-delay: 180ms;
      }
      #container.active .line:nth-child(3) {
        animation-delay: 360ms;
      }
      #container.active .line:nth-child(4) {
        animation-delay: 540ms;
      }
      #container {
        padding: 0 calc(var(--thinking-width, 44px)/2);
      }
      #container.active .line {
        animation: expand 1s ease-in-out infinite;
      }
      @keyframes expand {
        0% { 
          transform: scale(1);
        }
        25% {
          transform: scale3d(2, 1.5, 0);
        }
      }
    `],c([L({type:Boolean,reflect:!0})],be.prototype,"active",2),be=c([S("thinking-animation")],be);var V=class extends v{constructor(){super(...arguments);this.visited=!1;this.selected=!1}render(){return f`
    <div id="container">
      <button class="${this.visited?"visited":""} ${this.selected?"selected":""}">
        <div id="square"></div>
      </button>
      ${this.image?f`<a class="previewLink" href="${this.href||"javascript:void();"}"><img src="${this.image}" /></a>`:""}
    </div>
    `}};V.styles=[v.styles,w`
      :host {
        display: block;
      }
      button {
        cursor: pointer;
        background: none;
        padding: 24px 8px;
        border: none;
      }
      #square {
        width: 12px;
        height: 12px;
        border: 1px solid var(--navubar-highlight-color, #808080);
        border-radius: 50%;
        transition: transform 0.3s ease-in-out;
      }
      button.visited #square {
        background-color: var(--navubar-highlight-color, #808080);
      }
      button.selected #square {
        transform: scale(1.5);
      }
      #container {
        position: relative;
      }
      .previewLink {
        display: inline-block;
        position: absolute;
        bottom: calc(100% - 6px);
        right: 0;
        box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%);
        border-radius: 10px;
        overflow: hidden;
        padding: 6px;
        background: white;
        transform: scale(0.8);
        opacity: 0;
        pointer-events: none;
        transform-origin: bottom right;
        transition: transform 0.18s ease, opacity 0.18s ease;
      }

      @media(hover: hover) {
        button:hover #square {
          transform: scale(1.5);
        }
        #container:hover .previewLink {
          transform: scale(1);
          opacity: 1;
          pointer-events: auto;
        }
      }
    `],c([g()],V.prototype,"visited",2),c([g()],V.prototype,"selected",2),c([g()],V.prototype,"image",2),c([g()],V.prototype,"href",2),V=c([S("page-indicator")],V);var pt=[{label:"Case Study: How to Double Traffic in 6 Months \xBB",url:"./case-study.html",image:"./page0.png"},{label:"Discover more about Structured Data \xBB",url:"./structured-data.html",image:"./page1.png"},{label:"Curious about pricing?",url:"./pricing.html",image:"./page2.png"},{label:"Something specific? Check our knowledge base \xBB",url:"./knowledge-base.html",image:"./page3.png"}],K=class extends v{constructor(){super(...arguments);this._thinking=!1;this.alt=0}render(){let t=this._hovered||this._selected;return f`
    <div id="container" class="horiz center ${this.alt?"alt":""}">
      <thinking-animation .active="${this._thinking}"></thinking-animation>
      <div id="messageConatiner" class="flex">
        ${pt.map(r=>f`
          <div class="messageLinkPanel horiz center ${r===t?"selected":""}">
            <a href="${r.url}" class="messageLink">${r.label}</a>
          </div>
        `)}
      </div>
      ${pt.map((r,s)=>f`
        <page-indicator 
          .image="${r.image}"
          .href="${r.url}"
          .visited="${s<2}"
          .selected="${r===this._selected}"
          @click="${()=>this._selected=r}"
          @mouseenter="${()=>this._hovered=r}" 
          @mouseleave="${()=>this._hovered=void 0}"></page-indicator>
      `)}
      <div id="altPanel" class="horiz center2">
        <div id="alt1" class="horiz center" ?hidden="${this.alt!==1}">
          <span>Still interested in Structured Data?</span>
          <button class="actionButton">See our webinar</button>
        </div>
        <div id="alt2" class="vert" ?hidden="${this.alt!==2}">
          <span>Sign up for our webinar on Structured Data?</span>
          <div class="horiz center" style="margin-top: 8px;">
            <input placeholder="Your email">
            <button class="actionButton2">Submit</button>
          </div>
        </div>
      </div>
    </div>
    `}firstUpdated(){setTimeout(()=>{this._selected||(this._hovered?this.firstUpdated():(this._thinking=!0,setTimeout(()=>{this._thinking=!1,this._selected=pt[0]},4e3)))},5e3)}};K.styles=[v.styles,w`
      :host {
        display: block;
        background: var(--navu-bar-bg, white);
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        --navubar-highlight-color: rgb(115, 64, 96);
        --thinking-color: var(--navubar-highlight-color);
        box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);
        z-index: 100;
      }
      #container {
        height: 60px;
        padding-right: 16px;
        padding-left: 8px;
        transition: height 0.5s ease-out;
        position: relative;
      }
      thinking-animation {
        opacity: 0;
        transition: opacity 0.5s ease-in;
      }
      thinking-animation[active] {
        opacity: 1;
      }
      #messageConatiner {
        height: 100%;
        position: relative;
      }
      .messageLinkPanel {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        right: 0;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s ease-in;
      }
      .messageLink {
        text-decoration: none;
        font-family: system-ui;
        letter-spacing: 0.5px;
        color: var(--navubar-highlight-color, #808080);
        outline: none;
      }
      .messageLinkPanel.selected {
        opacity: 1;
        pointer-events: auto;
      }

      #container.alt {
        height: 120px;
      }

      #altPanel {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        opacity: 0;
        transform: translateY(120%);
        transition: transform 0.3s ease-out;
        background: var(--navu-bar-bg, white);
        text-decoration: none;
        font-family: system-ui;
        letter-spacing: 0.5px;
        color: var(--navubar-highlight-color, #808080);
        font-size: 20px;
      }
      #container.alt #altPanel {
        pointer-events: auto;
        opacity: 1;
        transform: translateY(0);
      }
      .actionButton {
        border: none;
        background: #e94b37;
        color: white;
        margin-left: 16px;
        padding: 16px 12px;
        border-radius: 4px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-family: system-ui;
        cursor: pointer;
      }

      .actionButton2 {
        border: none;
        background: #e94b37;
        color: white;
        margin-left: 16px;
        padding: 10px 12px;
        border-radius: 4px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-family: system-ui;
        cursor: pointer;
      }
      #alt2 input {
        border: none;
        border-bottom: 1px solid #d8d8d8;
        flex: 1;
        padding: 10px 4px;
      }
    `],c([g()],K.prototype,"_selected",2),c([g()],K.prototype,"_hovered",2),c([g()],K.prototype,"_thinking",2),c([g()],K.prototype,"alt",2),K=c([S("navu-bar")],K);function ct(i,e){i.indexOf(e)===-1&&i.push(e)}var Te=(i,e,t)=>Math.min(Math.max(t,i),e);var T={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"};var M=i=>typeof i=="number";var I=i=>Array.isArray(i)&&!M(i[0]);var jt=(i,e,t)=>{let r=e-i;return((t-i)%r+r)%r+i};function Bt(i,e){return I(i)?i[jt(0,i.length,e)]:i}var Fe=(i,e,t)=>-t*i+t*e+i;var Ce=()=>{},k=i=>i;var le=(i,e,t)=>e-i===0?1:(t-i)/(e-i);function dt(i,e){let t=i[i.length-1];for(let r=1;r<=e;r++){let s=le(0,e,r);i.push(Fe(t,1,s))}}function Nt(i){let e=[0];return dt(e,i-1),e}function ht(i,e=Nt(i.length),t=k){let r=i.length,s=r-e.length;return s>0&&dt(e,s),n=>{let o=0;for(;o<r-2&&!(n<e[o+1]);o++);let p=Te(0,1,le(e[o],e[o+1],n));return p=Bt(t,o)(p),Fe(i[o],i[o+1],p)}}var Ee=i=>Array.isArray(i)&&M(i[0]);var we=i=>typeof i=="object"&&Boolean(i.createAnimation);var O=i=>typeof i=="function";var Pe=i=>typeof i=="string";var F={ms:i=>i*1e3,s:i=>i/1e3};function ut(i,e){return e?i*(1e3/e):0}var Vt=(i,e,t)=>(((1-3*t+3*e)*i+(3*t-6*e))*i+3*e)*i,bi=1e-7,wi=12;function yi(i,e,t,r,s){let n,o,p=0;do o=e+(t-e)/2,n=Vt(o,r,s)-i,n>0?t=o:e=o;while(Math.abs(n)>bi&&++p<wi);return o}function pe(i,e,t,r){if(i===e&&t===r)return k;let s=n=>yi(n,0,1,i,t);return n=>n===0||n===1?n:Vt(s(n),e,r)}var mt=(i,e="end")=>t=>{t=e==="end"?Math.min(t,.999):Math.max(t,.001);let r=t*i,s=e==="end"?Math.floor(r):Math.ceil(r);return Te(0,1,s/i)};var Kt={ease:pe(.25,.1,.25,1),"ease-in":pe(.42,0,1,1),"ease-in-out":pe(.42,0,.58,1),"ease-out":pe(0,0,.58,1)},_i=/\((.*?)\)/;function ye(i){if(O(i))return i;if(Ee(i))return pe(...i);if(Kt[i])return Kt[i];if(i.startsWith("steps")){let e=_i.exec(i);if(e){let t=e[1].split(",");return mt(parseFloat(t[0]),t[1].trim())}}return k}var ce=class{constructor(e,t=[0,1],{easing:r,duration:s=T.duration,delay:n=T.delay,endDelay:o=T.endDelay,repeat:p=T.repeat,offset:a,direction:l="normal"}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=k,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((d,h)=>{this.resolve=d,this.reject=h}),r=r||T.easing,we(r)){let d=r.createAnimation(t);r=d.easing,t=d.keyframes||t,s=d.duration||s}this.repeat=p,this.easing=I(r)?k:ye(r),this.updateDuration(s);let m=ht(t,a,I(r)?r.map(ye):k);this.tick=d=>{var h;n=n;let u=0;this.pauseTime!==void 0?u=this.pauseTime:u=(d-this.startTime)*this.rate,this.t=u,u/=1e3,u=Math.max(u-n,0),this.playState==="finished"&&this.pauseTime===void 0&&(u=this.totalDuration);let y=u/this.duration,C=Math.floor(y),E=y%1;!E&&y>=1&&(E=1),E===1&&C--;let P=C%2;(l==="reverse"||l==="alternate"&&P||l==="alternate-reverse"&&!P)&&(E=1-E);let B=u>=this.totalDuration?1:Math.min(E,1),_=m(this.easing(B));e(_),this.pauseTime===void 0&&(this.playState==="finished"||u>=this.totalDuration+o)?(this.playState="finished",(h=this.resolve)===null||h===void 0||h.call(this,_)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},this.play()}play(){let e=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=e-this.pauseTime:this.startTime||(this.startTime=e),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var e;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(e=this.reject)===null||e===void 0||e.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(e){this.duration=e,this.totalDuration=e*(this.repeat+1)}get currentTime(){return this.t}set currentTime(e){this.pauseTime!==void 0||this.rate===0?this.pauseTime=e:this.startTime=performance.now()-e/this.rate}get playbackRate(){return this.rate}set playbackRate(e){this.rate=e}};var Re=class{setAnimation(e){this.animation=e,e?.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}};var ft=new WeakMap;function je(i){return ft.has(i)||ft.set(i,{transforms:[],values:new Map}),ft.get(i)}function Wt(i,e){return i.has(e)||i.set(e,new Re),i.get(e)}var $i=["","X","Y","Z"],Si=["translate","scale","rotate","skew"],De={x:"translateX",y:"translateY",z:"translateZ"},Gt={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:i=>i+"deg"},ki={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:i=>i+"px"},rotate:Gt,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:k},skew:Gt},j=new Map,Ne=i=>`--motion-${i}`,Be=["x","y","z"];Si.forEach(i=>{$i.forEach(e=>{Be.push(i+e),j.set(Ne(i+e),ki[i])})});var Ai=(i,e)=>Be.indexOf(i)-Be.indexOf(e),Ti=new Set(Be),Ve=i=>Ti.has(i),Yt=(i,e)=>{De[e]&&(e=De[e]);let{transforms:t}=je(i);ct(t,e),i.style.transform=Ci(t)},Ci=i=>i.sort(Ai).reduce(Ei,"").trim(),Ei=(i,e)=>`${i} ${e}(var(${Ne(e)}))`;var Me=i=>i.startsWith("--"),Zt=new Set;function Xt(i){if(!Zt.has(i)){Zt.add(i);try{let{syntax:e,initialValue:t}=j.has(i)?j.get(i):{};CSS.registerProperty({name:i,inherits:!1,syntax:e,initialValue:t})}catch{}}}var gt=(i,e)=>document.createElement("div").animate(i,e),Jt={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{gt({opacity:[1]})}catch{return!1}return!0},finished:()=>Boolean(gt({opacity:[0,1]},{duration:.001}).finished),linearEasing:()=>{try{gt({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},vt={},J={};for(let i in Jt)J[i]=()=>(vt[i]===void 0&&(vt[i]=Jt[i]()),vt[i]);var Pi=.015,Ri=(i,e)=>{let t="",r=Math.round(e/Pi);for(let s=0;s<r;s++)t+=i(le(0,r-1,s))+", ";return t.substring(0,t.length-2)},xt=(i,e)=>O(i)?J.linearEasing()?`linear(${Ri(i,e)})`:T.easing:Ee(i)?Di(i):i,Di=([i,e,t,r])=>`cubic-bezier(${i}, ${e}, ${t}, ${r})`;function Qt(i,e){for(let t=0;t<i.length;t++)i[t]===null&&(i[t]=t?i[t-1]:e());return i}var ei=i=>Array.isArray(i)?i:[i];function de(i){return De[i]&&(i=De[i]),Ve(i)?Ne(i):i}var Oe={get:(i,e)=>{e=de(e);let t=Me(e)?i.style.getPropertyValue(e):getComputedStyle(i)[e];if(!t&&t!==0){let r=j.get(e);r&&(t=r.initialValue)}return t},set:(i,e,t)=>{e=de(e),Me(e)?i.style.setProperty(e,t):i.style[e]=t}};function Ke(i,e=!0){if(!(!i||i.playState==="finished"))try{i.stop?i.stop():(e&&i.commitStyles(),i.cancel())}catch{}}function We(i,e){var t;let r=e?.toDefaultUnit||k,s=i[i.length-1];if(Pe(s)){let n=((t=s.match(/(-?[\d.]+)([a-z%]*)/))===null||t===void 0?void 0:t[2])||"";n&&(r=o=>o+n)}return r}function Mi(){return window.__MOTION_DEV_TOOLS_RECORD}function ti(i,e,t,r={},s){let n=Mi(),o=r.record!==!1&&n,p,{duration:a=T.duration,delay:l=T.delay,endDelay:m=T.endDelay,repeat:d=T.repeat,easing:h=T.easing,direction:u,offset:y,allowWebkitAcceleration:C=!1}=r,E=je(i),P=Ve(e),B=J.waapi();P&&Yt(i,e);let _=de(e),te=Wt(E.values,_),q=j.get(_);return Ke(te.animation,!(we(h)&&te.generator)&&r.record!==!1),()=>{let ie=()=>{var $,_e;return(_e=($=Oe.get(i,_))!==null&&$!==void 0?$:q?.initialValue)!==null&&_e!==void 0?_e:0},b=Qt(ei(t),ie),ze=We(b,q);if(we(h)){let $=h.createAnimation(b,e!=="opacity",ie,_,te);h=$.easing,b=$.keyframes||b,a=$.duration||a}if(Me(_)&&(J.cssRegisterProperty()?Xt(_):B=!1),P&&!J.linearEasing()&&(O(h)||I(h)&&h.some(O))&&(B=!1),B){q&&(b=b.map(re=>M(re)?q.toDefaultUnit(re):re)),b.length===1&&(!J.partialKeyframes()||o)&&b.unshift(ie());let $={delay:F.ms(l),duration:F.ms(a),endDelay:F.ms(m),easing:I(h)?void 0:xt(h,a),direction:u,iterations:d+1,fill:"both"};p=i.animate({[_]:b,offset:y,easing:I(h)?h.map(re=>xt(re,a)):void 0},$),p.finished||(p.finished=new Promise((re,ci)=>{p.onfinish=re,p.oncancel=ci}));let _e=b[b.length-1];p.finished.then(()=>{Oe.set(i,_,_e),p.cancel()}).catch(Ce),C||(p.playbackRate=1.000001)}else if(s&&P)b=b.map($=>typeof $=="string"?parseFloat($):$),b.length===1&&b.unshift(parseFloat(ie())),p=new s($=>{Oe.set(i,_,ze?ze($):$)},b,Object.assign(Object.assign({},r),{duration:a,easing:h}));else{let $=b[b.length-1];Oe.set(i,_,q&&M($)?q.toDefaultUnit($):$)}return o&&n(i,e,b,{duration:a,delay:l,easing:h,repeat:d,offset:y},"motion-one"),te.setAnimation(p),p}}var ii=(i,e)=>i[e]?Object.assign(Object.assign({},i),i[e]):Object.assign({},i);function ri(i,e){var t;return typeof i=="string"?e?((t=e[i])!==null&&t!==void 0||(e[i]=document.querySelectorAll(i)),i=e[i]):i=document.querySelectorAll(i):i instanceof Element&&(i=[i]),Array.from(i||[])}var Oi=i=>i(),Le=(i,e,t=T.duration)=>new Proxy({animations:i.map(Oi).filter(Boolean),duration:t,options:e},Ui),Li=i=>i.animations[0],Ui={get:(i,e)=>{let t=Li(i);switch(e){case"duration":return i.duration;case"currentTime":return F.s(t?.[e]||0);case"playbackRate":case"playState":return t?.[e];case"finished":return i.finished||(i.finished=Promise.all(i.animations.map(zi)).catch(Ce)),i.finished;case"stop":return()=>{i.animations.forEach(r=>Ke(r))};case"forEachNative":return r=>{i.animations.forEach(s=>r(s,i))};default:return typeof t?.[e]>"u"?void 0:()=>i.animations.forEach(r=>r[e]())}},set:(i,e,t)=>{switch(e){case"currentTime":t=F.ms(t);case"currentTime":case"playbackRate":for(let r=0;r<i.animations.length;r++)i.animations[r][e]=t;return!0}return!1}},zi=i=>i.finished;function Q(i=.1,{start:e=0,from:t=0,easing:r}={}){return(s,n)=>{let o=M(t)?t:Hi(t,n),p=Math.abs(o-s),a=i*p;if(r){let l=n*i;a=ye(r)(a/l)*l}return e+a}}function Hi(i,e){if(i==="first")return 0;{let t=e-1;return i==="last"?t:t/2}}function si(i,e,t){return O(i)?i(e,t):i}function oi(i){return function(t,r,s={}){t=ri(t);let n=t.length,o=[];for(let p=0;p<n;p++){let a=t[p];for(let l in r){let m=ii(s,l);m.delay=si(m.delay,p,n);let d=ti(a,l,r[l],m,i);o.push(d)}}return Le(o,s,s.duration)}}var bt=oi(ce);var qi=5;function Ue(i,e,t){let r=Math.max(e-qi,0);return ut(t-i(r),e-r)}var ee={stiffness:100,damping:10,mass:1};var ni=(i=ee.stiffness,e=ee.damping,t=ee.mass)=>e/(2*Math.sqrt(i*t));function ai(i,e,t){return i<e&&t>=e||i>e&&t<=e}var wt=({stiffness:i=ee.stiffness,damping:e=ee.damping,mass:t=ee.mass,from:r=0,to:s=1,velocity:n=0,restSpeed:o=2,restDistance:p=.5}={})=>{n=n?F.s(n):0;let a={done:!1,hasReachedTarget:!1,current:r,target:s},l=s-r,m=Math.sqrt(i/t)/1e3,d=ni(i,e,t),h;if(d<1){let u=m*Math.sqrt(1-d*d);h=y=>s-Math.exp(-d*m*y)*((-n+d*m*l)/u*Math.sin(u*y)+l*Math.cos(u*y))}else h=u=>s-Math.exp(-m*u)*(l+(-n+m*l)*u);return u=>{a.current=h(u);let y=u===0?n:Ue(h,u,a.current),C=Math.abs(y)<=o,E=Math.abs(s-a.current)<=p;return a.done=C&&E,a.hasReachedTarget=ai(r,s,a.current),a}};var yt=10,Ii=1e4;function _t(i,e=k){let t,r=yt,s=i(0),n=[e(s.current)];for(;!s.done&&r<Ii;)s=i(r),n.push(e(s.done?s.target:s.current)),t===void 0&&s.hasReachedTarget&&(t=r),r+=yt;let o=r-yt;return n.length===1&&n.push(s.current),{keyframes:n,duration:o/1e3,overshootDuration:(t??o)/1e3}}function li(i){return M(i)&&!isNaN(i)}function $t(i){return Pe(i)?parseFloat(i):i}function pi(i){let e=new WeakMap;return(t={})=>{let r=new Map,s=(o=0,p=100,a=0,l=!1)=>{let m=`${o}-${p}-${a}-${l}`;return r.has(m)||r.set(m,i(Object.assign({from:o,to:p,velocity:a,restSpeed:l?.05:2,restDistance:l?.01:.5},t))),r.get(m)},n=(o,p)=>(e.has(o)||e.set(o,_t(o,p)),e.get(o));return{createAnimation:(o,p=!0,a,l,m)=>{let d,h,u,y=0,C=k,E=o.length;if(p){C=We(o,l?j.get(de(l)):void 0);let P=o[E-1];if(u=$t(P),E>1&&o[0]!==null)h=$t(o[0]);else{let B=m?.generator;if(B){let{animation:_,generatorStartTime:te}=m,q=_?.startTime||te||0,ie=_?.currentTime||performance.now()-q,b=B(ie).current;h=b,y=Ue(ze=>B(ze).current,ie,b)}else a&&(h=$t(a()))}}if(li(h)&&li(u)){let P=s(h,u,y,l?.includes("scale"));d=Object.assign(Object.assign({},n(P,C)),{easing:"linear"}),m&&(m.generator=P,m.generatorStartTime=performance.now())}if(!d){let P=n(s(0,100));d={easing:"ease",duration:P.overshootDuration}}return d}}}}var D=pi(wt);function Fi(i,e={}){return Le([()=>{let t=new ce(i,[0,1],e);return t.finished.catch(()=>{}),t}],e,e.duration)}function x(i,e,t){return(O(i)?Fi:bt)(i,e,t)}async function W(i){return new Promise(e=>{setTimeout(e,i)})}var G=class extends v{constructor(){super(...arguments);this._uiState="inactive";this._leaveTimer=0}render(){let t=this._uiState==="hovered";return f`
    <div id="glass"></div>
    <div id="container" @mouseenter="${this._containerMouseEnter}" @mouseleave="${this._containerMouseLeave}">
      <a id="backCallout" class="cardLink" href="https://www.marketmuse.com/content-briefs/">
        <figure class="imagePanel">
          <img src="/muse2/shots/shot1.png">
        </figure>
        <figcaption>Content briefs</figcaption>
      </a>

      <div id="moreCount" class="${t?"showing":""}">
        <span @click="${this._moreMouseEnter}">3 ↑</span>
      </div>

      <div id="backLinks">
        <a class="cardLink" href="https://www.marketmuse.com/content-briefs/">
          <figure class="imagePanel">
            <img src="/muse2/shots/shot2.png">
          </figure>
          <figcaption>Pricing</figcaption>
        </a>
        <a class="cardLink" href="https://www.marketmuse.com/content-briefs/">
          <figure class="imagePanel">
            <img src="/muse2/shots/shot3.png">
          </figure>
          <figcaption>How to effectively manage your content planning process</figcaption>
        </a>
        <a class="cardLink" href="https://www.marketmuse.com/content-briefs/">
          <figure class="imagePanel">
            <img src="/muse2/shots/shot4.png">
          </figure>
          <figcaption>Middle-of-funnel content & missed opportunities</figcaption>
        </a>
      </div>

    </div>
    `}async _setUiState(t){var r;if(this._uiState!==t){let s=this._uiState;switch(this._uiState=t,s==="inactive"&&(console.log("not inactive"),await x(((r=this.shadowRoot)==null?void 0:r.querySelectorAll("#backLinks .cardLink"))||[],{opacity:0,y:"100%"},{duration:0,easing:"linear"}),await x(this._container,{x:"-125%",opacity:0},{duration:0,easing:"linear"}).finished,await x(this._container,{x:0,opacity:1},{easing:D()}).finished,await W(1e3)),t){case"hovered":await x(this._backCallout,{scale:1},{easing:D()}).finished;break;case"default":s!=="inactive"&&await this._hideMoreLinks(),x(this._backCallout,{scale:.5},{easing:D()});break}}}_moreMouseEnter(){this._uiState==="hovered"&&(this._showMoreLinks(),this._leaveTimer&&(window.clearTimeout(this._leaveTimer),this._leaveTimer=0))}async _showMoreLinks(){var t;return x(this._glass,{opacity:1},{duration:.5}),x(Array.from(((t=this.shadowRoot)==null?void 0:t.querySelectorAll("#backLinks .cardLink"))||[]).reverse(),{opacity:1,y:0,pointerEvents:"auto"},{duration:.5,delay:Q(.2),y:{easing:D()}}).finished}async _hideMoreLinks(){var t;return x(this._glass,{opacity:0},{duration:.5}),x(Array.from(((t=this.shadowRoot)==null?void 0:t.querySelectorAll("#backLinks .cardLink"))||[]),{opacity:0,y:"100%",pointerEvents:"none"},{duration:.5,delay:Q(.2),y:{easing:D()}}).finished}_containerMouseEnter(){this._leaveTimer&&(window.clearTimeout(this._leaveTimer),this._leaveTimer=0),this._setUiState("hovered")}_containerMouseLeave(){this._leaveTimer&&(window.clearTimeout(this._leaveTimer),this._leaveTimer=0),this._leaveTimer=window.setTimeout(()=>{this._leaveTimer=0,this._setUiState("default")},1e3)}async firstUpdated(){await W(200),this._setUiState("default")}};G.styles=[v.styles,w`
    :host {
      display: block;
      position: fixed;
      z-index: 999999;
      bottom: 24px;
      left: 16px;
    }
    #glass {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 50%;
      background: linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0.5));
      opacity: 0;
      pointer-events: none;
    }
    a {
      cursor: pointer;
      outline: none;
      text-decoration: none;
      border: none;
      display: block;
    }
    figure {
      margin: 0;
      width: 180px;
      height: 210px;
      overflow: hidden;
      border: 2px solid white;
      box-shadow: 0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%);
      border-radius: 6px;
      display: block;
    }
    figure img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    #container {
      transform: translateX(-125%);
      opacity: 0;
      position: relative;
    }
    #backCallout {
      transform-origin: bottom left;
    }
    #backLinks {
      position: absolute;
      bottom: 100%;
      left: 0;
      pointer-events: none;
    }
    #backLinks .cardLink {
      margin-bottom: 12px;
      opacity: 0;
      transform: transLateY(100%);
    }
    figcaption {
      position: absolute;
      top: 50%;
      left: 100%;
      white-space: nowrap;
      transform: translate3d(12px, -50%, 0px);
      line-height: 1;
      background: rgba(0, 0, 0, 0.85);
      color: rgb(255, 255, 255);
      font-size: 14px;
      letter-spacing: 0.5px;
      padding: 10px;
      font-weight: 300;
      border-radius: 4px;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.5s ease 0s;
    }
    .cardLink:hover figcaption {
      opacity: 0;
    }
    #moreCount {
      position: absolute;
      left: 0;
      bottom: 100%;
      width: 100%;
      text-align: center;
      opacity: 0;
      pointer-events: none;
      transform: translateY(0);
    }
    #moreCount.showing {
      transition: opacity 1s ease, transform 1s ease;
      transition-delay: 1s;
      opacity: 1;
      pointer-events: auto;
      transform: translateY(-16px);
    }
    #moreCount span {
      display: inline-block;
      background: rgba(0,0,0,0.8);
      color: white;
      border-radius: 20px;
      padding: 2px 10px;
      font-size: 13px;
      text-transform: uppercase;
      cursor: pointer;
    }
    `],c([g()],G.prototype,"_uiState",2),c([R("#glass")],G.prototype,"_glass",2),c([R("#container")],G.prototype,"_container",2),c([R("#backCallout")],G.prototype,"_backCallout",2),G=c([S("navu-proto")],G);var U=class extends v{constructor(){super(...arguments);this.chevron=!1;this.visited=!1;this._previewing=!1}render(){return f`
    <div id="container">
      <button
        class="${this.visited?"visited":""} ${this._previewing?"previewing":""}"
        @mouseenter="${this._mouseEnter}"
        @mouseleave="${this._mouseleave}">
        ${this.chevron?f`<div id="chevron">»</div>`:f`<div id="square"></div>`}
      </button>
      ${this.image?f`
        <a id="previewCard" href="${this.href||"javascript:void();"}"
          @mouseenter="${this._mouseEnter}"
          @mouseleave="${this._mouseleave}">
            <img src="${this.image}" />
        </a>
      `:""}
    </div>
    `}firstUpdated(){x(this._previewCard,{opacity:0,scale:.6,pointerEvents:"none"},{easing:"linear",duration:0})}set previewing(t){this._previewCard&&this._previewing!==t&&(this._previewing=t,t?x(this._previewCard,{opacity:1,scale:1,pointerEvents:"auto"},{easing:D()}):x(this._previewCard,{opacity:0,scale:.6,pointerEvents:"none"},{easing:"linear",duration:.18}))}_mouseleave(){this.fire("hide-preview")}_mouseEnter(){this.fire("show-preview")}};U.styles=[v.styles,w`
      :host {
        display: block;
      }
      button {
        cursor: pointer;
        background: none;
        border: none;
        display: block;
        padding: 14px 10px;
      }
      #square {
        width: 12px;
        height: 12px;
        border: 1px solid var(--navubar-highlight-color, #808080);
        border-radius: 50%;
        transition: transform 0.3s ease-in-out;
      }
      button.visited #square {
        background-color: var(--navubar-highlight-color, #808080);
      }
      #container {
        position: relative;
      }
      #previewCard {
        display: block;
        position: absolute;
        box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%);
        border-radius: 10px;
        overflow: hidden;
        padding: 6px;
        background: white;
        transform: scale(0.6);
        opacity: 0;
        pointer-events: none;
        transform-origin: bottom left;
        bottom: calc(100% + 16px);
        left: 0;
        z-index: 9999;
        margin: 0;
        width: 180px;
      }
      img {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 6px;
      }
      button.previewing #square {
        transform: scale(1.5);
      }
      #chevron {
        line-height: 12px;
      }
    `],c([L({type:Boolean})],U.prototype,"chevron",2),c([g()],U.prototype,"visited",2),c([g()],U.prototype,"image",2),c([g()],U.prototype,"href",2),c([g()],U.prototype,"_previewing",2),c([R("#previewCard")],U.prototype,"_previewCard",2),U=c([S("page-dot")],U);var ji=[{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot1.png",seen:!0},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot2.png",seen:!0},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot3.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot4.png",seen:!1}],he=class extends v{constructor(){super(...arguments);this.floating=!1;this._pages=ji}render(){return f`
    <div id="container" class="horiz center ${this.floating?"floating":""}">
    ${this._pages.map(t=>f`
      <page-dot 
        .image="${t.image}"
        .href="${t.url}"
        .visited="${t.seen}"
        @show-preview="${this._onShowPreview}"
        @hide-preview="${this._onHidePreview}"></page-dot>
    `)}
    </div>
    `}_clearClosePreviewTimer(){this._closePreviewTimer&&(window.clearTimeout(this._closePreviewTimer),this._closePreviewTimer=0)}_onShowPreview(t){let r=t.target;this._previewDot(r)}_previewDot(t){this._clearClosePreviewTimer(),t!==this._previewingDot&&(this._previewingDot&&(this._previewingDot.previewing=!1),this._previewingDot=t,this._previewingDot.previewing=!0)}_onHidePreview(t){let r=t.target;this._hideDotPreview(r)}_hideDotPreview(t){t===this._previewingDot&&(this._clearClosePreviewTimer(),this._closePreviewTimer=window.setTimeout(()=>{this._previewingDot&&(this._previewingDot.previewing=!1,this._previewingDot=void 0)},1e3))}showInitiaPreview(){var n;if(this._previewingDot)return;let t=null,r=this._pages[0].url,s=Array.from(((n=this.shadowRoot)==null?void 0:n.querySelectorAll("page-dot"))||[]);for(let o of s)if(o.href===r){t=o;break}t&&(this._previewDot(t),setTimeout(()=>{t&&this._hideDotPreview(t)},4e3))}};he.styles=[v.styles,w`
      :host {
        display: block;
      }
      #container {
        padding: 0 8px;
        border-radius: 0 10px 0 0;
        background: var(--navu-bar-bg, white);
        box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);
      }
      #container.floating {
        border-radius: 10px;
      }
    `],c([g()],he.prototype,"floating",2),c([g()],he.prototype,"_pages",2),he=c([S("page-dot-bar")],he);var Bi=[{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot1.png",seen:!0},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot2.png",seen:!0},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot3.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot4.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot5.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot6.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot7.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot1.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot2.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot3.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot4.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot5.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot6.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot7.png",seen:!1}],z=class extends v{constructor(){super(...arguments);this.floating=!1;this._shellOpen=!1;this._cardsLoaded=!1}firstUpdated(){x(this._innerShellContent,{opacity:0,y:"150%"},{easing:"linear",duration:0}),x(this._stripCards,{opacity:0,y:"25%",scale:.4},{easing:"linear",duration:0}),setTimeout(()=>{this._dotBar.showInitiaPreview()},2e3)}render(){return f`
    ${this.floating?f`
    <style>
      :host {
        bottom: 8px !important;
        left: 8px !important;
      }
    </style>
    `:null}

    <div id="bar" class="horiz center" ?hidden="${this._shellOpen}">
      <page-dot-bar .floating="${this.floating}"></page-dot-bar>
      <div id="explorePanel">
        <button id="exploreButton" @click="${this._openShell}">more ↑</button>
      </div>
    </div>
    <div id="shell" ?open="${this._shellOpen}">
      <div id="innerShell" class="vert">
        <div id="glass" class="flex" @click="${this._closeShell}"></div>
        <div id="innerShellContent">
          <div id="searchSection">
            <div id="searchPanel" class="horiz center">
              <div class="flex">
                <input id="searchInput"  autocomplete="off" spellcheck="false" placeholder="What are you looking for?">
              </div>
            </div>
          </div>
          <div id="stripSection">
            <div id="stripScrollPanel">
              <div id="stripContent" class="horiz center">
                ${Bi.map(t=>f`
                  <div class="stripCard ${this._cardsLoaded?"loaded":""}">
                    <img class="cardImage" src="${t.image}">
                  </div>
                `)}
                <div style="min-width: 100px; width: 100px; position: relative; height: 100px;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="extraContent">
        <section>
          <label>Most Popular</label>
          <div class="placeholder"></div>
        </section>
        <section>
          <label>SEO Tricks</label>
          <div class="placeholder"></div>
        </section>
      </div>
    </div>
    `}async _openShell(){this._shellOpen=!0,document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",await x(this._innerShellContent,{opacity:1,y:0},{easing:"ease-out",duration:.3}).finished,await W(200),await x(this._stripCards,{opacity:1,y:"0",scale:1},{easing:D(),delay:Q(.2)}).finished,await W(500),this._stripCards.forEach(t=>t.style.transform=""),this._cardsLoaded=!0}async _closeShell(){x(this._innerShellContent,{opacity:0,y:"150%"},{easing:"ease-in",duration:.3}).finished,document.body.style.overflow="",document.documentElement.style.overflow="",this._shellOpen=!1}};z.styles=[v.styles,w`
      :host {
        display: block;
        position: fixed;
        bottom: 0;
        left: 0;
        --navubar-highlight-color: rgb(115, 64, 96);
        z-index: 100;
      }
      #exploreButton {
        border: none;
        box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
        border-radius: 20px;
        padding: 7px 12px;
        font-family: system-ui;
        text-transform: uppercase;
        font-size: 13px;
        letter-spacing: 1.5px;
        user-select: none;
        cursor: pointer;
        color: #242424;
        background: rgba(255,255,255,0.9);
        transition: opacity 0.3s ease-out;
        opacity: 0;
        pointer-events: none;
      }
      #explorePanel {
        padding: 0 8px 0 16px;
      }
      #shell {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
      }
      #glass {
        -webkit-backdrop-filter: var(--slick-search-glass-filter, blur(10px));
        backdrop-filter: var(--slick-search-glass-filter, blur(10px));
        opacity: 0;
        transition: opacity 15ms linear 30ms;
        height: var(--slick-search-glass-height, 25vh);
        min-height: 116px;
      }
      #innerShell {
        min-height: 100vh;
      }
      #innerShellContent {
        background: white;
        position: relative;
        box-shadow: 0 -6px 10px -4px rgba(0,0,0,0.4);
        transform: translateY(150%);
        opacity: 0;
        padding-bottom: 40px;
      }
      #searchSection {
        max-width:1200px;
        margin: 0 auto;
        padding: 16px 12px;
      }
      #searchPanel {
        background: var(--slick-search-card-background, none);
        box-shadow: var(--slick-search-input-shadow, inset 2px 2px 4px rgba(0,0,0,0.1), inset -2px -2px 4px #f9f9f9);
        border: var(--slick-search-input-border, none);
        border-radius: var(--slick-search-input-border-radius, 24px);
        padding: 0 16px 0 0;
        position: relative;
      }
      #searchInput {
        border: none;
        width: 100%;
        background: none;
        display: block;
        line-height: 40px;
        font-size: 14px;
        padding: 0 16px;
        outline: none;
        font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif;
        color: #555;
      }
      #stripScrollPanel {
        overflow-y: hidden;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      #stripScrollPanel::-webkit-scrollbar {
        width: 0px;
        height: 0px;
        background: transparent;
      }
      .cardImage {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 6px;
      }
      .stripCard {
        position: relative;
        width: 160px;
        min-width: 160px;
        height: 236px;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
      }
      .stripCard.loaded {
        transition: transform 0.28s ease;
        transform-origin: bottom center;
      }
      #stripContent {
        gap: 20px;
        padding: 26px 16px;
      }
      #extraContent {
        background: white;
        opacity: 0;
      }
      .placeholder {
        background: #fafafa;
        height: 200px;
        margin-top: 16px;
      }
      section {
        padding: 16px;
      }
      section label {
        color: #808080;
      font-size: 14px;
      text-transform: uppercase;
      font-family: system-ui;
      letter-spacing: 1px;
      }

      #shell[open] {
        pointer-events: auto;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        background: var(--slick-search-glass-background, rgba(0,0,0,0.4));
      }
      #shell[open] #glass {
        opacity: 1;
        transition-delay: 0.15s;
      }
      #shell[open] #extraContent {
        opacity: 1;
      }
      
      


      @media(hover: hover) {
        #bar:hover #exploreButton {
          pointer-events: auto;
          opacity: 1;
        }
        .stripCard.loaded:hover {
          transform: scale(1.1);
        }
      }
    `],c([L({type:Boolean})],z.prototype,"floating",2),c([g()],z.prototype,"_shellOpen",2),c([g()],z.prototype,"_cardsLoaded",2),c([R("#innerShellContent")],z.prototype,"_innerShellContent",2),c([R("page-dot-bar")],z.prototype,"_dotBar",2),c([Ie(".stripCard")],z.prototype,"_stripCards",2),z=c([S("navu-explorer")],z);var Ni=[{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot1.png",seen:!0},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot2.png",seen:!0},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot3.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot4.png",seen:!1}],ue=class extends v{constructor(){super(...arguments);this.floating=!1;this._pages=Ni}render(){return f`
    <div id="container" class="horiz center ${this.floating?"floating":""}">
    ${this._pages.map(t=>f`
      <page-dot 
        .image="${t.image}"
        .href="${t.url}"
        .visited="${t.seen}"
        @show-preview="${this._onShowPreview}"
        @hide-preview="${this._onHidePreview}"></page-dot>
    `)}
      <page-dot id="chevron" chevron 
        @click="${()=>this.fire("chevron")}" 
        @show-preview="${this._hidePreviewNow}"
        @hide-preview="${this._hidePreviewNow}"></page-dot>
    </div>
    `}_clearClosePreviewTimer(){this._closePreviewTimer&&(window.clearTimeout(this._closePreviewTimer),this._closePreviewTimer=0)}_onShowPreview(t){let r=t.target;this._previewDot(r)}_previewDot(t){this._clearClosePreviewTimer(),t!==this._previewingDot&&(this._previewingDot&&(this._previewingDot.previewing=!1),this._previewingDot=t,this._previewingDot.previewing=!0)}_onHidePreview(t){let r=t.target;this._hideDotPreview(r)}_hideDotPreview(t){t===this._previewingDot&&(this._clearClosePreviewTimer(),this._closePreviewTimer=window.setTimeout(()=>{this._hidePreviewNow()},1e3))}_hidePreviewNow(){this._previewingDot&&(this._previewingDot.previewing=!1,this._previewingDot=void 0)}showInitiaPreview(){var n;if(this._previewingDot)return;let t=null,r=this._pages[0].url,s=Array.from(((n=this.shadowRoot)==null?void 0:n.querySelectorAll("page-dot"))||[]);for(let o of s)if(o.href===r){t=o;break}t&&(this._previewDot(t),setTimeout(()=>{t&&this._hideDotPreview(t)},4e3))}};ue.styles=[v.styles,w`
      :host {
        display: block;
      }
      #container {
        padding: 0 8px;
        border-radius: 0 10px 0 0;
        background: var(--navu-bar-bg, white);
        box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);
      }
      #container.floating {
        border-radius: 10px;
      }
      #chevron {
        display: none;
      }
      #container:hover #chevron {
        display: block;
      }
    `],c([g()],ue.prototype,"floating",2),c([g()],ue.prototype,"_pages",2),ue=c([S("page-dot-bar2")],ue);var Vi=[{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot1.png",seen:!0},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot2.png",seen:!0},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot3.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot4.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot5.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot6.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot7.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot1.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot2.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot3.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot4.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot5.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot6.png",seen:!1},{url:"https://www.marketmuse.com/content-briefs/",image:"/muse2/shots/shot7.png",seen:!1}],H=class extends v{constructor(){super(...arguments);this.floating=!1;this._shellOpen=!1;this._cardsLoaded=!1}firstUpdated(){x(this._innerShellContent,{opacity:0,y:"150%"},{easing:"linear",duration:0}),x(this._stripCards,{opacity:0,y:"25%",scale:.4},{easing:"linear",duration:0}),setTimeout(()=>{this._dotBar.showInitiaPreview()},2e3)}render(){return f`
    ${this.floating?f`
    <style>
      :host {
        bottom: 8px !important;
        left: 8px !important;
      }
    </style>
    `:null}

    <div id="bar" class="horiz center" ?hidden="${this._shellOpen}">
      <page-dot-bar2 .floating="${this.floating}" @chevron="${this._openShell}"></page-dot-bar2>
    </div>
    <div id="shell" ?open="${this._shellOpen}">
      <div id="innerShell" class="vert">
        <div id="innerShellContent">
          <div id="searchSection">
            <div id="searchPanel" class="horiz center">
              <div class="flex">
                <input id="searchInput"  autocomplete="off" spellcheck="false" placeholder="What are you looking for?">
              </div>
            </div>
            <button id="closeButton" @click="${this._closeShell}">Close ↓</button>
          </div>
          <div id="stripSection">
            <div id="stripScrollPanel">
              <div id="stripContent" class="horiz center">
                ${Vi.map(t=>f`
                  <div class="stripCard ${this._cardsLoaded?"loaded":""}">
                    <img class="cardImage" src="${t.image}">
                  </div>
                `)}
                <div style="min-width: 100px; width: 100px; position: relative; height: 100px;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `}async _openShell(){this._shellOpen=!0,await x(this._innerShellContent,{opacity:1,y:0},{easing:"ease-out",duration:.3}).finished,await W(200),await x(this._stripCards,{opacity:1,y:"0",scale:1},{easing:D(),delay:Q(.1)}).finished,await W(500),this._stripCards.forEach(t=>t.style.transform=""),this._cardsLoaded=!0}async _closeShell(){x(this._innerShellContent,{opacity:0,y:"150%"},{easing:"ease-in",duration:.3}),this._shellOpen=!1}};H.styles=[v.styles,w`
      :host {
        display: block;
        position: fixed;
        bottom: 0;
        left: 0;
        --navubar-highlight-color: rgb(115, 64, 96);
        z-index: 100;
      }
      #exploreButton {
        border: none;
        box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
        border-radius: 20px;
        padding: 7px 12px;
        font-family: system-ui;
        text-transform: uppercase;
        font-size: 13px;
        letter-spacing: 1.5px;
        user-select: none;
        cursor: pointer;
        color: #242424;
        background: rgba(255,255,255,0.9);
        transition: opacity 0.3s ease-out;
        opacity: 0;
        pointer-events: none;
      }
      #explorePanel {
        padding: 0 8px 0 16px;
      }
      #shell {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        pointer-events: none;
      }
      #innerShellContent {
        background: #fafafa;
        position: relative;
        box-shadow: 0 -5px 10px -4px rgba(0,0,0,0.2);
        transform: translateY(150%);
        opacity: 0;
        padding-bottom: 4px;
      }
      #searchSection {
        max-width: 225px;
        margin: 0 0 0 auto;
        padding: 8px 12px 2px;
      }
      #searchPanel {
        background: var(--slick-search-card-background, none);
        box-shadow: var(--slick-search-input-shadow, inset 2px 2px 4px rgba(0,0,0,0.1), inset -2px -2px 4px #f9f9f9);
        border: var(--slick-search-input-border, none);
        border-radius: var(--slick-search-input-border-radius, 24px);
        padding: 0 16px 0 0;
        position: relative;
      }
      #searchInput {
        border: none;
        width: 100%;
        background: none;
        display: block;
        line-height: 30px;
        font-size: 12px;
        padding: 0 16px;
        outline: none;
        font-family: "SF Pro Display", -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif;
        color: #555;
      }
      #stripScrollPanel {
        overflow-y: hidden;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      #stripScrollPanel::-webkit-scrollbar {
        width: 0px;
        height: 0px;
        background: transparent;
      }
      .cardImage {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 6px;
      }
      .stripCard {
        position: relative;
        width: 120px;
        min-width: 120px;
        height: 177px;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
      }
      .stripCard.loaded {
        transition: transform 0.28s ease;
        transform-origin: bottom center;
      }
      #stripContent {
        gap: 20px;
        padding: 20px 16px 16px;
      }
      section {
        padding: 16px;
      }
      section label {
        color: #808080;
      font-size: 14px;
      text-transform: uppercase;
      font-family: system-ui;
      letter-spacing: 1px;
      }

      #shell[open] {
        pointer-events: auto;
      }
      
      #closeButton {
        position: absolute;
        top: 12px;
        left: 16px;
        background: none;
        border: none;
        color: #808080;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-size: 12px;
        cursor: pointer;
        padding: 8px 10px 8px 0;
      }


      @media(hover: hover) {
        #bar:hover #exploreButton {
          pointer-events: auto;
          opacity: 1;
        }
        .stripCard.loaded:hover {
          transform: scale(1.1);
        }
      }
    `],c([L({type:Boolean})],H.prototype,"floating",2),c([g()],H.prototype,"_shellOpen",2),c([g()],H.prototype,"_cardsLoaded",2),c([R("#innerShellContent")],H.prototype,"_innerShellContent",2),c([R("page-dot-bar2")],H.prototype,"_dotBar",2),c([Ie(".stripCard")],H.prototype,"_stripCards",2),H=c([S("navu-explorer2")],H);})();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

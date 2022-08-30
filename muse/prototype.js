"use strict";(()=>{var wt=Object.defineProperty;var Ct=Object.getOwnPropertyDescriptor;var u=(o,t,e,i)=>{for(var s=i>1?void 0:i?Ct(t,e):t,n=o.length-1,r;n>=0;n--)(r=o[n])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&wt(t,e,s),s};var K=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),at=new WeakMap,M=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(K&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=at.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&at.set(e,t))}return t}toString(){return this.cssText}},ht=o=>new M(typeof o=="string"?o:o+"",void 0,G),g=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((i,s,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[n+1],o[0]);return new M(e,o,G)},I=(o,t)=>{K?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let i=document.createElement("style"),s=window.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)})},V=K?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return ht(e)})(o):o;var J,dt=window.trustedTypes,kt=dt?dt.emptyScript:"",ct=window.reactiveElementPolyfillSupport,Z={toAttribute(o,t){switch(t){case Boolean:o=o?kt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},pt=(o,t)=>t!==o&&(t==t||o==o),Y={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:pt},_=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=Y){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Y}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(V(s))}else t!==void 0&&e.push(V(t));return e}static _$Ep(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return I(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Y){var s,n;let r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){let d=((n=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&n!==void 0?n:Z.toAttribute)(e,i.type);this._$El=t,d==null?this.removeAttribute(r):this.setAttribute(r,d),this._$El=null}}_$AK(t,e){var i,s;let n=this.constructor,r=n._$Ev.get(t);if(r!==void 0&&this._$El!==r){let d=n.getPropertyOptions(r),l=d.converter,a=(s=(i=l?.fromAttribute)!==null&&i!==void 0?i:typeof l=="function"?l:null)!==null&&s!==void 0?s:Z.fromAttribute;this._$El=r,this[r]=a(e,d.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||pt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,n)=>this[n]=s),this._$Ei=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};_.finalized=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},ct?.({ReactiveElement:_}),((J=globalThis.reactiveElementVersions)!==null&&J!==void 0?J:globalThis.reactiveElementVersions=[]).push("1.3.4");var F,T=globalThis.trustedTypes,ut=T?T.createPolicy("lit-html",{createHTML:o=>o}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,_t="?"+x,Pt=`<${_t}>`,U=document,z=(o="")=>U.createComment(o),q=o=>o===null||typeof o!="object"&&typeof o!="function",bt=Array.isArray,Rt=o=>bt(o)||typeof o?.[Symbol.iterator]=="function",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,mt=/>/g,E=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ft=/'/g,gt=/"/g,At=/^(?:script|style|textarea|title)$/i,xt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),$=xt(1),qt=xt(2),w=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),$t=new WeakMap,St=(o,t,e)=>{var i,s;let n=(i=e?.renderBefore)!==null&&i!==void 0?i:t,r=n._$litPart$;if(r===void 0){let d=(s=e?.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=r=new k(t.insertBefore(z(),d),d,void 0,e??{})}return r._$AI(o),r},R=U.createTreeWalker(U,129,null,!1),Tt=(o,t)=>{let e=o.length-1,i=[],s,n=t===2?"<svg>":"",r=N;for(let l=0;l<e;l++){let a=o[l],y,h,c=-1,m=0;for(;m<a.length&&(r.lastIndex=m,h=r.exec(a),h!==null);)m=r.lastIndex,r===N?h[1]==="!--"?r=vt:h[1]!==void 0?r=mt:h[2]!==void 0?(At.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=E):h[3]!==void 0&&(r=E):r===E?h[0]===">"?(r=s??N,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,y=h[1],r=h[3]===void 0?E:h[3]==='"'?gt:ft):r===gt||r===ft?r=E:r===vt||r===mt?r=N:(r=E,s=void 0);let B=r===E&&o[l+1].startsWith("/>")?" ":"";n+=r===N?a+Pt:c>=0?(i.push(y),a.slice(0,c)+"$lit$"+a.slice(c)+x+B):a+x+(c===-2?(i.push(void 0),l):B)}let d=n+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ut!==void 0?ut.createHTML(d):d,i]},C=class{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0,d=t.length-1,l=this.parts,[a,y]=Tt(t,e);if(this.el=C.createElement(a,i),R.currentNode=this.el.content,e===2){let h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=R.nextNode())!==null&&l.length<d;){if(s.nodeType===1){if(s.hasAttributes()){let h=[];for(let c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(x)){let m=y[r++];if(h.push(c),m!==void 0){let B=s.getAttribute(m.toLowerCase()+"$lit$").split(x),W=/([.?@])?(.*)/.exec(m);l.push({type:1,index:n,name:W[2],strings:B,ctor:W[1]==="."?X:W[1]==="?"?tt:W[1]==="@"?et:O})}else l.push({type:6,index:n})}for(let c of h)s.removeAttribute(c)}if(At.test(s.tagName)){let h=s.textContent.split(x),c=h.length-1;if(c>0){s.textContent=T?T.emptyScript:"";for(let m=0;m<c;m++)s.append(h[m],z()),R.nextNode(),l.push({type:2,index:++n});s.append(h[c],z())}}}else if(s.nodeType===8)if(s.data===_t)l.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf(x,h+1))!==-1;)l.push({type:7,index:n}),h+=x.length-1}n++}}static createElement(t,e){let i=U.createElement("template");return i.innerHTML=t,i}};function H(o,t,e=o,i){var s,n,r,d;if(t===w)return t;let l=i!==void 0?(s=e._$Cl)===null||s===void 0?void 0:s[i]:e._$Cu,a=q(t)?void 0:t._$litDirective$;return l?.constructor!==a&&((n=l?._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(o),l._$AT(o,e,i)),i!==void 0?((r=(d=e)._$Cl)!==null&&r!==void 0?r:d._$Cl=[])[i]=l:e._$Cu=l),l!==void 0&&(t=H(o,l._$AS(o,t.values),l,i)),t}var Q=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;let{el:{content:i},parts:s}=this._$AD,n=((e=t?.creationScope)!==null&&e!==void 0?e:U).importNode(i,!0);R.currentNode=n;let r=R.nextNode(),d=0,l=0,a=s[0];for(;a!==void 0;){if(d===a.index){let y;a.type===2?y=new k(r,r.nextSibling,this,t):a.type===1?y=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(y=new it(r,this,t)),this.v.push(y),a=s[++l]}d!==a?.index&&(r=R.nextNode(),d++)}return n}m(t){let e=0;for(let i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},k=class{constructor(t,e,i,s){var n;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$C_=(n=s?.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$C_}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),q(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==w&&this.T(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.k(t):Rt(t)?this.S(t):this.T(t)}j(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.j(t))}T(t){this._$AH!==p&&q(this._$AH)?this._$AA.nextSibling.data=t:this.k(U.createTextNode(t)),this._$AH=t}$(t){var e;let{values:i,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=C.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.m(i);else{let r=new Q(n,this),d=r.p(this.options);r.m(i),this.k(d),this._$AH=r}}_$AC(t){let e=$t.get(t.strings);return e===void 0&&$t.set(t.strings,e=new C(t)),e}S(t){bt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let n of t)s===e.length?e.push(i=new k(this.j(z()),this.j(z()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$C_=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},O=class{constructor(t,e,i,s,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){let n=this.strings,r=!1;if(n===void 0)t=H(this,t,e,0),r=!q(t)||t!==this._$AH&&t!==w,r&&(this._$AH=t);else{let d=t,l,a;for(t=n[0],l=0;l<n.length-1;l++)a=H(this,d[i+l],e,l),a===w&&(a=this._$AH[l]),r||(r=!q(a)||a!==this._$AH[l]),a===p?t=p:t!==p&&(t+=(a??"")+n[l+1]),this._$AH[l]=a}r&&!s&&this.P(t)}P(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},X=class extends O{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===p?void 0:t}},Ut=T?T.emptyScript:"",tt=class extends O{constructor(){super(...arguments),this.type=4}P(t){t&&t!==p?this.element.setAttribute(this.name,Ut):this.element.removeAttribute(this.name)}},et=class extends O{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=H(this,t,e,0))!==null&&i!==void 0?i:p)===w)return;let s=this._$AH,n=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==p&&(s===p||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},it=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}};var yt=window.litHtmlPolyfillSupport;yt?.(C,k),((F=globalThis.litHtmlVersions)!==null&&F!==void 0?F:globalThis.litHtmlVersions=[]).push("2.2.7");var st,ot;var S=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=St(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return w}};S.finalized=!0,S._$litElement$=!0,(st=globalThis.litElementHydrateSupport)===null||st===void 0||st.call(globalThis,{LitElement:S});var Et=globalThis.litElementPolyfillSupport;Et?.({LitElement:S});((ot=globalThis.litElementVersions)!==null&&ot!==void 0?ot:globalThis.litElementVersions=[]).push("3.2.2");var P=o=>t=>typeof t=="function"?((e,i)=>(window.customElements.define(e,i),i))(o,t):((e,i)=>{let{kind:s,elements:n}=i;return{kind:s,elements:n,finisher(r){window.customElements.define(e,r)}}})(o,t);var Ht=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function j(o){return(t,e)=>e!==void 0?((i,s,n)=>{s.constructor.createProperty(n,i)})(o,t,e):Ht(o,t)}function f(o){return j({...o,state:!0})}var rt,de=((rt=window.HTMLSlotElement)===null||rt===void 0?void 0:rt.prototype.assignedElements)!=null?(o,t)=>o.assignedElements(t):(o,t)=>o.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);var nt=class extends Event{constructor(e,i){super(e,{bubbles:!0,composed:!0});this._detail=i}get detail(){return this._detail}},v=class extends S{fire(t,e){this.dispatchEvent(new nt(t,e))}};v.styles=g`
    * {box-sizing: border-box;}
    [hidden] {display: none !important;}
    .horiz {display: flex; flex-direction: row;}
    .vert {display: flex; flex-direction: column;}
    .center {align-items: center;}
    .center2 {justify-content: center; align-items: center;}
    .flex {flex: 1;}
    .wrap {flex-wrap: wrap;}
  `;var L=class extends v{constructor(){super(...arguments);this.active=!1}render(){return $`
    <div id="container" class="${this.active?"active":""}">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    `}};L.styles=[v.styles,g`
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
    `],u([j({type:Boolean,reflect:!0})],L.prototype,"active",2),L=u([P("thinking-animation")],L);var b=class extends v{constructor(){super(...arguments);this.visited=!1;this.selected=!1}render(){return $`
    <div id="container">
      <button class="${this.visited?"visited":""} ${this.selected?"selected":""}">
        <div id="square"></div>
      </button>
      ${this.image?$`<a class="previewLink" href="${this.href||"javascript:void();"}"><img src="${this.image}" /></a>`:""}
    </div>
    `}};b.styles=[v.styles,g`
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
    `],u([f()],b.prototype,"visited",2),u([f()],b.prototype,"selected",2),u([f()],b.prototype,"image",2),u([f()],b.prototype,"href",2),b=u([P("page-indicator")],b);var lt=[{label:"Case Study: How to Double Traffic in 6 Months \xBB",url:"./case-study.html",image:"./page0.png"},{label:"Discover more about Structured Data \xBB",url:"./structured-data.html",image:"./page1.png"},{label:"Curious about pricing?",url:"./pricing.html",image:"./page2.png"},{label:"Something specific? Check our knowledge base \xBB",url:"./knowledge-base.html",image:"./page3.png"}],A=class extends v{constructor(){super(...arguments);this._thinking=!1;this.alt=!1}render(){let e=this._hovered||this._selected;return $`
    <div id="container" class="horiz center ${this.alt?"alt":""}">
      <thinking-animation .active="${this._thinking}"></thinking-animation>
      <div id="messageConatiner" class="flex">
        ${lt.map(i=>$`
          <div class="messageLinkPanel horiz center ${i===e?"selected":""}">
            <a href="${i.url}" class="messageLink">${i.label}</a>
          </div>
        `)}
      </div>
      ${lt.map((i,s)=>$`
        <page-indicator 
          .image="${i.image}"
          .href="${i.url}"
          .visited="${s<2}"
          .selected="${i===this._selected}"
          @click="${()=>this._selected=i}"
          @mouseenter="${()=>this._hovered=i}" 
          @mouseleave="${()=>this._hovered=void 0}"></page-indicator>
      `)}
      <div id="altPanel" class="horiz center2">
        <div class="horiz center">
          <span>Still interested in Structured Data?</span>
          <button id="actionButton">See our webinar</button>
        </div>
      </div>
    </div>
    `}firstUpdated(){setTimeout(()=>{this._selected||(this._hovered?this.firstUpdated():(this._thinking=!0,setTimeout(()=>{this._thinking=!1,this._selected=lt[0]},4e3)))},5e3)}};A.styles=[v.styles,g`
      :host {
        display: block;
        background: white;
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
        background: white;
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
      #actionButton {
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
    `],u([f()],A.prototype,"_selected",2),u([f()],A.prototype,"_hovered",2),u([f()],A.prototype,"_thinking",2),u([f()],A.prototype,"alt",2),A=u([P("navu-bar")],A);})();
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

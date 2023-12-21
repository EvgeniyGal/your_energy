import{A as fc,i as yx}from"./index-c7d016a4.js";const hv=document.getElementById("daily-quote"),dv=document.getElementById("quote-author"),vx=new fc;function Aw(){const n=new Date,e=n.getFullYear(),t=(n.getMonth()+1).toString().padStart(2,"0");return`${n.getDate().toString().padStart(2,"0")}/${t}/${e}`}async function Ix(){try{const n=await vx.fetchQuote(),e=n.quote,t=n.author,r=Aw();return localStorage.setItem("today",r),localStorage.setItem("quote",e),localStorage.setItem("author",t),{quote:e,author:t}}catch(n){console.error("Error fetching quote:",n.message)}}const fv=localStorage.getItem("today"),wx=Aw();if(!fv||fv!==wx)Ix().then(({quote:n,author:e})=>{hv.textContent=n,dv.textContent=e});else{const n=localStorage.getItem("quote");n&&(hv.textContent=n);const e=localStorage.getItem("author");e&&(dv.textContent=e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ex=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],h=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},bw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,h=i+2<n.length,f=h?n[i+2]:0,p=s>>2,m=(s&3)<<4|l>>4;let w=(l&15)<<2|f>>6,b=f&63;h||(b=64,a||(w=64)),r.push(t[p],t[m],t[w],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Rw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ex(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const f=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||f==null||m==null)throw new Tx;const w=s<<2|l>>4;if(r.push(w),f!==64){const b=l<<4&240|f>>2;if(r.push(b),m!==64){const q=f<<6&192|m;r.push(q)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Tx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ax=function(n){const e=Rw(n);return bw.encodeByteArray(e,!0)},cl=function(n){return Ax(n).replace(/\./g,"")},Sw=function(n){try{return bw.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ul(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Rx(t)||(n[t]=ul(n[t],e[t]));return n}function Rx(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx=()=>bx().__FIREBASE_DEFAULTS__,Px=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Cx=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Sw(n[1]);return e&&JSON.parse(e)},Pp=()=>{try{return Sx()||Px()||Cx()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Pw=()=>{var n;return(n=Pp())===null||n===void 0?void 0:n.config},Dx=n=>{var e;return(e=Pp())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xx(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),l="";return[cl(JSON.stringify(t)),cl(JSON.stringify(a)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function Cp(){var n;const e=(n=Pp())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ox(){return typeof self=="object"&&self.self===self}function Cw(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Dp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dw(){const n=je();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Lx(){return!Cp()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Oa(){try{return typeof indexedDB=="object"}catch{return!1}}function Vx(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx="FirebaseError";class qt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Mx,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ss.prototype.create)}}class ss{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Fx(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new qt(i,l,r)}}function Fx(n,e){return n.replace(Ux,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ux=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Bx(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function xf(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(gv(s)&&gv(a)){if(!xf(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function gv(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ga(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function kw(n,e){const t=new qx(n,e);return t.subscribe.bind(t)}class qx{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Wx(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=af),i.error===void 0&&(i.error=af),i.complete===void 0&&(i.complete=af);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wx(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function af(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(n){return n&&n._delegate?n._delegate:n}class Jn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new kx;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gx(e))try{this.getOrInitializeService({instanceIdentifier:Si})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Si){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Si){return this.instances.has(e)}getOptions(e=Si){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zx(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Si){return this.component?this.component.multipleInstances?e:Si:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zx(n){return n===Si?void 0:n}function Gx(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $x(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=[];var ye;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ye||(ye={}));const xw={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},Kx=ye.INFO,jx={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},Qx=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=jx[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ql{constructor(e){this.name=e,this._logLevel=Kx,this._logHandler=Qx,this._userLogHandler=null,kp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}function Yx(n){kp.forEach(e=>{e.setLogLevel(n)})}function Jx(n,e){for(const t of kp){let r=null;e&&e.level&&(r=xw[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...a)=>{const l=a.map(h=>{if(h==null)return null;if(typeof h=="string")return h;if(typeof h=="number"||typeof h=="boolean")return h.toString();if(h instanceof Error)return h.message;try{return JSON.stringify(h)}catch{return null}}).filter(h=>h).join(" ");s>=(r??i.logLevel)&&n({level:ye[s].toLowerCase(),message:l,args:a,type:i.name})}}}const Xx=(n,e)=>e.some(t=>n instanceof t);let mv,_v;function Zx(){return mv||(mv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eN(){return _v||(_v=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nw=new WeakMap,Nf=new WeakMap,Ow=new WeakMap,cf=new WeakMap,xp=new WeakMap;function tN(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Hr(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Nw.set(t,n)}).catch(()=>{}),xp.set(e,n),e}function nN(n){if(Nf.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Nf.set(n,e)}let Of={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Nf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ow.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Hr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function rN(n){Of=n(Of)}function iN(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(uf(this),e,...t);return Ow.set(r,e.sort?e.sort():[e]),Hr(r)}:eN().includes(n)?function(...e){return n.apply(uf(this),e),Hr(Nw.get(this))}:function(...e){return Hr(n.apply(uf(this),e))}}function sN(n){return typeof n=="function"?iN(n):(n instanceof IDBTransaction&&nN(n),Xx(n,Zx())?new Proxy(n,Of):n)}function Hr(n){if(n instanceof IDBRequest)return tN(n);if(cf.has(n))return cf.get(n);const e=sN(n);return e!==n&&(cf.set(n,e),xp.set(e,n)),e}const uf=n=>xp.get(n);function oN(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=Hr(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Hr(a.result),h.oldVersion,h.newVersion,Hr(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{s&&h.addEventListener("close",()=>s()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const aN=["get","getKey","getAll","getAllKeys","count"],cN=["put","add","delete","clear"],lf=new Map;function yv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(lf.get(e))return lf.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=cN.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||aN.includes(t)))return;const s=async function(a,...l){const h=this.transaction(a,i?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[t](...l),i&&h.done]))[0]};return lf.set(e,s),s}rN(n=>({...n,get:(e,t,r)=>yv(e,t)||n.get(e,t,r),has:(e,t)=>!!yv(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lN(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function lN(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lf="@firebase/app",vv="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new ql("@firebase/app"),hN="@firebase/app-compat",dN="@firebase/analytics-compat",fN="@firebase/analytics",pN="@firebase/app-check-compat",gN="@firebase/app-check",mN="@firebase/auth",_N="@firebase/auth-compat",yN="@firebase/database",vN="@firebase/database-compat",IN="@firebase/functions",wN="@firebase/functions-compat",EN="@firebase/installations",TN="@firebase/installations-compat",AN="@firebase/messaging",RN="@firebase/messaging-compat",bN="@firebase/performance",SN="@firebase/performance-compat",PN="@firebase/remote-config",CN="@firebase/remote-config-compat",DN="@firebase/storage",kN="@firebase/storage-compat",xN="@firebase/firestore",NN="@firebase/firestore-compat",ON="firebase",LN="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="[DEFAULT]",VN={[Lf]:"fire-core",[hN]:"fire-core-compat",[fN]:"fire-analytics",[dN]:"fire-analytics-compat",[gN]:"fire-app-check",[pN]:"fire-app-check-compat",[mN]:"fire-auth",[_N]:"fire-auth-compat",[yN]:"fire-rtdb",[vN]:"fire-rtdb-compat",[IN]:"fire-fn",[wN]:"fire-fn-compat",[EN]:"fire-iid",[TN]:"fire-iid-compat",[AN]:"fire-fcm",[RN]:"fire-fcm-compat",[bN]:"fire-perf",[SN]:"fire-perf-compat",[PN]:"fire-rc",[CN]:"fire-rc-compat",[DN]:"fire-gcs",[kN]:"fire-gcs-compat",[xN]:"fire-fst",[NN]:"fire-fst-compat","fire-js":"fire-js",[ON]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new Map,La=new Map;function ll(n,e){try{n.container.addComponent(e)}catch(t){Gi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Lw(n,e){n.container.addOrOverwriteComponent(e)}function Yr(n){const e=n.name;if(La.has(e))return Gi.debug(`There were multiple attempts to register component ${e}.`),!1;La.set(e,n);for(const t of Qr.values())ll(t,n);return!0}function Vw(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function MN(n,e,t=jr){Vw(n,e).clearInstance(t)}function FN(){La.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_r=new ss("app","Firebase",UN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BN=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=LN;function Np(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:jr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw _r.create("bad-app-name",{appName:String(i)});if(t||(t=Pw()),!t)throw _r.create("no-options");const s=Qr.get(i);if(s){if(xf(t,s.options)&&xf(r,s.config))return s;throw _r.create("duplicate-app",{appName:i})}const a=new Hx(i);for(const h of La.values())a.addComponent(h);const l=new BN(t,r,a);return Qr.set(i,l),l}function qN(n=jr){const e=Qr.get(n);if(!e&&n===jr&&Pw())return Np();if(!e)throw _r.create("no-app",{appName:n});return e}function WN(){return Array.from(Qr.values())}async function Mw(n){const e=n.name;Qr.has(e)&&(Qr.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function jn(n,e,t){var r;let i=(r=VN[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gi.warn(l.join(" "));return}Yr(new Jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Fw(n,e){if(n!==null&&typeof n!="function")throw _r.create("invalid-log-argument");Jx(n,e)}function Uw(n){Yx(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N="firebase-heartbeat-database",zN=1,Va="firebase-heartbeat-store";let hf=null;function Bw(){return hf||(hf=oN($N,zN,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Va)}}}).catch(n=>{throw _r.create("idb-open",{originalErrorMessage:n.message})})),hf}async function GN(n){try{return await(await Bw()).transaction(Va).objectStore(Va).get(qw(n))}catch(e){if(e instanceof qt)Gi.warn(e.message);else{const t=_r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gi.warn(t.message)}}}async function Iv(n,e){try{const r=(await Bw()).transaction(Va,"readwrite");await r.objectStore(Va).put(e,qw(n)),await r.done}catch(t){if(t instanceof qt)Gi.warn(t.message);else{const r=_r.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Gi.warn(r.message)}}}function qw(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=1024,KN=30*24*60*60*1e3;class jN{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new YN(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=KN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wv(),{heartbeatsToSend:r,unsentEntries:i}=QN(this._heartbeatsCache.heartbeats),s=cl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function wv(){return new Date().toISOString().substring(0,10)}function QN(n,e=HN){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Ev(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ev(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class YN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oa()?Vx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await GN(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Iv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Iv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ev(n){return cl(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(n){Yr(new Jn("platform-logger",e=>new uN(e),"PRIVATE")),Yr(new Jn("heartbeat",e=>new jN(e),"PRIVATE")),jn(Lf,vv,n),jn(Lf,vv,"esm2017"),jn("fire-js","")}JN("");const XN=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:qt,SDK_VERSION:ci,_DEFAULT_ENTRY_NAME:jr,_addComponent:ll,_addOrOverwriteComponent:Lw,_apps:Qr,_clearComponents:FN,_components:La,_getProvider:Vw,_registerComponent:Yr,_removeServiceInstance:MN,deleteApp:Mw,getApp:qN,getApps:WN,initializeApp:Np,onLog:Fw,registerVersion:jn,setLogLevel:Uw},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,t){this._delegate=e,this.firebase=t,ll(e,new Jn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Mw(this._delegate)))}_getService(e,t=jr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=jr){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){ll(this._delegate,e)}_addOrOverwriteComponent(e){Lw(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Tv=new ss("app-compat","Firebase",eO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(n){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:jn,setLogLevel:Uw,onLog:Fw,apps:null,SDK_VERSION:ci,INTERNAL:{registerComponent:l,removeApp:r,useAsService:h,modularAPIs:XN}};t.default=t,Object.defineProperty(t,"apps",{get:a});function r(f){delete e[f]}function i(f){if(f=f||jr,!pv(e,f))throw Tv.create("no-app",{appName:f});return e[f]}i.App=n;function s(f,p={}){const m=Np(f,p);if(pv(e,m.name))return e[m.name];const w=new n(m,t);return e[m.name]=w,w}function a(){return Object.keys(e).map(f=>e[f])}function l(f){const p=f.name,m=p.replace("-compat","");if(Yr(f)&&f.type==="PUBLIC"){const w=(b=i())=>{if(typeof b[m]!="function")throw Tv.create("invalid-app-argument",{appName:p});return b[m]()};f.serviceProps!==void 0&&ul(w,f.serviceProps),t[m]=w,n.prototype[m]=function(...b){return this._getService.bind(this,p).apply(this,f.multipleInstances?b:[])}}return f.type==="PUBLIC"?t[m]:null}function h(f,p){return p==="serverAuth"?null:p}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(){const n=tO(ZN);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Ww,extendNamespace:e,createSubscribe:kw,ErrorFactory:ss,deepExtend:ul});function e(t){ul(n,t)}return n}const nO=Ww();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=new ql("@firebase/app-compat"),rO="@firebase/app-compat",iO="0.2.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sO(n){jn(rO,iO,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Ox()&&self.firebase!==void 0){Av.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Av.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Jr=nO;sO();var oO="firebase",aO="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jr.registerVersion(oO,aO,"app-compat");function Op(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const ra={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Cs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function $w(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uO=cO,lO=$w,zw=new ss("auth","Firebase",$w());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=new ql("@firebase/auth");function hO(n,...e){hl.logLevel<=ye.WARN&&hl.warn(`Auth (${ci}): ${n}`,...e)}function Qu(n,...e){hl.logLevel<=ye.ERROR&&hl.error(`Auth (${ci}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(n,...e){throw Lp(n,...e)}function St(n,...e){return Lp(n,...e)}function Gw(n,e,t){const r=Object.assign(Object.assign({},lO()),{[e]:t});return new ss("auth","Firebase",r).create(e,{appName:n.name})}function wo(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ct(n,"argument-error"),Gw(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lp(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return zw.create(n,...e)}function B(n,e,...t){if(!n)throw Lp(e,...t)}function $n(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Qu(e),new Error(e)}function Cn(n,e){n||$n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Vp(){return Rv()==="http:"||Rv()==="https:"}function Rv(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vp()||Cw()||"connection"in navigator)?navigator.onLine:!0}function fO(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Cn(t>e,"Short delay should be less than long delay!"),this.isMobile=Nx()||Dp()}get(){return dO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(n,e){Cn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO=new pc(3e4,6e4);function tt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function nt(n,e,t,r,i={}){return Kw(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=Io(Object.assign({key:n.config.apiKey},a)).slice(1),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode),Hw.fetch()(jw(n,n.config.apiHost,t,l),Object.assign({method:e,headers:h,referrerPolicy:"no-referrer"},s))})}async function Kw(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},pO),e);try{const i=new _O(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw ma(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[h,f]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw ma(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw ma(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw ma(n,"user-disabled",a);const p=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Gw(n,p,f);Ct(n,p)}}catch(i){if(i instanceof qt)throw i;Ct(n,"network-request-failed",{message:String(i)})}}async function Tr(n,e,t,r,i={}){const s=await nt(n,e,t,r,i);return"mfaPendingCredential"in s&&Ct(n,"multi-factor-auth-required",{_serverResponse:s}),s}function jw(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Mp(n.config,i):`${n.config.apiScheme}://${i}`}function mO(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _O{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(St(this.auth,"network-request-failed")),gO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ma(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=St(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(n){return n!==void 0&&n.getResponse!==void 0}function Sv(n){return n!==void 0&&n.enterprise!==void 0}class yO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return mO(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vO(n){return(await nt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function IO(n,e){return nt(n,"GET","/v2/recaptchaConfig",tt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wO(n,e){return nt(n,"POST","/v1/accounts:delete",e)}async function EO(n,e){return nt(n,"POST","/v1/accounts:update",e)}async function TO(n,e){return nt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AO(n,e=!1){const t=te(n),r=await t.getIdToken(e),i=Wl(r);B(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Aa(df(i.auth_time)),issuedAtTime:Aa(df(i.iat)),expirationTime:Aa(df(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function df(n){return Number(n)*1e3}function Wl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Qu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sw(t);return i?JSON.parse(i):(Qu("Failed to decode base64 JWT payload"),null)}catch(i){return Qu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function RO(n){const e=Wl(n);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof qt&&bO(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function bO({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Aa(this.lastLoginAt),this.creationTime=Aa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(n){var e;const t=n.auth,r=await n.getIdToken(),i=await vr(n,TO(t,{idToken:r}));B(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?DO(s.providerUserInfo):[],l=CO(n.providerData,a),h=n.isAnonymous,f=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),p=h?f:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Qw(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(n,m)}async function PO(n){const e=te(n);await Fa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CO(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function DO(n){return n.map(e=>{var{providerId:t}=e,r=Op(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kO(n,e){const t=await Kw(n,{},async()=>{const r=Io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=jw(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Hw.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function xO(n,e){return nt(n,"POST","/v2/accounts:revokeToken",tt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):RO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await kO(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new Ua;return r&&(B(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ua,this.toJSON())}_performRefresh(){return $n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n,e){B(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ui{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Op(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new SO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await vr(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return AO(this,e)}reload(){return PO(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ui(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Fa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vr(this,wO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,l,h,f,p;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(i=t.email)!==null&&i!==void 0?i:void 0,b=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,q=(a=t.photoURL)!==null&&a!==void 0?a:void 0,U=(l=t.tenantId)!==null&&l!==void 0?l:void 0,F=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,Z=(f=t.createdAt)!==null&&f!==void 0?f:void 0,pe=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:ee,emailVerified:Ee,isAnonymous:he,providerData:L,stsTokenManager:N}=t;B(ee&&N,e,"internal-error");const I=Ua.fromJSON(this.name,N);B(typeof ee=="string",e,"internal-error"),Fr(m,e.name),Fr(w,e.name),B(typeof Ee=="boolean",e,"internal-error"),B(typeof he=="boolean",e,"internal-error"),Fr(b,e.name),Fr(q,e.name),Fr(U,e.name),Fr(F,e.name),Fr(Z,e.name),Fr(pe,e.name);const E=new Ui({uid:ee,auth:e,email:w,emailVerified:Ee,displayName:m,isAnonymous:he,photoURL:q,phoneNumber:b,tenantId:U,stsTokenManager:I,createdAt:Z,lastLoginAt:pe});return L&&Array.isArray(L)&&(E.providerData=L.map(Y=>Object.assign({},Y))),F&&(E._redirectEventId=F),E}static async _fromIdTokenResponse(e,t,r=!1){const i=new Ua;i.updateFromServerResponse(t);const s=new Ui({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fa(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=new Map;function cn(n){Cn(n instanceof Function,"Expected a class definition");let e=Pv.get(n);return e?(Cn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Pv.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Yw.type="NONE";const io=Yw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(n,e,t){return`firebase:${n}:${e}:${t}`}class Ks{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Bi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Bi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ui._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ks(cn(io),e,r);const i=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let s=i[0]||cn(io);const a=Bi(r,e.config.apiKey,e.name);let l=null;for(const f of t)try{const p=await f._get(a);if(p){const m=Ui._fromJSON(e,p);f!==s&&(l=m),s=f;break}}catch{}const h=i.filter(f=>f._shouldAllowMigration);return!s._shouldAllowMigration||!h.length?new Ks(s,e,r):(s=h[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async f=>{if(f!==s)try{await f._remove(a)}catch{}})),new Ks(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(eE(e))return"Blackberry";if(tE(e))return"Webos";if(Fp(e))return"Safari";if((e.includes("chrome/")||Xw(e))&&!e.includes("edge/"))return"Chrome";if(gc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jw(n=je()){return/firefox\//i.test(n)}function Fp(n=je()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xw(n=je()){return/crios\//i.test(n)}function Zw(n=je()){return/iemobile/i.test(n)}function gc(n=je()){return/android/i.test(n)}function eE(n=je()){return/blackberry/i.test(n)}function tE(n=je()){return/webos/i.test(n)}function Eo(n=je()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function NO(n=je()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function OO(n=je()){var e;return Eo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LO(){return Dw()&&document.documentMode===10}function nE(n=je()){return Eo(n)||gc(n)||tE(n)||eE(n)||/windows phone/i.test(n)||Zw(n)}function VO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(n,e=[]){let t;switch(n){case"Browser":t=Cv(je());break;case"Worker":t=`${Cv(je())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ci}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,l)=>{try{const h=e(s);a(h)}catch(h){l(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FO(n,e={}){return nt(n,"GET","/v2/passwordPolicy",tt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO=6;class BO{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:UO,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,l;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(s=h.containsUppercaseLetter)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(l=h.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),h}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dv(this),this.idTokenSubscription=new Dv(this),this.beforeStateQueue=new MO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=cn(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===l)&&(h!=null&&h.user)&&(i=h.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fa(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?te(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await FO(this),t=new BO(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ss("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await xO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&cn(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=await Ks.create(this,[cn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&hO(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Xe(n){return te(n)}class Dv{constructor(e){this.auth=e,this.observer=null,this.addObserver=kw(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Up(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=St("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",WO().appendChild(r)})}function iE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const $O="https://www.google.com/recaptcha/enterprise.js?render=",zO="recaptcha-enterprise",GO="NO_RECAPTCHA";class HO{constructor(e){this.type=zO,this.auth=Xe(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{IO(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const f=new yO(h);return s.tenantId==null?s._agentRecaptchaConfig=f:s._tenantRecaptchaConfigs[s.tenantId]=f,a(f.siteKey)}}).catch(h=>{l(h)})})}function i(s,a,l){const h=window.grecaptcha;Sv(h)?h.enterprise.ready(()=>{h.enterprise.execute(s,{action:e}).then(f=>{a(f)}).catch(()=>{a(GO)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(l=>{if(!t&&Sv(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}Up($O+l).then(()=>{i(l,s,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function kv(n,e,t,r=!1){const i=new HO(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ba(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await kv(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await kv(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(s)})}function KO(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(cn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jO(n,e,t){const r=Xe(n);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=sE(e),{host:a,port:l}=QO(e),h=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||YO()}function sE(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function QO(n){const e=sE(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:xv(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:xv(a)}}}function xv(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function YO(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return $n("not implemented")}_getIdTokenResponse(e){return $n("not implemented")}_linkToIdToken(e,t){return $n("not implemented")}_getReauthenticationResolver(e){return $n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oE(n,e){return nt(n,"POST","/v1/accounts:resetPassword",tt(n,e))}async function JO(n,e){return nt(n,"POST","/v1/accounts:update",e)}async function XO(n,e){return nt(n,"POST","/v1/accounts:signUp",e)}async function ZO(n,e){return nt(n,"POST","/v1/accounts:update",tt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eL(n,e){return Tr(n,"POST","/v1/accounts:signInWithPassword",tt(n,e))}async function $l(n,e){return nt(n,"POST","/v1/accounts:sendOobCode",tt(n,e))}async function tL(n,e){return $l(n,e)}async function nL(n,e){return $l(n,e)}async function rL(n,e){return $l(n,e)}async function iL(n,e){return $l(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sL(n,e){return Tr(n,"POST","/v1/accounts:signInWithEmailLink",tt(n,e))}async function oL(n,e){return Tr(n,"POST","/v1/accounts:signInWithEmailLink",tt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends To{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new qa(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new qa(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ba(e,t,"signInWithPassword",eL);case"emailLink":return sL(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ba(e,r,"signUpPassword",XO);case"emailLink":return oL(e,{idToken:t,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(n,e){return Tr(n,"POST","/v1/accounts:signInWithIdp",tt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL="http://localhost";class Xn extends To{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ct("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Op(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Xn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return yr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,yr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,yr(e,t)}buildRequest(){const e={requestUri:aL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Io(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cL(n,e){return nt(n,"POST","/v1/accounts:sendVerificationCode",tt(n,e))}async function uL(n,e){return Tr(n,"POST","/v1/accounts:signInWithPhoneNumber",tt(n,e))}async function lL(n,e){const t=await Tr(n,"POST","/v1/accounts:signInWithPhoneNumber",tt(n,e));if(t.temporaryProof)throw ma(n,"account-exists-with-different-credential",t);return t}const hL={USER_NOT_FOUND:"user-not-found"};async function dL(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Tr(n,"POST","/v1/accounts:signInWithPhoneNumber",tt(n,t),hL)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends To{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new qi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new qi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return uL(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return lL(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return dL(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new qi({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fL(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pL(n){const e=zs(ga(n)).link,t=e?zs(ga(e)).deep_link_id:null,r=zs(ga(n)).deep_link_id;return(r?zs(ga(r)).link:null)||r||t||e||n}class zl{constructor(e){var t,r,i,s,a,l;const h=zs(ga(e)),f=(t=h.apiKey)!==null&&t!==void 0?t:null,p=(r=h.oobCode)!==null&&r!==void 0?r:null,m=fL((i=h.mode)!==null&&i!==void 0?i:null);B(f&&p&&m,"argument-error"),this.apiKey=f,this.operation=m,this.code=p,this.continueUrl=(s=h.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=h.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=h.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=pL(e);try{return new zl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.providerId=ui.PROVIDER_ID}static credential(e,t){return qa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=zl.parseLink(t);return B(r,"argument-error"),qa._fromEmailAndCode(e,r.code,r.tenantId)}}ui.PROVIDER_ID="password";ui.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ui.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends Ar{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class js extends Ao{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return B("providerId"in t&&"signInMethod"in t,"argument-error"),Xn._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return B(e.idToken||e.accessToken,"argument-error"),Xn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return js.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return js.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:a,providerId:l}=e;if(!r&&!i&&!t&&!s||!l)return null;try{return new js(l)._credential({idToken:t,accessToken:r,nonce:a,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Ao{constructor(){super("facebook.com")}static credential(e){return Xn._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xn._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Un.credential(t,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Ao{constructor(){super("github.com")}static credential(e){return Xn._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gL="http://localhost";class so extends To{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return yr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,yr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,yr(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new so(r,s)}static _create(e,t){return new so(e,t)}buildRequest(){return{requestUri:gL,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mL="saml.";class dl extends Ar{constructor(e){B(e.startsWith(mL),"argument-error"),super(e)}static credentialFromResult(e){return dl.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return dl.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=so.fromJSON(e);return B(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return so._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Ao{constructor(){super("twitter.com")}static credential(e,t){return Xn._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return qn.credential(t,r)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aE(n,e){return Tr(n,"POST","/v1/accounts:signUp",tt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Ui._fromIdTokenResponse(e,r,i),a=Nv(r);return new wn({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Nv(r);return new wn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Nv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _L(n){var e;const t=Xe(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new wn({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await aE(t,{returnSecureToken:!0}),i=await wn._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends qt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new fl(e,t,r,i)}}function cE(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fl._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yL(n,e){const t=te(n);await Gl(!0,t,e);const{providerUserInfo:r}=await EO(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=uE(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Bp(n,e,t=!1){const r=await vr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return wn._forOperation(n,"link",r)}async function Gl(n,e,t){await Fa(e);const r=uE(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";B(r.has(t)===n,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lE(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await vr(n,cE(r,i,e,n),t);B(s.idToken,r,"internal-error");const a=Wl(s.idToken);B(a,r,"internal-error");const{sub:l}=a;return B(n.uid===l,r,"user-mismatch"),wn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ct(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hE(n,e,t=!1){const r="signIn",i=await cE(n,r,e),s=await wn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Hl(n,e){return hE(Xe(n),e)}async function dE(n,e){const t=te(n);return await Gl(!1,t,e.providerId),Bp(t,e)}async function fE(n,e){return lE(te(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vL(n,e){return Tr(n,"POST","/v1/accounts:signInWithCustomToken",tt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IL(n,e){const t=Xe(n),r=await vL(t,{token:e,returnSecureToken:!0}),i=await wn._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?qp._fromServerResponse(e,t):"totpInfo"in t?Wp._fromServerResponse(e,t):Ct(e,"internal-error")}}class qp extends mc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new qp(t)}}class Wp extends mc{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Wp(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(n,e,t){var r;B(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),B(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(B(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(B(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $p(n){const e=Xe(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wL(n,e,t){const r=Xe(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Kl(r,i,t),await Ba(r,i,"getOobCode",nL)}async function EL(n,e,t){await oE(te(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$p(n),r})}async function TL(n,e){await ZO(te(n),{oobCode:e})}async function pE(n,e){const t=te(n),r=await oE(t,{oobCode:e}),i=r.requestType;switch(B(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":B(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":B(r.mfaInfo,t,"internal-error");default:B(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=mc._fromServerResponse(Xe(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function AL(n,e){const{data:t}=await pE(te(n),e);return t.email}async function RL(n,e,t){const r=Xe(n),a=await Ba(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",aE).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&$p(n),h}),l=await wn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function bL(n,e,t){return Hl(te(n),ui.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$p(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SL(n,e,t){const r=Xe(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(a,l){B(l.handleCodeInApp,r,"argument-error"),l&&Kl(r,a,l)}s(i,t),await Ba(r,i,"getOobCode",rL)}function PL(n,e){const t=zl.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function CL(n,e,t){const r=te(n),i=ui.credentialWithLink(e,t||Ma());return B(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Hl(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DL(n,e){return nt(n,"POST","/v1/accounts:createAuthUri",tt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kL(n,e){const t=Vp()?Ma():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=await DL(te(n),r);return i||[]}async function xL(n,e){const t=te(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Kl(t.auth,i,e);const{email:s}=await tL(t.auth,i);s!==n.email&&await n.reload()}async function NL(n,e,t){const r=te(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Kl(r.auth,s,t);const{email:a}=await iL(r.auth,s);a!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OL(n,e){return nt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LL(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=te(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await vr(r,OL(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:h})=>h==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function VL(n,e){return gE(te(n),e,null)}function ML(n,e){return gE(te(n),null,e)}async function gE(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const a=await vr(n,JO(r,s));await n._updateTokensIfNecessary(a,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FL(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const a=(t=(e=Wl(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(a){const l=a!=="anonymous"&&a!=="custom"?a:null;return new Qs(s,l)}}if(!r)return null;switch(r){case"facebook.com":return new UL(s,i);case"github.com":return new BL(s,i);case"google.com":return new qL(s,i);case"twitter.com":return new WL(s,i,n.screenName||null);case"custom":case"anonymous":return new Qs(s,null);default:return new Qs(s,r,i)}}class Qs{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class mE extends Qs{constructor(e,t,r,i){super(e,t,r),this.username=i}}class UL extends Qs{constructor(e,t){super(e,"facebook.com",t)}}class BL extends mE{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class qL extends Qs{constructor(e,t){super(e,"google.com",t)}}class WL extends mE{constructor(e,t,r){super(e,"twitter.com",t,r)}}function $L(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:FL(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new Oi("enroll",e,t)}static _fromMfaPendingCredential(e){return new Oi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Oi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Oi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=Xe(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(l=>mc._fromServerResponse(r,l));B(i.mfaPendingCredential,r,"internal-error");const a=Oi._fromMfaPendingCredential(i.mfaPendingCredential);return new zp(a,s,async l=>{const h=await l._process(r,a);delete i.mfaInfo,delete i.mfaPendingCredential;const f=Object.assign(Object.assign({},i),{idToken:h.idToken,refreshToken:h.refreshToken});switch(t.operationType){case"signIn":const p=await wn._fromIdTokenResponse(r,t.operationType,f);return await r._updateCurrentUser(p.user),p;case"reauthenticate":return B(t.user,r,"internal-error"),wn._forOperation(t.user,t.operationType,f);default:Ct(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function zL(n,e){var t;const r=te(n),i=e;return B(e.customData.operationType,r,"argument-error"),B((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),zp._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GL(n,e){return nt(n,"POST","/v2/accounts/mfaEnrollment:start",tt(n,e))}function HL(n,e){return nt(n,"POST","/v2/accounts/mfaEnrollment:finalize",tt(n,e))}function KL(n,e){return nt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",tt(n,e))}class Gp{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>mc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Gp(e)}async getSession(){return Oi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,i=await this.getSession(),s=await vr(this.user,r._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await vr(this.user,KL(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const ff=new WeakMap;function jL(n){const e=te(n);return ff.has(e)||ff.set(e,Gp._fromUser(e)),ff.get(e)}const pl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pl,"1"),this.storage.removeItem(pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QL(){const n=je();return Fp(n)||Eo(n)}const YL=1e3,JL=10;class yE extends _E{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=QL()&&VO(),this.fallbackToPolling=nE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,h)=>{this.notifyListeners(a,h)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);LO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,JL):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},YL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yE.type="LOCAL";const Hp=yE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE extends _E{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vE.type="SESSION";const Hi=vE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XL(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new jl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async f=>f(t.origin,s)),h=await XL(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,h)=>{const f=_c("",20);i.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const w=m;if(w.data.eventId===f)switch(w.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(w.data.response);break;default:clearTimeout(p),clearTimeout(s),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return window}function eV(n){ut().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(){return typeof ut().WorkerGlobalScope<"u"&&typeof ut().importScripts=="function"}async function tV(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nV(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function rV(){return Kp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="firebaseLocalStorageDb",iV=1,gl="firebaseLocalStorage",wE="fbase_key";class yc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ql(n,e){return n.transaction([gl],e?"readwrite":"readonly").objectStore(gl)}function sV(){const n=indexedDB.deleteDatabase(IE);return new yc(n).toPromise()}function Vf(){const n=indexedDB.open(IE,iV);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(gl,{keyPath:wE})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(gl)?e(r):(r.close(),await sV(),e(await Vf()))})})}async function Ov(n,e,t){const r=Ql(n,!0).put({[wE]:e,value:t});return new yc(r).toPromise()}async function oV(n,e){const t=Ql(n,!1).get(e),r=await new yc(t).toPromise();return r===void 0?null:r.value}function Lv(n,e){const t=Ql(n,!0).delete(e);return new yc(t).toPromise()}const aV=800,cV=3;class EE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>cV)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jl._getInstance(rV()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await tV(),!this.activeServiceWorker)return;this.sender=new ZL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vf();return await Ov(e,pl,"1"),await Lv(e,pl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ov(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>oV(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Lv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ql(i,!1).getAll();return new yc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}EE.type="LOCAL";const Wa=EE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uV(n,e){return nt(n,"POST","/v2/accounts/mfaSignIn:start",tt(n,e))}function lV(n,e){return nt(n,"POST","/v2/accounts/mfaSignIn:finalize",tt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hV=500,dV=6e4,Lu=1e12;class fV{constructor(e){this.auth=e,this.counter=Lu,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new pV(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||Lu;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||Lu;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||Lu;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class pV{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;B(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=gV(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},dV)},hV))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function gV(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=iE("rcb"),mV=new pc(3e4,6e4),_V="https://www.google.com/recaptcha/api.js?";class yV{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ut().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return B(vV(t),e,"argument-error"),this.shouldResolveImmediately(t)&&bv(ut().grecaptcha)?Promise.resolve(ut().grecaptcha):new Promise((r,i)=>{const s=ut().setTimeout(()=>{i(St(e,"network-request-failed"))},mV.get());ut()[pf]=()=>{ut().clearTimeout(s),delete ut()[pf];const l=ut().grecaptcha;if(!l||!bv(l)){i(St(e,"internal-error"));return}const h=l.render;l.render=(f,p)=>{const m=h(f,p);return this.counter++,m},this.hostLanguage=t,r(l)};const a=`${_V}?${Io({onload:pf,render:"explicit",hl:t})}`;Up(a).catch(()=>{clearTimeout(s),i(St(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=ut().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function vV(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class IV{async load(e){return new fV(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="recaptcha",wV={theme:"light",type:"image"};let EV=class{constructor(e,t,r=Object.assign({},wV)){this.parameters=r,this.type=TE,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Xe(e),this.isInvisible=this.parameters.size==="invisible",B(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;B(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new IV:new yV,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(i=>{const s=a=>{a&&(this.tokenChangeListeners.delete(s),i(a))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){B(!this.parameters.sitekey,this.auth,"argument-error"),B(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),B(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=ut()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){B(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){B(Vp()&&!Kp(),this.auth,"internal-error"),await TV(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await vO(this.auth);B(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return B(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function TV(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=qi._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function AV(n,e,t){const r=Xe(n),i=await Yl(r,e,te(t));return new jp(i,s=>Hl(r,s))}async function RV(n,e,t){const r=te(n);await Gl(!1,r,"phone");const i=await Yl(r.auth,e,te(t));return new jp(i,s=>dE(r,s))}async function bV(n,e,t){const r=te(n),i=await Yl(r.auth,e,te(t));return new jp(i,s=>fE(r,s))}async function Yl(n,e,t){var r;const i=await t.verify();try{B(typeof i=="string",n,"argument-error"),B(t.type===TE,n,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const a=s.session;if("phoneNumber"in s)return B(a.type==="enroll",n,"internal-error"),(await GL(n,{idToken:a.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{B(a.type==="signin",n,"internal-error");const l=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return B(l,n,"missing-multi-factor-info"),(await uV(n,{mfaPendingCredential:a.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:a}=await cL(n,{phoneNumber:s.phoneNumber,recaptchaToken:i});return a}}finally{t._reset()}}async function SV(n,e){await Bp(te(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki=class Yu{constructor(e){this.providerId=Yu.PROVIDER_ID,this.auth=Xe(e)}verifyPhoneNumber(e,t){return Yl(this.auth,e,te(t))}static credential(e,t){return qi._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Yu.credentialFromTaggedObject(t)}static credentialFromError(e){return Yu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?qi._fromTokenResponse(t,r):null}};Ki.PROVIDER_ID="phone";Ki.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(n,e){return e?cn(e):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp extends To{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return yr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function PV(n){return hE(n.auth,new Qp(n),n.bypassAuthState)}function CV(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),lE(t,new Qp(n),n.bypassAuthState)}async function DV(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),Bp(t,new Qp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PV;case"linkViaPopup":case"linkViaRedirect":return DV;case"reauthViaPopup":case"reauthViaRedirect":return CV;default:Ct(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kV=new pc(2e3,1e4);async function xV(n,e,t){const r=Xe(n);wo(n,e,Ar);const i=os(r,t);return new fr(r,"signInViaPopup",e,i).executeNotNull()}async function NV(n,e,t){const r=te(n);wo(r.auth,e,Ar);const i=os(r.auth,t);return new fr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function OV(n,e,t){const r=te(n);wo(r.auth,e,Ar);const i=os(r.auth,t);return new fr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class fr extends AE{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,fr.currentPopupAction&&fr.currentPopupAction.cancel(),fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=_c();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kV.get())};e()}}fr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LV="pendingRedirect",Ra=new Map;class VV extends AE{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ra.get(this.auth._key());if(!e){try{const r=await MV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ra.set(this.auth._key(),e)}return this.bypassAuthState||Ra.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MV(n,e){const t=bE(e),r=RE(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}async function Yp(n,e){return RE(n)._set(bE(e),"true")}function FV(){Ra.clear()}function Jp(n,e){Ra.set(n._key(),e)}function RE(n){return cn(n._redirectPersistence)}function bE(n){return Bi(LV,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UV(n,e,t){return BV(n,e,t)}async function BV(n,e,t){const r=Xe(n);wo(n,e,Ar),await r._initializationPromise;const i=os(r,t);return await Yp(i,r),i._openRedirect(r,e,"signInViaRedirect")}function qV(n,e,t){return WV(n,e,t)}async function WV(n,e,t){const r=te(n);wo(r.auth,e,Ar),await r.auth._initializationPromise;const i=os(r.auth,t);await Yp(i,r.auth);const s=await SE(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function $V(n,e,t){return zV(n,e,t)}async function zV(n,e,t){const r=te(n);wo(r.auth,e,Ar),await r.auth._initializationPromise;const i=os(r.auth,t);await Gl(!1,r,e.providerId),await Yp(i,r.auth);const s=await SE(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function GV(n,e){return await Xe(n)._initializationPromise,Jl(n,e,!1)}async function Jl(n,e,t=!1){const r=Xe(n),i=os(r,e),a=await new VV(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}async function SE(n){const e=_c(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HV=10*60*1e3;class PE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KV(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!CE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(St(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HV&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vv(e))}saveEventToCache(e){this.cachedEventUids.add(Vv(e)),this.lastProcessedEventTime=Date.now()}}function Vv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function CE({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KV(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return CE(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DE(n,e={}){return nt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QV=/^https?/;async function YV(n){if(n.config.emulator)return;const{authorizedDomains:e}=await DE(n);for(const t of e)try{if(JV(t))return}catch{}Ct(n,"unauthorized-domain")}function JV(n){const e=Ma(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!QV.test(t))return!1;if(jV.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XV=new pc(3e4,6e4);function Mv(){const n=ut().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ZV(n){return new Promise((e,t)=>{var r,i,s;function a(){Mv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mv(),t(St(n,"network-request-failed"))},timeout:XV.get()})}if(!((i=(r=ut().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ut().gapi)===null||s===void 0)&&s.load)a();else{const l=iE("iframefcb");return ut()[l]=()=>{gapi.load?a():t(St(n,"network-request-failed"))},Up(`https://apis.google.com/js/api.js?onload=${l}`).catch(h=>t(h))}}).catch(e=>{throw Ju=null,e})}let Ju=null;function eM(n){return Ju=Ju||ZV(n),Ju}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM=new pc(5e3,15e3),nM="__/auth/iframe",rM="emulator/auth/iframe",iM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oM(n){const e=n.config;B(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Mp(e,rM):`https://${n.config.authDomain}/${nM}`,r={apiKey:e.apiKey,appName:n.name,v:ci},i=sM.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Io(r).slice(1)}`}async function aM(n){const e=await eM(n),t=ut().gapi;return B(t,n,"internal-error"),e.open({where:document.body,url:oM(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=St(n,"network-request-failed"),l=ut().setTimeout(()=>{s(a)},tM.get());function h(){ut().clearTimeout(l),i(r)}r.ping(h).then(h,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uM=500,lM=600,hM="_blank",dM="http://localhost";class Fv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fM(n,e,t,r=uM,i=lM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const h=Object.assign(Object.assign({},cM),{width:r.toString(),height:i.toString(),top:s,left:a}),f=je().toLowerCase();t&&(l=Xw(f)?hM:t),Jw(f)&&(e=e||dM,h.scrollbars="yes");const p=Object.entries(h).reduce((w,[b,q])=>`${w}${b}=${q},`,"");if(OO(f)&&l!=="_self")return pM(e||"",l),new Fv(null);const m=window.open(e||"",l,p);B(m,n,"popup-blocked");try{m.focus()}catch{}return new Fv(m)}function pM(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gM="__/auth/handler",mM="emulator/auth/handler",_M=encodeURIComponent("fac");async function Mf(n,e,t,r,i,s){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ci,eventId:i};if(e instanceof Ar){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Bx(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries(s||{}))a[p]=m}if(e instanceof Ao){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const h=await n._getAppCheckToken(),f=h?`#${_M}=${encodeURIComponent(h)}`:"";return`${yM(n)}?${Io(l).slice(1)}${f}`}function yM({config:n}){return n.emulator?Mp(n,mM):`https://${n.authDomain}/${gM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="webStorageSupport";class vM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hi,this._completeRedirectFn=Jl,this._overrideRedirectResult=Jp}async _openPopup(e,t,r,i){var s;Cn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Mf(e,t,r,Ma(),i);return fM(e,a,_c())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Mf(e,t,r,Ma(),i);return eV(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await aM(e),r=new PE(e);return t.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gf,{type:gf},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[gf];a!==void 0&&t(!!a),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=YV(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return nE()||Fp()||Eo()}}const IM=vM;class wM{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return $n("unexpected MultiFactorSessionType")}}}class Xp extends wM{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Xp(e)}_finalizeEnroll(e,t,r){return HL(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return lV(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class kE{constructor(){}static assertion(e){return Xp._fromCredential(e)}}kE.FACTOR_ID="phone";var Uv="@firebase/auth",Bv="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TM(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function AM(n){Yr(new Jn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rE(n)},f=new qO(r,i,s,h);return KO(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Yr(new Jn("auth-internal",e=>{const t=Xe(e.getProvider("auth").getImmediate());return(r=>new EM(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(Uv,Bv,TM(n)),jn(Uv,Bv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RM=5*60;Dx("authIdTokenMaxAge");AM("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bM=2e3;async function SM(n,e,t){var r;const{BuildInfo:i}=ji();Cn(e.sessionId,"AuthEvent did not contain a session ID");const s=await xM(e.sessionId),a={};return Eo()?a.ibi=i.packageName:gc()?a.apn=i.packageName:Ct(n,"operation-not-supported-in-this-environment"),i.displayName&&(a.appDisplayName=i.displayName),a.sessionId=s,Mf(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,a)}async function PM(n){const{BuildInfo:e}=ji(),t={};Eo()?t.iosBundleId=e.packageName:gc()?t.androidPackageName=e.packageName:Ct(n,"operation-not-supported-in-this-environment"),await DE(n,t)}function CM(n){const{cordova:e}=ji();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(n):i=e.InAppBrowser.open(n,NO()?"_blank":"_system","location=yes"),t(i)})})}async function DM(n,e,t){const{cordova:r}=ji();let i=()=>{};try{await new Promise((s,a)=>{let l=null;function h(){var m;s();const w=(m=r.plugins.browsertab)===null||m===void 0?void 0:m.close;typeof w=="function"&&w(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function f(){l||(l=window.setTimeout(()=>{a(St(n,"redirect-cancelled-by-user"))},bM))}function p(){(document==null?void 0:document.visibilityState)==="visible"&&f()}e.addPassiveListener(h),document.addEventListener("resume",f,!1),gc()&&document.addEventListener("visibilitychange",p,!1),i=()=>{e.removePassiveListener(h),document.removeEventListener("resume",f,!1),document.removeEventListener("visibilitychange",p,!1),l&&window.clearTimeout(l)}})}finally{i()}}function kM(n){var e,t,r,i,s,a,l,h,f,p;const m=ji();B(typeof((e=m==null?void 0:m.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),B(typeof((t=m==null?void 0:m.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),B(typeof((s=(i=(r=m==null?void 0:m.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),B(typeof((h=(l=(a=m==null?void 0:m.cordova)===null||a===void 0?void 0:a.plugins)===null||l===void 0?void 0:l.browsertab)===null||h===void 0?void 0:h.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),B(typeof((p=(f=m==null?void 0:m.cordova)===null||f===void 0?void 0:f.InAppBrowser)===null||p===void 0?void 0:p.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function xM(n){const e=NM(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function NM(n){if(Cn(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OM=20;class LM extends PE{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function VM(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:UM(),postBody:null,tenantId:n.tenantId,error:St(n,"no-auth-event")}}function MM(n,e){return Ff()._set(Uf(n),e)}async function qv(n){const e=await Ff()._get(Uf(n));return e&&await Ff()._remove(Uf(n)),e}function FM(n,e){var t,r;const i=qM(e);if(i.includes("/__/auth/callback")){const s=Xu(i),a=s.firebaseError?BM(decodeURIComponent(s.firebaseError)):null,l=(r=(t=a==null?void 0:a.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],h=l?St(l):null;return h?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:h,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:i,postBody:null}}return null}function UM(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<OM;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Ff(){return cn(Hp)}function Uf(n){return Bi("authEvent",n.config.apiKey,n.name)}function BM(n){try{return JSON.parse(n)}catch{return null}}function qM(n){const e=Xu(n),t=e.link?decodeURIComponent(e.link):void 0,r=Xu(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Xu(i).link||i||r||t||n}function Xu(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return zs(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WM=500;class $M{constructor(){this._redirectPersistence=Hi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Jl,this._overrideRedirectResult=Jp}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new LM(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ct(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,i){kM(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),FV(),await this._originValidation(e);const a=VM(e,r,i);await MM(e,a);const l=await SM(e,a,t),h=await CM(l);return DM(e,s,h)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=PM(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ji(),a=setTimeout(async()=>{await qv(e),t.onEvent(Wv())},WM),l=async p=>{clearTimeout(a);const m=await qv(e);let w=null;m&&(p!=null&&p.url)&&(w=FM(m,p.url)),t.onEvent(w||Wv())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,l);const h=i,f=`${s.packageName.toLowerCase()}://`;ji().handleOpenURL=async p=>{if(p.toLowerCase().startsWith(f)&&l({url:p}),typeof h=="function")try{h(p)}catch(m){console.error(m)}}}}const zM=$M;function Wv(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:St("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GM(n,e){Xe(n)._logFramework(e)}var HM="@firebase/auth-compat",KM="0.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jM=1e3;function ba(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function QM(){return ba()==="http:"||ba()==="https:"}function xE(n=je()){return!!((ba()==="file:"||ba()==="ionic:"||ba()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function YM(){return Dp()||Cp()}function JM(){return Dw()&&(document==null?void 0:document.documentMode)===11}function XM(n=je()){return/Edge\/\d+/.test(n)}function ZM(n=je()){return JM()||XM(n)}function NE(){try{const n=self.localStorage,e=_c();if(n)return n.setItem(e,"1"),n.removeItem(e),ZM()?Oa():!0}catch{return Zp()&&Oa()}return!1}function Zp(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function mf(){return(QM()||Cw()||xE())&&!YM()&&NE()&&!Zp()}function OE(){return xE()&&typeof document<"u"}async function eF(){return OE()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},jM);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function tF(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an={LOCAL:"local",NONE:"none",SESSION:"session"},ia=B,LE="persistence";function nF(n,e){if(ia(Object.values(an).includes(e),n,"invalid-persistence-type"),Dp()){ia(e!==an.SESSION,n,"unsupported-persistence-type");return}if(Cp()){ia(e===an.NONE,n,"unsupported-persistence-type");return}if(Zp()){ia(e===an.NONE||e===an.LOCAL&&Oa(),n,"unsupported-persistence-type");return}ia(e===an.NONE||NE(),n,"unsupported-persistence-type")}async function Bf(n){await n._initializationPromise;const e=VE(),t=Bi(LE,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function rF(n,e){const t=VE();if(!t)return[];const r=Bi(LE,n,e);switch(t.getItem(r)){case an.NONE:return[io];case an.LOCAL:return[Wa,Hi];case an.SESSION:return[Hi];default:return[]}}function VE(){var n;try{return((n=tF())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iF=B;class zr{constructor(){this.browserResolver=cn(IM),this.cordovaResolver=cn(zM),this.underlyingResolver=null,this._redirectPersistence=Hi,this._completeRedirectFn=Jl,this._overrideRedirectResult=Jp}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,i)}async _openRedirect(e,t,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return OE()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return iF(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await eF();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(n){return n.unwrap()}function sF(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oF(n){return FE(n)}function aF(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new cF(n,zL(n,e))}else if(r){const i=FE(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function FE(n){const{_tokenResponse:e}=n instanceof qt?n.customData:n;if(!e)return null;if(!(n instanceof qt)&&"temporaryProof"in e&&"phoneNumber"in e)return Ki.credentialFromResult(n);const t=e.providerId;if(!t||t===ra.PASSWORD)return null;let r;switch(t){case ra.GOOGLE:r=Un;break;case ra.FACEBOOK:r=Fn;break;case ra.GITHUB:r=Bn;break;case ra.TWITTER:r=qn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:a,pendingToken:l,nonce:h}=e;return!s&&!a&&!i&&!l?null:l?t.startsWith("saml.")?so._create(t,l):Xn._fromParams({providerId:t,signInMethod:t,pendingToken:l,idToken:i,accessToken:s}):new js(t).credential({idToken:i,accessToken:s,rawNonce:h})}return n instanceof qt?r.credentialFromError(n):r.credentialFromResult(n)}function Qt(n,e){return e.catch(t=>{throw t instanceof qt&&aF(n,t),t}).then(t=>{const r=t.operationType,i=t.user;return{operationType:r,credential:oF(t),additionalUserInfo:$L(t),user:Xl.getOrCreate(i)}})}async function qf(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Qt(n,t.confirm(r))}}class cF{constructor(e,t){this.resolver=t,this.auth=sF(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Qt(ME(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xl=class _a{constructor(e){this._delegate=e,this.multiFactor=jL(e)}static getOrCreate(e){return _a.USER_MAP.has(e)||_a.USER_MAP.set(e,new _a(e)),_a.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Qt(this.auth,dE(this._delegate,e))}async linkWithPhoneNumber(e,t){return qf(this.auth,RV(this._delegate,e,t))}async linkWithPopup(e){return Qt(this.auth,OV(this._delegate,e,zr))}async linkWithRedirect(e){return await Bf(Xe(this.auth)),$V(this._delegate,e,zr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Qt(this.auth,fE(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return qf(this.auth,bV(this._delegate,e,t))}reauthenticateWithPopup(e){return Qt(this.auth,NV(this._delegate,e,zr))}async reauthenticateWithRedirect(e){return await Bf(Xe(this.auth)),qV(this._delegate,e,zr)}sendEmailVerification(e){return xL(this._delegate,e)}async unlink(e){return await yL(this._delegate,e),this}updateEmail(e){return VL(this._delegate,e)}updatePassword(e){return ML(this._delegate,e)}updatePhoneNumber(e){return SV(this._delegate,e)}updateProfile(e){return LL(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return NL(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Xl.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=B;class Wf{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;sa(r,"invalid-api-key",{appName:e.name}),sa(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?zr:void 0;this._delegate=t.initialize({options:{persistence:uF(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(uO),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Xl.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){jO(this._delegate,e,t)}applyActionCode(e){return TL(this._delegate,e)}checkActionCode(e){return pE(this._delegate,e)}confirmPasswordReset(e,t){return EL(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Qt(this._delegate,RL(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return kL(this._delegate,e)}isSignInWithEmailLink(e){return PL(this._delegate,e)}async getRedirectResult(){sa(mf(),this._delegate,"operation-not-supported-in-this-environment");const e=await GV(this._delegate,zr);return e?Qt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){GM(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:i,error:s,complete:a}=$v(e,t,r);return this._delegate.onAuthStateChanged(i,s,a)}onIdTokenChanged(e,t,r){const{next:i,error:s,complete:a}=$v(e,t,r);return this._delegate.onIdTokenChanged(i,s,a)}sendSignInLinkToEmail(e,t){return SL(this._delegate,e,t)}sendPasswordResetEmail(e,t){return wL(this._delegate,e,t||void 0)}async setPersistence(e){nF(this._delegate,e);let t;switch(e){case an.SESSION:t=Hi;break;case an.LOCAL:t=await cn(Wa)._isAvailable()?Wa:Hp;break;case an.NONE:t=io;break;default:return Ct("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Qt(this._delegate,_L(this._delegate))}signInWithCredential(e){return Qt(this._delegate,Hl(this._delegate,e))}signInWithCustomToken(e){return Qt(this._delegate,IL(this._delegate,e))}signInWithEmailAndPassword(e,t){return Qt(this._delegate,bL(this._delegate,e,t))}signInWithEmailLink(e,t){return Qt(this._delegate,CL(this._delegate,e,t))}signInWithPhoneNumber(e,t){return qf(this._delegate,AV(this._delegate,e,t))}async signInWithPopup(e){return sa(mf(),this._delegate,"operation-not-supported-in-this-environment"),Qt(this._delegate,xV(this._delegate,e,zr))}async signInWithRedirect(e){return sa(mf(),this._delegate,"operation-not-supported-in-this-environment"),await Bf(this._delegate),UV(this._delegate,e,zr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return AL(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Wf.Persistence=an;function $v(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const i=r;return{next:a=>i(a&&Xl.getOrCreate(a)),error:e,complete:t}}function uF(n,e){const t=rF(n,e);if(typeof self<"u"&&!t.includes(Wa)&&t.push(Wa),typeof window<"u")for(const r of[Hp,Hi])t.includes(r)||t.push(r);return t.includes(io)||t.push(io),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(){this.providerId="phone",this._delegate=new Ki(ME(Jr.auth()))}static credential(e,t){return Ki.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}eg.PHONE_SIGN_IN_METHOD=Ki.PHONE_SIGN_IN_METHOD;eg.PROVIDER_ID=Ki.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lF=B;class hF{constructor(e,t,r=Jr.app()){var i;lF((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new EV(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dF="auth-compat";function fF(n){n.INTERNAL.registerComponent(new Jn(dF,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Wf(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Cs.EMAIL_SIGNIN,PASSWORD_RESET:Cs.PASSWORD_RESET,RECOVER_EMAIL:Cs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Cs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Cs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Cs.VERIFY_EMAIL}},EmailAuthProvider:ui,FacebookAuthProvider:Fn,GithubAuthProvider:Bn,GoogleAuthProvider:Un,OAuthProvider:js,SAMLAuthProvider:dl,PhoneAuthProvider:eg,PhoneMultiFactorGenerator:kE,RecaptchaVerifier:hF,TwitterAuthProvider:qn,Auth:Wf,AuthCredential:To,Error:qt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(HM,KM)}fF(Jr);var pF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},H,tg=tg||{},ae=pF||self;function Zl(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function vc(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function gF(n){return Object.prototype.hasOwnProperty.call(n,_f)&&n[_f]||(n[_f]=++mF)}var _f="closure_uid_"+(1e9*Math.random()>>>0),mF=0;function _F(n,e,t){return n.call.apply(n.bind,arguments)}function yF(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function Nt(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Nt=_F:Nt=yF,Nt.apply(null,arguments)}function Vu(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function yt(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(r,i,s){for(var a=Array(arguments.length-2),l=2;l<arguments.length;l++)a[l-2]=arguments[l];return e.prototype[i].apply(r,a)}}function li(){this.s=this.s,this.o=this.o}var vF=0;li.prototype.s=!1;li.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),vF!=0)&&gF(this)};li.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const UE=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function ng(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function zv(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(Zl(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let a=0;a<s;a++)n[i+a]=r[a]}else n.push(r)}}function Ot(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Ot.prototype.h=function(){this.defaultPrevented=!0};var IF=function(){if(!ae.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const t=()=>{};ae.addEventListener("test",t,e),ae.removeEventListener("test",t,e)}catch{}return n}();function $a(n){return/^[\s\xa0]*$/.test(n)}function eh(){var n=ae.navigator;return n&&(n=n.userAgent)?n:""}function Wn(n){return eh().indexOf(n)!=-1}function rg(n){return rg[" "](n),n}rg[" "]=function(){};function wF(n,e){var t=f2;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var EF=Wn("Opera"),oo=Wn("Trident")||Wn("MSIE"),BE=Wn("Edge"),$f=BE||oo,qE=Wn("Gecko")&&!(eh().toLowerCase().indexOf("webkit")!=-1&&!Wn("Edge"))&&!(Wn("Trident")||Wn("MSIE"))&&!Wn("Edge"),TF=eh().toLowerCase().indexOf("webkit")!=-1&&!Wn("Edge");function WE(){var n=ae.document;return n?n.documentMode:void 0}var zf;e:{var yf="",vf=function(){var n=eh();if(qE)return/rv:([^\);]+)(\)|;)/.exec(n);if(BE)return/Edge\/([\d\.]+)/.exec(n);if(oo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(TF)return/WebKit\/(\S+)/.exec(n);if(EF)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(vf&&(yf=vf?vf[1]:""),oo){var If=WE();if(If!=null&&If>parseFloat(yf)){zf=String(If);break e}}zf=yf}var Gf;if(ae.document&&oo){var Gv=WE();Gf=Gv||parseInt(zf,10)||void 0}else Gf=void 0;var AF=Gf;function za(n,e){if(Ot.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(qE){e:{try{rg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:RF[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&za.$.h.call(this)}}yt(za,Ot);var RF={2:"touch",3:"pen",4:"mouse"};za.prototype.h=function(){za.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ic="closure_listenable_"+(1e6*Math.random()|0),bF=0;function SF(n,e,t,r,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.la=i,this.key=++bF,this.fa=this.ia=!1}function th(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function ig(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function PF(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function $E(n){const e={};for(const t in n)e[t]=n[t];return e}const Hv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zE(n,e){let t,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(t in r)n[t]=r[t];for(let s=0;s<Hv.length;s++)t=Hv[s],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function nh(n){this.src=n,this.g={},this.h=0}nh.prototype.add=function(n,e,t,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var a=Kf(n,e,r,i);return-1<a?(e=n[a],t||(e.ia=!1)):(e=new SF(e,this.src,s,!!r,i),e.ia=t,n.push(e)),e};function Hf(n,e){var t=e.type;if(t in n.g){var r=n.g[t],i=UE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(th(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Kf(n,e,t,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==e&&s.capture==!!t&&s.la==r)return i}return-1}var sg="closure_lm_"+(1e6*Math.random()|0),wf={};function GE(n,e,t,r,i){if(r&&r.once)return KE(n,e,t,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)GE(n,e[s],t,r,i);return null}return t=cg(t),n&&n[Ic]?n.O(e,t,vc(r)?!!r.capture:!!r,i):HE(n,e,t,!1,r,i)}function HE(n,e,t,r,i,s){if(!e)throw Error("Invalid event type");var a=vc(i)?!!i.capture:!!i,l=ag(n);if(l||(n[sg]=l=new nh(n)),t=l.add(e,t,r,a,s),t.proxy)return t;if(r=CF(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)IF||(i=a),i===void 0&&(i=!1),n.addEventListener(e.toString(),r,i);else if(n.attachEvent)n.attachEvent(QE(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function CF(){function n(t){return e.call(n.src,n.listener,t)}const e=DF;return n}function KE(n,e,t,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)KE(n,e[s],t,r,i);return null}return t=cg(t),n&&n[Ic]?n.P(e,t,vc(r)?!!r.capture:!!r,i):HE(n,e,t,!0,r,i)}function jE(n,e,t,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)jE(n,e[s],t,r,i);else r=vc(r)?!!r.capture:!!r,t=cg(t),n&&n[Ic]?(n=n.i,e=String(e).toString(),e in n.g&&(s=n.g[e],t=Kf(s,t,r,i),-1<t&&(th(s[t]),Array.prototype.splice.call(s,t,1),s.length==0&&(delete n.g[e],n.h--)))):n&&(n=ag(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Kf(e,t,r,i)),(t=-1<n?e[n]:null)&&og(t))}function og(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Ic])Hf(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(QE(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=ag(e))?(Hf(t,n),t.h==0&&(t.src=null,e[sg]=null)):th(n)}}}function QE(n){return n in wf?wf[n]:wf[n]="on"+n}function DF(n,e){if(n.fa)n=!0;else{e=new za(e,this);var t=n.listener,r=n.la||n.src;n.ia&&og(n),n=t.call(r,e)}return n}function ag(n){return n=n[sg],n instanceof nh?n:null}var Ef="__closure_events_fn_"+(1e9*Math.random()>>>0);function cg(n){return typeof n=="function"?n:(n[Ef]||(n[Ef]=function(e){return n.handleEvent(e)}),n[Ef])}function _t(){li.call(this),this.i=new nh(this),this.S=this,this.J=null}yt(_t,li);_t.prototype[Ic]=!0;_t.prototype.removeEventListener=function(n,e,t,r){jE(this,n,e,t,r)};function Pt(n,e){var t,r=n.J;if(r)for(t=[];r;r=r.J)t.push(r);if(n=n.S,r=e.type||e,typeof e=="string")e=new Ot(e,n);else if(e instanceof Ot)e.target=e.target||n;else{var i=e;e=new Ot(r,n),zE(e,i)}if(i=!0,t)for(var s=t.length-1;0<=s;s--){var a=e.g=t[s];i=Mu(a,r,!0,e)&&i}if(a=e.g=n,i=Mu(a,r,!0,e)&&i,i=Mu(a,r,!1,e)&&i,t)for(s=0;s<t.length;s++)a=e.g=t[s],i=Mu(a,r,!1,e)&&i}_t.prototype.N=function(){if(_t.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)th(t[r]);delete n.g[e],n.h--}}this.J=null};_t.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};_t.prototype.P=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function Mu(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var a=e[s];if(a&&!a.fa&&a.capture==t){var l=a.listener,h=a.la||a.src;a.ia&&Hf(n.i,a),i=l.call(h,r)!==!1&&i}}return i&&!r.defaultPrevented}var ug=ae.JSON.stringify;class kF{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function xF(){var n=lg;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class NF{constructor(){this.h=this.g=null}add(e,t){const r=YE.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var YE=new kF(()=>new OF,n=>n.reset());class OF{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function LF(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function VF(n){ae.setTimeout(()=>{throw n},0)}let Ga,Ha=!1,lg=new NF,JE=()=>{const n=ae.Promise.resolve(void 0);Ga=()=>{n.then(MF)}};var MF=()=>{for(var n;n=xF();){try{n.h.call(n.g)}catch(t){VF(t)}var e=YE;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Ha=!1};function rh(n,e){_t.call(this),this.h=n||1,this.g=e||ae,this.j=Nt(this.qb,this),this.l=Date.now()}yt(rh,_t);H=rh.prototype;H.ga=!1;H.T=null;H.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Pt(this,"tick"),this.ga&&(hg(this),this.start()))}};H.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function hg(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}H.N=function(){rh.$.N.call(this),hg(this),delete this.g};function dg(n,e,t){if(typeof n=="function")t&&(n=Nt(n,t));else if(n&&typeof n.handleEvent=="function")n=Nt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ae.setTimeout(n,e||0)}function XE(n){n.g=dg(()=>{n.g=null,n.i&&(n.i=!1,XE(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class FF extends li{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:XE(this)}N(){super.N(),this.g&&(ae.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ka(n){li.call(this),this.h=n,this.g={}}yt(Ka,li);var Kv=[];function ZE(n,e,t,r){Array.isArray(t)||(t&&(Kv[0]=t.toString()),t=Kv);for(var i=0;i<t.length;i++){var s=GE(e,t[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function eT(n){ig(n.g,function(e,t){this.g.hasOwnProperty(t)&&og(e)},n),n.g={}}Ka.prototype.N=function(){Ka.$.N.call(this),eT(this)};Ka.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ih(){this.g=!0}ih.prototype.Ea=function(){this.g=!1};function UF(n,e,t,r,i,s){n.info(function(){if(n.g)if(s)for(var a="",l=s.split("&"),h=0;h<l.length;h++){var f=l[h].split("=");if(1<f.length){var p=f[0];f=f[1];var m=p.split("_");a=2<=m.length&&m[1]=="type"?a+(p+"="+f+"&"):a+(p+"=redacted&")}}else a=null;else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+t+`
`+a})}function BF(n,e,t,r,i,s,a){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+t+`
`+s+" "+a})}function Gs(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+WF(n,t)+(r?" "+r:"")})}function qF(n,e){n.info(function(){return"TIMEOUT: "+e})}ih.prototype.info=function(){};function WF(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var a=1;a<i.length;a++)i[a]=""}}}}return ug(t)}catch{return e}}var as={},jv=null;function sh(){return jv=jv||new _t}as.Ta="serverreachability";function tT(n){Ot.call(this,as.Ta,n)}yt(tT,Ot);function ja(n){const e=sh();Pt(e,new tT(e))}as.STAT_EVENT="statevent";function nT(n,e){Ot.call(this,as.STAT_EVENT,n),this.stat=e}yt(nT,Ot);function Bt(n){const e=sh();Pt(e,new nT(e,n))}as.Ua="timingevent";function rT(n,e){Ot.call(this,as.Ua,n),this.size=e}yt(rT,Ot);function wc(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return ae.setTimeout(function(){n()},e)}var oh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},iT={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function fg(){}fg.prototype.h=null;function Qv(n){return n.h||(n.h=n.i())}function sT(){}var Ec={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pg(){Ot.call(this,"d")}yt(pg,Ot);function gg(){Ot.call(this,"c")}yt(gg,Ot);var jf;function ah(){}yt(ah,fg);ah.prototype.g=function(){return new XMLHttpRequest};ah.prototype.i=function(){return{}};jf=new ah;function Tc(n,e,t,r){this.l=n,this.j=e,this.m=t,this.W=r||1,this.U=new Ka(this),this.P=$F,n=$f?125:void 0,this.V=new rh(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new oT}function oT(){this.i=null,this.g="",this.h=!1}var $F=45e3,aT={},Qf={};H=Tc.prototype;H.setTimeout=function(n){this.P=n};function Yf(n,e,t){n.L=1,n.A=uh(Ir(e)),n.u=t,n.S=!0,cT(n,null)}function cT(n,e){n.G=Date.now(),Ac(n),n.B=Ir(n.A);var t=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),mT(t.i,"t",r),n.o=0,t=n.l.J,n.h=new oT,n.g=MT(n.l,t?e:null,!n.u),0<n.O&&(n.M=new FF(Nt(n.Pa,n,n.g),n.O)),ZE(n.U,n.g,"readystatechange",n.nb),e=n.I?$E(n.I):{},n.u?(n.v||(n.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,e)):(n.v="GET",n.g.ha(n.B,n.v,null,e)),ja(),UF(n.j,n.v,n.B,n.m,n.W,n.u)}H.nb=function(n){n=n.target;const e=this.M;e&&zn(n)==3?e.l():this.Pa(n)};H.Pa=function(n){try{if(n==this.g)e:{const p=zn(this.g);var e=this.g.Ia();const m=this.g.da();if(!(3>p)&&(p!=3||$f||this.g&&(this.h.h||this.g.ja()||Zv(this.g)))){this.J||p!=4||e==7||(e==8||0>=m?ja(3):ja(2)),ch(this);var t=this.g.da();this.ca=t;t:if(uT(this)){var r=Zv(this.g);n="";var i=r.length,s=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Li(this),Sa(this);var a="";break t}this.h.i=new ae.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=n,this.o=0,a=this.h.g}else a=this.g.ja();if(this.i=t==200,BF(this.j,this.v,this.B,this.m,this.W,p,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,h=this.g;if((l=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$a(l)){var f=l;break t}}f=null}if(t=f)Gs(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jf(this,t);else{this.i=!1,this.s=3,Bt(12),Li(this),Sa(this);break e}}this.S?(lT(this,p,a),$f&&this.i&&p==3&&(ZE(this.U,this.V,"tick",this.mb),this.V.start())):(Gs(this.j,this.m,a,null),Jf(this,a)),p==4&&Li(this),this.i&&!this.J&&(p==4?NT(this.l,this):(this.i=!1,Ac(this)))}else l2(this.g),t==400&&0<a.indexOf("Unknown SID")?(this.s=3,Bt(12)):(this.s=0,Bt(13)),Li(this),Sa(this)}}}catch{}finally{}};function uT(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function lT(n,e,t){let r=!0,i;for(;!n.J&&n.o<t.length;)if(i=zF(n,t),i==Qf){e==4&&(n.s=4,Bt(14),r=!1),Gs(n.j,n.m,null,"[Incomplete Response]");break}else if(i==aT){n.s=4,Bt(15),Gs(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Gs(n.j,n.m,i,null),Jf(n,i);uT(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),e!=4||t.length!=0||n.h.h||(n.s=1,Bt(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),wg(e),e.M=!0,Bt(11))):(Gs(n.j,n.m,t,"[Invalid Chunked Response]"),Li(n),Sa(n))}H.mb=function(){if(this.g){var n=zn(this.g),e=this.g.ja();this.o<e.length&&(ch(this),lT(this,n,e),this.i&&n!=4&&Ac(this))}};function zF(n,e){var t=n.o,r=e.indexOf(`
`,t);return r==-1?Qf:(t=Number(e.substring(t,r)),isNaN(t)?aT:(r+=1,r+t>e.length?Qf:(e=e.slice(r,r+t),n.o=r+t,e)))}H.cancel=function(){this.J=!0,Li(this)};function Ac(n){n.Y=Date.now()+n.P,hT(n,n.P)}function hT(n,e){if(n.C!=null)throw Error("WatchDog timer not null");n.C=wc(Nt(n.lb,n),e)}function ch(n){n.C&&(ae.clearTimeout(n.C),n.C=null)}H.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(qF(this.j,this.B),this.L!=2&&(ja(),Bt(17)),Li(this),this.s=2,Sa(this)):hT(this,this.Y-n)};function Sa(n){n.l.H==0||n.J||NT(n.l,n)}function Li(n){ch(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,hg(n.V),eT(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function Jf(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Xf(t.i,n))){if(!n.K&&Xf(t.i,n)&&t.H==3){try{var r=t.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)yl(t),fh(t);else break e;Ig(t),Bt(18)}}else t.Fa=i[1],0<t.Fa-t.V&&37500>i[2]&&t.G&&t.A==0&&!t.v&&(t.v=wc(Nt(t.ib,t),6e3));if(1>=vT(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else Vi(t,11)}else if((n.K||t.g==n)&&yl(t),!$a(e))for(i=t.Ja.g.parse(e),e=0;e<i.length;e++){let f=i[e];if(t.V=f[0],f=f[1],t.H==2)if(f[0]=="c"){t.K=f[1],t.pa=f[2];const p=f[3];p!=null&&(t.ra=p,t.l.info("VER="+t.ra));const m=f[4];m!=null&&(t.Ga=m,t.l.info("SVER="+t.Ga));const w=f[5];w!=null&&typeof w=="number"&&0<w&&(r=1.5*w,t.L=r,t.l.info("backChannelRequestTimeoutMs_="+r)),r=t;const b=n.g;if(b){const q=b.g?b.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(q){var s=r.i;s.g||q.indexOf("spdy")==-1&&q.indexOf("quic")==-1&&q.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(mg(s,s.h),s.h=null))}if(r.F){const U=b.g?b.g.getResponseHeader("X-HTTP-Session-Id"):null;U&&(r.Da=U,Ue(r.I,r.F,U))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),r=t;var a=n;if(r.wa=VT(r,r.J?r.pa:null,r.Y),a.K){IT(r.i,a);var l=a,h=r.L;h&&l.setTimeout(h),l.C&&(ch(l),Ac(l)),r.g=a}else kT(r);0<t.j.length&&ph(t)}else f[0]!="stop"&&f[0]!="close"||Vi(t,7);else t.H==3&&(f[0]=="stop"||f[0]=="close"?f[0]=="stop"?Vi(t,7):vg(t):f[0]!="noop"&&t.h&&t.h.Aa(f),t.A=0)}}ja(4)}catch{}}function GF(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Zl(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function HF(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Zl(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function dT(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Zl(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=HF(n),r=GF(n),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],t&&t[s],n)}var fT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function KF(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),i=null;if(0<=r){var s=n[t].substring(0,r);i=n[t].substring(r+1)}else s=n[t];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Wi(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Wi){this.h=n.h,ml(this,n.j),this.s=n.s,this.g=n.g,_l(this,n.m),this.l=n.l;var e=n.i,t=new Qa;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Yv(this,t),this.o=n.o}else n&&(e=String(n).match(fT))?(this.h=!1,ml(this,e[1]||"",!0),this.s=ya(e[2]||""),this.g=ya(e[3]||"",!0),_l(this,e[4]),this.l=ya(e[5]||"",!0),Yv(this,e[6]||"",!0),this.o=ya(e[7]||"")):(this.h=!1,this.i=new Qa(null,this.h))}Wi.prototype.toString=function(){var n=[],e=this.j;e&&n.push(va(e,Jv,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(va(e,Jv,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(va(t,t.charAt(0)=="/"?YF:QF,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",va(t,XF)),n.join("")};function Ir(n){return new Wi(n)}function ml(n,e,t){n.j=t?ya(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function _l(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Yv(n,e,t){e instanceof Qa?(n.i=e,ZF(n.i,n.h)):(t||(e=va(e,JF)),n.i=new Qa(e,n.h))}function Ue(n,e,t){n.i.set(e,t)}function uh(n){return Ue(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function ya(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function va(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,jF),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function jF(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Jv=/[#\/\?@]/g,QF=/[#\?:]/g,YF=/[#\?]/g,JF=/[#\?@]/g,XF=/#/g;function Qa(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function hi(n){n.g||(n.g=new Map,n.h=0,n.i&&KF(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}H=Qa.prototype;H.add=function(n,e){hi(this),this.i=null,n=Ro(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function pT(n,e){hi(n),e=Ro(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function gT(n,e){return hi(n),e=Ro(n,e),n.g.has(e)}H.forEach=function(n,e){hi(this),this.g.forEach(function(t,r){t.forEach(function(i){n.call(e,i,r,this)},this)},this)};H.ta=function(){hi(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const i=n[r];for(let s=0;s<i.length;s++)t.push(e[r])}return t};H.Z=function(n){hi(this);let e=[];if(typeof n=="string")gT(this,n)&&(e=e.concat(this.g.get(Ro(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};H.set=function(n,e){return hi(this),this.i=null,n=Ro(this,n),gT(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};H.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function mT(n,e,t){pT(n,e),0<t.length&&(n.i=null,n.g.set(Ro(n,e),ng(t)),n.h+=t.length)}H.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const s=encodeURIComponent(String(r)),a=this.Z(r);for(r=0;r<a.length;r++){var i=s;a[r]!==""&&(i+="="+encodeURIComponent(String(a[r]))),n.push(i)}}return this.i=n.join("&")};function Ro(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function ZF(n,e){e&&!n.j&&(hi(n),n.i=null,n.g.forEach(function(t,r){var i=r.toLowerCase();r!=i&&(pT(this,r),mT(this,i,t))},n)),n.j=e}var e2=class{constructor(n,e){this.g=n,this.map=e}};function _T(n){this.l=n||t2,ae.PerformanceNavigationTiming?(n=ae.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(ae.g&&ae.g.Ka&&ae.g.Ka()&&ae.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var t2=10;function yT(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function vT(n){return n.h?1:n.g?n.g.size:0}function Xf(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function mg(n,e){n.g?n.g.add(e):n.h=e}function IT(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}_T.prototype.cancel=function(){if(this.i=wT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function wT(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return ng(n.i)}var n2=class{stringify(n){return ae.JSON.stringify(n,void 0)}parse(n){return ae.JSON.parse(n,void 0)}};function r2(){this.g=new n2}function i2(n,e,t){const r=t||"";try{dT(n,function(i,s){let a=i;vc(i)&&(a=ug(i)),e.push(r+s+"="+encodeURIComponent(a))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function s2(n,e){const t=new ih;if(ae.Image){const r=new Image;r.onload=Vu(Fu,t,r,"TestLoadImage: loaded",!0,e),r.onerror=Vu(Fu,t,r,"TestLoadImage: error",!1,e),r.onabort=Vu(Fu,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=Vu(Fu,t,r,"TestLoadImage: timeout",!1,e),ae.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Fu(n,e,t,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function lh(n){this.l=n.ec||null,this.j=n.ob||!1}yt(lh,fg);lh.prototype.g=function(){return new hh(this.l,this.j)};lh.prototype.i=function(n){return function(){return n}}({});function hh(n,e){_t.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=_g,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yt(hh,_t);var _g=0;H=hh.prototype;H.open=function(n,e){if(this.readyState!=_g)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Ya(this)};H.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||ae).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};H.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rc(this)),this.readyState=_g};H.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Ya(this)),this.g&&(this.readyState=3,Ya(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ae.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ET(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function ET(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}H.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Rc(this):Ya(this),this.readyState==3&&ET(this)}};H.Za=function(n){this.g&&(this.response=this.responseText=n,Rc(this))};H.Ya=function(n){this.g&&(this.response=n,Rc(this))};H.ka=function(){this.g&&Rc(this)};function Rc(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Ya(n)}H.setRequestHeader=function(n,e){this.v.append(n,e)};H.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};H.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Ya(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(hh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var o2=ae.JSON.parse;function Ze(n){_t.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=TT,this.L=this.M=!1}yt(Ze,_t);var TT="",a2=/^https?$/i,c2=["POST","PUT"];H=Ze.prototype;H.Oa=function(n){this.M=n};H.ha=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():jf.g(),this.C=this.u?Qv(this.u):Qv(jf),this.g.onreadystatechange=Nt(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(s){Xv(this,s);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)t.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())t.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(s=>s.toLowerCase()=="content-type"),i=ae.FormData&&n instanceof ae.FormData,!(0<=UE(c2,e))||r||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of t)this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{bT(this),0<this.B&&((this.L=u2(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Nt(this.ua,this)):this.A=dg(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Xv(this,s)}};function u2(n){return oo&&typeof n.timeout=="number"&&n.ontimeout!==void 0}H.ua=function(){typeof tg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pt(this,"timeout"),this.abort(8))};function Xv(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,AT(n),dh(n)}function AT(n){n.F||(n.F=!0,Pt(n,"complete"),Pt(n,"error"))}H.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Pt(this,"complete"),Pt(this,"abort"),dh(this))};H.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),dh(this,!0)),Ze.$.N.call(this)};H.La=function(){this.s||(this.G||this.v||this.l?RT(this):this.kb())};H.kb=function(){RT(this)};function RT(n){if(n.h&&typeof tg<"u"&&(!n.C[1]||zn(n)!=4||n.da()!=2)){if(n.v&&zn(n)==4)dg(n.La,0,n);else if(Pt(n,"readystatechange"),zn(n)==4){n.h=!1;try{const a=n.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var i=String(n.I).match(fT)[1]||null;!i&&ae.self&&ae.self.location&&(i=ae.self.location.protocol.slice(0,-1)),r=!a2.test(i?i.toLowerCase():"")}t=r}if(t)Pt(n,"complete"),Pt(n,"success");else{n.m=6;try{var s=2<zn(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",AT(n)}}finally{dh(n)}}}}function dh(n,e){if(n.g){bT(n);const t=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||Pt(n,"ready");try{t.onreadystatechange=r}catch{}}}function bT(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(ae.clearTimeout(n.A),n.A=null)}H.isActive=function(){return!!this.g};function zn(n){return n.g?n.g.readyState:0}H.da=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}};H.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};H.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),o2(e)}};function Zv(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case TT:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function l2(n){const e={};n=(n.g&&2<=zn(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if($a(n[r]))continue;var t=LF(n[r]);const i=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const s=e[i]||[];e[i]=s,s.push(t)}PF(e,function(r){return r.join(", ")})}H.Ia=function(){return this.m};H.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ST(n){let e="";return ig(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function yg(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=ST(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Ue(n,e,t))}function oa(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function PT(n){this.Ga=0,this.j=[],this.l=new ih,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=oa("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=oa("baseRetryDelayMs",5e3,n),this.hb=oa("retryDelaySeedMs",1e4,n),this.eb=oa("forwardChannelMaxRetries",2,n),this.xa=oa("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new _T(n&&n.concurrentRequestLimit),this.Ja=new r2,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}H=PT.prototype;H.ra=8;H.H=1;function vg(n){if(CT(n),n.H==3){var e=n.W++,t=Ir(n.I);if(Ue(t,"SID",n.K),Ue(t,"RID",e),Ue(t,"TYPE","terminate"),bc(n,t),e=new Tc(n,n.l,e),e.L=2,e.A=uh(Ir(t)),t=!1,ae.navigator&&ae.navigator.sendBeacon)try{t=ae.navigator.sendBeacon(e.A.toString(),"")}catch{}!t&&ae.Image&&(new Image().src=e.A,t=!0),t||(e.g=MT(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ac(e)}LT(n)}function fh(n){n.g&&(wg(n),n.g.cancel(),n.g=null)}function CT(n){fh(n),n.u&&(ae.clearTimeout(n.u),n.u=null),yl(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&ae.clearTimeout(n.m),n.m=null)}function ph(n){if(!yT(n.i)&&!n.m){n.m=!0;var e=n.Na;Ga||JE(),Ha||(Ga(),Ha=!0),lg.add(e,n),n.C=0}}function h2(n,e){return vT(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=wc(Nt(n.Na,n,e),OT(n,n.C)),n.C++,!0)}H.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Tc(this,this.l,n);let s=this.s;if(this.U&&(s?(s=$E(s),zE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var r=this.j[t];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=DT(this,i,e),t=Ir(this.I),Ue(t,"RID",n),Ue(t,"CVER",22),this.F&&Ue(t,"X-HTTP-Session-Id",this.F),bc(this,t),s&&(this.O?e="headers="+encodeURIComponent(String(ST(s)))+"&"+e:this.o&&yg(t,this.o,s)),mg(this.i,i),this.bb&&Ue(t,"TYPE","init"),this.P?(Ue(t,"$req",e),Ue(t,"SID","null"),i.aa=!0,Yf(i,t,null)):Yf(i,t,e),this.H=2}}else this.H==3&&(n?eI(this,n):this.j.length==0||yT(this.i)||eI(this))};function eI(n,e){var t;e?t=e.m:t=n.W++;const r=Ir(n.I);Ue(r,"SID",n.K),Ue(r,"RID",t),Ue(r,"AID",n.V),bc(n,r),n.o&&n.s&&yg(r,n.o,n.s),t=new Tc(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=DT(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),mg(n.i,t),Yf(t,r,e)}function bc(n,e){n.na&&ig(n.na,function(t,r){Ue(e,r,t)}),n.h&&dT({},function(t,r){Ue(e,r,t)})}function DT(n,e,t){t=Math.min(n.j.length,t);var r=n.h?Nt(n.h.Va,n.h,n):null;e:{var i=n.j;let s=-1;for(;;){const a=["count="+t];s==-1?0<t?(s=i[0].g,a.push("ofs="+s)):s=0:a.push("ofs="+s);let l=!0;for(let h=0;h<t;h++){let f=i[h].g;const p=i[h].map;if(f-=s,0>f)s=Math.max(0,i[h].g-100),l=!1;else try{i2(p,a,"req"+f+"_")}catch{r&&r(p)}}if(l){r=a.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,r}function kT(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Ga||JE(),Ha||(Ga(),Ha=!0),lg.add(e,n),n.A=0}}function Ig(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=wc(Nt(n.Ma,n),OT(n,n.A)),n.A++,!0)}H.Ma=function(){if(this.u=null,xT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=wc(Nt(this.jb,this),n)}};H.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Bt(10),fh(this),xT(this))};function wg(n){n.B!=null&&(ae.clearTimeout(n.B),n.B=null)}function xT(n){n.g=new Tc(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=Ir(n.wa);Ue(e,"RID","rpc"),Ue(e,"SID",n.K),Ue(e,"AID",n.V),Ue(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&Ue(e,"TO",n.qa),Ue(e,"TYPE","xmlhttp"),bc(n,e),n.o&&n.s&&yg(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.A=uh(Ir(e)),t.u=null,t.S=!0,cT(t,n)}H.ib=function(){this.v!=null&&(this.v=null,fh(this),Ig(this),Bt(19))};function yl(n){n.v!=null&&(ae.clearTimeout(n.v),n.v=null)}function NT(n,e){var t=null;if(n.g==e){yl(n),wg(n),n.g=null;var r=2}else if(Xf(n.i,e))t=e.F,IT(n.i,e),r=1;else return;if(n.H!=0){if(e.i)if(r==1){t=e.u?e.u.length:0,e=Date.now()-e.G;var i=n.C;r=sh(),Pt(r,new rT(r,t)),ph(n)}else kT(n);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&h2(n,e)||r==2&&Ig(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),i){case 1:Vi(n,5);break;case 4:Vi(n,10);break;case 3:Vi(n,6);break;default:Vi(n,2)}}}function OT(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function Vi(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var r=Nt(n.pb,n);t||(t=new Wi("//www.google.com/images/cleardot.gif"),ae.location&&ae.location.protocol=="http"||ml(t,"https"),uh(t)),s2(t.toString(),r)}else Bt(2);n.H=0,n.h&&n.h.za(e),LT(n),CT(n)}H.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Bt(2)):(this.l.info("Failed to ping google.com"),Bt(1))};function LT(n){if(n.H=0,n.ma=[],n.h){const e=wT(n.i);(e.length!=0||n.j.length!=0)&&(zv(n.ma,e),zv(n.ma,n.j),n.i.i.length=0,ng(n.j),n.j.length=0),n.h.ya()}}function VT(n,e,t){var r=t instanceof Wi?Ir(t):new Wi(t);if(r.g!="")e&&(r.g=e+"."+r.g),_l(r,r.m);else{var i=ae.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Wi(null);r&&ml(s,r),e&&(s.g=e),i&&_l(s,i),t&&(s.l=t),r=s}return t=n.F,e=n.Da,t&&e&&Ue(r,t,e),Ue(r,"VER",n.ra),bc(n,r),r}function MT(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n.Ha&&!n.va?new Ze(new lh({ob:t})):new Ze(n.va),e.Oa(n.J),e}H.isActive=function(){return!!this.h&&this.h.isActive(this)};function FT(){}H=FT.prototype;H.Ba=function(){};H.Aa=function(){};H.za=function(){};H.ya=function(){};H.isActive=function(){return!0};H.Va=function(){};function vl(){if(oo&&!(10<=Number(AF)))throw Error("Environmental error: no available transport.")}vl.prototype.g=function(n,e){return new un(n,e)};function un(n,e){_t.call(this),this.g=new PT(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!$a(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$a(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new bo(this)}yt(un,_t);un.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Bt(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=VT(n,null,n.Y),ph(n)};un.prototype.close=function(){vg(this.g)};un.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=ug(n),n=t);e.j.push(new e2(e.fb++,n)),e.H==3&&ph(e)};un.prototype.N=function(){this.g.h=null,delete this.j,vg(this.g),delete this.g,un.$.N.call(this)};function UT(n){pg.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}yt(UT,pg);function BT(){gg.call(this),this.status=1}yt(BT,gg);function bo(n){this.g=n}yt(bo,FT);bo.prototype.Ba=function(){Pt(this.g,"a")};bo.prototype.Aa=function(n){Pt(this.g,new UT(n))};bo.prototype.za=function(n){Pt(this.g,new BT)};bo.prototype.ya=function(){Pt(this.g,"b")};function d2(){this.blockSize=-1}function Dn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}yt(Dn,d2);Dn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Tf(n,e,t){t||(t=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(i=0;16>i;++i)r[i]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],i=n.g[2];var s=n.g[3],a=e+(s^t&(i^s))+r[0]+3614090360&4294967295;e=t+(a<<7&4294967295|a>>>25),a=s+(i^e&(t^i))+r[1]+3905402710&4294967295,s=e+(a<<12&4294967295|a>>>20),a=i+(t^s&(e^t))+r[2]+606105819&4294967295,i=s+(a<<17&4294967295|a>>>15),a=t+(e^i&(s^e))+r[3]+3250441966&4294967295,t=i+(a<<22&4294967295|a>>>10),a=e+(s^t&(i^s))+r[4]+4118548399&4294967295,e=t+(a<<7&4294967295|a>>>25),a=s+(i^e&(t^i))+r[5]+1200080426&4294967295,s=e+(a<<12&4294967295|a>>>20),a=i+(t^s&(e^t))+r[6]+2821735955&4294967295,i=s+(a<<17&4294967295|a>>>15),a=t+(e^i&(s^e))+r[7]+4249261313&4294967295,t=i+(a<<22&4294967295|a>>>10),a=e+(s^t&(i^s))+r[8]+1770035416&4294967295,e=t+(a<<7&4294967295|a>>>25),a=s+(i^e&(t^i))+r[9]+2336552879&4294967295,s=e+(a<<12&4294967295|a>>>20),a=i+(t^s&(e^t))+r[10]+4294925233&4294967295,i=s+(a<<17&4294967295|a>>>15),a=t+(e^i&(s^e))+r[11]+2304563134&4294967295,t=i+(a<<22&4294967295|a>>>10),a=e+(s^t&(i^s))+r[12]+1804603682&4294967295,e=t+(a<<7&4294967295|a>>>25),a=s+(i^e&(t^i))+r[13]+4254626195&4294967295,s=e+(a<<12&4294967295|a>>>20),a=i+(t^s&(e^t))+r[14]+2792965006&4294967295,i=s+(a<<17&4294967295|a>>>15),a=t+(e^i&(s^e))+r[15]+1236535329&4294967295,t=i+(a<<22&4294967295|a>>>10),a=e+(i^s&(t^i))+r[1]+4129170786&4294967295,e=t+(a<<5&4294967295|a>>>27),a=s+(t^i&(e^t))+r[6]+3225465664&4294967295,s=e+(a<<9&4294967295|a>>>23),a=i+(e^t&(s^e))+r[11]+643717713&4294967295,i=s+(a<<14&4294967295|a>>>18),a=t+(s^e&(i^s))+r[0]+3921069994&4294967295,t=i+(a<<20&4294967295|a>>>12),a=e+(i^s&(t^i))+r[5]+3593408605&4294967295,e=t+(a<<5&4294967295|a>>>27),a=s+(t^i&(e^t))+r[10]+38016083&4294967295,s=e+(a<<9&4294967295|a>>>23),a=i+(e^t&(s^e))+r[15]+3634488961&4294967295,i=s+(a<<14&4294967295|a>>>18),a=t+(s^e&(i^s))+r[4]+3889429448&4294967295,t=i+(a<<20&4294967295|a>>>12),a=e+(i^s&(t^i))+r[9]+568446438&4294967295,e=t+(a<<5&4294967295|a>>>27),a=s+(t^i&(e^t))+r[14]+3275163606&4294967295,s=e+(a<<9&4294967295|a>>>23),a=i+(e^t&(s^e))+r[3]+4107603335&4294967295,i=s+(a<<14&4294967295|a>>>18),a=t+(s^e&(i^s))+r[8]+1163531501&4294967295,t=i+(a<<20&4294967295|a>>>12),a=e+(i^s&(t^i))+r[13]+2850285829&4294967295,e=t+(a<<5&4294967295|a>>>27),a=s+(t^i&(e^t))+r[2]+4243563512&4294967295,s=e+(a<<9&4294967295|a>>>23),a=i+(e^t&(s^e))+r[7]+1735328473&4294967295,i=s+(a<<14&4294967295|a>>>18),a=t+(s^e&(i^s))+r[12]+2368359562&4294967295,t=i+(a<<20&4294967295|a>>>12),a=e+(t^i^s)+r[5]+4294588738&4294967295,e=t+(a<<4&4294967295|a>>>28),a=s+(e^t^i)+r[8]+2272392833&4294967295,s=e+(a<<11&4294967295|a>>>21),a=i+(s^e^t)+r[11]+1839030562&4294967295,i=s+(a<<16&4294967295|a>>>16),a=t+(i^s^e)+r[14]+4259657740&4294967295,t=i+(a<<23&4294967295|a>>>9),a=e+(t^i^s)+r[1]+2763975236&4294967295,e=t+(a<<4&4294967295|a>>>28),a=s+(e^t^i)+r[4]+1272893353&4294967295,s=e+(a<<11&4294967295|a>>>21),a=i+(s^e^t)+r[7]+4139469664&4294967295,i=s+(a<<16&4294967295|a>>>16),a=t+(i^s^e)+r[10]+3200236656&4294967295,t=i+(a<<23&4294967295|a>>>9),a=e+(t^i^s)+r[13]+681279174&4294967295,e=t+(a<<4&4294967295|a>>>28),a=s+(e^t^i)+r[0]+3936430074&4294967295,s=e+(a<<11&4294967295|a>>>21),a=i+(s^e^t)+r[3]+3572445317&4294967295,i=s+(a<<16&4294967295|a>>>16),a=t+(i^s^e)+r[6]+76029189&4294967295,t=i+(a<<23&4294967295|a>>>9),a=e+(t^i^s)+r[9]+3654602809&4294967295,e=t+(a<<4&4294967295|a>>>28),a=s+(e^t^i)+r[12]+3873151461&4294967295,s=e+(a<<11&4294967295|a>>>21),a=i+(s^e^t)+r[15]+530742520&4294967295,i=s+(a<<16&4294967295|a>>>16),a=t+(i^s^e)+r[2]+3299628645&4294967295,t=i+(a<<23&4294967295|a>>>9),a=e+(i^(t|~s))+r[0]+4096336452&4294967295,e=t+(a<<6&4294967295|a>>>26),a=s+(t^(e|~i))+r[7]+1126891415&4294967295,s=e+(a<<10&4294967295|a>>>22),a=i+(e^(s|~t))+r[14]+2878612391&4294967295,i=s+(a<<15&4294967295|a>>>17),a=t+(s^(i|~e))+r[5]+4237533241&4294967295,t=i+(a<<21&4294967295|a>>>11),a=e+(i^(t|~s))+r[12]+1700485571&4294967295,e=t+(a<<6&4294967295|a>>>26),a=s+(t^(e|~i))+r[3]+2399980690&4294967295,s=e+(a<<10&4294967295|a>>>22),a=i+(e^(s|~t))+r[10]+4293915773&4294967295,i=s+(a<<15&4294967295|a>>>17),a=t+(s^(i|~e))+r[1]+2240044497&4294967295,t=i+(a<<21&4294967295|a>>>11),a=e+(i^(t|~s))+r[8]+1873313359&4294967295,e=t+(a<<6&4294967295|a>>>26),a=s+(t^(e|~i))+r[15]+4264355552&4294967295,s=e+(a<<10&4294967295|a>>>22),a=i+(e^(s|~t))+r[6]+2734768916&4294967295,i=s+(a<<15&4294967295|a>>>17),a=t+(s^(i|~e))+r[13]+1309151649&4294967295,t=i+(a<<21&4294967295|a>>>11),a=e+(i^(t|~s))+r[4]+4149444226&4294967295,e=t+(a<<6&4294967295|a>>>26),a=s+(t^(e|~i))+r[11]+3174756917&4294967295,s=e+(a<<10&4294967295|a>>>22),a=i+(e^(s|~t))+r[2]+718787259&4294967295,i=s+(a<<15&4294967295|a>>>17),a=t+(s^(i|~e))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Dn.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=t;)Tf(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<e;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Tf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=n[s++],i==this.blockSize){Tf(this,r),i=0;break}}this.h=i,this.i+=e};Dn.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var r=0;32>r;r+=8)n[t++]=this.g[e]>>>r&255;return n};function ke(n,e){this.h=e;for(var t=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==e||(t[i]=s,r=!1)}this.g=t}var f2={};function Eg(n){return-128<=n&&128>n?wF(n,function(e){return new ke([e|0],0>e?-1:0)}):new ke([n|0],0>n?-1:0)}function Gn(n){if(isNaN(n)||!isFinite(n))return Ys;if(0>n)return Rt(Gn(-n));for(var e=[],t=1,r=0;n>=t;r++)e[r]=n/t|0,t*=Zf;return new ke(e,0)}function qT(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return Rt(qT(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Gn(Math.pow(e,8)),r=Ys,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),a=parseInt(n.substring(i,i+s),e);8>s?(s=Gn(Math.pow(e,s)),r=r.R(s).add(Gn(a))):(r=r.R(t),r=r.add(Gn(a)))}return r}var Zf=4294967296,Ys=Eg(0),ep=Eg(1),tI=Eg(16777216);H=ke.prototype;H.ea=function(){if(vn(this))return-Rt(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var r=this.D(t);n+=(0<=r?r:Zf+r)*e,e*=Zf}return n};H.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(pr(this))return"0";if(vn(this))return"-"+Rt(this).toString(n);for(var e=Gn(Math.pow(n,6)),t=this,r="";;){var i=wl(t,e).g;t=Il(t,i.R(e));var s=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=i,pr(t))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};H.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function pr(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function vn(n){return n.h==-1}H.X=function(n){return n=Il(this,n),vn(n)?-1:pr(n)?0:1};function Rt(n){for(var e=n.g.length,t=[],r=0;r<e;r++)t[r]=~n.g[r];return new ke(t,~n.h).add(ep)}H.abs=function(){return vn(this)?Rt(this):this};H.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),a=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=a>>>16,s&=65535,a&=65535,t[i]=a<<16|s}return new ke(t,t[t.length-1]&-2147483648?-1:0)};function Il(n,e){return n.add(Rt(e))}H.R=function(n){if(pr(this)||pr(n))return Ys;if(vn(this))return vn(n)?Rt(this).R(Rt(n)):Rt(Rt(this).R(n));if(vn(n))return Rt(this.R(Rt(n)));if(0>this.X(tI)&&0>n.X(tI))return Gn(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],r=0;r<2*e;r++)t[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,a=this.D(r)&65535,l=n.D(i)>>>16,h=n.D(i)&65535;t[2*r+2*i]+=a*h,Uu(t,2*r+2*i),t[2*r+2*i+1]+=s*h,Uu(t,2*r+2*i+1),t[2*r+2*i+1]+=a*l,Uu(t,2*r+2*i+1),t[2*r+2*i+2]+=s*l,Uu(t,2*r+2*i+2)}for(r=0;r<e;r++)t[r]=t[2*r+1]<<16|t[2*r];for(r=e;r<2*e;r++)t[r]=0;return new ke(t,0)};function Uu(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function aa(n,e){this.g=n,this.h=e}function wl(n,e){if(pr(e))throw Error("division by zero");if(pr(n))return new aa(Ys,Ys);if(vn(n))return e=wl(Rt(n),e),new aa(Rt(e.g),Rt(e.h));if(vn(e))return e=wl(n,Rt(e)),new aa(Rt(e.g),e.h);if(30<n.g.length){if(vn(n)||vn(e))throw Error("slowDivide_ only works with positive integers.");for(var t=ep,r=e;0>=r.X(n);)t=nI(t),r=nI(r);var i=Ds(t,1),s=Ds(r,1);for(r=Ds(r,2),t=Ds(t,2);!pr(r);){var a=s.add(r);0>=a.X(n)&&(i=i.add(t),s=a),r=Ds(r,1),t=Ds(t,1)}return e=Il(n,i.R(e)),new aa(i,e)}for(i=Ys;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),r=Math.ceil(Math.log(t)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Gn(t),a=s.R(e);vn(a)||0<a.X(n);)t-=r,s=Gn(t),a=s.R(e);pr(s)&&(s=ep),i=i.add(s),n=Il(n,a)}return new aa(i,n)}H.gb=function(n){return wl(this,n).h};H.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)&n.D(r);return new ke(t,this.h&n.h)};H.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)|n.D(r);return new ke(t,this.h|n.h)};H.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],r=0;r<e;r++)t[r]=this.D(r)^n.D(r);return new ke(t,this.h^n.h)};function nI(n){for(var e=n.g.length+1,t=[],r=0;r<e;r++)t[r]=n.D(r)<<1|n.D(r-1)>>>31;return new ke(t,n.h)}function Ds(n,e){var t=e>>5;e%=32;for(var r=n.g.length-t,i=[],s=0;s<r;s++)i[s]=0<e?n.D(s+t)>>>e|n.D(s+t+1)<<32-e:n.D(s+t);return new ke(i,n.h)}vl.prototype.createWebChannel=vl.prototype.g;un.prototype.send=un.prototype.u;un.prototype.open=un.prototype.m;un.prototype.close=un.prototype.close;oh.NO_ERROR=0;oh.TIMEOUT=8;oh.HTTP_ERROR=6;iT.COMPLETE="complete";sT.EventType=Ec;Ec.OPEN="a";Ec.CLOSE="b";Ec.ERROR="c";Ec.MESSAGE="d";_t.prototype.listen=_t.prototype.O;Ze.prototype.listenOnce=Ze.prototype.P;Ze.prototype.getLastError=Ze.prototype.Sa;Ze.prototype.getLastErrorCode=Ze.prototype.Ia;Ze.prototype.getStatus=Ze.prototype.da;Ze.prototype.getResponseJson=Ze.prototype.Wa;Ze.prototype.getResponseText=Ze.prototype.ja;Ze.prototype.send=Ze.prototype.ha;Ze.prototype.setWithCredentials=Ze.prototype.Oa;Dn.prototype.digest=Dn.prototype.l;Dn.prototype.reset=Dn.prototype.reset;Dn.prototype.update=Dn.prototype.j;ke.prototype.add=ke.prototype.add;ke.prototype.multiply=ke.prototype.R;ke.prototype.modulo=ke.prototype.gb;ke.prototype.compare=ke.prototype.X;ke.prototype.toNumber=ke.prototype.ea;ke.prototype.toString=ke.prototype.toString;ke.prototype.getBits=ke.prototype.D;ke.fromNumber=Gn;ke.fromString=qT;var p2=function(){return new vl},g2=function(){return sh()},Af=oh,m2=iT,_2=as,rI={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Bu=sT,y2=Ze,v2=Dn,Js=ke;const iI="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let So="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new ql("@firebase/firestore");function Ms(){return Xr.logLevel}function I2(n){Xr.setLogLevel(n)}function M(n,...e){if(Xr.logLevel<=ye.DEBUG){const t=e.map(Tg);Xr.debug(`Firestore (${So}): ${n}`,...t)}}function ot(n,...e){if(Xr.logLevel<=ye.ERROR){const t=e.map(Tg);Xr.error(`Firestore (${So}): ${n}`,...t)}}function kn(n,...e){if(Xr.logLevel<=ye.WARN){const t=e.map(Tg);Xr.warn(`Firestore (${So}): ${n}`,...t)}}function Tg(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(n="Unexpected state"){const e=`FIRESTORE (${So}) INTERNAL ASSERTION FAILED: `+n;throw ot(e),new Error(e)}function J(n,e){n||K()}function w2(n,e){n||K()}function G(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends qt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class E2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(gt.UNAUTHENTICATED))}shutdown(){}}class T2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class A2{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let s=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new mt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=s;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},l=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new mt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new WT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new gt(e)}}class R2{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class b2{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new R2(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class S2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(J(typeof t.token=="string"),this.R=t.token,new S2(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C2(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=C2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function le(n,e){return n<e?-1:n>e?1:0}function ao(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function zT(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ge(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Ge(0,0))}static max(){return new X(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(),r===void 0?r=e.length-t:r>e.length-t&&K(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ja.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ja?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Re extends Ja{construct(e,t,r){return new Re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Re(t)}static emptyPath(){return new Re([])}}const D2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Ja{construct(e,t,r){return new $e(e,t,r)}static isValidIdentifier(e){return D2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new O(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new O(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(t)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(Re.fromString(e))}static fromName(e){return new $(Re.fromString(e).popFirst(5))}static empty(){return new $(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new Re(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function tp(n){return n.fields.find(e=>e.kind===2)}function Pi(n){return n.fields.filter(e=>e.kind!==2)}El.UNKNOWN_ID=-1;class Zu{constructor(e,t){this.fieldPath=e,this.kind=t}}class Xa{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Xa(0,ln.min())}}function GT(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Ge(t+1,0):new Ge(t,r));return new ln(i,$.empty(),e)}function HT(n){return new ln(n.readTime,n.key,-1)}class ln{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ln(X.min(),$.empty(),-1)}static max(){return new ln(X.max(),$.empty(),-1)}}function Ag(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:le(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==KT)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,r)=>{t(e)})}static reject(e){return new S((t,r)=>{r(e)})}static waitFor(e){return new S((t,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},h=>r(h))}),a=!0,s===i&&t()})}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next(i=>i?S.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new S((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let h=0;h<s;h++){const f=h;t(e[f]).next(p=>{a[f]=p,++l,l===s&&r(a)},p=>i(p))}})}static doWhile(e,t){return new S((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new mt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Pa(e,t.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Rg(r.target.error);this.V.reject(new Pa(e,i))}}static open(e,t,r,i){try{return new gh(t,e.transaction(i,r))}catch(s){throw new Pa(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(M("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new x2(t)}}class Pn{constructor(e,t,r){this.name=e,this.version=t,this.p=r,Pn.S(je())===12.2&&ot("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return M("SimpleDb","Removing database:",e),Ci(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Oa())return!1;if(Pn.C())return!0;const e=je(),t=Pn.S(e),r=0<t&&t<10,i=Pn.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(M("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const a=s.target.result;t(a)},i.onblocked=()=>{r(new Pa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const a=s.target.error;a.name==="VersionError"?r(new O(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?r(new O(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):r(new Pa(e,a))},i.onupgradeneeded=s=>{M("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const a=s.target.result;this.p.N(a,i.transaction,s.oldVersion,this.version).next(()=>{M("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=t=>this.B(t)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,i){const s=t==="readonly";let a=0;for(;;){++a;try{this.db=await this.O(e);const l=gh.open(this.db,e,s?"readonly":"readwrite",r),h=i(l).next(f=>(l.g(),f)).catch(f=>(l.abort(f),S.reject(f))).toPromise();return h.catch(()=>{}),await l.m,h}catch(l){const h=l,f=h.name!=="FirebaseError"&&a<3;if(M("SimpleDb","Transaction failed with error:",h.message,"Retrying:",f),this.close(),!f)return Promise.reject(h)}}}close(){this.db&&this.db.close(),this.db=void 0}}class k2{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Ci(this.k.delete())}}class Pa extends O{constructor(e,t){super(C.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function fi(n){return n.name==="IndexedDbTransactionError"}class x2{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(M("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(M("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ci(r)}add(e){return M("SimpleDb","ADD",this.store.name,e,e),Ci(this.store.add(e))}get(e){return Ci(this.store.get(e)).next(t=>(t===void 0&&(t=null),M("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return M("SimpleDb","DELETE",this.store.name,e),Ci(this.store.delete(e))}count(){return M("SimpleDb","COUNT",this.store.name),Ci(this.store.count())}W(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.G(i,(a,l)=>{s.push(l)}).next(()=>s)}{const i=this.store.getAll(r.range);return new S((s,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{s(l.target.result)}})}}j(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new S((i,s)=>{r.onerror=a=>{s(a.target.error)},r.onsuccess=a=>{i(a.target.result)}})}H(e,t){M("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.J=!1;const i=this.cursor(r);return this.G(i,(s,a,l)=>l.delete())}Y(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.G(i,t)}Z(e){const t=this.cursor({});return new S((r,i)=>{t.onerror=s=>{const a=Rg(s.target.error);i(a)},t.onsuccess=s=>{const a=s.target.result;a?e(a.primaryKey,a.value).next(l=>{l?a.continue():r()}):r()}})}G(e,t){const r=[];return new S((i,s)=>{e.onerror=a=>{s(a.target.error)},e.onsuccess=a=>{const l=a.target.result;if(!l)return void i();const h=new k2(l),f=t(l.primaryKey,l.value,h);if(f instanceof S){const p=f.catch(m=>(h.done(),S.reject(m)));r.push(p)}h.isDone?i():h.$===null?l.continue():l.continue(h.$)}}).next(()=>S.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ci(n){return new S((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=Rg(r.target.error);t(i)}})}let sI=!1;function Rg(n){const e=Pn.S(je());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new O("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return sI||(sI=!0,setTimeout(()=>{throw r},0)),r}}return n}class N2{constructor(e,t){this.asyncQueue=e,this.X=t,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){M("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{M("IndexBackiller",`Documents written: ${await this.X.te()}`)}catch(t){fi(t)?M("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await di(t)}await this.ee(6e4)})}}class O2{constructor(e,t){this.localStore=e,this.persistence=t}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ne(t,e))}ne(e,t){const r=new Set;let i=t,s=!0;return S.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(a=>{if(a!==null&&!r.has(a))return M("IndexBackiller",`Processing collection: ${a}`),this.re(e,a,i).next(l=>{i-=l,r.add(a)});s=!1})).next(()=>t-i)}re(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const a=s.changes;return this.localStore.indexManager.updateIndexEntries(e,a).next(()=>this.ie(i,s)).next(l=>(M("IndexBackiller",`Updating offset: ${l}`),this.localStore.indexManager.updateCollectionGroup(e,t,l))).next(()=>a.size)}))}ie(e,t){let r=e;return t.changes.forEach((i,s)=>{const a=HT(s);Ag(a,r)>0&&(r=a)}),new ln(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.se(r),this.oe=r=>t.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Jt._e=-1;function Sc(n){return n==null}function Za(n){return n===0&&1/n==-1/0}function QT(n){return typeof n=="number"&&Number.isInteger(n)&&!Za(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=oI(e)),e=L2(n.get(t),e);return oI(e)}function L2(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function oI(n){return n+""}function Hn(n){const e=n.length;if(J(e>=2),e===2)return J(n.charAt(0)===""&&n.charAt(1)===""),Re.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const a=n.indexOf("",s);switch((a<0||a>t)&&K(),n.charAt(a+1)){case"":const l=n.substring(s,a);let h;i.length===0?h=l:(i+=l,h=i,i=""),r.push(h);break;case"":i+=n.substring(s,a),i+="\0";break;case"":i+=n.substring(s,a+1);break;default:K()}s=a+2}return new Re(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(n,e){return[n,Wt(e)]}function YT(n,e,t){return[n,Wt(e),t]}const V2={},M2=["prefixPath","collectionGroup","readTime","documentId"],F2=["prefixPath","collectionGroup","documentId"],U2=["collectionGroup","readTime","prefixPath","documentId"],B2=["canonicalId","targetId"],q2=["targetId","path"],W2=["path","targetId"],$2=["collectionId","parent"],z2=["indexId","uid"],G2=["uid","sequenceNumber"],H2=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],K2=["indexId","uid","orderedDocumentKey"],j2=["userId","collectionPath","documentId"],Q2=["userId","collectionPath","largestBatchId"],Y2=["userId","collectionGroup","largestBatchId"],JT=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],J2=[...JT,"documentOverlays"],XT=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ZT=XT,X2=[...ZT,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np extends jT{constructor(e,t){super(),this.ae=e,this.currentSequenceNumber=t}}function vt(n,e){const t=G(n);return Pn.M(t.ae,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function cs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function e0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t){this.comparator=e,this.root=t||Tt.EMPTY}insert(e,t){return new Ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qu(this.root,e,this.comparator,!1)}getReverseIterator(){return new qu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qu(this.root,e,this.comparator,!0)}}class qu{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Tt{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Tt.RED,this.left=i??Tt.EMPTY,this.right=s??Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Tt(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Tt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new uI(this.data.getIterator())}getIteratorFrom(e){return new uI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ne)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ne(this.comparator);return t.data=e,t}}class uI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ks(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new Xt([])}unionWith(e){let t=new Ne($e.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Xt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ao(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new t0("Invalid base64 string: "+s):s}}(e);return new dt(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const eU=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zr(n){if(J(!!n),typeof n=="string"){let e=0;const t=eU.exec(n);if(J(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(n.seconds),nanos:Ye(n.nanos)}}function Ye(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ei(n){return typeof n=="string"?dt.fromBase64String(n):dt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function bg(n){const e=n.mapValue.fields.__previous_value__;return mh(e)?bg(e):e}function ec(n){const e=Zr(n.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{constructor(e,t,r,i,s,a,l,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f}}class ti{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ti("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ti&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},tl={nullValue:"NULL_VALUE"};function Qi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?mh(n)?4:n0(n)?9007199254740991:10:K()}function Zn(n,e){if(n===e)return!0;const t=Qi(n);if(t!==Qi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ec(n).isEqual(ec(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Zr(i.timestampValue),l=Zr(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return ei(i.bytesValue).isEqual(ei(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Ye(i.geoPointValue.latitude)===Ye(s.geoPointValue.latitude)&&Ye(i.geoPointValue.longitude)===Ye(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ye(i.integerValue)===Ye(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Ye(i.doubleValue),l=Ye(s.doubleValue);return a===l?Za(a)===Za(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return ao(n.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(cI(a)!==cI(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Zn(a[h],l[h])))return!1;return!0}(n,e);default:return K()}}function tc(n,e){return(n.values||[]).find(t=>Zn(t,e))!==void 0}function ni(n,e){if(n===e)return 0;const t=Qi(n),r=Qi(e);if(t!==r)return le(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return le(n.booleanValue,e.booleanValue);case 2:return function(s,a){const l=Ye(s.integerValue||s.doubleValue),h=Ye(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,e);case 3:return lI(n.timestampValue,e.timestampValue);case 4:return lI(ec(n),ec(e));case 5:return le(n.stringValue,e.stringValue);case 6:return function(s,a){const l=ei(s),h=ei(a);return l.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),h=a.split("/");for(let f=0;f<l.length&&f<h.length;f++){const p=le(l[f],h[f]);if(p!==0)return p}return le(l.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const l=le(Ye(s.latitude),Ye(a.latitude));return l!==0?l:le(Ye(s.longitude),Ye(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,a){const l=s.values||[],h=a.values||[];for(let f=0;f<l.length&&f<h.length;++f){const p=ni(l[f],h[f]);if(p)return p}return le(l.length,h.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,a){if(s===Gr.mapValue&&a===Gr.mapValue)return 0;if(s===Gr.mapValue)return 1;if(a===Gr.mapValue)return-1;const l=s.fields||{},h=Object.keys(l),f=a.fields||{},p=Object.keys(f);h.sort(),p.sort();for(let m=0;m<h.length&&m<p.length;++m){const w=le(h[m],p[m]);if(w!==0)return w;const b=ni(l[h[m]],f[p[m]]);if(b!==0)return b}return le(h.length,p.length)}(n.mapValue,e.mapValue);default:throw K()}}function lI(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return le(n,e);const t=Zr(n),r=Zr(e),i=le(t.seconds,r.seconds);return i!==0?i:le(t.nanos,r.nanos)}function co(n){return rp(n)}function rp(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Zr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ei(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=rp(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${rp(t.fields[a])}`;return i+"}"}(n.mapValue):K()}function Yi(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ip(n){return!!n&&"integerValue"in n}function nc(n){return!!n&&"arrayValue"in n}function hI(n){return!!n&&"nullValue"in n}function dI(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function nl(n){return!!n&&"mapValue"in n}function Ca(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return cs(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ca(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ca(n.arrayValue.values[t]);return e}return Object.assign({},n)}function n0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function nU(n){return"nullValue"in n?tl:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Yi(ti.empty(),$.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:K()}function rU(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Yi(ti.empty(),$.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Gr:K()}function fI(n,e){const t=ni(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function pI(n,e){const t=ni(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!nl(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ca(t)}setAll(e){let t=$e.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=Ca(a):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());nl(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];nl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){cs(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new bt(Ca(this.value))}}function r0(n){const e=[];return cs(n.fields,(t,r)=>{const i=new $e([t]);if(nl(r)){const s=r0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Be(e,0,X.min(),X.min(),X.min(),bt.empty(),0)}static newFoundDocument(e,t,r,i){return new Be(e,1,t,X.min(),r,i,0)}static newNoDocument(e,t){return new Be(e,2,t,X.min(),X.min(),bt.empty(),0)}static newUnknownDocument(e,t){return new Be(e,3,t,X.min(),X.min(),bt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t){this.position=e,this.inclusive=t}}function gI(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(a.referenceValue),t.key):r=ni(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function mI(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Zn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t="asc"){this.field=e,this.dir=t}}function iU(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{}class Ie extends i0{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new sU(e,t,r):t==="array-contains"?new cU(e,r):t==="in"?new l0(e,r):t==="not-in"?new uU(e,r):t==="array-contains-any"?new lU(e,r):new Ie(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new oU(e,r):new aU(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ni(t,this.value)):t!==null&&Qi(this.value)===Qi(t)&&this.matchesComparison(ni(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class De extends i0{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new De(e,t)}matches(e){return uo(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function uo(n){return n.op==="and"}function sp(n){return n.op==="or"}function Sg(n){return s0(n)&&uo(n)}function s0(n){for(const e of n.filters)if(e instanceof De)return!1;return!0}function op(n){if(n instanceof Ie)return n.field.canonicalString()+n.op.toString()+co(n.value);if(Sg(n))return n.filters.map(e=>op(e)).join(",");{const e=n.filters.map(t=>op(t)).join(",");return`${n.op}(${e})`}}function o0(n,e){return n instanceof Ie?function(r,i){return i instanceof Ie&&r.op===i.op&&r.field.isEqual(i.field)&&Zn(r.value,i.value)}(n,e):n instanceof De?function(r,i){return i instanceof De&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&o0(a,i.filters[l]),!0):!1}(n,e):void K()}function a0(n,e){const t=n.filters.concat(e);return De.create(t,n.op)}function c0(n){return n instanceof Ie?function(t){return`${t.field.canonicalString()} ${t.op} ${co(t.value)}`}(n):n instanceof De?function(t){return t.op.toString()+" {"+t.getFilters().map(c0).join(" ,")+"}"}(n):"Filter"}class sU extends Ie{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class oU extends Ie{constructor(e,t){super(e,"in",t),this.keys=u0("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class aU extends Ie{constructor(e,t){super(e,"not-in",t),this.keys=u0("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function u0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class cU extends Ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return nc(t)&&tc(t.arrayValue,this.value)}}class l0 extends Ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&tc(this.value.arrayValue,t)}}class uU extends Ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(tc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!tc(this.value.arrayValue,t)}}class lU extends Ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!nc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>tc(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hU{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ce=null}}function ap(n,e=null,t=[],r=[],i=null,s=null,a=null){return new hU(n,e,t,r,i,s,a)}function Ji(n){const e=G(n);if(e.ce===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>op(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Sc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>co(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>co(r)).join(",")),e.ce=t}return e.ce}function Pc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!iU(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!o0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!mI(n.startAt,e.startAt)&&mI(n.endAt,e.endAt)}function Tl(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Al(n,e){return n.filters.filter(t=>t instanceof Ie&&t.field.isEqual(e))}function _I(n,e,t){let r=tl,i=!0;for(const s of Al(n,e)){let a=tl,l=!0;switch(s.op){case"<":case"<=":a=nU(s.value);break;case"==":case"in":case">=":a=s.value;break;case">":a=s.value,l=!1;break;case"!=":case"not-in":a=tl}fI({value:r,inclusive:i},{value:a,inclusive:l})<0&&(r=a,i=l)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const a=t.position[s];fI({value:r,inclusive:i},{value:a,inclusive:t.inclusive})<0&&(r=a,i=t.inclusive);break}}return{value:r,inclusive:i}}function yI(n,e,t){let r=Gr,i=!0;for(const s of Al(n,e)){let a=Gr,l=!0;switch(s.op){case">=":case">":a=rU(s.value),l=!1;break;case"==":case"in":case"<=":a=s.value;break;case"<":a=s.value,l=!1;break;case"!=":case"not-in":a=Gr}pI({value:r,inclusive:i},{value:a,inclusive:l})>0&&(r=a,i=l)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const a=t.position[s];pI({value:r,inclusive:i},{value:a,inclusive:t.inclusive})>0&&(r=a,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=h,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function h0(n,e,t,r,i,s,a,l){return new Rr(n,e,t,r,i,s,a,l)}function Po(n){return new Rr(n)}function vI(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Pg(n){return n.collectionGroup!==null}function Xs(n){const e=G(n);if(e.le===null){e.le=[];const t=new Set;for(const s of e.explicitOrderBy)e.le.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ne($e.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.le.push(new rc(s,r))}),t.has($e.keyField().canonicalString())||e.le.push(new rc($e.keyField(),r))}return e.le}function $t(n){const e=G(n);return e.he||(e.he=dU(e,Xs(n))),e.he}function dU(n,e){if(n.limitType==="F")return ap(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new rc(i.field,s)});const t=n.endAt?new ri(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ri(n.startAt.position,n.startAt.inclusive):null;return ap(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function cp(n,e){const t=n.filters.concat([e]);return new Rr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Rl(n,e,t){return new Rr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Cc(n,e){return Pc($t(n),$t(e))&&n.limitType===e.limitType}function d0(n){return`${Ji($t(n))}|lt:${n.limitType}`}function Fs(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>c0(i)).join(", ")}]`),Sc(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>co(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>co(i)).join(",")),`Target(${r})`}($t(n))}; limitType=${n.limitType})`}function Dc(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):$.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Xs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,h){const f=gI(a,l,h);return a.inclusive?f<=0:f<0}(r.startAt,Xs(r),i)||r.endAt&&!function(a,l,h){const f=gI(a,l,h);return a.inclusive?f>=0:f>0}(r.endAt,Xs(r),i))}(n,e)}function f0(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function p0(n){return(e,t)=>{let r=!1;for(const i of Xs(n)){const s=fU(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function fU(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(s,a,l){const h=a.data.field(s),f=l.data.field(s);return h!==null&&f!==null?ni(h,f):K()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){cs(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return e0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pU=new Ve($.comparator);function Zt(){return pU}const g0=new Ve($.comparator);function Ia(...n){let e=g0;for(const t of n)e=e.insert(t.key,t);return e}function m0(n){let e=g0;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Kn(){return Da()}function _0(){return Da()}function Da(){return new pi(n=>n.toString(),(n,e)=>n.isEqual(e))}const gU=new Ve($.comparator),mU=new Ne($.comparator);function de(...n){let e=mU;for(const t of n)e=e.add(t);return e}const _U=new Ne(le);function Cg(){return _U}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Za(e)?"-0":e}}function v0(n){return{integerValue:""+n}}function I0(n,e){return QT(e)?v0(e):y0(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(){this._=void 0}}function yU(n,e,t){return n instanceof lo?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&mh(s)&&(s=bg(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof Xi?E0(n,e):n instanceof Zi?T0(n,e):function(i,s){const a=w0(i,s),l=II(a)+II(i.Ie);return ip(a)&&ip(i.Ie)?v0(l):y0(i.serializer,l)}(n,e)}function vU(n,e,t){return n instanceof Xi?E0(n,e):n instanceof Zi?T0(n,e):t}function w0(n,e){return n instanceof ho?function(r){return ip(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class lo extends _h{}class Xi extends _h{constructor(e){super(),this.elements=e}}function E0(n,e){const t=A0(e);for(const r of n.elements)t.some(i=>Zn(i,r))||t.push(r);return{arrayValue:{values:t}}}class Zi extends _h{constructor(e){super(),this.elements=e}}function T0(n,e){let t=A0(e);for(const r of n.elements)t=t.filter(i=>!Zn(i,r));return{arrayValue:{values:t}}}class ho extends _h{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function II(n){return Ye(n.integerValue||n.doubleValue)}function A0(n){return nc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t){this.field=e,this.transform=t}}function IU(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Xi&&i instanceof Xi||r instanceof Zi&&i instanceof Zi?ao(r.elements,i.elements,Zn):r instanceof ho&&i instanceof ho?Zn(r.Ie,i.Ie):r instanceof lo&&i instanceof lo}(n.transform,e.transform)}class wU{constructor(e,t){this.version=e,this.transformResults=t}}class ze{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ze}static exists(e){return new ze(void 0,e)}static updateTime(e){return new ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rl(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class yh{}function R0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Do(n.key,ze.none()):new Co(n.key,n.data,ze.none());{const t=n.data,r=bt.empty();let i=new Ne($e.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new br(n.key,r,new Xt(i.toArray()),ze.none())}}function EU(n,e,t){n instanceof Co?function(i,s,a){const l=i.value.clone(),h=EI(i.fieldTransforms,s,a.transformResults);l.setAll(h),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof br?function(i,s,a){if(!rl(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=EI(i.fieldTransforms,s,a.transformResults),h=s.data;h.setAll(b0(i)),h.setAll(l),s.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function ka(n,e,t,r){return n instanceof Co?function(s,a,l,h){if(!rl(s.precondition,a))return l;const f=s.value.clone(),p=TI(s.fieldTransforms,h,a);return f.setAll(p),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof br?function(s,a,l,h){if(!rl(s.precondition,a))return l;const f=TI(s.fieldTransforms,h,a),p=a.data;return p.setAll(b0(s)),p.setAll(f),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,a,l){return rl(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function TU(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=w0(r.transform,i||null);s!=null&&(t===null&&(t=bt.empty()),t.set(r.field,s))}return t||null}function wI(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ao(r,i,(s,a)=>IU(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Co extends yh{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class br extends yh{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function b0(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function EI(n,e,t){const r=new Map;J(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,vU(a,l,t[i]))}return r}function TI(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,yU(s,a,e))}return r}class Do extends yh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Dg extends yh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&EU(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ka(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ka(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=_0();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const h=R0(a,l);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),de())}isEqual(e){return this.batchId===e.batchId&&ao(this.mutations,e.mutations,(t,r)=>wI(t,r))&&ao(this.baseMutations,e.baseMutations,(t,r)=>wI(t,r))}}class xg{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){J(e.mutations.length===r.length);let i=function(){return gU}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new xg(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AU{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,Ae;function S0(n){switch(n){default:return K();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function P0(n){if(n===void 0)return ot("GRPC error has no .code"),C.UNKNOWN;switch(n){case ct.OK:return C.OK;case ct.CANCELLED:return C.CANCELLED;case ct.UNKNOWN:return C.UNKNOWN;case ct.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ct.INTERNAL:return C.INTERNAL;case ct.UNAVAILABLE:return C.UNAVAILABLE;case ct.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ct.NOT_FOUND:return C.NOT_FOUND;case ct.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ct.ABORTED:return C.ABORTED;case ct.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ct.DATA_LOSS:return C.DATA_LOSS;default:return K()}}(Ae=ct||(ct={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RU=new Js([4294967295,4294967295],0);function AI(n){const e=C0().encode(n),t=new v2;return t.update(e),new Uint8Array(t.digest())}function RI(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Js([t,r],0),new Js([i,s],0)]}class Og{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new wa(`Invalid padding: ${t}`);if(r<0)throw new wa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new wa(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new wa(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=Js.fromNumber(this.Te)}de(e,t,r){let i=e.add(t.multiply(Js.fromNumber(r)));return i.compare(RU)===1&&(i=new Js([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=AI(e),[r,i]=RI(t);for(let s=0;s<this.hashCount;s++){const a=this.de(r,i,s);if(!this.Ae(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Og(s,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Te===0)return;const t=AI(e),[r,i]=RI(t);for(let s=0;s<this.hashCount;s++){const a=this.de(r,i,s);this.Re(a)}}Re(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class wa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Nc.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new xc(X.min(),i,new Ve(le),Zt(),de())}}class Nc{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Nc(r,t,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t,r,i){this.Ve=e,this.removedTargetIds=t,this.key=r,this.me=i}}class D0{constructor(e,t){this.targetId=e,this.fe=t}}class k0{constructor(e,t,r=dt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class bI{constructor(){this.ge=0,this.pe=PI(),this.ye=dt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=de(),t=de(),r=de();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:K()}}),new Nc(this.ye,this.we,e,t,r)}Fe(){this.Se=!1,this.pe=PI()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,J(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class bU{constructor(e){this.Le=e,this.ke=new Map,this.qe=Zt(),this.Qe=SI(),this.Ke=new Ve(le)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(t);break;case 3:this.je(t)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.Ce(e.resumeToken));break;default:K()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((r,i)=>{this.je(i)&&t(i)})}Je(e){const t=e.targetId,r=e.fe.count,i=this.Ye(t);if(i){const s=i.target;if(Tl(s))if(r===0){const a=new $(s.path);this.We(t,a,Be.newNoDocument(a,X.min()))}else J(r===1);else{const a=this.Ze(t);if(a!==r){const l=this.Xe(e),h=l?this.et(l,e,a):1;if(h!==0){this.He(t);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,f)}}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=ei(r).toUint8Array()}catch(h){if(h instanceof t0)return kn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Og(a,i,s)}catch(h){return kn(h instanceof wa?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.Te===0?null:l}et(e,t,r){return t.fe.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.nt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.We(t,s,null),i++)}),i}it(e){const t=new Map;this.ke.forEach((s,a)=>{const l=this.Ye(a);if(l){if(s.current&&Tl(l.target)){const h=new $(l.target.path);this.qe.get(h)!==null||this.st(a,h)||this.We(a,h,Be.newNoDocument(h,e))}s.De&&(t.set(a,s.ve()),s.Fe())}});let r=de();this.Qe.forEach((s,a)=>{let l=!0;a.forEachWhile(h=>{const f=this.Ye(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.qe.forEach((s,a)=>a.setReadTime(e));const i=new xc(e,t,this.Ke,this.qe,r);return this.qe=Zt(),this.Qe=SI(),this.Ke=new Ve(le),i}Ue(e,t){if(!this.je(e))return;const r=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,r),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,t)?i.Me(t,1):i.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),r&&(this.qe=this.qe.insert(t,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new bI,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new Ne(le),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new bI),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function SI(){return new Ve($.comparator)}function PI(){return new Ve($.comparator)}const SU=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),PU=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),CU=(()=>({and:"AND",or:"OR"}))();class DU{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function up(n,e){return n.useProto3Json||Sc(e)?e:{value:e}}function fo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function x0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function kU(n,e){return fo(n,e.toTimestamp())}function at(n){return J(!!n),X.fromTimestamp(function(t){const r=Zr(t);return new Ge(r.seconds,r.nanos)}(n))}function Lg(n,e){return function(r){return new Re(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function N0(n){const e=Re.fromString(n);return J(W0(e)),e}function ic(n,e){return Lg(n.databaseId,e.path)}function Qn(n,e){const t=N0(e);if(t.get(1)!==n.databaseId.projectId)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(L0(t))}function lp(n,e){return Lg(n.databaseId,e)}function O0(n){const e=N0(n);return e.length===4?Re.emptyPath():L0(e)}function sc(n){return new Re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function L0(n){return J(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function CI(n,e,t){return{name:ic(n,e),fields:t.value.mapValue.fields}}function V0(n,e,t){const r=Qn(n,e.name),i=at(e.updateTime),s=e.createTime?at(e.createTime):X.min(),a=new bt({mapValue:{fields:e.fields}}),l=Be.newFoundDocument(r,i,s,a);return t&&l.setHasCommittedMutations(),t?l.setHasCommittedMutations():l}function xU(n,e){return"found"in e?function(r,i){J(!!i.found),i.found.name,i.found.updateTime;const s=Qn(r,i.found.name),a=at(i.found.updateTime),l=i.found.createTime?at(i.found.createTime):X.min(),h=new bt({mapValue:{fields:i.found.fields}});return Be.newFoundDocument(s,a,l,h)}(n,e):"missing"in e?function(r,i){J(!!i.missing),J(!!i.readTime);const s=Qn(r,i.missing),a=at(i.readTime);return Be.newNoDocument(s,a)}(n,e):K()}function NU(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(f,p){return f.useProto3Json?(J(p===void 0||typeof p=="string"),dt.fromBase64String(p||"")):(J(p===void 0||p instanceof Uint8Array),dt.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(f){const p=f.code===void 0?C.UNKNOWN:P0(f.code);return new O(p,f.message||"")}(a);t=new k0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qn(n,r.document.name),s=at(r.document.updateTime),a=r.document.createTime?at(r.document.createTime):X.min(),l=new bt({mapValue:{fields:r.document.fields}}),h=Be.newFoundDocument(i,s,a,l),f=r.targetIds||[],p=r.removedTargetIds||[];t=new il(f,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Qn(n,r.document),s=r.readTime?at(r.readTime):X.min(),a=Be.newNoDocument(i,s),l=r.removedTargetIds||[];t=new il([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Qn(n,r.document),s=r.removedTargetIds||[];t=new il([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new AU(i,s),l=r.targetId;t=new D0(l,a)}}return t}function oc(n,e){let t;if(e instanceof Co)t={update:CI(n,e.key,e.value)};else if(e instanceof Do)t={delete:ic(n,e.key)};else if(e instanceof br)t={update:CI(n,e.key,e.data),updateMask:UU(e.fieldMask)};else{if(!(e instanceof Dg))return K();t={verify:ic(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof lo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Xi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Zi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ho)return{fieldPath:a.field.canonicalString(),increment:l.Ie};throw K()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:kU(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(n,e.precondition)),t}function hp(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?ze.updateTime(at(s.updateTime)):s.exists!==void 0?ze.exists(s.exists):ze.none()}(e.currentDocument):ze.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(a,l){let h=null;if("setToServerValue"in l)J(l.setToServerValue==="REQUEST_TIME"),h=new lo;else if("appendMissingElements"in l){const p=l.appendMissingElements.values||[];h=new Xi(p)}else if("removeAllFromArray"in l){const p=l.removeAllFromArray.values||[];h=new Zi(p)}else"increment"in l?h=new ho(a,l.increment):K();const f=$e.fromServerFormat(l.fieldPath);return new kc(f,h)}(n,i)):[];if(e.update){e.update.name;const i=Qn(n,e.update.name),s=new bt({mapValue:{fields:e.update.fields}});if(e.updateMask){const a=function(h){const f=h.fieldPaths||[];return new Xt(f.map(p=>$e.fromServerFormat(p)))}(e.updateMask);return new br(i,s,a,t,r)}return new Co(i,s,t,r)}if(e.delete){const i=Qn(n,e.delete);return new Do(i,t)}if(e.verify){const i=Qn(n,e.verify);return new Dg(i,t)}return K()}function OU(n,e){return n&&n.length>0?(J(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?at(i.updateTime):at(s);return a.isEqual(X.min())&&(a=at(s)),new wU(a,i.transformResults||[])}(t,e))):[]}function M0(n,e){return{documents:[lp(n,e.path)]}}function F0(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=lp(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=lp(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(h){if(h.length!==0)return q0(De.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const s=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Us(m.field),direction:VU(m.dir)}}(f))}(e.orderBy);s&&(t.structuredQuery.orderBy=s);const a=up(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),t}function U0(n){let e=O0(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){J(r===1);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(m){const w=B0(m);return w instanceof De&&Sg(w)?w.getFilters():[w]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(w=>function(q){return new rc(Bs(q.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(q.direction))}(w))}(t.orderBy));let l=null;t.limit&&(l=function(m){let w;return w=typeof m=="object"?m.value:m,Sc(w)?null:w}(t.limit));let h=null;t.startAt&&(h=function(m){const w=!!m.before,b=m.values||[];return new ri(b,w)}(t.startAt));let f=null;return t.endAt&&(f=function(m){const w=!m.before,b=m.values||[];return new ri(b,w)}(t.endAt)),h0(e,i,a,s,l,"F",h,f)}function LU(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function B0(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Bs(t.unaryFilter.field);return Ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Bs(t.unaryFilter.field);return Ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Bs(t.unaryFilter.field);return Ie.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Bs(t.unaryFilter.field);return Ie.create(a,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(n):n.fieldFilter!==void 0?function(t){return Ie.create(Bs(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return De.create(t.compositeFilter.filters.map(r=>B0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(t.compositeFilter.op))}(n):K()}function VU(n){return SU[n]}function MU(n){return PU[n]}function FU(n){return CU[n]}function Us(n){return{fieldPath:n.canonicalString()}}function Bs(n){return $e.fromServerFormat(n.fieldPath)}function q0(n){return n instanceof Ie?function(t){if(t.op==="=="){if(dI(t.value))return{unaryFilter:{field:Us(t.field),op:"IS_NAN"}};if(hI(t.value))return{unaryFilter:{field:Us(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(dI(t.value))return{unaryFilter:{field:Us(t.field),op:"IS_NOT_NAN"}};if(hI(t.value))return{unaryFilter:{field:Us(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Us(t.field),op:MU(t.op),value:t.value}}}(n):n instanceof De?function(t){const r=t.getFilters().map(i=>q0(i));return r.length===1?r[0]:{compositeFilter:{op:FU(t.op),filters:r}}}(n):K()}function UU(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function W0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,t,r,i,s=X.min(),a=X.min(),l=dt.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e){this.ut=e}}function BU(n,e){let t;if(e.document)t=V0(n.ut,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=$.fromSegments(e.noDocument.path),i=ts(e.noDocument.readTime);t=Be.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return K();{const r=$.fromSegments(e.unknownDocument.path),i=ts(e.unknownDocument.version);t=Be.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new Ge(i[0],i[1]);return X.fromTimestamp(s)}(e.readTime)),t}function DI(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:bl(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,a){return{name:ic(s,a.key),fields:a.data.value.mapValue.fields,updateTime:fo(s,a.version.toTimestamp()),createTime:fo(s,a.createTime.toTimestamp())}}(n.ut,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:es(e.version)};else{if(!e.isUnknownDocument())return K();r.unknownDocument={path:t.path.toArray(),version:es(e.version)}}return r}function bl(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function es(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ts(n){const e=new Ge(n.seconds,n.nanoseconds);return X.fromTimestamp(e)}function Di(n,e){const t=(e.baseMutations||[]).map(s=>hp(n.ut,s));for(let s=0;s<e.mutations.length-1;++s){const a=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const l=e.mutations[s+1];a.updateTransforms=l.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>hp(n.ut,s)),i=Ge.fromMillis(e.localWriteTimeMs);return new kg(e.batchId,i,t,r)}function Ea(n){const e=ts(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?ts(n.lastLimboFreeSnapshotVersion):X.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){return J(s.documents.length===1),$t(Po(O0(s.documents[0])))}(n.query):function(s){return $t(U0(s))}(n.query),new gr(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,dt.fromBase64String(n.resumeToken))}function z0(n,e){const t=es(e.snapshotVersion),r=es(e.lastLimboFreeSnapshotVersion);let i;i=Tl(e.target)?M0(n.ut,e.target):F0(n.ut,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ji(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Vg(n){const e=U0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Rl(e,e.limit,"L"):e}function Rf(n,e){return new Ng(e.largestBatchId,hp(n.ut,e.overlayMutation))}function kI(n,e){const t=e.path.lastSegment();return[n,Wt(e.path.popLast()),t]}function xI(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:es(r.readTime),documentKey:Wt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qU{getBundleMetadata(e,t){return NI(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:ts(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return NI(e).put(function(i){return{bundleId:i.id,createTime:es(at(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return OI(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:Vg(s.bundledQuery),readTime:ts(s.readTime)}}(r)})}saveNamedQuery(e,t){return OI(e).put(function(i){return{name:i.name,readTime:es(at(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function NI(n){return vt(n,"bundles")}function OI(n){return vt(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,t){this.serializer=e,this.userId=t}static ct(e,t){const r=t.uid||"";return new vh(e,r)}getOverlay(e,t){return ca(e).get(kI(this.userId,t)).next(r=>r?Rf(this.serializer,r):null)}getOverlays(e,t){const r=Kn();return S.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,a)=>{const l=new Ng(t,a);i.push(this.lt(e,l))}),S.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(a=>i.add(Wt(a.getCollectionPath())));const s=[];return i.forEach(a=>{const l=IDBKeyRange.bound([this.userId,a,r],[this.userId,a,r+1],!1,!0);s.push(ca(e).H("collectionPathOverlayIndex",l))}),S.waitFor(s)}getOverlaysForCollection(e,t,r){const i=Kn(),s=Wt(t),a=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ca(e).W("collectionPathOverlayIndex",a).next(l=>{for(const h of l){const f=Rf(this.serializer,h);i.set(f.getKey(),f)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=Kn();let a;const l=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ca(e).Y({index:"collectionGroupOverlayIndex",range:l},(h,f,p)=>{const m=Rf(this.serializer,f);s.size()<i||m.largestBatchId===a?(s.set(m.getKey(),m),a=m.largestBatchId):p.done()}).next(()=>s)}lt(e,t){return ca(e).put(function(i,s,a){const[l,h,f]=kI(s,a.mutation.key);return{userId:s,collectionPath:h,documentId:f,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:oc(i.ut,a.mutation)}}(this.serializer,this.userId,t))}}function ca(n){return vt(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){}ht(e,t){this.Pt(e,t),t.It()}Pt(e,t){if("nullValue"in e)this.Tt(t,5);else if("booleanValue"in e)this.Tt(t,10),t.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(t,15),t.Et(Ye(e.integerValue));else if("doubleValue"in e){const r=Ye(e.doubleValue);isNaN(r)?this.Tt(t,13):(this.Tt(t,15),Za(r)?t.Et(0):t.Et(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Tt(t,20),typeof r=="string"?t.dt(r):(t.dt(`${r.seconds||""}`),t.Et(r.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,t),this.Rt(t);else if("bytesValue"in e)this.Tt(t,30),t.Vt(ei(e.bytesValue)),this.Rt(t);else if("referenceValue"in e)this.ft(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Tt(t,45),t.Et(r.latitude||0),t.Et(r.longitude||0)}else"mapValue"in e?n0(e)?this.Tt(t,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,t),this.Rt(t)):"arrayValue"in e?(this.yt(e.arrayValue,t),this.Rt(t)):K()}At(e,t){this.Tt(t,25),this.wt(e,t)}wt(e,t){t.dt(e)}gt(e,t){const r=e.fields||{};this.Tt(t,55);for(const i of Object.keys(r))this.At(i,t),this.Pt(r[i],t)}yt(e,t){const r=e.values||[];this.Tt(t,50);for(const i of r)this.Pt(i,t)}ft(e,t){this.Tt(t,37),$.fromName(e).path.forEach(r=>{this.Tt(t,60),this.wt(r,t)})}Tt(e,t){e.Et(t)}Rt(e){e.Et(2)}}ki.St=new ki;function WU(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function LI(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const a=WU(255&r[s]);if(i+=a,a!==8)break}return i}(n);return Math.ceil(e/8)}class $U{constructor(){this.buffer=new Uint8Array(1024),this.position=0}bt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Dt(r.value),r=t.next();this.Ct()}vt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Ft(r.value),r=t.next();this.Mt()}xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Dt(r);else if(r<2048)this.Dt(960|r>>>6),this.Dt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Dt(480|r>>>12),this.Dt(128|63&r>>>6),this.Dt(128|63&r);else{const i=t.codePointAt(0);this.Dt(240|i>>>18),this.Dt(128|63&i>>>12),this.Dt(128|63&i>>>6),this.Dt(128|63&i)}}this.Ct()}Ot(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Nt(e){const t=this.Bt(e),r=LI(t);this.Lt(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}kt(e){const t=this.Bt(e),r=LI(t);this.Lt(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}qt(){this.Qt(255),this.Qt(255)}Kt(){this.$t(255),this.$t(255)}reset(){this.position=0}seed(e){this.Lt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ut(){return this.buffer.slice(0,this.position)}Bt(e){const t=function(s){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,s,!1),new Uint8Array(a.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Dt(e){const t=255&e;t===0?(this.Qt(0),this.Qt(255)):t===255?(this.Qt(255),this.Qt(0)):this.Qt(t)}Ft(e){const t=255&e;t===0?(this.$t(0),this.$t(255)):t===255?(this.$t(255),this.$t(0)):this.$t(e)}Ct(){this.Qt(0),this.Qt(1)}Mt(){this.$t(0),this.$t(1)}Qt(e){this.Lt(1),this.buffer[this.position++]=e}$t(e){this.Lt(1),this.buffer[this.position++]=~e}Lt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class zU{constructor(e){this.Wt=e}Vt(e){this.Wt.bt(e)}dt(e){this.Wt.xt(e)}Et(e){this.Wt.Nt(e)}It(){this.Wt.qt()}}class GU{constructor(e){this.Wt=e}Vt(e){this.Wt.vt(e)}dt(e){this.Wt.Ot(e)}Et(e){this.Wt.kt(e)}It(){this.Wt.Kt()}}class ua{constructor(){this.Wt=new $U,this.Gt=new zU(this.Wt),this.zt=new GU(this.Wt)}seed(e){this.Wt.seed(e)}jt(e){return e===0?this.Gt:this.zt}Ut(){return this.Wt.Ut()}reset(){this.Wt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t,r,i){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=i}Ht(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new xi(this.indexId,this.documentKey,this.arrayValue,r)}}function Ur(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=VI(n.arrayValue,e.arrayValue),t!==0?t:(t=VI(n.directionalValue,e.directionalValue),t!==0?t:$.comparator(n.documentKey,e.documentKey)))}function VI(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.Jt=new Ne((t,r)=>$e.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const t of e.filters){const r=t;r.isInequality()?this.Jt=this.Jt.add(r):this.Zt.push(r)}}get Xt(){return this.Jt.size>1}en(e){if(J(e.collectionGroup===this.collectionId),this.Xt)return!1;const t=tp(e);if(t!==void 0&&!this.tn(t))return!1;const r=Pi(e);let i=new Set,s=0,a=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Jt.size>0){const l=this.Jt.getIterator().getNext();if(!i.has(l.field.canonicalString())){const h=r[s];if(!this.nn(l,h)||!this.rn(this.Yt[a++],h))return!1}++s}for(;s<r.length;++s){const l=r[s];if(a>=this.Yt.length||!this.rn(this.Yt[a++],l))return!1}return!0}sn(){if(this.Xt)return null;let e=new Ne($e.comparator);const t=[];for(const r of this.Zt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Zu(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Zu(r.field,0))}for(const r of this.Yt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Zu(r.field,r.dir==="asc"?0:1)));return new El(El.UNKNOWN_ID,this.collectionId,t,Xa.empty())}tn(e){for(const t of this.Zt)if(this.nn(t,e))return!0;return!1}nn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}rn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(n){var e,t;if(J(n instanceof Ie||n instanceof De),n instanceof Ie){if(n instanceof l0){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>Ie.create(n.field,"==",s)))||[];return De.create(i,"or")}return n}const r=n.filters.map(i=>G0(i));return De.create(r,n.op)}function HU(n){if(n.getFilters().length===0)return[];const e=pp(G0(n));return J(H0(e)),dp(e)||fp(e)?[e]:e.getFilters()}function dp(n){return n instanceof Ie}function fp(n){return n instanceof De&&Sg(n)}function H0(n){return dp(n)||fp(n)||function(t){if(t instanceof De&&sp(t)){for(const r of t.getFilters())if(!dp(r)&&!fp(r))return!1;return!0}return!1}(n)}function pp(n){if(J(n instanceof Ie||n instanceof De),n instanceof Ie)return n;if(n.filters.length===1)return pp(n.filters[0]);const e=n.filters.map(r=>pp(r));let t=De.create(e,n.op);return t=Sl(t),H0(t)?t:(J(t instanceof De),J(uo(t)),J(t.filters.length>1),t.filters.reduce((r,i)=>Mg(r,i)))}function Mg(n,e){let t;return J(n instanceof Ie||n instanceof De),J(e instanceof Ie||e instanceof De),t=n instanceof Ie?e instanceof Ie?function(i,s){return De.create([i,s],"and")}(n,e):FI(n,e):e instanceof Ie?FI(e,n):function(i,s){if(J(i.filters.length>0&&s.filters.length>0),uo(i)&&uo(s))return a0(i,s.getFilters());const a=sp(i)?i:s,l=sp(i)?s:i,h=a.filters.map(f=>Mg(f,l));return De.create(h,"or")}(n,e),Sl(t)}function FI(n,e){if(uo(e))return a0(e,n.getFilters());{const t=e.filters.map(r=>Mg(n,r));return De.create(t,"or")}}function Sl(n){if(J(n instanceof Ie||n instanceof De),n instanceof Ie)return n;const e=n.getFilters();if(e.length===1)return Sl(e[0]);if(s0(n))return n;const t=e.map(i=>Sl(i)),r=[];return t.forEach(i=>{i instanceof Ie?r.push(i):i instanceof De&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:De.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KU{constructor(){this.on=new Fg}addToCollectionParentIndex(e,t){return this.on.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(ln.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(ln.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class Fg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ne(Re.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ne(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=new Uint8Array(0);class jU{constructor(e,t){this.user=e,this.databaseId=t,this._n=new Fg,this.an=new pi(r=>Ji(r),(r,i)=>Pc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this._n.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this._n.add(t)});const s={collectionId:r,parent:Wt(i)};return UI(e).put(s)}return S.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[zT(t),""],!1,!0);return UI(e).W(i).next(s=>{for(const a of s){if(a.collectionId!==t)break;r.push(Hn(a.parent))}return r})}addFieldIndex(e,t){const r=la(e),i=function(l){return{indexId:l.indexId,collectionGroup:l.collectionGroup,fields:l.fields.map(h=>[h.fieldPath.canonicalString(),h.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const a=Ns(e);return s.next(l=>{a.put(xI(l,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=la(e),i=Ns(e),s=xs(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=la(e),r=xs(e),i=Ns(e);return t.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(e,t){return S.forEach(this.un(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new MI(r).sn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=xs(e);let i=!0;const s=new Map;return S.forEach(this.un(t),a=>this.cn(e,a).next(l=>{i&&(i=!!l),s.set(a,l)})).next(()=>{if(i){let a=de();const l=[];return S.forEach(s,(h,f)=>{M("IndexedDbIndexManager",`Using index ${function(ee){return`id=${ee.indexId}|cg=${ee.collectionGroup}|f=${ee.fields.map(Ee=>`${Ee.fieldPath}:${Ee.kind}`).join(",")}`}(h)} to execute ${Ji(t)}`);const p=function(ee,Ee){const he=tp(Ee);if(he===void 0)return null;for(const L of Al(ee,he.fieldPath))switch(L.op){case"array-contains-any":return L.value.arrayValue.values||[];case"array-contains":return[L.value]}return null}(f,h),m=function(ee,Ee){const he=new Map;for(const L of Pi(Ee))for(const N of Al(ee,L.fieldPath))switch(N.op){case"==":case"in":he.set(L.fieldPath.canonicalString(),N.value);break;case"not-in":case"!=":return he.set(L.fieldPath.canonicalString(),N.value),Array.from(he.values())}return null}(f,h),w=function(ee,Ee){const he=[];let L=!0;for(const N of Pi(Ee)){const I=N.kind===0?_I(ee,N.fieldPath,ee.startAt):yI(ee,N.fieldPath,ee.startAt);he.push(I.value),L&&(L=I.inclusive)}return new ri(he,L)}(f,h),b=function(ee,Ee){const he=[];let L=!0;for(const N of Pi(Ee)){const I=N.kind===0?yI(ee,N.fieldPath,ee.endAt):_I(ee,N.fieldPath,ee.endAt);he.push(I.value),L&&(L=I.inclusive)}return new ri(he,L)}(f,h),q=this.ln(h,f,w),U=this.ln(h,f,b),F=this.hn(h,f,m),Z=this.Pn(h.indexId,p,q,w.inclusive,U,b.inclusive,F);return S.forEach(Z,pe=>r.j(pe,t.limit).next(ee=>{ee.forEach(Ee=>{const he=$.fromSegments(Ee.documentKey);a.has(he)||(a=a.add(he),l.push(he))})}))}).next(()=>l)}return S.resolve(null)})}un(e){let t=this.an.get(e);return t||(e.filters.length===0?t=[e]:t=HU(De.create(e.filters,"and")).map(r=>ap(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.an.set(e,t),t)}Pn(e,t,r,i,s,a,l){const h=(t!=null?t.length:1)*Math.max(r.length,s.length),f=h/(t!=null?t.length:1),p=[];for(let m=0;m<h;++m){const w=t?this.In(t[m/f]):Wu,b=this.Tn(e,w,r[m%f],i),q=this.En(e,w,s[m%f],a),U=l.map(F=>this.Tn(e,w,F,!0));p.push(...this.createRange(b,q,U))}return p}Tn(e,t,r,i){const s=new xi(e,$.empty(),t,r);return i?s:s.Ht()}En(e,t,r,i){const s=new xi(e,$.empty(),t,r);return i?s.Ht():s}cn(e,t){const r=new MI(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let a=null;for(const l of s)r.en(l)&&(!a||l.fields.length>a.fields.length)&&(a=l);return a})}getIndexType(e,t){let r=2;const i=this.un(t);return S.forEach(i,s=>this.cn(e,s).next(a=>{a?r!==0&&a.fields.length<function(h){let f=new Ne($e.comparator),p=!1;for(const m of h.filters)for(const w of m.getFlattenedFilters())w.field.isKeyField()||(w.op==="array-contains"||w.op==="array-contains-any"?p=!0:f=f.add(w.field));for(const m of h.orderBy)m.field.isKeyField()||(f=f.add(m.field));return f.size+(p?1:0)}(s)&&(r=1):r=0})).next(()=>function(a){return a.limit!==null}(t)&&i.length>1&&r===2?1:r)}dn(e,t){const r=new ua;for(const i of Pi(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const a=r.jt(i.kind);ki.St.ht(s,a)}return r.Ut()}In(e){const t=new ua;return ki.St.ht(e,t.jt(0)),t.Ut()}An(e,t){const r=new ua;return ki.St.ht(Yi(this.databaseId,t),r.jt(function(s){const a=Pi(s);return a.length===0?0:a[a.length-1].kind}(e))),r.Ut()}hn(e,t,r){if(r===null)return[];let i=[];i.push(new ua);let s=0;for(const a of Pi(e)){const l=r[s++];for(const h of i)if(this.Rn(t,a.fieldPath)&&nc(l))i=this.Vn(i,a,l);else{const f=h.jt(a.kind);ki.St.ht(l,f)}}return this.mn(i)}ln(e,t,r){return this.hn(e,t,r.position)}mn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Ut();return t}Vn(e,t,r){const i=[...e],s=[];for(const a of r.arrayValue.values||[])for(const l of i){const h=new ua;h.seed(l.Ut()),ki.St.ht(a,h.jt(t.kind)),s.push(h)}return s}Rn(e,t){return!!e.filters.find(r=>r instanceof Ie&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=la(e),i=Ns(e);return(t?r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.W()).next(s=>{const a=[];return S.forEach(s,l=>i.get([l.indexId,this.uid]).next(h=>{a.push(function(p,m){const w=m?new Xa(m.sequenceNumber,new ln(ts(m.readTime),new $(Hn(m.documentKey)),m.largestBatchId)):Xa.empty(),b=p.fields.map(([q,U])=>new Zu($e.fromServerFormat(q),U));return new El(p.indexId,p.collectionGroup,b,w)}(l,h))})).next(()=>a)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:le(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=la(e),s=Ns(e);return this.fn(e).next(a=>i.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(l=>S.forEach(l,h=>s.put(xI(h.indexId,this.user,a,r)))))}updateIndexEntries(e,t){const r=new Map;return S.forEach(t,(i,s)=>{const a=r.get(i.collectionGroup);return(a?S.resolve(a):this.getFieldIndexes(e,i.collectionGroup)).next(l=>(r.set(i.collectionGroup,l),S.forEach(l,h=>this.gn(e,i,h).next(f=>{const p=this.pn(s,h);return f.isEqual(p)?S.resolve():this.yn(e,s,h,f,p)}))))})}wn(e,t,r,i){return xs(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.An(r,t.key),documentKey:t.key.path.toArray()})}Sn(e,t,r,i){return xs(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.An(r,t.key),t.key.path.toArray()])}gn(e,t,r){const i=xs(e);let s=new Ne(Ur);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.An(r,t)])},(a,l)=>{s=s.add(new xi(r.indexId,t,l.arrayValue,l.directionalValue))}).next(()=>s)}pn(e,t){let r=new Ne(Ur);const i=this.dn(t,e);if(i==null)return r;const s=tp(t);if(s!=null){const a=e.data.field(s.fieldPath);if(nc(a))for(const l of a.arrayValue.values||[])r=r.add(new xi(t.indexId,e.key,this.In(l),i))}else r=r.add(new xi(t.indexId,e.key,Wu,i));return r}yn(e,t,r,i,s){M("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const a=[];return function(h,f,p,m,w){const b=h.getIterator(),q=f.getIterator();let U=ks(b),F=ks(q);for(;U||F;){let Z=!1,pe=!1;if(U&&F){const ee=p(U,F);ee<0?pe=!0:ee>0&&(Z=!0)}else U!=null?pe=!0:Z=!0;Z?(m(F),F=ks(q)):pe?(w(U),U=ks(b)):(U=ks(b),F=ks(q))}}(i,s,Ur,l=>{a.push(this.wn(e,t,r,l))},l=>{a.push(this.Sn(e,t,r,l))}),S.waitFor(a)}fn(e){let t=1;return Ns(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((a,l)=>Ur(a,l)).filter((a,l,h)=>!l||Ur(a,h[l-1])!==0);const i=[];i.push(e);for(const a of r){const l=Ur(a,e),h=Ur(a,t);if(l===0)i[0]=e.Ht();else if(l>0&&h<0)i.push(a),i.push(a.Ht());else if(h>0)break}i.push(t);const s=[];for(let a=0;a<i.length;a+=2){if(this.bn(i[a],i[a+1]))return[];const l=[i[a].indexId,this.uid,i[a].arrayValue,i[a].directionalValue,Wu,[]],h=[i[a+1].indexId,this.uid,i[a+1].arrayValue,i[a+1].directionalValue,Wu,[]];s.push(IDBKeyRange.bound(l,h))}return s}bn(e,t){return Ur(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(BI)}getMinOffset(e,t){return S.mapArray(this.un(t),r=>this.cn(e,r).next(i=>i||K())).next(BI)}}function UI(n){return vt(n,"collectionParents")}function xs(n){return vt(n,"indexEntries")}function la(n){return vt(n,"indexConfiguration")}function Ns(n){return vt(n,"indexState")}function BI(n){J(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;Ag(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new ln(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Yt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(n,e,t){const r=n.store("mutations"),i=n.store("documentMutations"),s=[],a=IDBKeyRange.only(t.batchId);let l=0;const h=r.Y({range:a},(p,m,w)=>(l++,w.delete()));s.push(h.next(()=>{J(l===1)}));const f=[];for(const p of t.mutations){const m=YT(e,p.key.path,t.batchId);s.push(i.delete(m)),f.push(p.key)}return S.waitFor(s).next(()=>f)}function Pl(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw K();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(41943040,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);class Ih{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Dn={}}static ct(e,t,r,i){J(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Ih(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Br(e).Y({index:"userMutationsIndex",range:r},(i,s,a)=>{t=!1,a.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=qs(e),a=Br(e);return a.add({}).next(l=>{J(typeof l=="number");const h=new kg(l,t,r,i),f=function(b,q,U){const F=U.baseMutations.map(pe=>oc(b.ut,pe)),Z=U.mutations.map(pe=>oc(b.ut,pe));return{userId:q,batchId:U.batchId,localWriteTimeMs:U.localWriteTime.toMillis(),baseMutations:F,mutations:Z}}(this.serializer,this.userId,h),p=[];let m=new Ne((w,b)=>le(w.canonicalString(),b.canonicalString()));for(const w of i){const b=YT(this.userId,w.key.path,l);m=m.add(w.key.path.popLast()),p.push(a.put(f)),p.push(s.put(b,V2))}return m.forEach(w=>{p.push(this.indexManager.addToCollectionParentIndex(e,w))}),e.addOnCommittedListener(()=>{this.Dn[l]=h.keys()}),S.waitFor(p).next(()=>h)})}lookupMutationBatch(e,t){return Br(e).get(t).next(r=>r?(J(r.userId===this.userId),Di(this.serializer,r)):null)}Cn(e,t){return this.Dn[t]?S.resolve(this.Dn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Dn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Br(e).Y({index:"userMutationsIndex",range:i},(a,l,h)=>{l.userId===this.userId&&(J(l.batchId>=r),s=Di(this.serializer,l)),h.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Br(e).Y({index:"userMutationsIndex",range:t,reverse:!0},(i,s,a)=>{r=s.batchId,a.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Br(e).W("userMutationsIndex",t).next(r=>r.map(i=>Di(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=el(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return qs(e).Y({range:i},(a,l,h)=>{const[f,p,m]=a,w=Hn(p);if(f===this.userId&&t.path.isEqual(w))return Br(e).get(m).next(b=>{if(!b)throw K();J(b.userId===this.userId),s.push(Di(this.serializer,b))});h.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ne(le);const i=[];return t.forEach(s=>{const a=el(this.userId,s.path),l=IDBKeyRange.lowerBound(a),h=qs(e).Y({range:l},(f,p,m)=>{const[w,b,q]=f,U=Hn(b);w===this.userId&&s.path.isEqual(U)?r=r.add(q):m.done()});i.push(h)}),S.waitFor(i).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=el(this.userId,r),a=IDBKeyRange.lowerBound(s);let l=new Ne(le);return qs(e).Y({range:a},(h,f,p)=>{const[m,w,b]=h,q=Hn(w);m===this.userId&&r.isPrefixOf(q)?q.length===i&&(l=l.add(b)):p.done()}).next(()=>this.vn(e,l))}vn(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Br(e).get(s).next(a=>{if(a===null)throw K();J(a.userId===this.userId),r.push(Di(this.serializer,a))}))}),S.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return K0(e.ae,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.Fn(t.batchId)}),S.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Fn(e){delete this.Dn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return S.resolve();const r=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),i=[];return qs(e).Y({range:r},(s,a,l)=>{if(s[0]===this.userId){const h=Hn(s[1]);i.push(h)}else l.done()}).next(()=>{J(i.length===0)})})}containsKey(e,t){return j0(e,this.userId,t)}Mn(e){return Q0(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function j0(n,e,t){const r=el(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let a=!1;return qs(n).Y({range:s,J:!0},(l,h,f)=>{const[p,m,w]=l;p===e&&m===i&&(a=!0),f.done()}).next(()=>a)}function Br(n){return vt(n,"mutations")}function qs(n){return vt(n,"documentMutations")}function Q0(n){return vt(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new ns(0)}static Nn(){return new ns(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QU{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Bn(e).next(t=>{const r=new ns(t.highestTargetId);return t.highestTargetId=r.next(),this.Ln(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(t=>X.fromTimestamp(new Ge(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Ln(e,i)))}addTargetData(e,t){return this.kn(e,t).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.qn(t,r),this.Ln(e,r))))}updateTargetData(e,t){return this.kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Os(e).delete(t.targetId)).next(()=>this.Bn(e)).next(r=>(J(r.targetCount>0),r.targetCount-=1,this.Ln(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Os(e).Y((a,l)=>{const h=Ea(l);h.sequenceNumber<=t&&r.get(h.targetId)===null&&(i++,s.push(this.removeTargetData(e,h)))}).next(()=>S.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Os(e).Y((r,i)=>{const s=Ea(i);t(s)})}Bn(e){return WI(e).get("targetGlobalKey").next(t=>(J(t!==null),t))}Ln(e,t){return WI(e).put("targetGlobalKey",t)}kn(e,t){return Os(e).put(z0(this.serializer,t))}qn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Ji(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Os(e).Y({range:i,index:"queryTargetsIndex"},(a,l,h)=>{const f=Ea(l);Pc(t,f.target)&&(s=f,h.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=Wr(e);return t.forEach(a=>{const l=Wt(a.path);i.push(s.put({targetId:r,path:l})),i.push(this.referenceDelegate.addReference(e,r,a))}),S.waitFor(i)}removeMatchingKeys(e,t,r){const i=Wr(e);return S.forEach(t,s=>{const a=Wt(s.path);return S.waitFor([i.delete([r,a]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=Wr(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Wr(e);let s=de();return i.Y({range:r,J:!0},(a,l,h)=>{const f=Hn(a[1]),p=new $(f);s=s.add(p)}).next(()=>s)}containsKey(e,t){const r=Wt(t.path),i=IDBKeyRange.bound([r],[zT(r)],!1,!0);let s=0;return Wr(e).Y({index:"documentTargetsIndex",J:!0,range:i},([a,l],h,f)=>{a!==0&&(s++,f.done())}).next(()=>s>0)}_t(e,t){return Os(e).get(t).next(r=>r?Ea(r):null)}}function Os(n){return vt(n,"targets")}function WI(n){return vt(n,"targetGlobal")}function Wr(n){return vt(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I([n,e],[t,r]){const i=le(n,t);return i===0?le(e,r):i}class YU{constructor(e){this.Qn=e,this.buffer=new Ne($I),this.Kn=0}$n(){return++this.Kn}Un(e){const t=[e,this.$n()];if(this.buffer.size<this.Qn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();$I(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class JU{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Wn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Wn&&(this.Wn.cancel(),this.Wn=null)}get started(){return this.Wn!==null}Gn(e){M("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Wn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Wn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){fi(t)?M("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await di(t)}await this.Gn(3e5)})}}class XU{constructor(e,t){this.zn=e,this.params=t}calculateTargetCount(e,t){return this.zn.jn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return S.resolve(Jt._e);const r=new YU(t);return this.zn.forEachTarget(e,i=>r.Un(i.sequenceNumber)).next(()=>this.zn.Hn(e,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(qI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qI):this.Jn(e,t))}getCacheSize(e){return this.zn.getCacheSize(e)}Jn(e,t){let r,i,s,a,l,h,f;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,a=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,t))).next(m=>(s=m,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(f=Date.now(),Ms()<=ye.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${s} targets in `+(h-l)+`ms
	Removed ${m} documents in `+(f-h)+`ms
Total Duration: ${f-p}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function ZU(n,e){return new XU(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eB{constructor(e,t){this.db=e,this.garbageCollector=ZU(this,t)}jn(e){const t=this.Yn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Yn(e){let t=0;return this.Hn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Hn(e,t){return this.Zn(e,(r,i)=>t(i))}addReference(e,t,r){return $u(e,r)}removeReference(e,t,r){return $u(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return $u(e,t)}Xn(e,t){return function(i,s){let a=!1;return Q0(i).Z(l=>j0(i,l,s).next(h=>(h&&(a=!0),S.resolve(!h)))).next(()=>a)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Zn(e,(a,l)=>{if(l<=t){const h=this.Xn(e,a).next(f=>{if(!f)return s++,r.getEntry(e,a).next(()=>(r.removeEntry(a,X.min()),Wr(e).delete(function(m){return[0,Wt(m.path)]}(a))))});i.push(h)}}).next(()=>S.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return $u(e,t)}Zn(e,t){const r=Wr(e);let i,s=Jt._e;return r.Y({index:"documentTargetsIndex"},([a,l],{path:h,sequenceNumber:f})=>{a===0?(s!==Jt._e&&t(new $(Hn(i)),s),s=f,i=h):s=Jt._e}).next(()=>{s!==Jt._e&&t(new $(Hn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function $u(n,e){return Wr(n).put(function(r,i){return{targetId:0,path:Wt(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(){this.changes=new pi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tB{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return bi(e).put(r)}removeEntry(e,t,r){return bi(e).delete(function(s,a){const l=s.path.toArray();return[l.slice(0,l.length-2),l[l.length-2],bl(a),l[l.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.er(e,r)))}getEntry(e,t){let r=Be.newInvalidDocument(t);return bi(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(ha(t))},(i,s)=>{r=this.tr(t,s)}).next(()=>r)}nr(e,t){let r={size:0,document:Be.newInvalidDocument(t)};return bi(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(ha(t))},(i,s)=>{r={document:this.tr(t,s),size:Pl(s)}}).next(()=>r)}getEntries(e,t){let r=Zt();return this.rr(e,t,(i,s)=>{const a=this.tr(i,s);r=r.insert(i,a)}).next(()=>r)}ir(e,t){let r=Zt(),i=new Ve($.comparator);return this.rr(e,t,(s,a)=>{const l=this.tr(s,a);r=r.insert(s,l),i=i.insert(s,Pl(a))}).next(()=>({documents:r,sr:i}))}rr(e,t,r){if(t.isEmpty())return S.resolve();let i=new Ne(HI);t.forEach(h=>i=i.add(h));const s=IDBKeyRange.bound(ha(i.first()),ha(i.last())),a=i.getIterator();let l=a.getNext();return bi(e).Y({index:"documentKeyIndex",range:s},(h,f,p)=>{const m=$.fromSegments([...f.prefixPath,f.collectionGroup,f.documentId]);for(;l&&HI(l,m)<0;)r(l,null),l=a.getNext();l&&l.isEqual(m)&&(r(l,f),l=a.hasNext()?a.getNext():null),l?p.U(ha(l)):p.done()}).next(()=>{for(;l;)r(l,null),l=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const a=t.path,l=[a.popLast().toArray(),a.lastSegment(),bl(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],h=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return bi(e).W(IDBKeyRange.bound(l,h,!0)).next(f=>{s==null||s.incrementDocumentReadCount(f.length);let p=Zt();for(const m of f){const w=this.tr($.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);w.isFoundDocument()&&(Dc(t,w)||i.has(w.key))&&(p=p.insert(w.key,w))}return p})}getAllFromCollectionGroup(e,t,r,i){let s=Zt();const a=GI(t,r),l=GI(t,ln.max());return bi(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(a,l,!0)},(h,f,p)=>{const m=this.tr($.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);s=s.insert(m.key,m),s.size===i&&p.done()}).next(()=>s)}newChangeBuffer(e){return new nB(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return zI(e).get("remoteDocumentGlobalKey").next(t=>(J(!!t),t))}er(e,t){return zI(e).put("remoteDocumentGlobalKey",t)}tr(e,t){if(t){const r=BU(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(X.min())))return r}return Be.newInvalidDocument(e)}}function J0(n){return new tB(n)}class nB extends Y0{constructor(e,t){super(),this._r=e,this.trackRemovals=t,this.ar=new pi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new Ne((s,a)=>le(s.canonicalString(),a.canonicalString()));return this.changes.forEach((s,a)=>{const l=this.ar.get(s);if(t.push(this._r.removeEntry(e,s,l.readTime)),a.isValidDocument()){const h=DI(this._r.serializer,a);i=i.add(s.path.popLast());const f=Pl(h);r+=f-l.size,t.push(this._r.addEntry(e,s,h))}else if(r-=l.size,this.trackRemovals){const h=DI(this._r.serializer,a.convertToNoDocument(X.min()));t.push(this._r.addEntry(e,s,h))}}),i.forEach(s=>{t.push(this._r.indexManager.addToCollectionParentIndex(e,s))}),t.push(this._r.updateMetadata(e,r)),S.waitFor(t)}getFromCache(e,t){return this._r.nr(e,t).next(r=>(this.ar.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this._r.ir(e,t).next(({documents:r,sr:i})=>(i.forEach((s,a)=>{this.ar.set(s,{size:a,readTime:r.get(s).readTime})}),r))}}function zI(n){return vt(n,"remoteDocumentGlobal")}function bi(n){return vt(n,"remoteDocumentsV14")}function ha(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function GI(n,e){const t=e.documentKey.path.toArray();return[n,bl(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function HI(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=le(t[s],r[s]),i)return i;return i=le(t.length,r.length),i||(i=le(t[t.length-2],r[r.length-2]),i||le(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rB{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&ka(r.mutation,i,Xt.empty(),Ge.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,t,r=de()){const i=Kn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=Ia();return s.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Kn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,de()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let s=Zt();const a=Da(),l=function(){return Da()}();return t.forEach((h,f)=>{const p=r.get(f.key);i.has(f.key)&&(p===void 0||p.mutation instanceof br)?s=s.insert(f.key,f):p!==void 0?(a.set(f.key,p.mutation.getFieldMask()),ka(p.mutation,f,p.mutation.getFieldMask(),Ge.now())):a.set(f.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(h=>(h.forEach((f,p)=>a.set(f,p)),t.forEach((f,p)=>{var m;return l.set(f,new rB(p,(m=a.get(f))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Da();let i=new Ve((a,l)=>a-l),s=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(h=>{const f=t.get(h);if(f===null)return;let p=r.get(h)||Xt.empty();p=l.applyToLocalView(f,p),r.set(h,p);const m=(i.get(l.batchId)||de()).add(h);i=i.insert(l.batchId,m)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,p=h.value,m=_0();p.forEach(w=>{if(!s.has(w)){const b=R0(t.get(w),r.get(w));b!==null&&m.set(w,b),s=s.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,m))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return $.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Pg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):S.resolve(Kn());let l=-1,h=s;return a.next(f=>S.forEach(f,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(p)?S.resolve():this.remoteDocumentCache.getEntry(e,p).next(w=>{h=h.insert(p,w)}))).next(()=>this.populateOverlays(e,f,s)).next(()=>this.computeViews(e,h,f,de())).next(p=>({batchId:l,changes:m0(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let i=Ia();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=Ia();return this.indexManager.getCollectionParents(e,s).next(l=>S.forEach(l,h=>{const f=function(m,w){return new Rr(w,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,h.child(s));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next(p=>{p.forEach((m,w)=>{a=a.insert(m,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((h,f)=>{const p=f.getKey();a.get(p)===null&&(a=a.insert(p,Be.newInvalidDocument(p)))});let l=Ia();return a.forEach((h,f)=>{const p=s.get(h);p!==void 0&&ka(p.mutation,f,Xt.empty(),Ge.now()),Dc(t,f)&&(l=l.insert(h,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iB{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return S.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,function(i){return{id:i.id,version:i.version,createTime:at(i.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,function(i){return{name:i.name,query:Vg(i.bundledQuery),readTime:at(i.readTime)}}(t)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sB{constructor(){this.overlays=new Ve($.comparator),this.lr=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Kn();return S.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.lt(e,t,s)}),S.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const i=Kn(),s=t.length+1,a=new $(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===s&&h.largestBatchId>r&&i.set(h.getKey(),h)}return S.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Ve((f,p)=>f-p);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let p=s.get(f.largestBatchId);p===null&&(p=Kn(),s=s.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const l=Kn(),h=s.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,p)=>l.set(f,p)),!(l.size()>=i)););return S.resolve(l)}lt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Ng(t,r));let s=this.lr.get(t);s===void 0&&(s=de(),this.lr.set(t,s)),this.lr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.hr=new Ne(pt.Pr),this.Ir=new Ne(pt.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){const r=new pt(e,t);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.dr(new pt(e,t))}Ar(e,t){e.forEach(r=>this.removeReference(r,t))}Rr(e){const t=new $(new Re([])),r=new pt(t,e),i=new pt(t,e+1),s=[];return this.Ir.forEachInRange([r,i],a=>{this.dr(a),s.push(a.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const t=new $(new Re([])),r=new pt(t,e),i=new pt(t,e+1);let s=de();return this.Ir.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new pt(e,0),r=this.hr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class pt{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return $.comparator(e.key,t.key)||le(e.gr,t.gr)}static Tr(e,t){return le(e.gr,t.gr)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oB{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new Ne(pt.Pr)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new kg(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.yr=this.yr.add(new pt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return S.resolve(a)}lookupMutationBatch(e,t){return S.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Sr(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new pt(t,0),i=new pt(t,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],a=>{const l=this.wr(a.gr);s.push(l)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ne(le);return t.forEach(i=>{const s=new pt(i,0),a=new pt(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,a],l=>{r=r.add(l.gr)})}),S.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const a=new pt(new $(s),0);let l=new Ne(le);return this.yr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(l=l.add(h.gr)),!0)},a),S.resolve(this.br(l))}br(e){const t=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){J(this.Dr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return S.forEach(t.mutations,i=>{const s=new pt(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,t){const r=new pt(t,0),i=this.yr.firstAfterOrEqual(r);return S.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aB{constructor(e){this.Cr=e,this.docs=function(){return new Ve($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Cr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():Be.newInvalidDocument(t))}getEntries(e,t){let r=Zt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Be.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Zt();const a=t.path,l=new $(a.child("")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:p}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Ag(HT(p),r)<=0||(i.has(p.key)||Dc(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(e,t,r,i){K()}vr(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new cB(this)}getSize(e){return S.resolve(this.size)}}class cB extends Y0{constructor(e){super(),this._r=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uB{constructor(e){this.persistence=e,this.Fr=new pi(t=>Ji(t),Pc),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Ug,this.targetCount=0,this.Nr=ns.On()}forEachTarget(e,t){return this.Fr.forEach((r,i)=>t(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Mr&&(this.Mr=t),S.resolve()}kn(e){this.Fr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Nr=new ns(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.kn(t),S.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Fr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Fr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.Fr.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this.Or.Er(t,r),S.resolve()}removeMatchingKeys(e,t,r){this.Or.Ar(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Or.mr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this.Or.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e,t){this.Br={},this.overlays={},this.Lr=new Jt(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new uB(this),this.indexManager=new KU,this.remoteDocumentCache=function(i){return new aB(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new $0(t),this.Kr=new iB(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sB,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new oB(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const i=new lB(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,t){return S.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class lB extends jT{constructor(e){super(),this.currentSequenceNumber=e}}class wh{constructor(e){this.persistence=e,this.Gr=new Ug,this.zr=null}static jr(e){return new wh(e)}get Hr(){if(this.zr)return this.zr;throw K()}addReference(e,t,r){return this.Gr.addReference(r,t),this.Hr.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.Gr.removeReference(r,t),this.Hr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),S.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}$r(){this.zr=new Set}Ur(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Hr,r=>{const i=$.fromPath(r);return this.Jr(e,i).next(s=>{s||t.removeEntry(i,X.min())})}).next(()=>(this.zr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Jr(e,t).next(r=>{r?this.Hr.delete(t.toString()):this.Hr.add(t.toString())})}Qr(e){return 0}Jr(e,t){return S.or([()=>S.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hB{constructor(e){this.serializer=e}N(e,t,r,i){const s=new gh("createOrUpgrade",t);r<1&&i>=1&&(function(h){h.createObjectStore("owner")}(e),function(h){h.createObjectStore("mutationQueues",{keyPath:"userId"}),h.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",aI,{unique:!0}),h.createObjectStore("documentMutations")}(e),KI(e),function(h){h.createObjectStore("remoteDocuments")}(e));let a=S.resolve();return r<3&&i>=3&&(r!==0&&(function(h){h.deleteObjectStore("targetDocuments"),h.deleteObjectStore("targets"),h.deleteObjectStore("targetGlobal")}(e),KI(e)),a=a.next(()=>function(h){const f=h.store("targetGlobal"),p={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:X.min().toTimestamp(),targetCount:0};return f.put("targetGlobalKey",p)}(s))),r<4&&i>=4&&(r!==0&&(a=a.next(()=>function(h,f){return f.store("mutations").W().next(p=>{h.deleteObjectStore("mutations"),h.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",aI,{unique:!0});const m=f.store("mutations"),w=p.map(b=>m.put(b));return S.waitFor(w)})}(e,s))),a=a.next(()=>{(function(h){h.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(a=a.next(()=>this.Zr(s))),r<6&&i>=6&&(a=a.next(()=>(function(h){h.createObjectStore("remoteDocumentGlobal")}(e),this.Xr(s)))),r<7&&i>=7&&(a=a.next(()=>this.ei(s))),r<8&&i>=8&&(a=a.next(()=>this.ti(e,s))),r<9&&i>=9&&(a=a.next(()=>{(function(h){h.objectStoreNames.contains("remoteDocumentChanges")&&h.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(a=a.next(()=>this.ni(s))),r<11&&i>=11&&(a=a.next(()=>{(function(h){h.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(h){h.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(a=a.next(()=>{(function(h){const f=h.createObjectStore("documentOverlays",{keyPath:j2});f.createIndex("collectionPathOverlayIndex",Q2,{unique:!1}),f.createIndex("collectionGroupOverlayIndex",Y2,{unique:!1})})(e)})),r<13&&i>=13&&(a=a.next(()=>function(h){const f=h.createObjectStore("remoteDocumentsV14",{keyPath:M2});f.createIndex("documentKeyIndex",F2),f.createIndex("collectionGroupIndex",U2)}(e)).next(()=>this.ri(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(a=a.next(()=>this.ii(e,s))),r<15&&i>=15&&(a=a.next(()=>function(h){h.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),h.createObjectStore("indexState",{keyPath:z2}).createIndex("sequenceNumberIndex",G2,{unique:!1}),h.createObjectStore("indexEntries",{keyPath:H2}).createIndex("documentKeyIndex",K2,{unique:!1})}(e))),a}Xr(e){let t=0;return e.store("remoteDocuments").Y((r,i)=>{t+=Pl(i)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Zr(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.W().next(i=>S.forEach(i,s=>{const a=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",a).next(l=>S.forEach(l,h=>{J(h.userId===s.userId);const f=Di(this.serializer,h);return K0(e,s.userId,f).next(()=>{})}))}))}ei(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((a,l)=>{const h=new Re(a),f=function(m){return[0,Wt(m)]}(h);s.push(t.get(f).next(p=>p?S.resolve():(m=>t.put({targetId:0,path:Wt(m),sequenceNumber:i.highestListenSequenceNumber}))(h)))}).next(()=>S.waitFor(s))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:$2});const r=t.store("collectionParents"),i=new Fg,s=a=>{if(i.add(a)){const l=a.lastSegment(),h=a.popLast();return r.put({collectionId:l,parent:Wt(h)})}};return t.store("remoteDocuments").Y({J:!0},(a,l)=>{const h=new Re(a);return s(h.popLast())}).next(()=>t.store("documentMutations").Y({J:!0},([a,l,h],f)=>{const p=Hn(l);return s(p.popLast())}))}ni(e){const t=e.store("targets");return t.Y((r,i)=>{const s=Ea(i),a=z0(this.serializer,s);return t.put(a)})}ri(e,t){const r=t.store("remoteDocuments"),i=[];return r.Y((s,a)=>{const l=t.store("remoteDocumentsV14"),h=function(m){return m.document?new $(Re.fromString(m.document.name).popFirst(5)):m.noDocument?$.fromSegments(m.noDocument.path):m.unknownDocument?$.fromSegments(m.unknownDocument.path):K()}(a).path.toArray(),f={prefixPath:h.slice(0,h.length-2),collectionGroup:h[h.length-2],documentId:h[h.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};i.push(l.put(f))}).next(()=>S.waitFor(i))}ii(e,t){const r=t.store("mutations"),i=J0(this.serializer),s=new Z0(wh.jr,this.serializer.ut);return r.W().next(a=>{const l=new Map;return a.forEach(h=>{var f;let p=(f=l.get(h.userId))!==null&&f!==void 0?f:de();Di(this.serializer,h).keys().forEach(m=>p=p.add(m)),l.set(h.userId,p)}),S.forEach(l,(h,f)=>{const p=new gt(f),m=vh.ct(this.serializer,p),w=s.getIndexManager(p),b=Ih.ct(p,this.serializer,w,s.referenceDelegate);return new X0(i,b,m,w).recalculateAndSaveOverlaysForDocumentKeys(new np(t,Jt._e),h).next()})})}}function KI(n){n.createObjectStore("targetDocuments",{keyPath:q2}).createIndex("documentTargetsIndex",W2,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",B2,{unique:!0}),n.createObjectStore("targetGlobal")}const bf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Bg{constructor(e,t,r,i,s,a,l,h,f,p,m=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.si=s,this.window=a,this.document=l,this.oi=f,this._i=p,this.ai=m,this.Lr=null,this.kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.li=null,this.hi=Number.NEGATIVE_INFINITY,this.Pi=w=>Promise.resolve(),!Bg.D())throw new O(C.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new eB(this,i),this.Ii=t+"main",this.serializer=new $0(h),this.Ti=new Pn(this.Ii,this.ai,new hB(this.serializer)),this.qr=new QU(this.referenceDelegate,this.serializer),this.remoteDocumentCache=J0(this.serializer),this.Kr=new qU,this.window&&this.window.localStorage?this.Ei=this.window.localStorage:(this.Ei=null,p===!1&&ot("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.di().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new O(C.FAILED_PRECONDITION,bf);return this.Ai(),this.Ri(),this.Vi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.qr.getHighestSequenceNumber(e))}).then(e=>{this.Lr=new Jt(e,this.oi)}).then(()=>{this.kr=!0}).catch(e=>(this.Ti&&this.Ti.close(),Promise.reject(e)))}mi(e){return this.Pi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ti.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.di()}))}di(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>zu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(t=>{t||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)))})}).next(()=>this.gi(e)).next(t=>this.isPrimary&&!t?this.pi(e).next(()=>!1):!!t&&this.yi(e).next(()=>!0))).catch(e=>{if(fi(e))return M("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return M("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.Pi(e)),this.isPrimary=e})}fi(e){return da(e).get("owner").next(t=>S.resolve(this.wi(t)))}Si(e){return zu(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Di(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=vt(t,"clientMetadata");return r.W().next(i=>{const s=this.Ci(i,18e5),a=i.filter(l=>s.indexOf(l)===-1);return S.forEach(a,l=>r.delete(l.clientId)).next(()=>a)})}).catch(()=>[]);if(this.Ei)for(const t of e)this.Ei.removeItem(this.vi(t.clientId))}}Vi(){this.li=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.di().then(()=>this.bi()).then(()=>this.Vi()))}wi(e){return!!e&&e.ownerId===this.clientId}gi(e){return this._i?S.resolve(!0):da(e).get("owner").next(t=>{if(t!==null&&this.Di(t.leaseTimestampMs,5e3)&&!this.Fi(t.ownerId)){if(this.wi(t)&&this.networkEnabled)return!0;if(!this.wi(t)){if(!t.allowTabSynchronization)throw new O(C.FAILED_PRECONDITION,bf);return!1}}return!(!this.networkEnabled||!this.inForeground)||zu(e).W().next(r=>this.Ci(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,a=!this.inForeground&&i.inForeground,l=this.networkEnabled===i.networkEnabled;if(s||a&&l)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&M("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.kr=!1,this.Mi(),this.li&&(this.li.cancel(),this.li=null),this.xi(),this.Oi(),await this.Ti.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new np(e,Jt._e);return this.pi(t).next(()=>this.Si(t))}),this.Ti.close(),this.Ni()}Ci(e,t){return e.filter(r=>this.Di(r.updateTimeMs,t)&&!this.Fi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>zu(e).W().next(t=>this.Ci(t,18e5).map(r=>r.clientId)))}get started(){return this.kr}getMutationQueue(e,t){return Ih.ct(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new jU(e,this.serializer.ut.databaseId)}getDocumentOverlayCache(e){return vh.ct(this.serializer,e)}getBundleCache(){return this.Kr}runTransaction(e,t,r){M("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(h){return h===15?X2:h===14?ZT:h===13?XT:h===12?J2:h===11?JT:void K()}(this.ai);let a;return this.Ti.runTransaction(e,i,s,l=>(a=new np(l,this.Lr?this.Lr.next():Jt._e),t==="readwrite-primary"?this.fi(a).next(h=>!!h||this.gi(a)).next(h=>{if(!h)throw ot(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)),new O(C.FAILED_PRECONDITION,KT);return r(a)}).next(h=>this.yi(a).next(()=>h)):this.Li(a).next(()=>r(a)))).then(l=>(a.raiseOnCommittedEvent(),l))}Li(e){return da(e).get("owner").next(t=>{if(t!==null&&this.Di(t.leaseTimestampMs,5e3)&&!this.Fi(t.ownerId)&&!this.wi(t)&&!(this._i||this.allowTabSynchronization&&t.allowTabSynchronization))throw new O(C.FAILED_PRECONDITION,bf)})}yi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return da(e).put("owner",t)}static D(){return Pn.D()}pi(e){const t=da(e);return t.get("owner").next(r=>this.wi(r)?(M("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):S.resolve())}Di(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(ot(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ai(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.di()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}Ri(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ui=()=>{this.Mi();const t=/(?:Version|Mobile)\/1[456]/;Lx()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Oi(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Fi(e){var t;try{const r=((t=this.Ei)===null||t===void 0?void 0:t.getItem(this.vi(e)))!==null;return M("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ot("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Mi(){if(this.Ei)try{this.Ei.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){ot("Failed to set zombie client id.",e)}}Ni(){if(this.Ei)try{this.Ei.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function da(n){return vt(n,"owner")}function zu(n){return vt(n,"clientMetadata")}function qg(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.ki=r,this.qi=i}static Qi(e,t){let r=de(),i=de();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Wg(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dB{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.zi(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ji(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new dB;return this.Hi(e,t,a).next(l=>{if(s.result=l,this.$i)return this.Ji(e,t,a,l.size)})}).next(()=>s.result)}Ji(e,t,r,i){return r.documentReadCount<this.Ui?(Ms()<=ye.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Fs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),S.resolve()):(Ms()<=ye.DEBUG&&M("QueryEngine","Query:",Fs(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Ms()<=ye.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Fs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$t(t))):S.resolve())}zi(e,t){if(vI(t))return S.resolve(null);let r=$t(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Rl(t,null,"F"),r=$t(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=de(...s);return this.Gi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(h=>{const f=this.Yi(t,l);return this.Zi(t,f,a,h.readTime)?this.zi(e,Rl(t,null,"F")):this.Xi(e,f,t,h)}))})))}ji(e,t,r,i){return vI(t)||i.isEqual(X.min())?S.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const a=this.Yi(t,s);return this.Zi(t,a,r,i)?S.resolve(null):(Ms()<=ye.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Fs(t)),this.Xi(e,a,t,GT(i,-1)).next(l=>l))})}Yi(e,t){let r=new Ne(p0(e));return t.forEach((i,s)=>{Dc(e,s)&&(r=r.add(s))}),r}Zi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,t,r){return Ms()<=ye.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Fs(t)),this.Gi.getDocumentsMatchingQuery(e,t,ln.min(),r)}Xi(e,t,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fB{constructor(e,t,r,i){this.persistence=e,this.es=t,this.serializer=i,this.ts=new Ve(le),this.ns=new pi(s=>Ji(s),Pc),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new X0(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ts))}}function tA(n,e,t,r){return new fB(n,e,t,r)}async function nA(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.os(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let h=de();for(const f of i){a.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}for(const f of s){l.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(r,h).next(f=>({_s:f,removedBatchIds:a,addedBatchIds:l}))})})}function pB(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.ss.newChangeBuffer({trackRemovals:!0});return function(l,h,f,p){const m=f.batch,w=m.keys();let b=S.resolve();return w.forEach(q=>{b=b.next(()=>p.getEntry(h,q)).next(U=>{const F=f.docVersions.get(q);J(F!==null),U.version.compareTo(F)<0&&(m.applyToRemoteDocument(U,f),U.isValidDocument()&&(U.setReadTime(f.commitVersion),p.addEntry(U)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(h,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=de();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function rA(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.qr.getLastRemoteSnapshotVersion(t))}function gB(n,e){const t=G(n),r=e.snapshotVersion;let i=t.ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.ss.newChangeBuffer({trackRemovals:!0});i=t.ts;const l=[];e.targetChanges.forEach((p,m)=>{const w=i.get(m);if(!w)return;l.push(t.qr.removeMatchingKeys(s,p.removedDocuments,m).next(()=>t.qr.addMatchingKeys(s,p.addedDocuments,m)));let b=w.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?b=b.withResumeToken(dt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):p.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(p.resumeToken,r)),i=i.insert(m,b),function(U,F,Z){return U.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=3e8?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0}(w,b,p)&&l.push(t.qr.updateTargetData(s,b))});let h=Zt(),f=de();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(iA(s,a,e.documentUpdates).next(p=>{h=p.us,f=p.cs})),!r.isEqual(X.min())){const p=t.qr.getLastRemoteSnapshotVersion(s).next(m=>t.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return S.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,h,f)).next(()=>h)}).then(s=>(t.ts=i,s))}function iA(n,e,t){let r=de(),i=de();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=Zt();return t.forEach((l,h)=>{const f=s.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(X.min())?(e.removeEntry(l,h.readTime),a=a.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(h),a=a.insert(l,h)):M("LocalStore","Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)}),{us:a,cs:i}})}function mB(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function po(n,e){const t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.qr.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):t.qr.allocateTargetId(r).next(a=>(i=new gr(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ts=t.ts.insert(r.targetId,r),t.ns.set(e,r.targetId)),r})}async function go(n,e,t){const r=G(n),i=r.ts.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!fi(a))throw a;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function Cl(n,e,t){const r=G(n);let i=X.min(),s=de();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,p){const m=G(h),w=m.ns.get(p);return w!==void 0?S.resolve(m.ts.get(w)):m.qr.getTargetData(f,p)}(r,a,$t(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(a,l.targetId).next(h=>{s=h})}).next(()=>r.es.getDocumentsMatchingQuery(a,e,t?i:X.min(),t?s:de())).next(l=>(aA(r,f0(e),l),{documents:l,ls:s})))}function sA(n,e){const t=G(n),r=G(t.qr),i=t.ts.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r._t(s,e).next(a=>a?a.target:null))}function oA(n,e){const t=G(n),r=t.rs.get(e)||X.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.ss.getAllFromCollectionGroup(i,e,GT(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(aA(t,e,i),i))}function aA(n,e,t){let r=n.rs.get(e)||X.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.rs.set(e,r)}async function _B(n,e,t,r){const i=G(n);let s=de(),a=Zt();for(const f of t){const p=e.hs(f.metadata.name);f.document&&(s=s.add(p));const m=e.Ps(f);m.setReadTime(e.Is(f.metadata.readTime)),a=a.insert(p,m)}const l=i.ss.newChangeBuffer({trackRemovals:!0}),h=await po(i,function(p){return $t(Po(Re.fromString(`__bundle__/docs/${p}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",f=>iA(f,l,a).next(p=>(l.apply(f),p)).next(p=>i.qr.removeMatchingKeysForTargetId(f,h.targetId).next(()=>i.qr.addMatchingKeys(f,s,h.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(f,p.us,p.cs)).next(()=>p.us)))}async function yB(n,e,t=de()){const r=await po(n,$t(Vg(e.bundledQuery))),i=G(n);return i.persistence.runTransaction("Save named query","readwrite",s=>{const a=at(e.readTime);if(r.snapshotVersion.compareTo(a)>=0)return i.Kr.saveNamedQuery(s,e);const l=r.withResumeToken(dt.EMPTY_BYTE_STRING,a);return i.ts=i.ts.insert(l.targetId,l),i.qr.updateTargetData(s,l).next(()=>i.qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.qr.addMatchingKeys(s,t,r.targetId)).next(()=>i.Kr.saveNamedQuery(s,e))})}function jI(n,e){return`firestore_clients_${n}_${e}`}function QI(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Sf(n,e){return`firestore_targets_${n}_${e}`}class Dl{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Ts(e,t,r){const i=JSON.parse(r);let s,a=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return a&&i.error&&(a=typeof i.error.message=="string"&&typeof i.error.code=="string",a&&(s=new O(i.error.code,i.error.message))),a?new Dl(e,t,i.state,s):(ot("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class xa{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ts(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new O(r.error.code,r.error.message))),s?new xa(e,r.state,i):(ot("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class kl{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ts(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Cg();for(let a=0;i&&a<r.activeTargetIds.length;++a)i=QT(r.activeTargetIds[a]),s=s.add(r.activeTargetIds[a]);return i?new kl(e,s):(ot("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class $g{constructor(e,t){this.clientId=e,this.onlineState=t}static Ts(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new $g(t.clientId,t.onlineState):(ot("SharedClientState",`Failed to parse online state: ${e}`),null)}}class gp{constructor(){this.activeTargetIds=Cg()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Pf{constructor(e,t,r,i,s){this.window=e,this.si=t,this.persistenceKey=r,this.Rs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Vs=this.fs.bind(this),this.gs=new Ve(le),this.started=!1,this.ps=[];const a=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ys=jI(this.persistenceKey,this.Rs),this.ws=function(h){return`firestore_sequence_number_${h}`}(this.persistenceKey),this.gs=this.gs.insert(this.Rs,new gp),this.Ss=new RegExp(`^firestore_clients_${a}_([^_]*)$`),this.bs=new RegExp(`^firestore_mutations_${a}_(\\d+)(?:_(.*))?$`),this.Ds=new RegExp(`^firestore_targets_${a}_(\\d+)$`),this.Cs=function(h){return`firestore_online_state_${h}`}(this.persistenceKey),this.vs=function(h){return`firestore_bundle_loaded_v2_${h}`}(this.persistenceKey),this.window.addEventListener("storage",this.Vs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Rs)continue;const i=this.getItem(jI(this.persistenceKey,r));if(i){const s=kl.Ts(r,i);s&&(this.gs=this.gs.insert(s.clientId,s))}}this.Fs();const t=this.storage.getItem(this.Cs);if(t){const r=this.Ms(t);r&&this.xs(r)}for(const r of this.ps)this.fs(r);this.ps=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Os(this.gs)}isActiveQueryTarget(e){let t=!1;return this.gs.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ns(e,"pending")}updateMutationState(e,t,r){this.Ns(e,t,r),this.Bs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Sf(this.persistenceKey,e));if(r){const i=xa.Ts(e,r);i&&(t=i.state)}}return this.Ls.ds(e),this.Fs(),t}removeLocalQueryTarget(e){this.Ls.As(e),this.Fs()}isLocalQueryTarget(e){return this.Ls.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Sf(this.persistenceKey,e))}updateQueryState(e,t,r){this.ks(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.qs(e)}notifyBundleLoaded(e){this.Qs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Vs),this.removeItem(this.ys),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return M("SharedClientState","READ",e,t),t}setItem(e,t){M("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){M("SharedClientState","REMOVE",e),this.storage.removeItem(e)}fs(e){const t=e;if(t.storageArea===this.storage){if(M("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ys)return void ot("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ss.test(t.key)){if(t.newValue==null){const r=this.Ks(t.key);return this.$s(r,null)}{const r=this.Us(t.key,t.newValue);if(r)return this.$s(r.clientId,r)}}else if(this.bs.test(t.key)){if(t.newValue!==null){const r=this.Ws(t.key,t.newValue);if(r)return this.Gs(r)}}else if(this.Ds.test(t.key)){if(t.newValue!==null){const r=this.zs(t.key,t.newValue);if(r)return this.js(r)}}else if(t.key===this.Cs){if(t.newValue!==null){const r=this.Ms(t.newValue);if(r)return this.xs(r)}}else if(t.key===this.ws){const r=function(s){let a=Jt._e;if(s!=null)try{const l=JSON.parse(s);J(typeof l=="number"),a=l}catch(l){ot("SharedClientState","Failed to read sequence number from WebStorage",l)}return a}(t.newValue);r!==Jt._e&&this.sequenceNumberHandler(r)}else if(t.key===this.vs){const r=this.Hs(t.newValue);await Promise.all(r.map(i=>this.syncEngine.Js(i)))}}}else this.ps.push(t)})}}get Ls(){return this.gs.get(this.Rs)}Fs(){this.setItem(this.ys,this.Ls.Es())}Ns(e,t,r){const i=new Dl(this.currentUser,e,t,r),s=QI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Es())}Bs(e){const t=QI(this.persistenceKey,this.currentUser,e);this.removeItem(t)}qs(e){const t={clientId:this.Rs,onlineState:e};this.storage.setItem(this.Cs,JSON.stringify(t))}ks(e,t,r){const i=Sf(this.persistenceKey,e),s=new xa(e,t,r);this.setItem(i,s.Es())}Qs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.vs,t)}Ks(e){const t=this.Ss.exec(e);return t?t[1]:null}Us(e,t){const r=this.Ks(e);return kl.Ts(r,t)}Ws(e,t){const r=this.bs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Dl.Ts(new gt(s),i,t)}zs(e,t){const r=this.Ds.exec(e),i=Number(r[1]);return xa.Ts(i,t)}Ms(e){return $g.Ts(e)}Hs(e){return JSON.parse(e)}async Gs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Ys(e.batchId,e.state,e.error);M("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}js(e){return this.syncEngine.Zs(e.targetId,e.state,e.error)}$s(e,t){const r=t?this.gs.insert(e,t):this.gs.remove(e),i=this.Os(this.gs),s=this.Os(r),a=[],l=[];return s.forEach(h=>{i.has(h)||a.push(h)}),i.forEach(h=>{s.has(h)||l.push(h)}),this.syncEngine.Xs(a,l).then(()=>{this.gs=r})}xs(e){this.gs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Os(e){let t=Cg();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class cA{constructor(){this.eo=new gp,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,r){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new gp,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vB{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gu=null;function Cf(){return Gu===null?Gu=function(){return 268435456+Math.round(2147483648*Math.random())}():Gu++,"0x"+Gu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IB={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wB{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="WebChannelConnection";class EB extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+t.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(t,r,i,s,a){const l=Cf(),h=this.So(t,r);M("RestConnection",`Sending RPC '${t}' ${l}:`,h,i);const f={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(f,s,a),this.Do(t,h,f,i).then(p=>(M("RestConnection",`Received RPC '${t}' ${l}: `,p),p),p=>{throw kn("RestConnection",`RPC '${t}' ${l} failed with error: `,p,"url: ",h,"request:",i),p})}Co(t,r,i,s,a,l){return this.wo(t,r,i,s,a)}bo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+So}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}So(t,r){const i=IB[t];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,t,r,i){const s=Cf();return new Promise((a,l)=>{const h=new y2;h.setWithCredentials(!0),h.listenOnce(m2.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Af.NO_ERROR:const p=h.getResponseJson();M(xt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),a(p);break;case Af.TIMEOUT:M(xt,`RPC '${e}' ${s} timed out`),l(new O(C.DEADLINE_EXCEEDED,"Request time out"));break;case Af.HTTP_ERROR:const m=h.getStatus();if(M(xt,`RPC '${e}' ${s} failed with status:`,m,"response text:",h.getResponseText()),m>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const b=w==null?void 0:w.error;if(b&&b.status&&b.message){const q=function(F){const Z=F.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(Z)>=0?Z:C.UNKNOWN}(b.status);l(new O(q,b.message))}else l(new O(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new O(C.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{M(xt,`RPC '${e}' ${s} completed.`)}});const f=JSON.stringify(i);M(xt,`RPC '${e}' ${s} sending request:`,i),h.send(t,"POST",f,r,15)})}vo(e,t,r){const i=Cf(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=p2(),l=g2(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.bo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const p=s.join("");M(xt,`Creating RPC '${e}' stream ${i}: ${p}`,h);const m=a.createWebChannel(p,h);let w=!1,b=!1;const q=new wB({co:F=>{b?M(xt,`Not sending because RPC '${e}' stream ${i} is closed:`,F):(w||(M(xt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),w=!0),M(xt,`RPC '${e}' stream ${i} sending:`,F),m.send(F))},lo:()=>m.close()}),U=(F,Z,pe)=>{F.listen(Z,ee=>{try{pe(ee)}catch(Ee){setTimeout(()=>{throw Ee},0)}})};return U(m,Bu.EventType.OPEN,()=>{b||M(xt,`RPC '${e}' stream ${i} transport opened.`)}),U(m,Bu.EventType.CLOSE,()=>{b||(b=!0,M(xt,`RPC '${e}' stream ${i} transport closed`),q.Ro())}),U(m,Bu.EventType.ERROR,F=>{b||(b=!0,kn(xt,`RPC '${e}' stream ${i} transport errored:`,F),q.Ro(new O(C.UNAVAILABLE,"The operation could not be completed")))}),U(m,Bu.EventType.MESSAGE,F=>{var Z;if(!b){const pe=F.data[0];J(!!pe);const ee=pe,Ee=ee.error||((Z=ee[0])===null||Z===void 0?void 0:Z.error);if(Ee){M(xt,`RPC '${e}' stream ${i} received error:`,Ee);const he=Ee.status;let L=function(E){const Y=ct[E];if(Y!==void 0)return P0(Y)}(he),N=Ee.message;L===void 0&&(L=C.INTERNAL,N="Unknown error status: "+he+" with message "+Ee.message),b=!0,q.Ro(new O(L,N)),m.close()}else M(xt,`RPC '${e}' stream ${i} received:`,pe),q.Vo(pe)}}),U(l,_2.STAT_EVENT,F=>{F.stat===rI.PROXY?M(xt,`RPC '${e}' stream ${i} detected buffering proxy`):F.stat===rI.NOPROXY&&M(xt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{q.Ao()},0),q}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(){return typeof window<"u"?window:null}function sl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(n){return new DU(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,t,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=t,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const t=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,t-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,t,r,i,s,a,l,h){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new zg(e,t)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,t){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(ot(t.toString()),ot("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(t)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),t=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===t&&this.s_(r,i)},r=>{e(()=>{const i=new O(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,t){const r=this.i_(this.Uo);this.stream=this.__(e,t),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return t=>{this.si.enqueueAndForget(()=>this.Uo===e?t():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TB extends lA{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}__(e,t){return this.connection.vo("Listen",e,t)}onMessage(e){this.zo.reset();const t=NU(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?X.min():a.readTime?at(a.readTime):X.min()}(e);return this.listener.a_(t,r)}u_(e){const t={};t.database=sc(this.serializer),t.addTarget=function(s,a){let l;const h=a.target;if(l=Tl(h)?{documents:M0(s,h)}:{query:F0(s,h)},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=x0(s,a.resumeToken);const f=up(s,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(X.min())>0){l.readTime=fo(s,a.snapshotVersion.toTimestamp());const f=up(s,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,e);const r=LU(this.serializer,e);r&&(t.labels=r),this.e_(t)}c_(e){const t={};t.database=sc(this.serializer),t.removeTarget=e,this.e_(t)}}class AB extends lA{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,t){return this.connection.vo("Write",e,t)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const t=OU(e.writeResults,e.commitTime),r=at(e.commitTime);return this.listener.I_(r,t)}return J(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=sc(this.serializer),this.e_(e)}P_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>oc(this.serializer,r))};this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RB extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,t,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(C.UNKNOWN,i.toString())})}Co(e,t,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Co(e,t,r,s,a,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(C.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class bB{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(ot(t),this.f_=!1):M("OnlineStateTracker",t)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SB{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(a=>{r.enqueueAndForget(async()=>{gi(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=G(h);f.C_.add(4),await ko(f),f.M_.set("Unknown"),f.C_.delete(4),await Lc(f)}(this))})}),this.M_=new bB(r,i)}}async function Lc(n){if(gi(n))for(const e of n.v_)await e(!0)}async function ko(n){for(const e of n.v_)await e(!1)}function Eh(n,e){const t=G(n);t.D_.has(e.targetId)||(t.D_.set(e.targetId,e),Kg(t)?Hg(t):No(t).Ho()&&Gg(t,e))}function ac(n,e){const t=G(n),r=No(t);t.D_.delete(e),r.Ho()&&hA(t,e),t.D_.size===0&&(r.Ho()?r.Zo():gi(t)&&t.M_.set("Unknown"))}function Gg(n,e){if(n.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}No(n).u_(e)}function hA(n,e){n.x_.Oe(e),No(n).c_(e)}function Hg(n){n.x_=new bU({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>n.D_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),No(n).start(),n.M_.g_()}function Kg(n){return gi(n)&&!No(n).jo()&&n.D_.size>0}function gi(n){return G(n).C_.size===0}function dA(n){n.x_=void 0}async function PB(n){n.D_.forEach((e,t)=>{Gg(n,e)})}async function CB(n,e){dA(n),Kg(n)?(n.M_.w_(e),Hg(n)):n.M_.set("Unknown")}async function DB(n,e,t){if(n.M_.set("Online"),e instanceof k0&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.D_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.D_.delete(l),i.x_.removeTarget(l))}(n,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xl(n,r)}else if(e instanceof il?n.x_.$e(e):e instanceof D0?n.x_.Je(e):n.x_.Ge(e),!t.isEqual(X.min()))try{const r=await rA(n.localStore);t.compareTo(r)>=0&&await function(s,a){const l=s.x_.it(a);return l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=s.D_.get(f);p&&s.D_.set(f,p.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,f)=>{const p=s.D_.get(h);if(!p)return;s.D_.set(h,p.withResumeToken(dt.EMPTY_BYTE_STRING,p.snapshotVersion)),hA(s,h);const m=new gr(p.target,h,f,p.sequenceNumber);Gg(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await xl(n,r)}}async function xl(n,e,t){if(!fi(e))throw e;n.C_.add(1),await ko(n),n.M_.set("Offline"),t||(t=()=>rA(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await t(),n.C_.delete(1),await Lc(n)})}function fA(n,e){return e().catch(t=>xl(n,t,e))}async function xo(n){const e=G(n),t=ii(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;kB(e);)try{const i=await mB(e.localStore,r);if(i===null){e.b_.length===0&&t.Zo();break}r=i.batchId,xB(e,i)}catch(i){await xl(e,i)}pA(e)&&gA(e)}function kB(n){return gi(n)&&n.b_.length<10}function xB(n,e){n.b_.push(e);const t=ii(n);t.Ho()&&t.h_&&t.P_(e.mutations)}function pA(n){return gi(n)&&!ii(n).jo()&&n.b_.length>0}function gA(n){ii(n).start()}async function NB(n){ii(n).E_()}async function OB(n){const e=ii(n);for(const t of n.b_)e.P_(t.mutations)}async function LB(n,e,t){const r=n.b_.shift(),i=xg.from(r,e,t);await fA(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await xo(n)}async function VB(n,e){e&&ii(n).h_&&await async function(r,i){if(function(a){return S0(a)&&a!==C.ABORTED}(i.code)){const s=r.b_.shift();ii(r).Yo(),await fA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await xo(r)}}(n,e),pA(n)&&gA(n)}async function JI(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=gi(t);t.C_.add(3),await ko(t),r&&t.M_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.C_.delete(3),await Lc(t)}async function mp(n,e){const t=G(n);e?(t.C_.delete(2),await Lc(t)):e||(t.C_.add(2),await ko(t),t.M_.set("Unknown"))}function No(n){return n.O_||(n.O_=function(t,r,i){const s=G(t);return s.A_(),new TB(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:PB.bind(null,n),Io:CB.bind(null,n),a_:DB.bind(null,n)}),n.v_.push(async e=>{e?(n.O_.Yo(),Kg(n)?Hg(n):n.M_.set("Unknown")):(await n.O_.stop(),dA(n))})),n.O_}function ii(n){return n.N_||(n.N_=function(t,r,i){const s=G(t);return s.A_(),new AB(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:NB.bind(null,n),Io:VB.bind(null,n),T_:OB.bind(null,n),I_:LB.bind(null,n)}),n.v_.push(async e=>{e?(n.N_.Yo(),await xo(n)):(await n.N_.stop(),n.b_.length>0&&(M("RemoteStore",`Stopping write stream with ${n.b_.length} pending writes`),n.b_=[]))})),n.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new jg(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oo(n,e){if(ot("AsyncQueue",`${e}: ${n}`),fi(n))return new O(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.comparator=e?(t,r)=>e(t,r)||$.comparator(t.key,r.key):(t,r)=>$.comparator(t.key,r.key),this.keyedMap=Ia(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new Zs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Zs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Zs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(){this.B_=new Ve($.comparator)}track(e){const t=e.doc.key,r=this.B_.get(t);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(t,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(t):e.type===1&&r.type===2?this.B_=this.B_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):K():this.B_=this.B_.insert(t,e)}L_(){const e=[];return this.B_.inorderTraversal((t,r)=>{e.push(r)}),e}}class mo{constructor(e,t,r,i,s,a,l,h,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new mo(e,t,Zs.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MB{constructor(){this.k_=void 0,this.listeners=[]}}class FB{constructor(){this.queries=new pi(e=>d0(e),Cc),this.onlineState="Unknown",this.q_=new Set}}async function Qg(n,e){const t=G(n),r=e.query;let i=!1,s=t.queries.get(r);if(s||(i=!0,s=new MB),i)try{s.k_=await t.onListen(r)}catch(a){const l=Oo(a,`Initialization of query '${Fs(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,s),s.listeners.push(e),e.Q_(t.onlineState),s.k_&&e.K_(s.k_)&&Jg(t)}async function Yg(n,e){const t=G(n),r=e.query;let i=!1;const s=t.queries.get(r);if(s){const a=s.listeners.indexOf(e);a>=0&&(s.listeners.splice(a,1),i=s.listeners.length===0)}if(i)return t.queries.delete(r),t.onUnlisten(r)}function UB(n,e){const t=G(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.listeners)l.K_(i)&&(r=!0);a.k_=i}}r&&Jg(t)}function BB(n,e,t){const r=G(n),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(t);r.queries.delete(e)}function Jg(n){n.q_.forEach(e=>{e.next()})}class Xg{constructor(e,t,r){this.query=e,this.U_=t,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new mo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.W_?this.z_(e)&&(this.U_.next(e),t=!0):this.j_(e,this.onlineState)&&(this.H_(e),t=!0),this.G_=e,t}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let t=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),t=!0),t}j_(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const t=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}H_(e){e=mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qB{constructor(e,t){this.Y_=e,this.byteLength=t}Z_(){return"metadata"in this.Y_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.serializer=e}hs(e){return Qn(this.serializer,e)}Ps(e){return e.metadata.exists?V0(this.serializer,e.document,!1):Be.newNoDocument(this.hs(e.metadata.name),this.Is(e.metadata.readTime))}Is(e){return at(e)}}class WB{constructor(e,t,r){this.X_=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=mA(e)}ea(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Y_.namedQuery)this.queries.push(e.Y_.namedQuery);else if(e.Y_.documentMetadata){this.documents.push({metadata:e.Y_.documentMetadata}),e.Y_.documentMetadata.exists||++t;const r=Re.fromString(e.Y_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Y_.document&&(this.documents[this.documents.length-1].document=e.Y_.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ta(e){const t=new Map,r=new ZI(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.hs(i.metadata.name);for(const a of i.metadata.queries){const l=(t.get(a)||de()).add(s);t.set(a,l)}}return t}async complete(){const e=await _B(this.localStore,new ZI(this.serializer),this.documents,this.X_.id),t=this.ta(this.documents);for(const r of this.queries)await yB(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,na:this.collectionGroups,ra:e}}}function mA(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.key=e}}class yA{constructor(e){this.key=e}}class vA{constructor(e,t){this.query=e,this.ia=t,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=de(),this.mutatedKeys=de(),this._a=p0(e),this.aa=new Zs(this._a)}get ua(){return this.ia}ca(e,t){const r=t?t.la:new XI,i=t?t.aa:this.aa;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,m)=>{const w=i.get(p),b=Dc(this.query,m)?m:null,q=!!w&&this.mutatedKeys.has(w.key),U=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let F=!1;w&&b?w.data.isEqual(b.data)?q!==U&&(r.track({type:3,doc:b}),F=!0):this.ha(w,b)||(r.track({type:2,doc:b}),F=!0,(h&&this._a(b,h)>0||f&&this._a(b,f)<0)&&(l=!0)):!w&&b?(r.track({type:0,doc:b}),F=!0):w&&!b&&(r.track({type:1,doc:w}),F=!0,(h||f)&&(l=!0)),F&&(b?(a=a.add(b),s=U?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{aa:a,la:r,Zi:l,mutatedKeys:s}}ha(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const a=e.la.L_();a.sort((p,m)=>function(b,q){const U=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return U(b)-U(q)}(p.type,m.type)||this._a(p.doc,m.doc)),this.Pa(r),i=i!=null&&i;const l=t&&!i?this.Ia():[],h=this.oa.size===0&&this.current&&!i?1:0,f=h!==this.sa;return this.sa=h,a.length!==0||f?{snapshot:new mo(this.query,e.aa,s,a,e.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:l}:{Ta:l}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new XI,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(t=>this.ia=this.ia.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.ia=this.ia.delete(t)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=de(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const t=[];return e.forEach(r=>{this.oa.has(r)||t.push(new yA(r))}),this.oa.forEach(r=>{e.has(r)||t.push(new _A(r))}),t}da(e){this.ia=e.ls,this.oa=de();const t=this.ca(e.documents);return this.applyChanges(t,!0)}Aa(){return mo.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class $B{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class zB{constructor(e){this.key=e,this.Ra=!1}}class GB{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Va={},this.ma=new pi(l=>d0(l),Cc),this.fa=new Map,this.ga=new Set,this.pa=new Ve($.comparator),this.ya=new Map,this.wa=new Ug,this.Sa={},this.ba=new Map,this.Da=ns.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function HB(n,e){const t=rm(n);let r,i;const s=t.ma.get(e);if(s)r=s.targetId,t.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const a=await po(t.localStore,$t(e)),l=t.sharedClientState.addLocalQueryTarget(a.targetId);r=a.targetId,i=await Zg(t,e,r,l==="current",a.resumeToken),t.isPrimaryClient&&Eh(t.remoteStore,a)}return i}async function Zg(n,e,t,r,i){n.va=(m,w,b)=>async function(U,F,Z,pe){let ee=F.view.ca(Z);ee.Zi&&(ee=await Cl(U.localStore,F.query,!1).then(({documents:N})=>F.view.ca(N,ee)));const Ee=pe&&pe.targetChanges.get(F.targetId),he=pe&&pe.targetMismatches.get(F.targetId)!=null,L=F.view.applyChanges(ee,U.isPrimaryClient,Ee,he);return _p(U,F.targetId,L.Ta),L.snapshot}(n,m,w,b);const s=await Cl(n.localStore,e,!0),a=new vA(e,s.ls),l=a.ca(s.documents),h=Nc.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),f=a.applyChanges(l,n.isPrimaryClient,h);_p(n,t,f.Ta);const p=new $B(e,t,a);return n.ma.set(e,p),n.fa.has(t)?n.fa.get(t).push(e):n.fa.set(t,[e]),f.snapshot}async function KB(n,e){const t=G(n),r=t.ma.get(e),i=t.fa.get(r.targetId);if(i.length>1)return t.fa.set(r.targetId,i.filter(s=>!Cc(s,e))),void t.ma.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await go(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),ac(t.remoteStore,r.targetId),_o(t,r.targetId)}).catch(di)):(_o(t,r.targetId),await go(t.localStore,r.targetId,!0))}async function jB(n,e,t){const r=im(n);try{const i=await function(a,l){const h=G(a),f=Ge.now(),p=l.reduce((b,q)=>b.add(q.key),de());let m,w;return h.persistence.runTransaction("Locally write mutations","readwrite",b=>{let q=Zt(),U=de();return h.ss.getEntries(b,p).next(F=>{q=F,q.forEach((Z,pe)=>{pe.isValidDocument()||(U=U.add(Z))})}).next(()=>h.localDocuments.getOverlayedDocuments(b,q)).next(F=>{m=F;const Z=[];for(const pe of l){const ee=TU(pe,m.get(pe.key).overlayedDocument);ee!=null&&Z.push(new br(pe.key,ee,r0(ee.value.mapValue),ze.exists(!0)))}return h.mutationQueue.addMutationBatch(b,f,Z,l)}).next(F=>{w=F;const Z=F.applyToLocalDocumentSet(m,U);return h.documentOverlayCache.saveOverlays(b,F.batchId,Z)})}).then(()=>({batchId:w.batchId,changes:m0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,h){let f=a.Sa[a.currentUser.toKey()];f||(f=new Ve(le)),f=f.insert(l,h),a.Sa[a.currentUser.toKey()]=f}(r,i.batchId,t),await Sr(r,i.changes),await xo(r.remoteStore)}catch(i){const s=Oo(i,"Failed to persist write");t.reject(s)}}async function IA(n,e){const t=G(n);try{const r=await gB(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.ya.get(s);a&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Ra=!0:i.modifiedDocuments.size>0?J(a.Ra):i.removedDocuments.size>0&&(J(a.Ra),a.Ra=!1))}),await Sr(t,r,e)}catch(r){await di(r)}}function ew(n,e,t){const r=G(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ma.forEach((s,a)=>{const l=a.view.Q_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const h=G(a);h.onlineState=l;let f=!1;h.queries.forEach((p,m)=>{for(const w of m.listeners)w.Q_(l)&&(f=!0)}),f&&Jg(h)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function QB(n,e,t){const r=G(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.ya.get(e),s=i&&i.key;if(s){let a=new Ve($.comparator);a=a.insert(s,Be.newNoDocument(s,X.min()));const l=de().add(s),h=new xc(X.min(),new Map,new Ve(le),a,l);await IA(r,h),r.pa=r.pa.remove(s),r.ya.delete(e),nm(r)}else await go(r.localStore,e,!1).then(()=>_o(r,e,t)).catch(di)}async function YB(n,e){const t=G(n),r=e.batch.batchId;try{const i=await pB(t.localStore,e);tm(t,r,null),em(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Sr(t,i)}catch(i){await di(i)}}async function JB(n,e,t){const r=G(n);try{const i=await function(a,l){const h=G(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return h.mutationQueue.lookupMutationBatch(f,l).next(m=>(J(m!==null),p=m.keys(),h.mutationQueue.removeMutationBatch(f,m))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,p,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>h.localDocuments.getDocuments(f,p))})}(r.localStore,e);tm(r,e,t),em(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Sr(r,i)}catch(i){await di(i)}}async function XB(n,e){const t=G(n);gi(t.remoteStore)||M("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(a){const l=G(a);return l.persistence.runTransaction("Get highest unacknowledged batch id","readonly",h=>l.mutationQueue.getHighestUnacknowledgedBatchId(h))}(t.localStore);if(r===-1)return void e.resolve();const i=t.ba.get(r)||[];i.push(e),t.ba.set(r,i)}catch(r){const i=Oo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function em(n,e){(n.ba.get(e)||[]).forEach(t=>{t.resolve()}),n.ba.delete(e)}function tm(n,e,t){const r=G(n);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function _o(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.fa.get(e))n.ma.delete(r),t&&n.Va.Fa(r,t);n.fa.delete(e),n.isPrimaryClient&&n.wa.Rr(e).forEach(r=>{n.wa.containsKey(r)||wA(n,r)})}function wA(n,e){n.ga.delete(e.path.canonicalString());const t=n.pa.get(e);t!==null&&(ac(n.remoteStore,t),n.pa=n.pa.remove(e),n.ya.delete(t),nm(n))}function _p(n,e,t){for(const r of t)r instanceof _A?(n.wa.addReference(r.key,e),ZB(n,r)):r instanceof yA?(M("SyncEngine","Document no longer in limbo: "+r.key),n.wa.removeReference(r.key,e),n.wa.containsKey(r.key)||wA(n,r.key)):K()}function ZB(n,e){const t=e.key,r=t.path.canonicalString();n.pa.get(t)||n.ga.has(r)||(M("SyncEngine","New document in limbo: "+t),n.ga.add(r),nm(n))}function nm(n){for(;n.ga.size>0&&n.pa.size<n.maxConcurrentLimboResolutions;){const e=n.ga.values().next().value;n.ga.delete(e);const t=new $(Re.fromString(e)),r=n.Da.next();n.ya.set(r,new zB(t)),n.pa=n.pa.insert(t,r),Eh(n.remoteStore,new gr($t(Po(t.path)),r,"TargetPurposeLimboResolution",Jt._e))}}async function Sr(n,e,t){const r=G(n),i=[],s=[],a=[];r.ma.isEmpty()||(r.ma.forEach((l,h)=>{a.push(r.va(h,e,t).then(f=>{if((f||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(h.targetId,f!=null&&f.fromCache?"not-current":"current"),f){i.push(f);const p=Wg.Qi(h.targetId,f);s.push(p)}}))}),await Promise.all(a),r.Va.a_(i),await async function(h,f){const p=G(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>S.forEach(f,w=>S.forEach(w.ki,b=>p.persistence.referenceDelegate.addReference(m,w.targetId,b)).next(()=>S.forEach(w.qi,b=>p.persistence.referenceDelegate.removeReference(m,w.targetId,b)))))}catch(m){if(!fi(m))throw m;M("LocalStore","Failed to update sequence numbers: "+m)}for(const m of f){const w=m.targetId;if(!m.fromCache){const b=p.ts.get(w),q=b.snapshotVersion,U=b.withLastLimboFreeSnapshotVersion(q);p.ts=p.ts.insert(w,U)}}}(r.localStore,s))}async function eq(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await nA(t.localStore,e);t.currentUser=e,function(s,a){s.ba.forEach(l=>{l.forEach(h=>{h.reject(new O(C.CANCELLED,a))})}),s.ba.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Sr(t,r._s)}}function tq(n,e){const t=G(n),r=t.ya.get(e);if(r&&r.Ra)return de().add(r.key);{let i=de();const s=t.fa.get(e);if(!s)return i;for(const a of s){const l=t.ma.get(a);i=i.unionWith(l.view.ua)}return i}}async function nq(n,e){const t=G(n),r=await Cl(t.localStore,e.query,!0),i=e.view.da(r);return t.isPrimaryClient&&_p(t,e.targetId,i.Ta),i}async function rq(n,e){const t=G(n);return oA(t.localStore,e).then(r=>Sr(t,r))}async function iq(n,e,t,r){const i=G(n),s=await function(l,h){const f=G(l),p=G(f.mutationQueue);return f.persistence.runTransaction("Lookup mutation documents","readonly",m=>p.Cn(m,h).next(w=>w?f.localDocuments.getDocuments(m,w):S.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await xo(i.remoteStore):t==="acknowledged"||t==="rejected"?(tm(i,e,r||null),em(i,e),function(l,h){G(G(l).mutationQueue).Fn(h)}(i.localStore,e)):K(),await Sr(i,s)):M("SyncEngine","Cannot apply mutation batch with id: "+e)}async function sq(n,e){const t=G(n);if(rm(t),im(t),e===!0&&t.Ca!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await tw(t,r.toArray());t.Ca=!0,await mp(t.remoteStore,!0);for(const s of i)Eh(t.remoteStore,s)}else if(e===!1&&t.Ca!==!1){const r=[];let i=Promise.resolve();t.fa.forEach((s,a)=>{t.sharedClientState.isLocalQueryTarget(a)?r.push(a):i=i.then(()=>(_o(t,a),go(t.localStore,a,!0))),ac(t.remoteStore,a)}),await i,await tw(t,r),function(a){const l=G(a);l.ya.forEach((h,f)=>{ac(l.remoteStore,f)}),l.wa.Vr(),l.ya=new Map,l.pa=new Ve($.comparator)}(t),t.Ca=!1,await mp(t.remoteStore,!1)}}async function tw(n,e,t){const r=G(n),i=[],s=[];for(const a of e){let l;const h=r.fa.get(a);if(h&&h.length!==0){l=await po(r.localStore,$t(h[0]));for(const f of h){const p=r.ma.get(f),m=await nq(r,p);m.snapshot&&s.push(m.snapshot)}}else{const f=await sA(r.localStore,a);l=await po(r.localStore,f),await Zg(r,EA(f),a,!1,l.resumeToken)}i.push(l)}return r.Va.a_(s),i}function EA(n){return h0(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function oq(n){return function(t){return G(G(t).persistence).Bi()}(G(n).localStore)}async function aq(n,e,t,r){const i=G(n);if(i.Ca)return void M("SyncEngine","Ignoring unexpected query state notification.");const s=i.fa.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const a=await oA(i.localStore,f0(s[0])),l=xc.createSynthesizedRemoteEventForCurrentChange(e,t==="current",dt.EMPTY_BYTE_STRING);await Sr(i,a,l);break}case"rejected":await go(i.localStore,e,!0),_o(i,e,r);break;default:K()}}async function cq(n,e,t){const r=rm(n);if(r.Ca){for(const i of e){if(r.fa.has(i)){M("SyncEngine","Adding an already active target "+i);continue}const s=await sA(r.localStore,i),a=await po(r.localStore,s);await Zg(r,EA(s),a.targetId,!1,a.resumeToken),Eh(r.remoteStore,a)}for(const i of t)r.fa.has(i)&&await go(r.localStore,i,!1).then(()=>{ac(r.remoteStore,i),_o(r,i)}).catch(di)}}function rm(n){const e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=IA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tq.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QB.bind(null,e),e.Va.a_=UB.bind(null,e.eventManager),e.Va.Fa=BB.bind(null,e.eventManager),e}function im(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YB.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=JB.bind(null,e),e}function uq(n,e,t){const r=G(n);(async function(s,a,l){try{const h=await a.getMetadata();if(await function(b,q){const U=G(b),F=at(q.createTime);return U.persistence.runTransaction("hasNewerBundle","readonly",Z=>U.Kr.getBundleMetadata(Z,q.id)).then(Z=>!!Z&&Z.createTime.compareTo(F)>=0)}(s.localStore,h))return await a.close(),l._completeWith(function(b){return{taskState:"Success",documentsLoaded:b.totalDocuments,bytesLoaded:b.totalBytes,totalDocuments:b.totalDocuments,totalBytes:b.totalBytes}}(h)),Promise.resolve(new Set);l._updateProgress(mA(h));const f=new WB(h,s.localStore,a.serializer);let p=await a.Ma();for(;p;){const w=await f.ea(p);w&&l._updateProgress(w),p=await a.Ma()}const m=await f.complete();return await Sr(s,m.ra,void 0),await function(b,q){const U=G(b);return U.persistence.runTransaction("Save bundle","readwrite",F=>U.Kr.saveBundleMetadata(F,q))}(s.localStore,h),l._completeWith(m.progress),Promise.resolve(m.na)}catch(h){return kn("SyncEngine",`Loading bundle failed with ${h}`),l._failWith(h),Promise.resolve(new Set)}})(r,e,t).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class yp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Oc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return tA(this.persistence,new eA,e.initialUser,this.serializer)}createPersistence(e){return new Z0(wh.jr,this.serializer)}createSharedClientState(e){return new cA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class TA extends yp{constructor(e,t,r){super(),this.xa=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xa.initialize(this,e),await im(this.xa.syncEngine),await xo(this.xa.remoteStore),await this.persistence.mi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return tA(this.persistence,new eA,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new JU(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new O2(t,this.persistence);return new N2(e.asyncQueue,r)}createPersistence(e){const t=qg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new Bg(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,uA(),sl(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new cA}}class lq extends TA{constructor(e,t){super(e,t,!1),this.xa=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.xa.syncEngine;this.sharedClientState instanceof Pf&&(this.sharedClientState.syncEngine={Ys:iq.bind(null,t),Zs:aq.bind(null,t),Xs:cq.bind(null,t),Bi:oq.bind(null,t),Js:rq.bind(null,t)},await this.sharedClientState.start()),await this.persistence.mi(async r=>{await sq(this.xa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=uA();if(!Pf.D(t))throw new O(C.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=qg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Pf(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class sm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ew(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=eq.bind(null,this.syncEngine),await mp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FB}()}createDatastore(e){const t=Oc(e.databaseInfo.databaseId),r=function(s){return new EB(s)}(e.databaseInfo);return function(s,a,l,h){return new RB(s,a,l,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,l){return new SB(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>ew(this.syncEngine,t,0),function(){return YI.D()?new YI:new vB}())}createSyncEngine(e,t){return function(i,s,a,l,h,f,p){const m=new GB(i,s,a,l,h,f);return p&&(m.Ca=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(t){const r=G(t);M("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await ko(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):ot("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hq{constructor(e,t){this.Ba=e,this.serializer=t,this.metadata=new mt,this.buffer=new Uint8Array,this.La=function(){return new TextDecoder("utf-8")}(),this.ka().then(r=>{r&&r.Z_()?this.metadata.resolve(r.Y_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Y_)}`))},r=>this.metadata.reject(r))}close(){return this.Ba.cancel()}async getMetadata(){return this.metadata.promise}async Ma(){return await this.getMetadata(),this.ka()}async ka(){const e=await this.qa();if(e===null)return null;const t=this.La.decode(e),r=Number(t);isNaN(r)&&this.Qa(`length string (${t}) is not valid number`);const i=await this.Ka(r);return new qB(JSON.parse(i),e.length+r)}$a(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async qa(){for(;this.$a()<0&&!await this.Ua(););if(this.buffer.length===0)return null;const e=this.$a();e<0&&this.Qa("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Ka(e){for(;this.buffer.length<e;)await this.Ua()&&this.Qa("Reached the end of bundle when more is expected.");const t=this.La.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Qa(e){throw this.Ba.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ua(){const e=await this.Ba.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dq{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new O(C.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(i,s){const a=G(i),l=sc(a.serializer)+"/documents",h={documents:s.map(w=>ic(a.serializer,w))},f=await a.Co("BatchGetDocuments",l,h,s.length),p=new Map;f.forEach(w=>{const b=xU(a.serializer,w);p.set(b.key.toString(),b)});const m=[];return s.forEach(w=>{const b=p.get(w.toString());J(!!b),m.push(b)}),m}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Do(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=$.fromPath(r);this.mutations.push(new Dg(i,this.precondition(i)))}),await async function(r,i){const s=G(r),a=sc(s.serializer)+"/documents",l={writes:i.map(h=>oc(s.serializer,h))};await s.wo("Commit",a,l)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw K();t=X.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new O(C.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(X.min())?ze.exists(!1):ze.updateTime(t):ze.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(X.min()))throw new O(C.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ze.updateTime(t)}return ze.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fq{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Wa=r.maxAttempts,this.zo=new zg(this.asyncQueue,"transaction_retry")}run(){this.Wa-=1,this.Ga()}Ga(){this.zo.ko(async()=>{const e=new dq(this.datastore),t=this.za(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ja(i)}))}).catch(r=>{this.ja(r)})})}za(e){try{const t=this.updateFunction(e);return!Sc(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}ja(e){this.Wa>0&&this.Ha(e)?(this.Wa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ga(),Promise.resolve()))):this.deferred.reject(e)}Ha(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!S0(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pq{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=$T.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{M("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(M("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Oo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ol(n,e){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await nA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function vp(n,e){n.asyncQueue.verifyOperationInProgress();const t=await om(n);M("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(i=>JI(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>JI(e.remoteStore,s)),n._onlineComponents=e}function AA(n){return n.name==="FirebaseError"?n.code===C.FAILED_PRECONDITION||n.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function om(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await ol(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!AA(t))throw t;kn("Error using user provided cache. Falling back to memory cache: "+t),await ol(n,new yp)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await ol(n,new yp);return n._offlineComponents}async function Ah(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await vp(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await vp(n,new sm))),n._onlineComponents}function RA(n){return om(n).then(e=>e.persistence)}function am(n){return om(n).then(e=>e.localStore)}function bA(n){return Ah(n).then(e=>e.remoteStore)}function cm(n){return Ah(n).then(e=>e.syncEngine)}function gq(n){return Ah(n).then(e=>e.datastore)}async function yo(n){const e=await Ah(n),t=e.eventManager;return t.onListen=HB.bind(null,e.syncEngine),t.onUnlisten=KB.bind(null,e.syncEngine),t}function mq(n){return n.asyncQueue.enqueue(async()=>{const e=await RA(n),t=await bA(n);return e.setNetworkEnabled(!0),function(i){const s=G(i);return s.C_.delete(0),Lc(s)}(t)})}function _q(n){return n.asyncQueue.enqueue(async()=>{const e=await RA(n),t=await bA(n);return e.setNetworkEnabled(!1),async function(i){const s=G(i);s.C_.add(0),await ko(s),s.M_.set("Offline")}(t)})}function yq(n,e){const t=new mt;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,a){try{const l=await function(f,p){const m=G(f);return m.persistence.runTransaction("read document","readonly",w=>m.localDocuments.getDocument(w,p))}(i,s);l.isFoundDocument()?a.resolve(l):l.isNoDocument()?a.resolve(null):a.reject(new O(C.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(l){const h=Oo(l,`Failed to get document '${s} from cache`);a.reject(h)}}(await am(n),e,t)),t.promise}function SA(n,e,t={}){const r=new mt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,h,f){const p=new Th({next:w=>{a.enqueueAndForget(()=>Yg(s,m));const b=w.docs.has(l);!b&&w.fromCache?f.reject(new O(C.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&w.fromCache&&h&&h.source==="server"?f.reject(new O(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(w)},error:w=>f.reject(w)}),m=new Xg(Po(l.path),p,{includeMetadataChanges:!0,J_:!0});return Qg(s,m)}(await yo(n),n.asyncQueue,e,t,r)),r.promise}function vq(n,e){const t=new mt;return n.asyncQueue.enqueueAndForget(async()=>async function(i,s,a){try{const l=await Cl(i,s,!0),h=new vA(s,l.ls),f=h.ca(l.documents),p=h.applyChanges(f,!1);a.resolve(p.snapshot)}catch(l){const h=Oo(l,`Failed to execute query '${s} against cache`);a.reject(h)}}(await am(n),e,t)),t.promise}function PA(n,e,t={}){const r=new mt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,h,f){const p=new Th({next:w=>{a.enqueueAndForget(()=>Yg(s,m)),w.fromCache&&h.source==="server"?f.reject(new O(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(w)},error:w=>f.reject(w)}),m=new Xg(l,p,{includeMetadataChanges:!0,J_:!0});return Qg(s,m)}(await yo(n),n.asyncQueue,e,t,r)),r.promise}function Iq(n,e){const t=new Th(e);return n.asyncQueue.enqueueAndForget(async()=>function(i,s){G(i).q_.add(s),s.next()}(await yo(n),t)),()=>{t.Na(),n.asyncQueue.enqueueAndForget(async()=>function(i,s){G(i).q_.delete(s)}(await yo(n),t))}}function wq(n,e,t,r){const i=function(a,l){let h;return h=typeof a=="string"?C0().encode(a):a,function(p,m){return new hq(p,m)}(function(p,m){if(p instanceof Uint8Array)return nw(p,m);if(p instanceof ArrayBuffer)return nw(new Uint8Array(p),m);if(p instanceof ReadableStream)return p.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(h),l)}(t,Oc(e));n.asyncQueue.enqueueAndForget(async()=>{uq(await cm(n),i,r)})}function Eq(n,e){return n.asyncQueue.enqueue(async()=>function(r,i){const s=G(r);return s.persistence.runTransaction("Get named query","readonly",a=>s.Kr.getNamedQuery(a,i))}(await am(n),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(n,e,t){if(!t)throw new O(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function DA(n,e,t,r){if(e===!0&&r===!0)throw new O(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function iw(n){if(!$.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function sw(n){if($.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Rh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K()}function be(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Rh(n);throw new O(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function kA(n,e){if(e<=0)throw new O(C.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=CA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vc{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ow({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ow(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new E2;switch(r.type){case"firstParty":return new b2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=rw.get(t);r&&(M("ComponentProvider","Removing Datastore"),rw.delete(t),r.terminate())}(this),Promise.resolve()}}function Tq(n,e,t,r={}){var i;const s=(n=be(n,Vc))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,h;if(typeof r.mockUserToken=="string")l=r.mockUserToken,h=gt.MOCK_USER;else{l=xx(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new O(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new gt(f)}n._authCredentials=new T2(new WT(l,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zt=class xA{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xA(this.firestore,e,this._query)}},Ke=class NA{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new NA(this.firestore,e,this._key)}},Kr=class OA extends zt{constructor(e,t,r){super(e,t,Po(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new $(e))}withConverter(e){return new OA(this.firestore,e,this._path)}};function LA(n,e,...t){if(n=te(n),um("collection","path",e),n instanceof Vc){const r=Re.fromString(e,...t);return sw(r),new Kr(n,null,r)}{if(!(n instanceof Ke||n instanceof Kr))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return sw(r),new Kr(n.firestore,null,r)}}function Aq(n,e){if(n=be(n,Vc),um("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new O(C.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new zt(n,null,function(r){return new Rr(Re.emptyPath(),r)}(e))}function cc(n,e,...t){if(n=te(n),arguments.length===1&&(e=$T.newId()),um("doc","path",e),n instanceof Vc){const r=Re.fromString(e,...t);return iw(r),new Ke(n,null,new $(r))}{if(!(n instanceof Ke||n instanceof Kr))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return iw(r),new Ke(n.firestore,n instanceof Kr?n.converter:null,new $(r))}}function VA(n,e){return n=te(n),e=te(e),(n instanceof Ke||n instanceof Kr)&&(e instanceof Ke||e instanceof Kr)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function MA(n,e){return n=te(n),e=te(e),n instanceof zt&&e instanceof zt&&n.firestore===e.firestore&&Cc(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rq{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new zg(this,"async_queue_retry"),this.iu=()=>{const t=sl();t&&M("AsyncQueue","Visibility state changed to "+t.visibilityState),this.zo.Qo()};const e=sl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const t=sl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const t=new mt;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!fi(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const t=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw ot("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=t,t}enqueueAfterDelay(e,t,r){this.su(),this.ru.indexOf(e)>-1&&(t=0);const i=jg.createAndSchedule(this,e,t,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&K()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const t of this.Xa)if(t.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Xa)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}function Ip(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class bq{constructor(){this._progressObserver={},this._taskCompletionResolver=new mt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sq=-1;let et=class extends Vc{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new Rq}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||FA(this),this._firestoreClient.terminate()}};function It(n){return n._firestoreClient||FA(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function FA(n){var e,t,r;const i=n._freezeSettings(),s=function(l,h,f,p){return new tU(l,h,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,CA(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new pq(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function Pq(n,e){BA(n=be(n,et));const t=It(n);if(t._uninitializedComponentsProvider)throw new O(C.FAILED_PRECONDITION,"SDK cache is already specified.");kn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),i=new sm;return UA(t,i,new TA(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function Cq(n){BA(n=be(n,et));const e=It(n);if(e._uninitializedComponentsProvider)throw new O(C.FAILED_PRECONDITION,"SDK cache is already specified.");kn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new sm;return UA(e,r,new lq(r,t.cacheSizeBytes))}function UA(n,e,t){const r=new mt;return n.asyncQueue.enqueue(async()=>{try{await ol(n,t),await vp(n,e),r.resolve()}catch(i){const s=i;if(!AA(s))throw s;kn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function Dq(n){if(n._initialized&&!n._terminated)throw new O(C.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new mt;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Pn.D())return Promise.resolve();const i=r+"main";await Pn.delete(i)}(qg(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function kq(n){return function(t){const r=new mt;return t.asyncQueue.enqueueAndForget(async()=>XB(await cm(t),r)),r.promise}(It(n=be(n,et)))}function xq(n){return mq(It(n=be(n,et)))}function Nq(n){return _q(It(n=be(n,et)))}function Oq(n,e){const t=It(n=be(n,et)),r=new bq;return wq(t,n._databaseId,e,r),r}function Lq(n,e){return Eq(It(n=be(n,et)),e).then(t=>t?new zt(n,null,t.query):null)}function BA(n){if(n._initialized||n._terminated)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new er(dt.fromBase64String(e))}catch(t){throw new O(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new er(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vq=/^__.*__$/;class Mq{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new br(e,this.data,this.fieldMask,t,this.fieldTransforms):new Co(e,this.data,t,this.fieldTransforms)}}class qA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new br(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function WA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Sh{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Sh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Nl(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(WA(this.Iu)&&Vq.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class Fq{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Oc(e)}pu(e,t,r,i=!1){return new Sh({Iu:e,methodName:t,gu:r,path:$e.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ls(n){const e=n._freezeSettings(),t=Oc(n._databaseId);return new Fq(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ph(n,e,t,r,i,s={}){const a=n.pu(s.merge||s.mergeFields?2:0,e,t,i);fm("Data must be an object, but it was:",a,r);const l=GA(r,a);let h,f;if(s.merge)h=new Xt(a.fieldMask),f=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const w=wp(e,m,t);if(!a.contains(w))throw new O(C.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);KA(p,w)||p.push(w)}h=new Xt(p),f=a.fieldTransforms.filter(m=>h.covers(m.field))}else h=null,f=a.fieldTransforms;return new Mq(new bt(l),h,f)}class Mc extends us{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mc}}function $A(n,e,t){return new Sh({Iu:3,gu:e.settings.gu,methodName:n._methodName,du:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class lm extends us{_toFieldTransform(e){return new kc(e.path,new lo)}isEqual(e){return e instanceof lm}}class Uq extends us{constructor(e,t){super(e),this.yu=t}_toFieldTransform(e){const t=$A(this,e,!0),r=this.yu.map(s=>hs(s,t)),i=new Xi(r);return new kc(e.path,i)}isEqual(e){return this===e}}class Bq extends us{constructor(e,t){super(e),this.yu=t}_toFieldTransform(e){const t=$A(this,e,!0),r=this.yu.map(s=>hs(s,t)),i=new Zi(r);return new kc(e.path,i)}isEqual(e){return this===e}}class qq extends us{constructor(e,t){super(e),this.wu=t}_toFieldTransform(e){const t=new ho(e.serializer,I0(e.serializer,this.wu));return new kc(e.path,t)}isEqual(e){return this===e}}function hm(n,e,t,r){const i=n.pu(1,e,t);fm("Data must be an object, but it was:",i,r);const s=[],a=bt.empty();cs(r,(h,f)=>{const p=pm(e,h,t);f=te(f);const m=i.Ru(p);if(f instanceof Mc)s.push(p);else{const w=hs(f,m);w!=null&&(s.push(p),a.set(p,w))}});const l=new Xt(s);return new qA(a,l,i.fieldTransforms)}function dm(n,e,t,r,i,s){const a=n.pu(1,e,t),l=[wp(e,r,t)],h=[i];if(s.length%2!=0)throw new O(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<s.length;w+=2)l.push(wp(e,s[w])),h.push(s[w+1]);const f=[],p=bt.empty();for(let w=l.length-1;w>=0;--w)if(!KA(f,l[w])){const b=l[w];let q=h[w];q=te(q);const U=a.Ru(b);if(q instanceof Mc)f.push(b);else{const F=hs(q,U);F!=null&&(f.push(b),p.set(b,F))}}const m=new Xt(f);return new qA(p,m,a.fieldTransforms)}function zA(n,e,t,r=!1){return hs(t,n.pu(r?4:3,e))}function hs(n,e){if(HA(n=te(n)))return fm("Unsupported field value:",e,n),GA(n,e);if(n instanceof us)return function(r,i){if(!WA(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let h=hs(l,i.Vu(a));h==null&&(h={nullValue:"NULL_VALUE"}),s.push(h),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return I0(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ge.fromDate(r);return{timestampValue:fo(i.serializer,s)}}if(r instanceof Ge){const s=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:fo(i.serializer,s)}}if(r instanceof bh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof er)return{bytesValue:x0(i.serializer,r._byteString)};if(r instanceof Ke){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.mu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Lg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Rh(r)}`)}(n,e)}function GA(n,e){const t={};return e0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cs(n,(r,i)=>{const s=hs(i,e.Eu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function HA(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ge||n instanceof bh||n instanceof er||n instanceof Ke||n instanceof us)}function fm(n,e,t){if(!HA(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Rh(t);throw r==="an object"?e.mu(n+" a custom object"):e.mu(n+" "+r)}}function wp(n,e,t){if((e=te(e))instanceof si)return e._internalPath;if(typeof e=="string")return pm(n,e);throw Nl("Field path arguments must be of type string or ",n,!1,void 0,t)}const Wq=new RegExp("[~\\*/\\[\\]]");function pm(n,e,t){if(e.search(Wq)>=0)throw Nl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new si(...e.split("."))._internalPath}catch{throw Nl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Nl(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(s||a)&&(h+=" (found",s&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new O(C.INVALID_ARGUMENT,l+n+h)}function KA(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $q(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ch("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class $q extends uc{data(){return super.data()}}function Ch(n,e){return typeof e=="string"?pm(n,e):e instanceof si?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gm{}class Fc extends gm{}function qr(n,e,...t){let r=[];e instanceof gm&&r.push(e),r=r.concat(t),function(s){const a=s.filter(h=>h instanceof mm).length,l=s.filter(h=>h instanceof Dh).length;if(a>1||a>0&&l>0)throw new O(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Dh extends Fc{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Dh(e,t,r)}_apply(e){const t=this._parse(e);return YA(e._query,t),new zt(e.firestore,e.converter,cp(e._query,t))}_parse(e){const t=ls(e.firestore);return function(s,a,l,h,f,p,m){let w;if(f.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new O(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){cw(m,p);const b=[];for(const q of m)b.push(aw(h,s,q));w={arrayValue:{values:b}}}else w=aw(h,s,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||cw(m,p),w=zA(l,a,m,p==="in"||p==="not-in");return Ie.create(f,p,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function zq(n,e,t){const r=e,i=Ch("where",n);return Dh._create(i,r,t)}class mm extends gm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new mm(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:De.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let a=i;const l=s.getFlattenedFilters();for(const h of l)YA(a,h),a=cp(a,h)}(e._query,t),new zt(e.firestore,e.converter,cp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _m extends Fc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new _m(e,t)}_apply(e){const t=function(i,s,a){if(i.startAt!==null)throw new O(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new O(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rc(s,a)}(e._query,this._field,this._direction);return new zt(e.firestore,e.converter,function(i,s){const a=i.explicitOrderBy.concat([s]);return new Rr(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Gq(n,e="asc"){const t=e,r=Ch("orderBy",n);return _m._create(r,t)}class kh extends Fc{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new kh(e,t,r)}_apply(e){return new zt(e.firestore,e.converter,Rl(e._query,this._limit,this._limitType))}}function Hq(n){return kA("limit",n),kh._create("limit",n,"F")}function Kq(n){return kA("limitToLast",n),kh._create("limitToLast",n,"L")}class xh extends Fc{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new xh(e,t,r)}_apply(e){const t=QA(e,this.type,this._docOrFields,this._inclusive);return new zt(e.firestore,e.converter,function(i,s){return new Rr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function jq(...n){return xh._create("startAt",n,!0)}function Qq(...n){return xh._create("startAfter",n,!1)}class Nh extends Fc{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Nh(e,t,r)}_apply(e){const t=QA(e,this.type,this._docOrFields,this._inclusive);return new zt(e.firestore,e.converter,function(i,s){return new Rr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function Yq(...n){return Nh._create("endBefore",n,!1)}function Jq(...n){return Nh._create("endAt",n,!0)}function QA(n,e,t,r){if(t[0]=te(t[0]),t[0]instanceof uc)return function(s,a,l,h,f){if(!h)throw new O(C.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const p=[];for(const m of Xs(s))if(m.field.isKeyField())p.push(Yi(a,h.key));else{const w=h.data.field(m.field);if(mh(w))throw new O(C.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+m.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const b=m.field.canonicalString();throw new O(C.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${b}' (used as the orderBy) does not exist.`)}p.push(w)}return new ri(p,f)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=ls(n.firestore);return function(a,l,h,f,p,m){const w=a.explicitOrderBy;if(p.length>w.length)throw new O(C.INVALID_ARGUMENT,`Too many arguments provided to ${f}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const b=[];for(let q=0;q<p.length;q++){const U=p[q];if(w[q].field.isKeyField()){if(typeof U!="string")throw new O(C.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${f}(), but got a ${typeof U}`);if(!Pg(a)&&U.indexOf("/")!==-1)throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${f}() must be a plain document ID, but '${U}' contains a slash.`);const F=a.path.child(Re.fromString(U));if(!$.isDocumentKey(F))throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${f}() must result in a valid document path, but '${F}' is not because it contains an odd number of segments.`);const Z=new $(F);b.push(Yi(l,Z))}else{const F=zA(h,f,U);b.push(F)}}return new ri(b,m)}(n._query,n.firestore._databaseId,i,e,t,r)}}function aw(n,e,t){if(typeof(t=te(t))=="string"){if(t==="")throw new O(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pg(e)&&t.indexOf("/")!==-1)throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Re.fromString(t));if(!$.isDocumentKey(r))throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Yi(n,new $(r))}if(t instanceof Ke)return Yi(n,t._key);throw new O(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rh(t)}.`)}function cw(n,e){if(!Array.isArray(n)||n.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function YA(n,e){const t=function(i,s){for(const a of i)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class ym{convertValue(e,t="none"){switch(Qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ei(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw K()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return cs(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new bh(Ye(e.latitude),Ye(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=bg(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ec(e));default:return null}}convertTimestamp(e){const t=Zr(e);return new Ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Re.fromString(e);J(W0(r));const i=new ti(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(t)||ot(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Xq extends ym{constructor(e){super(),this.firestore=e}convertBytes(e){return new er(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let wr=class extends uc{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Na(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ch("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},Na=class extends wr{data(e={}){return super.data(e)}},oi=class{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Mi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Na(this._firestore,this._userDataWriter,r.key,r,new Mi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const h=new Na(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Mi(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const h=new Na(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Mi(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,p=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:Zq(l.type),doc:h,oldIndex:f,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function Zq(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}function JA(n,e){return n instanceof wr&&e instanceof wr?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof oi&&e instanceof oi&&n._firestore===e._firestore&&MA(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(n){n=be(n,Ke);const e=be(n.firestore,et);return SA(It(e),n._key).then(t=>vm(e,n,t))}class ds extends ym{constructor(e){super(),this.firestore=e}convertBytes(e){return new er(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,t)}}function e4(n){n=be(n,Ke);const e=be(n.firestore,et),t=It(e),r=new ds(e);return yq(t,n._key).then(i=>new wr(e,r,n._key,i,new Mi(i!==null&&i.hasLocalMutations,!0),n.converter))}function t4(n){n=be(n,Ke);const e=be(n.firestore,et);return SA(It(e),n._key,{source:"server"}).then(t=>vm(e,n,t))}function n4(n){n=be(n,zt);const e=be(n.firestore,et),t=It(e),r=new ds(e);return jA(n._query),PA(t,n._query).then(i=>new oi(e,r,n,i))}function r4(n){n=be(n,zt);const e=be(n.firestore,et),t=It(e),r=new ds(e);return vq(t,n._query).then(i=>new oi(e,r,n,i))}function i4(n){n=be(n,zt);const e=be(n.firestore,et),t=It(e),r=new ds(e);return PA(t,n._query,{source:"server"}).then(i=>new oi(e,r,n,i))}function uw(n,e,t){n=be(n,Ke);const r=be(n.firestore,et),i=Oh(n.converter,e,t);return Uc(r,[Ph(ls(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,ze.none())])}function lw(n,e,t,...r){n=be(n,Ke);const i=be(n.firestore,et),s=ls(i);let a;return a=typeof(e=te(e))=="string"||e instanceof si?dm(s,"updateDoc",n._key,e,t,r):hm(s,"updateDoc",n._key,e),Uc(i,[a.toMutation(n._key,ze.exists(!0))])}function s4(n){return Uc(be(n.firestore,et),[new Do(n._key,ze.none())])}function o4(n,e){const t=be(n.firestore,et),r=cc(n),i=Oh(n.converter,e);return Uc(t,[Ph(ls(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,ze.exists(!1))]).then(()=>r)}function ZA(n,...e){var t,r,i;n=te(n);let s={includeMetadataChanges:!1},a=0;typeof e[a]!="object"||Ip(e[a])||(s=e[a],a++);const l={includeMetadataChanges:s.includeMetadataChanges};if(Ip(e[a])){const m=e[a];e[a]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[a+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[a+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let h,f,p;if(n instanceof Ke)f=be(n.firestore,et),p=Po(n._key.path),h={next:m=>{e[a]&&e[a](vm(f,n,m))},error:e[a+1],complete:e[a+2]};else{const m=be(n,zt);f=be(m.firestore,et),p=m._query;const w=new ds(f);h={next:b=>{e[a]&&e[a](new oi(f,w,m,b))},error:e[a+1],complete:e[a+2]},jA(n._query)}return function(w,b,q,U){const F=new Th(U),Z=new Xg(b,F,q);return w.asyncQueue.enqueueAndForget(async()=>Qg(await yo(w),Z)),()=>{F.Na(),w.asyncQueue.enqueueAndForget(async()=>Yg(await yo(w),Z))}}(It(f),p,l,h)}function a4(n,e){return Iq(It(n=be(n,et)),Ip(e)?e:{next:e})}function Uc(n,e){return function(r,i){const s=new mt;return r.asyncQueue.enqueueAndForget(async()=>jB(await cm(r),i,s)),s.promise}(It(n),e)}function vm(n,e,t){const r=t.docs.get(e._key),i=new ds(n);return new wr(n,i,e._key,r,new Mi(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c4={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u4=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ls(e)}set(e,t,r){this._verifyNotCommitted();const i=$r(e,this._firestore),s=Oh(i.converter,t,r),a=Ph(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,ze.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=$r(e,this._firestore);let a;return a=typeof(t=te(t))=="string"||t instanceof si?dm(this._dataReader,"WriteBatch.update",s._key,t,r,i):hm(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(a.toMutation(s._key,ze.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=$r(e,this._firestore);return this._mutations=this._mutations.concat(new Do(t._key,ze.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new O(C.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function $r(n,e){if((n=te(n)).firestore!==e)throw new O(C.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l4=class extends class{constructor(t,r){this._firestore=t,this._transaction=r,this._dataReader=ls(t)}get(t){const r=$r(t,this._firestore),i=new Xq(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return K();const a=s[0];if(a.isFoundDocument())return new uc(this._firestore,i,a.key,a,r.converter);if(a.isNoDocument())return new uc(this._firestore,i,r._key,null,r.converter);throw K()})}set(t,r,i){const s=$r(t,this._firestore),a=Oh(s.converter,r,i),l=Ph(this._dataReader,"Transaction.set",s._key,a,s.converter!==null,i);return this._transaction.set(s._key,l),this}update(t,r,i,...s){const a=$r(t,this._firestore);let l;return l=typeof(r=te(r))=="string"||r instanceof si?dm(this._dataReader,"Transaction.update",a._key,r,i,s):hm(this._dataReader,"Transaction.update",a._key,r),this._transaction.update(a._key,l),this}delete(t){const r=$r(t,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=$r(e,this._firestore),r=new ds(this._firestore);return super.get(e).then(i=>new wr(this._firestore,r,t._key,i._document,new Mi(!1,!1),t.converter))}};function h4(n,e,t){n=be(n,et);const r=Object.assign(Object.assign({},c4),t);return function(s){if(s.maxAttempts<1)throw new O(C.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,a,l){const h=new mt;return s.asyncQueue.enqueueAndForget(async()=>{const f=await gq(s);new fq(s.asyncQueue,f,l,a,h).run()}),h.promise}(It(n),i=>e(new l4(n,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d4(){return new Mc("deleteField")}function f4(){return new lm("serverTimestamp")}function p4(...n){return new Uq("arrayUnion",n)}function g4(...n){return new Bq("arrayRemove",n)}function m4(n){return new qq("increment",n)}(function(e,t=!0){(function(i){So=i})(ci),Yr(new Jn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new et(new A2(r.getProvider("auth-internal")),new P2(r.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new O(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ti(f.options.projectId,p)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),jn(iI,"4.4.0",e),jn(iI,"4.4.0","esm2017")})();const _4="@firebase/firestore-compat",y4="0.3.23";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new O("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(){if(typeof Uint8Array>"u")throw new O("unimplemented","Uint8Arrays are not available in this environment.")}function dw(){if(!Z2())throw new O("unimplemented","Blobs are unavailable in Firestore in this environment.")}class lc{constructor(e){this._delegate=e}static fromBase64String(e){return dw(),new lc(er.fromBase64String(e))}static fromUint8Array(e){return hw(),new lc(er.fromUint8Array(e))}toBase64(){return dw(),this._delegate.toBase64()}toUint8Array(){return hw(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(n){return v4(n,["next","error","complete"])}function v4(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{enableIndexedDbPersistence(e,t){return Pq(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Cq(e._delegate)}clearIndexedDbPersistence(e){return Dq(e._delegate)}}class eR{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ti||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&kn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){Tq(this._delegate,e,t,r)}enableNetwork(){return xq(this._delegate)}disableNetwork(){return Nq(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,DA("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return kq(this._delegate)}onSnapshotsInSync(e){return a4(this._delegate,e)}get app(){if(!this._appCompat)throw new O("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new vo(this,LA(this._delegate,e))}catch(t){throw Ut(t,"collection()","Firestore.collection()")}}doc(e){try{return new In(this,cc(this._delegate,e))}catch(t){throw Ut(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ft(this,Aq(this._delegate,e))}catch(t){throw Ut(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return h4(this._delegate,t=>e(new tR(this,t)))}batch(){return It(this._delegate),new nR(new u4(this._delegate,e=>Uc(this._delegate,e)))}loadBundle(e){return Oq(this._delegate,e)}namedQuery(e){return Lq(this._delegate,e).then(t=>t?new Ft(this,t):null)}}class Lh extends ym{constructor(e){super(),this.firestore=e}convertBytes(e){return new lc(new er(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return In.forKey(t,this.firestore,null)}}function w4(n){I2(n)}class tR{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Lh(e)}get(e){const t=Fi(e);return this._delegate.get(t).then(r=>new hc(this._firestore,new wr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const i=Fi(e);return r?(Im("Transaction.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Fi(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Fi(e);return this._delegate.delete(t),this}}class nR{constructor(e){this._delegate=e}set(e,t,r){const i=Fi(e);return r?(Im("WriteBatch.set",r),this._delegate.set(i,t,r)):this._delegate.set(i,t),this}update(e,t,r,...i){const s=Fi(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,r,...i),this}delete(e){const t=Fi(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class rs{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Na(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new dc(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=rs.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(t);return s||(s=new rs(e,new Lh(e),t),i.set(t,s)),s}}rs.INSTANCES=new WeakMap;class In{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Lh(e)}static forPath(e,t,r){if(e.length%2!==0)throw new O("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new In(t,new Ke(t._delegate,r,new $(e)))}static forKey(e,t,r){return new In(t,new Ke(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new vo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new vo(this.firestore,LA(this._delegate,e))}catch(t){throw Ut(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=te(e),e instanceof Ke?VA(this._delegate,e):!1}set(e,t){t=Im("DocumentReference.set",t);try{return t?uw(this._delegate,e,t):uw(this._delegate,e)}catch(r){throw Ut(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?lw(this._delegate,e):lw(this._delegate,e,t,...r)}catch(i){throw Ut(i,"updateDoc()","DocumentReference.update()")}}delete(){return s4(this._delegate)}onSnapshot(...e){const t=rR(e),r=iR(e,i=>new hc(this.firestore,new wr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return ZA(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=e4(this._delegate):(e==null?void 0:e.source)==="server"?t=t4(this._delegate):t=XA(this._delegate),t.then(r=>new hc(this.firestore,new wr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new In(this.firestore,e?this._delegate.withConverter(rs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ut(n,e,t){return n.message=n.message.replace(e,t),n}function rR(n){for(const e of n)if(typeof e=="object"&&!Ep(e))return e;return{}}function iR(n,e){var t,r;let i;return Ep(n[0])?i=n[0]:Ep(n[1])?i=n[1]:typeof n[0]=="function"?i={next:n[0],error:n[1],complete:n[2]}:i={next:n[1],error:n[2],complete:n[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class hc{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new In(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return JA(this._delegate,e._delegate)}}class dc extends hc{data(e){const t=this._delegate.data(e);return this._delegate._converter||w2(t!==void 0),t}}class Ft{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Lh(e)}where(e,t,r){try{return new Ft(this.firestore,qr(this._delegate,zq(e,t,r)))}catch(i){throw Ut(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Ft(this.firestore,qr(this._delegate,Gq(e,t)))}catch(r){throw Ut(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ft(this.firestore,qr(this._delegate,Hq(e)))}catch(t){throw Ut(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Ft(this.firestore,qr(this._delegate,Kq(e)))}catch(t){throw Ut(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ft(this.firestore,qr(this._delegate,jq(...e)))}catch(t){throw Ut(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ft(this.firestore,qr(this._delegate,Qq(...e)))}catch(t){throw Ut(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ft(this.firestore,qr(this._delegate,Yq(...e)))}catch(t){throw Ut(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ft(this.firestore,qr(this._delegate,Jq(...e)))}catch(t){throw Ut(t,"endAt()","Query.endAt()")}}isEqual(e){return MA(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=r4(this._delegate):(e==null?void 0:e.source)==="server"?t=i4(this._delegate):t=n4(this._delegate),t.then(r=>new Tp(this.firestore,new oi(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=rR(e),r=iR(e,i=>new Tp(this.firestore,new oi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return ZA(this._delegate,t,r)}withConverter(e){return new Ft(this.firestore,e?this._delegate.withConverter(rs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class E4{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new dc(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Tp{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Ft(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new dc(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new E4(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new dc(this._firestore,r))})}isEqual(e){return JA(this._delegate,e._delegate)}}class vo extends Ft{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new In(this.firestore,e):null}doc(e){try{return e===void 0?new In(this.firestore,cc(this._delegate)):new In(this.firestore,cc(this._delegate,e))}catch(t){throw Ut(t,"doc()","CollectionReference.doc()")}}add(e){return o4(this._delegate,e).then(t=>new In(this.firestore,t))}isEqual(e){return VA(this._delegate,e._delegate)}withConverter(e){return new vo(this.firestore,e?this._delegate.withConverter(rs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Fi(n){return be(n,Ke)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(...e){this._delegate=new si(...e)}static documentId(){return new wm($e.keyField().canonicalString())}isEqual(e){return e=te(e),e instanceof si?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this._delegate=e}static serverTimestamp(){const e=f4();return e._methodName="FieldValue.serverTimestamp",new Ni(e)}static delete(){const e=d4();return e._methodName="FieldValue.delete",new Ni(e)}static arrayUnion(...e){const t=p4(...e);return t._methodName="FieldValue.arrayUnion",new Ni(t)}static arrayRemove(...e){const t=g4(...e);return t._methodName="FieldValue.arrayRemove",new Ni(t)}static increment(e){const t=m4(e);return t._methodName="FieldValue.increment",new Ni(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T4={Firestore:eR,GeoPoint:bh,Timestamp:Ge,Blob:lc,Transaction:tR,WriteBatch:nR,DocumentReference:In,DocumentSnapshot:hc,Query:Ft,QueryDocumentSnapshot:dc,QuerySnapshot:Tp,CollectionReference:vo,FieldPath:wm,FieldValue:Ni,setLogLevel:w4,CACHE_SIZE_UNLIMITED:Sq};function A4(n,e){n.INTERNAL.registerComponent(new Jn("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},T4)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R4(n){A4(n,(e,t)=>new eR(e,t,new I4)),n.registerVersion(_4,y4)}R4(Jr);const b4={apiKey:"AIzaSyCfFGZC07caKFCARPJmMU-qsuAW8jLIu3E",authDomain:"project-fitness-07.firebaseapp.com",projectId:"project-fitness-07",storageBucket:"project-fitness-07.appspot.com",messagingSenderId:"607206642972",appId:"1:607206642972:web:ea1d5c525a976b668cd6d9"},tr=Jr.initializeApp(b4);async function S4({email:n,password:e,name:t}){await tr.auth().createUserWithEmailAndPassword(n,e),await(await tr.auth().currentUser).updateProfile({displayName:t})}async function P4({email:n,password:e}){try{await tr.auth().signInWithEmailAndPassword(n,e)}catch(t){console.log(t.message)}}async function C4(){await tr.auth().signOut()}const fa={fs:Jr.firestore(),getCurrentUserID:async function(){return new Promise((n,e)=>{tr.auth().onAuthStateChanged(t=>{t?n(t.uid):e("User not authenticated")})})},addData:async function(n,e){const t=await this.getCurrentUserID();this.fs.collection("users").doc(t).set({[n]:e},{merge:!0}).then(()=>!0).catch(r=>(console.error("Error writing document: ",r),!1))},removeData:async function(n){const e=await this.getCurrentUserID();this.fs.collection("users").doc(e).update({[n]:Jr.firestore.FieldValue.delete()},{merge:!0}).then(()=>!0).catch(t=>(console.error("Error writing document: ",t),!1))},getData:async function(){const n=await this.getCurrentUserID(),e=cc(this.fs,"users",n),t=await XA(e);if(t.exists())return t.data();console.error("No such document")}};function Ws(n,e){let t="";for(let r=0;r<n;r+=1)e.classList.contains("workout-cards__wrapper")||e.classList.contains("favorite-cards__wrapper")?t+=`
      <li class='workouts__skeleton-loader'>
        <div class='svg-container'>
          <svg
            role="img"
            width="100%"
            height="135"
            aria-labelledby="loading-aria"
            viewBox="0 0 405 141"
            preserveAspectRatio="none"
          >
            <title id="loading-aria">Loading...</title>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              clip-path="url(#clip-path)"
              style='fill: url("#fill");'
            ></rect>
            <defs>
              <clipPath id="clip-path">
                  <rect x="9" y="5" rx="10" ry="10" width="81" height="19" />
                  <rect x="107" y="5" rx="3" ry="3" width="19" height="18" />
                  <circle cx="28" cy="67" r="19" />
                  <rect x="311" y="7" rx="4" ry="4" width="58" height="20" />
                  <rect x="381" y="18" rx="0" ry="0" width="40" height="0" />
                  <rect x="74" y="54" rx="0" ry="0" width="192" height="25" />
                  <rect x="6" y="108" rx="0" ry="0" width="123" height="28" />
                  <rect x="164" y="109" rx="0" ry="0" width="122" height="26" />
                  <rect x="314" y="109" rx="0" ry="0" width="77" height="27" />
                  <rect x="379" y="8" rx="7" ry="7" width="19" height="19" />
              </clipPath>
              <linearGradient id="fill">
                <stop
                  offset="0.599964"
                  stop-color="#ecebeb"
                  stop-opacity="1"
                >
                  <animate
                    attributeName="offset"
                    values="-2; -2; 1"
                    keyTimes="0; 0.25; 1"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop
                  offset="1.59996"
                  stop-color="#ffffff"
                  stop-opacity="1"
                >
                  <animate
                    attributeName="offset"
                    values="-1; -1; 2"
                    keyTimes="0; 0.25; 1"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
                <stop
                  offset="2.59996"
                  stop-color="#ecebeb"
                  stop-opacity="1"
                >
                  <animate
                    attributeName="offset"
                    values="0; 0; 3"
                    keyTimes="0; 0.25; 1"
                    dur="2s"
                    repeatCount="indefinite"
                  ></animate>
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </li>
      `:t+=`
      <li class='exercises__skeleton-loader'>
        <div class='card'>
          <div class='cover-image-skeleton'></div>
        </div>
      </li>
      `;return t}function $s(n,e){n.innerHTML=e}const eo=document.querySelector(".js-cards"),to="/project-fitness-07/";function D4(n){const e=n.map(({filter:t,name:r,imgURL:i})=>`
        <li class="exercise-cards__gallery-link js-card" data-card-name="${r}">
            <div class="exercise-cards__gallery-card">

                <img class="exercise-cards__gallery-image"  src="${i}" alt="${t+"-"+r}" loading="lazy" />
                <div class="exercise-cards__gallery-info">
                    <h3 class="exercise-cards__head3-name">${r}</h3>
                    <p class="exercise-cards__parag-filter">${t}</p>
                </div>
            </div>
        </li>
        `).join("");eo.insertAdjacentHTML("beforeend",e)}function k4(n){const e=n.map(({_id:t,bodyPart:r,name:i,target:s,burnedCalories:a,time:l,rating:h})=>`
        <li class="workout-cards__gallery-link js-workout-card" data-id="${t}">
            <div class="workout-cards__gallery-card" >
                <div class="workout-cards__first-line-wrapper">
                    <p class="workout-cards__parag-workout">Workout</p>
                    <p class="workout-cards__parag-rating">${Math.round(h*10)/10}</p>
                    <svg class="workout-cards__icon-star">
                        <use href="${to}images/icons-sprite.svg#icon-star"></use>
                    </svg>
                    <p class="workout-cards__parag-start">Start</p>
                    <svg class="workout-cards__icon-arrow-up">
                        <use href="${to}images/icons-sprite.svg#icon-arrow-up"></use>
                    </svg>
                </div>
                <div class="workout-cards__second-line-wrapper">
                    <div class="workout-cards__wrapper-icon-running-stick">
                        <svg class="workout-cards__icon-running-stick">
                            <use href="${to}images/icons-sprite.svg#icon-running-stick"></use>
                        </svg>
                    </div>
                    <h3 class="workout-cards__head3-name">${i}</h3>
                </div>
                <div class="workout-cards__third-line-wrapper">
                  <ul class="workout-cards__list-info">
                    <li class="workout-cards__list-point">
                      <p class="workout-cards__parag-burned-calories">Burned calories:</p>
                      <p class="workout-cards__parag-burned-calories-result">${a} / ${l} min<p>
                    </li>
                    <li class="workout-cards__list-point">
                      <p class="workout-cards__parag-body-part">Body part:</p>
                      <p class="workout-cards__parag-body-part-result">${r}<p>
                    </li>
                    <li class="workout-cards__list-point">
                      <p class="workout-cards__parag-target">Target:</p>
                      <p class="workout-cards__parag-target-result">${s}<p>
                    </li>
                  </ul>
                </div>
            </div>
          </li>
        `).join("");eo.insertAdjacentHTML("beforeend",e)}function x4(n){const e=n.length;$s(eo,Ws(e,eo));const t=n.map(({_id:r,bodyPart:i,name:s,target:a,burnedCalories:l,time:h})=>`
        <li class="favorite-cards__gallery-link" data-id="${r}">
            <div class="favorite-cards__gallery-card">
                <div class="favorite-cards__first-line-wrapper">
                    <p class="favorite-cards__parag-workout">Workout</p>
<button class="favorite-cards__trash-btn" type="button">
                      <svg class="favorite-cards__icon-trash">
                        <use href="${to}images/icons-sprite.svg#icon-trash"></use>
                    </svg>
</button>
                    <p class="favorite-cards__parag-start">Start</p>
                    <svg class="favorite-cards__icon-arrow-up">
                        <use href="${to}images/icons-sprite.svg#icon-arrow-up"></use>
                    </svg>
                </div>
                <div class="favorite-cards__second-line-wrapper">
                    <div class="workout-cards__wrapper-icon-running-stick">
                      <svg class="favorite-cards__icon-running-stick">
                          <use href="${to}images/icons-sprite.svg#icon-running-stick"></use>
                      </svg>
                    </div>
                    <h3 class="favorite-cards__head3-name">${s}</h3>
                </div>
                <div class="favorite-cards__third-line-wrapper">
                  <ul class="favorite-cards__list-info">
                    <li class="favorite-cards__list-point">
                      <p class="favorite-cards__parag-burned-calories">Burned calories:</p>
                      <p class="favorite-cards__parag-burned-calories-result">${l} / ${h} min<p>
                    </li>
                    <li class="favorite-cards__list-point">
                      <p class="favorite-cards__parag-body-part">Body part:</p>
                      <p class="favorite-cards__parag-body-part-result">${i}<p>
                    </li>
                    <li class="favorite-cards__list-point">
                      <p class="favorite-cards__parag-target">Target:</p>
                      <p class="favorite-cards__parag-target-result">${a}<p>
                    </li>
                  </ul>
                </div>
            </div>
          </li>
        `).join("");eo.innerHTML=t}function Hu(){eo.innerHTML=""}const $i={add:function(n,e){return new Promise((t,r)=>{try{fa.addData(n,e),t(!0)}catch{r(!1)}})},get:function(){return new Promise(async(n,e)=>{try{const t=await fa.getData();n(Object.values(t))}catch{e([])}})},idIsFavorite:async function(n){try{return(await this.get()).some(t=>t._id===n)}catch{return!1}},getObjectById:async function(n){try{const t=(await this.get()).find(r=>r._id===n)||null;return t?{...t,isFavorite:!0}:null}catch{return null}},addAndGet:async function(n,e){return new Promise(async(t,r)=>{try{await fa.addData(n,e),setTimeout(async()=>{const i=await fa.getData();t(Object.values(i))},200)}catch{r([])}})},remove:async function(n){return new Promise((e,t)=>{try{fa.removeData(n),e(!0)}catch{t(!1)}})}},Vn=document.querySelector(".js-cards");function sR(n,e){if(e>=768)return n!=3?($s(Vn,Ws(10,Vn)),10):($s(Vn,Ws(12,Vn)),12);if(e<768){if(n===1)return $s(Vn,Ws(8,Vn)),8;if(n===2||n===1)return $s(Vn,Ws(8,Vn)),8}return $s(Vn,Ws(9,Vn)),9}function oR(n){const e={filter:"Body%20parts",bodypart:"",keyword:"",muscles:"",equipment:""};for(const t in n)if(n.hasOwnProperty(t)&&n[t]!==e[t])return!0;return!1}function N4(n,e,t,r,i,s){return oR(r)?(t.bodyPart=r.bodypart,t.searchQuery=r.keyword,t.muscles=r.muscles,t.equipment=r.equipment,i=Ol(n,e,t,s).fetchFilteredExercises()):i=Ol(n,e,t,s).fetchExercise(),i}function O4(n,e,t,r,i,s){return oR(r)&&(t.filter=r.filter),i=Ol(n,e,t,s).fetchMuscles(),i}function Ol(n,e,t,r){const i=sR(e,r);return t.pageCounter=n,t.limit=i,t}function fw(n){return n.then(e=>e).catch(e=>{throw console.error("Error in getData:",e),e})}function aR(n,e){const t=document.querySelector(".filters__list .active");if(t){const r=t.id.includes("-")?(t.id.charAt(0).toUpperCase()+t.id.slice(1)).replace("-","%20"):t.id.charAt(0).toUpperCase()+t.id.slice(1);if(r!=n.filter||n.filter===""){n.filter=r;for(const i in n)i!=="filter"&&(n[i]="");e.currentPage=1,e.endPoint=3}}}async function L4({currentPage:n,endPoint:e},t){let r;const i=sR(e,t),s=localStorage.getItem("favoriteData"),a=localStorage.getItem("isDataOld"),l=a?JSON.parse(a):[];if(l||l.length===1)try{const h=await $i.get();r=pw(h,i),localStorage.setItem("favoriteData",JSON.stringify(h)),s&&localStorage.setItem("isDataOld",JSON.stringify(!1));const f=gw(n,r);return{totalPages:r.totalPages,currentData:f}}catch(h){console.log("Favorite data error: ",h)}else{const h=s?JSON.parse(s):[],f=pw(h,i),p=gw(n,f);return{totalPages:f.totalPages,currentData:p}}}function pw(n,e){const t=n.length;if(t<=e)return{totalPages:1,slicedData:n};if(t>e){const r=Math.ceil(t/e);let i=[];for(let s=0;s<r;s++){const a=s*e,l=(s+1)*e;i.push(n.slice(a,l))}return{totalPages:r,slicedData:i}}}function gw(n,{totalPages:e,slicedData:t}){return e===1?t:t[n-1]}const xe={exerciseWrapper:"js-cards",workoutWrapper:"workout-cards__wrapper",favoriteWrapper:"favorite-cards__wrapper",visuallyHidden:"visually-hidden",emptyParag:"exercise-cards__parag-empty",emptyWrapper:"exercise-cards__wrapper-empty"},Ll={stringHome:`
                <p class="exercise-cards__parag-empty">
                    Sorry, but we don't have anything for you with such filter. Please try another search
                </p>`,stringFavorite:`<p class="exercise-cards__parag-empty">
                        It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises
                        that you
                        like to your favorites for easier access in the future.
                    </p>`};function Vl(n,e){const t=document.querySelector("."+e);if(t)t.innerHTML=n;else return}function Hs(n,e){const t=document.querySelector("."+e);if(t)t.classList.add(n);else return}function Ls(n,e){const t=document.querySelector("."+e);if(t)t.classList.remove(n);else return}const Ap=document.querySelector(".js-pages");function Df(n,e){const t=[];if(e>1){for(let i=n-3;i<=n+3;i++)if(i>0&&i<=e){const s=i===n?"exercise-cards__wrapper-page exercise-cards__current-page":"exercise-cards__wrapper-page js-pages";t.push(`
                    <div class="${s}">
                        <a class="exercise-cards__page js-page" data-page="${i}" href="">
                            ${i}
                        </a>
                    </div>
                `)}Ap.innerHTML="";for(const i of t)Ap.insertAdjacentHTML("beforeend",i)}}function Ku(){Ap.innerHTML=""}function V4(n){n.preventDefault();const{target:e}=n;if(e.classList.contains("js-cards"))return;const t=e.closest(".js-card");if(t)return t.dataset.cardName}function M4(n){n.preventDefault();const{target:e}=n;return e.classList.contains("js-page")?e.closest(".js-page").dataset.page:void 0}function F4(n){n.preventDefault();const{target:e}=n;if(e.classList.contains("js-cards"))return;const t=e.closest(".js-workout-card");if(t)return t.dataset.id}const U4=async function(n){const{_id:e}=n;try{if(await $i.idIsFavorite(e)){const r=await $i.remove(e);return localStorage.setItem("isDataOld",JSON.stringify(!0)),!1}else return localStorage.setItem("isDataOld",JSON.stringify(!0)),await $i.add(e,n)}catch{return!1}},B4=n=>typeof n!="string"?n:n.split(" ").filter(e=>e).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "),mw=n=>typeof n!="string"?n:n.charAt(0).toUpperCase()+n.slice(1),q4=n=>typeof n!="string"?n:n.replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase(),W4=n=>{const e=getComputedStyle(document.documentElement).getPropertyValue("--rating-color-inactive"),t=getComputedStyle(document.documentElement).getPropertyValue("--rating-color-active");return`
<!-- DEFINE SVGs -->
<svg height="0" width="0">
  <defs>
    <!-- DEFINE ONE STAR -->
    <symbol viewBox="0 0 32 32" id="iconstar">
      <path
        d="M13.826 3.262c.684-2.106 3.663-2.106 4.348 0l1.932 5.945a2.285 2.285 0 0 0 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674a2.286 2.286 0 0 0-.83 2.556l1.931 5.945c.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674a2.286 2.286 0 0 0-2.687 0l-5.057 3.674c-1.791 1.302-4.202-.45-3.517-2.555l1.932-5.945a2.287 2.287 0 0 0-.83-2.556l-5.057-3.674c-1.791-1.302-.871-4.135 1.344-4.135h6.251c.99 0 1.868-.638 2.174-1.579l1.932-5.945z" />
    </symbol>
    <!-- DEFINE PATTERN FOR EMPTY STARS -->
    <pattern id="stars-empty" patternUnits="userSpaceOnUse" width="24" height="24">
      <use x="0" y="0" xlink:href="#iconstar" fill="${e}" height="24" width="24"/>
    </pattern>
    <!-- DEFINE PATTERN FOR FULL STARS -->
    <pattern id="stars-full" patternUnits="userSpaceOnUse" width="24" height="24">
      <use x="0" y="0" xlink:href="#iconstar" fill="${t}" height="24" width="24"/>
    </pattern>
  </defs>
</svg>

<!-- INSERT STARS -->
<svg height="24" viewBox="0 0 120 24" width="120">
  <rect fill="url(#stars-empty)" x="0" y="0" height="24" width="120"/>
  <rect fill="url(#stars-full)" x="0" y="0" height="24" width="${n}%"/>
</svg>
`},cR=document.querySelector(".backdrop");function Em(n){cR.classList.add("open"),n.classList.add("open")}function Tm(n){cR.classList.remove("open"),n.classList.remove("open")}const $4="/project-fitness-07/",Je={exercise:{},ratingText:"Rating",iconStar:`${$4}images/icons-sprite.svg#icon-star`,ratingMax:5,closeKeyBoardBtn:"Escape",beforeOpen:null,afterOpen:null,beforeClose:null,afterClose:null},Am=document.querySelector("form.modal-form"),Rm=document.querySelector(".rating-modal-content"),z4=document.querySelector(".rating-close"),uR=document.querySelector(".backdrop"),G4=()=>{const n=[];for(let e=0;e<Je.ratingMax;e++){let t=Je.ratingMax-e;n.push(`
        <input type="radio" class="visually-hidden" id="star${t}" name="rating" value="${t}">
        <label class="rating-star" for="star${t}">
            <svg class="rating-star-icon">
                <use href=${Je.iconStar} />
            </svg>
        </label>
        `)}return`
    <div class="rating-wrapper">
        <p class="rating-text">${Je.ratingText}</p>
        <div class="rating-stars">
            ${n.join("")}
            <p class="rating-count">0.0</p>
        </div>
    </div>
    `},lR=n=>{n.key===Je.closeKeyBoardBtn&&Vh()},hR=n=>{n.target===Rm&&Vh()},dR=n=>{bm.forEach(e=>{delete e.dataset.dataChecked}),n.target.dataset.dataChecked="checked",Sm.innerHTML=n.target.value},H4=()=>{Sm.innerHTML="0.0"};Am.insertAdjacentHTML("afterbegin",G4());const bm=document.querySelectorAll(".rating-stars input"),Sm=document.querySelector(".rating-count"),Vh=()=>{Je.beforeClose&&(Je.beforeClose(Je.exercise),Je.beforeClose=null),bm.forEach(n=>{n.removeEventListener("change",dR)}),Tm(Rm),document.removeEventListener("keydown",lR),uR.removeEventListener("click",hR),Je.afterClose&&(Je.afterClose(Je.exercise),Je.afterClose=null),Sm.innerHTML="0.0",Am.reset()},K4=()=>{Je.beforeOpen&&(Je.beforeOpen(Je.exercise),Je.beforeOpen=null),bm.forEach(n=>{n.addEventListener("change",dR)}),Je.afterOpen&&(Je.afterOpen(Je.exercise),Je.afterOpen=null),Em(Rm),document.addEventListener("keydown",lR),uR.addEventListener("click",hR)};z4.addEventListener("click",Vh);Am.addEventListener("reset",H4);const Rp={modalConfig:Je,openRatingModal:K4,closeRatingModal:Vh};var dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fR(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var pR={exports:{}};(function(n,e){(function(t,r){n.exports=r(t)})(typeof dr<"u"?dr:window||dr.window||dr.global,function(t){var r={},i="iziToast";document.querySelector("body");var s=!!/Mobi/.test(navigator.userAgent),a=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),l=typeof InstallTrigger<"u",h="ontouchstart"in document.documentElement,f=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],p={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},m=568,w={};r.children={};var b={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var q=function(L,N){N=N||{bubbles:!1,cancelable:!1,detail:void 0};var I=document.createEvent("CustomEvent");return I.initCustomEvent(L,N.bubbles,N.cancelable,N.detail),I};q.prototype=window.Event.prototype,window.CustomEvent=q}var U=function(L,N,I){if(Object.prototype.toString.call(L)==="[object Object]")for(var E in L)Object.prototype.hasOwnProperty.call(L,E)&&N.call(I,L[E],E,L);else if(L)for(var Y=0,oe=L.length;Y<oe;Y++)N.call(I,L[Y],Y,L)},F=function(L,N){var I={};return U(L,function(E,Y){I[Y]=L[Y]}),U(N,function(E,Y){I[Y]=N[Y]}),I},Z=function(L){var N=document.createDocumentFragment(),I=document.createElement("div");for(I.innerHTML=L;I.firstChild;)N.appendChild(I.firstChild);return N},pe=function(L){var N=btoa(encodeURIComponent(L));return N.replace(/=/g,"")},ee=function(L){return L.substring(0,1)=="#"||L.substring(0,3)=="rgb"||L.substring(0,3)=="hsl"},Ee=function(L){try{return btoa(atob(L))==L}catch{return!1}},he=function(){return{move:function(L,N,I,E){var Y,oe=.3,W=180;E!==0&&(L.classList.add(i+"-dragged"),L.style.transform="translateX("+E+"px)",E>0?(Y=(W-E)/W,Y<oe&&N.hide(F(I,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),L,"drag")):(Y=(W+E)/W,Y<oe&&N.hide(F(I,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),L,"drag")),L.style.opacity=Y,Y<oe&&((a||l)&&(L.style.left=E+"px"),L.parentNode.style.opacity=oe,this.stopMoving(L,null)))},startMoving:function(L,N,I,E){E=E||window.event;var Y=h?E.touches[0].clientX:E.clientX,oe=L.style.transform.replace("px)","");oe=oe.replace("translateX(","");var W=Y-oe;I.transitionIn&&L.classList.remove(I.transitionIn),I.transitionInMobile&&L.classList.remove(I.transitionInMobile),L.style.transition="",h?document.ontouchmove=function(se){se.preventDefault(),se=se||window.event;var Te=se.touches[0].clientX,rt=Te-W;he.move(L,N,I,rt)}:document.onmousemove=function(se){se.preventDefault(),se=se||window.event;var Te=se.clientX,rt=Te-W;he.move(L,N,I,rt)}},stopMoving:function(L,N){h?document.ontouchmove=function(){}:document.onmousemove=function(){},L.style.opacity="",L.style.transform="",L.classList.contains(i+"-dragged")&&(L.classList.remove(i+"-dragged"),L.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){L.style.transition=""},400))}}}();return r.setSetting=function(L,N,I){r.children[L][N]=I},r.getSetting=function(L,N){return r.children[L][N]},r.destroy=function(){U(document.querySelectorAll("."+i+"-overlay"),function(L,N){L.remove()}),U(document.querySelectorAll("."+i+"-wrapper"),function(L,N){L.remove()}),U(document.querySelectorAll("."+i),function(L,N){L.remove()}),this.children={},document.removeEventListener(i+"-opened",{},!1),document.removeEventListener(i+"-opening",{},!1),document.removeEventListener(i+"-closing",{},!1),document.removeEventListener(i+"-closed",{},!1),document.removeEventListener("keyup",{},!1),w={}},r.settings=function(L){r.destroy(),w=L,b=F(b,L||{})},U(p,function(L,N){r[N]=function(I){var E=F(w,I||{});E=F(L,E||{}),this.show(E)}}),r.progress=function(L,N,I){var E=this,Y=N.getAttribute("data-iziToast-ref"),oe=F(this.children[Y],L||{}),W=N.querySelector("."+i+"-progressbar div");return{start:function(){typeof oe.time.REMAINING>"u"&&(N.classList.remove(i+"-reseted"),W!==null&&(W.style.transition="width "+oe.timeout+"ms "+oe.progressBarEasing,W.style.width="0%"),oe.time.START=new Date().getTime(),oe.time.END=oe.time.START+oe.timeout,oe.time.TIMER=setTimeout(function(){clearTimeout(oe.time.TIMER),N.classList.contains(i+"-closing")||(E.hide(oe,N,"timeout"),typeof I=="function"&&I.apply(E))},oe.timeout),E.setSetting(Y,"time",oe.time))},pause:function(){if(typeof oe.time.START<"u"&&!N.classList.contains(i+"-paused")&&!N.classList.contains(i+"-reseted")){if(N.classList.add(i+"-paused"),oe.time.REMAINING=oe.time.END-new Date().getTime(),clearTimeout(oe.time.TIMER),E.setSetting(Y,"time",oe.time),W!==null){var se=window.getComputedStyle(W),Te=se.getPropertyValue("width");W.style.transition="none",W.style.width=Te}typeof I=="function"&&setTimeout(function(){I.apply(E)},10)}},resume:function(){typeof oe.time.REMAINING<"u"?(N.classList.remove(i+"-paused"),W!==null&&(W.style.transition="width "+oe.time.REMAINING+"ms "+oe.progressBarEasing,W.style.width="0%"),oe.time.END=new Date().getTime()+oe.time.REMAINING,oe.time.TIMER=setTimeout(function(){clearTimeout(oe.time.TIMER),N.classList.contains(i+"-closing")||(E.hide(oe,N,"timeout"),typeof I=="function"&&I.apply(E))},oe.time.REMAINING),E.setSetting(Y,"time",oe.time)):this.start()},reset:function(){clearTimeout(oe.time.TIMER),delete oe.time.REMAINING,E.setSetting(Y,"time",oe.time),N.classList.add(i+"-reseted"),N.classList.remove(i+"-paused"),W!==null&&(W.style.transition="none",W.style.width="100%"),typeof I=="function"&&setTimeout(function(){I.apply(E)},10)}}},r.hide=function(L,N,I){typeof N!="object"&&(N=document.querySelector(N));var E=this,Y=F(this.children[N.getAttribute("data-iziToast-ref")],L||{});Y.closedBy=I||null,delete Y.time.REMAINING,N.classList.add(i+"-closing"),function(){var se=document.querySelector("."+i+"-overlay");if(se!==null){var Te=se.getAttribute("data-iziToast-ref");Te=Te.split(",");var rt=Te.indexOf(String(Y.ref));rt!==-1&&Te.splice(rt,1),se.setAttribute("data-iziToast-ref",Te.join()),Te.length===0&&(se.classList.remove("fadeIn"),se.classList.add("fadeOut"),setTimeout(function(){se.remove()},700))}}(),Y.transitionIn&&N.classList.remove(Y.transitionIn),Y.transitionInMobile&&N.classList.remove(Y.transitionInMobile),s||window.innerWidth<=m?Y.transitionOutMobile&&N.classList.add(Y.transitionOutMobile):Y.transitionOut&&N.classList.add(Y.transitionOut);var oe=N.parentNode.offsetHeight;N.parentNode.style.height=oe+"px",N.style.pointerEvents="none",(!s||window.innerWidth>m)&&(N.parentNode.style.transitionDelay="0.2s");try{var W=new CustomEvent(i+"-closing",{detail:Y,bubbles:!0,cancelable:!0});document.dispatchEvent(W)}catch(se){console.warn(se)}setTimeout(function(){N.parentNode.style.height="0px",N.parentNode.style.overflow="",setTimeout(function(){delete E.children[Y.ref],N.parentNode.remove();try{var se=new CustomEvent(i+"-closed",{detail:Y,bubbles:!0,cancelable:!0});document.dispatchEvent(se)}catch(Te){console.warn(Te)}typeof Y.onClosed<"u"&&Y.onClosed.apply(null,[Y,N,I])},1e3)},200),typeof Y.onClosing<"u"&&Y.onClosing.apply(null,[Y,N,I])},r.show=function(L){var N=this,I=F(w,L||{});if(I=F(b,I),I.time={},I.id===null&&(I.id=pe(I.title+I.message+I.color)),I.displayMode===1||I.displayMode=="once")try{if(document.querySelectorAll("."+i+"#"+I.id).length>0)return!1}catch{console.warn("["+i+"] Could not find an element with this selector: #"+I.id+". Try to set an valid id.")}if(I.displayMode===2||I.displayMode=="replace")try{U(document.querySelectorAll("."+i+"#"+I.id),function(W,se){N.hide(I,W,"replaced")})}catch{console.warn("["+i+"] Could not find an element with this selector: #"+I.id+". Try to set an valid id.")}I.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),r.children[I.ref]=I;var E={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:I.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};E.toast.setAttribute("data-iziToast-ref",I.ref),E.toast.appendChild(E.toastBody),E.toastCapsule.appendChild(E.toast),function(){if(E.toast.classList.add(i),E.toast.classList.add(i+"-opening"),E.toastCapsule.classList.add(i+"-capsule"),E.toastBody.classList.add(i+"-body"),E.toastTexts.classList.add(i+"-texts"),s||window.innerWidth<=m?I.transitionInMobile&&E.toast.classList.add(I.transitionInMobile):I.transitionIn&&E.toast.classList.add(I.transitionIn),I.class){var W=I.class.split(" ");U(W,function(se,Te){E.toast.classList.add(se)})}I.id&&(E.toast.id=I.id),I.rtl&&(E.toast.classList.add(i+"-rtl"),E.toast.setAttribute("dir","rtl")),I.layout>1&&E.toast.classList.add(i+"-layout"+I.layout),I.balloon&&E.toast.classList.add(i+"-balloon"),I.maxWidth&&(isNaN(I.maxWidth)?E.toast.style.maxWidth=I.maxWidth:E.toast.style.maxWidth=I.maxWidth+"px"),(I.theme!==""||I.theme!=="light")&&E.toast.classList.add(i+"-theme-"+I.theme),I.color&&(ee(I.color)?E.toast.style.background=I.color:E.toast.classList.add(i+"-color-"+I.color)),I.backgroundColor&&(E.toast.style.background=I.backgroundColor,I.balloon&&(E.toast.style.borderColor=I.backgroundColor))}(),function(){I.image&&(E.cover.classList.add(i+"-cover"),E.cover.style.width=I.imageWidth+"px",Ee(I.image.replace(/ /g,""))?E.cover.style.backgroundImage="url(data:image/png;base64,"+I.image.replace(/ /g,"")+")":E.cover.style.backgroundImage="url("+I.image+")",I.rtl?E.toastBody.style.marginRight=I.imageWidth+10+"px":E.toastBody.style.marginLeft=I.imageWidth+10+"px",E.toast.appendChild(E.cover))}(),function(){I.close?(E.buttonClose=document.createElement("button"),E.buttonClose.type="button",E.buttonClose.classList.add(i+"-close"),E.buttonClose.addEventListener("click",function(W){W.target,N.hide(I,E.toast,"button")}),E.toast.appendChild(E.buttonClose)):I.rtl?E.toast.style.paddingLeft="18px":E.toast.style.paddingRight="18px"}(),function(){I.progressBar&&(E.progressBar=document.createElement("div"),E.progressBarDiv=document.createElement("div"),E.progressBar.classList.add(i+"-progressbar"),E.progressBarDiv.style.background=I.progressBarColor,E.progressBar.appendChild(E.progressBarDiv),E.toast.appendChild(E.progressBar)),I.timeout&&(I.pauseOnHover&&!I.resetOnHover&&(E.toast.addEventListener("mouseenter",function(W){N.progress(I,E.toast).pause()}),E.toast.addEventListener("mouseleave",function(W){N.progress(I,E.toast).resume()})),I.resetOnHover&&(E.toast.addEventListener("mouseenter",function(W){N.progress(I,E.toast).reset()}),E.toast.addEventListener("mouseleave",function(W){N.progress(I,E.toast).start()})))}(),function(){I.iconUrl?(E.icon.setAttribute("class",i+"-icon"),E.icon.setAttribute("src",I.iconUrl)):I.icon&&(E.icon.setAttribute("class",i+"-icon "+I.icon),I.iconText&&E.icon.appendChild(document.createTextNode(I.iconText)),I.iconColor&&(E.icon.style.color=I.iconColor)),(I.icon||I.iconUrl)&&(I.rtl?E.toastBody.style.paddingRight="33px":E.toastBody.style.paddingLeft="33px",E.toastBody.appendChild(E.icon))}(),function(){I.title.length>0&&(E.strong=document.createElement("strong"),E.strong.classList.add(i+"-title"),E.strong.appendChild(Z(I.title)),E.toastTexts.appendChild(E.strong),I.titleColor&&(E.strong.style.color=I.titleColor),I.titleSize&&(isNaN(I.titleSize)?E.strong.style.fontSize=I.titleSize:E.strong.style.fontSize=I.titleSize+"px"),I.titleLineHeight&&(isNaN(I.titleSize)?E.strong.style.lineHeight=I.titleLineHeight:E.strong.style.lineHeight=I.titleLineHeight+"px")),I.message.length>0&&(E.p=document.createElement("p"),E.p.classList.add(i+"-message"),E.p.appendChild(Z(I.message)),E.toastTexts.appendChild(E.p),I.messageColor&&(E.p.style.color=I.messageColor),I.messageSize&&(isNaN(I.titleSize)?E.p.style.fontSize=I.messageSize:E.p.style.fontSize=I.messageSize+"px"),I.messageLineHeight&&(isNaN(I.titleSize)?E.p.style.lineHeight=I.messageLineHeight:E.p.style.lineHeight=I.messageLineHeight+"px")),I.title.length>0&&I.message.length>0&&(I.rtl?E.strong.style.marginLeft="10px":I.layout!==2&&!I.rtl&&(E.strong.style.marginRight="10px"))}(),E.toastBody.appendChild(E.toastTexts);var Y;(function(){I.inputs.length>0&&(E.inputs.classList.add(i+"-inputs"),U(I.inputs,function(W,se){E.inputs.appendChild(Z(W[0])),Y=E.inputs.childNodes,Y[se].classList.add(i+"-inputs-child"),W[3]&&setTimeout(function(){Y[se].focus()},300),Y[se].addEventListener(W[1],function(Te){var rt=W[2];return rt(N,E.toast,this,Te)})}),E.toastBody.appendChild(E.inputs))})(),function(){I.buttons.length>0&&(E.buttons.classList.add(i+"-buttons"),U(I.buttons,function(W,se){E.buttons.appendChild(Z(W[0]));var Te=E.buttons.childNodes;Te[se].classList.add(i+"-buttons-child"),W[2]&&setTimeout(function(){Te[se].focus()},300),Te[se].addEventListener("click",function(rt){rt.preventDefault();var Fh=W[1];return Fh(N,E.toast,this,rt,Y)})})),E.toastBody.appendChild(E.buttons)}(),I.message.length>0&&(I.inputs.length>0||I.buttons.length>0)&&(E.p.style.marginBottom="0"),(I.inputs.length>0||I.buttons.length>0)&&(I.rtl?E.toastTexts.style.marginLeft="10px":E.toastTexts.style.marginRight="10px",I.inputs.length>0&&I.buttons.length>0&&(I.rtl?E.inputs.style.marginLeft="8px":E.inputs.style.marginRight="8px")),function(){E.toastCapsule.style.visibility="hidden",setTimeout(function(){var W=E.toast.offsetHeight,se=E.toast.currentStyle||window.getComputedStyle(E.toast),Te=se.marginTop;Te=Te.split("px"),Te=parseInt(Te[0]);var rt=se.marginBottom;rt=rt.split("px"),rt=parseInt(rt[0]),E.toastCapsule.style.visibility="",E.toastCapsule.style.height=W+rt+Te+"px",setTimeout(function(){E.toastCapsule.style.height="auto",I.target&&(E.toastCapsule.style.overflow="visible")},500),I.timeout&&N.progress(I,E.toast).start()},100)}(),function(){var W=I.position;if(I.target)E.wrapper=document.querySelector(I.target),E.wrapper.classList.add(i+"-target"),I.targetFirst?E.wrapper.insertBefore(E.toastCapsule,E.wrapper.firstChild):E.wrapper.appendChild(E.toastCapsule);else{if(f.indexOf(I.position)==-1){console.warn("["+i+`] Incorrect position.
It can be › `+f);return}s||window.innerWidth<=m?I.position=="bottomLeft"||I.position=="bottomRight"||I.position=="bottomCenter"?W=i+"-wrapper-bottomCenter":I.position=="topLeft"||I.position=="topRight"||I.position=="topCenter"?W=i+"-wrapper-topCenter":W=i+"-wrapper-center":W=i+"-wrapper-"+W,E.wrapper=document.querySelector("."+i+"-wrapper."+W),E.wrapper||(E.wrapper=document.createElement("div"),E.wrapper.classList.add(i+"-wrapper"),E.wrapper.classList.add(W),document.body.appendChild(E.wrapper)),I.position=="topLeft"||I.position=="topCenter"||I.position=="topRight"?E.wrapper.insertBefore(E.toastCapsule,E.wrapper.firstChild):E.wrapper.appendChild(E.toastCapsule)}isNaN(I.zindex)?console.warn("["+i+"] Invalid zIndex."):E.wrapper.style.zIndex=I.zindex}(),function(){I.overlay&&(document.querySelector("."+i+"-overlay.fadeIn")!==null?(E.overlay=document.querySelector("."+i+"-overlay"),E.overlay.setAttribute("data-iziToast-ref",E.overlay.getAttribute("data-iziToast-ref")+","+I.ref),!isNaN(I.zindex)&&I.zindex!==null&&(E.overlay.style.zIndex=I.zindex-1)):(E.overlay.classList.add(i+"-overlay"),E.overlay.classList.add("fadeIn"),E.overlay.style.background=I.overlayColor,E.overlay.setAttribute("data-iziToast-ref",I.ref),!isNaN(I.zindex)&&I.zindex!==null&&(E.overlay.style.zIndex=I.zindex-1),document.querySelector("body").appendChild(E.overlay)),I.overlayClose?(E.overlay.removeEventListener("click",{}),E.overlay.addEventListener("click",function(W){N.hide(I,E.toast,"overlay")})):E.overlay.removeEventListener("click",{}))}(),function(){if(I.animateInside){E.toast.classList.add(i+"-animateInside");var W=[200,100,300];(I.transitionIn=="bounceInLeft"||I.transitionIn=="bounceInRight")&&(W=[400,200,400]),I.title.length>0&&setTimeout(function(){E.strong.classList.add("slideIn")},W[0]),I.message.length>0&&setTimeout(function(){E.p.classList.add("slideIn")},W[1]),(I.icon||I.iconUrl)&&setTimeout(function(){E.icon.classList.add("revealIn")},W[2]);var se=150;I.buttons.length>0&&E.buttons&&setTimeout(function(){U(E.buttons.childNodes,function(Te,rt){setTimeout(function(){Te.classList.add("revealIn")},se),se=se+150})},I.inputs.length>0?150:0),I.inputs.length>0&&E.inputs&&(se=150,U(E.inputs.childNodes,function(Te,rt){setTimeout(function(){Te.classList.add("revealIn")},se),se=se+150}))}}(),I.onOpening.apply(null,[I,E.toast]);try{var oe=new CustomEvent(i+"-opening",{detail:I,bubbles:!0,cancelable:!0});document.dispatchEvent(oe)}catch(W){console.warn(W)}setTimeout(function(){E.toast.classList.remove(i+"-opening"),E.toast.classList.add(i+"-opened");try{var W=new CustomEvent(i+"-opened",{detail:I,bubbles:!0,cancelable:!0});document.dispatchEvent(W)}catch(se){console.warn(se)}I.onOpened.apply(null,[I,E.toast])},1e3),I.drag&&(h?(E.toast.addEventListener("touchstart",function(W){he.startMoving(this,N,I,W)},!1),E.toast.addEventListener("touchend",function(W){he.stopMoving(this,W)},!1)):(E.toast.addEventListener("mousedown",function(W){W.preventDefault(),he.startMoving(this,N,I,W)},!1),E.toast.addEventListener("mouseup",function(W){W.preventDefault(),he.stopMoving(this,W)},!1))),I.closeOnEscape&&document.addEventListener("keyup",function(W){W=W||window.event,W.keyCode==27&&N.hide(I,E.toast,"esc")}),I.closeOnClick&&E.toast.addEventListener("click",function(W){N.hide(I,E.toast,"toast")}),N.toast=E.toast},r})})(pR);var j4=pR.exports;const al=fR(j4);const no={name:document.querySelector(".js__auth-modal__name__message"),email:document.querySelector(".js__auth-modal__email__message"),password:document.querySelector(".js__auth-modal__password__message")},Pm=document.querySelector(".backdrop"),At={exercise:{},beforeOpen:null,afterOpen:null,beforeClose:null,afterClose:null},Cm=document.querySelectorAll(".header__auth_btn"),gR=document.querySelector(".authModal__content"),mR=document.querySelector(".authModal__content .x-button"),We=document.querySelector(".authForm"),_w=document.querySelector(".action__text"),Ta=document.querySelector(".action__button"),yw=document.querySelector(".authForm__fieldset.username"),vw=document.querySelector(".authForm__title"),Iw=document.querySelectorAll(".header__nav-authorized"),ww=document.querySelectorAll(".header__nav__item.auth"),Ml=document.querySelectorAll(".header__logout_btn");let zi=!0;const Bc=()=>{At.beforeClose&&(At.beforeClose(At.exercise),At.beforeClose=null),Tm(gR),mR.removeEventListener("click",Bc),Cm.forEach(n=>n.addEventListener("click",Mh)),document.body.style.overflow="visible",At.afterClose&&(At.afterClose(At.exercise),At.afterClose=null),Pm.removeEventListener("click",Dm),document.removeEventListener("keydown",_R)},Mh=()=>{At.beforeOpen&&(At.beforeOpen(At.exercise),At.beforeOpen=null),Em(gR),mR.addEventListener("click",Bc),Cm.forEach(n=>n.removeEventListener("click",Mh)),document.body.style.overflow="hidden",At.afterOpen&&(At.afterOpen(At.exercise),At.afterOpen=null),Pm.addEventListener("click",Dm),document.addEventListener("keydown",_R)},bp=()=>{We.reset()},Q4=async n=>{var r,i;if(n.preventDefault(),zi&&(!We.elements.name.value||We.elements.name.value.length<3)){no.name.classList.remove("hidden");return}if(!We.elements.email.value||!yx(We.elements.email.value)){no.email.classList.remove("hidden");return}if(!We.elements.password.value||We.elements.password.value.length<6){no.password.classList.remove("hidden");return}const e=[...We.elements].reduce((s,a)=>(a.name&&(s[a.name]=a.value),s),{});if(zi){try{await S4(e)}catch{al.error({position:"topRight",message:"This email is already in use"});return}const s=(r=await tr.auth().currentUser)==null?void 0:r.displayName;al.success({title:"🤩",position:"topRight",message:`Hello, ${s}`})}await P4(e),bp(),We.elements.regSubmitBtn.disabled=!0;const t=(i=await tr.auth().currentUser)==null?void 0:i.displayName;al.success({position:"topRight",message:`Hello, ${t}`}),Bc()},Y4=()=>{zi?(Ta.textContent="Registration",yw.classList.add("hidden"),Ta.setAttribute("data-action","log_in"),vw.textContent="Log in",_w.textContent="Don't have an account?",bp(),zi=!1):(Ta.textContent="Log in",Ta.setAttribute("data-action","reg"),yw.classList.remove("hidden"),vw.textContent="Registration",_w.textContent="Already have an account?",bp(),zi=!0),We.elements.name.toggleAttribute("required")},J4=async()=>{await tr.auth().onAuthStateChanged(n=>{n?(ww.forEach(e=>{e.classList.add("hidden")}),Ml.forEach(e=>{e.classList.add("visible")}),Iw.forEach(e=>{e.classList.add("visible")})):(ww.forEach(e=>{e.classList.remove("hidden")}),Ml.forEach(e=>{e.classList.remove("visible")}),Iw.forEach(e=>{e.classList.remove("visible")}))})},_R=n=>{n.key==="Escape"&&Bc()},Dm=n=>{n.target.classList.contains("backdrop")&&Bc()},X4=async()=>{await C4(),Ml.forEach(n=>{n.classList.add("hidden")}),al.info({position:"topRight",message:"Successfully log out!"}),setTimeout(()=>{window.location.pathname="/project-fitness-07/"},1e3)};Pm.addEventListener("click",Dm);Cm.forEach(n=>n.addEventListener("click",Mh));We.addEventListener("submit",Q4);Ta.addEventListener("click",Y4);Ml.forEach(n=>{n.addEventListener("click",X4)});J4();We.elements.name.addEventListener("focus",Z4);function Z4(){no.name.classList.add("hidden")}We.elements.email.addEventListener("focus",eW);function eW(){no.email.classList.add("hidden")}We.elements.password.addEventListener("focus",tW);function tW(){no.password.classList.add("hidden")}We.elements.name.addEventListener("input",km);We.elements.email.addEventListener("input",km);We.elements.password.addEventListener("input",km);function km(){zi&&We.elements.name.value&&We.elements.email.value&&We.elements.password.value||!zi&&We.elements.email.value&&We.elements.password.value?We.elements.regSubmitBtn.disabled=!1:We.elements.regSubmitBtn.disabled=!0}const ro={modalConfig:At,openModal:Mh},Fl=document.querySelector(".js-cards");async function nW({target:n}){if(n.classList.contains("favorite-cards__trash-btn")){rW(n);return}const e=n.closest("li").dataset.id;if(!e)return;const t=new fc;try{t.id=e;const r=await t.fetchExerciseById();if(!r)throw new Error("Exercise not found!");qc(r)}catch(r){console.error(r)}}async function rW(n){const e=n.closest("li"),t=e.dataset.id;e.closest("li").remove(),$i.remove(t),localStorage.setItem("isDataOld",JSON.stringify(!0)),Fl.children.length===0&&(Hs(xe.emptyWrapper,xe.exerciseWrapper),Vl(Ll.stringFavorite,xe.exerciseWrapper))}function iW({_id:n}){document.querySelector('.favorite-cards__gallery-link[data-id="'+n+'"]').closest("li").remove(),localStorage.setItem("isDataOld",JSON.stringify(!0)),Fl.children.length===0&&(Hs(xe.emptyWrapper,xe.exerciseWrapper),Vl(Ll.stringFavorite,xe.exerciseWrapper))}Fl?Fl.addEventListener("click",nW):console.error("Element with class 'js-cards' not found for workout.");const xm=document.querySelector(".backdrop"),Er=document.querySelector(".modalExercise"),yR=Er.querySelector(".js-modal-exit"),Ew=Er.querySelector(".modalExercise__img-wrapper"),pa=Er.querySelector(".exercise-content"),Vs=Er.querySelector(".button-box"),sW="/project-fitness-07/",oW=5;let aW,mr={};const cW=n=>{const{gifUrl:e,name:t,rating:r,_id:i,isFavorite:s,description:a}=n,l=lW(n);mr=n,Er.setAttribute("data-id",i),Ew.innerHTML="",Ew.insertAdjacentHTML("afterbegin",fW(e,t)),pa.innerHTML="",pa.insertAdjacentHTML("beforeend",hW(t)),pa.insertAdjacentHTML("beforeend",dW(r)),pa.insertAdjacentHTML("beforeend",pW(l)),pa.insertAdjacentHTML("beforeend",gW(a)),ER(s)},vR=n=>{n.key==="Escape"&&is()},IR=n=>{n.target===xm&&is()},wR=n=>{const e=tr.auth().currentUser;if(is(),!e){ro.modalConfig.exercise=mr,ro.modalConfig.afterClose=qc,ro.openModal(mr);return}Rp.modalConfig.exercise=mr,Rp.openRatingModal()},uW=()=>{document.querySelector(".js-give-rating").removeEventListener("click",wR),qc(mr)},lW=n=>({bodyPart:n.bodyPart,equipment:n.equipment,rating:n.rating,burnedCalories:n.burnedCalories,time:n.time,popular:n.popularity}),ER=(n=!1)=>{Vs.innerHTML="",n?Vs.insertAdjacentHTML("beforeend",_W()):Vs.insertAdjacentHTML("beforeend",mW()),Vs.insertAdjacentHTML("beforeend",yW());const e=Vs.querySelector(".js-toggle-favorite");Vs.querySelector(".js-give-rating"),e.addEventListener("click",TR),Rp.modalConfig.afterClose=uW,document.querySelector(".js-give-rating").addEventListener("click",wR)},hW=n=>`
    <h3 class="title">${B4(n)}</h3>
  `,dW=n=>{const e=[],t=Math.round(n*10)/10;e.push(`<li class="rating__item value">${t}</li>`);const r=Math.round(n/oW*100);return e.push(`<li ${W4(r)}</li>`),`<ul class="rating">${e.join("")}</ul>`},fW=(n,e)=>`
    <img src="${n}" alt="${e}"/>
  `,pW=({burnedCalories:n,time:e,...t})=>{const r=[];for(const[i,s]of Object.entries(t)){const a=q4(i),l=mw(a),h=mw(s);r.push(`
      <li class="exercise_details-item">
        <p class="detail-name">${l}</p>
        <p class="detail-value">${h}</p>
      </li>
    `)}return r.push(`
      <li class="exercise_details-item">
        <p class="detail-name">Burned Calories</p>
        <p class="detail-value">${n}/${e} min</p>
      </li>
  `),`<ul class="exercise_details">${r.join("")}</ul>`},gW=n=>`
    <p class="exercise_description">${n}</p>
  `,mW=()=>Nm({text:"Add to favorites",iconId:"icon-heart",className:"js-toggle-favorite"}),_W=()=>Nm({text:"Remove from favorites",iconId:"icon-trash",className:"js-toggle-favorite"}),yW=()=>Nm({text:"Give a rating",className:"js-give-rating ghost"}),Nm=({text:n,iconId:e,className:t=""})=>{let r;return e&&(r=`
      <svg class="btn-icon">
        <use href=${sW}images/icons-sprite.svg#${e} />
      </svg>
    `),`
    <button id="js-toggle-favorite" type="button" class="button ${t}">
      <span>${n}</span>
      ${e?r:""}
    </button>
  `},is=()=>{Tm(Er),yR.removeEventListener("click",is),document.body.style.overflow="visible";const n="js-toggle-favorite";try{document.getElementById(n).removeEventListener("click",aW),document.removeEventListener("keydown",vR),xm.removeEventListener("click",IR),setTimeout(()=>Er.style.display="none",1e3)}catch{console.error(`${n} not found!`)}},qc=async n=>{const{_id:e}=n;n.isFavorite=await $i.idIsFavorite(e),cW(n),Er.style.display="",Em(Er),yR.addEventListener("click",is),document.body.style.overflow="hidden",document.addEventListener("keydown",vR),xm.addEventListener("click",IR)},TR=async n=>{if(!tr.auth().currentUser){is(),ro.modalConfig.exercise=mr,ro.modalConfig.afterClose=qc,ro.openModal(mr);return}const{target:t}=n;try{window.location.pathname.includes("favorites")&&(is(),iW(mr));const r=await U4(mr);t.removeEventListener("click",TR),ER(r)}catch(r){console.error(r)}},ju=document.querySelector(".exercise-cards__wrapper");function vW(n,e){e>=375&&e<768&&n===2?ju.style.height="1268px":e>1440&&n===1?ju.style.height="487px":e>=768&&n===2?ju.style.height="833px":ju.style.height=""}var Ul={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Ul.exports;(function(n,e){(function(){var t,r="4.17.21",i=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",l="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",f=500,p="__lodash_placeholder__",m=1,w=2,b=4,q=1,U=2,F=1,Z=2,pe=4,ee=8,Ee=16,he=32,L=64,N=128,I=256,E=512,Y=30,oe="...",W=800,se=16,Te=1,rt=2,Fh=3,mi=1/0,Pr=9007199254740991,CR=17976931348623157e292,Wc=0/0,xn=4294967295,DR=xn-1,kR=xn>>>1,xR=[["ary",N],["bind",F],["bindKey",Z],["curry",ee],["curryRight",Ee],["flip",E],["partial",he],["partialRight",L],["rearg",I]],fs="[object Arguments]",$c="[object Array]",NR="[object AsyncFunction]",Lo="[object Boolean]",Vo="[object Date]",OR="[object DOMException]",zc="[object Error]",Gc="[object Function]",Om="[object GeneratorFunction]",En="[object Map]",Mo="[object Number]",LR="[object Null]",nr="[object Object]",Lm="[object Promise]",VR="[object Proxy]",Fo="[object RegExp]",Tn="[object Set]",Uo="[object String]",Hc="[object Symbol]",MR="[object Undefined]",Bo="[object WeakMap]",FR="[object WeakSet]",qo="[object ArrayBuffer]",ps="[object DataView]",Uh="[object Float32Array]",Bh="[object Float64Array]",qh="[object Int8Array]",Wh="[object Int16Array]",$h="[object Int32Array]",zh="[object Uint8Array]",Gh="[object Uint8ClampedArray]",Hh="[object Uint16Array]",Kh="[object Uint32Array]",UR=/\b__p \+= '';/g,BR=/\b(__p \+=) '' \+/g,qR=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Vm=/&(?:amp|lt|gt|quot|#39);/g,Mm=/[&<>"']/g,WR=RegExp(Vm.source),$R=RegExp(Mm.source),zR=/<%-([\s\S]+?)%>/g,GR=/<%([\s\S]+?)%>/g,Fm=/<%=([\s\S]+?)%>/g,HR=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,KR=/^\w*$/,jR=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,jh=/[\\^$.*+?()[\]{}|]/g,QR=RegExp(jh.source),Qh=/^\s+/,YR=/\s/,JR=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,XR=/\{\n\/\* \[wrapped with (.+)\] \*/,ZR=/,? & /,eb=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,tb=/[()=,{}\[\]\/\s]/,nb=/\\(\\)?/g,rb=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Um=/\w*$/,ib=/^[-+]0x[0-9a-f]+$/i,sb=/^0b[01]+$/i,ob=/^\[object .+?Constructor\]$/,ab=/^0o[0-7]+$/i,cb=/^(?:0|[1-9]\d*)$/,ub=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Kc=/($^)/,lb=/['\n\r\u2028\u2029\\]/g,jc="\\ud800-\\udfff",hb="\\u0300-\\u036f",db="\\ufe20-\\ufe2f",fb="\\u20d0-\\u20ff",Bm=hb+db+fb,qm="\\u2700-\\u27bf",Wm="a-z\\xdf-\\xf6\\xf8-\\xff",pb="\\xac\\xb1\\xd7\\xf7",gb="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",mb="\\u2000-\\u206f",_b=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",$m="A-Z\\xc0-\\xd6\\xd8-\\xde",zm="\\ufe0e\\ufe0f",Gm=pb+gb+mb+_b,Yh="['’]",yb="["+jc+"]",Hm="["+Gm+"]",Qc="["+Bm+"]",Km="\\d+",vb="["+qm+"]",jm="["+Wm+"]",Qm="[^"+jc+Gm+Km+qm+Wm+$m+"]",Jh="\\ud83c[\\udffb-\\udfff]",Ib="(?:"+Qc+"|"+Jh+")",Ym="[^"+jc+"]",Xh="(?:\\ud83c[\\udde6-\\uddff]){2}",Zh="[\\ud800-\\udbff][\\udc00-\\udfff]",gs="["+$m+"]",Jm="\\u200d",Xm="(?:"+jm+"|"+Qm+")",wb="(?:"+gs+"|"+Qm+")",Zm="(?:"+Yh+"(?:d|ll|m|re|s|t|ve))?",e_="(?:"+Yh+"(?:D|LL|M|RE|S|T|VE))?",t_=Ib+"?",n_="["+zm+"]?",Eb="(?:"+Jm+"(?:"+[Ym,Xh,Zh].join("|")+")"+n_+t_+")*",Tb="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ab="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",r_=n_+t_+Eb,Rb="(?:"+[vb,Xh,Zh].join("|")+")"+r_,bb="(?:"+[Ym+Qc+"?",Qc,Xh,Zh,yb].join("|")+")",Sb=RegExp(Yh,"g"),Pb=RegExp(Qc,"g"),ed=RegExp(Jh+"(?="+Jh+")|"+bb+r_,"g"),Cb=RegExp([gs+"?"+jm+"+"+Zm+"(?="+[Hm,gs,"$"].join("|")+")",wb+"+"+e_+"(?="+[Hm,gs+Xm,"$"].join("|")+")",gs+"?"+Xm+"+"+Zm,gs+"+"+e_,Ab,Tb,Km,Rb].join("|"),"g"),Db=RegExp("["+Jm+jc+Bm+zm+"]"),kb=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,xb=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Nb=-1,Me={};Me[Uh]=Me[Bh]=Me[qh]=Me[Wh]=Me[$h]=Me[zh]=Me[Gh]=Me[Hh]=Me[Kh]=!0,Me[fs]=Me[$c]=Me[qo]=Me[Lo]=Me[ps]=Me[Vo]=Me[zc]=Me[Gc]=Me[En]=Me[Mo]=Me[nr]=Me[Fo]=Me[Tn]=Me[Uo]=Me[Bo]=!1;var Le={};Le[fs]=Le[$c]=Le[qo]=Le[ps]=Le[Lo]=Le[Vo]=Le[Uh]=Le[Bh]=Le[qh]=Le[Wh]=Le[$h]=Le[En]=Le[Mo]=Le[nr]=Le[Fo]=Le[Tn]=Le[Uo]=Le[Hc]=Le[zh]=Le[Gh]=Le[Hh]=Le[Kh]=!0,Le[zc]=Le[Gc]=Le[Bo]=!1;var Ob={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Lb={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Vb={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Mb={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Fb=parseFloat,Ub=parseInt,i_=typeof dr=="object"&&dr&&dr.Object===Object&&dr,Bb=typeof self=="object"&&self&&self.Object===Object&&self,wt=i_||Bb||Function("return this")(),td=e&&!e.nodeType&&e,_i=td&&!0&&n&&!n.nodeType&&n,s_=_i&&_i.exports===td,nd=s_&&i_.process,hn=function(){try{var A=_i&&_i.require&&_i.require("util").types;return A||nd&&nd.binding&&nd.binding("util")}catch{}}(),o_=hn&&hn.isArrayBuffer,a_=hn&&hn.isDate,c_=hn&&hn.isMap,u_=hn&&hn.isRegExp,l_=hn&&hn.isSet,h_=hn&&hn.isTypedArray;function en(A,D,P){switch(P.length){case 0:return A.call(D);case 1:return A.call(D,P[0]);case 2:return A.call(D,P[0],P[1]);case 3:return A.call(D,P[0],P[1],P[2])}return A.apply(D,P)}function qb(A,D,P,j){for(var ce=-1,Se=A==null?0:A.length;++ce<Se;){var lt=A[ce];D(j,lt,P(lt),A)}return j}function dn(A,D){for(var P=-1,j=A==null?0:A.length;++P<j&&D(A[P],P,A)!==!1;);return A}function Wb(A,D){for(var P=A==null?0:A.length;P--&&D(A[P],P,A)!==!1;);return A}function d_(A,D){for(var P=-1,j=A==null?0:A.length;++P<j;)if(!D(A[P],P,A))return!1;return!0}function Cr(A,D){for(var P=-1,j=A==null?0:A.length,ce=0,Se=[];++P<j;){var lt=A[P];D(lt,P,A)&&(Se[ce++]=lt)}return Se}function Yc(A,D){var P=A==null?0:A.length;return!!P&&ms(A,D,0)>-1}function rd(A,D,P){for(var j=-1,ce=A==null?0:A.length;++j<ce;)if(P(D,A[j]))return!0;return!1}function qe(A,D){for(var P=-1,j=A==null?0:A.length,ce=Array(j);++P<j;)ce[P]=D(A[P],P,A);return ce}function Dr(A,D){for(var P=-1,j=D.length,ce=A.length;++P<j;)A[ce+P]=D[P];return A}function id(A,D,P,j){var ce=-1,Se=A==null?0:A.length;for(j&&Se&&(P=A[++ce]);++ce<Se;)P=D(P,A[ce],ce,A);return P}function $b(A,D,P,j){var ce=A==null?0:A.length;for(j&&ce&&(P=A[--ce]);ce--;)P=D(P,A[ce],ce,A);return P}function sd(A,D){for(var P=-1,j=A==null?0:A.length;++P<j;)if(D(A[P],P,A))return!0;return!1}var zb=od("length");function Gb(A){return A.split("")}function Hb(A){return A.match(eb)||[]}function f_(A,D,P){var j;return P(A,function(ce,Se,lt){if(D(ce,Se,lt))return j=Se,!1}),j}function Jc(A,D,P,j){for(var ce=A.length,Se=P+(j?1:-1);j?Se--:++Se<ce;)if(D(A[Se],Se,A))return Se;return-1}function ms(A,D,P){return D===D?iS(A,D,P):Jc(A,p_,P)}function Kb(A,D,P,j){for(var ce=P-1,Se=A.length;++ce<Se;)if(j(A[ce],D))return ce;return-1}function p_(A){return A!==A}function g_(A,D){var P=A==null?0:A.length;return P?cd(A,D)/P:Wc}function od(A){return function(D){return D==null?t:D[A]}}function ad(A){return function(D){return A==null?t:A[D]}}function m_(A,D,P,j,ce){return ce(A,function(Se,lt,Oe){P=j?(j=!1,Se):D(P,Se,lt,Oe)}),P}function jb(A,D){var P=A.length;for(A.sort(D);P--;)A[P]=A[P].value;return A}function cd(A,D){for(var P,j=-1,ce=A.length;++j<ce;){var Se=D(A[j]);Se!==t&&(P=P===t?Se:P+Se)}return P}function ud(A,D){for(var P=-1,j=Array(A);++P<A;)j[P]=D(P);return j}function Qb(A,D){return qe(D,function(P){return[P,A[P]]})}function __(A){return A&&A.slice(0,w_(A)+1).replace(Qh,"")}function tn(A){return function(D){return A(D)}}function ld(A,D){return qe(D,function(P){return A[P]})}function Wo(A,D){return A.has(D)}function y_(A,D){for(var P=-1,j=A.length;++P<j&&ms(D,A[P],0)>-1;);return P}function v_(A,D){for(var P=A.length;P--&&ms(D,A[P],0)>-1;);return P}function Yb(A,D){for(var P=A.length,j=0;P--;)A[P]===D&&++j;return j}var Jb=ad(Ob),Xb=ad(Lb);function Zb(A){return"\\"+Mb[A]}function eS(A,D){return A==null?t:A[D]}function _s(A){return Db.test(A)}function tS(A){return kb.test(A)}function nS(A){for(var D,P=[];!(D=A.next()).done;)P.push(D.value);return P}function hd(A){var D=-1,P=Array(A.size);return A.forEach(function(j,ce){P[++D]=[ce,j]}),P}function I_(A,D){return function(P){return A(D(P))}}function kr(A,D){for(var P=-1,j=A.length,ce=0,Se=[];++P<j;){var lt=A[P];(lt===D||lt===p)&&(A[P]=p,Se[ce++]=P)}return Se}function Xc(A){var D=-1,P=Array(A.size);return A.forEach(function(j){P[++D]=j}),P}function rS(A){var D=-1,P=Array(A.size);return A.forEach(function(j){P[++D]=[j,j]}),P}function iS(A,D,P){for(var j=P-1,ce=A.length;++j<ce;)if(A[j]===D)return j;return-1}function sS(A,D,P){for(var j=P+1;j--;)if(A[j]===D)return j;return j}function ys(A){return _s(A)?aS(A):zb(A)}function An(A){return _s(A)?cS(A):Gb(A)}function w_(A){for(var D=A.length;D--&&YR.test(A.charAt(D)););return D}var oS=ad(Vb);function aS(A){for(var D=ed.lastIndex=0;ed.test(A);)++D;return D}function cS(A){return A.match(ed)||[]}function uS(A){return A.match(Cb)||[]}var lS=function A(D){D=D==null?wt:vs.defaults(wt.Object(),D,vs.pick(wt,xb));var P=D.Array,j=D.Date,ce=D.Error,Se=D.Function,lt=D.Math,Oe=D.Object,dd=D.RegExp,hS=D.String,fn=D.TypeError,Zc=P.prototype,dS=Se.prototype,Is=Oe.prototype,eu=D["__core-js_shared__"],tu=dS.toString,Ce=Is.hasOwnProperty,fS=0,E_=function(){var o=/[^.]+$/.exec(eu&&eu.keys&&eu.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),nu=Is.toString,pS=tu.call(Oe),gS=wt._,mS=dd("^"+tu.call(Ce).replace(jh,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ru=s_?D.Buffer:t,xr=D.Symbol,iu=D.Uint8Array,T_=ru?ru.allocUnsafe:t,su=I_(Oe.getPrototypeOf,Oe),A_=Oe.create,R_=Is.propertyIsEnumerable,ou=Zc.splice,b_=xr?xr.isConcatSpreadable:t,$o=xr?xr.iterator:t,yi=xr?xr.toStringTag:t,au=function(){try{var o=Ti(Oe,"defineProperty");return o({},"",{}),o}catch{}}(),_S=D.clearTimeout!==wt.clearTimeout&&D.clearTimeout,yS=j&&j.now!==wt.Date.now&&j.now,vS=D.setTimeout!==wt.setTimeout&&D.setTimeout,cu=lt.ceil,uu=lt.floor,fd=Oe.getOwnPropertySymbols,IS=ru?ru.isBuffer:t,S_=D.isFinite,wS=Zc.join,ES=I_(Oe.keys,Oe),ht=lt.max,Dt=lt.min,TS=j.now,AS=D.parseInt,P_=lt.random,RS=Zc.reverse,pd=Ti(D,"DataView"),zo=Ti(D,"Map"),gd=Ti(D,"Promise"),ws=Ti(D,"Set"),Go=Ti(D,"WeakMap"),Ho=Ti(Oe,"create"),lu=Go&&new Go,Es={},bS=Ai(pd),SS=Ai(zo),PS=Ai(gd),CS=Ai(ws),DS=Ai(Go),hu=xr?xr.prototype:t,Ko=hu?hu.valueOf:t,C_=hu?hu.toString:t;function _(o){if(Qe(o)&&!ue(o)&&!(o instanceof ve)){if(o instanceof pn)return o;if(Ce.call(o,"__wrapped__"))return Dy(o)}return new pn(o)}var Ts=function(){function o(){}return function(c){if(!He(c))return{};if(A_)return A_(c);o.prototype=c;var u=new o;return o.prototype=t,u}}();function du(){}function pn(o,c){this.__wrapped__=o,this.__actions__=[],this.__chain__=!!c,this.__index__=0,this.__values__=t}_.templateSettings={escape:zR,evaluate:GR,interpolate:Fm,variable:"",imports:{_}},_.prototype=du.prototype,_.prototype.constructor=_,pn.prototype=Ts(du.prototype),pn.prototype.constructor=pn;function ve(o){this.__wrapped__=o,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=xn,this.__views__=[]}function kS(){var o=new ve(this.__wrapped__);return o.__actions__=Gt(this.__actions__),o.__dir__=this.__dir__,o.__filtered__=this.__filtered__,o.__iteratees__=Gt(this.__iteratees__),o.__takeCount__=this.__takeCount__,o.__views__=Gt(this.__views__),o}function xS(){if(this.__filtered__){var o=new ve(this);o.__dir__=-1,o.__filtered__=!0}else o=this.clone(),o.__dir__*=-1;return o}function NS(){var o=this.__wrapped__.value(),c=this.__dir__,u=ue(o),d=c<0,g=u?o.length:0,y=GP(0,g,this.__views__),v=y.start,T=y.end,R=T-v,k=d?T:v-1,x=this.__iteratees__,V=x.length,z=0,Q=Dt(R,this.__takeCount__);if(!u||!d&&g==R&&Q==R)return Z_(o,this.__actions__);var re=[];e:for(;R--&&z<Q;){k+=c;for(var ge=-1,ie=o[k];++ge<V;){var _e=x[ge],we=_e.iteratee,sn=_e.type,Mt=we(ie);if(sn==rt)ie=Mt;else if(!Mt){if(sn==Te)continue e;break e}}re[z++]=ie}return re}ve.prototype=Ts(du.prototype),ve.prototype.constructor=ve;function vi(o){var c=-1,u=o==null?0:o.length;for(this.clear();++c<u;){var d=o[c];this.set(d[0],d[1])}}function OS(){this.__data__=Ho?Ho(null):{},this.size=0}function LS(o){var c=this.has(o)&&delete this.__data__[o];return this.size-=c?1:0,c}function VS(o){var c=this.__data__;if(Ho){var u=c[o];return u===h?t:u}return Ce.call(c,o)?c[o]:t}function MS(o){var c=this.__data__;return Ho?c[o]!==t:Ce.call(c,o)}function FS(o,c){var u=this.__data__;return this.size+=this.has(o)?0:1,u[o]=Ho&&c===t?h:c,this}vi.prototype.clear=OS,vi.prototype.delete=LS,vi.prototype.get=VS,vi.prototype.has=MS,vi.prototype.set=FS;function rr(o){var c=-1,u=o==null?0:o.length;for(this.clear();++c<u;){var d=o[c];this.set(d[0],d[1])}}function US(){this.__data__=[],this.size=0}function BS(o){var c=this.__data__,u=fu(c,o);if(u<0)return!1;var d=c.length-1;return u==d?c.pop():ou.call(c,u,1),--this.size,!0}function qS(o){var c=this.__data__,u=fu(c,o);return u<0?t:c[u][1]}function WS(o){return fu(this.__data__,o)>-1}function $S(o,c){var u=this.__data__,d=fu(u,o);return d<0?(++this.size,u.push([o,c])):u[d][1]=c,this}rr.prototype.clear=US,rr.prototype.delete=BS,rr.prototype.get=qS,rr.prototype.has=WS,rr.prototype.set=$S;function ir(o){var c=-1,u=o==null?0:o.length;for(this.clear();++c<u;){var d=o[c];this.set(d[0],d[1])}}function zS(){this.size=0,this.__data__={hash:new vi,map:new(zo||rr),string:new vi}}function GS(o){var c=Ru(this,o).delete(o);return this.size-=c?1:0,c}function HS(o){return Ru(this,o).get(o)}function KS(o){return Ru(this,o).has(o)}function jS(o,c){var u=Ru(this,o),d=u.size;return u.set(o,c),this.size+=u.size==d?0:1,this}ir.prototype.clear=zS,ir.prototype.delete=GS,ir.prototype.get=HS,ir.prototype.has=KS,ir.prototype.set=jS;function Ii(o){var c=-1,u=o==null?0:o.length;for(this.__data__=new ir;++c<u;)this.add(o[c])}function QS(o){return this.__data__.set(o,h),this}function YS(o){return this.__data__.has(o)}Ii.prototype.add=Ii.prototype.push=QS,Ii.prototype.has=YS;function Rn(o){var c=this.__data__=new rr(o);this.size=c.size}function JS(){this.__data__=new rr,this.size=0}function XS(o){var c=this.__data__,u=c.delete(o);return this.size=c.size,u}function ZS(o){return this.__data__.get(o)}function eP(o){return this.__data__.has(o)}function tP(o,c){var u=this.__data__;if(u instanceof rr){var d=u.__data__;if(!zo||d.length<i-1)return d.push([o,c]),this.size=++u.size,this;u=this.__data__=new ir(d)}return u.set(o,c),this.size=u.size,this}Rn.prototype.clear=JS,Rn.prototype.delete=XS,Rn.prototype.get=ZS,Rn.prototype.has=eP,Rn.prototype.set=tP;function D_(o,c){var u=ue(o),d=!u&&Ri(o),g=!u&&!d&&Mr(o),y=!u&&!d&&!g&&Ss(o),v=u||d||g||y,T=v?ud(o.length,hS):[],R=T.length;for(var k in o)(c||Ce.call(o,k))&&!(v&&(k=="length"||g&&(k=="offset"||k=="parent")||y&&(k=="buffer"||k=="byteLength"||k=="byteOffset")||cr(k,R)))&&T.push(k);return T}function k_(o){var c=o.length;return c?o[bd(0,c-1)]:t}function nP(o,c){return bu(Gt(o),wi(c,0,o.length))}function rP(o){return bu(Gt(o))}function md(o,c,u){(u!==t&&!bn(o[c],u)||u===t&&!(c in o))&&sr(o,c,u)}function jo(o,c,u){var d=o[c];(!(Ce.call(o,c)&&bn(d,u))||u===t&&!(c in o))&&sr(o,c,u)}function fu(o,c){for(var u=o.length;u--;)if(bn(o[u][0],c))return u;return-1}function iP(o,c,u,d){return Nr(o,function(g,y,v){c(d,g,u(g),v)}),d}function x_(o,c){return o&&On(c,ft(c),o)}function sP(o,c){return o&&On(c,Kt(c),o)}function sr(o,c,u){c=="__proto__"&&au?au(o,c,{configurable:!0,enumerable:!0,value:u,writable:!0}):o[c]=u}function _d(o,c){for(var u=-1,d=c.length,g=P(d),y=o==null;++u<d;)g[u]=y?t:Jd(o,c[u]);return g}function wi(o,c,u){return o===o&&(u!==t&&(o=o<=u?o:u),c!==t&&(o=o>=c?o:c)),o}function gn(o,c,u,d,g,y){var v,T=c&m,R=c&w,k=c&b;if(u&&(v=g?u(o,d,g,y):u(o)),v!==t)return v;if(!He(o))return o;var x=ue(o);if(x){if(v=KP(o),!T)return Gt(o,v)}else{var V=kt(o),z=V==Gc||V==Om;if(Mr(o))return ny(o,T);if(V==nr||V==fs||z&&!g){if(v=R||z?{}:wy(o),!T)return R?VP(o,sP(v,o)):LP(o,x_(v,o))}else{if(!Le[V])return g?o:{};v=jP(o,V,T)}}y||(y=new Rn);var Q=y.get(o);if(Q)return Q;y.set(o,v),Yy(o)?o.forEach(function(ie){v.add(gn(ie,c,u,ie,o,y))}):jy(o)&&o.forEach(function(ie,_e){v.set(_e,gn(ie,c,u,_e,o,y))});var re=k?R?Md:Vd:R?Kt:ft,ge=x?t:re(o);return dn(ge||o,function(ie,_e){ge&&(_e=ie,ie=o[_e]),jo(v,_e,gn(ie,c,u,_e,o,y))}),v}function oP(o){var c=ft(o);return function(u){return N_(u,o,c)}}function N_(o,c,u){var d=u.length;if(o==null)return!d;for(o=Oe(o);d--;){var g=u[d],y=c[g],v=o[g];if(v===t&&!(g in o)||!y(v))return!1}return!0}function O_(o,c,u){if(typeof o!="function")throw new fn(a);return ta(function(){o.apply(t,u)},c)}function Qo(o,c,u,d){var g=-1,y=Yc,v=!0,T=o.length,R=[],k=c.length;if(!T)return R;u&&(c=qe(c,tn(u))),d?(y=rd,v=!1):c.length>=i&&(y=Wo,v=!1,c=new Ii(c));e:for(;++g<T;){var x=o[g],V=u==null?x:u(x);if(x=d||x!==0?x:0,v&&V===V){for(var z=k;z--;)if(c[z]===V)continue e;R.push(x)}else y(c,V,d)||R.push(x)}return R}var Nr=ay(Nn),L_=ay(vd,!0);function aP(o,c){var u=!0;return Nr(o,function(d,g,y){return u=!!c(d,g,y),u}),u}function pu(o,c,u){for(var d=-1,g=o.length;++d<g;){var y=o[d],v=c(y);if(v!=null&&(T===t?v===v&&!rn(v):u(v,T)))var T=v,R=y}return R}function cP(o,c,u,d){var g=o.length;for(u=fe(u),u<0&&(u=-u>g?0:g+u),d=d===t||d>g?g:fe(d),d<0&&(d+=g),d=u>d?0:Xy(d);u<d;)o[u++]=c;return o}function V_(o,c){var u=[];return Nr(o,function(d,g,y){c(d,g,y)&&u.push(d)}),u}function Et(o,c,u,d,g){var y=-1,v=o.length;for(u||(u=YP),g||(g=[]);++y<v;){var T=o[y];c>0&&u(T)?c>1?Et(T,c-1,u,d,g):Dr(g,T):d||(g[g.length]=T)}return g}var yd=cy(),M_=cy(!0);function Nn(o,c){return o&&yd(o,c,ft)}function vd(o,c){return o&&M_(o,c,ft)}function gu(o,c){return Cr(c,function(u){return ur(o[u])})}function Ei(o,c){c=Lr(c,o);for(var u=0,d=c.length;o!=null&&u<d;)o=o[Ln(c[u++])];return u&&u==d?o:t}function F_(o,c,u){var d=c(o);return ue(o)?d:Dr(d,u(o))}function Lt(o){return o==null?o===t?MR:LR:yi&&yi in Oe(o)?zP(o):rC(o)}function Id(o,c){return o>c}function uP(o,c){return o!=null&&Ce.call(o,c)}function lP(o,c){return o!=null&&c in Oe(o)}function hP(o,c,u){return o>=Dt(c,u)&&o<ht(c,u)}function wd(o,c,u){for(var d=u?rd:Yc,g=o[0].length,y=o.length,v=y,T=P(y),R=1/0,k=[];v--;){var x=o[v];v&&c&&(x=qe(x,tn(c))),R=Dt(x.length,R),T[v]=!u&&(c||g>=120&&x.length>=120)?new Ii(v&&x):t}x=o[0];var V=-1,z=T[0];e:for(;++V<g&&k.length<R;){var Q=x[V],re=c?c(Q):Q;if(Q=u||Q!==0?Q:0,!(z?Wo(z,re):d(k,re,u))){for(v=y;--v;){var ge=T[v];if(!(ge?Wo(ge,re):d(o[v],re,u)))continue e}z&&z.push(re),k.push(Q)}}return k}function dP(o,c,u,d){return Nn(o,function(g,y,v){c(d,u(g),y,v)}),d}function Yo(o,c,u){c=Lr(c,o),o=Ry(o,c);var d=o==null?o:o[Ln(_n(c))];return d==null?t:en(d,o,u)}function U_(o){return Qe(o)&&Lt(o)==fs}function fP(o){return Qe(o)&&Lt(o)==qo}function pP(o){return Qe(o)&&Lt(o)==Vo}function Jo(o,c,u,d,g){return o===c?!0:o==null||c==null||!Qe(o)&&!Qe(c)?o!==o&&c!==c:gP(o,c,u,d,Jo,g)}function gP(o,c,u,d,g,y){var v=ue(o),T=ue(c),R=v?$c:kt(o),k=T?$c:kt(c);R=R==fs?nr:R,k=k==fs?nr:k;var x=R==nr,V=k==nr,z=R==k;if(z&&Mr(o)){if(!Mr(c))return!1;v=!0,x=!1}if(z&&!x)return y||(y=new Rn),v||Ss(o)?yy(o,c,u,d,g,y):WP(o,c,R,u,d,g,y);if(!(u&q)){var Q=x&&Ce.call(o,"__wrapped__"),re=V&&Ce.call(c,"__wrapped__");if(Q||re){var ge=Q?o.value():o,ie=re?c.value():c;return y||(y=new Rn),g(ge,ie,u,d,y)}}return z?(y||(y=new Rn),$P(o,c,u,d,g,y)):!1}function mP(o){return Qe(o)&&kt(o)==En}function Ed(o,c,u,d){var g=u.length,y=g,v=!d;if(o==null)return!y;for(o=Oe(o);g--;){var T=u[g];if(v&&T[2]?T[1]!==o[T[0]]:!(T[0]in o))return!1}for(;++g<y;){T=u[g];var R=T[0],k=o[R],x=T[1];if(v&&T[2]){if(k===t&&!(R in o))return!1}else{var V=new Rn;if(d)var z=d(k,x,R,o,c,V);if(!(z===t?Jo(x,k,q|U,d,V):z))return!1}}return!0}function B_(o){if(!He(o)||XP(o))return!1;var c=ur(o)?mS:ob;return c.test(Ai(o))}function _P(o){return Qe(o)&&Lt(o)==Fo}function yP(o){return Qe(o)&&kt(o)==Tn}function vP(o){return Qe(o)&&xu(o.length)&&!!Me[Lt(o)]}function q_(o){return typeof o=="function"?o:o==null?jt:typeof o=="object"?ue(o)?z_(o[0],o[1]):$_(o):uv(o)}function Td(o){if(!ea(o))return ES(o);var c=[];for(var u in Oe(o))Ce.call(o,u)&&u!="constructor"&&c.push(u);return c}function IP(o){if(!He(o))return nC(o);var c=ea(o),u=[];for(var d in o)d=="constructor"&&(c||!Ce.call(o,d))||u.push(d);return u}function Ad(o,c){return o<c}function W_(o,c){var u=-1,d=Ht(o)?P(o.length):[];return Nr(o,function(g,y,v){d[++u]=c(g,y,v)}),d}function $_(o){var c=Ud(o);return c.length==1&&c[0][2]?Ty(c[0][0],c[0][1]):function(u){return u===o||Ed(u,o,c)}}function z_(o,c){return qd(o)&&Ey(c)?Ty(Ln(o),c):function(u){var d=Jd(u,o);return d===t&&d===c?Xd(u,o):Jo(c,d,q|U)}}function mu(o,c,u,d,g){o!==c&&yd(c,function(y,v){if(g||(g=new Rn),He(y))wP(o,c,v,u,mu,d,g);else{var T=d?d($d(o,v),y,v+"",o,c,g):t;T===t&&(T=y),md(o,v,T)}},Kt)}function wP(o,c,u,d,g,y,v){var T=$d(o,u),R=$d(c,u),k=v.get(R);if(k){md(o,u,k);return}var x=y?y(T,R,u+"",o,c,v):t,V=x===t;if(V){var z=ue(R),Q=!z&&Mr(R),re=!z&&!Q&&Ss(R);x=R,z||Q||re?ue(T)?x=T:it(T)?x=Gt(T):Q?(V=!1,x=ny(R,!0)):re?(V=!1,x=ry(R,!0)):x=[]:na(R)||Ri(R)?(x=T,Ri(T)?x=Zy(T):(!He(T)||ur(T))&&(x=wy(R))):V=!1}V&&(v.set(R,x),g(x,R,d,y,v),v.delete(R)),md(o,u,x)}function G_(o,c){var u=o.length;if(u)return c+=c<0?u:0,cr(c,u)?o[c]:t}function H_(o,c,u){c.length?c=qe(c,function(y){return ue(y)?function(v){return Ei(v,y.length===1?y[0]:y)}:y}):c=[jt];var d=-1;c=qe(c,tn(ne()));var g=W_(o,function(y,v,T){var R=qe(c,function(k){return k(y)});return{criteria:R,index:++d,value:y}});return jb(g,function(y,v){return OP(y,v,u)})}function EP(o,c){return K_(o,c,function(u,d){return Xd(o,d)})}function K_(o,c,u){for(var d=-1,g=c.length,y={};++d<g;){var v=c[d],T=Ei(o,v);u(T,v)&&Xo(y,Lr(v,o),T)}return y}function TP(o){return function(c){return Ei(c,o)}}function Rd(o,c,u,d){var g=d?Kb:ms,y=-1,v=c.length,T=o;for(o===c&&(c=Gt(c)),u&&(T=qe(o,tn(u)));++y<v;)for(var R=0,k=c[y],x=u?u(k):k;(R=g(T,x,R,d))>-1;)T!==o&&ou.call(T,R,1),ou.call(o,R,1);return o}function j_(o,c){for(var u=o?c.length:0,d=u-1;u--;){var g=c[u];if(u==d||g!==y){var y=g;cr(g)?ou.call(o,g,1):Cd(o,g)}}return o}function bd(o,c){return o+uu(P_()*(c-o+1))}function AP(o,c,u,d){for(var g=-1,y=ht(cu((c-o)/(u||1)),0),v=P(y);y--;)v[d?y:++g]=o,o+=u;return v}function Sd(o,c){var u="";if(!o||c<1||c>Pr)return u;do c%2&&(u+=o),c=uu(c/2),c&&(o+=o);while(c);return u}function me(o,c){return zd(Ay(o,c,jt),o+"")}function RP(o){return k_(Ps(o))}function bP(o,c){var u=Ps(o);return bu(u,wi(c,0,u.length))}function Xo(o,c,u,d){if(!He(o))return o;c=Lr(c,o);for(var g=-1,y=c.length,v=y-1,T=o;T!=null&&++g<y;){var R=Ln(c[g]),k=u;if(R==="__proto__"||R==="constructor"||R==="prototype")return o;if(g!=v){var x=T[R];k=d?d(x,R,T):t,k===t&&(k=He(x)?x:cr(c[g+1])?[]:{})}jo(T,R,k),T=T[R]}return o}var Q_=lu?function(o,c){return lu.set(o,c),o}:jt,SP=au?function(o,c){return au(o,"toString",{configurable:!0,enumerable:!1,value:ef(c),writable:!0})}:jt;function PP(o){return bu(Ps(o))}function mn(o,c,u){var d=-1,g=o.length;c<0&&(c=-c>g?0:g+c),u=u>g?g:u,u<0&&(u+=g),g=c>u?0:u-c>>>0,c>>>=0;for(var y=P(g);++d<g;)y[d]=o[d+c];return y}function CP(o,c){var u;return Nr(o,function(d,g,y){return u=c(d,g,y),!u}),!!u}function _u(o,c,u){var d=0,g=o==null?d:o.length;if(typeof c=="number"&&c===c&&g<=kR){for(;d<g;){var y=d+g>>>1,v=o[y];v!==null&&!rn(v)&&(u?v<=c:v<c)?d=y+1:g=y}return g}return Pd(o,c,jt,u)}function Pd(o,c,u,d){var g=0,y=o==null?0:o.length;if(y===0)return 0;c=u(c);for(var v=c!==c,T=c===null,R=rn(c),k=c===t;g<y;){var x=uu((g+y)/2),V=u(o[x]),z=V!==t,Q=V===null,re=V===V,ge=rn(V);if(v)var ie=d||re;else k?ie=re&&(d||z):T?ie=re&&z&&(d||!Q):R?ie=re&&z&&!Q&&(d||!ge):Q||ge?ie=!1:ie=d?V<=c:V<c;ie?g=x+1:y=x}return Dt(y,DR)}function Y_(o,c){for(var u=-1,d=o.length,g=0,y=[];++u<d;){var v=o[u],T=c?c(v):v;if(!u||!bn(T,R)){var R=T;y[g++]=v===0?0:v}}return y}function J_(o){return typeof o=="number"?o:rn(o)?Wc:+o}function nn(o){if(typeof o=="string")return o;if(ue(o))return qe(o,nn)+"";if(rn(o))return C_?C_.call(o):"";var c=o+"";return c=="0"&&1/o==-mi?"-0":c}function Or(o,c,u){var d=-1,g=Yc,y=o.length,v=!0,T=[],R=T;if(u)v=!1,g=rd;else if(y>=i){var k=c?null:BP(o);if(k)return Xc(k);v=!1,g=Wo,R=new Ii}else R=c?[]:T;e:for(;++d<y;){var x=o[d],V=c?c(x):x;if(x=u||x!==0?x:0,v&&V===V){for(var z=R.length;z--;)if(R[z]===V)continue e;c&&R.push(V),T.push(x)}else g(R,V,u)||(R!==T&&R.push(V),T.push(x))}return T}function Cd(o,c){return c=Lr(c,o),o=Ry(o,c),o==null||delete o[Ln(_n(c))]}function X_(o,c,u,d){return Xo(o,c,u(Ei(o,c)),d)}function yu(o,c,u,d){for(var g=o.length,y=d?g:-1;(d?y--:++y<g)&&c(o[y],y,o););return u?mn(o,d?0:y,d?y+1:g):mn(o,d?y+1:0,d?g:y)}function Z_(o,c){var u=o;return u instanceof ve&&(u=u.value()),id(c,function(d,g){return g.func.apply(g.thisArg,Dr([d],g.args))},u)}function Dd(o,c,u){var d=o.length;if(d<2)return d?Or(o[0]):[];for(var g=-1,y=P(d);++g<d;)for(var v=o[g],T=-1;++T<d;)T!=g&&(y[g]=Qo(y[g]||v,o[T],c,u));return Or(Et(y,1),c,u)}function ey(o,c,u){for(var d=-1,g=o.length,y=c.length,v={};++d<g;){var T=d<y?c[d]:t;u(v,o[d],T)}return v}function kd(o){return it(o)?o:[]}function xd(o){return typeof o=="function"?o:jt}function Lr(o,c){return ue(o)?o:qd(o,c)?[o]:Cy(Pe(o))}var DP=me;function Vr(o,c,u){var d=o.length;return u=u===t?d:u,!c&&u>=d?o:mn(o,c,u)}var ty=_S||function(o){return wt.clearTimeout(o)};function ny(o,c){if(c)return o.slice();var u=o.length,d=T_?T_(u):new o.constructor(u);return o.copy(d),d}function Nd(o){var c=new o.constructor(o.byteLength);return new iu(c).set(new iu(o)),c}function kP(o,c){var u=c?Nd(o.buffer):o.buffer;return new o.constructor(u,o.byteOffset,o.byteLength)}function xP(o){var c=new o.constructor(o.source,Um.exec(o));return c.lastIndex=o.lastIndex,c}function NP(o){return Ko?Oe(Ko.call(o)):{}}function ry(o,c){var u=c?Nd(o.buffer):o.buffer;return new o.constructor(u,o.byteOffset,o.length)}function iy(o,c){if(o!==c){var u=o!==t,d=o===null,g=o===o,y=rn(o),v=c!==t,T=c===null,R=c===c,k=rn(c);if(!T&&!k&&!y&&o>c||y&&v&&R&&!T&&!k||d&&v&&R||!u&&R||!g)return 1;if(!d&&!y&&!k&&o<c||k&&u&&g&&!d&&!y||T&&u&&g||!v&&g||!R)return-1}return 0}function OP(o,c,u){for(var d=-1,g=o.criteria,y=c.criteria,v=g.length,T=u.length;++d<v;){var R=iy(g[d],y[d]);if(R){if(d>=T)return R;var k=u[d];return R*(k=="desc"?-1:1)}}return o.index-c.index}function sy(o,c,u,d){for(var g=-1,y=o.length,v=u.length,T=-1,R=c.length,k=ht(y-v,0),x=P(R+k),V=!d;++T<R;)x[T]=c[T];for(;++g<v;)(V||g<y)&&(x[u[g]]=o[g]);for(;k--;)x[T++]=o[g++];return x}function oy(o,c,u,d){for(var g=-1,y=o.length,v=-1,T=u.length,R=-1,k=c.length,x=ht(y-T,0),V=P(x+k),z=!d;++g<x;)V[g]=o[g];for(var Q=g;++R<k;)V[Q+R]=c[R];for(;++v<T;)(z||g<y)&&(V[Q+u[v]]=o[g++]);return V}function Gt(o,c){var u=-1,d=o.length;for(c||(c=P(d));++u<d;)c[u]=o[u];return c}function On(o,c,u,d){var g=!u;u||(u={});for(var y=-1,v=c.length;++y<v;){var T=c[y],R=d?d(u[T],o[T],T,u,o):t;R===t&&(R=o[T]),g?sr(u,T,R):jo(u,T,R)}return u}function LP(o,c){return On(o,Bd(o),c)}function VP(o,c){return On(o,vy(o),c)}function vu(o,c){return function(u,d){var g=ue(u)?qb:iP,y=c?c():{};return g(u,o,ne(d,2),y)}}function As(o){return me(function(c,u){var d=-1,g=u.length,y=g>1?u[g-1]:t,v=g>2?u[2]:t;for(y=o.length>3&&typeof y=="function"?(g--,y):t,v&&Vt(u[0],u[1],v)&&(y=g<3?t:y,g=1),c=Oe(c);++d<g;){var T=u[d];T&&o(c,T,d,y)}return c})}function ay(o,c){return function(u,d){if(u==null)return u;if(!Ht(u))return o(u,d);for(var g=u.length,y=c?g:-1,v=Oe(u);(c?y--:++y<g)&&d(v[y],y,v)!==!1;);return u}}function cy(o){return function(c,u,d){for(var g=-1,y=Oe(c),v=d(c),T=v.length;T--;){var R=v[o?T:++g];if(u(y[R],R,y)===!1)break}return c}}function MP(o,c,u){var d=c&F,g=Zo(o);function y(){var v=this&&this!==wt&&this instanceof y?g:o;return v.apply(d?u:this,arguments)}return y}function uy(o){return function(c){c=Pe(c);var u=_s(c)?An(c):t,d=u?u[0]:c.charAt(0),g=u?Vr(u,1).join(""):c.slice(1);return d[o]()+g}}function Rs(o){return function(c){return id(av(ov(c).replace(Sb,"")),o,"")}}function Zo(o){return function(){var c=arguments;switch(c.length){case 0:return new o;case 1:return new o(c[0]);case 2:return new o(c[0],c[1]);case 3:return new o(c[0],c[1],c[2]);case 4:return new o(c[0],c[1],c[2],c[3]);case 5:return new o(c[0],c[1],c[2],c[3],c[4]);case 6:return new o(c[0],c[1],c[2],c[3],c[4],c[5]);case 7:return new o(c[0],c[1],c[2],c[3],c[4],c[5],c[6])}var u=Ts(o.prototype),d=o.apply(u,c);return He(d)?d:u}}function FP(o,c,u){var d=Zo(o);function g(){for(var y=arguments.length,v=P(y),T=y,R=bs(g);T--;)v[T]=arguments[T];var k=y<3&&v[0]!==R&&v[y-1]!==R?[]:kr(v,R);if(y-=k.length,y<u)return py(o,c,Iu,g.placeholder,t,v,k,t,t,u-y);var x=this&&this!==wt&&this instanceof g?d:o;return en(x,this,v)}return g}function ly(o){return function(c,u,d){var g=Oe(c);if(!Ht(c)){var y=ne(u,3);c=ft(c),u=function(T){return y(g[T],T,g)}}var v=o(c,u,d);return v>-1?g[y?c[v]:v]:t}}function hy(o){return ar(function(c){var u=c.length,d=u,g=pn.prototype.thru;for(o&&c.reverse();d--;){var y=c[d];if(typeof y!="function")throw new fn(a);if(g&&!v&&Au(y)=="wrapper")var v=new pn([],!0)}for(d=v?d:u;++d<u;){y=c[d];var T=Au(y),R=T=="wrapper"?Fd(y):t;R&&Wd(R[0])&&R[1]==(N|ee|he|I)&&!R[4].length&&R[9]==1?v=v[Au(R[0])].apply(v,R[3]):v=y.length==1&&Wd(y)?v[T]():v.thru(y)}return function(){var k=arguments,x=k[0];if(v&&k.length==1&&ue(x))return v.plant(x).value();for(var V=0,z=u?c[V].apply(this,k):x;++V<u;)z=c[V].call(this,z);return z}})}function Iu(o,c,u,d,g,y,v,T,R,k){var x=c&N,V=c&F,z=c&Z,Q=c&(ee|Ee),re=c&E,ge=z?t:Zo(o);function ie(){for(var _e=arguments.length,we=P(_e),sn=_e;sn--;)we[sn]=arguments[sn];if(Q)var Mt=bs(ie),on=Yb(we,Mt);if(d&&(we=sy(we,d,g,Q)),y&&(we=oy(we,y,v,Q)),_e-=on,Q&&_e<k){var st=kr(we,Mt);return py(o,c,Iu,ie.placeholder,u,we,st,T,R,k-_e)}var Sn=V?u:this,hr=z?Sn[o]:o;return _e=we.length,T?we=iC(we,T):re&&_e>1&&we.reverse(),x&&R<_e&&(we.length=R),this&&this!==wt&&this instanceof ie&&(hr=ge||Zo(hr)),hr.apply(Sn,we)}return ie}function dy(o,c){return function(u,d){return dP(u,o,c(d),{})}}function wu(o,c){return function(u,d){var g;if(u===t&&d===t)return c;if(u!==t&&(g=u),d!==t){if(g===t)return d;typeof u=="string"||typeof d=="string"?(u=nn(u),d=nn(d)):(u=J_(u),d=J_(d)),g=o(u,d)}return g}}function Od(o){return ar(function(c){return c=qe(c,tn(ne())),me(function(u){var d=this;return o(c,function(g){return en(g,d,u)})})})}function Eu(o,c){c=c===t?" ":nn(c);var u=c.length;if(u<2)return u?Sd(c,o):c;var d=Sd(c,cu(o/ys(c)));return _s(c)?Vr(An(d),0,o).join(""):d.slice(0,o)}function UP(o,c,u,d){var g=c&F,y=Zo(o);function v(){for(var T=-1,R=arguments.length,k=-1,x=d.length,V=P(x+R),z=this&&this!==wt&&this instanceof v?y:o;++k<x;)V[k]=d[k];for(;R--;)V[k++]=arguments[++T];return en(z,g?u:this,V)}return v}function fy(o){return function(c,u,d){return d&&typeof d!="number"&&Vt(c,u,d)&&(u=d=t),c=lr(c),u===t?(u=c,c=0):u=lr(u),d=d===t?c<u?1:-1:lr(d),AP(c,u,d,o)}}function Tu(o){return function(c,u){return typeof c=="string"&&typeof u=="string"||(c=yn(c),u=yn(u)),o(c,u)}}function py(o,c,u,d,g,y,v,T,R,k){var x=c&ee,V=x?v:t,z=x?t:v,Q=x?y:t,re=x?t:y;c|=x?he:L,c&=~(x?L:he),c&pe||(c&=~(F|Z));var ge=[o,c,g,Q,V,re,z,T,R,k],ie=u.apply(t,ge);return Wd(o)&&by(ie,ge),ie.placeholder=d,Sy(ie,o,c)}function Ld(o){var c=lt[o];return function(u,d){if(u=yn(u),d=d==null?0:Dt(fe(d),292),d&&S_(u)){var g=(Pe(u)+"e").split("e"),y=c(g[0]+"e"+(+g[1]+d));return g=(Pe(y)+"e").split("e"),+(g[0]+"e"+(+g[1]-d))}return c(u)}}var BP=ws&&1/Xc(new ws([,-0]))[1]==mi?function(o){return new ws(o)}:rf;function gy(o){return function(c){var u=kt(c);return u==En?hd(c):u==Tn?rS(c):Qb(c,o(c))}}function or(o,c,u,d,g,y,v,T){var R=c&Z;if(!R&&typeof o!="function")throw new fn(a);var k=d?d.length:0;if(k||(c&=~(he|L),d=g=t),v=v===t?v:ht(fe(v),0),T=T===t?T:fe(T),k-=g?g.length:0,c&L){var x=d,V=g;d=g=t}var z=R?t:Fd(o),Q=[o,c,u,d,g,x,V,y,v,T];if(z&&tC(Q,z),o=Q[0],c=Q[1],u=Q[2],d=Q[3],g=Q[4],T=Q[9]=Q[9]===t?R?0:o.length:ht(Q[9]-k,0),!T&&c&(ee|Ee)&&(c&=~(ee|Ee)),!c||c==F)var re=MP(o,c,u);else c==ee||c==Ee?re=FP(o,c,T):(c==he||c==(F|he))&&!g.length?re=UP(o,c,u,d):re=Iu.apply(t,Q);var ge=z?Q_:by;return Sy(ge(re,Q),o,c)}function my(o,c,u,d){return o===t||bn(o,Is[u])&&!Ce.call(d,u)?c:o}function _y(o,c,u,d,g,y){return He(o)&&He(c)&&(y.set(c,o),mu(o,c,t,_y,y),y.delete(c)),o}function qP(o){return na(o)?t:o}function yy(o,c,u,d,g,y){var v=u&q,T=o.length,R=c.length;if(T!=R&&!(v&&R>T))return!1;var k=y.get(o),x=y.get(c);if(k&&x)return k==c&&x==o;var V=-1,z=!0,Q=u&U?new Ii:t;for(y.set(o,c),y.set(c,o);++V<T;){var re=o[V],ge=c[V];if(d)var ie=v?d(ge,re,V,c,o,y):d(re,ge,V,o,c,y);if(ie!==t){if(ie)continue;z=!1;break}if(Q){if(!sd(c,function(_e,we){if(!Wo(Q,we)&&(re===_e||g(re,_e,u,d,y)))return Q.push(we)})){z=!1;break}}else if(!(re===ge||g(re,ge,u,d,y))){z=!1;break}}return y.delete(o),y.delete(c),z}function WP(o,c,u,d,g,y,v){switch(u){case ps:if(o.byteLength!=c.byteLength||o.byteOffset!=c.byteOffset)return!1;o=o.buffer,c=c.buffer;case qo:return!(o.byteLength!=c.byteLength||!y(new iu(o),new iu(c)));case Lo:case Vo:case Mo:return bn(+o,+c);case zc:return o.name==c.name&&o.message==c.message;case Fo:case Uo:return o==c+"";case En:var T=hd;case Tn:var R=d&q;if(T||(T=Xc),o.size!=c.size&&!R)return!1;var k=v.get(o);if(k)return k==c;d|=U,v.set(o,c);var x=yy(T(o),T(c),d,g,y,v);return v.delete(o),x;case Hc:if(Ko)return Ko.call(o)==Ko.call(c)}return!1}function $P(o,c,u,d,g,y){var v=u&q,T=Vd(o),R=T.length,k=Vd(c),x=k.length;if(R!=x&&!v)return!1;for(var V=R;V--;){var z=T[V];if(!(v?z in c:Ce.call(c,z)))return!1}var Q=y.get(o),re=y.get(c);if(Q&&re)return Q==c&&re==o;var ge=!0;y.set(o,c),y.set(c,o);for(var ie=v;++V<R;){z=T[V];var _e=o[z],we=c[z];if(d)var sn=v?d(we,_e,z,c,o,y):d(_e,we,z,o,c,y);if(!(sn===t?_e===we||g(_e,we,u,d,y):sn)){ge=!1;break}ie||(ie=z=="constructor")}if(ge&&!ie){var Mt=o.constructor,on=c.constructor;Mt!=on&&"constructor"in o&&"constructor"in c&&!(typeof Mt=="function"&&Mt instanceof Mt&&typeof on=="function"&&on instanceof on)&&(ge=!1)}return y.delete(o),y.delete(c),ge}function ar(o){return zd(Ay(o,t,Ny),o+"")}function Vd(o){return F_(o,ft,Bd)}function Md(o){return F_(o,Kt,vy)}var Fd=lu?function(o){return lu.get(o)}:rf;function Au(o){for(var c=o.name+"",u=Es[c],d=Ce.call(Es,c)?u.length:0;d--;){var g=u[d],y=g.func;if(y==null||y==o)return g.name}return c}function bs(o){var c=Ce.call(_,"placeholder")?_:o;return c.placeholder}function ne(){var o=_.iteratee||tf;return o=o===tf?q_:o,arguments.length?o(arguments[0],arguments[1]):o}function Ru(o,c){var u=o.__data__;return JP(c)?u[typeof c=="string"?"string":"hash"]:u.map}function Ud(o){for(var c=ft(o),u=c.length;u--;){var d=c[u],g=o[d];c[u]=[d,g,Ey(g)]}return c}function Ti(o,c){var u=eS(o,c);return B_(u)?u:t}function zP(o){var c=Ce.call(o,yi),u=o[yi];try{o[yi]=t;var d=!0}catch{}var g=nu.call(o);return d&&(c?o[yi]=u:delete o[yi]),g}var Bd=fd?function(o){return o==null?[]:(o=Oe(o),Cr(fd(o),function(c){return R_.call(o,c)}))}:sf,vy=fd?function(o){for(var c=[];o;)Dr(c,Bd(o)),o=su(o);return c}:sf,kt=Lt;(pd&&kt(new pd(new ArrayBuffer(1)))!=ps||zo&&kt(new zo)!=En||gd&&kt(gd.resolve())!=Lm||ws&&kt(new ws)!=Tn||Go&&kt(new Go)!=Bo)&&(kt=function(o){var c=Lt(o),u=c==nr?o.constructor:t,d=u?Ai(u):"";if(d)switch(d){case bS:return ps;case SS:return En;case PS:return Lm;case CS:return Tn;case DS:return Bo}return c});function GP(o,c,u){for(var d=-1,g=u.length;++d<g;){var y=u[d],v=y.size;switch(y.type){case"drop":o+=v;break;case"dropRight":c-=v;break;case"take":c=Dt(c,o+v);break;case"takeRight":o=ht(o,c-v);break}}return{start:o,end:c}}function HP(o){var c=o.match(XR);return c?c[1].split(ZR):[]}function Iy(o,c,u){c=Lr(c,o);for(var d=-1,g=c.length,y=!1;++d<g;){var v=Ln(c[d]);if(!(y=o!=null&&u(o,v)))break;o=o[v]}return y||++d!=g?y:(g=o==null?0:o.length,!!g&&xu(g)&&cr(v,g)&&(ue(o)||Ri(o)))}function KP(o){var c=o.length,u=new o.constructor(c);return c&&typeof o[0]=="string"&&Ce.call(o,"index")&&(u.index=o.index,u.input=o.input),u}function wy(o){return typeof o.constructor=="function"&&!ea(o)?Ts(su(o)):{}}function jP(o,c,u){var d=o.constructor;switch(c){case qo:return Nd(o);case Lo:case Vo:return new d(+o);case ps:return kP(o,u);case Uh:case Bh:case qh:case Wh:case $h:case zh:case Gh:case Hh:case Kh:return ry(o,u);case En:return new d;case Mo:case Uo:return new d(o);case Fo:return xP(o);case Tn:return new d;case Hc:return NP(o)}}function QP(o,c){var u=c.length;if(!u)return o;var d=u-1;return c[d]=(u>1?"& ":"")+c[d],c=c.join(u>2?", ":" "),o.replace(JR,`{
/* [wrapped with `+c+`] */
`)}function YP(o){return ue(o)||Ri(o)||!!(b_&&o&&o[b_])}function cr(o,c){var u=typeof o;return c=c??Pr,!!c&&(u=="number"||u!="symbol"&&cb.test(o))&&o>-1&&o%1==0&&o<c}function Vt(o,c,u){if(!He(u))return!1;var d=typeof c;return(d=="number"?Ht(u)&&cr(c,u.length):d=="string"&&c in u)?bn(u[c],o):!1}function qd(o,c){if(ue(o))return!1;var u=typeof o;return u=="number"||u=="symbol"||u=="boolean"||o==null||rn(o)?!0:KR.test(o)||!HR.test(o)||c!=null&&o in Oe(c)}function JP(o){var c=typeof o;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?o!=="__proto__":o===null}function Wd(o){var c=Au(o),u=_[c];if(typeof u!="function"||!(c in ve.prototype))return!1;if(o===u)return!0;var d=Fd(u);return!!d&&o===d[0]}function XP(o){return!!E_&&E_ in o}var ZP=eu?ur:of;function ea(o){var c=o&&o.constructor,u=typeof c=="function"&&c.prototype||Is;return o===u}function Ey(o){return o===o&&!He(o)}function Ty(o,c){return function(u){return u==null?!1:u[o]===c&&(c!==t||o in Oe(u))}}function eC(o){var c=Du(o,function(d){return u.size===f&&u.clear(),d}),u=c.cache;return c}function tC(o,c){var u=o[1],d=c[1],g=u|d,y=g<(F|Z|N),v=d==N&&u==ee||d==N&&u==I&&o[7].length<=c[8]||d==(N|I)&&c[7].length<=c[8]&&u==ee;if(!(y||v))return o;d&F&&(o[2]=c[2],g|=u&F?0:pe);var T=c[3];if(T){var R=o[3];o[3]=R?sy(R,T,c[4]):T,o[4]=R?kr(o[3],p):c[4]}return T=c[5],T&&(R=o[5],o[5]=R?oy(R,T,c[6]):T,o[6]=R?kr(o[5],p):c[6]),T=c[7],T&&(o[7]=T),d&N&&(o[8]=o[8]==null?c[8]:Dt(o[8],c[8])),o[9]==null&&(o[9]=c[9]),o[0]=c[0],o[1]=g,o}function nC(o){var c=[];if(o!=null)for(var u in Oe(o))c.push(u);return c}function rC(o){return nu.call(o)}function Ay(o,c,u){return c=ht(c===t?o.length-1:c,0),function(){for(var d=arguments,g=-1,y=ht(d.length-c,0),v=P(y);++g<y;)v[g]=d[c+g];g=-1;for(var T=P(c+1);++g<c;)T[g]=d[g];return T[c]=u(v),en(o,this,T)}}function Ry(o,c){return c.length<2?o:Ei(o,mn(c,0,-1))}function iC(o,c){for(var u=o.length,d=Dt(c.length,u),g=Gt(o);d--;){var y=c[d];o[d]=cr(y,u)?g[y]:t}return o}function $d(o,c){if(!(c==="constructor"&&typeof o[c]=="function")&&c!="__proto__")return o[c]}var by=Py(Q_),ta=vS||function(o,c){return wt.setTimeout(o,c)},zd=Py(SP);function Sy(o,c,u){var d=c+"";return zd(o,QP(d,sC(HP(d),u)))}function Py(o){var c=0,u=0;return function(){var d=TS(),g=se-(d-u);if(u=d,g>0){if(++c>=W)return arguments[0]}else c=0;return o.apply(t,arguments)}}function bu(o,c){var u=-1,d=o.length,g=d-1;for(c=c===t?d:c;++u<c;){var y=bd(u,g),v=o[y];o[y]=o[u],o[u]=v}return o.length=c,o}var Cy=eC(function(o){var c=[];return o.charCodeAt(0)===46&&c.push(""),o.replace(jR,function(u,d,g,y){c.push(g?y.replace(nb,"$1"):d||u)}),c});function Ln(o){if(typeof o=="string"||rn(o))return o;var c=o+"";return c=="0"&&1/o==-mi?"-0":c}function Ai(o){if(o!=null){try{return tu.call(o)}catch{}try{return o+""}catch{}}return""}function sC(o,c){return dn(xR,function(u){var d="_."+u[0];c&u[1]&&!Yc(o,d)&&o.push(d)}),o.sort()}function Dy(o){if(o instanceof ve)return o.clone();var c=new pn(o.__wrapped__,o.__chain__);return c.__actions__=Gt(o.__actions__),c.__index__=o.__index__,c.__values__=o.__values__,c}function oC(o,c,u){(u?Vt(o,c,u):c===t)?c=1:c=ht(fe(c),0);var d=o==null?0:o.length;if(!d||c<1)return[];for(var g=0,y=0,v=P(cu(d/c));g<d;)v[y++]=mn(o,g,g+=c);return v}function aC(o){for(var c=-1,u=o==null?0:o.length,d=0,g=[];++c<u;){var y=o[c];y&&(g[d++]=y)}return g}function cC(){var o=arguments.length;if(!o)return[];for(var c=P(o-1),u=arguments[0],d=o;d--;)c[d-1]=arguments[d];return Dr(ue(u)?Gt(u):[u],Et(c,1))}var uC=me(function(o,c){return it(o)?Qo(o,Et(c,1,it,!0)):[]}),lC=me(function(o,c){var u=_n(c);return it(u)&&(u=t),it(o)?Qo(o,Et(c,1,it,!0),ne(u,2)):[]}),hC=me(function(o,c){var u=_n(c);return it(u)&&(u=t),it(o)?Qo(o,Et(c,1,it,!0),t,u):[]});function dC(o,c,u){var d=o==null?0:o.length;return d?(c=u||c===t?1:fe(c),mn(o,c<0?0:c,d)):[]}function fC(o,c,u){var d=o==null?0:o.length;return d?(c=u||c===t?1:fe(c),c=d-c,mn(o,0,c<0?0:c)):[]}function pC(o,c){return o&&o.length?yu(o,ne(c,3),!0,!0):[]}function gC(o,c){return o&&o.length?yu(o,ne(c,3),!0):[]}function mC(o,c,u,d){var g=o==null?0:o.length;return g?(u&&typeof u!="number"&&Vt(o,c,u)&&(u=0,d=g),cP(o,c,u,d)):[]}function ky(o,c,u){var d=o==null?0:o.length;if(!d)return-1;var g=u==null?0:fe(u);return g<0&&(g=ht(d+g,0)),Jc(o,ne(c,3),g)}function xy(o,c,u){var d=o==null?0:o.length;if(!d)return-1;var g=d-1;return u!==t&&(g=fe(u),g=u<0?ht(d+g,0):Dt(g,d-1)),Jc(o,ne(c,3),g,!0)}function Ny(o){var c=o==null?0:o.length;return c?Et(o,1):[]}function _C(o){var c=o==null?0:o.length;return c?Et(o,mi):[]}function yC(o,c){var u=o==null?0:o.length;return u?(c=c===t?1:fe(c),Et(o,c)):[]}function vC(o){for(var c=-1,u=o==null?0:o.length,d={};++c<u;){var g=o[c];d[g[0]]=g[1]}return d}function Oy(o){return o&&o.length?o[0]:t}function IC(o,c,u){var d=o==null?0:o.length;if(!d)return-1;var g=u==null?0:fe(u);return g<0&&(g=ht(d+g,0)),ms(o,c,g)}function wC(o){var c=o==null?0:o.length;return c?mn(o,0,-1):[]}var EC=me(function(o){var c=qe(o,kd);return c.length&&c[0]===o[0]?wd(c):[]}),TC=me(function(o){var c=_n(o),u=qe(o,kd);return c===_n(u)?c=t:u.pop(),u.length&&u[0]===o[0]?wd(u,ne(c,2)):[]}),AC=me(function(o){var c=_n(o),u=qe(o,kd);return c=typeof c=="function"?c:t,c&&u.pop(),u.length&&u[0]===o[0]?wd(u,t,c):[]});function RC(o,c){return o==null?"":wS.call(o,c)}function _n(o){var c=o==null?0:o.length;return c?o[c-1]:t}function bC(o,c,u){var d=o==null?0:o.length;if(!d)return-1;var g=d;return u!==t&&(g=fe(u),g=g<0?ht(d+g,0):Dt(g,d-1)),c===c?sS(o,c,g):Jc(o,p_,g,!0)}function SC(o,c){return o&&o.length?G_(o,fe(c)):t}var PC=me(Ly);function Ly(o,c){return o&&o.length&&c&&c.length?Rd(o,c):o}function CC(o,c,u){return o&&o.length&&c&&c.length?Rd(o,c,ne(u,2)):o}function DC(o,c,u){return o&&o.length&&c&&c.length?Rd(o,c,t,u):o}var kC=ar(function(o,c){var u=o==null?0:o.length,d=_d(o,c);return j_(o,qe(c,function(g){return cr(g,u)?+g:g}).sort(iy)),d});function xC(o,c){var u=[];if(!(o&&o.length))return u;var d=-1,g=[],y=o.length;for(c=ne(c,3);++d<y;){var v=o[d];c(v,d,o)&&(u.push(v),g.push(d))}return j_(o,g),u}function Gd(o){return o==null?o:RS.call(o)}function NC(o,c,u){var d=o==null?0:o.length;return d?(u&&typeof u!="number"&&Vt(o,c,u)?(c=0,u=d):(c=c==null?0:fe(c),u=u===t?d:fe(u)),mn(o,c,u)):[]}function OC(o,c){return _u(o,c)}function LC(o,c,u){return Pd(o,c,ne(u,2))}function VC(o,c){var u=o==null?0:o.length;if(u){var d=_u(o,c);if(d<u&&bn(o[d],c))return d}return-1}function MC(o,c){return _u(o,c,!0)}function FC(o,c,u){return Pd(o,c,ne(u,2),!0)}function UC(o,c){var u=o==null?0:o.length;if(u){var d=_u(o,c,!0)-1;if(bn(o[d],c))return d}return-1}function BC(o){return o&&o.length?Y_(o):[]}function qC(o,c){return o&&o.length?Y_(o,ne(c,2)):[]}function WC(o){var c=o==null?0:o.length;return c?mn(o,1,c):[]}function $C(o,c,u){return o&&o.length?(c=u||c===t?1:fe(c),mn(o,0,c<0?0:c)):[]}function zC(o,c,u){var d=o==null?0:o.length;return d?(c=u||c===t?1:fe(c),c=d-c,mn(o,c<0?0:c,d)):[]}function GC(o,c){return o&&o.length?yu(o,ne(c,3),!1,!0):[]}function HC(o,c){return o&&o.length?yu(o,ne(c,3)):[]}var KC=me(function(o){return Or(Et(o,1,it,!0))}),jC=me(function(o){var c=_n(o);return it(c)&&(c=t),Or(Et(o,1,it,!0),ne(c,2))}),QC=me(function(o){var c=_n(o);return c=typeof c=="function"?c:t,Or(Et(o,1,it,!0),t,c)});function YC(o){return o&&o.length?Or(o):[]}function JC(o,c){return o&&o.length?Or(o,ne(c,2)):[]}function XC(o,c){return c=typeof c=="function"?c:t,o&&o.length?Or(o,t,c):[]}function Hd(o){if(!(o&&o.length))return[];var c=0;return o=Cr(o,function(u){if(it(u))return c=ht(u.length,c),!0}),ud(c,function(u){return qe(o,od(u))})}function Vy(o,c){if(!(o&&o.length))return[];var u=Hd(o);return c==null?u:qe(u,function(d){return en(c,t,d)})}var ZC=me(function(o,c){return it(o)?Qo(o,c):[]}),e1=me(function(o){return Dd(Cr(o,it))}),t1=me(function(o){var c=_n(o);return it(c)&&(c=t),Dd(Cr(o,it),ne(c,2))}),n1=me(function(o){var c=_n(o);return c=typeof c=="function"?c:t,Dd(Cr(o,it),t,c)}),r1=me(Hd);function i1(o,c){return ey(o||[],c||[],jo)}function s1(o,c){return ey(o||[],c||[],Xo)}var o1=me(function(o){var c=o.length,u=c>1?o[c-1]:t;return u=typeof u=="function"?(o.pop(),u):t,Vy(o,u)});function My(o){var c=_(o);return c.__chain__=!0,c}function a1(o,c){return c(o),o}function Su(o,c){return c(o)}var c1=ar(function(o){var c=o.length,u=c?o[0]:0,d=this.__wrapped__,g=function(y){return _d(y,o)};return c>1||this.__actions__.length||!(d instanceof ve)||!cr(u)?this.thru(g):(d=d.slice(u,+u+(c?1:0)),d.__actions__.push({func:Su,args:[g],thisArg:t}),new pn(d,this.__chain__).thru(function(y){return c&&!y.length&&y.push(t),y}))});function u1(){return My(this)}function l1(){return new pn(this.value(),this.__chain__)}function h1(){this.__values__===t&&(this.__values__=Jy(this.value()));var o=this.__index__>=this.__values__.length,c=o?t:this.__values__[this.__index__++];return{done:o,value:c}}function d1(){return this}function f1(o){for(var c,u=this;u instanceof du;){var d=Dy(u);d.__index__=0,d.__values__=t,c?g.__wrapped__=d:c=d;var g=d;u=u.__wrapped__}return g.__wrapped__=o,c}function p1(){var o=this.__wrapped__;if(o instanceof ve){var c=o;return this.__actions__.length&&(c=new ve(this)),c=c.reverse(),c.__actions__.push({func:Su,args:[Gd],thisArg:t}),new pn(c,this.__chain__)}return this.thru(Gd)}function g1(){return Z_(this.__wrapped__,this.__actions__)}var m1=vu(function(o,c,u){Ce.call(o,u)?++o[u]:sr(o,u,1)});function _1(o,c,u){var d=ue(o)?d_:aP;return u&&Vt(o,c,u)&&(c=t),d(o,ne(c,3))}function y1(o,c){var u=ue(o)?Cr:V_;return u(o,ne(c,3))}var v1=ly(ky),I1=ly(xy);function w1(o,c){return Et(Pu(o,c),1)}function E1(o,c){return Et(Pu(o,c),mi)}function T1(o,c,u){return u=u===t?1:fe(u),Et(Pu(o,c),u)}function Fy(o,c){var u=ue(o)?dn:Nr;return u(o,ne(c,3))}function Uy(o,c){var u=ue(o)?Wb:L_;return u(o,ne(c,3))}var A1=vu(function(o,c,u){Ce.call(o,u)?o[u].push(c):sr(o,u,[c])});function R1(o,c,u,d){o=Ht(o)?o:Ps(o),u=u&&!d?fe(u):0;var g=o.length;return u<0&&(u=ht(g+u,0)),Nu(o)?u<=g&&o.indexOf(c,u)>-1:!!g&&ms(o,c,u)>-1}var b1=me(function(o,c,u){var d=-1,g=typeof c=="function",y=Ht(o)?P(o.length):[];return Nr(o,function(v){y[++d]=g?en(c,v,u):Yo(v,c,u)}),y}),S1=vu(function(o,c,u){sr(o,u,c)});function Pu(o,c){var u=ue(o)?qe:W_;return u(o,ne(c,3))}function P1(o,c,u,d){return o==null?[]:(ue(c)||(c=c==null?[]:[c]),u=d?t:u,ue(u)||(u=u==null?[]:[u]),H_(o,c,u))}var C1=vu(function(o,c,u){o[u?0:1].push(c)},function(){return[[],[]]});function D1(o,c,u){var d=ue(o)?id:m_,g=arguments.length<3;return d(o,ne(c,4),u,g,Nr)}function k1(o,c,u){var d=ue(o)?$b:m_,g=arguments.length<3;return d(o,ne(c,4),u,g,L_)}function x1(o,c){var u=ue(o)?Cr:V_;return u(o,ku(ne(c,3)))}function N1(o){var c=ue(o)?k_:RP;return c(o)}function O1(o,c,u){(u?Vt(o,c,u):c===t)?c=1:c=fe(c);var d=ue(o)?nP:bP;return d(o,c)}function L1(o){var c=ue(o)?rP:PP;return c(o)}function V1(o){if(o==null)return 0;if(Ht(o))return Nu(o)?ys(o):o.length;var c=kt(o);return c==En||c==Tn?o.size:Td(o).length}function M1(o,c,u){var d=ue(o)?sd:CP;return u&&Vt(o,c,u)&&(c=t),d(o,ne(c,3))}var F1=me(function(o,c){if(o==null)return[];var u=c.length;return u>1&&Vt(o,c[0],c[1])?c=[]:u>2&&Vt(c[0],c[1],c[2])&&(c=[c[0]]),H_(o,Et(c,1),[])}),Cu=yS||function(){return wt.Date.now()};function U1(o,c){if(typeof c!="function")throw new fn(a);return o=fe(o),function(){if(--o<1)return c.apply(this,arguments)}}function By(o,c,u){return c=u?t:c,c=o&&c==null?o.length:c,or(o,N,t,t,t,t,c)}function qy(o,c){var u;if(typeof c!="function")throw new fn(a);return o=fe(o),function(){return--o>0&&(u=c.apply(this,arguments)),o<=1&&(c=t),u}}var Kd=me(function(o,c,u){var d=F;if(u.length){var g=kr(u,bs(Kd));d|=he}return or(o,d,c,u,g)}),Wy=me(function(o,c,u){var d=F|Z;if(u.length){var g=kr(u,bs(Wy));d|=he}return or(c,d,o,u,g)});function $y(o,c,u){c=u?t:c;var d=or(o,ee,t,t,t,t,t,c);return d.placeholder=$y.placeholder,d}function zy(o,c,u){c=u?t:c;var d=or(o,Ee,t,t,t,t,t,c);return d.placeholder=zy.placeholder,d}function Gy(o,c,u){var d,g,y,v,T,R,k=0,x=!1,V=!1,z=!0;if(typeof o!="function")throw new fn(a);c=yn(c)||0,He(u)&&(x=!!u.leading,V="maxWait"in u,y=V?ht(yn(u.maxWait)||0,c):y,z="trailing"in u?!!u.trailing:z);function Q(st){var Sn=d,hr=g;return d=g=t,k=st,v=o.apply(hr,Sn),v}function re(st){return k=st,T=ta(_e,c),x?Q(st):v}function ge(st){var Sn=st-R,hr=st-k,lv=c-Sn;return V?Dt(lv,y-hr):lv}function ie(st){var Sn=st-R,hr=st-k;return R===t||Sn>=c||Sn<0||V&&hr>=y}function _e(){var st=Cu();if(ie(st))return we(st);T=ta(_e,ge(st))}function we(st){return T=t,z&&d?Q(st):(d=g=t,v)}function sn(){T!==t&&ty(T),k=0,d=R=g=T=t}function Mt(){return T===t?v:we(Cu())}function on(){var st=Cu(),Sn=ie(st);if(d=arguments,g=this,R=st,Sn){if(T===t)return re(R);if(V)return ty(T),T=ta(_e,c),Q(R)}return T===t&&(T=ta(_e,c)),v}return on.cancel=sn,on.flush=Mt,on}var B1=me(function(o,c){return O_(o,1,c)}),q1=me(function(o,c,u){return O_(o,yn(c)||0,u)});function W1(o){return or(o,E)}function Du(o,c){if(typeof o!="function"||c!=null&&typeof c!="function")throw new fn(a);var u=function(){var d=arguments,g=c?c.apply(this,d):d[0],y=u.cache;if(y.has(g))return y.get(g);var v=o.apply(this,d);return u.cache=y.set(g,v)||y,v};return u.cache=new(Du.Cache||ir),u}Du.Cache=ir;function ku(o){if(typeof o!="function")throw new fn(a);return function(){var c=arguments;switch(c.length){case 0:return!o.call(this);case 1:return!o.call(this,c[0]);case 2:return!o.call(this,c[0],c[1]);case 3:return!o.call(this,c[0],c[1],c[2])}return!o.apply(this,c)}}function $1(o){return qy(2,o)}var z1=DP(function(o,c){c=c.length==1&&ue(c[0])?qe(c[0],tn(ne())):qe(Et(c,1),tn(ne()));var u=c.length;return me(function(d){for(var g=-1,y=Dt(d.length,u);++g<y;)d[g]=c[g].call(this,d[g]);return en(o,this,d)})}),jd=me(function(o,c){var u=kr(c,bs(jd));return or(o,he,t,c,u)}),Hy=me(function(o,c){var u=kr(c,bs(Hy));return or(o,L,t,c,u)}),G1=ar(function(o,c){return or(o,I,t,t,t,c)});function H1(o,c){if(typeof o!="function")throw new fn(a);return c=c===t?c:fe(c),me(o,c)}function K1(o,c){if(typeof o!="function")throw new fn(a);return c=c==null?0:ht(fe(c),0),me(function(u){var d=u[c],g=Vr(u,0,c);return d&&Dr(g,d),en(o,this,g)})}function j1(o,c,u){var d=!0,g=!0;if(typeof o!="function")throw new fn(a);return He(u)&&(d="leading"in u?!!u.leading:d,g="trailing"in u?!!u.trailing:g),Gy(o,c,{leading:d,maxWait:c,trailing:g})}function Q1(o){return By(o,1)}function Y1(o,c){return jd(xd(c),o)}function J1(){if(!arguments.length)return[];var o=arguments[0];return ue(o)?o:[o]}function X1(o){return gn(o,b)}function Z1(o,c){return c=typeof c=="function"?c:t,gn(o,b,c)}function eD(o){return gn(o,m|b)}function tD(o,c){return c=typeof c=="function"?c:t,gn(o,m|b,c)}function nD(o,c){return c==null||N_(o,c,ft(c))}function bn(o,c){return o===c||o!==o&&c!==c}var rD=Tu(Id),iD=Tu(function(o,c){return o>=c}),Ri=U_(function(){return arguments}())?U_:function(o){return Qe(o)&&Ce.call(o,"callee")&&!R_.call(o,"callee")},ue=P.isArray,sD=o_?tn(o_):fP;function Ht(o){return o!=null&&xu(o.length)&&!ur(o)}function it(o){return Qe(o)&&Ht(o)}function oD(o){return o===!0||o===!1||Qe(o)&&Lt(o)==Lo}var Mr=IS||of,aD=a_?tn(a_):pP;function cD(o){return Qe(o)&&o.nodeType===1&&!na(o)}function uD(o){if(o==null)return!0;if(Ht(o)&&(ue(o)||typeof o=="string"||typeof o.splice=="function"||Mr(o)||Ss(o)||Ri(o)))return!o.length;var c=kt(o);if(c==En||c==Tn)return!o.size;if(ea(o))return!Td(o).length;for(var u in o)if(Ce.call(o,u))return!1;return!0}function lD(o,c){return Jo(o,c)}function hD(o,c,u){u=typeof u=="function"?u:t;var d=u?u(o,c):t;return d===t?Jo(o,c,t,u):!!d}function Qd(o){if(!Qe(o))return!1;var c=Lt(o);return c==zc||c==OR||typeof o.message=="string"&&typeof o.name=="string"&&!na(o)}function dD(o){return typeof o=="number"&&S_(o)}function ur(o){if(!He(o))return!1;var c=Lt(o);return c==Gc||c==Om||c==NR||c==VR}function Ky(o){return typeof o=="number"&&o==fe(o)}function xu(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=Pr}function He(o){var c=typeof o;return o!=null&&(c=="object"||c=="function")}function Qe(o){return o!=null&&typeof o=="object"}var jy=c_?tn(c_):mP;function fD(o,c){return o===c||Ed(o,c,Ud(c))}function pD(o,c,u){return u=typeof u=="function"?u:t,Ed(o,c,Ud(c),u)}function gD(o){return Qy(o)&&o!=+o}function mD(o){if(ZP(o))throw new ce(s);return B_(o)}function _D(o){return o===null}function yD(o){return o==null}function Qy(o){return typeof o=="number"||Qe(o)&&Lt(o)==Mo}function na(o){if(!Qe(o)||Lt(o)!=nr)return!1;var c=su(o);if(c===null)return!0;var u=Ce.call(c,"constructor")&&c.constructor;return typeof u=="function"&&u instanceof u&&tu.call(u)==pS}var Yd=u_?tn(u_):_P;function vD(o){return Ky(o)&&o>=-Pr&&o<=Pr}var Yy=l_?tn(l_):yP;function Nu(o){return typeof o=="string"||!ue(o)&&Qe(o)&&Lt(o)==Uo}function rn(o){return typeof o=="symbol"||Qe(o)&&Lt(o)==Hc}var Ss=h_?tn(h_):vP;function ID(o){return o===t}function wD(o){return Qe(o)&&kt(o)==Bo}function ED(o){return Qe(o)&&Lt(o)==FR}var TD=Tu(Ad),AD=Tu(function(o,c){return o<=c});function Jy(o){if(!o)return[];if(Ht(o))return Nu(o)?An(o):Gt(o);if($o&&o[$o])return nS(o[$o]());var c=kt(o),u=c==En?hd:c==Tn?Xc:Ps;return u(o)}function lr(o){if(!o)return o===0?o:0;if(o=yn(o),o===mi||o===-mi){var c=o<0?-1:1;return c*CR}return o===o?o:0}function fe(o){var c=lr(o),u=c%1;return c===c?u?c-u:c:0}function Xy(o){return o?wi(fe(o),0,xn):0}function yn(o){if(typeof o=="number")return o;if(rn(o))return Wc;if(He(o)){var c=typeof o.valueOf=="function"?o.valueOf():o;o=He(c)?c+"":c}if(typeof o!="string")return o===0?o:+o;o=__(o);var u=sb.test(o);return u||ab.test(o)?Ub(o.slice(2),u?2:8):ib.test(o)?Wc:+o}function Zy(o){return On(o,Kt(o))}function RD(o){return o?wi(fe(o),-Pr,Pr):o===0?o:0}function Pe(o){return o==null?"":nn(o)}var bD=As(function(o,c){if(ea(c)||Ht(c)){On(c,ft(c),o);return}for(var u in c)Ce.call(c,u)&&jo(o,u,c[u])}),ev=As(function(o,c){On(c,Kt(c),o)}),Ou=As(function(o,c,u,d){On(c,Kt(c),o,d)}),SD=As(function(o,c,u,d){On(c,ft(c),o,d)}),PD=ar(_d);function CD(o,c){var u=Ts(o);return c==null?u:x_(u,c)}var DD=me(function(o,c){o=Oe(o);var u=-1,d=c.length,g=d>2?c[2]:t;for(g&&Vt(c[0],c[1],g)&&(d=1);++u<d;)for(var y=c[u],v=Kt(y),T=-1,R=v.length;++T<R;){var k=v[T],x=o[k];(x===t||bn(x,Is[k])&&!Ce.call(o,k))&&(o[k]=y[k])}return o}),kD=me(function(o){return o.push(t,_y),en(tv,t,o)});function xD(o,c){return f_(o,ne(c,3),Nn)}function ND(o,c){return f_(o,ne(c,3),vd)}function OD(o,c){return o==null?o:yd(o,ne(c,3),Kt)}function LD(o,c){return o==null?o:M_(o,ne(c,3),Kt)}function VD(o,c){return o&&Nn(o,ne(c,3))}function MD(o,c){return o&&vd(o,ne(c,3))}function FD(o){return o==null?[]:gu(o,ft(o))}function UD(o){return o==null?[]:gu(o,Kt(o))}function Jd(o,c,u){var d=o==null?t:Ei(o,c);return d===t?u:d}function BD(o,c){return o!=null&&Iy(o,c,uP)}function Xd(o,c){return o!=null&&Iy(o,c,lP)}var qD=dy(function(o,c,u){c!=null&&typeof c.toString!="function"&&(c=nu.call(c)),o[c]=u},ef(jt)),WD=dy(function(o,c,u){c!=null&&typeof c.toString!="function"&&(c=nu.call(c)),Ce.call(o,c)?o[c].push(u):o[c]=[u]},ne),$D=me(Yo);function ft(o){return Ht(o)?D_(o):Td(o)}function Kt(o){return Ht(o)?D_(o,!0):IP(o)}function zD(o,c){var u={};return c=ne(c,3),Nn(o,function(d,g,y){sr(u,c(d,g,y),d)}),u}function GD(o,c){var u={};return c=ne(c,3),Nn(o,function(d,g,y){sr(u,g,c(d,g,y))}),u}var HD=As(function(o,c,u){mu(o,c,u)}),tv=As(function(o,c,u,d){mu(o,c,u,d)}),KD=ar(function(o,c){var u={};if(o==null)return u;var d=!1;c=qe(c,function(y){return y=Lr(y,o),d||(d=y.length>1),y}),On(o,Md(o),u),d&&(u=gn(u,m|w|b,qP));for(var g=c.length;g--;)Cd(u,c[g]);return u});function jD(o,c){return nv(o,ku(ne(c)))}var QD=ar(function(o,c){return o==null?{}:EP(o,c)});function nv(o,c){if(o==null)return{};var u=qe(Md(o),function(d){return[d]});return c=ne(c),K_(o,u,function(d,g){return c(d,g[0])})}function YD(o,c,u){c=Lr(c,o);var d=-1,g=c.length;for(g||(g=1,o=t);++d<g;){var y=o==null?t:o[Ln(c[d])];y===t&&(d=g,y=u),o=ur(y)?y.call(o):y}return o}function JD(o,c,u){return o==null?o:Xo(o,c,u)}function XD(o,c,u,d){return d=typeof d=="function"?d:t,o==null?o:Xo(o,c,u,d)}var rv=gy(ft),iv=gy(Kt);function ZD(o,c,u){var d=ue(o),g=d||Mr(o)||Ss(o);if(c=ne(c,4),u==null){var y=o&&o.constructor;g?u=d?new y:[]:He(o)?u=ur(y)?Ts(su(o)):{}:u={}}return(g?dn:Nn)(o,function(v,T,R){return c(u,v,T,R)}),u}function ek(o,c){return o==null?!0:Cd(o,c)}function tk(o,c,u){return o==null?o:X_(o,c,xd(u))}function nk(o,c,u,d){return d=typeof d=="function"?d:t,o==null?o:X_(o,c,xd(u),d)}function Ps(o){return o==null?[]:ld(o,ft(o))}function rk(o){return o==null?[]:ld(o,Kt(o))}function ik(o,c,u){return u===t&&(u=c,c=t),u!==t&&(u=yn(u),u=u===u?u:0),c!==t&&(c=yn(c),c=c===c?c:0),wi(yn(o),c,u)}function sk(o,c,u){return c=lr(c),u===t?(u=c,c=0):u=lr(u),o=yn(o),hP(o,c,u)}function ok(o,c,u){if(u&&typeof u!="boolean"&&Vt(o,c,u)&&(c=u=t),u===t&&(typeof c=="boolean"?(u=c,c=t):typeof o=="boolean"&&(u=o,o=t)),o===t&&c===t?(o=0,c=1):(o=lr(o),c===t?(c=o,o=0):c=lr(c)),o>c){var d=o;o=c,c=d}if(u||o%1||c%1){var g=P_();return Dt(o+g*(c-o+Fb("1e-"+((g+"").length-1))),c)}return bd(o,c)}var ak=Rs(function(o,c,u){return c=c.toLowerCase(),o+(u?sv(c):c)});function sv(o){return Zd(Pe(o).toLowerCase())}function ov(o){return o=Pe(o),o&&o.replace(ub,Jb).replace(Pb,"")}function ck(o,c,u){o=Pe(o),c=nn(c);var d=o.length;u=u===t?d:wi(fe(u),0,d);var g=u;return u-=c.length,u>=0&&o.slice(u,g)==c}function uk(o){return o=Pe(o),o&&$R.test(o)?o.replace(Mm,Xb):o}function lk(o){return o=Pe(o),o&&QR.test(o)?o.replace(jh,"\\$&"):o}var hk=Rs(function(o,c,u){return o+(u?"-":"")+c.toLowerCase()}),dk=Rs(function(o,c,u){return o+(u?" ":"")+c.toLowerCase()}),fk=uy("toLowerCase");function pk(o,c,u){o=Pe(o),c=fe(c);var d=c?ys(o):0;if(!c||d>=c)return o;var g=(c-d)/2;return Eu(uu(g),u)+o+Eu(cu(g),u)}function gk(o,c,u){o=Pe(o),c=fe(c);var d=c?ys(o):0;return c&&d<c?o+Eu(c-d,u):o}function mk(o,c,u){o=Pe(o),c=fe(c);var d=c?ys(o):0;return c&&d<c?Eu(c-d,u)+o:o}function _k(o,c,u){return u||c==null?c=0:c&&(c=+c),AS(Pe(o).replace(Qh,""),c||0)}function yk(o,c,u){return(u?Vt(o,c,u):c===t)?c=1:c=fe(c),Sd(Pe(o),c)}function vk(){var o=arguments,c=Pe(o[0]);return o.length<3?c:c.replace(o[1],o[2])}var Ik=Rs(function(o,c,u){return o+(u?"_":"")+c.toLowerCase()});function wk(o,c,u){return u&&typeof u!="number"&&Vt(o,c,u)&&(c=u=t),u=u===t?xn:u>>>0,u?(o=Pe(o),o&&(typeof c=="string"||c!=null&&!Yd(c))&&(c=nn(c),!c&&_s(o))?Vr(An(o),0,u):o.split(c,u)):[]}var Ek=Rs(function(o,c,u){return o+(u?" ":"")+Zd(c)});function Tk(o,c,u){return o=Pe(o),u=u==null?0:wi(fe(u),0,o.length),c=nn(c),o.slice(u,u+c.length)==c}function Ak(o,c,u){var d=_.templateSettings;u&&Vt(o,c,u)&&(c=t),o=Pe(o),c=Ou({},c,d,my);var g=Ou({},c.imports,d.imports,my),y=ft(g),v=ld(g,y),T,R,k=0,x=c.interpolate||Kc,V="__p += '",z=dd((c.escape||Kc).source+"|"+x.source+"|"+(x===Fm?rb:Kc).source+"|"+(c.evaluate||Kc).source+"|$","g"),Q="//# sourceURL="+(Ce.call(c,"sourceURL")?(c.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Nb+"]")+`
`;o.replace(z,function(ie,_e,we,sn,Mt,on){return we||(we=sn),V+=o.slice(k,on).replace(lb,Zb),_e&&(T=!0,V+=`' +
__e(`+_e+`) +
'`),Mt&&(R=!0,V+=`';
`+Mt+`;
__p += '`),we&&(V+=`' +
((__t = (`+we+`)) == null ? '' : __t) +
'`),k=on+ie.length,ie}),V+=`';
`;var re=Ce.call(c,"variable")&&c.variable;if(!re)V=`with (obj) {
`+V+`
}
`;else if(tb.test(re))throw new ce(l);V=(R?V.replace(UR,""):V).replace(BR,"$1").replace(qR,"$1;"),V="function("+(re||"obj")+`) {
`+(re?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(T?", __e = _.escape":"")+(R?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+V+`return __p
}`;var ge=cv(function(){return Se(y,Q+"return "+V).apply(t,v)});if(ge.source=V,Qd(ge))throw ge;return ge}function Rk(o){return Pe(o).toLowerCase()}function bk(o){return Pe(o).toUpperCase()}function Sk(o,c,u){if(o=Pe(o),o&&(u||c===t))return __(o);if(!o||!(c=nn(c)))return o;var d=An(o),g=An(c),y=y_(d,g),v=v_(d,g)+1;return Vr(d,y,v).join("")}function Pk(o,c,u){if(o=Pe(o),o&&(u||c===t))return o.slice(0,w_(o)+1);if(!o||!(c=nn(c)))return o;var d=An(o),g=v_(d,An(c))+1;return Vr(d,0,g).join("")}function Ck(o,c,u){if(o=Pe(o),o&&(u||c===t))return o.replace(Qh,"");if(!o||!(c=nn(c)))return o;var d=An(o),g=y_(d,An(c));return Vr(d,g).join("")}function Dk(o,c){var u=Y,d=oe;if(He(c)){var g="separator"in c?c.separator:g;u="length"in c?fe(c.length):u,d="omission"in c?nn(c.omission):d}o=Pe(o);var y=o.length;if(_s(o)){var v=An(o);y=v.length}if(u>=y)return o;var T=u-ys(d);if(T<1)return d;var R=v?Vr(v,0,T).join(""):o.slice(0,T);if(g===t)return R+d;if(v&&(T+=R.length-T),Yd(g)){if(o.slice(T).search(g)){var k,x=R;for(g.global||(g=dd(g.source,Pe(Um.exec(g))+"g")),g.lastIndex=0;k=g.exec(x);)var V=k.index;R=R.slice(0,V===t?T:V)}}else if(o.indexOf(nn(g),T)!=T){var z=R.lastIndexOf(g);z>-1&&(R=R.slice(0,z))}return R+d}function kk(o){return o=Pe(o),o&&WR.test(o)?o.replace(Vm,oS):o}var xk=Rs(function(o,c,u){return o+(u?" ":"")+c.toUpperCase()}),Zd=uy("toUpperCase");function av(o,c,u){return o=Pe(o),c=u?t:c,c===t?tS(o)?uS(o):Hb(o):o.match(c)||[]}var cv=me(function(o,c){try{return en(o,t,c)}catch(u){return Qd(u)?u:new ce(u)}}),Nk=ar(function(o,c){return dn(c,function(u){u=Ln(u),sr(o,u,Kd(o[u],o))}),o});function Ok(o){var c=o==null?0:o.length,u=ne();return o=c?qe(o,function(d){if(typeof d[1]!="function")throw new fn(a);return[u(d[0]),d[1]]}):[],me(function(d){for(var g=-1;++g<c;){var y=o[g];if(en(y[0],this,d))return en(y[1],this,d)}})}function Lk(o){return oP(gn(o,m))}function ef(o){return function(){return o}}function Vk(o,c){return o==null||o!==o?c:o}var Mk=hy(),Fk=hy(!0);function jt(o){return o}function tf(o){return q_(typeof o=="function"?o:gn(o,m))}function Uk(o){return $_(gn(o,m))}function Bk(o,c){return z_(o,gn(c,m))}var qk=me(function(o,c){return function(u){return Yo(u,o,c)}}),Wk=me(function(o,c){return function(u){return Yo(o,u,c)}});function nf(o,c,u){var d=ft(c),g=gu(c,d);u==null&&!(He(c)&&(g.length||!d.length))&&(u=c,c=o,o=this,g=gu(c,ft(c)));var y=!(He(u)&&"chain"in u)||!!u.chain,v=ur(o);return dn(g,function(T){var R=c[T];o[T]=R,v&&(o.prototype[T]=function(){var k=this.__chain__;if(y||k){var x=o(this.__wrapped__),V=x.__actions__=Gt(this.__actions__);return V.push({func:R,args:arguments,thisArg:o}),x.__chain__=k,x}return R.apply(o,Dr([this.value()],arguments))})}),o}function $k(){return wt._===this&&(wt._=gS),this}function rf(){}function zk(o){return o=fe(o),me(function(c){return G_(c,o)})}var Gk=Od(qe),Hk=Od(d_),Kk=Od(sd);function uv(o){return qd(o)?od(Ln(o)):TP(o)}function jk(o){return function(c){return o==null?t:Ei(o,c)}}var Qk=fy(),Yk=fy(!0);function sf(){return[]}function of(){return!1}function Jk(){return{}}function Xk(){return""}function Zk(){return!0}function ex(o,c){if(o=fe(o),o<1||o>Pr)return[];var u=xn,d=Dt(o,xn);c=ne(c),o-=xn;for(var g=ud(d,c);++u<o;)c(u);return g}function tx(o){return ue(o)?qe(o,Ln):rn(o)?[o]:Gt(Cy(Pe(o)))}function nx(o){var c=++fS;return Pe(o)+c}var rx=wu(function(o,c){return o+c},0),ix=Ld("ceil"),sx=wu(function(o,c){return o/c},1),ox=Ld("floor");function ax(o){return o&&o.length?pu(o,jt,Id):t}function cx(o,c){return o&&o.length?pu(o,ne(c,2),Id):t}function ux(o){return g_(o,jt)}function lx(o,c){return g_(o,ne(c,2))}function hx(o){return o&&o.length?pu(o,jt,Ad):t}function dx(o,c){return o&&o.length?pu(o,ne(c,2),Ad):t}var fx=wu(function(o,c){return o*c},1),px=Ld("round"),gx=wu(function(o,c){return o-c},0);function mx(o){return o&&o.length?cd(o,jt):0}function _x(o,c){return o&&o.length?cd(o,ne(c,2)):0}return _.after=U1,_.ary=By,_.assign=bD,_.assignIn=ev,_.assignInWith=Ou,_.assignWith=SD,_.at=PD,_.before=qy,_.bind=Kd,_.bindAll=Nk,_.bindKey=Wy,_.castArray=J1,_.chain=My,_.chunk=oC,_.compact=aC,_.concat=cC,_.cond=Ok,_.conforms=Lk,_.constant=ef,_.countBy=m1,_.create=CD,_.curry=$y,_.curryRight=zy,_.debounce=Gy,_.defaults=DD,_.defaultsDeep=kD,_.defer=B1,_.delay=q1,_.difference=uC,_.differenceBy=lC,_.differenceWith=hC,_.drop=dC,_.dropRight=fC,_.dropRightWhile=pC,_.dropWhile=gC,_.fill=mC,_.filter=y1,_.flatMap=w1,_.flatMapDeep=E1,_.flatMapDepth=T1,_.flatten=Ny,_.flattenDeep=_C,_.flattenDepth=yC,_.flip=W1,_.flow=Mk,_.flowRight=Fk,_.fromPairs=vC,_.functions=FD,_.functionsIn=UD,_.groupBy=A1,_.initial=wC,_.intersection=EC,_.intersectionBy=TC,_.intersectionWith=AC,_.invert=qD,_.invertBy=WD,_.invokeMap=b1,_.iteratee=tf,_.keyBy=S1,_.keys=ft,_.keysIn=Kt,_.map=Pu,_.mapKeys=zD,_.mapValues=GD,_.matches=Uk,_.matchesProperty=Bk,_.memoize=Du,_.merge=HD,_.mergeWith=tv,_.method=qk,_.methodOf=Wk,_.mixin=nf,_.negate=ku,_.nthArg=zk,_.omit=KD,_.omitBy=jD,_.once=$1,_.orderBy=P1,_.over=Gk,_.overArgs=z1,_.overEvery=Hk,_.overSome=Kk,_.partial=jd,_.partialRight=Hy,_.partition=C1,_.pick=QD,_.pickBy=nv,_.property=uv,_.propertyOf=jk,_.pull=PC,_.pullAll=Ly,_.pullAllBy=CC,_.pullAllWith=DC,_.pullAt=kC,_.range=Qk,_.rangeRight=Yk,_.rearg=G1,_.reject=x1,_.remove=xC,_.rest=H1,_.reverse=Gd,_.sampleSize=O1,_.set=JD,_.setWith=XD,_.shuffle=L1,_.slice=NC,_.sortBy=F1,_.sortedUniq=BC,_.sortedUniqBy=qC,_.split=wk,_.spread=K1,_.tail=WC,_.take=$C,_.takeRight=zC,_.takeRightWhile=GC,_.takeWhile=HC,_.tap=a1,_.throttle=j1,_.thru=Su,_.toArray=Jy,_.toPairs=rv,_.toPairsIn=iv,_.toPath=tx,_.toPlainObject=Zy,_.transform=ZD,_.unary=Q1,_.union=KC,_.unionBy=jC,_.unionWith=QC,_.uniq=YC,_.uniqBy=JC,_.uniqWith=XC,_.unset=ek,_.unzip=Hd,_.unzipWith=Vy,_.update=tk,_.updateWith=nk,_.values=Ps,_.valuesIn=rk,_.without=ZC,_.words=av,_.wrap=Y1,_.xor=e1,_.xorBy=t1,_.xorWith=n1,_.zip=r1,_.zipObject=i1,_.zipObjectDeep=s1,_.zipWith=o1,_.entries=rv,_.entriesIn=iv,_.extend=ev,_.extendWith=Ou,nf(_,_),_.add=rx,_.attempt=cv,_.camelCase=ak,_.capitalize=sv,_.ceil=ix,_.clamp=ik,_.clone=X1,_.cloneDeep=eD,_.cloneDeepWith=tD,_.cloneWith=Z1,_.conformsTo=nD,_.deburr=ov,_.defaultTo=Vk,_.divide=sx,_.endsWith=ck,_.eq=bn,_.escape=uk,_.escapeRegExp=lk,_.every=_1,_.find=v1,_.findIndex=ky,_.findKey=xD,_.findLast=I1,_.findLastIndex=xy,_.findLastKey=ND,_.floor=ox,_.forEach=Fy,_.forEachRight=Uy,_.forIn=OD,_.forInRight=LD,_.forOwn=VD,_.forOwnRight=MD,_.get=Jd,_.gt=rD,_.gte=iD,_.has=BD,_.hasIn=Xd,_.head=Oy,_.identity=jt,_.includes=R1,_.indexOf=IC,_.inRange=sk,_.invoke=$D,_.isArguments=Ri,_.isArray=ue,_.isArrayBuffer=sD,_.isArrayLike=Ht,_.isArrayLikeObject=it,_.isBoolean=oD,_.isBuffer=Mr,_.isDate=aD,_.isElement=cD,_.isEmpty=uD,_.isEqual=lD,_.isEqualWith=hD,_.isError=Qd,_.isFinite=dD,_.isFunction=ur,_.isInteger=Ky,_.isLength=xu,_.isMap=jy,_.isMatch=fD,_.isMatchWith=pD,_.isNaN=gD,_.isNative=mD,_.isNil=yD,_.isNull=_D,_.isNumber=Qy,_.isObject=He,_.isObjectLike=Qe,_.isPlainObject=na,_.isRegExp=Yd,_.isSafeInteger=vD,_.isSet=Yy,_.isString=Nu,_.isSymbol=rn,_.isTypedArray=Ss,_.isUndefined=ID,_.isWeakMap=wD,_.isWeakSet=ED,_.join=RC,_.kebabCase=hk,_.last=_n,_.lastIndexOf=bC,_.lowerCase=dk,_.lowerFirst=fk,_.lt=TD,_.lte=AD,_.max=ax,_.maxBy=cx,_.mean=ux,_.meanBy=lx,_.min=hx,_.minBy=dx,_.stubArray=sf,_.stubFalse=of,_.stubObject=Jk,_.stubString=Xk,_.stubTrue=Zk,_.multiply=fx,_.nth=SC,_.noConflict=$k,_.noop=rf,_.now=Cu,_.pad=pk,_.padEnd=gk,_.padStart=mk,_.parseInt=_k,_.random=ok,_.reduce=D1,_.reduceRight=k1,_.repeat=yk,_.replace=vk,_.result=YD,_.round=px,_.runInContext=A,_.sample=N1,_.size=V1,_.snakeCase=Ik,_.some=M1,_.sortedIndex=OC,_.sortedIndexBy=LC,_.sortedIndexOf=VC,_.sortedLastIndex=MC,_.sortedLastIndexBy=FC,_.sortedLastIndexOf=UC,_.startCase=Ek,_.startsWith=Tk,_.subtract=gx,_.sum=mx,_.sumBy=_x,_.template=Ak,_.times=ex,_.toFinite=lr,_.toInteger=fe,_.toLength=Xy,_.toLower=Rk,_.toNumber=yn,_.toSafeInteger=RD,_.toString=Pe,_.toUpper=bk,_.trim=Sk,_.trimEnd=Pk,_.trimStart=Ck,_.truncate=Dk,_.unescape=kk,_.uniqueId=nx,_.upperCase=xk,_.upperFirst=Zd,_.each=Fy,_.eachRight=Uy,_.first=Oy,nf(_,function(){var o={};return Nn(_,function(c,u){Ce.call(_.prototype,u)||(o[u]=c)}),o}(),{chain:!1}),_.VERSION=r,dn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(o){_[o].placeholder=_}),dn(["drop","take"],function(o,c){ve.prototype[o]=function(u){u=u===t?1:ht(fe(u),0);var d=this.__filtered__&&!c?new ve(this):this.clone();return d.__filtered__?d.__takeCount__=Dt(u,d.__takeCount__):d.__views__.push({size:Dt(u,xn),type:o+(d.__dir__<0?"Right":"")}),d},ve.prototype[o+"Right"]=function(u){return this.reverse()[o](u).reverse()}}),dn(["filter","map","takeWhile"],function(o,c){var u=c+1,d=u==Te||u==Fh;ve.prototype[o]=function(g){var y=this.clone();return y.__iteratees__.push({iteratee:ne(g,3),type:u}),y.__filtered__=y.__filtered__||d,y}}),dn(["head","last"],function(o,c){var u="take"+(c?"Right":"");ve.prototype[o]=function(){return this[u](1).value()[0]}}),dn(["initial","tail"],function(o,c){var u="drop"+(c?"":"Right");ve.prototype[o]=function(){return this.__filtered__?new ve(this):this[u](1)}}),ve.prototype.compact=function(){return this.filter(jt)},ve.prototype.find=function(o){return this.filter(o).head()},ve.prototype.findLast=function(o){return this.reverse().find(o)},ve.prototype.invokeMap=me(function(o,c){return typeof o=="function"?new ve(this):this.map(function(u){return Yo(u,o,c)})}),ve.prototype.reject=function(o){return this.filter(ku(ne(o)))},ve.prototype.slice=function(o,c){o=fe(o);var u=this;return u.__filtered__&&(o>0||c<0)?new ve(u):(o<0?u=u.takeRight(-o):o&&(u=u.drop(o)),c!==t&&(c=fe(c),u=c<0?u.dropRight(-c):u.take(c-o)),u)},ve.prototype.takeRightWhile=function(o){return this.reverse().takeWhile(o).reverse()},ve.prototype.toArray=function(){return this.take(xn)},Nn(ve.prototype,function(o,c){var u=/^(?:filter|find|map|reject)|While$/.test(c),d=/^(?:head|last)$/.test(c),g=_[d?"take"+(c=="last"?"Right":""):c],y=d||/^find/.test(c);g&&(_.prototype[c]=function(){var v=this.__wrapped__,T=d?[1]:arguments,R=v instanceof ve,k=T[0],x=R||ue(v),V=function(_e){var we=g.apply(_,Dr([_e],T));return d&&z?we[0]:we};x&&u&&typeof k=="function"&&k.length!=1&&(R=x=!1);var z=this.__chain__,Q=!!this.__actions__.length,re=y&&!z,ge=R&&!Q;if(!y&&x){v=ge?v:new ve(this);var ie=o.apply(v,T);return ie.__actions__.push({func:Su,args:[V],thisArg:t}),new pn(ie,z)}return re&&ge?o.apply(this,T):(ie=this.thru(V),re?d?ie.value()[0]:ie.value():ie)})}),dn(["pop","push","shift","sort","splice","unshift"],function(o){var c=Zc[o],u=/^(?:push|sort|unshift)$/.test(o)?"tap":"thru",d=/^(?:pop|shift)$/.test(o);_.prototype[o]=function(){var g=arguments;if(d&&!this.__chain__){var y=this.value();return c.apply(ue(y)?y:[],g)}return this[u](function(v){return c.apply(ue(v)?v:[],g)})}}),Nn(ve.prototype,function(o,c){var u=_[c];if(u){var d=u.name+"";Ce.call(Es,d)||(Es[d]=[]),Es[d].push({name:c,func:u})}}),Es[Iu(t,Z).name]=[{name:"wrapper",func:t}],ve.prototype.clone=kS,ve.prototype.reverse=xS,ve.prototype.value=NS,_.prototype.at=c1,_.prototype.chain=u1,_.prototype.commit=l1,_.prototype.next=h1,_.prototype.plant=f1,_.prototype.reverse=p1,_.prototype.toJSON=_.prototype.valueOf=_.prototype.value=g1,_.prototype.first=_.prototype.head,$o&&(_.prototype[$o]=d1),_},vs=lS();_i?((_i.exports=vs)._=vs,td._=vs):wt._=vs}).call(dr)})(Ul,Ul.exports);var AR=Ul.exports;const RR=fR(AR);function IW(){return Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)}const bR=document.querySelector(".search__wrapper"),Tw=document.querySelector(".search__input"),Bl=document.querySelector(".filters__list"),Sp=document.querySelector(".filters__category"),wW=RR.debounce(RW,500);async function EW(n){try{const e=await n.fetchFilters(),r=[...new Set(e.map(({filter:i})=>i))].map((i,s)=>{const a=i.toLowerCase().split(" ").join("-");return s===0?`<li id=${a} class="filters__item active">${i}</li>`:`<li id=${a} class="filters__item">${i}</li>`}).join("");Bl.insertAdjacentHTML("afterbegin",r),ai()}catch(e){console.log("Error fetching filters:",e)}}function TW(n){const e=n.charAt(0).toUpperCase()+n.slice(1,n.length);Sp.innerHTML=`<div>/</div>${e}`,Sp.classList.add("active"),bR.classList.add("active")}function AW(){Sp.classList.remove("active"),bR.classList.remove("active")}async function RW(n){const e=n.target.value.toLowerCase().trim();Mn.keyword=e,ai()}function bW(n){const e=n.target,t=n.target.id;e.classList.contains("active")&&(aR({filter:t,bodypart:"",keyword:"",muscles:"",equipment:""},Fe),ai()),[...Bl.children].forEach(r=>{r.classList.remove("active")}),e.classList.add("active"),AW(),Fe.currentPage=1,ai()}function SW(){if(Fe.endPoint!=1){const n=new fc;EW(n)}}Tw&&Tw.addEventListener("input",wW);Bl&&Bl.addEventListener("click",bW);function SR(n){document.querySelector(n).scrollIntoView({behavior:"smooth"})}window.addEventListener("resize",RR.debounce(ai,1e3));const PW=1440;let Mn={filter:"Muscles",bodypart:"",keyword:"",muscles:"",equipment:""};const Fe={currentPage:1,endPoint:3},Yn={cardsLinks:null,pageLinks:null,workoutLinks:null};async function ai(){document.querySelector(".exercise-cards__section").offsetHeight;const e=new fc,t=IW();let r,i;aR(Mn,Fe),Hs(xe.visuallyHidden,xe.emptyParag),Ls(xe.emptyWrapper,xe.exerciseWrapper),vW(Fe.endPoint,t);try{switch(Fe.endPoint){case 1:if(Hs(xe.favoriteWrapper,xe.exerciseWrapper),Ls(xe.workoutWrapper,xe.exerciseWrapper),r=await L4(Fe,t),r.currentData.length<1)throw new Error("No data");Hu(),Ku(),x4(r.currentData),t<PW&&Df(Fe.currentPage,r.totalPages),kf(Fe.endPoint);break;case 2:if(Ls(xe.favoriteWrapper,xe.exerciseWrapper),Hs(xe.workoutWrapper,xe.exerciseWrapper),SR(".exercises"),i=N4(Fe.currentPage,Fe.endPoint,e,Mn,i,t),r=await fw(i),r.length<1)throw new Error("No data");Hu(),Ku(),k4(r),Df(Fe.currentPage,e.maxPages),kf(Fe.endPoint),xW();break;case 3:Ls(xe.workoutWrapper,xe.exerciseWrapper),Ls(xe.favoriteWrapper,xe.exerciseWrapper),i=O4(Fe.currentPage,Fe.endPoint,e,Mn,i,t),r=await fw(i),Hu(),Ku(),D4(r),Df(Fe.currentPage,e.maxPages),CW(),kf(Fe.endPoint);break}}catch{Hu(),Ku(),Hs(xe.emptyWrapper,xe.exerciseWrapper),Fe.endPoint!=1?Vl(Ll.stringHome,xe.exerciseWrapper):Vl(Ll.stringFavorite,xe.exerciseWrapper),Ls(xe.visuallyHidden,xe.emptyParag)}}function CW(){Yn.cardsLinks=document.querySelector(".js-cards"),Yn.cardsLinks?Yn.cardsLinks.addEventListener("click",PR):console.error("Element with class 'js-cards' not found.")}function PR(n){const e=V4(n);TW(e),DW(e),e!=null&&(Mn.filter==="Muscles"?(Fe.endPoint=2,Mn.muscles=e):Mn.filter==="Body%20parts"?(Fe.endPoint=2,Mn.bodypart=e):Mn.filter==="Equipment"&&(Fe.endPoint=2,Mn.equipment=e)),Yn.cardsLinks.removeEventListener("click",PR),Fe.currentPage=1,ai()}function DW(n){return n.includes(" ")?n.replace(" ","%20"):n}function kf(){Yn.pageLinks=document.querySelector(".js-pages"),Yn.pageLinks?Yn.pageLinks.addEventListener("click",kW):console.error("Element with class 'js-pages' not found.")}function kW(n){const e=M4(n);console.log("clicked page:",e),SR(window.location.href.includes("/favorites")?".favorites":".exercises"),Fe.currentPage!=e&&e!=null&&(Fe.currentPage=+e,ai())}function xW(){Yn.workoutLinks=document.querySelector(".js-cards"),Yn.workoutLinks?Yn.workoutLinks.addEventListener("click",NW):console.error("Element with class 'js-cards' not found for workout.")}async function NW(n){const e=F4(n);if(!e)return;const t=new fc;try{t.id=e;const r=await t.fetchExerciseById();if(AR.isEmpty(r))throw new Error("Exercise not found!");r.isFavorite=await $i.idIsFavorite(e),qc(r)}catch(r){console.error(r)}}function OW(){window.location.href.includes("/favorite")?(Fe.endPoint=1,ai()):SW()}OW();document.querySelectorAll(".header__nav");const LW=document.querySelectorAll("section"),VW=n=>{const e={rootMargin:"100px",threshold:.2},t=(i,s)=>{i.forEach(({isIntersecting:a,target:l})=>{a&&(l.classList.add("appear"),s.unobserve(l))})},r=new IntersectionObserver(t,e);n.forEach(i=>r.observe(i))};setTimeout(()=>{VW(LW)},250);export{tr as d,Rp as r,C4 as s};

var ye=Object.defineProperty,ve=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var Me=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var ne=(n,r,s)=>r in n?ye(n,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[r]=s,k=(n,r)=>{for(var s in r||(r={}))Me.call(r,s)&&ne(n,s,r[s]);if(oe)for(var s of oe(r))Ce.call(r,s)&&ne(n,s,r[s]);return n},j=(n,r)=>ve(n,be(r));var A=(n,r,s)=>new Promise((i,c)=>{var a=d=>{try{t(s.next(d))}catch(u){c(u)}},e=d=>{try{t(s.throw(d))}catch(u){c(u)}},t=d=>d.done?i(d.value):Promise.resolve(d.value).then(a,e);t((s=s.apply(n,r)).next())});import{h as ce,D as He,q as Se,X as ke,L as Fe,v as Be,Y as Oe,Z as we,f as ue,V as Te,d as Pe,s as $e,K as de,t as Ne,w as De}from"./entry/index-tlZkG8lf-1708651968736.js";import{h as X,u as o,d as _,I as Re,k as F,i as _e,f as g,c as B,w as pe,o as We,b as fe,y as $,n as xe,Z as M,a8 as D,a9 as h,m as Ee,_ as V,ae as N,ag as je,F as Le,ab as U,a1 as Ie,a7 as Ae,G as Z,a0 as G,ac as L,K as qe,g as Q,z as ze,ad as ae,aa as le,aj as se,ak as re,r as me,J as q}from"./vue-COhTiP8A.js";import{M as Ve,aC as Xe,T as K,aD as Ye,aE as Ke,o as z,e as ge,a as Ue}from"./antd-BS7GgtZr.js";import{u as Ze}from"./useWindowSizeFn-CLuML0CN.js";const{t:ie}=ce(),Ge={open:{type:Boolean},scrollTop:{type:Boolean,default:!0},height:{type:Number},minHeight:{type:Number},draggable:{type:Boolean,default:!0},centered:{type:Boolean},cancelText:{type:String,default:ie("common.cancelText")},okText:{type:String,default:ie("common.okText")},closeFunc:Function},ee=Object.assign({},Ge,{defaultFullscreen:{type:Boolean},canFullscreen:{type:Boolean,default:!0},wrapperFooterOffset:{type:Number,default:0},helpMessage:[String,Array],useWrapper:{type:Boolean,default:!0},loading:{type:Boolean},loadingTip:{type:String},showCancelBtn:{type:Boolean,default:!0},showOkBtn:{type:Boolean,default:!0},wrapperProps:Object,afterClose:Function,bodyStyle:Object,closable:{type:Boolean,default:!0},closeIcon:Object,confirmLoading:{type:Boolean},destroyOnClose:{type:Boolean},footer:Object,getContainer:Function,mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},maskStyle:Object,okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,title:{type:String},open:{type:Boolean},width:[String,Number],wrapClassName:{type:String},zIndex:{type:Number}});function Je(n){const r=(c,a)=>getComputedStyle(c)[a],s=c=>{if(!c)return;c.setAttribute("data-drag",o(n.draggable));const a=c.querySelector(".ant-modal-header"),e=c.querySelector(".ant-modal");!a||!e||!o(n.draggable)||(a.style.cursor="move",a.onmousedown=t=>{if(!t)return;const d=t.clientX,u=t.clientY,S=document.body.clientWidth,b=document.documentElement.clientHeight,y=e.offsetWidth,p=e.offsetHeight,f=e.offsetLeft,m=S-e.offsetLeft-y,v=e.offsetTop,O=b-e.offsetTop-p,C=r(e,"left"),H=r(e,"top");let W=+C,x=+H;C.includes("%")?(W=+document.body.clientWidth*(+C.replace(/%/g,"")/100),x=+document.body.clientHeight*(+H.replace(/%/g,"")/100)):(W=+C.replace(/px/g,""),x=+H.replace(/px/g,"")),document.onmousemove=function(I){let T=I.clientX-d,P=I.clientY-u;-T>f?T=-f:T>m&&(T=m),-P>v?P=-v:P>O&&(P=O),e.style.cssText+=`;left:${T+W}px;top:${P+x}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})},i=()=>{const c=document.querySelectorAll(".ant-modal-wrap");for(const a of Array.from(c)){if(!a)continue;const e=r(a,"display"),t=a.getAttribute("data-drag");e!=="none"&&(t===null||o(n.destroyOnClose))&&s(a)}};X(()=>{!o(n.open)||!o(n.draggable)||He(()=>{i()},30)})}function Qe(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!_e(n)}const et=_({name:"Modal",inheritAttrs:!1,props:ee,emits:["cancel"],setup(n,{slots:r,emit:s}){const{open:i,draggable:c,destroyOnClose:a}=Re(n),e=Se();Je({open:i,destroyOnClose:a,draggable:c});const t=d=>{s("cancel",d)};return()=>{let d;const u=j(k(k({},o(e)),n),{onCancel:t});return F(Ve,u,Qe(d=ke(r))?d:{default:()=>[d]})}}}),he=Symbol();function tt(n){return Be(n,he)}function mt(){return Fe(he)}const ot=["loading-tip"],nt=_({name:"ModalWrapper",inheritAttrs:!1,__name:"ModalWrapper",props:{loading:{type:Boolean},useWrapper:{type:Boolean,default:!0},modalHeaderHeight:{type:Number,default:57},modalFooterHeight:{type:Number,default:74},minHeight:{type:Number,default:200},height:{type:Number},footerOffset:{type:Number,default:0},open:{type:Boolean},fullScreen:{type:Boolean},loadingTip:{type:String}},emits:["height-change","ext-height"],setup(n,{expose:r,emit:s}){const i=n,c=s,a=g(null),e=g(null),t=g(0),d=g(0),u=g(0);Ze(y.bind(null)),Oe(e,()=>{y()},{attributes:!0,subtree:!0}),tt({redoModalHeight:y});const S=B(()=>({minHeight:`${i.minHeight}px`,[i.fullScreen?"height":"maxHeight"]:`${o(t)}px`}));X(()=>{i.useWrapper&&y()}),pe(()=>i.fullScreen,p=>{y(),p?d.value=t.value:t.value=d.value}),We(()=>{const{modalHeaderHeight:p,modalFooterHeight:f}=i;c("ext-height",p+f)}),fe(()=>{});function b(){return A(this,null,function*(){$(()=>{var f;const p=o(a);p&&((f=p==null?void 0:p.scrollTo)==null||f.call(p,0))})})}function y(){return A(this,null,function*(){if(!i.open)return;const p=o(a);if(!p)return;const f=p.$el.parentElement;if(f){f.style.padding="0",yield $();try{const m=f.parentElement&&f.parentElement.parentElement;if(!m)return;const v=getComputedStyle(m).top,O=Number.parseInt(v);let C=window.innerHeight-O*2+(i.footerOffset||0)-i.modalFooterHeight-i.modalHeaderHeight;O<40&&(C-=26),yield $();const H=o(e);if(!H)return;yield $(),u.value=H.scrollHeight,i.fullScreen?t.value=window.innerHeight-i.modalFooterHeight-i.modalHeaderHeight-28:t.value=i.height?i.height:u.value>C?C:u.value,c("height-change",o(t))}catch(m){}}})}return r({scrollTop:b,setModalHeight:y}),(p,f)=>{const m=xe("loading");return M(),D(o(we),{ref_key:"wrapperRef",ref:a,scrollHeight:u.value},{default:h(()=>[Ee((M(),V("div",{ref_key:"spinRef",ref:e,style:je(S.value),"loading-tip":n.loadingTip},[N(p.$slots,"default")],12,ot)),[[m,n.loading]])]),_:3},8,["scrollHeight"])}}}),at=_({name:"ModalClose",__name:"ModalClose",props:{canFullscreen:{type:Boolean,default:!0},fullScreen:{type:Boolean}},emits:["cancel","fullscreen"],setup(n,{emit:r}){const s=n,i=r,{prefixCls:c}=ue("basic-modal-close"),{t:a}=ce(),e=B(()=>[c,`${c}--custom`,{[`${c}--can-full`]:s.canFullscreen}]);function t(u){i("cancel",u)}function d(u){u==null||u.stopPropagation(),u==null||u.preventDefault(),i("fullscreen")}return(u,S)=>(M(),V("div",{class:Ie(e.value)},[n.canFullscreen?(M(),V(Le,{key:0},[n.fullScreen?(M(),D(o(K),{key:0,title:o(a)("component.modal.restore"),placement:"bottom"},{default:h(()=>[F(o(Xe),{role:"full",onClick:d})]),_:1},8,["title"])):(M(),D(o(K),{key:1,title:o(a)("component.modal.maximize"),placement:"bottom"},{default:h(()=>[F(o(Ye),{role:"close",onClick:d})]),_:1},8,["title"]))],64)):U("",!0),F(o(K),{title:o(a)("component.modal.close"),placement:"bottom"},{default:h(()=>[F(o(Ke),{onClick:t})]),_:1},8,["title"])],2))}}),lt=_({name:"BasicModalFooter",__name:"ModalFooter",props:ee,emits:["ok","cancel"],setup(n,{emit:r}){const s=r;function i(a){s("ok",a)}function c(a){s("cancel",a)}return(a,e)=>{const t=Ae("a-button");return M(),V("div",null,[N(a.$slots,"insertFooter"),a.showCancelBtn?(M(),D(t,L({key:0},a.cancelButtonProps,{onClick:c}),{default:h(()=>[Z(G(a.cancelText),1)]),_:1},16)):U("",!0),N(a.$slots,"centerFooter"),a.showOkBtn?(M(),D(t,L({key:1,type:a.okType,onClick:i,loading:a.confirmLoading},a.okButtonProps),{default:h(()=>[Z(G(a.okText),1)]),_:1},16,["type","loading"])):U("",!0),N(a.$slots,"appendFooter")])}}}),st=_({name:"BasicModalHeader",__name:"ModalHeader",props:{helpMessage:{type:[String,Array]},title:{type:String}},setup(n){return(r,s)=>(M(),D(o(Te),{helpMessage:n.helpMessage},{default:h(()=>[Z(G(n.title),1)]),_:1},8,["helpMessage"]))}});function rt(n){const r=g(!1),s=B(()=>{const c=o(n.wrapClassName)||"";return o(r)?`fullscreen-modal ${c} `:o(c)});function i(c){c&&c.stopPropagation(),r.value=!o(r)}return{getWrapClassName:s,handleFullScreen:i,fullScreenRef:r}}const it=_({name:"BasicModal",inheritAttrs:!1,__name:"BasicModal",props:ee,emits:["open-change","height-change","cancel","ok","register","update:open","fullscreen"],setup(n,{emit:r}){const s=n,i=r,c=qe(),a=g(!1),e=g(null),t=g(null),{prefixCls:d}=ue("basic-modal"),u=g(0),S={setModalProps:W,emitOpen:void 0,redoModalHeight:()=>{$(()=>{o(t)&&o(t).setModalHeight()})}},b=Q();b&&i("register",S,b.uid);const y=B(()=>k(k({},s),o(e))),{handleFullScreen:p,getWrapClassName:f,fullScreenRef:m}=rt({modalWrapperRef:t,extHeightRef:u,wrapClassName:ze(y.value,"wrapClassName")}),v=B(()=>{const l=j(k({},o(y)),{open:o(a),okButtonProps:void 0,cancelButtonProps:void 0,title:void 0});return j(k({},l),{wrapClassName:o(f)})}),O=B(()=>{const l=j(k(k({},c),o(y)),{open:o(a)});return l.wrapClassName=`${(l==null?void 0:l.wrapClassName)||""} ${o(f)}vben-basic-modal-wrap`,o(m)?z(l,["height","title"]):z(l,"title")}),C=B(()=>{if(!o(m))return o(v).height});X(()=>{a.value=!!s.open,m.value=!!s.defaultFullscreen}),pe(()=>o(a),l=>{i("open-change",l),i("update:open",l),b&&S.emitOpen&&S.emitOpen(l,b.uid),$(()=>{s.scrollTop&&l&&o(t)&&o(t).scrollTop()})},{immediate:!1});function H(l){return A(this,null,function*(){var Y,w;if(l==null||l.stopPropagation(),!((w=(Y=l.target)==null?void 0:Y.classList)!=null&&w.contains(d+"-close--custom"))){if(s.closeFunc&&ge(s.closeFunc)){const E=yield s.closeFunc();a.value=!E;return}a.value=!1,i("cancel",l)}})}function W(l){e.value=Pe(o(e)||{},l),Reflect.has(l,"open")&&(a.value=!!l.open),Reflect.has(l,"defaultFullscreen")&&(m.value=!!l.defaultFullscreen)}function x(l){i("ok",l)}function I(l){i("height-change",l)}function T(l){u.value=l}function P(l){s.canFullscreen&&(l.stopPropagation(),te(l))}function te(l){p(l),i("fullscreen")}return(l,Y)=>(M(),D(o(et),L(O.value,{onCancel:H}),ae({default:h(()=>[F(nt,L({useWrapper:v.value.useWrapper,footerOffset:l.wrapperFooterOffset,fullScreen:o(m),ref_key:"modalWrapperRef",ref:t,loading:v.value.loading,"loading-tip":v.value.loadingTip,minHeight:v.value.minHeight,height:C.value,open:a.value,modalFooterHeight:l.footer!==void 0&&!l.footer?0:void 0},o(z)(v.value.wrapperProps,"open","height","modalFooterHeight"),{onExtHeight:T,onHeightChange:I}),{default:h(()=>[N(l.$slots,"default")]),_:3},16,["useWrapper","footerOffset","fullScreen","loading","loading-tip","minHeight","height","open","modalFooterHeight"])]),_:2},[l.$slots.closeIcon?void 0:{name:"closeIcon",fn:h(()=>[F(at,{canFullscreen:v.value.canFullscreen,fullScreen:o(m),onCancel:H,onFullscreen:te},null,8,["canFullscreen","fullScreen"])]),key:"0"},l.$slots.title?void 0:{name:"title",fn:h(()=>[F(st,{helpMessage:v.value.helpMessage,title:y.value.title,onDblclick:P},null,8,["helpMessage","title"])]),key:"1"},l.$slots.footer?void 0:{name:"footer",fn:h(()=>[F(lt,L(O.value,{onOk:x,onCancel:H}),ae({_:2},[le(Object.keys(l.$slots),w=>({name:w,fn:h(E=>[N(l.$slots,w,se(re(E||{})))])}))]),1040)]),key:"2"},le(Object.keys(o(z)(l.$slots,"default")),w=>({name:w,fn:h(E=>[N(l.$slots,w,se(re(E||{})))])}))]),1040))}}),R=me({}),J=me({});function gt(){const n=g(null),r=g(!1),s=g(0);function i(e,t){if(!Q())throw new Error("useModal() can only be used inside setup() or functional components!");s.value=t,fe(()=>{n.value=null,r.value=!1,R[String(o(s))]=null}),!(o(r)&&$e()&&e===o(n))&&(n.value=e,r.value=!0,e.emitOpen=(d,u)=>{J[u]=d})}const c=()=>{const e=o(n);return e||de("useModal instance is undefined!"),e},a={setModalProps:e=>{var t;(t=c())==null||t.setModalProps(e)},getOpen:B(()=>J[~~o(s)]),redoModalHeight:()=>{var e,t;(t=(e=c())==null?void 0:e.redoModalHeight)==null||t.call(e)},openModal:(e=!0,t,d=!0)=>{var b;if((b=c())==null||b.setModalProps({open:e}),!t)return;const u=o(s);if(d){R[u]=null,R[u]=q(t);return}Ue(q(R[u]),q(t))||(R[u]=q(t))},closeModal:()=>{var e;(e=c())==null||e.setModalProps({open:!1})}};return[i,a]}const ht=n=>{const r=g(null),s=Q(),i=g(0),c=()=>{const e=o(r);return e||de("useModalInner instance is undefined!"),e},a=(e,t)=>{Ne(()=>{r.value=null}),i.value=t,r.value=e,s==null||s.emit("register",e,t)};return X(()=>{const e=R[o(i)];e&&(!n||!ge(n)||$(()=>{n(e)}))}),[a,{changeLoading:(e=!0)=>{var t;(t=c())==null||t.setModalProps({loading:e})},getOpen:B(()=>J[~~o(i)]),changeOkLoading:(e=!0)=>{var t;(t=c())==null||t.setModalProps({confirmLoading:e})},closeModal:()=>{var e;(e=c())==null||e.setModalProps({open:!1})},setModalProps:e=>{var t;(t=c())==null||t.setModalProps(e)},redoModalHeight:()=>{var t;const e=(t=c())==null?void 0:t.redoModalHeight;e&&e()}}]},yt=De(it);export{yt as B,ht as a,gt as b,mt as u};

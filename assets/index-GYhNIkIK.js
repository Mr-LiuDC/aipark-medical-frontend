var m=(u,s,t)=>new Promise((c,n)=>{var p=e=>{try{o(t.next(e))}catch(l){n(l)}},d=e=>{try{o(t.throw(e))}catch(l){n(l)}},o=e=>e.done?c(e.value):Promise.resolve(e.value).then(p,d);o((t=t.apply(u,s)).next())});import{P as x}from"./index-rdJJmm_t.js";import{l as y}from"./entry/index-tlZkG8lf-1708651968736.js";import{t as k}from"./account-BTP-nQbt.js";import{R as _}from"./antd-BS7GgtZr.js";import{d as C,a7 as h,Z as T,a8 as S,a9 as a,k as r,u as i,G as f,$ as w}from"./vue-COhTiP8A.js";import"./useContentViewHeight-Dxn1m5lM.js";import"./useWindowSizeFn-CLuML0CN.js";import"./onMountedOrActivated-GpUdBAv_.js";const g=w("span",null,null,-1),E=C({name:"TestSessionTimeout",__name:"index",setup(u){const s=_.Grid,t=y();function c(){return m(this,null,function*(){t.setToken(void 0),t.setSessionTimeout(!0)})}function n(){return m(this,null,function*(){try{yield k()}catch(p){}})}return(p,d)=>{const o=h("a-button");return T(),S(i(x),{title:"登录过期示例",content:"用户登录过期示例，不再跳转登录页，直接生成页面覆盖当前页面，方便保持过期前的用户状态！"},{default:a(()=>[r(i(_),{title:"请点击下面的按钮访问测试接口",extra:"所访问的接口会返回Token过期响应"},{default:a(()=>[r(i(s),{style:{width:"50%","text-align":"center"}},{default:a(()=>[r(o,{type:"primary",onClick:c},{default:a(()=>[f("HttpStatus == 401")]),_:1})]),_:1}),r(i(s),{style:{width:"50%","text-align":"center"}},{default:a(()=>[g,r(o,{class:"ml-4",type:"primary",onClick:n},{default:a(()=>[f("Response.code == 401")]),_:1})]),_:1})]),_:1})]),_:1})}}});export{E as default};

var f=(e,m,a)=>new Promise((u,i)=>{var d=t=>{try{r(a.next(t))}catch(n){i(n)}},l=t=>{try{r(a.throw(t))}catch(n){i(n)}},r=t=>t.done?u(t.value):Promise.resolve(t.value).then(d,l);r((a=a.apply(e,m)).next())});import{_ as v}from"./BasicForm.vue_vue_type_script_setup_true_lang-DOe8xB3P.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DehXK7Lc.js";import"./componentMap-C7zC0Ahq.js";import{u as g}from"./useForm-CiqW3-yk.js";import{l as C,C as I,a as b,c as S}from"./entry/index-tlZkG8lf-1708651968736.js";import{C as x}from"./index-7ifHv66o.js";import{h as A}from"./header-OZa5fSDc.js";import{a as w}from"./account-BTP-nQbt.js";import{b as B}from"./data-CMLH8mPi.js";import{u as U}from"./upload-CViyiyTw.js";import{d as V,o as k,c as y,a7 as M,Z as N,a8 as R,a9 as p,k as s,u as o,$ as h,G as F,a2 as G,a3 as T}from"./vue-COhTiP8A.js";import{U as $,V as _}from"./antd-BS7GgtZr.js";import"./FormItem.vue_vue_type_script_lang-B-XJ7ebF.js";import"./helper-BTu7FkVB.js";import"./index-Bgt4xmdn.js";import"./useWindowSizeFn-CLuML0CN.js";import"./useFormItem-CGQuU2J0.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-YOs4BwlT.js";import"./uuid-D0SLUWHI.js";import"./useSortable-BzoCqOKH.js";import"./download-ngl4iOF2.js";import"./base64Conver-bBv-IO2K.js";import"./index-rN9DXuVy.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-KIJacll8.js";import"./copyTextToClipboard-YrNkOw48.js";import"./index-jhR4y0bU.js";const E=e=>(G("data-v-73a9c434"),e=e(),T(),e),P={class:"change-avatar"},W=E(()=>h("div",{class:"mb-2"},"头像",-1)),Z=V({__name:"BaseSetting",setup(e){const{createMessage:m}=b(),a=C(),[u,{setFieldsValue:i}]=g({labelWidth:120,schemas:B,showActionButtonGroup:!1});k(()=>f(this,null,function*(){const t=yield w();i(t)}));const d=y(()=>{const{avatar:t}=a.getUserInfo;return t||A});function l({src:t,data:n}){const c=a.getUserInfo;c.avatar=t,a.setUserInfo(c)}function r(){m.success("更新成功！")}return(t,n)=>{const c=M("a-button");return N(),R(o(I),{title:"基本设置",canExpan:!1},{default:p(()=>[s(o($),{gutter:24},{default:p(()=>[s(o(_),{span:14},{default:p(()=>[s(o(v),{onRegister:o(u)},null,8,["onRegister"])]),_:1}),s(o(_),{span:10},{default:p(()=>[h("div",P,[W,s(o(x),{uploadApi:o(U),value:d.value,btnText:"更换头像",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:l,width:"150"},null,8,["uploadApi","value"])])]),_:1})]),_:1}),s(c,{type:"primary",onClick:r},{default:p(()=>[F(" 更新基本信息 ")]),_:1})]),_:1})}}}),_t=S(Z,[["__scopeId","data-v-73a9c434"]]);export{_t as default};
var k=(h,m,e)=>new Promise((t,l)=>{var f=r=>{try{a(e.next(r))}catch(i){l(i)}},_=r=>{try{a(e.throw(r))}catch(i){l(i)}},a=r=>r.done?t(r.value):Promise.resolve(r.value).then(f,_);a((e=e.apply(h,m)).next())});import{d as x,f as w,w as D,y as A,a7 as R,Z as u,_ as g,F as T,aa as S,m as V,A as I,k as s,u as o,a9 as n,G as y,a0 as b,a8 as $,ab as B}from"./vue-COhTiP8A.js";import{_ as M}from"./DetailModal.vue_vue_type_script_setup_true_lang-BEvFCPwW.js";import{_ as N}from"./BasicTable.vue_vue_type_script_setup_true_lang-DaiFyPwA.js";import"./TableImg.vue_vue_type_style_index_0_lang-BigB_-HG.js";import{a as j}from"./componentMap-C7zC0Ahq.js";import{u as F}from"./useTable-ZFTUst6G.js";import{b as G}from"./index-Bgt4xmdn.js";import{b as H,h as Z,aS as q}from"./entry/index-tlZkG8lf-1708651968736.js";import{getColumns as z}from"./data-BCYpJmJ6.js";import{f as J}from"./antd-BS7GgtZr.js";import"./index-Ks2-KrKr.js";import"./useDescription-pZ7jkW_9.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-DOe8xB3P.js";import"./FormItem.vue_vue_type_script_lang-B-XJ7ebF.js";import"./helper-BTu7FkVB.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DehXK7Lc.js";import"./useForm-CiqW3-yk.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-YOs4BwlT.js";import"./useFormItem-CGQuU2J0.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useWindowSizeFn-CLuML0CN.js";import"./useSortable-BzoCqOKH.js";import"./download-ngl4iOF2.js";import"./base64Conver-bBv-IO2K.js";import"./index-rN9DXuVy.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-KIJacll8.js";import"./copyTextToClipboard-YrNkOw48.js";import"./index-jhR4y0bU.js";import"./index-7ifHv66o.js";const K=()=>H.get({url:"/error"}),O={class:"p-4"},P=["src"],Ar=x({__name:"index",setup(h){const m=w(),e=w([]),{t}=Z(),l=q(),[f,{setTableData:_}]=F({title:t("sys.errorLog.tableTitle"),columns:z(),actionColumn:{width:80,title:"Action",dataIndex:"action"}}),[a,{openModal:r}]=G();D(()=>l.getErrorLogInfoList,c=>{A(()=>{_(J(c))})},{immediate:!0});function i(c){m.value=c,r(!0)}function C(){throw new Error("fire vue error!")}function E(){e.value.push(`${new Date().getTime()}.png`)}function L(){return k(this,null,function*(){yield K()})}return(c,Q)=>{const d=R("a-button");return u(),g("div",O,[(u(!0),g(T,null,S(e.value,p=>V((u(),g("img",{key:p,src:p,alt:""},null,8,P)),[[I,!1]])),128)),s(M,{info:m.value,onRegister:o(a)},null,8,["info","onRegister"]),s(o(N),{onRegister:o(f),class:"error-handle-table"},{toolbar:n(()=>[s(d,{onClick:C,type:"primary"},{default:n(()=>[y(b(o(t)("sys.errorLog.fireVueError")),1)]),_:1}),s(d,{onClick:E,type:"primary"},{default:n(()=>[y(b(o(t)("sys.errorLog.fireResourceError")),1)]),_:1}),s(d,{onClick:L,type:"primary"},{default:n(()=>[y(b(o(t)("sys.errorLog.fireAjaxError")),1)]),_:1})]),bodyCell:n(({column:p,record:v})=>[p.key==="action"?(u(),$(o(j),{key:0,actions:[{label:o(t)("sys.errorLog.tableActionDesc"),onClick:i.bind(null,v)}]},null,8,["actions"])):B("",!0)]),_:1},8,["onRegister"])])}}});export{Ar as default};
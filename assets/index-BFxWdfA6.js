import{_ as h}from"./BasicTable.vue_vue_type_script_setup_true_lang-DaiFyPwA.js";import"./TableImg.vue_vue_type_style_index_0_lang-BigB_-HG.js";import{a as b}from"./componentMap-C7zC0Ahq.js";import{u as g}from"./useTable-ZFTUst6G.js";import{c as C}from"./system-HW39ZoWX.js";import{u as k}from"./index-B6-tXvzt.js";import{_ as x,c as w,s as y}from"./RoleDrawer.vue_vue_type_script_setup_true_lang-BoRfRtml.js";import{d as R,a7 as S,Z as n,_ as B,k as o,a9 as r,G as D,a8 as T,u as e,ab as v}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-DOe8xB3P.js";import"./FormItem.vue_vue_type_script_lang-B-XJ7ebF.js";import"./entry/index-tlZkG8lf-1708651968736.js";import"./antd-BS7GgtZr.js";import"./helper-BTu7FkVB.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DehXK7Lc.js";import"./index-Bgt4xmdn.js";import"./useWindowSizeFn-CLuML0CN.js";import"./useForm-CiqW3-yk.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-YOs4BwlT.js";import"./useFormItem-CGQuU2J0.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useSortable-BzoCqOKH.js";import"./download-ngl4iOF2.js";import"./base64Conver-bBv-IO2K.js";import"./index-rN9DXuVy.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-KIJacll8.js";import"./copyTextToClipboard-YrNkOw48.js";import"./index-jhR4y0bU.js";import"./index-7ifHv66o.js";import"./index-BKvcFZES.js";import"./useContextMenu-oomsUIPX.js";const pe=R({name:"RoleManagement",__name:"index",setup(N){const[m,{openDrawer:i}]=k(),[s,{reload:l}]=g({title:"角色列表",api:C,columns:w,formConfig:{labelWidth:120,schemas:y},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function p(){i(!0,{isUpdate:!1})}function c(t){i(!0,{record:t,isUpdate:!0})}function u(t){}function d(){l()}return(t,V)=>{const f=S("a-button");return n(),B("div",null,[o(e(h),{onRegister:e(s)},{toolbar:r(()=>[o(f,{type:"primary",onClick:p},{default:r(()=>[D(" 新增角色 ")]),_:1})]),bodyCell:r(({column:_,record:a})=>[_.key==="action"?(n(),T(e(b),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:c.bind(null,a)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:u.bind(null,a)}}]},null,8,["actions"])):v("",!0)]),_:1},8,["onRegister"]),o(x,{onRegister:e(m),onSuccess:d},null,8,["onRegister"])])}}});export{pe as default};
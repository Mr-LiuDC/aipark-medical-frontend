import{_ as S}from"./BasicTable.vue_vue_type_script_setup_true_lang-DaiFyPwA.js";import"./TableImg.vue_vue_type_style_index_0_lang-BigB_-HG.js";import{a as k}from"./componentMap-C7zC0Ahq.js";import{u as I}from"./useTable-ZFTUst6G.js";import{g as M}from"./system-HW39ZoWX.js";import{P as R}from"./index-rdJJmm_t.js";import{_ as T}from"./DeptTree.vue_vue_type_script_setup_true_lang-R7gL5DIr.js";import{b as F}from"./index-Bgt4xmdn.js";import{_ as V}from"./AccountModal.vue_vue_type_script_setup_true_lang-Cmg5pvnC.js";import{c as $,s as N}from"./account.data-DEmDBdHJ.js";import{aM as A}from"./entry/index-tlZkG8lf-1708651968736.js";import{d as B,r as D,a7 as E,Z as c,a8 as l,a9 as o,k as i,u as e,G,ab as H}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-DOe8xB3P.js";import"./FormItem.vue_vue_type_script_lang-B-XJ7ebF.js";import"./helper-BTu7FkVB.js";import"./antd-BS7GgtZr.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DehXK7Lc.js";import"./useForm-CiqW3-yk.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-YOs4BwlT.js";import"./useFormItem-CGQuU2J0.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useWindowSizeFn-CLuML0CN.js";import"./useSortable-BzoCqOKH.js";import"./download-ngl4iOF2.js";import"./base64Conver-bBv-IO2K.js";import"./index-rN9DXuVy.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-KIJacll8.js";import"./copyTextToClipboard-YrNkOw48.js";import"./index-jhR4y0bU.js";import"./index-7ifHv66o.js";import"./useContentViewHeight-Dxn1m5lM.js";import"./index-BKvcFZES.js";import"./useContextMenu-oomsUIPX.js";const wt=B({name:"AccountManagement",__name:"index",setup(P){const p=A(),[d,{openModal:a}]=F(),s=D({}),[u,{reload:m,updateTableDataRecord:f}]=I({title:"账号列表",api:M,rowKey:"id",columns:$,formConfig:{labelWidth:120,schemas:N,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(t){return t},actionColumn:{width:120,title:"操作",dataIndex:"action"}});function _(){a(!0,{isUpdate:!1})}function h(t){a(!0,{record:t,isUpdate:!0})}function b(t){}function g({isUpdate:t,values:n}){t?f(n.id,n):m()}function C(t=""){s.deptId=t,m()}function x(t){p("/system/account_detail/"+t.id)}return(t,n)=>{const w=E("a-button");return c(),l(e(R),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:o(()=>[i(T,{class:"w-1/4 xl:w-1/5",onSelect:C}),i(e(S),{onRegister:e(u),class:"w-3/4 xl:w-4/5",searchInfo:s},{toolbar:o(()=>[i(w,{type:"primary",onClick:_},{default:o(()=>[G("新增账号")]),_:1})]),bodyCell:o(({column:y,record:r})=>[y.key==="action"?(c(),l(e(k),{key:0,actions:[{icon:"clarity:info-standard-line",tooltip:"查看用户详情",onClick:x.bind(null,r)},{icon:"clarity:note-edit-line",tooltip:"编辑用户资料",onClick:h.bind(null,r)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"删除此账号",popConfirm:{title:"是否确认删除",placement:"left",confirm:b.bind(null,r)}}]},null,8,["actions"])):H("",!0)]),_:1},8,["onRegister","searchInfo"]),i(V,{onRegister:e(d),onSuccess:g},null,8,["onRegister"])]),_:1})}}});export{wt as default};

import{_ as s}from"./BasicTable.vue_vue_type_script_setup_true_lang-DaiFyPwA.js";import"./TableImg.vue_vue_type_style_index_0_lang-BigB_-HG.js";import{a as c}from"./componentMap-C7zC0Ahq.js";import{u as d}from"./useTable-ZFTUst6G.js";import{P as u}from"./index-rdJJmm_t.js";import{getBasicColumns as f}from"./tableData-GYBcbS-V.js";import{d as _}from"./table-DBdSLmNw.js";import{d as b,Z as a,a8 as n,a9 as e,k as g,u as o,$ as C,a0 as x,ab as B}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-DOe8xB3P.js";import"./FormItem.vue_vue_type_script_lang-B-XJ7ebF.js";import"./entry/index-tlZkG8lf-1708651968736.js";import"./antd-BS7GgtZr.js";import"./helper-BTu7FkVB.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DehXK7Lc.js";import"./index-Bgt4xmdn.js";import"./useWindowSizeFn-CLuML0CN.js";import"./useForm-CiqW3-yk.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-YOs4BwlT.js";import"./useFormItem-CGQuU2J0.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useSortable-BzoCqOKH.js";import"./download-ngl4iOF2.js";import"./base64Conver-bBv-IO2K.js";import"./index-rN9DXuVy.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-KIJacll8.js";import"./copyTextToClipboard-YrNkOw48.js";import"./index-jhR4y0bU.js";import"./index-7ifHv66o.js";import"./useContentViewHeight-Dxn1m5lM.js";import"./select-gc2XDJ10.js";const to=b({__name:"ExpandTable",setup(k){const[p]=d({api:_,title:"可展开表格演示",titleHelpMessage:["已启用expandRowByClick","已启用stopButtonPropagation"],columns:f(),rowKey:"id",canResize:!1,expandRowByClick:!0,accordion:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function m(i){}function l(i){}return(i,w)=>(a(),n(o(u),{title:"可展开表格",content:"TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick"},{default:e(()=>[g(o(s),{onRegister:o(p)},{expandedRowRender:e(({record:t})=>[C("span",null,"No: "+x(t.no),1)]),bodyCell:e(({column:t,record:r})=>[t.key==="action"?(a(),n(o(c),{key:0,stopButtonPropagation:"",actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:m.bind(null,r)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:l.bind(null,r)}}]},null,8,["actions","dropDownActions"])):B("",!0)]),_:1},8,["onRegister"])]),_:1}))}});export{to as default};
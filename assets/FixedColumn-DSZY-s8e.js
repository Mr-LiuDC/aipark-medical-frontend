import{_ as p}from"./BasicTable.vue_vue_type_script_setup_true_lang-DaiFyPwA.js";import"./TableImg.vue_vue_type_style_index_0_lang-BigB_-HG.js";import{a as l}from"./componentMap-C7zC0Ahq.js";import{u as s}from"./useTable-ZFTUst6G.js";import{d as c}from"./table-DBdSLmNw.js";import{d as u,Z as o,_ as f,k as _,a9 as x,a8 as b,u as t,ab as h}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-DOe8xB3P.js";import"./FormItem.vue_vue_type_script_lang-B-XJ7ebF.js";import"./entry/index-tlZkG8lf-1708651968736.js";import"./antd-BS7GgtZr.js";import"./helper-BTu7FkVB.js";import"./BasicForm.vue_vue_type_style_index_0_lang-DehXK7Lc.js";import"./index-Bgt4xmdn.js";import"./useWindowSizeFn-CLuML0CN.js";import"./useForm-CiqW3-yk.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-YOs4BwlT.js";import"./useFormItem-CGQuU2J0.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useSortable-BzoCqOKH.js";import"./download-ngl4iOF2.js";import"./base64Conver-bBv-IO2K.js";import"./index-rN9DXuVy.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-KIJacll8.js";import"./copyTextToClipboard-YrNkOw48.js";import"./index-jhR4y0bU.js";import"./index-7ifHv66o.js";const w={class:"p-4"},U=u({__name:"FixedColumn",setup(C){const n=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}],[r]=s({title:"TableAction组件及固定列示例",api:c,columns:n,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function a(e){}function m(e){}return(e,I)=>(o(),f("div",w,[_(t(p),{onRegister:t(r)},{bodyCell:x(({column:d,record:i})=>[d.key==="action"?(o(),b(t(l),{key:0,actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:a.bind(null,i)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:m.bind(null,i)}}]},null,8,["actions","dropDownActions"])):h("",!0)]),_:1},8,["onRegister"])]))}});export{U as default};

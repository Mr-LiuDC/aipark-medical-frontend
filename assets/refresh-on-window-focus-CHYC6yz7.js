import{i as F}from"./mock-api-BDVW_RnO.js";import{P as n}from"./index-rdJJmm_t.js";import{b6 as e,G as s,R as l}from"./antd-BS7GgtZr.js";import{d as r,k as u,G as t}from"./vue-COhTiP8A.js";import{u as i}from"./index-DTKIrnCf.js";import"./entry/index-tlZkG8lf-1708651968736.js";import"./useContentViewHeight-Dxn1m5lM.js";import"./useWindowSizeFn-CLuML0CN.js";import"./onMountedOrActivated-GpUdBAv_.js";const p=r({setup(){const{data:a,loading:o}=i(F,{refreshOnWindowFocus:!0});return()=>u(l,{title:"屏幕聚焦重新请求"},{default:()=>[u(e,null,{default:()=>[u(e.Paragraph,null,{default:()=>[t("通过设置"),u(e.Text,{type:"danger"},{default:()=>[t(" options.refreshOnWindowFocus ")]}),t("，在浏览器窗口 refocus 和 revisible 时, 会重新发起请求。")]}),u(e.Paragraph,null,{default:()=>[u(e.Text,{code:!0},{default:()=>["const { data, run } = useRequest(imitateApi, { refreshOnWindowFocus: true });"]})]}),u(e.Paragraph,null,{default:()=>[t("你可以点击浏览器外部，再点击当前页面来体验效果（或者隐藏当前页面，重新展示）,如果和上一次请求间隔大于 5000ms, 则会重新请求一次。")]})]}),u(s,{spinning:o.value},{default:()=>[u("div",null,[t("Username: "),a.value])]})]})}}),g=r({setup(){return()=>u(n,null,{default:()=>[u(p,null,null)]})}});export{g as default};
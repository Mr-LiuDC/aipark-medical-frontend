var h=(t,i,e)=>new Promise((a,o)=>{var H=n=>{try{u(e.next(n))}catch(s){o(s)}},m=n=>{try{u(e.throw(n))}catch(s){o(s)}},u=n=>n.done?a(n.value):Promise.resolve(n.value).then(H,m);u((e=e.apply(t,i)).next())});import{v as w}from"./entry/index-tlZkG8lf-1708651968736.js";import{u as d}from"./useWindowSizeFn-CLuML0CN.js";import{f as r,c as p,u as c}from"./vue-COhTiP8A.js";const v=Symbol();function l(t){return w(t,v,{native:!0})}const g=r(0),f=r(0);function P(){function t(e){g.value=e}function i(e){f.value=e}return{headerHeightRef:g,footerHeightRef:f,setHeaderHeight:t,setFooterHeight:i}}function R(){const t=r(window.innerHeight),i=r(window.innerHeight),e=p(()=>c(t)-c(g)-c(f)||0);d(()=>{t.value=window.innerHeight},{wait:100,immediate:!0});function a(o){return h(this,null,function*(){i.value=o})}l({contentHeight:e,setPageHeight:a,pageHeight:i})}export{R as a,P as u};

import{x as a,t as d,u}from"./entry/index-tlZkG8lf-1708651968736.js";function w(i,o={}){const{wait:s=150,immediate:r}=o;let e=()=>{i()};e=u(e,s);const n=()=>{r&&e(),window.addEventListener("resize",e)},t=()=>{window.removeEventListener("resize",e)};return a(()=>{n()}),d(()=>{t()}),{start:n,stop:t}}export{w as u};

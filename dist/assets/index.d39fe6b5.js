import{c as u,q as d,r as m,j as p}from"../q-f5c47ac6.js";const f=function(){const t=document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),s={},h="/",_=function(t,o){return!o||o.length===0?t():Promise.all(o.map(e=>{if(e=`${h}${e}`,e in s)return;s[e]=!0;const n=e.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${i}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":f,n||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),n)return new Promise((c,a)=>{r.addEventListener("load",c),r.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>t())},E=u(d(()=>_(()=>import("../q-04a11b7c.js"),["q-04a11b7c.js","q-f5c47ac6.js"]),"App_render"));m(document.body,p(E,{}));export{_};

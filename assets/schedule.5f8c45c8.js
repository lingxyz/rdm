import{o as m,c,e as y,p as C,f as F,a as r,_,r as d,b as n,w as a,F as $,d as b,g as w,U as I,L as U,h as k}from"./index.c361ad6b.js";const h=e=>(C("data-v-3f8e8e45"),e=e(),F(),e),B={class:"demand-content",draggable:"true"},L=h(()=>r("h1",null,"\u672C\u9875\u9700\u6C42\uFF1A",-1)),N=h(()=>r("i",null,"\u4EA7\u54C1\u9700\u6C42\u6D6E\u7A97\u63D2\u69FD\uFF0C\u8BF7\u5728\u6B64\u5904\u586B\u5199 HTML \u5185\u5BB9",-1));function V(e,t){return m(),c("div",B,[L,y(e.$slots,"default",{},()=>[N],!0)])}const A={};var O=_(A,[["render",V],["__scopeId","data-v-3f8e8e45"]]);const T=b("\u8FC7\u6EE4"),E=r("div",{style:{"text-decoration":"line-through"}},"\u2705 \u8FC7\u6EE4\uFF1A\u9700\u6C42\u9009\u62E9\u3001\u4EBA\u9009\u62E9",-1),H=r("div",null,"\u2611\uFE0F \u89C6\u56FE\u5207\u6362\uFF1A\u6309\u9700\u6C42\u7684\u7EF4\u5EA6\u3001\u6309\u4EBA\u7684\u7EF4\u5EA6(\u53F3\u4FA7)",-1),M=r("div",null,"\u{1F518} fullcalendar-scheduler \u63D2\u4EF6",-1);function j(e,t,p,f,o,z){const u=d("a-select"),i=d("a-form-item"),g=d("a-button"),v=d("a-form"),S=d("demand");return m(),c($,null,[n(v,{layout:"inline",model:e.formState,onFinish:e.onFinish},{default:a(()=>[n(i,null,{default:a(()=>[n(u,{value:e.formState.users,"onUpdate:value":t[0]||(t[0]=s=>e.formState.users=s),mode:"multiple",style:{width:"200px"},placeholder:"\u8BF7\u9009\u62E9\u4EBA\u5458",options:[...Array(25)].map((s,l)=>({value:(l+10).toString(36)+(l+1)})),onChange:e.handleChange},null,8,["value","options","onChange"])]),_:1}),n(i,null,{default:a(()=>[n(u,{value:e.formState.demands,"onUpdate:value":t[1]||(t[1]=s=>e.formState.demands=s),mode:"multiple",style:{width:"200px"},placeholder:"\u8BF7\u9009\u62E9\u9700\u6C42",options:[...Array(25)].map((s,l)=>({value:(l+10).toString(36)+(l+1)})),onChange:e.handleChange},null,8,["value","options","onChange"])]),_:1}),n(i,null,{default:a(()=>[n(g,{type:"primary","html-type":"submit",disabled:!e.formState.users.length&&!e.formState.demands.length},{default:a(()=>[T]),_:1},8,["disabled"])]),_:1})]),_:1},8,["model","onFinish"]),n(S,null,{default:a(()=>[E,H,M]),_:1})],64)}const q=w({components:{UserOutlined:I,LockOutlined:U,demand:O},setup(){const e=k({users:[],demands:[]});return{formState:e,handleChange:o=>{console.log(`selected ${o}`)},handleFinish:o=>{console.log(o,e)},handleFinishFailed:o=>{console.log(o)}}}});var G=_(q,[["render",j]]);export{G as default};
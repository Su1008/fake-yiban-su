(function(e){function t(t){for(var n,l,d=t[0],s=t[1],o=t[2],b=0,u=[];b<d.length;b++)l=d[b],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&u.push(i[l][0]),i[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);r&&r(t);while(u.length)u.shift()();return a.push.apply(a,o||[]),c()}function c(){for(var e,t=0;t<a.length;t++){for(var c=a[t],n=!0,d=1;d<c.length;d++){var s=c[d];0!==i[s]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=c[0]))}return e}var n={},i={app:0},a=[];function l(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=n,l.d=function(e,t,c){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(c,n,function(t){return e[t]}.bind(null,n));return c},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/fake-yiban-su/dist/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var o=0;o<d.length;o++)t(d[o]);var r=s;a.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"0b78":function(e,t,c){"use strict";c("d0ac")},"0e50":function(e,t){e.exports="data:image/png;base64,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"},"36be":function(e,t,c){e.exports=c.p+"img/menu.11fc4850.svg"},"36c5":function(e,t,c){"use strict";c("e17f")},"41c7":function(e,t,c){},"4e52":function(e,t,c){},"55fd":function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),i=(c("a434"),c("b0c0"),c("ccfe")),a=c.n(i),l=c("bf37"),d=c.n(l),s=c("79a0"),o=c.n(s),r=c("36be"),b=c.n(r),u=c("d739"),f=c.n(u),O=c("eef4"),j=c.n(O),v=c("cf05"),p=c.n(v),m={id:"root"},g={class:"header"},h=Object(n["f"])("img",{src:a.a},null,-1),x=[h],y={key:1,class:"button-app"},k=Object(n["f"])("img",{src:d.a},null,-1),I=[k],C={key:2,class:"title"},A={key:3,class:"title",style:{"text-align":"center"}},w={key:4,class:"title"},V=Object(n["f"])("img",{src:o.a},null,-1),E=[V],_={key:6,class:"button-app"},Q=Object(n["f"])("img",{src:b.a,style:{transform:"rotate(90deg)"}},null,-1),U=[Q],H={key:0,class:"content"},J=Object(n["f"])("div",{class:"edit-title-detail"},[Object(n["f"])("div",{class:"edit-title-detail-dot"}),Object(n["h"])(" 申请人 ")],-1),D={class:"edit-detail-content"},S=Object(n["f"])("div",{class:"row no-delete"},[Object(n["f"])("div",{class:"label"},"姓名"),Object(n["f"])("div",{class:"label"},"学号")],-1),X={class:"row no-delete"},B=Object(n["f"])("div",{class:"edit-title-detail"},[Object(n["f"])("div",{class:"edit-title-detail-dot"}),Object(n["h"])(" 申请内容 ")],-1),P={class:"edit-detail-content"},T=Object(n["f"])("div",{class:"row no-delete"},[Object(n["f"])("div",{class:"label"},"项目"),Object(n["f"])("div",{class:"label"},"内容")],-1),L=["onClick"],W={key:1,class:"row"},M=["onUpdate:modelValue"],N=["onUpdate:modelValue"],R=["onClick"],q=Object(n["f"])("img",{src:f.a},null,-1),Z=[q],z=Object(n["f"])("img",{src:j.a},null,-1),Y=[z],K=Object(n["f"])("div",{class:"edit-title-detail"},[Object(n["f"])("div",{class:"edit-title-detail-dot"}),Object(n["h"])(" 申请材料 ")],-1),F={class:"edit-detail-content"},G=Object(n["f"])("div",{class:"row no-delete"},[Object(n["f"])("div",{class:"label"},"项目"),Object(n["f"])("div",{class:"label"},"图片")],-1),$=["onClick"],ee={key:1,class:"row"},te=["onUpdate:modelValue"],ce=["onChange"],ne=["onUpdate:modelValue"],ie=["onClick"],ae=Object(n["f"])("img",{src:f.a},null,-1),le=[ae],de=Object(n["f"])("img",{src:j.a},null,-1),se=[de],oe=Object(n["f"])("div",{class:"edit-title-detail"},[Object(n["f"])("div",{class:"edit-title-detail-dot"}),Object(n["h"])(" 审批进度 ")],-1),re={class:"edit-detail-content"},be=Object(n["f"])("div",{class:"row no-delete"},[Object(n["f"])("div",{class:"label"},"姓名"),Object(n["f"])("div",{class:"label"},"编号"),Object(n["f"])("div",{class:"label"},"时间")],-1),ue={key:0,class:"row"},fe=["onClick"],Oe={key:1,class:"row"},je=["onUpdate:modelValue"],ve=["onUpdate:modelValue"],pe=["onUpdate:modelValue"],me=["onClick"],ge=Object(n["f"])("img",{src:f.a},null,-1),he=[ge],xe=Object(n["f"])("img",{src:j.a},null,-1),ye=[xe],ke=Object(n["f"])("div",{class:"edit-title-detail"},[Object(n["f"])("div",{class:"edit-title-detail-dot"}),Object(n["h"])(" 已抄送 ")],-1),Ie={class:"edit-detail-content"},Ce=Object(n["f"])("div",{class:"row no-delete"},[Object(n["f"])("div",{class:"label"},"姓名"),Object(n["f"])("div",{class:"label"},"编号")],-1),Ae={key:0,class:"row"},we=["onClick"],Ve={key:1,class:"row"},Ee=["onUpdate:modelValue"],_e=["onUpdate:modelValue"],Qe=["onClick"],Ue=Object(n["f"])("img",{src:f.a},null,-1),He=[Ue],Je=Object(n["f"])("img",{src:j.a},null,-1),De=[Je],Se={key:1,class:"final"},Xe={key:4,class:"about"},Be=Object(n["f"])("img",{src:p.a},null,-1),Pe=Object(n["f"])("h2",null,"Fake Yiban",-1),Te=Object(n["f"])("p",null,"警告：本程序仅供演示，请勿滥用。一切后果自负。",-1),Le=[Be,Pe,Te];function We(e,t,c,i,a,l){var d=Object(n["m"])("fake"),s=Object(n["m"])("QRCode");return Object(n["i"])(),Object(n["e"])("div",m,[Object(n["f"])("div",g,[0!=a.page?(Object(n["i"])(),Object(n["e"])("div",{key:0,class:"button-app",onClick:t[0]||(t[0]=function(e){return a.page=0})},x)):Object(n["d"])("",!0),a.page>0?(Object(n["i"])(),Object(n["e"])("div",y,I)):Object(n["d"])("",!0),-1==a.page?(Object(n["i"])(),Object(n["e"])("div",C,"关于")):1==a.page?(Object(n["i"])(),Object(n["e"])("div",A,"办公化")):2==a.page?(Object(n["i"])(),Object(n["e"])("div",w,"请销假")):Object(n["d"])("",!0),0==a.page?(Object(n["i"])(),Object(n["e"])("div",{key:5,class:"button-app",onClick:t[1]||(t[1]=function(e){return a.page=-1})},E)):Object(n["d"])("",!0),a.page>0?(Object(n["i"])(),Object(n["e"])("div",_,U)):Object(n["d"])("",!0)]),0==a.page?(Object(n["i"])(),Object(n["e"])("div",H,[J,Object(n["f"])("div",D,[S,Object(n["f"])("div",X,[Object(n["p"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.studentName=e})},null,512),[[n["o"],a.studentName]]),Object(n["p"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.studentID=e})},null,512),[[n["o"],a.studentID]])])]),B,Object(n["f"])("div",P,[T,(Object(n["i"])(!0),Object(n["e"])(n["a"],null,Object(n["l"])(a.items,(function(e,c){return Object(n["i"])(),Object(n["e"])("div",{key:e},[a.deletingItem==c?(Object(n["i"])(),Object(n["e"])("div",{key:0,class:"row",onBlur:t[5]||(t[5]=function(e){return a.deletingItem=-1})},[Object(n["f"])("button",{class:"confirm",onClick:function(e){a.items.splice(c,1),a.deletingItem=-1}},"删除",8,L),Object(n["f"])("button",{class:"cancel",onClick:t[4]||(t[4]=function(e){return a.deletingItem=-1})},"取消")],32)):(Object(n["i"])(),Object(n["e"])("div",W,[Object(n["p"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":function(t){return e.name=t}},null,8,M),[[n["o"],e.name]]),Object(n["p"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":function(t){return e.value=t}},null,8,N),[[n["o"],e.value]]),Object(n["f"])("button",{class:"delete",onClick:function(e){return a.deletingItem=c}},Z,8,R)]))])})),128)),Object(n["f"])("button",{class:"add",onClick:t[6]||(t[6]=function(e){return a.items.push({name:"",value:""})})},Y)]),K,Object(n["f"])("div",F,[G,(Object(n["i"])(!0),Object(n["e"])(n["a"],null,Object(n["l"])(a.imgList,(function(e,c){return Object(n["i"])(),Object(n["e"])("div",{key:e},[a.deletingImg==c?(Object(n["i"])(),Object(n["e"])("div",{key:0,class:"row",onBlur:t[8]||(t[8]=function(e){return a.deletingImg=-1})},[Object(n["f"])("button",{class:"confirm",onClick:function(e){a.imgList.splice(c,1),a.deletingImg=-1}},"删除",8,$),Object(n["f"])("button",{class:"cancel",onClick:t[7]||(t[7]=function(e){return a.deletingImg=-1})},"取消")],32)):(Object(n["i"])(),Object(n["e"])("div",ee,[Object(n["p"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":function(t){return e.name=t}},null,8,te),[[n["o"],e.name]]),Object(n["f"])("input",{type:"file",ref:"file",accept:"image/*",onChange:function(t){return l.imgToBase(t,e)}},null,40,ce),Object(n["p"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":function(t){return e.value=t}},null,8,ne),[[n["o"],e.value]]),Object(n["f"])("button",{class:"delete",onClick:function(e){return a.deletingImg=c}},le,8,ie)]))])})),128)),Object(n["f"])("button",{class:"add",onClick:t[9]||(t[9]=function(e){return a.imgList.push({name:"",value:""})})},se)]),oe,Object(n["f"])("div",re,[be,(Object(n["i"])(!0),Object(n["e"])(n["a"],null,Object(n["l"])(a.approvers,(function(e,c){return Object(n["i"])(),Object(n["e"])("div",{key:e},[a.deletingApprover==c?(Object(n["i"])(),Object(n["e"])("div",ue,[Object(n["f"])("button",{class:"confirm",onClick:function(e){a.approvers.splice(c,1),a.deletingApprover=-1}},"删除",8,fe),Object(n["f"])("button",{class:"cancel",onClick:t[10]||(t[10]=function(e){return a.deletingApprover=-1})},"取消")])):(Object(n["i"])(),Object(n["e"])("div",Oe,[Object(n["p"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":function(t){return e.name=t}},null,8,je),[[n["o"],e.name]]),Object(n["p"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":function(t){return e.id=t}},null,8,ve),[[n["o"],e.id]]),Object(n["p"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":function(t){return e.time=t}},null,8,pe),[[n["o"],e.time]]),Object(n["f"])("button",{class:"delete",onClick:function(e){return a.deletingApprover=c}},he,8,me)]))])})),128)),Object(n["f"])("button",{class:"add",onClick:t[11]||(t[11]=function(e){return a.approvers.push({name:"",id:"",time:""})})},ye)]),ke,Object(n["f"])("div",Ie,[Ce,(Object(n["i"])(!0),Object(n["e"])(n["a"],null,Object(n["l"])(a.ccs,(function(e,c){return Object(n["i"])(),Object(n["e"])("div",{key:e},[a.deletingCC==c?(Object(n["i"])(),Object(n["e"])("div",Ae,[Object(n["f"])("button",{class:"confirm",onClick:function(e){a.ccs.splice(c,1),a.deletingCC=-1}},"删除",8,we),Object(n["f"])("button",{class:"cancel",onClick:t[12]||(t[12]=function(e){return a.deletingCC=-1})},"取消")])):(Object(n["i"])(),Object(n["e"])("div",Ve,[Object(n["p"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":function(t){return e.name=t}},null,8,Ee),[[n["o"],e.name]]),Object(n["p"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":function(t){return e.id=t}},null,8,_e),[[n["o"],e.id]]),Object(n["f"])("button",{class:"delete",onClick:function(e){return a.deletingCC=c}},He,8,Qe)]))])})),128)),Object(n["f"])("button",{class:"add",onClick:t[13]||(t[13]=function(e){return a.ccs.push({name:"",id:""})})},De)])])):Object(n["d"])("",!0),0==a.page?(Object(n["i"])(),Object(n["e"])("div",Se,[Object(n["f"])("button",{onClick:t[14]||(t[14]=function(){return l.go&&l.go.apply(l,arguments)})},"表单详情")])):Object(n["d"])("",!0),1==a.page?(Object(n["i"])(),Object(n["c"])(d,{key:2,"student-name":a.studentName,studentID:a.studentID,items:a.items,approvers:a.approvers,ccs:a.ccs,"img-list":a.imgList,onExit:t[15]||(t[15]=function(e){return a.page=0})},null,8,["student-name","studentID","items","approvers","ccs","img-list"])):Object(n["d"])("",!0),2==a.page?(Object(n["i"])(),Object(n["c"])(s,{key:3,onExit:t[16]||(t[16]=function(e){return a.page=0})})):Object(n["d"])("",!0),-1==a.page?(Object(n["i"])(),Object(n["e"])("div",Xe,Le)):Object(n["d"])("",!0)])}c("ac1f"),c("1276");var Me=c("5d98"),Ne=c.n(Me),Re=c("0e50"),qe=c.n(Re),Ze=function(e){return Object(n["k"])("data-v-52ebe1ac"),e=e(),Object(n["j"])(),e},ze={id:"sub-root"},Ye={class:"hx-layout"},Ke={class:"hx-content"},Fe={class:"wfTitle___Y-ebx"},Ge={class:"hx-detail"},$e={class:"hx-detail-group"},et=Ze((function(){return Object(n["f"])("div",{class:"hx-title-detail"},[Object(n["f"])("div",{class:"hx-title-detail-dot"}),Object(n["h"])(" 申请人 ")],-1)})),tt={class:"hx-detail-content"},ct={class:"am-accordion hx-detail-accordion"},nt={class:"am-accordion-item"},it={class:"am-accordion-header",role:"button",tabindex:"0","aria-expanded":"false"},at=Ze((function(){return Object(n["f"])("i",{class:"arrow"},null,-1)})),lt={class:"hx-detail-item"},dt=Ze((function(){return Object(n["f"])("span",{class:"hx-detail-item-label"},"姓名",-1)})),st={class:"hx-detail-item-field"},ot={class:"am-flexbox am-flexbox-justify-start am-flexbox-align-center"},rt={class:"hx-detail"},bt={class:"hx-detail-group"},ut=Ze((function(){return Object(n["f"])("div",{class:"hx-title-detail"},[Object(n["f"])("div",{class:"hx-title-detail-dot"}),Object(n["h"])(" 申请内容 ")],-1)})),ft={class:"hx-detail-content"},Ot={class:"hx-detail-item-label"},jt={class:"hx-detail-item-field"},vt={key:0,class:"hx-detail"},pt={class:"hx-detail-item-label"},mt={class:"hx-detail-item-field"},gt=["src"],ht={key:0,class:"hx-detail"},xt={class:"hx-detail-group"},yt=Ze((function(){return Object(n["f"])("div",{class:"hx-title-detail"},[Object(n["f"])("div",{class:"hx-title-detail-dot"}),Object(n["h"])(" 审批进度 ")],-1)})),kt={class:"hx-detail-content"},It={class:"flowInfo___244V-"},Ct={class:"nodestate___Npp7u"},At=Ze((function(){return Object(n["f"])("span",null,"通过",-1)})),wt={key:0,class:"stateTime___2bJzR"},Vt={class:"nodeleft___2q7Sg"},Et={class:"nodeindex___Cya0J"},_t={class:"noderight___urUWJ"},Qt={style:{"margin-top":"0px"},class:"nodeapprover___1KJaE"},Ut={class:"workTime___PJH95"},Ht=Ze((function(){return Object(n["f"])("div",{class:"approverOpinion___3xcsE"},[Object(n["f"])("span",{style:{color:"rgb(135, 208, 104)"}},"已同意")],-1)})),Jt=Ze((function(){return Object(n["f"])("div",{class:"flownode___1GTd6"},[Object(n["f"])("div",{class:"nodeend___sR2u9"})],-1)})),Dt={key:1,class:"hx-detail"},St={class:"hx-detail-group"},Xt=Ze((function(){return Object(n["f"])("div",{class:"hx-title-detail"},[Object(n["f"])("div",{class:"hx-title-detail-dot"}),Object(n["h"])(" 流程全部通过时抄送 ")],-1)})),Bt={class:"hx-detail-content"},Pt={class:"ccInfo___T7Slb"},Tt=Ze((function(){return Object(n["f"])("div",{class:"hx-footer"},[Object(n["f"])("a",{role:"button",class:"am-button hx-footer_btn",style:{color:"rgb(87, 191, 242)"},"aria-disabled":"false"},[Object(n["f"])("span",null,"转发审批表单")])],-1)})),Lt=Ze((function(){return Object(n["f"])("div",{class:"hx-detail-statusIcon"},[Object(n["f"])("img",{src:Ne.a}),Object(n["f"])("img",{class:"stars",src:qe.a})],-1)}));function Wt(e,t,c,i,a,l){return Object(n["i"])(),Object(n["e"])("div",ze,[Object(n["f"])("div",Ye,[Object(n["f"])("main",Ke,[Object(n["f"])("div",Fe,Object(n["n"])(c.studentName)+"的贵阳市内出行报告",1),Object(n["f"])("div",Ge,[Object(n["f"])("div",$e,[et,Object(n["f"])("div",tt,[Object(n["f"])("div",ct,[Object(n["f"])("div",nt,[Object(n["f"])("div",it,[at,Object(n["f"])("div",lt,[dt,Object(n["f"])("div",st,[Object(n["f"])("div",ot,Object(n["n"])(c.studentName)+"("+Object(n["n"])(c.studentID)+") ",1)])])])])])])])]),Object(n["f"])("div",rt,[Object(n["f"])("div",bt,[ut,Object(n["f"])("div",ft,[(Object(n["i"])(!0),Object(n["e"])(n["a"],null,Object(n["l"])(c.items,(function(e){return Object(n["i"])(),Object(n["e"])("div",{class:"hx-detail-item",key:e},[Object(n["f"])("span",Ot,Object(n["n"])(e.name),1),Object(n["f"])("div",jt,Object(n["n"])(e.value),1)])})),128)),c.imgList.length>0?(Object(n["i"])(),Object(n["e"])("div",vt,[(Object(n["i"])(!0),Object(n["e"])(n["a"],null,Object(n["l"])(c.imgList,(function(e){return Object(n["i"])(),Object(n["e"])("div",{class:"hx-detail-item",key:e},[Object(n["f"])("span",pt,Object(n["n"])(e.name),1),Object(n["f"])("div",mt,[Object(n["f"])("img",{width:"100",height:"80",src:e.value},null,8,gt)])])})),128))])):Object(n["d"])("",!0)])])]),c.approvers.length>0?(Object(n["i"])(),Object(n["e"])("div",ht,[Object(n["f"])("div",xt,[yt,Object(n["f"])("div",kt,[Object(n["f"])("div",It,[(Object(n["i"])(!0),Object(n["e"])(n["a"],null,Object(n["l"])(c.approvers,(function(e,t){return Object(n["i"])(),Object(n["e"])("div",{class:"flownode___1GTd6 node2___1yk73",key:t},[Object(n["f"])("div",Ct,[At,t==c.approvers.length-1?(Object(n["i"])(),Object(n["e"])("span",wt,Object(n["n"])(e.time),1)):Object(n["d"])("",!0)]),Object(n["f"])("div",Vt,[Object(n["f"])("span",Et,Object(n["n"])(t+1),1)]),Object(n["f"])("div",_t,[Object(n["f"])("div",Qt,[Object(n["f"])("div",null,[Object(n["f"])("div",null,[Object(n["h"])(Object(n["n"])(e.name)+"("+Object(n["n"])(e.id)+")",1),Object(n["f"])("span",Ut,Object(n["n"])(e.time),1)]),Ht])])])])})),128)),Jt])])])])):Object(n["d"])("",!0),c.ccs.length>0?(Object(n["i"])(),Object(n["e"])("div",Dt,[Object(n["f"])("div",St,[Xt,Object(n["f"])("div",Bt,[Object(n["f"])("div",Pt,[(Object(n["i"])(!0),Object(n["e"])(n["a"],null,Object(n["l"])(c.ccs,(function(e,t){return Object(n["i"])(),Object(n["e"])("div",{key:t},Object(n["n"])(e.name)+"("+Object(n["n"])(e.id)+")",1)})),128))])])])])):Object(n["d"])("",!0)]),Tt]),Lt])}var Mt={name:"fake",emits:["exit"],props:{studentName:String,studentID:String,items:Array,approvers:Array,ccs:Array,imgList:Array}},Nt=(c("d69a"),c("6e4b"),c("0b78"),c("a94f"),c("36c5"),c("9861"),c("6b0d")),Rt=c.n(Nt);const qt=Rt()(Mt,[["render",Wt],["__scopeId","data-v-52ebe1ac"]]);var Zt=qt,zt=c("e7e9"),Yt=c.n(zt),Kt=c("c2a2"),Ft=c.n(Kt),Gt={id:"sub-root"},$t={class:"hx-content"},ec={class:"qrCode___3iwXY",style:{height:"360px"}},tc={key:0,class:"qr___Jrc0m",src:Yt.a,style:{width:"270px",height:"270px"}},cc={key:1,class:"qr___Jrc0m",src:Ft.a,style:{width:"270px",height:"270px"}},nc={class:"text___HVPBl"},ic=Object(n["h"])("二维码将在"),ac={class:"second___1XzxW"},lc=Object(n["h"])("后刷新"),dc=Object(n["g"])('<div class="hx-detail" data-v-c85a5d98><div class="hx-title-detail" data-v-c85a5d98><div class="hx-title-detail-dot" data-v-c85a5d98></div>离校详情 </div><div class="hx-detail-content" data-v-c85a5d98><div class="hx-detail-item" data-v-c85a5d98><span class="hx-detail-item-label" data-v-c85a5d98>操作人</span><div class="hx-detail-item-field" data-v-c85a5d98>-</div></div><div class="hx-detail-item" data-v-c85a5d98><span class="hx-detail-item-label" data-v-c85a5d98>操作时间</span><div class="hx-detail-item-field" data-v-c85a5d98>-</div></div><div class="hx-detail-item" data-v-c85a5d98><span class="hx-detail-item-label" data-v-c85a5d98>备注</span><div class="hx-detail-item-field" data-v-c85a5d98>-</div></div></div></div><div class="hx-detail" data-v-c85a5d98><div class="hx-title-detail" data-v-c85a5d98><div class="hx-title-detail-dot" data-v-c85a5d98></div>返校详情 </div><div class="hx-detail-content" data-v-c85a5d98><div class="hx-detail-item" data-v-c85a5d98><span class="hx-detail-item-label" data-v-c85a5d98>操作人</span><div class="hx-detail-item-field" data-v-c85a5d98>-</div></div><div class="hx-detail-item" data-v-c85a5d98><span class="hx-detail-item-label" data-v-c85a5d98>操作时间</span><div class="hx-detail-item-field" data-v-c85a5d98>-</div></div><div class="hx-detail-item" data-v-c85a5d98><span class="hx-detail-item-label" data-v-c85a5d98>备注</span><div class="hx-detail-item-field" data-v-c85a5d98>-</div></div></div></div>',2);function sc(e,t,c,i,a,l){return Object(n["i"])(),Object(n["e"])("div",Gt,[Object(n["f"])("div",$t,[Object(n["f"])("div",ec,[Object(n["f"])("div",null,[0==a.qrcodeIndex?(Object(n["i"])(),Object(n["e"])("img",tc)):Object(n["d"])("",!0),1==a.qrcodeIndex?(Object(n["i"])(),Object(n["e"])("img",cc)):Object(n["d"])("",!0),Object(n["f"])("div",nc,[ic,Object(n["f"])("span",ac,Object(n["n"])(l.timeString)+"秒",1),lc])])]),dc])])}var oc={name:"qrcode",data:function(){return{time:20,qrcodeIndex:0}},computed:{timeString:function(){return(this.time<10?"0":"")+String(this.time)}},mounted:function(){var e=this;setInterval((function(){e.time>1?e.time-=1:(e.time=20,e.qrcodeIndex++,e.qrcodeIndex%=2)}),1e3)}};c("b618");const rc=Rt()(oc,[["render",sc],["__scopeId","data-v-c85a5d98"]]);var bc=rc;function uc(){for(var e=new Array("130","131","132","133","135","137","138","170","187","189"),t=parseInt(10*Math.random()),c=e[t],n=0;n<8;n++)c+=Math.floor(10*Math.random());return c}function fc(e){for(var t="",c=0;c<e;c++)t+=Math.floor(10*Math.random());return t}var Oc=c("4303"),jc={name:"App",components:{Fake:Zt,QRCode:bc},data:function(){return{page:0,studentName:"Example",studentID:"2020"+fc(6),items:[{name:"审批编号",value:"202201010"+fc(10)},{name:"联系方式",value:uc()},{name:"出校原因",value:"回家"},{name:"出校去向",value:""},{name:"出校日期",value:Oc.format(new Date,"YYYY-MM-DD")},{name:"拟返校日期",value:Oc.format(new Date(1e3*(new Date/1e3+86400)),"YYYY-MM-DD")}],approvers:[],ccs:[],imgList:[{name:"导师意见",value:""},{name:"48小时内核酸检测阴性证明",value:""}],deletingItem:-1,deletingApprover:-1,deletingCC:-1,deletingImg:-1}},methods:{go:function(){window.localStorage.setItem("last-data",JSON.stringify(this.$data)),this.page=1},setButtonCancel:function(e){e&&(this.buttonCancel=e)},imgToBase:function(e,t){var c=this,n=e.target.files[0],i=n.type.split("/")[0];if("image"===i){var a=new FileReader;a.readAsDataURL(n),a.onload=function(){var e=a.result;t.value=e}}else c.$toast.showToast("请正确上传图片")}},mounted:function(){var e=window.localStorage.getItem("last-data");if(e){var t=JSON.parse(e);this.studentName=t.studentName,this.studentID=t.studentID,this.items=t.items,this.approvers=t.approvers,this.ccs=t.ccs,this.imgList=t.imgList}}};c("eea2");const vc=Rt()(jc,[["render",We]]);var pc=vc,mc=c("9483");Object(mc["a"])("".concat("/fake-yiban-su/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(n["b"])(pc).mount("#app")},"5d98":function(e,t,c){e.exports=c.p+"img/star_back.a22700c5.png"},"6e4b":function(e,t,c){"use strict";c("41c7")},"79a0":function(e,t,c){e.exports=c.p+"img/about.6d88906a.svg"},9861:function(e,t,c){"use strict";c("4e52")},a64d:function(e,t,c){},a94f:function(e,t,c){"use strict";c("a64d")},b618:function(e,t,c){"use strict";c("eb29")},bf37:function(e,t,c){e.exports=c.p+"img/close.624da934.svg"},c2a2:function(e,t,c){e.exports=c.p+"img/qrcode1.970d6fbc.svg"},ccfe:function(e,t,c){e.exports=c.p+"img/back.d4e6964a.svg"},cf05:function(e,t,c){e.exports=c.p+"img/logo.15eb1df8.png"},d00d:function(e,t,c){},d0ac:function(e,t,c){},d69a:function(e,t,c){"use strict";c("d00d")},d739:function(e,t,c){e.exports=c.p+"img/delete.3023f957.svg"},e17f:function(e,t,c){},e7e9:function(e,t,c){e.exports=c.p+"img/qrcode0.285d673c.svg"},eb29:function(e,t,c){},eea2:function(e,t,c){"use strict";c("55fd")},eef4:function(e,t,c){e.exports=c.p+"img/add.22956d4a.svg"}});
//# sourceMappingURL=app.fa93c60d.js.map
(this["webpackJsonpevent-page"]=this["webpackJsonpevent-page"]||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(30),i=c.n(a),r=(c(38),c(39),c(6)),l=c(4),o=c.n(l),d=c(10),j=c(8),u=(c(41),c(18)),b=c.n(u),h=(c(42),c.p+"static/media/logo-satsi.438e9f92.png"),m=c.p+"static/media/satsi-qr.eb94e832.jpg",O=c.p+"static/media/girl.f555ae65.png",x=c.p+"static/media/cohoi.25464a62.png",f=c(31),v=c.n(f).a.create({baseURL:"https://api.satsi.edu.vn",headers:{"content-type":"application/json"}});v.interceptors.response.use((function(e){return e&&e.data?e.data:e}),(function(e){throw e}));var p=v,g={getConfig:function(e){return p.post("api/config/filter-active-config",e)}},N=c(0),y=[Object(N.jsx)("ion-icon",{name:"location-outline"}),Object(N.jsx)("ion-icon",{name:"call-outline"}),Object(N.jsx)("ion-icon",{name:"call-outline"}),Object(N.jsx)("ion-icon",{name:"mail-outline"}),Object(N.jsx)("ion-icon",{name:"logo-facebook"}),Object(N.jsx)("ion-icon",{name:"globe-outline"})],C=s.a.forwardRef((function(e,t){var c=s.a.useState({days:void 0,hours:void 0,mins:void 0,secs:void 0}),n=Object(r.a)(c,2),a=n[0],i=n[1],l=s.a.useState([]),u=Object(r.a)(l,2),f=u[0],v=u[1],p=s.a.useState(),C=Object(r.a)(p,2),k=C[0],w=C[1],S=s.a.useState(),I=Object(r.a)(S,2),H=I[0],T=I[1];s.a.useEffect((function(){var t=e.timeTillDate,c=new Date(t),n=setInterval((function(){var e=(c-new Date)/1e3,t=Math.floor(e/3600/24),s=Math.floor(e/3600)%24,a=Math.floor(e/60)%60,r=Math.floor(e)%60;e<0?clearInterval(n):i({days:t,hours:s,mins:a,secs:r})}),1e3);return function(){clearInterval(n)}}),[e]);var E=e.id;return s.a.useEffect((function(){var e=setInterval((function(){w(b()(new Date).format("LTS")),T(b()(new Date).format("LL"))}),1e3);return function(){clearInterval(e)}})),s.a.useEffect((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getConfig({type:"text",page:"footer",section:"footer"});case 2:t=e.sent,console.log(t),c=t.data.map((function(e,t){return Object(d.a)(Object(d.a)({},e),{},{icon:y[t]})})),v(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(N.jsxs)("div",{className:"home",ref:t,id:E,children:[Object(N.jsx)("div",{className:"leftColumn",children:Object(N.jsxs)("div",{class:"clock-wrapper",children:[Object(N.jsx)("div",{className:"icon-section",children:Object(N.jsx)("a",{className:"linkIcon",href:"https://satsi.edu.vn",target:"_blank",children:Object(N.jsx)("ion-icon",{name:"time-outline"})})}),Object(N.jsx)("h2",{className:"title-dangky",children:"T\u01af V\u1ea4N DU H\u1eccC \xdaC"}),a.secs?Object(N.jsxs)("div",{class:"clock-hms clearfix",children:[Object(N.jsxs)("div",{class:"tile tile-days",children:[Object(N.jsx)("span",{class:"days digit",children:a.days}),Object(N.jsx)("span",{class:"txt",children:"days"})]}),Object(N.jsxs)("div",{class:"secondary",children:[Object(N.jsxs)("div",{class:"tile tile-hours",children:[Object(N.jsx)("span",{class:"hours digit",children:"0".concat(a.hours).slice(-2)}),Object(N.jsx)("span",{class:"txt",children:"hours"})]}),Object(N.jsxs)("div",{class:"tile tile-minutes",children:[Object(N.jsx)("span",{class:"minutes digit",children:"0".concat(a.mins).slice(-2)}),Object(N.jsx)("span",{class:"txt",children:"mins"})]}),Object(N.jsxs)("div",{class:"tile tile-seconds",children:[Object(N.jsx)("span",{class:"seconds digit",children:"0".concat(a.secs).slice(-2)}),Object(N.jsx)("span",{class:"txt",children:"secs"})]})]})]}):Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{className:"day",children:H}),Object(N.jsx)("h1",{className:"hours",children:k})]}),Object(N.jsxs)("div",{className:"homeLeftContent",children:[Object(N.jsx)("h3",{children:"\u0110\u0102NG K\xdd THAM GIA"}),Object(N.jsx)("img",{className:"qrImg",src:m}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{type:"button",class:"btn  registerBtnNew","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"\u0110\u0103ng k\xfd ngay"})})]})]})}),Object(N.jsx)("div",{className:"rightColumn",children:Object(N.jsx)("div",{className:"main-content",children:Object(N.jsx)("div",{className:"content-wrapper",children:Object(N.jsx)("div",{class:"title-desc",children:Object(N.jsxs)("div",{class:"t-wrapper",children:[Object(N.jsxs)("header",{class:"title",children:[Object(N.jsx)("img",{className:"logo",src:h}),Object(N.jsx)("h3",{className:"compName",children:"VI\u1ec6N \u0110\xc0O T\u1ea0O KH\u1edeI NGHI\u1ec6P V\xc0 \u1ee8NG D\u1ee4NG KHOA H\u1eccC C\xd4NG NGH\u1ec6 CAO"}),Object(N.jsx)("ul",{className:"contactList",children:f.map((function(e){return Object(N.jsxs)("li",{children:[e.icon,Object(N.jsxs)("span",{children:[" ",e.value]})]})}))})]}),Object(N.jsxs)("div",{className:"banner  ",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("h1",{className:"duhoc",children:"DU H\u1eccC"}),Object(N.jsx)("h1",{className:"uc",children:"\xdaC"}),Object(N.jsx)("img",{src:x,className:"cohoi"}),Object(N.jsx)("h1",{className:"hocbong",children:"nh\u1eadn h\u1ecdc b\u1ed5ng 100%"})]}),Object(N.jsx)("div",{className:"girl-wrapper",children:Object(N.jsx)("img",{src:O,className:"girlImg"})})]})]})})})})})]})})),k=C,w=(c(62),function(e){var t=e.position,c=e.eventArray,n=e.handleClick;return Object(N.jsxs)(s.a.Fragment,{children:[Object(N.jsx)("div",{id:"fp-nav-wrapper",children:Object(N.jsx)("div",{id:"fp-nav",class:"right",style:{marginTop:"-56px"},children:Object(N.jsx)("ul",{children:c.map((function(e,c){return Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"#".concat(e.href),onClick:function(){return n(c)},class:t===c?"active":"",children:Object(N.jsx)("span",{})})})}))})})}),Object(N.jsx)("nav",{class:"main-menu",children:Object(N.jsx)("ul",{class:"links",id:"qmenu",children:c.map((function(e,c){return Object(N.jsx)("li",{class:t===c?"active":"",children:Object(N.jsx)("a",{href:"#".concat(e.href),onClick:function(){return n(c)},children:e.icon})})}))})})]})}),S=(c(63),c(32)),I=c.n(S),H=c(9),T=(c(65),function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),i=Object(r.a)(a,2),l=i[0],d=i[1];return Object(n.useEffect)((function(){document.querySelectorAll(".image-service").forEach((function(e){e.style.height=e.offsetWidth/1.33+"px"}))})),Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getConfig({type:"images",page:"du-hoc-uc",section:"vouchers"});case 2:t=e.sent,s(t.data[0].images),console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(N.jsxs)("div",{className:"contain",children:[Object(N.jsx)("div",{className:"leftColumn",children:Object(N.jsxs)("div",{className:"leftContent",children:[Object(N.jsx)("div",{className:"icon-section",children:Object(N.jsx)("a",{className:"linkIcon",href:"https://satsi.edu.vn",target:"_blank",children:Object(N.jsx)("ion-icon",{name:"gift-outline"})})}),Object(N.jsx)("h2",{className:"lydo",children:"DU H\u1eccC \xdaC"}),Object(N.jsx)("p",{children:"CH\u01af\u01a0NG TR\xccNH H\u1eccC \u0110A D\u1ea0NG"}),Object(N.jsx)("p",{children:"CHI PH\xcd SINH HO\u1ea0T PH\xd9 H\u1ee2P"}),Object(N.jsx)("p",{children:"CAM K\u1ebeT VI\u1ec6C L\xc0M"}),Object(N.jsx)("p",{children:"QU\xc0 T\u1eb6NG H\u1ea4P D\u1eaaN"})]})}),Object(N.jsx)("div",{className:"rightColumn",children:Object(N.jsxs)("div",{className:"servicesRightContent",children:[Object(N.jsx)("h1",{children:"\u0110\u0102NG K\xcd \u0110\u1ec2 NH\u1eacN QU\xc0 H\u1ea4P D\u1eaaN"}),Object(N.jsx)("div",{className:"services",children:c.map((function(e,t){return Object(N.jsxs)("div",{className:"servicesContent",children:[Object(N.jsx)("h2",{className:"test",children:e.data}),Object(N.jsx)("img",{src:"".concat("https://api.satsi.edu.vn").concat(e.link),alt:"Ch\u01b0\u01a1ng tr\xecnh visa 426",className:"image-voucher"}),Object(N.jsx)("p",{children:l.includes(t)?e.description:"".concat(e.description.slice(0,80),"...")}),Object(N.jsx)("div",{className:"buttonContain",children:e.description.length>80&&Object(N.jsx)("button",{className:"registerBtn",onClick:function(){l.includes(t)?d(l.filter((function(e){return e!==t}))):d([].concat(Object(H.a)(l),[t]))},children:l.includes(t)?"\u1ea8n":" Xem th\xeam"})})]})}))})]})})]})}),E=(c(66),c.p+"static/media/satsi_profile.92e6ff8d.jpg"),A=function(){var e=Object(n.useState)(),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(),i=Object(r.a)(a,2),l=i[0],d=i[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getConfig({type:"text",page:"du-hoc-uc",section:"introduce-left"});case 2:return t=e.sent,e.next=5,g.getConfig({type:"text",page:"du-hoc-uc",section:"introduce-right"});case 5:c=e.sent,s(t.data[0]),d(c.data[0]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(N.jsxs)("div",{className:"contain",children:[Object(N.jsx)("div",{className:"leftColumn",children:Object(N.jsxs)("div",{className:"leftContent",children:[Object(N.jsx)("div",{className:"icon-section",children:Object(N.jsx)("a",{className:"linkIcon",href:"https://satsi.edu.vn",target:"_blank",children:Object(N.jsx)("ion-icon",{name:"information-circle-outline"})})}),Object(N.jsx)("h2",{children:"TH\xd4NG TIN V\u1ec0 SATSI"}),Object(N.jsx)("p",{className:"text-justify",children:null===c||void 0===c?void 0:c.value}),Object(N.jsx)("div",{className:"aboutimg",children:Object(N.jsx)("img",{src:E,className:""})}),Object(N.jsx)("button",{type:"button",class:"btn  registerBtnNew","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"\u0110\u0103ng k\xfd ngay"})]})}),Object(N.jsx)("div",{className:"rightColumn",children:Object(N.jsxs)("div",{className:"rightContent",children:[Object(N.jsx)("h1",{children:"GI\u1edaI THI\u1ec6U CHUNG"}),Object(N.jsx)("h2",{children:"Th\xf4ng tin v\u1ec1 ch\xfang t\xf4i"}),Object(N.jsx)("p",{className:"text-justify",children:null===l||void 0===l?void 0:l.value}),Object(N.jsx)("div",{className:"buttonContain"})]})})]})},B=(c(67),function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),i=Object(r.a)(a,2),l=i[0],d=i[1],u=Object(n.useState)([]),b=Object(r.a)(u,2),h=b[0],m=b[1];return Object(n.useEffect)((function(){document.querySelectorAll(".image-service").forEach((function(e){e.style.height=e.offsetWidth/1.33+"px"}))})),Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getConfig({type:"images",page:"du-hoc-uc",section:"programs"});case 2:return t=e.sent,e.next=5,g.getConfig({type:"text",page:"du-hoc-uc",section:"why-choose-us"});case 5:c=e.sent,s(t.data[0].images),m(c.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(N.jsxs)("div",{className:"contain",children:[Object(N.jsx)("div",{className:"leftColumn",children:Object(N.jsxs)("div",{className:"leftContent",children:[Object(N.jsx)("div",{className:"icon-section",children:Object(N.jsx)("a",{className:"linkIcon",href:"https://satsi.edu.vn",target:"_blank",children:Object(N.jsx)("ion-icon",{name:"list-outline"})})}),Object(N.jsx)("h2",{className:"lydo",children:"L\xfd do n\xean ch\u1ecdn du h\u1ecdc \xdac"}),h.map((function(e){return Object(N.jsxs)("p",{children:[Object(N.jsx)("i",{className:"icon-check",children:Object(N.jsx)("ion-icon",{name:"checkmark-outline"})}),Object(N.jsx)("span",{children:e.value})]})}))]})}),Object(N.jsx)("div",{className:"rightColumn",children:Object(N.jsxs)("div",{className:"servicesRightContent",children:[Object(N.jsx)("h1",{children:"Ch\u01b0\u01a1ng tr\xecnh h\u1ecdc"}),Object(N.jsx)("div",{className:"services",children:c.length>0&&c.map((function(e,t){return Object(N.jsxs)("div",{className:"servicesContent",children:[Object(N.jsx)("h2",{className:"test",children:e.data}),Object(N.jsx)("img",{src:"".concat("https://api.satsi.edu.vn").concat(e.link),alt:"Ch\u01b0\u01a1ng tr\xecnh visa 426",className:"image-service"}),Object(N.jsx)("p",{children:l.includes(t)?e.description:"".concat(e.description.slice(0,80),"...")}),Object(N.jsx)("div",{className:"buttonContain",children:e.description.length>80&&Object(N.jsx)("button",{className:"registerBtn",onClick:function(){l.includes(t)?d(l.filter((function(e){return e!==t}))):d([].concat(Object(H.a)(l),[t]))},children:l.includes(t)?"\u1ea8n":" Xem th\xeam"})})]})}))})]})})]})}),G=(c(68),c(81)),M=c(79),D=c(80),L=c(76),P=c(77),R=c(78);c(69),c(70),c(71);D.a.use([L.a,P.a,R.a]);var U=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useRef)(),i=Object(n.useRef)(),l=Object(n.useRef)(null);return console.log(a.current,i.current),Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getConfig({type:"images",page:"du-hoc-uc",section:"activities"});case 2:t=e.sent,console.log(t),s(t.data[0].images);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(N.jsxs)("div",{className:"projectsContain",children:[Object(N.jsx)("div",{className:"leftColumn",children:Object(N.jsxs)("div",{className:"leftContent",children:[Object(N.jsx)("div",{className:"icon-section",children:Object(N.jsx)("a",{className:"linkIcon",href:"https://satsi.edu.vn",target:"_blank",children:Object(N.jsx)("ion-icon",{name:"accessibility-outline"})})}),Object(N.jsx)("h2",{children:"Ho\u1ea1t \u0111\u1ed9ng"}),Object(N.jsx)("p",{children:"S\u0102N H\u1eccC B\u1ed4NG TO\xc0N PH\u1ea6N \u1ede \xdaC"}),Object(N.jsx)("button",{type:"button",class:"btn  registerBtnNew","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"\u0111\u0103ng k\xfd ngay"})]})}),Object(N.jsx)("div",{className:"rightColumn",children:Object(N.jsxs)("div",{className:"slideRightContent",children:[Object(N.jsxs)("div",{className:"navigationBtn",children:[Object(N.jsx)("div",{className:"prevBtn",onClick:function(){return l.current.swiper.slidePrev()},children:"prev"}),Object(N.jsx)("div",{className:"nextBtn",onClick:function(){return l.current.swiper.slideNext()},children:"next"})]}),Object(N.jsx)(G.a,{ref:l,slidesPerView:1,pagination:{clickable:!0},loop:!0,autoplay:{delay:2e3},speed:1e3,children:c.map((function(e,t){return Object(N.jsx)(M.a,{children:Object(N.jsxs)("div",{children:[Object(N.jsx)("img",{className:"slideImage",src:"".concat("https://api.satsi.edu.vn").concat(e.link),alt:""}),Object(N.jsxs)("h2",{className:"slideTitle",children:[e.data," "]}),Object(N.jsx)("p",{className:"slideContent",children:e.description})]})},t)}))})]})})]})},V=(c(72),function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(),i=Object(r.a)(a,2),l=i[0],d=i[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getConfig({type:"text",page:"du-hoc-uc",section:"Videos"});case 2:return t=e.sent,s(t.data),e.next=6,g.getConfig({type:"text",page:"du-hoc-uc",section:"videoTitle"});case 6:c=e.sent,d(null===c||void 0===c?void 0:c.data[0]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(N.jsxs)("div",{className:"contain",children:[Object(N.jsx)("div",{className:"leftColumn",children:Object(N.jsxs)("div",{className:"leftContent",children:[Object(N.jsx)("div",{className:"icon-section",children:Object(N.jsx)("a",{className:"linkIcon",href:"https://satsi.edu.vn",target:"_blank",children:Object(N.jsx)("ion-icon",{name:"videocam-outline"})})}),Object(N.jsx)("h2",{className:"lydo",children:null===l||void 0===l?void 0:l.value}),Object(N.jsx)("button",{type:"button",class:"btn  registerBtnNew","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"\u0111\u0103ng k\xfd ngay"})]})}),Object(N.jsx)("div",{className:"rightColumn",children:Object(N.jsxs)("div",{className:"servicesRightContent",children:[Object(N.jsx)("h2",{className:"videoRightTitle",children:null===l||void 0===l?void 0:l.description}),Object(N.jsx)("div",{className:"videos",children:null===c||void 0===c?void 0:c.map((function(e){return Object(N.jsx)("iframe",{className:"video",src:e.value,title:"YouTube video player",frameborder:"100",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}))})]})})]})}),q=[{href:"Home",icon:Object(N.jsx)("ion-icon",{name:"time-outline"})},{href:"Voucher",icon:Object(N.jsx)("ion-icon",{name:"gift-outline"})},{href:"AboutUs",icon:Object(N.jsx)("ion-icon",{name:"information-circle-outline"})},{href:"Services",icon:Object(N.jsx)("ion-icon",{name:"list-outline"})},{href:"Projects",icon:Object(N.jsx)("ion-icon",{name:"accessibility-outline"})},{href:"Videos",icon:Object(N.jsx)("ion-icon",{name:"videocam-outline"})}],F=function(){var e=s.a.useState(0),t=Object(r.a)(e,2),c=t[0],n=t[1],a=s.a.useRef([]),i=I.a.debounce((function(e){n(e),console.log(c)}),300),l=s.a.useCallback((function(e){var t;e.deltaY<0?t=c>0?c-1:0:e.deltaY>=0&&(t=c<5?c+1:c),i(t)}),[i,c]);return s.a.useEffect((function(){return window.addEventListener("wheel",l),function(){window.removeEventListener("wheel",l)}}),[l]),s.a.useEffect((function(){a.current[c].scrollIntoView({behavior:"smooth"})}),[c]),Object(N.jsx)(s.a.Fragment,{children:Object(N.jsxs)("div",{className:"wrapper",children:[Object(N.jsx)("div",{className:0===c?"homeContain active":"homeContain",children:Object(N.jsx)(k,{ref:function(e){return a.current[0]=e},id:"home",timeTillDate:"2021/11/11 00:00:00"})}),Object(N.jsx)("div",{className:1===c?"voucher active":"voucher",ref:function(e){return a.current[1]=e},children:Object(N.jsx)(T,{})}),Object(N.jsx)("div",{className:2===c?"aboutUs active":"aboutUs",ref:function(e){return a.current[2]=e},children:Object(N.jsx)(A,{})}),Object(N.jsx)("div",{className:3===c?"services active":"services",ref:function(e){return a.current[3]=e},children:Object(N.jsx)(B,{})}),Object(N.jsx)("div",{className:4===c?"projects active":"projects",ref:function(e){return a.current[4]=e},children:Object(N.jsx)(U,{})}),Object(N.jsx)("div",{className:5===c?"projects active":"projects",ref:function(e){return a.current[5]=e},children:Object(N.jsx)(V,{})}),Object(N.jsx)(w,{position:c,eventArray:q,handleClick:n})]})})},_=c(33),K={register:function(e){return p.post("api/other/user-register/",e)},getAll:function(){return p.get("event/all")}},Y=(c.p,c(73),function(){var e,t,c,n,a,i=Object(_.a)({defaultValues:{representer:" "}}),l=i.register,u=i.formState.errors,b=i.handleSubmit,h=i.reset,m=s.a.useState(!1),O=Object(r.a)(m,2),x=O[0],f=O[1],v=s.a.useState(!1),p=Object(r.a)(v,2),g=p[0],y=p[1],C=s.a.useState(!1),k=Object(r.a)(C,2),w=k[0],S=k[1],I=function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.register(Object(d.a)(Object(d.a)({},t),{},{type:"du hoc uc"}));case 3:f(!0),S(!0),setTimeout((function(){f(!1),S(!1),h()}),2e3),e.next=14;break;case 8:e.prev=8,e.t0=e.catch(0),y(!0),S(!0),setTimeout((function(){y(!1),S(!1),h()}),2e3),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)("div",{className:"modal fade",id:"exampleModal",children:Object(N.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(N.jsxs)("div",{className:"modal-content",children:[Object(N.jsx)("div",{className:"modal-header justify-content-center",children:Object(N.jsx)("h4",{className:" text-center",id:"exampleModalLabel",children:"\u0110\u0103ng k\xfd tham gia ch\u01b0\u01a1ng tr\xecnh"})}),Object(N.jsx)("div",{className:"modal-body",children:Object(N.jsxs)("form",{className:"form",onSubmit:b(I),children:[Object(N.jsxs)("div",{className:"input-group mb-3 ",children:[Object(N.jsx)("input",Object(d.a)(Object(d.a)({id:"name",placeholder:"T\xean"},l("name",{required:"ban phai nhap truong nay"})),{},{type:"text",className:u.name?"form-control is-invalid":"form-control "})),u.name&&Object(N.jsx)("div",{class:"invalid-feedback",children:null===(e=u.name)||void 0===e?void 0:e.message})]}),Object(N.jsxs)("div",{className:"input-group mb-3 ",children:[Object(N.jsx)("input",Object(d.a)(Object(d.a)({id:"address",placeholder:"\u0110\u1ecba ch\u1ec9"},l("address",{required:"ban phai nhap truong nay"})),{},{type:"text",className:u.address?"form-control is-invalid":"form-control "})),u.address&&Object(N.jsx)("div",{class:"invalid-feedback",children:null===(t=u.address)||void 0===t?void 0:t.message})]}),Object(N.jsxs)("div",{className:"input-group mb-3 ",children:[Object(N.jsx)("input",Object(d.a)(Object(d.a)({id:"phoneNumber",placeholder:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"},l("phoneNumber",{required:"ban phai nhap truong nay",pattern:{value:/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,message:"nh\u1eadp \u0111\xfang s\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}})),{},{type:"text",className:u.phoneNumber?"form-control is-invalid":"form-control "})),u.phoneNumber&&Object(N.jsx)("div",{class:"invalid-feedback",children:null===(c=u.phoneNumber)||void 0===c?void 0:c.message})]}),Object(N.jsxs)("div",{className:"input-group mb-3 ",children:[Object(N.jsx)("input",Object(d.a)(Object(d.a)({id:"email",placeholder:"Email"},l("email",{pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"nh\u1eadp \u0111\xfang email c\u1ee7a b\u1ea1n"}})),{},{type:"text",className:u.email?"form-control is-invalid":"form-control "})),u.email&&Object(N.jsx)("div",{class:"invalid-feedback",children:null===(n=u.email)||void 0===n?void 0:n.message})]}),Object(N.jsxs)("div",{className:"input-group mb-3 ",children:[Object(N.jsx)("input",Object(d.a)(Object(d.a)({id:"dateOfBirth",placeholder:"Ng\xe0y sinh"},l("dateOfBirth",{required:"ban phai nhap truong nay"})),{},{type:"date",className:u.dateOfBirth?"form-control is-invalid":"form-control "})),u.dateOfBirth&&Object(N.jsx)("div",{class:"invalid-feedback",children:null===(a=u.dateOfBirth)||void 0===a?void 0:a.message})]}),Object(N.jsx)("div",{className:"mb-3 ",children:Object(N.jsx)("input",Object(d.a)(Object(d.a)({id:"code",placeholder:"M\xe3 ng\u01b0\u1eddi gi\u1edbi thi\u1ec7u"},l("representer")),{},{type:"text",className:"form-control "}))}),x&&Object(N.jsx)("div",{className:"notiSuccess mb-2",children:" \u0111\u0103ng k\xfd th\xe0nh c\xf4ng"}),g&&Object(N.jsx)("div",{className:"notiFailure mb-2",children:"\u0111\u0103ng k\xfd kh\xf4ng th\xe0nh c\xf4ng"}),Object(N.jsx)("button",{disabled:w,type:"submit",className:"btn btn-primary",children:"\u0110\u0103ng k\xfd ngay"})]})}),Object(N.jsx)("div",{class:"modal-footer justify-content-center",children:Object(N.jsx)("button",{type:"button",class:"btn btn-secondary ","data-bs-dismiss":"modal",children:"\u0110\xf3ng"})})]})})})});var Z=function(){return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(F,{}),Object(N.jsx)(Y,{})]})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,82)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(Z,{})}),document.getElementById("root")),J()}},[[74,1,2]]]);
//# sourceMappingURL=main.8900d1f9.chunk.js.map
(this["webpackJsonpTriageCL-Website"]=this["webpackJsonpTriageCL-Website"]||[]).push([[0],{48:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(23),n=c.n(i),r=(c(48),c(9),c(10)),l=c(11),o=c(13),j=c(12),d=(c(14),c(5)),m=c(28),h=c(0),b=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).state={show:!1},e}return Object(l.a)(c,[{key:"handleModal",value:function(){this.setState({show:!this.state.show})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"nav-link",children:[Object(h.jsx)("button",{href:"#",className:"nav-link mr-5",style:{borderRadius:100,fontSize:"1vw",backgroundColor:"#E3A7FF",color:"white",width:150,height:60},onClick:function(){e.handleModal()},children:Object(h.jsx)("p",{className:"triage titlecustom2",style:{fontSize:30},children:"Login"})}),Object(h.jsxs)(m.a,{show:this.state.show,onHide:function(){return e.handleModal()},children:[Object(h.jsx)(m.a.Header,{closeButton:!0,style:{backgroundColor:"#E3A7FF",height:170}}),Object(h.jsx)(m.a.Body,{style:{height:350}}),Object(h.jsx)(m.a.Footer,{})]})]})}}]),c}(s.Component),x=c(41),O=a.a.createContext(),f=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(r.a)(this,c);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={products:[{_id:"1",title:"Standard Triage Tee",img:"https://cdn.discordapp.com/attachments/584882522211483754/798339545019449364/Shirt1.png",price:29.99},{_id:"2",title:"Triage Inverse Tote Bag",img:"https://cdn.discordapp.com/attachments/584882522211483754/798339519463161866/toteinverse.png",price:19.99}],cart:[],total:0},e.removeCart=function(t){var c=e.state.cart;c.forEach((function(e,s){e._id===t&&c.splice(s,1)})),e.setState({cart:c})},e.addCart=function(t){var c=e.state,s=c.products,a=c.cart,i=(a.every((function(e){return e._id===t})),s.filter((function(e){return e._id===t})));e.setState({cart:[].concat(Object(x.a)(a),Object(x.a)(i))}),alert("The product has been added to the cart.")},e.checkOut=function(t){var c=e.state.cart;c.forEach((function(e,s){e._id===t&&c.splice(s,100)})),e.setState({cart:c})},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this.state,t=e.products,c=e.cart,s=e.total,a=this.addCart,i=this.removeCart,n=this.checkOut;return Object(h.jsx)(O.Provider,{value:{products:t,addCart:a,cart:c,removeCart:i,total:s,checkOut:n},children:this.props.children})}}]),c}(s.Component),u=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.context.cart;return Object(h.jsx)("div",{children:Object(h.jsx)("section",{children:Object(h.jsxs)("nav",{className:"navbarcustom navbar",children:[Object(h.jsxs)("div",{className:"column text-center",children:[Object(h.jsx)(d.b,{to:"/",className:"logolink1 font-weight-bold navbar-brand ml-3 mb-2"}),Object(h.jsxs)("h5",{className:"triage",style:{marginTop:-10},children:[" ","TRIAGE"," "]}),Object(h.jsxs)("header",{className:"triage",style:{marginTop:-15,fontSize:9},children:[" ","Coffee Lab"," "]})]}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("ul",{className:"nav-item"}),Object(h.jsx)("ul",{className:"navbar-nav",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("li",{className:"nav-item d-flex align-items-center",children:Object(h.jsx)(d.b,{whileHover:{color:"black"},to:"/beans",className:"customlink nav-link mx-4",children:"Coffee"})}),Object(h.jsx)("li",{className:"nav-item d-flex align-items-center",children:Object(h.jsx)(d.b,{whileHover:{color:"black"},to:"/merch",className:"customlink nav-link mx-4",children:"Merch"})}),Object(h.jsx)("li",{className:"nav-item d-flex align-items-center",children:Object(h.jsx)(d.b,{whileHover:{color:"black"},to:"/location",className:"customlink nav-link mx-4",children:"Locations"})}),Object(h.jsx)("li",{className:"nav-item d-flex align-items-center",children:Object(h.jsx)(b,{})}),Object(h.jsx)("li",{className:"nav-item d-flex align-items-center",children:Object(h.jsx)(d.b,{whileHover:{color:"black"},to:"/cart",className:"customlink nav-link mx-4",children:Object(h.jsxs)("span",{children:[" Cart[",e.length,"]"]})})})]})})]})})})}}]),c}(s.Component);u.contextType=O;var v=u,p=c(7);c.p;var g=function(){return Object(h.jsx)("div",{className:"fsmout",children:Object(h.jsx)("div",{className:"fsmbg column d-flex align-items-center",children:Object(h.jsxs)("div",{className:"fsm container",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"triage col-md",style:{color:"white",fontSize:"4vw"},children:"Fresh on Site,"}),Object(h.jsx)("h1",{className:"triage col-md",style:{color:"white",fontSize:"4vw"},children:"Scientifically Roasted,"}),Object(h.jsx)("h1",{className:"triage col-md",style:{color:"white",fontSize:"4vw"},children:"Made Just for You."})," "]}),Object(h.jsx)(d.b,{to:"/beans",children:Object(h.jsx)("button",{className:"shop-here-main buttoncustom mt-5",children:Object(h.jsx)("h2",{className:"shop-here-text pt-2 titlecustom",children:" Shop Here "})})})]})})})};c.p,c(61);var N=c(40),y=c.p+"static/media/Founder.8fe3b2d2.jpeg";var w=function(){var e;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",(e={className:"text-center mt-5",style:{width:"100vw"}},Object(N.a)(e,"style",{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}),Object(N.a)(e,"children",[Object(h.jsxs)("h1",{className:"titlecustom",style:{fontSize:64},children:[" ","Our Story"]}),Object(h.jsxs)("header",{className:"roboto",style:{fontWeight:100,fontSize:24,marginTop:-15},children:[" ","The result of our passion for achieving perfection."]}),Object(h.jsx)("p",{className:"story-top pcustom",children:"We take two things to an incredibly high standard: quality and consistency. We can\u2019t express how many times we\u2019ve experienced a shop\u2019s coffee at its best and at its worst in the span of a week. We are committed to providing a consistent experience that you will be able to enjoy again and again."}),Object(h.jsxs)("div",{className:"row-resp-founder mt-5",children:[Object(h.jsx)("img",{src:y,alt:"Founder Photo",className:"founder-photo img-fluid"}),Object(h.jsxs)("div",{className:"founder-text-box p-5 mt-5",children:[Object(h.jsxs)("div",{className:"founder-title mr-5",children:[Object(h.jsx)("header",{className:"our-founder roboto",children:" Our Founder"}),Object(h.jsx)("h2",{className:"lawrence-cheung roboto ml-5",children:" Lawrence Cheung"})]}),Object(h.jsx)("div",{className:"row text-center",children:Object(h.jsx)("p",{className:"less320pxw roboto ml-4 column",children:"My passion for maximizing the flavors of coffee started in the heights of San Francisco. For the majority of my adolescence, the complex flavors of coffee intrigued me. Naturally, I seeked out what else was possible to enhance the fruit\u2019s flavors to its max potential. Learning from coffee shop to coffee shop, I improved my intuition and knowledge in both the roasting process of the coffee bean and technique in using the best equipment in transfering the flavors from the raw coffee bean to a caffeinated beverage. I explored the best of the best in all different parts of the world to perfect my coffee."})}),Object(h.jsxs)("header",{className:"story-under-header triage",children:[" ","Now, I am here to share my experiences by telling my story in a cup."," "]})]})]})]),e))})};var k=function(){return Object(h.jsx)("div",{className:"d-flex justify-content-center my-5",children:Object(h.jsx)("div",{className:"my-5",style:{border:"1px gray solid",width:1e3}})})},C=c.p+"static/media/Equipmentbg.b6684172.png";var S=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"column text-center",style:{paddingBottom:400,backgroundImage:"url(".concat(C,")"),height:"100vh",width:"100vw",objectFit:"cover",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"},children:[Object(h.jsx)("h1",{className:"equip-title titlecustom",children:" Our Equipment"}),Object(h.jsxs)("header",{className:"equip-header roboto",children:[" ","Make your own Triage at home."]}),Object(h.jsxs)("button",{className:"button-equips buttoncustom2 titlecustom mt-5",children:[" ",Object(h.jsxs)("h2",{className:"button-equips-text pt-2",children:[" ","Get our recommended equipment"," "]})]})]})})};var T=function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"column text-center",children:[Object(h.jsxs)("h1",{className:"titlecustom",style:{fontSize:64},children:[" ","Improve Your Skills"]}),Object(h.jsxs)("header",{className:"roboto",style:{fontWeight:100,fontSize:24,marginTop:-15},children:[" ","Discover and recreate your favorite coffee."]}),Object(h.jsx)("div",{className:"embed-responsive embed-responsive-16by9 my-5",children:Object(h.jsx)("iframe",{className:"embed-responsive-item",src:"https://www.youtube.com/embed/_zMjUrTXidA",allowfullscreen:!0})})]})})};var z=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{}),Object(h.jsx)(g,{}),Object(h.jsx)(w,{}),Object(h.jsx)(k,{}),Object(h.jsx)(S,{}),Object(h.jsx)(k,{}),Object(h.jsx)(T,{})]})},F=c.p+"static/media/merchtitle.ebba0c35.png",L=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).state={showLinks:!1},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this,t=this.context.cart;return Object(h.jsx)("div",{children:Object(h.jsxs)("section",{className:"navbar-top-row",children:[Object(h.jsx)("div",{children:Object(h.jsx)(d.b,{to:"/",className:"logolink2 font-weight-bold navbar-brand mb-2"})}),Object(h.jsx)("nav",{style:{backgroundColor:"white"},className:"drop-down py-4",children:Object(h.jsx)("button",{className:"drop-down-button",onClick:function(){e.setState({showLinks:!e.state.showLinks})}})}),Object(h.jsx)("ul",{style:{position:"fixed",right:0,top:100,width:200,borderRadius:10,zIndex:99},id:this.state.showLinks?"show":"hidden",children:Object(h.jsxs)("div",{style:{width:200},className:"column",children:[Object(h.jsx)("li",{className:"nav-item d-flex align-items-center",children:Object(h.jsx)(d.b,{whileHover:{color:"black"},to:"beans",className:"customlink nav-link mx-4",children:"Coffee"})}),Object(h.jsx)("li",{className:"nav-item d-flex align-items-center",children:Object(h.jsx)(d.b,{whileHover:{color:"black"},to:"/merch",className:"customlink nav-link mx-4",children:"Merch"})}),Object(h.jsx)("li",{className:"nav-item d-flex align-items-center",children:Object(h.jsx)(d.b,{whileHover:{color:"black"},to:"/location",className:"customlink nav-link mx-4",children:"Locations"})}),Object(h.jsx)("li",{className:"nav-item d-flex align-items-center",children:Object(h.jsx)(b,{})}),Object(h.jsx)("li",{className:"nav-item d-flex align-items-center",children:Object(h.jsx)(d.b,{whileHover:{color:"black"},to:"/cart",className:"customlink carticon nav-link mx-3 mr-5",children:Object(h.jsxs)("span",{children:[" Cart[",t.length,"]"]})})})]})}),Object(h.jsx)("nav",{className:"navbarcustom2 py-3",children:Object(h.jsxs)("ul",{className:"row",children:[Object(h.jsx)("li",{className:"nav-item col-sm mr-3 d-flex align-items-center",children:Object(h.jsx)(d.b,{whileHover:{color:"black"},to:"beans",className:"customlink nav-link mx-4",children:"Coffee"})}),Object(h.jsx)("li",{className:"nav-item col-sm mr-3 d-flex align-items-center",children:Object(h.jsx)(d.b,{whileHover:{color:"black"},to:"/merch",className:"customlink nav-link mx-4",children:"Merch"})}),Object(h.jsx)("li",{className:"nav-item col-sm mr-3 d-flex align-items-center",children:Object(h.jsx)(d.b,{whileHover:{color:"black"},to:"/location",className:"customlink nav-link mx-4",children:"Locations"})}),Object(h.jsx)("li",{className:"nav-item col-sm mr-3 d-flex align-items-center",children:Object(h.jsx)(b,{})}),Object(h.jsx)("li",{className:"nav-item col-sm mr-3 d-flex align-items-center",children:Object(h.jsx)(d.b,{whileHover:{color:"black"},to:"/cart",className:"customlink carticon nav-link mx-3 mr-3",children:Object(h.jsxs)("span",{children:[" Cart[",t.length,"]"]})})})]})})]})})}}]),c}(s.Component);L.contextType=O;var X=L,D=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this,t=this.context.products;return Object(h.jsx)("div",{children:t.map((function(t){return Object(h.jsx)("div",{className:"column",children:Object(h.jsxs)("div",{className:"row",style:{backgroundColor:"white",minHeight:600},children:[Object(h.jsx)("div",{className:"col-md d-flex justify-content-center p-5",children:Object(h.jsx)("img",{src:t.img,alt:"item placeholder #1",style:{height:"60vh"}})}),Object(h.jsxs)("div",{className:"col-md column p-5 mt-5",children:[Object(h.jsx)("h1",{className:"titlecustom",style:{fontSize:"4vw"},children:t.title}),Object(h.jsxs)("header",{className:"roboto",style:{fontWeight:100,fontSize:"1vw",marginTop:-15,marginBottom:100},children:[" ","The original, a standard white t-shirt with your favorite coffee roasters' logo."]}),Object(h.jsxs)("header",{className:"roboto",style:{fontWeight:100,fontSize:"1vw",marginTop:-15},children:[" ",Object(h.jsxs)("span",{children:["$",t.price]})]}),Object(h.jsx)("button",{onClick:function(){return e.context.addCart(t._id)},className:"buttoncustom2",children:"Add to Cart"})]})]})},t._id)}))})}}]),c}(s.Component);D.contextType=O;var H=D;var A=function(){return Object(h.jsxs)(d.a,{children:[Object(h.jsxs)("div",{className:"custom-column",children:[Object(h.jsx)(X,{}),Object(h.jsxs)("div",{className:"custom-row",children:[Object(h.jsxs)("div",{className:"fsm-text",children:[Object(h.jsx)("h1",{className:"fsm-text-each triage",children:" Show your"}),Object(h.jsx)("h1",{className:"fsm-text-each triage",children:" coffee science"}),Object(h.jsx)("h1",{className:"fsm-text-each triage",children:" love."}),Object(h.jsxs)("header",{className:"fsm-text-header triage",children:[" ","Buy some of our official Triage merch."]})]}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:F,className:"img-resp-1",alt:"merch mix"})})]})]}),Object(h.jsx)(H,{})]})};var I=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{}),Object(h.jsxs)("div",{className:"column mb-5",children:[Object(h.jsxs)("div",{className:"col-sm",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(h.jsxs)("h2",{className:"triage my-3",style:{color:"#E3A7FF"},children:[" ","Our Coffee Beans"]}),Object(h.jsx)("nav",{className:"navbar navbar-expand-sm d-flex justify-content-center align-items-center p-5",children:Object(h.jsxs)("ul",{className:"navbar-nav mr-5",children:[Object(h.jsx)("li",{className:"nav-item mx-5",children:Object(h.jsx)("a",{href:"#",className:"triage text-dark",style:{textDecoration:"none"},children:"Single Origin"})}),Object(h.jsx)("div",{className:"mx-5 center",style:{height:30,width:1,border:"1px gray solid",borderRadius:30}}),Object(h.jsx)("li",{className:"nav-item mx-5",children:Object(h.jsx)("a",{href:"#",className:"triage text-dark",style:{textDecoration:"none"},children:"Decaf"})}),Object(h.jsx)("div",{className:"mx-5 center",style:{height:30,width:1,border:"1px gray solid",borderRadius:30}}),Object(h.jsx)("li",{className:"nav-item mx-5",children:Object(h.jsx)("a",{href:"#",className:"triage text-dark",style:{textDecoration:"none"},children:"Other"})})]})})]}),Object(h.jsx)("div",{className:"col-sm mt-5",children:Object(h.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(h.jsxs)("div",{className:"column",children:[Object(h.jsx)("div",{className:"boxcoffee",children:Object(h.jsx)("img",{src:"#",alt:"coffee type 1"})}),Object(h.jsx)("div",{className:"boxcoffee",children:Object(h.jsx)("img",{src:"#",alt:"coffee type 1"})}),Object(h.jsx)("div",{className:"boxcoffee",children:Object(h.jsx)("img",{src:"#",alt:"coffee type 1"})}),Object(h.jsx)("div",{className:"boxcoffee",children:Object(h.jsx)("img",{src:"#",alt:"coffee type 1"})})]}),Object(h.jsxs)("div",{className:"column",children:[Object(h.jsx)("div",{className:"boxcoffee",children:Object(h.jsx)("img",{src:"#",alt:"coffee type 1"})}),Object(h.jsx)("div",{className:"boxcoffee",children:Object(h.jsx)("img",{src:"#",alt:"coffee type 1"})}),Object(h.jsx)("div",{className:"boxcoffee",children:Object(h.jsx)("img",{src:"#",alt:"coffee type 1"})}),Object(h.jsx)("div",{className:"boxcoffee",children:Object(h.jsx)("img",{src:"#",alt:"coffee type 1"})})]}),Object(h.jsxs)("div",{className:"column",children:[Object(h.jsx)("div",{className:"boxcoffee",children:Object(h.jsx)("img",{src:"#",alt:"coffee type 1"})}),Object(h.jsx)("div",{className:"boxcoffee",children:Object(h.jsx)("img",{src:"#",alt:"coffee type 1"})}),Object(h.jsx)("div",{className:"boxcoffee",children:Object(h.jsx)("img",{src:"#",alt:"coffee type 1"})}),Object(h.jsx)("div",{className:"boxcoffee",children:Object(h.jsx)("img",{src:"#",alt:"coffee type 1"})})]}),Object(h.jsxs)("div",{className:"column",children:[Object(h.jsx)("div",{className:"boxcoffee",children:Object(h.jsx)("img",{src:"#",alt:"coffee type 1"})}),Object(h.jsx)("div",{className:"boxcoffee",children:Object(h.jsx)("img",{src:"#",alt:"coffee type 1"})}),Object(h.jsx)("div",{className:"boxcoffee",children:Object(h.jsx)("img",{src:"#",alt:"coffee type 1"})}),Object(h.jsx)("div",{className:"boxcoffee",children:Object(h.jsx)("img",{src:"#",alt:"coffee type 1"})})]})]})})]})]})},W=c.p+"static/media/Triage-Logo-White.3bb017f8.png";var E=function(){return Object(h.jsxs)("div",{className:"testo",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:W,style:{width:300},className:"img-fluid"})}),Object(h.jsx)("div",{className:"my-5",style:{height:1,width:500,border:"2px white solid",borderRadius:30}}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-sm mx-5 text-center",children:[Object(h.jsxs)("h2",{style:{color:"white",fontSize:40,fontWeight:200},children:[" ","Contact Us"," "]}),Object(h.jsx)("div",{className:"mx-5 mb-2 center",style:{height:1,width:100,border:"1px white solid",borderRadius:30}}),Object(h.jsxs)("div",{className:"my-4",children:[Object(h.jsxs)("header",{className:"footerp mt-4",style:{borderBottom:"1px white solid"},children:[" ","Founder Email"," "]}),Object(h.jsxs)("p",{className:"footerp",style:{fontSize:13},children:[" ","XXXXXXXXXXXXX@yahoo.com"," "]}),Object(h.jsxs)("header",{className:"footerp mt-4",style:{borderBottom:"1px white solid"},children:[" ","Shop Email"," "]}),Object(h.jsxs)("p",{className:"footerp",style:{fontSize:13},children:[" ","triage@triagecr.com"," "]}),Object(h.jsxs)("header",{className:"footerp mt-4",style:{borderBottom:"1px white solid"},children:[" ","Phone Number"," "]}),Object(h.jsx)("p",{className:"footerp",children:" (510) XXX-3250"})]})]}),Object(h.jsx)("div",{className:"mx-5 center",style:{height:200,width:1,border:"1px white solid",borderRadius:30}}),Object(h.jsxs)("div",{className:"col-sm mx-5 text-center",children:[Object(h.jsxs)("h2",{style:{color:"white",fontSize:40,fontWeight:200},children:[" ","Locations"," "]}),Object(h.jsx)("div",{className:"mx-5 mb-2 center",style:{height:1,width:100,border:"1px white solid",borderRadius:30}}),Object(h.jsxs)("div",{className:"my-4",children:[Object(h.jsxs)(d.b,{to:"/location",className:"customlink2",style:{textDecoration:"none"},children:[" ",Object(h.jsx)("p",{children:"Alameda"})]}),Object(h.jsxs)(d.b,{to:"/location",className:"customlink2",style:{textDecoration:"none"},children:[" ",Object(h.jsx)("p",{children:"San Francisco"})]}),Object(h.jsxs)(d.b,{to:"/location",className:"customlink2",style:{textDecoration:"none"},children:[" ",Object(h.jsx)("p",{children:"San Jose"})]})]})]}),Object(h.jsx)("div",{className:"mx-5 center",style:{height:200,width:1,border:"1px white solid",borderRadius:30}}),Object(h.jsxs)("div",{className:"col-sm mx-5 text-center",children:[Object(h.jsxs)("h2",{style:{color:"white",fontSize:40,fontWeight:200},children:[" ","News"," "]}),Object(h.jsx)("div",{className:"mx-5 mb-2 center",style:{height:1,width:100,border:"1px white solid",borderRadius:30}}),Object(h.jsxs)("div",{className:"my-4",children:[Object(h.jsxs)("a",{href:"#",className:"customlink2",style:{textDecoration:"none"},children:[" ",Object(h.jsx)("p",{children:" General "})]}),Object(h.jsxs)("a",{href:"#",className:"customlink2",style:{textDecoration:"none"},children:[" ",Object(h.jsx)("p",{children:" Events "})]}),Object(h.jsxs)("a",{href:"#",className:"customlink2",style:{textDecoration:"none"},children:[" ",Object(h.jsx)("p",{children:" Coffee Cycles "})]})]})]})]}),"\xa9 Copyright. Ernest Cheung, Lawrence Cheung, Triage"]})};var R=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{}),Object(h.jsx)("div",{className:"column mb-5",children:Object(h.jsxs)("div",{className:"col-sm",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(h.jsxs)("h2",{className:"triage my-3",style:{color:"#E3A7FF"},children:[" ","Find your nearest Triage"]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-sm",children:[Object(h.jsx)("iframe",{width:"600",height:"500",src:"https://maps.google.com/maps?q=Alameda&t=&z=13&ie=UTF8&iwloc=&output=embed",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0",style:{border:"1px black solid",borderRadius:10}}),Object(h.jsx)("a",{href:"https://maps-google.github.io/embed-google-map/",className:"customlink",style:{textDecoration:"none"},children:"embed google map"})]}),Object(h.jsxs)("div",{className:"col-sm",children:[Object(h.jsx)("h1",{className:"triage",style:{fontSize:"4vw"},children:"Our Locations"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{className:"triage customlist mt-3",children:"Alameda, CA"}),Object(h.jsx)("li",{className:"triage customlist mt-3",children:"San Francisco, CA"}),Object(h.jsx)("li",{className:"triage customlist mt-3",children:"San Jose, CA"})]})]})]})]})})]})},B=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.context,t=e.cart,c=e.removeCart,s=e.checkOut;return 0===t.length?Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{}),Object(h.jsx)("div",{className:"m-5 d-flex justify-content-center align-items-center",style:{minHeight:300},children:Object(h.jsxs)("h2",{className:"triage",style:{color:"#e3a7ff"},children:[" ","Looks like you don't have anything in your cart yet..."," "]})})]}):Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{}),Object(h.jsx)("div",{className:"column mb-5",children:Object(h.jsx)("div",{className:"col-sm",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:Object(h.jsxs)(h.Fragment,{children:[t.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"col-sm my-5",style:{border:"1px black solid"},children:Object(h.jsx)("div",{className:"d-flex justify-content-center",children:Object(h.jsxs)("div",{className:"column d-flex justify-content-center align-items-center",children:[Object(h.jsxs)("div",{className:"row ml-5",children:[Object(h.jsx)("h1",{className:"titlecustom",style:{fontSize:"4vw"},children:e.title}),Object(h.jsxs)("header",{className:"roboto",style:{fontWeight:100,fontSize:"1vw",marginTop:-15,marginBottom:100},children:[" ","The original, a standard white t-shirt with your favorite coffee roasters' logo."]})]}),Object(h.jsx)("img",{className:"mx-5",src:e.img,alt:e.title,style:{width:"60vh"}}),Object(h.jsxs)("header",{className:"roboto mx-5",style:{fontWeight:100,fontSize:"1vw",marginTop:-15},children:[" ",Object(h.jsxs)("span",{children:["$",e.price]})]}),Object(h.jsx)("button",{onClick:function(){return c(e._id)},className:"buttoncustom2 mx-5",children:"X"}),Object(h.jsxs)("button",{onClick:function(){return s(e._id)},children:[" ","Checkout"," "]})]})})})},e._id)})),Object(h.jsx)("div",{})]})})})]})}}]),c}(s.Component);B.contextType=O;var _=B,q=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("div",{})})}}]),c}(s.Component),M=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(h.jsxs)(d.a,{children:[Object(h.jsx)(p.a,{path:"/cart",component:_}),Object(h.jsx)(p.a,{path:"/payment",component:q})]})}}]),c}(s.Component);var J=function(){return Object(h.jsx)(f,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(p.a,{exact:!0,path:"/",component:z}),Object(h.jsx)(p.a,{path:"/merch",component:A}),Object(h.jsx)(p.a,{path:"/beans",component:I}),Object(h.jsx)(p.a,{path:"/location",component:R}),Object(h.jsx)(p.a,{path:"/cart",component:M}),Object(h.jsx)(E,{})]})})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),i(e),n(e)}))};n.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(J,{})}),document.getElementById("root")),P()},9:function(e,t,c){}},[[59,1,2]]]);
//# sourceMappingURL=main.a2a6fcd7.chunk.js.map
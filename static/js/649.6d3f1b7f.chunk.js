/*! For license information please see 649.6d3f1b7f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkeasy_start_wallet=self.webpackChunkeasy_start_wallet||[]).push([[649],{2649:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,i,o,s,a,l,d,p,x,c,f=t(4270),h=t(5705),m=t(6727),u=t(7689),g=t(168),b=t(4313),w=b.ZP.div(r||(r=(0,g.Z)(["\n  @media screen and (min-width: 768px) {\n    width: 426px;\n    height: 552px;\n    padding: 56px 83px 56px 83px;\n  }\n  padding: 40px 29px 40px 29px;\n\n  width: 280px;\n  height: 496px;\n  margin: auto;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 12px;\n  color: #010101;\n  flex-direction: column;\n  border: 2px solid white;\n  border-radius: 30px;\n  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);\n\n  font-family: 'Roboto';\n  font-style: normal;\n\n  background-color: #ffffff;\n"]))),j=(0,b.ZP)(h.gN)(i||(i=(0,g.Z)(["\n\n@media screen and (max-width: 767px) {\n    width: 240px;\n  top:20px;\n  }\n\n  width: 258.92px;\n  height: 52px;\n  font-size: 12px;\n  margin-bottom: 32px;\n  margin-top: 12px;\n  display: flex;\n  padding-left: 19.54px;\n  \n  border-radius: 30px;\n  background: #f6f7fb;\n  border-style: none;\n  border: none;\n   &: hover,  &:focus {\n    border:  non;\n  }\n"]))),y=b.ZP.button(o||(o=(0,g.Z)(["\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 32px;\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  background-color: #f6f7fb;\n  border-radius: 26px;\n  border: 0;\n  padding: 10px 18px 10px 20px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  text-align: center;\n  letter-spacing: 0.02em;\n  color: #000000;\n"]))),Z=b.ZP.p(s||(s=(0,g.Z)(["\n  @media screen and (min-width: 767px) {\n    max-width: 222px;\n    margin-bottom: 16px;\n    padding-right: 8px;\n    padding-left: 8px;\n  }\n  margin-bottom: 20px;\n  font-size: 12px;\n  line-height: 14px;\n  max-width: 210px;\n  max-height: 28px;\n  color: #52555f;\n"]))),v=b.ZP.button(a||(a=(0,g.Z)(["\n @media screen and (max-width: 767px) {\n    width: 116px;\n  }\n  width: 122.17px;\n  height: 44px;\n  background: #f5f6fb;\n  border-radius: 16px;\n  border-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #52555f;\n  font-weight: 700;\n  cursor: pointer;\n  &: hover,  &:focus {\n    background: #ff751d;\n    color: #ffffff;\n    // border-style: none;\n    border: none;\n  } ;\n"]))),k=b.ZP.div(l||(l=(0,g.Z)(["\n  @media screen and (min-width: 768px) {\n    padding-top: 8px;\n  }\n  display: flex;\n  padding-top: 20px;\n  justify-content: space-between;\n"]))),P=b.ZP.div(d||(d=(0,g.Z)(["\n  position: relative;\n"]))),R=b.ZP.p(p||(p=(0,g.Z)(["\n  color: #eb5757;\n  position: absolute;\n  bottom: -18px;\n  left: 0;\n  font-size: 10px;\n  line-height: 12px;\n  letter-spacing: 0.04em;\n"]))),z=b.ZP.span(x||(x=(0,g.Z)(["\n  color: #eb5757;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.04em;\n"]))),F=b.ZP.button(c||(c=(0,g.Z)(["\n  @media screen and (max-width: 767px) {\n    width: 116px;\n  }\n  width: 122.17px;\n  height: 44px;\n\n  border-radius: 16px;\n  border-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  font-weight: 700;\n  cursor: pointer;\n  background: #ff751d;\n  color: #ffffff;\n\n  border: none;\n"]))),_=t(2986),E=t(9434),I=t(5822),S=t(1087),C=t(184),q=m.Ry().shape({email:m.Z_().email("Invalid email").required("Enter your email"),password:m.Z_().min(8).max(20).required("Enter your password")}),G=function(n){var e=n.name;return(0,C.jsx)(h.Bc,{name:e,render:function(n){return(0,C.jsx)(R,{children:n})}})};console.log("RegisterForm ---\x3e start");var N=function(){var n=(0,u.s0)(),e=(0,E.I0)();return console.log("RegisterForm ---\x3e render"),(0,C.jsxs)(w,{children:[(0,C.jsx)(Z,{children:"You can log in with your Google Account:"}),(0,C.jsx)(y,{type:"button",onClick:function(){n("/register")},children:(0,C.jsx)(_.r,{})}),(0,C.jsx)(Z,{children:"Or log in using an email and password, after registering:"}),(0,C.jsx)(h.J9,{initialValues:{email:"",password:""},validationSchema:q,onSubmit:function(t,r){var i=r.resetForm;n("/register"),console.log("RegisterForm ---\x3e handleSubmit"),console.log("RegisterForm ---\x3e value:",t),e((0,I.z2)(t)),i()},children:function(n){var e=n.errors,t=n.touched;return(0,C.jsxs)(h.l0,{autoComplete:"off",children:[(0,C.jsxs)("label",{htmlFor:"login",style:{position:"relative"},children:[e.email&&t.email?(0,C.jsx)(z,{children:"*"}):null," Email:",(0,C.jsxs)(P,{children:[(0,C.jsx)(j,{type:"email",name:"email",placeholder:"Email address"}),(0,C.jsx)(G,{name:"email",component:"div"})]})]}),(0,C.jsx)(P,{children:(0,C.jsxs)("label",{htmlFor:"password",children:[e.password&&t.password?(0,C.jsx)(z,{children:"*"}):null," ","Password:",(0,C.jsx)(j,{type:"password",name:"password",placeholder:"Security password"}),(0,C.jsx)(G,{name:"password",style:{position:"absolute",bottom:0,left:0}})]})}),(0,C.jsxs)(k,{children:[(0,C.jsx)(S.rU,{to:"/login",children:(0,C.jsx)(v,{type:"button",children:"LOG IN"})}),(0,C.jsx)(F,{type:"submit",children:"REGISTRATION"})]})]})}})]})},O=t(6091);function A(){return(0,C.jsxs)("div",{children:[(0,C.jsx)(f.q,{children:(0,C.jsx)("title",{children:"Registration"})}),(0,C.jsx)(O.o,{children:(0,C.jsx)(N,{})})]})}}}]);
//# sourceMappingURL=649.6d3f1b7f.chunk.js.map
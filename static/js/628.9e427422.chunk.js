/*! For license information please see 628.9e427422.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkeasy_start_wallet=self.webpackChunkeasy_start_wallet||[]).push([[628],{1628:function(n,e,o){o.r(e),o.d(e,{default:function(){return O}});var r,i,t,a,s,l,d,p,x,c,f=o(4270),m=o(5705),h=o(168),u=o(4313),g=u.ZP.div(r||(r=(0,h.Z)(["\n  @media screen and (min-width: 768px) {\n    width: 426px;\n    height: 552px;\n    padding: 56px 83px 56px 83px;\n  }\n  padding: 40px 29px 40px 29px;\n\n  width: 280px;\n  height: 496px;\n  margin: auto;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 12px;\n  color: #010101;\n  flex-direction: column;\n  border: 2px solid white;\n  border-radius: 30px;\n  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);\n\n  font-family: 'Roboto';\n  font-style: normal;\n\n  background-color: #ffffff;\n"]))),b=(0,u.ZP)(m.gN)(i||(i=(0,h.Z)(["\n@media screen and (max-width: 767px) {\n    width: 240px;\n   margin-bottom: 20px; \n  }\n \n  width: 258.92px;\n  height: 52px;\n  font-size: 12px;\n  margin-bottom: 32px;\n  margin-top: 12px;\n  display: flex;\n  padding-left: 19.54px;\n  \n  border-radius: 30px;\n  background: #f6f7fb;\n  border-style: none;\n  border: none;\n   &: hover,  &:focus {\n    border:  non;\n  }\n"]))),w=u.ZP.a(t||(t=(0,h.Z)(["\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 32px;\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  background-color: #f6f7fb;\n  border-radius: 26px;\n  border: 0;\n  padding: 10px 18px 10px 20px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  text-align: center;\n  letter-spacing: 0.02em;\n  color: #000000;\n"]))),j=u.ZP.p(a||(a=(0,h.Z)(["\n  @media screen and (min-width: 767px) {\n    max-width: 222px;\n    margin-bottom: 16px;\n    padding-right: 8px;\n    padding-left: 8px;\n  }\n\n  margin-bottom: 20px;\n  font-size: 12px;\n  line-height: 14px;\n  max-width: 210px;\n  max-height: 28px;\n  color: #52555f;\n"]))),y=u.ZP.button(s||(s=(0,h.Z)(["\n @media screen and (max-width: 767px) {\n    width: 116px;\n  }\n  width: 122.17px;\n  height: 44px;\n  background: #f5f6fb;\n  border-radius: 16px;\n  border-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #52555f;\n  font-weight: 700;\n  cursor: pointer;\n  &: hover,  &:focus {\n    background: #ff751d;\n    color: #ffffff;\n    // border-style: none;\n    border: none;\n  } ;\n"]))),Z=u.ZP.div(l||(l=(0,h.Z)(["\n  @media screen and (min-width: 768px) {\n    padding-top: 8px;\n  }\n  display: flex;\n  padding-top: 20px;\n  justify-content: space-between;\n"]))),v=u.ZP.div(d||(d=(0,h.Z)(["\n  position: relative;\n"]))),P=u.ZP.p(p||(p=(0,h.Z)(["\n  color: #eb5757;\n  position: absolute;\n  bottom: -18px;\n  left: 0;\n  font-size: 10px;\n  line-height: 12px;\n  letter-spacing: 0.04em;\n"]))),k=u.ZP.span(x||(x=(0,h.Z)(["\n  color: #eb5757;\n  font-size: 12px;\n  line-height: 14px;\n  letter-spacing: 0.04em;\n"]))),F=u.ZP.button(c||(c=(0,h.Z)(["\n  @media screen and (max-width: 767px) {\n    width: 116px;\n  }\n  width: 122.17px;\n  height: 44px;\n\n  border-radius: 16px;\n  border-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  font-weight: 700;\n  cursor: pointer;\n  background: #ff751d;\n  color: #ffffff;\n\n  border: none;\n"]))),L=o(8007),I=o(9434),z=o(2986),E=o(5822),R=o(1087),S=o(2791),_=o(184),q=L.Ry().shape({email:L.Z_().email("Invalid email").required("Enter your email"),password:L.Z_().min(8).max(20).required("Enter your password")}),C=function(n){var e=n.name;return(0,_.jsx)(m.Bc,{name:e,render:function(n){return(0,_.jsx)(P,{children:n})}})};console.log("LoginForm ---\x3e start");var G=function(){var n=(0,I.I0)(),e=new URLSearchParams(window.location.search),o=e.get("email"),r=e.get("password");(0,S.useEffect)((function(){console.log("LoginForm ---\x3e value:",{email:o,password:r}),o&&n((0,E.Ib)({email:o,password:r}))}),[n,o,r]);return console.log("LoginForm ---\x3e render"),(0,_.jsxs)(g,{children:[(0,_.jsx)(j,{children:"You can log in with your Google Account:"}),(0,_.jsx)(w,{href:"http://localhost:3033/api/users/google/",children:(0,_.jsx)(z.r,{})}),(0,_.jsx)(j,{children:"Or log in using an email and password, after registering:"}),(0,_.jsx)(m.J9,{initialValues:{email:"",password:""},validationSchema:q,onSubmit:function(e,o){var r=o.resetForm;console.log("LoginForm ---\x3e handleSubmit"),console.log("LoginForm ---\x3e value:",e),n((0,E.Ib)(e)),r()},children:function(n){var e=n.errors,o=n.touched;return(0,_.jsxs)(m.l0,{autoComplete:"off",children:[(0,_.jsxs)("label",{htmlFor:"login",style:{position:"relative"},children:[e.email&&o.email?(0,_.jsx)(k,{children:"*"}):null," Email:",(0,_.jsxs)(v,{children:[(0,_.jsx)(b,{type:"email",name:"email",placeholder:"Email address"}),(0,_.jsx)(C,{name:"email",component:"div"})]})]}),(0,_.jsx)(v,{children:(0,_.jsxs)("label",{htmlFor:"password",children:[e.password&&o.password?(0,_.jsx)(k,{children:"*"}):null," ","Password:",(0,_.jsx)(b,{type:"password",name:"password",placeholder:"Security password"}),(0,_.jsx)(C,{name:"password",style:{position:"absolute",bottom:0,left:0}})]})}),(0,_.jsxs)(Z,{children:[(0,_.jsx)(F,{type:"submit",children:"LOG IN"}),(0,_.jsx)(R.rU,{to:"/register",children:(0,_.jsx)(y,{type:"button",children:"REGISTRATION"})})]})]})}})]})},N=o(6091);function O(){return(0,_.jsxs)("div",{children:[(0,_.jsx)(f.q,{children:(0,_.jsx)("title",{children:"Login"})}),(0,_.jsx)(N.o,{children:(0,_.jsx)(G,{})})]})}}}]);
//# sourceMappingURL=628.9e427422.chunk.js.map
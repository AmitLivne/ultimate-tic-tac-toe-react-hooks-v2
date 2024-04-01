(this["webpackJsonpultimate-tic-tac-toe-react-hooks"]=this["webpackJsonpultimate-tic-tac-toe-react-hooks"]||[]).push([[0],{26:function(n,e,t){"use strict";t.r(e);var i,r,o,c,a,l=t(1),s=t.n(l),d=t(6),b=t.n(d),u=t(2),f=t(3),j=Object(f.a)(i||(i=Object(u.a)(["\n* {\n  box-sizing: border-box;\n}\nhtml {\n  font-family: sans-serif;\n}\nbody {\n  padding: 0;\n  margin: 0;\n}\n\n#overlay-root {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n}\n"]))),h=f.b.div(r||(r=Object(u.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]))),m=t(8),p=t(5),x=t(4),O=f.b.div(o||(o=Object(u.a)(["\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  border: 1px solid black;\n  cursor: pointer;\n  color: ",";\n  &:hover {\n    background: ",";\n  }\n\n  @media (min-width: 620px) {\n    font-size: 38px;\n\n    @keyframes animatePlayer {\n    50% {\n      font-size: 250px;\n    }\n\n    100% {\n      font-size: 180px;\n      transform: rotateZ(360deg);\n    }\n  }\n  }\n"])),(function(n){return"X"===n.val?"#F78888":"#006db6"}),(function(n){var e=n.val;return n.isClickable&&"X"!==e&&"O"!==e?"#838383":""})),g=t(0);function y(n){var e=n.value?"X"===n.value?"X":"O":"";return Object(g.jsx)(O,Object(m.a)(Object(m.a)({val:e,isClickable:n.isClickable,className:"local-board"},n.isClickable&&!n.value&&{onClick:n.onClick}),{},{children:n.value}))}var v,w=f.b.div(c||(c=Object(u.a)(["\n  font-size: 10px;\n  @keyframes animatePlayer {\n    50% {\n      font-size: 190px;\n    }\n\n    100% {\n      font-size: 120px;\n      transform: rotateZ(360deg);\n    }\n  }\n  display: flex;\n  flex-direction: column;\n  border: 1px solid black;\n  padding: ",";\n  position: relative;\n  width: ",";\n  flex: ",";\n  background: ",";\n  aspect-ratio : 1 / 1;\n\n  &::before {\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    animation: animatePlayer 1s forwards;\n    z-index: 1;\n    content: ",";\n    color: ",";\n  }\n\n  @media (min-width: 620px) {\n    width: ",";\n  }\n\n"])),(function(n){return"global"===n.boardType?"1em":""}),(function(n){return"global"===n.boardType?"90%":""}),(function(n){return"global"===n.boardType?"":"1"}),(function(n){var e=n.wonBoard,t=n.isClickable;return e?"#fade72":t?"#b8b8b8":"#f2f2f2"}),(function(n){var e=n.wonBoard;return e?"X"===e.winner?"'X'":"'O'":""}),(function(n){var e=n.wonBoard;return e?"X"===e.winner?"#F78888":"#006db6":""}),(function(n){return"global"===n.boardType?"650px":""})),k=f.b.div(a||(a=Object(u.a)(["\n  display: flex;\n  flex: 1;\n"])));function C(n,e){var t=[];return Object(p.a)(Array(e)).map((function(i,r){var o=[];Object(p.a)(Array(e)).map((function(t,i){o=[].concat(Object(p.a)(o),[n(r*e+i)])})),t=[].concat(Object(p.a)(t),[Object(g.jsx)(k,{children:o})])})),t}function z(n){var e=n.board,t=n.boardInfo,i=n.size;return Object(g.jsx)(w,{boardType:null===t||void 0===t?void 0:t.type,className:"global"===(null===t||void 0===t?void 0:t.type)?"global-board":"local-board",wonBoard:t.wonBoard||!1,isClickable:!!(null===t||void 0===t?void 0:t.isClickable),children:C(e,i)})}function S(n){return Object(g.jsx)(z,{board:function(e){return function(e){var t;return Object(g.jsx)(y,{value:null===n||void 0===n||null===(t=n.localBoards)||void 0===t?void 0:t[e],isClickable:n.isClickable,onClick:function(){return n.onClick(e)}},e)}(e)},boardInfo:{type:"local",wonBoard:n.isWon.length>0&&{winner:n.isWon[0].player},isClickable:n.isClickable||!1},size:n.size})}var N,B,X,P=f.b.button(v||(v=Object(u.a)(["\n  font-size: inherit;\n  line-height: inherit;\n  border: none;\n  padding: 0.5em;\n  background: ",";\n  color: ",";\n  \n  cursor: pointer;\n  &:focus {\n      outline: none;\n  }\n  &:hover, &:active  {\n    opacity: ",";\n  }\n"])),(function(n){var e=n.styles;return e&&e.bg?e.bg:"transparent"}),(function(n){var e=n.disabled,t=n.styles;return e?"#7e7c7c":t&&t.color?t.color:"#ffffff"}),(function(n){return n.disabled?1:.7}));function I(n){var e=n.styles,t=n.type,i=void 0===t?"button":t,r=n.onClick,o=n.disabled,c=void 0!==o&&o,a=n.children;return Object(g.jsx)(P,{styles:e,type:i,onClick:r,disabled:c,children:a})}var E,F,G,T,A,M,H,J,D,L=f.b.div(N||(N=Object(u.a)(["\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  background: #0f70b8;\n  padding: 1em;\n  top: 0;\n  width: 100%;\n  position: relative;\n\n  @media (min-width: 620px) {\n    font-size: 26px;\n  }\n"]))),W=f.b.div(B||(B=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  @media (min-width: 620px) {\n    width: 800px;\n  }\n"]))),Z=f.b.div(X||(X=Object(u.a)(["\n  display: flex;\n  font-size: inherit;\n  color: #ffffff;\n\n  span {\n    position: relative;\n    margin-left: 0.4em;\n  }\n"])));function Q(n){return Object(g.jsx)(L,{children:Object(g.jsxs)(W,{children:[Object(g.jsx)(I,{onClick:n.onNewGameClick,children:"New Game"}),Object(g.jsx)(I,{onClick:n.onHighScoresClick,children:"High Scores"}),Object(g.jsxs)(Z,{children:["Player:",Object(g.jsx)("span",{children:n.player})]})]})})}var R,Y,q=f.b.div(E||(E=Object(u.a)(["\n  font-size: 14px;\n  background: white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n  border-radius: 0.5em;\n  position: relative;\n  width: 90%;\n  z-index: 100;\n  overflow: hidden;\n  @media (min-width: 620px) {\n    font-size: 20px;\n    width: 35em;\n}\n"]))),K=f.b.header(F||(F=Object(u.a)(["\n  font-size: 14px;\n  padding: 0.4em 0.7692em;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 3.077em;\n  line-height: 3.077em;\n  background: #0f70b8;\n  @media (min-width: 620px) {\n    font-size: 26px;\n}\n"]))),U=f.b.section(G||(G=Object(u.a)(["\n  font-weight: bold;\n  padding: 1em;\n"]))),V=f.b.footer(T||(T=Object(u.a)(["\n  padding: 0 1em 1em 1em;\n  display: flex;\n  justify-content: flex-end;\n"]))),$=f.b.div(A||(A=Object(u.a)(["\n  text-transform: ",";\n  margin: 0;\n  color: white;\n  font-weight: bold;\n"])),(function(n){return n.hs?"uppercase":""})),_=f.b.label(M||(M=Object(u.a)(["\n  font-weight: bold;\n  margin-right: 1em;\n"]))),nn=f.b.input(H||(H=Object(u.a)(["\n  font-size: inherit;\n  padding: 0.25em;\n"]))),en=f.b.div(J||(J=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.75);\n"]))),tn=f.b.form(D||(D=Object(u.a)(["\n  display: flex;\n  align-items: center;\n"]))),rn=f.b.table(R||(R=Object(u.a)(["\n  width: 100%;\n  border-spacing: 0 0.5em;\n\n  thead {\n    text-align: left;\n    height: 1.5em;\n    color: #0084e6;\n    font-size: 14px;\n\n    tr th:first-child {\n      padding-left: 0.8em;\n    }\n    tr th:last-child {\n      text-align: center;\n    }\n\n    @media (min-width: 620px) {\n    font-size: 22px;\n}\n  }\n  tbody {\n    tr {\n      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n      line-height: 2em;\n      border-radius: 0.7em;\n      \n      td:first-child {\n        padding-left: 0.8em;\n        border-top-left-radius: 0.7em;\n        border-bottom-left-radius: 0.7em;\n      }\n      td:last-child {\n        text-align: center;\n        border-top-right-radius: 0.7em;\n        border-bottom-right-radius: 0.7em;\n      }\n    }\n  }\n"]))),on=f.b.tr(Y||(Y=Object(u.a)(["\n  background: ",";\n"])),(function(n){return n.isNew?"#63b7f6":"transparent"}));function cn(n){var e=n.rank,t=n.name,i=n.score,r=n.isNew;return Object(g.jsxs)(on,{isNew:r,children:[Object(g.jsx)("td",{children:e}),Object(g.jsx)("td",{children:t}),Object(g.jsx)("td",{children:i})]})}function an(n){var e=n.rows,t=n.newPlayer,i=e.findIndex((function(n){return n.name===t.name&&n.score===t.score})),r=Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"#"}),Object(g.jsx)("th",{children:"Name"}),Object(g.jsx)("th",{children:"Score"})]})}),o=Object(g.jsx)("tbody",{children:e.map((function(n,e){return Object(g.jsx)(cn,{rank:e+1,name:n.name,score:n.score,isNew:i===e},e)}))});return Object(g.jsx)(U,{children:Object(g.jsxs)(rn,{children:[r,o]})})}var ln,sn=function(n){var e=Object(l.useState)(""),t=Object(x.a)(e,2),i=t[0],r=t[1],o=Object(l.useState)(),c=Object(x.a)(o,2),a=c[0],s=c[1];return Object(g.jsxs)(q,{children:[Object(g.jsxs)(K,{children:[Object(g.jsx)($,{hs:"hs"===n.modal.type,children:n.modal.header}),"hs"===n.modal.type&&Object(g.jsx)(I,{type:"button",onClick:n.onClick,children:"X"})]}),"hs"===n.modal.type&&Object(g.jsx)(an,{rows:n.modal.body,newPlayer:{name:i,score:a}}),"d"===n.modal.type&&Object(g.jsx)(U,{children:n.modal.body}),"w"===n.modal.type&&Object(g.jsx)(U,{children:Object(g.jsxs)(tn,{onSubmit:function(e){e.preventDefault();var t={name:i,score:n.modal.score};s(n.modal.score),n.onSubmitName(t)},children:[Object(g.jsx)(_,{htmlFor:"name",children:"Your name:"}),Object(g.jsx)(nn,{id:"name",type:"text",value:i,onChange:function(n){r(n.target.value)}}),Object(g.jsx)(I,{type:"submit",styles:{color:"#0f70b8"},disabled:!(0!==i.trim().length),children:"Submit"})]})}),("d"===n.modal.type||"w"===n.modal.type)&&Object(g.jsx)(V,{children:Object(g.jsx)(I,{type:"button",onClick:n.onNewGameClick,styles:{bg:"#0f70b8"},children:"New Game"})})]})},dn=function(n){return Object(g.jsxs)(g.Fragment,{children:[b.a.createPortal(Object(g.jsx)(en,{}),document.getElementById("backdrop-root")),b.a.createPortal(Object(g.jsx)(sn,{modal:n.modal,onClick:n.onClick,onNewGameClick:n.onNewGameClick,onSubmitName:function(e){return n.onSubmitName(e)}}),document.getElementById("overlay-root"))]})},bn=f.b.div(ln||(ln=Object(u.a)(["\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n"]))),un=[{name:"El Professor",score:15},{name:"Harley Quinn",score:12},{name:"Messi",score:7},{name:"Rick and Morty",score:5},{name:"LeBron",score:30}];function fn(n){var e=Object(l.useState)([]),t=Object(x.a)(e,2),i=t[0],r=t[1],o=Object(l.useState)("X"),c=Object(x.a)(o,2),a=c[0],s=c[1],d=Object(l.useState)(null),b=Object(x.a)(d,2),u=b[0],f=b[1],j=Object(l.useState)([]),h=Object(x.a)(j,2),O=h[0],y=h[1],v=Object(l.useState)([]),w=Object(x.a)(v,2),k=w[0],C=w[1],N=Object(l.useState)([]),B=Object(x.a)(N,2),X=B[0],P=B[1],I=Object(l.useState)(null),E=Object(x.a)(I,2),F=E[0],G=E[1],T=Object(l.useState)({X:0,O:0}),A=Object(x.a)(T,2),M=A[0],H=A[1],J=Object(l.useState)(null),D=Object(x.a)(J,2),L=D[0],W=D[1],Z=function(){for(var n=[],e=[],t=[],i=0;i<3;i++){var r=[],o=[];e.push(i+3*i),t.push(3*(i+1)-(i+1));for(var c=0;c<3;c++)r.push(3*i+c),o.push(i+3*c);n.push(r,o)}return n.push(e,t),n}();function R(){return Object(p.a)(Array(Math.pow(n.size,2))).map((function(){return Array(Math.pow(n.size,2)).fill(null)}))}function Y(){return Object(p.a)(Array(Math.pow(n.size,2)).keys())}Object(l.useEffect)((function(){r(R()),W(JSON.parse(localStorage.getItem("highScores"))||un),y(Y()),C(Y())}),[]),Object(l.useEffect)((function(){if(u){if(q(u[0])){if(1!==k.length)return;en()}1===k.length&&$(u[0])&&en(),U()}}),[i]),Object(l.useEffect)((function(){X.length>2&&K()||X.length>0&&U()}),[X]),Object(l.useEffect)((function(){L&&(on(),F&&G({type:"hs",isNewGame:!0,header:"highScores",body:L}))}),[L]);var q=function(n){var e=!1;return Z.forEach((function(t){t.every((function(e){return i[n][e]===a}))&&(e=!0)})),e&&P([].concat(Object(p.a)(X),[{idx:u[0],player:a}])),e},K=function(){var n=!1;return Z.forEach((function(e){e.every((function(n){return X.some((function(e){return e.idx===n&&e.player===a}))}))&&(n=!0)})),n&&tn(),n},U=function(){var n=Object(p.a)(k);$(u[0])&&(n=n.filter((function(n){return u[0]!==n})),V(n)),_(u[1])?(n=n.filter((function(n){return X.every((function(e){return e.idx!==n}))})),V(n)):(n=n.includes(u[1])?[u[1]]:n,y(n)),s("X"===a?"O":"X")},V=function(n){C(n),y(n)},$=function(n){return i[n].every((function(n){return null!==n}))},_=function(n){return X.some((function(e){return e.idx===n}))};function nn(e){return Object(g.jsx)(S,{className:"global-board",size:n.size,localBoards:null===i||void 0===i?void 0:i[e],isWon:X.filter((function(n){return n.idx===e})),isClickable:O.includes(e),onClick:function(n){return f([t=e,o=n]),H((function(n){var e=Object(m.a)({},n);return e[a]++,e})),void r(i.map((function(n,e){return n.map((function(n,i){return e===t&&o===i&&null===n?a:n}))})));var t,o}},e)}var en=function(){setTimeout((function(){G({type:"d",header:"It's a Draw!",body:"Better luck next time..."})}),400)},tn=function(){setTimeout((function(){G({type:"w",header:"Congrats! Player ".concat(a," won!"),score:M["".concat(a)]})}),400)},rn=function(){r(R()),s("X"),f(null),P([]),G(null),H({X:0,O:0}),y(Y()),C(Y())},on=function(){L.sort((function(n,e){return n.score>e.score?1:-1})),localStorage.setItem("highScores",JSON.stringify(L))};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Q,{onNewGameClick:rn,onHighScoresClick:function(){G({type:"hs",header:"highScores",body:L})},player:a}),Object(g.jsx)(bn,{children:Object(g.jsx)(z,{board:function(n){return nn(n)},boardInfo:{type:"global"},size:n.size})}),F&&Object(g.jsx)(dn,{modal:F,onClick:F.isNewGame?rn:function(){G(null)},onSubmitName:function(n){return e=n,void W([].concat(Object(p.a)(L),[e]));var e},onNewGameClick:rn})]})}var jn=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(j,{}),Object(g.jsx)(h,{className:"App",children:Object(g.jsx)(fn,{size:3})})]})},hn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,o=e.getLCP,c=e.getTTFB;t(n),i(n),r(n),o(n),c(n)}))};b.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(jn,{})}),document.getElementById("root")),hn()}},[[26,1,2]]]);
//# sourceMappingURL=main.bcd89ce4.chunk.js.map
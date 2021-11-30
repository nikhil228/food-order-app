(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2Z_Fv",summary:"CartItem_summary__qdf2l",price:"CartItem_price__1vM9r",amount:"CartItem_amount__3STS5",actions:"CartItem_actions__3SvK-"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3jhi8",total:"Cart_total__2KVoz",actions:"Cart_actions__1dXjR","button--alt":"Cart_button--alt__DjE54",button:"Cart_button__2UI_v"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__2utbi",icon:"HeaderCartButton_icon__e_otl",badge:"HeaderCartButton_badge__3XIRL",bump:"HeaderCartButton_bump__56VsT"}},,function(e,t,n){e.exports={meal:"MealItem_meal__3Bq6d",description:"MealItem_description__2bd8w",price:"MealItem_price__3I1JM"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2AgXH",modal:"Modal_modal__1MzWp","slide-down":"Modal_slide-down__ST3WW"}},,function(e,t,n){e.exports={header:"Header_header__2bvgN","main-image":"Header_main-image__3sIFv"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__1Y5C1"}},function(e,t,n){e.exports={card:"Card_card__3lPsK"}},function(e,t,n){e.exports={input:"Input_input__2jyG0"}},function(e,t,n){e.exports={form:"MealItemForm_form__2k_K7"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__12HIP","meals-appear":"AvailableMeals_meals-appear__1FxXI"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),s=n.n(r),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},d=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),m=n(8),u=n.n(m),j=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(d).items,m=s.reduce((function(e,t){return e+t.amount}),0),j="".concat(u.a.button," ").concat(a?u.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(o.jsxs)("button",{className:j,onClick:e.onClick,children:[Object(o.jsx)("span",{className:u.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:u.a.badge,children:m})]})},b=n.p+"static/media/meals.2971f633.jpg",x=n(13),O=n.n(x),p=function(e){return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsxs)("header",{className:O.a.header,children:[Object(o.jsx)("h1",{children:"ReactMeals"}),Object(o.jsx)(j,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:O.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},h=n(15),_=n.n(h),f=function(){return Object(o.jsxs)("section",{className:_.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(16),C=n.n(v),g=function(e){return Object(o.jsx)("div",{className:C.a.card,children:e.children})},A=n(2),I=n(17),N=n.n(I),y=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:N.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(A.a)({ref:t},e.input))]})})),M=n(18),w=n.n(M),k=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(o.jsxs)("form",{className:w.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(o.jsx)(y,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!a&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},H=n(10),F=n.n(H),S=function(e){var t=Object(r.useContext)(d),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:F.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:F.a.description,children:e.description}),Object(o.jsx)("div",{className:F.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(k,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},B=n(19),R=n.n(B),T=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],D=function(){var e=T.map((function(e){return Object(o.jsx)(S,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:R.a.meals,children:Object(o.jsx)(g,{children:Object(o.jsx)("ul",{children:e})})})},E=function(){return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsx)(f,{}),Object(o.jsx)(D,{})]})},z=n(11),P=n.n(z),V=function(e){return Object(o.jsx)("div",{className:P.a.backdrop,onClick:e.onClose})},K=function(e){return Object(o.jsx)("div",{className:P.a.modal,children:Object(o.jsx)("div",{className:P.a.content,children:e.children})})},X=document.getElementById("overlays"),q=function(e){return Object(o.jsxs)(r.Fragment,{children:[c.a.createPortal(Object(o.jsx)(V,{onClose:e.onClose}),X),c.a.createPortal(Object(o.jsx)(K,{children:e.children}),X)]})},J=n(4),W=n.n(J),Y=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:W.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:W.a.summary,children:[Object(o.jsx)("span",{className:W.a.price,children:t}),Object(o.jsxs)("span",{className:W.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:W.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},$=n(5),G=n.n($),L=function(e){var t=Object(r.useContext)(d),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(A.a)(Object(A.a)({},e),{},{amount:1}))},s=Object(o.jsx)("ul",{className:G.a["cart-items"],children:t.items.map((function(e){return Object(o.jsx)(Y,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(o.jsxs)(q,{onClose:e.onClose,children:[s,Object(o.jsxs)("div",{className:G.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:n})]}),Object(o.jsxs)("div",{className:G.a.actions,children:[Object(o.jsx)("button",{className:G.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(o.jsx)("button",{className:G.a.button,children:"Order"})]})]})},U=n(14),Z={items:[],totalAmount:0},Q=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(A.a)(Object(A.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(U.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],d=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(A.a)(Object(A.a)({},l),{},{amount:l.amount-1});(s=Object(U.a)(e.items))[o]=m}return{items:s,totalAmount:d}}return Z},ee=function(e){var t=Object(r.useReducer)(Q,Z),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(o.jsx)(d.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(ee,{children:[n&&Object(o.jsx)(L,{onClose:function(){a(!1)}}),Object(o.jsx)(p,{onShowCart:function(){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(E,{})})]})};c.a.render(Object(o.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.bfef30d9.chunk.js.map
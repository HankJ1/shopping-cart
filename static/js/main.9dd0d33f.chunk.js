(this["webpackJsonpshopping-cart-app"]=this["webpackJsonpshopping-cart-app"]||[]).push([[0],{21:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c.n(a),n=c(15),r=c.n(n),s=(c(21),c(6)),o=c(8),d=c(2),l=c(0),j=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"homepage-grid",children:[Object(l.jsxs)("div",{className:"title-container",children:[Object(l.jsx)("div",{className:"header-container",children:Object(l.jsxs)("h1",{className:"title-span",children:["Jimmy's ",Object(l.jsx)("br",{}),"Emporium ",Object(l.jsx)("br",{}),"of Eclectic ",Object(l.jsx)("br",{}),"Goods "]})}),Object(l.jsx)("div",{className:"header-container",children:Object(l.jsxs)("h3",{className:"slogan-span",children:["You won't believe",Object(l.jsx)("br",{}),"what we've got"]})})]}),Object(l.jsx)("div",{className:"image-container",children:Object(l.jsx)("img",{src:"shopping-cart/images/high-quality-robber.png",className:"robber-image"})})]})})},u=function(e){var t=Object(a.useState)(0),c=Object(s.a)(t,2);c[0],c[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"header-grid",children:[Object(l.jsx)(o.b,{to:"/",children:Object(l.jsx)("div",{className:"head-container home",children:"Home"})}),Object(l.jsx)(o.b,{to:"/catalogue",children:Object(l.jsx)("div",{className:"head-container",children:"Catalogue"})}),Object(l.jsx)(o.b,{to:"/cart",children:Object(l.jsx)("div",{className:"cart head-container"})}),Object(l.jsx)(o.b,{to:"/cart",children:Object(l.jsxs)("div",{className:"bag-image-container",children:[Object(l.jsx)("img",{src:"shopping-cart/images/bag2.png",className:"bag-image"}),Object(l.jsx)("span",{className:"item-count",children:e.bagCount})]})})]})})},p=function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("div",{className:"card-image-container",children:Object(l.jsx)("img",{src:e.url,className:"card-image"})}),Object(l.jsx)("div",{className:"card-description",children:e.description}),Object(l.jsx)("div",{className:"card-description card-price",children:e.price})]})})},b=[{description:"Wooden Crib",price:"39.99",url:"shopping-cart/images/products/crib.jpg",quantity:1},{description:"Brand New Laptop",price:"2200.00",url:"shopping-cart/images/products/dented-laptop.jpeg",quantity:1},{description:"Lightly Used Mattress",price:"99.99",url:"shopping-cart/images/products/old-mattress.jpg",quantity:1},{description:"Odor Resistant Sock",price:"19.99",url:"shopping-cart/images/products/old-sock.jpeg",quantity:1},{description:"Prime Sirloin",price:"22.99",url:"shopping-cart/images/products/old-steak.jpg",quantity:1},{description:"Original Art",price:"499.00",url:"shopping-cart/images/products/sketch-art.jpg",quantity:1},{description:"One of Those Talking Fish",price:"29.99",url:"shopping-cart/images/products/talking-fish.jpg",quantity:1},{description:"Van Goh Original",price:"50000.00",url:"shopping-cart/images/products/van-ghoh.jpg",quantity:1}],h=function(e){var t=b;return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"section-header",children:"Catalogue"}),Object(l.jsx)("div",{className:"catalogue-grid",children:t.map((function(e,t){return Object(l.jsx)(o.b,{to:"/catalogue/".concat(e.description),children:Object(l.jsx)(p,{description:e.description,price:e.price,url:e.url},t)})}))})]})},m=Object(d.f)((function(e){var t=Object(a.useState)("apples"),c=Object(s.a)(t,2),i=c[0],n=c[1],r=Object(a.useState)("0.00"),d=Object(s.a)(r,2),j=d[0],u=d[1],p=Object(a.useState)(0),h=Object(s.a)(p,2),m=h[0],g=h[1];Object(a.useEffect)((function(){x()}),[]);var O=function(){var e=JSON.parse(localStorage.getItem("hankShoppingCart")),t=0;e.find((function(e){e.description==b[m].description&&(e.quantity=e.quantity+1,t++)})),0==t&&e.push(b[m]),localStorage.setItem("hankShoppingCart",JSON.stringify(e))},x=function(){b.find((function(t,c){if(t.description==e.match.params.id){u(t.price);var a=t.url.substring(1);n(a),g(c)}}))};return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"homepage-grid",children:[Object(l.jsx)("div",{className:"focused-image-container",children:Object(l.jsx)("img",{src:i,className:"focused-image"})}),Object(l.jsxs)("div",{className:"focused-description-flex",children:[Object(l.jsx)("div",{className:"focused-description",children:e.match.params.id}),Object(l.jsxs)("div",{className:"focused-price",children:["USD: ",j]}),Object(l.jsx)("button",{className:"add-to-cart-button",onClick:function(){e.addToBag(),O()},children:"Add to Cart"}),Object(l.jsx)("br",{}),Object(l.jsx)(o.b,{to:"/catalogue",children:Object(l.jsx)("span",{className:"go-back",children:"Back to Browse"})})]})]})})})),g=function(e){var t=Object(a.useState)(1),c=Object(s.a)(t,2),i=c[0],n=c[1];Object(a.useEffect)((function(){console.log(e.quantity),n(e.quantity)}),[]);var r=function(t){var c=JSON.parse(localStorage.getItem("hankShoppingCart"));c.find((function(c){c.description==e.description&&(c.quantity+=t)})),localStorage.setItem("hankShoppingCart",JSON.stringify(c))};return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("div",{className:"card-image-container",children:Object(l.jsx)("img",{src:e.url,className:"card-image"})}),Object(l.jsx)("div",{className:"card-description",children:e.description}),Object(l.jsx)("div",{className:"card-description card-price",children:e.price}),Object(l.jsx)("div",{className:"card-description remove-item",onClick:function(){e.deleteItem(e.description,i,e.price)},children:"Remove Item"}),Object(l.jsxs)("div",{className:"quantity-container",children:[Object(l.jsx)("button",{className:"increment minus",onClick:function(){if(i>=1){r(-1),n((function(e){return e-1}));var t=-1*parseFloat(e.price);e.adjust(t),e.removeFromBag()}},children:Object(l.jsx)("span",{className:"dumb-span",children:"-"})}),Object(l.jsx)("span",{className:"displayed-quantity",children:i}),Object(l.jsx)("button",{className:"increment plus",onClick:function(){if(n((function(e){return e+1})),e.addToBag(),r(1),i>=0){var t=parseFloat(e.price);e.adjust(t)}},children:Object(l.jsx)("span",{className:"dumb-span",children:"+"})})]})]})})},O=function(e){var t=Object(a.useState)([]),c=Object(s.a)(t,2),i=c[0],n=c[1],r=Object(a.useState)(0),o=Object(s.a)(r,2),d=o[0],j=o[1];Object(a.useEffect)((function(){u()}),[]);var u=function(){var e=JSON.parse(localStorage.getItem("hankShoppingCart"));e.length>0?(n(e),p(e)):n(null)},p=function(e){var t=0;e.forEach((function(e){t+=Math.round(parseFloat(e.price)*e.quantity)})),j(t)};return null!==i?Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"section-header",children:"Cart"}),Object(l.jsx)("div",{className:"catalogue-grid",children:i.map((function(t,c){return Object(l.jsx)(g,{adjust:function(e){return t=e,console.log(t),void j((function(e){return Math.round(e+t)}));var t},description:t.description,price:t.price,url:t.url,addToBag:function(){return e.addToBag()},removeFromBag:function(){return e.removeFromBag()},deleteItem:function(t,c,a){return function(t,c,a){var i,r=JSON.parse(localStorage.getItem("hankShoppingCart"));r.find((function(e,c){t==e.description&&(i=c)})),r.splice(i,1),localStorage.setItem("hankShoppingCart",JSON.stringify(r));for(var s=0;s<c;s++)e.removeFromBag(),j((function(e){return Math.round(e-parseFloat(a))}));n(r)}(t,c,a)},quantity:t.quantity},c)}))}),Object(l.jsxs)("div",{className:"price-container",children:[Object(l.jsxs)("div",{className:"price-output",children:["Subtotal:  ",Object(l.jsxs)("em",{children:["USD ",d]})," "]}),Object(l.jsx)("button",{className:"checkout",children:"Checkout"})]})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"section-header",children:"Cart"}),Object(l.jsx)("div",{className:"empty-cart",children:" oops looks like its empty :("})]})},x=(c(31),function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),c=t[0],i=t[1];Object(a.useEffect)((function(){p()}),[]);var n=function(){i((function(e){return e+1}))},r=function(){i((function(e){return e-1}))},p=function(){var e=localStorage.getItem("hankShoppingCart");if(null==e){localStorage.setItem("hankShoppingCart",JSON.stringify([]))}else{e=JSON.parse(e);var t=0;e.forEach((function(e){return t+=e.quantity})),i(t)}};return Object(l.jsxs)(o.a,{children:[Object(l.jsx)(u,{bagCount:c}),Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{exact:!0,path:"/",component:j}),Object(l.jsx)(d.a,{exact:!0,path:"/catalogue",component:h}),Object(l.jsx)(d.a,{path:"/catalogue/:id",render:function(e){return Object(l.jsx)(m,{addToBag:n})}}),Object(l.jsx)(d.a,{path:"/cart",render:function(e){return Object(l.jsx)(O,{addToBag:n,removeFromBag:r})}})]})]})}),f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),i(e),n(e),r(e)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),f()}},[[32,1,2]]]);
//# sourceMappingURL=main.9dd0d33f.chunk.js.map
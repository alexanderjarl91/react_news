(this["webpackJsonpblog-project"]=this["webpackJsonpblog-project"]||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),s=n.n(c),l=n(1),i=n.n(l),o=n(5),u=n(2),p=(n(16),n(17),n(6)),m=n(7),h=n(9),d=n(8),f=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.articles;return r.a.createElement(r.a.Fragment,null,e.map((function(e){return r.a.createElement("div",{className:"post",key:e.title},r.a.createElement("h3",{className:"post__title"},e.title),r.a.createElement("img",{className:"post__image",src:e.urlToImage,alt:"article"}),r.a.createElement("div",{className:"post__info"},r.a.createElement("h5",null,e.author),r.a.createElement("h6",null,e.publishedAt)),r.a.createElement("h4",{className:"post__content"},e.description),r.a.createElement("button",{className:"post__button",onClick:function(){return window.location.href=e.url}},"Read more"))})))}}]),n}(r.a.Component);var b=function(e){e.setArticles;var t=e.articles,n=e.setFilteredArticles;return r.a.createElement("div",null,r.a.createElement("h1",null,"THE NEWS"),r.a.createElement("h4",null,"This aggressively ugly react web application fetches the biggest headlines in the US and renders them in html using JSX. Click the buttons to filter news."),r.a.createElement("button",{onClick:function(){n(t)},className:"filterBtn"},"All Headlines"),r.a.createElement("button",{onClick:function(){var e=t.filter((function(e){return"the-washington-post"===e.source.id}));n(e)},className:"filterBtn"},"The Washington Post"))};var E=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)([]),l=Object(u.a)(s,2),p=l[0],m=l[1];return Object(a.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://newsapi.org/v2/top-headlines?country=us&apiKey=3420d4ca8bde49b08e991ed7a552e100",e.next=3,fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=3420d4ca8bde49b08e991ed7a552e100");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n.articles),m(n.articles);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(b,{setFilteredArticles:m,articles:n}),r.a.createElement("div",{className:"posts"},r.a.createElement(f,{articles:p})))},v=document.getElementById("root");s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),v)}},[[10,1,2]]]);
//# sourceMappingURL=main.3c8f6295.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,c){e.exports=c.p+"static/media/angryface.856c72c5.png"},function(e,t,c){e.exports=c.p+"static/media/annoyedface.3a21bbc1.png"},function(e,t,c){e.exports=c.p+"static/media/laughingface.0a90de23.png"},function(e,t,c){e.exports=c.p+"static/media/lovelyface.293b84f3.png"},function(e,t,c){e.exports=c.p+"static/media/moneyface.29f134fb.png"},function(e,t,c){e.exports=c.p+"static/media/nerdface.9721692e.png"},function(e,t,c){e.exports=c.p+"static/media/partyface.65af793d.png"},function(e,t,c){e.exports=c.p+"static/media/sillyface.2a7c3946.png"},,,,function(e,t,c){e.exports=c(27)},,,,,,function(e,t,c){},,function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(2),i=c.n(r),o=(c(23),c(14)),s=c(3),l=c(4),u=c(15),d=c(5),m=c(16);c(25);function p(e){return a.a.createElement("header",{className:"inner-container"},a.a.createElement("div",null,"Clicky Emoji Game"),a.a.createElement("div",null,e.message),a.a.createElement("div",null,"Current Score: ",e.currentScore),a.a.createElement("div",null,"Top Score: ",e.topScore))}function f(e){return a.a.createElement("div",{className:"game-space"},a.a.createElement("div",{className:"image"},a.a.createElement("img",{src:e.src,alt:"emoji",onClick:function(){return e.handleTileClick(e.id)}})))}var h=c(6),g=c.n(h),v=c(7),k=c.n(v),S=c(8),y=c.n(S),E=c(9),b=c.n(E),w=c(10),j=c.n(w),x=c(11),C=c.n(x),O=c(12),T=c.n(O),N=c(13),B=c.n(N),I=[{id:0,src:g.a},{id:1,src:k.a},{id:2,src:y.a},{id:3,src:b.a},{id:4,src:j.a},{id:5,src:C.a},{id:6,src:T.a},{id:7,src:B.a}],J=function(e){function t(){var e,c;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(c=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={currentScore:0,topScore:0,message:"Try not to double click the Emoji!",clicked:[],tiles:I},c.handleTileCick=function(e){if(console.log("I've been clicked ".concat(e)),c.state.clicked.includes(e))alert("Sorry! You lose!"),c.state.currentScore>c.state.topScore?c.setState({clicked:[],currentScore:0,topScore:c.state.currentScore}):c.setState({clicked:[],currentScore:0});else{var t=c.shuffle(c.state.tiles);c.setState({clicked:[].concat(Object(o.a)(c.state.clicked),[e]),currentScore:c.state.currentScore+1,tiles:t},function(){console.log(this.state.clicked)})}},c}return Object(m.a)(t,e),Object(l.a)(t,[{key:"shuffle",value:function(e){for(var t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*(t+1)),n=[e[c],e[t]];e[t]=n[0],e[c]=n[1]}return e}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"container"},a.a.createElement(p,{currentScore:this.state.currentScore,topScore:this.state.topScore,message:this.state.message}),a.a.createElement("div",{className:"game-space"},this.state.tiles.map(function(t,c){return a.a.createElement(f,{src:t.src,key:c,id:t.id,handleTileClick:e.handleTileCick})})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[17,2,1]]]);
//# sourceMappingURL=main.f3d87818.chunk.js.map
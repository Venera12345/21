var t,a,o,n,e,r,s,i,c,l,u,m,d,p,w,f,g,y,h,S,b,q,v,D,C,L,E,k,A;function x(e){e.classList.add("show")}function G(e){e.classList.remove("show")}function T(e){var t=b.cloneNode(!0);t.classList.add(e.animation),q.appendChild(t),t.style.left=e.left+"%",t.style.bottom=e.bottom+"%";var a=e.place.querySelector(".item-player-card");a?a.parentNode.removeChild(a):t.style.transform="translateX("+e.transform+"%)",e.place.appendChild(q)}function M(t,a,o,n){var e=a[n].place.querySelectorAll(".item-card");return[].forEach.call(e,function(e){return window.card.openCard(e,o[t],a[n]),++t}),0<a[n].transform?a[n].transform+=25:a[n].transform-=25,setTimeout(function(){v(a,o,t,n)},1e3),t}function j(t,a,o,n){setTimeout(function(){window.deal.dealCard(t[n]);var e=t[n].place.querySelectorAll(".item-card");return setTimeout(function(){return window.card.openCard(e[e.length-1],a[o],t[n]),o++},500),0<t[n].transform?t[n].transform+=25:t[n].transform-=25,setTimeout(function(){v(t,a,o,n)},1500),o},1e3)}function F(e){setTimeout(function(){e.classList.add("show")},1e3)}t=document.querySelector(".btn-distribution"),a=document.querySelector(".btn-still"),o=document.querySelector(".btn-stop"),n=document.querySelectorAll(".item-player"),e=document.querySelectorAll(".again"),r=0,t.addEventListener("click",function(){console.log(r),amountGamer=window.popup.amountGamer,window.deal.dealCard(window.gamerData.user),setTimeout(function(){window.deal.dealCard(window.gamerData.user),window.gamerData.user.currentTransform+=40},700),setTimeout(function(){var e=window.gamerData.user.place.querySelectorAll(".item-card");[].forEach.call(e,function(e){return window.card.openCard(e,window.popup.rundom[r],window.gamerData.user),r++,t.disabled="disabled",r})},2200),2<amountGamer?(window.gamerData.gamers[0].bottom=60,window.gamerData.gamers[1].bottom=60):(window.gamerData.gamers[0].bottom=0,window.gamerData.gamers[1].bottom=0);for(var e=0;e<amountGamer;e++)window.deal.dealCardForGamer(window.gamerData.gamers[e])}),a.addEventListener("click",function(){window.gamerData.user.transform+=40,window.deal.dealCard(window.gamerData.user),setTimeout(function(){var e=window.gamerData.user.place.querySelectorAll(".item-card");return window.card.openCard(e[e.length-1],window.popup.rundom[r],window.gamerData.user),++r},1e3),window.total.congratulateUser(window.gamerData.user)}),o.addEventListener("click",function(){console.log(r),a.disabled="disabled",o.disabled="disabled",window.dealGamer.openCardGemer(r,window.gamerData.gamers,window.popup.rundom,0)}),[].forEach.call(e,function(e){e.addEventListener("click",function(){return e.parentElement.classList.remove("show"),r=0,window.popup.popupAmount.classList.add("show"),window.gamerData.user.transform=40,window.gamerData.user.sum=0,window.gamerData.gamers.forEach(function(e,t){e.sum=0,e.transform=0===t||2===t?25:-25}),t.removeAttribute("disabled"),a.removeAttribute("disabled"),o.removeAttribute("disabled"),document.querySelector(".user-points-block .user-points").textContent="0",[].forEach.call(n,function(e){window.cleanDesk(e)}),r})}),c=document.querySelector(".wellcom"),l=document.querySelector(".name-main-user"),u=document.querySelector(".amount-users"),m=document.querySelector(".begin"),d=document.querySelector(".name-btn"),p=document.querySelector(".input-btn"),w=document.querySelector(".text-name-js"),f=document.querySelector(".gamers-btn"),g=document.querySelector(".amount"),y=document.querySelectorAll(".item-player"),h=document.querySelector(".user-name"),S=document.querySelector(".user .list-player-cards"),x(c),m.addEventListener("click",function(){G(c),x(l)}),d.addEventListener("click",function(){w.textContent=p.value,h.textContent=p.value,G(l),x(u)}),f.addEventListener("click",function(){s=g.value,[].forEach.call(y,function(e,t){return t+1<=s&&(e.classList.remove("hidden"),S.style.height=2<s?"217px":"320px"),G(u),i=window.shuffle([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,0])}),window.popup={amountGamer:s,rundom:i,popupAmount:u}}),b=document.querySelector("#card").content.querySelector(".item-card"),q=document.createDocumentFragment(),window.deal={dealCard:T,dealCardForGamer:function(e){setTimeout(function(){T(e),setTimeout(function(){T(e)},500)},e.time)}},window.cardsData=[{class:"six-b",point:6},{class:"seven-b",point:7},{class:"eight-b",point:8},{class:"nine-b",point:9},{class:"ten-b",point:10},{class:"jb",point:2},{class:"lb",point:3},{class:"kb",point:4},{class:"ab",point:11},{class:"six-t",point:6},{class:"seven-t",point:7},{class:"eight-t",point:8},{class:"nine-t",point:9},{class:"ten-t",point:10},{class:"jt",point:2},{class:"lt",point:3},{class:"kt",point:4},{class:"at",point:11},{class:"six-p",point:6},{class:"seven-p",point:7},{class:"eight-p",point:8},{class:"nine-p",point:9},{class:"ten-p",point:10},{class:"jp",point:2},{class:"lp",point:3},{class:"kp",point:4},{class:"ap",point:11},{class:"six-h",point:6},{class:"seven-h",point:7},{class:"eight-h",point:8},{class:"nine-h",point:9},{class:"ten-h",point:10},{class:"jh",point:2},{class:"lh",point:3},{class:"kh",point:4},{class:"ah",point:11}],window.shuffle=function(e){for(var t,a,o=e.length;0!==o;)a=Math.floor(Math.random()*o),t=e[o-=1],e[o]=e[a],e[a]=t;return e},v=function(e,t,a,o){var n,r,s=(n=0,r=100,n=Math.ceil(n),r=Math.floor(r),Math.floor(Math.random()*(r-n+1))+n),i=window.popup.amountGamer;e[o].sum<=10?j(e,t,a,o):10<e[o].sum&&e[o].sum<=14&&s<=98?j(e,t,a,o):14<e[o].sum&&e[o].sum<=17&&s<=78?j(e,t,a,o):17<e[o].sum&&e[o].sum<=19&&s<=30?j(e,t,a):19<e[o].sum&&s<=3?j(e,t,a,o):21===e[o].sum?o!==i-1?D(e,a,t,i,o+1):(console.log("результат"),window.total.compareSum()):21<e[o].sum?o!==i-1?D(e,a,t,i,o+1):(console.log("результат"),window.total.compareSum()):o!==i-1?D(e,a,t,i,o+1):(window.total.compareSum(),console.log("результат"))},D=function(e,t,a,o,n){1<o&&M(t+=1,e,a,n)},window.dealGamer={openCardGemer:M,setOfPoints:j,checkPoint:v},window.card={openCard:function(e,t,a){var o=window.cardsData[t];e.classList.add("rotate"),setTimeout(function(){e.classList.add(o.class),function(e,t){t.sum+=e,t.sum}(o.point,a),a.span.textContent=a.sum,window.total.congratulateUser(window.gamerData.user)},500)}},C={place:document.querySelector(".list-player-cards.main-user"),animation:"animation",left:30,bottom:0,span:document.querySelector(".user-points"),sum:0,transform:40},L=[{place:document.querySelector(".list-player-cards.gamer.first"),animation:"animation-l-t",left:0,bottom:0,span:document.querySelector(".player-points.first"),sum:0,transform:25,time:3e3},{place:document.querySelector(".list-player-cards.gamer.second"),animation:"animation-r-t",left:88,bottom:0,span:document.querySelector(".player-points.second"),sum:0,transform:-25,time:4e3},{place:document.querySelector(".list-player-cards.gamer.third"),animation:"animation-l-b",left:0,bottom:0,span:document.querySelector(".player-points.third"),sum:0,transform:25,time:5e3},{place:document.querySelector(".list-player-cards.gamer.fourth"),animation:"animation-r-b",left:88,bottom:0,span:document.querySelector(".player-points.fourth"),sum:0,transform:-25,time:6e3}],window.gamerData={user:C,gamers:L},E=document.querySelector(".cogratulation"),k=document.querySelector(".game-over"),A=document.querySelector(".game-dead-heat"),window.total={compareSum:function(){if(21<window.gamerData.user.sum)F(k);else{var e=window.gamerData.gamers.filter(function(e){return e.sum>window.gamerData.user.sum&&e.sum<=21}),t=window.gamerData.gamers.filter(function(e){return e.sum===window.gamerData.user.sum});0<e.length?F(k):0<t.length?F(A):F(E)}},congratulateUser:function(e){21===e.sum&&F(E)}},window.cleanDesk=function(e){var t=e.querySelectorAll(".item-card"),a=e.querySelector(".list-player-cards");if([].forEach.call(t,function(e){e.parentNode.removeChild(e)}),!e.querySelector(".item-player-card")){var o=document.createElement("li");o.classList.add("item-player-card"),a.appendChild(o)}e.querySelector(".player-points")&&(e.querySelector(".player-points").textContent="0",e.classList.add("hidden"))};
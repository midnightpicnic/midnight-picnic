function adjustColumnPositions(){let t={initialMargin:0,maxShift:128},e=[{...t,scalingFactor:.2},{...t,scalingFactor:.3},{...t,scalingFactor:.2}],i=document.querySelector(".picnicbasket-columns"),n=i.querySelectorAll(".wp-block-column"),s=window.scrollY;window.innerWidth>=782?n.forEach((t,i)=>{let{initialMargin:n,maxShift:o,scalingFactor:a}=e[i],r=n-s*a;void 0!==o&&(r=Math.max(n-o,Math.min(n+o,r))),r=Math.max(-128,Math.min(128,r)),t.style.marginTop=`${r}px`}):n.forEach(t=>{t.style.marginTop="0"})}document.addEventListener("DOMContentLoaded",function(){let t=0,e=["stamp01.svg","stamp02.svg","stamp03.svg","stamp04.svg","stamp05.svg","stamp06.svg","stamp07.svg","stamp08.svg","stamp09.svg","stamp10.svg"],i=document.querySelector("div.picnicbasket-stamps"),n=function(n,s){let o=document.createElement("img");o.setAttribute("src","./wp-content/uploads/"+e[t]),o.classList.add("stamp"),o.onload=function(){n<window.innerWidth/2?o.style.left=n-i.offsetLeft+o.width/2+"px":o.style.left=n-i.offsetLeft-o.width/2+"px",s>i.offsetTop&&s<i.offsetTop+11.5?o.style.top=s-i.offsetTop+o.height/2+"px":s>i.offsetTop+i.clientHeight-11.5?o.style.top=s-i.offsetTop-o.height/2+"px":o.style.top=s-i.offsetTop+"px",i.appendChild(o),t=(t+1)%e.length,setTimeout(function(){o.remove()},8e3)},o.onerror=function(){console.error("Error loading image: "+o.src)}};document.addEventListener("click",function(t){let e=t.pageX||t.touches[0].pageX,s=t.pageY||t.touches[0].pageY;t.target.closest("div.picnicbasket-stamps")===i&&n(e,s)})}),window.addEventListener("DOMContentLoaded",adjustColumnPositions),window.addEventListener("scroll",adjustColumnPositions),window.addEventListener("resize",adjustColumnPositions),document.addEventListener("DOMContentLoaded",function(){var t=document.getElementById("email");function e(){var e="";window.innerWidth>=505?e="midnightpicnicstudio&#64;gmail&#46;com":window.innerWidth>=305&&window.innerWidth<=504?e="midnightpicnicstudio<br>&#64;gmail&#46;com":window.innerWidth<=304&&(e="midnight<br>picnic<br>studio<br>&#64;gmail&#46;com"),t.innerHTML=e}e(),window.addEventListener("resize",e)});
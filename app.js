document.getElementById("year").textContent=new Date().getFullYear();

const menuBtn=document.getElementById("menuBtn"), menu=document.getElementById("menu");
menuBtn.addEventListener("click",()=>menu.classList.toggle("open"));
menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("open")));

document.getElementById("mode").addEventListener("click",()=>document.body.classList.toggle("warm"));

document.querySelectorAll("a[href^='#']").forEach(a=>{
  a.addEventListener("click",()=>{
    const el=document.querySelector(a.getAttribute("href"));
    if(el){el.animate([{transform:"translateY(0)"},{transform:"translateY(-3px)"},{transform:"translateY(0)"}],{duration:450});}
  });
});

document.getElementById("form").addEventListener("submit",async e=>{
  e.preventDefault();
  const out=document.getElementById("status");
  out.textContent="Enviando...";
  try{
    const r=await fetch("/api/contacto",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(e.target)))});
    const d=await r.json(); out.textContent=d.message; if(d.ok)e.target.reset();
  }catch(err){out.textContent="No se pudo enviar. Comprueba que el servidor esté activo."}
});

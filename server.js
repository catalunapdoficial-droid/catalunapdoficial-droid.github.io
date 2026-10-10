const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/contacto", (req,res)=>{
  const {nombre,email,telefono,empresa,mensaje}=req.body;
  if(!nombre || !email || !mensaje) return res.status(400).json({ok:false,message:"Completa los campos obligatorios."});
  console.log("\n[NUEVA SOLICITUD]", new Date().toISOString(), {nombre,email,telefono,empresa,mensaje});
  res.json({ok:true,message:"Solicitud enviada correctamente. Te contactaremos lo antes posible."});
});

app.get("*",(req,res)=>res.sendFile(path.join(__dirname,"public","index.html")));
app.listen(PORT,()=>console.log(`Rommat Try Out V3: http://localhost:${PORT}`));

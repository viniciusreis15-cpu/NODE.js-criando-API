import express from "express";
// variavel para acessar os metodos express
const app = express();
//ativa o leitor json
app.use(express.json())

let usuarios = [];
// rota saidas de dados
app.get('/usuario',(req, res)=>{
  res.send("/Informação Enviada")
})

app.post()'/usuarios',(req, res)={
  console.log(req.body);
  usuario.push(req.body);
  res.status(201).jason({mensagem:"Cliente Cadastrado!"})
})

app.listen(3000,()=>){
  console.log("Servidor Rodando!")
})
//http://localhost:3000

//configurando o servidor
const express = require("express")
const server = express()

//congurando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server
})

//configurar servidor para aprsentar arquivos estaticos
server.use(express.static('public'))

//configurando a apresentacao da pagina
server.get("/", function(req, res){
    return res.render("index.html")
})

//liga os ervidor e permite o acesso na porta 3000
server.listen(3000, function(){
    console.log("SERVIDOR Funcionando")
})
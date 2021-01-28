const express = require('express')
const app = express()
const cors = ('cors')
const bodyParser = require('body-parser')
const buscaCep = require('./src/functions/buscaCep')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//declarando que vou usar o ejs
app.set('view engine','ejs')
//Mostarndo para o express onde ta minha pasta views
app.set('views','./src/views')


//renderizando minha pagina principal
app.get('/',(req, res) =>{
//chamando o arquivo da minha view
    res.render('index')
})

//pegando os dados da minha view
app.post('/envia-cep',async(req, res)=> {
    const {cep} = req.body
    const resultado = await buscaCep(cep)

    res.render('resultado', {dado: resultado})
})

//rotaFormulario (2)
app.get('/cad-pagamento',function(req, res){
    res.render('cad-pagamento')
})

app.post('/add-pagamento',function(req, res){
    res.send("Produto: " + req.body.produto +
     "<br>Valor: " + req.body.valor + 
     "<br>Numero: " + req.body.numero + 
     "<br>Nome: " + req.body.nome +
    "<br>Parcelado: " + req.body.parcelado)
})

app.listen(3333)

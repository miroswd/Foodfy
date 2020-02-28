const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const data = require('./data')

server.use(express.static('./public'))

server.set('view engine', 'njk')

nunjucks.configure('views',{
  express:server
})

server.get('/', function(req,res){
  return res.render('home',{recipes:data})
})

server.get('/about', function(req,res){
  return res.render('about')
})

server.get('/recipes', function(req,res){
  return res.render('recipes',{recipes:data})
})

// --- PARAM --- //
server.get('/recipes/:id',function(req,res){
  const id = req.params.id
  
  // // Encontrar no array, a receita
  // const recipe = data.find(function(recipe){
  //    if (recipe.id == id){
  //      return true
  //    }
  // })
  const recipe = data[id]
    if (!recipe){
      return res.status(404).render('not-found')
    }
  return res.render('description',{recipe})
})

server.use(function(req,res){
  return res.status(404).render('not-found')
})


server.listen(3333,function(){
  console.log('Servidor rodando')
})
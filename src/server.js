const express = require('express')
const {resolve} = require('path')
const { promisify } = require('util')
const initMiddlewares = require('./middlewares')
const initControllers = require('./controllers')
const server = express()
const port = parseInt(process.env.PROT || '9000')
const publicDir = resolve('public')
const mouldsDir = resolve('src/moulds')
async function bootstrap(){
    server.use(await initMiddlewares())
    server.use(express.static(publicDir))
    server.use('/moulds',express.static(mouldsDir))
    
    server.use(await initControllers())
    server.use(errorHandle)
    await promisify(server.listen.bind(server,port))()
    console.log(` Started on port ${port}`)
}
process.on('uncaughtException',(err)=>{
    console.log(err)
    process.exit(1)
})
function errorHandle(err,req,res,next){
    if(res.headersSent){
        return next(err)
    }
    console.log(err)
    res.redirect('/500.html')
}
bootstrap()
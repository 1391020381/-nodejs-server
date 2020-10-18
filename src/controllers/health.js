const { Router } = require('express')
const { async } = require('regenerator-runtime')

class HealthController {
    async init (){
        const router = Router()
        router.get('/',this.get)
        return router
    }
    get = (req,res)=>{
        res.send({})
    }
}
module.exports = async ()=>{
    const c = new HealthController()
    return await c.init()
}
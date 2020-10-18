const { normalize } = require('path')
const { parse,format} = require('url')
module.exports = function urlnormalizeMiddleware(){
    return (req,res,next)=>{
        const pathnanme = normalize(req.path).split('\\').join('/')
        const urlParsed = parse(req.url)
        let shouldRedirect = false
        if(req.path!=pathnanme){
            urlParsed.pathname = pathnanme
            shouldRedirect = true
        }
        if(shouldRedirect){
            res.redirect(format(urlParsed))
        }else{
            next()
        }
    }
}
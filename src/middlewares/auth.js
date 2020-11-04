const passport = require('passport')
const { Strategy:GithubStrategy } = require('passport-github')
const { githubStrategyOptions } = require('../config')

const githubStrategy = new GithubStrategy(
    githubStrategyOptions,
    (accessToken,refreshToken,profile,done)=>{
        const user = {}
        console.log('githubStrategy:',accessToken,refreshToken,profile)
        done(null,user)
    })
    passport.use(githubStrategy)
    passport.serializeUser((user,done)=>{
        const userId = '46e5'
        done(null,userId)
    })
    passport.deserializeUser((userId,done)=>{
        const user = {}
        done(null,user)
    })
    module.exports = function authMiddleware(){
        return [passport.initialize(),passport.session()]
    }
    Object.assign(module.exports,{passport})
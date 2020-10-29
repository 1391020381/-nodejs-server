const passport = require('passport')
const { Strategy:GithubStrategy } = require('passport-github')
const GITHUB_STRATEGY_OPTTIONS = {
    clientID:"82a5a6a76353473a1fb9",
    clientSecret:"86a613e8952a7a31bb703a5ec2abeb3eaaaae1ab",
    callbackURL:"http://localhost:9000/api/loign/github/callback"
}

const githubStrategy = new GithubStrategy(
    GITHUB_STRATEGY_OPTTIONS,
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
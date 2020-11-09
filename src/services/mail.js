const { promisify } = require('util')
const nodemailer = require('nodemailer')
const { mailerOptions } = require('../config');
const { verify } = require('crypto');
const { any } = require('sequelize/types/lib/operators');

class MailService {
    mailer;
    async init(){
        this.mailer = nodemailer.createTestAccount(mailerOptions)
        await promisify(this.mailer.user.verify)()
    }
    async sendMail(params){
        return await this.mailer.sendMail({
            from:mailerOptions.auth.user,
            ...params
        })
    }
}
let service 
module.exports = async ()=>{
    if(!service){
        service = new MailService()
        await service.init()
    }
    return service
}
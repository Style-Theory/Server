const {User} = require('../models');
const Helper = require('../helpers/index')

class UserController {
    static register(req,res) {
        let {email,password,name} = req.body
        password = Helper.encrypt(password)
        User.create({
            email,
            password,
            name
        })
        .then((result) => {
            let {id,email} = result.dataValues
            let token = Helper.getToken({id,email})
            req.headers.token = token
            res.status(200).json({id,email,token})
        }).catch((err) => {
            res.status(500).json(err)
        });
    }

    static login(req,res) {
        let {email,password} = req.body
        User.findOne({
            where:{
                email
            }
        })
        .then((result) => {
            if(result) {
                let passwordDb = result.dataValues.password
                let compared = Helper.decrypt(password,passwordDb)
                if(compared){
                    let {id} = result.dataValues
                    let token = Helper.getToken({id,email})
                    res.status(200).json({token})  
                }else{
                    res.status(400).json({status:400,message:'Email / password wrong'})
                }
            }else{
                res.status(400).json({status:400,message:'Email / password wrong'})
            }
        }).catch((err) => {
            res.status(400).json(err)
        });
    }

    // static loginGoogle(req,res) {

    // }
}

module.exports = UserController
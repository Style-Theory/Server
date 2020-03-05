const {User} = require('../models');
const Helper = require('../helpers/index')
const {OAuth2Client} = require('google-auth-library');

class UserController {
    static register(req,res) {
        let {email,password,name} = req.body
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
                    req.headers.token = token
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

    static loginGoogle(req,res) {
        let {id_token} = req.body
        let email = null
        let password = 'defaultGoogleLogin'
        let name = null

        const client = new OAuth2Client(process.env.client_id);
        async function verify() {
            const ticket = await client.verifyIdToken({
                idToken: id_token,
                audience: process.env.client_id
            });
            const payload = ticket.getPayload();
            const userid = payload['sub'];
            // If request specified a G Suite domain:
            //const domain = payload['hd'];
            email = payload.email
            name = payload.name
        }
        verify().catch(console.error);

        User.findOne({
            where:{
                email
            }
        })
        .then((result) => {
            if(result) {
                let {id} = result.dataValues
                let token = Helper.getToken({id,email})
                req.headers.token = token
                res.status(200).json({token})
            }else{
                return User.create({
                    email,
                    password,
                    name
                })
            }
        })
        .then((result) => {
            if(result) {
                let {id} = result.dataValues
                let token = Helper.getToken({id,email})
                req.headers.token = token
                res.status(200).json({token})
            }
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    }

    // static checkToken(req,res) {
    //     const jwt = require('jsonwebtoken')
    //     let decode = jwt.verify(req.headers.token,process.env.SECRET)
    //     console.log(decode)
    //     res.status(200).json(decode)
    // }
}

module.exports = UserController
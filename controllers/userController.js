const {User} = require('../models');
const Helper = require('../helpers/index')
const {OAuth2Client} = require('google-auth-library');
const axios = require('axios')

class UserController {
    static register(req,res) {
        let {email,password,name} = req.body
        User.create({
            email,
            password,
            name
        })
        .then((result) => {
            let {id} = result.dataValues
            let token = Helper.getToken({id,email})
            req.headers.token = token
            const restdb = axios.create({
                baseURL: 'https://fashiontheory-cca0.restdb.io',
                headers: {
                    'Host': 'fashiontheory-cca0.restdb.io',
                    'Content-Type': ' application/json',
                    'x-apikey': '7c4b6d3d38f23e47f190f98f11825aa5552c7',
                    'Cache-Control': 'no-cache'
                }
            })
            restdb({
                method:'POST',
                url:'/mail',
                data : {
                    to: email,
                    subject: 'Welcome to Style Theory',
                    html: 'WELCOME RENTING READY!!',
                    company: 'STYLE THEORY INC',
                    sendername: 'Style Theory Bro!'
                }
            })
            res.status(200).json({id,email,name,token})
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
                    let {id,name} = result.dataValues
                    let token = Helper.getToken({id,email})
                    req.headers.token = token
                    res.status(200).json({id,email,name,token})  
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
            email = payload.email
            name = payload.name

            User.findOne({
                where:{
                    email
                }
            })
            .then((result) => {
                if(result) {
                    let {id,name} = result.dataValues
                    let token = Helper.getToken({id,email})
                    req.headers.token = token
                    res.status(200).json({id,email,name,token})
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
                    let {id,name} = result.dataValues
                    let token = Helper.getToken({id,email})
                    req.headers.token = token
                    res.status(200).json({id,email,name,token})
                }
            })
            .catch((err) => {
                res.status(400).json(err)
                console.log(err)
            });
        }
        verify().catch(console.error);
    }
}

module.exports = UserController
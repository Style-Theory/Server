const jwt = require('jsonwebtoken')
const {User} = require('../models')

module.exports = {
    authentication: function(req,res,next) {
        let {token} = req.headers
        let decoded = null

        try{
            decoded = jwt.verify(token,process.env.SECRET)
            User.findOne({
                where:{
                    id:decoded.id,
                    email:decoded.email
                }
            })
            .then((result) => {
                req.headers.UserId = decoded.id
                next()
            }).catch((err) => {
                const error = {
                    status: 401,
                    message:'Forbidden Access'
                }
                throw error
            });
        }
        catch(err) {
            res.status(401).json({message:'forbidden access'})
        }
    }
}
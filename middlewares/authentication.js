const jwt = require('jsonwebtoken')
const {User} = require('../models')

module.exports = {
    authentication: function(req,res,next) {
        let {token} = req.headers
        if (token) {
            try{
                const decoded = jwt.verify(token,process.env.SECRET)
                User.findOne({
                    where:{
                        id:decoded.id,
                        email:decoded.email
                    }
                })
                .then((result) => {
                    req.UserId = decoded.id
                    next()
                }).catch((err) => {
                    const error = {
                        status: 401,
                        message:'Forbidden Access'
                    }
                    next(error)
                });
            }
            catch(err) {
                next({message:'forbidden access'})
            }
        } else {
            next()
        }
        }
}
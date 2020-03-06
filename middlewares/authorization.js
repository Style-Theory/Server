const {Dress} = require('../models')

function authorize(req, res, next){
    Dress.findOne({where: {id : req.params.id}})
        .then(data=> {
            if(data){
                if (data.UserId == req.UserId) {
                    next()
                } else {
                    res.status(401).json('Not Authorized')
                }
            } else {
                res.status(401).json('Not Authorized')
            }
        })
        .catch(err=> next(''))
}

module.exports = authorize
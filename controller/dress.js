const { Dress } = require('../models')
const {Op} = require('sequelize')

class DressController {
    static findAll(req, res, next) {
        Dress.findAll({
            where : {
                UserId : {[Op.notLike] : req.headers.UserId}
            },
            order : [['id', 'ASC']]
        })
            .then(data=> res.status(200).json({data}))
            .catch(err=> next({
                name : `Couldn't Find Any Data`
            }))
    }
    static findMyStuff(req, res, next) {
        Dress.findAll({
            where : {
                UserId : {[Op.like] : req.headers.UserId}
            },
            order : [['id', 'ASC']]
        })
            .then(data=> res.status(200).json({data}))
            .catch(err=> next({
                name : `Couldn't Find Any Data`
            }))
    }
    static findMyRent(req, res, next) {
        Dress.findAll({
            where : {
                rent_id : {[like] : req.headers.UserId}
            },
            order : [['id', 'ASC']]
        })
            .then(data=> res.status(200).json({data}))
            .catch(err=> next({
                name : `Couldn't Find Any Data`
            }))
    }
    static create(req, res, next){
        Dress.create({
            name : req.body.name,
            price : req.body.price,
            due_date : req.body.due_date,
            UserId : req.headers.UserId
        })
        .then(data=> res.status(201).json({data}))
        .catch(err=> {
            next(err)
        })
    }
    static findOne(req, res, next){
        Dress.findOne({
            where: {id:req.params.id}
        })
            .then(data=> {
                if(data) {
                    res.status(200).json({data})
                } else {
                    next({
                        name: 'empty'
                    })
                }
                })
            .catch(err=> next(err))
    }
    static update(req, res, next){
        Dress.findOne({
            where: {id:req.params.id}
        })
            .then(data => {
                if (data == null) {
                    throw ({name : 'empty'})
                }
                else return Dress.update({
                    status : req.params.status,
                    due_date: req.body.due_date.toDateString()
                },{
                    where : {id:req.params.id}
                })
            })
            .then(data=> {
                res.status(200).json({data})
            })
            .catch(err=> {
                next(err)
            })
    }
    static destroy(req, res, next){
        console.log('ada disini')
        Dress.destroy({
            where: {id:req.params.id}
        })
            .then(data => {
                if (data == 0) {
                    next({
                        name: 'empty'
                    })
                }
                else res.status(200).json({message:`Success Delete Data Id = ${req.params.id}`})
            })
            .catch(err=> next(err))
    }
}

module.exports = DressController
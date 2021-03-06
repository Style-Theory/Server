const { Dress } = require('../models')
const {Op} = require('sequelize')

class DressController {
    static findAll(req, res, next) {
        Dress.findAll({
            where : {
                UserId : {[Op.not]: req.UserId},
                status: false
            },
            order : [['id', 'ASC']]
        })
            .then(data=> res.status(200).json({data}))
            .catch(err=> {
                console.log('asd')
                next({
                message : `Couldn't Find Any Data`
            })
        })
    }
    static findMyStuff(req, res, next) {

        Dress.findAll({
            where : {
                UserId : req.UserId
            },
            order : [['id', 'ASC']]
        })
            .then(data=> res.status(200).json({data}))
            .catch(err=> next({
                message : `Couldn't Find Any Data`
            }))
    }
    static findMyRent(req, res, next) {
        Dress.findAll({
            where : {
                rent_id : req.UserId
            },
            order : [['id', 'ASC']]
        })
            .then(data=> res.status(200).json({data}))
            .catch(err=> next({
                message : `Couldn't Find Any Data`
            }))
    }
    static create(req, res, next){
        Dress.create({
            name : req.body.name,
            price : req.body.price,
            UserId : req.UserId,
            status : false,
            photos : req.body.photos
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
                        message: 'empty'
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
                    throw ({message : 'empty'})
                }
                else return Dress.update({
                    name : req.body.name,
                    price : req.body.price,
                    photos : req.body.photos
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
    static rent(req, res, next){
        console.log('haha')
        Dress.findOne({
            where: {id:req.params.id}
        })
            .then(data => {
                if (data == null) {
                    throw ({message : 'empty'})
                }
                else return Dress.update({
                    status : true,
                    due_date: req.body.due_date,
                    rent_id: req.UserId
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
        console.log('wkwk')
        Dress.destroy({
            where: {id:req.params.id}
        })
            .then(data => {
                if (data == 0) {
                    next({
                        message: 'empty'
                    })
                }
                else res.status(200).json({message:`Success Delete Data Id = ${req.params.id}`})
            })
            .catch(err=> next(err))
    }
}

module.exports = DressController
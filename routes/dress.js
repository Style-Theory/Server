const router = require('express').Router();
const Dress = require('../controller/dress')

router.get('/', Dress.findAll)
router.post('/', Dress.create)
router.patch('/:id', Dress.update)
router.delete('/:id', Dress.destroy)

module.exports = router
const router = require('express').Router();
const Dress = require('../controller/dress')
const {authentication, authorize} = require('../middlewares')


router.use(authentication);
router.get('/', Dress.findAll)
router.post('/', Dress.create)
router.put('/:id', authorize, Dress.update)
router.patch('/:id', Dress.rent)
router.delete('/:id', authorize, Dress.destroy)

module.exports = router
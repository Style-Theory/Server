const router = require('express').Router();
const Dress = require('../controllers/dress')
const authentication = require('../middlewares/authentication').authentication
const authorize = require('../middlewares/authorization')

router.use(authentication);
router.get('/', Dress.findAll)
router.get('/mystuff', Dress.findMyStuff)
router.get('/myorder', Dress.findMyRent)
router.post('/', Dress.create)
router.put('/:id', authorize, Dress.update)
router.get('/:id', Dress.findOne)
router.put('/rent/:id', Dress.rent)
router.delete('/:id', authorize, Dress.destroy)

module.exports = router
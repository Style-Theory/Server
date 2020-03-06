module.exports = (err, req, res, next) => {
    console.log(err)
    if(err.name === 'SequelizeValidationError') {
        let error = err.errors.map(el => el.message)
        res.status(400).json(error)
    } else if (err.message == 'empty'){
        res.status(404).json("Data Not Found")
    } else if (err.message) {
        res.status(400).json(err.message)
    } else {
        res.status(500).json("Internal Database Error")
    }
}
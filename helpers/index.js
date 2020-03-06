const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class Helper{
    static encrypt(password) {
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(password,salt)
        return hash
    }

    static decrypt(password,passwordDb) {
        return bcrypt.compareSync(password,passwordDb)
    }

    static getToken(payload) {
        // payload id email
        let token = jwt.sign(payload,process.env.SECRET,{
            expiresIn:'300000' // token akan expired dalam 5 mnt
        })
        return token
    }
}

module.exports = Helper
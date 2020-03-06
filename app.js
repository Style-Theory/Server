if(process.env.NODE_ENV==='development'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const PORT = process.env.PORT
const cors = require('cors')
const dress = require('./routes/dress')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(dress);

app.listen(PORT,() => {
    console.log('Server OK!' + PORT)
})
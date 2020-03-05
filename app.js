const express = require('express')
const app = express()
const PORT = process.env.PORT
const cors = require('cors')

app.use(cors)
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.listen(PORT,() => {
    console.log('Servefr OK!' + PORT)
})
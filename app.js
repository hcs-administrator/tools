require('dotenv').config()
const express = require('express')
const axios = require('axios')
const path = require('path')

const app = express()

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public/dist')))

app.get('/', (req, res) => res.render('pages/index'))
app.get('/phonelist', async (req, res) => {

    const data = await axios.post('http://localhost:3000/extensions').then(resp => resp.data)
    res.render('pages/phonelist', { data })
})

app.post('/extensions', async (req, res) => {

    const url = "https://portal.voice.concentric.nz/api/"

    const params = {
        "token" : "a22e1f1852453ed0bece69881dedb1ec821291eba01f8a2b8d82efa794e4e19c5225474496a4ba81eff7b210278fa9a0d01c1a2307c2bd49714090eee71273d0",
        "action" : "Get-Voice-Users",
        "context" : "voice"
    }

    await axios.post(url, params).then(resp => {

        let data = resp.data.Data

        let filtered = data.map(d => {
            const { name, extension } = d
            return { name, extension }
            
        })

        res.send(filtered)
    })
})

app.listen(port, () => console.log(`Hello....on port ${port}`))
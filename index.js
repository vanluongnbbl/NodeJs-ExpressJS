const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello Luong So Fucking Handsome'))

app.listen(port, () => console.log(`Application's Luong is running at http://localhost:${port}`))
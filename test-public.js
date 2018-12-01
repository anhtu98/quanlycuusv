const express = require('express')
const app = express()
const port = 3000

const test = require('./server/test-public');
app.use(express.static('./public'))
test.init(app);
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log('Example app listening on port 3000!'))

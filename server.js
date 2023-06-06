const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
var fs = require('fs');
const routes = require("./routes/api")
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieparser = require('cookie-parser');
app.use(cookieparser())
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))
app.use(routes)

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
   }

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
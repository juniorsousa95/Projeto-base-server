const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')))

const routerConfig = express.Router();

app.all('*',(req,res,next)=>{
    console.log(req.path)
    next();
})

router.config(routerConfig)
app.use('/api',routerConfig)

module.exports = app;
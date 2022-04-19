const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function(req,res,next){
    let date = new Date()
    let ip = req.ip
    let url = req.originalUrl
    let result = date + ", " + ip + ", " + url
    console.log(result)
    console.log("GlobalMiddleware is in above line")
    next();
});

app.use('/', route);

// mongoose.connect("mongodb+srv://Sagar-functionup:radhaswami123@cluster0.7xlsi.mongodb.net/sagarsardar?retryWrites=true&w=majority")
// .then( () => console.log("MongoDb is connected"))
// .catch ( err => console.log(err) )

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

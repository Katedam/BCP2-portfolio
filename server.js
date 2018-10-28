const express = require('express');
const app = express();
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 8080;

app.use(express.static('./Public'));

app.get('/', function(request, response) {
    response.sendFile('./Public/index.html');
});

app.listen(8080, function(){
    console.log(`listening to port: ${PORT}`);
})
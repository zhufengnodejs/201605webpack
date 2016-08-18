var fs = require('fs');
fs.readFile('./w.jpg',function(err,data){
    console.log(data.toString('base64'));
})
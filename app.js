var configura = require ('./config/express');
var app = configura();

app.listen(3000,function(){
    console.log("servidor rodando")
});
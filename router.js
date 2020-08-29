let express = require('express'); 
let app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/Menu.html")
})
app.get("/Game", function (req, res) {
    res.sendFile(__dirname + "/Game.html")
})
app.get("/Credito", function (req, res) {
    res.sendFile(__dirname + "/Credito.html")
})
app.get("/sdsfdifdogoff11001101001", function (req, res) {
    res.sendFile(__dirname + "/iventario.html")
})
app.listen(8080, function () {
    console.log("servidor criado e pronto para usar!")
})

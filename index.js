const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>This is my server<br><hr><hr></h1')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)

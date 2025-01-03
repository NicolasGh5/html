const express = require('express')

const PORT = process.env.PORT || 3000 // in the hosting cloud (which can be Azure, AWS ..., )  
// there is a file .env wherein which there is PORT variable. 
// the cloud will assign your process (program) a port based on the available ports in .env.
//  If no are avaible, it will assign 3000 

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT)
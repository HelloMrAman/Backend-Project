// const express = require('express') or 
import express from 'express'; //module js ---> provide "type" : "module" in jason to use it

const app = express()

//Express ka main kaam hota hai route pr serve karna aur listen karna
app.get('/', (req, res) => { //get the requested data from server    ----> requested data: client send request to server. Server sends response of the request sent by client
    res.send('Server is ready')
})



//get a list of 5 jokes
app.get('/api/jokes', (req, res) => {  //  /api used as standardization
    const jokes = [
        {
          "id": 1,
          "name": "Why don't scientists trust atoms?",
          "content": "Because they make up everything!"
        },
        {
          "id": 2,
          "name": "Why did the math book look sad?",
          "content": "Because it had too many problems."
        },
        {
          "id": 3,
          "name": "What do you call fake spaghetti?",
          "content": "An impasta!"
        },
        {
          "id": 4,
          "name": "Why did the scarecrow win an award?",
          "content": "Because he was outstanding in his field."
        },
        {
          "id": 5,
          "name": "Why don't skeletons fight each other?",
          "content": "They don't have the guts."
        }
      ]
    res.send(jokes);
})


//process.env.PORT is necessary for production
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});

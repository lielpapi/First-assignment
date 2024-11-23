const express = require("express")
const app = express();
const dotenv = require("dotenv").config();
const port = 3000; 



app.get("/", (req, res ) => { 
    res.send('liel');
});


app.get("posts", (req, res ) => {
res.send('get posts');
});

app.post("/posts", (req, res ) => {
res.send('create new post');
});

app.put("/posts/:id", (req, res ) => {
res.send('update post');
});





app.listen(port, ()=> {
console.log(`Example app listening at http://localhost:${port}`);
});
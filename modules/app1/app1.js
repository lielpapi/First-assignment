const express = require ("express");
const app = express();
const port = 3000; 
//jhg

app.get("/", (req, res)=>{
    res.send("hellow world!23");
});

app.listen(port, () => {
    console.log( 'Example app listening at http://localhost:${port}');
});
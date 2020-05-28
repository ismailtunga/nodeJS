const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('hello world');
});

app.get('/api/product',(req,res)=>{
    res.send('Ürünler listelendi.');
});

app.listen(3000, ()=>{
    console.log('listen on port 3000');
});
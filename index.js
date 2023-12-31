const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const chef = require('./data/chef.json');
const recipe = require('./data/recipe.json');
app.use(cors());
app.get('/', (req,res)=>{
    res.send('server is running');
});
app.get('/chef',(req,res)=>{
    res.send(chef); 
})
app.get('/chef/:id',(req,res)=>{
    res.send(chef); 
})
app.get('/recipe',(req,res)=>{
    res.send(recipe); 
})
app.get('/recipe/:id',(req,res)=>{
    res.send(recipe); 
})
app.listen(port,()=>{
    console.log(`dragon is running on port:${port}`);
})
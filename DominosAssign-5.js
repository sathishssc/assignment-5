
let express = require('express');

let app = express();

app.get('/welcome',(request,response)=>{
    response.type('text/plain').status(200).send('Welcome to Dominos!');
})

app.get('/contact',(request,response)=>{
    response.type('application/json').status(200).json({  
             phone: '18602100000', 
             email: 'guestcaredominos@jublfood.com' 
       })
})
app.use((request,response)=>{
    response.status(404).send('data not found');
})

app.listen(8081);
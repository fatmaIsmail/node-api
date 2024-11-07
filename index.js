const express = require("express");
const app = express();

app.use(express.json());

const route = require("./router/route");

const { swaggerUi, swaggerDocs } = require ("./swagger/swagger");
app.use('/api/to_do',route);



app.listen(3000 ,()=>{
    console.log('start running at port 3000');
});




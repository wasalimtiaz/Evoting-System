const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors()); 

mongoose.connect("mongodb+srv://wasal:wasal4444@cluster0.ceu9e.mongodb.net/Cluster0?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(()=>console.log('DB Connected!'))
.catch(err=>console.log(err))


app.use('/graphql',graphqlHTTP({
 schema,
 graphiql:true
}))

app.listen(3000,()=>{
console.log("Listening on Port 3000.")
})


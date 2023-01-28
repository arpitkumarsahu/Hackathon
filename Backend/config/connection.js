const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', true);

const connection = () =>{
    mongoose.connect("mongodb+srv://arpitkumarsahu:arpit@cluster0.fbtk8gj.mongodb.net/Hakathon?retryWrites=true&w=majority").then(() =>{
        console.log({msg : "Connection Successfully!"});
    }).catch((error) =>{
        console.log({msg : "Connection Failed!", error});
    })
}
module.exports = { connection };
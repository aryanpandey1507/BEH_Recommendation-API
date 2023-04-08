const mongoose = require("mongoose");
const config = require('config');

const mongo_DB_conn_string =  config.get("mongo_DB_conn_string");
console.log(mongo_DB_conn_string)


const connectDB=async ()=>{

   await mongoose.connect(mongo_DB_conn_string,{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
        console.log(`connected with server: ${data.connection.host}`);
   })
}
  


module.exports = connectDB
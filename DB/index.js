const mongoose = require('mongoose');
const dotenv = require('dotenv').config()



mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true })
.then(()=>{
  console.log(`connection to database established`)
}).catch(err=>{
 throw err;
})
;
const db = mongoose.connection;



module.exports = db;

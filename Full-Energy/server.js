const express = require('express');
const mongoose = require('mongoose');
const path = require ('path)');
const config = require('config');
const cors= require('cors');


const app = express();
app.use(express.json());
app.use(cors);

///Production Set-up
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}
///End of Production Set-up




const port = process.env.PORT || 4000;
//Mongoose Set-Up
const dbURI = config.get('dbURI');
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })

  .then((result) => app.listen(port))
  .catch((err) => console.log(err));
//End of Mongoose Set-up
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const cors= require('cors');

const authRoutes = require('./routes/Auth_route');
const itemRoutes = require('./routes/Item_route');
const cartRoutes = require('./routes/Cart_route');
const orderRoutes = require('./routes/Order_route');
const userRoutes = require('./routes/User_route');
const providerRoutes = require('./routes/Provider_route');
const categoryRoutes = require('./routes/Category_route');
const reviewRoutes = require('./routes/Review_route');
const billsRoutes = require('./routes/Bills_route');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api',authRoutes);
app.use('/api',itemRoutes);
app.use('/api',cartRoutes);
app.use('/api',orderRoutes);
app.use('/api',userRoutes);
app.use('/api',providerRoutes);
app.use('/api',categoryRoutes);
app.use('/api',reviewRoutes);
app.use('/api',billsRoutes);


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const port = process.env.PORT || 4000;
const dbURI = config.get('dbURI');
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server running on http://localhost:${port}`)))
  .catch((err) => console.log(err));

 
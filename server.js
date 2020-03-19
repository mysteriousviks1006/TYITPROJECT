const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Items = require('./routes/api/Items');
const Admins = require('./routes/api/admins');
const Orders = require('./routes/api/orders');
const Users = require('./routes/api/users');


const app = express();

app.use(bodyParser.json());

// Db config
const db = require('./config/keys').mongoURI;

// Connect to mongo

mongoose.connect(db,{ useNewUrlParser: true , useCreateIndex: true , useUnifiedTopology: true })
    .then(() => console.log('mongoDB connected...... ') )
    .catch( err => console.log(err));

//Items or products
app.use('/api/items', Items);
//users
app.use('/api/users', Users);
//order
app.use('/api/orders', Orders);
// admin
app.use('/api/admins', Admins);

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`));
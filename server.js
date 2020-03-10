const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Items = require('./routes/api/Items');


const app = express();

app.use(bodyParser.json());

// Db config
const db = require('./config/keys').mongoURI;

// Connect to mongo

mongoose.connect(db,{ useNewUrlParser: true})
    .then(() => console.log('mongoDB connected...... ') )
    .catch( err => console.log(err));


app.use('/api/items', Items);
    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server started on port ${port}`));
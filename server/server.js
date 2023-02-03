const express = require('express');
const cors = require('cors');
require('dotenv').config

const app = express();
require('./config/mongoose.config')
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())
const Routes = require('./routes/cafe.route')
Routes(app);

app.listen(process.env.PORT || 8000, () => console.log(`You are connected to Cafe server at port ${port}`))
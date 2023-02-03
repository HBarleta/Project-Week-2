const express = require('express');
const cors = require('cors');

const port = 8000;
const app = express();
require('./config/mongoose.config')
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())
const Routes = require('./routes/cafe.route')
Routes(app);

app.listen(port, () => console.log(`You are connected to Cafe server at port ${port}`))
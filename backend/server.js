const { application } = require("express")
require('dotenv').config()
const express = require("express")
require('./config/connection')

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const userRouterAPI = require('./api/routes/UserApiRouter')

app.use('/api/user/', userRouterAPI)

app.listen(process.env.PORT, () => console.log('server running on port 3000'))
require('dotenv').config();

const { Server } = require('./models');

const app = new Server();
app.listen();
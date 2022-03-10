const express = require('express');
const cors = require('cors');
// const fileUpload = require('express-fileupload');

const { dbConnection } = require('../database/config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.path = {
      auth: '/api/auth',
      pubsub: '/api/pubsub',
      // beneficiaries: '/api/beneficiaries',
      // clients: '/api/clients',
      // requests: '/api/requests',
      // uploads: '/api/uploads/',
      users: '/api/users',
    };

    this.connectDB();
    this.middlewares();
    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public')); 
    // this.app.use(fileUpload({
    //   useTempFiles : true,
    //   tempFileDir : '/tmp/'
    // }));
  }

  routes() {
    this.app.use(this.path.auth, require('../routes/auth'));
    this.app.use(this.path.users, require('../routes/users'));
    this.app.use(this.path.pubsub, require('../routes/pubsub'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor en puerto', this.port);
    });
  }
}

module.exports = Server;

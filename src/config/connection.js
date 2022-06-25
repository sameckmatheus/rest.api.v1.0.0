const mongoose = require('mongoose');

// Dentro da classe connection você pode utilizar não só o mongodb, mas também multiplos bancos de dados como mysql por exemplo...

class Connection {
  constructor() {
    this.dataBaseConnectionMongoDB();
  }

  dataBaseConnectionMongoDB(){
    this.mongoDBConnection = mongoose.connect("mongodb://localhost/nodejs", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    .then(() => {
      console.log("Conexão estabelicida com o MongoDB");
    })
    .catch((error) => {
      console.log(`Erro ao estabelecer conexão com mongoDB: ${error}`)
    })
  }
}

module.exports = new Connection();

const server = require('./src/app');
const { conn } = require('./src/db.js');
require('dotenv').config();

const PORT = 3001;

conn.sync({ force: false }).then(() => {
    server.listen(PORT, () => {
      console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
    });
  });
  

const mysql = require('mysql2');
const mysqlConfig = require('./config.ts');

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err: any) => {
  if (err) throw err;
  console.log('Connected!');
});

// TODO: Remake these to be generic

const getAllAuthors = function(callback: (arg0: any, arg1: any) => void) {
  let selectAll = 'SELECT * FROM authors';

  connection.query(selectAll, (err: any, data: any) => {
    if (err) {
      console.log(err);
      callback(err, null);
    }
    callback(null, data);
  });
};


module.exports = {
  getAllAuthors,
};

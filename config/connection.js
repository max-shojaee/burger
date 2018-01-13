// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection({
    host: "tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "rzyiia3clfddk31w",
    password: "y6eyfjue42o53c2q",
    database: "hranaw37n5ij3bpz"
  });
}
else {
  connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Tabestan_20",
    database: "burgers_db"
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
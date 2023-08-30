const mysql2 = require('mysql2');

const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    //password: "Password",
    //database: "socialmedia"
})


db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Mysql Connected...');
});

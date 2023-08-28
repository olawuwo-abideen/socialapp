const mysql2 = require('mysql2');

export const db = mysql2.createConnection({
    host: "localhost",
    user: "olawuwo",
    password: "Password",
    database: "socialmedia"
})
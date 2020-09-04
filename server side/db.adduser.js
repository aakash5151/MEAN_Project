const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "localhost",
    user: "root",
    password: "aakash",
    database: "userdetail",
};

let addUser = async (input) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let sql =
        "INSERT INTO USER (USERNAME, EMAIL,PASSWORD,CPASSWORD) VALUES (?, ?, ?, ?)";
    await connection.queryAsync(sql, [
        input.username,
        input.email,
        input.password,
        input.cpassword,
    ]);

    await connection.endAsync();

};
let loginUser = async (input) => {

    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let sql =
        "SELECT * FROM USER WHERE EMAIL=? AND PASSWORD=?";
    let results = await connection.queryAsync(sql, [
        input.email,
        input.password,
    ]);
    await connection.endAsync();
    if (results.length === 0) {
        throw new Error("Invalid Credentials");
    }
    // console.log("success")

    //return results;

};

let forgetUser = async (input) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let sql =
        "UPDATE USER SET PASSWORD=? , CPASSWORD=? WHERE EMAIL=?";
    await connection.queryAsync(sql, [

        input.password,
        input.cpassword,
        input.email,
    ]);
    console.log("success")
    await connection.endAsync();
    //return results;



};

module.exports = { addUser, loginUser, forgetUser };
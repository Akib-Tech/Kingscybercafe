const createProfileTable = "CREATE TABLE IF NOT EXISTS profile (id SERIAL PRIMARY KEY, name VARCHAR(60), phonenumber VARCHAR(11), username VARCHAR(30), email VARCHAR(60) NOT NULL, password VARCHAR(30) NOT NULL )";


const createInbox = "CREATE TABLE IF NOT EXISTS chatbox ( id SERIAL PRIMARY KEY, message VARCHAR(60), sender VARCHAR(30), identity VARCHAR(10), time VARCHAR(60)  )";

const createTransaction = "CREATE TABLE IF NOT EXISTS transaction (id SERIAL PRIMARY KEY,description VARCHAR(60),amount VARCHAR(11),sender VARCHAR(60),time VARCHAR(30))";
module.exports = {createProfileTable,createInbox,createTransaction}
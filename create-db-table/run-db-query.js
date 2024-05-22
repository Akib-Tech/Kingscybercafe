//const client = require('./db.js');
const Pool = require('pg').Pool;
const client = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Kingswebsite',
  password: 'Ibraheem@201',
  port: 5432,
});
const dbCreation = require('./kingwebsite.js');

const runDbQuery = async () => {
    console.log("Begin DB migration");
    
    try{
        await client.query(dbCreation.createTransaction);
        await client.query(dbCreation.createProfileTable);
        await client.query(dbCreation.createInbox);
        await client.query("COMMIT");

    } catch(e){
      
        console.log(e);
    } 
}

module.exports = {runDbQuery}
//const client = require('./db.js');
const Pool = require('pg').Pool;
const client = new Pool({
  user: 'kingscafe_user',
  host: 'dpg-cp9so4sf7o1s73a6clkg-a',
  database: 'kingscafe',
  password: 'zw1qgiuT3DtleF7TnH1kcc1SC59HKCIJ',
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

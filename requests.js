const Pool = require('pg').Pool
const pool = new Pool({
 user: 'kingscafe_user',
  host: 'dpg-cp9so4sf7o1s73a6clkg-a',
  database: 'kingscafe',
  password: 'zw1qgiuT3DtleF7TnH1kcc1SC59HKCIJ',
  port: 5432,
})
/*  USER REGISTRATION, EDIT AND DELETE CODE */
const createUser = async ( {fullname,number,username,email,password} ) => {
 try{
  const client = await pool.connect();
  try{
  const createUserQuery = "INSERT INTO profile (name, phonenumber, username, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING * ";
  const res = await client.query(createUserQuery, [fullname, number, username, email, password]);
    return {status : "success", data : res.rows};

  } finally {
    client.release();
  }

 } catch (err) {
  return {status : "error",message : err.message}
 }
  }
  
  const editUser = async (email, {fullname,number,username,password}) => {
    try{
      const client = await pool.connect();
      try{
      const editUserQuery =  "UPDATE profile SET name=$1, phonenumber=$2, username=$3, password= $4 WHERE email=$5";
      const res = await client.query(editUserQuery, [fullname, number, username, password,email]);
        return {status : "success", data : res.rows};
    
      }finally{
        client.release();
      }
    
     }catch(err) {
      return {status : "error",message : err.message}
     }
  }
  
  const deleteUser =async (email) => {
    try{
      const client = await pool.connect();
      try{
      const deleteQueryUser =  "DELETE FROM profile WHERE email=$1";
      const res = await client.query(deleteQueryUser, [email]);
        return {status : "success", data : res.rows};
    
      }finally{
        client.release();
      }
    
     }catch(err) {
      return {status : "error",message : err.message}
     }
  }
/*  USER REGISTRATION, EDIT AND DELETE CODE */


/* MESSAGES SENDING & RECEIVING CODE  */
  
  const sendMessage = async ({message,sender,identity}) => {
    try{
      const client = await pool.connect();
      try{
      const messageQuery =  "INSERT INTO chatbox (message,sender,identity) VALUES ($1,$2,$3) RETURNING * ";
      const res = await client.query(messageQuery, [message,sender,identity]);
        return {status : "success", data : res.rows};
    
      }finally{
        client.release();
      }
    
     }catch(err) {
      return {status : "error",message : err.message}
     }
  }


const allUserMessage = async () => {
    try{
      const client = await pool.connect();
      try{
      const allMessageQuery =  "SELECT * FROM chatbox";
      const res = await client.query(allMessageQuery);
        return { status : "success", data : res.rows };
        console.log(res.rows);
      }finally{
        client.release();
      }
     }catch(err) {
      return { status : "error",message : err.message }
     }  
}

  const eachUserMessage = async (sender,identity) => {
    try{
      const client = await pool.connect();
      try{
      const eachMessageQuery =  "SELECT * FROM chatbox WHERE sender = $1 AND identity=$2";
      const res = await client.query(eachMessageQuery, [sender,identity]);
        return { status : "success", data : res.rows };
    
      } finally {
        client.release();
      }
    
     } catch (err) {
      return {status : "error",message : err.message}
     }
}


/* MESSAGES SENDING & RECEIVING CODE  */
const totalSales = async () => {
try{
  const client = await pool.connect();
  try{
  const totalSalesQuery =  "SELECT * FROM transaction";
  const res = await client.query(totalSalesQuery);

  return { status : "success", data : res.rows.length };
  } finally{
client.release();
  }

 } catch(err) {
  return {status : "error",message : err.message}
 }
}

  
  const totalRevenue = async () => {
    try{
      const client = await pool.connect();
      try{
      const totalRevQuery =  "SELECT * FROM transaction";
      const res = await client.query(totalRevQuery);
        return {status : "success", data : res.rows.length};
      }finally{
        client.release();
      }
    
     }catch(err) {
      return {status : "error",message : err.message}
     }
  }
  
  const totalOrder = async () => {
    try{
      const client = await pool.connect();
      try{
      const totalOrderQuery =  "SELECT * FROM transaction";
      const res = await client.query(totalOrderQuery);
        return {status : "success", data : res.rows.length};
    
      }finally{
        client.release();
      }
    
     }catch(err) {
      return {status : "error",message : err.message}
     }
  }


  const totalUsers = async () => {
    try{
      const client = await pool.connect();
      try{
      const totalUsersQuery =  "SELECT * FROM profile";
      const res = await client.query(totalUsersQuery);
        return {status : "success", data : res.rows.length};
    
      }finally{
        client.release();
      }
    
     }catch(err) {
      return {status : "error",message : err.message}
     }
  }

  
  const usersTransaction = async (email) => {trans
    try{
      const client = await pool.connect();
      try{
      const usersTrasnQuery =  "SELECT * FROM transactions WHERE sender = $1";
      const res = await client.query(usersTrasnQuery, [email]);
        return {status : "success", data : res.rows};
    
      }finally{
        client.release();
      }
    
     }catch(err) {
      return {status : "error",message : err.message}
     }
  }


  const viewProfile = async (id) => {
    try{
      const client = await pool.connect();
      try{
      const viewProfQuery =  "SELECT * FROM profile WHERE id=$1";
      const res = await client.query(viewProfQuery, [id]);
        return {status : "success", data : res.rows};
    
      }finally{
        client.release();
      }
    
     }catch(err) {
      return {status : "error",message : err.message}
     }
  }
  
  const transactionHistory = async (id) => {
    try{
      const client = await pool.connect();
      try{
      const transHisQuery =  "SELECT * FROM transaction";
      const res = await client.query(transHisQuery);
        return {status : "success", data : res.rows};
    
      }finally{
        client.release();
      }
    
     }catch(err) {
      return {status : "error",message : err.message}
     }
  }
  
  const insertTrans = async ({description,amount,sender}) => {
    try{
      const client = await pool.connect();
      try{
      const transHisQuery =  "INSERT INTO transaction (description,amount,sender) VALUES ($1,$2,$3) RETURNING * ";
      const res = await client.query(transHisQuery,[description,amount,sender]);
        return {status : "success", data : res.rows[0]};
    
      }finally{
        client.release();
      }
    
     }catch(err) {
      return {status : "error",message : err.message}
     }
  }
  
const login = async ({email,password}) => {
  try{
    const client = await pool.connect();
    try{

      const logQuery = "SELECT * FROM profile WHERE email=$1 AND password=$2 ";
      const res = await client.query(logQuery,[email,password]);
      return {status : "success", data : res.rows[0]};
  
    }finally{
      client.release();
    }
  
   }catch(err) {
    return {status : "error",message : err.message}
   }


}
  module.exports = {
    createUser,editUser,totalSales,
    totalRevenue,totalOrder,totalUsers,
    allUserMessage,eachUserMessage,sendMessage,usersTransaction,
    viewProfile,transactionHistory,deleteUser,insertTrans,login}
    

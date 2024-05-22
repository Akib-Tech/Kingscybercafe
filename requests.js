const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Kingswebsite',
  password: 'Ibraheem@201',
  port: 5432,
})

function query(a,b,c) {
  pool.query(a,b,c);
}

const createUser = async ( {fullname,number,username,email,password,confirmPassword} ) => {
  if(password == confirmPassword){
 try{
  const client = await pool.connect();
  try{
  const createUserQuery = "INSERT INTO profile (name, phonenumber, username, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING * ";
  const res = await client.query(createUserQuery, [fullname, number, username, email, password]);
    return {status : "success", data : res.rows[0]};

  }finally{
    client.release();
  }

 }catch(err) {
  return {status : "error",message : err.message}
 }
    }else{
       result = "Password does not match";
    }
  }
  
  const editUser = async (email, {fullname,number,username,password}) => {
    try{
      const client = await pool.connect();
      try{
      const createUserQuery =  "UPDATE profile SET name=$1, phonenumber=$2, username=$3, email=$4, password= $5 WHERE email=$4";
      const res = await client.query(createUserQuery, [fullname, number, username, email, password]);
        return {status : "success", data : res.rows[0]};
    
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
      const createUserQuery =  "DELETE FROM profile WHERE email=$1";
            const res = await client.query(createUserQuery, [email];
        return {status : "success", data : res.rows[0]};
    
      }finally{
        client.release();
      }
    
     }catch(err) {
      return {status : "error",message : err.message}
     }
  }

  
  const sendMessage = ({message,sender,identity}) => {
    try{
      const client = await pool.connect();
      try{
      const createUserQuery =  "INSERT INTO chatbox (message,sender,identity) VALUES ($1,$2,$3)"
            const res = await client.query(createUserQuery, [message,sender,identity]);
        return {status : "success", data : res.rows[0]};
    
      }finally{
        client.release();
      }
    
     }catch(err) {
      return {status : "error",message : err.message}
     }
  }

  const allUsersMessages = () => {
    const allMessages = "";
    
  }

  const eachUserMessage = async (sender,identity) => {
    try{
      const client = await pool.connect();
      try{
      const createUserQuery =  "SELECT * FROM chatbox WHERE sender = $1";
            const res = await client.query(createUserQuery, [+sender]);
        return {status : "success", data : res.rows[0]};
    
      }finally{
        client.release();
      }
    
     }catch(err) {
      return {status : "error",message : err.message}
     }

  }





  const totalSales = (req,res) => {
    const totalsales = "This is totalsales";
  }
  
  const totalRevenue = (req,res) => {
    
  }
  
  const totalOrder = (req,res) => {
    const totalOrder = "This is totalOrder";
  }
  const totalUsers = (req,res) => {
    const totalUsers = "This is totalUsers";
  }

  
  const usersTransaction = () => {
    const userTrans = "This is userTrans";
  }
  const viewProfile = () => {
    const viewProfile = "This is view profile";
  }
  
  const transactionHistory = () => {
    const transHistory = "This is transaction history";
  }
  
  module.exports = {
    createUser,editUser,totalSales,
    totalRevenue,totalOrder,totalUsers,
    allUsersMessages,eachUserMessage,sendMessage,usersTransaction,
    viewProfile,transactionHistory,deleteUser}
    
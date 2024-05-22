const express = require('express')
const bodyParser = require('body-parser')
const runDb = require('./create-db-table/run-db-query.js');
const admin = require("./requests.js");
const Cors = require("cors");
const app = express()
app.use(express.json())
app.use(Cors())

const port = process.env.PORT || 3000;
async function start() {
    await runDb.runDbQuery();
}

start();
app.get("/hello",  (req, res) => res.status(200).send("Hello TheWebDev") )
/*
app.get("/dashboard", (req,res) => {
res.render(`/${req.body}`);
})

app.get("/users", (req,res) => {
  res.render(`/${req.body}`);
  })

app.get("/messages", (req,res) => {
    res.render(`/${req.body}`);
})

app.get("/transactions" , (req,res) => {
  res.render(`${req.body}`);
} )
*/
app.get("/users",async (req,res) => {
  const result =  admin.totalUsers(req.body);
  console.log(result);
 });
 app.get("/orders",admin.totalOrder);
 app.get("/sales",admin.totalSales);
 app.get("/revenues",admin.totalRevenue);



 app.get("/allmessages", async (req,res) => {
  const sender = req.params.sender;
  const identity = req.params.identity;
  const message = admin.allUserMessage();

 });
 app.get("/usertransaction/:id",admin.usersTransaction);
 app.get("alltransaction",admin.transactionHistory);
 app.get("/profile",admin.viewProfile);

 
app.post("/sendmessage", async (req,res) => {
const message = await admin.sendMessage(req.body);
await console.log(req.body);
res.status(201).json(message);

})


app.get("/usermessage/:sender/:identity",async (req,res) => {
  const sender = req.params.sender;
  const identity = req.params.identity;
  const message = admin.eachUserMessage(sender,identity);
  res.status(201).json(message);

});



 app.post("/user", async (req,res) => {
const create = await admin.createUser(req.body);
console.log(create);
res.status(201).json(create)
 }
     );


 app.put("/user/:email", async (req,res) => {
  const email = req.params.email;
  const updateUser = await admin.editUser(email, req.body);
  res.status(201).json(updateUser);
   }  );

 app.delete("/user/:email", async (req,res) => {
  const email = req.params.email;
  const deleteUser = await admin.deleteUser(email);
  res.status(201).json(deleteUser);
   }
   
);

 app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
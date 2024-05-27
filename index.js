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


app.get("/",(req,res) => {
      res.json({ info: 'Node.js, Express, and Postgres API' })
})


/*  USER REGISTRATION, EDIT AND DELETE CODE */

app.post("/user", async (req,res) => {
    ;
  const create = await admin.createUser(req.body);
  res.status(201).json(create)
 } );



app.put("/user/:email", async (req,res) => {
 const email = req.params.email;
 const updateUser = await admin.editUser(email, req.body);
 res.status(201).json(updateUser);
  }  );


  app.delete("/user/:email", async (req,res) => {
   const email = req.params.email;
   const deleteUser = await admin.deleteUser(email);
   res.status(201).json(deleteUser);
    });

/*  USER REGISTRATION, EDIT AND DELETE CODE */


/* CODE FOR MESSAGES */
app.post("/message", async (req,res) => {
const message = await admin.sendMessage(req.body);
res.status(201).json(message);
});
     
app.get("/messages", async (req,res) => {
const message = await admin.allUserMessage();
res.status(201).json(message);
      }
);

app.get("/message/:sender/:identity",async (req,res) => {
const sender = req.params.sender;
const identity = req.params.identity;
const message = await admin.eachUserMessage(sender,identity);
res.status(201).json(message);
});

/* CODE FOR MESSAGES */

/* CODE FOR TRANSACTIONS */

app.get("/sales", async (req,res) => {
  const message = await admin.totalSales();
  res.status(201).json(message);
});

app.get("/revenues", async (req,res) => {
 const message = await admin.totalRevenue();
 res.status(201).json(message);
    });

app.get("/orders",async (req,res) => {
  const message = await admin.totalOrder();
 res.status(201).json(message);
        });

app.get("/users",async (req,res) => {
const message = await admin.totalUsers();
res.status(201).json(message);
      });

app.get("/transaction/:id",async (req,res) => {
  const id = req.params.id
  const message = await admin.transactionHistory(id);
 res.status(201).json(message);
        });


app.get("/profile",async (req,res) => {
  const id = req.params.id
  const message = await admin.viewProfile(id);
 res.status(201).json(message);
        });


app.get("/transaction",async (req,res) => {
  const id = req.params.id;
  const message = await admin.transactionHistory(id);
 res.status(201).json(message);
        });     

app.post("/insertTrans",async (req,res) => {

  const message = await admin.insertTrans(req.body);
 res.status(201).json(message);
        });     
        

app.post("/login",async (req,res)=>{
const message = await admin.login(req.body);
res.status(201).json(message)
});
/* CODE FOR TRANSACTIONS */
 app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

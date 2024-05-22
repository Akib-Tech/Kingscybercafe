# Kingscybercafe
.get("/users") is used to get the total number of users
.get("/orders") is used to get the total number of orders
.get("/sales") is used to get the total number of sales
.get("/revenues") is used to get the total number of revenues
.get("/allmessages/:sender/:identity") is used to list the messages of a users to the admin on the lHS. Sender is the id of the user, identity is the id of the admin.
.post("/sendmessagee")  is used to send message to the admin with 3 parameters(message,sender,identity,time)
.get("/usermessage/:sender/:identity") is used to view the messages of a user,Sender is the id of the user, identity is the id of the admin.
.post("/user") is for sign-up users with (fullname,number,username,email,password,confirmPassword) as parameters
.put("/user/:email") is used to edit the user profile. (fullname,number,username,password) are parameters and email of the user.
.delete("/user/:email") is for deleting the user using email.
.get("/usertransaction/:id") is to view transaction of a user using the user id;
.get("/alltransaction") is to get all the transactions with all users
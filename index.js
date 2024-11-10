const express = require('express');
const { parseString } = require('fast-csv');
const app = express();
//create an express object

const PORT = 3000;

app.listen(PORT, () => console.log('server is now listening on port ' + PORT));
//make sure the port is open

app.get('/',(req,res) => {
    res.send('SERVER IS AGO !!!!');
    //get route for backend
});


const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('ufc_data.db');
//contact the sqlite database

//routes are for backend code and determines how the server interacts with frontend
//a route consists of
//http method: type of request responds to: get, post, put, delete
//url path: url or endpoint that route handles
//callback function: a function that runs with route is accessed, handles request
//                      interacts with db, sends reponse back to client

app.get('/fighter/:name', (req,res) => {
    const fighterName = req.params.name; //get fighter name from url
    const sql = 'Select * FROM fighters WHERE name = ?';//sql query to find fighter by name
    
    db.get(sql,[fighterName], (err,row) => {//run the queury and find the name
        if(err){
            console.log(err.message);
            res.status(500).send('Database error')
        }else if(row){
            //eat first
            res.json(row); //send the fighters data as json
        }else{
            res.status(404).send("fighter not found");
        }
    });
});
console.log("work please");



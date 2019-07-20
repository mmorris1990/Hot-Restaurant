// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const maxRes = 5;

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var reservations = [{
    customerName:"ian",
    phoneNumber:"123-1234",
    customerEmail:"asdf@hotmail.com",
    customerID:"fffff"
}];

var waitlist = [{
    customerName:"Waitian",
    phoneNumber:"123-1234",
    customerEmail:"asdf@hotmail.com",
    customerID:"fffff"
}
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/view",function(req,res){
  res.sendFile(path.join(__dirname, "view.html"));
})
// Displays all reservations
app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});
// Displays all waiting list
app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });



// make new reservation
app.post("api/reservations",function(req,res){

    console.log("post");
    var newRes,newWait;
    if(reservartions.length< maxRes ){
        newRes= req.body;
        reservations.push(newRes);
        console.log("new reservation",newRes);
        res.json(newRes);
    }else{
        newWait = req.body;
        waitlist.push(newWait);
        console.log("new waitlist",newWait);
        res.json(newWait);
    }
})



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

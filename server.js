var express = require("express"); 
var cors = require("cors");
var path = require("path");
var app = express(); 

app.use(cors());
app.use(express.json());

app.use(function(request, respose,next) { // Logger middleware, GET, POST, PUT, or DELETE,/lessons
      console.log(
            "Request Type:", request.method,
            "| Requested URL:", request.url
      );
      next(); //This will passes control to the next middleware
});

app.use("/images", express.static(path.join(__dirname, "images")));

var lessons = [
      {
            id: 1001,
            subject: "Maths",
            location: "Hendon",
            price: 25,
            availability: 5
      },
      {
            id: 1002,
            subject: "English",
            location: "Golders Green",
            price: 30,
            availability: 5
      },
      {
            id: 1003,
            subject: "Biology",
            location: "Hendon",
            price: 20,
            availability: 5
      },
      {
            id: 1004,
            subject: "History",
            location: "Kilburn",
            price: 30,
            availability: 5
      },
      {
            id: 1005,
            subject: "Physics",
            location: "Hendon",
            price: 20,
            availability: 5
      },
      {
            id: 1006,
            subject: "Chemistry",
            location: "Golders Green",
            price: 30,
            availability: 5
      },
      {
            id: 1007,
            subject: "Science",
            location: "Hendon",
            price: 40,
            availability: 5
      },
      {
            id: 1008,
            subject: "Coding",
            location: "Hendon",
            price: 30,
            availability: 5
      },
      {
            id: 1009,
            subject: "Piano",
            location: "Hendon",
            price: 40,
            availability: 5
      },
      {
            id: 1010,
            subject: "Football",
            location: "Hendon",
            price: 20,
            availability: 5
      }
      ];

app.get("/lessons", function (request, response) {
      response.json(lessons);
});

// POST route: receive a customer order
app.post("/orders", function (request, response) {
    var order = request.body;

    console.log("New order received:");
    console.log("Customer name:", order.name);
    console.log("Telephone:", order.telephone);
    console.log("Lesson IDs:", order.cart);

    console.log("Number of items:", order.cart.length);

    response.status(201).json({
        message: "Order received successfully"
    });
});


app.use(function (request, response) {
      response.status(404).json({
            error: "404 - Route not found"
      });
});

app.listen(3000, function() {  
      console.log("ClassHub server running on port 3000"); 
}); 
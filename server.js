let express = require("express");

let PORT = process.env.PORT || 8080;

let app = express();

// Serve static content from the 'public' directory
app.use(express.static("public"));

// Parse app body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/sammich_controller.js");

app.use(routes);

// Start server
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
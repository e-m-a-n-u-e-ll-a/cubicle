let express = require("express");
let handlebars = require("express-handlebars");

let routes = require("./routes");

let app = express();


app.use(express.static('public'));

app.engine("hbs", handlebars.engine({
    extname: "hbs"
}));
app.set("view engine", "hbs");
app.set("views", "./src/views")

app.use(routes);

app.listen(5000, () => {
    console.log("App is listening on port 5000");
});
let express = require("express");
let handlebars = require("express-handlebars");
let { initializeDatabase } = require("./confing/database");

let routes = require("./routes");

let app = express();


app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.engine("hbs", handlebars.engine({
    extname: "hbs"
}));
app.set("view engine", "hbs");
app.set("views", "./src/views")

app.use(routes);


initializeDatabase()
    .then(() => {
        app.listen(5000, () => console.log("App is listening on port 5000"));
    })
    .catch((err) => {
        console.log(err);
    });

let express = require("express");
let app = express();
app.get("/", (req, res) => {
    res.send("Hi world")
});
app.listen(5000, () => {
console.log("App is listening on port 5000")
})
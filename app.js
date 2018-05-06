const express = require('express');
const app = express();

app.set("view engine", "ejs"); //so that i don't have to render with .ejs

app.get("/", (req, res) => {
	res.render("landing");
})

app.get("/register", (req, res) => {
	res.render("register");
})

app.post("/register", (req, res) => {
	res.redirect("main");
})

app.post("/main", (req, res) => {

	res.redirect("/main");
})
app.get("/main", (req, res) => {
	res.render("main");
})

app.listen(3000, () => {
	console.log("now running social-project on port 3000");
})
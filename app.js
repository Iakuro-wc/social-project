const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs"); //so that i don't have to render with .ejs

app.get("/", (req, res) => {
	res.render("landing");
})

app.get("/register", (req, res) => {
	res.render("register");
})

const newUser = [
	{
		firstname: "will",
		lastname: "bause",
		email: "willbause@bausest.com",
		password: "superbause",
		country: "bause-nation"
	}
]

//finish this first
app.post("/register", (req, res) => {
	let firstname = req.body.firstname;
	let lastname = req.body.lastname;
	let email = req.body.email;
	let password = req.body.password;
	let country = req.body.country;
	const newestUser = {
		firstname: firstname,
		lastname: lastname,
		email: email,
		password: password,
		country: country
	}
	newUser.push(newestUser);

	res.redirect("main");
	console.log(newUser);
})

app.post("/main", (req, res) => {
	console.log(req.body);
	res.redirect("/main");
})
app.get("/main", (req, res) => {

	res.render("main", {newUser: newUser});
})

app.listen(3000, () => {
	console.log("now running social-project on port 3000");
})
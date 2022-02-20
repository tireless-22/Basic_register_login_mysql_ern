const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");


app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "sqluser",
  host: "localhost",
  password: "password",
  database: "loginRegister",
});




app.post("/register", (req, res) => {
	const user = req.body.user;
	const password = req.body.password;
	console.log(user + password);
	db.query("INSERT INTO users(user,password) VALUES(?,?)",
		[user, password], (err, result) => {
			if (err) {
				console.log(err);

			}
			else {
				res.send(result);
			}
	})
	
});

app.post("/login", (req, res) => {
	const user = req.body.user;
	const password = req.body.password;
	db.query("SELECT * FROM users WHERE user=? AND password=?",
		[user, password], (err, result) => {
			if (err) {
				res.send({ err: err });
				console.log(err);

			}
			
				if (result.length>0) {
					console.log(result);
					res.send(result);
				}
				else {
					res.send({ message: "no user found" });
					console.log("no user foung");
				}
				
		
		})
	

})


app.listen(3001, () => {
	console.log("node is listening");

})
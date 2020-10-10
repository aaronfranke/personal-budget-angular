// Budget API

const express = require('express');
const cors = require('cors');
const fs = require("fs");
const app = express();
const port = 3000;

app.use(cors());

app.get("/budget", (req, res) => {
	fs.readFile("./budget_data.json", function(err, data) {
		res.json(JSON.parse(data));
	});
});

app.listen(port, () => {
	console.log(`API served at http://localhost:${port}`);
});

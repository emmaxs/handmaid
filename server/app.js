const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* dummy route */
app.get('/', (req, res) => res.send("We're here for you"));

/* post the form */
app.post('/form/', (req, res) => {
	/* change this to something useful */
	var body = req.body.name;

	var message = 'Hello from Emma';
	console.log(body);
	res.send(message);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

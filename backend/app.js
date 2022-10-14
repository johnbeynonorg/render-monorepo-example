const express = require('express')

const app = express();
const port = process.env.PORT || 3001;

app.get('/hello', (req, res) => {
	res.json('Hello World, from express');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
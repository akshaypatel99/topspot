const path = require('path');
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
	const __dirname = path.resolve();
	app.use(express.static(path.join(__dirname, '/build')));

	app.get('*', (req, res, next) =>
		res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
	);
} else {
	app.get('/', (req, res, next) => {
		res.send('API is running...');
	});
}

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

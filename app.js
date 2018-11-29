const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const postsRoute = require('./routes/api/posts');

app.use('/api/posts', postsRoute)

app.listen(port, () => console.log('Server started on port 5000.'))
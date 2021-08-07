const express = require('express')
 const app = express();

// Route Handlers - methods available (get, post, put, delete and patch)
app.get('/', (req, res) => {
    res.send({hi: process.env});
});

// Listerner
const PORT = process.env.PORT || 5000;
app.listen(PORT);

const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/products', (req, res) => {
    const data = fs.readFileSync('products.json');
    const products = JSON.parse(data);
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

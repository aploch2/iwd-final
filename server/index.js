const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('hello there');
})



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server start on port ${port}`));
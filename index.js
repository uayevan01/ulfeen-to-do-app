const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

var corsOptions = {
    origin: 'http://localhost:4000/'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json({message: "Welcome"});
})

const db = require('./db/server.js');
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database!");
}).catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
})

app.use('/api', require('./routes/api'))

//const PORT = process.env.PORT || 4000;
//app.listen(PORT, () => {
//    console.log(`Server running on port: ${PORT}`)
//})
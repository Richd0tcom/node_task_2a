const express =  require('express');
const dotenv = require('dotenv');
const db = require('./src/models/db.config')
const cors = require('cors')

const app = express();
const port = 5000;

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

app.use(cors({
    origin:"*"
}))

//json parsing middleware
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send("we're good")
})
//routing
app.use('/order', require('./src/routes/order'));
app.use('/airports', require('./src/routes/airports'));

app.listen(port, ()=>{
    console.log(`server started on port ${port}`)   
})
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require("./controller");

const app = express ();
const {SERVER_PORT, CONNECTION_STRING} = process.env;
app.use(express.json());

massive ({
    connectionString: CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false
    }
})
.then(dbInstance => {
    app.set("db", dbInstance);
    console.log('db connected')
});

app.get('/api/inventory', ctrl.getInventory);
app.post('/api/product', ctrl.createProduct);
// app.delete('/api/')


app.listen(SERVER_PORT, () => {
    console.log(`Server listening on ${SERVER_PORT}`)
})
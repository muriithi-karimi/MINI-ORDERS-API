import express from "express";
import bodyParser from "body-parser";

// Importing the orders module
import orderRoutes from './routes/order.js';

//initialize our express app
const app = express();
const PORT= 8000;

//Body parser middleware
app.use(bodyParser.json());

app.use('/order', orderRoutes);

//Get request
app.get( "/", (req, res) => {
    
    res.send('Hello from HOMEPAGE!');

});

//Listening for incoming requests
app.listen(
    PORT, () =>console.log(`live on http://localhost:${PORT}`)
);
import express from "express";
import { v4 as uuidv4 } from 'uuid';


//initializing router
const router = express.Router();

let orders = [];

// All routes are staring with /orders
router.get('/', (req,res) => {

    res.send(orders);
        
});

// Create new orders
router.post('/', (req,res) => {
   
    const order = req.body;
    const orderWithId =({ ...order, id: uuidv4(), createdAt: Date()});
    orders.push(orderWithId)
    
    console.log(`Order for ${order.customerName} added`);
    console.log(orders);
    res.send(`New order created!`)
     
})

// Reading order by ID
router.get('/:id ', (req, res) => {
    const { id } = req.params;
    const foundOrder = orders.find((order) => order.id === id)
    res.send(foundOrder);
    // console.log('req.params');
    res.send('The get Id route')

});

// Uppdating order details
router.put('/:id', (req,res) => {
    res.send('The modify Id route')


})

// Delete order by order ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    orders = orders.filter((order) => order.id !== id);

    res.send(`order ith the id ${id} deleted from database!`);

})

export default router;

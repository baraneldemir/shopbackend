import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Stripe from "stripe";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

mongoose.connect(process.env.DATABASE_URL)

const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);


const personSchema = new mongoose.Schema({
    message: String
})

const Person = mongoose.model("Person", personSchema)

// const stripe = (process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
    [1, {priceInCents: 10000, name: "Plant Hoodie"}],
    [2, {priceInCents: 20000, name: "Tree Hoodie"}],    
    ])

    app.get('/', (req, res) => {
        res.json({
            message: "Cosmic Backend Working"
        })
    })
    
    
    // app.post('/create-checkout-session', async (req, res) => {
    //     res.json({ url: 'Hi' })
    // }) 
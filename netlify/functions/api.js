import "dotenv/config";
import express from "express";
import express, { Router } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Stripe from "stripe";
import mongoose from "mongoose";
import serverless from "serverless-http"

const api = express();

api.use(cors());
api.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

api.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

mongoose.connect(process.env.DATABASE_URL)

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST);

const personSchema = new mongoose.Schema({
    message: String
})

const Person = mongoose.model("Person", personSchema)

const router = Router()

// const storeItems = new Map([
//     [1, {priceInCents: 3999, name: "Plant Hoodie"}],
//     [2, {priceInCents: 3999, name: "Green Hoodie"}],
//     [3, {priceInCents: 3999, name: "White Hoodie"}],
//     [4, {priceInCents: 2999, name: "Bronwish Hoodie"}]    
//     ])

    // router.post('/create-checkout-session' , async (req, res) => {
    //     try {
    //         const session = await stripe.checkout.sessions.create({
    //             payment_method_types: ['card'],
    //             mode: 'payment',
    //             line_items: req.body.items.map(item => {
    //                 const storeItem = storeItems.get(item.id)
    //                 return {
    //                     price_data: {
    //                         currency: 'TRY',
    //                         product_data: {
    //                             name: storeItem.name
    //                         },
    //                         unit_amount: storeItem.priceInCents
    //                     },
    //                     quantity: item.quantity,
    //                 }
    //             }),
    //             success_url: `${process.env.FRONTEND_URL}/`,
    //             cancel_url:  `${process.env.FRONTEND_URL}/`,
    //         })
    //         res.json({ url: session.url })
    //     } catch (e) {
    //         res.status(500).json({ error: e.message})
    //     }
        
    // })

    

    // router.get('/messages', async (req, res) => {
    //     try {
    //         const allPersons = await Person.find({})
    //         res.json(allPersons)
    //     } catch(e) {
    //         console.error(e)
    //     }
    // })

    // router.post('/messages/new', (req, res) => {
    //     const person = req.body
    //     const newPerson = new Person({
    //         message: person.message,
    //     })
    //     newPerson.save()
    //     .then(() => {
    //         console.log("Person Saved")
    //         res.sendStatus(200)
    //     })
    //     .catch(e => console.error(e))
    // })

    api.use("/api/", router)

    export const handler = serverless(api)
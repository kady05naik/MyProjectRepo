//firebase emulators:start
const functions = require("firebase-functions");
const express=require("express");
const cors=require("cors");
const { response } = require("express");
const stripe = require("stripe")('sk_test_51KUafTSCmKYAYW8vrongO0FPiFWlD5v8jdhYxXhXVLG6rJXUwdLvuUuZABaich5UM85sODpVi6cz4CxWjcP0z2LW00gEC5edtS')

//API

//App config
const app =express();

//Middlewares
app.use(cors({ origin:true }));
app.use(express.json());


//API routes
app.get('/', (request,response) => response.status(200).send('hello world'))
app.post('/payments/create',async(request,response)=>{
    const total=request.query.total;

    console.log("Payment Request Received BOOM !!! for this amount >>>", total)

    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency:"inr",
    });

    //ok-created

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
//Listen commmand
exports.api=functions.https.onRequest(app);

//Example Endpoint
//http://localhost:5001/samarthenterprise-a2d7e/us-central1/api
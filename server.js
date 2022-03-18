import express from "express";
import {MongoClient} from "mongodb";
import dotenv from "dotenv";
const app=express();
app.use(express.json());
dotenv.config();

const url=process.env.url;

async function createConnection(){
    const client=new MongoClient(url);
    await client.connect();
    return client;
}

export const client = await createConnection();

app.get("/",async function (req,res)  {
    const data= await client.db("bike-rental").collection("bikes").find().toArray();
    res.send(data);
})
app.listen(4000, () => {

console.log(`Example app listening on port `)

})
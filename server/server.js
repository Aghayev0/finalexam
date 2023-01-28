const express = require('express')
const app = express()
const PORT = 5522
const mongoose = require("mongoose");
let cors = require('cors')
mongoose.set('strictQuery', false);
app.use(express.json())
app.use(cors())
const cosmeticSchema = new mongoose.Schema({
    name:String,
    image:String,
    price:String
})
const cosmeticModel = new mongoose.model("cosmetics" , cosmeticSchema)
mongoose.connect('mongodb+srv://Emin:0GqsmdXmrcXFowB1@backend.nvmlis2.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log("database is working")).catch((err)=>console.log(err))

app.get('/api/get' , async (req,res)=>{
    let cosmetics = await cosmeticModel.find({})
    res.send(cosmetics)
})

app.post('/api/post' , async (req,res)=>{
let newCosmetic = cosmeticModel({...req.body})
await newCosmetic.save()
res.status(200).send({message:"added successfully" , cosmetics:newCosmetic})

})
app.delete('/api/delete/:id' , async (req,res)=>{
let { id } = req.params
let deletedCosmetic = await cosmeticModel.findByIdAndDelete(id)
res.send(deletedCosmetic)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
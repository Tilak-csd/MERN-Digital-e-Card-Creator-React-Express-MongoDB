const express = require('express')
const cors = require('cors')
const {inputSchema} = require('./form')
const { Card } = require('./db')
const app = express()

app.use(express.json())
app.use(cors())

app.post('/card', async (req, res) =>{
    const playLoad = req.body
    const parsed = inputSchema.safeParse(playLoad)
    if (!parsed.success){
        return res.status(400).json({message : "Bad Request"})
    }
    const new_card = {
        name : playLoad.name,
        description : playLoad.description,
        interest : playLoad.interest,
        links : {
            linkedIn : playLoad.links.linkedIn,
            instagram : playLoad.links.instagram
        }
    }

    const card = await new Card(new_card)
    await card.save()
    res.status(200).json({message : "New Card Inserted"})

})

app.get('/cards', async (req, res)=>{
    const playLoad = await Card.find()
    if(playLoad === 0){
        return res.status(404).json({message : "No Card Found"})
    }
    res.status(200).json(playLoad)
})

app.listen(3000, ()=>{
    console.log("I am Live.");
    
})
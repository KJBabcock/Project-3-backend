// importing statements
const express = require('express') // commonJS import statement
const methodOverride = require('method-override');
const cors = require("cors")
require("dotenv").config();
require('./config/db.connection')
// CONTROLLER IMPORTS

// app configuration
const app = express()
const PORT = process.env.PORT;


// MIDDLEWARE
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Model import
const Strategy = require("./models/Strategy");

// MIDDLEWARE - code that runs for every request (before routes)
app.use(cors())

// Router - Products

//  home route
app.get("/", async (req, res) => {
    const strategies = await Strategy.find({});
    // send projects via JSON
    res.json(strategies);
});

//post
app.post('/', async (req, res) => {
    console.log(req.body)
    try {
        res.json(await Strategy.create(req.body));
    }catch (error) {
        res.status(400).json(error)
    }
});

//delete
app.delete('/:id', async (req, res) => {
    try{
        res.json(await Strategy.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

//edit
app.put("/:id", async (req, res) => {
    try{
        res.json(await Strategy.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    } catch(error) {
        res.status(400).json(error);
    }
});

// SERVER
app.listen(PORT, () => console.log('starting server at port:', PORT))
// exports module.exports = app
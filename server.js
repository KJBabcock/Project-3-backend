// importing statements
const express = require('express') // commonJS import statement
const methodOverride = require('method-override');
require('./config/db.connection')
// CONTROLLER IMPORTS

// app configuration
const app = express()
const PORT = 4000

// MIDDLEWARE
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Model import
const db = require("./models/Strategy");

// MIDDLEWARE - code that runs for every request (before routes)
// Router - Products

//  home route
app.get("/", async (req, res) => {
    const strategies = await db.find({});
    // send projects via JSON
    res.json(strategies);
});

//post
app.post('/', async (req, res) => {
    try {
        res.json(await Strategy.create(req.body));
        console.log(req);
        console.log(body)
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
        res.json(await Strategy.findByIdAndUpdate(req.params.id, req.body, {new:true})
    } catch(error) {
        res.status(400).json(error);
    }
});

// SERVER
app.listen(4000, () => console.log('starting server at port:', PORT))
// exports module.exports = app
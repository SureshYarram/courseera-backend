const express = require("express");

const router = express.Router();

const Serach = require("../Models/search.model");


router.post("/", async(req,res)=>{

    const searchitem = await Serach.create(req.body);
    
    res.status(200).send(searchitem)

})
router.get("/", async(req,res)=>{

    const searchitem = await Serach.find().lean().exec();
    
    res.status(200).send(searchitem)

})
router.get("/:id", async(req,res)=>{

    const searchitem = await Serach.findById(req.params.id).lean().exec();
    
    res.status(200).send(searchitem)

})


module.exports = router;
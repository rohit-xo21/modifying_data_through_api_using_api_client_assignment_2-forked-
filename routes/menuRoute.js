const express = require("express");
const MenuItem = require("../models/menuItem");
const router = express.Router();


router.put('/:id', async (req,res) => {
    try {
        const { name, description, price } = req.body;

        const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, { name,description,price }, {new:true});

        if (!updatedItem) {
            return res.status(404).json({ message: "Menu item not found" });
        }

        res.status(200).json(updatedItem);


    } catch(err){
        res.status(500).json({message: err.message})
    }
})

router.delete('/:id', async (req,res) => {
    try {
        const deletedItem = await MenuItem.findByIdAndDelete(req.params.id);

        if (!deletedItem) {
            return res.status(404).json({ message: "Menu item not found" });
        }
        
        res.status(200).json({ message: "Menu item deleted successfully" });
    }catch (error) {
        res.status(500).json({ message: error });
    }
})



module.exports = router;
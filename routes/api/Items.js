const express = require('express');
const router = express.Router();


const Item = require('../../models/Item');

//@route get api/items
//@desc Get all items
//@access public
router.get('/', (req, res) =>{
    Item.find()
        .then(items => res.json(items));
});

//@route post api/items
//@desc create a post
//@access public
router.post('/', (req, res) =>{
    const newItem = new Item({
            name: req.body.name,
            price: req.body.price,
            salePrice: req.body.salePrice,
            discount: req.body.discount,
            pictures: req.body.pictures,
            shortdetails: req.body.shortdetails,
            description: req.body.description,
            stock: req.body.stock,
            new:req.body.new,
            sale:req.body.sale,
            category:req.body.category,
            color:req.body.color,
            size:req.body.size,
            tags:req.body.tags,
            varients: req.body.varients
    });

    newItem.save().then(item => res.json(item));
});


//@route Delete api/items
//@desc Delete a item
//@access public
router.delete('/:id', (req, res) =>{
    Item.findById(req.params.id)
    .then(Item => item.remove().then(() => res.json("item removed successfully")))
    .catch(err => res.status(404).json("item doesnt exist"))
});


module.exports = router;
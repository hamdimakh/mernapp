// require express
const express = require("express");
const Contact = require("../model/Contact");

// route
const router = express.Router()





///////// Routes 

/**
 * @description: testing route
 * @path : http://localhost:7676/api/contact/test
 * @method : GET 
 * @data : no data
 */
router.get('/test', (req, res) => {
    res.send('hello world') 
})






/**
 * @description: add contact
 * @path : http://localhost:7676/api/contact/add
 * @method : POST 
 * @data : req.body
 */
router.post('/add', async (req, res) => {
    try {
        const {name, email, phone} = req.body;
        const newContact = new Contact({name, email, phone})
        await newContact.save()
        res.status(200).send({msg: 'Contact added succesfully ...', newContact})
    } catch (error) {
        res.status(400).send({msg: 'Cannot add contact !!', error})
    }
})





/**
 * @description: get all contact
 * @path : http://localhost:7676/api/contact/all
 * @method : GET
 * @data : no data
 */
router.get('/all', async (req, res) => {
    try {
        const listContacts = await Contact.find();
        res.status(200).send({msg: 'This is the list of all contacts ...', listContacts})
    } catch (error) {
        res.status(400).send({msg: 'Cannot get all of the contacts !!', error})
    }
})




/**
 * @description: get one contact
 * @path : http://localhost:7676/api/contact/id
 * @method : GET
 * @data : no data
 */
router.get('/:id', async (req, res) => {
    try {
        const contactToGet = await Contact.findOne({_id: req.params.id})
        res.status(200).send({msg: 'I get the contact ...', contactToGet})
    } catch (error) {
        res.status(400).send({msg: 'Cannot get contact with this id !!', error})
    }
})



/**
 * @description: delete contact
 * @path : http://localhost:7676/api/contact/:_id
 * @method : DELETE
 * @data : req.params._id
 */
router.delete('/:_id', async (req,res) => {
    try {
        const {_id } = req.params;
        await Contact.findOneAndDelete({_id})
        res.status(200).send({msg: "Contact deleted ..."})
    } catch (error) {
        res.status(400).send({msg: "Cannot delete contact with this id !!"})

    }
})






/**
 * @description: edit contact
 * @path : http://localhost:7676/api/contact/:_id
 * @method : PUT
 * @data : req.params._id & req.body
 */
router.put('/:_id', async (req,res ) => {
    try {
        const { _id} = req.params;
        const result = await Contact.updateOne({_id}, {$set: {... req.body}})
        res.status(200).send({msg: "Contact updated ..."})
    } catch (error) {
        res.status(400).send({msg: "Cannot update contact with this id !!!", error})
    }
})












// export
module.exports= router;
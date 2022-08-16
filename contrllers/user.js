const User = require("../model/User")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");





exports.register = async (req,res) => {
    try {
        // req.body = newUser
        const {name, email, password, phone} = req.body
        const foundUser = await User.findOne({email})
        if (foundUser) {
            return res.status(400).send({errors: [{ msg:"Email should be unique try again"}] })
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds)
        // const newUser
        const newUser = new User({...req.body})
        newUser.password = hashedPassword;
        // save
        await newUser.save()
        // creatio token
        const token = jwt.sign(
            {
                id: newUser._id
            },
            process.env.SECRET_KEY,
            {expiresIn: "1h"}
        )
        
        res.status(200).send({msg: "Register successfully ..", user: newUser, token})
    } catch (error) {
        return res.status(400).send({errors: [{ msg:"Cannot register try again"}]})
    }
}
exports.login = async (req,res) => {
    try {
        const { email, password} = req.body;
        // check if email exists
        const foundUser = await User.findOne({email})
        if (!foundUser) {
            return res.status(400).send({errors: [{ msg:"Bad credential !!"}] })
        }
        const checkPassword = await bcrypt.compare(password, foundUser.password)
        if (!checkPassword) {
            return res.status(400).send({errors: [{ msg:"Bad credential !!"}] })
        }
            
                // creatio token
                const token = jwt.sign(
                    {
                        id: foundUser._id
                    },
                    process.env.SECRET_KEY,
                    {expiresIn: "1h"}
                )
        res.status(200).send({msg: "login seccessfully ...", user: foundUser, token})
    } catch (error) {
        return res.status(400).send({errors: [{ msg:"Cannot login !!"}]})
    }
}



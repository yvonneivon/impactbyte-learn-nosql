const { User } = require("../../models");
const bcrypt = require("bcryptjs");

module.exports = {
    getAll: async (require, res) => {
        try {
            const users = await User.find({});

            res.status(200).json({ message: 'Get all users ',
        data: users });
        } catch (error){
            console.log(error);   
        }
    },
    create: async (req, res) => {
        try {
            const { fullname, username, password, email } = req.body;

            bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, async function(err, hash) {
            const users = await User.create({
                fullname,
                username,
                email,
                password: hash,
            });

            res.status(201).json({ message: "New user added!",
            data: users, 
    });
        });
            });
            } catch (error) {
                console.log(error);    
            }
    },
    login: async (req, res) => {
        const { email, password } = req.body;

        const result = await User.findOne({ email:email })

        bcrypt.compare(password, result.password).then((response) =>
        {
            if (response === true) {
                res.status(200).send(result);
            } else {
                res.status(401).send({
                    message: "You're not allowed to enter this API",
                });
            }
        })
    }
};
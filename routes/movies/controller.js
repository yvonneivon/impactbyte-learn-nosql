const { Movie } = require("../../models");

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Movie.find({}).populate("userID");

            res.status(200).json({ message: 'Get all movies',
            data: result });
        } catch (error){
            console.log(error);   
        }
    },

    create: async (req, res) => {
        try {
            const { title, genre, release_year, userID, poster } = req.body;

            const result = await Movie.create({
                title,
                genre,
                release_year,
                poster,
                userID,
        });
            res.status(201).json({ message: "New movie added!",
            data: result, 
        });
            } catch (error) {
                console.log(error);    
            }
    },

    edit: async (req, res) => {
        try{
            const { id } = req.params;
            const { title, genre, release_year, poster } = req.body;

            const result = await Movie.findByIdAndUpdate(id, { $set: {
                title,
                genre,
                release_year,
                poster,
            },
        });

        res.status(200).json ({
            message: `Edit movie with ID: ${id} is succeed!`,
            data: result,
        });
        } catch (error) {
            console.log(error);
        }
    },

    deleteByID: async (req, res) => {
        try {
            const { id } = req.params;

            const result = await Movie.findByIdAndRemove(id);

            res.status(200).json({
                message: `Movie with id ${id} is deleted!`,
                data: result,
            });
        } catch (error) {
            console.log(error);   
        }
    },
};
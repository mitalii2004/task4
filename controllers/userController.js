const Models = require("../models/index");

Models.postModel.belongsTo(Models.userModel, {
    foreignKey: "userId",
    as: "userPost"
})

Models.userModel.hasMany(Models.postModel, {
    foreignKey: "userId",
    as: "postUser"
})



module.exports = {
    insert: async (req, res) => {
        try {
            console.log(req.body)
          let objToSave = {
            name: req.body.name,
          };
          let response = await Models.userModel.create(objToSave);
          return res.status(201).send(response);
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
 


    findRecord: async (req, res) => {
        try {
            let response = await Models.userModel.findOne({
                where: { id: req.body.id },
                raw: true,
            });
            return res.send(response);
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    insertPost: async (req, res) => {
        try {
            console.log(req.body)
            let objToSave = {
                post: req.body.post,
                userId: req.body.userId
            };
            let response = await Models.postModel.create(objToSave);
            return res.status(201).send(response);
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    findPostByUser: async (req, res) => {
        try {
            let response = await Models.userModel.findAll({
                include: [
                    {
                        model: Models.postModel,
                        required: false,
                        as: "postUser"
                    }
                ]
            })
            res.send(response);
        } catch (error) {
            console.log(error)
            throw error
        }
    },
    
    findUserByPost: async (req, res) => {
        try {
            let response = await Models.postModel.findAll({
                include: [
                    {
                        model: Models.userModel,
                        required: false,
                        as: "userPost"
                    }
                ]
            })
            res.send(response);
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}
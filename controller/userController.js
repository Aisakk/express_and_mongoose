let userController = {};
const User = require('../models/userModel');


userController.index = async (req,res) =>{
    let all_users = await User.find({})
    res.json({
        all_users
    })
}

userController.create = async (req,res)=>{
    let { username, testing, password} = req.body
    let new_user = await User.create({username, testing, password})
    res.json({
        message: 'El usuario ha sido creado',
        new_user,
    })
}

userController.show = async (req,res)=>{
    let search_user = await User.findById(req.params.id)
    res.json({
        search_user
    })
}

userController.update = async (req,res)=>{
    let {username, testing} = req.body
    let update_user = await User.findByIdAndUpdate(req.params.id,{$set:{username, testing}})
    res.json({
        message: 'El usuario ha sido updateado',
        update_user
    })
}

userController.delete = async (req,res)=>{
    let delete_user = await User.findByIdAndDelete(req.params.id)
    res.json({
        message: 'El usuario ha sido eliminado',
        delete_user
    })
}



module.exports = userController;
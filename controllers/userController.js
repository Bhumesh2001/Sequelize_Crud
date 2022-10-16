const User = require('../model/user')

const addUser = async(req,res)=>{   
    try {
        let userdata = req.body
        if(userdata.length > 1){
            const data = await User.bulkCreate(userdata)
            res.json({mesg:'data has been save successfully...',data:data})
        }else{
            const dataUser = await User.create(userdata)
            res.json({message:'data saved successfully...',data:dataUser})
        }
    } catch (error) {
        console.log(error);
        res.json({message:'error occured'})
    }
}

const ReadUser = async(req,res)=>{
    try {
        const ReadData = await User.findAll({})
        res.json({data:ReadData})
    } catch (error) {
        res.json({message:'error occured'})
        console.log(error);
    }
}

const ReadSingleUser = async(req,res)=>{
    try {
        const readUser = await User.findByPk(req.params.id)
        console.log(readUser);
        if(readUser != null){
            res.json({info:readUser})
        }else{
            res.json({mesg:'User Data Not Found'})
        }
    } catch (error) {
        res.json({message:'error occured'})
    }
}

const updateUser = async(req,res)=>{
    try {
        var data = await User.update(req.body,{where:{id:req.params.id}})
        if(data != 0){
            res.json({mesg:'data has been updated successfully....',info:data})
        }else{
            res.json({mesg:'User Data Not Found'})
        }
    } catch (error) {
        res.json({message:'error occured'})
        console.log(error);
    }
}

const deleteUser = async(req,res)=>{
    try {
        let userInfo = await User.destroy({where:{id:req.params.id}})
        if(userInfo != 0){
            res.json({message:'data has been deleted succesfully....',info:userInfo})
        }else{
            res.json({mesg:'User Data Not Found'})
        }
    } catch (error) {
        res.json({message:'error occured'})
    }
}
module.exports = {
    addUser,
    ReadUser,
    ReadSingleUser,
    updateUser,
    deleteUser
}
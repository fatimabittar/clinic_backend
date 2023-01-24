const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminIdModel.js')

//@desc Get Admins
//@route GET/api/admin
//@access Private 
const getAdmins= asyncHandler( async (req,res)=>{
    const admins = await Admin.find()
    res.status(200).json(admins)
})


//@desc Create Admin
//@route SET/api/admins
//@access Private 

const setAdmin= asyncHandler( async (req,res)=>{
    if (!req.body.user_name ||!req.body.email ||!req.body.password){
        res.status(400)
        // by default the error handler gives an htmlpage 
        throw new Error('please add a text field')
        //to change the default express error handeler
    }
    const admin = await Admin.create(req.body)
    res.status(200).json(admin)
})

//@desc Update admin
//@route PUT/api/admins/:id
//@access Private 
const updateAdmin = asyncHandler (async (req,res)=>{
    const admin = await Admin.findById(req.params.id)
        if (!admin){
           res.status(400)
           throw new Error ('Admin not found')
        }
        const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id,req.body,
             {new: true})
    
    res.status(200).json(updatedAdmin)
})

//@desc Delete admin
//@route DELETE/api/admins/:id
//@access Private 
const deleteAdmin= asyncHandler (async (req,res)=>{
    const admin = await Admin.findById(req.params.id)
    if(!admin){
        res.status(400)
        throw new Error('Admin not found')
    }
    await admin.remove()
    res.status(200).json({id: req.params.id})
})


module.exports = {
getAdmins,
setAdmin,
updateAdmin,
deleteAdmin,   
}
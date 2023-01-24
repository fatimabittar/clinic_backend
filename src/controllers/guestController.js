const asyncHandler = require('express-async-handler')
const Guest = require ("../models/guestModel.js") // this Goal will have all the mongoose methods 
//@desc Get guests
//@route GET/api/guests
//@access Private 
const getGuests= asyncHandler( async (req,res)=>{
    const guests = await Guest.find()
    res.status(200).json(guests)
})


//@desc Create Guests
//@route SET/api/guests
//@access Private 
const setGuest= asyncHandler( async (req,res)=>{
    if (!req.body.full_name || !req.body.Message || !req.body.phone  || req.body.Doctorname ){
        res.status(400)
        // by default the error handler gives an htmlpage 
        throw new Error('please add a text field')
        //to change the default express error handeler
    }
    const guest = await Guest.create(req.body)
    res.status(200).json(guest)
})

//@desc Update goal
//@route PUT/api/goals/:id
//@access Private 
const updateGuest= asyncHandler (async (req,res)=>{
    const guest = await Guest.findById(req.params.id)
        if (!guest){
           res.status(400) 
           throw new Error ('Guest not found')
        }
        const updatedGuest = await Guest.findByIdAndUpdate(req.params.id,req.body,
             {new: true})
    
    res.status(200).json(updatedGuest)
})

//@desc Delete goal
//@route DELETE/api/goals/:id
//@access Private 
const deleteGuest= asyncHandler (async (req,res)=>{
    const guest = await Guest.findById(req.params.id)
    if(!guest){
        res.status(400)
        throw new Error('Guest not found')
    }
    await guest.remove()
    res.status(200).json({id: req.params.id})
})


module.exports = {
getGuests,
setGuest,
updateGuest,
deleteGuest,   
}
const express= require('express');
const router = express.Router();
const 
{   getAdmins,
    setAdmin,
    updateAdmin,
    deleteAdmin,
}= require("../controllers/adminController.js");

router.route('/').get(getAdmins).post(setAdmin)
router.route('/:id').put(updateAdmin).delete(deleteAdmin)


module.exports = router

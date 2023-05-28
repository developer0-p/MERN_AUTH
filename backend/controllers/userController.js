import asyncHandler from 'express-async-handler'
// @description      Auth user/set token
// @route            POST /api/users/auth
// @access           Public
const authUser = asyncHandler(async (req, res) => {

    //to test
    res.status(401)
    throw new Error('something went wrong')


    res.status(200).json({ message: "Auth user backend" })
})

export {
    authUser
}
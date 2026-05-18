async function getCurrentUser(req,res) {
    try {
        if(!req.user){
            return res.status(404).json({
                message:"User not found"
            })
        }
        return res.json(req.user)
    } catch (error) {
          return res.status(500).json({ 
            message: "Internal Server Error",
        });   
    }
}
module.exports = {getCurrentUser}
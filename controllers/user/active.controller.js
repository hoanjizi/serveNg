const VerifiedUser = require('../../models/verifyUser.model')
const ProfileUser = require('../../models/user/profileUser.model')
const User = require('../../models/user/users.model.js')
exports.updateVeried = (req,res)=>{
    return VerifiedUser.findOneAndUpdate({stringUUID:req.params.token},{verified:true},{new: true})
    .then(data=>{
        return User.findById(data.idUser).then(rlt=>{
            return User.findByIdAndUpdate(data.idUser,{verified:true},{new: true}).then(res=>{
                let profile = new ProfileUser({
                    idUser : data.idUser
                })
                return profile.save().then(data=>{
                    return {msg : 'Verified'}
                })
            })
        })
    })
}
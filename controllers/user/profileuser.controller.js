const ExpressError = require('../../models/error.model')
const ProfileUser = require('../../models/user/profileUser.model')
const Viewmodel = require('../../viewmodels/viewmodels')
const Ip = require('../../utils/utils')
exports.updateProfileUser = (req,res)=>{
    return ProfileUser.findOneAndUpdate({idUser:req.params.iduser},
        {lastName:req.body.lastName,fisrtName:req.body.fisrtName,img:req.body.img,address:req.body.address,phone:req.body.phone},
        {new: true}).then(data=>{
        return Viewmodel.viewmodels.profileUser(data)
    })
}
exports.readProfile=(req,res)=>{
    return ProfileUser.findOne({idUser:req.params.iduser}).then((data)=>{
        return Viewmodel.viewmodels.getprofileUser(data)
    })
}
exports.updateImageProfile=(req,res)=>{
    if(!req.files)
    throw new ExpressError.BadRequest('can not find file')
    let imgfile = req.files.imgprofile
    let nameformat = imgfile.replace(/[^A-Z0-9.]+/ig, "_");
    imgfile.mv(__dirname + '/public/images/userprofile'+nameformat,(err,rlt)=>{
        if(err) throw ExpressError.BadRequest('err image')
        return ProfileUser.findOneAndUpdate({idUser:req.params.iduser},{img:Ip.IP.ip+'public/images/userprofile'+nameformat},{new:true})
        .then(data=>{
            return {msg:'updated'}
        })
    })

}

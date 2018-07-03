class viewmodels {
    static usertoken(idUser,token,role)
    {
        return {idUser,token,role}
    }
    static listuser(users)
    {
        let arrayUsers = []
        users.forEach(e => {
            arrayUsers.push({id:e._id,username:e.username,age:e.age,email:e.email,address:e.address,img:e.img})
        });
        return arrayUsers
    }
    static profileUser(users)
    {
       
        return {lastName:users.lastName,fisrtName:users.fisrtName,img:users.img,address:users.address,phone:users.phone}

    }
    static getprofileUser(users)
    {
        return {lastName:users.lastName,fisrtName:users.fisrtName,img:users.img,address:users.address,phone:users.phone}
    }
}
module.exports = {
    viewmodels
}

/*

function getValue(input)

input "a" return 1
input "b" return 1
input "ab" return 2
input "hoang" return 4


*/
class viewmodels {
    static usertoken(idUser, token, role, nickname) {
        return { idUser, token, role, nickname }
    }
    static listuser(users) {
        let arrayUsers = []
        users.forEach(e => {
            arrayUsers.push({ id: e._id, username: e.username, age: e.age, email: e.email, address: e.address, img: e.img })
        });
        return arrayUsers
    }
    static profileUser(users) {

        return { lastName: users.lastName, fisrtName: users.fisrtName, img: users.img, address: users.address, phone: users.phone }

    }
    static getprofileUser(users) {
        return { lastName: users.lastName, fisrtName: users.fisrtName, img: users.img, address: users.address, phone: users.phone }
    }
}
class viewmodelsNotifi {
    static getThreeNotifi(notifi) {
        let arrayNotifi = []
        notifi.forEach(e => {
            arrayNotifi.push({ id: e._id, title: e.title, content: e.content,contentmini: e.contentmini })
        });
        return arrayNotifi
    }
    static getNotifiId(notifi){
        return {id: notifi._id, title: notifi.title, content: notifi.content,contentmini: notifi.contentmini}
    }
}
module.exports = {
    viewmodels, viewmodelsNotifi
}

/*

function getValue(input)

input "a" return 1
input "b" return 1
input "ab" return 2
input "hoang" return 4


*/
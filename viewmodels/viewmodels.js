class viewmodels {
    static usertoken(idUser, token, role, nickname) {
        return { idUser, token, role, nickname }
    }
    static listuser(users) {
        let arrayUsers = []
        users.forEach(e => {
            arrayUsers.push({ id: e._id, username: e.username, email: e.email, role: e.role, nickname: e.nickname })
        });
        return arrayUsers
    }
    static user(e) {
        return { id: e._id, username: e.username, email: e.email, role: e.role, nickname: e.nickname }
    }
    static profileUser(users) {

        return { lastName: users.lastName, fisrtName: users.fisrtName, img: users.img, address: users.address, phone: users.phone }

    }
    static getprofileUser(users) {
        return { lastName: users.lastName, fisrtName: users.fisrtName, img: users.img, address: users.address, phone: users.phone }
    }
    static message(text) {
        return { message: text }
    }
    static mess(text) {
        return text;
    }
}
class viewmodelsNotifi {
    static getThreeNotifi(notifi) {
        let arrayNotifi = []
        notifi.forEach(e => {
            arrayNotifi.push({ id: e._id, title: e.title, content: e.content, contentmini: e.contentmini })
        });
        return arrayNotifi
    }
    static getNotifiId(notifi) {
        return { id: notifi._id, title: notifi.title, content: notifi.content, contentmini: notifi.contentmini }
    }
    static getCountPage(count) {
        return { count: count }
    }
    static getFiveNotifi(notifi) {
        let arrayNotifi = []
        notifi.forEach(e => {
            arrayNotifi.push({ id: e._id, title: e.title, content: e.content, contentmini: e.contentmini })
        });
        return arrayNotifi
    }
    static getUserDanhGia(notifi) {
        let arrayNotifi = []
        notifi.forEach(e => {
            arrayNotifi.push({ id: e.id })
        });
        return arrayNotifi
    }
}
class viewmodelsDanhGia {
    static getAllDanhGia(news) {
        let arrayNews = []
        news.forEach(e => {
            arrayNews.push({ id: e._id, tieuDe: e.tieuDe, danhGiaContent: e.danhGiaContent, mucDo: e.mucDo, tenFile: e.tenFile, createdAt: e.createdAt })
        });
        return arrayNews
    }
}
class viewmodelsDanhGiaChiDinh {
    static getDanhGiaChiDinh(news) {
        let arrayNews = []
        news.forEach(e => {
            arrayNews.push({ id: e._id, trangThai: e.trangThai, idNews: e.idNews, idUser: e.idUser})
        });
        return arrayNews
    }
}
class viewmodelsNews {
    static getNewsWithid(news) {
        let arrayNews = []
        news.forEach(e => {
            arrayNews.push({ id: e._id, iduser: e.id, tieude: e.tieude, tacgia: e.tacgia, tukhoa: e.tukhoa, tomtat: e.tomtat, tenfile: e.tenfile, sobao: e.sobao, trangthai: e.trangthai, createdAt: e.createdAt, idUserDanhgia: e.idUserDanhgia })
        });
        return arrayNews
    }
    static getNewsWithIdMongo(e) {
        return { id: e._id, iduser: e.id, tieude: e.tieude, tacgia: e.tacgia, tukhoa: e.tukhoa, tomtat: e.tomtat, tenfile: e.tenfile, sobao: e.sobao, trangthai: e.trangthai, createdAt: e.createdAt, idUserDanhgia: e.idUserDanhgia }
    }
}
module.exports = {
    viewmodels, viewmodelsNotifi, viewmodelsNews, viewmodelsDanhGia,viewmodelsDanhGiaChiDinh
}

/*

function getValue(input)

input "a" return 1
input "b" return 1
input "ab" return 2
input "hoang" return 4


*/
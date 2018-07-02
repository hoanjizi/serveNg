module.exports.randomtoken = (number) => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < number; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
module.exports.IP = {
    ip:'http:/localhost:3001/'
}
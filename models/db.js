const Sequelize = require('sequelize');
const sequelize = new Sequelize('sys', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
sequelize.authenticate().then(function () {
    console.log("Sequelize conectado")
}).catch(function (erro) {
    console.log("Sequelize falhou: " + error)
})
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

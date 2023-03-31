const db = require('./db')
const killer = db.sequelize.define
    ('killers', {
        killer_id: { type: db.Sequelize.INTEGER },
        killer_en: { type: db.Sequelize.TEXT }
    });

module.exports = killer
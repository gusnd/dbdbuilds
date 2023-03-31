const db = require('./db')
const perks = db.sequelize.define
    ('perks', {
        perk_id: { type: db.Sequelize.INTEGER },
        killer_id: { type: db.Sequelize.INTEGER },
        perk_en: { type: db.Sequelize.TEXT },
        perk_desc: { type: db.Sequelize.TEXT }

    });

module.exports = perks
const db = require('./db')
const addons = db.sequelize.define
    ('addons', {
        addon_id: { type: db.Sequelize.INTEGER },
        killer_id: { type: db.Sequelize.INTEGER },
        Descripion: { type: db.Sequelize.TEXT },
        name: { type: db.Sequelize.TEXT }

    });

module.exports = addons
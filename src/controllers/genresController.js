const db = require('../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genresss => {
                return res.status(200).json ({
                    meta:{
                        status:200,
                        total: genresss.length,
                        url: 'api/genres'
                    } ,
                    data:genresss
                    
                })
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.render('genresDetail.ejs', {genre});
            });
    }

}

module.exports = genresController;
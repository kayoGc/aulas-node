const db = require('../models');
const Tutorial = db.tutorials;
const Op = db.sequelize.Op;

// cria e salva um tutorial
exports.create = (req, res) => {

    // se a requisição não tiver mandado um titulo
    if (!req.body.title) {
        // retorna error 404
        res.status(404).send({
            message: "Conteudo não pode ficar em banco"
        });
        return;
    }

    // cria um tutorial
    const tutorial = {
        title: req.body.title,
        description: req.body.descripion,
        published: req.body.published ? req.body.published : false
    };


    Tutorial.create(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Houve um erro ao salvar o tutorial"
            });
        });
};

// encontra todos os tutoriais
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title : { [Op.like]: `%${title}%` } } : null;

    Tutorial.findAll({ where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Houve um erro ao buscar tutoriais"
            });
        });
};


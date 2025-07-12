import db from "../config/db.config.js";
const Tutorial = db.tutorials;
const { Op } = db.sequelize.Op;

// cria e salva um tutorial
export const create = async (req, res) => {

    try {
        const { title, description, published } = req.body;

        if (!title) {
            return res.status(400).json({ message: "Conteúdo não pode estar vazio!" });
        }

        const tutorial = await Tutorial.create()({
            title, 
            description,
            published: published ?? false
        })

        res.status(200).json(tutorial);
    } catch (error) {   
        res.status(500).json({ message: error.message || "Erro ao criar o tutorial"});
    }
};

export const findOne = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Tutorial.findByPk(id);

        if (!data) {
            return res.status(404).json({ message: `Tutorial com id=${id} não encontrado`}); 
        }

        res.json(data);
    } catch (error) {
        res.status(500).json({ message: `Erro ao buscar tutorial com id=${id}`});
    }
}

// encontra todos os tutoriais
export const findAll = (req, res) => {
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


export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { updated } = await Tutorial.update(req.body, { where: { id }});

        if (updated) {
            res.json({ message: "Tutorial atualizado com sucesso"});
        } else {
            res.status(404).json({ message: `Não foi possível atualizar tutorial com id=${id}`})
        }
    } catch (error) {
        res.status(500).json({ message: `Erro ao atualizar tutorial com id=${id}`});
    }
};

export const deleteTutorial = async (req, res) => {
}

export const deleteAll = async (req, res) => {
    try {
        const numDeleted = await Tutorial.destroy({ where: {}, truncate: false});
        
        res.json({ message: `${numDeleted} tutoriais foram deletados com sucesso`});
    } catch (error) {
        res.status(500).json({ message: error.message || "Erro ao apagar todos os tutorias"});
    }
}

export const findAllPubished = async (req, res) => {
    try {
        const data = await Tutorial.findAll({ where: { published: true}});
        res.json(data);
    } catch (error) {
        res.json({ message: error.message || "Erro ao pegar tutoriais publicados"});
    }
}

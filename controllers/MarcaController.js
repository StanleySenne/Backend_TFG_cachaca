const Marca = require("../models/Marca");

//helpers
const getToken = require("../helpers/get-token");
const getUserByToken = require("../helpers/get-user-by-token");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = class MarcaController {
  // create a Marca

  static async create(req, res) {
    const {
      nome,
      marca_produto,
      categoria,
      descricao,
      fabricante,
      caracteristica,
      preco,
    } = req.body;

    const images = req.files;

    const available = true;

    //images upload

    //validations
    if (!nome) {
      res.status(422).json({ message: "O nome é obrigatório!" });
      return;
    }
    if (!marca_produto) {
      res.status(422).json({ message: "O marca_produto é obrigatório!" });
      return;
    }
    if (!categoria) {
      res.status(422).json({ message: "O categoria é obrigatório!" });
      return;
    }
    if (!descricao) {
      res.status(422).json({ message: "A descricao é obrigatória!" });
      return;
    }
    if (!fabricante) {
      res.status(422).json({ message: "O fabricante  é obrigatório!" });
      return;
    }

    if (!caracteristica) {
      res.status(422).json({ message: "A caracteristica é obrigatória!" });
      return;
    }

    if (!preco) {
      res.status(422).json({ message: "O fabricante  é obrigatório!" });
      return;
    }

    if (images.length === 0) {
      res.status(422).json({ message: "A imagem é obrigatoria!" });
      return;
    }

    // get a marca owner

    const token = getToken(req);
    const user = await getUserByToken(token);

    //create a marca
    const marca = new Marca({
      nome,
      marca_produto,
      categoria,
      descricao,
      fabricante,
      caracteristica,
      preco,
      available,
      images: [],
      user: {
        _id: user._id,
        image: user.image,
        phone: user.phone,
      },
    });

    images.map((image) => {
      marca.images.push(image.filename);
    });

    try {
      const newMarca = await marca.save();
      res.status(201).json({
        message: "Marca Cadastrada Com Sucesso!",
        newMarca,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async getAll(req, res) {
    const marcas = await Marca.find().sort("-createdAt");

    res.status(200).json({
      marcas: marcas,
    });
  }

  // get all user marcas
  static async getAllUserMarcas(req, res) {
    // get user
    const token = getToken(req);
    const user = await getUserByToken(token);

    const marcas = await Marca.find({ "user._id": user._id }).sort(
      "-createdAt",
    );

    res.status(200).json({
      marcas,
    });
  }

  static async getAllUserCompras(req, res) {
    // get user
    const token = getToken(req);
    const user = await getUserByToken(token);

    const marcas = await Marca.find({ "compra._id": user._id }).sort(
      "-createdAt",
    );

    res.status(200).json({
      marcas,
    });
  }

  static async getMarcaById(req, res) {
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: "ID inválido!" });
      return;
    }

    // check if marca exist
    const marca = await Marca.findOne({ _id: id });

    if (!marca) {
      res.status(404).json({
        message: "Marca não encontrada!",
      });
    }

    res.status(200).json({
      marca: marca,
    });
  }

  static async removeMarcaById(req, res) {
    const id = req.params.id;

    // check if id is valid
    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: "ID inválido!" });
      return;
    }

    // check if pet exists
    const marca = await Marca.findOne({ _id: id });

    if (!marca) {
      res.status(404).json({ message: "Cachaça não encontrada!" });
      return;
    }

    // check if user registered this pet
    const token = getToken(req);
    const user = await getUserByToken(token);

    if (marca.user._id.toString() != user._id.toString()) {
      res.status(404).json({
        message:
          "Houve um problema em processar sua solicitação, tente novamente mais tarde!",
      });
      return;
    }

    await Marca.findByIdAndRemove(id);

    res.status(200).json({ message: "cachaça removido com sucesso!" });
  }

  static async updateMarca(req, res) {
    const id = req.params.id;
    const nome = req.body.nome;
    const marca_produto = req.body.marca_produto;
    const categoria = req.body.categoria;
    const descricao = req.body.descricao;
    const fabricante = req.body.fabricante;
    const caracteristica = req.body.caracteristica;
    const preco = req.body.preco;
    const images = req.files;
    const available = req.body.available;

    const updateData = {};

    // check if marca exists
    const marca = await Marca.findOne({ _id: id });

    if (!marca) {
      res.status(404).json({ message: "Marca não encontrada!" });
      return;
    }

    // check if user registered this pet
    const token = getToken(req);
    const user = await getUserByToken(token);

    if (marca.user._id.toString() != user._id.toString()) {
      res.status(404).json({
        message:
          "Houve um problema em processar sua solicitação, tente novamente mais tarde!",
      });
      return;
    }

    // validations

    if (!nome) {
      res.status(422).json({ message: "O nome é obrigatório!" });
      return;
    } else {
      updateData.nome = nome;
    }

    if (!marca_produto) {
      res.status(422).json({ message: "A marca é obrigatória!" });
      return;
    } else {
      updateData.marca_produto = marca_produto;
    }

    if (!categoria) {
      res.status(422).json({ message: "A categoria é obrigatória!" });
      return;
    } else {
      updateData.categoria = categoria;
    }

    if (!descricao) {
      res.status(422).json({ message: "A descrição é obrigatória!" });
      return;
    } else {
      updateData.descricao = descricao;
    }

    if (!fabricante) {
      res.status(422).json({ message: "O fabricante é obrigatório!" });
      return;
    } else {
      updateData.fabricante = fabricante;
    }

    if (!caracteristica) {
      res.status(422).json({ message: "A caracteristica é obrigatória!" });
      return;
    } else {
      updateData.caracteristica = caracteristica;
    }

    if (!preco) {
      res.status(422).json({ message: "O preco é obrigatório!" });
      return;
    } else {
      updateData.preco = preco;
    }

    if (!images) {
      res.status(422).json({ message: "A imagem é obrigatória!" });
      return;
    } else {
      updateData.images = [];
      images.map((image) => {
        updateData.images.push(image.filename);
      });
    }

    await Marca.findByIdAndUpdate(id, updateData);

    res
      .status(200)
      .json({ marca: marca, message: "Marca atualizado com sucesso!" });
  }
};

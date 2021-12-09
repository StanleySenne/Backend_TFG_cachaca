const mongoose = require("../db/conn");
const { Schema } = mongoose;

const marca = mongoose.model(
  "marca",
  new Schema(
    {
      nome: {
        type: String,
        required: true,
      },
      marca_produto: {
        type: String,
        required: true,
      },
      categoria: {
        type: String,
      },
      descricao: {
        type: String,
      },
      fabricante: {
        type: String,
      },
      caracteristica: {
        type: String,
      },
      preco: {
        type: String,
        required: true,
      },
      images: {
        type: Array,
        required: true,
      },
      available: {
        type: Boolean,
      },
      user: Object,
      adopter: Object,
    },
    { timestamps: true },
  ),
);

module.exports = marca;

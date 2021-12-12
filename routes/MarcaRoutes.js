const router = require("express").Router();
const MarcaController = require("../controllers/MarcaController");

// middlewares
const verifyToken = require("../helpers/verify-token");
const { imageUpload } = require("../helpers/image-upload");

router.post(
  "/create",
  verifyToken,
  imageUpload.array("images"),
  MarcaController.create,
);

router.get("/", MarcaController.getAll);
router.get("/meusProdutos", MarcaController.getAllUserMarcas);
router.get("/listaCompras", verifyToken, MarcaController.getAllUserCompras);
router.get("/:id", MarcaController.getMarcaById);
router.delete("/:id", verifyToken, MarcaController.removeMarcaById);
router.patch(
  "/:id",
  verifyToken,
  imageUpload.array("images"),
  MarcaController.updateMarca,
);
router.get("/image/:id", MarcaController.getImage);

module.exports = router;

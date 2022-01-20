const multer = require('multer');
const path = require('path');

// configuraçoes do destino e nome que tera a imagem baixada:
const storage = multer.diskStorage({
  destination: path.resolve(__dirname, '..', 'uploads'),
  filename: (req, _file, callback) => {
    const { id } = req.params;
    callback(null, `${id}.jpeg`);
  },
});

// chama o multer e insere as configuraçoes storage no parametro que funçao ira receber "image"
const uploadImage = multer({ storage });

// exporta a funçao
module.exports = uploadImage;
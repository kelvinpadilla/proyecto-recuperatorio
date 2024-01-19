const { Libros } = require("../database/models");
const { Categorias } = require("../database/models");
const {Autores } = require("../database/models");
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');


const apiService = {
  getAllBooks: async (category) => {
    const whereClause = {};
    console.log(category, "this es category")
    if (category) {
      whereClause.id_categoria = category;
    }

    return await Libros.findAll({
      where: whereClause,
      include: [
        {
          model: Categorias,
          as: "categoria",
        },
        {
          model: Autores,
          as: "autor",
        },
      ],
    });
  },
  searchBooksByTitle: async (title, category) => {
    console
    try {
      const whereClause = {
        titulo: {
          [Sequelize.Op.like]: `%${title}%`,
        },
      };

      if (category) {
        whereClause.id_categoria = category;
      }

      const books = await Libros.findAll({
        where: whereClause,
        include: [
          {
            model: Categorias,
            as: "categoria",
          },
          {
            model: Autores,
            as: "autor",
          },
        ],
      });
      return books;
    } catch (error) {
      throw new Error(`Error en la búsqueda: ${error.message}`);
    }
  },
  getBooksLimit: async (offset, limit, category) => {
    const whereClause = {};

    if (category) {
      whereClause.id_categoria = category;
    }

    return await Libros.findAll({
      where: whereClause,
      include: [
        {
          model: Categorias,
          as: "categoria",
        },
        {
          model: Autores,
          as: "autor",
        },
      ],
      offset,
      limit,
    });
  },

  countTotalBooks: async () => {
    return await Libros.count();
  },

  createBook: async (titulo, id_autor, id_categoria, descripcion, img) => {
    // Decode the base64 image data
    const matches = img.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    const type = matches[1]; // tipo de archivo (ej. image/png)
    const data = matches[2]; // datos base64 codificados
    const imageData = Buffer.from(data, 'base64');

    // Generate a unique filename
    const filename = `${Date.now()}.jpg`;

    // Define the file path
    const filePath = path.join(__dirname, '../public', filename);

    try {
      // Save the image file
      await fs.promises.writeFile(filePath, imageData);

      // Replace the img variable with the filename
      const book = await Libros.create({
        titulo,
        id_categoria,
        id_autor,
        descripcion,
        img: filename,
      });

      return book;
    } catch (error) {
      throw new Error(`Error creating book: ${error.message}`);
    }
  },

  getAllAutors: async () => {
    return await Autores.findAll();
  },

  getAllCategories: async () => {
    return await Categorias.findAll();
  }

};

module.exports = apiService;

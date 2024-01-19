const apiService = require("../../service/apiService");

module.exports = {
    generalBooks: async (req, res) => {
        try {
            const perPage = 8;
            const page = req.query.page || 1;
            const countBooks = await apiService.countTotalBooks();
            const offset = (page - 1) * perPage;
            const category = req.query.category || "";
            const allBooks = await apiService.getAllBooks(category)
            const allBooksLimit = await apiService.getBooksLimit(
                offset,
                perPage,
                category
            );
            const totalPages = Math.ceil(countBooks / perPage);

            function countBooksByCategory(allBooksLimit) {
                const booksByCategory = {};
                allBooksLimit.forEach((book) => {
                    const category = book.categoria.nombre_categoria;
                    if (!booksByCategory[category]) {
                        booksByCategory[category] = 1;
                    } else {
                        booksByCategory[category] += 1;
                    }
                });
                return booksByCategory;
            };

            const respuesta = {
                info: {
                    count: countBooks,
                    countByCategory: countBooksByCategory(allBooks),
                    totalPages,
                    currentPage: parseInt(page),
                    perPage,
                },
                results: allBooksLimit.map((book) => ({
                    id_libro: book.id_libro,
                    titulo: book.titulo,
                    nombre_autor: book.autor.nombre_autor,
                    biografia_autor: book.autor.biografia_autor,
                    nombre_categoria: book.categoria.nombre_categoria,
                    descripcion: book.descripcion,
                    img: book.img
                })),
            };

            if (parseInt(page) < totalPages) {
                respuesta.info.next =
                    req.protocol +
                    '://' +
                    req.get('host') +
                    req.baseUrl +
                    `?page=${parseInt(page) + 1}`;
            }

            if (parseInt(page) > 1) {
                respuesta.info.previous =
                    req.protocol +
                    '://' +
                    req.get('host') +
                    req.baseUrl +
                    `?page=${parseInt(page) - 1}`;
            }

            res.json(respuesta);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    searchBooks: async (req, res) => {
        try {
          const { title, category } = req.query;
          const results = await apiService.searchBooksByTitle(title, category);

          res.json({ results });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      },
    createBook: async (req, res) => {
        console.log(req.body);
        try {
            const { titulo, descripcion, id_autor, id_categoria, img } = req.body;
            const newBook = await apiService.createBook(
                titulo,
                id_autor,
                id_categoria,
                descripcion,
                img
            );
            res.json(newBook);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getAutors: async (req, res) => {
        try {
            const allAutors = await apiService.getAllAutors();
            res.json(allAutors);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getCategories: async (req, res) => {
        try {
            const allCategories = await apiService.getAllCategories();
            res.json(allCategories);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

};

INSERT INTO categorias
(id_categoria, nombre_categoria)
values
(0, 'novela'),
(0, 'fantasia'),
(0, 'ficcion criminal'),
(0, 'misterio'),
(0, 'novela rosa'),
(0, 'ensayo'),
(0, 'ficcion'),
(0, 'terror')
;
INSERT INTO libros
(id_libro, titulo, descripcion, id_categoria, id_autor, img)
values
(0, 'Cien años de soledad', 'Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez', 1, 1, 'imagen1.jpg'),
(0, 'Cronica de una muerte anunciada', 'Cronica de una muerte anunciada es una novela', 1, 1, 'imagen2.jpg'),
(0, 'El amor en los tiempos del cólera', 'El amor en los tiempos del cólera es una novela del escritor colombiano Gabriel García Márquez', 1, 1, 'imagen3.jpg'),
(0, 'Harry Potter y la piedra filosofal', 'Harry Potter y la piedra filosofal, es el primer libro de la serie literaria Harry Potter', 2, 2, 'imagen4.jpg'),
(0, 'La tumba corriente', 'The Running Grave es una novela policíaca escrita por J. K. Rowling', 3, 2, 'imagen5.jpg'),
(0, 'El canto del cuco', 'El canto del cuco es la segunda novela para adultos de J. K. Rowling', 4, 2, 'imagen6.jpg'),
(0, 'Yo antes de ti', 'Yo antes de ti es una novela romántica de la escritora británica Jojo Moye', 5, 3, 'imagen7.jpg'),
(0, 'Después de ti', 'Después de ti es una novela romántica de la escritora británica Jojo Moyes', 1, 3, 'imagen8.jpg'),
(0, 'Una habitación propia', 'Una habitación propia es un ensayo escrito por Virginia Woolf. ', 6, 4, 'imagen9.jpg'),
(0, 'El Faro', 'Al faro es la quinta novela de Virginia Woolf', 1, 4, 'imagen10.jpg'),
(0, 'Dombey e hijo', 'Dombey e hijo es una novela escrita por Charles Dickens y su octava novela.', 1, 5, 'imagen11.jpg'),
(0, 'Cuento de navidad', 'es una novela corta escrita por el británico Charles Dicken', 7, 5, 'imagen12.jpg'),
(0, 'Orgullo y prejuicio', 'Orgullo y prejuicio, publicada por primera vez el 28 de enero de 1813 como una obra anónima', 1, 6, 'imagen13.jpg'),
(0, 'Sensatez y sentimiento', 'Sentido y sensibilidad, fue publicada en 1811.', 5, 6, 'imagen14.jpg'),
(0, 'Persuasión: novela', 'Persuasión es la última novela escrita por Jane Austen. ', 5, 6, 'imagen15.jpg'),
(0, 'El retrato de Dorian Gray', 'El retrato de Dorian Gray o El cuadro de Dorian Gray es una novela', 7, 7, 'imagen16.jpg'),
(0, 'It', 'It es una novela de terror publicada en 1986', 8, 8, 'imagen17.jpg'),
(0, 'El resplandor', 'El resplandores la tercera novela de Stephen King', 8, 8, 'imagen18.jpg'),
(0, 'La cupula', 'La cúpula es una novela de ciencia ficción escrita por Stephen King', 7, 8, 'imagen19.jpg'),
(0, 'Carrie', 'Esta novela fue la cuarta escrita por Stephen King', 8, 8, 'imagen20.jpg'),
(0, 'Flores en el ático', 'Flores en el ático es una novela escrita por V. C. Andrews ', 1, 9, 'imagen21.jpg'),
(0, 'Las ventajas de ser invisible', ' es una novela epistolar escrita por el autor Stephen Chbosky.', 1, 10, 'imagen22.jpg')
;
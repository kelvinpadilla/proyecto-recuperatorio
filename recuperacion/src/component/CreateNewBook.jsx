import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateNewBook = () => {
    const [titulo, setTitulo] = useState("");
    const [idAutor, setIdAutor] = useState(0);
    const [idCategoria, setIdCategoria] = useState(0);
    const [descripcion, setDescripcion] = useState("");
    const [img, setImg] = useState("");
    const [autores, setAutores] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        // Fetch authors data
        axios.get("http://localhost:3000/autors/")
            .then((response) => {
                setAutores(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        // Fetch categories data
        axios.get("http://localhost:3000/categories/")
            .then((response) => {
                setCategorias(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64String = reader.result;
            setImg(base64String);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleCreateBook = () => {
        if (!titulo || idAutor === 0 || idCategoria === 0 || !descripcion || !img) {
            alert("Please fill in all the required fields.");
            return;
        }
        const data = {
            titulo: titulo,
            id_autor: idAutor,
            id_categoria: idCategoria,
            descripcion: descripcion,
            img: img,
        };

        axios
            .post("http://localhost:3000/book/create/", data)
            .then((response) => {
                // Show Bootstrap alert popup
                alert("Book created successfully!");
                // Redirect to home page
                window.location.href = "/";
            })
            .catch((error) => {
                // Handle error response
                console.error(error);
                // Show Bootstrap alert popup
                alert("Error creating book. Please try again.");
            });
    };

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <form style={{ width: "400px" }}>
                    <div className="mb-3">
                        <label htmlFor="titulo" className="form-label">
                            Título:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="titulo"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="idAutor" className="form-label">
                            ID Autor:
                        </label>
                        <select
                            className="form-control"
                            id="idAutor"
                            value={idAutor}
                            onChange={(e) => setIdAutor(parseInt(e.target.value))}
                        >
                            <option value={0}>Select an author</option>
                            {autores.map((autor) => (
                                <option key={autor.id_autores} value={autor.id_autores}>
                                    {autor.nombre_autor}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="idCategoria" className="form-label">
                            ID Categoría:
                        </label>
                        <select
                            className="form-control"
                            id="idCategoria"
                            value={idCategoria}
                            onChange={(e) => setIdCategoria(parseInt(e.target.value))}
                        >
                            <option value={0}>Select a category</option>
                            {categorias.map((categoria) => (
                                <option key={categoria.id_categoria} value={categoria.id_categoria}>
                                    {categoria.nombre_categoria}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descripcion" className="form-label">
                            Descripción:
                        </label>
                        <textarea
                            className="form-control"
                            id="descripcion"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="img" className="form-label">
                            Imagen file:
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            id="img"
                            onChange={handleImageChange}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleCreateBook}
                    >
                        Create Book
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateNewBook;

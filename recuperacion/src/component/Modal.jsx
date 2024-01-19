/* eslint-disable react/prop-types */
import React from 'react';
const Modal = ({ id, book }) => {
    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-primary text-white">
                        <h3 className="modal-title" id="exampleModalLabel" style={{ textTransform: "capitalize" }}>
                            {book.titulo}
                        </h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img className="img-fluid" src={"http://localhost:3000/static/"+book.img} alt="Imagen" style={{ maxWidth: "100%", height: "auto" }}></img>
                        <ul className="py-3" style={{ listStyle: "none"}}>
                            <li>
                                <strong>Nombre del Autor: </strong> {book.nombre_autor}.
                            </li>
                            <li>
                                <strong>Categoria: </strong> {book.nombre_categoria}.
                            </li>
                            <li>
                                <strong>Descripcion: </strong> {book.descripcion}.
                            </li>
                            <li>
                                <strong>Biografia del Autor: </strong> {book.biografia_autor}.
                            </li>
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

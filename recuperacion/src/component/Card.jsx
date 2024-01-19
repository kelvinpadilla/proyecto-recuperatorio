/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from "./Card.module.scss";
import Modal from "./Modal";

const Card = ({ results }) => {
  let display;
  if (results && results.length > 0) {
    display = results.map((book) => (
      <div
        key={book.id_libro}
        className={`col-lg-3 col-md-3 col-sm-12 col-12 mb-4 position-relative text-dark ${styles.card} pe-auto px`}
        data-bs-toggle="modal" data-bs-target={`#id${book.id_libro}`}
        style={{ cursor: "pointer"}}
      >
        <div>
          <img className="card-img-top img-fluid" style={{width:"100%", height: "300px"}} src={"http://localhost:3000/static/"+book.img} alt=""/>
          <div className={`${styles.content}`}>
            <div className={`${styles.fs18} ${styles.fwBold}`}>{book.titulo}</div>
          </div>
        </div>
        <Modal
          id={`id${book.id_libro}`}
          book={book}
        />
      </div>
    ));
  } else {
    display = <div>No hay caracteres :/</div>;
  }
  return (
    <div className={`row ${styles.cardContainer}`}>
      {display}
    </div>
  );
};

export default Card;

import React, { useState, useEffect } from "react";
import styles from "./Search.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Search = ({ setSearch, setPage, setCategory, updateFetchedData }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories/")
      .then((response) => setCategories(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <select
        onChange={(e) => {
          setPage(1);
          setCategory(e.target.value);
        }}
        className={`${styles.select} form-select`}
        style={{ width: "200px" }}
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category.id_categoria} value={category.id_categoria}>
            {category.nombre_categoria}
          </option>
        ))}
      </select>
      <input
        id="searchInput"
        onChange={(e) => {
          setPage(1);
          setSearch(e.target.value);
        }}
        placeholder="Search a book"
        className={`${styles.input} form-control`}
        type="text"
        name="searchInput"
      />
      <button type="submit" className="btn btn-primary fs-5">
        Search
      </button>
      <Link
        type="submit"
        className="btn btn-outline-success fs-5"
        to="/createnewbook"
      >
        Create New Book
      </Link>
    </form>
  );
};

export default Search;

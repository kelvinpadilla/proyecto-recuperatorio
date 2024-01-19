import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Card from "./component/Card.jsx";
import Search from "./component/Search.jsx";
import Pagination from "./component/Pagination.jsx";
import CreateNewBook from "./component/CreateNewBook.jsx";
import "./App.css";

function App() {
  const [fetchedData, updateFetchedData] = useState([]);
  const { info, results } = fetchedData;
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const generalApi = `http://localhost:3000/?page=${page}&category=${category}`;
  const searchApi = `http://localhost:3000/search?page=${page}&title=${search}&category=${category}`;

  const fetchData = async (api) => {
    try {
      const { data } = await axios.get(api);
      updateFetchedData(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      console.error("Error response:", error.response); // Agrega esta línea
    }
  };

  useEffect(() => {
    fetchData(search ? searchApi : generalApi);
  }, [page, search, category, generalApi, searchApi]);

  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Ruta para la página principal */}
                  <h1 className="text-center mb-3">My Library</h1>
                  <Search setSearch={setSearch} setPage={setPage} setCategory={setCategory} updateFetchedData={updateFetchedData}/> {/* Added setCategory prop */}
                  <div className="container-fluid">
                    <div className="row">
                      <div className="container-fluid">
                        <Card results={results} />
                      </div>
                    </div>
                  </div>
                  <Pagination info={info} page={page} setPage={setPage} />
                </>
              }
            />
            <Route path="/createnewbook" element={<CreateNewBook />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

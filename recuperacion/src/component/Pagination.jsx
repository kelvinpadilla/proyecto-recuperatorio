/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.module.scss";

const Pagination = ({ page, info, setPage }) => {
  let pageChange = (data) => {
    setPage(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-4"
        nextLabel="Next"
        forcePage={page === 1 ? 0 : page - 1}
        previousLabel="Prev"
        previousClassName="btn fs-5"
        nextClassName="btn fs-5"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info && info.totalPages ? info.totalPages : 1}
        onPageChange={pageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
    </>
  );
};

export default Pagination;

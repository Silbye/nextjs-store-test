"use client";

import { useContext } from "react";
import { PageContext } from "../context/PageContext";

const PaginationButtons = ({ data }) => {
  const { currentPage, changePage } = useContext(PageContext);

  function calcPages() {
    return Math.ceil(data.length / 10);
  }
  return (
    <div className="pagination">
      {currentPage - 1 > 0 ? (
        <button
          className="prev-btn"
          onClick={() => changePage(currentPage - 1)}
        >
          PREV
        </button>
      ) : null}
      {currentPage - 2 > 0 ? (
        <button onClick={() => changePage(currentPage - 2)}>
          {currentPage - 2}
        </button>
      ) : null}
      {currentPage - 1 > 0 ? (
        <button onClick={() => changePage(currentPage - 1)}>
          {currentPage - 1}
        </button>
      ) : null}
      <button className="current-page">{currentPage}</button>
      {currentPage + 1 <= calcPages() ? (
        <button onClick={() => changePage(currentPage + 1)}>
          {currentPage + 1}
        </button>
      ) : null}
      {currentPage + 2 <= calcPages() ? (
        <button onClick={() => changePage(currentPage + 2)}>
          {currentPage + 2}
        </button>
      ) : null}
      {currentPage + 1 <= calcPages() ? (
        <button
          className="next-btn"
          onClick={() => changePage(currentPage + 1)}
        >
          NEXT
        </button>
      ) : null}
    </div>
  );
};

export default PaginationButtons;

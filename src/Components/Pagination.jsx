import React from "react";
import "./Pagination.css"; // Import the CSS file for custom styles

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav aria-label="Page navigation example" className="pagination-container">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            className="page-link"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number === currentPage ? "active" : ""}`}
          >
            <button onClick={() => handleClick(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            className="page-link"
            onClick={handleNext}
            disabled={currentPage === pageNumbers.length}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

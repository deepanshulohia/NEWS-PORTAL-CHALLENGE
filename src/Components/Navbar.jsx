import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"; // Import the CSS file for custom styles

const Navbar = ({ setCategory, setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          News APP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory("technology")}
              >
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("business")}>
                Business
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("health")}>
                Health
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("sports")}>
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory("favorites")}
              >
                <FontAwesomeIcon icon={faStar} /> Favorites
              </div>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearch}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

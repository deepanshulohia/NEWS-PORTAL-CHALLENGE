import React from "react";
import news from "../assets/news.jpg";
import "./Newsitem.css"; // Import the CSS file for custom styles

const Newsitem = ({
  title,
  description,
  src,
  url,
  isFavorite,
  addFavorite,
  removeFavorite,
}) => {
  return (
    <div className="card news-item bg-dark text-light mb-4">
      <img src={src ? src : news} className="card-img-top" alt="news" />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."}
        </p>
        <a
          href={url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
        {isFavorite ? (
          <button onClick={removeFavorite} className="btn btn-danger mt-2">
            Remove from Favorites
          </button>
        ) : (
          <button onClick={addFavorite} className="btn btn-secondary mt-2">
            Add to Favorites
          </button>
        )}
      </div>
    </div>
  );
};

export default Newsitem;

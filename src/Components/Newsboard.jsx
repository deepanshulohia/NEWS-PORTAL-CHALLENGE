import React from "react";
import Newsitem from "./Newsitem";
import "./Newsboard.css"; // Import the CSS file for custom styles

const Newsboard = ({ posts, favorites, addFavorite, removeFavorite }) => {
  return (
    <div className="newsboard">
      <h2 className="text-center my-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="news-items">
        {posts.map((news, index) => (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
            isFavorite={favorites.some((article) => article.url === news.url)}
            addFavorite={() => addFavorite(news)}
            removeFavorite={() => removeFavorite(news.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default Newsboard;

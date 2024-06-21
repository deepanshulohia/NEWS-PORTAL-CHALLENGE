import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Newsboard from "./Components/Newsboard";
import Pagination from "./Components/Pagination";
import "./App.css"; // Import the CSS file for custom styles

const App = () => {
  const [category, setCategory] = useState("general");
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [postPerPage, setPostPerPage] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const filteredPosts = (category === "favorites" ? favorites : posts).filter(
    (post) =>
      (post.title &&
        post.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (post.description &&
        post.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const currentPost = filteredPosts.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const fetchPosts = async () => {
      if (category === "favorites") return;
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`;
        let response = await fetch(url);
        let data = await response.json();
        setPosts(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPosts();
  }, [category]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (article) => {
    if (!favorites.some((fav) => fav.url === article.url)) {
      setFavorites([...favorites, article]);
    }
  };

  const removeFavorite = (url) => {
    setFavorites(favorites.filter((article) => article.url !== url));
  };

  return (
    <div className="app-container">
      <Navbar setCategory={setCategory} setSearchTerm={setSearchTerm} />
      <div className="newsboard-container">
        <Newsboard
          posts={currentPost}
          favorites={favorites}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
        />
      </div>
      <Pagination
        totalPosts={filteredPosts.length}
        postsPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;

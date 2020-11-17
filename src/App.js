import React, { useState, useEffect } from "react";
import "./styles.css";
import "./post.css";
import Articles from "./Articles";
import Header from "./Header";

function App() {
  //declaring states with useState hook. articles stays unaltered while filtered is a filtered version of articles
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  //useEffect hook to fetch fetch data synchronously
  useEffect(function () {
    async function getData() {
      const url =
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=3420d4ca8bde49b08e991ed7a552e100";

      const response = await fetch(url);
      const data = await response.json();

      //when data is loaded, set state to all articles
      setArticles(data.articles);
      setFilteredArticles(data.articles);
    }
    getData();
  }, []);

  //return app with a header and articles components
  return (
    <div className="App">
      <Header setFilteredArticles={setFilteredArticles} articles={articles} />
      <div className="posts">
        <Articles articles={filteredArticles} />
      </div>
    </div>
  );
}

export default App;

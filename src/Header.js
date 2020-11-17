import React from "react";

// this is the header component. it contains the headline, tag and the filter buttons
// the articles state is always unaltered so it can be refetched as the original
// the displayed articles are always from the filterArticles state.

function Header({ setArticles, articles, setFilteredArticles }) {
  function filterNews() {
    //filter data to show only posts from the washington post
    const washingtonPost = articles.filter(
      (article) => article.source.id === "the-washington-post"
    );
    //set displayed to filtered version
    setFilteredArticles(washingtonPost);
  }

  //set display state to original state
  function resetNews() {
    setFilteredArticles(articles);
  }

  //return dom elements
  return (
    <div>
      <h1>THE NEWS</h1>
      <h4>
        This aggressively ugly react web application fetches the biggest
        headlines in the US and renders them in html using JSX. Click the
        buttons to filter news.
      </h4>

      {/* this button calls resetNews */}
      <button onClick={resetNews} className="filterBtn">
        All Headlines
      </button>

      {/* this button calls filterNews */}
      <button onClick={filterNews} className="filterBtn">
        The Washington Post
      </button>
    </div>
  );
}

export default Header;

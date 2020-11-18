import React from "react";

//articles dom is defined and rendered in this component.
//we map through all articles and create a post for each item in that array

// default state is loading and article empty.
export default class Articles extends React.Component {
  //render html
  render() {
    const articles = this.props.articles;

    if (!articles) return null;
    
    return (
      <>
        {/* map through all articles */}
        {articles.map((article) => (
          <div className="post" key={article.title}>
            <a className="post__title" href={article.url}><h3>{article.title}</h3></a>
            <img
              className="post__image"
              src={article.urlToImage}
              alt="article"
            />
            <div className="post__info">
              <h5>{article.author}</h5>
              <h6>{article.publishedAt}</h6>
            </div>
            <h4 className="post__content">{article.description}</h4>
            <button
              className="post__button"
              onClick={() => (window.location.href = article.url)}
            >
              Read more
            </button>
          </div>
        ))}
      </>
    );
  }
}

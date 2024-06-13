import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ArticlesSection = ({ articles }) => {
  const navigate = useNavigate();
  const [minValue, changeValue] = useState(5);
  

  const arr = articles.map((article, index) => (
    <article key={index} className="story" id={`story${index + 1}`}>
      <img
        src={article.imageSrc}
        alt="World Cup"
        className="story-image"
        onClick={() => navigate(`/article/${article.id}`)}
      />
      <div className="story-content">
        <h3 className="story-author">
          By <span className="underline">
            <Link to={`/author/${article.authorId}`} className="navLink1">
              {article.authorName}
            </Link>
          </span>
        </h3>
        <h4 className="story-date">
          <span className="underline">{article.date}</span>
        </h4>
        <h2 className="story-title">
          <Link to={`/article/${article.id}`} className="navLink1">
            {article.title}
          </Link>
        </h2>
        <h4 className="story-category">
          Filed under <span className="underline">
            <Link to={`/sports/${article.sport}`} className="navLink1">
              {article.sport}
            </Link>
          </span>
        </h4>
      </div>
    </article>
  ));
  if (minValue >= articles.length) {
    return (
      <>
      {arr} 
      <div className="noClick">
      <button className = "cantClick">All Articles Loaded</button>
      </div>
      </>
    );
  }

  const addValues = () => {
    const arrayLength = articles.length;
    if (minValue >= arrayLength) {
      return;
    }

    const minLength = Math.min(minValue + 2, arrayLength);
    changeValue(minLength);
  };

  if (!articles || articles.length === 0) {
    return <div>No articles available</div>;
  }

  const slicedArticles = arr.slice(0, minValue);

  return (
    <section className="latest-stories">
      {slicedArticles}
      <button onClick={addValues} className="canClick 2">Load More Articles</button>
    </section>
  );
};

export default ArticlesSection;

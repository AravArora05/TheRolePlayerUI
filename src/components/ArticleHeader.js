import React from 'react';
import {Link} from 'react-router-dom';

const ArticleHeader = ({article}) => {
    return (
        <div className="article-header-container">
            <div className="article-category">
                <div className="triangle-right"></div>
                <Link to={`/sports/${article.sport}`}><h4 className="article-header-sport">{article.sport}</h4></Link>
            </div>
            <h2 className="article-header-title">{article.title}?</h2>
            <p className="article-header-author">By {article.authorName}</p>
            <p className="article-header-date">{article.date}</p>
            <img className="article-image-url" src="https://wehco.media.clients.ellingtoncms.com/imports/adg/photos/207239636_207239582-0f78c263fbbc4e549a4da7ce818916e4_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d" alt="Jalen Brunson" />
            <figcaption className="article-image-caption">
                {article.caption.figcaption}
                <span className="article-image-creator-credits">{`Creator: ${article.caption.creator} | Credit: ${article.caption.credit}`}</span>
            </figcaption>
        </div>
    );
}

export default ArticleHeader;

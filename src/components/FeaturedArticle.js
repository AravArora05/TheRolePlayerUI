import {Link, Navigate} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const FeaturedArticle = ({article})=> {
    const navigate = useNavigate();

    return (
        <div className="featured-article">
            <img src={article.imageSrc} alt={article.title} onClick= {() => {
                navigate(`/article/${article.id}`)
            }} className="featured-article-image"/>
            <h3 className="featured-article-category"><Link to = {`/sports/${article.sport}`} className="navLink1">{article.sport}</Link></h3>
            <div className="featured-article-content">
                <h1 className="featured-article-title"><Link to = {`/article/${article.id}`} className="navLink1">{article.title}</Link></h1>
                <h4 className="featured-article-author"><Link to = {`/author/${article.authorId}`} className="navLink1">{article.authorName}</Link></h4>
            </div>
        </div>);
}

export default FeaturedArticle;
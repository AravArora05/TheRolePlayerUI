import SiteHeader from "./components/SiteHeader";
import { useParams, Navigate } from "react-router-dom";
import ArticleHeader from "./components/ArticleHeader";
import useFetch from "./useFetch";

const Article = () => {
    const { id } = useParams();
    const { error, isPending, data } = useFetch("http://localhost:8000/articles");

    if (error) {
        return <div>{error}</div>;
    }

    if (isPending) {
        return <div>Loading....</div>;
    }

    const value = parseInt(id);

    if (isNaN(value) || value > data.length || value < 1) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <SiteHeader />
            <ArticleHeader article={data[value - 1]} />
            <div class = "article-information-container">
            {data[value - 1].content.map((element, index) => (
                <div key={index} dangerouslySetInnerHTML={{ __html: element }} />
            ))}
            </div>
        </>
    );
};

export default Article;

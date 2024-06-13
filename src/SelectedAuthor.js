import {useParams, Navigate} from 'react-router-dom';
import useFetch from './useFetch';
import SiteHeader from './components/SiteHeader';
import ArticlesSection from './components/ArticlesSection';
import AuthorDescription from './components/AuthorDescription';

const SelectedAuthor = ()=> {
    const { authorId } = useParams();
    const allowedIDs = ["1", "2", "3"];
    const {error: authorError, isPending: authorPending, data: authorData} = useFetch("http://localhost:8000/authors");
    const {error: articleError, isPending: articlePending, data: articleData} = useFetch("http://localhost:8000/articles");
    if (!allowedIDs.includes(authorId)) {
        return <Navigate to="/"></Navigate>;
    }
    const value = parseInt(authorId);
    if (authorPending || articlePending) 
    {return <div>Loading...</div>
    };

    if (authorError || articleError) {
       return <div>{authorError}</div>
    }


    return (
        <>
        <SiteHeader></SiteHeader>
        <AuthorDescription author={authorData.filter((author) => value === author.id)}></AuthorDescription>
        <ArticlesSection articles ={articleData.filter((article) => article.authorId === value)}></ArticlesSection>
        </>
    );
    

}

export default SelectedAuthor;
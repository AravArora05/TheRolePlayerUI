import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CurrentSport from './CurrentSport';
import SelectedAuthor from './SelectedAuthor';
import HomePage from './HomePage';
import Article from './Article';
import NotFound from './NotFound';
import Footer from './components/Footer';

/**
 * Working with createBrowserRouter
 */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([{
  path: '/',
  element: <HomePage/>

},
{
  path: '/sports/:sport',
  element: <CurrentSport/>
}, {
  path: "/author/:authorId",
  element: <SelectedAuthor/>
}, {
  path: "/home",
  element: <HomePage/>
}, {
  path: "/article/:id",
  element: <Article/>
}, {
  path: "*",
  element: <NotFound></NotFound>
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
    <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

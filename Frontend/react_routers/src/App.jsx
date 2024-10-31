import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
// import { About } from './pages/About';
import { Movie } from './pages/Movie';
import { Contact, contactData } from './pages/Contact';
import { Applayout } from './Components/Layout/Applayout';
import { ErrorPage } from './Components/Layout/ErrorPage';
import { GETMovieDetails } from './api/GetMovieDetails';
import { GETMovieData } from './api/APIData';
import { Auth0Provider } from '@auth0/auth0-react';
import "./App.css";
import './index.css';

import { MovieDetails } from './UI/MovieDetails';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/movie",
                element: <Movie />,
                loader: GETMovieData,
            },
            {
                path: "/movie/:movieID",
                element: <MovieDetails />,
                loader: GETMovieDetails,
            },
            {
                path: "/contact",
                element: <Contact />,
                action: contactData,
            },
            {
                path: "*",
                element: <ErrorPage />,
            },
        ],
    }
]);

const App = () => {
    return (
        <Auth0Provider
            domain="dev-etvm6nvl0brfmrad.us.auth0.com"
            clientId="AyjbKT9jJf5m08xk9MT6cZAo7WlXXKIU"
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            <RouterProvider router={router} />
        </Auth0Provider>
    );
};

export default App;

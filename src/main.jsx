import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root.jsx';
import Home from './components/home/Home.jsx';
import Listed from './components/listed/Listed.jsx';
import Read from './components/read/Read.jsx';
import BookDetails from './components/bookDetails/BookDetails.jsx';
import Fiction from './components/fiction/Fiction.jsx';
import Nfiction from './components/nonFiction/Nfiction.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
        
      },
      {
        path: '/listed',
        element: <Listed></Listed>,
        loader: () => fetch('/book.json')
      },
      {
        path: '/read',
        element: <Read></Read>
      },
      {
        path: '/bookDetailes/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../book.json')
      },
      {
        path: '/fiction',
        element: <Fiction></Fiction>
      },
      {
        path: '/nfiction',
        element: <Nfiction></Nfiction>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)

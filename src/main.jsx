import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import Home from './Components/Home/Home.jsx'
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx'
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx'
import Contact from './Components/Contact/Contact.jsx'
import BookDetails from './Components/BookDetails/BookDetails.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/listed-books',
        element:<ListedBooks></ListedBooks>,
        loader:()=>fetch('/books.json')
      },
      {
        path:'/pages-to-read',
        element:<PagesToRead></PagesToRead>,
        loader:()=>fetch('/books.json')
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/book/:id',
        element:<BookDetails></BookDetails>,
        loader:()=> fetch('/books.json')

      }

    
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

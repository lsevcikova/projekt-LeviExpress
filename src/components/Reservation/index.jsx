import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './components/App';
import { Reservation } from './components/Reservation';
import './style.css';
import { Home } from './components/Home';

export const API_BASE_URL = 'http://leviexpress-backend.herokuapp.com/api';

const ErrorPage = () => {
    return (
      <main className='container'>
        <h1>Chyba 404: tady nic neni</h1>
        <p>Pravdepodobne mate spatny odkaz.</p>
      </main>
    )
  }

const router = createBrowserRouter ([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
     
    }
])

createRoot(document.querySelector('#app')).render(
    <RouterProvider router={router} />
  )

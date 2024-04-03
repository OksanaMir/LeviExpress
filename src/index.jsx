import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { App } from './components/App';
import { HomePage } from './pages/HomePage';
import { ReservationPage } from './pages/ReservationPage';
import './global.css';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <App />,
			children: [
				{
					path: '/',
					element: <HomePage />
					// errorElement: <ErrorPage />
				},
				{
					path: '/reservation/:id',
					element: <ReservationPage />
					// children: [{ path: ':id', element: <ReservationPage /> }]
				}
			]
		}
	],
	{ basename: '/LeviExpress' }
);

createRoot(document.querySelector('#app')).render(
	<RouterProvider router={router} />
);

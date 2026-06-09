import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Cart } from './pages/Cart/Cart.tsx';
import { Error } from './pages/Error/Error.tsx';
import { Layout } from './layout/Layout/Layout.tsx';
import Product from './pages/Product/Product.tsx';
import { PREFIX } from './helpers/api.ts';
import axios from 'axios';

const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Suspense fallback={<>Загрузка</>}><Menu /></Suspense>,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
			{
				path: '/product/:id',
				element: <Product />,
				errorElement: <>Ошибка загрузки</>,
				loader: async ({ params }) => {
					await new Promise<void>(resolve => 
						setTimeout(() => {
								resolve()						
							}, 2000)
						);
					const {data} = await axios.get(`${PREFIX}/products/${params.id}`);
					return data;
				} 
			}
		],
	},
	{
		path: '*',
		element: <Error />,
	}
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);

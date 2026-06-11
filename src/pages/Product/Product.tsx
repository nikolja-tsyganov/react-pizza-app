import { Await, useLoaderData } from 'react-router-dom';
import type { Product } from '../../interfaces/product.interface';
import { Suspense } from 'react';

export default function Product() {
	const { data } = useLoaderData();
	
	// return <>Product - {data.name}</>;
	return <>
		<Suspense fallback={<div>Loading...</div>}>
			<Await
				resolve={data}
			>
				{(data) => <>Product - {data.name}</>}
			</Await>
		</Suspense>
	</>
}
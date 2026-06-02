import Headling from '../../components/Headling/Headling';
import ProductCard from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';

export function Menu() {
	return (
		<>
			<div className={styles['head']}>
				<Headling>Меню</Headling>
				<Search />
			</div>
			<div>
				<ProductCard 
					id={1}
					title="Наслаждение"
					description="Салями, руккола, помдоры, оливки"
					rating={4}
					price={240}
					image="/product-demo.png"
				/>
			</div>
		</>
	);
}
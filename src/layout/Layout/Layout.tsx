import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';

export function Layout() {
	return <div className={styles['layout']}>
		<div className={styles['sidebar']}>
			<div className={styles['user']}>
				<img className={styles['avatar']} src="/avatar.png" alt="Аватар пользователя" />
				<div className={styles['name']}>Цыганов Николай</div>
				<div className={styles['email']}>nikolja1990@gmail.com</div>
			</div>
			<div className={styles['menu']}>
				<Link to="/" className={styles['link']}>
					<img src="/menu-icon.svg" alt="Меню" />
					Меню
				</Link>
				
				<Link to="/cart" className={styles['link']}>
					<img src="/cart-icon.svg" alt="Корзина" />
					Корзина
				</Link>
			</div>
			<Button className={styles['exit']} >
				<img src="/exit-icon.svg" alt="Выйти" />
				Выйти
			</Button>
		</div>
		<div>
			<Outlet />
		</div>
	</div>
}
import { Link, NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';

export function Layout() {
	return <div className={styles['layout']}>
		<div className={styles['sidebar']}>
			<div className={styles['user']}>
				<img className={styles['avatar']} src="/avatar.png" alt="Аватар пользователя" />
				<div className={styles['name']}>Цыганов Николай</div>
				<div className={styles['email']}>nikolja1990@gmail.com</div>
			</div>
			<div className={styles['menu']}>
				<NavLink to="/" className={({ isActive }) => cn(styles['link'], {
					[styles['active']]: isActive 
				})} >
					<img src="/menu-icon.svg" alt="Меню" />
					Меню
				</NavLink>
				
				<NavLink to="/cart" className={({ isActive }) => cn(styles['link'], {
					[styles['active']]: isActive 
				})} >
					<img src="/cart-icon.svg" alt="Корзина" />
					Корзина
				</NavLink>
			</div>
			<Button className={styles['exit']} >
				<img src="/exit-icon.svg" alt="Выйти" />
				Выйти
			</Button>
		</div>
		<div className={styles['content']}>
			<Outlet />
		</div>
	</div>
}
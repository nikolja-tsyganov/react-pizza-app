import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';

export function AuthLayout() {
	return <div className={styles['layout']}>
		<div className={styles['logo']}>
			<img src="/logo.svg" alt="Логотип компании" />
		</div>
		<div className={styles['content']}>
			<Outlet />
		</div>
	</div>
}
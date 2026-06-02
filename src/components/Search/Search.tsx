import { forwardRef } from 'react';
import styles from './Search.module.css';
import cn from 'classnames';
import type { SearchProps } from './Search.props';

const Input = forwardRef<HTMLInputElement, SearchProps>(function Input({ className, isValid = true, ...props }, ref) {
	return (
		<div className={styles['input-wrapper']}>
			<input 
				{...props}
				ref={ref}
				className={cn(
					className, 
					styles['input'], 
					{
						[styles['invalid']]: !isValid,
					}
				)}
				placeholder="Введите блюдо или состав"
			/>
			<img className={styles['icon']} src='/search-icon.svg' alt='Иконка лупы' />
		</div>
	);
});

export default Input;

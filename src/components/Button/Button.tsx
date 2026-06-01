import styles from './Button.module.css';
import cn from 'classnames';
import type { ButtonProps } from "./Button.props";

function Button({ children, className, appearence = 'small', ...props }: ButtonProps) {	
	return (
		<button 
			className={cn(
				styles['button'],
				styles['accent'],
				className,
				{
					[styles['big']]: appearence === 'big',
					[styles['small']]: appearence === 'small',
				}
			)} 
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;

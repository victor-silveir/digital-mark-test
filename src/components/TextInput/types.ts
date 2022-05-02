import { InputHTMLAttributes, MouseEvent, ReactNode } from 'react';

export type InputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'onClick' | 'id'
>;

export type TextFieldProps = {
	placeholder?: string;
	initialValue?: string;
	disabled?: boolean;
	error?: string;
	icon?: ReactNode;
	width?: string;
	inputClick?: () => void;
	iconClick?: () => void;
	// eslint-disable-next-line no-unused-vars
	onClick?: (event: MouseEvent) => void;
	onTyping?: () => void;
	display: boolean;
} & Omit<InputProps, 'onChange'>;

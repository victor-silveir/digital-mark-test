import { ChangeEvent, useEffect, useState } from 'react';

// eslint-disable-next-line import/no-cycle
import * as S from './styles';
import { TextFieldProps } from './types';

function TextInput({
	placeholder,
	initialValue = '',
	disabled = false,
	icon,
	inputClick,
	iconClick,
	onClick,
	width,
	display = false,
	onTyping,
	...props
}: TextFieldProps): JSX.Element {
	const [value, setValue] = useState(initialValue);

	useEffect(() => setValue(initialValue), [initialValue]);

	const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const newValue = e.currentTarget.value;
		setValue(newValue);

		!!onTyping && onTyping();
	};

	return (
		<S.Wrapper disabled={disabled} width={width} display={display}>
			<S.InputWrapper
				onClick={(event) => !disabled && !!onClick && onClick(event)}
			>
				{!!icon && (
					<S.Icon
						role="button"
						clickable={!!iconClick}
						onClick={() => !disabled && !!iconClick && iconClick()}
					>
						{icon}
					</S.Icon>
				)}
				<S.Input
					type="text"
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					disabled={disabled}
					onClick={() => !disabled && !!inputClick && inputClick()}
					{...props}
				/>
			</S.InputWrapper>
		</S.Wrapper>
	);
}

export default TextInput;

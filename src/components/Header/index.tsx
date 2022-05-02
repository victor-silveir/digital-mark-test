import { HTMLAttributes, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useFilterValue } from '../../hooks/use-filter-value';
import TextInput from '../TextInput';

import * as S from './styles';

type HeaderProps = {
	pageTitle: string;
} & HTMLAttributes<HTMLHeadElement>;

function Header({ pageTitle, ...props }: HeaderProps): JSX.Element {
	const { setFilterValue } = useFilterValue();
	const [a, setA] = useState(false);
	return (
		<S.NavHeader {...props}>
			<S.HeaderInformationsContainer>
				<h1>{pageTitle}</h1>
				<TextInput
					width="240"
					icon={<AiOutlineSearch />}
					placeholder="Search"
					iconClick={() => {
						setA((current) => !current);
					}}
					onTyping={(value) => {
						setFilterValue(value);
					}}
					display={a}
				/>
			</S.HeaderInformationsContainer>
		</S.NavHeader>
	);
}

export default Header;

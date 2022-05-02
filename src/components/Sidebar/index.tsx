import { BiRocket, BiCodeAlt } from 'react-icons/bi';
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import * as S from './styles';

function SideBar(): JSX.Element {
	const { colors } = useContext(ThemeContext);
	return (
		<S.Wrapper>
			<S.TitleContainer>
				<S.LogoContainer>
					<BiRocket color={colors.secondary} size={40} />
					<span>Digital Mark</span>
				</S.LogoContainer>
				<AiOutlineMenu color={colors.secondary} size={32} />
			</S.TitleContainer>

			<S.MenuContainer>
				<S.MenuGroup>
					<S.MenuItem>
						<AiOutlineUser size={25} />
						<S.ItemLink to="/">Clientes</S.ItemLink>
					</S.MenuItem>
					<S.MenuItem>
						<BiCodeAlt size={25} />
						<S.ItemLink to="/about-me">Sobre mim</S.ItemLink>
					</S.MenuItem>
				</S.MenuGroup>
			</S.MenuContainer>
		</S.Wrapper>
	);
}

export default SideBar;

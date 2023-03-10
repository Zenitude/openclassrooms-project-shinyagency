import { StyledLink, HeaderContainer } from '../../utils/style/Atom';
import lightLogo from '../../assets/light-logo.png';
import darkLogo from '../../assets/dark-logo.png';
import { useTheme } from '../../utils/hooks/hooks';

export default function Header() {
  const { theme } = useTheme();

  return (
    <HeaderContainer >
        <StyledLink theme={theme} to={`/`}>
          <img src={theme === 'light' ? darkLogo : lightLogo} alt="Logo Shiny Agency" />
        </StyledLink>
        <nav>
          <StyledLink theme={theme} to={`/`}>Accueil</StyledLink>
          <StyledLink theme={theme} to={`/freelances`}>Profils</StyledLink>
          <StyledLink theme={theme} to={`/survey/1`} $isFullLink>Faire le test</StyledLink>
        </nav>
    </HeaderContainer>
  )
}

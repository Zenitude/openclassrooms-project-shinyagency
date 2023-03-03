import { StyledLink, HomeContainer, HomeLeftCol, HomeTitle } from '../../utils/style/Atom';
import { ReactComponent as Illustration } from '../../assets/home-illustration.svg';
import { useTheme } from '../../utils/hooks/hooks';

function Home() {
  const { theme } = useTheme();

  return (
    <HomeContainer theme={theme}>
      <HomeLeftCol theme={theme}>
        <HomeTitle>Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents</HomeTitle>
        <StyledLink to={`#`} $isFullLink>Faire le test</StyledLink>
      </HomeLeftCol>
      <Illustration />
    </HomeContainer>
  );
}

export default Home;

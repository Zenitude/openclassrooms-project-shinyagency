import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { StyledLink } from '../../utils/style/Atom';
import { ReactComponent as Illustration } from '../../assets/home-illustration.svg';
import { useTheme } from '../../utils/hooks/hooks';

const HomeContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`;

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  line-height: 50px;
`

const LeftCol = styled.div`
color: ${({theme}) => theme === 'light' ? colors.black : colors.white };
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`

function Home() {
  const { theme } = useTheme();
  console.log(theme)

  return (
    <HomeContainer theme={theme}>
      <LeftCol theme={theme}>
        <StyledTitle>Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents</StyledTitle>
        <StyledLink to={`#`} $isFullLink>Faire le test</StyledLink>
      </LeftCol>
      <Illustration />
    </HomeContainer>
  );
}

export default Home;

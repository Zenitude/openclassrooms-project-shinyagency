import { ReactComponent as Error404 } from '../../assets/404.svg';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useTheme } from '../../utils/hooks/hooks';

const ErrorContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  padding: 32px;
  background-color: ${({theme}) => theme === 'light' ? colors.backgroundLight : colors.backgroundDark }
`;

export default function Error() {
  const { theme } = useTheme();

  return (
    <ErrorContainer theme={theme}>
      <Error404 />
    </ErrorContainer>
  )
}

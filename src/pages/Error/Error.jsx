import { ReactComponent as Error404 } from '../../assets/404.svg';
import { ErrorContainer } from '../../utils/style/Atom';
import { useTheme } from '../../utils/hooks/hooks';

export default function Error() {
  const { theme } = useTheme();

  return (
    <ErrorContainer theme={theme}>
      <Error404 />
    </ErrorContainer>
  )
}

import { FooterContainer, NightModeButton } from '../../utils/style/Atom';
import { useTheme } from '../../utils/hooks/hooks';
import EmailInput from '../EmailInput/EmailInput';

export default function Footer() {

  const { theme, toggleTheme } = useTheme();

  return (
    <FooterContainer>
        <EmailInput />
        <NightModeButton onClick={() => toggleTheme()}>
          Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
        </NightModeButton>
    </FooterContainer>
  )
}

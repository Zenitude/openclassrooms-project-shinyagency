import { FooterContainer, NightModeButton } from '../../utils/style/Atom';
import { useTheme } from '../../utils/hooks/hooks';

export default function Footer() {

  const { theme, toggleTheme } = useTheme();

  return (
    <FooterContainer>
        <NightModeButton onClick={() => toggleTheme()}>
          Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
        </NightModeButton>
    </FooterContainer>
  )
}

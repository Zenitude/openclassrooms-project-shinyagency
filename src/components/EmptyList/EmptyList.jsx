import { EmptyListContainer, EmptyListTitle, EmptyListSubTitle } from '../../utils/style/Atom';
import { ReactComponent as EmptyIllustration } from '../../assets/empty.svg';
import { useTheme } from '../../utils/hooks/hooks';

export default function EmptyList() {
    const { theme } = useTheme();

    return (
        <EmptyListContainer theme={theme}>
            <EmptyListTitle theme={theme}>Dommage...</EmptyListTitle>
            <EmptyIllustration />
            <EmptyListSubTitle theme={theme}>
                Il semblerait que vous n'ayez besoin d'aucune compétence
            </EmptyListSubTitle>
        </EmptyListContainer>
    )
}
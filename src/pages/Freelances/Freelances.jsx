import Card from '../../components/Card/Card';
import { Loader, FreelancesContainer, Title, Subtitle, CardContainer } from '../../utils/style/Atom';
import { useFetch, useTheme } from '../../utils/hooks/hooks';

export default function Freelances() {

    const { data, isLoading, error } = useFetch('http://localhost:8000/freelances');
    const { freelancersList } = data;
    const { theme } = useTheme();

    return (
        <FreelancesContainer>
            <Title theme={theme}>Trouvez votre partenaire</Title>
            <Subtitle theme={theme}>Chez Shiny nous réunissons les meilleurs profils pour vous.</Subtitle>
            { error && (<p>Il y a un problème</p>) }
            {
                isLoading 
                ? ( <Loader data-testid="loader" /> )
                : ( 
                    <CardContainer> {
                        freelancersList?.map((freelance, index) => (
                            <Card 
                                key={`${index}-${freelance.id}`}
                                label={freelance.job}
                                title={freelance.name}
                                picture={freelance.picture}
                            />
                        ))  
                    } </CardContainer>
                )
            } 
        </FreelancesContainer>
    )
}

import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atom';
import { useFetch, useTheme } from '../../utils/hooks/hooks';

const FreelancesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h1`
  font-size: 30px;
  color: ${({theme}) => theme === 'light' ? colors.black : colors.white };
  text-align: center;
  padding-bottom: 30px;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  color: ${({theme}) => theme === 'light' ? colors.secondary : colors.white };
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`;

const CardContainer = styled.section`
    width: 60%;
    margin: 20px auto 0;
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`;

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
                ? ( <Loader /> )
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

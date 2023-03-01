import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atom';

const FreelancesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const Subtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

const CardContainer = styled.section`
    width: 60%;
    margin: 20px auto 0;
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`;

export default function Freelances() {

    const [ dataFreelances, setDataFreelances ] = useState([]);
    const [ isDataLoading, setIsDataLoading ] = useState(false);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        (async function fetchFreelances() {
            setIsDataLoading(true);
            try {
                const response = await fetch('http://localhost:8000/freelances');
                const { freelancersList } = await response.json();
                setDataFreelances(freelancersList);
            } catch(error) {
                console.log('error : ' + error);
                setError(true);
            } finally {
                setIsDataLoading(false);
            }
        })();
    }, []);

    return (
        <FreelancesContainer>
            <Title>Trouvez votre partenaire</Title>
            <Subtitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</Subtitle>
            { error && (<p>Il y a un problème</p>) }
            {
                isDataLoading 
                ? ( <Loader /> )
                : ( 
                    <CardContainer> {
                        dataFreelances?.map((freelance, index) => (
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

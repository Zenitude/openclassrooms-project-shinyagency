import React from 'react';
import Card from '../../components/Card';
import styled from 'styled-components';

const FreelancesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1, p {
        text-align: center;
        margin: 20px 0;
    }
`;

const CardContainer = styled.section`
    width: 60%;
    margin: 20px auto 0;
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`;

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'UX Designer'
    },
    {
        name: 'Alexandra Dupont',
        jobTitle: 'Developpeuse Front-End'
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Devops'
    },
    {
        name: 'Lauren Ipsum',
        jobTitle: 'UX Designer'
    }
]

export default function Freelances() {

    return (
        <FreelancesContainer>
            <h1>Trouvez votre partenaire</h1>
            <p>Chez Shiny nous réunissons les meilleurs profils pour vous.</p>
            <CardContainer>
            {
                freelanceProfiles.map((profile, index) => (
                    <Card 
                        key={index}
                        label={profile.jobTitle}
                        title={profile.name}
                    />
                ))
            }
            </CardContainer>
        </FreelancesContainer>
    )
}

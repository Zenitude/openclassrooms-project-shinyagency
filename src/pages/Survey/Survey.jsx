import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atom';

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`;

const QuestionContent = styled.span`
  margin: 30px;
`;

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

export default function Survey() {

    const { questionNumber } = useParams();
    const [ surveyData, setSurveyData ] = useState({});
    const [ isDataLoading, setIsDataLoading ] = useState(false);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        (async function fetchSurvey() {
            setIsDataLoading(true);

            try {
                const response = await fetch(`http://localhost:8000/survey`);
                const { surveyData } = await response.json();
                setSurveyData(surveyData);
            } catch(error) {
                console.log('===== error =====', error);
                setError(true);
            } finally {
                setIsDataLoading(false)
            }
        })();
    }, []);

    return (
        <SurveyContainer>
            <QuestionTitle>Question {questionNumber}</QuestionTitle>
            { error && (<p>Il y a un problème</p>) }
            {isDataLoading 
                ? ( <Loader /> ) 
                : ( <QuestionContent>{surveyData[questionNumber]}</QuestionContent> )
            }
            <LinkWrapper>
                <Link to={`/survey/${parseInt(questionNumber) === 1 ? parseInt(questionNumber) : parseInt(questionNumber) - 1}`} >Précédent</Link>
                {
                    parseInt(questionNumber) === 10
                    ? (<Link to={`/results`}>Résultats</Link>)
                    : (<Link to={`/survey/${parseInt(questionNumber) + 1}`}>Suivant</Link>)
                }
            </LinkWrapper>

        </SurveyContainer>
    )
}

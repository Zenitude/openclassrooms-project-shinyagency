import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atom';
import { SurveyContext } from '../../utils/Context';

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
`;

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`;

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Survey() {

    const { questionNumber } = useParams();
    const [ surveyData, setSurveyData ] = useState({});
    const [ isDataLoading, setIsDataLoading ] = useState(false);
    const { answers, saveAnswers } = useContext(SurveyContext);
    const [ error, setError ] = useState(false);

    function saveReply(answer) {
      saveAnswers({ [questionNumber]: answer })
    }

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
            {answers &&
              (
                <ReplyWrapper>
                  <ReplyBox 
                    onClick={() => saveReply(true)} 
                    isSelected={answers[questionNumber] === true}
                  >Oui</ReplyBox>
                  <ReplyBox 
                    onClick={() => saveReply(false)} 
                    isSelected={answers[questionNumber] === false}
                  >Non</ReplyBox>
                </ReplyWrapper>
              )
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

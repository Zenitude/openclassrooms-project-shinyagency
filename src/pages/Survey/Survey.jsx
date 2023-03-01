import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atom';
import { SurveyContext } from '../../utils/context/Context';
import { useFetch, useTheme } from '../../utils/hooks/hooks';

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${({ theme }) =>
  theme === 'light' ? colors.primary : colors.backgroundLight};
  color : ${({ theme }) =>
    theme === 'light' ? colors.primary : colors.backgroundLight};
`;

const QuestionContent = styled.span`
  margin: 30px;
  color : ${({ theme }) =>
    theme === 'light' ? colors.primary : colors.backgroundLight};
`;

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: ${({ theme }) => theme === 'light' ? colors.black : colors.white };
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  color : ${({ theme }) =>
    theme === 'light' ? colors.primary : colors.backgroundLight};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
  theme === 'light' ? colors.nacre : colors.backgroundDark };;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${({ isSelected, theme}) =>
    isSelected ? `0px 0px 0px 2px ${theme === 'light' ? colors.primary : colors.secondary} inset` : 'none'};
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
    const { answers, saveAnswers } = useContext(SurveyContext);
    const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`);
    const { surveyData } = data;
    const { theme } = useTheme();

    function saveReply(answer) {
      saveAnswers({ [questionNumber]: answer })
    }

    return (
        <SurveyContainer>
            <QuestionTitle theme={theme}>Question {questionNumber}</QuestionTitle>
            { error && (<p>Il y a un problème</p>) }
            {isLoading 
                ? ( <Loader /> ) 
                : ( <QuestionContent>{surveyData && surveyData[questionNumber]}</QuestionContent> )
            }
            {answers &&
              (
                <ReplyWrapper>
                  <ReplyBox 
                    onClick={() => saveReply(true)} 
                    isSelected={answers[questionNumber] === true}
                    theme={theme}
                  >Oui</ReplyBox>
                  <ReplyBox 
                    onClick={() => saveReply(false)} 
                    isSelected={answers[questionNumber] === false}
                    theme={theme}
                  >Non</ReplyBox>
                </ReplyWrapper>
              )
            }
            
            <LinkWrapper theme={theme}>
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

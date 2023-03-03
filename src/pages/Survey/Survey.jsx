import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Loader, SurveyContainer, QuestionTitle, QuestionContent, ReplyWrapper, ReplyBox, LinkWrapper } from '../../utils/style/Atom';
import { SurveyContext } from '../../utils/context/Context';
import { useFetch, useTheme } from '../../utils/hooks/hooks';

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
                : ( <QuestionContent theme={theme}>{surveyData && surveyData[questionNumber]}</QuestionContent> )
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

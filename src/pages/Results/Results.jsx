import React, { useContext } from 'react';
import { useFetch } from '../../utils/hooks/hooks';
import { SurveyContext} from '../../utils/context/Context';
import { Loader, StyledLink, ResultsContainer, ResultsTitle, JobTitle, DescriptionWrapper, JobDescription } from '../../utils/style/Atom';
import { useTheme } from '../../utils/hooks/hooks';

export function formatJobList(title, listLength, index) {
  if(index === listLength -1) {
    return title;
  }
  return `${title},`;
}

export function formatQueryParams(answers) {
  const answersNumbers = Object.keys(answers);

  return answersNumbers.reduce((previousParams, answersNumber, index) => {
      const isFirstAnswer = index === 0;
      const separator = isFirstAnswer ? '' : '&';
      return `${previousParams}${separator}a${answersNumber}=${answers[answersNumber]}`
  }, '');
}

export default function Results() {

    const { theme } = useTheme();
    const { answers } = useContext(SurveyContext);
    const queryParams = formatQueryParams(answers);
    const { data, isLoading, error } = useFetch(`http://localhost:8000/results?${queryParams}`);
    const { resultsData } = data;   

    return (
        <div>
            <h1>Résultats</h1>
            {error && (<p>Il y a un problème</p>)}
            {
                isLoading 
                ? (<Loader data-testid="loader" />)
                : ( 
                    <ResultsContainer theme={theme}>
                        <ResultsTitle theme={theme}>
                            Les compétences dont vous avez besoin : {
                                resultsData && resultsData.map((result, index) => (
                                    <JobTitle
                                        key={`result-title-${index}-${result.title}`}
                                        theme={theme}
                                    >
                                        { formatJobList(result.title, resultsData.length, index) }
                                    </JobTitle>
                                ))  
                            }
                        </ResultsTitle>
                        
                        <StyledLink $isFullLink to="/freelances">
                            Découvrez nos profils
                        </StyledLink>

                        <DescriptionWrapper> {
                            resultsData && resultsData.map((result, index) => (
                            
                            <JobDescription
                                theme={theme}
                                key={`result-detail-${index}-${result.title}`}
                            >
                            
                                <JobTitle theme={theme} data-testid="job-title">{result.title}</JobTitle>
                                <p data-testid="job-description">{result.description}</p>

                            </JobDescription>))
                        } </DescriptionWrapper>
                  </ResultsContainer>

                )
            }
        </div>
    )
}

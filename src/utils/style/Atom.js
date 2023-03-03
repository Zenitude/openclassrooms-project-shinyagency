import { Link } from 'react-router-dom';
import colors from './colors';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
  margin: 0 auto;
`;

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: ${({theme}) => theme === 'light' ? colors.secondary : colors.white};
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};`}
`;

// HEADER

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  
  nav {
    margin-left: auto;
    padding-right: 15px;
  }

  img {
    width: 150px;
  }
`;

// FOOTER

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
`;
 
export const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.secondary};
    padding-top: 30px;
`;

// HOME

export const HomeContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`;

export const HomeTitle = styled.h2`
  padding-bottom: 30px;
  line-height: 50px;
`;

export const HomeLeftCol = styled.div`
color: ${({theme}) => theme === 'light' ? colors.black : colors.white };
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`;

// SURVEY

export const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${({ theme }) =>
  theme === 'light' ? colors.primary : colors.backgroundLight};
  color : ${({ theme }) =>
    theme === 'light' ? colors.primary : colors.backgroundLight};
`;

export const QuestionContent = styled.span`
  margin: 30px;
  color : ${({ theme }) =>
    theme === 'light' ? colors.black : colors.white};
`;

export const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: ${({ theme }) => theme === 'light' ? colors.black : colors.white };
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;

export const ReplyBox = styled.button`
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

export const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

// RESULTS

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`;

export const ResultsTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`;

export const DescriptionWrapper = styled.div`
  padding: 60px;
`;

export const JobTitle = styled.span`
  color: ${({ theme }) =>
    theme === 'light' ? colors.primary : colors.backgroundLight};
  text-transform: capitalize;
`;

export const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`;

// FREELANCES

export const FreelancesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: ${({theme}) => theme === 'light' ? colors.black : colors.white };
  text-align: center;
  padding-bottom: 30px;
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  color: ${({theme}) => theme === 'light' ? colors.secondary : colors.white };
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`;

export const CardContainer = styled.section`
    width: 60%;
    margin: 20px auto 0;
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`;

// CARD

export const CardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    margin: 0 auto;
    background-color: ${({theme}) => theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
    border-radius: 30px;
    width: 350px;
    height: 300px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px ${({theme}) => theme === 'light' ? colors.nacre : colors.black};;
    }
`;

export const CardLabel = styled.span`
    color: ${({theme}) => theme === 'light' ? colors.primary : colors.white};
    font-size: 22px;
    font-weight: bold;
    align-self: baseline;
`;

export const CardImage = styled.img`
    width: 125px;
    height: 125px;
    border-radius: 50%;
`;

export const CardTitle = styled.span`
  color: ${({theme}) => theme === 'light' ? colors.black : colors.white};
  font-size: 22px;
`;

// ERROR

export const ErrorContainer = styled.div`
width: 90%;
margin: 0 auto;
text-align: center;
padding: 32px;
background-color: ${({theme}) => theme === 'light' ? colors.backgroundLight : colors.backgroundDark }
`;

// EmailInput

export const InputWrapper = styled.div`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`;

export const StyledInput = styled.input`
  border: none;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  background-color: transparent;
  border-bottom: 1px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  margin-top: 5px;
  margin-bottom: 15px;
`;

// EmptyList

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  
  svg {
    margin: 30px 0;
  }
`;

export const EmptyListTitle = styled.h1`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;

export const EmptyListSubTitle = styled.h3`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: normal;
`;
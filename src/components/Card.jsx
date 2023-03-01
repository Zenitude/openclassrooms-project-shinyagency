import React from 'react';
import PropTypes from 'prop-types';
import DefaultPicture from '../assets/profile.png';
import styled from 'styled-components';
import colors from '../utils/style/colors';
import { useTheme } from '../utils/hooks/hooks';

const CardWrapper = styled.article`
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

const CardLabel = styled.span`
    color: ${({theme}) => theme === 'light' ? colors.primary : colors.white};
    font-size: 22px;
    font-weight: bold;
    align-self: baseline;
`;

const CardImage = styled.img`
    width: 125px;
    height: 125px;
    border-radius: 50%;
`;

const CardTitle = styled.span`
  color: ${({theme}) => theme === 'light' ? colors.black : colors.white};
  font-size: 22px;
`;

export default function Card({ label, title, picture }) {
    const { theme } = useTheme();
    return (
        <CardWrapper theme={theme}>
            <CardLabel theme={theme}>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardTitle theme={theme}>{title}</CardTitle>
        </CardWrapper>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
}

Card.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture
}
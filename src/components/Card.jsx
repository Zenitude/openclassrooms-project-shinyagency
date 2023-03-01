import React from 'react';
import PropTypes from 'prop-types';
import DefaultPicture from '../assets/profile.png';
import styled from 'styled-components';
import colors from '../utils/style/colors';

const CardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    margin: 0 auto;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px ${colors.nacre};
    }
`;

const CardLabel = styled.span`
    color: ${colors.primary};
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
  color: black;
  font-size: 22px;
`;

export default function Card({ label, title, picture }) {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardTitle>{title}</CardTitle>
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
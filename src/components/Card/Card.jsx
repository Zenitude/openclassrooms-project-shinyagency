import { useState } from 'react';
import { CardWrapper, CardLabel, CardImage, CardTitle } from '../../utils/style/Atom';
import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/profile.png';
import { useTheme } from '../../utils/hooks/hooks';

export default function Card({ label, title, picture }) {
    const { theme } = useTheme();
    const [isFavorite, setIsFavorite] = useState(false)
    const star = isFavorite ? '⭐️' : '';

    return (
        <CardWrapper theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
            <CardLabel theme={theme}>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardTitle theme={theme}>
                {star} {title} {star}
            </CardTitle>
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
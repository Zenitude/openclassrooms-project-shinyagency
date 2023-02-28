import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Survey() {

    const { questionNumber } = useParams();

    return (
        <div>
        <h1>Questionnaire 🧮</h1>
        <h2>Question {questionNumber}</h2>
        <Link to={`/survey/${parseInt(questionNumber) === 1 ? parseInt(questionNumber) : parseInt(questionNumber) - 1}`} >Précédent</Link>
        {
            parseInt(questionNumber) === 10 
            ? (<Link to={`/results`}>Résultats</Link>) 
            : (<Link to={`/survey/${parseInt(questionNumber) + 1}`}>Suivant</Link>)
        }

        <div>Contenu Question</div>
        
        
        
        </div>
    )
}

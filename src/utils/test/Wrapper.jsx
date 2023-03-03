import { BrowserRouter } from 'react-router-dom';
import { render as bigRender } from '@testing-library/react';
import React from 'react';
import { ThemeProvider, SurveyProvider } from '../context/Context';

function Wrapper({children}) {
    return (
      <BrowserRouter>
            <ThemeProvider>
                <SurveyProvider>
                    {children}
                </SurveyProvider>
            </ThemeProvider>
      </BrowserRouter>
    )
}

export function render(ui) {
    bigRender(ui, { wrapper: Wrapper })
}

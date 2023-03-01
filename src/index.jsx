import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, SurveyProvider } from './utils/context/Context';
import GlobalStyle from './utils/style/GlobalStyle';
import Header from './components/Header';
import Router from './components/Router';
import Footer from './components/Footer';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <ThemeProvider>

        <SurveyProvider>

          <GlobalStyle />

          <Header />

          <main>
            
              <Router />
            
          </main>

          <Footer />

        </SurveyProvider>

      </ThemeProvider>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

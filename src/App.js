import React from 'react';
import {MainPage} from './mainPage/MainPage';
import {QuestionPage} from './questionPage/QuestionPage';
import questionsResponse from './data.json';

export const AppContext = React.createContext();

function App() {
    const questions = questionsResponse.results;
    const [activePage, setActivePage] = React.useState('MainPage');
    const [activeQuestionIndex, setActiveQuestionIndex] = React.useState(0);
    const [activeQuestion, setActiveQuestion] = React.useState(questions[0]);
    const isMainPage = activePage === 'MainPage';
    const isQuestionPage = activePage === 'QuestionPage';

    const startGame = () => {
        setActivePage('QuestionPage');
    };

    const nextQuestion = () => {
        const nextQuestionIndex = activeQuestionIndex + 1;
        if (nextQuestionIndex < 10) {
            setActiveQuestionIndex(nextQuestionIndex);
            setActiveQuestion(questions[nextQuestionIndex]);
        } else {
            setActivePage('MainPage');
        }
    };

    const contextValue = {
        startGame,
        activeQuestion,
        nextQuestion,
    };

    return (
        <div>
            <AppContext.Provider value={contextValue}>
                {isMainPage && <MainPage />}
                {isQuestionPage && <QuestionPage />}
            </AppContext.Provider>
        </div>
    );
}

export default App;

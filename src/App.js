import React from 'react';
import {MainPage} from './mainPage/MainPage';
import {QuestionPage} from './questionPage/QuestionPage';
import {ResultPage} from './resultPage/ResultPage';
import questionsResponse from './data.json';

export const AppContext = React.createContext();

function App() {
    const questions = questionsResponse.results;
    const [activePage, setActivePage] = React.useState('MainPage');
    const [activeQuestionIndex, setActiveQuestionIndex] = React.useState(0);
    const [activeQuestion, setActiveQuestion] = React.useState(questions[0]);
    const [score, setScore] = React.useState(0);
    const isMainPage = activePage === 'MainPage';
    const isQuestionPage = activePage === 'QuestionPage';
    const isResultPage = activePage === 'ResultPage';

    const startGame = () => {
        setActivePage('QuestionPage');
        setActiveQuestionIndex(0);
        setActiveQuestion(questions[0]);
    };

    const nextQuestion = () => {
        const nextQuestionIndex = activeQuestionIndex + 1;
        if (nextQuestionIndex < 10) {
            setActiveQuestionIndex(nextQuestionIndex);
            setActiveQuestion(questions[nextQuestionIndex]);
        } else {
            setActivePage('ResultPage');
        }
    };

    const increaseCorrectAnswerScore = () => {
        setScore(score + 1);
    };

    const contextValue = {
        numberOfQuestions: questions.length,
        startGame,
        activeQuestion,
        activeQuestionIndex,
        nextQuestion,
        score,
        increaseCorrectAnswerScore,
    };

    return (
        <div>
            <AppContext.Provider value={contextValue}>
                {isMainPage && <MainPage />}
                {isQuestionPage && <QuestionPage />}
                {isResultPage && <ResultPage />}
            </AppContext.Provider>
        </div>
    );
}

export default App;

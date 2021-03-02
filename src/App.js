import React from 'react';
import {MainPage} from './components/mainPage/MainPage';
import {QuestionPage} from './components/questionPage/QuestionPage';
import {ResultPage} from './components/resultPage/ResultPage';
import axios from 'axios';

export const AppContext = React.createContext();

function App() {
    const url = 'https://opentdb.com/api.php?amount=15&category=22&difficulty=easy';
    const [questionCards, setQuestionCards] = React.useState([]);
    const [activePage, setActivePage] = React.useState('MainPage');
    const [activeQuestionIndex, setActiveQuestionIndex] = React.useState(0);
    const [activeQuestion, setActiveQuestion] = React.useState(questionCards[0]);
    const [score, setScore] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(true);
    const isMainPage = activePage === 'MainPage';
    const isQuestionPage = activePage === 'QuestionPage';
    const isResultPage = activePage === 'ResultPage';

    React.useEffect(() => {
        if (isMainPage || isResultPage) {
            setIsLoading(true);
            axios
                .get(url)
                .then((response) => {
                    setQuestionCards(response.data.results);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [isMainPage, isResultPage]);

    const startGame = () => {
        setActivePage('QuestionPage');
        setActiveQuestionIndex(0);
        setActiveQuestion(questionCards[0]);
        setScore(0);
    };

    const nextQuestion = () => {
        const nextQuestionIndex = activeQuestionIndex + 1;
        if (nextQuestionIndex < 15) {
            setActiveQuestionIndex(nextQuestionIndex);
            setActiveQuestion(questionCards[nextQuestionIndex]);
        } else {
            setActivePage('ResultPage');
        }
    };

    const increaseCorrectAnswerScore = () => {
        setScore(score + 1);
    };

    const contextValue = {
        numberOfQuestions: questionCards.length,
        startGame,
        activeQuestion,
        activeQuestionIndex,
        nextQuestion,
        score,
        increaseCorrectAnswerScore,
        isLoading,
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

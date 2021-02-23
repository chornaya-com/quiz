import React from 'react';
import {MainPage} from './mainPage/MainPage';
import {QuestionPage} from './questionPage/QuestionPage';

export const IsActivePageContext = React.createContext();

function App() {
    const [activePage, setActivePage] = React.useState('MainPage');
    const isMainPage = activePage === 'MainPage';
    const isQuestionPage = activePage === 'QuestionPage';

    const startGame = () => {
        setActivePage('QuestionPage');
    };

    const contextValue = {
        activePage,
        startGame,
    };

    return (
        <div>
            <IsActivePageContext.Provider value={contextValue}>
                {isMainPage && <MainPage />}
                {isQuestionPage && <QuestionPage />}
            </IsActivePageContext.Provider>
        </div>
    );
}

export default App;

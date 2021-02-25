import React from 'react';
import * as cn from './ResultPage.module.css';
import {StartButton} from '../startButton/StartButton';
import {AppContext} from '../App';

export function ResultPage() {
    const {score, numberOfQuestions} = React.useContext(AppContext);
    return (
        <div className={cn.background}>
            <div className={cn.header}>Congratulations!</div>
            <div className={cn.score}>
                Your score is {score}/{numberOfQuestions}
            </div>
            <StartButton />
        </div>
    );
}

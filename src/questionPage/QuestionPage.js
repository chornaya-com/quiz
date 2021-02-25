import React from 'react';
import * as cn from './QuestionPage.module.css';
import {QuestionCard} from '../questionCard/QuestionCard';
import {AppContext} from '../App';

export function QuestionPage() {
    const {activeQuestionIndex, numberOfQuestions} = React.useContext(AppContext);

    return (
        <div className={cn.background}>
            <div className={cn.header}>
                Question {activeQuestionIndex + 1} of {numberOfQuestions}
            </div>
            <QuestionCard />
        </div>
    );
}

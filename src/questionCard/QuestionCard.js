import React from 'react';
import * as cn from './QuestionCard.module.css';
import {AppContext} from '../App';

export function QuestionCard() {
    const {activeQuestion, nextQuestion} = React.useContext(AppContext);
    const {id, correct_answer, incorrect_answers, question} = activeQuestion;
    const allAnswers = [correct_answer, ...incorrect_answers].sort(() => 0.5 - Math.random());

    const [selectedAnswer, setSelectedAnswer] = React.useState(false);

    const showAnswer = () => {
        if (selectedAnswer === correct_answer) {
            setSelectedAnswer(true);
        }
        console.log(correct_answer, selectedAnswer);
        setTimeout(() => {
            nextQuestion();
        }, 1000);
    };

    return (
        <div className={cn.card}>
            <div className={cn.question} key={id} dangerouslySetInnerHTML={{__html: question}} />
            <div className={cn.answers}>
                {allAnswers.map((answer, i) => (
                    <button
                        className={cn.answer}
                        onClick={showAnswer}
                        key={i}
                        dangerouslySetInnerHTML={{__html: answer}}
                    />
                ))}
            </div>
        </div>
    );
}

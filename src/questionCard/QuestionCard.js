import React from 'react';
import * as cn from './QuestionCard.module.css';
import {AppContext} from '../App';
import classNames from 'classnames';

export function QuestionCard() {
    const {activeQuestion, nextQuestion, increaseCorrectAnswerScore} = React.useContext(AppContext);
    const {id, correct_answer, incorrect_answers, question} = activeQuestion;

    const allAnswers = React.useMemo(
        () => [correct_answer, ...incorrect_answers].sort(() => 0.5 - Math.random()),
        [correct_answer, incorrect_answers],
    );

    const [selectedAnswer, setSelectedAnswer] = React.useState(false);

    const showAnswer = (answer) => {
        setSelectedAnswer(answer);
        if (answer === correct_answer) {
            increaseCorrectAnswerScore();
        }
        setTimeout(() => {
            setSelectedAnswer(false);
            nextQuestion();
        }, 1000);
    };

    return (
        <div className={cn.card}>
            <div className={cn.question} key={id} dangerouslySetInnerHTML={{__html: question}} />
            <div className={cn.answers}>
                {allAnswers.map((answer, i) => {
                    const isSelectedAnswer = answer === selectedAnswer;
                    const isCorrectAnswer = answer === correct_answer && selectedAnswer;
                    const isWrongAnswer = answer !== correct_answer && isSelectedAnswer;

                    return (
                        <button
                            className={classNames(cn.answer, {
                                [cn.correct]: isCorrectAnswer,
                                [cn.wrong]: isWrongAnswer,
                            })}
                            onClick={() => showAnswer(answer)}
                            key={i}
                            dangerouslySetInnerHTML={{__html: answer}}
                        />
                    );
                })}
            </div>
        </div>
    );
}

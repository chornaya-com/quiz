import React from 'react';
import * as cn from './QuestionCard.module.css';
import {AppContext} from '../../App';
import classNames from 'classnames';
import useSound from 'use-sound';
import rightAnswer from '../../sounds/rightAnswer.mp3';
import wrongAnswer from '../../sounds/wrongAnswer.mp3';

export function QuestionCard() {
    const [playRight] = useSound(rightAnswer, {volume: 0.5});
    const [playWrong] = useSound(wrongAnswer, {volume: 0.5});
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
            playRight();
            increaseCorrectAnswerScore();
        } else {
            playWrong();
        }

        setTimeout(() => {
            setSelectedAnswer(false);
            nextQuestion();
        }, 500);
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

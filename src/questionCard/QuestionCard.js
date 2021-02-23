import React from 'react';
import * as cn from './QuestionCard.module.css';

export function QuestionCard() {
    return (
        <div className={cn.card}>
            <div className={cn.question}>Question: What date is it today?</div>
            <div className={cn.answers}>
                <div className={cn.answer}>answer</div>
            </div>
        </div>
    );
}

import React from 'react';
import * as cn from './QuestionPage.module.css';
import {QuestionCard} from '../questionCard/QuestionCard';

export function QuestionPage() {
    return (
        <div className={cn.background}>
            <QuestionCard />
        </div>
    );
}

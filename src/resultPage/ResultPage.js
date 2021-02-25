import React from 'react';
import * as cn from './ResultPage.module.css';
import {StartButton} from '../startButton/StartButton';

export function ResultPage() {
    return (
        <div className={cn.background}>
            <div className={cn.header}>Congratulations!</div>
            <div className={cn.score}>Your score is 10/10</div>
            <StartButton />
        </div>
    );
}

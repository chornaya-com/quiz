import React from 'react';
import * as cn from './MainPage.module.css';
import {StartButton} from '../startButton/StartButton';

export function MainPage() {
    return (
        <div className={cn.background}>
            <div className={cn.header}>Quiz Game</div>
            {/*<div className={cn.headerDescription}>Rules</div>*/}
            {/*<div className={cn.textDescription}>*/}
            {/*    <ul>*/}
            {/*        <li>10 questions</li>*/}
            {/*        <li>1 correct answer</li>*/}
            {/*        <li>30 seconds per question</li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            <StartButton />
        </div>
    );
}

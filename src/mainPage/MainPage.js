import React from 'react';
import * as cn from './MainPage.module.css';
import {StartButton} from '../startButton/StartButton';

export function MainPage() {
    return (
        <div className={cn.background}>
            <div className={cn.header}>Quiz Game</div>
            <StartButton />
        </div>
    );
}

import React from 'react';
import * as cn from './MainPage.module.css';
import {StartButton} from '../startButton/StartButton';
import {AppContext} from '../App';
import {Loader} from '../loader/Loader';

export function MainPage() {
    const {isLoading} = React.useContext(AppContext);
    return (
        <div className={cn.background}>
            <div className={cn.header}>Quiz Game</div>
            {isLoading && <Loader />}
            {!isLoading && <StartButton />}
        </div>
    );
}

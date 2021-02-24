import React from 'react';
import * as cn from './StartButton.module.css';
import {AppContext} from '../App';

export function StartButton() {
    const {startGame} = React.useContext(AppContext);

    return (
        <button className={cn.button} onClick={startGame}>
            Start Game
        </button>
    );
}

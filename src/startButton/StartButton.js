import React from 'react';
import * as cn from './StartButton.module.css';
import {IsActivePageContext} from '../App';

export function StartButton() {
    const {startGame} = React.useContext(IsActivePageContext);

    return (
        <button className={cn.button} onClick={startGame}>
            Start Game
        </button>
    );
}

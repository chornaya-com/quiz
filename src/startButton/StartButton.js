import React from 'react';
import * as cn from './StartButton.module.css';

export function StartButton() {
    return (
        <div>
            <button className={cn.button}>Start Game</button>
        </div>
    );
}

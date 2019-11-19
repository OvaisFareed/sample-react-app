import React, { useState, useEffect } from 'react';

const Stopwatch: React.FC = () => {

    let [initialTime, setTime] = useState(0);
    let [buttonText, setButtonText] = useState('start');

    useEffect(() => {
        
        setInterval(() => setTime(initialTime + 1), 1000);
        buttonText = 'stop';

        return () => {
            setTime(0);
            buttonText = 'start';
            clearInterval();
        }
    }, [buttonText]);

    setButtonText(() => {
        setTime(0);
        return buttonText === 'start' ? 'stop' : 'start';
    });

    return (
        <div>
            <h2>StopWatch</h2>
            <button onClick={() => setButtonText}>{buttonText}</button>
            <div>00:{initialTime}</div>
        </div>
    );
}


export default Stopwatch;
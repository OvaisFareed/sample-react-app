import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {

    let [initialTime, setTime] = useState(
        new Date()
    );

    useEffect(() => {
        const id = setInterval(() => setTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);

    return (
        <div>
            <h2>Time updating using useState( ) and useEffect( ) hooks:</h2>
            
            <p>It is {initialTime.toLocaleTimeString()}.</p>
        </div>
    );
}


export default Clock;
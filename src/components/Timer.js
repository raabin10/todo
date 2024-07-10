import React, { useState, useEffect } from 'react';

const Timer = ({ isRunning, initialDuration }) => {
    const [duration, setDuration] = useState(initialDuration);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setDuration((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const formatDuration = (duration) => {
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        const seconds = duration % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <span>{formatDuration(duration)}</span>
    );
};

export default Timer;

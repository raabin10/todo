import React, { useEffect, useState } from 'react';
import Timer from './Timer';

const ActivityRow = ({ index, activity, updateActivity }) => {
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (activity.status === 'Ongoing') {
            setIsRunning(true);
        } else {
            setIsRunning(false);
        }
    }, [activity.status]);

    const handleStart = () => {
        updateActivity(index, { status: 'Ongoing' });
    };

    const handlePause = () => {
        updateActivity(index, { status: 'Paused' });
    };

    const handleResume = () => {
        updateActivity(index, { status: 'Ongoing' });
    };

    const handleEnd = () => {
        updateActivity(index, { status: 'Completed' });
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{activity.name}</td>
            <td><Timer isRunning={isRunning} initialDuration={activity.duration} /></td>
            <td>
                {activity.status === 'Pending' && <button onClick={handleStart}>Start</button>}
                {activity.status === 'Ongoing' && <button onClick={handlePause}>Pause</button>}
                {activity.status === 'Paused' && <button onClick={handleResume}>Resume</button>}
                <button onClick={handleEnd}>End</button>
            </td>
            <td>{activity.status}</td>
        </tr>
    );
};

export default ActivityRow;

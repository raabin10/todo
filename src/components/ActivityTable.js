import React, { useState, useEffect } from 'react';
import ActivityRow from './ActivityRow';

const ActivityTable = () => {
    const [activities, setActivities] = useState([]);

    const addActivity = (name) => {
        setActivities([...activities, { name, duration: 0, status: 'Pending' }]);
    };

    const updateActivity = (index, updates) => {
        const updatedActivities = activities.map((activity, i) => i === index ? { ...activity, ...updates } : activity);
        setActivities(updatedActivities);
    };

    return (
        <div>
            <h2>To-Do List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Activity Name</th>
                        <th>Activity Duration</th>
                        <th>Actions</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map((activity, index) => (
                        <ActivityRow
                            key={index}
                            index={index}
                            activity={activity}
                            updateActivity={updateActivity}
                        />
                    ))}
                </tbody>
            </table>
            <button onClick={() => addActivity(prompt('Enter activity name'))}>Add Activity</button>
        </div>
    );
};

export default ActivityTable;

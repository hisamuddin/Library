import React from 'react';
import '../TopicsList.css';

const TopicsList = ({ topics, onSelectTopic }) => {
    return (
        <div className="topics-list">
            <h2>Topics</h2>
            <ul>
                {topics.map((topic) => (
                    <li key={topic.id} onClick={() => onSelectTopic(topic.id)}>
                        {topic.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopicsList;

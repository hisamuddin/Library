import React from 'react';
import '../TopicDetail.css';

const TopicDetail = ({ topic }) => {
    if (!topic) return <p>Select a topic to view details</p>;

    return (
        <div className="topic-detail">
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
            <div className="content">{topic.content}</div>
        </div>
    );
};

export default TopicDetail;

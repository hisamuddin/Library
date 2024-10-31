import React from 'react';
import '../TopicDetail.css';


// const TopicDetail = ({ topic }) => {
//     if (!topic) return <p>Select a topic to view details</p>;

//     return (
//         <div className="topic-detail">
//             <h2>{topic.title}</h2>
//             <p>{topic.description}</p>
//             <div className="content">{topic.content}</div>
//         </div>
//     );
// };

// export default TopicDetail;

const TopicViewer = ({ topics }) => {
    return (
        <div>
            {topics.map((topic) => (
                <div key={topic.id}>
                    <h2>{topic.title}</h2>
                    <p>{topic.description}</p>

                    {/* Access each section in the content */}
                    {Object.entries(topic.content).map(([sectionKey, sectionContent]) => (
                        <div key={sectionKey}>
                            <h3>{sectionKey.replace(/_/g, ' ')}</h3>
                            {typeof sectionContent === 'object' && sectionContent.explanation ? (
                                <div>
                                    <p>{sectionContent.explanation}</p>
                                    {sectionContent.code && (
                                        <pre>
                                            {sectionContent.code.map((line, index) => (
                                                <code key={index}>{line}<br /></code>
                                            ))}
                                        </pre>
                                    )}
                                </div>
                            ) : (
                                <p>{sectionContent}</p>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default TopicViewer;

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TopicsList from './components/TopicsList';
import TopicViewer from './components/TopicViewer';

import Array from './components/Array';
import studyMaterials from './data/array.json';
import studyMaterial from './data/studyMaterial.json';

import './App.css';

const App = () => {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    const sortedTopics = studyMaterial.topics.sort((a, b) => a.order - b.order);
    setTopics(sortedTopics);
  }, []);

  const handleSelectTopic = (id) => {
    const topic = topics.find((t) => t.id === id);
    setSelectedTopic(topic);
  };

  return (
    <div className="App">
      <Header />
      <div className="main">
        <TopicsList topics={topics} onSelectTopic={handleSelectTopic} />
        <TopicViewer topic={selectedTopic} />

        <Array topic={studyMaterials} />
      </div>
    </div>
  );
};

export default App;



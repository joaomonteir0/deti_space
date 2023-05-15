import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TopicPage = () => {
  const { topicId } = useParams();
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the topic data based on the topicId
    // Replace this with your actual API call or data retrieval logic
    const fetchTopic = async () => {
      try {
        // Simulating API call delay with setTimeout
        setTimeout(() => {
          const topicData = {
            id: topicId,
            title: 'Sample Topic Title',
            content: 'Sample Topic Content',
          };
          setTopic(topicData);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching topic:', error);
        setLoading(false);
      }
    };

    fetchTopic();
  }, [topicId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!topic) {
    return <div>Topic not found</div>;
  }

  return (
    <div>
      <h2>{topic.title}</h2>
      <p>{topic.content}</p>
    </div>
  );
};

export default TopicPage;

// src/components/Timeline.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Timeline.css';
import TimelineItem from './TimelineItem';

const timelineData = [
  { title: 'Event 1', date: '0000-01-01', description: 'Description for event 1' },
  { title: 'Event 2', date: '0000-02-01', description: 'Description for event 2' },
  { title: 'Event 3', date: '0000-03-01', description: 'Description for event 3' },
  { title: 'Event 4', date: '0000-04-01', description: 'Description for event 4' },
];

const Timeline = () => {
  const [linePath, setLinePath] = useState('');
  const itemsRef = useRef([]);

  const updateLine = () => {
    if (itemsRef.current.length > 0) {
      const pathData = itemsRef.current
        .map((item, index) => {
          const { offsetTop, offsetHeight } = item;
          const x = 50; // Center of the container width
          const y = offsetTop + offsetHeight / 2;
          const prevY = index > 0 ? itemsRef.current[index - 1].offsetTop + itemsRef.current[index - 1].offsetHeight / 2 : y;
          return index === 0 
            ? `M ${x} ${y}` 
            : `S ${x} ${prevY}, ${x} ${y}`; // Use smooth curve commands
        })
        .join(' ');
      setLinePath(pathData);
    }
  };

  useEffect(() => {
    updateLine();
    window.addEventListener('scroll', updateLine);
    window.addEventListener('resize', updateLine);
    return () => {
      window.removeEventListener('scroll', updateLine);
      window.removeEventListener('resize', updateLine);
    };
  }, []);

  return (
    <div className="timeline-container">
      <svg className="timeline-line-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d={linePath} fill="none" stroke="#f8b195" strokeWidth="4" />
      </svg>
      {timelineData.map((data, idx) => (
        <TimelineItem
          data={data}
          key={idx}
          position={idx % 2 === 0 ? 'left' : 'right'}
          index={idx}
          ref={(el) => (itemsRef.current[idx] = el)}
        />
      ))}
    </div>
  );
};

export default Timeline;

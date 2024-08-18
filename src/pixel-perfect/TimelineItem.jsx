// src/components/TimelineItem.jsx
import React, { forwardRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Slide } from 'react-awesome-reveal';


import './TimelineItem.css';

const TimelineItem = forwardRef(({ data, position, index }, ref) => {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={(el) => {
        inViewRef(el);
        ref(el);
      }}
      className={`timeline-item ${inView ? 'in-view' : ''} ${position}`}
      data-index={index}
    >
      <Slide bottom when={inView}>
        <div className="timeline-item-content">
          <span className="tag">{data.date}</span>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <span className="circle" />
        </div>
      </Slide>
    </div>
  );
});

export default TimelineItem;

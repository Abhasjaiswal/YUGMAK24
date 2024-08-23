import React from 'react';
import { useInView } from 'react-intersection-observer';

function AboutEvent() {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // The percentage of the element that needs to be visible to trigger the animation
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div
        ref={titleRef}
        className={`text-center transition-transform duration-1000 ease-in-out transform ${
          titleInView ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        } md:text-6xl md:font-extrabold text-4xl font-bold`}
      >
        <h1>About Drishय</h1>
      </div>

      <div
        ref={contentRef}
        className={`m-6 md:m-12 lg:m-16 transition-all duration-1000 ease-in-out transform ${
          contentInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="w-full md:w-[50vw] h-auto md:h-[40vh] backdrop-blur-md bg-white/30 shadow-lg shadow-[#F299A0] rounded-3xl p-4">
          <p>Add your content here...</p>
        </div>
      </div>
    </div>
  );
}

export default AboutEvent;

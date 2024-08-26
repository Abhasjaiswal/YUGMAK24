import React from 'react';
import { useInView } from 'react-intersection-observer';

function AboutEvent() {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-12 bg-gradient-to-br from-[#f0f4f8] to-[#ffffff]">
      <div
        ref={titleRef}
        className={`text-center transition-transform duration-1000 ease-in-out transform ${
          titleInView ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        } text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800`}
      >
        <h1 className="text-[36px] md:leading-[44px] font-clash-grotesk font-bold text-transparent bg-clip-text text-slate-900">
          About Drishय
        </h1>
      </div>

      <div
        ref={contentRef}
        className={`mt-6 sm:mt-8 lg:mt-12 transition-all duration-1000 ease-in-out transform ${
          contentInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto h-auto backdrop-blur-lg bg-white/50 shadow-lg shadow-[#F299A0] rounded-3xl p-6 sm:p-8 border border-gray-200">
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Pixel Perfect is a platform for aspiring filmmakers to create impactful short films that inspire social change. By focusing on themes like environmental conservation and mental health, participants craft original stories with creativity, clarity, and purpose. Our event encourages collaboration and technical growth, offering a space for both beginners and experienced filmmakers to transform ideas into powerful narratives that can drive real societal impact.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutEvent;

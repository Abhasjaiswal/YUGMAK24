import React, { useEffect, useRef } from 'react';
import './timeline.css';
import { IoMdGlobe } from 'react-icons/io';
import { FaChalkboardTeacher, FaRegUser, FaKeyboard, FaMedal } from 'react-icons/fa';
import { TfiWrite } from 'react-icons/tfi';
import { GiPodiumWinner } from 'react-icons/gi';

export default function Timeline() {
  const timelineRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    timelineRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      timelineRefs.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <div className="container bg-[white]">
        <p className="heading">Timeline</p>
        <div className="row py-5 ">
          <div className="col-md-12">
            <div className="main-timeline mx-auto">
              {[
                {
                  icon: <IoMdGlobe />,
                  title: 'Hackathon Starts',
                  description: '16th March | 9:00 AM | Inaugural Ceremony',
                },
                {
                  icon: <FaChalkboardTeacher />,
                  title: 'Abstract Presentation Round',
                  description: '16th March | 11:00 AM',
                },
                {
                  icon: <FaRegUser />,
                  title: 'First Elimination',
                  description: '16th March | 3:00 PM',
                },
                {
                  icon: <FaKeyboard />,
                  title: 'Coding Starts',
                  description: '16th March | 4:00 PM',
                },
                {
                  icon: <TfiWrite />,
                  title: 'First Evaluation',
                  description: '16th March | 6:30 PM',
                },
                {
                  icon: <TfiWrite />,
                  title: 'Second Evaluation',
                  description: '17th March | 4:00 AM',
                },
                {
                  icon: <FaRegUser />,
                  title: 'Second Elimination',
                  description: '17th March | 6:00 AM',
                },
                {
                  icon: <TfiWrite />,
                  title: 'Third Evaluation',
                  description: '17th March | 11:00 AM',
                },
                {
                  icon: <FaRegUser />,
                  title: 'Third Elimination',
                  description: '17th March | 12:00 PM',
                },
                {
                  icon: <FaChalkboardTeacher />,
                  title: 'Final Presentation Round',
                  description: '17th March | 3:00 PM',
                },
                {
                  icon: <GiPodiumWinner />,
                  title: 'Result Declaration & Valedictory Ceremony',
                  description: '17th March | 5:15 PM',
                },
                {
                  icon: <FaMedal />,
                  title: 'Hackathon Ends',
                  description: '17th March | 5:15 PM | Valedictory Ceremony',
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className="timeline"
                  ref={(el) => (timelineRefs.current[index] = el)}
                >
                  <a href="/" className="timeline-content ml-20">
                    <div className="timeline-icon p-3">{event.icon}</div>
                    <h3 className="title">{event.title}</h3>
                    <p className="description">{event.description}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useEffect } from 'react';
import "./timeline.css";
// import Description from '../../Description/Description';
import { IoMdGlobe } from "react-icons/io";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { GiPodiumWinner } from "react-icons/gi";
import { FaMedal } from "react-icons/fa";
export default function Timeline() {

  useEffect(() => {
    const timelineElements = document.querySelectorAll('.timeline');
    const windowBottom = window.innerHeight;

    function checkTimeline() {
      timelineElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowBottom) {
          element.classList.add('show');
        } else {
          element.classList.remove('show');
        }
      });
    }

    window.addEventListener('scroll', checkTimeline);
    checkTimeline(); // Check initially on mount

    return () => window.removeEventListener('scroll', checkTimeline);
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      {/* <Description /> */}
      <div className="container bg-[#f6eed2]">
        <p className="heading">Timeline</p>
        <div className="row py-5">
          <div className="col-md-12">
            <div className="main-timeline">
              <div className="timeline">
                <a href="/" className="timeline-content">
                  <div className="timeline-icon">
                  <IoMdGlobe />
                  </div>
                  <h3 className="title">Hackathon Starts</h3>
                  <p className="description">
                    16th March | 9:00 AM | Inaugural Ceremony 
                  </p>
                </a>
              </div>
              <div className="timeline">
                <a href="/" className="timeline-content">
                  <div className="timeline-icon">
                  <FaChalkboardTeacher />
                  </div>
                  <h3 className="title">Abstract Presentation Round</h3>
                  <p className="description">
                    16th March | 11:00 AM 
                  </p>
                </a>
              </div>
              <div className="timeline">
                <a href="/" className="timeline-content">
                  <div className="timeline-icon">
                  <FaRegUser />
                  </div>
                  <h3 className="title">First Elimination</h3>
                  <p className="description">
                    16th March | 3:00 PM 
                  </p>
                </a>
              </div>
              <div className="timeline">
                <a href="/" className="timeline-content">
                  <div className="timeline-icon">
                  <FaKeyboard />
                  </div>
                  <h3 className="title">Coding Starts</h3>
                  <p className="description">
                    16th March | 4:00 PM 
                  </p>
                </a>
              </div>
              <div className="timeline">
                <a href="/" className="timeline-content">
                  <div className="timeline-icon">
                  <TfiWrite />
                  </div>
                  <h3 className="title">First Evaluation</h3>
                  <p className="description">
                    16th March | 6:30 PM
                  </p>
                </a>
              </div>
              <div className="timeline">
                <a href="/" className="timeline-content">
                  <div className="timeline-icon">
                  <TfiWrite />
                  </div>
                  <h3 className="title">Second Evaluation</h3>
                  <p className="description">
                    17th March | 4:00 AM 
                  </p>
                </a>
              </div>
              <div className="timeline">
                <a href="/" className="timeline-content">
                  <div className="timeline-icon">
                  <FaRegUser />
                  </div>
                  <h3 className="title">Second Elimination</h3>
                  <p className="description">
                    17th March | 6:00 AM
                  </p>
                </a>
              </div>
              <div className="timeline">
                <a href="/" className="timeline-content">
                  <div className="timeline-icon">
                  <TfiWrite />
                  </div>
                  <h3 className="title">Third Evaluation</h3>
                  <p className="description">
                    17th March | 11:00 AM 
                  </p>
                </a>
              </div>
              <div className="timeline">
                <a href="/" className="timeline-content">
                  <div className="timeline-icon">
                  <FaRegUser />
                  </div>
                  <h3 className="title">Third Elimination</h3>
                  <p className="description">
                    17th March | 12:00 PM
                  </p>
                </a>
              </div>
              <div className="timeline">
                <a href="/" className="timeline-content">
                  <div className="timeline-icon">
                  <FaChalkboardTeacher />
                  </div>
                  <h3 className="title">Final Presentation Round</h3>
                  <p className="description">
                    17th March | 3:00 PM 
                  </p>
                </a>
              </div>
              <div className="timeline">
                <a href="/" className="timeline-content">
                  <div className="timeline-icon">
                  <GiPodiumWinner />
                  </div>
                  <h3 className="title">Result Declaration & Valedictory Ceremony</h3>
                  <p className="description">
                    17th March | 5:15 PM
                  </p>
                </a>
              </div>
              <div className="timeline">
                <a href="/" className="timeline-content">
                  <div className="timeline-icon">
                  <FaMedal />
                  </div>
                  <h3 className="title">Hackathon Ends</h3>
                  <p className="description">
                    17th March | 5:15 PM | Valedictory Ceremony
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  }  
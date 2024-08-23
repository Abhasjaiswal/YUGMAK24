import React, { useState } from "react";
import "./style.css";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item4">
      <div className="faq-question4" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="faq-answer4">{answer}</div>}
    </div>
  );
}

function Appp() {
  return (
    <div className="Appp4">
      <div className="timeline4">
        <h2>Timeline</h2>
        <ul>
          <li>
            <div className="timeline-item4">
              <div className="icon4">📝</div>
              <div>
                <h3>Registration</h3>
                <p>28th Oct to 1st Nov</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-item4">
              <div className="icon4">📣</div>
              <div>
                <h3>Announcement of Finalists</h3>
                <p>2nd Nov</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-item4">
              <div className="icon4">⚡</div>
              <div>
                <h3>The Pitch War</h3>
                <p>4th Nov</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-item4">
              <div className="icon4">🍴</div>
              <div>
                <h3>Networking Lunch with VCs</h3>
                <p>4th Nov</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-item4">
              <div className="icon4">❤️</div>
              <div>
                <h3>Inspirit Session</h3>
                <p>4th Nov</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-item4">
              <div className="icon4">📅</div>
              <div>
                <h3>Announcement of Results</h3>
                <p>5th Nov</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="faqs4">
        <h2>FAQs</h2>
        <FAQItem
          question="What is the Entrepreneurship Cell's Startup Hall of Fame?"
          answer="The Entrepreneurship Cell’s Startup Hall of Fame is an event where..."
        />
        <FAQItem
          question="Is it okay if one of the co-founders is not from IITM?"
          answer="Yes, it's fine if one of the co-founders is not from IITM."
        />
        <FAQItem
          question="If I am not a participant, can I watch the Pitch War?"
          answer="Yes, non-participants can watch the Pitch War as an audience."
        />
        <FAQItem question="Is the event paid?" answer="No, the event is free." />
      </div>
    </div>
  );
}

export default Appp;

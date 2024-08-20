import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style.css';
import logo from '../bg.png';

const Page3 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { formData } = location.state || { formData: [] }; // Retrieve formData from navigation state

    const events = [
        { name: 'Hackathon', cost: 200 },
        { name: 'Startup Pitch', cost: 300 },
        { name: 'Coding Contest', cost: 150 },
        { name: 'Workshop', cost: 100 },
    ];

    const [selectedEvents, setSelectedEvents] = useState([]);

    const handleEventChange = (event, cost) => {
        if (selectedEvents.some(e => e.name === event)) {
            setSelectedEvents(selectedEvents.filter(e => e.name !== event));
        } else {
            setSelectedEvents([...selectedEvents, { name: event, cost }]);
        }
    };

    const totalCost = selectedEvents.reduce((acc, event) => acc + event.cost, 0);

    const handlePrevious = () => {
        navigate('/page2');
    };

    const handlePay = () => {
        if (selectedEvents.length === 0) {
            alert('Please select at least one event.');
        } else {
            alert('Proceeding to payment...');
        }
    };

    return (
        <div className="container">
            <header>
                <a href="/page2" className="back-link">Back to homepage</a>
                <img src={logo} alt="Logo" className="logo" />
                <img src="random_logo_right.png" alt="Logo Right" className="logo-right" />
            </header>
            <div className="form-container">
                <div className="form-steps">
                    <div className="step clickable">1. Team details</div>
                    <div className="step clickable">2. Start-up details</div>
                    <div className="step active">3. Submit</div>
                </div>

                <h2 className='hd'>Select Events</h2>
                <p style={{fontSize:'1.2rem',paddingBottom:'4vh'}}>Please select the events you want to participate in:</p>
                <div className="events-list">
                    {events.map((event, index) => (
                        <div key={index} className="event-item">
                            <input
                                type="checkbox"
                                id={`event-${index}`}
                                onChange={() => handleEventChange(event.name, event.cost)}
                            />
                            <label className='lbl' htmlFor={`event-${index}`}>
                                {event.name} - ₹{event.cost}
                            </label>
                        </div>
                    ))}
                </div>

                <div className="actions-container">
                    <button type="button" className="prev-btn" onClick={handlePrevious}>Previous</button>

                    <div className="total-cost-container">
                        <h5 className='hd'>Total Cost: ₹{totalCost}</h5>
                        <button type="button" className="pay-btn" onClick={handlePay}>Pay</button>
                    </div>
                </div>
            </div>
            <footer>©️Developed by UPES-CSI | UPES | DEHRADUN. All Rights Reserved.</footer>
        </div>
    );
};

export default Page3;

import React, { useState } from 'react';
import './style.css';
import logo from './bg.png';

const RegistrationAndEventSelection = () => {
    const [teamName, setTeamName] = useState('');
    const [leaderName, setLeaderName] = useState('');
    const [email, setEmail] = useState('');
    const [SapId, setSapId] = useState('');
    const [degree, setDegree] = useState('');
    const [year, setYear] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [altPhoneNumber, setAltPhoneNumber] = useState('');
    const [strength, setStrength] = useState('');
    const [selectedEvents, setSelectedEvents] = useState([]);
    const [showPage2, setShowPage2] = useState(false);
    const [showPage3, setShowPage3] = useState(false);
    const [isPrimeMember, setIsPrimeMember] = useState(false);
    const [primeId, setPrimeId] = useState('');

    const events = [
        { name: 'Drishय', cost: 200 },
        { name: 'ARENA 3.0', cost: 300 },
        { name: 'INNOVAक्षण', cost: 150 },
        { name: 'PERSONA', cost: 100 },
    ];

    const handleNext = () => {
      if (!teamName || !leaderName || !email || !SapId || !degree || !year || !phoneNumber || !altPhoneNumber || !strength || selectedEvents.length === 0 || (isPrimeMember && !primeId)) {
          alert("Please fill out all the fields and select at least one event before proceeding.");
          return;
      }
      setShowPage2(true);
  };
  
  

    const handleEventChange = (event) => {
        if (event === 'Drishय') {
            if (selectedEvents.some(e => e.name === event)) {
                setSelectedEvents([]);
                setStrength('');
            } else {
                setSelectedEvents([{ name: event }]);
                setStrength('');
            }
        } else {
            if (selectedEvents.some(e => e.name === event)) {
                setSelectedEvents(selectedEvents.filter(e => e.name !== event));
            } else {
                const newSelectedEvents = [...selectedEvents, { name: event }];
                setSelectedEvents(newSelectedEvents);
            }
        }
    };


    const [formData, setFormData] = useState(
        Array.from({ length: 6 }, () => ({
            name: '',
            SapId: '',
            year: '',
            degree: '',
            field: '',
            email: '',
        }))
    );

    const handleChange = (index, field, value) => {
        const newFormData = [...formData];
        newFormData[index][field] = value;
        setFormData(newFormData);
    };

    const handleSubmit = () => {
      const numMembers = parseInt(strength, 10) - 1;
      const allFieldsFilled = formData.slice(0, numMembers).every(member =>
          Object.values(member).every(value => value !== '')
      );
      if (allFieldsFilled) {
          setShowPage3(true);
      } else {
          alert('Please fill out all fields.');
      }
  };

    const handlePrevious = () => {
        if (showPage3) {
            setShowPage3(false);
        } else {
            setShowPage2(false);
        }
    };

    const handlePay = () => {
        if (selectedEvents.length === 0) {
            alert('Please select at least one event.');
        } else {
            alert('Proceeding to payment...');
            // Add payment processing logic here
        }
    };

    const totalCost = selectedEvents.reduce((acc, event) => acc + (events.find(e => e.name === event.name)?.cost || 0), 0);

    return (
        <div className="container">
            <header>
                <img src={logo} alt="Logo" className="logo" />
            </header>

            {!showPage2 && !showPage3 && (
                <div className="form-container">
                    <div className="form-steps">
                        <div className="step active">1. Team Lead details</div>
                        <div className="step">2. Member Details</div>
                        <div className="step">3. Payment</div>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <h2 className='hd'>Team Details</h2>
                    </div>

                    <form>
                        <div className="form-row">
                            <label htmlFor="teamName">Team Name</label>
                            <input
                                type="text"
                                id="teamName"
                                name="teamName"
                                placeholder="Team Name"
                                value={teamName}
                                onChange={(e) => setTeamName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="leaderName">Leader's Name</label>
                            <input
                                type="text"
                                id="leaderName"
                                name="leaderName"
                                placeholder="Name of the Team Leader"
                                value={leaderName}
                                onChange={(e) => setLeaderName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Personal E-Mail of the Team Leader"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="SapId">SAP ID</label>
                            <input
                                type="text"
                                id="SapId"
                                name="SapId"
                                placeholder="Of the Team Leader"
                                value={SapId}
                                onChange={(e) => setSapId(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="degree">Degree</label>
                            <select
                                id="degree"
                                name="degree"
                                value={degree}
                                onChange={(e) => setDegree(e.target.value)}
                                required
                            >
                                <option value="">Select Degree</option>
                                <option value="btech">B.Tech</option>
                                <option value="mtech">M.Tech</option>
                                <option value="phd">PhD</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <label htmlFor="year">Year of Study</label>
                            <select
                                id="year"
                                name="year"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                required
                            >
                                <option value="">Select Year</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <label htmlFor="phoneNumber">Phone number</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="Of the Team Leader"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="altPhoneNumber">Alternate Phone number</label>
                            <input
                                type="text"
                                id="altPhoneNumber"
                                name="altPhoneNumber"
                                placeholder="Of the Team Leader"
                                value={altPhoneNumber}
                                onChange={(e) => setAltPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                    </form>

                    <div className="form-row">
                            <label htmlFor="isPrimeMember">Are you a Prime Member?</label>
                            <div className="radio-group">
                                <label>
                                    <input
                                        type="radio"
                                        name="isPrimeMember"
                                        value="yes"
                                        checked={isPrimeMember === true}
                                        onChange={() => setIsPrimeMember(true)}
                                        required
                                    />
                                    <span>Yes</span>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="isPrimeMember"
                                        value="no"
                                        checked={isPrimeMember === false}
                                        onChange={() => setIsPrimeMember(false)}
                                        required
                                    />
                                    <span>No</span>
                                </label>
                            </div>
                        </div>

                        {isPrimeMember && (
                            <div className="form-row">
                                <label htmlFor="primeId">Prime ID</label>
                                <input
                                    type="text"
                                    id="primeId"
                                    name="primeId"
                                    placeholder="Enter your Prime ID"
                                    value={primeId}
                                    onChange={(e) => setPrimeId(e.target.value)}
                                    required
                                />
                            </div>
                        )}

                    <div className="events-list1">
                        <h2 className='hd'>Select Events</h2>
                        <p style={{ fontSize: '1.2rem', paddingBottom: '4vh' }}>Please select the events you want to participate in:</p>
                        <div className='ev-list'>
                            {events.map((event, index) => (
                                <div key={index} className="event-item">
                                    <input
                                        type="checkbox"
                                        name={event.name}
                                        value={event.name}
                                        checked={selectedEvents.some(e => e.name === event.name)}
                                        onChange={() => handleEventChange(event.name)}
                                        disabled={
                                            selectedEvents.some(e => e.name === 'Drishय') && event.name !== 'Drishय' ||
                                            selectedEvents.some(e => e.name !== 'Drishय') && event.name === 'Drishय'
                                        }
                                    />
                                    <label>{event.name}</label>
                                </div>
                            ))}
                        </div>
                        <div className="form-row">
                            <label htmlFor="strength">Strength of the team</label>
                            <div className="radio-group">
                                {selectedEvents.some(e => e.name === 'Drishय') ? (
                                    ['2', '3', '4', '5', '6'].map(num => (
                                        <label key={num}>
                                            <input
                                                type="radio"
                                                name="strength"
                                                value={num}
                                                onChange={() => setStrength(num)}
                                                checked={strength === num}
                                                required
                                            />
                                            <span> {num}</span>
                                        </label>
                                    ))
                                ) : (
                                    ['2', '3', '4'].map(num => (
                                        <label key={num}>
                                            <input
                                                type="radio"
                                                name="strength"
                                                value={num}
                                                onChange={() => setStrength(num)}
                                                checked={strength === num}
                                                required
                                            />
                                            <span> {num}</span>
                                        </label>
                                    ))
                                )}
                            </div>
                        </div>

                    </div>

                    <div className="actions-container">
                        <button type="button" className="next-btn" onClick={handleNext}>Next</button>
                    </div>
                </div>
            )}

            {showPage2 && !showPage3 && (
                <div className="form-container">
                    <div className="form-steps">
                        <div className="step clickable" onClick={() => setShowPage2(false)}>1. Team Lead details</div>
                        <div className="step active">2. Member Details</div>
                        <div className="step">3. Payment</div>
                    </div>

                    <h2 className='hd'>Team Members Details</h2>
                    <p style={{ textAlign: 'center', paddingBottom: '4vh' }}>Add details of your team members.</p>

                    <form>
                        {Array.from({ length: parseInt(strength) - 1 }).map((_, index) => (
                            <div key={index}>
                                <h3 style={{ textAlign: 'center' }}>Member {index + 2}</h3>
                                <div className="form-row">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name={`member-${index + 2}-name`}
                                        placeholder="Enter Member's Name"
                                        value={formData[index].name}
                                        onChange={(e) => handleChange(index, 'name', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-row">
                                    <label>SAP ID</label>
                                    <input
                                        type="text"
                                        name={`member-${index + 2}-SapId`}
                                        placeholder="Enter SAP ID"
                                        value={formData[index].SapId}
                                        onChange={(e) => handleChange(index, 'SapId', e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-row">
                                    <label>Degree</label>
                                    <select
                                        name={`member-${index + 2}-degree`}
                                        value={formData[index].degree}
                                        onChange={(e) => handleChange(index, 'degree', e.target.value)}
                                        required
                                    >
                                        <option value="">Select Degree</option>
                                        <option value="btech">B.Tech</option>
                                        <option value="mtech">M.Tech</option>
                                        <option value="phd">PhD</option>
                                    </select>
                                </div>
                                <div className="form-row">
                                    <label>Year of Study</label>
                                    <select
                                        name={`member-${index + 2}-year`}
                                        value={formData[index].year}
                                        onChange={(e) => handleChange(index, 'year', e.target.value)}
                                        required
                                    >
                                        <option value="">Select Year</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                                <div className="form-row">
                                    <label>Phone Number</label>
                                    <input
                                        type="text"
                                        name={`member-${index + 2}-field`}
                                        placeholder="Phone Number"
                                        value={formData[index].field}
                                        onChange={(e) => handleChange(index, 'field', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-row">
                                    <label>E-mail</label>
                                    <input
                                        type="email"
                                        name={`member-${index + 2}-email`}
                                        placeholder="Enter E-Mail"
                                        value={formData[index].email}
                                        onChange={(e) => handleChange(index, 'email', e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        ))}
                    </form>

                    <div className="actions-container">
                        <button type="button" className="prev-btn" onClick={handlePrevious}>Previous</button>
                        <button type="button" className="next-btn" onClick={handleSubmit}>Next</button>
                    </div>
                </div>
            )}

            {showPage3 && (
                <div className="form-container">
                    <div className="form-steps">
                        <div className="step clickable" onClick={handlePrevious}>1. Team Lead details</div>
                        <div className="step clickable" onClick={handlePrevious}>2. Member Details</div>
                        <div className="step active">3. Payment</div>
                    </div>

                    <h2 className='hd'>Preview & Payment</h2>
                    <p style={{ fontSize: '1.2rem', paddingBottom: '4vh' }}>Please confirm the events</p>
                    <div className="events-list">
                        {selectedEvents.map((event, index) => (
                            <div key={index} className="event-item3">
                                <label className='lbl'>
                                    {event.name} - ₹{events.find(e => e.name === event.name)?.cost}
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className="actions-container3">
                        <button type="button" className="prev-btn" onClick={handlePrevious}>Previous</button>

                        <div className="total-cost-container">
                            <h5 className='hd'>Total Cost: ₹{totalCost}</h5>
                            <button type="button" className="pay-btn" onClick={handlePay}>Pay</button>
                        </div>
                    </div>
                </div>
            )}

            <footer>©️Developed by UPES-CSI | UPES | DEHRADUN. All Rights Reserved.</footer>
        </div>
    );
};

export default RegistrationAndEventSelection;

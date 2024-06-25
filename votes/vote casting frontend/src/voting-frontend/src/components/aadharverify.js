import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './verify.css';

function UserLogin() {
  const [name, setName] = useState('');
  const [voterID, setVoterID] = useState('');
  const [dob, setDob] = useState('');
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Define the hardcoded list of voters
    const voters = [
      { name: 'Rohit', voter_id: 'OQL009278R', dob: '2000-01-01' },
      { name: 'Pawan', voter_id: 'OQL009278P', dob: '2000-02-02' },
      { name: 'Jeevan', voter_id: 'OQL009278J', dob: '2000-03-03' },
      { name: 'Aryavhir Koul', voter_id: 'OQL0092783', dob: '2003-01-11' },
      { name: 'Venkatesh', voter_id: '123456', dob: '1994-05-05' }
    ];

    // Check if the provided voter ID, name, and date of birth exist in the hardcoded list
    const voter = voters.find((v) => v.voter_id === voterID && v.dob === dob);
    if (voter && voter.name === name) {
      // If voter ID, name, and date of birth match, navigate to the next page
      navigate('/voter');
    } else {
      // If any of the details do not match, display an error message
      setLoginError('Invalid name, voter ID, or date of birth.');
    }
  };

  return (
    <div className="login-container">
      <h2>Voter Verification</h2>
      <label htmlFor="name">Enter Name:</label>
      <input 
        type="text" 
        id="name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <label htmlFor="voterID">Enter Voter ID:</label>
      <input 
        type="text" 
        id="voterID" 
        value={voterID} 
        onChange={(e) => setVoterID(e.target.value)} 
      />
      <label htmlFor="dob">Enter Date of Birth:</label>
      <input 
        type="date" 
        id="dob" 
        value={dob} 
        onChange={(e) => setDob(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
      {loginError && <p className="error-message">{loginError}</p>}
    </div>
  );
}

export default UserLogin;

// Voter.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getContract } from './web3'; // Import the getContract function
import Layout from "./Layout";
import './voter.css'; // Import the CSS file

const Voter = () => {
  const [selectedParty, setSelectedParty] = useState(''); // Define selectedParty state
  const navigate = useNavigate();

  const handlePartySelection = (e) => {
    setSelectedParty(e.target.value); // Update selectedParty when the user selects a party
  };

  const handleVote = async () => {
    try {
      // Initialize contract instance
      const contract = await getContract();
  
      // Replace 'actual_user_address' with the actual user's Ethereum address
      const actualUserAddress = [
        '0x578CA50b861f308aEE7f5FA296A723f4C4cfa80d',
        '00x00B495ce033d998DaC826F3cEFcF125BF8B7c548',
        '0xb5D2ff99c6dBa19b9D43912bf68C590aD96C12e5',
        '0x8FC7387487da8A23E688193c44e6ddeCC175b981',
        '0xbD402fd4c884F5C4eCF27BeB3C83c75F5B3E4E63',
        '0x74268523A8f1A3DeD4C34b4B928516BD14D1855C',
        '0xf5362136d992dcFcF0a5530cB027C64076510DA6'
      ];
  
      // Call the vote function on the smart contract
      const randomUserAddress = actualUserAddress[Math.floor(Math.random() * actualUserAddress.length)];
      await contract.methods.vote(selectedParty).send({ from: randomUserAddress });
  
      // Navigate to a thank-you page or another route after voting
      navigate('/');
    } catch (error) {
      console.error('Error submitting vote:', error);
      // Handle error (e.g., display error message to user)
    }
  };

  return (
    <Layout>
      <div className="voter-container">
        <h1 className="voter-title">VOTE CASTING</h1> 
        <p>
          Your VoterID has been sucessfully verified, you are eligible to cast vote now
        </p>
        <div className="party-select select-wrapper">
        <h3>Select Party</h3>                   
          <div className="container">
            <label><input name="selectedParty" type="radio" value="1" onChange={handlePartySelection} /> BJP</label>
            <label><input name="selectedParty" type="radio" value="2" onChange={handlePartySelection} /> INDIA</label>
            <label><input name="selectedParty" type="radio" value="3" onChange={handlePartySelection} /> BRS</label>
           
          </div>
        </div> 
        <div className="scene">
          <div className="cube" onClick={handleVote}>
            <span className="side top">Vote</span>
            <span className="side front">Cofirm</span>
      </div>
      </div>
      </div>
    </Layout>
  );
};

export default Voter;


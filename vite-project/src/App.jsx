// src/App.js
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import './App.css';
import StudentRegistry from './contractJson/StudentRegistry.json';

function App() {
  const [admissionNumber, setAdmissionNumber] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [message, setMessage] = useState('');
  const [contract, setContract] = useState(null);

  useEffect(() => {
    async function connectToMetaMask() {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            '0xFF63c930946b997f697aAE634e83bD85B17Aa752',
            StudentRegistry.abi,
            signer
          );
          setContract(contract);
        } catch (error) {
          console.error('Error connecting to MetaMask:', error);
          setMessage('Please connect to MetaMask and allow access.');
        }
      } else {
        console.error('MetaMask not detected.');
        setMessage('MetaMask not detected. Please install MetaMask.');
      }
    }
    
    connectToMetaMask();
  }, []);

  async function addStudentDetails() {
    try {
      console.log('Adding student details...');
      const admissionNumberNumber = parseInt(admissionNumber, 10);
      console.log('Admission Number:', admissionNumberNumber);
  
      if (isNaN(admissionNumberNumber)) {
        setMessage('Admission Number must be a valid number.');
        return;
      }
  
      await contract.addStudentDetails(admissionNumberNumber, studentName, studentClass);
      setMessage('Student details added successfully.');
    } catch (error) {
      console.error('Error adding student details:', error);
      setMessage('Failed to add student details.');
    }
  }
  
  

  async function getStudentDetails() {
    try {
      const [name, studentClass] = await contract.getStudentDetails(admissionNumber);
      setMessage(`Name: ${name}, Class: ${studentClass}`);
    } catch (error) {
      console.error(error);
      setMessage('Failed to get student details.');
    }
  }

  return (
    <div className="container">
      <h1>Blockchain Student Registry</h1>
      <button onClick={addStudentDetails} disabled={!contract}>Add Student</button>
      <button onClick={getStudentDetails} disabled={!contract}>Get Student Details</button>
      <input
        type="text"
        placeholder="Admission Number"
        value={admissionNumber}
        onChange={(e) => setAdmissionNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Class"
        value={studentClass}
        onChange={(e) => setStudentClass(e.target.value)}
      />
      <p>{message}</p>
    </div>
  );
}

export default App;

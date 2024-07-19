import React, { useState, useRef } from 'react';
import './App.css';
import Modal from './components/Modal';

const TestCase = ({ index, onRegenerate, onDelete }) => (
  <div className="test-case">
    <div className="test-case-content">
      <p>Test case {index + 1}:</p>
      <p>Input: ...... Output: ......</p>
    </div>
    <div className="test-case-buttons">
      <button className="regen-btn" onClick={onRegenerate}>Regen</button>
      <button className="del-btn" onClick={onDelete}>Del</button>
    </div>
  </div>
);

const App = () => {
  const [testCases, setTestCases] = useState([0, 1, 2, 3]);
  const [showModal, setShowModal] = useState(false);
  const unitTestRef = useRef(null);

  const handleRegenClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRegenerate = () => {
    // Handle the regenerate logic here
    setShowModal(false);
  };

  const handleCopyToClipboard = () => {
    const textarea = unitTestRef.current;
    if (textarea) {
      textarea.select();
      document.execCommand('copy');
      alert('Copied to clipboard!');
    }
  };

  const addTestCase = () => {
    setTestCases([...testCases, testCases.length]);
  };

  const removeTestCase = (index) => {
    setTestCases(testCases.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Unit Test Generation</h1>
      <div className="main-content">
        <div className="left-section">
          <div className="form-group">
            <label>Focal Method Name</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Number of test</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Input Code</label>
            <textarea className="input-code-textarea" cols="3000"/>
          </div>
          <button className="analyse-btn" onClick={addTestCase}>Analyse</button>
        </div>
        <div className="middle-section">
          <div className="test-cases-section">
            {testCases.map((_, index) => (
              <TestCase
                key={index}
                index={index}
                onRegenerate={handleRegenClick}
                onDelete={() => removeTestCase(index)}
              />
            ))}
          </div>
          <button className="implement-btn">Implement</button>
        </div>
        <div className="right-section">
          <div className="unit-test-implementation">
            <h2>Implementation of Unit Test</h2>
            <textarea ref={unitTestRef} className="implementation-textarea" cols="3000"/>
          </div>
          <button className="copy-btn" onClick={handleCopyToClipboard}>Copy to clipboard</button>
        </div>
      </div>
      <Modal show={showModal} onClose={handleCloseModal} onRegenerate={handleRegenerate} />
    </div>
  );
};

export default App;

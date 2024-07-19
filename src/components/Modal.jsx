import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, onRegenerate }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Regenerate Test Case</h2>
        <textarea rows="5" placeholder="Enter prompt..."></textarea>
        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="regen-btn" onClick={onRegenerate}>Regenerate</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

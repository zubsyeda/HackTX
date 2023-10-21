import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>Select company</button>
      {isOpen && (
        <ul className="dropdown-content">
          <li>Ask_Spectrum</li>
          <li>AmazonHelp</li>
          <li>AppleSupport</li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
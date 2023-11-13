import React, { useState } from 'react';

const Tooltip = ({ children, text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            padding: '5px',
            borderRadius: '4px',
            zIndex: 999,
            margin: 1.5
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

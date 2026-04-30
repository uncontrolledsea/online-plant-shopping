import React from 'react';

const Spinner = ({ fullScreen = false }) => {
  const containerClass = fullScreen 
    ? "fixed inset-0 z-50 flex justify-center items-center bg-white/80 backdrop-blur-sm"
    : "flex justify-center items-center py-20 w-full";

  return (
    <div className={containerClass}>
      <div className="relative flex justify-center items-center h-20 w-20">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-emerald-600 absolute"></div>
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-400 absolute" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        <div className="h-4 w-4 bg-emerald-600 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Spinner;

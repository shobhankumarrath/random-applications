// Card.jsx
import React from 'react';

const Card = ({ title, content, buttonText, onButtonClick }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-99 flex flex-col items-start mb-4">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <div className="border border-gray-300 rounded p-4 mt-4 bg-gray-50 w-full">
        <pre className="text-gray-700 text-sm overflow-auto break-words whitespace-pre-wrap max-w-full">
          {content}
        </pre>
      </div>
      <button
        onClick={onButtonClick}
        className="mt-4 w-full py-2 rounded hover:bg-gray-200 transition bg-beige-200 text-black">
        {buttonText}
      </button>
    </div>
  );
};

export default Card; 
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void; // Add other props as needed
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 px-4 w-20"
      onClick={onClick}
    >
      {children}
      {/* Add spinner here if needed */}
    </button>
  );
};

export default Button;

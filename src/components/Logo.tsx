import React from 'react';

interface LogoProps {
  size?: 'small' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size = 'large' }) => {
  return (
    <div className="flex items-center">
      <img 
        src="https://www.skafflegal.com/wp-content/uploads/2023/05/SkaffLega-logo-main-2.png" 
        alt="Skaff Legal"
        className={size === 'small' ? 'h-8' : 'h-10'}
      />
    </div>
  );
};

export default Logo;
import React from 'react';

interface LogoProps {
  size?: 'small' | 'large';
  isScrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'large', isScrolled = false }) => {
  const logoSrc = isScrolled 
    ? '/SkaffLegal-logo-sticky.png'
    : 'https://www.skafflegal.com/wp-content/uploads/2023/05/SkaffLega-logo-main-2.png';

  return (
    <div className="flex items-center">
      <img 
        src={logoSrc}
        alt="Skaff Legal"
        className={size === 'small' ? 'h-8' : 'h-10'}
      />
    </div>
  );
};

export default Logo;
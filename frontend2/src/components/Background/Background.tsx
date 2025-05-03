// Background.tsx
import React, { ReactNode, FC } from 'react';
import './Background.css';

interface BackgroundProps {
  children: ReactNode;
}

const Background: FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="global-background">
      {children}
    </div>
  );
};

export default Background;

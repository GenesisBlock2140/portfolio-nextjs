"use client"

import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface ObserverWrapperProps {
  children: ReactNode;
  direction: string
}

const ObserverWrapper: React.FC<ObserverWrapperProps> = ({ children, direction }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

  }, []);

  return (
    <div ref={targetRef} className={`opacity-0 ${isVisible ? `show-card-${direction}` : ''}`}>
      {children}
    </div>
  );
};

export default ObserverWrapper;

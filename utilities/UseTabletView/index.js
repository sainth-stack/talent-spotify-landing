import { useState, useEffect } from 'react';

export default function useTablet() {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    function handleResize() {   
      const width = window.innerWidth;
      // Set isTablet to true if width is 768px or 1024px
        setIsTablet(width >= 768 && width <= 1024);
    }

    window.addEventListener("resize", handleResize);
    
    handleResize(); // Set initial state on mount
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isTablet;
}

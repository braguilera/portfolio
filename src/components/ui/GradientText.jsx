import React, { useEffect, useRef } from 'react';

const GradientText = ({ text = "FRONTEND" }) => {
  const topCircleRef = useRef(null);
  const bottomCircleRef = useRef(null);
  
  useEffect(() => {
    const animateCircles = () => {
      if (!topCircleRef.current || !bottomCircleRef.current) return;
      
      const time = Date.now() * 0.001;
      
      const topX = Math.sin(time * 0.5) * 15;
      const topY = Math.cos(time * 0.3) * 15;
      
      const bottomX = Math.sin(time * 0.3 + 1) * 15;
      const bottomY = Math.cos(time * 0.5 + 1) * 15;
      
      topCircleRef.current.style.transform = `translate(${topX}px, ${topY}px)`;
      bottomCircleRef.current.style.transform = `translate(${bottomX}px, ${bottomY}px)`;
      
      const topScale = 1 + Math.sin(time * 0.2) * 0.1;
      const bottomScale = 1 + Math.sin(time * 0.2 + 1.5) * 0.1;
      
      topCircleRef.current.style.transform += ` scale(${topScale})`;
      bottomCircleRef.current.style.transform += ` scale(${bottomScale})`;
      
      requestAnimationFrame(animateCircles);
    };
    
    const animationId = requestAnimationFrame(animateCircles);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div className="flex justify-center items-center bg-gray-50 overflow-hidden w-full">
      <div className="relative">
        <h1 
          className="text-8xl font-black tracking-wide relative z-10"
          style={{ 
            background: 'linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(167, 139, 250, 0.2)',
          }}
        >
          {text}
        </h1>
        
        <div 
          className="absolute left-1/2 top-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{ 
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, rgba(167, 139, 250, 0.4) 50%, transparent 70%)',
            filter: 'blur(30px)',
            animation: 'pulse 6s infinite ease-in-out',
          }}
        />
        
        {/* Estilos para la animación de pulso */}
        <style jsx>{`
          @keyframes pulse {
            0%, 100% { transform: translate(-50%, -50%) scale(0.8); }
            50% { transform: translate(-50%, -50%) scale(1.2); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default GradientText;
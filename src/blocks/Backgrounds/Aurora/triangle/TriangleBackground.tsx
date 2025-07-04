import React, { useEffect, useRef } from 'react';

const TriangleBackground: React.FC = () => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const TOTAL = 200;
  const TIME = 10;

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const styleSheet = document.styleSheets[0];

    for (let i = 0; i < TOTAL; i++) {
      const tri = document.createElement('div');
      tri.className = 'tri';

      const size = Math.floor(Math.random() * 50) + 1;
      const rotate = Math.floor(Math.random() * 360);
      const hue = Math.floor(Math.random() * 360);
      const x = Math.floor(Math.random() * 1000);
      const y = Math.floor(Math.random() * 1000);

      tri.style.borderTop = `${size}px solid hsla(${hue}, 100%, 50%, 1)`;
      tri.style.borderRight = `${size}px solid transparent`;
      tri.style.borderLeft = `${size}px solid transparent`;
      tri.style.marginLeft = `${-size / 2}px`;
      tri.style.marginTop = `${-size / 2}px`;
      tri.style.transform = `rotate(${rotate}deg) translate3d(0,0,-1500px) scale(0)`;
      tri.style.animation = `anim${i} ${TIME}s infinite linear`;
      tri.style.animationDelay = `${-(TIME / TOTAL) * i}s`;
      tri.style.opacity = '0';
      tri.style.filter = 'grayscale(1)';

      const keyframe = `
        @keyframes anim${i} {
          0% {
            opacity: 1;
            transform: rotate(${rotate * 1.5}deg) translate3d(${x}px, ${y}px, 1000px) scale(1);
          }
        }
      `;
      styleSheet.insertRule(keyframe, styleSheet.cssRules.length);

      wrap.appendChild(tri);
    }
  }, []);

  return (
    <div className="triangle-bg">
      <div className="wrap" ref={wrapRef}></div>
    </div>
  );
};

export default TriangleBackground;

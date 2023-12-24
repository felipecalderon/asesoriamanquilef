'use client'
import { CSSProperties, useEffect, useState } from "react"

function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
  let lastFunc: number | undefined;
  let lastRan: number | undefined;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      if (lastFunc) clearTimeout(lastFunc);
      lastFunc = window.setTimeout(() => {
        if ((Date.now() - lastRan!) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

const BGFigura = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); 

  // Calcula el valor de translateX basado en el valor de 'point'
  const translate1: CSSProperties = {
    transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
    transition: '0.1s'
  };

  const translate2: CSSProperties = {
    transform: `translateX(${mousePosition.x * 2}px) translateY(${mousePosition.y * 3}px)`,
    transition: '0.1s'
  };

  const translate3: CSSProperties = {
    transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
    transition: '0.1s'
  };

  useEffect(() => {
    const handleMouseMove = throttle((event: MouseEvent) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const x = (centerX - clientX) / 5;
      const y = (centerY - clientY) / 5;

      setMousePosition({ x: clientX, y: clientY });
    }, 33); 

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
      <div className={`fixed inset-0 pointer-events-none flex justify-center items-center`}>
        <div
          className={`w-20 h-20 ml-30 md:w-60 md:h-60 bg-violet-500 opacity-20 blur-3xl rounded-full`}
          style={translate1}
        />
        <div
          className={`w-40 h-40 md:w-96 md:h-96 bg-violet-400 opacity-20 blur-3xl rounded-full`}
          style={translate2}
        />
        <div
          className={`w-96 h-96 mr-96 bg-red-200 opacity-20 blur-3xl rounded-full`}
          style={translate3}
        />
      </div>
  );
}

export default BGFigura;
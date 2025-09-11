'use client';
import React, { useRef, useEffect } from 'react';

const FractalCanvas = ({ coherence }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    let animationFrameId;

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(0, 8, 20, 0.1)';
      ctx.fillRect(0, 0, width, height);

      const maxIter = 50 + Math.floor(coherence * 0.5);
      const zoom = 0.8 + (Math.sin(time / 2000) * 0.4);

      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          let zx = 1.5 * (x - width / 2) / (0.5 * zoom * width);
          let zy = (y - height / 2) / (0.5 * zoom * height);
          
          let i = maxIter;
          while (zx * zx + zy * zy < 4 && i > 0) {
            let tmp = zx * zx - zy * zy + (-0.7 + Math.sin(time/3000)*0.1);
            zy = 2.0 * zx * zy + 0.27015;
            zx = tmp;
            i--;
          }
          
          const bright = i < maxIter ? (i / maxIter) * 255 : 0;
          const hue = (i * 10 + time/10) % 360;
          ctx.fillStyle = `hsl(${hue}, 100%, ${bright}%)`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [coherence]);

  return <canvas ref={canvasRef} width="600" height="400" className="w-full h-full rounded-lg"/>;
};

export default FractalCanvas;

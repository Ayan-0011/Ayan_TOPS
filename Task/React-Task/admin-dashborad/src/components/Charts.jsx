import { useEffect, useRef } from 'react';

export function LineChart() {
  const ref = useRef();
  useEffect(() => {
    if (!ref.current) return;
    const ctx = ref.current.getContext('2d');
    ctx.clearRect(0, 0, 320, 120);
    ctx.beginPath();
    ctx.moveTo(0, 80);
    ctx.bezierCurveTo(80, 40, 160, 100, 320, 60);
    ctx.strokeStyle = '#3B82F6';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 80, 5, 0, 2 * Math.PI);
    ctx.arc(160, 100, 5, 0, 2 * Math.PI);
    ctx.arc(320, 60, 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#3B82F6';
    ctx.fill();
  }, []);
  return <canvas ref={ref} width={320} height={120} className="w-full h-32" />;
}

export function BarChart() {
  const ref = useRef();
  useEffect(() => {
    if (!ref.current) return;
    const ctx = ref.current.getContext('2d');
    ctx.clearRect(0, 0, 320, 120);
    const data = [80, 60, 100, 40, 90, 70];
    data.forEach((v, i) => {
      ctx.fillStyle = '#6366F1';
      ctx.fillRect(20 + i * 50, 120 - v, 30, v);
    });
  }, []);
  return <canvas ref={ref} width={320} height={120} className="w-full h-32" />;
}

import React, { useEffect, useRef } from 'react';

export default function GenerativeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes for subtle generative constellation mesh
    const nodeCount = Math.min(Math.floor(width / 35), 45);
    const nodes = [];
    const colors = ['#8B5CF6', '#3B82F6', '#22D3EE'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.6 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.15,
      });
    }

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.005;

      // Draw subtle connecting generative lines
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        n1.x += n1.vx;
        n1.y += n1.vy;

        if (n1.x < 0) n1.x = width;
        if (n1.x > width) n1.x = 0;
        if (n1.y < 0) n1.y = height;
        if (n1.y > height) n1.y = 0;

        // Draw node
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
        ctx.fillStyle = n1.color;
        ctx.globalAlpha = n1.alpha * 0.6;
        ctx.fill();

        // Connect nearby nodes with subtle glowing threads
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            const lineAlpha = (1 - dist / 140) * 0.12;
            ctx.strokeStyle = n1.color;
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Ambient gradient meshes */}
      <div className="absolute -top-[25%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-[#8B5CF6]/10 blur-[130px]" />
      <div className="absolute top-[35%] -right-[15%] w-[50vw] h-[50vw] rounded-full bg-[#3B82F6]/10 blur-[140px]" />
      <div className="absolute -bottom-[20%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-[#22D3EE]/8 blur-[120px]" />

      {/* Cyber Grid pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-60" />

      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Subtle radial vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#101014]/40 to-[#101014]" />
    </div>
  );
}

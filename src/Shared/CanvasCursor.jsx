import React, { useEffect, useRef } from "react";

const CanvasCursor = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const particlesArray = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Handle Mouse Move
    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      // Reduce particle spawn rate
      if (Math.random() > 0.5) {
        particlesArray.current.push(new Particle(mouse.current.x, mouse.current.y));
      }
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1; // Smaller particles
        this.speedX = (Math.random() - 0.5) * 1.2; // Increased speed
        this.speedY = (Math.random() - 0.5) * 1.2;
        this.opacity = 1;
        this.life = 180; // Lasts for 3 seconds
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;

        if (this.life < 60) {
          this.opacity = this.life / 60; // Gradual fade-out
        }
      }

      draw() {
        ctx.fillStyle = `#0077C0`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    // Draw softer web-like connections
    const drawConnections = () => {
      for (let i = 0; i < particlesArray.current.length; i++) {
        let connections = 0;
        for (let j = i + 1; j < particlesArray.current.length; j++) {
          if (connections >= 3) break; // Limit connections per particle
          const dx = particlesArray.current[i].x - particlesArray.current[j].x;
          const dy = particlesArray.current[i].y - particlesArray.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) { // Reduce max connection distance
            ctx.strokeStyle = `#0077C0`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray.current[i].x, particlesArray.current[i].y);
            ctx.lineTo(particlesArray.current[j].x, particlesArray.current[j].y);
            ctx.stroke();
            connections++;
          }
        }
      }
    };

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.current.forEach((particle, index) => {
        particle.update();
        particle.draw();

        if (particle.life <= 0) {
          particlesArray.current.splice(index, 1);
        }
      });

      drawConnections();
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
    />
  );
};

export default CanvasCursor;

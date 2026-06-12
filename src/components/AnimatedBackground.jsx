const particles = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  x: `${(index * 29) % 100}%`,
  y: `${(index * 43) % 100}%`,
  moveX: `${index % 2 === 0 ? 28 : -24}px`,
  moveY: `${index % 3 === 0 ? -34 : 26}px`,
  duration: `${6 + (index % 7)}s`,
  delay: `${(index % 9) * -0.7}s`,
}));

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="energy-mesh absolute inset-0 animate-shimmer opacity-90" />
      <div className="noise-overlay absolute inset-0" />
      <div className="light-trail trail-a" />
      <div className="light-trail trail-b" />
      <div className="light-trail trail-c" />
      <div className="absolute left-1/2 top-0 h-px w-[88vw] -translate-x-1/2 bg-aurora-line opacity-60 blur-sm" />
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <span
            aria-hidden="true"
            className="particle"
            key={particle.id}
            style={{
              '--x': particle.x,
              '--y': particle.y,
              '--move-x': particle.moveX,
              '--move-y': particle.moveY,
              '--duration': particle.duration,
              '--delay': particle.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default AnimatedBackground;

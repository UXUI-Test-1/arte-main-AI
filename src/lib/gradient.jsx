import React from 'react';

// 그라디언트 색이 한 바퀴 도는 애니메이션용 30fps 티커
const FrameCtx = React.createContext(0);
export const Ticker = ({children}) => {
  const [f, setF] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const t0 = performance.now();
    const loop = (t) => {
      setF(Math.floor(((t - t0) / 1000) * 30));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <FrameCtx.Provider value={f}>{children}</FrameCtx.Provider>;
};
export const useFrame = () => React.useContext(FrameCtx);

export const LOOP = 100; // frames per full colour rotation
export const phaseAt = (f, offset = 0) => {
  const base = (f / LOOP + offset) % 1;
  return base + 0.018 * Math.sin((f / LOOP) * Math.PI * 2 * 3 + offset * 6);
};

export const CONIC_COLORS = [
  'rgb(111,168,255) 0%',
  'rgb(165,139,255) 30%',
  'rgb(210,148,225) 45%',
  'rgb(255,156,194) 60%',
  'rgb(255,201,160) 85%',
  'rgb(183,185,208) 92.5%',
  'rgb(147,176,231) 96.25%',
  'rgb(111,168,255) 100%',
].join(',');

// rotating gradient fills a w x h box, elliptical conic like the design
export const ConicFill = ({w, h, f, radius, style}) => {
  const S = 400;
  return (
    <div style={{position: 'absolute', inset: 0, borderRadius: radius, overflow: 'hidden', ...style}}>
      <div
        style={{
          position: 'absolute',
          left: w / 2 - S / 2,
          top: h / 2 - S / 2,
          width: S,
          height: S,
          transform: `scale(${(w * 1.6) / S}, ${(h * 1.6) / S})`,
          background: `conic-gradient(from ${phaseAt(f) * 360}deg, ${CONIC_COLORS})`,
        }}
      />
    </div>
  );
};

// blue gradient text / fill whose colours slide in a loop
export const slideGradient = (f, a = '#3db4f2', b = '#007ade', speed = 1) => ({
  backgroundImage: `linear-gradient(90deg, ${a} 0%, ${b} 50%, ${a} 100%)`,
  backgroundSize: '200% 100%',
  backgroundRepeat: 'repeat-x',
  backgroundPosition: `${-phaseAt(f * speed) * 200}% 0`,
});
export const gradText = (f, speed = 1) => ({
  ...slideGradient(f, '#3db4f2', '#007ade', speed),
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
});

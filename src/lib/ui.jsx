import React from 'react';

export const FONT = "'Pretendard GOV', sans-serif";
export const ACCENT = '#007ade';
export const TEXT = '#000';
export const EASE = 'cubic-bezier(.65,0,.35,1)';
export const OUT = 'cubic-bezier(.22,1,.36,1)';

// 이미지/아이콘 경로 (dist/index.html 기준)
export const img = (name) => `./assets/img/${name}`;

export const Icon = ({n, w, h = w, style}) => (
  <img src={img(n)} alt="" style={{width: w, height: h, flex: 'none', display: 'block', ...style}} />
);

export const Txt = ({size, weight = 500, color = '#1e2124', ls, lh = 'normal', children, style}) => (
  <div style={{fontSize: size, fontWeight: weight, color, letterSpacing: ls, lineHeight: lh, whiteSpace: 'nowrap', ...style}}>
    {children}
  </div>
);

// 높이 열고 닫기
export const Collapse = ({open, dur = 700, children, style}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateRows: open ? '1fr' : '0fr',
      transition: `grid-template-rows ${dur}ms ${EASE}`,
      ...style,
    }}
  >
    <div style={{overflow: 'hidden', minHeight: 0, opacity: open ? 1 : 0, transition: `opacity ${Math.round(dur * 0.6)}ms ease`}}>{children}</div>
  </div>
);

// 1920 기준 레이아웃을 창 너비에 맞추는 배율
export const useScale = () => {
  const get = () => Math.max(0.4, document.documentElement.clientWidth / 1920);
  const [s, setS] = React.useState(get);
  React.useEffect(() => {
    const on = () => setS(get());
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return s;
};

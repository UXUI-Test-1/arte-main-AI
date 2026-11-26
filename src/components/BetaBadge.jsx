import React from 'react';
import {phaseAt} from '../lib/gradient.jsx';

const BETA_GRAD = (f) => ({
  backgroundImage: 'linear-gradient(90deg, #dcafff 0%, #7b75dc 33.3%, #007ade 66.6%, #dcafff 100%)',
  backgroundSize: '200% 100%',
  backgroundRepeat: 'repeat-x',
  backgroundPosition: `${-phaseAt(f) * 200}% 0`,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
});

// BETA 배지 (검색창 테두리 위 라벨 / 결과 카드 상단 라벨)
const BETA_STATIC = {
  backgroundImage: 'linear-gradient(130.85deg, rgb(220, 175, 255) 3.274%, rgb(123, 117, 220) 66.421%, rgb(0, 122, 222) 142.94%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
};

export const BetaBadge = ({f, style, border, padding, size, ls, fixed}) => (
  <div
    style={{
      position: 'absolute', background: '#fff', border: `${border}px solid #7fb2ff`, padding, borderRadius: 999,
      display: 'flex', alignItems: 'center', boxSizing: 'border-box', ...style,
    }}
  >
    <div style={{fontSize: size, fontWeight: 600, lineHeight: 1.4, letterSpacing: ls, whiteSpace: 'nowrap', ...(fixed ? BETA_STATIC : BETA_GRAD(f))}}>BETA</div>
  </div>
);

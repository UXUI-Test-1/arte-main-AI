import React from 'react';
import {gradText, useFrame} from '../lib/gradient.jsx';

export const HeroTitle = () => {
  const f = useFrame();
  return (
    <div style={{fontSize: 72, fontWeight: 700, whiteSpace: 'nowrap', lineHeight: 'normal'}}>
      <div style={{...gradText(f), display: 'inline-block'}}>안녕하세요</div>
      <br />
      <div style={{...gradText(f), display: 'inline-block'}}>문화예술교육, 무엇이 궁금하세요?</div>
    </div>
  );
};

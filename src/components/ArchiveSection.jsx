import React from 'react';
import {Icon, img, PAPER} from '../lib/ui.jsx';

const ARCH = [
  ['t1.png', 340, 448, '연차보고서', '2023 제주문화예술교육사업 운영 결과보고서'],
  ['t2.png', 340, 448, '행사자료', "2026 유네스코 문화예술교육 주간문화예술교육 포럼'전환을 위한 질문' 프로그램 북"],
  ['t3.png', 350, 461, '연수자료', '2025 아르떼 아카데미 프로그램북'],
  ['t4.png', 340, 448, '기타', '2026 문화예술교육진흥원 홍보 브로슈어'],
  ['t5.png', 340, 448, '문화예술교육현장', "2025 꿈의 극단 '춘천' 에세이집; 함께 쌓아올린 작은기적 이야기 '무대너머'"],
];
export const ArchiveSection = () => (
  <div style={{width: 1920, boxSizing: 'border-box', padding: '60px 0 120px', overflow: 'hidden'}}>
    <div style={{width: 1600, margin: '0 160px', display: 'flex', justifyContent: 'space-between', paddingBottom: 20, borderBottom: '4px solid #000'}}>
      <div style={{fontFamily: PAPER, fontSize: 62, fontWeight: 600, letterSpacing: -2.48, lineHeight: 1}}>아카이브</div>
      <Icon n="add.svg" w={40} />
    </div>
    <div style={{display: 'flex', gap: 30, padding: '40px 0 0 160px'}}>
      {ARCH.map(([n, w, h, tag, title]) => (
        <div key={n} className="card" style={{width: 340, height: 447, flex: 'none', position: 'relative', overflow: 'hidden', cursor: 'pointer'}}>
          <img src={img(n)} alt="" style={{position: 'absolute', left: 0, top: 0, width: w, height: h, objectFit: 'cover'}} />
          <div style={{position: 'absolute', left: 0, bottom: -13, width: 345, height: 260, background: 'linear-gradient(180deg, rgba(0,0,0,0), #000)'}} />
          <div style={{position: 'absolute', left: 0, bottom: 0, width: 340, boxSizing: 'border-box', padding: 24, display: 'flex', flexDirection: 'column', gap: 40}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start'}}>
              <div style={{background: '#000', padding: '4px 12px', fontSize: 16, fontWeight: 500, lineHeight: 1.5, letterSpacing: -0.32, color: '#fff'}}>{tag}</div>
              <div style={{fontSize: 22, fontWeight: 600, lineHeight: 1.4, letterSpacing: -0.44, color: '#fff'}}>{title}</div>
            </div>
            <div style={{display: 'flex', gap: 6, fontSize: 14, fontWeight: 500, lineHeight: 1.5, letterSpacing: -0.28, color: '#999'}}>
              <span>#기관홍보</span><span>#브로슈어</span><span>#홍보물</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

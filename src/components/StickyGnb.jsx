import React from 'react';
import {FONT, ACCENT, OUT, Icon} from '../lib/ui.jsx';
import {MEGA_COLS} from '../lib/menu.js';

// ───────── 스크롤 시 고정 GNB + 호버 전체펼침 ─────────
const MEGA_H = 358;
export const StickyGnb = ({visible, scale}) => {
  const [hover, setHover] = React.useState(null);
  React.useEffect(() => {
    if (!visible) setHover(null);
  }, [visible]);
  const open = hover !== null && visible;
  return (
    <div
      style={{
        position: 'fixed', left: 0, top: 0, width: 1920, zoom: scale, zIndex: 100, fontFamily: FONT,
        transform: visible ? 'translateY(0)' : 'translateY(-100%)', transition: `transform .35s ${OUT}`, pointerEvents: visible ? 'auto' : 'none',
      }}
      onMouseLeave={() => setHover(null)}
    >
      {/* 바 */}
      <div style={{position: 'relative', zIndex: 3, width: 1920, height: 60, background: '#0b0805', display: 'flex', padding: '0 160px', boxSizing: 'border-box'}}>
        {MEGA_COLS.map(([name, arrow], i) => {
          const on = hover === i;
          return (
            <div
              key={name}
              onMouseEnter={() => setHover(i)}
              style={{
                flex: '1 0 0', minWidth: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer',
                padding: '16px 8px', boxSizing: 'border-box', borderLeft: '1px solid #000', borderRight: i === MEGA_COLS.length - 1 ? '1px solid #000' : undefined,
                background: on ? ACCENT : '#0b0805', transition: 'background .2s ease',
              }}
            >
              <div style={{fontSize: 22, fontWeight: 700, whiteSpace: 'nowrap', color: on ? '#eff7fd' : '#e1dedb'}}>{name}</div>
              {arrow && <Icon n={on ? 'gnb_down_on.svg' : 'gnb_down.svg'} w={22} />}
            </div>
          );
        })}
      </div>
      {/* 전체펼침 패널 */}
      <div
        style={{
          position: 'absolute', left: 0, top: 60, width: 1920, height: open ? MEGA_H : 0, overflow: 'hidden', background: '#fff', zIndex: 2,
          boxShadow: open ? '0 8px 20px rgba(0,0,0,0.1)' : 'none', transition: `height .35s ${OUT}`,
        }}
      >
        <div style={{display: 'flex', width: 1920, height: MEGA_H, boxSizing: 'border-box', padding: '0 160px'}}>
          {MEGA_COLS.map(([name, , items], ci) => (
            <div
              key={name}
              style={{
                flex: '1 0 0', minWidth: 1, position: 'relative', display: 'flex', flexDirection: 'column', gap: 18, padding: '34px 24px 42px 32px',
                boxSizing: 'border-box', background: hover === ci ? '#eff6ff' : 'transparent', transition: 'background .2s ease',
              }}
              className="mcol"
            >
              {items.map((t, ti) => (
                <div key={t} className={`mlink${hover === ci && ti === 0 ? ' on' : ''}`} style={{position: 'relative', alignSelf: 'flex-start', cursor: 'pointer', whiteSpace: 'nowrap'}}>
                  {t}
                </div>
              ))}
              <div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: 1, background: '#d9d9d9'}} />
              {ci === MEGA_COLS.length - 1 && <div style={{position: 'absolute', right: 0, top: 0, bottom: 0, width: 1, background: '#d9d9d9'}} />}
            </div>
          ))}
        </div>
      </div>
      {/* dim */}
      <div
        onMouseEnter={() => setHover(null)}
        style={{
          position: 'absolute', left: 0, top: 60, width: 1920, height: 4000, background: '#1e2124', zIndex: 1,
          opacity: open ? 0.4 : 0, pointerEvents: open ? 'auto' : 'none', transition: 'opacity .3s ease',
        }}
      />
    </div>
  );
};

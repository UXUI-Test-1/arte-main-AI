import React from 'react';
import {FONT, ACCENT, Icon} from '../lib/ui.jsx';
import {ConicFill, phaseAt, useFrame} from '../lib/gradient.jsx';
import {BetaBadge} from './BetaBadge.jsx';

export const SearchBox = ({value, setValue, onSubmit, showBeta, inputRef}) => {
  const f = useFrame();
  return (
    <div style={{position: 'relative', width: 1600, height: 124}}>
      <div style={{position: 'absolute', inset: 0, filter: 'blur(14px)', opacity: 0.22}}>
        <ConicFill w={1600} h={124} f={f} radius={28} />
      </div>
      <ConicFill w={1600} h={124} f={f} radius={28} />
      <BetaBadge
        f={f}
        border={2.5}
        padding="5px 17px"
        size={20}
        ls={0.4}
        style={{left: 39, top: -23, zIndex: 3, opacity: showBeta ? 1 : 0, transition: 'opacity .35s ease', pointerEvents: 'none'}}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        style={{
          position: 'absolute', inset: 3, borderRadius: 25, background: '#fff', boxShadow: '0 14px 44px rgba(0,122,222,0.16)',
          display: 'flex', alignItems: 'center', gap: 16, padding: '0 36px 0 41px', margin: 0,
        }}
      >
        <input
          ref={inputRef}
          className="q"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="아르떼 라이브러리 AI에게 물어보세요"
          autoComplete="off"
          spellCheck={false}
          style={{
            flex: 1, minWidth: 0, height: 56, border: 0, outline: 0, background: 'transparent', padding: 0,
            fontFamily: FONT, fontSize: 38, fontWeight: 600, color: '#000', caretColor: ACCENT,
          }}
        />
        <button type="submit" className="sbtn" aria-label="검색" style={{position: 'relative', width: 80, height: 80, flex: 'none', border: 0, padding: 0, background: 'none', cursor: 'pointer'}}>
          <Icon n="mbtn.svg" w={104} style={{position: 'absolute', left: -12, top: -12, transform: `rotate(${phaseAt(f) * 360}deg)`}} />
          <Icon n="msearch.svg" w={48} style={{position: 'absolute', left: 16, top: 16}} />
        </button>
      </form>
    </div>
  );
};

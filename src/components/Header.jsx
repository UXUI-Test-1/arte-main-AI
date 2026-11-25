import React from 'react';
import {FONT, Icon, Txt, img} from '../lib/ui.jsx';

const GNB = [
  ['아카이브·도서', true],
  ['영상', false],
  ['추천', true],
  ['지역별 정보', true],
  ['통계', true],
  ['도서관 안내', true],
];

// 기본 헤더 (masthead + 로고/유틸 + GNB)
export const Header = () => (
  <div style={{width: 1920, display: 'flex', flexDirection: 'column', fontFamily: FONT}}>
    <div style={{height: 32, background: '#eef2f7', padding: '0 160px', display: 'flex', alignItems: 'center'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 8, width: 1200}}>
        <div style={{position: 'relative', width: 24, height: 24}}>
          <div style={{position: 'absolute', left: 0, right: 0, top: '16.67%', bottom: '16.67%'}}>
            <img src={img('flag.svg')} alt="" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}} />
          </div>
        </div>
        <Txt size={15} weight={400} color="#1e2124" ls={-0.3} lh={1.6}>
          이 누리집은 대한민국 공식 전자정부 누리집입니다.
        </Txt>
      </div>
    </div>
    <div style={{background: '#fff', padding: '24px 160px', display: 'flex', alignItems: 'center'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 9.714, height: 34, width: 242.857}}>
        <Icon n="logo1.svg" w={87.691} h={31.562} />
        <Icon n="logo2.svg" w={143.773} h={30.737} />
      </div>
      <div style={{flex: 1}} />
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 14}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 6}}>
            <Txt size={14} weight={400}>한국문화예술교육진흥원</Txt>
            <Icon n="ext.svg" w={16} />
          </div>
          <div style={{width: 1, height: 14, background: '#cdd1d5'}} />
          <div style={{display: 'flex', alignItems: 'center', gap: 6}}>
            <Icon n="view.svg" w={16} />
            <Txt size={14} weight={400}>글자·화면 설정</Txt>
          </div>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
          {[
            ['isearch.svg', '통합검색'],
            ['login.svg', '로그인'],
            ['join.svg', '회원가입'],
            ['menu.svg', '전체메뉴'],
          ].map(([ic, t]) => (
            <div key={t} style={{display: 'flex', alignItems: 'center', gap: 6}}>
              <Icon n={ic} w={20} />
              <Txt size={16} weight={700}>{t}</Txt>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div style={{height: 60, background: '#f4f7fa', display: 'flex', justifyContent: 'center'}}>
      <div style={{width: 1600, height: '100%', display: 'flex'}}>
        {GNB.map(([t, arrow], i) => (
          <div
            key={t}
            style={{
              flex: '1 0 0', minWidth: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              padding: '16px 8px', boxSizing: 'border-box', borderLeft: '4px solid #fff',
              borderRight: i === GNB.length - 1 ? '4px solid #fff' : undefined,
              background: i === 0 ? '#f4f7fa' : undefined,
            }}
          >
            <Txt size={22} weight={700}>{t}</Txt>
            {arrow && <Icon n="down.svg" w={22} />}
          </div>
        ))}
      </div>
    </div>
  </div>
);

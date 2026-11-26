import React from 'react';
import {FONT, ACCENT, EASE, Icon, Txt, Collapse, useScale} from './lib/ui.jsx';
import {Ticker} from './lib/gradient.jsx';
import {Header} from './components/Header.jsx';
import {HeroTitle} from './components/HeroTitle.jsx';
import {SearchBox} from './components/SearchBox.jsx';
import {SuggestChip} from './components/SuggestChip.jsx';
import {AnswerCard} from './components/AnswerCard.jsx';
import {KeywordResults} from './components/KeywordResults.jsx';
import {ArchiveSection} from './components/ArchiveSection.jsx';
import {MainSections} from './components/MainSections.jsx';
import {StickyGnb} from './components/StickyGnb.jsx';

const CHIPS = ['요즘 가장 인기있는 문화예술교육을 알려줘', '최근 3년간 문화예술교육 트렌드를 요약해줘', '초등학생 대상 국악 수업 자료 찾아줘'];

export const App = () => {
  const scale = useScale();
  const [phase, setPhase] = React.useState('main'); // main | searching | result
  const [q, setQ] = React.useState('');
  const [started, setStarted] = React.useState(false);
  const [resOpen, setResOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const inputRef = React.useRef(null);
  const timer = React.useRef(null);

  // 기본 헤더의 메뉴(GNB, 하단 y=190)가 화면 위로 완전히 가려졌을 때 고정 GNB로 전환
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY >= 190 * scale);
    on();
    window.addEventListener('scroll', on, {passive: true});
    return () => window.removeEventListener('scroll', on);
  }, [scale]);

  React.useEffect(() => {
    if (started) {
      const id = setTimeout(() => setResOpen(true), 30);
      return () => clearTimeout(id);
    }
  }, [started]);

  const submit = (text) => {
    const t = (typeof text === 'string' ? text : q).trim();
    if (!t) {
      inputRef.current && inputRef.current.focus();
      return;
    }
    setQ(t);
    setStarted(true);
    setPhase('searching');
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setPhase('result'), 3600);
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const main = phase === 'main';
  return (
    <Ticker>
      <div style={{width: 1920, zoom: scale, fontFamily: FONT, background: '#fff', overflow: 'hidden', minHeight: '100vh'}}>
        <Header />

        <div style={{width: 1920, boxSizing: 'border-box', padding: '0 160px'}}>
          {/* 메인 인사 문구 */}
          <Collapse open={main}>
            <div style={{paddingTop: 80, display: 'flex', flexDirection: 'column', gap: 24}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <Icon n="sparkle.svg" w={30} />
                <Txt size={26} weight={700} color={ACCENT}>arte AI 사서</Txt>
              </div>
              <HeroTitle />
              <div style={{height: 16}} />
            </div>
          </Collapse>

          {/* 검색창 (공용) */}
          <div style={{paddingTop: main ? 0 : 40, transition: `padding-top 700ms ${EASE}`}}>
            <SearchBox value={q} setValue={setQ} onSubmit={() => submit()} showBeta={main} inputRef={inputRef} />
          </div>

          {/* 추천 질문 */}
          <Collapse open={main}>
            <div style={{display: 'flex', gap: 12, paddingTop: 32}}>
              {CHIPS.map((c) => (
                <div key={c} className="chip" onClick={() => submit(c)} style={{cursor: 'pointer'}}>
                  <SuggestChip sparkle>{c}</SuggestChip>
                </div>
              ))}
            </div>
          </Collapse>

          {/* 검색 중 / 결과 */}
          {started && (
            <Collapse open={resOpen && !main} dur={800}>
              <div style={{paddingTop: 40, paddingBottom: 80}}>
                <AnswerCard phase={phase} />
                <div style={{height: 60}} />
                <KeywordResults />
              </div>
            </Collapse>
          )}
        </div>

        {/* 메인 아카이브 */}
        <Collapse open={main}>
          <ArchiveSection />
          <MainSections />
        </Collapse>
      </div>

      <StickyGnb visible={scrolled} scale={scale} />
    </Ticker>
  );
};

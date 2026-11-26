import React from 'react';
import {ACCENT, TEXT, EASE, Icon, Txt, img} from '../lib/ui.jsx';
import {gradText, slideGradient, useFrame} from '../lib/gradient.jsx';
import {Crumb} from './Crumb.jsx';
import {BetaBadge} from './BetaBadge.jsx';

// ───────── 검색 중(스켈레톤) / 결과 내용 ─────────
const Dots = ({f}) => (
  <div style={{display: 'flex', gap: 8, alignItems: 'center', width: 52, height: 12}}>
    {[0, 1, 2].map((i) => {
      const p = 0.5 + 0.5 * Math.sin((f / 30) * Math.PI * 2 * 1.2 - i * 0.9);
      return (
        <div
          key={i}
          style={{
            width: 12, height: 12, borderRadius: 6, background: i === 2 ? ACCENT : '#3db4f2',
            opacity: 0.35 + 0.65 * p, transform: `scale(${0.75 + 0.25 * p})`,
          }}
        />
      );
    })}
  </div>
);

const Skel = ({f, w, h, r, style}) => (
  <div
    style={{
      width: w, height: h, borderRadius: r, flex: 'none',
      ...slideGradient(f, '#e3f0fc', '#f7fbff', 1),
      ...style,
    }}
  />
);

const LoadingContent = ({f}) => (
  <div style={{display: 'flex', flexDirection: 'column', gap: 32, width: 1484}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 14, visibility: 'hidden'}}>
        <Icon n="sparkle.svg" w={36} />
        <div style={{...gradText(f), fontSize: 34, fontWeight: 700, whiteSpace: 'nowrap', lineHeight: 'normal'}}>AI 검색 결과</div>
        <Dots f={f} />
      </div>
      <div style={{fontSize: 18, fontWeight: 500, lineHeight: 1.6, letterSpacing: -0.36, color: ACCENT, wordBreak: 'keep-all'}}>
        arte 라이브러리 AI 검색은 질문하신 내용을 분석하여 arte 라이브러리 소장자료에서 가장 적합한 내용을 찾아 드리는 맞춤형 AI 서비스입니다.
      </div>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
      <Skel f={f} w={1484} h={22} r={11} />
      <Skel f={f} w={1369} h={22} r={11} />
      <Skel f={f} w={893} h={22} r={11} />
    </div>
    <div style={{display: 'flex', gap: 16}}>
      {[0, 1].map((i) => (
        <div
          key={i}
          style={{
            flex: '1 0 0', minWidth: 1, display: 'flex', gap: 20, padding: 20, boxSizing: 'border-box',
            background: '#fff', border: '1px solid #e0ebf7', borderRadius: 18,
          }}
        >
          <Skel f={f} w={96} h={132} r={10} />
          <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
            <Skel f={f} w={504} h={18} r={9} />
            <Skel f={f} w={392} h={18} r={9} />
            <Skel f={f} w={280} h={18} r={9} />
          </div>
        </div>
      ))}
    </div>
    <div style={{fontSize: 18, fontWeight: 400, lineHeight: 'normal', letterSpacing: -0.36, color: '#808c9e', whiteSpace: 'nowrap'}}>
      보통 5~10초 정도 걸려요. 그동안 아래 키워드 검색 결과를 먼저 확인해 보세요.
    </div>
  </div>
);

const Pill = ({children, size = 18, weight = 500, color = ACCENT, bg = '#eff6ff', pad = '8px 16px', border}) => (
  <div style={{background: bg, borderRadius: 999, padding: pad, border, boxSizing: 'border-box'}}>
    <Txt size={size} weight={weight} color={color}>{children}</Txt>
  </div>
);

const RCard = ({image, imgW, w, crumbs, title, badge, excerpt, hl, gap = 20, flex}) => (
  <div
    style={{
      background: '#fff', border: '1px solid #dee8f5', borderRadius: 16, overflow: 'hidden', display: 'flex', alignItems: 'stretch',
      width: w, flex, minWidth: 1, boxSizing: 'border-box',
    }}
  >
    <div style={{width: imgW, height: 188, flex: 'none', position: 'relative'}}>
      <img src={img(image)} alt="" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover'}} />
    </div>
    <div style={{flex: '1 0 0', minWidth: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap, boxSizing: 'border-box'}}>
      <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
        <Crumb items={crumbs} />
        <Txt size={22} weight={600} color={TEXT} ls={-0.44} lh={1.4} style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{title}</Txt>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
        {badge && (
          <div style={{alignSelf: 'flex-start', background: '#000', border: '2px solid #000', padding: '3px 12px'}}>
            <Txt size={14} weight={500} color="#fff" ls={-0.28} lh={1.5}>{badge}</Txt>
          </div>
        )}
        <div style={{height: 24, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontSize: 16, lineHeight: 1.5, fontWeight: 500, color: '#555', letterSpacing: hl ? 0 : -0.32}}>
          {hl ? (
            <>
              …<span style={{color: ACCENT, fontWeight: 600, textDecoration: 'underline'}}>{hl}</span>
              {excerpt}
            </>
          ) : (
            excerpt
          )}
        </div>
      </div>
    </div>
  </div>
);

const PageBtn = ({children, active}) => (
  <div
    style={{
      width: 44, height: 44, borderRadius: 999, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: active ? ACCENT : undefined,
    }}
  >
    <Txt size={18} weight={active ? 700 : 500} color={active ? '#fff' : '#555'}>{children}</Txt>
  </div>
);

const ArrowBtn = ({n}) => (
  <div
    style={{
      width: 44, height: 44, borderRadius: 999, flex: 'none', boxSizing: 'border-box', border: '1px solid #d9d9d9',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}
  >
    <Icon n={n} w={20} />
  </div>
);

const ResultContent = ({f = 0}) => {
  const hl = '예술강사는 해당분야의 전문성을 보유한 전문 인력으로서 학교 현장에 파견되는 것이므로 학교 담당 교사의 교육전문성과 예술강사의 예술전문성';
  const tail = '이 예술강사는 해당분야의 전문성을 보유한 전문 인력으로서 학교 현장에 파견되는 것이므로 학교 담당 교사의 교육전문성과 예술강사의 예술전문성이…';
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 60, width: 1484}}>
      <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 14, visibility: 'hidden'}}>
          <Icon n="sparkle.svg" w={36} />
          <div style={{...gradText(f), fontSize: 34, fontWeight: 700, whiteSpace: 'nowrap', lineHeight: 'normal'}}>AI 검색 결과</div>
        </div>
        <div style={{fontSize: 26, fontWeight: 400, lineHeight: 1.65, color: TEXT, wordBreak: 'keep-all'}}>
          한국의 예술강사는 <b style={{color: ACCENT, fontWeight: 700}}>「문화예술교육 지원법」</b>에 근거해{' '}
          <b style={{color: ACCENT, fontWeight: 700}}>‘학교 예술강사 지원사업’</b> 등 국가 정책을 실현하는 전문 교육 주체입니다. 공교육과 예술현장을 유기적으로 연결해 학생의 창의·문화 감수성을 함양하는 공교육 보완자이자, 국민의 보편적 문화 향유 권리를 보장하는 국가 정책 이행자 역할을 수행합니다.
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 60}}>
        <div style={{height: 1, background: '#d9d9d9'}} />
        <div style={{display: 'flex', flexDirection: 'column', gap: 32}}>
          <Txt size={26} weight={700} color={TEXT}>관련 자료</Txt>
          <div style={{display: 'flex', flexDirection: 'column', gap: 48}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
              <div style={{display: 'flex', gap: 10}}>
                <Pill size={20} weight={700} color="#fff" bg={ACCENT} pad="10px 22px">전체 20</Pill>
                {['아카이브·도서 8', '영상 5', '추천 4', '지역 3'].map((t) => (
                  <Pill key={t} size={20} weight={500} color="#555" bg="#fff" pad="10px 22px" border="1px solid #d9d9d9">{t}</Pill>
                ))}
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                <div style={{display: 'flex', gap: 12}}>
                  <RCard flex="1 0 0" image="r1.png" imgW={134} crumbs={['HOME', '아카이브·도서', '문화예술교육현장']} title="'함께 만드는 수업, 협력수업' 교사와 예술강사를 위한 협력수업 길라잡이" badge="원문 15p 3번째 문단" hl={hl} excerpt={tail} gap={24} />
                  <RCard flex="1 0 0" image="r2.png" imgW={134} crumbs={['HOME', '아카이브·도서', '연구보고서']} title="'함께 만드는 수업, 협력수업' 교사와 예술강사를 위한 협력수업 길라잡이" badge="원문 15p 3번째 문단" hl={hl} excerpt={tail} />
                </div>
                <div style={{display: 'flex', gap: 12}}>
                  <RCard flex="1 0 0" image="r3.png" imgW={134} crumbs={['HOME', '영상']} title="[학교예술강사 지원사업] 가이드 영상 ㅣ 강사용" badge="영상 00:01:02" excerpt="...한국문화예술교육진흥원은 문화예술교육 정책을 바탕으로 문화예술교육사, 예술강사, 행정인력, 교원, 기획자 등 대상자별 맞춤 교육과 역량강화를 위해 여러 사업을 추진하고 있다…" />
                  <RCard flex="1 0 0" image="r4.png" imgW={134} crumbs={['HOME', '추천', '주제별 큐레이션']} title="전문인력 역량강화를 위한 연수 및 프로그램" excerpt="...한국문화예술교육진흥원은 문화예술교육 정책을 바탕으로 문화예술교육사," />
                </div>
              </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 0'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                <ArrowBtn n="chev_l.svg" />
                <div style={{display: 'flex', gap: 6, padding: '0 12px'}}>
                  <PageBtn active>1</PageBtn>
                  <PageBtn>2</PageBtn>
                  <PageBtn>3</PageBtn>
                  <PageBtn>4</PageBtn>
                  <PageBtn>5</PageBtn>
                </div>
                <ArrowBtn n="chev_r.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ───────── AI 답변 카드 (검색 중 → 결과, 박스가 그대로 확장) ─────────
const LiveLoading = () => <LoadingContent f={useFrame()} />;
const LiveResult = () => <ResultContent f={useFrame()} />;

export const AnswerCard = ({phase}) => {
  const f = useFrame();
  const loadRef = React.useRef(null);
  const resRef = React.useRef(null);
  const unitRef = React.useRef(null);
  const [hs, setHs] = React.useState({l: 600, r: 1200});

  React.useLayoutEffect(() => {
    const measure = () => {
      const s = unitRef.current.getBoundingClientRect().height / 100 || 1; // 배율 보정
      setHs({l: loadRef.current.getBoundingClientRect().height / s, r: resRef.current.getBoundingClientRect().height / s});
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(loadRef.current);
    ro.observe(resRef.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const result = phase === 'result';
  const h = (result ? hs.r : hs.l) + 48 + 52 + 4;
  return (
    <div
      style={{
        width: 1600, height: h, boxSizing: 'border-box', borderRadius: 28, position: 'relative', border: '2px solid rgba(61,180,242,0.6)',
        background: 'linear-gradient(180deg, #eff6ff 0%, #fff 35%, #fff 100%)', transition: `height 800ms ${EASE}`,
      }}
    >
      <div ref={unitRef} style={{position: 'absolute', left: -9999, top: 0, width: 1, height: 100, visibility: 'hidden'}} />
      <div style={{position: 'absolute', inset: 0, borderRadius: 26, overflow: 'hidden'}}>
        <div ref={loadRef} style={{position: 'absolute', left: 56, top: 48, width: 1484, opacity: result ? 0 : 1, transition: result ? 'opacity .3s ease' : 'opacity .4s ease .35s', pointerEvents: result ? 'none' : 'auto'}}>
          <LiveLoading />
        </div>
        <div ref={resRef} style={{position: 'absolute', left: 56, top: 48, width: 1484, opacity: result ? 1 : 0, transition: result ? 'opacity .5s ease .3s' : 'opacity .2s ease', pointerEvents: result ? 'auto' : 'none'}}>
          <LiveResult />
        </div>
      </div>
      <div style={{position: 'absolute', left: 56, top: 48, display: 'flex', alignItems: 'center', gap: 14, zIndex: 2}}>
        <Icon n="sparkle.svg" w={36} />
        <div style={{...gradText(f), fontSize: 34, fontWeight: 700, whiteSpace: 'nowrap', lineHeight: 'normal'}}>AI 검색 결과</div>
        <div style={{opacity: result ? 0 : 1, transition: 'opacity .3s ease'}}><Dots f={f} /></div>
      </div>
      <BetaBadge f={f} border={3} padding="6px 20.4px" size={24} ls={0.48} style={{left: 58, top: -24, zIndex: 3}} />
    </div>
  );
};

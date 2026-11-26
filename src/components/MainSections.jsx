import React from 'react';
import {Icon, img, PAPER} from '../lib/ui.jsx';

const BLACK = '#000';
const TERTIARY = '#999';
const LINE = '#d9d9d9';
const DARK = '#1e2124';

const Head = ({title, plus = true}) => (
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, paddingBottom: 20, borderBottom: '4px solid #000', flex: 'none'}}>
    <div style={{fontFamily: PAPER, fontSize: 62, fontWeight: 600, letterSpacing: -2.48, lineHeight: 1, whiteSpace: 'nowrap'}}>{title}</div>
    {plus && <Icon n="add.svg" w={40} />}
  </div>
);

const Tag = ({children, bg = BLACK, color = '#fff', style}) => (
  <div style={{background: bg, color, padding: '4px 12px', fontSize: 16, fontWeight: 500, lineHeight: 1.5, letterSpacing: -0.32, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', justifyContent: 'center', ...style}}>{children}</div>
);

const Sec = ({children, style}) => (
  <div style={{width: 1920, boxSizing: 'border-box', padding: '60px 160px', background: '#fff', ...style}}>{children}</div>
);

/* ───────── 영상 / 신착 도서 ───────── */
const VideoBook = () => (
  <Sec>
    <div style={{display: 'flex', gap: 40, alignItems: 'stretch'}}>
      <div style={{width: 780, flex: 'none', display: 'flex', flexDirection: 'column', gap: 40}}>
        <Head title="영상" />
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{position: 'relative', height: 267, background: LINE, overflow: 'hidden'}}>
            <div style={{position: 'absolute', width: 789, height: 444, left: 'calc(50% + 2.5px)', top: 'calc(50% + 61.5px)', transform: 'translate(-50%,-50%)'}}>
              <img src={img('v_bg1.png')} alt="" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover'}} />
              <img src={img('v_bg2.png')} alt="" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div style={{position: 'absolute', width: 80, height: 80, left: 'calc(50% - 26px)', top: 'calc(50% + 0.5px)', transform: 'translate(-50%,-50%)', background: '#000', borderRadius: 999, overflow: 'hidden'}}>
              <Icon n="v_play.svg" w={80} />
            </div>
            <div style={{position: 'absolute', right: 16, top: 16, background: '#000', border: '1px solid #fff', borderRadius: 6, padding: '4px 8px', fontSize: 16, fontWeight: 500, lineHeight: 1.5, letterSpacing: -0.32, color: '#fff'}}>3:08:30</div>
          </div>
          <div style={{border: '1px solid #000', padding: '24px 24px 24px 40px', display: 'flex', flexDirection: 'column', gap: 10}}>
            <div style={{fontSize: 26, fontWeight: 600, lineHeight: 1.2, letterSpacing: -0.52}}>2026 유네스코 문화예술교육 주간 | 문화예술교육 포럼</div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
              <div style={{display: 'flex', gap: 10}}>
                <Tag>프로그램</Tag>
                <Tag>2026</Tag>
              </div>
              <div style={{fontSize: 16, fontWeight: 500, lineHeight: 1.5, letterSpacing: -0.32, color: TERTIARY}}>#유네스코 #문화예술교육 #포럼</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 40}}>
        <Head title="신착 도서" />
        <div style={{display: 'flex', gap: 24, alignItems: 'center'}}>
          <div style={{flex: 1, minWidth: 0, border: '1px solid #000'}}>
            <div style={{position: 'relative', height: 194, overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 0, top: -86, width: 378, height: 532}}>
                <img src={img('nb1_bg.png')} alt="" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover'}} />
                <div style={{position: 'absolute', inset: 0, background: 'rgba(253,60,60,.8)'}} />
              </div>
              <img src={img('nb1.png')} alt="" style={{position: 'absolute', left: 103, top: 27, width: 172, height: 147, objectFit: 'cover'}} />
            </div>
            <div style={{padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center'}}>
              <div style={{height: 78, overflow: 'hidden', fontSize: 26, fontWeight: 600, lineHeight: 1.2, letterSpacing: -0.52}}>탐나는 현대미술:<br />21세기가 사랑한 예술가들</div>
              <div style={{fontSize: 16, fontWeight: 500, lineHeight: 1.5, letterSpacing: -0.32, color: TERTIARY, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>#현대미술 #컬렉터 #거장 #호크니 #경매 #론뮤익 #매튜웡 #루이즈부르주아 #조너스우드</div>
            </div>
          </div>
          <div style={{flex: 1, minWidth: 0, border: '1px solid #000'}}>
            <div style={{position: 'relative', height: 194, overflow: 'hidden', background: DARK}}>
              <img src={img('nb2.png')} alt="" style={{position: 'absolute', left: 'calc(50% - 0.5px)', top: '50%', transform: 'translate(-50%,-50%)', width: 441, height: 644, objectFit: 'cover', filter: 'blur(25px)'}} />
              <img src={img('nb2.png')} alt="" style={{position: 'absolute', left: '50%', top: 'calc(50% + 89px)', transform: 'translate(-50%,-50%)', width: 202, height: 294, objectFit: 'cover'}} />
            </div>
            <div style={{padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center'}}>
              <div style={{height: 78, overflow: 'hidden', fontSize: 26, fontWeight: 600, lineHeight: 1.2, letterSpacing: -0.52}}>이피세</div>
              <div style={{fontSize: 16, fontWeight: 500, lineHeight: 1.5, letterSpacing: -0.32, color: TERTIARY}}>#현대미술 #이피 #도로시아태닝 #불화 #시각화</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Sec>
);

/* ───────── 지역별 정보 ───────── */
const RegionMenu = ({no, title, desc, dark, arrow}) => (
  <div style={{flex: 1, minHeight: 0, boxSizing: 'border-box', border: '1px solid #000', padding: 40, background: dark ? DARK : '#fff', display: 'flex', flexDirection: 'column', gap: 12}}>
    <div style={{display: 'flex', justifyContent: 'space-between', gap: 12}}>
      <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
        <div style={{padding: '8px 0', fontSize: 20, fontWeight: 500, lineHeight: 1.6, letterSpacing: -0.4, color: TERTIARY}}>{no}</div>
        <div style={{width: 200, fontSize: 40, fontWeight: 600, lineHeight: 1.4, letterSpacing: -0.8, color: dark ? '#fff' : '#000'}}>{title}</div>
      </div>
      <Icon n={arrow} w={40} style={{transform: 'rotate(-90deg) scaleX(-1)'}} />
    </div>
    <div style={{fontSize: 20, fontWeight: 500, lineHeight: 1.6, letterSpacing: -0.4, color: TERTIARY}}>{desc}</div>
  </div>
);

const Pub = ({src}) => (
  <div style={{flex: 1, minWidth: 0, display: 'flex', gap: 12, alignItems: 'center'}}>
    <div style={{width: 144, height: 189, flex: 'none', overflow: 'hidden', position: 'relative'}}>
      <img src={img(src)} alt="" style={{position: 'absolute', inset: 0, width: 144, height: 189, objectFit: 'cover'}} />
    </div>
    <div style={{flex: 1, minWidth: 0, alignSelf: 'stretch', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <div style={{height: 126, display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start', overflow: 'hidden'}}>
        <Tag style={{padding: '4px 12px'}}>제주</Tag>
        <div style={{fontSize: 26, fontWeight: 600, lineHeight: 1.2, letterSpacing: -0.52}}>2023 제주문화예술교육<br />사업 운영 결과보고서</div>
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: 6, fontSize: 16, fontWeight: 500, lineHeight: 1.5, letterSpacing: -0.32, color: TERTIARY, whiteSpace: 'nowrap'}}>
        <span>제주문화예술재단</span>
        <span style={{width: 1, height: 14, background: LINE}} />
        <span>연차보고서</span>
        <span style={{width: 1, height: 14, background: LINE}} />
        <span>2023</span>
      </div>
    </div>
  </div>
);

const Region = () => (
  <Sec style={{display: 'flex', flexDirection: 'column', gap: 40}}>
    <Head title="지역별 정보" plus={false} />
    <div style={{display: 'flex', height: 486}}>
      <div style={{width: 644, flex: 'none', display: 'flex', flexDirection: 'column', height: '100%'}}>
        <RegionMenu no="01" title="프로그램" dark arrow="arr40_pink.svg" desc="지역별 문화예술교육 프로그램 정보를 검색하고 조회할 수 있습니다." />
        <RegionMenu no="02" title="운영단체" arrow="arr40_blk.svg" desc="전국의 문화예술교육을 실행하는 단체·시설·기관 정보를 제공합니다." />
      </div>
      <div style={{flex: 1, minWidth: 0, boxSizing: 'border-box', border: '1px solid #000', padding: 40, display: 'flex', flexDirection: 'column', gap: 60}}>
        <div style={{height: 157, display: 'flex', flexDirection: 'column', gap: 12}}>
          <div style={{display: 'flex', justifyContent: 'space-between', gap: 12}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
              <div style={{padding: '8px 0', fontSize: 20, fontWeight: 500, lineHeight: 1.6, letterSpacing: -0.4, color: TERTIARY}}>03</div>
              <div style={{width: 200, fontSize: 40, fontWeight: 600, lineHeight: 1.4, letterSpacing: -0.8, whiteSpace: 'nowrap'}}>지역 발간물</div>
            </div>
            <Icon n="arr40_blk.svg" w={40} style={{transform: 'rotate(-90deg) scaleX(-1)'}} />
          </div>
          <div style={{fontSize: 20, fontWeight: 500, lineHeight: 1.6, letterSpacing: -0.4, color: TERTIARY}}>전국의 문화예술교육 운영단체가 발간한 지역별 자료를 확인하실 수 있습니다.</div>
        </div>
        <div style={{display: 'flex', gap: 40, alignItems: 'center'}}>
          <Pub src="reg1.png" />
          <Pub src="reg2.png" />
        </div>
      </div>
    </div>
  </Sec>
);

/* ───────── 추천 ───────── */
const RecCard = ({title, desc, children}) => (
  <div style={{border: '1px solid #000', overflow: 'hidden'}}>
    <div style={{height: 204, position: 'relative', overflow: 'hidden', background: '#fff'}}>{children}</div>
    <div style={{background: '#fff', padding: 28, display: 'flex', gap: 40, alignItems: 'flex-start'}}>
      <div style={{flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2}}>
        <div style={{fontSize: 36, fontWeight: 600, lineHeight: 1.4, letterSpacing: -0.72, whiteSpace: 'nowrap'}}>{title}</div>
        <div style={{fontSize: 18, fontWeight: 500, lineHeight: 1.6, letterSpacing: -0.36, color: TERTIARY}}>{desc}</div>
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: 8, fontSize: 16, fontWeight: 500, lineHeight: 1.5, letterSpacing: -0.32}}>
        더보기
        <Icon n="arr24_blk.svg" w={24} style={{transform: 'rotate(-90deg) scaleX(-1)'}} />
      </div>
    </div>
  </div>
);

const Book = ({src, title, meta, grad = 170}) => (
  <div style={{flex: 1, minWidth: 0, height: '100%', position: 'relative', overflow: 'hidden'}}>
    <img src={img(src)} alt="" style={{position: 'absolute', left: 0, top: 0, width: 228, height: 341, objectFit: 'cover'}} />
    <div style={{position: 'absolute', left: 0, bottom: 0, width: 228, height: grad, boxSizing: 'border-box', padding: 24, display: 'flex', flexDirection: 'column', gap: 8, justifyContent: 'flex-end', background: 'linear-gradient(180deg, rgba(0,0,0,0), #000)'}}>
      <div style={{fontSize: 24, fontWeight: 700, lineHeight: 1.2, letterSpacing: -0.48, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{title}</div>
      <div style={{fontSize: 14, fontWeight: 400, lineHeight: 1.6, letterSpacing: -0.28, color: TERTIARY, whiteSpace: 'nowrap'}}>{meta}</div>
    </div>
  </div>
);

const Recommend = () => (
  <Sec style={{display: 'flex', flexDirection: 'column', gap: 40}}>
    <Head title="추천" plus={false} />
    <div style={{display: 'flex', gap: 40, alignItems: 'stretch'}}>
      <div style={{flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 40}}>
        <RecCard title="주제별 큐레이션" desc="아르떼라이브러리의 다양한 주제별 추천자료를 서비스합니다.">
          <img src={img('rec_blocks.svg')} alt="" style={{position: 'absolute', inset: 0, width: '100%', height: 204}} />
        </RecCard>
        <RecCard title="최신·인기 자료" desc="아르떼라이브러리의 최신 자료와 인기 자료를 소개합니다.">
          <img src={img('rec1.png')} alt="" style={{position: 'absolute', left: -27, top: -460, width: 834, height: 1187, objectFit: 'cover'}} />
        </RecCard>
      </div>
      <div style={{flex: 1, minWidth: 0, background: DARK, padding: 40, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 28, overflow: 'hidden'}}>
        <div style={{display: 'flex', gap: 24, alignItems: 'flex-start'}}>
          <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start'}}>
            <div style={{fontSize: 18, fontWeight: 500, lineHeight: 1.6, letterSpacing: -0.36, color: TERTIARY}}>북 큐레이션</div>
            <div style={{fontSize: 24, fontWeight: 500, lineHeight: 1.5, letterSpacing: -0.48, color: '#fff'}}>2026. 07.</div>
            <div style={{background: '#ff2268', padding: '2px 6px', fontSize: 48, fontWeight: 700, lineHeight: 1, letterSpacing: -0.96, color: '#fff', whiteSpace: 'nowrap'}}>#미래/AI</div>
          </div>
          <Icon n="arr40_pink2.svg" w={40} style={{transform: 'rotate(-90deg) scaleX(-1)'}} />
        </div>
        <div style={{display: 'flex', gap: 28, height: 341}}>
          <Book src="rec2.png" title="예술과 인공지능" meta="이재박, 2021" />
          <Book src="book1.png" title="AI 시대의 사진" meta="김경훈, 2026" />
          <Book src="book2.png" title="AI, 예술의 미래를 묻다" meta="장병탁, 2024" grad={140} />
        </div>
      </div>
    </div>
  </Sec>
);

/* ───────── 통계 ───────── */
const StatCard = ({title, desc, h = 166, children}) => (
  <div style={{flex: 1, minWidth: 0, height: 542, boxSizing: 'border-box', border: '1px solid #000', display: 'flex', flexDirection: 'column'}}>
    <div style={{height: h, flex: 'none', boxSizing: 'border-box', padding: 28}}>
      <div style={{fontSize: 36, fontWeight: 600, lineHeight: 1.4, letterSpacing: -0.72}}>{title}</div>
      <div style={{fontSize: 18, fontWeight: 500, lineHeight: 1.6, letterSpacing: -0.36, color: TERTIARY, marginTop: 2}}>{desc}</div>
    </div>
    {children}
  </div>
);

const YEARS = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];
const BAR_H = [65.739, 69.939, 79.037, 96.716, 127.705, 116.72, 123.117, 121.76, 131.763, 157.195, 150.759, 138.03, 143.419, 181.555, 162.532, 154.998, 109.677];
const VAL = ['5,087', '5,412', '6,116', '7,484', '9,882', '9,032', '9,527', '9,422', '10,196', '12,164', '11,666', '10,681', '11,098', '14,049', '12,577', '11,994', '8,487'];
const ANN = [[-2, 125.63], [25, 120.63], [52, 111.63], [78, 94.63], [105, 63.5], [132, 74.63], [158, 67.63], [185, 69.63], [209, 59.5], [236, 33.5], [263, 40.5], [289, 52.5], [316, 47.5], [343, 9.5], [369, 28.5], [396, 36.5], [425, 81.5]];
const X_W = [24, 24, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24, 23, 24];
const F8 = {fontSize: 8, fontWeight: 500, lineHeight: 1.6, letterSpacing: -0.16};

const BarChart = () => (
  <div style={{flex: 1, minHeight: 0, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4, overflow: 'hidden', background: '#fff'}}>
    <div style={{display: 'flex', gap: 8}}>
      <div style={{height: 206.768, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', color: TERTIARY, textAlign: 'right', whiteSpace: 'nowrap', ...F8}}>
        {['16,000', '14,000', '12,000', '10,000', '8,000', '6,000', '4,000', '2,000', '0'].map((t) => <div key={t}>{t}</div>)}
      </div>
      <div style={{flex: 1, minWidth: 0, height: 206.768, position: 'relative'}}>
        {[0.13, 26.13, 52.13, 78.13, 103.13, 129.13, 155.13, 181.13, 207.13].map((t, i) => (
          <div key={t} style={{position: 'absolute', left: 0, right: 0, top: t, height: 1, background: i === 8 ? '#000' : '#f3f3f3'}} />
        ))}
        <div style={{position: 'absolute', left: 0, top: 0.13, width: '100%', height: 207, display: 'flex', gap: 10, overflow: 'hidden'}}>
          {BAR_H.map((h, i) => (
            <div key={YEARS[i]} style={{flex: 1, minWidth: 0, height: 206.768, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
              <div style={{width: '100%', height: h, background: '#173bff', borderRadius: '0.9px 0.9px 0 0', flex: 'none'}} />
            </div>
          ))}
        </div>
        <img src={img('st_trend.svg')} alt="" style={{position: 'absolute', left: 9, top: 25, width: 426, height: 116}} />
        {ANN.map(([l, t], i) => (
          <div key={YEARS[i]} style={{position: 'absolute', left: l, top: t, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, color: '#173bff', whiteSpace: 'nowrap', textAlign: 'center', ...F8}}>
            <div>{VAL[i]}</div>
            <img src={img('st_point.svg')} alt="" style={{width: 8, height: 8, display: 'block'}} />
          </div>
        ))}
      </div>
    </div>
    <div style={{display: 'flex', overflow: 'hidden'}}>
      <div style={{width: 34, flex: 'none'}} />
      <div style={{flex: 1, minWidth: 0, display: 'flex', gap: 3, overflow: 'hidden', color: '#555', textAlign: 'center', ...F8}}>
        {YEARS.map((y, i) => (
          <div key={y} style={{width: X_W[i], flex: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap'}}>
            <div>{y}</div>
            {y === 2026 && <div>2분기</div>}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const STACK = [
  [2021, 30, [17, 34], [10, 20], [43, 86], [15, 30]],
  [2022, 24, [20, 40], [12, 24], [38, 76], [18, 36]],
  [2023, 14, [22, 44], [14, 28], [41, 82], [16, 32]],
  [2024, 22, [19, 38], [11, 22], [45, 90], [14, 28]],
  [2025, 10, [25, 50], [13, 26], [40, 80], [17, 34]],
];
const SEG_BG = ['#173bff', '#007ade', '#39d1ff', '#80f4c2'];

const StackChart = () => (
  <div style={{flex: 1, minHeight: 0, boxSizing: 'border-box', padding: '12px 28px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
      <div style={{fontSize: 17, fontWeight: 600, lineHeight: 1.4, letterSpacing: -0.51, color: '#555'}}>문화예술교육 관심도</div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
        <div style={{display: 'flex', gap: 8}}>
          <div style={{height: 200, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', color: TERTIARY, textAlign: 'right', whiteSpace: 'nowrap', ...F8}}>
            {['100', '80', '60', '40', '20', '0'].map((t) => <div key={t}>{t}</div>)}
          </div>
          <div style={{flex: 1, minWidth: 0, height: 200, position: 'relative'}}>
            {[0, 40, 80, 120, 160, 200].map((t) => <div key={t} style={{position: 'absolute', left: 0, right: 0, top: t, height: 1, background: '#f3f3f3'}} />)}
            <div style={{position: 'absolute', inset: 0, display: 'flex', justifyContent: 'space-between', overflow: 'hidden'}}>
              {STACK.map(([y, sp, ...segs]) => (
                <div key={y} style={{width: 68.8, height: '100%', display: 'flex', flexDirection: 'column', flex: 'none'}}>
                  <div style={{height: sp, flex: 'none'}} />
                  {segs.map(([v, h], i) => (
                    <div key={i} style={{height: h, flex: 'none', boxSizing: 'border-box', background: SEG_BG[i], borderBottom: i < 3 ? '1.5px solid #fff' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 500, lineHeight: 1.5, letterSpacing: -0.24}}>{v}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{width: 30, flex: 'none'}} />
          <div style={{flex: 1, minWidth: 0, display: 'flex', justifyContent: 'space-between', height: 24}}>
            {STACK.map(([y]) => (
              <div key={y} style={{width: 68.8, flex: 'none', textAlign: 'center', color: '#555', fontSize: 12, fontWeight: 500, lineHeight: '24px', letterSpacing: -0.24}}>{y}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PIE_LABELS = [
  ['문서, 4,793', 289.47, 6.31, '#5e88cc'],
  ['도서, 12,374', 340.98, 218.95, '#173bff'],
  ['영상, 2,063', 156.02, 272.16, '#66c39b', true],
  ['추천, 6,444', 79.35, 180.66, '#007ade', true],
  ['지역별 정보, 6,314', 139.86, 17.93, '#2da7cc', true],
];

const PieChart = () => (
  <div style={{flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 28}}>
    <div style={{position: 'relative', width: 440, height: 320, overflow: 'hidden', flex: 'none'}}>
      <img src={img('st_pie.svg')} alt="" style={{position: 'absolute', inset: 0, width: 440, height: 320}} />
      {PIE_LABELS.map(([t, l, tp, c, r]) => (
        <div key={t} style={{position: 'absolute', left: l, top: tp, transform: r ? 'translateX(-100%)' : undefined, color: c, fontSize: 16, fontWeight: 500, lineHeight: 1.5, letterSpacing: -0.32, whiteSpace: 'nowrap', textAlign: r ? 'right' : 'left'}}>{t}</div>
      ))}
    </div>
  </div>
);

const Stats = () => (
  <Sec style={{display: 'flex', flexDirection: 'column', gap: 40}}>
    <Head title="통계" plus={false} />
    <div style={{display: 'flex'}}>
      <StatCard title="행정통계" desc={<>연도별 문화예술교육 강사수, 수혜자수, 예산, 지원기관 수<br />통계 정보를 제공합니다.</>} h={166}>
        <BarChart />
      </StatCard>
      <StatCard title="조사 통계" desc={<>우리나라 국민의 문화예술교육에 대한 수요, 인식, 참여 현황 등의<br />조사 통계 정보를 제공합니다.</>}>
        <StackChart />
      </StatCard>
      <StatCard title="자료통계" desc="한국문화예술교육진흥원의 소장자료 통계 정보를 제공 합니다.">
        <PieChart />
      </StatCard>
    </div>
  </Sec>
);

/* ───────── 이벤트·행사 / 공지·소식 ───────── */
const Poster = () => {
  const num = {position: 'absolute', color: '#fff', whiteSpace: 'nowrap', textAlign: 'right', transform: 'translateX(-100%)', lineHeight: 1.2, fontWeight: 400};
  return (
    <div style={{position: 'relative', width: 700, height: 240, background: '#000', overflow: 'hidden', flex: 'none'}}>
      <img src={img('ev_group.svg')} alt="" style={{position: 'absolute', left: -302, top: -46, width: 1290, height: 390}} />
      <div style={{position: 'absolute', left: 67, top: 26, width: 222, height: 320, boxSizing: 'border-box', background: '#09412e', padding: '28.371px 21.278px', display: 'flex', flexDirection: 'column', gap: 79, overflow: 'hidden'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 14, width: 179, color: '#7b8c61', fontSize: 28.371, fontWeight: 500, letterSpacing: -0.5674}}>
          <div style={{height: 3, width: 180, background: '#7b8c61'}} />
          <div>7월<br />초성 퀴즈<br />이벤트</div>
          <div>arte event</div>
        </div>
      </div>
      <div style={{position: 'absolute', left: 399, top: 29, width: 264, height: 179}}>
        <div style={{...num, left: 133, top: 0, fontSize: 80.241, letterSpacing: -6.4193}}>07</div>
        <div style={{...num, left: 264, top: 0, fontSize: 82.241}}>14</div>
        <div style={{...num, left: 264, top: 88, fontSize: 82.241, letterSpacing: -6.5793}}>23</div>
        <img src={img('ev_num.svg')} alt="" style={{position: 'absolute', left: 141, top: 16, width: 35, height: 66}} />
        <div style={{...num, left: 37, top: 9, fontSize: 32, fontWeight: 600, lineHeight: 1.4, letterSpacing: -0.64}}>26’</div>
        <div style={{position: 'absolute', left: -10, top: 131, width: 163, height: 7, background: '#fff'}} />
      </div>
    </div>
  );
};

const NOTICES = [
  ['공지', '2026 유네스코 문화예술교육 주간 행사 안내 (2026 .5. 19. ~ 5. 31)', '2026-05-14'],
  ['공지', '문화예술교육 자원지도 통계 데이터(단체) 및 프로그램 DB 등록 안내', '2026-05-08'],
  ['소식', '시스템 점검 안내(7.15 12:00~13:00)', '2026-07-13'],
  ['소식', '[서비스 영향 안내] 아르떼라이브러리 일부 콘텐츠 표시 오류 예정 (6/29)', '2026-06-22'],
  ['소식', '2026년 한국문화예술교육진흥원 ㄱㄱㄷㅇㅌ 활용 아이디어 공모전 초성 퀴즈 이벤트', '2026-06-15'],
  ['소식', '2026년 한국문화예술교육진흥원 공공데이터 활용 아이디어 공모전 개최 안내', '2026-06-10'],
];

const EventNotice = () => (
  <Sec style={{display: 'flex', gap: 40, paddingBottom: 200}}>
    <div style={{width: 700, flex: 'none', display: 'flex', flexDirection: 'column', gap: 40}}>
      <Head title="이벤트·행사" />
      <div>
        <Poster />
        <div style={{border: '1px solid #000', padding: '24px 24px 24px 40px', display: 'flex', flexDirection: 'column', gap: 10}}>
          <div style={{display: 'flex', gap: 10}}>
            <Tag>진행중</Tag>
            <Tag bg="#007ade">이벤트</Tag>
          </div>
          <div style={{fontSize: 26, fontWeight: 600, lineHeight: 1.2, letterSpacing: -0.52}}>arte라이브러리 7월 퀴즈 이벤트</div>
          <div style={{fontSize: 16, fontWeight: 500, lineHeight: 1.5, letterSpacing: -0.32, color: TERTIARY}}>2026-07-14~2026-07-23</div>
        </div>
      </div>
    </div>
    <div style={{flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 40}}>
      <Head title="공지·소식" />
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24}}>
        {NOTICES.map(([k, t, d]) => (
          <div key={d + t} style={{display: 'flex', alignItems: 'center', gap: 24}}>
            <div style={{flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', gap: 16}}>
              <div style={{width: 55, flex: 'none', boxSizing: 'border-box', padding: '6px 12px', display: 'flex', justifyContent: 'center', background: k === '공지' ? '#000' : '#f3f3f3', color: k === '공지' ? '#fff' : '#555', fontSize: 18, fontWeight: 600, lineHeight: 1.5, letterSpacing: -0.36, whiteSpace: 'nowrap'}}>{k}</div>
              <div style={{flex: 1, minWidth: 0, fontSize: 24, fontWeight: 400, lineHeight: 1.5, letterSpacing: -0.48, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{t}</div>
            </div>
            <div style={{width: 92, flex: 'none', textAlign: 'right', fontSize: 16, fontWeight: 500, lineHeight: 1.5, letterSpacing: -0.32, color: TERTIARY, whiteSpace: 'nowrap'}}>{d}</div>
          </div>
        ))}
      </div>
    </div>
  </Sec>
);

/* ───────── 푸터 ───────── */
const FootLink = ({label, icon, last}) => (
  <div style={{width: 360, height: 80, boxSizing: 'border-box', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderLeft: `1px solid ${LINE}`, borderRight: last ? `1px solid ${LINE}` : 'none', flex: 'none'}}>
    <div style={{fontSize: 18, fontWeight: 500, whiteSpace: 'nowrap'}}>{label}</div>
    <Icon n={icon} w={22} />
  </div>
);

const Footer = () => (
  <div style={{width: 1920, height: 80, boxSizing: 'border-box', padding: '0 160px', display: 'flex', background: '#fff', borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}`}}>
    <FootLink label="관련 사이트 바로가기" icon="ft_plus.svg" />
    <FootLink label="단체회원" icon="ft_users.svg" last />
  </div>
);

export const MainSections = () => (
  <>
    <VideoBook />
    <Region />
    <Recommend />
    <Stats />
    <EventNotice />
    <Footer />
  </>
);

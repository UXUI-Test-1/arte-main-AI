import React from 'react';
import {ACCENT, Icon, Txt, img} from '../lib/ui.jsx';
import {Crumb} from './Crumb.jsx';

const Hl = ({children, size = 36, weight = 600}) => <span style={{color: ACCENT, fontWeight: weight}}>{children}</span>;
const SecHead = ({title, count = '360건'}) => (
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 12, borderBottom: '2px solid #000'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
      <Txt size={32} weight={600} color="#000" ls={-0.64} lh={1.4}>{title}</Txt>
      <Txt size={18} weight={500} color="#888" ls={-0.36} lh={1.6}>{count}</Txt>
    </div>
    <div className="more" style={{display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer'}}>
      <Txt size={16} weight={500} color="#000" ls={-0.32} lh={1.5}>더보기</Txt>
      <div style={{width: 24, height: 24, transform: 'scaleY(-1) rotate(-90deg)'}}><Icon n="ui_more.svg" w={24} /></div>
    </div>
  </div>
);
const NewBadge = () => (
  <div style={{paddingTop: 4, width: 57, flex: 'none'}}>
    <div style={{display: 'flex', alignItems: 'flex-end', gap: 2, height: 16}}>
      <Icon n="new_a.svg" w={4.193} h={11.729} />
      <Icon n="new_b.svg" w={44.422} h={15.988} />
      <Icon n="new_c.svg" w={4.204} h={11.729} />
    </div>
  </div>
);
const Body = ({children, lh = 1.5, ls}) => (
  <div style={{fontSize: 20, fontWeight: 500, lineHeight: lh, color: '#555', letterSpacing: ls, wordBreak: 'keep-all'}}>{children}</div>
);

export const KeywordResults = () => (
  <div style={{width: 1600, display: 'flex', flexDirection: 'column', gap: 40}}>
    <div style={{display: 'flex', alignItems: 'flex-end', gap: 40}}>
      <Txt size={40} weight={600} color="#000" ls={-0.8} lh={1.4}>키워드 검색 결과</Txt>
      <Txt size={26} weight={600} color="#000" ls={-0.52} lh={1.2}>총 1,237건</Txt>
    </div>
    <div style={{display: 'flex'}}>
      {['전체', '아카이브·도서', '영상', '추천', '지역별 정보', '국가학술정보 검색'].map((t, i) => (
        <div
          key={t}
          className={i === 0 ? '' : 'ktab'}
          style={{
            flex: '1 0 0', minWidth: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, cursor: 'pointer',
            padding: '12px 18px', boxSizing: 'border-box', borderTop: '1px solid #000', borderBottom: '1px solid #000', borderRight: '1px solid #000',
            background: i === 0 ? '#000' : undefined,
          }}
        >
          <Txt size={22} weight={500} color={i === 0 ? '#fff' : '#000'} ls={-0.44} lh={1.5}>{t}</Txt>
          {i === 5 && <Icon n="uiext.svg" w={24} />}
        </div>
      ))}
    </div>

    <div style={{display: 'flex', flexDirection: 'column', gap: 120}}>
      {/* 아카이브·도서 */}
      <div style={{display: 'flex', flexDirection: 'column', gap: 40}}>
        <SecHead title="아카이브·도서" />
        <div style={{display: 'flex', gap: 40, alignItems: 'center'}}>
          <div style={{width: 205, height: 320, flex: 'none', position: 'relative'}}>
            <img src={img('kw_archive.png')} alt="" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover'}} />
          </div>
          <div style={{flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 24}}>
            <Crumb items={['HOME', '아카이브·도서', '문화예술교육현장']} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
              <div style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                <div style={{fontSize: 36, fontWeight: 600, lineHeight: 1.4, letterSpacing: -0.72}}>
                  '함께 만드는 수업, 협력수업' 교사와 <Hl>예술강사</Hl>를 위한 협력수업 길라잡이
                </div>
                <NewBadge />
              </div>
              <Txt size={18} weight={500} color="#888" ls={-0.36} lh={1.6}>2019.03.03</Txt>
            </div>
            <Body>
              「함께 만드는 수업, 협력수업: 교사와 <Hl size={20}>예술강사</Hl>를 위한 협력수업 길라잡이」 는 제목 그대로 협력수업의 길로 안내하는 것을 목적으로 제작되었다. 반드시 따라야 할 매뉴얼이 아니라 학교 문화예술교육을 위한 협력수업의 방향을 그려보고, 교사와 예술강사가 그 길에 함께 할 수 있도록 하는 초대장이라고 할 수 있다. 이 안에는 협력수업을 수행했던 교사와 예술강사의…
            </Body>
          </div>
        </div>
      </div>

      {/* 영상 */}
      <div style={{display: 'flex', flexDirection: 'column', gap: 40}}>
        <SecHead title="영상" />
        <div style={{display: 'flex', gap: 40, alignItems: 'center'}}>
          <div style={{width: 424, height: 237, flex: 'none', position: 'relative', overflow: 'hidden', background: '#000'}}>
            <img src={img('kw_video.png')} alt="" style={{position: 'absolute', left: -5.5, top: -4, width: 435, height: 245, objectFit: 'cover'}} />
            <div style={{position: 'absolute', left: 166, top: 72, width: 92, height: 92, borderRadius: 999, background: '#000', overflow: 'hidden'}}>
              <Icon n="kw_play.svg" w={92} />
            </div>
          </div>
          <div style={{flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 24}}>
            <Crumb items={['HOME', '영상']} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
              <div style={{fontSize: 36, fontWeight: 600, lineHeight: 1.4, letterSpacing: -0.72}}>2025 학교<Hl>예술강사</Hl> 지원사업</div>
              <Txt size={18} weight={500} color="#888" ls={-0.36} lh={1.6}>2021.02.16</Txt>
            </div>
            <Body>“학교<Hl size={20}>예술강사</Hl> 지원사업”은 전국 초·중·고등학교에 예술강사가 찾아가 학교 담당교사와 협력하여 수업을 진행하는 사업입니다</Body>
          </div>
        </div>
      </div>

      {/* 추천 */}
      <div style={{display: 'flex', flexDirection: 'column', gap: 40}}>
        <SecHead title="추천" />
        <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
          <Crumb items={['HOME', '추천', '주제별 큐레이션']} />
          <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
            <div style={{fontSize: 36, fontWeight: 600, lineHeight: 1.4, letterSpacing: -0.72}}>노인복지 문화예술교육</div>
            <Txt size={18} weight={500} color="#888" ls={-0.36} lh={1.6}>2021.02.16</Txt>
          </div>
          <Body>
            경험을 통해 삶에서 의미 있는 것들을 발견해갈 수 있도록 돕기 위해 복지시설 이용자 문화예술교육 지원을 하고 있다. 무용, 미술, 연극, 음악, 사진 등 다양한 예술 장르의 <Hl size={20}>예술강사</Hl>를 전국에 있는 노인복지관에 파견하여 노인들이 예술을 통해서 다양한 삶의 이야기를 나누고 일상 속에서 예술을 발견하여 삶이 더욱 풍요로워지도록 노인복지문화예술교육을 진행한다
          </Body>
        </div>
      </div>

      {/* 지역별정보 */}
      <div style={{display: 'flex', flexDirection: 'column', gap: 40}}>
        <SecHead title="지역별정보" />
        <div style={{display: 'flex', gap: 40, alignItems: 'center'}}>
          <div style={{width: 424, height: 237, flex: 'none', position: 'relative', background: '#d9d9d9'}}>
            <div style={{position: 'absolute', left: 40.6, top: 94, display: 'flex', gap: 13.714, alignItems: 'center'}}>
              <Icon n="kw_logo1.svg" w={123.799} h={44.559} />
              <Icon n="kw_logo2.svg" w={202.974} h={43.393} />
            </div>
          </div>
          <div style={{flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 24}}>
            <Crumb items={['HOME', '지역', '단체DB']} />
            <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
              <div style={{fontSize: 36, fontWeight: 600, lineHeight: 1.4, letterSpacing: -0.72}}>(문화집단)너느로</div>
              <Txt size={18} weight={500} color="#888" ls={-0.36} lh={1.6}>2021.02.16</Txt>
            </div>
            <Body lh={1.6} ls={-0.4}>
              (문화집단)너느로는 연출가, 작가, 기획자, 배우, 연희자, 인형전문가, 미디어 아티스트 등으로 구성된 예술단체이다. 굿, 꼭두각시놀음 등 한국의 전통연희를 새롭게 구성하여 대중에게 새롭고 흥미롭게 다가갈 수 있는 공연콘텐츠를 창작하고 있다. 또한 서울시 은평구 구파발을 중심으로 어린이부터 노인에 이르기까지 생애주기별
            </Body>
          </div>
        </div>
      </div>
    </div>
  </div>
);

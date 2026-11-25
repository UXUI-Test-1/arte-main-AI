# arte 라이브러리 AI 검색 (프로토타입)

메인 → 검색 → 검색 중 → 검색 결과까지 직접 써볼 수 있는 HTML 프로토타입입니다.

- 보기: `dist/index.html` 더블클릭 (dist 폴더째 옮겨야 이미지·폰트가 보입니다)
- 수정 후 다시 만들기: `npm install` (최초 1회) → `npm run build`

```
index.html        페이지 틀 (폰트·공통 스타일)
build.mjs         빌드 스크립트 (src → dist)
src/
  main.jsx        진입점
  App.jsx         페이지 전체 흐름 (메인 → 검색 중 → 결과, 스크롤 시 고정 GNB)
  components/     Header · SearchBox · AnswerCard · KeywordResults · ArchiveSection · StickyGnb …
  lib/            ui(공통 UI·경로) · gradient(색 회전) · menu(전체펼침 메뉴 데이터)
assets/           img/ (이미지·아이콘) · fonts/ (Pretendard GOV)
dist/             빌드 결과 = 실제로 여는 HTML
```

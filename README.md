main 브랜치는 nextAuth 사용해보려다가 실패했습니다. homework 브랜치 걸로 봐주세요..
## 프로젝트 소개
- 할 일 목록을 서버사이드 렌더링과 클라이언트 사이트 렌더링(이하 SSG, ISR, SSR, CSR)로 구현한 프로젝트입니다.
  
## Getting Started
- 터미널에서 다음과 같은 명령어로 프로젝트에 접근가능 합니다.
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 페이지 구성

1. app > src > about > page.tsx : **About 페이지**
  - company 설명에 대한 페이지 입니다.
    
2. app > src > report > page.tsx : **Report 페이지**
   - 할 일의 수행여부에 따른 통계목록 페이지 입니다.
   - 
3. app > src > todos-csr > page.tsx : **TodosCSR 페이지**
   - 할 일을 작성, 수정, 삭제할 수 있는 CRUD 페이지 입니다.
   - 
4. app > src > todos-ssr > page.tsx : **TodosSSR 페이지**
   - 할 일의 CRUD 기능을 제외한 목록을 제시하는 페이지 입니다.

## 자료구조 및 컴포넌트 분리
**components 폴더**
- Todolist.tsx: 할 일 목록의 CRUD 컴포넌트
- WorkingNDone.tsx: isDone 속성에 따라 할 일 목록을 나눠주는 컴포넌트

**fns 폴더**
- fetchFns.ts: 백엔드 서버로 company 정보와 Todos의 CRUD 요청을 담당하는 함수들을 모아둔 파일

**hooks 폴더**
- customHooks.ts: 커스텀훅 
- customQueryHooks.ts: 각 tanstack-query 로직을 커스텀 훅으로 만들어 모아둔 파일

## 구현 
- 일반적인 Server-Side-Rendering 외에도,
  tanstack-Query로 Server-Side-Rendering을 구현하고 싶었습니다.
  공식문서를 참고하여 QueryClient Provider과 dehydration 개념을 사용하여 tanstack-query를 기반으로 SSR을 구현하였습니다.

- 관련내용 블로그에 정리해두었습니다.
  https://incodevelop.tistory.com/40

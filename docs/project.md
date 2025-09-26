## 메인 주문 내역
- AI 강의 멤버쉽 사이트
- supabase mcp 사용 로그인 사용자 관리 ( table 관리 및 로그인 서비스) 
- toss payment mcp 사용 결제 기능 추가 
  - 하기 프론트 페이지 구상에 없다하더라도 적당한 곳에 추가 요청함
  
## 환경 변수
- toss payments 
  - client : test_ck_xxxxxxxxxxxxxxxxx
  - secret : test_sk_xxxxxxxxxxxxxxxxx


## 개발 스텍
- nextjs 
- supabase
  

## 프론트 페이지 구성

### 개발 요청: AI 강의 멤버십 판매를 위한 홈페이지 제작

#### **1. 네비게이션 바 (Nav Bar)**

최상단에 고정되어 사용자가 사이트의 어느 위치에 있든 쉽게 원하는 메뉴로 이동할 수 있도록 구성합니다.

* **로고:** 좌측 상단에 브랜드 아이덴티티를 나타내는 로고를 배치합니다.
* **메뉴 구성:**
    * **강의 소개:** AI 기초, 업무 자동화, 데이터 분석, AI 에이전트 등 카테고리별 강의 목록을 볼 수 있는 페이지로 연결합니다.
    * **멤버십 플랜:** 구독 기반의 멤버십 종류와 각 플랜별 혜택(수강 가능 강의, 커뮤니티 접근 권한 등)을 비교하여 보여주는 페이지로 연결합니다.
    * **커뮤니티:** 수강생들 간의 네트워킹 및 Q&A를 위한 공간(예: Discord, Slack 또는 자체 게시판)으로 연결합니다.
    * **자주 묻는 질문 (FAQ):** 결제, 환불, 수강 방법 등 사용자들이 궁금해할 만한 내용들을 모아놓은 페이지로 연결합니다.
* **로그인 / 마이페이지:**
    * 로그인 전: '로그인/회원가입' 버튼을 표시합니다.
    * 로그인 후: '마이페이지' 버튼으로 변경되며, 클릭 시 대시보드(수강 중인 강의, 결제 내역 등)로 이동합니다.
* **핵심 행동 유도(CTA) 버튼:** '무료로 시작하기' 또는 '구독 플랜 보기'와 같이 사용자의 행동을 유도하는 버튼을 가장 오른쪽에 눈에 띄게 배치합니다.
* **반응형 적용:** 모바일 화면에서는 햄버거 메뉴(☰) 아이콘으로 전체 메뉴를 깔끔하게 통합합니다.

#### **2. 메인 섹션 (Main Section)**

사용자의 시선을 사로잡고 멤버십 가입까지 자연스럽게 유도할 수 있도록 여러 하위 섹션으로 나누어 구성합니다.

* **히어로 섹션 (Hero Section):**
    * **핵심 메시지:** "AI로 당신의 업무와 커리어를 혁신하세요"와 같이 사이트의 가치를 한눈에 보여주는 강력한 헤드라인을 배치합니다.
    * **서브 메시지:** 제공하는 강의의 특징과 장점을 간결하게 설명합니다. (예: "실리콘밸리 전문가들이 만든 실전 AI 프로젝트 중심의 커리큘럼")
    * **시각 자료:** AI 기술을 상징하는 감각적인 영상이나 이미지를 배경으로 사용하여 전문성을 강조합니다.
    * **CTA 버튼:** 사용자가 가장 먼저 취하길 바라는 행동('멤버십 플랜 보기', '무료 강의 체험하기') 버튼을 중앙에 배치합니다.

* **핵심 강의 목록 (Course Showcase):**
    * **갤러리 형태:** 각 강의를 직관적인 카드 형태로 디자인하여 나열합니다.
    * **카드 구성 요소:**
        * 강의 썸네일 이미지 또는 짧은 미리보기 영상
        * 강의 제목 및 간단한 한 줄 소개
        * 난이도, 카테고리 등을 나타내는 태그 (예: #입문, #업무자동화)
        * 강사 이름
    * **필터 및 정렬:** 사용자가 원하는 강의를 쉽게 찾을 수 있도록 카테고리별, 난이도별 필터 기능을 제공합니다.

* **멤버십 플랜 소개 (Pricing Section):**
    * **비교 테이블:** 'Basic', 'Pro', 'Enterprise' 등 2~3개의 플랜을 테이블 형태로 나란히 비교하여 보여줍니다.
    * **플랜별 혜택:** 각 플랜에서 제공하는 기능(예: 전체 강의 무제한 수강, 소스코드 제공, 1:1 멘토링)을 체크리스트(✔) 형태로 명확하게 표시합니다.
    * **가격 정보:** 월간/연간 구독료를 명시하고, 연간 구독 시 할인 혜택을 강조하여 가입을 유도합니다.
    * **플랜 선택 버튼:** 각 플랜 하단에 '구독하기' 또는 '플랜 선택' 버튼을 배치합니다.

* **사회적 증거 (Social Proof):**
    * **수강생 후기:** 실제 수강생들의 만족도 높은 후기(텍스트, 사진 또는 짧은 영상)를 인용하여 신뢰도를 높입니다.
    * **파트너사 로고:** B2B 교육을 진행한 기업이나 수강생이 재직 중인 유명 기업의 로고를 보여주어 강의의 공신력을 더합니다.

* **강사진 소개 (Instructor Section):**
    * **프로필:** 강사진의 전문적인 프로필 사진과 함께 이름, 직책, 그리고 핵심 경력(예: "전) Google AI 엔지니어")을 간략하게 소개하여 전문성을 어필합니다.

#### **3. 푸터 (Footer)**

사이트의 가장 하단에 위치하며, 공통적으로 필요한 정보와 링크를 제공합니다.

* **사업자 정보:**
    * 상호명, 대표자 성명, 사업자등록번호, 통신판매업신고번호
    * 주소, 고객센터 연락처, 이메일 주소
* **약관 및 정책:**
    * 이용약관, **개인정보처리방침**, 환불 규정 등 법적 필수 링크를 포함합니다.
* **사이트맵:**
    * 회사 소개, 공지사항, 채용 등 주요 페이지로 바로 갈 수 있는 링크를 제공합니다.
* **소셜 미디어:**
    * 운영 중인 유튜브, 블로그, 링크드인 등 소셜 채널 아이콘을 배치하여 커뮤니티 확장을 유도합니다.

---

* **전체 공통 사항:**
    * **반응형 웹 디자인:** 모든 구성 요소는 데스크탑, 태블릿, 모바일 등 어떤 기기에서 접속하더라도 화면 크기에 맞게 최적화되어 표시되어야 합니다.
    * **사용자 친화적 인터페이스 (UI/UX):** 사용자가 원하는 정보를 쉽게 찾고, 회원가입부터 결제까지의 과정에서 불편함이 없도록 직관적이고 일관된 디자인을 적용합니다.

---

## 개발 진행 상황 및 디버깅 기록

### 완료된 기능들

#### 1. 기본 프로젝트 구조
- ✅ Next.js 15.5.4 프로젝트 생성
- ✅ Tailwind CSS 설정
- ✅ TypeScript 설정
- ✅ 기본 컴포넌트 구조 생성

#### 2. 인증 시스템 (Supabase)
- ✅ Supabase 클라이언트 설정 (`/src/lib/supabase.ts`)
- ✅ 환경변수 설정 (`.env.local`)
- ✅ 회원가입/로그인 페이지 구현
- ✅ Google OAuth 연동
- ✅ 사용자 프로필 관리 시스템

#### 3. 결제 시스템 (Toss Payments)
- ✅ Toss Payments SDK 연동 (`/src/lib/toss-payments.ts`)
- ✅ 결제 페이지 구현 (`/src/app/payment/`)
- ✅ 결제 성공/실패 페이지
- ✅ 멤버십 플랜별 가격 설정

#### 4. 데이터베이스 스키마
- ✅ `users` 테이블: 사용자 프로필 및 구독 정보
- ✅ `courses` 테이블: 강의 목록 및 메타데이터
- ✅ RLS (Row Level Security) 정책 설정
- ✅ 자동 사용자 프로필 생성 트리거

#### 5. 페이지 구현
- ✅ 홈페이지 (`/src/app/page.tsx`)
- ✅ 대시보드 (`/src/app/dashboard/page.tsx`)
- ✅ 멤버십 플랜 페이지 (`/src/app/pricing/page.tsx`)
- ✅ 강의 목록 페이지 (`/src/app/courses/page.tsx`)
- ✅ 커뮤니티 페이지 (`/src/app/community/page.tsx`)
- ✅ FAQ 페이지 (`/src/app/faq/page.tsx`)

#### 6. 공통 컴포넌트
- ✅ 네비게이션 바 (`/src/components/Navbar.tsx`)
- ✅ 푸터 (`/src/components/Footer.tsx`)
- ✅ 클라이언트 전용 컴포넌트 래퍼 (`/src/components/ClientOnly.tsx`)

### 해결된 주요 이슈들

#### 1. React Hydration 오류
**문제**: 서버와 클라이언트 간 렌더링 불일치로 인한 hydration 오류
**해결방법**:
- `Footer.tsx`에서 동적 날짜 대신 고정 연도 사용
- `window` 객체 사용 시 `typeof window !== 'undefined'` 체크 추가
- `ClientOnly` 컴포넌트로 클라이언트 전용 렌더링 처리
- `next.config.js`에서 `serverExternalPackages` 설정

#### 2. Supabase 환경변수 설정 오류
**문제**: "Invalid API key" 오류 및 환경변수 로딩 실패
**해결방법**:
- `.env.local` 파일의 환경변수 이름 수정: `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- 환경변수 키 형식 수정: `sb_publishable_` 접두사 제거하고 올바른 JWT 형식 사용
- `src/lib/config.ts`에 디버깅 로그 추가
- `src/lib/supabase.ts`에 에러 핸들링 및 더미 클라이언트 fallback 추가

#### 3. 로그인 상태 반영 문제
**문제**: 로그인 후 네비게이션 바에 사용자 상태가 반영되지 않음
**해결방법**:
- `Navbar.tsx`에서 세션 감지 로직 개선
- 사용자 프로필이 없을 경우 자동 생성 로직 추가
- `auth.onAuthStateChange` 이벤트 리스너 개선
- 대시보드에서도 동일한 사용자 프로필 생성 로직 적용

#### 4. 중복 계정 처리 개선
**문제**: 이미 가입된 이메일로 회원가입 시도 시 적절한 안내 없음
**해결방법**:
- 회원가입 페이지에서 중복 이메일 에러 감지 및 사용자 친화적 메시지 표시
- 3초 후 자동으로 로그인 페이지로 리다이렉트
- "지금 로그인하기" 링크 제공
- 로그인 페이지에서도 에러 메시지 개선

#### 5. Next.js 설정 경고 해결
**문제**: `next.config.js`에서 deprecated 옵션 사용으로 인한 경고
**해결방법**:
- `experimental.serverComponentsExternalPackages` → `serverExternalPackages`로 변경
- `swcMinify` 옵션 제거 (Next.js 15에서 기본값)

### 기술 스택 세부사항

#### 프론트엔드
- **Next.js 15.5.4**: React 프레임워크
- **TypeScript**: 타입 안전성
- **Tailwind CSS**: 유틸리티 기반 CSS 프레임워크
- **Framer Motion**: 애니메이션 라이브러리
- **Lucide React**: 아이콘 라이브러리

#### 백엔드 & 데이터베이스
- **Supabase**: 
  - PostgreSQL 데이터베이스
  - 실시간 구독
  - 인증 시스템 (이메일/비밀번호, Google OAuth)
  - Row Level Security (RLS)

#### 결제 시스템
- **Toss Payments**: 
  - 카드 결제
  - 테스트 환경 설정
  - 결제 성공/실패 처리

### 환경변수 설정
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxx
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx (실제 JWT 토큰)

# Toss Payments
NEXT_PUBLIC_TOSS_CLIENT_KEY=test_cxxx
TOSS_SECRET_KEY=test_skxxx

### 데이터베이스 스키마

#### users 테이블
```sql
CREATE TABLE public.users (
  id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL PRIMARY KEY,
  email text UNIQUE,
  name text,
  subscription_plan text,
  subscription_status text,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  updated_at timestamp with time zone DEFAULT now() NOT NULL
);
```

#### courses 테이블
```sql
CREATE TABLE public.courses (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text,
  category text NOT NULL,
  difficulty text NOT NULL CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
  instructor text NOT NULL,
  thumbnail_url text,
  duration integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  updated_at timestamp with time zone DEFAULT now() NOT NULL
);
```

### 멤버십 플랜 구조
- **Basic 플랜**: 월 29,000원 / 연 290,000원
- **Pro 플랜**: 월 59,000원 / 연 590,000원 (가장 인기)
- **Enterprise 플랜**: 월 99,000원 / 연 990,000원

### 결제 플로우
1. `/pricing` → 플랜 선택
2. `/payment` → 결제 정보 확인
3. Toss Payments → 실제 결제 진행
4. `/payment/success` 또는 `/payment/fail` → 결과 페이지

### 개발 명령어
```bash
# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm start
```

### 디버깅 도구
- 브라우저 콘솔에서 상세한 로그 확인 가능
- Supabase 대시보드에서 실시간 데이터 모니터링
- 결제 과정 전체에 대한 로깅 시스템 구축

### 향후 개선 사항
- [ ] 결제 완료 후 실제 구독 상태 업데이트 로직
- [ ] 이메일 알림 시스템
- [ ] 강의 진도 추적 시스템
- [ ] 관리자 대시보드
- [ ] 모바일 앱 개발
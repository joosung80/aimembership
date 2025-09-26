# AI Academy - 온라인 AI 강의 멤버십 사이트

실리콘밸리 전문가들이 만든 실전 AI 프로젝트 중심의 온라인 교육 플랫폼입니다.

## 🚀 주요 기능

### 📚 교육 시스템
- **다양한 AI 강의**: 업무자동화, 데이터분석, AI개발, 창작도구 등
- **난이도별 학습 경로**: 입문부터 고급까지 체계적인 커리큘럼
- **실전 프로젝트**: 실무에 바로 적용할 수 있는 프로젝트 중심 학습

### 💳 멤버십 시스템
- **3가지 플랜**: Basic, Pro, Enterprise
- **유연한 결제**: 월간/연간 구독 (연간 결제 시 2개월 무료)
- **안전한 결제**: Toss Payments 연동

### 👥 커뮤니티
- **학습자 네트워킹**: Discord 채널, 스터디 그룹
- **프로젝트 쇼케이스**: 완성한 프로젝트 공유 및 피드백
- **전문가 멘토링**: 1:1 멘토링 및 라이브 세션

## 🛠 기술 스택

### Frontend
- **Next.js 15.5.4** - React 프레임워크
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 유틸리티 기반 CSS
- **Framer Motion** - 애니메이션
- **Lucide React** - 아이콘

### Backend & Database
- **Supabase** - PostgreSQL, 인증, 실시간 구독
- **Row Level Security (RLS)** - 데이터 보안

### Payment
- **Toss Payments** - 안전한 결제 시스템

## 🏗 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── auth/              # 인증 페이지 (로그인/회원가입)
│   ├── dashboard/         # 사용자 대시보드
│   ├── pricing/           # 멤버십 플랜
│   ├── courses/           # 강의 목록
│   ├── community/         # 커뮤니티
│   ├── payment/           # 결제 시스템
│   └── faq/              # 자주 묻는 질문
├── components/            # 재사용 가능한 컴포넌트
│   ├── Navbar.tsx        # 네비게이션 바
│   ├── Footer.tsx        # 푸터
│   └── ...
└── lib/                  # 유틸리티 및 설정
    ├── supabase.ts       # Supabase 클라이언트
    ├── toss-payments.ts  # 결제 서비스
    └── config.ts         # 앱 설정
```

## 🚀 시작하기

### 1. 저장소 클론
```bash
git clone https://github.com/joosung80/aimembership.git
cd aimembership
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경변수 설정
`.env.local` 파일을 생성하고 다음 변수들을 설정하세요:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Toss Payments
NEXT_PUBLIC_TOSS_CLIENT_KEY=your_toss_client_key
TOSS_SECRET_KEY=your_toss_secret_key
```

### 4. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📊 데이터베이스 스키마

### Users 테이블
사용자 프로필 및 구독 정보를 저장합니다.

### Courses 테이블
강의 정보, 카테고리, 난이도, 강사 정보를 저장합니다.

자세한 스키마는 `docs/project.md`를 참조하세요.

## 🔐 보안

- **Row Level Security (RLS)**: Supabase에서 데이터 접근 제어
- **환경변수 관리**: 민감한 정보는 `.env.local`에서 관리
- **인증 시스템**: 이메일/비밀번호, Google OAuth 지원

## 📱 반응형 디자인

모든 페이지는 데스크톱, 태블릿, 모바일에서 최적화되어 동작합니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

- **이메일**: support@aiacademy.co.kr
- **GitHub**: [https://github.com/joosung80/aimembership](https://github.com/joosung80/aimembership)

---

⭐ 이 프로젝트가 도움이 되었다면 별표를 눌러주세요!
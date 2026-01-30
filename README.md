# Bados - Next.js Landing Page

Next.js + Vercel + Supabase로 구성된 랜딩 페이지 프로젝트입니다.

## 기술 스택

- **Next.js 14** - React 프레임워크
- **TypeScript** - 타입 안정성
- **Supabase** - 백엔드 및 데이터베이스
- **Bootstrap 5** - UI 컴포넌트
- **React Icons** - 아이콘
- **Vercel** - 배포 플랫폼

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`env.example` 파일을 참고하여 `.env.local` 파일을 생성하고 Supabase 정보를 입력하세요:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 배포

### Vercel 배포 방법

#### 방법 1: GitHub 연동 (권장)

1. **GitHub에 프로젝트 푸시**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/bados.git
   git push -u origin main
   ```

2. **Vercel에 로그인**
   - [Vercel](https://vercel.com)에 접속하여 GitHub 계정으로 로그인

3. **프로젝트 Import**
   - Vercel 대시보드에서 "Add New..." → "Project" 클릭
   - GitHub 저장소 선택
   - "Import" 클릭

4. **프로젝트 설정**
   - Framework Preset: Next.js (자동 감지됨)
   - Root Directory: `./` (기본값)
   - Build Command: `npm run build` (자동 설정됨)
   - Output Directory: `.next` (자동 설정됨)
   - Install Command: `npm install` (자동 설정됨)

5. **환경 변수 설정**
   - "Environment Variables" 섹션에서 다음 변수 추가:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

6. **배포**
   - "Deploy" 버튼 클릭
   - 배포 완료 후 자동으로 URL이 생성됩니다

#### 방법 2: Vercel CLI 사용

1. **Vercel CLI 설치**
   ```bash
   npm i -g vercel
   ```

2. **Vercel 로그인**
   ```bash
   vercel login
   ```

3. **프로젝트 배포**
   ```bash
   vercel
   ```
   - 배포 설정 질문에 답변:
     - Set up and deploy? **Y**
     - Which scope? (개인 계정 선택)
     - Link to existing project? **N**
     - Project name? **bados** (또는 원하는 이름)
     - Directory? **./**
     - Override settings? **N**

4. **프로덕션 배포**
   ```bash
   vercel --prod
   ```

5. **환경 변수 설정 (CLI)**
   ```bash
   vercel env add NEXT_PUBLIC_SUPABASE_URL
   vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
   ```

### 배포 후 확인 사항

- ✅ 배포된 URL에서 사이트가 정상적으로 표시되는지 확인
- ✅ Supabase 연결이 정상적으로 작동하는지 확인
- ✅ 환경 변수가 올바르게 설정되었는지 확인

### 자동 배포

GitHub와 연동한 경우, `main` 브랜치에 푸시할 때마다 자동으로 배포됩니다.

## 프로젝트 구조

```
bados/
├── app/
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 메인 랜딩 페이지
│   └── globals.css     # 전역 스타일
├── lib/
│   └── supabase.ts     # Supabase 클라이언트 설정
├── package.json
├── tsconfig.json
└── next.config.js
```

## Supabase 설정

1. [Supabase](https://supabase.com)에서 새 프로젝트를 생성합니다
2. 프로젝트 설정에서 URL과 Anon Key를 복사합니다
3. `.env.local` 파일에 환경 변수로 설정합니다

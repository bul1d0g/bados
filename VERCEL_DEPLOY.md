# Vercel 배포 가이드

## 빠른 시작

### 1단계: GitHub에 프로젝트 업로드

```bash
# Git 초기화 (아직 안 했다면)
git init

# 파일 추가
git add .

# 커밋
git commit -m "Initial commit"

# GitHub에 새 저장소 생성 후
git remote add origin https://github.com/your-username/bados.git
git branch -M main
git push -u origin main
```

### 2단계: Vercel에 배포

1. **Vercel 웹사이트 접속**
   - https://vercel.com 접속
   - "Sign Up" 또는 "Log In" 클릭
   - GitHub 계정으로 로그인 (권장)

2. **프로젝트 Import**
   - 대시보드에서 "Add New..." → "Project" 클릭
   - "Import Git Repository" 선택
   - GitHub 저장소 선택
   - "Import" 클릭

3. **프로젝트 설정 확인**
   - Framework Preset: **Next.js** (자동 감지)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **환경 변수 추가**
   - "Environment Variables" 섹션 클릭
   - 다음 변수들을 추가:
   
   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_SUPABASE_URL` | Supabase 프로젝트 URL |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Anon Key |

   ⚠️ **중요**: 각 환경(Production, Preview, Development)에 모두 추가해야 합니다.

5. **배포 실행**
   - "Deploy" 버튼 클릭
   - 빌드 로그 확인
   - 배포 완료 후 URL 확인

### 3단계: 배포 확인

배포가 완료되면 다음과 같은 URL이 생성됩니다:
- Production: `https://your-project.vercel.app`
- Preview: `https://your-project-git-branch.vercel.app`

## Vercel CLI 사용하기

터미널에서 직접 배포하려면:

```bash
# Vercel CLI 설치
npm i -g vercel

# 로그인
vercel login

# 배포 (프리뷰)
vercel

# 프로덕션 배포
vercel --prod
```

## 환경 변수 관리

### 웹 대시보드에서
1. 프로젝트 선택
2. Settings → Environment Variables
3. 변수 추가/수정/삭제

### CLI에서
```bash
# 환경 변수 추가
vercel env add NEXT_PUBLIC_SUPABASE_URL

# 환경 변수 목록 확인
vercel env ls

# 환경 변수 삭제
vercel env rm NEXT_PUBLIC_SUPABASE_URL
```

## 자동 배포 설정

GitHub와 연동하면:
- `main` 브랜치에 푸시 → Production 배포
- 다른 브랜치에 푸시 → Preview 배포
- Pull Request 생성 → Preview 배포

## 커스텀 도메인 연결

1. Vercel 대시보드 → 프로젝트 선택
2. Settings → Domains
3. 도메인 추가
4. DNS 설정 안내에 따라 도메인 제공자에서 설정

## 트러블슈팅

### 빌드 실패 시
- 빌드 로그 확인
- 로컬에서 `npm run build` 테스트
- 환경 변수 확인

### 환경 변수 미적용 시
- Vercel 대시보드에서 환경 변수 확인
- 재배포 실행
- 브라우저 캐시 클리어

### Supabase 연결 오류 시
- Supabase 프로젝트의 Site URL 설정 확인
- Redirect URLs에 Vercel 도메인 추가
- 환경 변수 값 확인

## 유용한 링크

- [Vercel 공식 문서](https://vercel.com/docs)
- [Next.js 배포 가이드](https://nextjs.org/docs/deployment)
- [Supabase 설정 가이드](https://supabase.com/docs/guides/getting-started)

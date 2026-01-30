# GitHub Pages 자동 배포 설정 가이드

## 설정 완료 사항

✅ `next.config.js` - 정적 HTML 내보내기 설정 완료
✅ `.github/workflows/deploy.yml` - 자동 빌드 워크플로우 생성 완료

## GitHub 저장소 설정

### 1. GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동: https://github.com/bul1d0g/bados
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source** 섹션에서:
   - **Source**: "GitHub Actions" 선택
5. 저장 (자동으로 저장됨)

### 2. 워크플로우 권한 확인

1. **Settings** → **Actions** → **General**
2. **Workflow permissions** 섹션에서:
   - ✅ "Read and write permissions" 선택
   - ✅ "Allow GitHub Actions to create and approve pull requests" 체크
3. **Save** 클릭

## 자동 배포 작동 방식

### 트리거 조건
- `main` 브랜치에 푸시할 때마다 자동 빌드 및 배포
- GitHub Actions 탭에서 수동 실행 가능

### 배포 프로세스
1. 코드 푸시 → GitHub Actions 자동 실행
2. Node.js 환경 설정
3. 의존성 설치 (`npm ci`)
4. Next.js 빌드 (`npm run build`)
5. 정적 파일 생성 (`out` 폴더)
6. GitHub Pages에 자동 배포

### 배포 확인
- Actions 탭에서 빌드 상태 확인: https://github.com/bul1d0g/bados/actions
- 배포 완료 후 사이트 접속: `https://bul1d0g.github.io/bados`

## 로컬에서 테스트

```bash
# 프로덕션 빌드 테스트
npm run build

# 빌드 결과 확인
# out 폴더에 정적 파일이 생성됩니다
```

## 주의사항

⚠️ **환경 변수**
- GitHub Pages는 서버 사이드 환경 변수를 지원하지 않습니다
- `NEXT_PUBLIC_` 접두사가 있는 변수만 클라이언트에서 사용 가능
- 민감한 정보는 GitHub Secrets에 저장하고 빌드 시 주입해야 합니다

⚠️ **경로 설정**
- 현재 설정: `/bados` 경로 사용
- 커스텀 도메인 사용 시 `basePath` 제거 필요

## 문제 해결

### 빌드 실패 시
1. Actions 탭에서 빌드 로그 확인
2. 로컬에서 `npm run build` 테스트
3. 에러 메시지 확인 및 수정

### 페이지가 표시되지 않을 때
1. GitHub Pages 설정 확인 (Source: GitHub Actions)
2. 빌드가 성공적으로 완료되었는지 확인
3. 브라우저 캐시 클리어
4. 몇 분 대기 후 다시 시도

## 다음 단계

변경사항을 커밋하고 푸시하면 자동으로 배포됩니다:

```bash
git add .
git commit -m "Add GitHub Pages deployment workflow"
git push
```

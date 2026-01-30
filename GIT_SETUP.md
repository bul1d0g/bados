# Git 설치 및 GitHub 업로드 가이드

## 1. Git 설치

### Windows에서 Git 설치하기

1. **Git 공식 사이트에서 다운로드**
   - https://git-scm.com/download/win 접속
   - 자동으로 다운로드가 시작됩니다
   - 또는 직접 다운로드: https://github.com/git-for-windows/git/releases

2. **설치 프로그램 실행**
   - 다운로드한 `.exe` 파일 실행
   - 기본 설정으로 설치 진행 (Next 클릭)
   - 설치 완료 후 PowerShell 또는 명령 프롬프트 재시작

3. **설치 확인**
   ```powershell
   git --version
   ```

### 또는 GitHub Desktop 사용 (GUI 방식)

1. **GitHub Desktop 다운로드**
   - https://desktop.github.com 접속
   - 다운로드 및 설치

2. **GitHub Desktop으로 업로드**
   - GitHub Desktop 실행
   - File → Add Local Repository
   - 프로젝트 폴더 선택
   - Publish repository 클릭

## 2. GitHub 저장소 생성

1. **GitHub 로그인**
   - https://github.com 접속 및 로그인

2. **새 저장소 생성**
   - 우측 상단 "+" 아이콘 → "New repository" 클릭
   - Repository name: `bados` (또는 원하는 이름)
   - Description: "Bados Gym Landing Page"
   - Public 또는 Private 선택
   - **"Initialize this repository with a README" 체크 해제** (이미 파일이 있으므로)
   - "Create repository" 클릭

3. **저장소 URL 복사**
   - 생성된 저장소 페이지에서 HTTPS URL 복사
   - 예: `https://github.com/your-username/bados.git`

## 3. 프로젝트 업로드 (터미널 사용 시)

PowerShell 또는 명령 프롬프트에서 프로젝트 폴더로 이동 후:

```powershell
# Git 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: Bados Gym landing page"

# 브랜치 이름을 main으로 설정
git branch -M main

# 원격 저장소 추가 (your-username을 실제 GitHub 사용자명으로 변경)
git remote add origin https://github.com/your-username/bados.git

# GitHub에 푸시
git push -u origin main
```

## 4. GitHub Desktop 사용 시

1. GitHub Desktop 실행
2. File → Add Local Repository
3. 프로젝트 폴더 선택 (`C:\Dev\bados`)
4. "Publish repository" 클릭
5. Repository name 입력 및 Public/Private 선택
6. "Publish repository" 클릭

## 문제 해결

### Git 인증 오류 시
- GitHub Personal Access Token 사용 필요
- Settings → Developer settings → Personal access tokens → Generate new token
- `repo` 권한 선택
- 토큰을 비밀번호 대신 사용

### GitHub Desktop 사용 권장
- GUI 방식이 더 간단하고 직관적입니다
- 인증도 자동으로 처리됩니다

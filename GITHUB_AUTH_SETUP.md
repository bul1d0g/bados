# GitHub 인증 설정 가이드

## 현재 상태 확인

✅ Git 설정 완료
✅ 원격 저장소 연결 완료
✅ 기본 인증 작동 중

## GitHub 인증 방법

GitHub는 2021년부터 패스워드 인증을 차단했으므로, 다음 방법 중 하나를 사용해야 합니다:

### 방법 1: Personal Access Token (HTTPS) - 권장

#### 1. GitHub에서 토큰 생성

1. GitHub 로그인 후 https://github.com/settings/tokens 접속
2. **Generate new token** → **Generate new token (classic)** 클릭
3. 설정:
   - **Note**: "Bados Project" (설명)
   - **Expiration**: 원하는 기간 선택 (90 days, 1 year 등)
   - **Scopes**: 다음 권한 체크:
     - ✅ `repo` (전체 저장소 접근)
     - ✅ `workflow` (GitHub Actions 워크플로우)
4. **Generate token** 클릭
5. **토큰 복사** (한 번만 표시되므로 반드시 복사!)

#### 2. Windows Credential Manager에 저장

다음 명령어를 실행하면 자동으로 저장됩니다:

```powershell
# 다음 푸시 시 토큰 입력 요청됨
git push

# Username: bul1d0g
# Password: [복사한 Personal Access Token 붙여넣기]
```

또는 명령어로 직접 설정:

```powershell
git config --global credential.helper manager-core
```

### 방법 2: SSH 키 사용

#### 1. SSH 키 생성

```powershell
# SSH 키 생성 (이미 있으면 생략 가능)
ssh-keygen -t ed25519 -C "gihong0703@gmail.com"

# Enter 키 3번 누르기 (기본 경로 사용, 패스워드 없음)
```

#### 2. 공개 키 복사

```powershell
# 공개 키 내용 복사
cat ~/.ssh/id_ed25519.pub
# 또는
type C:\Users\user\.ssh\id_ed25519.pub
```

#### 3. GitHub에 SSH 키 추가

1. https://github.com/settings/keys 접속
2. **New SSH key** 클릭
3. **Title**: "Bados Development"
4. **Key**: 복사한 공개 키 붙여넣기
5. **Add SSH key** 클릭

#### 4. 원격 저장소 URL 변경

```powershell
# HTTPS에서 SSH로 변경
git remote set-url origin git@github.com:bul1d0g/bados.git

# 확인
git remote -v
```

### 방법 3: GitHub CLI 사용

```powershell
# GitHub CLI 설치
winget install --id GitHub.cli

# 로그인
gh auth login

# 브라우저에서 인증 완료
```

## 인증 테스트

```powershell
# 원격 저장소 접근 테스트
git ls-remote origin

# 푸시 테스트
git push
```

## 문제 해결

### 인증 실패 시

1. **Credential Manager 확인**
   - Windows 검색: "Credential Manager"
   - Windows Credentials → `git:https://github.com` 확인
   - 잘못된 자격 증명이 있으면 삭제 후 재시도

2. **토큰 재생성**
   - 기존 토큰이 만료되었을 수 있음
   - 새 토큰 생성 후 재인증

3. **SSH 연결 테스트**
   ```powershell
   ssh -T git@github.com
   ```

## IDE에서 Git 연동

### Cursor/VSCode에서

1. **Source Control** 패널 열기 (Ctrl+Shift+G)
2. 변경사항 확인
3. 커밋 및 푸시 가능

### Git 설정 확인

```powershell
# 사용자 정보 확인
git config user.name
git config user.email

# 전역 설정
git config --global user.name "bul1d0g"
git config --global user.email "gihong0703@gmail.com"
```

## 자동 인증 설정

Windows Credential Manager를 사용하면 한 번 인증 후 자동으로 저장됩니다:

```powershell
git config --global credential.helper manager-core
```

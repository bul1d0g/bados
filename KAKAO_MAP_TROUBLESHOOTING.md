# 카카오 맵 문제 해결 가이드

## localhost 등록 문제

카카오 개발자 콘솔에서는 `http://localhost:3000`을 플랫폼으로 등록할 수 없습니다.

### 해결 방법

#### 방법 1: 플랫폼 등록 없이 개발 (권장)

카카오 맵 API는 개발 환경에서 플랫폼 등록 없이도 작동할 수 있습니다. 다음을 확인하세요:

1. **API 키 확인**
   - 카카오 개발자 콘솔 → 내 애플리케이션 → 앱 키
   - **JavaScript 키** 또는 **REST API 키** 복사
   - `.env.local` 파일에 올바르게 설정되어 있는지 확인

2. **환경 변수 형식 확인**
   ```bash
   NEXT_PUBLIC_KAKAO_MAP_API_KEY=your_key_here
   ```
   - 앞뒤 공백 없이 입력
   - 따옴표 없이 입력

3. **개발 서버 재시작**
   ```bash
   # 서버 중지 (Ctrl+C)
   npm run dev
   ```

#### 방법 2: 실제 도메인 등록 (프로덕션용)

프로덕션 배포 시에는 실제 도메인을 등록해야 합니다:

1. **GitHub Pages 배포 시**
   - 플랫폼에 `https://bul1d0g.github.io` 등록

2. **Vercel 배포 시**
   - 플랫폼에 `https://your-project.vercel.app` 등록

3. **커스텀 도메인 사용 시**
   - 플랫폼에 실제 도메인 등록 (예: `https://badosgym.com`)

## 일반적인 문제 해결

### 1. 지도가 표시되지 않을 때

**브라우저 콘솔 확인:**
- F12 → Console 탭 열기
- 에러 메시지 확인

**가능한 원인:**
- API 키가 잘못되었거나 설정되지 않음
- 스크립트가 로드되지 않음
- 네트워크 문제

### 2. "Invalid AppKey" 에러

**해결 방법:**
- API 키가 올바른지 확인
- JavaScript 키 또는 REST API 키 사용 (Client Secret 아님)
- 환경 변수 이름이 `NEXT_PUBLIC_KAKAO_MAP_API_KEY`인지 확인

### 3. "Forbidden" 에러

**해결 방법:**
- 플랫폼 설정 확인 (프로덕션 환경)
- 도메인이 등록되어 있는지 확인
- API 키가 해당 애플리케이션의 키인지 확인

### 4. 스크립트가 로드되지 않을 때

**확인 사항:**
- 네트워크 탭에서 스크립트 요청 확인
- CORS 에러가 있는지 확인
- 방화벽이나 보안 소프트웨어 확인

## 디버깅 단계

1. **환경 변수 확인**
   ```bash
   # .env.local 파일 내용 확인
   cat .env.local
   ```

2. **브라우저 콘솔 확인**
   - 개발자 도구(F12) → Console
   - "카카오 맵" 관련 메시지 확인

3. **네트워크 확인**
   - 개발자 도구(F12) → Network
   - `maps/sdk.js` 요청이 성공했는지 확인

4. **API 키 테스트**
   - 브라우저에서 직접 접속:
   ```
   https://dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_API_KEY&autoload=false
   ```
   - 스크립트가 로드되면 정상

## 추가 도움말

- [카카오 개발자 문서](https://developers.kakao.com/docs/latest/ko/kakaomap/js/getting-started)
- [카카오 맵 API 가이드](https://apis.map.kakao.com/web/guide/)

# 카카오 맵 API 설정 가이드

## 1. 카카오 개발자 콘솔에서 API 키 발급

1. **카카오 개발자 콘솔 접속**
   - https://developers.kakao.com 접속
   - 카카오 계정으로 로그인

2. **내 애플리케이션 만들기**
   - "내 애플리케이션" → "애플리케이션 추가하기" 클릭
   - 앱 이름: "Bados Gym" (원하는 이름)
   - 사업자명: 개인 또는 회사명
   - 저장

3. **플랫폼 설정**
   - 생성된 애플리케이션 선택
   - "앱 키" 메뉴에서 **REST API 키** 확인 (복사해두기)
   - "플랫폼" 메뉴 클릭
   - "Web 플랫폼 등록" 클릭
   - 사이트 도메인 등록:
     - 로컬 개발: `http://localhost:3000`
     - 프로덕션: `https://bul1d0g.github.io` (GitHub Pages)
     - Vercel: `https://your-domain.vercel.app`

4. **카카오 로그인 활성화**
   - "제품 설정" → "카카오 로그인" 클릭
   - "활성화 설정" → "활성화" 선택
   - Redirect URI 등록 (필요한 경우)

5. **JavaScript 키 확인**
   - "앱 키" 메뉴에서 **JavaScript 키** 복사
   - 또는 REST API 키 사용 가능

## 2. 환경 변수 설정

`.env.local` 파일에 다음 변수 추가:

```bash
NEXT_PUBLIC_KAKAO_MAP_API_KEY=your_javascript_key_or_rest_api_key_here
```

**참고**: JavaScript 키 또는 REST API 키 둘 다 사용 가능합니다.

## 3. 확인

환경 변수 설정 후 개발 서버 재시작:

```bash
npm run dev
```

지도가 정상적으로 표시되는지 확인하세요.

## 주의사항

- 카카오 맵 API는 **무료**로 사용 가능합니다
- 일일 호출 제한이 있지만 일반적인 웹사이트 사용에는 충분합니다
- JavaScript 키는 공개되어도 안전하지만, 도메인 제한이 적용됩니다
- 프로덕션 배포 시 모든 도메인을 플랫폼에 등록해야 합니다

## 문제 해결

### 지도가 표시되지 않을 때

1. **플랫폼 도메인 확인**
   - 카카오 개발자 콘솔에서 현재 도메인이 등록되어 있는지 확인

2. **API 키 확인**
   - JavaScript 키 또는 REST API 키가 올바른지 확인
   - 환경 변수 이름이 `NEXT_PUBLIC_KAKAO_MAP_API_KEY`인지 확인

3. **브라우저 콘솔 확인**
   - 개발자 도구(F12) → Console 탭에서 에러 메시지 확인

4. **스크립트 로딩 확인**
   - Network 탭에서 카카오 맵 스크립트가 정상적으로 로드되는지 확인

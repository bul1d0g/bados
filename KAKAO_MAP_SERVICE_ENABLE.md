# 카카오 맵 서비스 활성화 가이드

## 에러 메시지
```
{"errorType":"NotAuthorizedError","message":"App(black multi gym) disabled OPEN_MAP_AND_LOCAL service."}
```

## 문제 원인
카카오 개발자 콘솔에서 **OPEN_MAP_AND_LOCAL** 서비스가 활성화되지 않았습니다.

## 해결 방법

### 1. 카카오 개발자 콘솔 접속
https://developers.kakao.com 접속

### 2. 애플리케이션 선택
- "black multi gym" 애플리케이션 선택

### 3. 제품 설정 메뉴
- 왼쪽 메뉴에서 **"제품 설정"** 클릭
- 또는 **"Product settings"** 클릭

### 4. 카카오맵 서비스 활성화
- **"카카오맵"** 또는 **"Kakao Map"** 찾기
- **"활성화 설정"** → **"활성화"** 선택
- 또는 **"OPEN_MAP_AND_LOCAL"** 서비스 찾아서 활성화

### 5. 저장
- 변경사항 저장
- 몇 분 대기 (서비스 활성화 반영 시간)

## 확인 사항

활성화 후 확인:
1. 제품 설정에서 "카카오맵" 또는 "OPEN_MAP_AND_LOCAL"이 활성화되어 있는지 확인
2. JavaScript 키가 올바른지 확인
3. 플랫폼 도메인이 등록되어 있는지 확인

## 참고

- 서비스 활성화 후 즉시 적용되지 않을 수 있습니다 (몇 분 소요)
- 개발 서버 재시작 필요할 수 있습니다
- 브라우저 캐시 클리어 후 다시 시도

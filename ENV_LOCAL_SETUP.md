# .env.local 파일 관리 가이드

## 현재 설정

`.env.local` 파일은 **한 번만 커밋**되었고, 이후 변경사항은 Git에서 무시됩니다.

## 작동 방식

1. **파일 추적**: `.env.local` 파일은 Git에 추적되고 있습니다
2. **변경사항 무시**: `git update-index --skip-worktree` 명령으로 이후 변경사항은 무시됩니다
3. **GitHub에 저장**: 최초 버전이 GitHub에 저장되어 있습니다

## 확인 방법

```bash
# 파일이 추적 중인지 확인
git ls-files | grep .env.local

# 파일을 수정해도 변경사항이 무시되는지 확인
echo "test" >> .env.local
git status  # .env.local이 나타나지 않아야 함
git checkout .env.local  # 변경사항 되돌리기
```

## 변경사항 무시 해제 (필요한 경우)

만약 나중에 `.env.local`의 변경사항을 다시 추적하고 싶다면:

```bash
git update-index --no-skip-worktree .env.local
```

## 주의사항

- ⚠️ `.env.local` 파일이 GitHub에 공개되어 있으므로, 민감한 정보는 포함하지 마세요
- ⚠️ 카카오 맵 API 키는 클라이언트에서 사용되므로 공개되어도 기술적으로 안전하지만, 사용량 제한이 있을 수 있습니다
- ✅ 파일을 수정해도 자동으로 커밋되지 않습니다

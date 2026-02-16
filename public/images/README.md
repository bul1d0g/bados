# Images 폴더

이 폴더는 프로젝트에서 사용하는 이미지 파일을 저장합니다.

## 사용 방법

### Next.js에서 이미지 사용

```tsx
// public/images 폴더의 이미지 사용
<img src="/images/logo.png" alt="Logo" />

// 또는 Next.js Image 컴포넌트 사용
import Image from 'next/image'

<Image 
  src="/images/hero-image.jpg" 
  alt="Hero" 
  width={800} 
  height={600} 
/>
```

### 권장 이미지 형식

- **로고/아이콘**: PNG (투명 배경)
- **사진**: JPG, WebP
- **일러스트**: SVG, PNG

### 폴더 구조 예시

```
public/images/
├── logo.png          # 로고
├── hero/             # 히어로 섹션 이미지
│   ├── hero-1.jpg
│   └── hero-2.jpg
├── features/         # 기능 소개 이미지
│   └── feature-1.jpg
└── gallery/          # 갤러리 이미지
    └── gym-1.jpg
```

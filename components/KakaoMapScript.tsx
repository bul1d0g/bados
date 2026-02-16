'use client'

import Script from 'next/script'

export default function KakaoMapScript() {
  const apiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY

  if (!apiKey) {
    console.warn('카카오 맵 API 키가 설정되지 않았습니다.')
    return null
  }

  return (
    <Script
      strategy="afterInteractive"
      src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`}
      onLoad={() => {
        console.log('카카오 맵 스크립트 로드 완료')
        if (typeof window !== 'undefined' && window.kakao && window.kakao.maps && window.kakao.maps.load) {
          window.kakao.maps.load(() => {
            console.log('카카오 맵 SDK 초기화 완료')
          })
        } else {
          console.warn('카카오 맵 객체를 찾을 수 없습니다.')
        }
      }}
      onError={(e) => {
        console.error('카카오 맵 SDK 로드 실패:', e)
        console.error('API 키를 확인해주세요:', apiKey.substring(0, 10) + '...')
      }}
      onReady={() => {
        console.log('카카오 맵 스크립트 준비됨')
      }}
    />
  )
}

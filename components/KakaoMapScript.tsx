'use client'

import { useEffect } from 'react'

export default function KakaoMapScript() {
  const apiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY

  useEffect(() => {
    if (!apiKey) {
      console.warn('카카오 맵 API 키가 설정되지 않았습니다.')
      return
    }

    // 이미 로드되어 있는지 확인
    if (typeof window !== 'undefined' && window.kakao) {
      console.log('카카오 맵 SDK가 이미 로드되어 있습니다.')
      return
    }

    // 스크립트가 이미 추가되어 있는지 확인
    const existingScript = document.querySelector(`script[src*="dapi.kakao.com"]`)
    if (existingScript) {
      console.log('카카오 맵 스크립트가 이미 추가되어 있습니다.')
      return
    }

    const scriptUrl = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(apiKey)}&autoload=false`

    const script = document.createElement('script')
    script.src = scriptUrl
    script.async = true
    script.defer = true

    script.onload = () => {
      console.log('카카오 맵 스크립트 로드 완료')
      if (window.kakao && window.kakao.maps && window.kakao.maps.load) {
        window.kakao.maps.load(() => {
          console.log('카카오 맵 SDK 초기화 완료')
        })
      }
    }

    script.onerror = (e: any) => {
      console.error('카카오 맵 SDK 로드 실패')
      console.error('스크립트 URL:', scriptUrl)
      console.error('브라우저에서 직접 접속해보세요:', scriptUrl)
      console.warn('가능한 원인:')
      console.warn('1. 카카오 개발자 콘솔에서 도메인이 등록되지 않았을 수 있습니다')
      console.warn('2. 브라우저 확장 프로그램이 간섭할 수 있습니다')
      console.warn('3. 네트워크 문제일 수 있습니다')
    }

    document.head.appendChild(script)

    return () => {
      // 컴포넌트 언마운트 시 스크립트 제거하지 않음 (다른 컴포넌트에서 사용할 수 있음)
    }
  }, [apiKey])

  return null
}

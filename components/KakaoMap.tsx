'use client'

import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    kakao: any
  }
}

interface KakaoMapProps {
  address: string
}

export default function KakaoMap({ address }: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!mapRef.current) return

    let timeoutId: NodeJS.Timeout
    let retryCount = 0
    const maxRetries = 50

    const checkKakaoMap = () => {
      retryCount++
      
      if (retryCount > maxRetries) {
        setError('카카오 맵 SDK를 로드할 수 없습니다. API 키와 플랫폼 설정을 확인해주세요.')
        setLoading(false)
        return
      }

      if (window.kakao && window.kakao.maps) {
        if (window.kakao.maps.load) {
          window.kakao.maps.load(() => {
            console.log('카카오 맵 SDK 로드 완료, 맵 초기화 시작')
            initMap()
          })
        } else {
          console.log('카카오 맵 SDK 준비됨, 맵 초기화 시작')
          initMap()
        }
      } else {
        timeoutId = setTimeout(checkKakaoMap, 200)
      }
    }

    const initMap = () => {
      if (!mapRef.current) {
        console.error('맵 컨테이너를 찾을 수 없습니다.')
        setError('맵 컨테이너를 찾을 수 없습니다.')
        setLoading(false)
        return
      }

      if (!window.kakao?.maps) {
        console.error('카카오 맵 SDK가 로드되지 않았습니다.')
        setError('카카오 맵 SDK가 로드되지 않았습니다.')
        setLoading(false)
        return
      }

      try {
        console.log('주소 검색 시작:', address)
        const geocoder = new window.kakao.maps.services.Geocoder()

        geocoder.addressSearch(address, (result: any, status: string) => {
          if (status === window.kakao.maps.services.Status.OK) {
            console.log('주소 검색 성공:', result[0])
            const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x)

            const mapOption = {
              center: coords,
              level: 3,
            }

            const map = new window.kakao.maps.Map(mapRef.current, mapOption)
            mapInstanceRef.current = map

            const marker = new window.kakao.maps.Marker({
              position: coords,
              map: map,
            })

            const infowindow = new window.kakao.maps.InfoWindow({
              content: `
                <div style="padding: 10px; min-width: 200px;">
                  <h3 style="margin: 0 0 5px 0; font-size: 16px; font-weight: bold;">Bados Gym</h3>
                  <p style="margin: 0; font-size: 14px; color: #666;">${address}</p>
                </div>
              `,
            })

            infowindow.open(map, marker)
            setLoading(false)
            console.log('카카오 맵 초기화 완료')
          } else {
            console.error('주소 검색 실패:', status)
            setError(`주소를 찾을 수 없습니다. (상태: ${status})`)
            setLoading(false)
          }
        })
      } catch (error) {
        console.error('카카오 맵 초기화 오류:', error)
        setError(`맵 초기화 중 오류가 발생했습니다: ${error}`)
        setLoading(false)
      }
    }

    checkKakaoMap()

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [address])

  return (
    <div className="kakao-map-container">
      {loading && (
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          color: '#b0b0b0',
          zIndex: 1
        }}>
          지도를 불러오는 중...
        </div>
      )}
      {error && (
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          color: '#ff6b35',
          zIndex: 1,
          textAlign: 'center',
          padding: '20px',
          background: 'rgba(0, 0, 0, 0.8)',
          borderRadius: '10px'
        }}>
          {error}
        </div>
      )}
      <div ref={mapRef} className="kakao-map" style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

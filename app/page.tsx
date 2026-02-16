'use client'

import { useState, useRef, useMemo, useCallback, memo } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaDumbbell, FaRunning, FaHeartbeat, FaClock, FaUserFriends, FaTrophy, FaChevronRight, FaStar, FaAward } from 'react-icons/fa'
import Image from 'next/image'
import ImageModal from '@/components/ImageModal'
import KakaoMap from '@/components/KakaoMap'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const GYM_ADDRESS = '경기 남양주시 다산중앙로145번길 11 지앤지메트로타워 2차 10,11층'

// Gallery Image Component를 메모이제이션하여 불필요한 리렌더링 방지
const GalleryImage = memo(({ src, index, isRoof, onOpenModal }: { src: string; index: number; isRoof: boolean; onOpenModal: (index: number) => void }) => (
  <div 
    className="gallery-item"
    onClick={() => onOpenModal(index)}
    style={{ cursor: 'pointer' }}
  >
    <Image
      src={src}
      alt={isRoof ? 'Bados Gym Rooftop' : `Bados Gym Interior ${index + 1}`}
      width={400}
      height={300}
      className="gallery-image"
      loading="lazy"
      decoding="async"
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    />
    <div className="gallery-overlay">
      <div className="gallery-content">
        {isRoof ? (
          <>
            <h3 className="gallery-title-featured">루프탑 트레이닝 공간</h3>
            <p className="gallery-desc-featured">자연광이 가득한 프리미엄 공간</p>
          </>
        ) : (
          <FaDumbbell className="gallery-icon" />
        )}
      </div>
    </div>
  </div>
))

GalleryImage.displayName = 'GalleryImage'

// Full Gallery Image Component도 메모이제이션
const FullGalleryImage = memo(({ src, index, isRoof, onOpenModal }: { src: string; index: number; isRoof: boolean; onOpenModal: (index: number) => void }) => (
  <div 
    className="full-gallery-item"
    onClick={() => onOpenModal(index)}
  >
    <Image
      src={src}
      alt={isRoof ? 'Bados Gym Rooftop' : `Bados Gym Interior ${index + 1}`}
      width={300}
      height={300}
      className="full-gallery-image"
      loading="lazy"
      decoding="async"
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    />
  </div>
))

FullGalleryImage.displayName = 'FullGalleryImage'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const galleryRef = useRef<HTMLElement>(null)
  const featuresRef = useRef<HTMLElement>(null)
  const mapRef = useRef<HTMLElement>(null)

  // 이미지 배열을 useMemo로 메모이제이션
  const interiorImages = useMemo(() => [
    ...Array.from({ length: 8 }, (_, i) => `${basePath}/images/interior_${i + 1}.jpg`),
    `${basePath}/images/roof.jpg`
  ], [basePath])

  const scrollToGallery = useCallback(() => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const openModal = useCallback((index: number) => {
    setCurrentImageIndex(index)
    setModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setModalOpen(false)
  }, [])

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % interiorImages.length)
  }, [interiorImages.length])

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + interiorImages.length) % interiorImages.length)
  }, [interiorImages.length])

  const handleFeatureClick = useCallback(() => {
    // 클릭 가능하지만 스크롤 이동은 하지 않음
  }, [])

  return (
    <main className="gym-main">
      <section className="hero-section">
        <div className="hero-background">
          <Image
            src={`${basePath}/images/interior_1.jpg`}
            alt="Bados Gym"
            fill
            priority
            className="hero-bg-image"
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-overlay"></div>
        </div>
        <Container className="hero-content">
          <Row className="align-items-center min-vh-100">
            <Col lg={8} className="mx-auto text-center">
              <div className="gym-badge mb-4 animate-fade-in">Bados Gym</div>
              <h1 className="hero-title fw-bold mb-4 mb-md-5 animate-slide-up">
                당신의 목표를<br />달성하세요
              </h1>
              <p className="lead mb-4 mb-md-5 animate-slide-up-delay">
                최신 시설과 전문 트레이너가 함께하는<br />
                프리미엄 헬스장에서 새로운 변화를 시작하세요
              </p>
              <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
                <Button variant="primary" size="lg" className="gym-btn-primary w-100 w-md-auto">
                  무료 체험 신청
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  className="gym-btn-outline w-100 w-md-auto"
                  onClick={scrollToGallery}
                >
                  시설 둘러보기 <FaChevronRight className="ms-2" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="stats-section py-5">
        <Container>
          <Row className="g-4">
            <Col xs={6} md={3}>
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">활성 회원</div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">전문 트레이너</div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="stat-card">
                <div className="stat-number">98%</div>
                <div className="stat-label">만족도</div>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">운영 시간</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="gallery-section py-5">
        <Container>
          <Row className="mb-5">
            <Col xs={12} className="text-center">
              <div className="section-header">
                <span className="section-label">PREMIUM FACILITIES</span>
                <h2 className="section-title mb-3">프리미엄 시설</h2>
                <p className="section-subtitle">최고의 환경에서 최상의 트레이닝을 경험하세요</p>
              </div>
            </Col>
          </Row>
          <Row className="g-3">
            {interiorImages.slice(0, 6).map((src, index) => {
              const isRoof = src.includes('roof.jpg')
              return (
                <Col xs={6} md={4} key={`gallery-${index}`}>
                  <GalleryImage 
                    src={src}
                    index={index}
                    isRoof={isRoof}
                    onOpenModal={openModal}
                  />
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>

      <section ref={featuresRef} className="features-section py-5">
        <Container>
          <Row className="mb-5">
            <Col xs={12} className="text-center">
              <div className="section-header">
                <span className="section-label">WHY CHOOSE US</span>
                <h2 className="section-title mb-3">왜 Bados Gym인가요?</h2>
                <p className="section-subtitle">최고의 시설과 서비스로 여러분을 맞이합니다</p>
              </div>
            </Col>
          </Row>
          <Row className="g-4">
            <Col xs={12} md={6} lg={4} className="mb-4">
              <div 
                className="feature-card feature-card-clickable"
                onClick={handleFeatureClick}
              >
                <div className="feature-icon mb-4">
                  <FaDumbbell />
                </div>
                <h3 className="h4 mb-3">최신 운동 기구</h3>
                <p className="mb-3">프리미엄 브랜드의 최신 운동 기구로 효과적인 트레이닝을 경험하세요</p>
                <div className="feature-details">
                  <p className="mb-2">• 국내외 프리미엄 브랜드 기구 도입</p>
                  <p className="mb-2">• 정기적인 기구 점검 및 교체</p>
                  <p className="mb-0">• 다양한 운동 목적에 맞는 전문 장비</p>
                </div>
                <div className="feature-link mt-3">
                  시설 보기 <FaChevronRight className="ms-1" />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-4">
              <div 
                className="feature-card feature-card-clickable"
                onClick={handleFeatureClick}
              >
                <div className="feature-icon mb-4">
                  <FaUserFriends />
                </div>
                <h3 className="h4 mb-3">전문 트레이너</h3>
                <p className="mb-3">자격을 갖춘 전문 트레이너가 개인 맞춤형 프로그램을 제공합니다</p>
                <div className="feature-details">
                  <p className="mb-2">• 국가자격증 보유 전문 트레이너</p>
                  <p className="mb-2">• 1:1 맞춤형 운동 프로그램 설계</p>
                  <p className="mb-0">• 정기적인 트레이너 교육 및 자격 갱신</p>
                </div>
                <div className="feature-link mt-3">
                  시설 보기 <FaChevronRight className="ms-1" />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-4">
              <div className="feature-card">
                <div className="feature-icon mb-4">
                  <FaClock />
                </div>
                <h3 className="h4 mb-3">24시간 운영</h3>
                <p className="mb-3">언제든지 편리하게 이용할 수 있는 24시간 운영 시스템</p>
                <div className="feature-details">
                  <p className="mb-2">• 새벽/심야 시간대에도 이용 가능</p>
                  <p className="mb-2">• 출퇴근 시간대 혼잡 완화</p>
                  <p className="mb-0">• 개인 일정에 맞춘 자유로운 운동 시간</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-4">
              <div 
                className="feature-card feature-card-clickable"
                onClick={handleFeatureClick}
              >
                <div className="feature-icon mb-4">
                  <FaRunning />
                </div>
                <h3 className="h4 mb-3">다양한 프로그램</h3>
                <p className="mb-3">요가, 필라테스, 그룹 레슨 등 다양한 운동 프로그램을 제공합니다</p>
                <div className="feature-details">
                  <p className="mb-2">• 요가, 필라테스, 스피닝 등 그룹 레슨</p>
                  <p className="mb-2">• 초보자부터 전문가까지 단계별 프로그램</p>
                  <p className="mb-0">• 정기적인 신규 프로그램 업데이트</p>
                </div>
                <div className="feature-link mt-3">
                  시설 보기 <FaChevronRight className="ms-1" />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-4">
              <div 
                className="feature-card feature-card-clickable"
                onClick={handleFeatureClick}
              >
                <div className="feature-icon mb-4">
                  <FaHeartbeat />
                </div>
                <h3 className="h4 mb-3">건강 관리</h3>
                <p className="mb-3">체성분 분석과 건강 상담을 통해 체계적인 관리를 지원합니다</p>
                <div className="feature-details">
                  <p className="mb-2">• 정밀 체성분 분석기 보유</p>
                  <p className="mb-2">• 전문 영양사 건강 상담 서비스</p>
                  <p className="mb-0">• 개인별 건강 목표 설정 및 추적</p>
                </div>
                <div className="feature-link mt-3">
                  시설 보기 <FaChevronRight className="ms-1" />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-4">
              <div 
                className="feature-card feature-card-clickable"
                onClick={handleFeatureClick}
              >
                <div className="feature-icon mb-4">
                  <FaTrophy />
                </div>
                <h3 className="h4 mb-3">성과 추적</h3>
                <p className="mb-3">목표 달성을 위한 체계적인 성과 추적과 피드백을 제공합니다</p>
                <div className="feature-details">
                  <p className="mb-2">• 운동 기록 및 성과 데이터 관리</p>
                  <p className="mb-2">• 정기적인 목표 달성도 체크</p>
                  <p className="mb-0">• 개인 맞춤형 피드백 및 조언</p>
                </div>
                <div className="feature-link mt-3">
                  위치 보기 <FaChevronRight className="ms-1" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section ref={mapRef} className="map-section py-5">
        <Container>
          <Row className="mb-5">
            <Col xs={12} className="text-center">
              <div className="section-header">
                <span className="section-label">LOCATION</span>
                <h2 className="section-title mb-3">오시는 길</h2>
                <p className="section-subtitle">Bados Gym을 찾아오세요</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="map-info mb-4">
                <p className="map-address">
                  <strong>주소:</strong> {GYM_ADDRESS}
                </p>
              </div>
              {process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY ? (
                <KakaoMap address={GYM_ADDRESS} />
              ) : (
                <div className="kakao-map-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1a1a1a', minHeight: '500px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ color: '#b0b0b0', marginBottom: '10px' }}>카카오 맵 API 키를 설정해주세요</p>
                    <p style={{ color: '#666', fontSize: '0.875rem' }}>
                      .env.local 파일에 NEXT_PUBLIC_KAKAO_MAP_API_KEY를 추가하세요
                    </p>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>

      <section ref={galleryRef} className="full-gallery-section py-5">
        <Container fluid>
          <Row className="mb-5">
            <Col xs={12} className="text-center">
              <div className="section-header">
                <span className="section-label">FACILITY TOUR</span>
                <h2 className="section-title mb-3">시설 둘러보기</h2>
                <p className="section-subtitle">Bados Gym의 모든 공간을 확인하세요</p>
              </div>
            </Col>
          </Row>
          <Row className="g-2">
            {interiorImages.map((src, index) => {
              const isRoof = src.includes('roof.jpg')
              return (
                <Col xs={6} sm={4} md={3} lg={2} key={`full-gallery-${index}`}>
                  <FullGalleryImage 
                    src={src}
                    index={index}
                    isRoof={isRoof}
                    onOpenModal={openModal}
                  />
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>

      <ImageModal
        images={interiorImages}
        currentIndex={currentImageIndex}
        isOpen={modalOpen}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
      />

      <section className="cta-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <div className="cta-badge mb-3">
                <FaAward className="me-2" />
                SPECIAL OFFER
              </div>
              <h2 className="cta-title mb-4">지금 시작하세요</h2>
              <p className="cta-text mb-4">첫 방문 시 무료 체험과 상담을 제공합니다</p>
              <div className="cta-features mb-4">
                <div className="cta-feature-item">
                  <FaStar className="text-warning me-2" />
                  <span>무료 체험 1회</span>
                </div>
                <div className="cta-feature-item">
                  <FaStar className="text-warning me-2" />
                  <span>전문 상담 제공</span>
                </div>
                <div className="cta-feature-item">
                  <FaStar className="text-warning me-2" />
                  <span>체성분 분석</span>
                </div>
              </div>
              <Button variant="primary" size="lg" className="gym-btn-primary">
                무료 체험 신청하기
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}

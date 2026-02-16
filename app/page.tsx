'use client'

import { useState, useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaDumbbell, FaRunning, FaHeartbeat, FaClock, FaUserFriends, FaTrophy, FaChevronRight } from 'react-icons/fa'
import Image from 'next/image'
import ImageModal from '@/components/ImageModal'
import KakaoMap from '@/components/KakaoMap'

const interiorImages = Array.from({ length: 16 }, (_, i) => `/images/interior_${i + 1}.jpg`)
const GYM_ADDRESS = '경기 남양주시 다산중앙로145번길 11 지앤지메트로타워 2차 10,11층'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const galleryRef = useRef<HTMLElement>(null)

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % interiorImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + interiorImages.length) % interiorImages.length)
  }

  return (
    <main className="gym-main">
      <section className="hero-section">
        <div className="hero-background">
          <Image
            src="/images/interior_1.jpg"
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
              <div className="gym-badge mb-4">Bados Gym</div>
              <h1 className="hero-title fw-bold mb-4 mb-md-5">
                당신의 목표를<br />달성하세요
              </h1>
              <p className="lead mb-4 mb-md-5">
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

      <section className="gallery-section py-5">
        <Container>
          <Row className="mb-5">
            <Col xs={12} className="text-center">
              <h2 className="section-title mb-3">프리미엄 시설</h2>
              <p className="section-subtitle">최고의 환경에서 최상의 트레이닝을 경험하세요</p>
            </Col>
          </Row>
          <Row className="g-3">
            {interiorImages.slice(0, 6).map((src, index) => (
              <Col xs={6} md={4} key={index}>
                <div className="gallery-item">
                  <Image
                    src={src}
                    alt={`Bados Gym Interior ${index + 1}`}
                    width={400}
                    height={300}
                    className="gallery-image"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <FaDumbbell className="gallery-icon" />
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="features-section py-5">
        <Container>
          <Row className="mb-5">
            <Col xs={12} className="text-center">
              <h2 className="section-title mb-3">왜 Bados Gym인가요?</h2>
              <p className="section-subtitle">최고의 시설과 서비스로 여러분을 맞이합니다</p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col xs={12} md={6} lg={4} className="mb-4">
              <div className="feature-card">
                <div className="feature-icon mb-4">
                  <FaDumbbell />
                </div>
                <h3 className="h4 mb-3">최신 운동 기구</h3>
                <p className="mb-0">프리미엄 브랜드의 최신 운동 기구로 효과적인 트레이닝을 경험하세요</p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-4">
              <div className="feature-card">
                <div className="feature-icon mb-4">
                  <FaUserFriends />
                </div>
                <h3 className="h4 mb-3">전문 트레이너</h3>
                <p className="mb-0">자격을 갖춘 전문 트레이너가 개인 맞춤형 프로그램을 제공합니다</p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-4">
              <div className="feature-card">
                <div className="feature-icon mb-4">
                  <FaClock />
                </div>
                <h3 className="h4 mb-3">24시간 운영</h3>
                <p className="mb-0">언제든지 편리하게 이용할 수 있는 24시간 운영 시스템</p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-4">
              <div className="feature-card">
                <div className="feature-icon mb-4">
                  <FaRunning />
                </div>
                <h3 className="h4 mb-3">다양한 프로그램</h3>
                <p className="mb-0">요가, 필라테스, 그룹 레슨 등 다양한 운동 프로그램을 제공합니다</p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-4">
              <div className="feature-card">
                <div className="feature-icon mb-4">
                  <FaHeartbeat />
                </div>
                <h3 className="h4 mb-3">건강 관리</h3>
                <p className="mb-0">체성분 분석과 건강 상담을 통해 체계적인 관리를 지원합니다</p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-4">
              <div className="feature-card">
                <div className="feature-icon mb-4">
                  <FaTrophy />
                </div>
                <h3 className="h4 mb-3">성과 추적</h3>
                <p className="mb-0">목표 달성을 위한 체계적인 성과 추적과 피드백을 제공합니다</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="map-section py-5">
        <Container>
          <Row className="mb-5">
            <Col xs={12} className="text-center">
              <h2 className="section-title mb-3">오시는 길</h2>
              <p className="section-subtitle">Bados Gym을 찾아오세요</p>
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
                <div className="kakao-map-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1a1a1a' }}>
                  <p style={{ color: '#b0b0b0' }}>카카오 맵 API 키를 설정해주세요</p>
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
              <h2 className="section-title mb-3">시설 둘러보기</h2>
              <p className="section-subtitle">Bados Gym의 모든 공간을 확인하세요</p>
            </Col>
          </Row>
          <Row className="g-2">
            {interiorImages.map((src, index) => (
              <Col xs={6} sm={4} md={3} lg={2} key={index}>
                <div 
                  className="full-gallery-item"
                  onClick={() => openModal(index)}
                >
                  <Image
                    src={src}
                    alt={`Bados Gym Interior ${index + 1}`}
                    width={300}
                    height={300}
                    className="full-gallery-image"
                  />
                </div>
              </Col>
            ))}
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
              <h2 className="cta-title mb-4">지금 시작하세요</h2>
              <p className="cta-text mb-4">첫 방문 시 무료 체험과 상담을 제공합니다</p>
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

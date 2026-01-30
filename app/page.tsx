import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaDumbbell, FaRunning, FaHeartbeat, FaClock, FaUserFriends, FaTrophy } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="gym-main">
      <section className="hero-section py-5">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="mb-4 mb-lg-0 order-2 order-lg-1">
              <div className="gym-badge mb-3">Bados Gym</div>
              <h1 className="hero-title fw-bold mb-3 mb-md-4">
                당신의 목표를<br />달성하세요
              </h1>
              <p className="lead mb-4 mb-md-5">
                최신 시설과 전문 트레이너가 함께하는<br />
                프리미엄 헬스장에서 새로운 변화를 시작하세요
              </p>
              <div className="d-flex flex-column flex-md-row gap-3">
                <Button variant="primary" size="lg" className="gym-btn-primary w-100 w-md-auto">
                  무료 체험 신청
                </Button>
                <Button variant="outline-light" size="lg" className="gym-btn-outline w-100 w-md-auto">
                  시설 둘러보기
                </Button>
              </div>
            </Col>
            <Col lg={6} className="order-1 order-lg-2">
              <div className="text-center hero-image-wrapper">
                <FaDumbbell className="hero-icon" />
              </div>
            </Col>
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

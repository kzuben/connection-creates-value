import { useEffect, useRef, useState } from 'react'
import { AnimatedCounter, TypeWriter, AnimatedProgressBar, CircularProgress, FlowDiagram, IsometricCube, Timeline } from './Charts'

function Tab3({ currentSlide, onSlideChange }) {
  const containerRef = useRef(null)
  const [activeRole, setActiveRole] = useState('owner')
  const [sliderValue, setSliderValue] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e) => {
      e.preventDefault()
      if (e.deltaY > 0) onSlideChange(Math.min(currentSlide + 1, 9))
      else onSlideChange(Math.max(currentSlide - 1, 0))
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [currentSlide, onSlideChange])

  const roleData = {
    owner: { name: '발주처', icon: '👔', widgets: ['공정 현황 85%', '예산 대비 92%', '승인 대기 3건'], color: 'var(--accent-mint)' },
    safety: { name: '안전관리자', icon: '🦺', widgets: ['위험 알림 2건', '금일 TBM 완료', '센서 정상'], color: '#FFB347' },
    worker: { name: '작업자', icon: '👷', widgets: ['금일 작업 지시', '도면 확인', '이슈 보고'], color: '#87CEEB' }
  }

  const kanbanData = [
    { col: 'WIP', cards: ['설계 검토 A'], color: 'var(--bg-light)' },
    { col: '검토', cards: ['BIM 모델 C'], color: '#FFF3E0' },
    { col: 'SHARED', cards: ['승인 문서 E'], color: '#E8F8F5' },
    { col: 'PUBLISHED', cards: ['최종 승인 F'], color: 'var(--accent-mint)' },
    { col: 'ARCHIVE', cards: ['완료 G'], color: '#E0E7FF' }
  ]

  return (
    <div ref={containerRef} className="slides-container">
      {/* SLIDE 0: 핵심 요약 */}
      <section className={`slide content-slide ${currentSlide === 0 ? 'active' : ''}`}>
        <div className="slide-left" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, var(--bg-light) 100%)' }}>
          <div className="slide-label">Overview</div>
          <h2 className="slide-title">Wireframe<br />요약</h2>
          <p className="slide-desc">이 탭에서 다루는 내용</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>
            "데모 사이트의 UX 설계 및 인터랙션"
          </p>
        </div>
        <div className="slide-right">
          <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-black)' }}>📋 핵심 메시지</div>
          <div style={{ 
            padding: '20px', 
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, var(--bg-light) 100%)', 
            borderRadius: '16px',
            marginBottom: '20px',
            border: '2px solid #6366F1'
          }}>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#6366F1', marginBottom: '8px' }}>
              "기술을 체험하게 하십시오"
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-gray)', lineHeight: 1.6 }}>
              역할별 맞춤 UI로 고객이 직접 기술의 가치를 경험하도록 설계
            </div>
          </div>
          <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>📑 슬라이드 구성</div>
          <div className="story-list">
            {[
              { num: '01-02', title: 'Role Experience', desc: '역할별 UI - 발주처/안전관리자/작업자' },
              { num: '03-04', title: 'Data Flow', desc: 'BIM 데이터 흐름 및 칸반 보드' },
              { num: '05-06', title: 'Tech Demo', desc: '기술 체험 슬라이더 및 연구과제' },
              { num: '07-08', title: 'Contact & CTA', desc: '문의하기 및 Call to Action' }
            ].map((item, i) => (
              <div key={i} className="story-item" style={{ padding: '10px' }}>
                <span className="story-num" style={{ fontSize: '11px', color: '#6366F1', minWidth: '50px' }}>{item.num}</span>
                <div className="story-content">
                  <div className="story-title" style={{ fontSize: '12px' }}>{item.title}</div>
                  <div className="story-desc" style={{ fontSize: '10px' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 1: Hero - 와이어프레임 데모 */}
      <section className={`slide hero-slide ${currentSlide === 1 ? 'active' : ''}`}>
        <div className="hero-left">
          <div className="hero-label">
            <div className="hero-label-dot" />
            <span>Demo Site</span>
          </div>
          <h1 className="hero-title">
            Wire<br />
            <span className="hero-title-italic hologram-text glitch-text">Frame</span>
          </h1>
          <p className="hero-subtitle">
            TAESUNG SNI Digital Twin Demo Site
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-gray)', marginTop: '16px', fontStyle: 'italic', lineHeight: 1.6 }}>
            {currentSlide === 1 && <TypeWriter text='"EXPERIENCE THE INTELLIGENCE. 기술을 가치 있게, 복잡함을 단순하게."' speed={30} delay={800} />}
          </p>
          <div style={{ marginTop: '12px', padding: '10px 14px', background: 'rgba(255,255,255,0.95)', borderRadius: '10px', fontSize: '11px' }}>
            <div style={{ fontWeight: 600, marginBottom: '6px', color: 'var(--text-black)' }}>📍 데모 상태</div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ padding: '3px 8px', background: 'var(--bg-mint)', borderRadius: '12px', color: 'var(--accent-mint)', fontSize: '10px' }}>✅ 와이어프레임 완료</span>
              <span style={{ padding: '3px 8px', background: '#FFF3E0', borderRadius: '12px', color: '#F97316', fontSize: '10px' }}>🔄 프로토타입 진행 중</span>
            </div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <FlowDiagram 
              steps={[
                { icon: '👤', label: '역할 체험' },
                { icon: '🧠', label: '논리 이해' },
                { icon: '🔧', label: '기술 확인' },
                { icon: '📊', label: '현황 파악' },
                { icon: '📞', label: '문의' }
              ]}
              activeIndex={-1}
            />
          </div>
          {/* Design Concept Badge */}
          <div style={{ 
            marginTop: '20px', 
            padding: '12px 16px', 
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(255, 107, 53, 0.05))',
            borderRadius: '12px',
            border: '1px solid rgba(139, 92, 246, 0.3)'
          }}>
            <div style={{ fontSize: '10px', fontWeight: 600, background: 'linear-gradient(135deg, #6366F1, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '6px', letterSpacing: '1px' }}>🌟 THEME: HOLOGRAPHIC INTERFACE</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['🔮 홀로그램', '💎 글래스모피즘', '✨ 네온 글로우', '🎮 인터랙션'].map((tag, i) => (
                <span key={i} className="keyword-tag" style={{ fontSize: '9px', padding: '4px 8px', background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.2)' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-image-frame neon-glow-hover" style={{ 
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(59, 130, 246, 0.1), rgba(14, 165, 233, 0.1))',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Holographic Grid Lines */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `
                linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
              opacity: 0.5
            }} />
            {/* Holographic Scan Line */}
            <div style={{
              position: 'absolute',
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #6366F1, transparent)',
              animation: 'scanLine 3s ease-in-out infinite',
              top: currentSlide === 1 ? '30%' : '50%',
              transition: 'top 0.5s ease'
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <IsometricCube size={40} color="#6366F1" delay={500} />
                <IsometricCube size={50} color="var(--accent-mint)" delay={700} />
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <IsometricCube size={30} color="#F97316" delay={900} />
                <IsometricCube size={45} color="#6366F1" delay={1100} />
              </div>
            </div>
            {/* Neon Glow Particles */}
            {currentSlide === 1 && Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={i}
                style={{
                  position: 'absolute',
                  width: '6px',
                  height: '6px',
                  background: i % 3 === 0 ? '#6366F1' : i % 3 === 1 ? '#F97316' : '#3B82F6',
                  borderRadius: '50%',
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  boxShadow: `0 0 10px ${i % 3 === 0 ? '#6366F1' : i % 3 === 1 ? '#F97316' : '#3B82F6'}`,
                  animation: `pulse ${2 + Math.random()}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 2: HERO SECTION & Philosophy + Design Specification */}
      <section className={`slide content-slide ${currentSlide === 2 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">Hero Section</div>
          <h2 className="slide-title">EXPER<br />IENCE</h2>
          <p className="slide-desc">EXPERIENCE THE INTELLIGENCE.</p>
          <p style={{ fontSize: '15px', color: 'var(--text-gray)', marginTop: '12px' }}>
            기술을 가치 있게, 복잡함을 단순하게.
          </p>
          <div style={{ marginTop: '24px', padding: '18px', background: 'rgba(255,255,255,0.9)', borderRadius: '14px' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>Design Specification</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '13px' }}>
              <span style={{ color: 'var(--text-gray)' }}>Tone</span>
              <span style={{ fontWeight: 600 }}>Dark Mode</span>
              <span style={{ color: 'var(--text-gray)' }}>Style</span>
              <span style={{ fontWeight: 600 }}>High-Tech</span>
              <span style={{ color: 'var(--text-gray)' }}>Accent</span>
              <span style={{ fontWeight: 600, color: '#3B82F6' }}>Blue & Indigo</span>
            </div>
          </div>
        </div>
        <div className="slide-right">
          <div className="highlight-box" style={{ marginBottom: '20px', fontSize: '15px' }}>
            <strong>💡 Philosophy:</strong> "BIM 정보 관리란 제대로 된 데이터를 약속된 장소, 이름, 시점에 공유하는 것."
          </div>
          <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '14px', color: 'var(--text-black)' }}>배경 비주얼</div>
          <div style={{ 
            minHeight: '200px', 
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.3), transparent 50%)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 60%, rgba(0, 168, 138, 0.2), transparent 50%)' }} />
            <div style={{ textAlign: 'center', color: 'white', zIndex: 1 }}>
              <div style={{ fontSize: '56px', marginBottom: '12px' }}>🏗️</div>
              <div style={{ fontSize: '15px', opacity: 0.8 }}>건설 현장 3D 포인트 클라우드</div>
            </div>
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                width: '5px',
                height: '5px',
                background: 'var(--accent-mint)',
                borderRadius: '50%',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
                animation: `pulse ${2 + Math.random() * 2}s ease-in-out infinite`
              }} />
            ))}
          </div>
          <div style={{ marginTop: '20px', fontSize: '15px', fontWeight: 600, marginBottom: '12px' }}>Global Header</div>
          <div className="flow-row">
            {['Logo', 'Pocket Xite', 'CDE Flow', '...', 'Contact Us'].map((item, i, arr) => (
              <div key={i} className={`flow-item ${i === 0 || i === arr.length - 1 ? 'active' : ''}`}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 3: SECTION 1 - POCKET XITE (Role-Based UX) */}
      <section className={`slide content-slide ${currentSlide === 3 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Section 01</div>
          <h2 className="slide-title">POCKET<br />XITE</h2>
          <p className="slide-desc">Role-Based UX</p>
          <p style={{ fontSize: '12px', color: 'var(--text-gray)', marginTop: '8px' }}>
            발주처/안전관리자/작업자별 맞춤 화면
          </p>
          <div style={{ marginTop: '20px' }}>
            <CircularProgress value={roleData[activeRole] ? 85 : 0} size={90} color={roleData[activeRole]?.color} />
            <div style={{ fontSize: '10px', color: 'var(--text-gray)', marginTop: '8px', textAlign: 'center' }}>사용자 만족도</div>
          </div>
        </div>
        <div className="slide-right">
          <div className="role-tabs">
            {Object.entries(roleData).map(([key, data]) => (
              <button
                key={key}
                className={`role-tab ${activeRole === key ? 'active' : ''}`}
                onClick={() => setActiveRole(key)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                <span style={{ fontSize: '18px' }}>{data.icon}</span>
                {data.name}
              </button>
            ))}
          </div>
          <div className="dashboard-grid" style={{ marginBottom: '20px' }}>
            {roleData[activeRole].widgets.map((widget, i) => (
              <div 
                key={i} 
                className="widget-box"
                style={{
                  borderColor: activeRole === 'owner' && i === 2 ? 'var(--accent-coral)' : 'var(--border-light)',
                  background: activeRole === 'owner' && i === 2 ? '#FFF5F5' : 'var(--bg-white)',
                  transform: `translateY(${currentSlide === 3 ? '0' : '20px'})`,
                  opacity: currentSlide === 3 ? 1 : 0,
                  transition: `all 0.4s ease ${i * 0.1}s`
                }}
              >
                <div className="widget-title">Widget {i + 1}</div>
                <div className="widget-value">{widget}</div>
                <div style={{ marginTop: '8px' }}>
                  <AnimatedProgressBar value={85 - i * 10} color={roleData[activeRole].color} delay={i * 150} />
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-gray)' }}>위젯: 공정/예산, 승인 대기, Gantt Chart</div>
            <button style={{ 
              padding: '10px 20px', 
              background: 'var(--accent-mint)', 
              color: 'white', 
              border: 'none', 
              borderRadius: '24px',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              🔄 Role Simulation
            </button>
          </div>
        </div>
      </section>

      {/* SLIDE 4: SECTION 2 - CDE ➔ SST CONNECTION (Core Logic) */}
      <section className={`slide content-slide ${currentSlide === 4 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">Section 02</div>
          <h2 className="slide-title">CDE<br />FLOW</h2>
          <p className="slide-desc">CDE ➔ SST CONNECTION</p>
          <p style={{ fontSize: '15px', color: 'var(--text-gray)', marginTop: '12px' }}>
            Core Logic - 데이터의 흐름
          </p>
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { icon: '📝', label: 'WIP', desc: '작업 중' },
              { icon: '🔍', label: '검토', desc: '리뷰' },
              { icon: '📤', label: 'SHARED', desc: '공유됨' },
              { icon: '✅', label: 'PUBLISHED', desc: '승인됨' },
              { icon: '🗄️', label: 'ARCHIVE', desc: '아카이브' }
            ].map((item, i) => (
              <div key={i} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                padding: '12px 16px',
                background: 'rgba(255,255,255,0.7)',
                borderRadius: '10px',
                fontSize: '14px'
              }}>
                <span style={{ fontSize: '18px' }}>{item.icon}</span>
                <strong>{item.label}</strong>
                <span style={{ color: 'var(--text-gray)' }}>- {item.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="slide-right">
          <FlowDiagram 
            steps={[
              { icon: '📝', label: 'WIP' },
              { icon: '🔍', label: '검토' },
              { icon: '📤', label: 'SHARED' },
              { icon: '✅', label: '승인' },
              { icon: '📋', label: 'PUBLISHED' },
              { icon: '🗄️', label: 'ARCHIVE' }
            ]}
            activeIndex={5}
          />
          <div style={{ marginTop: '24px', fontSize: '15px', fontWeight: 600, marginBottom: '14px', color: 'var(--text-black)' }}>Interactive Kanban</div>
          <p style={{ fontSize: '14px', color: 'var(--text-gray)', marginBottom: '14px' }}>Trello처럼 카드를 드래그 앤 드롭하여 상태 변경</p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(5, 1fr)', 
            gap: '10px',
            padding: '14px',
            background: 'var(--bg-light)',
            borderRadius: '14px'
          }}>
            {kanbanData.map((col, i) => (
              <div key={i} style={{ 
                background: 'white', 
                borderRadius: '10px', 
                padding: '12px', 
                minHeight: '100px',
                border: i === 4 ? '2px solid #6366F1' : i === 3 ? '2px solid var(--accent-mint)' : '1px solid var(--border-light)'
              }}>
                <div style={{ 
                  fontSize: '12px', 
                  fontWeight: 600, 
                  color: i === 3 ? 'var(--accent-mint)' : 'var(--text-gray)', 
                  marginBottom: '10px', 
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  {i === 3 && <span>✨</span>}
                  {col.col}
                </div>
                {col.cards.map((card, j) => (
                  <div 
                    key={j} 
                    style={{ 
                      padding: '10px', 
                      background: i === 3 ? 'var(--accent-mint)' : col.color,
                      color: i === 3 ? 'white' : 'var(--text-black)',
                      borderRadius: '8px', 
                      marginBottom: '8px', 
                      fontSize: '12px',
                      cursor: 'grab',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02)'
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    {card}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 5: SECTION 3 - PROJECT LIFECYCLE (Overview) */}
      <section className={`slide content-slide ${currentSlide === 5 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Section 03</div>
          <h2 className="slide-title">LIFE<br />CYCLE</h2>
          <p className="slide-desc">PROJECT LIFECYCLE</p>
          <p style={{ fontSize: '12px', color: 'var(--text-gray)', marginTop: '8px' }}>
            Overview - 3단 구성
          </p>
        </div>
        <div className="slide-right">
          <div className="team-grid" style={{ marginBottom: '24px' }}>
            {[
              { icon: '📐', label: 'PRE-CON', desc: '설계 단계', value: 100, color: 'var(--accent-mint)' },
              { icon: '🏗️', label: 'CONSTRUCTION', desc: '현장 관리', value: 75, color: '#00A88A' },
              { icon: '🔧', label: 'OPERATION', desc: '유지보수', value: 50, color: '#E8F8F5' }
            ].map((item, i) => (
              <div 
                key={i} 
                className="team-member"
                style={{
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: '20px',
                  background: 'var(--bg-white)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '16px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.borderColor = 'var(--accent-mint)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--border-light)'
                }}
              >
                <div className="team-avatar" style={{ background: `${item.color}30`, fontSize: '32px' }}>{item.icon}</div>
                <div className="team-name">{item.label}</div>
                <div className="team-role">{item.desc}</div>
                <div style={{ marginTop: '12px' }}>
                  <AnimatedProgressBar value={item.value} color={item.color} delay={i * 200} />
                </div>
              </div>
            ))}
          </div>
          <div className="highlight-box">
            <strong>📌 라이프사이클:</strong> 설계(PRE-CON) → 시공(CONSTRUCTION) → 운영(OPERATION & PLM)
          </div>
        </div>
      </section>

      {/* SLIDE 6: SECTION 4 - VIRTUAL SIMULATION (Magic Slider) */}
      <section className={`slide content-slide ${currentSlide === 6 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">Section 04</div>
          <h2 className="slide-title">MAGIC<br />SLIDER</h2>
          <p className="slide-desc">VIRTUAL SIMULATION</p>
          <p style={{ fontSize: '12px', color: 'var(--text-gray)', marginTop: '8px' }}>
            Technology Depth - 2D/3D 비교
          </p>
          <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '4px' }}>📋</div>
              <div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>2D 도면</div>
            </div>
            <div style={{ fontSize: '24px', color: 'var(--accent-mint)' }}>⟷</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '4px' }}>🏢</div>
              <div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>3D BIM</div>
            </div>
          </div>
        </div>
        <div className="slide-right">
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>Magic Slider Interface</div>
          <p style={{ fontSize: '12px', color: 'var(--text-gray)', marginBottom: '12px' }}>2D 도면과 3D BIM 모델을 슬라이더로 교차 비교</p>
          <div className="slider-mock" style={{ marginBottom: '16px' }}>
            <span className="slider-label-left">2D</span>
            <div className="slider-track" style={{ position: 'relative' }}>
              <div className="slider-fill" style={{ width: `${sliderValue}%` }} />
              <input
                type="range"
                className="slider-input"
                min="0"
                max="100"
                value={sliderValue}
                onChange={(e) => setSliderValue(e.target.value)}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              />
            </div>
            <span className="slider-label-right">3D</span>
          </div>
          <div style={{ 
            height: '160px', 
            borderRadius: '12px',
            display: 'flex',
            overflow: 'hidden',
            marginBottom: '16px',
            position: 'relative',
            border: '1px solid var(--border-light)'
          }}>
            <div style={{ 
              width: `${sliderValue}%`, 
              background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'width 0.1s ease',
              borderRight: '3px solid var(--accent-mint)'
            }}>
              <span style={{ fontSize: '48px', opacity: 0.7 }}>📋</span>
            </div>
            <div style={{ 
              flex: 1, 
              background: 'linear-gradient(135deg, var(--bg-mint) 0%, rgba(59, 130, 246, 0.3) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ fontSize: '48px' }}>🏢</span>
            </div>
            <div style={{
              position: 'absolute',
              left: `${sliderValue}%`,
              top: 0,
              bottom: 0,
              width: '3px',
              background: 'var(--accent-mint)',
              transform: 'translateX(-50%)',
              cursor: 'ew-resize'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '24px',
                height: '24px',
                background: 'var(--accent-mint)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '12px',
                boxShadow: '0 2px 8px rgba(59, 130, 246, 0.4)'
              }}>⟷</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <div className="glass-card neon-glow-hover" style={{ flex: 1, padding: '12px' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '4px' }}>승인 신호등</div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ fontSize: '20px', filter: 'drop-shadow(0 0 4px #FF6B6B)' }}>🔴</span>
                <span style={{ fontSize: '20px', filter: 'drop-shadow(0 0 4px #FFB347)' }}>🟡</span>
                <span style={{ fontSize: '20px', filter: 'drop-shadow(0 0 4px #3B82F6)' }}>🔵</span>
              </div>
            </div>
            <div className="glass-card neon-glow-hover" style={{ flex: 1, padding: '12px' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '4px' }}>버전 히스토리</div>
              <div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>v1.0 → v2.0 → v3.0 ✓</div>
              <Timeline 
                items={[
                  { period: 'v1.0', title: '초기', desc: '', active: false },
                  { period: 'v3.0', title: '현재', desc: '', active: true }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 7: SECTION 5 - INTEGRATED DASHBOARD */}
      <section className={`slide content-slide ${currentSlide === 7 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Section 05</div>
          <h2 className="slide-title">DASH<br />BOARD</h2>
          <p className="slide-desc">INTEGRATED DASHBOARD</p>
          <p style={{ fontSize: '12px', color: 'var(--text-gray)', marginTop: '8px' }}>
            Big Picture - 통합 대시보드
          </p>
          {/* Live Data Indicator */}
          <div style={{ marginTop: '16px', padding: '12px', background: 'var(--bg-light)', borderRadius: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{
                width: '8px', height: '8px',
                background: '#3B82F6',
                borderRadius: '50%',
                animation: 'pulse 1.5s ease-in-out infinite'
              }} />
              <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--accent-mint)' }}>LIVE</span>
            </div>
            <div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>실시간 모니터링 중</div>
          </div>
        </div>
        <div className="slide-right">
          <div className="dashboard-grid" style={{ marginBottom: '20px' }}>
            {[
              { title: 'IoT 센서 현황', icon: '📡', items: [
                { label: '🌡️ 온도', value: '24°C', status: 'normal' },
                { label: '💧 습도', value: '65%', status: 'normal' },
                { label: '📊 진동', value: '정상', status: 'normal' }
              ]},
              { title: '도면 정합성', icon: '📐', items: [
                { label: '✅ 정합 완료', value: '127', status: 'good' },
                { label: '⚠️ 검토 필요', value: '3', status: 'warn' },
                { label: '❌ 오류', value: '1', status: 'error' }
              ]},
              { title: 'API 연동', icon: '🔗', items: [
                { label: '▶ 상태', value: '실시간', status: 'normal' },
                { label: '📊 Last sync', value: '2min', status: 'normal' }
              ]}
            ].map((widget, i) => (
              <div 
                key={i} 
                className="widget-box"
                style={{
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = 'var(--accent-mint)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--border-light)'
                }}
              >
                <div className="widget-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>{widget.icon}</span>
                  {widget.title}
                </div>
                <div style={{ marginTop: '8px' }}>
                  {widget.items.map((item, j) => (
                    <div key={j} style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      fontSize: '11px', 
                      marginBottom: '4px',
                      color: item.status === 'error' ? 'var(--accent-coral)' : item.status === 'warn' ? '#FFB347' : 'var(--text-gray)'
                    }}>
                      <span>{item.label}</span>
                      <strong style={{ color: item.status === 'good' ? 'var(--accent-mint)' : 'inherit' }}>{item.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="highlight-box">
            <strong>🎯 구현 목표:</strong> IoT 센서, 도면 정합성, API 연동 데이터를 한눈에 파악 가능한 대시보드
          </div>
        </div>
      </section>

      {/* SLIDE 8: OUTRO & CTA */}
      <section className={`slide content-slide ${currentSlide === 8 ? 'active' : ''}`} style={{ 
        background: 'white',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* 배경 장식 요소 */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            top: '-100px',
            right: '-100px'
          }} />
          <div style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.05) 0%, transparent 70%)',
            borderRadius: '50%',
            bottom: '-50px',
            left: '-50px'
          }} />
        </div>

        <div style={{ width: '100%', maxWidth: '600px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          {/* AI Voice Demo 카드 */}
          <div style={{
            background: 'var(--bg-light)',
            borderRadius: '16px',
            padding: '16px 24px',
            border: '1px solid var(--border-light)',
            marginBottom: '32px',
            display: 'inline-block'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '20px' }}>🎤</span>
              <span style={{ fontSize: '14px', color: 'var(--text-black)', fontWeight: 500 }}>AI Voice-to-Ticket Demo</span>
            </div>
            <button 
              style={{
                marginTop: '12px',
                padding: '10px 24px',
                background: 'var(--accent-mint)',
                border: 'none',
                borderRadius: '24px',
                color: 'white',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                margin: '12px auto 0',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <span>🎤</span> 음성 인식 시작
            </button>
          </div>

          {/* QR 코드 */}
          <div style={{
            width: '140px',
            height: '140px',
            background: 'white',
            borderRadius: '16px',
            margin: '0 auto 16px',
            padding: '12px',
            boxShadow: '0 8px 32px rgba(59, 130, 246, 0.15)',
            border: '2px solid var(--accent-mint)',
            position: 'relative'
          }}>
            {/* QR 패턴 시뮬레이션 */}
            <div style={{ 
              width: '100%', 
              height: '100%', 
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gridTemplateRows: 'repeat(7, 1fr)',
              gap: '2px'
            }}>
              {[1,1,1,0,1,1,1, 1,0,1,0,1,0,1, 1,1,1,0,1,1,1, 0,0,0,0,0,0,0, 1,1,0,1,0,1,1, 0,1,0,1,0,1,0, 1,1,1,0,1,1,1].map((v, i) => (
                <div 
                  key={i} 
                  style={{ 
                    background: v === 1 ? 'var(--text-black)' : 'white',
                    borderRadius: '2px'
                  }} 
                />
              ))}
            </div>
            {/* 중앙 로고 */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, var(--accent-mint), #00A88A)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ fontSize: '16px' }}>📱</span>
            </div>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-gray)', marginBottom: '32px' }}>QR 스캔으로 데모 체험</div>

          {/* 메인 텍스트 */}
          <h2 style={{ 
            fontSize: '32px', 
            fontWeight: 700, 
            color: 'var(--text-black)', 
            marginBottom: '8px',
            fontFamily: 'var(--font-title)'
          }}>
            지금 바로 체험하세요
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-gray)', marginBottom: '32px' }}>
            설치 없이 3초 만에 시작
          </p>

          {/* CTA 버튼들 */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button 
              style={{
                padding: '14px 32px',
                background: 'var(--accent-mint)',
                border: 'none',
                borderRadius: '28px',
                color: 'white',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(59, 130, 246, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.3)'
              }}
            >
              <span>✉️</span> 문의하기
            </button>
            <button 
              style={{
                padding: '14px 32px',
                background: 'transparent',
                border: '1px solid var(--border-light)',
                borderRadius: '28px',
                color: 'var(--text-black)',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-mint)'
                e.currentTarget.style.color = 'var(--accent-mint)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-light)'
                e.currentTarget.style.color = 'var(--text-black)'
              }}
            >
              <span>📥</span> 브로슈어
            </button>
          </div>
        </div>
      </section>

      {/* SLIDE 9: 최종 정리 및 Closing */}
      <section className={`slide closing-slide ${currentSlide === 9 ? 'active' : ''}`}>
        <h1 className="closing-title">THANKS.</h1>
        <p className="closing-subtitle">FOR WATCHING</p>
        
        {/* 발표 시나리오 핵심 멘트 */}
        <div style={{ maxWidth: '600px', textAlign: 'center', marginBottom: '24px' }}>
          <p style={{ fontSize: '14px', color: 'var(--text-gray)', fontStyle: 'italic', lineHeight: 1.7 }}>
            {currentSlide === 9 && <TypeWriter text='"시범 운용을 통해 가치를 검증하고, 단계별로 성과를 만들어 가겠습니다."' speed={35} delay={500} />}
          </p>
        </div>
        
        <div style={{ maxWidth: '700px', marginBottom: '28px' }}>
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-black)' }}>💡 최종 정리 및 의견 (추가 사항)</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
            {[
              { title: '시범 운용 우선', desc: '현재는 구상 단계입니다. 큰 리스크 없이 시범 운용으로 시작하여 데이터 기반 검증을 거치겠습니다.', icon: '🧪' },
              { title: '지속 가능한 체계', desc: '특정 담당자가 바뀌어도 문제없는, 누구나 활용할 수 있는 체계 구축이 핵심입니다.', icon: '🏗️' },
              { title: '단계별 성과 측정', desc: '추상적인 기대가 아닌, 측정 가능한 지표(외주비 절감, 제작 기간 등)로 가치를 증명하겠습니다.', icon: '📊' },
              { title: '협업 구조 제안', desc: '유관 부서 간 정기적 소통을 통해 효율적인 협업 체계를 만들어 가겠습니다.', icon: '🤝' }
            ].map((item, i) => (
              <div 
                key={i} 
                style={{ 
                  padding: '14px', 
                  background: 'var(--bg-light)', 
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '1px solid var(--border-light)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg-mint)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.borderColor = 'var(--accent-mint)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-light)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--border-light)'
                }}
              >
                <div style={{ fontSize: '20px', marginBottom: '8px' }}>{item.icon}</div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-black)', marginBottom: '4px' }}>{item.title}</div>
                <div style={{ fontSize: '10px', color: 'var(--text-gray)', lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '28px' }}>
          <IsometricCube size={35} color="var(--accent-mint)" delay={500} />
          <IsometricCube size={45} color="#00A88A" delay={700} />
          <IsometricCube size={35} color="var(--accent-mint)" delay={900} />
        </div>
        <div className="contact-grid">
          <div className="contact-item">
            <div className="contact-label">Website</div>
            <div className="contact-value">www.taesung.kr</div>
          </div>
          <div className="contact-item">
            <div className="contact-label">Email</div>
            <div className="contact-value">jiukim@tssni.com</div>
          </div>
          <div className="contact-item">
            <div className="contact-label">Phone</div>
            <div className="contact-value">010-2127-0727</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tab3

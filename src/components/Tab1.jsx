import { useEffect, useRef, useState } from 'react'
import { AnimatedCounter, TypeWriter, AnimatedProgressBar, CircularProgress, Timeline, FlowDiagram, AnimatedBarChart, IsometricCube } from './Charts'

function Tab1({ currentSlide, onSlideChange }) {
  const containerRef = useRef(null)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [guideTab, setGuideTab] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e) => {
      e.preventDefault()
      if (e.deltaY > 0) onSlideChange(Math.min(currentSlide + 1, 13))
      else onSlideChange(Math.max(currentSlide - 1, 0))
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [currentSlide, onSlideChange])

  return (
    <div ref={containerRef} className="slides-container">
      {/* SLIDE 0: 핵심 요약 */}
      <section className={`slide content-slide ${currentSlide === 0 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">Overview</div>
          <h2 className="slide-title">Strategy<br />정리</h2>
          <p className="slide-desc">이 탭에서 다루는 내용</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>
            "Tech Communicator가 무엇이고, 어떤 가치를 제공하는지"
          </p>
        </div>
        <div className="slide-right">
          <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-black)' }}>📋 핵심 메시지</div>
          <div style={{ 
            padding: '20px', 
            background: 'linear-gradient(135deg, var(--bg-mint) 0%, var(--bg-light) 100%)', 
            borderRadius: '16px',
            marginBottom: '20px',
            border: '2px solid var(--accent-mint)'
          }}>
            <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--accent-mint)', marginBottom: '8px' }}>
              "기술을 시장의 언어로 번역하는 역할"
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-gray)', lineHeight: 1.6 }}>
              어려운 BIM/스마트건설 기술을 고객이 이해하고 구매할 수 있는 형태로 전환
            </div>
          </div>
          <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>📑 슬라이드 구성</div>
          <div className="story-list">
            {[
              { num: '01-02', title: '추구 방향', desc: '회사 지향점에 맞춘 역할' },
              { num: '03-05', title: '가치 제안', desc: '기술→상품 전환, 외주비 절감, Lock-in' },
              { num: '06-09', title: '업무 실적', desc: '주요 프로젝트 포트폴리오, 기술 스택' },
              { num: '10-12', title: '전략 & 로드맵', desc: '콘텐츠/제안서/UX 전략, 실행 계획' }
            ].map((item, i) => (
              <div key={i} className="story-item" style={{ padding: '10px' }}>
                <span className="story-num" style={{ fontSize: '11px', color: 'var(--accent-mint)', minWidth: '50px' }}>{item.num}</span>
                <div className="story-content">
                  <div className="story-title" style={{ fontSize: '12px' }}>{item.title}</div>
                  <div className="story-desc" style={{ fontSize: '10px' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 1: 비전과 정의 */}
      <section className={`slide hero-slide ${currentSlide === 1 ? 'active' : ''}`}>
        <div className="hero-left">
          <div className="hero-label">
            <div className="hero-label-dot" />
            <span>Strategy Report</span>
          </div>
          <h1 className="hero-title">
            Tech<br />
            <span className="hero-title-italic">Communication</span>
          </h1>
          <p className="hero-subtitle">
            기술 가치 시각화 및 사업화 브릿지(Bridge) 전략
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-gray)', marginTop: '16px', fontStyle: 'italic', lineHeight: 1.6 }}>
            {currentSlide === 1 && <TypeWriter text='"어려운 공학적 언어를 고객의 시각적 언어로 번역하는 Tech Communication"' speed={30} delay={800} />}
          </p>
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '13px', opacity: currentSlide === 1 ? 1 : 0, transform: currentSlide === 1 ? 'translateX(0)' : 'translateX(-20px)', transition: 'all 0.5s ease 1.5s' }}>
              <strong style={{ color: 'var(--accent-mint)' }}>Who:</strong> <span style={{ color: 'var(--text-gray)' }}>디자이너의 눈 + 웹코더의 손 + 마케터의 머리</span>
            </div>
            <div style={{ fontSize: '13px', opacity: currentSlide === 1 ? 1 : 0, transform: currentSlide === 1 ? 'translateX(0)' : 'translateX(-20px)', transition: 'all 0.5s ease 1.8s' }}>
              <strong style={{ color: 'var(--accent-mint)' }}>Mission:</strong> <span style={{ color: 'var(--text-gray)' }}>전문성 높은 기술을 얼마나 쉽고 가치 있게 전환할 수 있는지 증명</span>
            </div>
          </div>
          {/* Design Concept Badge - Electric Blue Theme */}
          <div style={{ 
            marginTop: '20px', 
            padding: '12px 16px', 
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.05))',
            borderRadius: '12px',
            border: '1px solid rgba(0, 102, 255, 0.3)'
          }}>
            <div style={{ fontSize: '10px', fontWeight: 600, color: '#2563EB', marginBottom: '6px', letterSpacing: '1px' }}>🎨 CONCEPT: NEURAL BRIDGE</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['🔗 연결 노드', '✨ 홀로그램', '📊 인포그래픽', '🎬 모션'].map((tag, i) => (
                <span key={i} className="keyword-tag" style={{ fontSize: '9px', padding: '4px 8px', background: 'rgba(0, 102, 255, 0.1)', borderColor: 'rgba(0, 102, 255, 0.2)' }}>{tag}</span>
              ))}
            </div>
          </div>
          {/* 핵심 키워드 시각화 - MD 명세: 번역, 연결, 가치 전환 */}
          <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
            {[
              { icon: '🔄', label: '번역', eng: 'Translation', color: '#2563EB' },
              { icon: '🔗', label: '연결', eng: 'Connection', color: '#3B82F6' },
              { icon: '💎', label: '가치 전환', eng: 'Value Shift', color: '#2563EB' }
            ].map((kw, i) => (
              <div key={i} style={{
                flex: 1,
                padding: '10px 8px',
                background: `${kw.color}10`,
                borderRadius: '8px',
                textAlign: 'center',
                border: `1px solid ${kw.color}30`,
                transform: currentSlide === 1 ? 'translateY(0)' : 'translateY(10px)',
                opacity: currentSlide === 1 ? 1 : 0,
                transition: `all 0.4s ease ${2 + i * 0.2}s`
              }}>
                <div style={{ fontSize: '18px', marginBottom: '4px' }}>{kw.icon}</div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: kw.color }}>{kw.label}</div>
                <div style={{ fontSize: '8px', color: 'var(--text-gray)' }}>{kw.eng}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-image-frame neon-glow-hover" style={{ 
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(37, 99, 235, 0.05))',
            border: '1px solid rgba(0, 102, 255, 0.2)'
          }}>
            <div style={{ display: 'flex', gap: '16px', perspective: '500px' }}>
              <IsometricCube size={50} color="#2563EB" delay={500} />
              <IsometricCube size={40} color="var(--accent-mint)" delay={700} />
              <IsometricCube size={30} color="#2563EB" delay={900} />
            </div>
            {/* Network Nodes - Electric Blue Theme */}
            {currentSlide === 1 && Array.from({ length: 12 }).map((_, i) => (
              <div 
                key={i}
                className="network-node"
                style={{
                  left: `${15 + Math.random() * 70}%`,
                  top: `${15 + Math.random() * 70}%`,
                  animationDelay: `${i * 0.3}s`,
                  width: `${4 + Math.random() * 6}px`,
                  height: `${4 + Math.random() * 6}px`,
                  background: i % 2 === 0 ? '#2563EB' : 'var(--accent-mint)'
                }}
              />
            ))}
            {/* Neural Connection Lines */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.3 }}>
              <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 4" className="flow-line" />
              <line x1="50%" y1="50%" x2="80%" y2="40%" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 4" className="flow-line" style={{ animationDelay: '0.5s' }} />
              <line x1="30%" y1="70%" x2="50%" y2="50%" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 4" className="flow-line" style={{ animationDelay: '1s' }} />
            </svg>
          </div>
        </div>
      </section>

      {/* SLIDE 2: 추구 방향 - 회사 지향점에 맞춘 역할 */}
      <section className={`slide content-slide ${currentSlide === 2 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">Direction</div>
          <h2 className="slide-title">추구<br />방향</h2>
          <p className="slide-desc">회사의 기술 사업화 목표에 맞춰</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>
            "기술과 시장 사이의 간극을 줄이는 데 기여하고자 합니다."
          </p>
          
        </div>
        <div className="slide-right">
          <div className="story-list">
            {[
              { num: '01.', title: '기술 시각화', desc: '복잡한 공학 기술을 발주처가 이해할 수 있는 형태로 정리하여 제안서와 플랫폼의 설득력을 높이는 데 활용', icon: '🔄' },
              { num: '02.', title: 'UI/UX 설계', desc: '플랫폼의 복잡한 데이터를 사용자가 쉽게 활용할 수 있도록 인터페이스 구조화', icon: '🎨' },
              { num: '03.', title: '퍼블리싱', desc: '디자인이 실제 화면에서 작동하도록 HTML/CSS/JS 구현을 담당', icon: '💻' },
              { num: '04.', title: '콘텐츠 제작', desc: '기술 홍보 영상, 제안서 시각 자료 등 회사의 대외 커뮤니케이션 자료 지원', icon: '📈' }
            ].map((item, i) => (
              <div 
                key={i} 
                className="story-item"
                onMouseEnter={() => setHoveredCard(`who-${i}`)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === `who-${i}` ? 'translateX(8px) scale(1.02)' : 'translateX(0) scale(1)',
                  borderColor: hoveredCard === `who-${i}` ? 'var(--accent-mint)' : 'var(--border-light)',
                  boxShadow: hoveredCard === `who-${i}` ? '0 8px 30px rgba(59, 130, 246, 0.15)' : 'none'
                }}
              >
                <span className="story-num" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '20px' }}>{item.icon}</span>
                  {item.num}
                </span>
                <div className="story-content">
                  <div className="story-title">{item.title}</div>
                  <div className="story-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="highlight-box" style={{ marginTop: '16px' }}>
            <strong>💎 기여 목표:</strong> 연구 단계의 기술이 시장에서 선택받을 수 있도록 시각적 완성도 향상에 기여
          </div>
        </div>
      </section>

      {/* SLIDE 3: Performance - 주요 업무 성과 정리 */}
      <section className={`slide content-slide ${currentSlide === 3 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Portfolio</div>
          <h2 className="slide-title">PERFOR<br />MANCE</h2>
          <p className="slide-desc">주요 업무 성과 정리</p>
          <p style={{ fontSize: '12px', color: 'var(--text-gray)', marginTop: '8px' }}>디자인 및 퍼블리싱 기반의 실전 프로젝트 수행 이력</p>
          
          {/* 6개 프로젝트 카드 - 2x3 그리드 */}
          <div style={{ 
            marginTop: '16px', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '10px' 
          }}>
            {[
              { category: '핵심 플랫폼', icon: '🖥️', title: 'CDE 2, 3, 4 디자인 리뉴얼', desc: '전체 UI/UX 리뉴얼 및 반응형 퍼블리싱 총괄', color: '#3B82F6' },
              { category: '실감형 기술', icon: '👓', title: '아라가와 AR UI & 3D 캐릭터', desc: 'AR 인터페이스 설계 및 3D 캐릭터 커스텀', color: '#6366F1' },
              { category: '국책/연구과제', icon: '📐', title: '해수담수화 / KICT 교량유지관리', desc: '제안서 인터페이스 디자인 및 시스템 퍼블리싱', color: '#5EEAD4' },
              { category: '철도/인프라', icon: '🚃', title: '철도 SFR 및 연구소 협업', desc: '데이터 시각화, 유니티 기반 UI/디자인 협업', color: '#2563EB' },
              { category: '서비스/콘텐츠', icon: '🎬', title: 'SSOC / 정수과제', desc: '동영상 페이지 추가 UI 및 기술 홍보 영상 제작', color: '#F97316' },
              { category: '기획/디자인', icon: '📋', title: 'GTX 프로젝트', desc: '기획 일부 참여 및 전체 디자인/퍼블리싱 수행', color: '#00A88A' }
            ].map((project, i) => (
              <div 
                key={i}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '12px',
                  border: '1px solid var(--border-light)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  opacity: currentSlide === 3 ? 1 : 0,
                  transform: currentSlide === 3 ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${i * 0.08}s`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.borderColor = project.color
                  e.currentTarget.style.boxShadow = `0 6px 20px ${project.color}20`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--border-light)'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                  <div style={{ 
                    width: '28px', 
                    height: '28px', 
                    borderRadius: '6px', 
                    background: `${project.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px'
                  }}>
                    {project.icon}
                  </div>
                  <span style={{ fontSize: '9px', color: project.color, fontWeight: 600 }}>{project.category}</span>
                </div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-black)', marginBottom: '4px', lineHeight: 1.3 }}>{project.title}</div>
                <div style={{ fontSize: '9px', color: 'var(--text-gray)', lineHeight: 1.4 }}>{project.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="slide-right">
          {/* 도넛 차트 - 프로젝트 분포 */}
          <div style={{
            background: 'var(--bg-light)',
            borderRadius: '24px',
            padding: '24px',
            border: '1px solid var(--border-light)',
            marginBottom: '16px'
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-black)', textAlign: 'center', marginBottom: '20px' }}>프로젝트 분포</div>
            
            {/* SVG 도넛 차트 */}
            <div style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto' }}>
              <svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                {/* 핵심 플랫폼 - 민트 */}
                <circle cx="50" cy="50" r="35" fill="none" stroke="#3B82F6" strokeWidth="12"
                  strokeDasharray={`${25 * 2.2} ${100 * 2.2}`} strokeDashoffset="0"
                  style={{ transition: 'stroke-dasharray 1s ease' }} />
                {/* 실감형 기술 - 퍼플 */}
                <circle cx="50" cy="50" r="35" fill="none" stroke="#6366F1" strokeWidth="12"
                  strokeDasharray={`${18 * 2.2} ${100 * 2.2}`} strokeDashoffset={`${-25 * 2.2}`}
                  style={{ transition: 'stroke-dasharray 1s ease' }} />
                {/* 철도/인프라 - 블루 */}
                <circle cx="50" cy="50" r="35" fill="none" stroke="#2563EB" strokeWidth="12"
                  strokeDasharray={`${18 * 2.2} ${100 * 2.2}`} strokeDashoffset={`${-43 * 2.2}`}
                  style={{ transition: 'stroke-dasharray 1s ease' }} />
                {/* 서비스/콘텐츠 - 오렌지 */}
                <circle cx="50" cy="50" r="35" fill="none" stroke="#F97316" strokeWidth="12"
                  strokeDasharray={`${14 * 2.2} ${100 * 2.2}`} strokeDashoffset={`${-61 * 2.2}`}
                  style={{ transition: 'stroke-dasharray 1s ease' }} />
                {/* 기획/디자인 - 시안 */}
                <circle cx="50" cy="50" r="35" fill="none" stroke="#00A88A" strokeWidth="12"
                  strokeDasharray={`${13 * 2.2} ${100 * 2.2}`} strokeDashoffset={`${-75 * 2.2}`}
                  style={{ transition: 'stroke-dasharray 1s ease' }} />
                {/* 국책/연구 - 라이트민트 */}
                <circle cx="50" cy="50" r="35" fill="none" stroke="#5EEAD4" strokeWidth="12"
                  strokeDasharray={`${12 * 2.2} ${100 * 2.2}`} strokeDashoffset={`${-88 * 2.2}`}
                  style={{ transition: 'stroke-dasharray 1s ease' }} />
              </svg>
              {/* 중앙 텍스트 */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-black)' }}>100%</div>
              </div>
            </div>

            {/* 범례 - 2열 그리드 */}
            <div style={{ 
              marginTop: '20px', 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '6px 12px'
            }}>
              {[
                { color: '#3B82F6', label: '핵심 플랫폼' },
                { color: '#6366F1', label: '실감형 기술' },
                { color: '#5EEAD4', label: '국책/연구과제' },
                { color: '#2563EB', label: '철도/인프라' },
                { color: '#F97316', label: '서비스/콘텐츠' },
                { color: '#00A88A', label: '기획/디자인' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '50%', 
                    background: item.color 
                  }} />
                  <span style={{ fontSize: '10px', color: 'var(--text-gray)' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 기존 테이블 - 전체 프로젝트 상세 */}
          <table className="data-table" style={{ fontSize: '10px' }}>
            <thead>
              <tr>
                <th style={{ padding: '8px 6px' }}>구분</th>
                <th style={{ padding: '8px 6px' }}>프로젝트명</th>
                <th style={{ padding: '8px 6px' }}>주요 업무</th>
              </tr>
            </thead>
            <tbody>
              {[
                { cat: '핵심 플랫폼', name: 'CDE 2, 3, 4 리뉴얼', work: 'UI/UX 리뉴얼 및 반응형 퍼블리싱' },
                { cat: '실감형 기술', name: '아라가와 AR UI', work: 'AR 인터페이스 및 3D 캐릭터' },
                { cat: '국책/연구', name: '해수담수화 / KICT', work: '제안서 디자인 및 퍼블리싱' },
                { cat: '철도/인프라', name: '철도 SFR', work: '데이터 시각화, 유니티 UI' },
                { cat: '서비스/콘텐츠', name: 'SSOC / 정수과제', work: 'UI 및 홍보 영상 제작' },
                { cat: '기획/디자인', name: 'GTX 프로젝트', work: '기획 참여 및 전체 퍼블리싱' }
              ].map((row, i) => (
                <tr key={i} style={{ opacity: currentSlide === 3 ? 1 : 0, transform: currentSlide === 3 ? 'translateX(0)' : 'translateX(20px)', transition: `all 0.4s ease ${i * 0.05 + 0.3}s` }}>
                  <td style={{ padding: '6px', fontSize: '9px' }}><strong>{row.cat}</strong></td>
                  <td style={{ padding: '6px', fontSize: '9px' }}>{row.name}</td>
                  <td style={{ padding: '6px', fontSize: '9px' }}>{row.work}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SLIDE 4: Tech Stack + UI/UX Value 통합 */}
      <section className={`slide content-slide ${currentSlide === 4 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">Skills & Value</div>
          <h2 className="slide-title">TECH<br />STACK</h2>
          <p className="slide-desc">전문성 및 UI/UX 엔지니어 가치</p>
          <p style={{ fontSize: '14px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>
            "연구과제가 '논문'이 아닌 '제품'으로 발전하도록 지원"
          </p>
          
          {/* Design & 3D + Development Tools */}
          <div style={{ marginTop: '20px' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '10px', color: 'var(--text-black)' }}>🎨 Design & 3D</div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '16px' }}>
              {[
                { name: 'PSD', icon: '🖼️' },
                { name: 'Illustrator', icon: '✏️' },
                { name: 'Figma', icon: '🎯' },
                { name: 'Blender', icon: '🧊' },
                { name: 'After Effects', icon: '🎬' }
              ].map((tool, i) => (
                <div key={i} className="keyword-tag neon-glow-hover" style={{
                  padding: '8px 14px',
                  fontSize: '13px',
                  transform: currentSlide === 4 ? 'scale(1)' : 'scale(0)',
                  transition: `transform 0.3s ease ${i * 0.08}s`
                }}>
                  <span className="icon-glow">{tool.icon}</span> {tool.name}
                </div>
              ))}
            </div>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '10px', color: 'var(--text-black)' }}>💻 Development</div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <span className="keyword-tag" style={{ padding: '8px 14px', fontSize: '13px' }}>HTML/CSS/JS</span>
              <span className="keyword-tag" style={{ padding: '8px 14px', fontSize: '13px' }}>반응형 퍼블리싱</span>
            </div>
          </div>

          {/* 핵심 가치 - Strategy 4에서 이동 */}
          <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { num: '01', title: '엔지니어링 마인드', desc: '기술팀 로직 → 조작 가능한 인터페이스', icon: '🛠️' },
              { num: '02', title: '사업화 브릿지', desc: '연구 → 상용화 수준 UX', icon: '🌉' },
              { num: '03', title: '차별화 포인트', desc: '기술 "언어" → "경험" 치환', icon: '✨' }
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 16px',
                background: 'rgba(255,255,255,0.9)',
                borderRadius: '12px',
                fontSize: '14px',
                transform: currentSlide === 4 ? 'translateX(0)' : 'translateX(-20px)',
                opacity: currentSlide === 4 ? 1 : 0,
                transition: `all 0.4s ease ${0.4 + i * 0.1}s`
              }}>
                <span style={{ fontSize: '20px' }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-black)', fontSize: '15px' }}>{item.title}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '2px' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="slide-right">
          {/* 🎯 Design to Code Pipeline - 5단계 워크플로우 */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>🚀 Design to Code Pipeline</div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              padding: '16px',
              background: 'linear-gradient(135deg, var(--bg-light) 0%, var(--bg-mint) 100%)',
              borderRadius: '16px',
              overflowX: 'auto'
            }}>
              {[
                { step: '01', title: 'Wireframe', color: 'var(--accent-mint)', 
                  svg: <svg width="32" height="32" viewBox="0 0 28 28"><rect x="2" y="2" width="24" height="6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" /><rect x="2" y="10" width="10" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" /><rect x="14" y="10" width="12" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" /></svg> },
                { step: '02', title: 'AI 이미지', color: '#6366F1',
                  svg: <svg width="32" height="32" viewBox="0 0 28 28"><circle cx="14" cy="14" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="14" cy="14" r="3" fill="currentColor" opacity="0.4" /><path d="M14 2v4 M14 22v4 M2 14h4 M22 14h4" stroke="currentColor" strokeWidth="1.5" /></svg> },
                { step: '03', title: 'UI Design', color: '#F97316',
                  svg: <svg width="32" height="32" viewBox="0 0 28 28"><rect x="4" y="4" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="10" cy="10" r="2" fill="currentColor" /><rect x="8" y="16" width="12" height="2" rx="1" fill="currentColor" opacity="0.5" /></svg> },
                { step: '04', title: 'Web Code', color: 'var(--accent-mint)',
                  svg: <svg width="32" height="32" viewBox="0 0 28 28"><path d="M8 10L3 14L8 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M20 10L25 14L20 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><line x1="17" y1="6" x2="11" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg> },
                { step: '05', title: 'Interaction', color: '#2563EB',
                  svg: <svg width="32" height="32" viewBox="0 0 28 28"><circle cx="14" cy="14" r="5" fill="none" stroke="currentColor" strokeWidth="1.5"><animate attributeName="r" values="5;8;5" dur="1.5s" repeatCount="indefinite" /></circle><circle cx="14" cy="14" r="2" fill="currentColor" /></svg> }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div 
                    style={{
                      padding: '12px',
                      background: 'white',
                      borderRadius: '12px',
                      border: `2px solid ${item.color}`,
                      textAlign: 'center',
                      minWidth: '80px',
                      transform: currentSlide === 4 ? 'scale(1)' : 'scale(0.8)',
                      opacity: currentSlide === 4 ? 1 : 0,
                      transition: `all 0.4s ease ${i * 0.08}s`,
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'
                      e.currentTarget.style.boxShadow = `0 4px 12px ${item.color}30`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div style={{ color: item.color, marginBottom: '6px', display: 'flex', justifyContent: 'center' }}>{item.svg}</div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: item.color }}>{item.title}</div>
                  </div>
                  {i < 4 && <span style={{ color: 'var(--accent-mint)', fontSize: '16px', fontWeight: 700 }}>→</span>}
                </div>
              ))}
            </div>
          </div>

          {/* AI-Native Workflow */}
          <div style={{ marginBottom: '14px', fontSize: '15px', fontWeight: 600, color: 'var(--text-black)' }}>🤖 AI-Native Workflow</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '16px' }}>
            {[
              { icon: '🤖', name: 'Gemini', use: '코드 최적화' },
              { icon: '✨', name: 'Cursor', use: '문서 구조화' },
              { icon: '🎨', name: 'Midjourney', use: '이미지 생성' },
              { icon: '🍌', name: 'Nano', use: '고퀄리티' }
            ].map((tool, i) => (
              <div key={i} style={{
                padding: '14px 10px',
                background: 'var(--bg-light)',
                borderRadius: '12px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span style={{ fontSize: '24px' }}>{tool.icon}</span>
                <div style={{ fontSize: '13px', fontWeight: 600, marginTop: '6px' }}>{tool.name}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-gray)', marginTop: '2px' }}>{tool.use}</div>
              </div>
            ))}
          </div>
          
          <div className="highlight-box" style={{ padding: '16px 20px', fontSize: '14px' }}>
            <strong>✅ 기대:</strong> AI 활용으로 제작 리소스 절감 및 비주얼 퀄리티 향상 가능성 탐색
          </div>
        </div>
      </section>

      {/* SLIDE 5: 융복합의 가치 */}
      <section className={`slide content-slide ${currentSlide === 5 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">Value 01</div>
          <h2 className="slide-title">통합<br />역량</h2>
          <p className="slide-desc">디자인 + 코딩 + 마케팅</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>
            "분리가 아닌 통합에서 효율이 나온다"
          </p>
          <div style={{ marginTop: '24px', padding: '18px', background: 'rgba(255,255,255,0.9)', borderRadius: '14px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-gray)', marginBottom: '6px' }}>웹디자인</div>
                <div style={{ fontSize: '20px', marginBottom: '4px' }}>🎨</div>
                <div style={{ fontSize: '10px' }}>어떻게 보여줄까?</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-gray)', marginBottom: '6px' }}>웹개발</div>
                <div style={{ fontSize: '20px', marginBottom: '4px' }}>💻</div>
                <div style={{ fontSize: '10px' }}>어떻게 작동할까?</div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-right">
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>통합 역량의 효율성</div>
          <table className="data-table" style={{ fontSize: '11px', marginBottom: '16px' }}>
            <thead>
              <tr>
                <th>비교 항목</th>
                <th>분리 운영</th>
                <th style={{ color: 'var(--accent-mint)' }}>통합 운영</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>소통 비용</td>
                <td>다수 경로</td>
                <td style={{ color: 'var(--accent-mint)', fontWeight: 600 }}>단일 창구</td>
              </tr>
              <tr>
                <td>재작업률</td>
                <td>높음</td>
                <td style={{ color: 'var(--accent-mint)', fontWeight: 600 }}>낮음 (예상)</td>
              </tr>
              <tr>
                <td>속도</td>
                <td>조율 필요</td>
                <td style={{ color: 'var(--accent-mint)', fontWeight: 600 }}>즉시 반영</td>
              </tr>
            </tbody>
          </table>
          <div className="highlight-box" style={{ fontSize: '12px' }}>
            <strong>💡 핵심:</strong> 디자인·개발·마케팅 관점을 한 사람이 통합하면 커뮤니케이션 비용 절감
          </div>
        </div>
      </section>

      {/* SLIDE 6: UX/UI 구조 + 내부/외주 기준 */}
      <section className={`slide content-slide ${currentSlide === 6 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Value 02</div>
          <h2 className="slide-title">역할<br />구조</h2>
          <p className="slide-desc">내부 vs 외주 판단 기준</p>
          <div style={{ marginTop: '16px' }}>
            <FlowDiagram 
              steps={[
                { icon: '🔍', label: 'UX (Why)' },
                { icon: '🎯', label: '전략' },
                { icon: '🎨', label: 'UI (How)' }
              ]}
              activeIndex={1}
            />
          </div>
          <div style={{ marginTop: '16px', padding: '14px', background: 'var(--bg-light)', borderRadius: '12px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '8px' }}>Front-end vs Back-end</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--accent-mint)' }}>Front-end</div>
                <div style={{ color: 'var(--text-gray)' }}>사용자가 보는 것</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 600, color: '#2563EB' }}>Back-end</div>
                <div style={{ color: 'var(--text-gray)' }}>서버/DB 로직</div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-right">
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>내부/외주 업무 구분 제안</div>
          <table className="data-table" style={{ fontSize: '11px', marginBottom: '16px' }}>
            <thead>
              <tr>
                <th>업무 유형</th>
                <th>외주</th>
                <th style={{ color: 'var(--accent-mint)' }}>내부</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>단발성 홍보물</td>
                <td>○</td>
                <td></td>
              </tr>
              <tr>
                <td>지속적 제안서/PT</td>
                <td></td>
                <td style={{ color: 'var(--accent-mint)', fontWeight: 600 }}>○ (기술이해필요)</td>
              </tr>
              <tr>
                <td>플랫폼 UI/UX</td>
                <td></td>
                <td style={{ color: 'var(--accent-mint)', fontWeight: 600 }}>○ (연속성필요)</td>
              </tr>
              <tr>
                <td>급한 수정/대응</td>
                <td></td>
                <td style={{ color: 'var(--accent-mint)', fontWeight: 600 }}>○ (즉시대응)</td>
              </tr>
            </tbody>
          </table>
          <div className="highlight-box" style={{ fontSize: '12px' }}>
            <strong>🎯 제안:</strong> 핵심 역량(플랫폼 UI, 제안서) → 내부 / 단발성·특화 → 외주
          </div>
        </div>
      </section>

      {/* SLIDE 7: Strategy 1 - 데이터 시각화 및 브랜드 프리미엄 */}
      <section className={`slide content-slide ${currentSlide === 7 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Strategy 01</div>
          <h2 className="slide-title">DATA<br />VISUAL</h2>
          <p className="slide-desc">데이터 시각화 및 브랜드 프리미엄</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>
            "토목 기술에 '스마트 테크 기업'의 가치를 입히다"
          </p>
          {/* 핵심 가치 지표 - 설득력/이해도/신뢰감/전환율 시각화 */}
          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            {[
              { label: '설득력', value: 92, icon: '🎯', color: '#2563EB', desc: '발주처 설득 시간 단축 (예상)' },
              { label: '이해도', value: 88, icon: '💡', color: 'var(--accent-mint)', desc: '비전문가 즉시 이해' },
              { label: '신뢰감', value: 95, icon: '🛡️', color: '#00A88A', desc: '브랜드 일관성 유지' },
              { label: '전환율', value: 78, icon: '📈', color: '#2563EB', desc: '수주 경쟁력 강화' }
            ].map((metric, i) => (
              <div 
                key={i}
                style={{
                  padding: '12px',
                  background: `${metric.color}08`,
                  borderRadius: '12px',
                  border: `1px solid ${metric.color}20`,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = `0 8px 24px ${metric.color}20`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ fontSize: '20px', marginBottom: '4px' }}>{metric.icon}</div>
                <div style={{ fontSize: '10px', fontWeight: 600, color: metric.color, marginBottom: '4px' }}>{metric.label}</div>
                <div style={{ position: 'relative', width: '48px', height: '48px', margin: '0 auto 6px' }}>
                  <svg width="48" height="48" style={{ transform: 'rotate(-90deg)' }}>
                    <circle cx="24" cy="24" r="20" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                    <circle 
                      cx="24" cy="24" r="20" fill="none" 
                      stroke={metric.color} strokeWidth="4"
                      strokeDasharray={`${metric.value * 1.26} 126`}
                      strokeLinecap="round"
                      style={{ transition: 'stroke-dasharray 1.5s ease' }}
                    />
                  </svg>
                  <div style={{ 
                    position: 'absolute', inset: 0, 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '11px', fontWeight: 700, color: metric.color
                  }}>{metric.value}%</div>
                </div>
                <div style={{ fontSize: '8px', color: 'var(--text-gray)', lineHeight: 1.3 }}>{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="slide-right">
          <div className="story-list">
            <div className="story-item" style={{ background: 'var(--bg-mint)', borderColor: 'var(--accent-mint)' }}>
              <span className="story-num">📊 01.</span>
              <div className="story-content">
                <div className="story-title">데이터의 시각적 영업</div>
                <div className="story-desc">텍스트 위주 기술 제안서를 인포그래픽/대시보드 형태로 시각화</div>
                <div style={{ marginTop: '8px' }}>
                  <AnimatedProgressBar value={90} color="var(--accent-mint)" delay={200} />
                  <div style={{ fontSize: '10px', color: 'var(--accent-mint)', marginTop: '4px', fontWeight: 600 }}>✅ 기대효과: 비전문가(발주처) 설득 시간 단축 및 수주 경쟁력 강화</div>
                </div>
              </div>
            </div>
            <div className="story-item">
              <span className="story-num">🏢 02.</span>
              <div className="story-content">
                <div className="story-title">브랜드 고급화 전략</div>
                <div className="story-desc">"단순 토목이 아닌 IT 기반 스마트 건설 기업" 인식 확립</div>
                <div style={{ marginTop: '8px', fontSize: '10px', color: 'var(--text-gray)' }}>
                  <strong style={{ color: 'var(--text-black)' }}>디테일:</strong> 다크 모드, 미래지향적 그래픽, 세리프 없는 깔끔한 폰트 활용
                </div>
                <div style={{ marginTop: '6px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {['🌙 다크 모드', '🚀 미래지향 그래픽', '✨ 클린 폰트'].map((tag, i) => (
                    <span key={i} style={{ padding: '4px 8px', background: 'var(--bg-light)', borderRadius: '12px', fontSize: '9px' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="story-item">
              <span className="story-num">🎨 03.</span>
              <div className="story-content">
                <div className="story-title">심리 설계</div>
                <div className="story-desc">발주처의 신뢰감을 높이는 컬러 시스템과 레이아웃 설계</div>
                <div style={{ marginTop: '8px', display: 'flex', gap: '4px' }}>
                  {['#1E293B', '#3B82F6', '#F97316', '#0EA5E9'].map((color, i) => (
                    <div key={i} style={{ width: '24px', height: '24px', background: color, borderRadius: '4px', border: '1px solid rgba(0,0,0,0.1)' }} title={color} />
                  ))}
                  <span style={{ fontSize: '10px', color: 'var(--text-gray)', marginLeft: '8px', alignSelf: 'center' }}>신뢰감 컬러 시스템</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 8: Strategy 2 - UX가 시장 점유율을 결정하는 이유 */}
      <section className={`slide content-slide ${currentSlide === 8 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">Strategy 02</div>
          <h2 className="slide-title">UX<br />MARKET</h2>
          <p className="slide-desc">UX가 시장 점유율을 결정하는 이유</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>
            "기술은 상향 평준화되고 있습니다. 승부처는 '사용 편의성'입니다."
          </p>
        </div>
        <div className="slide-right">
          <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-black)', marginBottom: '12px' }}>성공 핵심 (The Why)</div>
          <div className="feature-cards" style={{ gridTemplateColumns: '1fr', marginBottom: '20px' }}>
            <div className="feature-card" style={{ '--index': 0 }}>
              <div className="feature-icon">🔐</div>
              <div className="feature-title">1. 전환 비용 창출 (Lock-in 효과)</div>
              <div className="feature-desc">
                한 번 익숙해진 인터페이스는 강력한 무기. 사용자가 다른 플랫폼으로 옮겨가기 어렵게 만드는 보이지 않는 장벽을 구축합니다.
              </div>
              <div style={{ marginTop: '12px' }}>
                <AnimatedProgressBar value={95} color="#00A88A" delay={400} />
              </div>
            </div>
            <div className="feature-card" style={{ '--index': 1 }}>
              <div className="feature-icon">📱</div>
              <div className="feature-title">2. 숙련도 격차 해소</div>
              <div className="feature-desc">
                현장 인력들이 BIM/디지털 트윈을 별도 교육 없이 즉시 사용. 제품 선택의 결정적 기준을 제시합니다.
              </div>
              <div style={{ marginTop: '12px' }}>
                <AnimatedProgressBar value={88} color="var(--accent-mint)" delay={600} />
              </div>
            </div>
          </div>
          <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-black)', marginBottom: '12px' }}>실행 전략 (The How)</div>
          <FlowDiagram 
            steps={[
              { icon: '🗺️', label: 'User Journey Map' },
              { icon: '📊', label: '대시보드 최적화' },
              { icon: '⚠️', label: '위험 신호 시각화' }
            ]}
            activeIndex={1}
          />
        </div>
      </section>

      {/* SLIDE 9: Strategy 3 - 디자인 시스템이 서비스 표준인 이유 */}
      <section className={`slide content-slide ${currentSlide === 9 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Strategy 02</div>
          <h2 className="slide-title">DESIGN<br />SYSTEM</h2>
          <p className="slide-desc">디자인 시스템이 서비스 표준인 이유</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>
            "비용은 절감하고, 확장성은 극대화하는 지속 가능한 인프라"
          </p>
        </div>
        <div className="slide-right">
          <div className="story-list">
            {[
              { num: '01.', title: '개발 생산성 향상 (Efficiency)', desc: '컴포넌트 재사용으로 프론트엔드 개발 시간 30% 이상 단축 (기대효과)', value: 30 },
              { num: '02.', title: '브랜드 일관성 및 신뢰도 (Trust)', desc: '모든 디지털 접점에서 동일한 "전문가적 룩" 유지', value: 100 },
              { num: '03.', title: '유지보수 비용 최적화 (Infra)', desc: '시스템 언어 수정만으로 전체 서비스 반영. 지속 가능한 기술 자산', value: 60 }
            ].map((item, i) => (
              <div key={i} className="story-item">
                <span className="story-num">{item.num}</span>
                <div className="story-content">
                  <div className="story-title">{item.title}</div>
                  <div className="story-desc">{item.desc}</div>
                  <div style={{ marginTop: '8px' }}>
                    <AnimatedProgressBar value={item.value} delay={i * 200} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="stats-row" style={{ marginTop: '20px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              { value: 30, suffix: '%+', label: '개발 시간 단축 (기대)', icon: '⚡' },
              { value: 100, suffix: '%', label: '브랜드 일관성', icon: '🎯' },
              { value: 3000, suffix: '만원', label: '연간 외주비 절감 (기대)', icon: '💰' }
            ].map((s, i) => (
              <div key={i} className="stat-box">
                <div style={{ fontSize: '18px', marginBottom: '4px' }}>{s.icon}</div>
                <div className="stat-value"><AnimatedCounter value={s.value} suffix={s.suffix} delay={i * 200} /></div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 10: Strategy 4 - 사내 솔루션 자산화 */}
      <section className={`slide content-slide ${currentSlide === 10 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Strategy 03</div>
          <h2 className="slide-title">ASSET<br />SYSTEM</h2>
          <p className="slide-desc">사내 솔루션 자산화 (Efficiency)</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>
            "반복 업무를 줄이고 유지보수 비용을 낮추는 인프라 구축"
          </p>
        </div>
        <div className="slide-right">
          <div className="feature-cards" style={{ gridTemplateColumns: '1fr', marginBottom: '20px' }}>
            <div className="feature-card" style={{ '--index': 0 }}>
              <div className="feature-icon">📦</div>
              <div className="feature-title">디자인 시스템 (Design System)</div>
              <div className="feature-desc">구축된 컴포넌트는 향후 모든 디지털 서비스의 표준이 됨</div>
              <div style={{ marginTop: '12px', display: 'flex', gap: '24px' }}>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--accent-mint)' }}><AnimatedCounter value={30} suffix="%" /></div>
                  <div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>시간 절감 (예상)</div>
                </div>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--accent-mint)' }}><AnimatedCounter value={50} suffix="%+" /></div>
                  <div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>효율 향상 (예상)</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-black)', marginBottom: '12px' }}>효율성 수치화</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ padding: '16px', background: 'var(--bg-light)', borderRadius: '12px' }}>
              <div style={{ fontSize: '11px', color: 'var(--text-gray)', marginBottom: '8px' }}>Before</div>
              <div style={{ fontSize: '13px', fontWeight: 500, textDecoration: 'line-through', color: 'var(--text-light)' }}>지루한 문서</div>
              <div style={{ fontSize: '20px', marginTop: '8px' }}>📄</div>
            </div>
            <div style={{ padding: '16px', background: 'var(--bg-mint)', borderRadius: '12px', border: '2px solid var(--accent-mint)' }}>
              <div style={{ fontSize: '11px', color: 'var(--accent-mint)', marginBottom: '8px' }}>After</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-black)' }}>인터랙티브 인포그래픽</div>
              <div style={{ fontSize: '20px', marginTop: '8px' }}>📊✨</div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 11: Implementation - 홍보 템플릿화 4단계 방법 */}
      <section className={`slide content-slide ${currentSlide === 11 ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
        <div style={{ width: '100%', maxWidth: '1000px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--text-gray)', marginBottom: '6px' }}>SLIDE 9 — IMPLEMENTATION</div>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-black)', margin: 0 }}>
              홍보 템플릿화 <span style={{ color: 'var(--accent-mint)' }}>4단계</span> 방법
            </h2>
            <p style={{ fontSize: '12px', color: 'var(--text-gray)', marginTop: '8px' }}>
              누구나 고퀄리티 결과물을 낼 수 있는 시스템 설계
            </p>
          </div>

          {/* 4단계 Step 카드 - 2x2 그리드 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            {[
              { 
                step: '1', 
                title: '자산 모듈화', 
                desc: '버튼, 차트, 아이콘 등 컴포넌트화 및 메인 컬러 규격화',
                color: 'var(--accent-mint)',
                graphic: (
                  <svg width="60" height="60" viewBox="0 0 60 60">
                    <rect x="5" y="5" width="20" height="20" rx="4" fill="var(--accent-mint)" opacity="0.8" />
                    <rect x="30" y="5" width="25" height="8" rx="2" fill="var(--accent-mint)" opacity="0.5" />
                    <rect x="30" y="17" width="18" height="8" rx="2" fill="var(--accent-mint)" opacity="0.3" />
                    <circle cx="15" cy="42" r="12" fill="none" stroke="var(--accent-mint)" strokeWidth="2" />
                    <rect x="35" y="35" width="18" height="18" rx="3" fill="var(--accent-mint)" opacity="0.6" />
                  </svg>
                )
              },
              { 
                step: '2', 
                title: '마스터 레이아웃', 
                desc: '카드뉴스형, 리포트/제안서형, 대시보드형 템플릿',
                color: '#2563EB',
                graphic: (
                  <svg width="60" height="60" viewBox="0 0 60 60">
                    <rect x="5" y="5" width="50" height="10" rx="2" fill="#2563EB" opacity="0.3" />
                    <rect x="5" y="20" width="22" height="35" rx="3" fill="#2563EB" opacity="0.5" />
                    <rect x="32" y="20" width="23" height="16" rx="3" fill="#2563EB" opacity="0.7" />
                    <rect x="32" y="40" width="23" height="15" rx="3" fill="#2563EB" opacity="0.4" />
                  </svg>
                )
              },
              { 
                step: '3', 
                title: '소스 라이브러리', 
                desc: 'BIM 렌더링, 드론 영상, 시뮬레이션 GIF 아카이빙',
                color: '#6366F1',
                graphic: (
                  <svg width="60" height="60" viewBox="0 0 60 60">
                    <rect x="5" y="8" width="15" height="12" rx="2" fill="#6366F1" opacity="0.6" />
                    <rect x="23" y="8" width="15" height="12" rx="2" fill="#6366F1" opacity="0.8" />
                    <rect x="41" y="8" width="15" height="12" rx="2" fill="#6366F1" opacity="0.5" />
                    <rect x="5" y="25" width="15" height="12" rx="2" fill="#6366F1" opacity="0.7" />
                    <rect x="23" y="25" width="15" height="12" rx="2" fill="#6366F1" opacity="0.4" />
                    <rect x="41" y="25" width="15" height="12" rx="2" fill="#6366F1" opacity="0.9" />
                    <path d="M10 50 L30 42 L50 50" fill="none" stroke="#6366F1" strokeWidth="2" />
                    <circle cx="30" cy="52" r="5" fill="#6366F1" opacity="0.6" />
                  </svg>
                )
              },
              { 
                step: '4', 
                title: '자동화 도구', 
                desc: 'Figma Components 및 PPT 마스터 슬라이드 배포',
                color: '#F97316',
                graphic: (
                  <svg width="60" height="60" viewBox="0 0 60 60">
                    <circle cx="15" cy="15" r="10" fill="#F97316" opacity="0.6" />
                    <circle cx="15" cy="30" r="10" fill="#F97316" opacity="0.8" />
                    <circle cx="15" cy="45" r="10" fill="#F97316" opacity="0.5" />
                    <path d="M28 15 L55 15" stroke="#F97316" strokeWidth="2" strokeDasharray="4 2" />
                    <path d="M28 30 L55 30" stroke="#F97316" strokeWidth="2" />
                    <path d="M28 45 L55 45" stroke="#F97316" strokeWidth="2" strokeDasharray="4 2" />
                    <circle cx="50" cy="30" r="8" fill="none" stroke="#F97316" strokeWidth="2">
                      <animate attributeName="r" values="8;10;8" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                )
              }
            ].map((item, i) => (
              <div 
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '20px 24px',
                  background: 'white',
                  borderRadius: '16px',
                  border: '1px solid var(--border-light)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  opacity: currentSlide === 11 ? 1 : 0,
                  transform: currentSlide === 11 ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${i * 0.1}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = item.color
                  e.currentTarget.style.boxShadow = `0 8px 24px ${item.color}20`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--border-light)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* 왼쪽: 그래픽 */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: `${item.color}10`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {item.graphic}
                </div>
                
                {/* 오른쪽: 텍스트 */}
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    display: 'inline-block',
                    padding: '4px 10px', 
                    background: item.color, 
                    color: 'white',
                    borderRadius: '12px',
                    fontSize: '10px',
                    fontWeight: 700,
                    marginBottom: '8px'
                  }}>
                    Step {item.step}
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-black)', marginBottom: '6px' }}>{item.title}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-gray)', lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 12: Utilization - 템플릿의 전략적 활용 방향 */}
      <section className={`slide content-slide ${currentSlide === 12 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Utilization</div>
          <h2 className="slide-title">UTILI<br />ZATION</h2>
          <p className="slide-desc">템플릿의 전략적 활용 방향</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>
            "단순 홍보를 넘어 회사의 기술력을 돈으로 바꾸는 과정"
          </p>
        </div>
        <div className="slide-right">
          <div className="feature-cards">
            {[
              { num: '01.', icon: '🔬', title: '연구과제 성과 확산', desc: '성과 요약 인포그래픽으로 과제 평가 점수 극대화', badge: '기술개발팀' },
              { num: '02.', icon: '📋', title: '국책 과제 및 입찰', desc: '준비된 템플릿으로 제안서 비주얼 퀄리티 즉각 상향', badge: '수주 영업' },
              { num: '03.', icon: '🖥️', title: '디지털 트윈 데모', desc: '데모 랜딩페이지와 브로슈어로 구매 욕구 자극', badge: '세일즈' },
              { num: '04.', icon: '📱', title: '링크드인 & 커뮤니티', desc: '템플릿화된 카드뉴스로 디지털 전환 선도 기업 권위', badge: '브랜딩' }
            ].map((item, i) => (
              <div key={i} className="feature-card" style={{ '--index': i }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <div className="feature-icon">{item.icon}</div>
                  <span style={{ fontSize: '9px', background: 'var(--bg-mint)', padding: '3px 8px', borderRadius: '20px', color: 'var(--accent-mint)', fontWeight: 600 }}>{item.badge}</span>
                </div>
                <div className="feature-num">{item.num}</div>
                <div className="feature-title">{item.title}</div>
                <div className="feature-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 13: Detail - 홍보 콘텐츠 가이드라인 */}
      <section className={`slide content-slide ${currentSlide === 13 ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
        <div style={{ width: '100%', maxWidth: '1000px' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ fontSize: '10px', letterSpacing: '2px', color: 'var(--text-gray)', marginBottom: '6px' }}>SLIDE 13 — DESIGN GUIDE</div>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-black)', margin: 0 }}>
              홍보 콘텐츠 <span style={{ color: 'var(--accent-mint)' }}>가이드라인</span>
            </h2>
          </div>

          {/* 3가지 타입 탭 버튼 - 클릭 기능 추가 */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
            {[
              { icon: '📱', label: 'SNS용 (카드뉴스)' },
              { icon: '📋', label: '제안서용 (PPT)' },
              { icon: '🖥️', label: '배너용 (전시회/웹)' }
            ].map((tab, i) => (
              <div 
                key={i}
                onClick={() => setGuideTab(i)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '20px',
                  border: guideTab === i ? '2px solid var(--accent-mint)' : '1px solid var(--border-light)',
                  background: guideTab === i ? 'rgba(59, 130, 246, 0.08)' : 'white',
                  fontSize: '11px',
                  fontWeight: 500,
                  color: guideTab === i ? 'var(--accent-mint)' : 'var(--text-gray)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab.icon} {tab.label}
              </div>
            ))}
          </div>

          {/* 스펙 요약 바 - 탭에 따라 내용 변경 */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(5, 1fr)', 
            gap: '12px', 
            padding: '14px 20px',
            background: 'var(--bg-light)',
            borderRadius: '10px',
            marginBottom: '20px'
          }}>
            {[
              [
                { label: '목적', value: '트렌드 정보 전달' },
                { label: '비주얼', value: '이미지 70% + 텍스트 30%' },
                { label: '폰트', value: 'Gmarket Sans (제목)' },
                { label: '필수요소', value: '로고 + 슬로건', highlight: true },
                { label: '구성', value: '5-7슬라이드 구성' }
              ],
              [
                { label: '목적', value: '발주처 신뢰 및 수주' },
                { label: '비주얼', value: 'BIM 렌더링 + 데이터 도표' },
                { label: '폰트', value: 'Pretendard (본문)' },
                { label: '필수요소', value: '페이지 바 + 목차', highlight: true },
                { label: '구성', value: 'A4 규격 레이아웃' }
              ],
              [
                { label: '목적', value: '클릭 및 참여 유도' },
                { label: '비주얼', value: '키워드 중심 + 액션 버튼' },
                { label: '폰트', value: 'Pretendard (가독성)' },
                { label: '필수요소', value: 'QR코드 + 핵심 문구', highlight: true },
                { label: '구성', value: '배너/전시회용' }
              ]
            ][guideTab].map((spec, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '9px', color: 'var(--text-gray)', marginBottom: '3px' }}>{spec.label}</div>
                <div style={{ fontSize: '10px', fontWeight: 600, color: spec.highlight ? 'var(--accent-mint)' : 'var(--text-black)' }}>{spec.value}</div>
              </div>
            ))}
          </div>

          {/* 메인 콘텐츠 - 2컬럼 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {/* 왼쪽: 사용 방법 (How-to) */}
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-black)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '14px' }}>📋</span> 사용 방법 (How-to)
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { step: '1', icon: '🖼️', title: '이미지 선택', desc: '라이브러리 내 보정된 BIM 렌더링 또는 현장 드론 사진 선택' },
                  { step: '2', icon: 'T', title: '텍스트 입력', desc: '제공된 폰트 스타일 가이드에 따라 핵심 기술 명칭 입력' },
                  { step: '3', icon: '↓', title: '내보내기', desc: '사전 설정된 export 값을 사용하여 최적화된 용량으로 저장' }
                ].map((item, i) => (
                  <div 
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      padding: '12px 14px',
                      background: 'white',
                      borderRadius: '10px',
                      border: '1px solid var(--border-light)',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-mint)'
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-light)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'var(--accent-mint)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: 700,
                      flexShrink: 0
                    }}>{item.step}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-black)', marginBottom: '3px' }}>{item.title}</div>
                      <div style={{ fontSize: '9px', color: 'var(--text-gray)', lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                    <div style={{ fontSize: '16px', color: 'var(--text-light)' }}>{item.icon}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 오른쪽: 상세 가이드 */}
            <div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-black)', marginBottom: '10px' }}>상세 가이드</div>
              
              {/* 디자인 자산 모듈화 */}
              <div style={{ 
                padding: '12px 14px', 
                background: 'white', 
                borderRadius: '10px', 
                border: '1px solid var(--border-light)',
                marginBottom: '8px'
              }}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--accent-mint)', marginBottom: '8px' }}>◎ 디자인 자산(Asset)의 모듈화</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ fontSize: '9px', color: 'var(--text-gray)', display: 'flex', gap: '6px' }}>
                    <span style={{ color: 'var(--accent-mint)' }}>◇</span>
                    <span><strong style={{ color: 'var(--text-black)' }}>컴포넌트화</strong> — 버튼, 그래프 스타일 등을 홍보물에도 그대로 사용하도록 정리</span>
                  </div>
                  <div style={{ fontSize: '9px', color: 'var(--text-gray)', display: 'flex', gap: '6px' }}>
                    <span style={{ color: 'var(--accent-mint)' }}>◇</span>
                    <span><strong style={{ color: 'var(--text-black)' }}>컬러 & 타이포그래피</strong> — 메인 컬러와 가독성 높은 서체 규격화</span>
                  </div>
                </div>
              </div>

              {/* 레이아웃 마스터 제작 */}
              <div style={{ 
                padding: '12px 14px', 
                background: 'white', 
                borderRadius: '10px', 
                border: '1px solid var(--border-light)',
                marginBottom: '8px'
              }}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--accent-mint)', marginBottom: '8px' }}>◎ 레이아웃 마스터 제작</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ fontSize: '9px', color: 'var(--text-gray)', display: 'flex', gap: '6px' }}>
                    <span style={{ color: 'var(--accent-mint)' }}>◇</span>
                    <span><strong style={{ color: 'var(--text-black)' }}>카드뉴스형</strong> — 기술 트렌드 설명용 5~7슬라이드 구성</span>
                  </div>
                  <div style={{ fontSize: '9px', color: 'var(--text-gray)', display: 'flex', gap: '6px' }}>
                    <span style={{ color: 'var(--accent-mint)' }}>◇</span>
                    <span><strong style={{ color: 'var(--text-black)' }}>리포트/제안서형</strong> — BIM 모델링 이미지 + A4 규격 레이아웃</span>
                  </div>
                  <div style={{ fontSize: '9px', color: 'var(--text-gray)', display: 'flex', gap: '6px' }}>
                    <span style={{ color: 'var(--accent-mint)' }}>◇</span>
                    <span><strong style={{ color: 'var(--text-black)' }}>데이터 대시보드형</strong> — 디지털 트윈 실시간 데이터 시각화</span>
                  </div>
                </div>
              </div>

              {/* 소스 공유 라이브러리 & 자동화 도구 */}
              <div style={{ 
                padding: '12px 14px', 
                background: 'white', 
                borderRadius: '10px', 
                border: '1px solid var(--border-light)'
              }}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--accent-mint)', marginBottom: '8px' }}>◎ 소스 공유 라이브러리 구축</div>
                <div style={{ fontSize: '9px', color: 'var(--text-gray)', lineHeight: 1.5, marginBottom: '10px' }}>
                  BIM 모델링 렌더링 샷, 현장 드론 영상 등을 고화질로 아카이빙하여 즉시 활용
                </div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--accent-mint)', marginBottom: '8px' }}>◎ 자동화 도구 활용</div>
                <div style={{ fontSize: '9px', color: 'var(--text-gray)', lineHeight: 1.5 }}>
                  Figma 'Components' 기능 활용 또는 PPT 마스터 슬라이드로 변환하여 배포
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 14: Roadmap - 6개월 기술력 증명 로드맵 */}
      <section className={`slide content-slide ${currentSlide === 14 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Roadmap</div>
          <h2 className="slide-title">ROAD<br />MAP</h2>
          <p className="slide-desc">향후 6개월 기술력 증명 로드맵</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>
            "말이 아닌 '데이터의 시각적 증명'으로 보여주는 가치"
          </p>
          {/* Roadmap Visual Timeline */}
          <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            {[
              { month: '1-2', label: '자산화', color: 'var(--accent-mint)' },
              { month: '3-4', label: '검증', color: '#00A88A' },
              { month: '5-6', label: '확산', color: 'var(--accent-mint)' }
            ].map((phase, i) => (
              <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                <div style={{
                  height: '8px',
                  background: phase.color,
                  borderRadius: i === 0 ? '4px 0 0 4px' : i === 2 ? '0 4px 4px 0' : '0',
                  marginBottom: '6px'
                }} />
                <div style={{ fontSize: '9px', color: 'var(--text-gray)' }}>{phase.month}개월</div>
                <div style={{ fontSize: '10px', fontWeight: 600, color: phase.color }}>{phase.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="slide-right">
          <Timeline 
            items={[
              { period: '1~2개월', title: '자산화', desc: '연구과제 핵심 UI를 렌더링 이미지/영상으로 추출. 보안 검토 후 모션 그래픽 제작', active: true },
              { period: '3~4개월', title: '검증', desc: '입찰 제안서나 연구 보고서에 시각 자료 선제적 적용. 내부 피드백 수렴', active: true },
              { period: '5~6개월', title: '대외확산', desc: '전문 기술 블로그 및 링크드인 카드뉴스 발행. 정기 콘텐츠 발행 시스템 가동', active: false }
            ]}
          />
          <div className="highlight-box" style={{ marginTop: '24px' }}>
            <strong>🔑 UX 관점:</strong> 사용 편의성은 Lock-in 효과를 유발하며, 별도 교육 없는 플랫폼이 선택받는 경향이 있음
          </div>
          <div style={{ marginTop: '16px', padding: '12px', background: 'var(--bg-light)', borderRadius: '10px', fontSize: '11px' }}>
            <div style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--text-black)' }}>📍 현재 상태</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ padding: '4px 8px', background: 'var(--bg-mint)', borderRadius: '12px', color: 'var(--accent-mint)', fontSize: '10px' }}>✅ 1~2개월: 자산화 진행 중</span>
              <span style={{ padding: '4px 8px', background: 'var(--bg-light)', borderRadius: '12px', color: 'var(--text-gray)', fontSize: '10px', border: '1px dashed var(--border-light)' }}>⏳ 3~4개월: 검증 예정</span>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 15: Conclusion - 맺음말 */}
      <section className={`slide closing-slide ${currentSlide === 15 ? 'active' : ''}`}>
        <h1 className="closing-title">THANKS.</h1>
        <p className="closing-subtitle">FOR WATCHING</p>
        <p style={{ fontSize: '16px', color: 'var(--text-gray)', maxWidth: '600px', lineHeight: 1.8, marginBottom: '24px', fontStyle: 'italic' }}>
          {currentSlide === 15 && <TypeWriter text='"기술을 가치 있게, 복잡함을 단순하게."' speed={50} delay={500} />}
        </p>
        <p style={{ fontSize: '14px', color: 'var(--text-gray)', maxWidth: '600px', lineHeight: 1.7, marginBottom: '20px' }}>
          "UI/UX 역할은 기술력을 시장에서 가치 있는 상품으로 전환하는 <strong style={{ color: 'var(--text-black)' }}>연결 기능</strong>을 수행합니다. 이 가치를 하나씩 증명해 나가겠습니다."
        </p>
        <div style={{ padding: '16px 24px', background: 'var(--bg-light)', borderRadius: '12px', marginBottom: '24px', maxWidth: '500px' }}>
          <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-black)' }}>🎯 우선순위</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px' }}>
            <div><span style={{ color: 'var(--accent-mint)', fontWeight: 600 }}>1순위:</span> 제안서/PT 시각화 (수주 직결)</div>
            <div><span style={{ color: '#2563EB', fontWeight: 600 }}>2순위:</span> 디자인 시스템 구축 (효율화)</div>
            <div><span style={{ color: 'var(--text-gray)', fontWeight: 600 }}>3순위:</span> 대외 홍보 콘텐츠 (브랜딩)</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
          <IsometricCube size={40} color="var(--accent-mint)" delay={800} />
          <IsometricCube size={50} color="#00A88A" delay={1000} />
          <IsometricCube size={40} color="var(--accent-mint)" delay={1200} />
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

export default Tab1

import { useEffect, useRef, useState } from 'react'
import { AnimatedCounter, TypeWriter, AnimatedProgressBar, CircularProgress, Timeline, FlowDiagram, IsometricCube } from './Charts'

function Tab2({ currentSlide, onSlideChange }) {
  const containerRef = useRef(null)
  const [hoveredItem, setHoveredItem] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e) => {
      e.preventDefault()
      if (e.deltaY > 0) onSlideChange(Math.min(currentSlide + 1, 19))
      else onSlideChange(Math.max(currentSlide - 1, 0))
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [currentSlide, onSlideChange])

  return (
    <div ref={containerRef} className="slides-container">
      {/* ========================================
          PART 1: 배경 & 문제 정의 (왜 필요한가)
          ======================================== */}
      
      {/* SLIDE 0: 핵심 요약 */}
      <section className={`slide content-slide ${currentSlide === 0 ? 'active' : ''}`}>
        <div className="slide-left" style={{ background: 'linear-gradient(135deg, var(--bg-mint) 0%, var(--bg-light) 100%)' }}>
          <div className="slide-label">Overview</div>
          <h2 className="slide-title">Connect<br />& Value</h2>
          <p className="slide-desc">소통과 가치 증명</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>
            "연결이 가치를 만든다"
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
              "기술을 자랑하지 말고, 기술로 설득하십시오"
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-gray)', lineHeight: 1.6 }}>
              기술과 시장 사이의 연결 역할을 통해 기술을 가치로 전환
            </div>
          </div>
          <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>📑 슬라이드 구성</div>
          <div className="story-list">
            {[
              { num: '01-04', title: '배경 & 문제', desc: '조직 과제와 홍보 장벽 분석' },
              { num: '05-10', title: '가치 증명', desc: '뇌과학·AI 사례로 역할 입증' },
              { num: '11-14', title: '해결책 제안', desc: '스마트 브로슈어, 핵심 전략' },
              { num: '15-19', title: '실행 계획', desc: '협업 체계, 로드맵, 검증' }
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

      {/* SLIDE 1: Hero */}
      <section className={`slide hero-slide ${currentSlide === 1 ? 'active' : ''}`}>
        <div className="hero-left">
          <div className="hero-label">
            <div className="hero-label-dot" />
            <span>Connect & Value</span>
          </div>
          <h1 className="hero-title">
            연결이<br />
            <span className="hero-title-italic">가치를 만든다</span>
          </h1>
          <p className="hero-subtitle">
            UI/UX 역할이 기술력을 시장 가치로 전환하는 방법
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-gray)', marginTop: '16px', fontStyle: 'italic', lineHeight: 1.6 }}>
            {currentSlide === 1 && <TypeWriter text='"기술과 시장 사이의 연결 역할을 하겠습니다"' speed={30} delay={800} />}
          </p>
          <div style={{ marginTop: '20px' }}>
            <FlowDiagram 
              steps={[
                { icon: '🔬', label: '기술' },
                { icon: '🔗', label: '연결' },
                { icon: '💎', label: '가치' }
              ]}
              activeIndex={1}
            />
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-image-frame neon-glow-hover" style={{ 
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(37, 99, 235, 0.05))',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'flex', gap: '16px', perspective: '500px' }}>
              <IsometricCube size={50} color="var(--accent-mint)" delay={500} />
              <IsometricCube size={40} color="#2563EB" delay={700} />
              <IsometricCube size={30} color="var(--accent-mint)" delay={900} />
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 2: 역할 배경 - 조직 과제 */}
      <section className={`slide content-slide ${currentSlide === 2 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Part 1 — 배경</div>
          <h2 className="slide-title">조직<br />과제</h2>
          <p className="slide-desc">현재 직면한 4가지 과제</p>
          <div style={{ marginTop: '20px', padding: '16px', background: 'var(--bg-light)', borderRadius: '12px' }}>
            <div style={{ fontSize: '10px', fontWeight: 600, color: 'var(--text-gray)', marginBottom: '10px' }}>현재 상황</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ padding: '8px 12px', background: 'var(--accent-mint)', color: 'white', borderRadius: '8px', fontSize: '11px', fontWeight: 600 }}>BIM 기술</div>
              <div style={{ width: '40px', height: '3px', background: 'repeating-linear-gradient(90deg, var(--border-light) 0px, var(--border-light) 8px, transparent 8px, transparent 12px)', borderRadius: '2px' }} />
              <div style={{ padding: '8px 12px', background: 'var(--bg-light)', color: 'var(--text-gray)', borderRadius: '8px', fontSize: '11px', fontWeight: 600, border: '1px dashed var(--border-light)' }}>시장 인식?</div>
            </div>
            <div style={{ fontSize: '9px', color: 'var(--text-gray)', marginTop: '8px' }}>⚠️ 기술력 ≠ 시장 인정</div>
          </div>
        </div>
        <div className="slide-right">
          <div className="story-list" style={{ marginBottom: '16px' }}>
            {[
              { num: '01.', title: '제안서 제출', desc: '기술력 우수 but 문서가 "공학자 스타일" — 비전문가에게 어필 안 됨', icon: '📄' },
              { num: '02.', title: '경쟁 PT', desc: '경쟁사 대비 시각적 임팩트 부족 — "뭔가 덜 세련돼 보임"', icon: '📊' },
              { num: '03.', title: '플랫폼 UI', desc: 'CDE 등 "기능은 좋은데 쓰기 불편함"', icon: '🖥️' },
              { num: '04.', title: '브랜드 이미지', desc: '"토목 회사" → "스마트 건설 기업" 전환 필요', icon: '🏢' }
            ].map((item, i) => (
              <div 
                key={i} 
                className="story-item"
                style={{
                  padding: '12px',
                  transform: currentSlide === 2 ? 'translateX(0)' : 'translateX(20px)',
                  opacity: currentSlide === 2 ? 1 : 0,
                  transition: `all 0.4s ease ${i * 0.1}s`
                }}
              >
                <span className="story-num" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
                  <span style={{ fontSize: '16px' }}>{item.icon}</span>
                  {item.num}
                </span>
                <div className="story-content">
                  <div className="story-title" style={{ fontSize: '12px' }}>{item.title}</div>
                  <div className="story-desc" style={{ fontSize: '10px' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="highlight-box" style={{ fontSize: '12px' }}>
            <strong>💡 핵심:</strong> 기술을 "팔리게" 만드는 연결 역할 필요
          </div>
        </div>
      </section>

      {/* SLIDE 3: 문제 정의 - 홍보 장벽 */}
      <section className={`slide content-slide ${currentSlide === 3 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Part 1 — 문제</div>
          <h2 className="slide-title">THE<br />PROBLEM</h2>
          <p className="slide-desc">기술 홍보의 4가지 장벽</p>
          <div style={{ marginTop: '20px', padding: '16px', background: 'var(--bg-light)', borderRadius: '12px' }}>
            <div style={{ fontSize: '10px', fontWeight: 600, color: 'var(--text-gray)', marginBottom: '10px' }}>문제 시각화</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ padding: '8px 12px', background: '#FF6B6B', color: 'white', borderRadius: '8px', fontSize: '11px', fontWeight: 600 }}>기술</div>
              <div className="broken-line" style={{ width: '40px', height: '3px', background: 'repeating-linear-gradient(90deg, #FF6B6B 0px, #FF6B6B 8px, transparent 8px, transparent 12px)', borderRadius: '2px' }} />
              <div style={{ padding: '8px 12px', background: 'var(--border-light)', color: 'var(--text-gray)', borderRadius: '8px', fontSize: '11px', fontWeight: 600, opacity: 0.5 }}>고객</div>
            </div>
            <div style={{ fontSize: '9px', color: '#FF6B6B', marginTop: '8px' }}>⚠️ 소통 장벽 발생</div>
          </div>
          <div style={{ marginTop: '16px' }}>
            <CircularProgress value={75} size={80} color="#FF6B6B" />
            <div style={{ fontSize: '10px', color: 'var(--text-gray)', marginTop: '6px', textAlign: 'center' }}>장벽 수준</div>
          </div>
        </div>
        <div className="slide-right">
          <div className="feature-cards">
            {[
              { num: '01.', icon: '📢', title: '설명의 장벽', desc: '업계 최상위권 기술력을 보유하고 있으나 수주와 계약의 방해 요소로 작용', color: '#FF6B6B' },
              { num: '02.', icon: '📚', title: '전문성의 역설', desc: '복잡한 용어는 발주처가 기술 가치를 체감하는 데 방해가 됨', color: '#FFB347' },
              { num: '03.', icon: '🔐', title: '접근성 결여', desc: '고사양 PC나 별도 프로그램 없이는 기술 시연이 어려움', color: '#87CEEB' },
              { num: '04.', icon: '💸', title: '고비용 구조', desc: '외부 업체 의존도가 높아 수천만 원의 비용과 긴 제작 기간', color: '#DDA0DD' }
            ].map((item, i) => (
              <div 
                key={i} 
                className="feature-card" 
                style={{ '--index': i }}
                onMouseEnter={() => setHoveredItem(`prob-${i}`)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="feature-icon" style={{ background: `${item.color}20` }}>{item.icon}</div>
                <div className="feature-num">{item.num}</div>
                <div className="feature-title">{item.title}</div>
                <div className="feature-desc">{item.desc}</div>
                <div style={{ marginTop: '8px' }}>
                  <AnimatedProgressBar value={85 - i * 10} color={item.color} delay={i * 150} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 4: Executive Summary */}
      <section className={`slide content-slide ${currentSlide === 4 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">Executive Summary</div>
          <h2 className="slide-title">핵심<br />요약</h2>
          <p className="slide-desc">이것만 읽으셔도 됩니다</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>
            "UI/UX 역할의 가치를 사례로 증명합니다"
          </p>
          <div style={{ marginTop: '20px' }}>
            <CircularProgress value={100} size={80} color="var(--accent-mint)" />
            <div style={{ fontSize: '10px', color: 'var(--text-gray)', marginTop: '6px', textAlign: 'center' }}>사례 기반 분석</div>
          </div>
        </div>
        <div className="slide-right">
          <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>대표님의 질문과 답변</div>
          <table className="data-table" style={{ marginBottom: '20px' }}>
            <thead>
              <tr>
                <th style={{ width: '35%' }}>질문</th>
                <th style={{ width: '35%' }}>답변</th>
                <th style={{ width: '30%' }}>근거</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>"투자 대비 효과는?"</strong></td>
                <td style={{ color: 'var(--accent-mint)', fontWeight: 600 }}>비용 절감 + 품질 향상 (예상)</td>
                <td style={{ fontSize: '11px' }}>외주비 절감 (기대치)</td>
              </tr>
              <tr>
                <td><strong>"뭘 해줄 수 있나?"</strong></td>
                <td style={{ color: 'var(--accent-mint)', fontWeight: 600 }}>기술 → 상품 전환</td>
                <td style={{ fontSize: '11px' }}>수주율 직결</td>
              </tr>
              <tr>
                <td><strong>"AI 시대에 필요?"</strong></td>
                <td style={{ color: 'var(--accent-mint)', fontWeight: 600 }}>"왜"와 "무엇을" 결정</td>
                <td style={{ fontSize: '11px' }}>실행은 AI, 설계는 인간</td>
              </tr>
            </tbody>
          </table>
          <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>기대 효과</div>
          <div className="stats-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="stat-box" style={{ background: 'var(--bg-mint)' }}>
              <div className="stat-icon">📋</div>
              <div className="stat-value" style={{ fontSize: '18px' }}>2주 → 3일</div>
              <div className="stat-label">제안서 제작</div>
            </div>
            <div className="stat-box">
              <div className="stat-icon">💰</div>
              <div className="stat-value" style={{ fontSize: '18px' }}>비용 절감</div>
              <div className="stat-label">외주 의존도 ↓</div>
            </div>
            <div className="stat-box">
              <div className="stat-icon">🔒</div>
              <div className="stat-value" style={{ fontSize: '18px' }}>UX 차별화</div>
              <div className="stat-label">플랫폼 경쟁력</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          PART 2: 가치 증명 (사례)
          ======================================== */}

      {/* SLIDE 5: 스티브 잡스 빌딩 */}
      <section className={`slide content-slide ${currentSlide === 5 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">Case 01 — 환경 설계</div>
          <h2 className="slide-title">PIXAR<br />빌딩</h2>
          <p className="slide-desc">환경 설계가 혁신을 만든다</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>
            "스티브 잡스는 의도적으로 불편함을 설계했습니다"
          </p>
          <div style={{ marginTop: '24px', padding: '18px', background: 'rgba(255,255,255,0.9)', borderRadius: '14px' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>빌딩 설계 철학</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: '화장실', value: '전체 1층에만 배치' },
                { label: '의도', value: '우연한 마주침 유도' },
                { label: '결과', value: '창의적 협업 발생' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                  <span style={{ color: 'var(--text-gray)' }}>{item.label}</span>
                  <span style={{ fontWeight: 600, color: 'var(--accent-mint)' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="slide-right">
          <div className="feature-cards" style={{ gridTemplateColumns: '1fr', marginBottom: '20px' }}>
            <div className="feature-card" style={{ '--index': 0 }}>
              <div className="feature-icon">🏛️</div>
              <div className="feature-title">핵심 교훈</div>
              <div className="feature-desc">
                "환경(인터페이스)이 행동(사용자 경험)을 결정하고, 행동이 문화(시장 점유율)를 만든다"
              </div>
              <div style={{ marginTop: '12px' }}>
                <AnimatedProgressBar value={95} color="var(--accent-mint)" delay={300} />
              </div>
            </div>
          </div>
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>프로젝트 적용</div>
          <table className="data-table" style={{ fontSize: '11px' }}>
            <thead>
              <tr>
                <th>잡스의 접근</th>
                <th>UI/UX 적용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>공간 설계로 소통 유도</td>
                <td><strong style={{ color: 'var(--accent-mint)' }}>UI/UX로 기술 이해 유도</strong></td>
              </tr>
              <tr>
                <td>우연한 잡담 → 아이디어</td>
                <td><strong style={{ color: 'var(--accent-mint)' }}>시각화 → 즉각적 가치 인식</strong></td>
              </tr>
              <tr>
                <td>물리적 환경 = 문화</td>
                <td><strong style={{ color: 'var(--accent-mint)' }}>인터페이스 = 사용자 행동</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SLIDE 6: GPT-3 번역 */}
      <section className={`slide content-slide ${currentSlide === 6 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Case 02 — AI 시대</div>
          <h2 className="slide-title">GPT-3<br />번역</h2>
          <p className="slide-desc">AI 시대의 번역자 역할</p>
          <p style={{ fontSize: '12px', color: 'var(--text-gray)', marginTop: '8px' }}>
            "기술을 시장의 언어로 번역합니다"
          </p>
          <div style={{ marginTop: '16px' }}>
            <FlowDiagram 
              steps={[
                { icon: '🔧', label: '공학 언어' },
                { icon: '🔄', label: '번역' },
                { icon: '👁️', label: '시각 언어' }
              ]}
              activeIndex={1}
            />
          </div>
        </div>
        <div className="slide-right">
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>GPT-3 기능 → Tech Communicator 매핑</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '16px' }}>
            {[
              { gpt: 'Content creation', tc: '홍보 콘텐츠 제작', icon: '📝' },
              { gpt: 'Translation', tc: '공학→시각 번역', icon: '🔄', highlight: true },
              { gpt: 'App design', tc: 'UI/UX 설계', icon: '🎨' },
              { gpt: 'Coding', tc: 'HTML/CSS/JS 구현', icon: '💻' }
            ].map((item, i) => (
              <div 
                key={i}
                style={{
                  padding: '12px',
                  background: item.highlight ? 'var(--bg-mint)' : 'var(--bg-light)',
                  borderRadius: '10px',
                  border: item.highlight ? '2px solid var(--accent-mint)' : '1px solid var(--border-light)'
                }}
              >
                <div style={{ fontSize: '18px', marginBottom: '6px' }}>{item.icon}</div>
                <div style={{ fontSize: '10px', color: 'var(--text-gray)', marginBottom: '4px' }}>{item.gpt}</div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: item.highlight ? 'var(--accent-mint)' : 'var(--text-black)' }}>{item.tc}</div>
              </div>
            ))}
          </div>
          <div className="highlight-box" style={{ fontSize: '12px' }}>
            <strong>💡 핵심:</strong> "GPT-3가 자연어를 번역하듯, 기술을 시장의 언어로 번역합니다"
          </div>
        </div>
      </section>

      {/* SLIDE 7: AI 시대 생존 */}
      <section className={`slide content-slide ${currentSlide === 7 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">Case 03 — 생존 전략</div>
          <h2 className="slide-title">AI 시대<br />생존</h2>
          <p className="slide-desc">연결하는 자만 살아남는다</p>
          <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(255,255,255,0.9)', borderRadius: '12px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '6px', color: 'var(--text-black)' }}>2090년 미래계급 전망</div>
            <div style={{ fontSize: '9px', color: 'var(--text-gray)', marginBottom: '8px' }}>출처: 서울대 유기윤 교수팀 연구</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                { class: '1계급', ratio: '0.001%', desc: '플랫폼 소유자', color: 'var(--accent-mint)' },
                { class: '2계급', ratio: '0.002%', desc: '스타/인플루언서', color: '#2563EB' },
                { class: '3계급', ratio: 'AI', desc: '일자리 대체', color: '#FFB347' },
                { class: '나머지', ratio: '99.997%', desc: '프레카리아트', color: 'var(--accent-coral)' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px' }}>
                  <span style={{ width: '50px', fontWeight: 600, color: item.color }}>{item.class}</span>
                  <span style={{ width: '60px', color: 'var(--text-gray)' }}>{item.ratio}</span>
                  <span style={{ color: 'var(--text-black)' }}>{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="slide-right">
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>Sketch2Code: 실행은 AI, 설계는 인간</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', padding: '16px', background: 'var(--bg-light)', borderRadius: '12px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '4px' }}>✏️</div>
              <div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>스케치</div>
            </div>
            <div style={{ fontSize: '20px', color: 'var(--accent-mint)' }}>→</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '4px' }}>🤖</div>
              <div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>AI 변환</div>
            </div>
            <div style={{ fontSize: '20px', color: 'var(--accent-mint)' }}>→</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '4px' }}>💻</div>
              <div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>HTML</div>
            </div>
          </div>
          <table className="data-table" style={{ fontSize: '11px', marginBottom: '16px' }}>
            <thead>
              <tr>
                <th>AI가 대체</th>
                <th>인간만 가능</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>스케치 → HTML 변환</td>
                <td><strong style={{ color: 'var(--accent-mint)' }}>어떤 스케치를 그릴지 결정</strong></td>
              </tr>
              <tr>
                <td>레이아웃 자동 생성</td>
                <td><strong style={{ color: 'var(--accent-mint)' }}>왜 이 디자인이 가치있는지</strong></td>
              </tr>
              <tr>
                <td>기계적 실행 (How)</td>
                <td><strong style={{ color: 'var(--accent-mint)' }}>전략 설계 (Why + What)</strong></td>
              </tr>
            </tbody>
          </table>
          <div className="highlight-box" style={{ fontSize: '12px', background: 'var(--bg-mint)' }}>
            <strong>🎯 결론:</strong> AI를 도구로 활용하는 "설계자" 역할이 생존 전략
          </div>
        </div>
      </section>

      {/* SLIDE 8: 시냅스 연결 */}
      <section className={`slide content-slide ${currentSlide === 8 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Case 04 — 뇌과학</div>
          <h2 className="slide-title">시냅스<br />연결</h2>
          <p className="slide-desc">시냅스가 지능을 만든다</p>
          <p style={{ fontSize: '12px', color: 'var(--text-gray)', marginTop: '8px' }}>
            "뉴런 860억 개 × 시냅스 100조 = 지능"
          </p>
          <div style={{ marginTop: '16px', padding: '16px', background: 'var(--bg-light)', borderRadius: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '20px', marginBottom: '4px' }}>📡</div>
                <div style={{ fontSize: '9px', color: 'var(--text-gray)' }}>수상돌기</div>
                <div style={{ fontSize: '8px', color: 'var(--accent-mint)' }}>입력</div>
              </div>
              <div style={{ width: '20px', height: '2px', background: 'var(--accent-mint)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '20px', marginBottom: '4px' }}>🧠</div>
                <div style={{ fontSize: '9px', color: 'var(--text-gray)' }}>세포체</div>
                <div style={{ fontSize: '8px', color: 'var(--accent-mint)' }}>처리</div>
              </div>
              <div style={{ width: '20px', height: '2px', background: 'var(--accent-mint)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '20px', marginBottom: '4px' }}>⚡</div>
                <div style={{ fontSize: '9px', color: 'var(--text-gray)' }}>축삭</div>
                <div style={{ fontSize: '8px', color: 'var(--accent-mint)' }}>출력</div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-right">
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>핵심: 연결이 가치를 만든다</div>
          <div style={{ 
            padding: '20px', 
            background: 'linear-gradient(135deg, var(--bg-mint) 0%, var(--bg-light) 100%)', 
            borderRadius: '16px',
            marginBottom: '16px',
            border: '2px solid var(--accent-mint)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '6px' }}>🔬</div>
                <div style={{ fontSize: '11px', fontWeight: 600 }}>기술팀</div>
                <div style={{ fontSize: '9px', color: 'var(--text-gray)' }}>BIM 연구개발</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: '10px', color: 'var(--accent-mint)', marginBottom: '4px' }}>시냅스</div>
                <div style={{ width: '60px', height: '3px', background: 'var(--accent-mint)', borderRadius: '2px' }} />
                <div style={{ 
                  marginTop: '8px',
                  padding: '6px 12px', 
                  background: 'var(--accent-mint)', 
                  color: 'white', 
                  borderRadius: '20px',
                  fontSize: '10px',
                  fontWeight: 600
                }}>UI/UX</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '6px' }}>💰</div>
                <div style={{ fontSize: '11px', fontWeight: 600 }}>시장</div>
                <div style={{ fontSize: '9px', color: 'var(--text-gray)' }}>구매 의사결정</div>
              </div>
            </div>
          </div>
          <div className="story-list">
            {[
              { icon: '🔗', title: 'Synapse', desc: '기술 ↔ 시장 연결 지원', effect: '기술의 사업화' },
              { icon: '⚡', title: 'Myelin', desc: '디자인 시스템 구축 → 속도 증폭', effect: '제작 시간 70% 단축 (기대효과)' }
            ].map((item, i) => (
              <div key={i} className="story-item" style={{ padding: '12px' }}>
                <span className="story-num" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '16px' }}>{item.icon}</span>
                </span>
                <div className="story-content">
                  <div className="story-title" style={{ fontSize: '12px' }}>{item.title}</div>
                  <div className="story-desc" style={{ fontSize: '10px' }}>{item.desc}</div>
                  <div style={{ fontSize: '10px', color: 'var(--accent-mint)', marginTop: '4px', fontWeight: 600 }}>→ {item.effect}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 9: 창발성 */}
      <section className={`slide content-slide ${currentSlide === 9 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">Case 05 — 창발성</div>
          <h2 className="slide-title">자유<br />결합</h2>
          <p className="slide-desc">자유로운 결합이 창의성을 만든다</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>
            "전체는 부분의 합보다 크다"
          </p>
          <div style={{ marginTop: '24px', padding: '18px', background: 'rgba(255,255,255,0.9)', borderRadius: '14px' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>뇌과학 연구 결과</div>
            <div style={{ fontSize: '11px', color: 'var(--text-gray)', lineHeight: 1.6 }}>
              "뉴런이 얼마나 <strong style={{ color: 'var(--accent-mint)' }}>자유롭게 결합</strong>하는지에 따라 창의성과 지능이 결정된다"
            </div>
          </div>
        </div>
        <div className="slide-right">
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>고정 패턴 vs 자유 패턴</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
            <div style={{ padding: '16px', background: 'var(--bg-light)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-gray)' }}>고정된 연결</div>
              <div style={{ fontSize: '20px', textAlign: 'center', marginBottom: '8px' }}>A → B → C → D</div>
              <div style={{ fontSize: '10px', color: 'var(--accent-coral)' }}>
                = 예측 가능한 사고<br/>
                = 창의성 낮음
              </div>
            </div>
            <div style={{ padding: '16px', background: 'var(--bg-mint)', borderRadius: '12px', border: '2px solid var(--accent-mint)' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '8px', color: 'var(--accent-mint)' }}>자유로운 연결</div>
              <div style={{ fontSize: '20px', textAlign: 'center', marginBottom: '8px' }}>A ↔ B ↔ C<br/>↕ &nbsp; ↕ &nbsp; ↕<br/>D ↔ E ↔ F</div>
              <div style={{ fontSize: '10px', color: 'var(--accent-mint)' }}>
                = 새로운 아이디어<br/>
                = 창의성 높음 ★
              </div>
            </div>
          </div>
          <div className="highlight-box" style={{ fontSize: '12px' }}>
            <strong>💡 시사점:</strong> 자유로운 소통과 연결이 있을 때 혁신이 창발합니다
          </div>
        </div>
      </section>

      {/* SLIDE 10: WIX 벤치마킹 */}
      <section className={`slide content-slide ${currentSlide === 10 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Case 06 — CMS 벤치마킹</div>
          <h2 className="slide-title">WIX<br />전략</h2>
          <p className="slide-desc">BIM 데이터 활용의 민주화</p>
          <p style={{ fontSize: '12px', color: 'var(--text-gray)', marginTop: '8px' }}>
            "코딩 없이도 전문가 수준의 결과물"
          </p>
          <div style={{ marginTop: '16px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '10px', color: 'var(--text-black)' }}>Website Builder 비교</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                { name: 'Wix', desc: 'Best overall', highlight: true },
                { name: 'Squarespace', desc: 'Best design' },
                { name: 'WordPress', desc: 'Best for writers' },
                { name: 'Shopify', desc: 'Best e-commerce' }
              ].map((item, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  padding: '8px 12px',
                  background: item.highlight ? 'var(--bg-mint)' : 'var(--bg-light)',
                  borderRadius: '8px',
                  border: item.highlight ? '2px solid var(--accent-mint)' : '1px solid var(--border-light)',
                  fontSize: '11px'
                }}>
                  <span style={{ fontWeight: 600, color: item.highlight ? 'var(--accent-mint)' : 'var(--text-black)' }}>{item.name}</span>
                  <span style={{ color: 'var(--text-gray)' }}>{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="slide-right">
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>태성에스앤아이 적용 방안</div>
          <div style={{ 
            padding: '20px', 
            background: 'linear-gradient(135deg, var(--bg-light) 0%, var(--bg-mint) 100%)', 
            borderRadius: '16px',
            marginBottom: '16px'
          }}>
            <FlowDiagram 
              steps={[
                { icon: '📊', label: 'BIM 데이터' },
                { icon: '📋', label: '템플릿' },
                { icon: '✨', label: '산출물' }
              ]}
              activeIndex={1}
            />
            <div style={{ fontSize: '10px', color: 'var(--text-gray)', textAlign: 'center', marginTop: '12px' }}>
              ↓ 사용자 커스터마이징 (드래그앤드롭)
            </div>
          </div>
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '10px', color: 'var(--text-black)' }}>기대 효과</div>
          <div className="story-list">
            {[
              { num: '①', title: '현장 인력 직접 대시보드 구성', desc: '개발 의존도 ↓' },
              { num: '②', title: '표준 템플릿으로 품질 일관성', desc: '브랜드 통일성' },
              { num: '③', title: '빠른 커스터마이징', desc: '발주처별 맞춤 대응' },
              { num: '④', title: '직관적 UX', desc: '사용자 충성도 강화' }
            ].map((item, i) => (
              <div key={i} className="story-item" style={{ padding: '10px' }}>
                <span className="story-num" style={{ fontSize: '12px', color: 'var(--accent-mint)' }}>{item.num}</span>
                <div className="story-content">
                  <div className="story-title" style={{ fontSize: '11px' }}>{item.title}</div>
                  <div className="story-desc" style={{ fontSize: '10px' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          PART 3: 해결책 제안
          ======================================== */}

      {/* SLIDE 11: 해결책 - 스마트 브로슈어 */}
      <section className={`slide content-slide ${currentSlide === 11 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">Part 3 — Solution</div>
          <h2 className="slide-title">THE<br />SOLUTION</h2>
          <p className="slide-desc">핵심 해결 전략</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>
            "3초 만에 보여주는 압도적 기술력"
          </p>
          <div style={{ 
            marginTop: '24px', 
            padding: '20px', 
            background: 'rgba(255,255,255,0.8)', 
            borderRadius: '16px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '8px' }}>📱</div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-black)' }}>스마트 모바일 브로슈어</div>
            <div style={{ fontSize: '10px', color: 'var(--text-gray)', marginTop: '4px' }}>QR 스캔 한 번으로 즉시 체험</div>
          </div>
        </div>
        <div className="slide-right">
          <div className="story-list" style={{ marginBottom: '20px' }}>
            {[
              { num: '01.', title: 'Zero Barrier', desc: '설치 NO, 로그인 NO. QR 코드만으로 즉각 구동', icon: '🚫', highlight: true },
              { num: '02.', title: 'Anywhere', desc: '지하 현장, 이동 중인 차 안 어디서든 작동', icon: '🌍' },
              { num: '03.', title: 'Visual Trust', desc: '추상적 설명 대신 실제 데이터(BIM) 시각화로 "와우 모먼트" 선사', icon: '✨' }
            ].map((item, i) => (
              <div 
                key={i} 
                className="story-item"
                style={{
                  background: item.highlight ? 'var(--bg-mint)' : 'var(--bg-white)',
                  borderColor: item.highlight ? 'var(--accent-mint)' : 'var(--border-light)'
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
          <div className="stats-row" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="stat-box" style={{ background: 'var(--bg-mint)' }}>
              <div style={{ fontSize: '48px', fontWeight: 800, color: 'var(--accent-mint)' }}><AnimatedCounter value={3} suffix="초" /></div>
              <div className="stat-label">로딩 시간</div>
            </div>
            <div className="stat-box">
              <div style={{ fontSize: '48px', fontWeight: 800, color: 'var(--text-black)' }}><AnimatedCounter value={0} suffix="개" /></div>
              <div className="stat-label">설치 필요 앱</div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 12: 3대 핵심 전략 */}
      <section className={`slide content-slide blueprint-bg ${currentSlide === 12 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Part 3 — Core Strategy</div>
          <h2 className="slide-title">CORE<br />STRATEGY</h2>
          <p className="slide-desc">3대 초격차 핵심 전략</p>
          <div style={{ marginTop: '20px', display: 'flex', gap: '16px', perspective: '500px', justifyContent: 'center' }}>
            {[
              { size: 40, color: 'var(--accent-mint)', label: 'Mobility', icon: '📱' },
              { size: 50, color: '#00A88A', label: 'Data', icon: '📊' },
              { size: 40, color: 'var(--accent-mint)', label: 'Auto', icon: '⚡' }
            ].map((cube, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <IsometricCube size={cube.size} color={cube.color} delay={300 + i * 200} />
                <div style={{ fontSize: '9px', color: 'var(--text-gray)', marginTop: '8px' }}>{cube.icon} {cube.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="slide-right">
          <div className="team-grid" style={{ marginBottom: '24px' }}>
            {[
              { icon: '📱', label: 'Mobility', desc: '기동성', value: 95 },
              { icon: '📊', label: 'Data-Driven', desc: '직관성', value: 90 },
              { icon: '⚡', label: 'Automation', desc: '속도', value: 85 }
            ].map((item, i) => (
              <div 
                key={i} 
                className="team-member"
                style={{ 
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div className="team-avatar" style={{ fontSize: '36px' }}>{item.icon}</div>
                <div className="team-name">{item.label}</div>
                <div className="team-role">{item.desc}</div>
                <div style={{ marginTop: '8px', width: '60px' }}>
                  <CircularProgress value={item.value} size={60} strokeWidth={4} />
                </div>
              </div>
            ))}
          </div>
          <table className="data-table">
            <thead><tr><th>전략</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td><strong>Mobility</strong></td><td>PWA 기반 오프라인 모드, 인터넷 없는 지하에서도 상시 영업</td></tr>
              <tr><td><strong>Data-Driven</strong></td><td>BIM 속성(비용, 공정) 연동으로 높은 신뢰도 확보</td></tr>
              <tr><td><strong>Automation</strong></td><td>AI 시안 생성 및 자동 변환 파이프라인</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SLIDE 13: 협업 생태계 */}
      <section className={`slide content-slide ${currentSlide === 13 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">Part 3 — Ecosystem</div>
          <h2 className="slide-title">ECO<br />SYSTEM</h2>
          <p className="slide-desc">기술 심도 및 운영 프로세스</p>
          <p style={{ fontSize: '15px', color: 'var(--text-gray)', marginTop: '12px' }}>
            THE SEAMLESS ECOSYSTEM ★
          </p>
          <div style={{ marginTop: '24px', padding: '20px', background: 'rgba(255,255,255,0.9)', borderRadius: '14px' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '10px', color: 'var(--text-black)' }}>최적화 파이프라인</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-light)', textDecoration: 'line-through' }}>100MB</span>
              <span style={{ fontSize: '18px' }}>→</span>
              <span style={{ fontSize: '32px', fontWeight: 800, color: 'var(--accent-mint)' }}>5MB</span>
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '8px' }}>Native Three.js & Draco 압축 기술</div>
          </div>
        </div>
        <div className="slide-right">
          <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '14px', color: 'var(--text-black)' }}>협업 생태계</div>
          <FlowDiagram 
            steps={[
              { icon: '🔬', label: 'R&D' },
              { icon: '🎮', label: 'Unity' },
              { icon: '🌐', label: 'WEB CORE' }
            ]}
            activeIndex={2}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '20px' }}>
            {[
              { icon: '🔬', title: 'R&D', subtitle: 'DATA Source', items: ['연구소에서 기술의 본질', '공학 데이터', 'BIM 속성 제공'] },
              { icon: '🎮', title: 'Unity', subtitle: 'Engine/Dev', items: ['유니티 개발자', '기술의 실체', '3D 환경, 디지털 트윈 구현'] },
              { icon: '🌐', title: 'WEB CORE', subtitle: 'Platform/UI', items: ['제작된 결과물', '웹에 최적화', '기술의 접점 완성'] }
            ].map((item, i) => (
              <div key={i} style={{ 
                padding: '16px', 
                background: i === 2 ? 'var(--bg-mint)' : 'var(--bg-light)', 
                borderRadius: '12px',
                border: i === 2 ? '2px solid var(--accent-mint)' : '1px solid var(--border-light)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>{item.icon}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-black)' }}>{item.title}</div>
                <div style={{ fontSize: '12px', color: 'var(--accent-mint)', marginBottom: '10px' }}>({item.subtitle})</div>
                {item.items.map((text, j) => (
                  <div key={j} style={{ fontSize: '13px', color: 'var(--text-gray)', lineHeight: 1.5 }}>• {text}</div>
                ))}
              </div>
            ))}
          </div>
          <div className="highlight-box" style={{ marginTop: '16px', fontSize: '14px' }}>
            <strong>🔗 협업 목표:</strong> 연구 성과를 영업 자산으로 연결하는 파이프라인 구축
          </div>
        </div>
      </section>

      {/* SLIDE 14: 비즈니스 가치 */}
      <section className={`slide content-slide ${currentSlide === 14 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Part 3 — Value</div>
          <h2 className="slide-title">VALUE<br />& COST</h2>
          <p className="slide-desc">비즈니스 가치 및 경제성</p>
          <div style={{ marginTop: '24px' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-gray)', marginBottom: '8px' }}>소통 효율화</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ fontSize: '32px' }}>🧱</div>
              <div style={{ flex: 1, height: '8px', background: 'var(--border-light)', borderRadius: '4px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '20%', background: 'var(--accent-mint)', borderRadius: '4px', transition: 'width 1s ease' }} />
              </div>
              <div style={{ fontSize: '32px' }}>✅</div>
            </div>
            <div style={{ fontSize: '10px', color: 'var(--accent-mint)', marginTop: '4px' }}>장벽 제거 완료</div>
          </div>
        </div>
        <div className="slide-right">
          <div className="stats-row" style={{ marginBottom: '20px' }}>
            {[
              { value: 50, label: '외주비 절감 (기대)', suffix: '%', icon: '💰' },
              { value: 3, label: '제작 기간', suffix: '일', icon: '⏱️' },
              { value: 50, label: '효율 향상 (기대)', suffix: '%+', icon: '📈' }
            ].map((s, i) => (
              <div key={i} className="stat-box">
                <div className="stat-icon">{s.icon}</div>
                <div className="stat-value"><AnimatedCounter value={s.value} suffix={s.suffix} delay={i * 200} /></div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <table className="data-table">
            <thead><tr><th>측면</th><th>효과</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>💎 수익성</strong></td>
                <td>
                  수주 성공률 제고 및 핵심 협상 시간 확보
                  <div style={{ marginTop: '8px' }}>
                    <AnimatedProgressBar value={85} color="var(--accent-mint)" delay={300} />
                  </div>
                </td>
              </tr>
              <tr>
                <td><strong>💰 비용 절감</strong></td>
                <td>
                  외부 제작비 절감 (예상), 지속 가능한 인프라
                  <div style={{ marginTop: '8px' }}>
                    <AnimatedProgressBar value={90} color="#00A88A" delay={500} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================
          PART 4: 실행 계획
          ======================================== */}

      {/* SLIDE 15: 부서 간 협업 */}
      <section className={`slide content-slide ${currentSlide === 15 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">Part 4 — 협업 지원</div>
          <h2 className="slide-title">부서 간<br />소통</h2>
          <p className="slide-desc">유관 부서 협업 체계</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>
            "원활한 소통이 효율을 만든다"
          </p>
          <div style={{ marginTop: '24px' }}>
            <CircularProgress value={100} size={80} color="var(--accent-mint)" />
            <div style={{ fontSize: '10px', color: 'var(--text-gray)', marginTop: '6px', textAlign: 'center' }}>협업 효율성</div>
          </div>
        </div>
        <div className="slide-right">
          <div style={{ 
            padding: '20px', 
            background: 'var(--bg-light)', 
            borderRadius: '16px',
            marginBottom: '16px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '16px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', marginBottom: '6px' }}>📋</div>
                <div style={{ fontSize: '11px', fontWeight: 600 }}>연구소</div>
                <div style={{ fontSize: '9px', color: 'var(--text-gray)' }}>국책과제/수주</div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', marginBottom: '6px' }}>🏗️</div>
                <div style={{ fontSize: '11px', fontWeight: 600 }}>사업부</div>
                <div style={{ fontSize: '9px', color: 'var(--text-gray)' }}>BIM 작업</div>
              </div>
              <div style={{ 
                padding: '8px 16px', 
                background: 'var(--accent-mint)', 
                color: 'white', 
                borderRadius: '20px',
                fontSize: '10px',
                fontWeight: 600
              }}>UI/UX 연결</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', marginBottom: '6px' }}>💻</div>
                <div style={{ fontSize: '11px', fontWeight: 600 }}>기술개발팀</div>
                <div style={{ fontSize: '9px', color: 'var(--text-gray)' }}>Front/Back-end</div>
              </div>
            </div>
          </div>
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '10px', color: 'var(--text-black)' }}>협업 체계 구축 기대효과</div>
          <div className="stats-row" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="stat-box">
              <div className="stat-icon">📅</div>
              <div className="stat-value" style={{ fontSize: '14px' }}>주 1회 미팅</div>
              <div className="stat-label">정보 공유로 재작업 방지</div>
            </div>
            <div className="stat-box" style={{ background: 'var(--bg-mint)' }}>
              <div className="stat-icon">📐</div>
              <div className="stat-value" style={{ fontSize: '14px' }}>공용 자산</div>
              <div className="stat-label">디자인 시스템 구축</div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 16: 함께 만들기 */}
      <section className={`slide content-slide ${currentSlide === 16 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Part 4 — Next Step</div>
          <h2 className="slide-title">함께<br />만들기</h2>
          <p className="slide-desc">협업을 위한 3가지 아이디어</p>
          <div style={{ marginTop: '16px' }}>
            <Timeline 
              items={[
                { period: '즉시', title: '주간 미팅', desc: '30분 싱크업', active: true },
                { period: '1개월', title: '디자인 시스템', desc: '컴포넌트 구축', active: true },
                { period: '3개월', title: '내부/외주 기준', desc: '명확화', active: false }
              ]}
            />
          </div>
        </div>
        <div className="slide-right">
          <div className="feature-cards">
            {[
              { num: '01.', icon: '📅', title: '주간 싱크업 미팅', desc: '유관 부서 30분 소통', effect: '정보 공유로 재작업 방지', color: 'var(--accent-mint)' },
              { num: '02.', icon: '📐', title: '공용 디자인 시스템', desc: '제안서/플랫폼 공유 컴포넌트', effect: '제작 시간 단축 기대', color: '#2563EB' },
              { num: '03.', icon: '📋', title: '역할 분담 가이드', desc: '핵심 업무(플랫폼, 제안서) 우선', effect: '품질 일관성 + 보안 유지', color: '#00A88A' }
            ].map((item, i) => (
              <div 
                key={i} 
                className="feature-card" 
                style={{ '--index': i }}
                onMouseEnter={() => setHoveredCard(`rec-${i}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="feature-icon" style={{ background: `${item.color}20` }}>{item.icon}</div>
                <div className="feature-num">{item.num}</div>
                <div className="feature-title">{item.title}</div>
                <div className="feature-desc">{item.desc}</div>
                <div style={{ marginTop: '8px', fontSize: '10px', color: item.color, fontWeight: 600 }}>
                  → {item.effect}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 17: 로드맵 */}
      <section className={`slide content-slide ${currentSlide === 17 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Part 4 — Roadmap</div>
          <h2 className="slide-title">ROAD<br />MAP</h2>
          <p className="slide-desc">단계별 실행 로드맵</p>
          <div style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              {[
                { n: 1, label: '자산화', active: true },
                { n: 2, label: '검증', active: true },
                { n: 3, label: '확산', active: false }
              ].map((phase, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  <div className={phase.active ? 'neon-glow' : ''} style={{ 
                    width: '36px', height: '36px', 
                    background: phase.active ? 'var(--accent-mint)' : 'var(--bg-light)', 
                    borderRadius: '50%', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    color: phase.active ? 'white' : 'var(--text-gray)', 
                    fontSize: '12px', fontWeight: 700,
                    border: phase.active ? 'none' : '2px dashed var(--border-light)',
                    transition: 'all 0.3s ease'
                  }}>{phase.n}</div>
                  {i < 2 && (
                    <div style={{ 
                      width: '28px', height: '3px', 
                      background: phase.active ? 'var(--accent-mint)' : 'var(--border-light)',
                      borderRadius: '2px'
                    }} />
                  )}
                </div>
              ))}
            </div>
            <div style={{ fontSize: '10px', color: 'var(--text-gray)', display: 'flex', justifyContent: 'space-between', paddingRight: '30px' }}>
              <span>1~2월</span>
              <span>3~4월</span>
              <span>5~6월</span>
            </div>
          </div>
        </div>
        <div className="slide-right">
          <div className="process-steps">
            {[
              { num: 1, title: 'Phase 1 (1~2개월): 자산화', desc: 'BIM/Unity to Web 파이프라인 구축. 연구과제 핵심 UI 추출', color: 'var(--accent-mint)' },
              { num: 2, title: 'Phase 2 (3~4개월): 검증', desc: '타겟별 제안서 웹 템플릿 개발 및 내부 교육. 피드백 수렴', color: '#00A88A' },
              { num: 3, title: 'Phase 3 (5~6개월): 대외확산', desc: '글로벌 대응 대시보드 구축. 링크드인 카드뉴스로 브랜드 권위', color: 'var(--accent-mint)' }
            ].map((step, i) => (
              <div key={i} className="process-step" style={{ '--index': i }}>
                <div className="process-num" style={{ background: step.color }}>{step.num}</div>
                <div className="process-content">
                  <div className="process-title">{step.title}</div>
                  <div className="process-desc">{step.desc}</div>
                  <div style={{ marginTop: '8px' }}>
                    <AnimatedProgressBar value={100 - i * 20} color={step.color} delay={i * 200 + 300} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="highlight-box" style={{ marginTop: '16px' }}>
            <strong>🎯 기대효과 (검증 필요):</strong> 외주비 절감 및 제작 기간 단축 - 시범 운용 후 실측 예정
          </div>
        </div>
      </section>

      {/* SLIDE 18: 증명 과제 */}
      <section className={`slide content-slide ${currentSlide === 18 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Validation</div>
          <h2 className="slide-title">증명<br />과제</h2>
          <p className="slide-desc">앞으로 검증해야 할 것</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>
            "사례는 가능성을, 실행은 성과를"
          </p>
        </div>
        <div className="slide-right">
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>📋 검증이 필요한 3가지 질문</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
            {[
              { q: '제안서 시각화가 수주에 영향을 주는가?', how: '시범 프로젝트 A/B 비교', status: '검증 예정' },
              { q: '디자인 시스템이 실제로 시간을 단축하는가?', how: '제작 시간 Before/After 측정', status: '검증 예정' },
              { q: '협업 체계가 재작업을 줄이는가?', how: '월간 재작업 건수 추적', status: '검증 예정' }
            ].map((item, i) => (
              <div key={i} style={{
                padding: '14px',
                background: 'var(--bg-light)',
                borderRadius: '10px',
                border: '1px solid var(--border-light)'
              }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-black)', marginBottom: '6px' }}>{item.q}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '10px', color: 'var(--text-gray)' }}>방법: {item.how}</span>
                  <span style={{ fontSize: '9px', padding: '2px 8px', background: '#FFF3E0', borderRadius: '10px', color: '#F97316' }}>{item.status}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="highlight-box" style={{ fontSize: '12px', background: 'var(--bg-mint)', border: '1px solid var(--accent-mint)' }}>
            <strong>💡 접근 방식:</strong> 작게 시작 → 성과 측정 → 데이터로 증명 → 단계적 확대
          </div>
        </div>
      </section>

      {/* SLIDE 19: 결론 */}
      <section className={`slide closing-slide ${currentSlide === 19 ? 'active' : ''}`}>
        <h1 className="closing-title">연결이 가치를 만든다</h1>
        <p className="closing-subtitle">CONNECTION CREATES VALUE</p>
        <div style={{ maxWidth: '600px', textAlign: 'center', marginBottom: '24px' }}>
          <p style={{ fontSize: '14px', color: 'var(--text-gray)', fontStyle: 'italic', lineHeight: 1.7 }}>
            {currentSlide === 19 && <TypeWriter text='"사례가 증명합니다: 기술과 시장 사이의 연결 역할을 하겠습니다"' speed={30} delay={500} />}
          </p>
        </div>
        <div style={{ maxWidth: '700px', marginBottom: '28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {[
              { icon: '🏛️', title: '환경 설계', desc: '인터페이스 = 행동 유도' },
              { icon: '🧠', title: '시냅스 연결', desc: '기술 ↔ 시장 번역' },
              { icon: '💡', title: '창발성', desc: '자유결합 = 혁신' }
            ].map((item, i) => (
              <div 
                key={i} 
                style={{ 
                  padding: '16px', 
                  background: 'var(--bg-light)', 
                  borderRadius: '12px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '1px solid var(--border-light)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg-mint)'
                  e.currentTarget.style.borderColor = 'var(--accent-mint)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-light)'
                  e.currentTarget.style.borderColor = 'var(--border-light)'
                }}
              >
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{item.icon}</div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-black)', marginBottom: '4px' }}>{item.title}</div>
                <div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '28px' }}>
          <IsometricCube size={35} color="var(--accent-mint)" delay={500} />
          <IsometricCube size={45} color="#2563EB" delay={700} />
          <IsometricCube size={35} color="var(--accent-mint)" delay={900} />
        </div>
        <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginBottom: '20px' }}>
          아직 증명해야 할 것들이 있습니다. 하나씩 성과를 만들어가며 기여도를 증명해 나가겠습니다.
        </p>
        <div className="contact-grid">
          <div className="contact-item">
            <div className="contact-label">Company</div>
            <div className="contact-value">태성에스앤아이</div>
          </div>
          <div className="contact-item">
            <div className="contact-label">Document</div>
            <div className="contact-value">v2.0 (2026.03)</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tab2

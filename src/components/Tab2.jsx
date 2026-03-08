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
      if (e.deltaY > 0) onSlideChange(Math.min(currentSlide + 1, 13))
      else onSlideChange(Math.max(currentSlide - 1, 0))
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [currentSlide, onSlideChange])

  return (
    <div ref={containerRef} className="slides-container">
      {/* ========================================
          PART 1: 문제 정의 (Why)
          ======================================== */}
      
      {/* SLIDE 0: Connect 개요 */}
      <section className={`slide content-slide ${currentSlide === 0 ? 'active' : ''}`}>
        <div className="slide-left" style={{ background: 'linear-gradient(135deg, var(--bg-mint) 0%, var(--bg-light) 100%)' }}>
          <div className="slide-label">Overview</div>
          <h2 className="slide-title">Connect<br />정리</h2>
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
              "기술력을 신뢰로 바꾸는 소통"
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-gray)', lineHeight: 1.6 }}>
              기술과 시장 사이의 연결 역할을 통해 기술을 가치로 전환
            </div>
          </div>
          <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>📑 슬라이드 구성</div>
          <div className="story-list">
            {[
              { num: '01', title: '직면 과제', desc: '현재 문제점과 홍보 장벽 분석' },
              { num: '02-04', title: '연결의 가치', desc: '사례로 증명하는 연결의 힘' },
              { num: '05-08', title: '3대 시스템', desc: '제안서·디자인·협업 체계' },
              { num: '09-13', title: '실행 계획', desc: '기대효과, 로드맵, 검증' }
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

      {/* SLIDE 1: 직면 과제 + 홍보 장벽 통합 */}
      <section className={`slide content-slide ${currentSlide === 1 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Part 1 — 문제 정의</div>
          <h2 className="slide-title">직면<br />과제</h2>
          <p className="slide-desc">기술 홍보의 현실적 장벽</p>
          <div style={{ marginTop: '20px', padding: '16px', background: 'var(--bg-light)', borderRadius: '12px' }}>
            <div style={{ fontSize: '10px', fontWeight: 600, color: 'var(--text-gray)', marginBottom: '10px' }}>현재 상황</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ padding: '8px 12px', background: '#FF6B6B', color: 'white', borderRadius: '8px', fontSize: '11px', fontWeight: 600 }}>기술력</div>
              <div style={{ width: '40px', height: '3px', background: 'repeating-linear-gradient(90deg, #FF6B6B 0px, #FF6B6B 8px, transparent 8px, transparent 12px)', borderRadius: '2px' }} />
              <div style={{ padding: '8px 12px', background: 'var(--border-light)', color: 'var(--text-gray)', borderRadius: '8px', fontSize: '11px', fontWeight: 600, opacity: 0.5 }}>시장 인식</div>
            </div>
            <div style={{ fontSize: '9px', color: '#FF6B6B', marginTop: '8px' }}>⚠️ 기술력 ≠ 시장 인정</div>
          </div>
        </div>
        <div className="slide-right">
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>🔍 조직 과제</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
            {[
              { icon: '📄', title: '제안서 제출', desc: '제작 리소스 부족, 담당자 과부하' },
              { icon: '📊', title: '경쟁 PT', desc: '발주처 관점 시각 자료 부족' },
              { icon: '🖥️', title: '플랫폼 UI', desc: '브랜드 통일성·사용성 가이드 부재' },
              { icon: '🏢', title: '브랜드', desc: '"스마트 건설 기업" 전환 필요' }
            ].map((item, i) => (
              <div key={i} style={{ padding: '12px', background: 'var(--bg-light)', borderRadius: '10px', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '16px', marginBottom: '6px' }}>{item.icon}</div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-black)', marginBottom: '4px' }}>{item.title}</div>
                <div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '10px', color: 'var(--text-black)' }}>🚧 홍보 장벽</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { title: '전달의 어려움', desc: '높은 기술력이 발주처에게 충분히 전달되지 못함', color: '#FF6B6B' },
              { title: '전문성의 역설', desc: '복잡한 용어가 기술 가치 체감을 방해', color: '#FFB347' },
              { title: '접근성 결여', desc: '고사양 PC 없이는 기술 시연이 어려움', color: '#87CEEB' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: 'var(--bg-light)', borderRadius: '8px', borderLeft: `3px solid ${item.color}` }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-black)' }}>{item.title}</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          PART 2: 연결의 가치 (사례)
          ======================================== */}

      {/* SLIDE 2: 연결의 가치 - 잡스 빌딩 + 시냅스 통합 */}
      <section className={`slide content-slide ${currentSlide === 2 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">Part 2 — 연결의 가치</div>
          <h2 className="slide-title">연결이<br />가치다</h2>
          <p className="slide-desc">물리적 공간부터 신경망까지</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>
            "환경이 행동을, 연결이 지능을 만든다"
          </p>
          <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(255,255,255,0.9)', borderRadius: '12px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-black)' }}>핵심 인사이트</div>
            <div style={{ fontSize: '10px', color: 'var(--text-gray)', lineHeight: 1.6 }}>
              잡스의 픽사 빌딩과 뇌의 시냅스는 같은 원리:<br/>
              <strong style={{ color: 'var(--accent-mint)' }}>"연결의 양과 질이 창의성을 결정"</strong>
            </div>
          </div>
        </div>
        <div className="slide-right">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
            <div style={{ padding: '16px', background: 'var(--bg-light)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>🏛️</div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-black)', marginBottom: '6px' }}>픽사 빌딩</div>
              <div style={{ fontSize: '10px', color: 'var(--text-gray)', lineHeight: 1.5 }}>
                화장실을 1층에만 배치<br/>
                → 우연한 마주침 유도<br/>
                → 창의적 협업 발생
              </div>
            </div>
            <div style={{ padding: '16px', background: 'var(--bg-mint)', borderRadius: '12px', border: '2px solid var(--accent-mint)' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>🧠</div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-mint)', marginBottom: '6px' }}>시냅스 연결</div>
              <div style={{ fontSize: '10px', color: 'var(--text-gray)', lineHeight: 1.5 }}>
                뉴런 860억 × 시냅스 100조<br/>
                → 연결이 지능을 결정<br/>
                → 자유로운 결합 = 창의성
              </div>
            </div>
          </div>
          <div style={{ 
            padding: '16px', 
            background: 'linear-gradient(135deg, var(--bg-mint) 0%, var(--bg-light) 100%)', 
            borderRadius: '12px',
            marginBottom: '16px',
            border: '2px solid var(--accent-mint)'
          }}>
            <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '10px', color: 'var(--text-black)' }}>태성에스앤아이 적용</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '4px' }}>🔬</div>
                <div style={{ fontSize: '10px', fontWeight: 600 }}>기술팀</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontSize: '9px', color: 'var(--accent-mint)', marginBottom: '2px' }}>시냅스</div>
                <div style={{ width: '50px', height: '2px', background: 'var(--accent-mint)', borderRadius: '2px' }} />
                <div style={{ 
                  marginTop: '6px',
                  padding: '4px 10px', 
                  background: 'var(--accent-mint)', 
                  color: 'white', 
                  borderRadius: '15px',
                  fontSize: '9px',
                  fontWeight: 600
                }}>UI/UX</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '4px' }}>💰</div>
                <div style={{ fontSize: '10px', fontWeight: 600 }}>시장</div>
              </div>
            </div>
          </div>
          <div className="highlight-box" style={{ fontSize: '12px' }}>
            <strong>💡 결론:</strong> UI/UX는 기술과 시장을 연결하는 "시냅스" 역할
          </div>
        </div>
      </section>

      {/* SLIDE 3: AI 시대의 역할 - AI 언어모델 + 생존전략 통합 */}
      <section className={`slide content-slide ${currentSlide === 3 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Part 2 — AI 시대</div>
          <h2 className="slide-title">AI 시대<br />역할</h2>
          <p className="slide-desc">실행은 AI, 설계는 인간</p>
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
          <div style={{ marginTop: '16px', padding: '14px', background: 'var(--bg-light)', borderRadius: '12px' }}>
            <div style={{ fontSize: '10px', fontWeight: 600, color: 'var(--text-gray)', marginBottom: '8px' }}>AI가 대체 vs 인간만 가능</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ flex: 1, fontSize: '10px', color: 'var(--text-gray)' }}>
                ❌ 스케치→HTML<br/>
                ❌ 레이아웃 생성
              </div>
              <div style={{ flex: 1, fontSize: '10px', color: 'var(--accent-mint)', fontWeight: 600 }}>
                ✓ 무엇을 그릴지<br/>
                ✓ 왜 가치있는지
              </div>
            </div>
          </div>
        </div>
        <div className="slide-right">
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>AI 언어모델 기능 → 역할 매핑</div>
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
          <div className="highlight-box" style={{ fontSize: '12px', background: 'var(--bg-mint)' }}>
            <strong>🎯 생존 전략:</strong> AI를 도구로 활용하는 "설계자"가 되어 기술을 시장의 언어로 번역
          </div>
        </div>
      </section>

      {/* SLIDE 4: 자유결합과 템플릿 - 창발성 + WIX 통합 */}
      <section className={`slide content-slide ${currentSlide === 4 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">Part 2 — 민주화</div>
          <h2 className="slide-title">자유결합<br />템플릿</h2>
          <p className="slide-desc">누구나 전문가 수준의 결과물</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>
            "전체는 부분의 합보다 크다"
          </p>
          <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(255,255,255,0.9)', borderRadius: '12px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-black)' }}>WIX가 증명한 것</div>
            <div style={{ fontSize: '10px', color: 'var(--text-gray)', lineHeight: 1.5 }}>
              코딩 없이도 웹사이트 제작<br/>
              → <strong style={{ color: 'var(--accent-mint)' }}>BIM 데이터도 같은 방식 적용 가능</strong>
            </div>
          </div>
        </div>
        <div className="slide-right">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
            <div style={{ padding: '14px', background: 'var(--bg-light)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-gray)' }}>고정된 프로세스</div>
              <div style={{ fontSize: '16px', textAlign: 'center', marginBottom: '6px' }}>A → B → C</div>
              <div style={{ fontSize: '10px', color: 'var(--accent-coral)' }}>
                = 예측 가능<br/>
                = 창의성 낮음
              </div>
            </div>
            <div style={{ padding: '14px', background: 'var(--bg-mint)', borderRadius: '12px', border: '2px solid var(--accent-mint)' }}>
              <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '8px', color: 'var(--accent-mint)' }}>자유로운 템플릿</div>
              <div style={{ fontSize: '16px', textAlign: 'center', marginBottom: '6px' }}>A ↔ B ↔ C</div>
              <div style={{ fontSize: '10px', color: 'var(--accent-mint)' }}>
                = 새로운 조합<br/>
                = 창의성 높음 ★
              </div>
            </div>
          </div>
          <div style={{ 
            padding: '16px', 
            background: 'linear-gradient(135deg, var(--bg-light) 0%, var(--bg-mint) 100%)', 
            borderRadius: '12px',
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
          </div>
          <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-black)' }}>기대 효과</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[
              { icon: '💬', text: '부서 간 자유로운 소통' },
              { icon: '👷', text: '현장 인력 직접 대시보드 구성' },
              { icon: '📐', text: '표준 템플릿으로 품질 일관성' },
              { icon: '⚡', text: '빠른 커스터마이징' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', padding: '8px', background: 'var(--bg-light)', borderRadius: '6px' }}>
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          PART 3: 3대 시스템 제안
          ======================================== */}

      {/* SLIDE 5: 3대 시스템 개요 */}
      <section className={`slide content-slide ${currentSlide === 5 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Part 3 — Solution</div>
          <h2 className="slide-title">3대<br />시스템</h2>
          <p className="slide-desc">핵심 해결 전략</p>
          <div style={{ marginTop: '20px', display: 'flex', gap: '12px', justifyContent: 'center' }}>
            {[
              { size: 35, color: 'var(--accent-mint)', icon: '📊' },
              { size: 45, color: '#00A88A', icon: '🎨' },
              { size: 35, color: 'var(--accent-mint)', icon: '🤝' }
            ].map((cube, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <IsometricCube size={cube.size} color={cube.color} delay={300 + i * 200} />
                <div style={{ fontSize: '16px', marginTop: '8px' }}>{cube.icon}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="slide-right">
          <div className="feature-cards" style={{ gridTemplateColumns: '1fr' }}>
            {[
              { icon: '📊', title: '제안서 시각화 체계', desc: '템플릿 + 컴포넌트 기반 제안서/PT 제작 시스템', benefit: '누구나 일관된 품질의 제안서 제작', tag: '수주 경쟁력', color: 'var(--accent-mint)' },
              { icon: '🎨', title: '디자인 시스템', desc: '공용 컴포넌트·스타일 가이드·아이콘 라이브러리', benefit: '담당자 변경되어도 일관성 유지', tag: '브랜드 통일', color: '#2563EB' },
              { icon: '🤝', title: '협업 프로세스', desc: '유관 부서 간 자료 공유 및 소통 체계', benefit: '정보 단절로 인한 재작업 방지', tag: '효율화', color: '#00A88A' }
            ].map((item, i) => (
              <div key={i} className="feature-card" style={{ '--index': i, display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div className="feature-icon" style={{ background: `${item.color}20`, fontSize: '28px', minWidth: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</div>
                <div style={{ flex: 1 }}>
                  <div className="feature-title" style={{ marginBottom: '4px' }}>{item.title}</div>
                  <div className="feature-desc" style={{ marginBottom: '6px' }}>{item.desc}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '10px', color: item.color, fontWeight: 600 }}>✓ {item.benefit}</span>
                    <span style={{ fontSize: '9px', padding: '2px 8px', background: `${item.color}15`, borderRadius: '10px', color: item.color }}>{item.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 6: 제안서 시각화 체계 */}
      <section className={`slide content-slide ${currentSlide === 6 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">System 01</div>
          <h2 className="slide-title">제안서<br />시각화</h2>
          <p className="slide-desc">3초 만에 보여주는 기술력</p>
          <div style={{ 
            marginTop: '24px', 
            padding: '20px', 
            background: 'rgba(255,255,255,0.8)', 
            borderRadius: '16px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '8px' }}>📱</div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-black)' }}>스마트 모바일 브로슈어</div>
            <div style={{ fontSize: '10px', color: 'var(--text-gray)', marginTop: '4px' }}>QR 스캔 한 번으로 즉시 체험</div>
          </div>
        </div>
        <div className="slide-right">
          <div className="story-list" style={{ marginBottom: '16px' }}>
            {[
              { num: '01.', title: 'Zero Barrier', desc: '설치 NO, 로그인 NO. QR 코드만으로 즉각 구동', icon: '🚫', highlight: true },
              { num: '02.', title: 'Anywhere', desc: '지하 현장, 이동 중 어디서든 작동', icon: '🌍' },
              { num: '03.', title: 'Visual Trust', desc: '실제 BIM 데이터 시각화로 "와우 모먼트"', icon: '✨' }
            ].map((item, i) => (
              <div 
                key={i} 
                className="story-item"
                style={{
                  padding: '12px',
                  background: item.highlight ? 'var(--bg-mint)' : 'var(--bg-white)',
                  borderColor: item.highlight ? 'var(--accent-mint)' : 'var(--border-light)'
                }}
              >
                <span className="story-num" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
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
          <div className="stats-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="stat-box" style={{ background: 'var(--bg-mint)' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--accent-mint)' }}>3초</div>
              <div className="stat-label">로딩 시간</div>
            </div>
            <div className="stat-box">
              <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-black)' }}>0개</div>
              <div className="stat-label">설치 필요</div>
            </div>
            <div className="stat-box">
              <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--accent-mint)' }}>5MB</div>
              <div className="stat-label">최적화 용량</div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 7: 디자인 시스템 */}
      <section className={`slide content-slide ${currentSlide === 7 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">System 02</div>
          <h2 className="slide-title">디자인<br />시스템</h2>
          <p className="slide-desc">일관된 브랜드 경험</p>
          <div style={{ marginTop: '20px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
            {[
              { size: 40, color: 'var(--accent-mint)', label: 'Color', icon: '🎨' },
              { size: 50, color: '#00A88A', label: 'Type', icon: 'Aa' },
              { size: 40, color: 'var(--accent-mint)', label: 'Layout', icon: '▤' }
            ].map((cube, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <IsometricCube size={cube.size} color={cube.color} delay={300 + i * 200} />
                <div style={{ fontSize: '9px', color: 'var(--text-gray)', marginTop: '8px' }}>{cube.icon} {cube.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="slide-right">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '16px' }}>
            {[
              { icon: 'Aa', name: 'Typography', items: '제목/본문/캡션 규칙', color: '#6366f1' },
              { icon: '◐', name: 'Color', items: '브랜드·시맨틱 컬러', color: '#f59e0b' },
              { icon: '▤', name: 'Layout', items: '8px 그리드·여백 체계', color: '#10b981' },
              { icon: '◻', name: 'Components', items: '버튼·카드·테이블', color: '#ec4899' }
            ].map((item, i) => (
              <div key={i} style={{ padding: '14px', background: 'var(--bg-light)', borderRadius: '10px', border: '1px solid var(--border-light)', textAlign: 'center' }}>
                <div style={{ 
                  width: '32px', height: '32px', borderRadius: '8px', 
                  background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 8px', fontSize: '14px', fontWeight: 700, color: item.color
                }}>{item.icon}</div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-black)', marginBottom: '4px' }}>{item.name}</div>
                <div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>{item.items}</div>
              </div>
            ))}
          </div>
          <div className="highlight-box" style={{ fontSize: '12px' }}>
            <strong>🎯 목표:</strong> 담당자가 바뀌어도 일관된 품질 유지
          </div>
          <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: '10px', background: 'var(--bg-light)', borderRadius: '8px' }}>
            <span style={{ fontSize: '10px', color: 'var(--text-gray)' }}>규칙 정의</span>
            <span style={{ color: 'var(--accent-mint)' }}>→</span>
            <span style={{ fontSize: '10px', color: 'var(--text-gray)' }}>컴포넌트화</span>
            <span style={{ color: 'var(--accent-mint)' }}>→</span>
            <span style={{ fontSize: '10px', color: 'var(--accent-mint)', fontWeight: 600 }}>일관된 결과물</span>
          </div>
        </div>
      </section>

      {/* SLIDE 8: 협업 체계 - 부서간 소통 + ECO SYSTEM + 함께만들기 통합 */}
      <section className={`slide content-slide ${currentSlide === 8 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">System 03</div>
          <h2 className="slide-title">협업<br />체계</h2>
          <p className="slide-desc">연결이 효율을 만든다</p>
          <div style={{ marginTop: '20px' }}>
            <Timeline 
              items={[
                { period: '즉시', title: '주간 미팅', desc: '30분 싱크업', active: true },
                { period: '1개월', title: '공용 자산', desc: '컴포넌트 구축', active: true },
                { period: '3개월', title: '역할 분담', desc: '기준 명확화', active: false }
              ]}
            />
          </div>
        </div>
        <div className="slide-right">
          <div style={{ padding: '16px', background: 'var(--bg-light)', borderRadius: '12px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '12px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '4px' }}>📋</div>
                <div style={{ fontSize: '10px', fontWeight: 600 }}>연구소</div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '4px' }}>🏗️</div>
                <div style={{ fontSize: '10px', fontWeight: 600 }}>사업부</div>
              </div>
              <div style={{ padding: '6px 14px', background: 'var(--accent-mint)', color: 'white', borderRadius: '15px', fontSize: '9px', fontWeight: 600 }}>UI/UX 연결</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '4px' }}>💻</div>
                <div style={{ fontSize: '10px', fontWeight: 600 }}>기술개발팀</div>
              </div>
            </div>
          </div>
          <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '10px', color: 'var(--text-black)' }}>협업 아이디어</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { icon: '📅', title: '주간 싱크업', desc: '30분 소통 → 정보 공유로 재작업 방지', color: 'var(--accent-mint)' },
              { icon: '📐', title: '공용 디자인 시스템', desc: '제안서/플랫폼 공유 컴포넌트 → 제작 시간 단축', color: '#2563EB' },
              { icon: '📋', title: '역할 분담 가이드', desc: '핵심 업무 우선 → 품질 일관성 + 보안', color: '#00A88A' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: 'var(--bg-light)', borderRadius: '8px', borderLeft: `3px solid ${item.color}` }}>
                <span style={{ fontSize: '18px' }}>{item.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-black)' }}>{item.title}</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          PART 4: 기대효과 & 실행
          ======================================== */}

      {/* SLIDE 9: 기대 효과 - Connect정리 + VALUE&COST 통합 */}
      <section className={`slide content-slide ${currentSlide === 9 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Part 4 — Value</div>
          <h2 className="slide-title">기대<br />효과</h2>
          <p className="slide-desc">비즈니스 가치 및 경제성</p>
          <div style={{ marginTop: '20px', padding: '16px', background: 'var(--bg-light)', borderRadius: '12px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '10px', color: 'var(--text-black)' }}>대표님의 질문</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                { q: '투자 대비 효과?', a: '비용 절감 + 품질 향상' },
                { q: '뭘 해줄 수 있나?', a: '기술 → 상품 전환' },
                { q: 'AI 시대에 필요?', a: '설계는 인간의 몫' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}>
                  <span style={{ color: 'var(--text-gray)' }}>{item.q}</span>
                  <span style={{ color: 'var(--accent-mint)', fontWeight: 600 }}>{item.a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="slide-right">
          <div className="stats-row" style={{ marginBottom: '16px' }}>
            {[
              { value: '50%', label: '외주비 절감 (기대)', icon: '💰' },
              { value: '3일', label: '제작 기간', icon: '⏱️' },
              { value: '50%+', label: '효율 향상 (기대)', icon: '📈' }
            ].map((s, i) => (
              <div key={i} className="stat-box">
                <div className="stat-icon">{s.icon}</div>
                <div className="stat-value" style={{ fontSize: '24px' }}>{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <table className="data-table" style={{ fontSize: '11px' }}>
            <thead><tr><th>측면</th><th>효과</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>💎 수익성</strong></td>
                <td>수주 성공률 제고, 핵심 협상 시간 확보</td>
              </tr>
              <tr>
                <td><strong>💰 비용</strong></td>
                <td>외부 제작비 절감 (예상), 지속 가능한 인프라</td>
              </tr>
              <tr>
                <td><strong>🔒 품질</strong></td>
                <td>UX 차별화로 플랫폼 경쟁력 강화</td>
              </tr>
            </tbody>
          </table>
          <div style={{ marginTop: '12px', padding: '10px', background: '#FFF3E0', borderRadius: '8px', fontSize: '10px', color: '#F97316', textAlign: 'center' }}>
            ⚠️ 위 수치는 업계 벤치마크 기반 예상치 — 시범 운용 후 실측 예정
          </div>
        </div>
      </section>

      {/* SLIDE 10: 로드맵 */}
      <section className={`slide content-slide ${currentSlide === 10 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Part 4 — Roadmap</div>
          <h2 className="slide-title">ROAD<br />MAP</h2>
          <p className="slide-desc">단계별 실행 계획</p>
          <div style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              {[
                { n: 1, label: '자산화', active: true },
                { n: 2, label: '검증', active: true },
                { n: 3, label: '확산', active: false }
              ].map((phase, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ 
                    width: '32px', height: '32px', 
                    background: phase.active ? 'var(--accent-mint)' : 'var(--bg-light)', 
                    borderRadius: '50%', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    color: phase.active ? 'white' : 'var(--text-gray)', 
                    fontSize: '11px', fontWeight: 700,
                    border: phase.active ? 'none' : '2px dashed var(--border-light)'
                  }}>{phase.n}</div>
                  {i < 2 && <div style={{ width: '24px', height: '2px', background: phase.active ? 'var(--accent-mint)' : 'var(--border-light)' }} />}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="slide-right">
          <div className="process-steps">
            {[
              { num: 1, title: 'Phase 1: 자산화', desc: 'BIM/Unity to Web 파이프라인 구축, 핵심 UI 추출', color: 'var(--accent-mint)' },
              { num: 2, title: 'Phase 2: 검증', desc: '타겟별 제안서 웹 템플릿 개발, 내부 교육 및 피드백', color: '#00A88A' },
              { num: 3, title: 'Phase 3: 확산', desc: '글로벌 대응 대시보드, 링크드인 브랜드 확장', color: 'var(--accent-mint)' }
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
        </div>
      </section>

      {/* SLIDE 11: 증명 과제 */}
      <section className={`slide content-slide ${currentSlide === 11 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Validation</div>
          <h2 className="slide-title">증명<br />과제</h2>
          <p className="slide-desc">앞으로 검증해야 할 것</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>
            "사례는 가능성을, 실행은 성과를"
          </p>
        </div>
        <div className="slide-right">
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>📋 3대 시스템 검증 계획</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
            {[
              { system: '제안서 시각화', q: '수주에 실제로 영향을 주는가?', how: '시범 프로젝트 A/B 비교' },
              { system: '디자인 시스템', q: '제작 시간이 단축되는가?', how: 'Before/After 측정' },
              { system: '협업 체계', q: '재작업이 줄어드는가?', how: '월간 재작업 건수 추적' }
            ].map((item, i) => (
              <div key={i} style={{
                padding: '14px',
                background: 'var(--bg-light)',
                borderRadius: '10px',
                border: '1px solid var(--border-light)'
              }}>
                <div style={{ fontSize: '10px', color: 'var(--accent-mint)', fontWeight: 600, marginBottom: '4px' }}>{item.system}</div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-black)', marginBottom: '6px' }}>{item.q}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '10px', color: 'var(--text-gray)' }}>방법: {item.how}</span>
                  <span style={{ fontSize: '9px', padding: '2px 8px', background: '#FFF3E0', borderRadius: '10px', color: '#F97316' }}>검증 예정</span>
                </div>
              </div>
            ))}
          </div>
          <div className="highlight-box" style={{ fontSize: '12px', background: 'var(--bg-mint)', border: '1px solid var(--accent-mint)' }}>
            <strong>💡 접근 방식:</strong> 작게 시작 → 성과 측정 → 데이터로 증명 → 단계적 확대
          </div>
        </div>
      </section>

      {/* SLIDE 12: 벤치마킹 */}
      <section className={`slide content-slide ${currentSlide === 12 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Benchmark</div>
          <h2 className="slide-title">글로벌<br />벤치마킹</h2>
          <p className="slide-desc">검증된 디자인 시스템 참고</p>
        </div>
        <div className="slide-right">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
            {[
              { name: 'Autodesk', desc: 'BIM 소프트웨어 글로벌 1위', insight: '제품 간 일관된 UX로 학습비용 최소화', color: '#00bfff' },
              { name: 'Oracle Cloud', desc: '엔터프라이즈 클라우드 리더', insight: 'Redwood Design System으로 통합 경험', color: '#ff0000' }
            ].map((item, i) => (
              <div key={i} style={{ padding: '16px', background: 'var(--bg-light)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color }} />
                  <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-black)' }}>{item.name}</span>
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-gray)', marginBottom: '6px' }}>{item.desc}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-black)', lineHeight: 1.4 }}>→ {item.insight}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: '14px', background: 'var(--bg-mint)', borderRadius: '10px', borderLeft: '3px solid var(--accent-mint)' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-mint)', marginBottom: '4px' }}>태성에스엔아이 적용 방향</div>
            <div style={{ fontSize: '11px', color: 'var(--text-gray)' }}>
              BIM 기술 특화 디자인 시스템 → 플랫폼 일관성 확보 + 기술 홍보 차별화
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 13: 결론 */}
      <section className={`slide closing-slide ${currentSlide === 13 ? 'active' : ''}`}>
        <h1 className="closing-title">연결이 가치를 만든다</h1>
        <p className="closing-subtitle">CONNECTION CREATES VALUE</p>
        <div style={{ maxWidth: '600px', textAlign: 'center', marginBottom: '24px' }}>
          <p style={{ fontSize: '14px', color: 'var(--text-gray)', fontStyle: 'italic', lineHeight: 1.7 }}>
            {currentSlide === 13 && <TypeWriter text='"기술과 시장 사이의 연결 역할을 통해 가치를 만들어 가겠습니다"' speed={30} delay={500} />}
          </p>
        </div>
        <div style={{ maxWidth: '700px', marginBottom: '28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {[
              { icon: '📊', title: '제안서 시각화', desc: '수주 경쟁력 강화' },
              { icon: '🎨', title: '디자인 시스템', desc: '브랜드 일관성' },
              { icon: '🤝', title: '협업 체계', desc: '효율적 소통' }
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

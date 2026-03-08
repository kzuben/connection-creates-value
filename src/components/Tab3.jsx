import { useEffect, useRef, useState } from 'react'
import { AnimatedCounter, TypeWriter, AnimatedProgressBar, CircularProgress, FlowDiagram, IsometricCube, Timeline } from './Charts'

function Tab3({ currentSlide, onSlideChange }) {
  const containerRef = useRef(null)
  const [activeRole, setActiveRole] = useState('owner')
  const [sliderValue, setSliderValue] = useState(50)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e) => {
      e.preventDefault()
      if (e.deltaY > 0) onSlideChange(Math.min(currentSlide + 1, 10))
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
      {/* SLIDE 0: 개요 */}
      <section className={`slide content-slide ${currentSlide === 0 ? 'active' : ''}`}>
        <div className="slide-left" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, var(--bg-light) 100%)' }}>
          <div className="slide-label">Overview</div>
          <h2 className="slide-title">Demo<br />Wireframe</h2>
          <p className="slide-desc">데모 사이트 UX 설계</p>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '12px', fontStyle: 'italic' }}>"기술을 체험하게 하십시오"</p>
        </div>
        <div className="slide-right">
          <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-black)' }}>📋 핵심 메시지</div>
          <div style={{ padding: '20px', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, var(--bg-light) 100%)', borderRadius: '16px', marginBottom: '20px', border: '2px solid #6366F1' }}>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#6366F1', marginBottom: '8px' }}>"보여주지 말고, 체험하게 하십시오"</div>
            <div style={{ fontSize: '12px', color: 'var(--text-gray)', lineHeight: 1.6 }}>역할별 맞춤 UI로 고객이 직접 기술의 가치를 경험하도록 설계</div>
          </div>
          <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>📑 슬라이드 구성</div>
          <div className="story-list">
            {[
              { num: '01', title: '통합 대시보드', desc: 'BIM/IoT/센서 실시간 모니터링' },
              { num: '02-03', title: 'Role-Based UX', desc: '발주처/안전관리자/작업자별 화면' },
              { num: '04-05', title: 'CDE & 2D↔3D', desc: '데이터 흐름, 비교 슬라이더' },
              { num: '06-07', title: '글로벌 & 반응형', desc: '다국어, 멀티 디바이스' },
              { num: '08-10', title: 'CTA & 결론', desc: '문의하기, 기술 스펙' }
            ].map((item, i) => (
              <div key={i} className="story-item" style={{ padding: '8px' }}>
                <span className="story-num" style={{ fontSize: '10px', color: '#6366F1', minWidth: '45px' }}>{item.num}</span>
                <div className="story-content">
                  <div className="story-title" style={{ fontSize: '11px' }}>{item.title}</div>
                  <div className="story-desc" style={{ fontSize: '9px' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 1: 통합 대시보드 (BIM + 데이터 시각화 + 센서 통합) */}
      <section className={`slide content-slide ${currentSlide === 1 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Integrated Dashboard</div>
          <h2 className="slide-title">통합<br />대시보드</h2>
          <p className="slide-desc">BIM · 센서 · 데이터 통합</p>
          <div style={{ marginTop: '16px', padding: '12px', background: 'var(--bg-light)', borderRadius: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }} />
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#10b981' }}>LIVE</span>
            </div>
            <div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>실시간 데이터 연동 중</div>
          </div>
          <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {['📊 Charts', '🏗️ BIM', '🌡️ IoT'].map((tag, i) => (
              <span key={i} style={{ fontSize: '9px', padding: '4px 8px', background: 'var(--bg-mint)', borderRadius: '10px', color: 'var(--accent-mint)' }}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="slide-right">
          <div style={{ background: '#1a1a2e', borderRadius: '16px', padding: '12px', minHeight: '400px', position: 'relative', overflow: 'hidden' }}>
            {/* 헤더 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '28px', height: '28px', background: 'var(--accent-mint)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '14px' }}>🏗️</span></div>
                <div>
                  <div style={{ color: 'white', fontSize: '12px', fontWeight: 600 }}>TAESUNG BIM Platform</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '9px' }}>스마트시티 A구역</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                {['📊', '⚙️', '👤'].map((icon, i) => (
                  <div key={i} style={{ width: '24px', height: '24px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>{icon}</div>
                ))}
              </div>
            </div>
            
            {/* KPI 카드 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', marginBottom: '10px' }}>
              {[
                { label: '공정률', value: '78%', color: '#10b981', icon: '📈' },
                { label: '금일 작업', value: '12건', color: '#3b82f6', icon: '🔧' },
                { label: '이슈', value: '3건', color: '#f59e0b', icon: '⚠️' },
                { label: '안전 지수', value: '95점', color: '#8b5cf6', icon: '🛡️' }
              ].map((kpi, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize: '12px', marginBottom: '4px' }}>{kpi.icon}</div>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: kpi.color }}>{kpi.value}</div>
                  <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.6)' }}>{kpi.label}</div>
                </div>
              ))}
            </div>

            {/* 메인 콘텐츠 3분할 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 0.8fr', gap: '8px' }}>
              {/* 3D BIM 뷰어 */}
              <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.5)', marginBottom: '6px' }}>🏗️ 3D BIM Viewer</div>
                <div style={{ height: '120px', background: 'linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(139,92,246,0.1) 100%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px), linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px)', backgroundSize: '15px 15px', opacity: 0.5 }} />
                  <div style={{ zIndex: 1, display: 'flex', gap: '6px', alignItems: 'flex-end' }}>
                    <IsometricCube size={25} color="#6366F1" delay={300} />
                    <IsometricCube size={35} color="var(--accent-mint)" delay={500} />
                    <IsometricCube size={22} color="#f59e0b" delay={700} />
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginTop: '6px' }}>
                  {['🔄', '🔍', '📐', '📷'].map((btn, i) => (
                    <div key={i} style={{ width: '20px', height: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px' }}>{btn}</div>
                  ))}
                </div>
              </div>
              
              {/* 데이터 시각화 */}
              <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.5)', marginBottom: '6px' }}>📊 공정 현황</div>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '70px', padding: '0 4px', marginBottom: '8px' }}>
                  {[45, 58, 72, 65, 78, 85].map((val, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                      <div style={{ width: '12px', height: `${val * 0.7}px`, background: `linear-gradient(180deg, var(--accent-mint) 0%, #00A88A 100%)`, borderRadius: '2px 2px 0 0' }} />
                      <span style={{ fontSize: '7px', color: 'rgba(255,255,255,0.5)' }}>{i + 1}월</span>
                    </div>
                  ))}
                </div>
                {/* 미니 원형 차트 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: `conic-gradient(var(--accent-mint) 0deg 200deg, #3b82f6 200deg 280deg, rgba(255,255,255,0.1) 280deg 360deg)`, position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: '10px', background: '#1a1a2e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '9px', fontWeight: 700, color: 'white' }}>78%</span></div>
                  </div>
                  <div style={{ flex: 1 }}>
                    {[{ label: '완료', color: 'var(--accent-mint)' }, { label: '진행', color: '#3b82f6' }].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '2px', background: item.color }} />
                        <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.7)' }}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* IoT 센서 */}
              <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.5)', marginBottom: '6px' }}>🌡️ IoT 센서</div>
                {[
                  { icon: '🌡️', label: '온도', value: '24.5°C', status: 'ok' },
                  { icon: '💧', label: '습도', value: '65%', status: 'ok' },
                  { icon: '🌬️', label: '풍속', value: '3.2m/s', status: 'warn' },
                  { icon: '📊', label: '진동', value: '0.02g', status: 'ok' }
                ].map((sensor, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 6px', background: sensor.status === 'warn' ? 'rgba(245,158,11,0.1)' : 'rgba(255,255,255,0.03)', borderRadius: '4px', marginBottom: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ fontSize: '10px' }}>{sensor.icon}</span>
                      <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.6)' }}>{sensor.label}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ fontSize: '9px', fontWeight: 600, color: sensor.status === 'warn' ? '#f59e0b' : '#10b981' }}>{sensor.value}</span>
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: sensor.status === 'warn' ? '#f59e0b' : '#10b981' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 하단 알림 바 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', padding: '6px 8px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%' }} />
                <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.6)' }}>도면 승인 완료 · 2분 전</span>
              </div>
              <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.5)' }}>센서 12개 연동 | 60fps</div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 2: Role-Based UX */}
      <section className={`slide content-slide ${currentSlide === 2 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">Role-Based UX</div>
          <h2 className="slide-title">역할별<br />맞춤 화면</h2>
          <p className="slide-desc">발주처/안전관리자/작업자</p>
          <div style={{ marginTop: '20px' }}>
            <CircularProgress value={85} size={90} color={roleData[activeRole]?.color} />
            <div style={{ fontSize: '10px', color: 'var(--text-gray)', marginTop: '8px', textAlign: 'center' }}>사용자 만족도</div>
          </div>
        </div>
        <div className="slide-right">
          <div className="role-tabs">
            {Object.entries(roleData).map(([key, data]) => (
              <button key={key} className={`role-tab ${activeRole === key ? 'active' : ''}`} onClick={() => setActiveRole(key)} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '18px' }}>{data.icon}</span>{data.name}
              </button>
            ))}
          </div>
          <div className="dashboard-grid" style={{ marginBottom: '20px' }}>
            {roleData[activeRole].widgets.map((widget, i) => (
              <div key={i} className="widget-box" style={{ borderColor: activeRole === 'owner' && i === 2 ? 'var(--accent-coral)' : 'var(--border-light)', background: activeRole === 'owner' && i === 2 ? '#FFF5F5' : 'var(--bg-white)' }}>
                <div className="widget-title">Widget {i + 1}</div>
                <div className="widget-value">{widget}</div>
                <div style={{ marginTop: '8px' }}><AnimatedProgressBar value={85 - i * 10} color={roleData[activeRole].color} delay={i * 150} /></div>
              </div>
            ))}
          </div>
          <div className="highlight-box" style={{ fontSize: '11px' }}><strong>💡 핵심:</strong> 역할에 따라 필요한 정보만 보여주는 맞춤형 대시보드</div>
        </div>
      </section>

      {/* SLIDE 3: CDE Workflow */}
      <section className={`slide content-slide ${currentSlide === 3 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Section 02</div>
          <h2 className="slide-title">CDE<br />FLOW</h2>
          <p className="slide-desc">CDE ➔ SST CONNECTION</p>
          <p style={{ fontSize: '12px', color: 'var(--text-gray)', marginTop: '12px' }}>Core Logic - 데이터의 흐름</p>
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[{ icon: '📝', label: 'WIP', desc: '작업 중' }, { icon: '🔍', label: '검토', desc: '리뷰' }, { icon: '📤', label: 'SHARED', desc: '공유됨' }, { icon: '✅', label: 'PUBLISHED', desc: '승인됨' }, { icon: '🗄️', label: 'ARCHIVE', desc: '아카이브' }].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: 'var(--bg-light)', borderRadius: '8px', fontSize: '12px' }}>
                <span style={{ fontSize: '14px' }}>{item.icon}</span><strong>{item.label}</strong><span style={{ color: 'var(--text-gray)' }}>- {item.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="slide-right">
          <FlowDiagram steps={[{ icon: '📝', label: 'WIP' }, { icon: '🔍', label: '검토' }, { icon: '📤', label: 'SHARED' }, { icon: '✅', label: '승인' }, { icon: '📋', label: 'PUBLISHED' }, { icon: '🗄️', label: 'ARCHIVE' }]} activeIndex={5} />
          <div style={{ marginTop: '20px', fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>Interactive Kanban</div>
          <p style={{ fontSize: '11px', color: 'var(--text-gray)', marginBottom: '12px' }}>Trello처럼 카드를 드래그 앤 드롭하여 상태 변경</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', padding: '12px', background: 'var(--bg-light)', borderRadius: '12px' }}>
            {kanbanData.map((col, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '8px', padding: '10px', minHeight: '100px', border: i === 4 ? '2px solid #6366F1' : i === 3 ? '2px solid var(--accent-mint)' : '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '10px', fontWeight: 600, color: i === 3 ? 'var(--accent-mint)' : 'var(--text-gray)', marginBottom: '8px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>{i === 3 && <span>✨</span>}{col.col}</div>
                {col.cards.map((card, j) => (
                  <div key={j} style={{ padding: '8px', background: i === 3 ? 'var(--accent-mint)' : col.color, color: i === 3 ? 'white' : 'var(--text-black)', borderRadius: '6px', marginBottom: '6px', fontSize: '10px', cursor: 'grab' }}>{card}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 4: Magic Slider - 2D/3D 비교 */}
      <section className={`slide content-slide ${currentSlide === 4 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">Magic Slider</div>
          <h2 className="slide-title">2D↔3D<br />비교</h2>
          <p className="slide-desc">슬라이더로 직관적 비교</p>
          <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
            <div style={{ textAlign: 'center' }}><div style={{ fontSize: '28px', marginBottom: '4px' }}>📋</div><div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>2D 도면</div></div>
            <div style={{ fontSize: '20px', color: 'var(--accent-mint)', alignSelf: 'center' }}>⟷</div>
            <div style={{ textAlign: 'center' }}><div style={{ fontSize: '28px', marginBottom: '4px' }}>🏢</div><div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>3D BIM</div></div>
          </div>
        </div>
        <div className="slide-right">
          <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '10px', color: 'var(--text-black)' }}>Magic Slider Interface</div>
          <div className="slider-mock" style={{ marginBottom: '12px' }}>
            <span className="slider-label-left">2D</span>
            <div className="slider-track" style={{ position: 'relative' }}>
              <div className="slider-fill" style={{ width: `${sliderValue}%` }} />
              <input type="range" className="slider-input" min="0" max="100" value={sliderValue} onChange={(e) => setSliderValue(e.target.value)} style={{ cursor: 'grab' }} />
            </div>
            <span className="slider-label-right">3D</span>
          </div>
          <div style={{ height: '200px', borderRadius: '12px', display: 'flex', overflow: 'hidden', marginBottom: '16px', position: 'relative', border: '1px solid var(--border-light)' }}>
            <div style={{ width: `${sliderValue}%`, background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'width 0.1s ease', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '20px', border: '2px solid #ccc', borderRadius: '4px' }}>
                <div style={{ position: 'absolute', top: '10px', left: '10px', width: '40%', height: '3px', background: '#999' }} />
                <div style={{ position: 'absolute', top: '20px', left: '10px', width: '60%', height: '3px', background: '#999' }} />
                <div style={{ position: 'absolute', top: '30px', left: '10px', width: '30%', height: '3px', background: '#999' }} />
              </div>
            </div>
            <div style={{ flex: 1, background: 'linear-gradient(135deg, var(--bg-mint) 0%, rgba(59, 130, 246, 0.3) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
                <IsometricCube size={30} color="#6366F1" delay={0} />
                <IsometricCube size={45} color="var(--accent-mint)" delay={0} />
                <IsometricCube size={35} color="#3b82f6" delay={0} />
              </div>
            </div>
            <div style={{ position: 'absolute', left: `${sliderValue}%`, top: 0, bottom: 0, width: '4px', background: 'var(--accent-mint)', transform: 'translateX(-50%)', cursor: 'ew-resize' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '28px', height: '28px', background: 'var(--accent-mint)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>⟷</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ flex: 1, padding: '10px', background: 'var(--bg-light)', borderRadius: '8px', fontSize: '10px' }}><strong>2D 도면</strong><br /><span style={{ color: 'var(--text-gray)' }}>기존 CAD 방식</span></div>
            <div style={{ flex: 1, padding: '10px', background: 'var(--bg-mint)', borderRadius: '8px', fontSize: '10px' }}><strong style={{ color: 'var(--accent-mint)' }}>3D BIM</strong><br /><span style={{ color: 'var(--text-gray)' }}>정보 기반 모델</span></div>
          </div>
        </div>
      </section>

      {/* SLIDE 5: 글로벌 타겟 디자인 시스템 */}
      <section className={`slide content-slide ${currentSlide === 5 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Global Design</div>
          <h2 className="slide-title">글로벌<br />타겟</h2>
          <p className="slide-desc">아시아를 넘어 세계로</p>
          <div style={{ marginTop: '16px', padding: '14px', background: 'var(--bg-light)', borderRadius: '12px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-black)' }}>🌏 주요 타겟 시장</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['🇰🇷 한국', '🇯🇵 일본', '🇸🇬 싱가포르', '🌍 글로벌'].map((market, i) => (
                <span key={i} style={{ fontSize: '10px', padding: '4px 8px', background: i === 3 ? 'var(--bg-mint)' : 'white', borderRadius: '12px', border: '1px solid var(--border-light)' }}>{market}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="slide-right">
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-black)' }}>🎨 타겟 지향 디자인 시스템</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
            <div style={{ background: 'var(--bg-light)', borderRadius: '12px', padding: '14px', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}><span style={{ fontSize: '18px' }}>🌐</span><span style={{ fontSize: '11px', fontWeight: 600 }}>다국어 지원</span></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[{ lang: 'KO', text: '프로젝트 대시보드', flag: '🇰🇷' }, { lang: 'EN', text: 'Project Dashboard', flag: '🇺🇸' }, { lang: 'JP', text: 'プロジェクトダッシュボード', flag: '🇯🇵' }].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 8px', background: 'white', borderRadius: '6px', fontSize: '10px' }}>
                    <span>{item.flag}</span><span style={{ fontWeight: 600, color: 'var(--accent-mint)', width: '20px' }}>{item.lang}</span><span style={{ color: 'var(--text-gray)' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'var(--bg-light)', borderRadius: '12px', padding: '14px', border: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}><span style={{ fontSize: '18px' }}>🎯</span><span style={{ fontSize: '11px', fontWeight: 600 }}>문화별 UX 고려</span></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '10px' }}>
                <div style={{ padding: '6px 8px', background: 'white', borderRadius: '6px' }}><span style={{ color: 'var(--accent-mint)' }}>•</span> 날짜/시간 형식 로컬라이징</div>
                <div style={{ padding: '6px 8px', background: 'white', borderRadius: '6px' }}><span style={{ color: 'var(--accent-mint)' }}>•</span> 통화/단위 자동 변환</div>
                <div style={{ padding: '6px 8px', background: 'white', borderRadius: '6px' }}><span style={{ color: 'var(--accent-mint)' }}>•</span> RTL/LTR 레이아웃 지원</div>
              </div>
            </div>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: 'white', marginBottom: '12px' }}>🚀 글로벌 확장 방향</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {[{ phase: 'Phase 1', markets: '🇰🇷 한국', status: 'current' }, { phase: 'Phase 2', markets: '🇯🇵🇸🇬 아시아', status: 'next' }, { phase: 'Phase 3', markets: '🌍 글로벌', status: 'future' }].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: item.status === 'current' ? 'var(--accent-mint)' : item.status === 'next' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '6px', border: item.status === 'current' ? 'none' : '2px dashed rgba(255,255,255,0.3)' }}>
                      <span style={{ fontSize: '16px' }}>{item.markets.split(' ')[0]}</span>
                    </div>
                    <div style={{ fontSize: '9px', color: item.status === 'current' ? 'var(--accent-mint)' : 'rgba(255,255,255,0.5)' }}>{item.phase}</div>
                  </div>
                  {i < 2 && <div style={{ width: '40px', height: '2px', background: 'rgba(255,255,255,0.2)', margin: '0 8px', marginBottom: '20px' }} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 6: 멀티 디바이스 반응형 */}
      <section className={`slide content-slide ${currentSlide === 6 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">Responsive</div>
          <h2 className="slide-title">멀티<br />디바이스</h2>
          <p className="slide-desc">어디서든 동일한 경험</p>
          <div style={{ marginTop: '16px', padding: '14px', background: 'rgba(255,255,255,0.9)', borderRadius: '12px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '8px', color: 'var(--text-black)' }}>지원 기능</div>
            {['PWA 오프라인 모드', '푸시 알림', 'QR 스캔', '현장 사진 업로드'].map((feat, i) => (
              <div key={i} style={{ fontSize: '10px', color: 'var(--text-gray)', marginBottom: '2px' }}>✓ {feat}</div>
            ))}
          </div>
        </div>
        <div className="slide-right">
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-black)', textAlign: 'center' }}>📱💻🖥️ 디바이스에 종속되지 않는 UI</div>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'flex-end' }}>
            {/* Desktop */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '180px', height: '120px', background: '#1a1a2e', borderRadius: '8px 8px 0 0', padding: '6px', border: '2px solid #333', borderBottom: 'none' }}>
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)', borderRadius: '4px', padding: '6px' }}>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '6px' }}>
                    {[1, 2, 3, 4].map(i => (<div key={i} style={{ flex: 1, height: '18px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }} />))}
                  </div>
                  <div style={{ height: '60px', background: 'rgba(59,130,246,0.2)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <IsometricCube size={18} color="var(--accent-mint)" delay={0} />
                      <IsometricCube size={22} color="#6366F1" delay={0} />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ width: '200px', height: '10px', background: '#666', borderRadius: '0 0 4px 4px' }} />
              <div style={{ width: '80px', height: '5px', background: '#888', borderRadius: '0 0 4px 4px', margin: '0 auto' }} />
              <div style={{ fontSize: '10px', color: 'var(--text-gray)', marginTop: '8px' }}>💻 Desktop</div>
            </div>
            {/* Tablet */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '100px', height: '140px', background: '#1a1a2e', borderRadius: '10px', padding: '5px', border: '2px solid #333' }}>
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)', borderRadius: '6px', padding: '6px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', marginBottom: '5px' }}>
                    {[1, 2, 3, 4].map(i => (<div key={i} style={{ height: '16px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }} />))}
                  </div>
                  <div style={{ height: '55px', background: 'rgba(59,130,246,0.2)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IsometricCube size={20} color="var(--accent-mint)" delay={0} />
                  </div>
                </div>
              </div>
              <div style={{ fontSize: '10px', color: 'var(--text-gray)', marginTop: '8px' }}>📱 Tablet</div>
            </div>
            {/* Mobile */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '120px', background: '#1a1a2e', borderRadius: '12px', padding: '4px', border: '2px solid #333' }}>
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)', borderRadius: '8px', padding: '5px' }}>
                  <div style={{ height: '10px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px', marginBottom: '5px' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginBottom: '5px' }}>
                    {[1, 2].map(i => (<div key={i} style={{ height: '16px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }} />))}
                  </div>
                  <div style={{ height: '40px', background: 'rgba(59,130,246,0.2)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IsometricCube size={14} color="var(--accent-mint)" delay={0} />
                  </div>
                </div>
              </div>
              <div style={{ fontSize: '10px', color: 'var(--text-gray)', marginTop: '8px' }}>📱 Mobile</div>
            </div>
          </div>
          <div style={{ marginTop: '20px', padding: '12px', background: 'var(--bg-light)', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--accent-mint)', marginBottom: '4px' }}>✨ Responsive Design</div>
            <div style={{ fontSize: '10px', color: 'var(--text-gray)' }}>PC, 태블릿, 모바일 어디서든 동일한 기능과 경험 제공</div>
          </div>
        </div>
      </section>

      {/* SLIDE 7: CTA */}
      <section className={`slide content-slide ${currentSlide === 7 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">CTA</div>
          <h2 className="slide-title">데모<br />체험하기</h2>
          <p className="slide-desc">지금 바로 경험해보세요</p>
        </div>
        <div className="slide-right">
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div style={{ width: '150px', height: '150px', background: 'white', borderRadius: '16px', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--border-light)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              <div style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, var(--bg-mint) 0%, rgba(99,102,241,0.2) 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '48px' }}>📱</span>
              </div>
            </div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-black)', marginBottom: '8px' }}>QR 스캔으로 데모 체험</div>
            <div style={{ fontSize: '12px', color: 'var(--text-gray)', marginBottom: '20px' }}>모바일에서 직접 기능을 테스트해보세요</div>
            <button style={{ padding: '14px 32px', background: 'var(--accent-mint)', color: 'white', border: 'none', borderRadius: '30px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 15px rgba(0, 195, 154, 0.3)' }}>문의하기 →</button>
          </div>
        </div>
      </section>

      {/* SLIDE 8: 기술 스펙 */}
      <section className={`slide content-slide ${currentSlide === 8 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">Appendix</div>
          <h2 className="slide-title">기술<br />스펙</h2>
          <p className="slide-desc">구현 기술 상세</p>
        </div>
        <div className="slide-right">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { title: 'Frontend', items: ['React 18+', 'TypeScript', 'Tailwind CSS', 'Three.js (3D)'] },
              { title: 'Backend', items: ['Node.js', 'GraphQL API', 'PostgreSQL', 'Redis Cache'] },
              { title: 'Infrastructure', items: ['AWS/Azure', 'Docker/K8s', 'CI/CD Pipeline', 'CDN'] },
              { title: 'Security', items: ['OAuth 2.0', 'JWT Token', 'RBAC', 'Data Encryption'] }
            ].map((section, i) => (
              <div key={i} style={{ background: 'var(--bg-light)', borderRadius: '12px', padding: '14px', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, marginBottom: '10px', color: 'var(--accent-mint)' }}>{section.title}</div>
                {section.items.map((item, j) => (
                  <div key={j} style={{ fontSize: '10px', color: 'var(--text-gray)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: 'var(--accent-mint)' }}>•</span> {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 9: 결론 */}
      <section className={`slide content-slide ${currentSlide === 9 ? 'active' : ''}`}>
        <div className="slide-left">
          <div className="slide-label">Conclusion</div>
          <h2 className="slide-title">결론</h2>
          <p className="slide-desc">Wireframe Summary</p>
        </div>
        <div className="slide-right">
          <div style={{ textAlign: 'center', padding: '30px 20px' }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>🎯</div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-black)', marginBottom: '16px' }}>기술을 체험하게 하십시오</div>
            <div style={{ fontSize: '13px', color: 'var(--text-gray)', lineHeight: 1.8, marginBottom: '30px' }}>
              역할별 맞춤 UI로 고객이 직접<br />
              기술의 가치를 경험하도록 설계합니다.<br /><br />
              글로벌 시장을 향한 확장성 있는<br />
              디자인 시스템을 제안합니다.
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
              {['🌏 글로벌', '📱 반응형', '🎨 맞춤 UX'].map((item, i) => (
                <span key={i} style={{ fontSize: '11px', padding: '8px 16px', background: 'var(--bg-mint)', borderRadius: '20px', color: 'var(--accent-mint)', fontWeight: 600 }}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 10: END */}
      <section className={`slide content-slide ${currentSlide === 10 ? 'active' : ''}`}>
        <div className="slide-left mint-section">
          <div className="slide-label">END</div>
          <h2 className="slide-title">Thank<br />You</h2>
          <p className="slide-desc">감사합니다</p>
        </div>
        <div className="slide-right">
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div style={{ fontSize: '60px', marginBottom: '20px' }}>🏗️</div>
            <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-black)', marginBottom: '12px' }}>TAESUNG S&I</div>
            <div style={{ fontSize: '14px', color: 'var(--accent-mint)', marginBottom: '30px' }}>Building Digital Future</div>
            <div style={{ fontSize: '12px', color: 'var(--text-gray)' }}>contact@taesung.co.kr</div>
          </div>
        </div>
      </section>

      {/* 슬라이드 인디케이터 */}
      <div className="slide-indicator">{currentSlide + 1} / 11</div>
    </div>
  )
}

export default Tab3

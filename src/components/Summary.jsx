function Summary({ onClose }) {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        background: 'var(--bg-white)',
        borderRadius: '24px',
        maxWidth: '900px',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto',
        boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
        position: 'relative'
      }}>
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg-light)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-mint)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-light)'}
        >
          ✕
        </button>

        {/* Header */}
        <div style={{ 
          padding: '40px 40px 20px',
          borderBottom: '1px solid var(--border-light)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '13px', color: 'var(--text-gray)', fontWeight: 500, marginBottom: '8px' }}>
            BIM 기술홍보 · 시각화 체계를 위한
          </div>
          <h1 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-black)', marginBottom: '8px', lineHeight: 1.3 }}>
            태성에스엔아이 브랜딩 및<br />UI/UX 시스템 구축 제안
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--text-gray)' }}>
            기술과 시장을 연결하는 시각 인프라
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: '30px 40px' }}>
          
          {/* 문제 인식 */}
          <div style={{
            padding: '20px',
            background: 'var(--bg-light)',
            borderRadius: '12px',
            marginBottom: '24px',
            border: '1px solid var(--border-light)'
          }}>
            <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '10px', color: 'var(--text-black)' }}>
              🔍 현재 상황
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', fontSize: '11px' }}>
              {[
                { issue: '제안서/PT 제작', problem: '매번 새로 제작', impact: '시간·비용 중복' },
                { issue: '디자인 일관성', problem: '담당자별 상이', impact: '브랜드 신뢰도 저하' },
                { issue: '자료 공유', problem: '공유 체계 부재', impact: '재작업 발생' }
              ].map((item, i) => (
                <div key={i} style={{ padding: '12px', background: 'var(--bg-white)', borderRadius: '8px' }}>
                  <div style={{ fontWeight: 600, color: 'var(--text-black)', marginBottom: '4px' }}>{item.issue}</div>
                  <div style={{ color: 'var(--accent-coral)', fontSize: '10px' }}>→ {item.problem}</div>
                  <div style={{ color: 'var(--text-gray)', fontSize: '10px', marginTop: '2px' }}>{item.impact}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 3대 제안 시스템 */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>
              📐 3대 시스템 제안
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {[
                { 
                  icon: '📊', 
                  title: '제안서 시각화 체계', 
                  desc: '템플릿 + 컴포넌트 기반 제안서/PT 제작 시스템',
                  benefit: '누구나 일관된 품질의 제안서 제작 가능',
                  tag: '수주 경쟁력'
                },
                { 
                  icon: '🎨', 
                  title: '디자인 시스템', 
                  desc: '공용 컴포넌트·스타일 가이드·아이콘 라이브러리',
                  benefit: '담당자 변경되어도 일관성 유지',
                  tag: '운영 효율화'
                },
                { 
                  icon: '🔗', 
                  title: '부서 협업 프로세스', 
                  desc: '유관 부서 간 자료 공유 체계',
                  benefit: '정보 단절로 인한 재작업 방지',
                  tag: '협업 표준화'
                }
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '16px',
                  background: 'var(--bg-light)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)'
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>{item.icon}</div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-black)', marginBottom: '6px' }}>{item.title}</div>
                  <div style={{ fontSize: '10px', color: 'var(--text-gray)', marginBottom: '8px', lineHeight: 1.5 }}>{item.desc}</div>
                  <div style={{ fontSize: '10px', color: 'var(--accent-mint)', marginBottom: '8px', fontWeight: 500 }}>✓ {item.benefit}</div>
                  <span style={{ 
                    fontSize: '9px', 
                    padding: '3px 8px', 
                    background: 'var(--bg-mint)', 
                    borderRadius: '10px', 
                    color: 'var(--accent-mint)',
                    fontWeight: 600
                  }}>{item.tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 실행 계획 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
            {/* 우선순위 */}
            <div style={{ padding: '20px', background: 'var(--bg-light)', borderRadius: '12px' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>📌 실행 우선순위</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { rank: '1단계', task: '제안서 템플릿 표준화', reason: '즉시 적용 가능', color: 'var(--accent-mint)' },
                  { rank: '2단계', task: '디자인 시스템 구축', reason: '컴포넌트화', color: '#2563EB' },
                  { rank: '3단계', task: '협업 프로세스 정립', reason: '주간 싱크업', color: 'var(--text-gray)' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '11px' }}>
                    <span style={{ 
                      padding: '2px 8px', 
                      background: `${item.color}20`, 
                      borderRadius: '8px', 
                      color: item.color, 
                      fontWeight: 600,
                      minWidth: '50px',
                      textAlign: 'center'
                    }}>{item.rank}</span>
                    <span style={{ flex: 1, color: 'var(--text-black)' }}>{item.task}</span>
                    <span style={{ color: 'var(--text-gray)', fontSize: '10px' }}>{item.reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 검증 방식 */}
            <div style={{ padding: '20px', background: 'var(--bg-light)', borderRadius: '12px' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>🧪 검증 방식</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { phase: '시범 운용', desc: '1개 프로젝트 적용', color: 'var(--accent-mint)' },
                  { phase: '성과 측정', desc: '제작 시간·비용 비교', color: '#F97316' },
                  { phase: '단계 확대', desc: '검증 후 전사 적용', color: '#2563EB' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '11px' }}>
                    <span style={{ 
                      padding: '2px 8px', 
                      background: `${item.color}20`, 
                      borderRadius: '8px', 
                      color: item.color, 
                      fontWeight: 600,
                      minWidth: '70px'
                    }}>{item.phase}</span>
                    <span style={{ color: 'var(--text-black)' }}>{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 기대효과 — 예상치 명시 */}
          <div style={{ 
            padding: '20px', 
            background: '#FFFBEB', 
            borderRadius: '12px', 
            marginBottom: '24px',
            border: '1px solid #FCD34D'
          }}>
            <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: '#B45309', display: 'flex', alignItems: 'center', gap: '6px' }}>
              ⚠️ 기대효과 (예상치 — 시범 운용 후 실측 예정)
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {[
                { label: '제작 시간', value: '30~50%', suffix: '단축', note: '템플릿 재사용 시' },
                { label: '외주비', value: '3,000', suffix: '만원/년', note: '내부 전환 시' },
                { label: '일관성', value: '100%', suffix: '', note: '디자인 시스템 적용 시' }
              ].map((item, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '12px', background: 'rgba(255,255,255,0.8)', borderRadius: '8px' }}>
                  <div style={{ fontSize: '10px', color: '#92400E', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: '#B45309' }}>
                    {item.value}<span style={{ fontSize: '12px' }}>{item.suffix}</span>
                  </div>
                  <div style={{ fontSize: '9px', color: '#A16207', marginTop: '4px' }}>{item.note}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: '10px', color: '#92400E', marginTop: '12px', textAlign: 'center' }}>
              ※ 위 수치는 업계 벤치마크 기반 예상치이며, 실제 성과는 시범 운용 후 측정
            </div>
          </div>

          {/* 핵심 메시지 */}
          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, var(--bg-mint) 0%, var(--bg-light) 100%)',
            borderRadius: '12px',
            marginBottom: '24px',
            border: '1px solid var(--accent-mint)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--accent-mint)', marginBottom: '6px' }}>
              "담당자가 바뀌어도, 일관된 품질을 유지하는 시스템"
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-gray)' }}>
              사람에 의존하지 않는, 지속 가능한 디자인 인프라 구축
            </div>
          </div>

          {/* 상세 자료 구성 */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-black)' }}>📑 상세 자료</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              {[
                { tab: '01', name: 'Strategy', desc: '배경 및 전략' },
                { tab: '02', name: 'Connect', desc: '소통과 가치 제안' },
                { tab: '03', name: 'Wireframe', desc: '데모 프로토타입' }
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '12px',
                  background: 'var(--bg-light)',
                  borderRadius: '8px',
                  textAlign: 'center',
                  border: '1px solid var(--border-light)'
                }}>
                  <div style={{ fontSize: '10px', color: 'var(--accent-mint)', fontWeight: 600 }}>Tab {item.tab}</div>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-black)', marginTop: '2px' }}>{item.name}</div>
                  <div style={{ fontSize: '9px', color: 'var(--text-gray)', marginTop: '2px' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div style={{ 
          padding: '20px 40px',
          borderTop: '1px solid var(--border-light)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ fontSize: '11px', color: 'var(--text-gray)' }}>
            태성에스앤아이 · 2026.03
          </div>
          <button
            onClick={onClose}
            style={{
              padding: '10px 24px',
              background: 'var(--accent-mint)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            상세 자료 보기 →
          </button>
        </div>
      </div>
    </div>
  )
}

export default Summary

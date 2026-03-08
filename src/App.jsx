import { useState, useEffect } from 'react'
import ThreeBackground from './components/ThreeBackground'
import Tab1 from './components/Tab1'
import Tab2 from './components/Tab2'
import Tab3 from './components/Tab3'
import Summary from './components/Summary'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [showSummary, setShowSummary] = useState(false)

  const tabs = [
    { name: 'Strategy', count: 16 },
    { name: 'Connect', count: 20 },
    { name: 'Wireframe', count: 10 }
  ]

  const slideCount = tabs[activeTab].count

  const handleTabChange = (index) => {
    if (index === activeTab) return
    setTransitioning(true)
    setTimeout(() => {
      setActiveTab(index)
      setCurrentSlide(0)
      setTransitioning(false)
    }, 300)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        setCurrentSlide(prev => Math.min(prev + 1, slideCount - 1))
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        setCurrentSlide(prev => Math.max(prev - 1, 0))
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [slideCount])

  return (
    <div className="app">
      <ThreeBackground activeTab={activeTab} />
      
      <nav className="tab-nav">
        <div className="nav-logo">
          <div className="logo-text-wrapper">
            <span className="logo-text brand-title">태성에스앤아이</span>
            <span className="logo-subtext">TAESUNG SNI</span>
          </div>
          <button 
            className="summary-btn"
            onClick={() => setShowSummary(true)}
            title="Executive Summary"
          >
            📋 요약
          </button>
        </div>
        <div className="tab-buttons">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`tab-btn ${activeTab === i ? 'active' : ''}`}
              onClick={() => handleTabChange(i)}
            >
              <span className="tab-number">0{i + 1}</span>
              <div className="tab-info">
                <span className="tab-name">{tab.name}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="nav-controls">
          <div className="slide-counter">
            <span className="current">{String(currentSlide + 1).padStart(2, '0')}</span>
            <span>/</span>
            <span>{String(slideCount).padStart(2, '0')}</span>
          </div>
        </div>
      </nav>

      <main className={`main-content ${transitioning ? 'transitioning' : ''}`}>
        {activeTab === 0 && <Tab1 currentSlide={currentSlide} onSlideChange={setCurrentSlide} />}
        {activeTab === 1 && <Tab2 currentSlide={currentSlide} onSlideChange={setCurrentSlide} />}
        {activeTab === 2 && <Tab3 currentSlide={currentSlide} onSlideChange={setCurrentSlide} />}
      </main>

      <div className="slide-indicators">
        {Array(slideCount).fill().map((_, i) => (
          <button
            key={i}
            className={`indicator ${currentSlide === i ? 'active' : ''}`}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <footer className="presentation-footer">
        <span className="footer-hint">Navigate with arrow keys</span>
        <span className="footer-brand">TAESUNG SNI — 2026</span>
      </footer>

      {showSummary && <Summary onClose={() => setShowSummary(false)} />}
    </div>
  )
}

export default App

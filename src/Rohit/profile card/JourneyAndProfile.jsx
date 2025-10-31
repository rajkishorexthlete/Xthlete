import React, { useEffect, useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import styles from './JourneyAndProfile.module.css'

const xProfileCards = [
  {
    title: 'Complete Your x.Profile',
    body:
      'One simple step to apply for sponsorships and participate in official Xthlete tournaments. Your journey starts here.',
    strong: 'Start your Sports Identity!',
    cta: 'Create My x.Profile',
    href: '/profile',
  },
  {
    title: 'Build your x.Rank',
    body:
      'Build your x.Rank by competing in official Xthlete tournaments — the higher you rank, the closer you are to cracking that brand deal.',
    strong: 'x.Rank is your edge!',
    cta: 'Explore Ranking',
    href: '/xthletes',
  },
  {
    title: 'Looking for Sponsorship?',
    body:
      "Every match you book through Xthlete is recorded in your x.Profile. We're tracking your journey — building a verified sports profile that brands can trust and discover.",
    strong: "Let's crack your 1st brand deal.",
    cta: 'Apply Sponsorship',
    href: '/sponsorship',
  },
  {
    title: 'Stay Updated with x.News',
    body:
      'Catch the latest updates, tournament highlights, and player spotlights — all in one place. Stay informed and inspired with the Xthlete community.',
    strong: 'Your daily dose of sports insights!',
    cta: 'Explore News',
    href: '/news',
  },
]

const JourneyAndProfile = () => {
  const navigate = useNavigate()
  const [profileIndex, setProfileIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProfileIndex((prev) => (prev + 1) % xProfileCards.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      setProfileIndex((prev) => (prev + 1) % xProfileCards.length)
    } else if (touchEndX.current - touchStartX.current > 50) {
      setProfileIndex((prev) => (prev === 0 ? xProfileCards.length - 1 : prev - 1))
    }
  }

  return (
    <>
      <section className={styles.journey}>
        <h2 className={styles.journeyTitle}>A Player Journey That Builds Your Future</h2>
        <p className={styles.journeySubtitle}>From your first x.Profile to climbing your x.Rank and landing sponsorships — every match you play on Xthlete counts toward your next big break.</p>
        <button
          className={styles.seeFeaturesBtn}
          onClick={() => {
            const el = document.getElementById('features')
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
        >
          See Features
        </button>
      </section>

      <section className={styles.profileSlider}>
        <div className={styles.profileContainer}>
          <button
            className={`${styles.profileArrow} ${styles.profileLeftArrow}`}
            onClick={() => setProfileIndex((prev) => (prev === 0 ? xProfileCards.length - 1 : prev - 1))}
            aria-label="Previous card"
          >
            <FaArrowLeft />
          </button>
          <div
            className={styles.profileContent}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className={styles.profileWrapper}>
              {xProfileCards.map((card, index) => {
                const isActive = index === profileIndex
                const isPrev = index === (profileIndex - 1 + xProfileCards.length) % xProfileCards.length
                const isNext = index === (profileIndex + 1) % xProfileCards.length

                let clickHandler = undefined
                if (isPrev) clickHandler = () => setProfileIndex((prev) => (prev === 0 ? xProfileCards.length - 1 : prev - 1))
                else if (isNext) clickHandler = () => setProfileIndex((prev) => (prev + 1) % xProfileCards.length)

                return (
                  <div
                    key={index}
                    className={`${styles.profileItem} ${isActive ? styles.activeProfile : ''} ${isPrev ? styles.prevProfile : ''} ${isNext ? styles.nextProfile : ''}`}
                    onClick={clickHandler}
                    role={clickHandler ? 'button' : undefined}
                    tabIndex={clickHandler ? 0 : undefined}
                    onKeyDown={
                      clickHandler
                        ? (e) => { if (e.key === 'Enter' || e.key === ' ') clickHandler() }
                        : undefined
                    }
                  >
                    <div className={styles.xProfileCard}>
                      <h3>{card.title}</h3>
                      <p>{card.body}</p>
                      {card.strong && <strong>{card.strong}</strong>}
                      <button className={styles.xProfileCta} onClick={() => navigate(card.href)}>{card.cta}</button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <button
            className={`${styles.profileArrow} ${styles.profileRightArrow}`}
            onClick={() => setProfileIndex((prev) => (prev + 1) % xProfileCards.length)}
            aria-label="Next card"
          >
            <FaArrowRight />
          </button>
          <div className={styles.profileDots} role="tablist" aria-label="Profile slider dots">
            {xProfileCards.map((_, i) => (
              <button
                key={i}
                className={`${styles.profileDot} ${i === profileIndex ? styles.activeDot : ''}`}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === profileIndex}
                onClick={() => setProfileIndex(i)}
                role="tab"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default JourneyAndProfile

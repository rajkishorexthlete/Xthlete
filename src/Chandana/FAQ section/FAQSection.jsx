import React, { useState } from 'react'
import styles from './FAQSection.module.css'

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null)

  const faqs = [
    {
      question: 'What is Xthlete, and how does it help athletes?',
      answer:
        'Xthlete is a next-gen sports management platform that helps athletes discover tournaments, register online, build verified sports profiles, and apply for sponsorships. It connects players, organizers, and sponsors in one digital ecosystem.',
    },
    {
      question: 'How can I participate in tournaments through Xthlete?',
      answer:
        'Athletes can browse upcoming tournaments, select their preferred event, and complete registration through our secure online process. Payments and fixture allocations are handled automatically for a seamless experience.',
    },
    {
      question: 'What is x.Profile, and why is it important?',
      answer:
        'Your x.Profile is your verified sports identity on Xthlete. It records your performance, rankings, achievements, and sponsorship history — helping you build credibility and visibility among organizers and brands.',
    },
    {
      question: 'How does Xthlete ensure fair and transparent rankings?',
      answer:
        'Rankings are calculated dynamically based on verified match results, tournament statistics, and player performance. Every score update is validated through the system to maintain transparency and accuracy.',
    },
    {
      question: 'Can brands and sponsors connect directly with athletes?',
      answer:
        'Yes! The sponsorship dashboard enables verified sponsors to review athlete profiles, analyze performance data, and connect directly with promising talents for collaborations or sponsorship opportunities.',
    },
  ]

  const handleKeyDown = (event, idx) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setOpenIdx(openIdx === idx ? null : idx)
      event.preventDefault()
    }
  }

  return (
    <section id="faq" className={styles.faqSection} aria-label="Frequently Asked Questions">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Everything you need to know about Xthlete, our platform, and features.
          </p>
        </header>

        <div className={styles.list}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div key={idx} className={styles.item}>
                <h3>
                  <button
                    id={`faq-header-${idx}`}
                    className={styles.questionButton}
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${idx}`}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={styles.chevron}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </h3>

                <div
                  id={`faq-content-${idx}`}
                  role="region"
                  aria-labelledby={`faq-header-${idx}`}
                  aria-hidden={!isOpen}
                  className={`${styles.answer} ${isOpen ? styles.open : ''}`}
                >
                  {faq.answer}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQSection

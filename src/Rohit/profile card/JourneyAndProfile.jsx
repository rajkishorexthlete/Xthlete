import React from "react";
import { useNavigate } from "react-router-dom";

import imageTopLeftSrc from "../../assets/favour-oliver-jr-b5H4W9U01O8-unsplash.jpg";
import imageMainSrc from "../../assets/konstantinos-papadopoulos-IMOg9ErOOsU-unsplash.jpg";
import imageBottomLeftSrc from "../../assets/zach-rowlandson-Y2MO0WLJEp8-unsplash.jpg";

import styles from "./JourneyAndProfile.module.css";
import xProfileCards from "./cards.js";

const JourneyAndProfile = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.journey}>
        <h2 className={styles.journeyTitle}>
          A Player Journey That Builds Your Future
        </h2>
        <p className={styles.journeySubtitle}>
          From your first x.Profile to climbing your x.Rank and landing
          sponsorships — every match you play on Xthlete counts toward your next
          big break.
        </p>
        <button className={`${styles.cardCta} ${styles.seeFeaturestn}`}>
          See Features
        </button>
      </section>

      <section className={styles.staticCards}>
        <div className={styles.cardsContainer}>
          {xProfileCards.map((card, index) => {
            const IconComponent = card.icon;

            return (
              <div key={index} className={styles.cardItem}>
                <div
                  className={styles.cardIconPlaceholder}
                  style={{ backgroundColor: card.bgColor }}
                >
                  <IconComponent size={24} style={{ color: card.iconColor }} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <button
                  className={styles.cardCta}
                  onClick={() => navigate(card.href)}
                >
                  {card.cta}
                </button>
              </div>
            );
          })}
        </div>
      </section>

<section className={styles.aboutUs}>
  <div className={styles.imageGallery}>
    <img
      src={imageTopLeftSrc}
      alt="Athletes image"
      className={styles.imageTopLeft}
    />
    <img
      src={imageMainSrc}
      alt="Ttournament"
      className={styles.imageMain}
    />
    <img
      src={imageBottomLeftSrc}
      alt="Athlete celebrating"
      className={styles.imageBottomLeft}
    />
  </div>

  <div className={styles.aboutContent}>
    <p className={styles.aboutSubtitle}>ABOUT US</p>
    <h2 className={styles.aboutTitle}>
      Helping Athletes Build
      <br />
      Successful Careers
    </h2>

    <div className={styles.aboutBodyContainer}>
      <div className={styles.readMoreContainer}>
        <svg className={styles.rotatingText} viewBox="0 0 100 100">
          <path
            id="circlePath"
            fill="none"
            d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
          />
          <text fill="#888">
            <textPath
              href="#circlePath"
              startOffset="50%"
              textAnchor="middle"
            >
              ABOUT US • ABOUT US •
            </textPath>
          </text>
        </svg>
        <a href="#" className={styles.readMoreLink}>
          &rarr;
        </a>
      </div>

      <div className={styles.aboutTextWrapper}>
        <p className={styles.aboutParagraph}>
          At Xthlete, we amplify athletes' journeys by providing a stage,
          spotlight, and connections to elevate their game. From custom
          profiles and sponsorships to seamless tournament management, we
          unite players, organizers, and brands in one electrifying ecosystem.
        </p>

        <h3>Our Values</h3>
        <p className={styles.aboutParagraph}>
          At Xthlete, we believe that every athlete deserves more than just a
          platform — they deserve a partner who's committed to helping them
          succeed. 
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default JourneyAndProfile;

import React from "react";
import { useNavigate } from "react-router-dom";

import imageTopLeftSrc from "../../assets/bea-fladstad-ZKlmZZR1feE-unsplash.jpg";
import imageMainSrc from "../../assets/timo-trilk-TVzG6bxHFK4-unsplash.jpg";
import imageBottomLeftSrc from "../../assets/fajruddin-mudzakkir-YGv9qLUoGu4-unsplash.jpg";


import styles from "./JourneyAndProfile.module.css";
import xProfileCards from "./cards.js"


const JourneyAndProfile = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.journey}>
        <h2 className={styles.journeyTitle}>
          A Player Journey That Builds Your Future
        </h2>
        <p className={styles.journeySubtitle}>
          More than just tournaments — we’re building your athletic career
        </p>
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
                  <IconComponent
                    size={24}
                    style={{ color: card.iconColor }}
                  />
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
            alt="Scenic waterfall"
            className={styles.imageTopLeft}
          />
          <img
            src={imageMainSrc}
            alt="Scenic blue water and cliffs"
            className={styles.imageMain}
          />
          <img
            src={imageBottomLeftSrc}
            alt="Clear mountain lake"
            className={styles.imageBottomLeft}
          />
        </div>

        <div className={styles.aboutContent}>
          <p className={styles.aboutSubtitle}>ABOUT US</p>
          <h2 className={styles.aboutTitle}>
            We Are The Best Travel
            <br />
            Agency
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
                Venenatis donec sit sit egestas varius. Dictum sit risus
                scelerisque nulla amet vel mollis sem morbi. Egestas quam
                scelerisque morbi nisi lacinia nunc.
              </p>
              <p className={styles.aboutParagraph}>
                Venenatis donec sit sit egestas varius. Dictum sit risus
                scelerisque nulla amet vel mollis sem morbi. Egestas quam
                scelerisque morbi nisi lacinia nunc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JourneyAndProfile;
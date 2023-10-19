import React from "react";
import styles from "components/Welcome/Welcome.module.scss";
import dictionary from "dictionary/dictionary";

const MeetAndConnect: React.FC = () => {
  return (
    <div className={styles.container} data-testid="welcome">
      <h1 className={styles.title}>{dictionary.welcome.mainTitle}</h1>
      <p className={styles.subtitle}>{dictionary.welcome.subtitle}</p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardNumber}>1</div>
          <h2 className={styles.cardTitle}>
            {dictionary.welcome.cards.firstTitle}
          </h2>
          <p className={styles.cardDescription}>
            {dictionary.welcome.cards.firstDesc}
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardNumber}>2</div>
          <h2 className={styles.cardTitle}>
            {dictionary.welcome.cards.secondTitle}
          </h2>
          <p className={styles.cardDescription}>
            {dictionary.welcome.cards.secondDesc}
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardNumber}>3</div>
          <h2 className={styles.cardTitle}>
            {dictionary.welcome.cards.thirdTitle}
          </h2>
          <p className={styles.cardDescription}>
            {dictionary.welcome.cards.thirdDesc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetAndConnect;

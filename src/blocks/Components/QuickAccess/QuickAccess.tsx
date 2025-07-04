import { useState } from "react";
import styles from "./QuickAccess.module.css";

export default function QuickAccess() {
  const [showConections, setShowConetions] = useState(false);
  function handleShow() {
    setShowConetions(!showConections);
  }
  return (
    <div className={styles.card}>
      <ul>
        {/* LinkedIn */}
        <li className={styles["iso-pro"]} onClick={handleShow}>
          <svg
            className={`${styles.svg} ${showConections ? 'rotate-180' : ''}`}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M12 17.25c-.33 0-.65-.13-.88-.37l-6-6a1.25 1.25 0 1 1 1.77-1.76L12 14.23l5.12-5.11a1.25 1.25 0 0 1 1.76 1.77l-6 6c-.24.23-.55.36-.88.36z" />
          </svg>
          <div className={styles.text}>ShowConections</div>
        </li>
        {showConections ? (
          <>
            <li className={styles["iso-pro"]}>
              <a
                href="https://linkedin.com/in/your_username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={styles.svg}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="M6.975,20.667H3.117V9.059H6.975ZM5.072,3.462a2.011,2.011,0,1,0-.051,4.012h.026a2.012,2.012,0,1,0,.025-4.012ZM9.111,20.667h3.858V14.185a2.639,2.639,0,0,1,.127-.941,2.111,2.111,0,0,1,1.98-1.411c1.4,0,1.955,1.064,1.955,2.625v6.209h3.858V14.011c0-3.565-1.9-5.225-4.442-5.225A3.828,3.828,0,0,0,12.97,10.7V9.059H9.111c.051,1.089,0,11.609,0,11.609Z" />
                </svg>
              </a>
              <div className={styles.text}>LinkedIn</div>
            </li>

            {/* Telegram */}
            <li className={styles["iso-pro"]}>
              <a
                href="https://t.me/your_username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={styles.svg}
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" />
                </svg>
              </a>
              <div className={styles.text}>Telegram</div>
            </li>

            {/* WhatsApp */}
            <li className={styles["iso-pro"]}>
              <a
                href="https://wa.me/your_number"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className={styles.svg}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="M12.2 10c-1.1-0.1-1.7 1.4-2.5 1.8-1.3 0.7-3.7-1.8-3.7-1.8s-2.5-2.4-1.9-3.7c0.5-0.8 2-1.4 1.9-2.5-0.1-1-2.3-4.6-3.4-3.6-2.4 2.2-2.6 3.1-2.6 4.9-0.1 3.1 3.9 7 3.9 7 0.4 0.4 3.9 4 7 3.9 1.8 0 2.7-0.2 4.9-2.6 1-1.1-2.5-3.3-3.6-3.4z" />
                </svg>
              </a>
              <div className={styles.text}>WhatsApp</div>
            </li>
          </>
        ) : null}
      </ul>
    </div>
  );
}

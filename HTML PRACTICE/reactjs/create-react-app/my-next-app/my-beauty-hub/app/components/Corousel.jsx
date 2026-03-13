import React, { useState } from 'react';
import styles from '../styles/Carousel.module.css'; // Optional: for custom styling

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % React.Children.count(children));
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prevButton} onClick={goToPrevSlide}>
        &#10094; {/* Left arrow */}
      </button>
      <div className={styles.carouselContent}>
        {React.Children.map(children, (child, index) => (
          <div
            className={`${styles.carouselItem} ${
              index === activeIndex ? styles.active : ''
            }`}
          >
            {child}
          </div>
        ))}
      </div>
      <button className={styles.nextButton} onClick={goToNextSlide}>
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
};

export default Carousel;
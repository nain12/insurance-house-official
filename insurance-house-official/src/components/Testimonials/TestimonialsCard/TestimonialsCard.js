import React from 'react';
import * as styles from './TestimonialsCard.module.scss';

const TestimonialsCard = () => {
  return (
        <div className={styles.container}>
          <div className={styles.circle}>
            <p className={styles.heading}>Fantastic service!</p>
            <p className={styles.description}>Lorem ipsum dolor sit amet.In faucibus quam sem</p>
            <p className={styles.name}>- Nainy Sewaney</p>
          </div>
        </div>
  )
}

export default TestimonialsCard;

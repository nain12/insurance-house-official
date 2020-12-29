import React from 'react';
import * as styles from './Testimonials.module.scss';
import TestimonialsCard from './TestimonialsCard/TestimonialsCard';

const Testimonials = () => {
  return (
        <div className={styles.container}>
          <TestimonialsCard/>
        </div>
  )
}

export default Testimonials;

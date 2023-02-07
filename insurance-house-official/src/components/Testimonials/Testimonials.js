import React from "react";
import styles from "./Testimonials.module.scss";
import TestimonialsCard from "./TestimonialsCard/TestimonialsCard";

const Testimonials = () => {
    return (
        <div className={styles.testimonials}>
            <p className={styles.heading}>Client Testimonials</p>
            <div className={styles.container}>
                <TestimonialsCard />
                <TestimonialsCard />
                <TestimonialsCard />
            </div>
        </div>
    );
};

export default Testimonials;

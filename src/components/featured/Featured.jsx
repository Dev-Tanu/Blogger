import React from 'react'
import styles from "./featured.module.css";
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Tanaya here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}> Discovering the Natural Splendor of Vancouver: A Paradise for Nature Enthusiasts.</h1>
          <p className={styles.postDesc}>
          Nestled between the Pacific Ocean and the Coastal Mountains, Vancouver is a city renowned for its stunning natural beauty and diverse ecosystems. With its lush greenery, sparkling ocean views, and majestic mountains, Vancouver offers a paradise for nature enthusiasts.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
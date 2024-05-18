import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./menuPosts.module.css"

const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
        <Link href="/" className={styles.item}>
          {withImage &&( <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={ styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
            Explore the world&apos;s most captivating destinations and discover the hidden gems that make travel unforgettable..
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Bhushan Pradhan</span>
              <span className={styles.date}> - 10.01.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
         {withImage && (<div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={ styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
            Immerse yourself in the rich tapestry of global cultures, traditions, and lifestyles that shape our world.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Sushant Upadhyay</span>
              <span className={styles.date}> - 11.04.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={ styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>
              Food
            </span>
            <h3 className={styles.postTitle}>
            Delve into the world of gastronomy with tantalizing recipes, culinary adventures, and foodie delights..
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Sanjay jyot</span>
              <span className={styles.date}> - 1.03.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
         { withImage && (<div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={ styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
            Stay ahead of the fashion curve with style guides, trend updates, and fashion industry news.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Riya Chakraborty</span>
              <span className={styles.date}> - 12.02.2024</span>
            </div>
          </div>
        </Link>
      </div>
  
  )
}

export default MenuPosts
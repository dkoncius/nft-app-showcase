import React from 'react'

import assets from '../assets'
import styles from '../styles/Global'

const FeaturedCard = ({iconUrl, iconText}) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
)

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>ProNef has been developed using cross-platform technolofy, React Native.</p>
        </div>

        <div className={styles.flexWrap}>
          <FeaturedCard
            iconUrl={assets.react}
            iconText="React Native"
          />
          <FeaturedCard
            iconUrl={assets.javascript}
            iconText="JavaScript"
          />
        </div>
      </div>
    </div>
  )
}

export default Features
import React from 'react';
import styles from "./FishCard.module.css";

const FishCard = ({ img, name, region, scientificName }) => {
  return (
    <div className={styles.fish}>
      <img className={styles.img} src={img} alt={name} />
      <div className={styles.description}>
        <p className={styles.name}><span className={styles.span}>Name: </span>{name}</p>
        <p><span>Region: </span>{region}</p>
        <p><span>Scientificname: </span>{scientificName}</p>
      </div>
    </div>
  );
};

export default FishCard;

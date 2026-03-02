import styles from "./Gallery.module.css";
import image1 from '../assets/gallery/1.jpg'
import image2 from '../assets/gallery/2.jpg'
import image3 from '../assets/gallery/3.jpg'

function Gallery() {
  return (
    <div className={styles.gallery}>
      <img src={image1} alt="logo" className={styles.image} />
      <img src={image2} alt="logo" className={styles.image} />
      <img src={image3} alt="logo" className={styles.image} />
    </div>
  )
}

export default Gallery

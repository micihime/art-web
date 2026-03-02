import autoportrait from '../assets/autoportrait.jpg'
import styles from "./Intro.module.css";

function Intro() {
  return (
    <div className={styles.intro}>
      <div>
        <h3>
          I'm an artist working in watercolor and alcohol ink
        </h3>
        <p>
          My work documents a journey in progress, rooted in curiosity and a belief that creativity doesn't need to be rushed. 
          I share what I make and what I'm discovering along the way.
        </p>
      </div>
      <img src={autoportrait} alt="autoportrait" className={styles.portrait} />
    </div>
  )
}

export default Intro

import styles from "./Intro.module.css";

function Intro() {
  return (
    <section className={styles.intro}>
      <h1>I'm an artist working in watercolor and alcohol ink</h1>
      <p>
        I'm an artist working in watercolor and alcohol ink — and also, still
        very much figuring it out.
      </p>
      <p>
        My work documents a journey in progress, driven by curiosity more than
        anything else. I share what I make and what I'm discovering along the
        way.
      </p>
    </section>
  );
}

export default Intro;

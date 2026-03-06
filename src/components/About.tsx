import styles from "./About.module.css";
import { IconBrush, IconDropletFilled } from "@tabler/icons-react";

function About() {
  return (
    <div className={styles.about}>
      <div>
        <h2>Why I Paint?</h2>
        <p>
          I like precision — getting things exactly right, down to the last detail. 
          Watercolor doesn't care about any of that. A brushstroke goes where it wants. 
          Pigment bleeds. Control is an illusion. I find that deeply frustrating, and 
          also, I think, exactly what I need. There's something quietly valuable about 
          choosing a practice that asks you to let go. I'm still learning how.
        </p>
        <div className={styles.photoIcon}>
          <IconDropletFilled size={30} color="var(--color-primary-dark)" />
          <IconBrush size={40} color="var(--color-primary-dark)" />
          <IconDropletFilled size={30} color="var(--color-primary-dark)" />
        </div>
      </div>
      <div>
        <h2>Work With My Images</h2>
        <p>
          I create art prints and digital assets for people who want to bring more color 
          and creativity into their everyday lives. Whether you're looking for a print 
          to brighten your wall or digital resources to support your own creative practice, 
          there's something here for you.
        </p>
        <p>
          (More coming soon — stay tuned!) 
        </p>
      </div>
    </div>
  )
}

export default About

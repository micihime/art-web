import styles from "./Intro.module.css";
import SimpleGallery from "./SimpleGallery";

import gallery1img1 from "../assets/gallery/1/pretty-scribble.jpg";
import gallery1img2 from "../assets/gallery/1/ugly-scribble.jpg";

import gallery2img1 from "../assets/gallery/2/test-page-1.jpg";
import gallery2img2 from "../assets/gallery/2/test-page-2.jpg";
import gallery2img3 from "../assets/gallery/2/test-page-3.jpg";
import gallery2img4 from "../assets/gallery/2/test-page-4.jpg";

import gallery3img1 from "../assets/gallery/3/sketch1.jpg";
import gallery3img2 from "../assets/gallery/3/sketch2.jpg";
import gallery3img3 from "../assets/gallery/3/sketch3.jpg";
import gallery3img4 from "../assets/gallery/3/sketch4-1.jpg";
import gallery3img5 from "../assets/gallery/3/sketch4-2.jpg";
import gallery3img6 from "../assets/gallery/3/sketch4-3.jpg";
import gallery3img7 from "../assets/gallery/3/sketch5.jpg";
import gallery3img8 from "../assets/gallery/3/sketch6.jpg";
import gallery3img9 from "../assets/gallery/3/watercolor-a-1.jpg";
import gallery3img10 from "../assets/gallery/3/watercolor-a-2.jpg";
import gallery3img11 from "../assets/gallery/3/watercolor-b-1.jpg";
import gallery3img12 from "../assets/gallery/3/watercolor-b-2.jpg";

const gallery1 = [
  { src: gallery1img1, alt: "Pretty scribble on sketchbook page" },
  { src: gallery1img2, alt: "Intentionally ugly scribble on sketchbook page" },
];

const gallery2 = [
  { src: gallery2img1, alt: "Art supply test page 1" },
  { src: gallery2img2, alt: "Art supply test page 2" },
  { src: gallery2img3, alt: "Art supply test page 3" },
  { src: gallery2img4, alt: "Art supply test page 4" },
];

const gallery3 = [
  { src: gallery3img1, alt: "Abstract sketch 1" },
  { src: gallery3img2, alt: "Abstract sketch 2" },
  { src: gallery3img3, alt: "Abstract sketch 3" },
  { src: gallery3img4, alt: "Abstract sketch 4 part 1" },
  { src: gallery3img5, alt: "Abstract sketch 4 part 2" },
  { src: gallery3img6, alt: "Abstract sketch 4 part 3" },
  { src: gallery3img7, alt: "Abstract sketch 5" },
  { src: gallery3img8, alt: "Abstract sketch 6" },
  { src: gallery3img9, alt: "Watercolor experiment A part 1" },
  { src: gallery3img10, alt: "Watercolor experiment A part 2" },
  { src: gallery3img11, alt: "Watercolor experiment B part 1" },
  { src: gallery3img12, alt: "Watercolor experiment B part 2" },
];

function Intro() {
  return (
    <section className={styles.intro}>
      <p className={styles.lead}>
        I'm learning to paint and draw. Most of what you'll find here is a
        living record of that process: the experiments, the exercises, the messy
        sketches, and the occasional successes.
      </p>

      {/* self-portrait or photo of the workspace */}

      <h2>The Art of Intentional Ruin</h2>
      <p>
        Earlier this year, I opened a brand-new sketchbook. As a recovering
        perfectionist, I knew exactly what would happen if I wasn't careful: I
        would leave it completely blank. I have a chronic habit of buying
        beautiful notebooks, only to leave them pristine out of fear that I'll
        ruin them.
      </p>
      <p>
        To break the spell, I decided to intentionally ruin the first page. I
        wanted to draw a completely ugly scribble and instantly banish the
        pressure to be perfect. The problem? My first attempt came out way too
        pretty. I had to flip to a second page and actively force myself to make
        something genuinely hideous.
      </p>

      <SimpleGallery images={gallery1} />

      <h2>Dusting Off the Shelf</h2>
      <p>
        I do the exact same thing with art supplies. At the store, I see a
        beautiful set of pens or markers, and I immediately visualize the
        masterpieces I'm going to create. <em>This time will be different,</em>{" "}
        I tell myself. Instead, I just end up expanding my collection while
        everything sits untouched on a shelf.
      </p>
      <p>
        When I finally committed to actually using them, the blank page was
        paralyzing. I had no idea what to draw. To break the ice, I decided to
        run a roll call for everything I'd been hoarding. I drew a few lines
        with every single pen, pencil, marker, and wax crayon I owned. It wasn't
        high art, but it got the ink flowing and forced me to actually use my
        tools.
      </p>

      <SimpleGallery images={gallery2} />

      <h2>Finding Style in the Chaos</h2>
      <p>
        Lately, I've been trying a bit of everything: following Instagram
        prompts, practicing watercolor techniques from books, and losing myself
        in abstract patterns. In the spirit of combating perfectionism, I try to
        make things up as I go, focusing on textures and layers rather than a
        rigid plan.
      </p>

      <SimpleGallery images={gallery3} />

      <p>
        There is still a massive list of things I want to try. For now, this
        space is simply a record of what happens when I decide to get out of my
        own way and just keep showing up.
      </p>
    </section>
  );
}

export default Intro;

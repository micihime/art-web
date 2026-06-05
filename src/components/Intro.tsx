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
  {
    src: gallery1img1,
    alt: "Pretty scribble on sketchbook page",
  },
  {
    src: gallery1img2,
    alt: "Intentionally ugly scribble on sketchbook page",
  },
];

const gallery2 = [
  {
    src: gallery2img1,
    alt: "Art supply test page 1",
  },
  {
    src: gallery2img2,
    alt: "Art supply test page 2",
  },
  {
    src: gallery2img3,
    alt: "Art supply test page 3",
  },
  {
    src: gallery2img4,
    alt: "Art supply test page 4",
  },
];

const gallery3 = [
  {
    src: gallery3img1,
    alt: "Abstract sketch 1",
  },
  {
    src: gallery3img2,
    alt: "Abstract sketch 2",
  },
  {
    src: gallery3img3,
    alt: "Abstract sketch 3",
  },
  {
    src: gallery3img4,
    alt: "Abstract sketch 4 part 1",
  },
  {
    src: gallery3img5,
    alt: "Abstract sketch 4 part 2",
  },
  {
    src: gallery3img6,
    alt: "Abstract sketch 4 part 3",
  },
  {
    src: gallery3img7,
    alt: "Abstract sketch 5",
  },
  {
    src: gallery3img8,
    alt: "Abstract sketch 6",
  },
  {
    src: gallery3img9,
    alt: "Watercolor experiment A part 1",
  },
  {
    src: gallery3img10,
    alt: "Watercolor experiment A part 2",
  },
  {
    src: gallery3img11,
    alt: "Watercolor experiment B part 1",
  },
  {
    src: gallery3img12,
    alt: "Watercolor experiment B part 2",
  },
];

function Intro() {
  return (
    <section className={styles.intro}>
      <p>
        I'm learning to paint and draw. Most of what you'll find here is a
        record of that process: the experiments, the exercises, the sketches,
        and the occasional successes.
      </p>
      {/* self-portrait or photo of the workspace */}
      <h2>The Art of Intentional Ruin</h2>
      <p>Earlier this year, I opened a brand-new sketchbook.</p>
      <p>I'm a perfectionist. Or was? trying not to be.</p>
      <p>
        I drew a random line on the very first page just to get the pressure
        over with. I have a tendency to buy a lot of beautiful notebooks (I love
        notebooks!)
      </p>
      <p>And then not use them - because I feel like I will ruin them.</p>
      <p>
        So i wanted to intentionally ruin it on the first page. Draw an ugly
        scribble. And with it, let the pressure to draw perfectly go.
      </p>
      <p>The problem? It came out too pretty.</p>
      <p>
        So on another page, I tried again and forced myself to make an
        intentionally ugly scribble.
      </p>
      <SimpleGallery images={gallery1} />
      <h2>Dusting Off the Shelf</h2>
      <p>
        For years, I collected art supplies with the best intentions, only to
        leave them sitting on my shelves.
      </p>
      <p>
        (The same thing I do with notebooks, I do with art supplies. Huh...)
      </p>
      <p>I get caught up in the idea that</p>
      <p>
        When I see some great new art supplies, I immediately see myself how I
        do great artworks done with this tools. At the shop, I feel like 100%
        this time it is going to be different. I will REALLY start
        painting/drawing/journalling/etc.
      </p>
      <p>But I never did :D I was just expanding my collection.</p>
      <p>
        Then, when I finally decided that I will really do this, I did not know
        what to draw. And it felt a little bit paralyzing. So I wondered, what
        now?
      </p>
      <p>
        I just needed to break the ice. So I decided, I will just draw some
        lines with each and every one of my pencil and marker and wax pencil. To
        just try out my tools that i bought over the years and never used and
        they lay in my shelves unused.
      </p>
      <p>
        My first pages became a roll call for everything I'd been hoarding: one
        line for every pen, pencil, and marker I'd been saving.
      </p>
      <p>
        This was like a starter idea to do something, at least something. And
        just to use the stuff i bought in the past.
      </p>
      <SimpleGallery images={gallery2} />
      <h2>Finding a Style in the Chaos</h2>
      <p>
        I've been trying different things: following prompts from Instagram,
        testing out watercolor techniques from books, or making abstract pattern
        sketches. In the name of combating perfectionism, I just try making it
        up as I go and seeing what kind of textures happen, with no specific
        plan beforehand.
      </p>
      <SimpleGallery images={gallery3} />
      <p>
        There is still a lot on my list to try. For now, this is simply a record
        of what happens when I decide to keep showing up anyway.
      </p>
    </section>
  );
}

export default Intro;

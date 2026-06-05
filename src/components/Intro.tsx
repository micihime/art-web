import styles from "./Intro.module.css";

function Intro() {
  return (
    <section className={styles.intro}>
      <h1>I'm learning to paint and draw.</h1>
      <p>
        Most of what you'll find here is a record of that process: the
        experiments, the exercises, the sketches, and the occasional successes.
      </p>
      {/* [ Photo of you creating / your workspace ] */}
      <h2>The Art of Intentional Ruin</h2>
      <p>
        Earlier this year, I opened a brand-new sketchbook. Being a recovering
        perfectionist, I knew the blank page would paralyze me, so I drew a
        random line on the very first page just to get the pressure over with.
      </p>
      <p>The problem? It came out too pretty.</p>
      <p>
        Frustrated, I turned to the next page and forced myself to make an
        intentionally ugly scribble. That one worked. The spell was broken, and
        I've been trying to apply that same "just ruin it" logic ever since.
      </p>
      {/* [ Photo: The "too pretty" line vs. the ugly scribble ] */}
      <h2>Dusting Off the Shelf</h2>
      <p>
        For years, I collected art supplies with the best intentions, only to
        leave them sitting on my shelves. Beautiful sketchbooks felt far too
        important to spoil. When I finally decided to just start, I didn't have
        a grand plan. I just needed to break the ice.
      </p>
      <p>
        My first pages became a roll call for everything I'd been hoarding: one
        line for every pen, pencil, and marker I'd been saving for the "right
        moment."
      </p>
      {/* [ Photo: The colored test pages next to your art supplies ] */}
      <h2>Finding a Style in the Chaos</h2>
      <p>
        Once the tools were dusty and the pages were ruined, I started playing.
        I followed Instagram prompts, tried watercolor exercises from books, and
        eventually started sketching with absolutely no plan at all—just letting
        lines fall where they wanted to.
      </p>
      <p>
        Somewhere in those unplanned moments, I accidentally stumbled into my
        own style: neat, straight lines filling abstract patterns next to each
        other, creating textures I actually really like. I'm still experimenting
        with it, blending these tight patterns with unpredictable watercolor
        blotches, and seeing what happens next.
      </p>
      <p>
        This website is simply a record of what happens when I decide to keep
        showing up anyway.
      </p>
    </section>
  );
}

export default Intro;

import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Michi Estudio" },
    { name: "description", content: "Welcome to Michi Estudio!" },
  ];
};

export default function Index() {
  return (
    <>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <h1>Welcome to My Creative Playground!</h1>
        <h3>Exploring the colorful world of watercolors—one brushstroke at a time!</h3>
        <p>
          Hi, I&apos;m Miči, an artist-in-the-making who&apos;s just starting to paint outside the lines! 
          Join me as I splash colors and slowly figure out how to make them look like actual art. 
          Spoiler alert: It&apos;s messy, but it&apos;s fun!
        </p>
        <blockquote>Mistakes? I call them &apos;happy accidents&apos; —thanks, Bob Ross!</blockquote>
      </div>
      <footer>
        Footer
        Keep it simple, with links to your social media profiles (if any).
        A funny closing line, like: Thanks for visiting! Now go paint something... or at least pretend to!
      </footer>
    </>
  );
}

import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Michi Estudio" },
    { name: "description", content: "Welcome to Michi Estudio!" },
  ];
};

export default function Index() {
  return (
    <main>
      <article>
        <header className="post-header">
          <h1>Welcome to My Creative Playground!</h1>
					<p className="post-meta">
						napisal <a href="https://mitchie.netlify.app/" className="author">Admin Admin</a>
						<time dateTime="2024-04-20 19:00">Apr. 20, 2024</time>
					</p>
				</header>
				<div className="post-content">
          <h3>Exploring the colorful world of watercolors—one brushstroke at a time!</h3>
          <p>
            Hi, I&apos;m Miči, an artist-in-the-making who&apos;s just starting to paint outside the lines! 
            Join me as I splash colors and slowly figure out how to make them look like actual art.  
          </p>

          <aside className="pullquote float-right">
						<q>Mistakes? I call them &apos;happy accidents&apos; —thanks, Bob Ross!</q>
					</aside>

          <p>
            Watercolors have quickly become my favorite medium because of their unpredictability and delicate charm. There&apos;s something magical about how the colors blend, flow, and surprise you with every stroke. Sure, it can be tricky (and a little messy!), but that&apos;s part of the fun. I love how watercolors teach me to embrace imperfection, stay patient, and let go of control—qualities I never knew I needed in my creative process. Each painting is a new adventure, and I&apos;m learning that even the “happy accidents” can turn into something beautiful.
          </p>
          <p>
            I&apos;m documenting my progress here because, if nothing else, it&apos;s going to be fun looking back at the early days when I thought making a realistic tree was as easy as blending colors. (Spoiler: It wasn&apos;t.)
          </p>
          <p>
            While watercolor is my main creative outlet right now, I have a deep love for exploring all kinds of art forms. Whether it&apos;s trying out different painting mediums like acrylic or oil, dabbling in digital drawing, experimenting with photography, or even sculpting something from clay, I&apos;m excited to dive into it all. 
          </p>
          <p>
            Creativity doesn&apos;t have limits, and I&apos;m always eager to learn and experiment with new ways to express myself. Baking, too, is one of my favorite artistic adventures—because who says art can&apos;t be delicious? So while you&apos;ll mostly see my watercolor progress here, don&apos;t be surprised if other art forms sneak their way in!
          </p>

          <aside className="pullquote float-left">
						<q><strong>Spoiler alert:</strong> It&apos;s messy, but it&apos;s fun!</q>
					</aside>

          <p>
            I believe art is more about the journey than the result, and that&apos;s exactly how I approach it. So, come along for the ride, and let&apos;s laugh at my learning process together.
          </p>
        </div>
			</article>
		</main>
  );
}

import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "About Me" },
    { name: "description", content: "About Michi Estudio" },
  ];
};

export default function Index() {
  return (
    <main>
			<article>
				<header className="post-header">
					<h1>About Me</h1>
					{/* <p className="post-meta">
						napisal <a href="https://mitchie.netlify.app/" className="author">Admin Admin</a>
						<time dateTime="2024-04-20 19:00">Apr. 20, 2024</time>
					</p> */}
				</header>
				<div className="post-content">
          <p>
            Hi there, I&apos;m Michi!
					</p>
          <p>
            I started my artistic journey not too long ago, and let&apos;s just say I&apos;m still figuring out the difference between a masterpiece and a colorful mess 
            (hint: it&apos;s mostly about how confidently you show it off).
          </p>
          <aside className="pullquote float-right">
						<q>Trying to make watercolors cooperate is a whole different challenge! They have a mind of their own.</q>
					</aside>

					<h2>Why Watercolors?</h2>
          <p>
            I chose watercolors because they&apos;re both beautiful and unpredictable—just like life, right? I love how they blend, flow, and create unexpected results. 
            (Sometimes those results are way more unexpected than I planned, but that&apos;s part of the fun!)
          </p>
          
					<h2>A Few Things About Me</h2>
          <p>
            Creative at Heart: Whether it&apos;s coding, painting, or baking, I love creating things that didn&apos;t exist before. (Sometimes delicious cookies, sometimes weird art pieces—depends on the day!)
          </p>
          <p>
            Lifelong Learner: Learning new skills is my jam! From .NET programming to watercolor techniques, I&apos;m always excited about diving into something new. And hey, if I can get paint all over my hands in the process, even better!
          </p>
          <p>
            Funny (at least I think so): If you enjoy self-deprecating humor and stories about artistic mishaps, we&apos;re going to get along just fine.
          </p>

					<h2>Where I&apos;m Headed</h2>
          <p>
            Right now, I&apos;m focused on developing my skills in watercolor painting, improving with each brushstroke. I&apos;m documenting my progress here because, if nothing else, it&apos;s going to be fun looking back at the early days when I thought making a realistic tree was as easy as blending colors. (Spoiler: It wasn&apos;t.)
          </p>
          <p>
            I believe art is more about the journey than the result, and that&apos;s exactly how I approach it. So, come along for the ride, and let&apos;s laugh at my learning process together.
          </p>
					{/* <aside className="pullquote float-left">
						<q>Chocolate cake bear claw lollipop cake sweet I love caramels.</q>
					</aside>
					 */}
				</div>
			</article>
		</main>
  );
}

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
          <p>Hi there, I&apos;m Michi!</p>
          <p>
            I started my artistic journey not too long ago, and let&apos;s just
            say I&apos;m still figuring out the difference between a masterpiece
            and a colorful mess. (Hint: it&apos;s mostly about how confidently
            you show it off!)
          </p>

          <aside className="pullquote float-right">
            <q>
              Trying to make watercolors cooperate is a whole different
              challenge! They have a mind of their own.
            </q>
          </aside>

          <h2>Why Watercolors?</h2>
          <p>
            I chose watercolors because they&apos;re both beautiful and
            unpredictable—just like life, right? I love how they blend, flow,
            and create unexpected results. Sometimes those results are way more
            unexpected than planned, but that&apos;s part of the fun! With each
            new piece, I&apos;m learning to embrace the surprises and trust the
            process, even when things don&apos;t go as expected.
          </p>

          <h2>A Few Things About Me</h2>
          <p>
            <strong>Creative at Heart:</strong> Whether I&apos;m coding,
            painting, or baking, I love creating things that didn&apos;t exist
            before. Sometimes it&apos;s a batch of delicious cookies, other
            times it&apos;s an odd-looking art piece—but that&apos;s just the
            creative journey!
          </p>
          <p>
            <strong>Lifelong Learner:</strong> Learning new skills is what keeps
            me going. From .NET programming to mastering watercolor techniques,
            I&apos;m always excited to dive into something new. And if it
            involves getting paint all over my hands, even better!
          </p>
          <p>
            <strong>Eternal Optimist:</strong> I like to find humor in every
            situation. My artistic journey is full of unexpected twists, and I
            embrace each one with a smile and curiosity. Even when things
            don&apos;t turn out as planned, I&apos;m always looking for the
            bright side—splattered paint disasters included.
          </p>
          <p>
            I hope you enjoy following along with my creative journey as much as
            I enjoy sharing it! Whether it&apos;s a watercolor experiment, a new
            artistic adventure, or just a funny mishap along the way, I&apos;m
            excited to document it all here. Feel free to explore, get inspired,
            or even laugh with me at the unpredictable world of art.
          </p>
          <p>
            Thanks for stopping by, and I can&apos;t wait to see where this
            journey takes us!
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

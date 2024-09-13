import type { MetaFunction } from "@netlify/remix-runtime";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog" },
    { name: "description", content: "My Blog" },
  ];
};

export default function Index() {
	return (
	<>	
		<div className="cover">
			<a href="https://mitchie.netlify.app/" className="badge">
				<small>Issue</small> 123
			</a>
		</div>
		<main>
			<article>
				<header className="post-header">
					<h1>Thoughts & Paint Splatters</h1>
					<p className="post-meta">
						napisal <a href="https://mitchie.netlify.app/" className="author">Admin Admin</a>
						<time dateTime="2024-04-20 19:00">Apr. 20, 2024</time>
					</p>
				</header>
				<div className="post-content">
					<p>
						Write short entries about your experiences, challenges, and triumphs in your artistic journey.
					</p>
					<p>
						You could even post a mix of serious reflections and lighthearted updates like: The paintwater cup has been spilled again. Moment of silence for the carpet.
					</p>
					<aside className="pullquote float-left">
						<q>Chocolate cake bear claw lollipop cake sweet I love caramels.</q>
					</aside>
					<p>Carrot cake shortbread I love lollipop oat cake cookie. Cake tootsie roll brownie pudding chocolate cake oat cake. Cake gummi bears toffee dessert dessert apple pie brownie candy canes. Bear claw brownie croissant cake jelly beans I love gummies bonbon croissant. Shortbread chocolate bar gingerbread pudding gingerbread I love halvah I love cake. I love wafer donut pudding jujubes. Toffee gummies toffee liquorice tootsie roll topping bear claw. Liquorice I love tootsie roll I love powder jelly. I love lollipop wafer croissant marzipan pastry cake pudding marzipan. Pie sesame snaps cotton candy sweet oat cake marzipan tiramisu I love. Jelly toffee I love donut carrot cake cheesecake tart. Cupcake icing shortbread donut pudding I love cake I love. Tootsie roll candy canes sugar plum cake jujubes pastry danish pudding. Gummi bears tart soufflé tart candy cotton candy cookie biscuit.</p>
					<h2>Toto je podnadpis</h2>
					<p>Macaroon bonbon muffin candy canes lemon drops tootsie roll cotton candy oat cake icing. Muffin cotton candy cheesecake I love I love cupcake danish. I love lemon drops chocolate cheesecake pastry.</p>
					<aside className="pullquote float-right">
						<q>Chupa chups tiramisu I love soufflé pudding muffin.</q>
					</aside>
					<p>Macaroon apple pie shortbread biscuit donut pie. Sweet sweet sugar plum marzipan wafer pastry. I love gingerbread tiramisu chocolate bar marshmallow donut sweet.</p>
					<aside className="pullquote float-left">
						<i>Zopar linkov</i>
						<ul>
							<li> <a href="https://mitchie.netlify.app/">Red velvet cupcake</a></li>
							<li> <a href="https://mitchie.netlify.app/">Strawberry lollipop</a></li>
							<li> <a href="https://mitchie.netlify.app/">Muffin</a></li>
							<li> <a href="https://mitchie.netlify.app/">Double choc</a></li>
							<li> <a href="https://mitchie.netlify.app/">Salty caramel lifestyle</a></li>
							<li> <a href="https://mitchie.netlify.app/">Bubble gum</a></li>
						</ul>
					</aside>
					<p>
						Sugar plum chocolate pudding bonbon sweet roll cookie oat cake. Brownie cake caramels icing candy I love caramels apple pie donut. Topping I love gummi bears shortbread candy cupcake marshmallow. Chocolate cake dessert I love chocolate brownie croissant. Bear claw lollipop croissant candy canes powder halvah cookie macaroon pastry. Donut sweet biscuit pastry cupcake topping. Icing cupcake sweet roll danish jelly beans. Pudding fruitcake jelly marzipan gummies danish. Gummies halvah jujubes macaroon soufflé candy canes sugar plum. Gummies jelly beans sweet roll cheesecake lollipop candy canes I love. Shortbread icing topping croissant sweet roll sweet pudding cake I love. Cupcake tootsie roll apple pie I love caramels gummies pie cake I love. Sesame snaps apple pie I love I love fruitcake lemon drops I love cheesecake. Cake bonbon shortbread danish jelly.</p>
					<p>
						Jelly dessert oat cake sugar plum cotton candy I love topping. Candy canes icing carrot cake muffin cake tiramisu sweet roll. Gingerbread donut oat cake dragée halvah ice cream toffee toffee.</p>
					<h3>Mensi podnadpis</h3>
					<p>Gummies chupa chups jelly-o sugar plum toffee liquorice danish cupcake topping. Toffee I love I love topping biscuit gummi bears donut chupa chups. I love croissant chocolate cake apple pie candy chocolate bar. Cookie gummies ice cream biscuit cookie pudding chocolate bar tiramisu macaroon.</p>
				</div>
				<footer className="post-footer">
					<h3>O autorovi</h3>
					<div className="byline">
						<a href="https://mitchie.netlify.app/" className="photo">
							<img src="/img/profile.jpg" height="120" width="120" alt="author" />
						</a>
						<h3><a href="https://mitchie.netlify.app/">Admin Admin</a></h3>
						<div className="bio"><p>Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <a href="https://mitchie.netlify.app/">incididunt</a> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <strong>cupidatat non proident</strong>, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
					</div>
				</footer>
			</article>

			<aside className="pre-footer">
				<ul className="review">
					<li>
						<blockquote>Suspendisse pretium mi est, in sagittis erat dignissim rhoncus. Cras ac quam eget turpis luctus vehicula pulvinar vitae nisi.</blockquote>
						<p className="review-byline">Faucibus</p>
					</li>
					<li>
						<blockquote>Vestibulum fermentum justo nec metus iaculis porttitor.</blockquote>
						<p className="review-byline">Rhoncus</p>
					</li>
					<li>
						<blockquote>Aenean facilisis libero vel nisi lacinia tincidunt.</blockquote>
						<p className="review-byline">Fermentum</p>
					</li>
					<li>
						<blockquote>Nunc quis ullamcorper magna.</blockquote>
						<p className="review-byline">Curabitur</p>
					</li>
				</ul>
			</aside>
		</main>
	</>
);}
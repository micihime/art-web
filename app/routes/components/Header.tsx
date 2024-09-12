export default function Header() {
  return (
    <div className="header">
      <div className="header-content flexi">
        <div className="logo">Michi</div>
        <ul className="navbar flexi">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/progress-gallery">Gallery</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
// import logo from '../assets/logo.svg'
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      {/* <img src={logo} alt="logo" className={styles.logo} /> */}
      <h3 className={styles.slogan}>Process Over Perfection</h3>
    </header>
  )
}

export default Header

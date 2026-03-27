import styles from "./Footer.module.css";
import {
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";

function Footer() {
  const handleEmailClick = () => {
    const username = "mitchie.arte";
    const domain = "gmail.com";
    window.location.href = `mailto:${username}@${domain}`;
  };

  return (
    <div className={styles.footer}>
      <div className={styles.icons}>
        <a href="https://instagram.com//studio.mornings" target="_blank" rel="noopener noreferrer" title="Instagram"><IconBrandInstagram size={30} /></a>
        <button type="button" className={styles.iconButton} onClick={handleEmailClick} title="Email">
          <IconMail size={30} />
        </button>
      </div>
      <div>
        <p className={styles.credit}>Designed by <a href="https://mhresko.dev/" target="_blank" rel="noopener noreferrer">Miči</a></p>
      </div>
    </div>
  )
}

export default Footer

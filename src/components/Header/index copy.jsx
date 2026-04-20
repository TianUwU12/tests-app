import { Link } from "react-router-dom";
import { menuItems } from "./menuItems";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header>
      <nav className={styles.header}>
        {menuItems.map(({ label, link }, index) => (
          <Link className={styles.link} key={index} to={link}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

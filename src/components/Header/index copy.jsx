import { Link } from "react-router-dom";
import { menuItems } from "./menuItems";
import styles from "./Header.module.css";
export default function Header() {
  console.log(styles);
  
  return (
    <header>
      <nav className={styles.header}>
        {menuItems.map(({ label, link },index) => (
          <Link className={styles.link} key={index} to={link}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}

// Сделать массив в котором будут все пункты меню вашего сайта + отобразить эти пункты меню в строчку
let a = 'abc'
a = ''
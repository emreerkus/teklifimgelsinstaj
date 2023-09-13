import Link from 'next/link';
import styles from '../Navbar.module.css';
import logo from '/src/app/logos/logo.svg';

const url = 'https://cdn.teklifimgelsin.com/images/tg-logo.svg'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <img src={url} />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">
            Anasayfa
          </Link>
        </li>
        <li>
          <Link href="/about">
            Hakkımızda
          </Link>
        </li>
        <li>
          <Link href="/contact">
            İletişim
          </Link>
        </li>
      </ul>
    </nav>
  );
}

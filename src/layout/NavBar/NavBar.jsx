import styles from "./NavBar.module.scss";
import MainLogo from "../../assets/logo/MainLogo";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <MainLogo />
      <ul className={styles.navbar__list}>
        <li className={styles.navbar__list__item}>Accueil</li>
        <li className={styles.navbar__list__item}>Profil</li>
        <li className={styles.navbar__list__item}>Réglages</li>
        <li className={styles.navbar__list__item}>Communauté</li>
      </ul>
    </nav>
  );
};

export default NavBar;

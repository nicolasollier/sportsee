import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <SideBar />
      <main className={styles.main__wrapper}>{children}</main>
    </>
  );
};

export default Layout;

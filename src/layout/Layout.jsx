import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <SideBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;

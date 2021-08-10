import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="lay">
        <div> {children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

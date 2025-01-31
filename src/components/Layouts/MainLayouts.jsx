import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";



const MainLayouts = () => {
  return (
    <div>
      {/* Navber */}
      <div className="  mt-2 rounded-t-3xl mx-1 md:mx-8 lg:mx-8">
        <Header />
      </div>

      <div className="  min-h-[calc(100vh-300px)]">
        <Outlet />
      </div>
      <div className="mt-[800px] md:mt-0 lg:mt-0" >
        <Footer />
      </div>
    </div>
  );
};

export default MainLayouts;

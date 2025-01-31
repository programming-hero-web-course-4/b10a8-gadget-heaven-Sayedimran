import { Link } from "react-router-dom";
import shopLogo from "/ShopIcon.png";
import LoveLogo from "/love.png";
import { CartContext } from "../../Provider/ContextProvider";
import { useContext } from "react";



const Header = () => {
  const obj = useContext (CartContext )
  console.log(obj);
  
    const {productId} = obj 
  return (
    <div className="lg:p-2 bg-purple-700 rounded-t-4xl">
      <div className=" lg:p-3  rounded-3xl ">
        <div className="rounded-t-3xl navbar">
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl">Gadget Heaven</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold text-base">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Statistics">Statistics</Link>
              </li>
                    
              <li>
                <Link to="/Dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Statistics</Link>
              </li>
              <li>
                <Link>Dashboard</Link>
              </li>
            </ul>
          </div>

          <div className="navbar-end gap-3">
            <Link to='/Dashboard' className="btn   rounded-full py-6 px-2  ">
              
              <img className="size-6" src={shopLogo} alt="" />
              <sup className="text-xs font-extrabold">{productId.length}</sup>
            </Link>
            <Link className="btn   rounded-full py-6 px-2  ">
              <img className="size-6" src={LoveLogo} alt="" />
              <sup className="text-xs font-extrabold">  </sup>
            </Link>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Header;

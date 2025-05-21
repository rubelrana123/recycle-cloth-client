import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Navbar = () => {
  const { user, signout } = useContext(AuthContext);

  const navigate = useNavigate();
  console.log("username", user, user?.displayName);
  //scroll controll
  // const [isScrolled, setIsScrolled] = useState(false);
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (window.scrollY > 10) {
  //         setIsScrolled(true);
  //       } else {
  //         setIsScrolled(false);
  //       }
  //     };

  //     window.addEventListener('scroll', handleScroll);
  //     return () => window.removeEventListener('scroll', handleScroll);
  //   }, []);
  const handleLogOut = () => {
    signout().then(() => {
      navigate("/");
      toast.success("Logout Successfully", { autoClose: 200 });
      localStorage.removeItem("token");
    });
  };
  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>

      {user?.uid ? (
        <>
          <li>
            <Link to="/dashboard">DashBoard</Link>
          </li>
          <li>
            <Link onClick={handleLogOut}>Logout</Link>
          </li>

          <div className="avatar  m-3 items-center flex">
            <div className="w-8 h-8  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL} alt="profile" />
            </div>
          </div>
        </>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <div className="flex items-center ">
          <Link to="/" className=" normal-case lg:text-xl text-sm ml-28">
            <div className={`text-2xl  font-bold`}>
              <span className="flex items-center text-emerald-500">
                <Recycle size={24} className="mr-2" />
                Clothe
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex text-gray-700 ">
        <ul className="menu menu-horizontal p-0 ">{menuItem}</ul>
      </div>
      <label
        tabIndex={2}
        htmlFor="dashboard-drawer"
        className="btn btn-ghost lg:hidden"
      >
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
      </label>
    </div>
  );
};

export default Navbar;

// Add Recycle icon component since it wasn't included in the imports
function Recycle(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className || ""}
    >
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
    </svg>
  );
}

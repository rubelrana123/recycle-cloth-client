import { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider.js";
import UseAdmin from "../../Hooks/UseAdmin.js";
import UseSeller from "../../Hooks/UseSeller.js";

import Navbar from "../../Pages/Shared/Navbar/Nav.js";
import { ArrowLeft } from "lucide-react";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = UseAdmin(user?.email);
  const [isSeller] = UseSeller(user?.email);
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith("/dashboard");
  return (
    <div>
      {!isDashboardRoute ? (
        <Navbar />
      ) : (
        <div className="bg-gray-100 px-4 py-2 shadow-md flex justify-start">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition"
          >
            <ArrowLeft size={18} />
            Back Home
          </Link>
        </div>
      )}
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col  ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addproduct">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproduct">My Product</Link>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allseller">All Seller</Link>
                </li>
                <li>
                  <Link to="/dashboard/allbuyer">All Buyer</Link>
                </li>
                <li>
                  <Link to="/dashboard/reporteditem">Reported Item</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

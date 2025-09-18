import { NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUserAlt, FaBars } from "react-icons/fa";


export default function Header() {
  
  

  return (
    <nav className="navbar navbar-expand-md bg-white">
      <div className="container-fluid container d-flex justify-content-between align-items-center">
        <div>
          <NavLink className="nav-NavLink navbar-brand">
            <h4 className="text-body-tertiary me-5">
              <strong>Book Store</strong>
            </h4>
          </NavLink>
        </div>
    
        <button
          className="navbar-toggler d-md-none"
          type="button"
          aria-label="Toggle navigation"
          
        >
          <FaBars />
        </button>
        {/* Collapsible content */}
        <div
          className={`collapse navbar-collapse d-md-flex flex-md-row justify-content-md-end align-items-md-center`}
          id="navbarSupportedContent"
        >
          {/* Search bar */}
          {true && (
            <div className="my-2 my-md-0 me-md-4 w-100 w-md-auto">
              <input
                className="form-control px-5 ms-5"
                type="search"
                placeholder="🔍 Search"
                aria-label="Search"
                style={{width: "80%"}}
              />
            </div>
          )}
          {/* Right-side NavLinks */}
          <div className="d-flex align-items-center justify-content-evenly mt-3 mt-md-0">
            <NavLink className="position-relative me-5">
              <span style={{ fontSize: "30px" }}>
                <FaHeart className="text-secondary" />
              </span>
              <span className="position-absolute bottom-0 start-10 translate-middle badge rounded-pill bg-danger my-3">
                {0}
              </span>
            </NavLink>
            <NavLink className="position-relative me-5" >
              <span style={{ fontSize: "30px" }}>
                <FaShoppingCart className="text-secondary" />
              </span>
              <span className="position-absolute bottom-0 start-10 translate-middle badge rounded-pill bg-danger my-3">
                {0}
              </span>
            </NavLink>
            <NavLink>
              <span style={{ fontSize: "30px" }}>
                <FaUserAlt className="text-secondary" />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
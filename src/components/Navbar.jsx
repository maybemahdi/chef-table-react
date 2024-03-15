const Navbar = () => {
  return (
    <div className="my-4">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown -ml-7 lg:ml-0">
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
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <h3 className="font-bold text-[18px] lg:text-[25px]">Recipe Calories</h3>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-base px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <div className="bg-gray-200 flex items-center gap-2 p-3 rounded-[25px]">
            <img src="https://cdn.hugeicons.com/icons/search-01-stroke-rounded.svg" alt="search-01" width="24" height="24" />
            <input className="bg-gray-200 w-2/3 focus:outline-none" type="text" placeholder="Search" />
          </div>
          <img
            className="bg-green-500 p-1 rounded-full"
            src="/public/Frame (6).svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

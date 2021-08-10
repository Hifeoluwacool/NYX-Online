import Link from "next/link";

const Header = () => {
  return (
    <div className="header  text-white ">
      <nav className="flex justify-between py-5 px-8  xl:px-44  bg-indigo-500  ">
        <Link href="/">
          <a className="logo  text-2xl font-bold ">NYX</a>
        </Link>

        <div className="flex">
          <ul className="action">
            <li className="inline-block hover:underline hover:transition transition-opacity ">
              <Link href="/user/login">
                <a>Log in</a>
              </Link>
              <span> / </span>
              <Link href="/user/register">
                <a>Register</a>
              </Link>
            </li>
            <li className="inline-block mx-3 py-1 px-2 rounded bg-blue-400 text-white hover:bg-yellow-300">
              <Link href="/post/new">
                <a>New Post</a>
              </Link>
            </li>
          </ul>
          {/* <input
            type="text"
            placeholder="Search"
            className="ml-3 px-2 rounded text-sm"
          /> */}
        </div>
      </nav>

      <ul className="nav2 bg-white py-4  justify-center  xl:px-44 xl:justify-start  text-black flex">
        <li>
          <Link href="/top">
            <a>Top</a>
          </Link>
        </li>
        <li>
          <Link href="/top">
            <a>Recent</a>
          </Link>
        </li>
        <li>
          <Link href="/top">
            <a>Starred</a>
          </Link>
        </li>
        <li>
          <Link href="/top">
            <a>Badges</a>
          </Link>
        </li>
        <li>
          <Link href="/user/profile">
            <a>Profile</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

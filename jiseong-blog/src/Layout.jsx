import { Link } from "react-router-dom";
import Toggle from "./components/toggle";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='wrapper'>
      <header>
        <h1><Link to='/'><NavLink to='/' className={({ isActive }) => (isActive ? 'home_h1' : 'article_h1')}>Jiseong Blog</NavLink></Link></h1>
        <Toggle />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;
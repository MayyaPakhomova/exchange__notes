import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1 className='m-3 mb-5 text-secondary text-center'>Share Notes</h1>
      <nav className='mb-5'>
        <ul className='justify-content-between nav'>
          <li>
            <NavLink
              exact
              className='p-2 px-5 bg-info text-white header-link'
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className='p-2 px-5 bg-info text-white header-link'
              to='/note'
            >
              Note
            </NavLink>
          </li>
          <li>
            <NavLink
              className='p-2 px-5 bg-info text-white header-link'
              to='/create'
            >
              Create
            </NavLink>
          </li>
          <li>
            <NavLink
              className='p-2 px-5 bg-info text-white header-link'
              to='/about'
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

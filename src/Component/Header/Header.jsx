
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            NavBar 
            <nav> 
                <ul className='flex justify-between gap-5'>
                  <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/users">Users</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
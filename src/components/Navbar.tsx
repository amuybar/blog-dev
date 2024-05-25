import React from 'react';
import { FaBars} from 'react-icons/fa';
import '../styles/Navbar.scss';

function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <div className='nav-section'>
            <div className='logo'>Dev Blogs</div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
                <li><a href='/projects'>Projects</a></li>
                <li><a href='/login'>Login</a></li>
            </ul>
            <div className="menu" onClick={() => setIsOpen(!isOpen)}>
               {
                isOpen ? <h1 className='close'>X</h1> : <FaBars className='open'/>
               }
            </div>
        </div>
    );
}

export default Navbar;

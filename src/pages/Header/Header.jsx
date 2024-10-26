import { Link } from 'react-router-dom';
import './header.css'

function Header() {
    return (
        <>
            <div className='header'>
                <Link to="/">Home</Link>
                <Link to="/form">Form</Link>
            </div>
        </>
    )
}

export default Header;
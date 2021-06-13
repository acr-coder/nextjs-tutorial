import Link from 'next/link'
import navstyles from '../styles/Navbar.module.css'

function Navbar() {
    return (
        <nav className={navstyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Homepage</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
            
        </nav>
    )
}

export default Navbar

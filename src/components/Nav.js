import logo from '../assets/logo.png';

const navInfo = ["home", "about", "menu", "reservations", "order online", "log in"]

const Nav = () => {
    return (
        <header>
            <nav className='nav-container'>
                <img src={ logo } alt='logo' />
                <ul className='nav-links'>
                    {
                        navInfo.map((data, i) => {
                            return (
                                <li key={ i }>
                                    <a href='/'>{ data }</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
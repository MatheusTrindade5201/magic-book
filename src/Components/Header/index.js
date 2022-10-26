import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/image/logo.png'
import { HeaderPage } from './style'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    return (
        <HeaderPage>
            <div>
                <img className='header__logo' src={logo} />
                <nav className='desktop'>
                <NavLink className='NavLink' to='/'>Home</NavLink>
                <NavLink className='NavLink' to='/students'>Students</NavLink>
                <NavLink className='NavLink' to='/staff'>Staff</NavLink>
                <NavLink className='NavLink' to='/spell-book'>Spell Book</NavLink>
                </nav>
                <FontAwesomeIcon onClick={props.menuOpener} className='mobile-button' icon={faBars}/>
                <button onClick={props.toggleTheme}>{props.themeName}</button>
            </div> 
                <nav className={props.menuMobile + 'mobile'}>
                    <NavLink className='NavLink' to='/'>Home</NavLink>
                    <NavLink className='NavLink' to='/students'>Students</NavLink>
                    <NavLink className='NavLink' to='/staff'>Staff</NavLink>
                    <NavLink className='NavLink' to='/spell-book'>Spell Book</NavLink>
                </nav> 
        </HeaderPage>
        
    )
}

export default Header
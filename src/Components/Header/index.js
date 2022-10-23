import { NavLink } from 'react-router-dom'
import logo from '../../assets/image/logo.png'
import { HeaderPage } from './style'

const Header = (props) => {
    return (
        <HeaderPage>
                <img src={logo} />
                <nav>
                <NavLink className='NavLink' to='/'>Home</NavLink>
                <NavLink className='NavLink' to='/students'>Students</NavLink>
                <NavLink className='NavLink' to='/staff'>Staff</NavLink>
                <NavLink className='NavLink' to='/spell-book'>Spell Book</NavLink>
                </nav>
                <button onClick={props.toggleTheme}>{props.themeName}</button> 
        </HeaderPage>
    )
}

export default Header
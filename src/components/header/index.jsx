import {Logo} from '../../assets/logo.jsx'
import {Link} from "react-router-dom";
export const Header = () => {
    return <header className= 'p-6 flex items-center justify-between'>
        <Link to = '/'>
           <span className= 'flex items-center gap-2'> <Logo />  <span className= 'text-xl font-semibold'>imagic</span></span>
        </Link>
    </header>
}
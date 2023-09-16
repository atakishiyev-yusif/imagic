import {Logo} from '../../assets/logo.jsx'
export const Header = () => {
    return <header className= 'p-6 flex items-center justify-between'>
        <div>
           <span className= 'flex items-center gap-2'> <Logo />  <span className= 'text-xl font-semibold'>imagic</span></span>
        </div>
    </header>
}
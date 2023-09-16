import { Logo } from '../../assets/logo.jsx';
import {AiFillGithub, AiFillYoutube, AiOutlineGithub, AiOutlineInstagram} from "react-icons/ai";
import {FaSquareXTwitter, FaXTwitter} from "react-icons/fa6";

//
export const Footer = () => {
    return <footer className= 'flex items-center gap-6'>
        <a href="https://github.com/atakishiyev-yusif" target="_blank" ><AiOutlineGithub className= 'hover:text-blue-700 w-[25px] h-[25px]'/></a>
        <a href="https://www.instagram.com/yusifatakishiyev/" target="_blank" ><AiOutlineInstagram className= 'hover:text-blue-700 w-[25px] h-[25px]'/></a>
        <a href="https://youtube.com/@yusif_atakishiyev?si=U_9ir6CaeNpQNGKH" target="_blank" ><AiFillYoutube className= 'hover:text-blue-700 w-[25px] h-[25px]' /></a>
        <a href="https://twitter.com/ysfatakishiyev" target="_blank" ><FaXTwitter className= 'hover:text-blue-700 w-[25px] h-[25px]' /></a>
    </footer>
}

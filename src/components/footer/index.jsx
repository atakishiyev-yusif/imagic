import { Logo } from '../../assets/logo.jsx';
import {AiFillGithub, AiFillYoutube, AiOutlineGithub, AiOutlineInstagram} from "react-icons/ai";
import {FaSquareXTwitter, FaXTwitter} from "react-icons/fa6";

//
export const Footer = () => {
    return <footer className= 'flex items-center gap-6'>
        <a href=""><AiOutlineGithub className= 'hover:text-blue-700 w-[25px] h-[25px]'/></a>
        <a href=""><AiOutlineInstagram className= 'hover:text-blue-700 w-[25px] h-[25px]'/></a>
        <a href=""><AiFillYoutube className= 'hover:text-blue-700 w-[25px] h-[25px]' /></a>
        <a href=""><FaXTwitter className= 'hover:text-blue-700 w-[25px] h-[25px]' /></a>
    </footer>
}
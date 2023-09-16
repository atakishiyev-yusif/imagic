import {Link} from "react-router-dom";
import hero from '../../assets/hero.png';
import {Footer} from "../../components/footer/index.jsx";

export const LandingPage = () => {
    return <>
        <div className='max-md:flex-col max-md:items-center flex justify-between gap-32'>
            <div className='flex-1 flex items-center justify-center flex-col'>
                <h1 className='text-7xl font-bold'>iMagic</h1>
                <p className='my-8 font-medium opacity-80'>Create your instagram posts</p>
                <Link to='/dashboard' className='hover:opacity-70 font-semibold bg-[#109AF3] px-11 py-3 rounded-lg'>Get
                    Started</Link>
            </div>
            <div className='flex-1 w-[400px] h-[500px]'>
                <img src={hero} alt=""/>
            </div>
        </div>
        <Footer/>
    </>

}

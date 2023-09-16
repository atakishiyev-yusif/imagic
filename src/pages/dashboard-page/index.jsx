import {Link} from "react-router-dom";
import {useStore} from "../../store/index.jsx";

import illustration from '../../assets/illustration-1.svg'
import {Footer} from "../../components/footer/index.jsx";

export const DashboardPage = () => {
    const removePost = useStore(store => store.removePost)
    let posts = JSON.parse(localStorage.getItem('posts'));
    if (!posts) {
        posts = [];
    }
    return <div className='mt-4'>
        <div className='flex items-center justify-between my-1'>
            <h2 className='text-4xl font-semibold'>Dashboard</h2>
            <Link to='create-post'
                  className='hover:opacity-75 bg-[#0EA5E9] w-1/12 max-md:w-2/12 max-md:text-sm h-11 rounded-lg font-semibold flex items-center justify-center'>New</Link>
        </div>
        {
            posts.length === 0 && <div className='flex items-center justify-center flex-col'>
                <div className='w-2/6 h-4/12 max-md:w-5/6 max-md:h-6/12'>
                    <img src={illustration} alt='asdasdasda' className='max-w-full block bg-cover bg-no-repeat'/>
                </div>
                <p className='text-xl max-md:text-sm'>Click the "New" button to create your first template</p>
            </div>
        }
        <div className='mt-10 flex gap-12 flex-wrap max-md:justify-center'>
            {
                posts.map(item =>
                    <div className='relative w-[300px] h-[100px] bg-slate-800 rounded-lg p-2' key={item.id}>
                    <Link key={item.id} to={item.id}>
                        <h3 className='font-semibold text-2xl'>{item.text}</h3>
                        <p className='font-medium'>{item.username}</p>
                    </Link>
                        <a className='absolute bottom-2 right-2 ' href="" onClick={() => removePost(item.id)}>remove</a>
                    </div>
                )
            }
        </div>
        <div className='fixed bottom-4 flex items-end justify-end'>
            <Footer/>
        </div>
    </div>
}
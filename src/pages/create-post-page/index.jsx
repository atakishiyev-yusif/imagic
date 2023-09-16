import {Link} from "react-router-dom";
import {createRef, useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {useScreenshot} from 'use-react-screenshot';

import {useStore} from "../../store/index.jsx";

export const CreatePostPage = () => {
    const imgRef = createRef(null)
    const [image, takeScreenshot] = useScreenshot()
    const store = useStore(store => store.posts);
    const addPost = useStore(store => store.addPost);
    const [text, setText] = useState();
    const [description, setDescription] = useState();
    const [username, setUsername] = useState();
    const [download, setDownload] = useState(false);
    const [postBg, setPostBg] = useState();


    const handleSubmit = () => {
        console.log(store)
        addPost(uuidv4(), text, description, username)
        console.log('work')
        console.log(store)
    }


    const getImage = () => {
        handleSubmit();
        takeScreenshot(imgRef.current);
    }

    const handlePostBg = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', function () {
            setPostBg(this.result);
        })
        reader.readAsDataURL(file)
    }


    useEffect(() => {
        console.log('download', download);
    }, [download])

    useEffect(() => {
        console.log(image)
    }, [image])


    return <div className='flex gap-8 mt-12 max-md:flex-col'>
        <form className='flex-1 flex flex-col gap-8'>
            <input onChange={(e) => setText(e.target.value)} placeholder='Lorem ipsum dolor amet ...'
                   className='rounded-md bg-[#24273A] text-white h-12 p-2 w-full' type="text"/>
            <input onChange={(e) => setDescription(e.target.value)} placeholder='Description'
                   className='rounded-md bg-[#24273A] text-white h-12 p-2 w-full' type="text"/>
            <input onChange={(e) => setUsername(e.target.value)} placeholder='@johndoe'
                   className='rounded-md bg-[#24273A] text-white h-12 p-2 w-full' type="text"/>
            <input type="file" className='bg-transparent' onChange={handlePostBg}/>
            <div className='flex gap-2'>
                <input id='downloadCheckbox' type="checkbox" onChange={() => setDownload(!download)}/>
                <label htmlFor="downloadCheckbox">Create and download</label>
            </div>
            {download ?

                <a href={image} download='img.png' onClick={() => getImage()} /*to='/dashboard'*/
                      className='hover:opacity-75 bg-[#877732] w-[65%] p-4 h-11 rounded-lg font-semibold flex items-center justify-center'>Create
                    & Download</a>

                :


                <Link onClick={() => handleSubmit()} to='/dashboard'
                      className='hover:opacity-75 bg-[#0EA5E9] w-[40%] h-11 rounded-lg font-semibold flex items-center justify-center'>Create</Link>

            }
            {image &&
                <a className= 'hover:opacity-75 bg-green-600 w-[65%] p-4 h-11 rounded-lg font-semibold flex items-center justify-center' href={image} download='img.png'>Start Download</a>
            }
        </form>
        <div ref={imgRef}
             style={{'--post-img-url': `url(${postBg})`}}
             className={`flex-1 relative w-[400px] max-w-[400px] max-h-[400px] h-[400px] break-words rounded-md p-4 ${postBg ? 'bg-[image:var(--post-img-url)] bg-cover' : 'bg-blue-900'} `}>
            <h3 className='mt-6 text-3xl font-semibold'>{text}</h3>
            <p className= 'my-2'>{description}</p>
            <p className='absolute bottom-2 right-2'>{username}</p>
        </div>
    </div>
}
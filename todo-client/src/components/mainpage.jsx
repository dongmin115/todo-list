import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Todologic from './todologic'
import { useState } from 'react'


export default function Mainpage(){
    const [card,setCard] = useState("");

    const onClick= () => {
        
    }
    return (<>
    <div className="flex flex-col w-full h-full items-center">
        <div className="basis-1/4 text-black text-center text-2xl  font-normalfont-['Inter'] w-1/3 py-16">What to do today?</div>
        <div className="basis-4/6 bg-white rounded-[20px] shadow border border-stone-300 w-1/3 px-6 py-3">
            <Todologic/>
        </div>
        <div className="w-1/5 h-full left-0 top-0 bg-blue-400 rounded-m absolute">
            <div id="nav_title" className=" pl-5 pt-5">
                <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 448 512">
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </div>
        </div>
    </div>
    <div className="absolute top-1/2 right-[15%]">
        <button onClick={onClick}>
        <FontAwesomeIcon icon={ faArrowRight } style={{color: "#60a5fa",}} size='5x' beatFade/>
        </button>
    </div>
    </>)
}
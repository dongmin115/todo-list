import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Todologic from './todologic'
import { useState } from 'react'
import NavigationBar from './navigationbar';

export default function Mainpage(){

    let date = new Date();
    let today = date.getDate();                 //getDate()함수는 1부터 시작.
    let [day,setDay] = useState(today);
    const currentMonth = date.getMonth() + 1;   //getMonth()함수는 0부터 시작하여 1월이 0이기 때문에 1을 더해주어야 현재 달의 값이 된다.
    let [month,setMonth] = useState(currentMonth);

    const todoBox = document.getElementById('todoBox');

    const onClickNextBtn = () => {
        
        day += 1;

        if(day === 31){
            day = 1;
            month += 1;
        }
        if(month > 12){
            month = 1;
        } 
        
        todoBox.classList.add('animate-blink');
        setTimeout(()=>{
            todoBox.classList.remove('animate-blink');
            setMonth(month);
            setDay(day);
        }, 1000);

    }

    return (<>
    <div className="flex flex-col w-full h-full items-center">
        <div className="basis-1/4 text-black text-center text-2xl  font-normalfont-['Inter'] w-1/3 py-16">What to do today?</div>
        
        <div className="basis-4/6 bg-white rounded-[20px] shadow border border-stone-300 w-1/3 px-6 py-3" id='todoBox'>
            <p className='mt-2 text-lg'>{`${month}월 ${day}일`}</p>
            <Todologic/>
        </div>
        <NavigationBar/>
    </div>
    <div className="absolute top-1/2 right-[15%]">
        <button id='nextButton' onClick={onClickNextBtn}>
        <FontAwesomeIcon icon={ faArrowRight } style={{color: "#60a5fa",}} size='5x' beatFade/>
        </button>
    </div>
    </>)
}
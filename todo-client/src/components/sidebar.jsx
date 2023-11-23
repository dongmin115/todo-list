import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import DoneList from "./donelist";

export default function SideBar(props) {
   
    const [doneBtn,setDoneBtn] = useState(false);

    function ClickDoneBtn() {
        setDoneBtn(!doneBtn);        
    }

    return (
        <div className="w-1/5 h-full left-0 top-0 bg-blue-400 rounded-m absolute px-10 py-8">
            <h6 className="text-2xl font-bold">Menu</h6>
            <div id="Done_List" className="my-8 text-lg">
                <div id="Done_List_Title" className="flex justify-between cursor-pointer" onClick={ClickDoneBtn}>
                    <div className="flex-1 text-left">Completed</div>
                    <div className="flex-1 text-right">{doneBtn ? <FontAwesomeIcon icon={faArrowDown}/> : <FontAwesomeIcon icon={faArrowUp}/>}</div>
                </div>
                { doneBtn ? <DoneList todos={props.todos}/> : <></>}
            </div>
        </div>
    )
}
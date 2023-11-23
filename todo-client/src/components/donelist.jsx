export default function DoneList(props) {
    return (
        <div className="my-6 text-base">
            <ul>
                {props.todos.map((todo) => 
                {if(todo.done){
                    return (<li className="py-1 text-gray-800" key={todo.id}>{todo.title}</li>)
                }
                else return null;
                }                  
                )}
            </ul>
        </div>
    )
}
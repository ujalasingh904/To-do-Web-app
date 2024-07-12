import React from 'react'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";



const Tasklist = ({ todos, setTodos ,setEdit , setText ,setEditIndex }) => {

    const deletethis = (index, event) => {
        console.log(index);
        const newtodos = [...todos];
        newtodos.splice(index, 1);
        setTodos(newtodos);
    }

    const updateThings = (text,index)=>{
        setEdit(true)
        setText(text)
        setEditIndex(index)
    }

    return (
        <>
            <div className="first three    "> 
                <ul>
                    {todos.map((todo, index) => (
                        <li id={`list-${index}`} key={index} className="list">
                            {todo}
                            <div className='list-items'>
                                <input type="checkbox" className="check" />
                                <MdEdit className='icon' onClick={()=>updateThings(todo,index)}/>
                                <MdDelete fontSize={27} className="icon" id="del" onClick={(event) => deletethis(index, event)} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Tasklist
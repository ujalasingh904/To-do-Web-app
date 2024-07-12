import { useEffect, useState } from "react";
import Tasklist from "./Tasklist";

function Taskinput() {

    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);
    const [edit, setEdit] = useState(false);
    const [editIndex, setEditIndex] = useState(null);


    const makelist = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            setTodos([...todos, text]);
            setText('');
        }
        else {
            alert("Enter your todo's");
        }
    }

    const updateTodo = () => {
        // setTodos(todos.map((todo, index) => index === editIndex ? text : todo))
        todos[editIndex]=text;
        setEditIndex(null)
        setText('')
        setEdit(false) 
    }


    return (
        <>
            <div className="container">

                <div className="first one">
                    <h1>you can do it</h1>
                </div>

                <div className="first two">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="your todo's" />
                        <button id="btn" onClick={edit ? updateTodo : makelist}>{edit ? "update" : "just do it"}</button>

                    </form>
                    <h2><span>{new Date().toDateString()}</span></h2>
                </div>

                <Tasklist todos={todos} setTodos={setTodos} setEdit={setEdit} setText={setText} setEditIndex={setEditIndex} />
            </div>
        </>
    )
}
export default Taskinput;


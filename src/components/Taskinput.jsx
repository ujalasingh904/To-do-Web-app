import { useEffect, useState } from "react";  
import Tasklist from "./Tasklist";

function Taskinput() { 
    
    const [inputvalue, setInputvalue] = useState('');
    const [todos, setTodos] = useState([]); 

    const handleinputvalue = (e) => {
        setInputvalue(e.target.value);

    };
 
    const makelist = (event) => {
        event.preventDefault();
        if (inputvalue.trim() !== '') {
            setTodos([...todos, inputvalue]);
            setInputvalue('');
        }
        else {
            alert("Enter your todo's");
        }
    }
    
    


    return (
        <>
            <div className="container">

                <div className="first one">
                    <h1>you can do it</h1>
                </div>

                <div className="first two">
                    <form onSubmit={makelist}>
                        <input type="text" value={inputvalue} onChange={handleinputvalue}
                            placeholder="your todo's" />
                        <button id="btn" onClick={makelist}>just do it</button>
                    </form>
                    <h2><span>{new Date().toDateString()}</span></h2>
                </div>

                <Tasklist todos={todos} setTodos={setTodos}/>
            </div>
        </>
    )
}
export default Taskinput;


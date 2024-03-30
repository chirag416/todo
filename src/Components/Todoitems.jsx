import React, { useState,useEffect } from 'react'
import { useTodo } from '../contexts/todoContext'

// const Todoitems = ({todo}) => {
//     const [isTodoEditable, setIsTodoEditable] = useState(false)
//     const [todoMsg, setTodoMsg] = useState(todo.todo)
//     const {updateTodo, deleteTodo, toggleComplete} = useTodo()

//     const editTodo = () => {
//     updateTodo(todo.id, {...todo, todo: todoMsg})
//     setIsTodoEditable(false)
//   }
//   const toggleCompleted = () => {
//     // console.log(todo.id);
//     toggleComplete(todo.id)
//   }
//     return (
//         <div
//             className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
//                 todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
//             }`}
//         >
//             <input
//                 type="checkbox"
//                 className="cursor-pointer"
//                 checked={todo.completed}
//                 onChange={toggleCompleted}
//             />
//             <input
//                 type="text"
//                 className={`border outline-none w-full bg-transparent rounded-lg ${
//                     isTodoEditable ? "border-black/10 px-2" : "border-transparent"
//                 } ${todo.completed ? "line-through" : ""}`}
//                 value={todoMsg}
//                 onChange={(e) => setTodoMsg(e.target.value)}
//                 readOnly={!isTodoEditable}
//             />
//             {/* Edit, Save Button */}
//             <button
//                 className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
//                 onClick={() => {
//                     if (todo.completed) return;

//                     if (isTodoEditable) {
//                         editTodo();
//                     } else setIsTodoEditable((prev) => !prev);
//                 }}
//                 disabled={todo.completed}
//             >
//                 {isTodoEditable ? "📁" : "✏️"}
//             </button>
//             {/* Delete Todo Button */}
//             <button
//                 className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
//                 onClick={() => deleteTodo(todo.id)}
//             >
//                 ❌
//             </button>
//         </div>
//     );
// }

// export default Todoitems;


const Todoitems = ({todo}) => {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const {updateTodo, deleteTodo, toggleComplete} = useTodo();
    const [deleteButtonTooltip, setDeleteButtonTooltip] = useState("Delete");
    const [editButtonTooltip, setEditButtonTooltip] = useState("Edit");
    const saveButtonTooltip = "Save";

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg});
        setIsTodoEditable(false);
    };

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    };

    useEffect(() => {
        setDeleteButtonTooltip(todo.completed ? "Delete" : "Delete");
        setEditButtonTooltip(todo.completed ? "Cannot edit completed todo" : "Edit");
    }, [todo, isTodoEditable]);

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
                title={isTodoEditable ? saveButtonTooltip : editButtonTooltip} // Conditional tooltip
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
                title={deleteButtonTooltip}
            >
                ❌
            </button>
        </div>
    );
};

export default Todoitems;

import { TbMoodEmpty } from "react-icons/tb"
import TodoForm from "./TodoForm"
import { TodoItem } from "./TodoItem"

export const Todos = ({todos,toggleCompleted,toggleDelete,toggleAdd }) => {
 

  return (
    <div className="todoCompo">
      <TodoForm toggleAdd={toggleAdd}/>
      {todos.length ? todos.map((todo)=>(
        <>
        <TodoItem todo={todo} toggleDelete={toggleDelete} toggleCompleted={toggleCompleted}/>
        </>
      )) : <h1 style={{ width:'fit-content',display:'flex',alignItems:'center',gap:'10px',margin:'auto',fontSize:'50px',color:'blue' }}>Kosong <TbMoodEmpty/></h1>}
    </div>
  )
}
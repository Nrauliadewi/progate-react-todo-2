import { BiTrash } from "react-icons/bi"

export const TodoItem = ({todo,toggleCompleted,toggleDelete }) => {
 
  const styles = {
    checkbox: {
      marginRight: '10px',
      height: '30px',
      width: '30px',
      cursor: 'pointer',
    }
  }
  return (
    <div className="todoItem">
      <input onChange={()=>{toggleCompleted(todo.id)}}  type="checkbox" style={styles.checkbox}/>
      <p className={todo?.completed && `done`}>{todo?.title}</p>
      <BiTrash onClick={()=>{toggleDelete(todo.id)}}  style={{ fontSize:'30px',cursor:'pointer',color:'red' }}/>
    </div>
  )
}

import { useState } from "react"

function TodoForm({toggleAdd}) {
  const [title, setTitle] = useState('')
  const handleSubmit = (e) =>{
    e.preventDefault()
    toggleAdd(title)
    setTitle('')
  }
  return (
    <div style={{padding:'10px',marginBottom:'50px' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display:'flex',gap:'10px', alignItems:'center',justifyContent:'center' }}>
          <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="add you task here !" className="formTodo" />
          <button type="submit" className="btn-submit">Add</button>
        </div>
      </form>
    </div>
  )
}

export default TodoForm
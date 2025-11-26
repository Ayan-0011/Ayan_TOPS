import { useState } from "react";

const App = () => {

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const [task, setTask] = useState([]);


  const submithandle = (e) => {
    e.preventDefault()

    if (title.trim() === "") {
      alert("Please Write a Notes!");
      return;
    }
    if (detail.trim() === ""){
      alert("Please Write a Details!");
      return;
    }


    const copyTask = [...task]
    copyTask.push({ title, detail })
    setTask(copyTask)


    setTitle('')
    setDetail('')
  }

  const deletnotes = (id) => {

    const copyTask = [...task]
    copyTask.splice(id, 1)
    setTask(copyTask)


  }
  return (
    <><div className="main">

      <div className="notes">
        <form onSubmit={(e) => {
          submithandle(e)
        }}>

          <h2>Add Notes</h2>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Enter Notes Heading" value={title} onChange={(e) => {
              setTitle(e.target.value)
            }} />
          </div>


          <div className="mb-3" >
            <input type="text" className="form-control" placeholder="write deatil hear" value={detail} onChange={(e) => {
              setDetail(e.target.value)
            }} />
          </div>
          <button className="btn  btn-primary">Add note</button>
        </form>
      </div>

      <div className="data">
        <h2>Review Notes</h2>
        <div className="datas">

          {task.map(function (el, id) {
            return <div key={id} className="shownotes">
              <h4>{el.title}</h4>
              <p>{el.detail}</p>
              <button onClick={() => {
                deletnotes(id)
              }} className="delet btn bg-danger btn-outline">Delete Notes <i className="bi bi-x-circle-fill"></i></button>
            </div>
          })}

        </div>
      </div>
    </div>

    </>
  )
}

export default App

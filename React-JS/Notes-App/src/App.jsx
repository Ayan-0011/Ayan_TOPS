import { useState } from "react";

const App = () => {

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const [task, setTask] = useState([]);


  const submithandle = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({ title, detail })
    setTask(copyTask)
    console.log(copyTask);




    setTitle('')
    setDetail('')
  }
  return (
    <><div className="main">

      <div className="notes">
        <form onSubmit={(e) => {
          submithandle(e)
        }}>

          <h2>Add Notes</h2>
          <div className="mb-3">
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Notes Heading" value={title} onChange={(e) => {
              setTitle(e.target.value)
            }} />
          </div>


          <div className="mb-3" >
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="write deatil hear" value={detail} onChange={(e) => {
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
                <h3>{el.title}</h3>
                <p>{el.detail}</p>
                <button className="delet btn bg-danger btn-outline">Delete Notes <i class="bi bi-x-circle-fill"></i></button>
              </div>
            })}

        </div>
      </div>

    </div>

    </>
  )
}

export default App
